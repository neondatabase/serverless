#!/usr/bin/env zsh
cp shims/net/tls.wasm dist-common/
npx esbuild index.ts \
  --external:pg-native --inject:shims/shims.js \
  --bundle --format=esm \
  --define:debug=false | \
tee >((echo 'const tlsWasm = "../dist-common/tls.wasm";' && cat -) > dist-browser/index.js) | \
  (echo 'import tlsWasm from "../dist-common/tls.wasm";' && cat -) > dist-cf/index.js
