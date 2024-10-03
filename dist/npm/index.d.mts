
// DON'T EDIT THIS FILE
// It's a simple automatic copy of index.d.ts


// @neondatabase/serverless driver types, mimicking pg

export {
  BindConfig, ClientConfig, Connection, ConnectionConfig, CustomTypesConfig, Defaults, defaults, Events, ExecuteConfig, FieldDef, MessageConfig, native, Notification, PoolConfig, Query, QueryArrayConfig, QueryArrayResult, QueryConfig, QueryParse, QueryResult, QueryResultBase,
  QueryResultRow, ResultBuilder, Submittable, types
} from "pg";
export { DatabaseError } from "pg-protocol";

interface FetchEndpointOptions {
  jwtAuth?: boolean;
}

export interface NeonConfigGlobalOnly {
  /**
   * Set `fetchEndpoint` to set the server endpoint to be sent queries via http
   * fetch. May be useful in local development (e.g. to set a port that's not
   * the default 443).
   * 
   * Provide either the full endpoint URL, or a function that takes the
   * database host address and port and returns the full endpoint URL
   * (including protocol).
   * 
   * Default: `host => 'https://' + host + '/sql'`
   * 
   */
  fetchEndpoint: string | ((host: string, port: number | string, options?: FetchEndpointOptions) => string);

  /**
   * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
   * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
   * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
   * fetch request.
   * 
   * Default: `false`.
   */
  poolQueryViaFetch: boolean;

  /**
   * **DEPRECATED**. Previously, only when `fetchConnectionCache` was `true`
   * did queries carried via HTTP fetch make use of a connection pool/cache
   * on the server. All queries now use the connection pool/cache: this setting
   * is ignored.
   * 
   * Default: `true`.
   */
  fetchConnectionCache: boolean;

  /**
   * The `fetchFunction` option allows you to supply an alternative function
   * for making http requests. The function must accept the same arguments as
   * native `fetch`.
   * 
   * Default: `undefined`.
   */
  fetchFunction: any;
}

export interface NeonConfigGlobalAndClient {
  /**
   * If no global `WebSocket` object is available, set `webSocketConstructor`
   * to the constructor for a custom WebSocket implementation, such as those
   * provided by `ws` or `undici`.
   */
  webSocketConstructor: any;

  /**
   * Set `wsProxy` to use your own WebSocket proxy server. 
   * 
   * Provide either the proxy server’s domain name, or a function that takes
   * the database host and port and returns the proxy server address (without
   * protocol).
   * 
   * Example: `(host, port) => "myproxy.example.net?address=" + host + ":" + port`
   * 
   * Default: `host => host + '/v2'`
  */
  wsProxy: string | ((host: string, port: number | string) => string) | undefined;

  /**
   * Use a secure (`wss:`) connection to the WebSocket proxy.
   * 
   * Default: `true`.
   */
  useSecureWebSocket: boolean;

  /**
   * Disable TLS encryption in the Postgres protocol (as set via e.g.
   * `?sslmode=require` in the connection string). Connection remains secure
   * if `useSecureWebSocket` is `true`.
   * 
   * Default: `true`
   */
  forceDisablePgSSL: boolean;

  /**
   * Pipelines the startup message, cleartext password message and first query
   * when set to `"password"`. This works only for cleartext password auth.
   * 
   * Default: `"password"`.
   */
  pipelineConnect: "password" | false;

  /**
   * If `forceDisablePgSSL` is `false` and the Postgres connection parameters
   * specify TLS, you must supply the subtls TLS library to this option:
   * 
   * ```
   * import { neonConfig } from '@neondatabase/serverless';
   * import * as subtls from 'subtls';
   * neonConfig.subtls = subtls;
   * ```
   * 
   * Default: `undefined`.
   */
  subtls: any;

  /**
   * Pipeline the pg SSL request and TLS handshake when `forceDisablePgSSL` is
   * `false` and the Postgres connection parameters specify TLS. Currently
   * compatible only with Neon hosts.
   * 
   * Default: `false`.
   */
  pipelineTLS: boolean;

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `forceDisablePgSSL` is `false` and the Postgres connection parameters
   * specify TLS.
   * 
   * Default: `""`.
   */
  rootCerts: string;

  /**
   * Batch multiple network writes per run-loop into a single outgoing
   * WebSocket message.
   * 
   * Default: `true`.
   */
  coalesceWrites: boolean;

  /**
   * When `disableSNI` is `true`, `forceDisablePgSSL` is `false` and the
   * Postgres connection parameters specify TLS, we send no SNI data in the
   * Postgres TLS handshake.
   * 
   * On Neon, disabling SNI and including the Neon project name in the password
   * avoids CPU-intensive SCRAM authentication, but this is only relevant for
   * earlier iterations of Neon's WebSocket support.
   * 
   * Default: `false`.
   */
  disableSNI: boolean;
}

export interface NeonConfig extends NeonConfigGlobalOnly, NeonConfigGlobalAndClient { }

import {
  Client as PgClient,
  ClientBase as PgClientBase,
  Pool as PgPool,
  PoolClient as PgPoolClient,
} from "pg";

export class ClientBase extends PgClientBase {
  neonConfig: NeonConfigGlobalAndClient;
}

export class Client extends PgClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export interface PoolClient extends PgPoolClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export class Pool extends PgPool {
  connect(): Promise<PoolClient>;
  connect(callback: (err: Error, client: PoolClient, done: (release?: any) => void) => void): void;
  on(event: 'error', listener: (err: Error, client: PoolClient) => void): this;
  on(event: 'connect' | 'acquire' | 'remove', listener: (client: PoolClient) => void): this;
}

export const neonConfig: NeonConfig;


// SQL-over-HTTP

import { FieldDef } from "pg";

export type QueryRows<ArrayMode extends boolean> =
  ArrayMode extends true ? any[][] : Record<string, any>[];

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
  fullResults?: FullResults;  // default false
  /**
   * Any options in `fetchOptions` are merged in to the options passed to
   * `fetch`. In case of conflict with what would otherwise be passed, these
   * options take precedence.
   */
  fetchOptions?: Record<string, any>;

  /** 
   * JWT auth token to be passed as the Bearer token in the Authorization header
   * 
   * Default: `undefined`
  */
  authToken?: string | (() => Promise<string> | string);
}

export interface HTTPTransactionOptions<ArrayMode extends boolean, FullResults extends boolean> extends HTTPQueryOptions<ArrayMode, FullResults> {
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

export interface NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any> extends Promise<T> {
  parameterizedQuery: ParameterizedQuery;
  opts?: HTTPQueryOptions<ArrayMode, FullResults>;
}

export interface NeonQueryInTransaction {
  // this is a simplified form of query, which has only a `parameterizedQuery` (no `opts` and not a `Promise`)
  parameterizedQuery: ParameterizedQuery;
}

export interface NeonQueryFunctionInTransaction<ArrayMode extends boolean, FullResults extends boolean> {
  // this is a simplified form of NeonQueryFunction (below):
  // * `opts` cannot be passed
  // * no `transaction()` method is available

  // tagged-template function usage
  (strings: TemplateStringsArray, ...params: any[]):
    NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;

  // ordinary function usage (*no* options overrides)
  (string: string, params?: any[]):
    NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
}

export interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
  // tagged-template function usage
  (strings: TemplateStringsArray, ...params: any[]):
    NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;

  // ordinary function usage, with options overrides
  <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(
    string: string,
    params?: any[],
    opts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>
  ): NeonQueryPromise<
    ArrayModeOverride,
    FullResultsOverride,
    FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>
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
   * @param queriesOrFn Either an array of queries, or a (non-`async`) function
   * that receives a query function and returns an array of queries.
   * @param opts The same options that may be set on individual queries in a
   * non-transaction setting -- that is, `arrayMode` `fullResults` and
   * `fetchOptions` -- plus the transaction options `isolationLevel`,
   * `readOnly` and `deferrable`. Note that none of these options can be set on
   * individual queries within a transaction.
   * @returns An array of results. The structure of each result object depends
   * on the `arrayMode` and `fullResults` options.
   */
  transaction: <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(
    queriesOrFn: NeonQueryPromise<ArrayMode, FullResults>[] |  // not ArrayModeOverride or FullResultsOverride: clamp these values to the current ones
      ((sql: NeonQueryFunctionInTransaction<ArrayModeOverride, FullResultsOverride>) => NeonQueryInTransaction[]),
    opts?: HTTPTransactionOptions<ArrayModeOverride, FullResultsOverride>
  ) => Promise<FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride>[] : QueryRows<ArrayModeOverride>[]>;
}

/**
 * This function returns an async tagged-template function that runs a single
 * SQL query (no session or transactions) with low latency over https. Support
 * for multiple queries as a non-interactive transaction is provided by
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
 * @param connectionString this has the format `postgres://user:pass@host/db`
 * @param options pass `arrayMode: true` to receive results as an array of 
 * arrays, instead of the default array of objects; pass `fullResults: true`
 * to receive a complete result object similar to one returned by node-postgres
 * (with properties `rows`, `fields`, `command`, `rowCount`, `rowAsArray`);
 * pass as `fetchOptions` an object which will be merged into the options
 * passed to `fetch`.
 */
export function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(
  connectionString: string,
  options?: HTTPTransactionOptions<ArrayMode, FullResults>,
): NeonQueryFunction<ArrayMode, FullResults>;

export class NeonDbError extends Error {
  name: 'NeonDbError';

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
}
