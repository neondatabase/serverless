
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
   * Set `webSocketConstructor` to the constructor for a custom WebSocket
   * implementation. You might use this if, for example, you're using Node.js
   * in a WebContainer and have imported a third-party WebSocket library.
   */
  webSocketConstructor: any;

  /**
   * Set `wsProxy` to use your own WebSocket proxy server. 
   * Provide either the proxy server’s domain name, or a function that takes
   * the database host address and port and returns the proxy server URL
   * (without protocol).
   * Example: (host, port) => `myproxy.example.net?address=${host}:${port}`
   * Default: Neon’s proxy for Neon hosts, `undefined` otherwise.
  */
  wsProxy: string | ((host: string, port: number | string) => string) | undefined;

  /**
   * Use a secure (`wss:`) connection to the WebSocket proxy. 
   * Default: `true`.
   */
  useSecureWebSocket: boolean;

  /**
   * Pipelines the startup message, cleartext password message and first query
   * when set to `"password"`. This works only for cleartext password auth.
   * Default: `"password"` for Neon hosts, `false` otherwise.
   */
  pipelineConnect: "password" | false;

  /**
   * Pipeline pg SSL request and TLS handshake when `useSecureWebSocket` is
   * `false`. Currently compatible only with Neon hosts.
   * Default: `true` for Neon hosts, `false` otherwise.
   */
  pipelineTLS: boolean;

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `useSecureWebSocket` is `false`.
   * Default: the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;

  /**
   * Batch multiple network writes per run-loop into one WebSocket message.
   * Default: `true`.
   */
  coalesceWrites: boolean;

  /**
   * When `disableSNI` is `true` and `useSecureWebSocket` is `false` we send no
   * SNI data in the TLS handshake. On Neon, disabling SNI and including the
   * Neon project name in the password avoids CPU-intensive SCRAM
   * authentication, but this is only relevant for earlier iterations of Neon 
   * WebSocket support.
   * Default: `false`.
   */
  disableSNI: boolean;
}
export interface ClientBase extends PgClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig;


// experimental SQL-over-HTTP

type SQLParam = null | boolean | number | string | Date | SQLObject | SQLArray;
type SQLObject = { [k: string]: SQLParam };
type SQLArray = SQLParam[];

/**
 * This experimental function returns an async tagged-template function that
 * runs a single SQL query (no session or transactions) with low latency over
 * http. Returns database rows directly. Types should match those returned by
 * node-postgres (`pg`), but some complex or array types are not yet returned
 * correctly.
 * 
 * For example:
 * ```
 * import db from "@neondatabase/serverless";
 * const sql = db("postgres://user:pass@host/db");
 * const h = "hello ", w = "world";
 * const rows = await sql`SELECT ${h} || ${w} AS greeting`;  
 * // -> [ { greeting: "hello world" } ]
 * ```
 * 
 * @param connectionString this has the format `postgres://user:pass@host/db`
 */
export default function db(connectionString: string): (strings: TemplateStringsArray, ...params: SQLParam[]) => Promise<any[]>;


