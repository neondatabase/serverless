// @ts-ignore because it does exist on Cloudflare Workers
import tlsWasm from './tls.wasm';

export function getWasmInstance(info: any) {
  const instance = new WebAssembly.Instance(tlsWasm, info);
  return instance;
}
