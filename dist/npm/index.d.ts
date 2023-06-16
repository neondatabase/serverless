
// @neondatabase/serverless driver types, mimicking pg

import { ClientBase as PgClientBase } from "pg";
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
  Pool,
  Client,
  PoolClient,
  Query,
  Events,
  types,
  defaults,
  native,
} from "pg";

export interface NeonConfig {
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
   * the database host address and port and returns the proxy server URL
   * (without protocol).
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
   * Pipeline pg SSL request and TLS handshake when `useSecureWebSocket` is
   * `false`. Currently compatible only with Neon hosts.
   * 
   * Default: `false`.
   */
  pipelineTLS: boolean;

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `useSecureWebSocket` is `false`.
   * 
   * Default: the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;

  /**
   * Batch multiple network writes per run-loop into one WebSocket message.
   * 
   * Default: `true`.
   */
  coalesceWrites: boolean;

  /**
   * When `disableSNI` is `true` and `useSecureWebSocket` is `false`, we send 
   * no SNI data in the TLS handshake.
   * 
   * On Neon, disabling SNI and including the Neon project name in the password
   * avoids CPU-intensive SCRAM authentication, but this is only relevant for
   * earlier iterations of Neon's WebSocket support.
   * 
   * Default: `false`.
   */
  disableSNI: boolean;

  /**
   * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
   * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
   * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
   * fetch request.
   * 
   * We are still investigating compatibility of this option.
   * 
   * Default: `false`.
   */
  poolQueryViaFetch: boolean;
}

export interface ClientBase extends PgClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig;


// experimental SQL-over-HTTP

type QueryRows<ArrayMode extends boolean> = 
  ArrayMode extends true ? any[][] : 
  Record<string, any>[];

interface BriefFieldDef {
  name: string;
  dataTypeID: number;
}

interface FullQueryResults<ArrayMode extends boolean> {
  fields: BriefFieldDef[];
  command: string;
  rowCount: number;
  rows: QueryRows<ArrayMode>;
  rowAsArray?: ArrayMode;
}

/**
 * This experimental function returns an async tagged-template function that
 * runs a single SQL query (no session or transactions) with low latency over
 * https. By default, it returns database rows directly. Types should match
 * those returned by this driver over WebSockets.
 * 
 * The returned function can also be called directly (i.e. not as a template 
 * function). In that case, pass a query string with embedded `$1`, `$2` (etc.)
 * followed by an array of query parameters.
 * 
 * For example:
 * ```
 * import { neon } from "@neondatabase/serverless";
 * const h = "hello", w = "world";
 * 
 * // default options, used as a tagged-template function
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;  
 * // -> [ { greeting: "hello world" } ]
 * 
 * // arrayMode and fullResults options, used as an ordinary function
 * const options = { arrayMode: true, fullResults: true };
 * const sqlFullArr = neon("postgres://user:pass@host/db", options);
 * const rows = await sqlFullArr("SELECT $1 || ' ' || $2 AS greeting", [h, w]);
 * // -> { 
 * //      command: "SELECT", 
 * //      fields: [ { name: "greeting", dataTypeID: 25 } ],
 * //      rowAsArray: true, 
 * //      rowCount: 1, 
 * //      rows: [ [ "hello world" ] ]
 * //    }
 * ```
 * 
 * @param connectionString this has the format `postgres://user:pass@host/db`
 * @param options pass `arrayMode: true` to receive results as an array of 
 * arrays, instead of the default array of objects; pass `fullResults: true`
 * to receive a complete result object similar to one returned by node-postgres
 * (with properties `rows`, `fields`, `command`, `rowCount`, `rowAsArray`).
 */
export function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(
  connectionString: string,
  options?: {
    arrayMode?: ArrayMode;
    fullResults?: FullResults;
  }
): (
  strings: TemplateStringsArray | string,
  ...params: any[]
) => Promise<FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;

