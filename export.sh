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

echo '
// shim additional type dependencies
declare class EventEmitter {}
declare const events: { EventEmitter }
declare namespace stream {
  type Duplex = any;
  type Readable = any;
  type Writable = any;
}
declare const pgTypes: any;
type NoticeMessage = any;
type ConnectionOptions = any;
declare const Pg: never;
' > dist/npm/index.d.ts

cat node_modules/@types/pg/index.d.ts \
  >> dist/npm/index.d.ts

# delete external imports/exports

sed -i '' '/^import/d' dist/npm/index.d.ts
sed -i '' '/^export { DatabaseError }/d' dist/npm/index.d.ts


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
