import { types as defaultTypes } from '.';
import { Socket } from './shims/net';
import { parse } from './shims/url';
import type { FieldDef, types as PgTypes } from 'pg';
import { toHex } from 'hextreme';

// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from 'pg/lib/utils';
// @ts-ignore -- this isn't officially exported by pg
import TypeOverrides from 'pg/lib/type-overrides';

function encodeBuffersAsBytea(value: unknown): unknown {
  if (value instanceof Buffer) {
    // convert Buffer to bytea hex format: https://www.postgresql.org/docs/current/datatype-binary.html#DATATYPE-BINARY-BYTEA-HEX-FORMAT
    return '\\x' + toHex(value);
  }
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

    if ('captureStackTrace' in Error && typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NeonDbError);
    }
  }
}

export type QueryRows<ArrayMode extends boolean> = ArrayMode extends true
  ? any[][]
  : Record<string, any>[];

export interface FullQueryResults<ArrayMode extends boolean> {
  fields: FieldDef[];
  command: string;
  rowCount: number;
  rows: QueryRows<ArrayMode>;
  rowAsArray: ArrayMode;
}

export interface ParameterizedQuery {
  query: string;
  params: any[];
}

export interface HTTPQueryOptions<ArrayMode extends boolean, FullResults extends boolean> {
  /**
   * When `arrayMode` is `false`, which is the default, result rows are
   * returned as objects whose keys represent column names, such as
   * `{ id: 1 }`).
   *
   * When `arrayMode` is `true`, rows are returned as arrays (and keys are not
   * provided), e.g. `[1]`.
   */
  arrayMode?: ArrayMode;

  /**
   * When `fullResults` is `false`, which is the default, only result rows are
   * returned, e.g. `[{ id: 1 }]`).
   *
   * When `fullResults` is `true`, a result object is returned that matches
   * what's returned by node-postgres. This has a `rows` property, which is an
   * array of result rows, plus `fields`, which provides column names and
   * types, `command` and `rowCount`.
   */
  fullResults?: FullResults; // default false

  /**
   * Any options in `fetchOptions` are merged in to the options passed to
   * `fetch`. In case of conflict with what would otherwise be passed, these
   * options take precedence.
   */
  fetchOptions?: Record<string, any>;

  /**
   * JWT auth token to be passed as the Bearer token in the Authorization header.
   * Can be string, or a function (sync or async) returning a string.
   *
   * Default: `undefined`
   */
  authToken?: string | (() => Promise<string> | string);

  /**
   * Custom type parsers. See https://github.com/brianc/node-pg-types.
   */
  types?: typeof PgTypes;

  queryCallback?: (query: ParameterizedQuery) => void;

  resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
}

export interface HTTPTransactionOptions<ArrayMode extends boolean, FullResults extends boolean>
  extends HTTPQueryOptions<ArrayMode, FullResults> {
  /**
   * Postgres transaction isolation level: see https://www.postgresql.org/docs/current/transaction-iso.html.
   * Note that `ReadUncommitted` actually gets you `ReadCommitted` in Postgres.
   * */
  isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';

  /**
   * When `readOnly` is `false`, which is the default, a `READ WRITE` Postgres
   * transaction is used.
   *
   * When `readOnly` is `true`, a `READ ONLY` Postgres transaction is used.
   * */
  readOnly?: boolean;

  /**
   * When `deferrable` is `false`, which is the default, a `NOT DEFERRABLE`
   * Postgres transaction is used.
   *
   * When `deferrable` is `true` (and `isolationLevel` is `Serializable` and
   * `readOnly` is `true`), a `DEFERRABLE` Postgres transaction is used.
   * */
  deferrable?: boolean;
}

export interface NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any>
  extends Promise<T> {
  parameterizedQuery: ParameterizedQuery;
  opts?: HTTPQueryOptions<ArrayMode, FullResults>;
}

export interface ProcessQueryResultOptions {
  arrayMode: boolean;
  fullResults: boolean;
  parameterizedQuery: ParameterizedQuery;
  resultCallback: HTTPQueryOptions<false, false>['resultCallback'];
  types?: typeof defaultTypes;
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

export interface NeonQueryFunctionInTransaction<
  ArrayMode extends boolean,
  FullResults extends boolean,
> {
  // this is a simplified form of NeonQueryFunction (below):
  // * `opts` cannot be passed
  // * no `transaction()` method is available

  // tagged-template function usage
  (
    strings: TemplateStringsArray,
    ...params: any[]
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>
  >;

  // ordinary function usage (*no* options overrides)
  (
    string: string,
    params?: any[],
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>
  >;
}

export interface NeonQueryInTransaction {
  // this is a simplified form of query, which has only a `parameterizedQuery` (no `opts` and not a `Promise`)
  parameterizedQuery: ParameterizedQuery;
}

export interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
  // tagged-template function usage
  (
    strings: TemplateStringsArray,
    ...params: any[]
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>
  >;

  // ordinary function usage, with options overrides
  <
    ArrayModeOverride extends boolean = ArrayMode,
    FullResultsOverride extends boolean = FullResults,
  >(
    string: string,
    params?: any[],
    opts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>,
  ): NeonQueryPromise<
    ArrayModeOverride,
    FullResultsOverride,
    FullResultsOverride extends true
      ? FullQueryResults<ArrayModeOverride>
      : QueryRows<ArrayModeOverride>
  >;

  /**
   * The `transaction()` function allows multiple queries to be submitted (over
   * HTTP) as a single, non-interactive Postgres transaction.
   *
   * For example:
   * ```
   * import { neon } from "@neondatabase/serverless";
   * const sql = neon("postgres://user:pass@host/db");
   *
   * const results = await sql.transaction([
   *   sql`SELECT 1 AS num`,
   *   sql`SELECT 'a' AS str`,
   * ]);
   * // -> [[{ num: 1 }], [{ str: "a" }]]
   *
   * // or equivalently:
   * const results = await sql.transaction(txn => [
   *   txn`SELECT 1 AS num`,
   *   txn`SELECT 'a' AS str`,
   * ]);
   * // -> [[{ num: 1 }], [{ str: "a" }]]
   * ```
   * @param queriesOrFn - Either an array of queries, or a (non-`async`) function
   * that receives a query function and returns an array of queries.
   * @param opts - The same options that may be set on individual queries in a
   * non-transaction setting -- that is, `arrayMode` `fullResults` and
   * `fetchOptions` -- plus the transaction options `isolationLevel`,
   * `readOnly` and `deferrable`. Note that none of these options can be set on
   * individual queries within a transaction.
   * @returns An array of results. The structure of each result object depends
   * on the `arrayMode` and `fullResults` options.
   */
  transaction: <
    ArrayModeOverride extends boolean = ArrayMode,
    FullResultsOverride extends boolean = FullResults,
  >(
    queriesOrFn:
      | NeonQueryPromise<ArrayMode, FullResults>[] // not ArrayModeOverride or FullResultsOverride: clamp these values to the current ones
      | ((
          sql: NeonQueryFunctionInTransaction<ArrayModeOverride, FullResultsOverride>,
        ) => NeonQueryInTransaction[]),
    opts?: HTTPTransactionOptions<ArrayModeOverride, FullResultsOverride>,
  ) => Promise<
    FullResultsOverride extends true
      ? FullQueryResults<ArrayModeOverride>[]
      : QueryRows<ArrayModeOverride>[]
  >;
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
export function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(
  connectionString: string,
  {
    arrayMode: neonOptArrayMode,
    fullResults: neonOptFullResults,
    fetchOptions: neonOptFetchOptions,
    isolationLevel: neonOptIsolationLevel,
    readOnly: neonOptReadOnly,
    deferrable: neonOptDeferrable,
    queryCallback,
    resultCallback,
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

  // resolve query, params and opts
  function resolve(strings: TemplateStringsArray | string, ...params: any[]) {
    let query;
    let queryOpts: HTTPQueryOptions<ArrayMode, FullResults> | undefined;

    if (typeof strings === 'string') {
      // ordinary (non tagged-template) usage
      query = strings;

      // options passed here override options passed to neon
      queryOpts = params[1]; // the third argument, which is the second of the ...rest arguments
      params = params[0] ?? []; // the second argument, which is the first of the ...rest arguments
    } else {
      // tagged-template usage
      query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += '$' + (i + 1);
      }
    }

    // prepare the query params to make timezones and array types consistent with ordinary node-postgres/pg
    params = params.map((param) => encodeBuffersAsBytea(prepareValue(param)));

    const parameterizedQuery = { query, params };
    if (queryCallback) queryCallback(parameterizedQuery);

    return createNeonQueryPromise(execute, parameterizedQuery, queryOpts);
  }

  resolve.transaction = async (
    queries:
      | NeonQueryPromise<ArrayMode, FullResults>[]
      | ((
          sql: (
            strings: TemplateStringsArray | string,
            ...params: any[]
          ) => NeonQueryPromise<ArrayMode, FullResults>,
        ) => NeonQueryPromise<ArrayMode, FullResults>[]),
    txnOpts?: HTTPTransactionOptions<ArrayMode, FullResults>,
  ) => {
    if (typeof queries === 'function') queries = queries(resolve);

    if (!Array.isArray(queries)) throw new Error(txnArgErrMsg);
    queries.forEach((query) => {
      if (query[Symbol.toStringTag] !== 'NeonQueryPromise') throw new Error(txnArgErrMsg);
    });

    const parameterizedQueries = queries.map(
      (query) => (query as NeonQueryPromise<ArrayMode, FullResults>).parameterizedQuery,
    );
    const opts = queries.map(
      (query) => (query as NeonQueryPromise<ArrayMode, FullResults>).opts ?? {},
    );
    return execute(parameterizedQueries, opts, txnOpts);
  };

  // execute query
  async function execute(
    parameterizedQuery: ParameterizedQuery | ParameterizedQuery[],
    allSqlOpts?:
      | HTTPQueryOptions<ArrayMode, FullResults>
      | HTTPQueryOptions<ArrayMode, FullResults>[],
    txnOpts?: HTTPTransactionOptions<ArrayMode, FullResults>,
  ) {
    const { fetchEndpoint, fetchFunction } = Socket;

    const bodyData = Array.isArray(parameterizedQuery)
      ? { queries: parameterizedQuery }
      : parameterizedQuery;

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
      if (txnOpts.arrayMode !== undefined) resolvedArrayMode = txnOpts.arrayMode;
      if (txnOpts.fullResults !== undefined) resolvedFullResults = txnOpts.fullResults;
      if (txnOpts.isolationLevel !== undefined) resolvedIsolationLevel = txnOpts.isolationLevel;
      if (txnOpts.readOnly !== undefined) resolvedReadOnly = txnOpts.readOnly;
      if (txnOpts.deferrable !== undefined) resolvedDeferrable = txnOpts.deferrable;
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

    if (Array.isArray(parameterizedQuery)) {
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
      const connectErr = new NeonDbError(`Error connecting to database: ${err}`);
      connectErr.sourceError = err;
      throw connectErr;
    }

    if (response.ok) {
      const rawResults = (await response.json()) as any;

      if (Array.isArray(parameterizedQuery)) {
        // batch query
        const resultArray = rawResults.results;
        if (!Array.isArray(resultArray))
          throw new NeonDbError('Neon internal error: unexpected result format');
        return resultArray.map((result, i) => {
          let sqlOpts = (allSqlOpts as HTTPQueryOptions<ArrayMode, FullResults>[])[i] ?? {};
          let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
          let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
          return processQueryResult(result, {
            arrayMode,
            fullResults,
            parameterizedQuery: parameterizedQuery[i],
            resultCallback,
            types: sqlOpts.types,
          });
        });
      } else {
        // single query
        let sqlOpts = (allSqlOpts as HTTPQueryOptions<ArrayMode, FullResults>) ?? {};
        let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
        let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
        return processQueryResult(rawResults, {
          arrayMode,
          fullResults,
          parameterizedQuery,
          resultCallback,
          types: sqlOpts.types,
        });
      }
    } else {
      const { status } = response;
      if (status === 400) {
        const json = (await response.json()) as any;
        const dbError = new NeonDbError(json.message);
        for (const field of errorFields) dbError[field] = json[field] ?? undefined;
        throw dbError;
      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  }

  return resolve as any;
}

function createNeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean>(
  execute: (pq: ParameterizedQuery, hqo?: HTTPQueryOptions<ArrayMode, FullResults>) => Promise<any>,
  parameterizedQuery: ParameterizedQuery,
  opts?: HTTPQueryOptions<ArrayMode, FullResults>,
) {
  return {
    [Symbol.toStringTag]: 'NeonQueryPromise',
    parameterizedQuery,
    opts,
    then: (resolve: any, reject: any) => execute(parameterizedQuery, opts).then(resolve, reject),
    catch: (reject: any) => execute(parameterizedQuery, opts).catch(reject),
    finally: (finallyFn: any) => execute(parameterizedQuery, opts).finally(finallyFn),
  } as NeonQueryPromise<ArrayMode, FullResults>;
}

function processQueryResult(
  rawResults: any,
  {
    arrayMode,
    fullResults,
    parameterizedQuery,
    resultCallback,
    types: customTypes,
  }: ProcessQueryResultOptions,
) {
  const types = new TypeOverrides(customTypes);
  const colNames = rawResults.fields.map((field: any) => field.name);
  const parsers = rawResults.fields.map((field: any) => types.getTypeParser(field.dataTypeID));

  // now parse and possibly restructure the rows data like node-postgres does
  const rows =
    arrayMode === true
      ? // maintain array-of-arrays structure
        rawResults.rows.map((row: any) =>
          row.map((col: any, i: number) => (col === null ? null : parsers[i](col))),
        )
      : // turn into an object
        rawResults.rows.map((row: any) => {
          return Object.fromEntries(
            row.map((col: any, i: number) => [colNames[i], col === null ? null : parsers[i](col)]),
          );
        });

  if (resultCallback)
    resultCallback(parameterizedQuery, rawResults, rows, {
      arrayMode,
      fullResults,
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

async function getAuthToken(authToken: HTTPQueryOptions<false, false>['authToken']) {
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
