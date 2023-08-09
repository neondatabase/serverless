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
  --keep-names \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=cjs \
  --target=es2020 \
  --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG

npx gen-esm-wrapper dist/npm/index.js dist/npm/index.mjs

# copy static asset: README

cp LICENSE README.md CONFIG.md DEPLOY.md DEVELOP.md dist/npm/

# add pg types

echo '
// @neondatabase/serverless driver types, mimicking pg

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
  Query,
  Events,
  types,
  defaults,
  native,
} from "pg";
' > dist/npm/index.d.ts

# supplement pg types with Neon config

cat export/neonConfig.ts >> dist/npm/index.d.ts

cat << 'EOF' >> dist/npm/index.d.ts

import {
  ClientBase as PgClientBase,
  Client as PgClient,
  PoolClient as PgPoolClient,
  Pool as PgPool,
} from "pg";

export class ClientBase extends PgClientBase {
  neonConfig: NeonConfigGlobalAndClient;
}

export class Client extends PgClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export interface PoolClient extends PgPoolClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export class Pool extends PgPool {
  connect(): Promise<PoolClient>;
  connect(callback: (err: Error, client: PoolClient, done: (release?: any) => void) => void): void;
  on(event: 'error', listener: (err: Error, client: PoolClient) => void): this;
  on(event: 'connect' | 'acquire' | 'remove', listener: (client: PoolClient) => void): this;
}

export const neonConfig: NeonConfig;


// SQL-over-HTTP

import { FieldDef } from "pg";

export type QueryRows<ArrayMode extends boolean> =
  ArrayMode extends true ? any[][] : Record<string, any>[];

export interface FullQueryResults<ArrayMode extends boolean> {
  fields: FieldDef[];
  command: string;
  rowCount: number;
  rows: QueryRows<ArrayMode>;
  rowAsArray: ArrayMode;
}

export interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
  // tagged-template function usage
  (strings: TemplateStringsArray, ...params: any[]):
    Promise<FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
  // ordinary function usage, with options overrides
  <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(
    strings: string,
    params?: any[],
    options?: {
      arrayMode?: ArrayModeOverride;
      fullResults?: FullResultsOverride;
      fetchOptions?: Record<string, any>;
    }):
    Promise<FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>>;
}

/**
 * This experimental function returns an async tagged-template function that
 * runs a single SQL query (no session or transactions) with low latency over
 * https. By default, it returns database rows directly. Types should match
 * those returned by this driver (i.e. Pool or Client) over WebSockets.
 * 
 * The returned function can also be called directly (i.e. not as a template 
 * function). In that case, pass it a query string with embedded `$1`, `$2` 
 * (etc.), followed by an array of query parameters, followed (optionally) by
 * any of the same options you can pass to this function.
 * 
 * Some examples:
 * ```
 * import { neon } from "@neondatabase/serverless";
 * const h = "hello", w = "world";
 * 
 * // example 1: default options, tagged-template usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql`SELECT ${h} || ' ' || ${w} AS greeting`;  
 * // -> [ { greeting: "hello world" } ]
 * 
 * // example 2: `arrayMode` and `fullResults` options, ordinary function usage
 * const options = { arrayMode: true, fullResults: true };
 * const sql = neon("postgres://user:pass@host/db", options);
 * const rows = await sql("SELECT $1 || ' ' || $2 AS greeting", [h, w]);
 * // -> { 
 * //      command: "SELECT", 
 * //      fields: [ { name: "greeting", dataTypeID: 25 } ],
 * //      rowAsArray: true, 
 * //      rowCount: 1, 
 * //      rows: [ [ "hello world" ] ]
 * //    }
 *
 * // example 3: `fetchOptions` option, ordinary function usage
 * const sql = neon("postgres://user:pass@host/db");
 * const rows = await sql(
 *   "SELECT $1 || ' ' || $2 AS greeting", [h, w],
 *   { fetchOptions: { priority: "high" } }
 * );
 * // -> [ { greeting: "hello world" } ]
 * ```
 * 
 * @param connectionString this has the format `postgres://user:pass@host/db`
 * @param options pass `arrayMode: true` to receive results as an array of 
 * arrays, instead of the default array of objects; pass `fullResults: true`
 * to receive a complete result object similar to one returned by node-postgres
 * (with properties `rows`, `fields`, `command`, `rowCount`, `rowAsArray`);
 * pass as `fetchOptions` an object which will be merged into the options
 * passed to `fetch`.
 */
export function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(
  connectionString: string,
  options?: {
    arrayMode?: ArrayMode;
    fullResults?: FullResults;
    fetchOptions?: Record<string, any>;
  }
): NeonQueryFunction<ArrayMode, FullResults>;

export class NeonDbError extends Error {
  name: 'NeonDbError';
  code: string | null;
  sourceError: Error | undefined;
}
EOF
