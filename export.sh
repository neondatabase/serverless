#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

npx esbuild export/index.ts \
  --bundle \
  --external:ws \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=cjs \
  --target=es2020 \
  --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG

npx gen-esm-wrapper dist/npm/index.js dist/npm/index.mjs

# copy static asset: README

cp README.md dist/npm/

# add pg types

curl --silent https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/pg/index.d.ts \
  > dist/npm/index.d.ts

# supplement pg types with Neon config

echo '

// @neondatabase/serverless driver configuration options follow
' >> dist/npm/index.d.ts

cat export/neonConfig.ts >> dist/npm/index.d.ts

echo '

export interface ClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig

' >> dist/npm/index.d.ts
