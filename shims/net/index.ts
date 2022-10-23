/**
 * - This diagram represents data flow once the TLS handshake has completed.
 * - Data queues contain encrypted incoming data from the network and
 *   unencrypted outgoing data from pg:
 *   - idq = incoming data queue, wq = write queue
 * - Prior to the handshake, pg writes are passed straight to the network and
 *   network data events lead directly to pg data events. 
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
 */

// import tlsWasm from './tls.wasm';
// ^^^ the relevant import is added at the end of the build
// * in browsers, tlsWasm is the path to a WebAssembly file
// * on Cloudflare, tlsWasm is a pre-cooked WebAssembly instance

import { EventEmitter } from 'events';
import { tls_emscripten } from './tls';

declare global {
  const DBG: boolean;
  const tlsWasm: any;  // we'll add this import back in later, see above
  interface Response {
    webSocket: WebSocket;
  }
  interface WebSocket {
    accept: () => void;
  }
}

interface DataRequest {
  buffer: number /* buffer pointer */;
  maxBytes: number;
  resolve: (bytesProvided: number) => void;
}

enum TlsState {
  None,
  Handshake,
  Established,
}

enum TlsWaitState {
  Idle,
  WaitRead,
  WaitWrite,
}

const log = console.log.bind(console);

function bindump(data: Uint8Array) {
  return data.reduce((memo, byte) =>
    memo + ' ' + byte.toString(16).padStart(2, '0'), 'hex:') +
    '\nstr: ' + new TextDecoder().decode(data);
}

export function isIP(input: string) {
  // if we ever need this to work properly, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
  return 0;
}

export class Socket extends EventEmitter {
  connecting = false;
  pending = true;
  writable = true;
  authorized = false;
  wsProxy = 'proxy.hahathon.monster/';

  // private
  ws: WebSocket | null = null;
  module: any = null;
  tlsState = TlsState.None;
  tlsWaitState = TlsWaitState.Idle;

  outstandingDataRequest: DataRequest | null = null;
  incomingDataQueue: Buffer[] = [];
  writeQueue: { data: Buffer, callback: (err?: any) => void }[] = [];

  setNoDelay() { DBG && log('setNoDelay'); }
  setKeepAlive() { DBG && log('setKeepAlive'); }
  ref() { DBG && log('ref'); }
  unref() { DBG && log('unref'); }

  connect(port: number | string, host: string) {
    this.connecting = true;

    const isCloudflare = typeof tlsWasm !== 'string';
    const wsAddr = `${this.wsProxy}?name=${host}:${port}`;
    const wsPromise = isCloudflare ?
      fetch('http://' + wsAddr, { headers: { Upgrade: 'websocket' } }).then(resp => {
        DBG && log('Cloudflare WebSocket opened');
        const ws = resp.webSocket;
        ws.accept();
        return ws;
      }) :
      new Promise<WebSocket>(resolve => {
        const ws = new WebSocket('ws://' + wsAddr);
        ws.addEventListener('open', () => {
          DBG && log('native WebSocket opened');
          resolve(ws);
        });
      });

    Promise.all([
      wsPromise,
      tls_emscripten({
        instantiateWasm: (info: WebAssembly.Imports, receive: (instance: WebAssembly.Instance) => void) => {
          if (isCloudflare) {
            DBG && log('creating wasm instance');
            const instance = new WebAssembly.Instance(tlsWasm, info);
            receive(instance);
            return instance.exports;

          } else {
            DBG && log('streaming wasm ...');
            WebAssembly.instantiateStreaming(fetch(tlsWasm), info)
              .then(({ instance }) => {
                DBG && log('wasm instantiated');
                receive(instance);
              });
            return {};
          }
        },
        provideEncryptedFromNetwork: (buffer: number, maxBytes: number) => {
          DBG && log(`provideEncryptedFromNetwork: providing up to ${maxBytes} bytes`);
          return new Promise(resolve => {
            this.outstandingDataRequest = { buffer, maxBytes, resolve };
            this.tlsTick();
          });
        },
        writeEncryptedToNetwork: (buffer: number, size: number) => {
          DBG && log(`writeEncryptedToNetwork: sending ${size} bytes`);
          const arr = this.module.HEAPU8.slice(buffer, buffer + size);
          this.ws!.send(arr);
          return size;
        },
      })

    ]).then(([ws, module]) => {
      this.module = module;
      this.ws = ws;
      this.ws.binaryType = 'arraybuffer';

      this.ws.addEventListener('error', (err) => {
        DBG && log('websocket error', err);
        this.emit('error', err);
      });

      this.ws.addEventListener('close', () => {
        DBG && log('websocket closed');
        this.emit('close');
      });

      this.ws.addEventListener('message', (msg: { data: ArrayBuffer }) => {
        const data = Buffer.from(msg.data) as unknown as Buffer;
        DBG && log(`socket received ${data.length} byte(s)`);

        if (this.tlsState === TlsState.None) {
          DBG && log(`emitting data direct`);
          this.emit('data', data);

        } else {
          DBG && log(`queuing data`);
          this.incomingDataQueue.push(data);
          this.tlsTick();
        }
      });

      DBG && log('socket ready');
      this.connecting = false;
      this.pending = false;
      this.emit('connect');
      this.emit('ready');
    });
  }

  startTls(host: string) {
    DBG && log(`starting TLS`);
    this.tlsState = TlsState.Handshake;
    this.module.ccall('initTls', 'number', ['string'], [host], { async: true })
      .then(() => {
        DBG && log(`TLS connection established`);
        this.tlsState = TlsState.Established;
        this.authorized = true;
        this.emit('secureConnection', this);
        this.tlsTick();
      });
  }

  pause() {
    throw new Error('not implemented');
  }

  resume() {
    throw new Error('not implemented');
  }

  tlsTick(): void {
    DBG && log('tick');

    // fulfill an outstanding data request if data available
    if (this.outstandingDataRequest !== null) {
      DBG && log('fulfilling outstanding data request ...');

      if (this.incomingDataQueue.length === 0) {
        DBG && log('no data available');
        return
      }

      let nextData = this.incomingDataQueue[0];
      const { buffer, maxBytes, resolve } = this.outstandingDataRequest;

      if (nextData.length > maxBytes) {
        DBG && log('splitting next chunk');
        this.incomingDataQueue[0] = nextData.subarray(maxBytes);
        nextData = nextData.subarray(0, maxBytes);

      } else {
        DBG && log('returning next chunk whole');
        this.incomingDataQueue.shift();
      }

      this.module.HEAPU8.set(nextData, buffer);  // copy data to appropriate memory range
      this.outstandingDataRequest = null;

      const len = nextData.length;
      DBG && log(`${len} bytes supplied`);

      resolve(len);
      return this.tlsTick();
    }

    // do nothing if we're mid-handshake or waiting for an async read or write to finish
    if (this.tlsState === TlsState.Handshake) {
      DBG && log('mid-handshake: nothing to do');
      return;
    }
    if (this.tlsWaitState !== TlsWaitState.Idle) {
      DBG && log(`wait state ${this.tlsWaitState}: nothing to do`);
      return;
    }

    // data needs decrypting/reading?
    const undecryptedBytes = this.incomingDataQueue.reduce((memo, arr) => memo + arr.length, 0);
    const unreadBytes = this.module.ccall('pending', 'number', [], []);
    const pendingBytes = undecryptedBytes + unreadBytes;
    if (pendingBytes > 0) {
      this.tlsWaitState = TlsWaitState.WaitRead;
      const receiveBuffer = this.module._malloc(pendingBytes);

      DBG && log(`reading up to ${pendingBytes} bytes (${undecryptedBytes} + ${unreadBytes})`);
      this.module.ccall('readData', 'number', ['number', 'number'], [receiveBuffer, pendingBytes], { async: true })
        .then((bytesRead: number) => {
          const decryptData = Buffer.alloc(bytesRead);
          decryptData.set(this.module.HEAPU8.subarray(receiveBuffer, receiveBuffer + bytesRead));
          this.module._free(receiveBuffer);

          DBG && log(`emitting ${decryptData.length} bytes of decrypted data`, bindump(decryptData));
          this.emit('data', decryptData);

          this.tlsWaitState = TlsWaitState.Idle;
          this.tlsTick();
        });

      return;
    }

    // data needs writing?
    if (this.writeQueue.length > 0) {
      this.tlsWaitState = TlsWaitState.WaitRead;
      const writeItem = this.writeQueue.shift()!;
      const { data, callback } = writeItem;
      const writeLen = data.length;

      DBG && log(`encrypting ${writeLen} byte(s)`);
      this.module.ccall('writeData', 'number', ['array', 'number'], [data, writeLen], { async: true })
        .then(() => {
          DBG && log('data written');
          this.tlsWaitState = TlsWaitState.Idle;
          callback();
          this.tlsTick();
        });

      return;

    } else {
      DBG && log('emitted drain');
      this.emit('drain');
      return;
    }
  }

  write(data: Buffer | string, encoding = 'utf8', callback = (err: any) => void 0) {
    if (typeof data === 'string') data = Buffer.from(data, encoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      DBG && log(`sending ${data.length} byte(s):`, bindump(data));
      this.ws!.send(data);

    } else {
      DBG && log(`received ${data.length} byte(s) for encryption:`, bindump(data));
      this.writeQueue.push({ data, callback });
      this.tlsTick();
    }

    return true;
  }

  end() {
    // no-op
  }

  destroy() {
    this.ws!.close();
  }
}
