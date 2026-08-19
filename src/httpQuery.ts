/* 
Note: most config options can be set in 3 places:

* in a call to `neon`, 
* in a call to `transaction`, 
* or in a call to `sql.query` (where `sql` is the function returned by `neon`)

The option variables corresponding these levels are prefixed
`neonOpt`, `txnOpt` and `sqlOpt` respectively.

As you would expect, options at lower levels override higher levels. 
That is:

* `sql` options override `transaction` ones,
* `transaction` options override `neon` ones, and
* `neon` options override defaults.
*/

import { Socket } from './shims/net';
import { parse } from './shims/url';
import { toHex } from 'hextreme';
import { decodeMultiple } from 'cbor-x';
import type {
  HTTPQueryOptions,
  HTTPResponseFormat,
  HTTPTransactionOptions,
  NeonQueryFunction,
  ProcessQueryResultOptions,
  ParameterizedQuery,
} from './httpTypes';
import { SqlTemplate, UnsafeRawSql } from './sqlTemplate';
import { warnIfBrowser } from './utils';

import { Socket as neonConfig } from './shims/net';

// @ts-ignore -- this isn't officially exported by pg
import TypeOverrides from 'pg/lib/type-overrides';
// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from 'pg/lib/utils';

export class NeonDbError extends Error {
  override name = 'NeonDbError' as const;

  severity: string | undefined;
  code: string | undefined;
  detail: string | undefined;
  hint: string | undefined;
  position: string | undefined;
  internalPosition: string | undefined;
  internalQuery: string | undefined;
  where: string | undefined;
  schema: string | undefined;
  table: string | undefined;
  column: string | undefined;
  dataType: string | undefined;
  constraint: string | undefined;
  file: string | undefined;
  line: string | undefined;
  routine: string | undefined;

  sourceError: Error | undefined;

  constructor(message: string) {
    super(message);

    if (
      'captureStackTrace' in Error &&
      typeof Error.captureStackTrace === 'function'
    ) {
      Error.captureStackTrace(this, NeonDbError);
    }
  }
}

const txnArgErrMsg =
  'transaction() expects an array of queries, or a function returning an array of queries';

const errorFields = [
  'severity',
  'code',
  'detail',
  'hint',
  'position',
  'internalPosition',
  'internalQuery',
  'where',
  'schema',
  'table',
  'column',
  'dataType',
  'constraint',
  'file',
  'line',
  'routine',
] as const;

const responseFormatContentTypes: Record<HTTPResponseFormat, string> = {
  json: 'application/json',
  jsonl: 'application/vnd.neon.sql.v1+json',
  'cbor-seq': 'application/vnd.neon.sql.v1+cbor',
};

const ROW_MESSAGE = 0;
const COLUMNS_MESSAGE = 1;
const QUERY_MESSAGE = 2;

function dbError(error: any) {
  const result = new NeonDbError(error.message);
  for (const field of errorFields) result[field] = error[field] ?? undefined;
  return result;
}

function unexpectedStreamingMessage(): never {
  throw new NeonDbError(
    'Neon internal error: unexpected streamed response message',
  );
}

async function readStreamingResult(
  response: Response,
  responseFormat: Exclude<HTTPResponseFormat, 'json'>,
  batch: boolean,
) {
  const messages =
    responseFormat === 'jsonl'
      ? (await response.text())
          .split('\n')
          .filter((line) => line.length !== 0)
          .map((line) => JSON.parse(line))
      : (decodeMultiple(new Uint8Array(await response.arrayBuffer())) as any[]);

  const end = messages.at(-1);
  if (!Array.isArray(end) || (end[0] !== 3 && end[0] !== 4)) {
    throw new NeonDbError(
      'Neon internal error: streamed response ended without a terminal message',
    );
  }
  if (
    end[0] === 4 &&
    end.length === 2 &&
    end[1] !== null &&
    typeof end[1] === 'object'
  ) {
    throw dbError(end[1]);
  }
  if (end[0] !== 3 || end.length !== 1) {
    throw new NeonDbError(
      'Neon internal error: unexpected streamed response status',
    );
  }

  const results = [];
  let current: { fields: any[]; rows: any[] } | undefined;
  for (const message of messages.slice(0, -1)) {
    if (!Array.isArray(message)) {
      unexpectedStreamingMessage();
    }
    const [type, ...payload] = message;
    switch (type) {
      case COLUMNS_MESSAGE:
        if (current !== undefined) {
          unexpectedStreamingMessage();
        }
        current = { fields: payload, rows: [] };
        break;
      case ROW_MESSAGE:
        if (current === undefined) {
          unexpectedStreamingMessage();
        }
        current.rows.push(payload);
        break;
      case QUERY_MESSAGE:
        if (current === undefined || payload.length !== 2) {
          unexpectedStreamingMessage();
        }
        results.push({
          fields: current.fields,
          rows: current.rows,
          command: payload[0],
          rowCount: payload[1],
        });
        current = undefined;
        break;
      default:
        unexpectedStreamingMessage();
    }
  }

  if (current !== undefined || (!batch && results.length !== 1)) {
    throw new NeonDbError('Neon internal error: incomplete streamed response');
  }

  return batch ? { results } : results[0];
}

function encodeBuffersAsBytea(value: unknown): unknown {
  // convert Buffer to bytea hex format: https://www.postgresql.org/docs/current/datatype-binary.html#DATATYPE-BINARY-BYTEA-HEX-FORMAT
  if (value instanceof Buffer) return '\\x' + toHex(value);
  return value;
}

function prepareQuery(queryDatum: SqlTemplate | ParameterizedQuery) {
  const { query, params } =
    queryDatum instanceof SqlTemplate
      ? queryDatum.toParameterizedQuery()
      : queryDatum;
  return {
    query,
    params: params.map((param) => encodeBuffersAsBytea(prepareValue(param))),
  };
}

/**
 * Returns an async tagged-template function that runs a single SQL query (no
 * session or transactions) with low latency over https. Queries are
 * composable: they can be embedded inside each other.
 *
 * By default, the query function returns database rows directly. Types should
 * match those returned by this driver when using WebSockets (i.e. via `Pool`
 * or `Client`).
 *
 * The returned function has a `transaction()` function property, which
 * supports multiple queries run in a non-interactive transaction.
 *
 * It also has function properties `query()` and `unsafe()`.
 *
 * `query()` (like `client.query()` and `pool.query()`) takes a query string
 * with embedded `$1`, `$2` (etc.) placeholders, followed by an array of query
 * parameters, followed (optionally) by query options.
 *
 * `unsafe()` permits embedding arbitrary raw SQL strings, if you know they're
 * safe.
 *
 * Some examples:
 *
 * ```
 * import { neon } from "@neondatabase/serverless";
 * const h = "hello", w = "world";
 *
 * // example 1: default options, tagged-template usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 2: composability
 * const sql = neon("postgres://user:pass@host/db");
 * const helloWorld = sql`${h} || ' ' || ${w}`;
 * const rows = await sql`SELECT ${helloWorld} AS greeting`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 3: unsafe raw string interpolation
 * const sql = neon("postgres://user:pass@host/db");
 * const colName = 'greeting';
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS ${sql.unsafe(colName)}`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 4: `arrayMode` and `fullResults` options
 * const options = { arrayMode: true, fullResults: true };
 * const sql = neon("postgres://user:pass@host/db", options);
 * const result = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;
 * // -> {
 * //      command: "SELECT",
 * //      fields: [ { name: "greeting", dataTypeID: 25 } ],
 * //      rowAsArray: true,
 * //      rowCount: 1,
 * //      rows: [ [ "hello world" ] ]
 * //    }
 *
 * // example 5: `fetchOptions` option direct to `query()` function
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql.query(
 *   "SELECT $1 || ' ' || $2 AS greeting", [h, w],
 *   { fetchOptions: { priority: "high" } }
 * );
 * // -> [ { greeting: "hello world" } ]
 * ```
 *
 * @param connectionString - has the format `postgresql://user:pass@host/db`
 * @param options - pass `arrayMode: true` to receive results as an array of
 * arrays, instead of the default array of objects; pass `fullResults: true`
 * to receive a complete result object similar to one returned by node-postgres
 * (with properties `rows`, `fields`, `command`, `rowCount`, `rowAsArray`);
 * pass as `fetchOptions` an object which will be merged into the options
 * passed to `fetch`.
 */
export function neon<
  ArrayMode extends boolean = false,
  FullResults extends boolean = false,
>(
  connectionString: string,
  {
    arrayMode: neonOptArrayMode,
    fullResults: neonOptFullResults,
    fetchOptions: neonOptFetchOptions,
    responseFormat: neonOptResponseFormat,
    isolationLevel: neonOptIsolationLevel,
    readOnly: neonOptReadOnly,
    deferrable: neonOptDeferrable,
    authToken,
    disableWarningInBrowsers,
  }: HTTPTransactionOptions<ArrayMode, FullResults> = {},
): NeonQueryFunction<ArrayMode, FullResults> {
  // check the connection string

  if (!connectionString)
    throw new Error(
      'No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?',
    );

  let db;
  try {
    db = parse(connectionString);
  } catch {
    throw new Error(
      'Database connection string provided to `neon()` is not a valid URL. Connection string: ' +
        String(connectionString),
    );
  }

  const { protocol, username, hostname, port, pathname } = db;
  if (
    (protocol !== 'postgres:' && protocol !== 'postgresql:') ||
    !username ||
    !hostname ||
    !pathname
  ) {
    throw new Error(
      'Database connection string format for `neon()` should be: postgresql://user@host.tld/dbname?option=value',
    );
  }

  function templateFn(strings: TemplateStringsArray, ...params: any[]) {
    const calledAsTemplateFn =
      Array.isArray(strings) &&
      Array.isArray(strings.raw) &&
      Array.isArray(params);

    if (!calledAsTemplateFn) {
      throw new Error(
        'This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).',
      );
    }
    return new NeonQueryPromise(execute, new SqlTemplate(strings, params));
  }

  templateFn.query = (
    queryWithPlaceholders: string,
    params?: any[],
    queryOpts?: HTTPQueryOptions<ArrayMode, FullResults>,
  ) =>
    new NeonQueryPromise(
      execute,
      { query: queryWithPlaceholders, params: params ?? [] },
      queryOpts,
    );

  templateFn.unsafe = (rawSql: string) => new UnsafeRawSql(rawSql);

  templateFn.transaction = async (
    queryPromises:
      | NeonQueryPromise<ArrayMode, FullResults>[]
      | ((
          sql: typeof templateFn,
        ) => NeonQueryPromise<ArrayMode, FullResults>[]),
    txnOpts?: HTTPTransactionOptions<ArrayMode, FullResults>,
  ) => {
    if (typeof queryPromises === 'function')
      queryPromises = queryPromises(templateFn);

    if (!Array.isArray(queryPromises)) throw new Error(txnArgErrMsg);
    queryPromises.forEach((queryPromise) => {
      if (!(queryPromise instanceof NeonQueryPromise))
        throw new Error(txnArgErrMsg);
    });

    const queries = queryPromises.map((queryPromise) => queryPromise.queryData);
    const opts = queryPromises.map((queryPromise) => queryPromise.opts ?? {});
    return execute(queries, opts, txnOpts);
  };

  // execute query
  async function execute(
    queryData:
      | SqlTemplate
      | ParameterizedQuery
      | (SqlTemplate | ParameterizedQuery)[],
    allSqlOpts?:
      | HTTPQueryOptions<ArrayMode, FullResults>
      | HTTPQueryOptions<ArrayMode, FullResults>[],
    txnOpts?: HTTPTransactionOptions<ArrayMode, FullResults>,
  ) {
    const { fetchEndpoint, fetchFunction } = Socket;
    const isBatch = Array.isArray(queryData);

    const bodyData = isBatch
      ? { queries: queryData.map((queryDatum) => prepareQuery(queryDatum)) }
      : prepareQuery(queryData);

    // --- resolve options to transaction level ---

    let resolvedFetchOptions = neonOptFetchOptions ?? {};
    let resolvedResponseFormat = neonOptResponseFormat ?? 'json';
    let resolvedArrayMode = neonOptArrayMode ?? false;
    let resolvedFullResults = neonOptFullResults ?? false;
    let resolvedIsolationLevel = neonOptIsolationLevel; // default is undefined
    let resolvedReadOnly = neonOptReadOnly; // default is undefined
    let resolvedDeferrable = neonOptDeferrable; // default is undefined

    // batch query
    if (txnOpts !== undefined) {
      if (txnOpts.fetchOptions !== undefined)
        resolvedFetchOptions = {
          ...resolvedFetchOptions,
          ...txnOpts.fetchOptions,
        };
      if (txnOpts.arrayMode !== undefined)
        resolvedArrayMode = txnOpts.arrayMode;
      if (txnOpts.fullResults !== undefined)
        resolvedFullResults = txnOpts.fullResults;
      if (txnOpts.responseFormat !== undefined)
        resolvedResponseFormat = txnOpts.responseFormat;
      if (txnOpts.isolationLevel !== undefined)
        resolvedIsolationLevel = txnOpts.isolationLevel;
      if (txnOpts.readOnly !== undefined) resolvedReadOnly = txnOpts.readOnly;
      if (txnOpts.deferrable !== undefined)
        resolvedDeferrable = txnOpts.deferrable;
    }

    // single query -- cannot be true at same time as `txnOpts !== undefined` above
    if (
      allSqlOpts !== undefined &&
      !Array.isArray(allSqlOpts) &&
      allSqlOpts.fetchOptions !== undefined
    ) {
      resolvedFetchOptions = {
        ...resolvedFetchOptions,
        ...allSqlOpts.fetchOptions,
      };
    }
    if (
      allSqlOpts !== undefined &&
      !Array.isArray(allSqlOpts) &&
      allSqlOpts.responseFormat !== undefined
    ) {
      resolvedResponseFormat = allSqlOpts.responseFormat;
    }

    // --- resolve auth token usage ---
    let resolvedAuthToken = authToken;
    if (!Array.isArray(allSqlOpts) && allSqlOpts?.authToken !== undefined) {
      resolvedAuthToken = allSqlOpts.authToken;
    }

    // --- set up the URL ---
    const url =
      typeof fetchEndpoint === 'function'
        ? fetchEndpoint(hostname, port, {
            jwtAuth: resolvedAuthToken !== undefined,
          })
        : fetchEndpoint;

    // --- set headers ---
    const headers: Record<string, string> = {
      'Neon-Connection-String': connectionString,
      'Neon-Raw-Text-Output': 'true', // because we do our own parsing with node-postgres
      'Neon-Array-Mode': 'true', // this saves data and post-processing even if we return objects, not arrays
      Accept: responseFormatContentTypes[resolvedResponseFormat],
    };

    // --- add auth token to headers ---
    const validAuthToken = await getAuthToken(resolvedAuthToken);
    if (validAuthToken) {
      headers['Authorization'] = `Bearer ${validAuthToken}`;
    }

    if (isBatch) {
      // only send these headers for batch queries, where they matter
      if (resolvedIsolationLevel !== undefined)
        headers['Neon-Batch-Isolation-Level'] = resolvedIsolationLevel;
      if (resolvedReadOnly !== undefined)
        headers['Neon-Batch-Read-Only'] = String(resolvedReadOnly);
      if (resolvedDeferrable !== undefined)
        headers['Neon-Batch-Deferrable'] = String(resolvedDeferrable);
    }

    if (!(disableWarningInBrowsers || neonConfig.disableWarningInBrowsers)) {
      warnIfBrowser();
    }

    // --- run query ---

    let response;
    try {
      response = await (fetchFunction ?? fetch)(url, {
        method: 'POST',
        body: JSON.stringify(bodyData), // TODO: use json-custom-numbers to allow BigInts?
        headers,
        ...resolvedFetchOptions, // this is last, so it gets the final say
      });
    } catch (err: any) {
      const connectErr = new NeonDbError(
        `Error connecting to database: ${err}`,
      );
      connectErr.sourceError = err;
      throw connectErr;
    }

    if (response.ok) {
      const rawResults =
        resolvedResponseFormat === 'json'
          ? ((await response.json()) as any)
          : await readStreamingResult(
              response,
              resolvedResponseFormat,
              isBatch,
            );

      if (isBatch) {
        // batch query
        const resultArray = rawResults.results;
        if (!Array.isArray(resultArray))
          throw new NeonDbError(
            'Neon internal error: unexpected result format',
          );
        return resultArray.map((result, i) => {
          let sqlOpts =
            (allSqlOpts as HTTPQueryOptions<ArrayMode, FullResults>[])[i] ?? {};
          let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
          let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
          return processQueryResult(result, {
            arrayMode,
            fullResults,
            types: sqlOpts.types,
          });
        });
      } else {
        // single query
        let sqlOpts =
          (allSqlOpts as HTTPQueryOptions<ArrayMode, FullResults>) ?? {};
        let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
        let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
        return processQueryResult(rawResults, {
          arrayMode,
          fullResults,
          types: sqlOpts.types,
        });
      }
    } else {
      const { status } = response;
      if (status === 400) {
        const json = (await response.json()) as any;
        throw dbError(json);
      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  }

  return templateFn as any; // actual type is specified in function signature above
}

export interface NeonQueryPromise<
  ArrayMode extends boolean,
  FullResults extends boolean,
  T = any,
> extends Promise<T> {}

export class NeonQueryPromise<
  ArrayMode extends boolean,
  FullResults extends boolean,
  T = any,
> {
  constructor(
    public execute: (
      queryData:
        | SqlTemplate
        | ParameterizedQuery
        | (SqlTemplate | ParameterizedQuery)[],
      opts?:
        | HTTPQueryOptions<ArrayMode, FullResults>
        | HTTPQueryOptions<ArrayMode, FullResults>[],
    ) => Promise<T>,
    public queryData: SqlTemplate | ParameterizedQuery,
    public opts?: HTTPQueryOptions<ArrayMode, FullResults>,
  ) {}

  then<TResult1 = T, TResult2 = never>(
    resolve?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    reject?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Promise<TResult1 | TResult2> {
    return this.execute(this.queryData, this.opts).then(resolve, reject);
  }
  catch<TResult = never>(
    reject?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Promise<T | TResult> {
    return this.execute(this.queryData, this.opts).catch(reject);
  }
  finally(finallyFn?: (() => void) | undefined | null): Promise<T> {
    return this.execute(this.queryData, this.opts).finally(finallyFn);
  }
}

function processQueryResult(
  rawResults: any,
  { arrayMode, fullResults, types: customTypes }: ProcessQueryResultOptions,
) {
  const types = new TypeOverrides(customTypes);
  const colNames = rawResults.fields.map((field: any) => field.name);
  const parsers = rawResults.fields.map((field: any) =>
    types.getTypeParser(field.dataTypeID),
  );

  // now parse and possibly restructure the rows data like node-postgres does
  const rows =
    arrayMode === true
      ? // maintain array-of-arrays structure
        rawResults.rows.map((row: any) =>
          row.map((col: any, i: number) =>
            col === null ? null : parsers[i](col),
          ),
        )
      : // turn into an object
        rawResults.rows.map((row: any) => {
          return Object.fromEntries(
            row.map((col: any, i: number) => [
              colNames[i],
              col === null ? null : parsers[i](col),
            ]),
          );
        });

  if (fullResults) {
    rawResults.viaNeonFetch = true;
    rawResults.rowAsArray = arrayMode;
    rawResults.rows = rows;
    rawResults._parsers = parsers;
    rawResults._types = types;
    return rawResults;
  }

  return rows;
}

async function getAuthToken(
  authToken: HTTPQueryOptions<false, false>['authToken'],
) {
  if (typeof authToken === 'string') {
    return authToken;
  }

  if (typeof authToken === 'function') {
    try {
      return await Promise.resolve(authToken());
    } catch (err) {
      let authError = new NeonDbError('Error getting auth token.');
      if (err instanceof Error) {
        authError = new NeonDbError(`Error getting auth token: ${err.message}`);
      }
      throw authError;
    }
  }
}
