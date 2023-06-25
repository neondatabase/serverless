#!/usr/bin/env bash

DEBUG_ARG="--define:debug=false"
MINIFY_ARG="--minify --line-limit=80"
WATCH_ARG=""

if [ "$1" = "debug" ] || [ "$2" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
fi

if [ "$1" = "watch" ] || [ "$2" = "watch" ]; then
  WATCH_ARG="--watch"
fi

npx esbuild src/index.ts \
  --bundle \
  --keep-names \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=esm \
  --target=es2022 \
  --platform=neutral \
  --main-fields=main \
  --outfile=dist/serverless.mjs \
  $DEBUG_ARG $WATCH_ARG $MINIFY_ARG
