export interface NeonConfig {
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
   * the database host address and port and returns the proxy server URL
   * (without protocol).
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
  pipelineConnect: "password" | false;

  /**
   * Pipeline pg SSL request and TLS handshake when `useSecureWebSocket` is
   * `false`. Currently compatible only with Neon hosts.
   * 
   * Default: `false`.
   */
  pipelineTLS: boolean;

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `useSecureWebSocket` is `false`.
   * 
   * Default: the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;

  /**
   * Batch multiple network writes per run-loop into one WebSocket message.
   * 
   * Default: `true`.
   */
  coalesceWrites: boolean;

  /**
   * When `disableSNI` is `true` and `useSecureWebSocket` is `false`, we send 
   * no SNI data in the TLS handshake.
   * 
   * On Neon, disabling SNI and including the Neon project name in the password
   * avoids CPU-intensive SCRAM authentication, but this is only relevant for
   * earlier iterations of Neon's WebSocket support.
   * 
   * Default: `false`.
   */
  disableSNI: boolean;

  /**
   * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
   * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
   * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
   * fetch request.
   * 
   * We are still investigating compatibility of this option.
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
}
