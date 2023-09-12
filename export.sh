#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify --line-limit=80"
fi

npx esbuild export/index.ts \
  --bundle \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=cjs \
  --target=es2020 \
  --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG

# --keep-names \

npx gen-esm-wrapper dist/npm/index.js dist/npm/index.mjs

# copy static asset: README

cp LICENSE README.md CONFIG.md DEPLOY.md DEVELOP.md dist/npm/
