#!/usr/bin/env zsh

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

npx esbuild src/index.ts \
  --external:pg-native --inject:shims/shims.js --loader:.pem=text \
  --bundle --format=esm \
  $DEBUG_ARG $MINIFY_ARG | \
tee >((echo 'const tlsWasm = "../tls.wasm";' && cat -) > dist/browser/index.js) | \
  (echo 'import tlsWasm from "../tls.wasm";' && cat -) > dist/cf/index.js

cp shims/net/tls.wasm dist/