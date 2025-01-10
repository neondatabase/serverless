import { Client, Connection, Pool } from 'pg';
import { Socket } from '../shims/net';
import { neon, NeonDbError } from './httpQuery';
import type { QueryResultRow, Submittable, QueryArrayConfig, QueryConfigValues, QueryConfig, QueryArrayResult, QueryResult } from 'pg';
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
/**
 * The node-postgres `Client` object re-exported with minor modifications.
 * https://node-postgres.com/apis/client
 */
declare class NeonClient extends Client {
    config: any;
    get neonConfig(): Socket;
    constructor(config: any);
    connect(): Promise<void>;
    connect(callback: (err?: Error) => void): void;
    _handleAuthSASLContinue(msg: any): Promise<void>;
}
/**
 * The node-postgres `Pool` object re-exported with minor modifications.
 * https://node-postgres.com/apis/pool
 */
declare class NeonPool extends Pool {
    Client: typeof NeonClient;
    hasFetchUnsupportedListeners: boolean;
    on(event: 'error' | 'connect' | 'acquire' | 'release' | 'remove', listener: any): this;
    addListener: (event: "error" | "connect" | "acquire" | "release" | "remove", listener: any) => this;
    query<T extends Submittable>(queryStream: T): T;
    query<R extends any[] = any[], I = any[]>(queryConfig: QueryArrayConfig<I>, values?: QueryConfigValues<I>): Promise<QueryArrayResult<R>>;
    query<R extends QueryResultRow = any, I = any[]>(queryConfig: QueryConfig<I>): Promise<QueryResult<R>>;
    query<R extends QueryResultRow = any, I = any[]>(queryTextOrConfig: string | QueryConfig<I>, values?: QueryConfigValues<I>): Promise<QueryResult<R>>;
    query<R extends any[] = any[], I = any[]>(queryConfig: QueryArrayConfig<I>, callback: (err: Error, result: QueryArrayResult<R>) => void): void;
    query<R extends QueryResultRow = any, I = any[]>(queryTextOrConfig: string | QueryConfig<I>, callback: (err: Error, result: QueryResult<R>) => void): void;
    query<R extends QueryResultRow = any, I = any[]>(queryText: string, values: QueryConfigValues<I>, callback: (err: Error, result: QueryResult<R>) => void): void;
}
export { defaults, types } from 'pg';
export type { BindConfig, ClientConfig, Connection, ConnectionConfig, CustomTypesConfig, Defaults, Events, ExecuteConfig, FieldDef, MessageConfig, Notification, PoolConfig, Query, QueryArrayConfig, QueryArrayResult, QueryConfig, QueryParse, QueryResult, QueryResultBase, QueryResultRow, ResultBuilder, Submittable, } from 'pg';
export * from './httpQuery';
export { Socket as neonConfig, NeonPool as Pool, NeonClient as Client, neon, NeonDbError, };
export type { SocketDefaults, FetchEndpointOptions, WebSocketConstructor, WebSocketLike, subtls, } from '../shims/net';
declare const _bundleExt: 'js' | 'mjs';
export { _bundleExt };
