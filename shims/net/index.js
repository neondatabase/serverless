import { EventEmitter } from 'events';
import { tls_emscripten } from './tls';
// import tlswasm from './tls.wasm';

function log(...args) {
  console.log(...args);
}

export function isIP(input) {
  return 0;  // if we ever need this to actually work, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
}

export class Socket extends EventEmitter {
  writable = true;
  wsProxy = 'http://proxy.hahathon.monster/';

  #ws = null;
  #module = null;
  #tlsStarted = false;

  constructor() {
    super();
    log('socket constructed');
  }

  setNoDelay() {
    // no-op
  }

  setKeepAlive() {
    // no-op
  }

  ref() {

  }

  unref() {

  }

  connect(port, host) {
    const wsAddr = `${this.wsProxy}?name=${host}:${port}`;
    log(`socket connecting to ${wsAddr}`);

    Promise.all([
      // start websocket connection
      fetch(wsAddr, { headers: { Upgrade: 'websocket' } }),

      // init wasm module
      tls_emscripten({
        instantiateWasm(info, receive) {
          log('loading wasm');
          let instance = new WebAssembly.Instance(tlswasm, info);
          receive(instance);
          return instance.exports;
        },
        provideEncryptedFromNetwork(buf /* number */, maxBytes /* number */) {
          log(`provideEncryptedFromNetwork: providing up to ${maxBytes} bytes`);
          return new Promise(resolve => {
            outstandingDataRequest = { container: buf, maxBytes, resolve };
            dequeueIncomingData();
          });
        },
        writeEncryptedToNetwork(buf /* number */, size /* number */) {
          log(`writeEncryptedToNetwork: writing ${size} bytes`);
          const arr = module.HEAPU8.slice(buf, buf + size);
          socket.send(arr);
          return size;
        },
      }),

    ]).then(([resp, module]) => {
      this.#module = module;

      this.#ws = resp.webSocket;
      this.#ws.accept();
      this.#ws.binaryType = 'arraybuffer';

      this.#ws.addEventListener('error', (err) => {
        throw err;
      });

      this.#ws.addEventListener('close', () => {
        // ?
      });

      this.#ws.addEventListener('message', (msg) => {
        const data = Buffer.from(msg.data);
        log(`socket received ${data.length} byte(s)`);
        this.emit('data', data);
      });

      log('socket connected, ready');
      this.emit('connect');
      this.emit('ready');
    });
  }

  write(data) {
    log(`socket sending ${data.length} byte(s)`);
    this.#ws.send(data);
  }

  end() {
    // TODO
  }

  startTls(host) {
    log(`starting TLS`);
  }
}
