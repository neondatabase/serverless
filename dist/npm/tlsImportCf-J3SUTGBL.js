import {
  __esm,
  init_shims
} from "./chunk-2N77YSA6.js";

// shims/net/tlsImportCf.ts
import tlsWasm from "./tls.wasm";
function getWasmInstance(info) {
  const instance = new WebAssembly.Instance(tlsWasm, info);
  return instance;
}
var init_tlsImportCf = __esm({
  "shims/net/tlsImportCf.ts"() {
    init_shims();
  }
});
init_tlsImportCf();
export {
  getWasmInstance
};
