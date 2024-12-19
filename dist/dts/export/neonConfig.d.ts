export interface NeonConfigGlobalOnly {
    /**
     * Set `fetchEndpoint` to set the server endpoint to be sent queries via http
     * fetch. May be useful in local development (e.g. to set a port that's not
     * the default 443).
     *
     * Provide either the full endpoint URL, or a function that takes the
     * database host address and port and returns the full endpoint URL
     * (including protocol).
     *
     * Default: `host => 'https://' + host + '/sql'`
     *
     */
    fetchEndpoint: string | ((host: string, port: number | string) => string);
    /**
     * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
     * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
     * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
     * fetch request.
     *
     * Default: `false`.
     */
    poolQueryViaFetch: boolean;
    /**
     * **Experimentally**, when `fetchConnectionCache` is `true`, queries carried
     * via HTTP fetch make use of a connection cache on the server.
     *
     * Default: `false`.
     */
    fetchConnectionCache: boolean;
    /**
     * The `fetchFunction` option allows you to supply an alternative function
     * for making http requests. The function must accept the same arguments as
     * native `fetch`.
     *
     * Default: `undefined`.
     */
    fetchFunction: any;
}
export interface NeonConfigGlobalAndClient {
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
export interface NeonConfig extends NeonConfigGlobalOnly, NeonConfigGlobalAndClient {
}
