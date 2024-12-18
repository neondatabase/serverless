import { Client as Client_2 } from 'pg';
import { ClientBase } from 'pg';
import { Connection } from 'pg';
import { DatabaseError } from 'pg';
import { defaults } from 'pg';
import { EventEmitter } from 'events';
import { Pool as Pool_2 } from 'pg';
import { Query } from 'pg';
import type { Socket } from 'net';
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

declare interface DataRequest {
    bytes: number;
    resolve: (data: Uint8Array | undefined) => void;
}

export { defaults }

declare type DistinguishedName = Record<string, string | string[]>;

declare interface FetchEndpointOptions {
    jwtAuth?: boolean;
}

declare function hexFromU8(u8: Uint8Array | number[], spacer?: string): string;

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

declare type OID = string;

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

declare type RootCertsData = Uint8Array;

declare interface RootCertsDatabase {
    index: RootCertsIndex;
    data: RootCertsData;
}

declare interface RootCertsIndex {
    offsets: number[];
    subjects: Record<string, number>;
}

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

declare class SocketReadQueue extends ReadQueue {
    private socket;
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

declare namespace subtls {
    export {
        base64Decode,
        hexFromU8,
        stableStringify,
        startTls,
        u8FromHex,
        SocketReadQueue,
        TrustedCert,
        WebSocketReadQueue
    }
}

declare class TrustedCert extends Cert {
    static databaseFromPEM(pem: string): RootCertsDatabase;
    static findInDatabase(subjectOrSubjectKeyId: DistinguishedName | string, db: RootCertsDatabase): TrustedCert | undefined;
}

export { types }

declare function u8FromHex(hex: string): Uint8Array<ArrayBuffer>;

declare class WebSocketReadQueue extends ReadQueue {
    private socket;
    constructor(socket: WebSocket);
    socketIsNotClosed(): boolean;
}

