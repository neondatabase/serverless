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
  --keep-names \
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


// experimental SQL-over-HTTP

type SQLParam = null | boolean | number | string | Date | SQLObject | SQLArray;
type SQLObject = { [k: string]: SQLParam };
type SQLArray = SQLParam[];

/**
 * This experimental function returns an async tagged-template function that
 * runs a single SQL query (no session or transactions) with low latency over
 * http. Returns database rows directly. Types should match those returned by
 * node-postgres (`pg`), but some complex or array types are not yet returned
 * correctly.
 * 
 * For example:
 * ```
 * import db from "@neondatabase/serverless";
 * const sql = db("postgres://user:pass@host/db");
 * const h = "hello ", w = "world";
 * const rows = await sql`SELECT ${h} || ${w} AS greeting`;  
 * // -> [ { greeting: "hello world" } ]
 * ```
 * 
 * @param connectionString this has the format `postgres://user:pass@host/db`
 */
export default function db(connectionString: string): (
  strings: TemplateStringsArray | string, 
  ...params: SQLParam[]
) => Promise<any[]>;

' >> dist/npm/index.d.ts
