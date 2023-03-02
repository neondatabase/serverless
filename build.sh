#!/usr/bin/env bash

DEBUG_ARG="--define:debug=false"
MINIFY_ARG="--minify"
WATCH_ARG=""

if [ "$1" = "debug" ] || [ "$2" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
fi

if [ "$1" = "watch" ] || [ "$2" = "watch" ]; then
  WATCH_ARG="--watch"
fi

# --inject:shims/shims.js \
npx esbuild src/index.ts \
  --banner:js='
    const setImmediate = globalThis.setImmediate ?? (fn => setTimeout(fn, 0));
    
    const process = globalThis.process ?? {};
    process.env ??= {};
    process.nextTick ??= fn => setTimeout(fn, 0);

    const crypto = globalThis.crypto ?? {};
    crypto.subtle ??= {};
  ' \
  --define:global='globalThis' \
  --inject:shims/shims.js \
  --bundle \
  --external:ws \
  --loader:.pem=text \
  --format=esm \
  --target=es2022 \
  --platform=neutral \
  --main-fields=main \
  --legal-comments=none \
  --outfile=dist/serverless.mjs \
  $DEBUG_ARG $WATCH_ARG $MINIFY_ARG
