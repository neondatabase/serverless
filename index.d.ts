/// <reference types="node" />

import { BindConfig } from 'pg';
import { Client as Client_2 } from 'pg';
import type { ClientBase as ClientBase_2 } from 'pg';
import { ClientConfig } from 'pg';
import { Connection } from 'pg';
import { ConnectionConfig } from 'pg';
import { CustomTypesConfig } from 'pg';
import { DatabaseError } from 'pg';
import { Defaults } from 'pg';
import { defaults } from 'pg';
import { EventEmitter } from 'events';
import { Events } from 'pg';
import { ExecuteConfig } from 'pg';
import { FieldDef } from 'pg';
import { MessageConfig } from 'pg';
import { Notification } from 'pg';
import { Pool as Pool_2 } from 'pg';
import type { PoolClient as PoolClient_2 } from 'pg';
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
import { Submittable } from 'pg';
import { types } from 'pg';

declare const allKeyUsages: readonly ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];

declare class ASN1Bytes extends Bytes {
    readASN1Length(comment?: string): Promise<number>;
    expectASN1Length(comment?: string): Promise<readonly [() => void, () => number]>;
    expectASN1TypeAndLength(typeNum: number, typeDesc: string, comment?: string): Promise<readonly [() => void, () => number]>;
    readASN1OID(comment?: string): Promise<string>;
    readASN1Boolean(comment?: string): Promise<boolean>;
    readASN1UTCTime(comment?: string): Promise<Date>;
    readASN1GeneralizedTime(comment?: string): Promise<Date>;
    readASN1Time(comment?: string): Promise<Date>;
    readASN1BitString(comment?: string): Promise<Uint8Array<ArrayBuffer>>;
    expectASN1Sequence(comment?: string): Promise<readonly [() => void, () => number]>;
    expectASN1OctetString(comment?: string): Promise<readonly [() => void, () => number]>;
    expectASN1DERDoc(): Promise<readonly [() => void, () => number]>;
    expectASN1Null(comment?: string): Promise<void>;
}

export { BindConfig }

export declare const _bundleExt: 'js' | 'mjs';

declare class Bytes {
    indent: number;
    fetchFn: undefined | ((bytes: number) => Promise<Uint8Array | undefined>);
    endOfReadableData: number;
    offset: number;
    dataView: DataView;
    data: Uint8Array;
    comments: Record<number, string>;
    indents: Record<number, number>;
    /**
     * @param data -
     * * If data is a `Uint8Array`, this is the initial data
     * * If data is a `number`, this is the initial size in bytes (all zeroes)
     * * If data is a `function`, this function is called to retrieve data when required
     */
    constructor(data?: Uint8Array | number | ((bytes: number) => Promise<Uint8Array | undefined>), indent?: number);
    readRemaining(): number;
    resizeTo(newSize: number): void;
    ensureReadAvailable(bytes: number): Promise<void>;
    ensureWriteAvailable(bytes: number): void;
    expectLength(length: number, indentDelta?: number): readonly [() => void, () => number];
    comment(s: string, offset?: number): this;
    lengthComment(length: number, comment?: string, inclusive?: boolean): string;
    subarrayForRead(length: number): Promise<Uint8Array<ArrayBufferLike>>;
    skipRead(length: number, comment?: string): Promise<this>;
    readBytes(length: number): Promise<Uint8Array<ArrayBuffer>>;
    readUTF8String(length: number): Promise<string>;
    readUTF8StringNullTerminated(): Promise<string>;
    readUint8(comment?: string): Promise<number>;
    readUint16(comment?: string): Promise<number>;
    readUint24(comment?: string): Promise<number>;
    readUint32(comment?: string): Promise<number>;
    expectBytes(expected: Uint8Array | number[], comment?: string): Promise<void>;
    expectUint8(expectedValue: number, comment?: string): Promise<void>;
    expectUint16(expectedValue: number, comment?: string): Promise<void>;
    expectUint24(expectedValue: number, comment?: string): Promise<void>;
    expectUint32(expectedValue: number, comment?: string): Promise<void>;
    expectReadLength(length: number, indentDelta?: number): Promise<readonly [() => void, () => number]>;
    expectLengthUint8(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint16(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint24(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint32(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint8Incl(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint16Incl(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint24Incl(comment?: string): Promise<readonly [() => void, () => number]>;
    expectLengthUint32Incl(comment?: string): Promise<readonly [() => void, () => number]>;
    subarrayForWrite(length: number): Uint8Array<ArrayBufferLike>;
    skipWrite(length: number, comment?: string): this;
    writeBytes(bytes: number[] | Uint8Array): this;
    writeUTF8String(s: string): this;
    writeUTF8StringNullTerminated(s: string): this;
    writeUint8(value: number, comment?: string): Bytes;
    writeUint16(value: number, comment?: string): Bytes;
    writeUint24(value: number, comment?: string): Bytes;
    writeUint32(value: number, comment?: string): Bytes;
    _writeLengthGeneric(lengthBytes: number, inclusive: boolean, comment?: string): () => void;
    writeLengthUint8(comment?: string): () => void;
    writeLengthUint16(comment?: string): () => void;
    writeLengthUint24(comment?: string): () => void;
    writeLengthUint32(comment?: string): () => void;
    writeLengthUint8Incl(comment?: string): () => void;
    writeLengthUint16Incl(comment?: string): () => void;
    writeLengthUint24Incl(comment?: string): () => void;
    writeLengthUint32Incl(comment?: string): () => void;
    expectWriteLength(length: number, indentDelta?: number): readonly [() => void, () => number];
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
    rawData: Uint8Array;
    constructor();
    static distinguishedNamesAreEqual(dn1: DistinguishedName, dn2: DistinguishedName): boolean;
    static stringFromDistinguishedName(dn: DistinguishedName): string;
    static create(certData: Uint8Array | ASN1Bytes | CertJSON): Promise<Cert>;
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
        rawData: string;
    };
    static uint8ArraysFromPEM(pem: string): Uint8Array<ArrayBuffer>[];
    static fromPEM(pem: string): Promise<Cert[]>;
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
    config?: (string | ClientConfig) | undefined;
    get neonConfig(): neonConfig;
    constructor(config?: (string | ClientConfig) | undefined);
    connect(): Promise<void>;
    connect(callback: (err?: Error) => void): void;
    _handleAuthSASLContinue(msg: any): Promise<void>;
}

export declare interface ClientBase extends ClientBase_2 {
    neonConfig: NeonConfigGlobalAndClient;
}

export { ClientConfig }

export { Connection }

export { ConnectionConfig }

export { CustomTypesConfig }

export { DatabaseError }

declare interface DataRequest {
    bytes: number;
    resolve: (data: Uint8Array | undefined) => void;
    readMode: ReadMode;
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
}

export declare interface HTTPTransactionOptions<ArrayMode extends boolean, FullResults extends boolean> extends HTTPQueryOptions<ArrayMode, FullResults> {
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

export { MessageConfig }

/**
 * Returns an async tagged-template function that runs a single SQL query (no
 * session or transactions) with low latency over https. Queries are
 * composable: they can be embedded inside each other.
 *
 * By default, the query function returns database rows directly. Types should
 * match those returned by this driver when using WebSockets (i.e. via `Pool`
 * or `Client`).
 *
 * The returned function has a `transaction()` function property, which
 * supports multiple queries run in a non-interactive transaction.
 *
 * It also has function properties `query()` and `unsafe()`.
 *
 * `query()` (like `client.query()` and `pool.query()`) takes a query string
 * with embedded `$1`, `$2` (etc.) placeholders, followed by an array of query
 * parameters, followed (optionally) by query options.
 *
 * `unsafe()` permits embedding arbitrary raw SQL strings, if you know they're
 * safe.
 *
 * Some examples:
 *
 * ```
 * import { neon } from "@neondatabase/serverless";
 * const h = "hello", w = "world";
 *
 * // example 1: default options, tagged-template usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 2: composability
 * const sql = neon("postgres://user:pass@host/db");
 * const helloWorld = sql`${h} || ' ' || ${w}`;
 * const rows = await sql`SELECT ${helloWorld} AS greeting`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 3: unsafe raw string interpolation
 * const sql = neon("postgres://user:pass@host/db");
 * const colName = 'greeting';
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS ${sql.unsafe(colName)}`;
 * // -> [ { greeting: "hello world" } ]
 *
 * // example 4: `arrayMode` and `fullResults` options
 * const options = { arrayMode: true, fullResults: true };
 * const sql = neon("postgres://user:pass@host/db", options);
 * const result = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;
 * // -> {
 * //      command: "SELECT",
 * //      fields: [ { name: "greeting", dataTypeID: 25 } ],
 * //      rowAsArray: true,
 * //      rowCount: 1,
 * //      rows: [ [ "hello world" ] ]
 * //    }
 *
 * // example 5: `fetchOptions` option direct to `query()` function
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql.query(
 *   "SELECT $1 || ' ' || $2 AS greeting", [h, w],
 *   { fetchOptions: { priority: "high" } }
 * );
 * // -> [ { greeting: "hello world" } ]
 * ```
 *
 * @param connectionString - has the format `postgresql://user:pass@host/db`
 * @param options - pass `arrayMode: true` to receive results as an array of
 * arrays, instead of the default array of objects; pass `fullResults: true`
 * to receive a complete result object similar to one returned by node-postgres
 * (with properties `rows`, `fields`, `command`, `rowCount`, `rowAsArray`);
 * pass as `fetchOptions` an object which will be merged into the options
 * passed to `fetch`.
 */
export declare function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(connectionString: string, { arrayMode: neonOptArrayMode, fullResults: neonOptFullResults, fetchOptions: neonOptFetchOptions, isolationLevel: neonOptIsolationLevel, readOnly: neonOptReadOnly, deferrable: neonOptDeferrable, authToken, }?: HTTPTransactionOptions<ArrayMode, FullResults>): NeonQueryFunction<ArrayMode, FullResults>;

export declare interface NeonConfig {
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
    subtls: subtls | undefined;
    rootCerts: string;
    pipelineTLS: boolean;
    disableSNI: boolean;
}

export declare class neonConfig extends EventEmitter {
    static defaults: NeonConfig;
    static opts: Partial<NeonConfig>;
    /**
     * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
     * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
     * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
     * fetch request.
     *
     * Default: `false`.
     */
    static get poolQueryViaFetch(): NeonConfig["poolQueryViaFetch"];
    static set poolQueryViaFetch(newValue: NeonConfig['poolQueryViaFetch']);
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
    static get fetchEndpoint(): NeonConfig["fetchEndpoint"];
    static set fetchEndpoint(newValue: NeonConfig['fetchEndpoint']);
    /**
     * **DEPRECATED**. Previously, only when `fetchConnectionCache` was `true`
     * did queries carried via HTTP fetch make use of a connection pool/cache
     * on the server. All queries now use the connection pool/cache: this setting
     * is ignored.
     *
     * Default: `true`.
     */
    static get fetchConnectionCache(): NeonConfig["fetchConnectionCache"];
    static set fetchConnectionCache(newValue: NeonConfig['fetchConnectionCache']);
    /**
     * The `fetchFunction` option allows you to supply an alternative function
     * for making http requests. The function must accept the same arguments as
     * native `fetch`.
     *
     * Default: `undefined`.
     */
    static get fetchFunction(): NeonConfig["fetchFunction"];
    static set fetchFunction(newValue: NeonConfig['fetchFunction']);
    /**
     * Only if no global `WebSocket` object is available, such as in older
     * versions of Node, set `webSocketConstructor` to the constructor for a
     * custom WebSocket implementation, such as those provided by `ws` or
     * `undici`.
     *
     * Default: `undefined`.
     */
    static get webSocketConstructor(): NeonConfig["webSocketConstructor"];
    static set webSocketConstructor(newValue: NeonConfig['webSocketConstructor']);
    get webSocketConstructor(): NeonConfig["webSocketConstructor"];
    set webSocketConstructor(newValue: NeonConfig['webSocketConstructor']);
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
    static get wsProxy(): NeonConfig["wsProxy"];
    static set wsProxy(newValue: NeonConfig['wsProxy']);
    get wsProxy(): NeonConfig["wsProxy"];
    set wsProxy(newValue: NeonConfig['wsProxy']);
    /**
     * Batch multiple network writes per run-loop into a single outgoing
     * WebSocket message.
     *
     * Default: `true`.
     */
    static get coalesceWrites(): NeonConfig["coalesceWrites"];
    static set coalesceWrites(newValue: NeonConfig['coalesceWrites']);
    get coalesceWrites(): NeonConfig["coalesceWrites"];
    set coalesceWrites(newValue: NeonConfig['coalesceWrites']);
    /**
     * Use a secure (`wss:`) connection to the WebSocket proxy.
     *
     * Default: `true`.
     */
    static get useSecureWebSocket(): NeonConfig["useSecureWebSocket"];
    static set useSecureWebSocket(newValue: NeonConfig['useSecureWebSocket']);
    get useSecureWebSocket(): NeonConfig["useSecureWebSocket"];
    set useSecureWebSocket(newValue: NeonConfig['useSecureWebSocket']);
    /**
     * Disable TLS encryption in the Postgres protocol (as set via e.g.
     * `?sslmode=require` in the connection string). Connection remains secure
     * as long as `useSecureWebSocket` is `true`, which is the default.
     *
     * Default: `true`
     */
    static get forceDisablePgSSL(): NeonConfig["forceDisablePgSSL"];
    static set forceDisablePgSSL(newValue: NeonConfig['forceDisablePgSSL']);
    get forceDisablePgSSL(): NeonConfig["forceDisablePgSSL"];
    set forceDisablePgSSL(newValue: NeonConfig['forceDisablePgSSL']);
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
    static get disableSNI(): NeonConfig["disableSNI"];
    static set disableSNI(newValue: NeonConfig['disableSNI']);
    get disableSNI(): NeonConfig["disableSNI"];
    set disableSNI(newValue: NeonConfig['disableSNI']);
    /**
     * Pipelines the startup message, cleartext password message and first query
     * when set to `"password"`. This works only for cleartext password auth.
     *
     * Default: `"password"`.
     */
    static get pipelineConnect(): NeonConfig["pipelineConnect"];
    static set pipelineConnect(newValue: NeonConfig['pipelineConnect']);
    get pipelineConnect(): NeonConfig["pipelineConnect"];
    set pipelineConnect(newValue: NeonConfig['pipelineConnect']);
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
    static get subtls(): NeonConfig["subtls"];
    static set subtls(newValue: NeonConfig['subtls']);
    get subtls(): NeonConfig["subtls"];
    set subtls(newValue: NeonConfig['subtls']);
    /**
     * Pipeline the pg SSL request and TLS handshake when `forceDisablePgSSL` is
     * `false` and the Postgres connection parameters specify TLS. Currently
     * compatible only with Neon hosts.
     *
     * Default: `false`.
     */
    static get pipelineTLS(): NeonConfig["pipelineTLS"];
    static set pipelineTLS(newValue: NeonConfig['pipelineTLS']);
    get pipelineTLS(): NeonConfig["pipelineTLS"];
    set pipelineTLS(newValue: NeonConfig['pipelineTLS']);
    /**
     * Set `rootCerts` to a string comprising one or more PEM files. These are
     * the trusted root certificates for a TLS connection to Postgres when
     * `forceDisablePgSSL` is `false` and the Postgres connection parameters
     * specify TLS.
     *
     * Default: `""`.
     */
    static get rootCerts(): NeonConfig["rootCerts"];
    static set rootCerts(newValue: NeonConfig['rootCerts']);
    get rootCerts(): NeonConfig["rootCerts"];
    set rootCerts(newValue: NeonConfig['rootCerts']);
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

export declare type NeonConfigGlobalAndClient = Omit<NeonConfig, keyof NeonConfigGlobalOnly>;

export declare type NeonConfigGlobalOnly = Pick<NeonConfig, 'fetchEndpoint' | 'poolQueryViaFetch' | 'fetchConnectionCache' | 'fetchFunction'>;

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
    /**
     * The `query()` function takes a query string with embedded `$1`, `$2`
     * (etc.) placeholders, followed by an array of query parameters, followed
     * (optionally) by query options. For example:
     *
     * ```
     * const sql = neon("postgres://user:pass@host/db");
     * const rows = await sql.query(
     *   "SELECT * FROM table WHERE id = $1", [123],
     *   { fetchOptions: { priority: "high" } }
     * );
     * // -> [ { greeting: "hello world" } ]
     * ```
     *
     * @param queryWithPlaceholders - SQL query with numbered placeholders (`$1`, `$2`, etc.), e.g. `"SELECT * FROM table WHERE id = $1"`
     * @param params - array of values corresponding to placeholders, e.g. `[123]`
     * @param queryOpts - e.g. query options, e.g. `{ fetchOptions: { priority: "high" } }`
     */
    query<ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(queryWithPlaceholders: string, params?: any[], queryOpts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>): NeonQueryPromise<ArrayModeOverride, FullResultsOverride, FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>>;
    /**
     * The `unsafe()` function allows arbitrary strings to be interpolated in a
     * SQL query. This must be used only with trusted string values under your
     * control.
     *
     * ```
     * const sql = neon("postgres://user:pass@host/db");
     * const colName = 'greeting';
     * const rows = await sql`SELECT 'hello world' AS ${sql.unsafe(colName)}`;
     * ```
     *
     * @param rawSQL - string, SQL fragment
     */
    unsafe(rawSQL: string): UnsafeRawSql;
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
     *   sql`SELECT ${1} AS num`,
     *   sql`SELECT ${'a'} AS str`,
     * ]);
     * // -> [[{ num: 1 }], [{ str: "a" }]]
     *
     * // or equivalently:
     * const results = await sql.transaction(txn => [
     *   txn`SELECT ${1} AS num`,
     *   txn`SELECT ${'a'} AS str`,
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
    query(queryWithPlaceholders: string, params?: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
    unsafe(rawSQL: string): UnsafeRawSql;
}

export declare interface NeonQueryInTransaction {
    queryData: SqlTemplate | ParameterizedQuery;
}

export declare interface NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any> extends Promise<T> {
}

export declare class NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any> {
    execute: (queryData: SqlTemplate | ParameterizedQuery | (SqlTemplate | ParameterizedQuery)[], opts?: HTTPQueryOptions<ArrayMode, FullResults> | HTTPQueryOptions<ArrayMode, FullResults>[]) => Promise<T>;
    queryData: SqlTemplate | ParameterizedQuery;
    opts?: HTTPQueryOptions<ArrayMode, FullResults> | undefined;
    constructor(execute: (queryData: SqlTemplate | ParameterizedQuery | (SqlTemplate | ParameterizedQuery)[], opts?: HTTPQueryOptions<ArrayMode, FullResults> | HTTPQueryOptions<ArrayMode, FullResults>[]) => Promise<T>, queryData: SqlTemplate | ParameterizedQuery, opts?: HTTPQueryOptions<ArrayMode, FullResults> | undefined);
    then<TResult1 = T, TResult2 = never>(resolve?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, reject?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(reject?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    finally(finallyFn?: (() => void) | undefined | null): Promise<T>;
}

export { Notification }

declare type OID = string;

export declare interface ParameterizedQuery {
    query: string;
    params: any[];
}

export declare interface Pool {
    Promise: typeof Promise;
    connect(): Promise<PoolClient>;
    connect(callback: (err: Error | undefined, client: PoolClient | undefined, done: (release?: any) => void) => void): void;
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

export declare interface PoolClient extends PoolClient_2 {
    neonConfig: NeonConfigGlobalAndClient;
}

export { PoolConfig }

export declare interface ProcessQueryResultOptions {
    arrayMode: boolean;
    fullResults: boolean;
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

declare enum ReadMode {
    CONSUME = 0,
    PEEK = 1
}

declare abstract class ReadQueue {
    queue: Uint8Array[];
    outstandingRequest: DataRequest | undefined;
    constructor();
    abstract moreDataMayFollow(): boolean;
    enqueue(data: Uint8Array): void;
    dequeue(): void;
    bytesInQueue(): number;
    read(bytes: number, readMode?: ReadMode): Promise<Uint8Array<ArrayBufferLike> | undefined>;
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

export declare class SqlTemplate {
    strings: ReadonlyArray<string>;
    values: any[];
    constructor(strings: ReadonlyArray<string>, values: any[]);
    toParameterizedQuery(result?: {
        query: string;
        params: any[];
    }): {
        query: string;
        params: any[];
    };
}

export declare function startTls(host: string, rootCertsDatabase: RootCertsDatabase | string, networkRead: (bytes: number) => Promise<Uint8Array | undefined>, networkWrite: (data: Uint8Array) => void, { useSNI, requireServerTlsExtKeyUsage, requireDigitalSigKeyUsage, writePreData, expectPreData, commentPreData }?: {
    useSNI?: boolean;
    requireServerTlsExtKeyUsage?: boolean;
    requireDigitalSigKeyUsage?: boolean;
    writePreData?: Uint8Array;
    expectPreData?: Uint8Array;
    commentPreData?: string;
}): Promise<{
    readonly read: () => Promise<Uint8Array<ArrayBufferLike> | undefined>;
    readonly write: (data: Uint8Array) => Promise<void>;
    readonly userCert: Cert;
}>;

export { Submittable }

export declare interface subtls {
    startTls: typeof startTls;
    TrustedCert: typeof TrustedCert;
    WebSocketReadQueue: typeof WebSocketReadQueue;
}

export declare class TrustedCert extends Cert {
    static databaseFromPEM(pem: string): Promise<RootCertsDatabase>;
    static findInDatabase(subjectOrSubjectKeyId: DistinguishedName | string, db: RootCertsDatabase): Promise<Cert | undefined>;
}

export { types }

export declare class UnsafeRawSql {
    sql: string;
    constructor(sql: string);
}

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

export declare class WebSocketReadQueue extends ReadQueue {
    constructor(socket: WebSocket);
    moreDataMayFollow(): boolean;
}

