/**
 * This file shims parts of the Node.js built-in net and tls packages, by 
 * implementing net.Socket and tls.connect() on top of WebSockets and WolfSSL 
 * compiled to WebAssembly with emscripten. It's designed to work both in 
 * browsers and in Cloudflare Workers (where WebSockets and WebAssembly work a
 * bit differently). The calling client is assumed to be pg (node-postgres).
 * 
 * - This diagram represents data flow once the TLS handshake has completed.
 *   Data flow is complicated by the need to prevent re-entrancy: emscripten's
 *   ASYNCIFY feature enables async JS calls, but we mustn't call back into JS
 *   while we wait.
 * 
 * - The data queues contain encrypted incoming data from the network and
 *   unencrypted outgoing data from pg. 
 * 
 * - Prior to the handshake, pg writes are passed straight to the network and
 *   network data events lead directly to pg data events. 
 * 
 * - During the handshake, the TLS engine spontaneously calls into JS to read
 *   and write, and outgoing writes (which pg issues early) are queued.
 * 
 *                         ┌─────────────────┐ 
 *                         │   TLS encrypt   │
 *                         └───┬──────────▲──┘
 *             call back to JS │          │async write call
 *                         ┌───┼──────────┼──┐
 *                         │   │          │  │
 *  network write ◄────────┼───┘          │  │         │ pg write
 *                         │              │  │         │
 *                         │ ┌────────┬───┴┐ │  call   │
 *                ┌────────► │        │    │ ◄─────────┘
 *                │ event  │ │idq     │wq  │ │
 *                │        │ └──┬──┬─┬┴────┘ │
 *                │        │    │  │ │       │  event
 *   network data │        │    │callback┌───┼─────────► pg data
 *                         │    │  │ │   │   │
 *                         └────┼──┼─┼───┼───┘
 *                   async call │  │ │   │ call back to JS
 *                         ┌────▼──┴─▼───┴───┐
 *                         │   TLS decrypt   │
 *                         └─────────────────┘
 * 
 * Key: idq = incoming data queue; wq = write queue.
 */

// import tlsWasm from './tls.wasm';
// ^^^ the relevant import is added at the end of the build process
// * in browsers, tlsWasm is the path to a WebAssembly file
// * on Cloudflare, tlsWasm is a pre-cooked WebAssembly instance

import { EventEmitter } from 'events';
import { tls_emscripten } from './tls';

declare global {
  const debug: boolean;  // e.g. --define:debug=false in esbuild command
  const tlsWasm: any;    // we'll add this import back in later (see above)
  // WebAssembly is currently missing from @cloudflare/worker-types
  namespace WebAssembly {
    interface Instance { }
    interface Imports { }
    const Instance: any;
    const Imports: any;
    const instantiateStreaming: (resp: Promise<Response>, info: any) => Promise<{ instance: Instance }>;
  }
  interface WebSocket {
    accept: () => void;
    binaryType: string;
  }
}

interface DataRequest {
  buffer: number /* pointer */;
  maxBytes: number;
  resolve: (bytesProvided: number) => void;
}

enum TlsState {
  None,
  Handshake,
  Established,
  Ended
}

enum TlsWaitState {
  Idle,
  WaitRead,
  WaitWrite,
}

function hexDump(data: Uint8Array) {
  return `${data.length} bytes` + data.reduce((memo, byte) =>
    memo + ' ' + byte.toString(16).padStart(2, '0'), '\nhex:') +
    '\nstr: ' + new TextDecoder().decode(data);
}

function log(...args: any[]) {
  console.log(...args.map(arg => arg instanceof Uint8Array ? hexDump(arg) : arg));
}

export function isIP(input: string) {
  // if we ever need this to work properly, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
  return 0;
}

export class Socket extends EventEmitter {
  connecting = false;
  pending = true;
  writable = true;
  encrypted = false;
  authorized = false;
  destroyed = false;
  wsProxy = 'proxy.hahathon.monster/';

  // private
  ws: WebSocket | null = null;
  module: any = null;
  tlsState = TlsState.None;
  tlsWaitState = TlsWaitState.Idle;

  outstandingDataRequest: DataRequest | null = null;
  incomingDataQueue: Buffer[] = [];
  writeQueue: { data: Buffer, callback: (err?: any) => void }[] = [];

  setNoDelay() { debug && log('setNoDelay (no-op)'); }
  setKeepAlive() { debug && log('setKeepAlive (no-op)'); }

  connect(port: number | string, host: string, connectListener?: () => void) {
    this.connecting = true;
    if (connectListener) this.once('connect', connectListener);

    const isCloudflare = typeof tlsWasm !== 'string';
    const wsAddr = `${this.wsProxy}?name=${host}:${port}`;
    const wsPromise = isCloudflare ?
      fetch('http://' + wsAddr, { headers: { Upgrade: 'websocket' } }).then(resp => {
        debug && log('Cloudflare WebSocket opened');
        const ws = resp.webSocket;
        if (ws === null) throw new Error('missing webSocket property');
        ws.accept();
        return ws;
      }) :
      new Promise<WebSocket>(resolve => {
        const ws = new WebSocket('ws://' + wsAddr);
        ws.addEventListener('open', () => {
          debug && log('native WebSocket opened');
          resolve(ws);
        });
      });

    Promise.all([
      wsPromise,
      tls_emscripten({
        instantiateWasm: (info: WebAssembly.Imports, receive: (instance: WebAssembly.Instance) => void) => {
          if (isCloudflare) {
            debug && log('creating wasm instance');
            const instance = new WebAssembly.Instance(tlsWasm, info);
            receive(instance);
            return instance.exports;

          } else {
            debug && log('streaming wasm ...');
            WebAssembly.instantiateStreaming(fetch(tlsWasm), info)
              .then(({ instance }) => {
                debug && log('wasm instantiated');
                receive(instance);
              });
            return {};
          }
        },
        provideEncryptedFromNetwork: (buffer: number, maxBytes: number) => {
          debug && log(`provideEncryptedFromNetwork: providing up to ${maxBytes} bytes`);
          return new Promise(resolve => {
            this.outstandingDataRequest = { buffer, maxBytes, resolve };
            this.tlsTick();
          });
        },
        writeEncryptedToNetwork: (buffer: number, size: number) => {
          const arr = this.module.HEAPU8.slice(buffer, buffer + size);
          debug && log(`writeEncryptedToNetwork:`, arr);
          this.ws!.send(arr);
          return size;
        },
      })

    ]).then(([ws, module]) => {
      this.module = module;
      this.ws = ws;
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
        const data = Buffer.from(msg.data as ArrayBuffer) as unknown as Buffer;
        debug && log(`socket received:`, data);

        if (this.tlsState === TlsState.None) {
          debug && log(`emitting data direct`);
          this.emit('data', data);

        } else {
          debug && log(`queuing data`);
          this.incomingDataQueue.push(data);
          this.tlsTick();
        }
      });

      debug && log('socket ready');
      this.connecting = false;
      this.pending = false;
      this.emit('connect');
      this.emit('ready');
    });

    return this;
  }

  startTls(host: string) {
    debug && log(`starting TLS`);
    this.tlsState = TlsState.Handshake;
    this.module.ccall('initTls', 'number', ['string'], [host], { async: true })
      .then(() => {
        debug && log(`TLS connection established`);
        this.tlsState = TlsState.Established;
        this.encrypted = true;
        this.authorized = true;
        this.emit('secureConnection', this);
        this.tlsTick();
      });
  }

  tlsTick(): void {
    debug && log('tick');

    // fulfill any outstanding data request if data available
    if (this.outstandingDataRequest !== null) {
      debug && log('fulfilling outstanding data request ...');

      if (this.incomingDataQueue.length === 0) {
        debug && log('no data available');
        return
      }

      let nextData = this.incomingDataQueue[0];
      const { buffer, maxBytes, resolve } = this.outstandingDataRequest;

      if (nextData.length > maxBytes) {
        debug && log('splitting next chunk');
        this.incomingDataQueue[0] = nextData.subarray(maxBytes);
        nextData = nextData.subarray(0, maxBytes);

      } else {
        debug && log('returning next chunk whole');
        this.incomingDataQueue.shift();
      }

      this.module.HEAPU8.set(nextData, buffer);  // copy data to appropriate memory range
      this.outstandingDataRequest = null;

      debug && log(`supplied:`, nextData);

      resolve(nextData.length);
      return this.tlsTick();
    }

    // else, if we're mid-handshake, ended, or waiting for an async read/write to finish, do nothing
    if (this.tlsState !== TlsState.Established) {
      debug && log('connection not established: nothing to do');
      return;
    }
    if (this.tlsWaitState !== TlsWaitState.Idle) {
      debug && log(`wait state ${this.tlsWaitState}: nothing to do`);
      return;
    }

    // else, if there's data to decrypt/read back, do that
    const undecryptedBytes = this.incomingDataQueue.reduce((memo, arr) => memo + arr.length, 0);
    const unreadBytes = this.module.ccall('pending', 'number', [], []);
    const pendingBytes = undecryptedBytes + unreadBytes;
    if (pendingBytes > 0) {
      this.tlsWaitState = TlsWaitState.WaitRead;
      const receiveBuffer = this.module._malloc(pendingBytes);

      debug && log(`reading up to ${pendingBytes} bytes (${undecryptedBytes} + ${unreadBytes})`);
      this.module.ccall('readData', 'number', ['number', 'number'], [receiveBuffer, pendingBytes], { async: true })
        .then((bytesRead: number) => {
          this.tlsWaitState = TlsWaitState.Idle;

          if (bytesRead > 0) {
            const decryptData = Buffer.alloc(bytesRead);
            decryptData.set(this.module.HEAPU8.subarray(receiveBuffer, receiveBuffer + bytesRead));
            this.module._free(receiveBuffer);

            debug && log(`emitting decrypted data:`, decryptData);
            this.emit('data', decryptData);
            this.tlsTick();

          } else {
            // a zero-length read means a closed connection
            debug && log('socket closed by peer, ending');
            this.ws!.close();
            this.tlsState = TlsState.Ended;
            this.emit('end');
          }
        });

      return;
    }

    // else if data needs writing, write it
    if (this.writeQueue.length > 0) {
      this.tlsWaitState = TlsWaitState.WaitRead;
      const writeItem = this.writeQueue.shift()!;
      const { data, callback } = writeItem;
      const writeLen = data.length;

      debug && log(`encrypting ${writeLen} byte(s)`);
      this.module.ccall('writeData', 'number', ['array', 'number'], [data, writeLen], { async: true })
        .then(() => {
          debug && log('data written:', data);
          this.tlsWaitState = TlsWaitState.Idle;
          callback();
          this.tlsTick();
        });

      return;

    } else {
      debug && log('emitted drain');
      this.emit('drain');
      return;
    }
  }

  write(data: Buffer | string, encoding = 'utf8', callback = (err?: any) => void 0) {
    if (data.length === 0) return callback();
    if (typeof data === 'string') data = Buffer.from(data, encoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      debug && log(`sending data:`, data);
      this.ws!.send(data);

    } else {
      debug && log(`received for encryption:`, data);
      this.writeQueue.push({ data, callback });
      this.tlsTick();
    }

    return true;
  }

  end(data: Buffer | string = Buffer.alloc(0) as unknown as Buffer, encoding = 'utf8', callback?: (() => void)) {
    debug && log('ending socket');
    this.write(data, encoding, () =>
      this.module.ccall('shutdown', 'number', [], [], { async: true })
        .then(() => {
          this.ws!.close();
          if (callback) callback();
        })
    );
    return this;
  }

  destroy() {
    this.destroyed = true;
    return this.end();
  }
}
