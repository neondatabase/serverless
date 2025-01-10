/// <reference types="node" />

import { BindConfig } from 'pg';
import { Client as Client_2 } from 'pg';
import { ClientConfig } from 'pg';
import { Connection } from 'pg';
import { ConnectionConfig } from 'pg';
import { CustomTypesConfig } from 'pg';
import { Defaults } from 'pg';
import { defaults } from 'pg';
import { EventEmitter } from 'events';
import { Events } from 'pg';
import { ExecuteConfig } from 'pg';
import { FieldDef } from 'pg';
import { MessageConfig } from 'pg';
import { Notification } from 'pg';
import { Pool as Pool_2 } from 'pg';
import { PoolConfig } from 'pg';
import { Query } from 'pg';
import { QueryArrayConfig } from 'pg';
import { QueryArrayResult } from 'pg';
import { QueryConfig } from 'pg';
import type { QueryConfigValues } from 'pg';
import { QueryParse } from 'pg';
import { QueryResult } from 'pg';
import { QueryResultBase } from 'pg';
import { QueryResultRow } from 'pg';
import { ResultBuilder } from 'pg';
import type { Socket } from 'net';
import { Submittable } from 'pg';
import { types } from 'pg';

declare const allKeyUsages: readonly ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];

declare class ASN1Bytes extends Bytes {
    readASN1Length(comment?: string): number;
    expectASN1Length(comment?: string): readonly [() => void, () => number];
    readASN1OID(comment?: string): string;
    readASN1Boolean(comment?: string): boolean;
    readASN1UTCTime(): Date;
    readASN1GeneralizedTime(): Date;
    readASN1BitString(): Uint8Array<ArrayBuffer>;
}

declare function base64Decode(input: string, charCodes?: typeof stdCharCodes, autoPad?: boolean): Uint8Array<ArrayBuffer>;

export { BindConfig }

export declare const _bundleExt: 'js' | 'mjs';

declare class Bytes {
    offset: number;
    dataView: DataView;
    data: Uint8Array;
    comments: Record<number, string>;
    indents: Record<number, number>;
    indent: number;
    constructor(arrayOrMaxBytes: number | Uint8Array);
    extend(arrayOrMaxBytes: number | Uint8Array): void;
    remaining(): number;
    subarray(length: number): Uint8Array<ArrayBufferLike>;
    skip(length: number, comment?: string): this;
    comment(s: string, offset?: number): this;
    lengthComment(length: number, comment?: string, inclusive?: boolean): string;
    readBytes(length: number): Uint8Array<ArrayBuffer>;
    readUTF8String(length: number): string;
    readUTF8StringNullTerminated(): string;
    readUint8(comment?: string): number;
    readUint16(comment?: string): number;
    readUint24(comment?: string): number;
    readUint32(comment?: string): number;
    expectBytes(expected: Uint8Array | number[], comment?: string): void;
    expectUint8(expectedValue: number, comment?: string): void;
    expectUint16(expectedValue: number, comment?: string): void;
    expectUint24(expectedValue: number, comment?: string): void;
    expectUint32(expectedValue: number, comment?: string): void;
    expectLength(length: number, indentDelta?: number): readonly [() => void, () => number];
    expectLengthUint8(comment?: string): readonly [() => void, () => number];
    expectLengthUint16(comment?: string): readonly [() => void, () => number];
    expectLengthUint24(comment?: string): readonly [() => void, () => number];
    expectLengthUint32(comment?: string): readonly [() => void, () => number];
    expectLengthUint8Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint16Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint24Incl(comment?: string): readonly [() => void, () => number];
    expectLengthUint32Incl(comment?: string): readonly [() => void, () => number];
    writeBytes(bytes: number[] | Uint8Array): this;
    writeUTF8String(s: string): this;
    writeUTF8StringNullTerminated(s: string): this;
    writeUint8(value: number, comment?: string): Bytes;
    writeUint16(value: number, comment?: string): Bytes;
    writeUint24(value: number, comment?: string): Bytes;
    writeUint32(value: number, comment?: string): Bytes;
    _writeLengthGeneric(lengthBytes: 1 | 2 | 3 | 4, inclusive: boolean, comment?: string): () => void;
    writeLengthUint8(comment?: string): () => void;
    writeLengthUint16(comment?: string): () => void;
    writeLengthUint24(comment?: string): () => void;
    writeLengthUint32(comment?: string): () => void;
    writeLengthUint8Incl(comment?: string): () => void;
    writeLengthUint16Incl(comment?: string): () => void;
    writeLengthUint24Incl(comment?: string): () => void;
    writeLengthUint32Incl(comment?: string): () => void;
    array(): Uint8Array<ArrayBufferLike>;
    commentedString(all?: boolean): string;
}

declare class Cert {
    serialNumber: Uint8Array;
    algorithm: OID;
    issuer: DistinguishedName;
    validityPeriod: {
        notBefore: Date;
        notAfter: Date;
    };
    subject: DistinguishedName;
    publicKey: {
        identifiers: OID[];
        data: Uint8Array;
        all: Uint8Array;
    };
    signature: Uint8Array;
    keyUsage?: {
        critical?: boolean;
        usages: Set<typeof allKeyUsages[number]>;
    };
    subjectAltNames?: string[];
    extKeyUsage?: {
        clientTls?: true;
        serverTls?: true;
    };
    authorityKeyIdentifier?: Uint8Array;
    subjectKeyIdentifier?: Uint8Array;
    basicConstraints?: {
        critical?: boolean;
        ca?: boolean;
        pathLength?: number;
    } | undefined;
    signedData: Uint8Array;
    static distinguishedNamesAreEqual(dn1: DistinguishedName, dn2: DistinguishedName): boolean;
    static stringFromDistinguishedName(dn: DistinguishedName): string;
    constructor(certData: Uint8Array | ASN1Bytes | CertJSON);
    subjectAltNameMatchingHost(host: string): string | undefined;
    isValidAtMoment(moment?: Date): boolean;
    description(): string;
    toJSON(): {
        serialNumber: string;
        algorithm: string;
        issuer: DistinguishedName;
        validityPeriod: {
            notBefore: string;
            notAfter: string;
        };
        subject: DistinguishedName;
        publicKey: {
            identifiers: string[];
            data: string;
            all: string;
        };
        signature: string;
        keyUsage: {
            critical: boolean | undefined;
            usages: ("digitalSignature" | "nonRepudiation" | "keyEncipherment" | "dataEncipherment" | "keyAgreement" | "keyCertSign" | "cRLSign" | "encipherOnly" | "decipherOnly")[];
        };
        subjectAltNames: string[] | undefined;
        extKeyUsage: {
            clientTls?: true;
            serverTls?: true;
        } | undefined;
        authorityKeyIdentifier: string | undefined;
        subjectKeyIdentifier: string | undefined;
        basicConstraints: {
            critical?: boolean;
            ca?: boolean;
            pathLength?: number;
        } | undefined;
        signedData: string;
    };
    static uint8ArraysFromPEM(pem: string): Uint8Array<ArrayBuffer>[];
    static fromPEM(pem: string): Cert[];
}

declare type CertJSON = ReturnType<typeof Cert.prototype.toJSON>;

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

/**
 * The node-postgres `Client` object re-exported with minor modifications.
 * https://node-postgres.com/apis/client
 */
export declare class Client extends Client_2 {
    config: any;
    get neonConfig(): neonConfig;
    constructor(config: any);
    connect(): Promise<void>;
    connect(callback: (err?: Error) => void): void;
    _handleAuthSASLContinue(msg: any): Promise<void>;
}

export { ClientConfig }

export { Connection }

export { ConnectionConfig }

export { CustomTypesConfig }

declare interface DataRequest {
    bytes: number;
    resolve: (data: Uint8Array | undefined) => void;
}

export { Defaults }

export { defaults }

declare type DistinguishedName = Record<string, string | string[]>;

export { Events }

export { ExecuteConfig }

export declare interface FetchEndpointOptions {
    jwtAuth?: boolean;
}

export { FieldDef }

export declare interface FullQueryResults<ArrayMode extends boolean> {
    fields: FieldDef[];
    command: string;
    rowCount: number;
    rows: QueryRows<ArrayMode>;
    rowAsArray: ArrayMode;
}

declare function hexFromU8(u8: Uint8Array | number[], spacer?: string): string;

export declare interface HTTPQueryOptions<ArrayMode extends boolean, FullResults extends boolean> {
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
    fullResults?: FullResults;
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
    types?: typeof types;
    queryCallback?: (query: ParameterizedQuery) => void;
    resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
}

export declare interface HTTPTransactionOptions<ArrayMode extends boolean, FullResults extends boolean> extends HTTPQueryOptions<ArrayMode, FullResults> {
    isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
    readOnly?: boolean;
    deferrable?: boolean;
}

export { MessageConfig }

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
export declare function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(connectionString: string, { arrayMode: neonOptArrayMode, fullResults: neonOptFullResults, fetchOptions: neonOptFetchOptions, isolationLevel: neonOptIsolationLevel, readOnly: neonOptReadOnly, deferrable: neonOptDeferrable, queryCallback, resultCallback, authToken, }?: HTTPTransactionOptions<ArrayMode, FullResults>): NeonQueryFunction<ArrayMode, FullResults>;

export declare class neonConfig extends EventEmitter {
    static defaults: SocketDefaults;
    static opts: Partial<SocketDefaults>;
    /**
     * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
     * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
     * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
     * fetch request.
     *
     * Default: `false`.
     */
    static get poolQueryViaFetch(): SocketDefaults["poolQueryViaFetch"];
    static set poolQueryViaFetch(newValue: SocketDefaults['poolQueryViaFetch']);
    /**
     * Set `fetchEndpoint` to set the server endpoint to be sent queries via http
     * fetch. May be useful in local development (e.g. to set a port that's not
     * the default 443).
     *
     * Provide either the full endpoint URL, or a function that takes the
     * database host address, port and options, and returns the full endpoint URL
     * (including protocol).
     *
     * Default: custom logic to connect to Neon endpoints.
     */
    static get fetchEndpoint(): SocketDefaults["fetchEndpoint"];
    static set fetchEndpoint(newValue: SocketDefaults['fetchEndpoint']);
    /**
     * **DEPRECATED**. Previously, only when `fetchConnectionCache` was `true`
     * did queries carried via HTTP fetch make use of a connection pool/cache
     * on the server. All queries now use the connection pool/cache: this setting
     * is ignored.
     *
     * Default: `true`.
     */
    static get fetchConnectionCache(): SocketDefaults["fetchConnectionCache"];
    static set fetchConnectionCache(newValue: SocketDefaults['fetchConnectionCache']);
    /**
     * The `fetchFunction` option allows you to supply an alternative function
     * for making http requests. The function must accept the same arguments as
     * native `fetch`.
     *
     * Default: `undefined`.
     */
    static get fetchFunction(): SocketDefaults["fetchFunction"];
    static set fetchFunction(newValue: SocketDefaults['fetchFunction']);
    /**
     * Only if no global `WebSocket` object is available, such as in older
     * versions of Node, set `webSocketConstructor` to the constructor for a
     * custom WebSocket implementation, such as those provided by `ws` or
     * `undici`.
     *
     * Default: `undefined`.
     */
    static get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    static set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
    get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
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
    static get wsProxy(): SocketDefaults["wsProxy"];
    static set wsProxy(newValue: SocketDefaults['wsProxy']);
    get wsProxy(): SocketDefaults["wsProxy"];
    set wsProxy(newValue: SocketDefaults['wsProxy']);
    /**
     * Batch multiple network writes per run-loop into a single outgoing
     * WebSocket message.
     *
     * Default: `true`.
     */
    static get coalesceWrites(): SocketDefaults["coalesceWrites"];
    static set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    get coalesceWrites(): SocketDefaults["coalesceWrites"];
    set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    /**
     * Use a secure (`wss:`) connection to the WebSocket proxy.
     *
     * Default: `true`.
     */
    static get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    static set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    /**
     * Disable TLS encryption in the Postgres protocol (as set via e.g.
     * `?sslmode=require` in the connection string). Connection remains secure
     * as long as `useSecureWebSocket` is `true`, which is the default.
     *
     * Default: `true`
     */
    static get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    static set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    /**
     * When using subtls with `forceDisablePgSSL = false` and Postgres connection
     * parameters that specify TLS, setting `disableSNI = true` means that no SNI
     * data in included in the Postgres TLS handshake.
     *
     * On Neon, disabling SNI and including the Neon project name in the password
     * avoids CPU-intensive SCRAM authentication, but this is only relevant for
     * earlier iterations of Neon's WebSocket support.
     *
     * Default: `false`.
     */
    static get disableSNI(): SocketDefaults["disableSNI"];
    static set disableSNI(newValue: SocketDefaults['disableSNI']);
    get disableSNI(): SocketDefaults["disableSNI"];
    set disableSNI(newValue: SocketDefaults['disableSNI']);
    /**
     * Pipelines the startup message, cleartext password message and first query
     * when set to `"password"`. This works only for cleartext password auth.
     *
     * Default: `"password"`.
     */
    static get pipelineConnect(): SocketDefaults["pipelineConnect"];
    static set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
    get pipelineConnect(): SocketDefaults["pipelineConnect"];
    set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
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
    static get subtls(): SocketDefaults["subtls"];
    static set subtls(newValue: SocketDefaults['subtls']);
    get subtls(): SocketDefaults["subtls"];
    set subtls(newValue: SocketDefaults['subtls']);
    /**
     * Pipeline the pg SSL request and TLS handshake when `forceDisablePgSSL` is
     * `false` and the Postgres connection parameters specify TLS. Currently
     * compatible only with Neon hosts.
     *
     * Default: `false`.
     */
    static get pipelineTLS(): SocketDefaults["pipelineTLS"];
    static set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    get pipelineTLS(): SocketDefaults["pipelineTLS"];
    set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    /**
     * Set `rootCerts` to a string comprising one or more PEM files. These are
     * the trusted root certificates for a TLS connection to Postgres when
     * `forceDisablePgSSL` is `false` and the Postgres connection parameters
     * specify TLS.
     *
     * Default: `""`.
     */
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

export declare interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
    (strings: TemplateStringsArray, ...params: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
    <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(string: string, params?: any[], opts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>): NeonQueryPromise<ArrayModeOverride, FullResultsOverride, FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>>;
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
    transaction: <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(queriesOrFn: NeonQueryPromise<ArrayMode, FullResults>[] | ((sql: NeonQueryFunctionInTransaction<ArrayModeOverride, FullResultsOverride>) => NeonQueryInTransaction[]), opts?: HTTPTransactionOptions<ArrayModeOverride, FullResultsOverride>) => Promise<FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride>[] : QueryRows<ArrayModeOverride>[]>;
}

export declare interface NeonQueryFunctionInTransaction<ArrayMode extends boolean, FullResults extends boolean> {
    (strings: TemplateStringsArray, ...params: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
    (string: string, params?: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
}

export declare interface NeonQueryInTransaction {
    parameterizedQuery: ParameterizedQuery;
}

export declare interface NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any> extends Promise<T> {
    parameterizedQuery: ParameterizedQuery;
    opts?: HTTPQueryOptions<ArrayMode, FullResults>;
}

export { Notification }

declare type OID = string;

export declare interface ParameterizedQuery {
    query: string;
    params: any[];
}

/**
 * The node-postgres `Pool` object re-exported with minor modifications.
 * https://node-postgres.com/apis/pool
 */
export declare class Pool extends Pool_2 {
    Client: typeof Client;
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

export { PoolConfig }

export declare interface ProcessQueryResultOptions {
    arrayMode: boolean;
    fullResults: boolean;
    parameterizedQuery: ParameterizedQuery;
    resultCallback: HTTPQueryOptions<false, false>['resultCallback'];
    types?: typeof types;
}

export { Query }

export { QueryArrayConfig }

export { QueryArrayResult }

export { QueryConfig }

export { QueryParse }

export { QueryResult }

export { QueryResultBase }

export { QueryResultRow }

export declare type QueryRows<ArrayMode extends boolean> = ArrayMode extends true ? any[][] : Record<string, any>[];

declare abstract class ReadQueue {
    queue: Uint8Array[];
    outstandingRequest: DataRequest | undefined;
    constructor();
    abstract socketIsNotClosed(): boolean;
    enqueue(data: Uint8Array): void;
    dequeue(): void;
    bytesInQueue(): number;
    read(bytes: number): Promise<Uint8Array<ArrayBufferLike> | undefined>;
}

export { ResultBuilder }

declare type RootCertsData = Uint8Array;

declare interface RootCertsDatabase {
    index: RootCertsIndex;
    data: RootCertsData;
}

declare interface RootCertsIndex {
    offsets: number[];
    subjects: Record<string, number>;
}

export declare interface SocketDefaults {
    poolQueryViaFetch: boolean;
    fetchEndpoint: string | ((host: string, port: number | string, options?: FetchEndpointOptions) => string);
    fetchConnectionCache: boolean;
    fetchFunction: any;
    webSocketConstructor: WebSocketConstructor | undefined;
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

declare class SocketReadQueue extends ReadQueue {
    constructor(socket: Socket);
    socketIsNotClosed(): boolean;
}

declare function stableStringify(x: any, replacer?: (key: string, value: any) => any, indent?: string | number): string;

declare function startTls(host: string, rootCertsDatabase: RootCertsDatabase | string, networkRead: (bytes: number) => Promise<Uint8Array | undefined>, networkWrite: (data: Uint8Array) => void, { useSNI, requireServerTlsExtKeyUsage, requireDigitalSigKeyUsage, writePreData, expectPreData, commentPreData }?: {
    useSNI?: boolean;
    requireServerTlsExtKeyUsage?: boolean;
    requireDigitalSigKeyUsage?: boolean;
    writePreData?: Uint8Array;
    expectPreData?: Uint8Array;
    commentPreData?: string;
}): Promise<readonly [() => Promise<Uint8Array<ArrayBufferLike> | undefined>, (data: Uint8Array) => Promise<void>]>;

declare function stdCharCodes(charCode: number): number | void;

export { Submittable }

declare namespace subtls {
    export {
        base64Decode,
        hexFromU8,
        stableStringify,
        startTls,
        stdCharCodes,
        u8FromHex,
        allKeyUsages,
        ASN1Bytes,
        Bytes,
        Cert,
        CertJSON,
        DataRequest,
        DistinguishedName,
        OID,
        ReadQueue,
        RootCertsData,
        RootCertsDatabase,
        RootCertsIndex,
        SocketReadQueue,
        TrustedCert,
        WebSocketReadQueue
    }
}
export { subtls }

declare class TrustedCert extends Cert {
    static databaseFromPEM(pem: string): RootCertsDatabase;
    static findInDatabase(subjectOrSubjectKeyId: DistinguishedName | string, db: RootCertsDatabase): TrustedCert | undefined;
}

export { types }

declare function u8FromHex(hex: string): Uint8Array<ArrayBuffer>;

export declare interface WebSocketConstructor {
    new (...args: any[]): WebSocketLike;
}

export declare interface WebSocketLike {
    readonly readyState: number;
    binaryType: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    addEventListener(type: 'open' | 'message' | 'close' | 'error', listener: (this: WebSocketLike, ev: any) => any, options?: any): void;
}

declare class WebSocketReadQueue extends ReadQueue {
    constructor(socket: WebSocket);
    socketIsNotClosed(): boolean;
}

