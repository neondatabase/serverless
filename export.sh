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
// @neondatabase/serverless driver types, mimicking pg

import { ClientBase as PgClientBase } from "pg";
export { DatabaseError } from "pg-protocol";
export {
  ClientConfig,
  ConnectionConfig,
  Defaults,
  PoolConfig,
  QueryConfig,
  CustomTypesConfig,
  Submittable,
  QueryArrayConfig,
  FieldDef,
  QueryResultBase,
  QueryResultRow,
  QueryResult,
  QueryArrayResult,
  Notification,
  ResultBuilder,
  QueryParse,
  BindConfig,
  ExecuteConfig,
  MessageConfig,
  Connection,
  Pool,
  Client,
  PoolClient,
  Query,
  Events,
  types,
  defaults,
  native,
} from "pg";
' > dist/npm/index.d.ts

# supplement pg types with Neon config

cat export/neonConfig.ts >> dist/npm/index.d.ts

echo '
export interface ClientBase extends PgClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig;
' >> dist/npm/index.d.ts
