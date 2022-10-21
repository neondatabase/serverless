import { EventEmitter } from 'events';
import { tls_emscripten } from './tls';
// import tlsWasm from './tls.wasm';

function log(...args) {
  console.log(...args);
}

function b(data) {
  return data.reduce((memo, byte) => memo + ' ' + byte.toString(16).padStart(2, '0'), '') + ' / ' +
    new TextDecoder().decode(data);
}

export function isIP(input) {
  return 0;  // if we ever need this to actually work, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
}

// interface DataRequest {
//   container: number /* emscripten buffer pointer */;
//   maxBytes: number;
//   resolve: (bytesProvided: number) => void;
// }

export class Socket extends EventEmitter {
  writable = true;
  authorized = false;
  wsProxy = 'proxy.hahathon.monster/';

  // private
  ws = null;
  module = null;
  incomingDataQueue /* Uint8Array[] */ = [];
  outstandingDataRequest /* DataRequest | null */ = null;
  tlsConnectionPromise = null;
  latestWritePromise = Promise.resolve(0);

  setNoDelay() { log('setNoDelay'); }
  setKeepAlive() { log('setKeepAlive'); }
  ref() { log('ref'); }
  unref() { log('unref'); }

  connect(port, host) {
    const wsAddr = `${this.wsProxy}?name=${host}:${port}`;
    const cf = typeof tlsWasm !== 'string';

    const wsPromise = cf ?
      fetch('http://' + wsAddr, { headers: { Upgrade: 'websocket' } }).then(resp => {
        const ws = resp.webSocket;
        ws.accept();
        log('Cloudflare WebSocket opened');
        return ws;
      }) :
      new Promise(resolve => {
        const ws = new WebSocket('ws://' + wsAddr);
        ws.addEventListener('open', () => {
          log('native WebSocket opened');
          resolve(ws);
        });
      });

    Promise.all([
      wsPromise,
      tls_emscripten({
        instantiateWasm: (info, receive) => {
          if (cf) {
            log('loading wasm');
            const instance = new WebAssembly.Instance(tlsWasm, info);
            receive(instance);
            return instance.exports;

          } else {
            log('streaming wasm');
            WebAssembly.instantiateStreaming(fetch(tlsWasm), info).then(({ instance, module }) => {
              receive(instance, module);
            });
            return {};
          }
        },
        provideEncryptedFromNetwork: (buf /* number */, maxBytes /* number */) => {
          log(`provideEncryptedFromNetwork: providing up to ${maxBytes} bytes`);
          return new Promise(resolve => {
            this.outstandingDataRequest = { container: buf, maxBytes, resolve };
            this.dequeueIncomingData();
          });
        },
        writeEncryptedToNetwork: (buf /* number */, size /* number */) => {
          log(`writeEncryptedToNetwork: sending ${size} bytes`);
          const arr = this.module.HEAPU8.slice(buf, buf + size);
          // log(b(arr));
          this.ws.send(arr);
          return size;
        },
      })

    ]).then(([ws, module]) => {
      this.module = module;

      this.ws = ws;
      this.ws.binaryType = 'arraybuffer';

      this.ws.addEventListener('error', (err) => {
        throw err;
      });

      this.ws.addEventListener('close', () => {
        // ?
      });

      this.ws.addEventListener('message', (msg) => {
        const data = Buffer.from(msg.data);
        log(`socket received ${data.length} byte(s)`);

        if (this.tlsConnectionPromise === null) {
          log(`emitting received data direct`);
          this.emit('data', data);

        } else {
          this.latestWritePromise.then(() => {
            this.incomingDataQueue.push(data);
            this.dequeueIncomingData();

            if (this.authorized && this.incomingDataQueue.length > 0) {
              log('prompting decryption');
              const maxBytes = this.incomingDataQueue.reduce((memo, arr) => memo + arr.length, 0);
              const buf = this.module._malloc(maxBytes);

              this.module.ccall('readData', 'number', ['number', 'number'], [buf, maxBytes], { async: true })
                .then(bytesRead => {
                  const decryptData = new Uint8Array(bytesRead);
                  decryptData.set(this.module.HEAPU8.subarray(buf, buf + bytesRead));
                  this.module._free(buf);

                  log(`emitting ${decryptData.length} bytes of decrypted data`, b(decryptData));
                  this.emit('data', Buffer.from(decryptData));

                  // TODO: what if there's more to be read?
                  log('might get stuck here', this.incomingDataQueue);
                });

            } else {
              // TODO: nothing?
            }
          });
        }
      });

      log('socket connected, ready');
      this.emit('connect');
      this.emit('ready');
    });
  }

  dequeueIncomingData() {
    log('dequeue to wasm for decryption...');
    if (this.incomingDataQueue.length === 0) return log('no data available');
    if (this.outstandingDataRequest === null) return log('data available but not awaited');

    let nextData = this.incomingDataQueue[0];
    const { container, maxBytes, resolve } = this.outstandingDataRequest;

    if (nextData.length > maxBytes) {
      log('splitting next chunk');
      this.incomingDataQueue[0] = nextData.subarray(maxBytes);
      nextData = nextData.subarray(0, maxBytes);

    } else {
      log('returning next chunk whole');
      this.incomingDataQueue.shift();
    }

    this.module.HEAPU8.set(nextData, container);  // copy data to appropriate memory range
    this.outstandingDataRequest = null;

    const len = nextData.length;
    log(`${len} bytes dequeued`);

    resolve(len);
  }

  write(data, encoding = 'utf8', callback = () => void 0) {
    if (typeof data === 'string') data = new TextEncoder(encoding).encode(data);

    if (this.tlsConnectionPromise === null) {
      log(`sending ${data.length} byte(s):`, b(data));
      this.ws.send(data);
      callback();

    } else {
      log(`received ${data.length} byte(s) for encryption:`, b(data));
      this.tlsConnectionPromise.then(() => {
        log(`encrypting ${data.length} byte(s)`);
        this.latestWritePromise = this.module.ccall('writeData', 'number', ['array', 'number'], [data, data.length], { async: true });
        this.latestWritePromise.then(() => {
          log('finished write');
          callback();
        });
      });
    }

    return true;
  }

  end() {
    // TODO
  }

  startTls(host) {
    log(`starting TLS`);
    this.tlsConnectionPromise = this.module.ccall('initTls', 'number', ['string'], [host], { async: true });
    this.tlsConnectionPromise.then(() => {
      log(`TLS connected`);
      this.authorized = true;
      this.emit('secureConnection', this);
    });
  }
}
