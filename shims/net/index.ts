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
  const debug: boolean;  // e.g. --define:debug=false in esbuild command
  interface WebSocket {
    accept: () => void;
    binaryType: string;
  }
}

enum TlsState {
  None,
  Handshake,
  Established,
}

function hexDump(data: Uint8Array) {
  return `${data.length} bytes` + data.reduce((memo, byte) =>
    memo + ' ' + byte.toString(16).padStart(2, '0'), '\nhex:') +
    '\nstr: ' + new TextDecoder().decode(data);
}

function log(...args: any[]) {
  console.log(...args.map(arg =>
    arg instanceof Uint8Array ? hexDump(arg) :
      arg instanceof ArrayBuffer ? hexDump(new Uint8Array(arg)) :
        arg));
}

export function isIP(input: string) {
  // if we ever need this to work properly, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
  return 0;
}

export interface SocketDefaults {
  // these options relate to the fetch transport and take effect *only* when set globally
  poolQueryViaFetch: boolean;
  fetchEndpoint: string | ((host: string, port: number | string) => string);
  fetchConnectionCache: boolean;
  // these options relate to the WebSocket transport
  webSocketConstructor: typeof WebSocket | undefined;
  wsProxy: string | ((host: string, port: number | string) => string);
  useSecureWebSocket: boolean;
  forceDisablePgSSL: boolean;
  coalesceWrites: boolean;
  pipelineConnect: 'password' | false;
  // these options apply only to Postgres-native TLS over WebSockets (when forceDisablePgSSL === false)
  subtls: typeof subtls | undefined;
  rootCerts: string;
  pipelineTLS: boolean;
  disableSNI: boolean;
}
type GlobalOnlyDefaults = 'poolQueryViaFetch' | 'fetchEndpoint' | 'fetchConnectionCache';

export class Socket extends EventEmitter {

  static defaults: SocketDefaults = {
    // these options relate to the fetch transport and take effect *only* when set globally
    poolQueryViaFetch: false,
    fetchEndpoint: host => 'https://' + host + '/sql',
    fetchConnectionCache: false,
    // these options relate to the WebSocket transport
    webSocketConstructor: undefined,
    wsProxy: host => host + '/v2',
    useSecureWebSocket: true,
    forceDisablePgSSL: true,
    coalesceWrites: true,
    pipelineConnect: 'password',
    // these options apply only to Postgres-native TLS over WebSockets (when forceDisablePgSSL === false)
    subtls: undefined,
    rootCerts: '',
    pipelineTLS: false,
    disableSNI: false,
  };

  static opts: Partial<SocketDefaults> = {};
  private opts: Partial<Omit<SocketDefaults, GlobalOnlyDefaults>> = {};

  static get poolQueryViaFetch() { return Socket.opts.poolQueryViaFetch ?? Socket.defaults.poolQueryViaFetch; }
  static set poolQueryViaFetch(newValue: SocketDefaults['poolQueryViaFetch']) { Socket.opts.poolQueryViaFetch = newValue; }

  static get fetchEndpoint() { return Socket.opts.fetchEndpoint ?? Socket.defaults.fetchEndpoint; }
  static set fetchEndpoint(newValue: SocketDefaults['fetchEndpoint']) { Socket.opts.fetchEndpoint = newValue; }

  static get fetchConnectionCache() { return Socket.opts.fetchConnectionCache ?? Socket.defaults.fetchConnectionCache; }
  static set fetchConnectionCache(newValue: SocketDefaults['fetchConnectionCache']) { Socket.opts.fetchConnectionCache = newValue; }

  static get webSocketConstructor() { return Socket.opts.webSocketConstructor ?? Socket.defaults.webSocketConstructor; }
  static set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']) { Socket.opts.webSocketConstructor = newValue; }
  get webSocketConstructor() { return this.opts.webSocketConstructor ?? Socket.webSocketConstructor; }
  set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']) { this.opts.webSocketConstructor = newValue; }

  static get wsProxy() { return Socket.opts.wsProxy ?? Socket.defaults.wsProxy; }
  static set wsProxy(newValue: SocketDefaults['wsProxy']) { Socket.opts.wsProxy = newValue; }
  get wsProxy() { return this.opts.wsProxy ?? Socket.wsProxy; }
  set wsProxy(newValue: SocketDefaults['wsProxy']) { this.opts.wsProxy = newValue; }

  static get coalesceWrites() { return Socket.opts.coalesceWrites ?? Socket.defaults.coalesceWrites; }
  static set coalesceWrites(newValue: SocketDefaults['coalesceWrites']) { Socket.opts.coalesceWrites = newValue; }
  get coalesceWrites() { return this.opts.coalesceWrites ?? Socket.coalesceWrites; }
  set coalesceWrites(newValue: SocketDefaults['coalesceWrites']) { this.opts.coalesceWrites = newValue; }

  static get useSecureWebSocket() { return Socket.opts.useSecureWebSocket ?? Socket.defaults.useSecureWebSocket; }
  static set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']) { Socket.opts.useSecureWebSocket = newValue; }
  get useSecureWebSocket() { return this.opts.useSecureWebSocket ?? Socket.useSecureWebSocket; }
  set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']) { this.opts.useSecureWebSocket = newValue; }

  static get forceDisablePgSSL() { return Socket.opts.forceDisablePgSSL ?? Socket.defaults.forceDisablePgSSL; }
  static set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']) { Socket.opts.forceDisablePgSSL = newValue; }
  get forceDisablePgSSL() { return this.opts.forceDisablePgSSL ?? Socket.forceDisablePgSSL; }
  set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']) { this.opts.forceDisablePgSSL = newValue; }

  static get disableSNI() { return Socket.opts.disableSNI ?? Socket.defaults.disableSNI; }
  static set disableSNI(newValue: SocketDefaults['disableSNI']) { Socket.opts.disableSNI = newValue; }
  get disableSNI() { return this.opts.disableSNI ?? Socket.disableSNI; }
  set disableSNI(newValue: SocketDefaults['disableSNI']) { this.opts.disableSNI = newValue; }

  static get pipelineConnect() { return Socket.opts.pipelineConnect ?? Socket.defaults.pipelineConnect; }
  static set pipelineConnect(newValue: SocketDefaults['pipelineConnect']) { Socket.opts.pipelineConnect = newValue; }
  get pipelineConnect() { return this.opts.pipelineConnect ?? Socket.pipelineConnect; }
  set pipelineConnect(newValue: SocketDefaults['pipelineConnect']) { this.opts.pipelineConnect = newValue; }

  static get subtls() { return Socket.opts.subtls ?? Socket.defaults.subtls; }
  static set subtls(newValue: SocketDefaults['subtls']) { Socket.opts.subtls = newValue; }
  get subtls() { return this.opts.subtls ?? Socket.subtls; }
  set subtls(newValue: SocketDefaults['subtls']) { this.opts.subtls = newValue; }

  static get pipelineTLS() { return Socket.opts.pipelineTLS ?? Socket.defaults.pipelineTLS; }
  static set pipelineTLS(newValue: SocketDefaults['pipelineTLS']) { Socket.opts.pipelineTLS = newValue; }
  get pipelineTLS() { return this.opts.pipelineTLS ?? Socket.pipelineTLS; }
  set pipelineTLS(newValue: SocketDefaults['pipelineTLS']) { this.opts.pipelineTLS = newValue; }

  static get rootCerts() { return Socket.opts.rootCerts ?? Socket.defaults.rootCerts; }
  static set rootCerts(newValue: SocketDefaults['rootCerts']) { Socket.opts.rootCerts = newValue; }
  get rootCerts() { return this.opts.rootCerts ?? Socket.rootCerts; }
  set rootCerts(newValue: SocketDefaults['rootCerts']) { this.opts.rootCerts = newValue; }

  wsProxyAddrForHost(host: string, port: number) {
    const wsProxy = this.wsProxy;
    if (wsProxy === undefined) {
      throw new Error(`No WebSocket proxy is configured. Please refer to https://github.com/neondatabase/serverless#run-your-own-websocket-proxy`);
    }
    return typeof wsProxy === 'function' ? wsProxy(host, port) : `${wsProxy}?address=${host}:${port}`;
  }

  connecting = false;
  pending = true;
  writable = true;
  encrypted = false;
  authorized = false;
  destroyed = false;

  private ws: WebSocket | null = null;
  private writeBuffer: Uint8Array | undefined;  // used only if coalesceWrites === true
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

  async connect(port: number | string, host: string, connectListener?: () => void) {
    this.connecting = true;
    if (connectListener) this.once('connect', connectListener);

    let wsAddr: string;
    try {
      wsAddr = this.wsProxyAddrForHost(host, typeof port === 'string' ? parseInt(port, 10) : port);

    } catch (err) {
      this.emit('error', err);
      this.emit('close');
      return;
    }

    this.ws = await new Promise<WebSocket>(async resolve => {
      try {
        // ordinary/browser path
        const wsProtocol = this.useSecureWebSocket ? 'wss:' : 'ws:';
        const wsAddrFull = wsProtocol + '//' + wsAddr;

        let ws: WebSocket;
        if (this.webSocketConstructor !== undefined) {
          ws = new this.webSocketConstructor(wsAddrFull);

        } else {
          try {
            // first, try a common-or-garden WebSocket, e.g. in a web browser
            ws = new WebSocket(wsAddrFull);

          } catch (err) {
            debug && log('new WebSocket() failed');

            // @ts-ignore -- second, how about a Vercel Edge Functions __unstable_WebSocket (as at early 2023?)
            ws = new __unstable_WebSocket(wsAddrFull);
          }
        }

        ws.addEventListener('open', () => {
          debug && log('WebSocket opened');
          resolve(ws);
        });

      } catch (err) {
        debug && log('new __unstable_WebSocket() failed');
        try {
          // fourth and finally, let's try the Cloudflare Workers method ...
          const wsProtocol = this.useSecureWebSocket ? 'https:' : 'http:';
          const fetchAddrFull = wsProtocol + '//' + wsAddr;
          await fetch(fetchAddrFull, { headers: { Upgrade: 'websocket' } }).then(resp => {
            const ws = resp.webSocket;
            if (ws == undefined) throw err;  // deliberate loose equality
            ws.accept();
            debug && log('Cloudflare WebSocket opened');
            resolve(ws);
          });

        } catch (err) {
          debug && log('fetch() with { Upgrade: "websocket" } failed');
          this.emit('error', new Error('All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless#run-on-node'));
          this.emit('close');
          return;
        }
      }
    });

    this.ws.binaryType = 'arraybuffer';

    this.ws.addEventListener('error', (err) => {
      debug && log('websocket error', err);
      this.emit('error', err);
      this.emit('close');
    });

    this.ws.addEventListener('close', () => {
      debug && log('websocket closed');
      this.emit('close');
    });

    this.ws.addEventListener('message', (msg) => {
      debug && log('socket received:', msg.data);
      if (this.tlsState === TlsState.None) {
        debug && log('emitting received data');
        const buffer = Buffer.from(msg.data as ArrayBuffer);
        this.emit('data', buffer);
      }
    });

    debug && log('socket ready');
    this.connecting = false;
    this.pending = false;
    this.emit('connect');
    this.emit('ready');

    return this;
  }

  async startTls(host: string) {
    debug && log('starting TLS');
    if (this.subtls === undefined) throw new Error('For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.');

    this.tlsState = TlsState.Handshake;

    const rootCerts = this.subtls.TrustedCert.fromPEM(this.rootCerts);
    const readQueue = new this.subtls.WebSocketReadQueue(this.ws!);
    const networkRead = readQueue.read.bind(readQueue);
    const networkWrite = this.rawWrite.bind(this);

    const [tlsRead, tlsWrite] = await this.subtls.startTls(
      host,
      rootCerts,
      networkRead,
      networkWrite,
      {
        useSNI: !this.disableSNI,
        expectPreData: this.pipelineTLS ? new Uint8Array([0x53]) : undefined,  // expect (and discard) an 'S' before the TLS response if pipelineTLS is set
      }
    );

    this.tlsRead = tlsRead;
    this.tlsWrite = tlsWrite;

    debug && log('TLS connection established');
    this.tlsState = TlsState.Established;
    this.encrypted = true;
    this.authorized = true;
    this.emit('secureConnection', this);

    this.tlsReadLoop();
  }

  async tlsReadLoop() {  // intended NOT to be awaited
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

  write(data: Buffer | string, encoding = 'utf8', callback = (err?: any) => { }) {
    if (data.length === 0) return callback();
    if (typeof data === 'string') data = Buffer.from(data, encoding as BufferEncoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      debug && log('sending data direct:', data);
      this.rawWrite(data);

    } else if (this.tlsState === TlsState.Handshake) {
      // pg starts sending without waiting for the handshake to complete
      debug && log('TLS handshake in progress, queueing data:', data);
      this.once('secureConnection', () => this.write(data, encoding, callback));

    } else {
      debug && log('encrypting data:', data);
      this.tlsWrite!(data);
    }

    return true;
  }

  end(data: Buffer | string = Buffer.alloc(0) as unknown as Buffer, encoding = 'utf8', callback?: (() => void)) {
    debug && log('ending socket');
    this.write(data, encoding, () => {
      this.ws!.close();
      if (callback) callback();
    });
    return this;
  }

  destroy() {
    this.destroyed = true;
    return this.end();
  }
}
