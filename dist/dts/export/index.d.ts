import { Client, Connection, Pool } from 'pg';
import { Socket } from '../shims/net';
import { neon, NeonDbError } from './httpQuery';
import type { NeonConfigGlobalAndClient } from './neonConfig';
/**
 * We export the pg library mostly unchanged, but we do make a few tweaks.
 *
 * (1) Connecting and querying can require a lot of network round-trips. We
 * add a pipelining option for the connection (startup + auth + first query),
 * but this works with cleartext password auth only. We can also pipeline TLS
 * startup, but currently this works only with Neon hosts (not vanilla pg or
 * pgbouncer).
 *
 * (2) SCRAM auth is deliberately CPU-intensive, and this is not appropriate
 * for a serverless environment. In case it is still used, however, we replace
 * the standard (synchronous) pg implementation with one that uses SubtleCrypto
 * for repeated SHA-256 digests. This saves some time and CPU.
 *
 * (3) We now (experimentally) redirect Pool.query over a fetch request if the
 * circumstances are right.
 */
declare interface NeonClient {
    connection: Connection & {
        stream: Socket;
        sendSCRAMClientFinalMessage: (response: any) => void;
        ssl: any;
    };
    _handleReadyForQuery: any;
    _handleAuthCleartextPassword: any;
    startup: any;
    getStartupConf: any;
    saslSession: any;
}
declare class NeonClient extends Client {
    config: any;
    get neonConfig(): NeonConfigGlobalAndClient;
    constructor(config: any);
    connect(): Promise<void>;
    connect(callback: (err?: Error) => void): void;
    _handleAuthSASLContinue(msg: any): Promise<void>;
}
declare class NeonPool extends Pool {
    Client: typeof NeonClient;
    hasFetchUnsupportedListeners: boolean;
    on(event: 'error' | 'connect' | 'acquire' | 'release' | 'remove', listener: any): this;
    addListener: (event: "error" | "connect" | "acquire" | "release" | "remove", listener: any) => this;
    query(config?: any, values?: any, cb?: any): any;
}
export { Socket as neonConfig, NeonPool as Pool, NeonClient as Client, neon, NeonDbError, };
export { Connection, DatabaseError, Query, ClientBase, defaults, types, } from 'pg';
