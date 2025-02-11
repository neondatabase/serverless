/*
We export the pg library mostly unchanged, but we do make a few tweaks.

(1) Connecting and querying can require a lot of network round-trips. We
add a pipelining option for the connection (startup + auth + first query),
but this works with cleartext password auth only. We can also pipeline TLS
startup, but currently this works only with Neon hosts (not vanilla pg or
pgbouncer).

(2) SCRAM auth is deliberately CPU-intensive, and this is not appropriate
for a serverless environment. In case it is still used, however, we replace
the standard (synchronous) pg implementation with one that uses SubtleCrypto
for repeated SHA-256 digests. This saves some time and CPU.

(3) We now (experimentally) redirect Pool.query over a fetch request if the
circumstances are right.
*/

import type {
  ClientBase as PgClientBase,
  PoolClient as PgPoolClient,
} from 'pg';
import { type SocketDefaults } from './shims/net';

export * from './httpQuery';
export type * from './httpTypes';

export { NeonPool as Pool } from './pool';
export { NeonClient as Client } from './client';

export { Socket as neonConfig } from './shims/net';
export type {
  SocketDefaults as NeonConfig,
  FetchEndpointOptions,
  WebSocketConstructor,
  WebSocketLike,
  subtls,
  startTls,
  TrustedCert,
  WebSocketReadQueue,
} from './shims/net';

// class 'ClientBase' exists only in @types/pg: under the hood in pg it's just a `Client extends EventEmitter`
export interface ClientBase extends PgClientBase {
  neonConfig: NeonConfigGlobalAndClient;
}

// class 'PoolClient' exists only in @types/pg: under the hood in pg it's just a `Client extends EventEmitter`
export interface PoolClient extends PgPoolClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export { defaults, types, DatabaseError } from 'pg';

export type {
  BindConfig,
  ClientConfig,
  Connection,
  ConnectionConfig,
  CustomTypesConfig,
  Defaults,
  Events,
  ExecuteConfig,
  FieldDef,
  MessageConfig,
  Notification,
  PoolConfig,
  Query,
  QueryArrayConfig,
  QueryArrayResult,
  QueryConfig,
  QueryParse,
  QueryResult,
  QueryResultBase,
  QueryResultRow,
  ResultBuilder,
  Submittable,
} from 'pg';

// provided for backwards-compatibility
export type NeonConfigGlobalOnly = Pick<
  SocketDefaults,
  | 'fetchEndpoint'
  | 'poolQueryViaFetch'
  | 'fetchConnectionCache'
  | 'fetchFunction'
>;

// provided for backwards-compatibility
export type NeonConfigGlobalAndClient = Omit<
  SocketDefaults,
  keyof NeonConfigGlobalOnly
>;

// for debugging purposes, this gets defined by esbuild, so users can track
// whether they've imported .js (CJS) or .mjs (ESM) or (uh-oh) both
// @ts-ignore
const _bundleExt: 'js' | 'mjs' = BUNDLE_EXT;
export { _bundleExt };
