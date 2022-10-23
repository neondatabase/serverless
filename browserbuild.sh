#!/usr/bin/env zsh
(echo 'const tlsWasm = "./shims/net/tls.wasm";' && \
  npx esbuild index.ts --define:DBG=false --minify \
    --external:pg-native --inject:shims/shims.js --bundle --format=esm) \
 > dist-browser/index.js
