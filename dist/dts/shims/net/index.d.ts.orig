/**
 * This file shims parts of the Node.js built-in net and tls packages, by
 * implementing net.Socket and tls.connect() on top of WebSockets. It's
 * designed to work both in browsers and in Cloudflare Workers (where
 * WebSockets work a bit differently). The calling client is assumed to be pg
 * (node-postgres).
 */
import { EventEmitter } from 'events';
import type * as subtls from 'subtls';
declare global {
    const debug: boolean;
    interface WebSocket {
        binaryType: 'arraybuffer' | 'blob';
        accept?: () => void;
    }
    interface Response {
        webSocket: WebSocket;
    }
    class __unstable_WebSocket extends WebSocket {
    }
}
export declare function isIP(input: string): number;
interface FetchEndpointOptions {
    jwtAuth?: boolean;
}
export interface SocketDefaults {
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
export declare class Socket extends EventEmitter {
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
export {};
