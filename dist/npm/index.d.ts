
// @neondatabase/serverless driver types, mimicking pg

export { DatabaseError } from "pg-protocol";
export {
  ClientConfig,
  ConnectionConfig,
  Defaults,
  PoolConfig,
  QueryConfig,
  CustomTypesConfig,
  Submittable,
  QueryArrayConfig,
  FieldDef,
  QueryResultBase,
  QueryResultRow,
  QueryResult,
  QueryArrayResult,
  Notification,
  ResultBuilder,
  QueryParse,
  BindConfig,
  ExecuteConfig,
  MessageConfig,
  Connection,
  Query,
  Events,
  types,
  defaults,
  native,
} from "pg";

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
  fetchEndpoint: string | ((host: string, port: number | string) => string);

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
   * **Experimentally**, when `fetchConnectionCache` is `true`, queries carried
   * via HTTP fetch make use of a connection cache on the server.
   * 
   * Default: `false`.
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
  ClientBase as PgClientBase,
  Client as PgClient,
  PoolClient as PgPoolClient,
  Pool as PgPool,
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

export interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
  // tagged-template function usage
  (strings: TemplateStringsArray, ...params: any[]):
    Promise<FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
  // ordinary function usage, with options overrides
  <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(
    strings: string,
    params?: any[],
    options?: {
      arrayMode?: ArrayModeOverride;
      fullResults?: FullResultsOverride;
      fetchOptions?: Record<string, any>;
    }):
    Promise<FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>>;
}

/**
 * This experimental function returns an async tagged-template function that
 * runs a single SQL query (no session or transactions) with low latency over
 * https. By default, it returns database rows directly. Types should match
 * those returned by this driver (i.e. Pool or Client) over WebSockets.
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
  options?: {
    arrayMode?: ArrayMode;
    fullResults?: FullResults;
    fetchOptions?: Record<string, any>;
  }
): NeonQueryFunction<ArrayMode, FullResults>;

