// @ts-ignore because it does exist on Vercel
import tlsWasm from './tls.wasm?module';

export function getWasmInstance(info: any) {
  const instance = new WebAssembly.Instance(tlsWasm, info);
  return instance;
}
