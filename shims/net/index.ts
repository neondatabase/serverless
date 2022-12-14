/**
 * This file shims parts of the Node.js built-in net and tls packages, by 
 * implementing net.Socket and tls.connect() on top of WebSockets. It's 
 * designed to work both in browsers and in Cloudflare Workers (where 
 * WebSockets work a bit differently). The calling client is assumed to be pg
 * (node-postgres).
 */

import { EventEmitter } from 'events';
import { startTls, TrustedCert, ReadQueue } from 'subtls';

// @ts-ignore - esbuild knows how to deal with this
import letsEncryptRootCert from './isrgrootx1.pem';

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

export class Socket extends EventEmitter {
  static wsProxy: string | ((host: string) => string) = 'ws.manipulexity.com';
  static rootCerts: string = letsEncryptRootCert;
  static disableSCRAM = true;
  static useSecureWebSocket = true;
  static disableTLS = true;

  connecting = false;
  pending = true;
  writable = true;
  encrypted = false;
  authorized = false;
  destroyed = false;

  private ws: WebSocket | null = null;
  private tlsState = TlsState.None;
  private tlsRead: undefined | (() => Promise<Uint8Array | undefined>);
  private tlsWrite: undefined | ((data: Uint8Array) => Promise<void>);

  setNoDelay() { debug && log('setNoDelay (no-op)'); }
  setKeepAlive() { debug && log('setKeepAlive (no-op)'); }

  async connect(port: number | string, host: string, connectListener?: () => void) {
    this.connecting = true;
    if (connectListener) this.once('connect', connectListener);

    const wsProxy = typeof Socket.wsProxy === 'string' ? Socket.wsProxy : Socket.wsProxy(host);
    const wsAddr = `${wsProxy}/v1?address=${host}:${port}`;

    this.ws = await new Promise<WebSocket>(resolve => {
      try {
        // ordinary/browser path
        const wsProtocol = Socket.useSecureWebSocket ? 'wss:' : 'ws:';
        const ws = new WebSocket(wsProtocol + '//' + wsAddr);
        ws.addEventListener('open', () => {
          debug && log('native WebSocket opened');
          resolve(ws);
        });

      } catch (err) {
        // Cloudflare Workers alternative
        const wsProtocol = Socket.useSecureWebSocket ? 'https:' : 'http:';
        fetch(wsProtocol + '//' + wsAddr, { headers: { Upgrade: 'websocket' } }).then(resp => {
          const ws = resp.webSocket;
          if (ws === null) throw new Error('Attempted Cloudflare-style WebSocket connection, but missing webSocket property on Response');
          ws.accept();
          debug && log('Cloudflare WebSocket opened');
          resolve(ws);
        })
      }
    });

    this.ws.binaryType = 'arraybuffer';

    this.ws.addEventListener('error', (err) => {
      debug && log('websocket error', err);
      this.emit('error', err);
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
    if (Socket.disableTLS) {
      debug && log('not starting TLS (using secure WebSocket instead)');

    } else {
      debug && log('starting TLS');
      this.tlsState = TlsState.Handshake;

      const readQueue = new ReadQueue(this.ws!);
      const networkRead = readQueue.read.bind(readQueue);
      const networkWrite = this.ws!.send.bind(this.ws!);

      const rootCerts = TrustedCert.fromPEM(letsEncryptRootCert);
      const [tlsRead, tlsWrite] = await startTls(host, rootCerts, networkRead, networkWrite, !Socket.disableSCRAM);
      this.tlsRead = tlsRead;
      this.tlsWrite = tlsWrite;

      debug && log('TLS connection established');
      this.tlsState = TlsState.Established;
      this.encrypted = true;
      this.authorized = true;
      this.emit('secureConnection', this);

      this.readLoop();
    }
  }

  async readLoop() {
    let data;
    while (true) {
      debug && log('awaiting TLS data ...');
      data = await this.tlsRead!();

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

  write(data: Buffer | string, encoding = 'utf8', callback = (err?: any) => { }) {
    if (data.length === 0) return callback();
    if (typeof data === 'string') data = Buffer.from(data, encoding as BufferEncoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      debug && log('sending data direct:', data);
      this.ws!.send(data);

    } else if (this.tlsState === TlsState.Handshake) {
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
