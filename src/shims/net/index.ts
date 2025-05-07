/**
 * This file shims parts of the Node.js built-in net and tls packages, by
 * implementing net.Socket and tls.connect() on top of WebSockets. It's
 * designed to work both in browsers and in Cloudflare Workers (where
 * WebSockets work a bit differently). The calling client is assumed to be pg
 * (node-postgres).
 */

import { EventEmitter } from 'events';

import type { startTls, TrustedCert, WebSocketReadQueue } from 'subtls';
export type { startTls, TrustedCert, WebSocketReadQueue };

export interface subtls {
  startTls: typeof startTls;
  TrustedCert: typeof TrustedCert;
  WebSocketReadQueue: typeof WebSocketReadQueue;
}

declare global {
  const debug: boolean; // e.g. --define:debug=false in esbuild command
}

export interface WebSocketLike {
  // we define our own WebSocket type because different implementations have
  // different signatures and we want to be compatible with any of them
  readonly readyState: number;
  binaryType: string;
  close(code?: number, reason?: string): void;
  send(data: any): void;
  addEventListener(
    type: 'open' | 'message' | 'close' | 'error',
    listener: (this: WebSocketLike, ev: any) => any,
    options?: any,
  ): void;
}

export interface WebSocketConstructor {
  new (...args: any[]): WebSocketLike;
}

enum TlsState {
  None,
  Handshake,
  Established,
}

function hexDump(data: Uint8Array) {
  return (
    `${data.length} bytes` +
    data.reduce(
      (memo, byte) => memo + ' ' + byte.toString(16).padStart(2, '0'),
      '\nhex:',
    ) +
    '\nstr: ' +
    new TextDecoder().decode(data)
  );
}

function log(...args: any[]) {
  console.log(
    ...args.map((arg) =>
      arg instanceof Uint8Array
        ? hexDump(arg)
        : arg instanceof ArrayBuffer
          ? hexDump(new Uint8Array(arg))
          : arg,
    ),
  );
}

export function isIP(input: string) {
  // if we ever need this to work properly, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
  return 0;
}

export interface FetchEndpointOptions {
  jwtAuth?: boolean;
}

export interface SocketDefaults {
  // these options relate to the fetch transport and take effect *only* when set globally
  poolQueryViaFetch: boolean;
  fetchEndpoint:
    | string
    | ((
        host: string,
        port: number | string,
        options?: FetchEndpointOptions,
      ) => string);
  fetchConnectionCache: boolean;
  fetchFunction: any;
  // these options relate to the WebSocket transport
  webSocketConstructor: WebSocketConstructor | undefined;
  wsProxy: string | ((host: string, port: number | string) => string);
  useSecureWebSocket: boolean;
  forceDisablePgSSL: boolean;
  coalesceWrites: boolean;
  pipelineConnect: 'password' | false;
  // these options apply only to Postgres-native TLS over WebSockets (when forceDisablePgSSL === false)
  subtls: subtls | undefined;
  rootCerts: string;
  pipelineTLS: boolean;
  disableSNI: boolean;
  disableWarningInBrowsers: boolean;
}
type GlobalOnlyDefaults =
  | 'poolQueryViaFetch'
  | 'fetchEndpoint'
  | 'fetchConnectionCache'
  | 'fetchFunction';

const FIRST_WORD_REGEX = /^[^.]+\./;

export class Socket extends EventEmitter {
  static defaults: SocketDefaults = {
    // these options relate to the fetch transport and take effect *only* when set globally
    poolQueryViaFetch: false,
    fetchEndpoint: (host, _port, options) => {
      let newHost;
      if (options?.jwtAuth) {
        // If the caller sends in a JWT, we need to use the Neon Authorize API
        // endpoint instead (this goes to the Auth Broker instead of the Neon
        // Proxy).
        newHost = host.replace(FIRST_WORD_REGEX, 'apiauth.');
      } else {
        newHost = host.replace(FIRST_WORD_REGEX, 'api.');
      }

      return 'https://' + newHost + '/sql';
    },
    fetchConnectionCache: true,
    fetchFunction: undefined,
    // these options relate to the WebSocket transport
    webSocketConstructor: undefined,
    wsProxy: (host) => host + '/v2',
    useSecureWebSocket: true,
    forceDisablePgSSL: true,
    coalesceWrites: true,
    pipelineConnect: 'password',
    // these options apply only to Postgres-native TLS over WebSockets (when forceDisablePgSSL === false)
    subtls: undefined,
    rootCerts: '',
    pipelineTLS: false,
    disableSNI: false,
    disableWarningInBrowsers: false,
  };

  static opts: Partial<SocketDefaults> = {};
  private opts: Partial<Omit<SocketDefaults, GlobalOnlyDefaults>> = {};

  /**
   * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
   * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
   * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
   * fetch request.
   *
   * Default: `false`.
   */
  static get poolQueryViaFetch() {
    return Socket.opts.poolQueryViaFetch ?? Socket.defaults.poolQueryViaFetch;
  }
  static set poolQueryViaFetch(newValue: SocketDefaults['poolQueryViaFetch']) {
    Socket.opts.poolQueryViaFetch = newValue;
  }

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
  static get fetchEndpoint() {
    return Socket.opts.fetchEndpoint ?? Socket.defaults.fetchEndpoint;
  }
  static set fetchEndpoint(newValue: SocketDefaults['fetchEndpoint']) {
    Socket.opts.fetchEndpoint = newValue;
  }

  /**
   * **DEPRECATED**. Previously, only when `fetchConnectionCache` was `true`
   * did queries carried via HTTP fetch make use of a connection pool/cache
   * on the server. All queries now use the connection pool/cache: this setting
   * is ignored.
   *
   * Default: `true`.
   */
  static get fetchConnectionCache() {
    return true;
  }
  static set fetchConnectionCache(
    newValue: SocketDefaults['fetchConnectionCache'],
  ) {
    console.warn(
      'The `fetchConnectionCache` option is deprecated (now always `true`)',
    );
  }

  /**
   * The `fetchFunction` option allows you to supply an alternative function
   * for making http requests. The function must accept the same arguments as
   * native `fetch`.
   *
   * Default: `undefined`.
   */
  static get fetchFunction() {
    return Socket.opts.fetchFunction ?? Socket.defaults.fetchFunction;
  }
  static set fetchFunction(newValue: SocketDefaults['fetchFunction']) {
    Socket.opts.fetchFunction = newValue;
  }

  /**
   * Only if no global `WebSocket` object is available, such as in older
   * versions of Node, set `webSocketConstructor` to the constructor for a
   * custom WebSocket implementation, such as those provided by `ws` or
   * `undici`.
   *
   * Default: `undefined`.
   */
  static get webSocketConstructor() {
    return (
      Socket.opts.webSocketConstructor ?? Socket.defaults.webSocketConstructor
    );
  }
  static set webSocketConstructor(
    newValue: SocketDefaults['webSocketConstructor'],
  ) {
    Socket.opts.webSocketConstructor = newValue;
  }
  get webSocketConstructor() {
    return this.opts.webSocketConstructor ?? Socket.webSocketConstructor;
  }
  set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']) {
    this.opts.webSocketConstructor = newValue;
  }

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
  static get wsProxy() {
    return Socket.opts.wsProxy ?? Socket.defaults.wsProxy;
  }
  static set wsProxy(newValue: SocketDefaults['wsProxy']) {
    Socket.opts.wsProxy = newValue;
  }
  get wsProxy() {
    return this.opts.wsProxy ?? Socket.wsProxy;
  }
  set wsProxy(newValue: SocketDefaults['wsProxy']) {
    this.opts.wsProxy = newValue;
  }

  /**
   * Batch multiple network writes per run-loop into a single outgoing
   * WebSocket message.
   *
   * Default: `true`.
   */
  static get coalesceWrites() {
    return Socket.opts.coalesceWrites ?? Socket.defaults.coalesceWrites;
  }
  static set coalesceWrites(newValue: SocketDefaults['coalesceWrites']) {
    Socket.opts.coalesceWrites = newValue;
  }
  get coalesceWrites() {
    return this.opts.coalesceWrites ?? Socket.coalesceWrites;
  }
  set coalesceWrites(newValue: SocketDefaults['coalesceWrites']) {
    this.opts.coalesceWrites = newValue;
  }

  /**
   * Use a secure (`wss:`) connection to the WebSocket proxy.
   *
   * Default: `true`.
   */
  static get useSecureWebSocket() {
    return Socket.opts.useSecureWebSocket ?? Socket.defaults.useSecureWebSocket;
  }
  static set useSecureWebSocket(
    newValue: SocketDefaults['useSecureWebSocket'],
  ) {
    Socket.opts.useSecureWebSocket = newValue;
  }
  get useSecureWebSocket() {
    return this.opts.useSecureWebSocket ?? Socket.useSecureWebSocket;
  }
  set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']) {
    this.opts.useSecureWebSocket = newValue;
  }

  /**
   * Disable TLS encryption in the Postgres protocol (as set via e.g.
   * `?sslmode=require` in the connection string). Connection remains secure
   * as long as `useSecureWebSocket` is `true`, which is the default.
   *
   * Default: `true`
   */
  static get forceDisablePgSSL() {
    return Socket.opts.forceDisablePgSSL ?? Socket.defaults.forceDisablePgSSL;
  }
  static set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']) {
    Socket.opts.forceDisablePgSSL = newValue;
  }
  get forceDisablePgSSL() {
    return this.opts.forceDisablePgSSL ?? Socket.forceDisablePgSSL;
  }
  set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']) {
    this.opts.forceDisablePgSSL = newValue;
  }

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
  static get disableSNI() {
    return Socket.opts.disableSNI ?? Socket.defaults.disableSNI;
  }
  static set disableSNI(newValue: SocketDefaults['disableSNI']) {
    Socket.opts.disableSNI = newValue;
  }
  get disableSNI() {
    return this.opts.disableSNI ?? Socket.disableSNI;
  }
  set disableSNI(newValue: SocketDefaults['disableSNI']) {
    this.opts.disableSNI = newValue;
  }

  /**
   * When `disableWarningInBrowsers` is set to `true`, it disables the warning about
   * running this driver in the browser.
   *
   * Default: `false`.
   */
  static get disableWarningInBrowsers() {
    return (
      Socket.opts.disableWarningInBrowsers ??
      Socket.defaults.disableWarningInBrowsers
    );
  }
  static set disableWarningInBrowsers(
    newValue: SocketDefaults['disableWarningInBrowsers'],
  ) {
    Socket.opts.disableWarningInBrowsers = newValue;
  }
  get disableWarningInBrowsers() {
    return (
      this.opts.disableWarningInBrowsers ?? Socket.disableWarningInBrowsers
    );
  }
  set disableWarningInBrowsers(
    newValue: SocketDefaults['disableWarningInBrowsers'],
  ) {
    this.opts.disableWarningInBrowsers = newValue;
  }

  /**
   * Pipelines the startup message, cleartext password message and first query
   * when set to `"password"`. This works only for cleartext password auth.
   *
   * Default: `"password"`.
   */
  static get pipelineConnect() {
    return Socket.opts.pipelineConnect ?? Socket.defaults.pipelineConnect;
  }
  static set pipelineConnect(newValue: SocketDefaults['pipelineConnect']) {
    Socket.opts.pipelineConnect = newValue;
  }
  get pipelineConnect() {
    return this.opts.pipelineConnect ?? Socket.pipelineConnect;
  }
  set pipelineConnect(newValue: SocketDefaults['pipelineConnect']) {
    this.opts.pipelineConnect = newValue;
  }

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
  static get subtls() {
    return Socket.opts.subtls ?? Socket.defaults.subtls;
  }
  static set subtls(newValue: SocketDefaults['subtls']) {
    Socket.opts.subtls = newValue;
  }
  get subtls() {
    return this.opts.subtls ?? Socket.subtls;
  }
  set subtls(newValue: SocketDefaults['subtls']) {
    this.opts.subtls = newValue;
  }

  /**
   * Pipeline the pg SSL request and TLS handshake when `forceDisablePgSSL` is
   * `false` and the Postgres connection parameters specify TLS. Currently
   * compatible only with Neon hosts.
   *
   * Default: `false`.
   */
  static get pipelineTLS() {
    return Socket.opts.pipelineTLS ?? Socket.defaults.pipelineTLS;
  }
  static set pipelineTLS(newValue: SocketDefaults['pipelineTLS']) {
    Socket.opts.pipelineTLS = newValue;
  }
  get pipelineTLS() {
    return this.opts.pipelineTLS ?? Socket.pipelineTLS;
  }
  set pipelineTLS(newValue: SocketDefaults['pipelineTLS']) {
    this.opts.pipelineTLS = newValue;
  }

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `forceDisablePgSSL` is `false` and the Postgres connection parameters
   * specify TLS.
   *
   * Default: `""`.
   */
  static get rootCerts() {
    return Socket.opts.rootCerts ?? Socket.defaults.rootCerts;
  }
  static set rootCerts(newValue: SocketDefaults['rootCerts']) {
    Socket.opts.rootCerts = newValue;
  }
  get rootCerts() {
    return this.opts.rootCerts ?? Socket.rootCerts;
  }
  set rootCerts(newValue: SocketDefaults['rootCerts']) {
    this.opts.rootCerts = newValue;
  }

  wsProxyAddrForHost(host: string, port: number) {
    const wsProxy = this.wsProxy;
    if (wsProxy === undefined) {
      throw new Error(
        `No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string`,
      );
    }
    return typeof wsProxy === 'function'
      ? wsProxy(host, port)
      : `${wsProxy}?address=${host}:${port}`;
  }

  connecting = false;
  pending = true;
  writable = true;
  encrypted = false;
  authorized = false;
  destroyed = false;

  private ws: WebSocketLike | null = null;
  private writeBuffer: Uint8Array | undefined; // used only if coalesceWrites === true
  private tlsState = TlsState.None;
  private tlsRead: undefined | (() => Promise<Uint8Array | undefined>);
  private tlsWrite: undefined | ((data: Uint8Array) => Promise<void>);

  setNoDelay() {
    debug && log('setNoDelay (no-op)');
    return this;
  }
  setKeepAlive() {
    debug && log('setKeepAlive (no-op)');
    return this;
  }
  ref() {
    debug && log('ref (no-op)');
    return this;
  }
  unref() {
    debug && log('unref (no-op)');
    return this;
  }

  connect(port: number | string, host: string, connectListener?: () => void) {
    this.connecting = true;
    if (connectListener) this.once('connect', connectListener);

    const handleWebSocketOpen = () => {
      debug && log('socket ready');
      this.connecting = false;
      this.pending = false;
      this.emit('connect');
      this.emit('ready');
    };

    const configureWebSocket = (ws: WebSocketLike, immediateOpen = false) => {
      ws.binaryType = 'arraybuffer';

      ws.addEventListener('error', (err) => {
        debug && log('websocket error', err);
        this.emit('error', err);
        this.emit('close');
      });

      ws.addEventListener('message', (msg) => {
        debug && log('socket received:', msg.data);
        if (this.tlsState === TlsState.None) {
          debug && log('emitting received data');
          const buffer = Buffer.from(msg.data as ArrayBuffer);
          this.emit('data', buffer);
        }
      });

      ws.addEventListener('close', () => {
        debug && log('websocket closed');
        this.emit('close');
      });

      if (immediateOpen) handleWebSocketOpen();
      else ws.addEventListener('open', handleWebSocketOpen);
    };

    let wsAddr: string;
    try {
      wsAddr = this.wsProxyAddrForHost(
        host,
        typeof port === 'string' ? parseInt(port, 10) : port,
      );
    } catch (err) {
      this.emit('error', err);
      this.emit('close');
      return;
    }

    try {
      // ordinary/browser path
      const wsProtocol = this.useSecureWebSocket ? 'wss:' : 'ws:';
      const wsAddrFull = wsProtocol + '//' + wsAddr;

      // first, use a custom constructor, if supplied
      if (this.webSocketConstructor !== undefined) {
        this.ws = new this.webSocketConstructor(wsAddrFull);
        configureWebSocket(this.ws);
      } else {
        try {
          // second, try a common-or-garden WebSocket, e.g. in a web browser
          this.ws = new WebSocket(wsAddrFull) as any;
          configureWebSocket(this.ws!);
        } catch (err) {
          debug && log('new WebSocket() failed');

          // @ts-ignore -- unknown Vercel-specific object
          this.ws = new __unstable_WebSocket(wsAddrFull);
          configureWebSocket(this.ws!);
        }
      }
    } catch (err) {
      debug && log('WebSocket constructors failed');

      // fourth and finally, let's try the Cloudflare Workers method ...
      const wsProtocol = this.useSecureWebSocket ? 'https:' : 'http:';
      const fetchAddrFull = wsProtocol + '//' + wsAddr;

      fetch(fetchAddrFull, { headers: { Upgrade: 'websocket' } })
        .then((resp) => {
          // @ts-ignore -- unknown Cloudflare-specific property
          this.ws = resp.webSocket;
          if (this.ws == null) throw err; // deliberate loose equality

          // @ts-ignore -- unknown Cloudflare-specific method
          this.ws.accept!();
          configureWebSocket(this.ws, true);
          debug && log('Cloudflare WebSocket opened');
        })
        .catch((err) => {
          debug && log(`fetch() with { Upgrade: "websocket" } failed`);
          this.emit(
            'error',
            new Error(
              `All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${err}`,
            ),
          );
          this.emit('close');
        });
    }
  }

  async startTls(host: string) {
    debug && log('starting TLS');
    if (this.subtls === undefined)
      throw new Error(
        'For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.',
      );

    this.tlsState = TlsState.Handshake;

    const rootCerts = await this.subtls.TrustedCert.databaseFromPEM(
      this.rootCerts,
    );
    const readQueue = new this.subtls.WebSocketReadQueue(this.ws! as any);
    const networkRead = readQueue.read.bind(readQueue);
    const networkWrite = this.rawWrite.bind(this);

    const { read: tlsRead, write: tlsWrite } = await this.subtls.startTls(
      host,
      rootCerts,
      networkRead,
      networkWrite,
      {
        useSNI: !this.disableSNI,
        expectPreData: this.pipelineTLS ? new Uint8Array([0x53]) : undefined, // expect (and discard) an 'S' before the TLS response if pipelineTLS is set
      },
    );

    this.tlsRead = tlsRead;
    this.tlsWrite = tlsWrite;

    debug && log('TLS connection established');
    this.tlsState = TlsState.Established;
    this.encrypted = true;
    this.authorized = true;
    this.emit('secureConnection', this);

    this.tlsReadLoop(); // deliberately NOT awaited
  }

  async tlsReadLoop() {
    // intended NOT to be awaited
    while (true) {
      debug && log('awaiting TLS data ...');
      const data = await this.tlsRead!();

      if (data === undefined) {
        debug && log('no TLS data, breaking loop');
        break;
      } else {
        debug && log('emitting decrypted TLS data:', data);
        const buffer = Buffer.from(data);
        this.emit('data', buffer);
      }
    }
  }

  rawWrite(data: Uint8Array) {
    if (!this.coalesceWrites) {
      this.ws!.send(data);
      return;
    }

    if (this.writeBuffer === undefined) {
      this.writeBuffer = data;
      setTimeout(() => {
        this.ws!.send(this.writeBuffer!);
        this.writeBuffer = undefined;
      }, 0);
    } else {
      const newBuffer = new Uint8Array(this.writeBuffer.length + data.length);
      newBuffer.set(this.writeBuffer);
      newBuffer.set(data, this.writeBuffer.length);
      this.writeBuffer = newBuffer;
    }
  }

  write(
    data: Buffer | string,
    encoding = 'utf8',
    callback = (err?: any) => {},
  ) {
    if (data.length === 0) {
      callback();
      return true;
    }

    if (typeof data === 'string')
      data = Buffer.from(data, encoding as BufferEncoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      debug && log('sending data direct:', data);
      this.rawWrite(data);
      callback();
    } else if (this.tlsState === TlsState.Handshake) {
      // pg starts sending without waiting for the handshake to complete
      debug && log('TLS handshake in progress, queueing data:', data);
      this.once('secureConnection', () => {
        this.write(data, encoding, callback);
      });
    } else {
      debug && log('encrypting data:', data);
      this.tlsWrite!(data);
      callback();
    }

    return true;
  }

  end(
    data: Buffer | string = Buffer.alloc(0) as unknown as Buffer,
    encoding = 'utf8',
    callback = () => {},
  ) {
    debug && log('ending socket');
    this.write(data, encoding, () => {
      this.ws!.close();
      callback();
    });
    return this;
  }

  destroy() {
    this.destroyed = true;
    return this.end();
  }
}
