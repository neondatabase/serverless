/* 
Note: most config options can be set in 3 places:

* in a call to `neon`, 
* in a call to `transaction`, 
* or in the call to `sql` (i.e. the function returned by `neon`).

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
import type {
  HTTPQueryOptions,
  HTTPTransactionOptions,
  NeonQueryPromise,
  NeonQueryFunction,
  ParameterizedQuery,
  ProcessQueryResultOptions,
} from './httpTypes';

// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from 'pg/lib/utils';
// @ts-ignore -- this isn't officially exported by pg
import TypeOverrides from 'pg/lib/type-overrides';

function encodeBuffersAsBytea(value: unknown): unknown {
  // convert Buffer to bytea hex format: https://www.postgresql.org/docs/current/datatype-binary.html#DATATYPE-BINARY-BYTEA-HEX-FORMAT
  if (value instanceof Buffer) return '\\x' + toHex(value);
  return value;
}

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

export class SqlTemplate {
  constructor(
    public strings: ReadonlyArray<string>,
    public values: any[],
  ) {}

  compile(query = { query: '', params: [] as any[] }) {
    const { strings, values } = this;
    for (let i = 0, len = strings.length; i < len; i++) {
      query.query += strings[i];
      if (i < values.length) {
        const param = values[i];
        if (param instanceof SqlTemplate) {
          param.compile(query);
        } else {
          const { params } = query;
          const preparedParam = encodeBuffersAsBytea(prepareValue(param));
          params.push(preparedParam);
          query.query += '$' + params.length;
        }
      }
    }
    return query;
  }
}

/**
 * This function returns an async tagged-template function that runs a single
 * SQL query (no session or transactions) with low latency over https. Support
 * for multiple queries (as a non-interactive transaction) is provided by
 * the `transaction` property of the query function.
 *
 * By default, the query function returns database rows directly. Types should
 * match those returned by this driver (i.e. Pool or Client) over WebSockets.
 *
 * The returned function can also be called directly (i.e. not as a template
 * function). In that case, pass it a query string with embedded `$1`, `$2`
 * (etc.), followed by an array of query parameters, followed (optionally) by
 * any of the same options you can pass to this function.
 *
 * Some examples:
 * ```
 * import { neon } from "@neondatabase/serverless";
 * const h = "hello", w = "world";
 *
 * // example 1: default options, tagged-template usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 2: `arrayMode` and `fullResults` options, ordinary function usage
 * const options = { arrayMode: true, fullResults: true };
 * const sql = neon("postgres://user:pass@host/db", options);
 * const rows = await sql("SELECT $1 || ' ' || $2 AS greeting", [h, w]);
 * // -> {
 * //      command: "SELECT",
 * //      fields: [ { name: "greeting", dataTypeID: 25 } ],
 * //      rowAsArray: true,
 * //      rowCount: 1,
 * //      rows: [ [ "hello world" ] ]
 * //    }
 *
 * // example 3: `fetchOptions` option, ordinary function usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql(
 *   "SELECT $1 || ' ' || $2 AS greeting", [h, w],
 *   { fetchOptions: { priority: "high" } }
 * );
 * // -> [ { greeting: "hello world" } ]
 * ```
 *
 * @param connectionString - this has the format `postgres://user:pass@host/db`
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
    isolationLevel: neonOptIsolationLevel,
    readOnly: neonOptReadOnly,
    deferrable: neonOptDeferrable,
    authToken,
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
      'Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value',
    );
  }

  function templateFn(strings: TemplateStringsArray, ...params: any[]) {
    const calledAsTemplateFn =
      Array.isArray(strings) &&
      Array.isArray(strings.raw) &&
      Array.isArray(params);

    if (!calledAsTemplateFn) {
      throw new Error(
        'Must be called as a tagged-template function: sql`...`, not sql(`...`)',
      );
    }
    return createNeonQueryPromise(execute, new SqlTemplate(strings, params));
  }

  templateFn.query = (
    queryWithPlaceholders: string,
    params: any[],
    queryOpts?: HTTPQueryOptions<ArrayMode, FullResults>,
  ) =>
    createNeonQueryPromise(
      execute,
      new SqlTemplate([queryWithPlaceholders], params),
      queryOpts,
    );

  templateFn.unsafe = (rawSQL: string) => new SqlTemplate([rawSQL], []);

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
      if (queryPromise[Symbol.toStringTag] !== 'NeonQueryPromise')
        throw new Error(txnArgErrMsg);
    });

    const sqlTemplates = queryPromises.map(
      (queryPromise) => queryPromise.sqlTemplate,
    );
    const opts = queryPromises.map((queryPromise) => queryPromise.opts ?? {});
    return execute(sqlTemplates, opts, txnOpts);
  };

  // execute query
  async function execute(
    sqlTemplate: SqlTemplate | SqlTemplate[],
    allSqlOpts?:
      | HTTPQueryOptions<ArrayMode, FullResults>
      | HTTPQueryOptions<ArrayMode, FullResults>[],
    txnOpts?: HTTPTransactionOptions<ArrayMode, FullResults>,
  ) {
    const { fetchEndpoint, fetchFunction } = Socket;

    const bodyData = Array.isArray(sqlTemplate)
      ? { queries: sqlTemplate.map((t) => t.compile()) }
      : sqlTemplate.compile();

    // --- resolve options to transaction level ---

    let resolvedFetchOptions = neonOptFetchOptions ?? {};
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
    };

    // --- add auth token to headers ---
    const validAuthToken = await getAuthToken(resolvedAuthToken);
    if (validAuthToken) {
      headers['Authorization'] = `Bearer ${validAuthToken}`;
    }

    if (Array.isArray(sqlTemplate)) {
      // only send these headers for batch queries, where they matter
      if (resolvedIsolationLevel !== undefined)
        headers['Neon-Batch-Isolation-Level'] = resolvedIsolationLevel;
      if (resolvedReadOnly !== undefined)
        headers['Neon-Batch-Read-Only'] = String(resolvedReadOnly);
      if (resolvedDeferrable !== undefined)
        headers['Neon-Batch-Deferrable'] = String(resolvedDeferrable);
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
      const rawResults = (await response.json()) as any;

      if (Array.isArray(sqlTemplate)) {
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
        const dbError = new NeonDbError(json.message);
        for (const field of errorFields)
          dbError[field] = json[field] ?? undefined;
        throw dbError;
      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  }

  return templateFn as any; // actual type is specified in function signature above
}

function createNeonQueryPromise<
  ArrayMode extends boolean,
  FullResults extends boolean,
>(
  execute: (
    sqlTemplate: SqlTemplate,
    hqo?: HTTPQueryOptions<ArrayMode, FullResults>,
  ) => Promise<any>,
  sqlTemplate: SqlTemplate,
  opts?: HTTPQueryOptions<ArrayMode, FullResults>,
) {
  return {
    [Symbol.toStringTag]: 'NeonQueryPromise',
    sqlTemplate,
    opts,
    then: (resolve: any, reject: any) =>
      execute(sqlTemplate, opts).then(resolve, reject),
    catch: (reject: any) => execute(sqlTemplate, opts).catch(reject),
    finally: (finallyFn: any) => execute(sqlTemplate, opts).finally(finallyFn),
  } as NeonQueryPromise<ArrayMode, FullResults>;
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
