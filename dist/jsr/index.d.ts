import { Client as Client_2 } from 'pg';
import { ClientBase } from 'pg';
import { Connection } from 'pg';
import { DatabaseError } from 'pg';
import { defaults } from 'pg';
import { EventEmitter } from 'events';
import { Pool as Pool_2 } from 'pg';
import { Query } from 'pg';
import type * as subtls from 'subtls';
import { types } from 'pg';

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
export declare interface Client {
    connection: Connection & {
        stream: neonConfig;
        sendSCRAMClientFinalMessage: (response: any) => void;
        ssl: any;
    };
    _handleReadyForQuery: any;
    _handleAuthCleartextPassword: any;
    startup: any;
    getStartupConf: any;
    saslSession: any;
}

export declare class Client extends Client_2 {
    config: any;
    get neonConfig(): NeonConfigGlobalAndClient;
    constructor(config: any);
    connect(): Promise<void>;
    connect(callback: (err?: Error) => void): void;
    _handleAuthSASLContinue(msg: any): Promise<void>;
}

export { ClientBase }

export { Connection }

export { DatabaseError }

export { defaults }

declare interface FetchEndpointOptions {
    jwtAuth?: boolean;
}

declare interface HTTPQueryOptions {
    arrayMode?: boolean;
    fullResults?: boolean;
    fetchOptions?: Record<string, any>;
    types?: typeof types;
    queryCallback?: (query: ParameterizedQuery) => void;
    resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
    authToken?: string | (() => Promise<string> | string);
}

declare interface HTTPTransactionOptions extends HTTPQueryOptions {
    isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
    readOnly?: boolean;
    deferrable?: boolean;
}

export declare function neon(connectionString: string, { arrayMode: neonOptArrayMode, fullResults: neonOptFullResults, fetchOptions: neonOptFetchOptions, isolationLevel: neonOptIsolationLevel, readOnly: neonOptReadOnly, deferrable: neonOptDeferrable, queryCallback, resultCallback, authToken, }?: HTTPTransactionOptions): {
    (strings: TemplateStringsArray | string, ...params: any[]): NeonQueryPromise;
    transaction(queries: NeonQueryPromise[] | ((sql: (strings: TemplateStringsArray | string, ...params: any[]) => NeonQueryPromise) => NeonQueryPromise[]), txnOpts?: HTTPTransactionOptions): Promise<any>;
};

export declare class neonConfig extends EventEmitter {
    static defaults: SocketDefaults;
    static opts: Partial<SocketDefaults>;
    private opts;
    static get poolQueryViaFetch(): SocketDefaults["poolQueryViaFetch"];
    static set poolQueryViaFetch(newValue: SocketDefaults['poolQueryViaFetch']);
    static get fetchEndpoint(): SocketDefaults["fetchEndpoint"];
    static set fetchEndpoint(newValue: SocketDefaults['fetchEndpoint']);
    static get fetchConnectionCache(): SocketDefaults["fetchConnectionCache"];
    static set fetchConnectionCache(newValue: SocketDefaults['fetchConnectionCache']);
    static get fetchFunction(): SocketDefaults["fetchFunction"];
    static set fetchFunction(newValue: SocketDefaults['fetchFunction']);
    static get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    static set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
    get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
    static get wsProxy(): SocketDefaults["wsProxy"];
    static set wsProxy(newValue: SocketDefaults['wsProxy']);
    get wsProxy(): SocketDefaults["wsProxy"];
    set wsProxy(newValue: SocketDefaults['wsProxy']);
    static get coalesceWrites(): SocketDefaults["coalesceWrites"];
    static set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    get coalesceWrites(): SocketDefaults["coalesceWrites"];
    set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    static get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    static set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    static get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    static set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    static get disableSNI(): SocketDefaults["disableSNI"];
    static set disableSNI(newValue: SocketDefaults['disableSNI']);
    get disableSNI(): SocketDefaults["disableSNI"];
    set disableSNI(newValue: SocketDefaults['disableSNI']);
    static get pipelineConnect(): SocketDefaults["pipelineConnect"];
    static set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
    get pipelineConnect(): SocketDefaults["pipelineConnect"];
    set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
    static get subtls(): SocketDefaults["subtls"];
    static set subtls(newValue: SocketDefaults['subtls']);
    get subtls(): SocketDefaults["subtls"];
    set subtls(newValue: SocketDefaults['subtls']);
    static get pipelineTLS(): SocketDefaults["pipelineTLS"];
    static set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    get pipelineTLS(): SocketDefaults["pipelineTLS"];
    set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    static get rootCerts(): SocketDefaults["rootCerts"];
    static set rootCerts(newValue: SocketDefaults['rootCerts']);
    get rootCerts(): SocketDefaults["rootCerts"];
    set rootCerts(newValue: SocketDefaults['rootCerts']);
    wsProxyAddrForHost(host: string, port: number): string;
    connecting: boolean;
    pending: boolean;
    writable: boolean;
    encrypted: boolean;
    authorized: boolean;
    destroyed: boolean;
    private ws;
    private writeBuffer;
    private tlsState;
    private tlsRead;
    private tlsWrite;
    setNoDelay(): this;
    setKeepAlive(): this;
    ref(): this;
    unref(): this;
    connect(port: number | string, host: string, connectListener?: () => void): void;
    startTls(host: string): Promise<void>;
    tlsReadLoop(): Promise<void>;
    rawWrite(data: Uint8Array): void;
    write(data: Buffer | string, encoding?: string, callback?: (err?: any) => void): boolean;
    end(data?: Buffer | string, encoding?: string, callback?: () => void): this;
    destroy(): this;
}

declare interface NeonConfigGlobalAndClient {
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
    pipelineConnect: 'password' | false;
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

export declare class NeonDbError extends Error {
    name: "NeonDbError";
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
    constructor(message: string);
}

declare interface NeonQueryPromise<T = any> extends Promise<T> {
    parameterizedQuery: ParameterizedQuery;
    opts?: HTTPQueryOptions;
}

declare interface ParameterizedQuery {
    query: string;
    params: any[];
}

export declare class Pool extends Pool_2 {
    Client: typeof Client;
    hasFetchUnsupportedListeners: boolean;
    on(event: 'error' | 'connect' | 'acquire' | 'release' | 'remove', listener: any): this;
    query(config?: any, values?: any, cb?: any): any;
}

export { Query }

declare interface SocketDefaults {
    poolQueryViaFetch: boolean;
    fetchEndpoint: string | ((host: string, port: number | string, options?: FetchEndpointOptions) => string);
    fetchConnectionCache: boolean;
    fetchFunction: any;
    webSocketConstructor: typeof WebSocket | undefined;
    wsProxy: string | ((host: string, port: number | string) => string);
    useSecureWebSocket: boolean;
    forceDisablePgSSL: boolean;
    coalesceWrites: boolean;
    pipelineConnect: 'password' | false;
    subtls: typeof subtls | undefined;
    rootCerts: string;
    pipelineTLS: boolean;
    disableSNI: boolean;
}

export { types }

export { }
