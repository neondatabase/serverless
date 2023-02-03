#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  WATCH_ARG="--watch"
  MINIFY_ARG=""
elif [ "$1" = "watch" ]; then
  DEBUG_ARG="--define:debug=false"
  WATCH_ARG="--watch"
  MINIFY_ARG="--minify"
else 
  DEBUG_ARG="--define:debug=false"
  WATCH_ARG=""
  MINIFY_ARG="--minify"
fi

npx esbuild src/index.ts --bundle \
  --external:pg-native --inject:shims/shims.js --loader:.pem=text \
  --format=esm --target=es2020 --platform=neutral --main-fields=main --outdir=dist/deploy \
  $DEBUG_ARG $WATCH_ARG $MINIFY_ARG
