#!/usr/bin/env zsh
(echo 'const tlsWasm = "./shims/net/tls.wasm";' \
 && npx esbuild index.ts --external:pg-native --inject:shims/shims.js --bundle --format=esm) > dist-browser/index.js
