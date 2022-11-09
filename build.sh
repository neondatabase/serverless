#!/usr/bin/env zsh

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

npx esbuild src/index.ts --bundle \
  --external:pg-native --external:./tls.wasm --inject:shims/shims.js --loader:.pem=text \
  --splitting --format=esm --outdir=dist/deploy \
  $DEBUG_ARG $MINIFY_ARG

cp shims/net/tls.wasm dist/deploy/
