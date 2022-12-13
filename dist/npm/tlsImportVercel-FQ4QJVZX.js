import {
  __esm,
  init_shims
} from "./chunk-2N77YSA6.js";

// shims/net/tlsImportVercel.ts
import tlsWasm from "./tls.wasm?module";
function getWasmInstance(info) {
  const instance = new WebAssembly.Instance(tlsWasm, info);
  return instance;
}
var init_tlsImportVercel = __esm({
  "shims/net/tlsImportVercel.ts"() {
    init_shims();
  }
});
init_tlsImportVercel();
export {
  getWasmInstance
};
