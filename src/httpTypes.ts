import type { FieldDef, types as PgTypes } from 'pg';
import { types as defaultTypes } from '.';
import type { NeonQueryPromise } from './httpQuery';
import type { SqlTemplate, UnsafeRawSql } from './sqlTemplate';

export type QueryRows<ArrayMode extends boolean> = ArrayMode extends true
  ? any[][]
  : Record<string, any>[];

export interface FullQueryResults<ArrayMode extends boolean> {
  fields: FieldDef[];
  command: string;
  rowCount: number;
  rows: QueryRows<ArrayMode>;
  rowAsArray: ArrayMode;
}

export interface ParameterizedQuery {
  query: string;
  params: any[];
}

export interface HTTPQueryOptions<
  ArrayMode extends boolean,
  FullResults extends boolean,
> {
  /**
   * When `arrayMode` is `false`, which is the default, result rows are
   * returned as objects whose keys represent column names, such as
   * `{ id: 1 }`).
   *
   * When `arrayMode` is `true`, rows are returned as arrays (and keys are not
   * provided), e.g. `[1]`.
   */
  arrayMode?: ArrayMode;

  /**
   * When `fullResults` is `false`, which is the default, only result rows are
   * returned, e.g. `[{ id: 1 }]`).
   *
   * When `fullResults` is `true`, a result object is returned that matches
   * what's returned by node-postgres. This has a `rows` property, which is an
   * array of result rows, plus `fields`, which provides column names and
   * types, `command` and `rowCount`.
   */
  fullResults?: FullResults; // default false

  /**
   * Any options in `fetchOptions` are merged in to the options passed to
   * `fetch`. In case of conflict with what would otherwise be passed, these
   * options take precedence.
   */
  fetchOptions?: Record<string, any>;

  /**
   * JWT auth token to be passed as the Bearer token in the Authorization header.
   * Can be string, or a function (sync or async) returning a string.
   *
   * Default: `undefined`
   */
  authToken?: string | (() => Promise<string> | string);

  /**
   * Custom type parsers. See https://github.com/brianc/node-pg-types.
   */
  types?: typeof PgTypes;
}

export interface HTTPTransactionOptions<
  ArrayMode extends boolean,
  FullResults extends boolean,
> extends HTTPQueryOptions<ArrayMode, FullResults> {
  /**
   * Postgres transaction isolation level: see https://www.postgresql.org/docs/current/transaction-iso.html.
   * Note that `ReadUncommitted` actually gets you `ReadCommitted` in Postgres.
   * */
  isolationLevel?:
    | 'ReadUncommitted'
    | 'ReadCommitted'
    | 'RepeatableRead'
    | 'Serializable';

  /**
   * When `readOnly` is `false`, which is the default, a `READ WRITE` Postgres
   * transaction is used.
   *
   * When `readOnly` is `true`, a `READ ONLY` Postgres transaction is used.
   * */
  readOnly?: boolean;

  /**
   * When `deferrable` is `false`, which is the default, a `NOT DEFERRABLE`
   * Postgres transaction is used.
   *
   * When `deferrable` is `true` (and `isolationLevel` is `Serializable` and
   * `readOnly` is `true`), a `DEFERRABLE` Postgres transaction is used.
   * */
  deferrable?: boolean;
}

// export interface NeonQueryPromise<
//   ArrayMode extends boolean,
//   FullResults extends boolean,
//   T = any,
// > extends Promise<T> {
//   query: SqlTemplate | ParameterizedQuery;
//   opts?: HTTPQueryOptions<ArrayMode, FullResults>;
// }

export interface ProcessQueryResultOptions {
  arrayMode: boolean;
  fullResults: boolean;
  types?: typeof defaultTypes;
}

export interface NeonQueryFunctionInTransaction<
  ArrayMode extends boolean,
  FullResults extends boolean,
> {
  // this is a simplified form of NeonQueryFunction (below):
  // * `opts` cannot be passed
  // * no `transaction()` method is available

  // tagged-template function usage
  (
    strings: TemplateStringsArray,
    ...params: any[]
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true
      ? FullQueryResults<ArrayMode>
      : QueryRows<ArrayMode>
  >;

  // traditional query function (*no* options overrides)
  query(
    queryWithPlaceholders: string,
    params?: any[],
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true
      ? FullQueryResults<ArrayMode>
      : QueryRows<ArrayMode>
  >;

  unsafe(rawSQL: string): UnsafeRawSql;

  // no transaction function
}

export interface NeonQueryInTransaction {
  // this is a simplified form of NeonQueryPromise, which has only `queryData` (no `opts` and not a `Promise`)
  queryData: SqlTemplate | ParameterizedQuery;
}

export interface NeonQueryFunction<
  ArrayMode extends boolean,
  FullResults extends boolean,
> {
  (
    strings: TemplateStringsArray,
    ...params: any[]
  ): NeonQueryPromise<
    ArrayMode,
    FullResults,
    FullResults extends true
      ? FullQueryResults<ArrayMode>
      : QueryRows<ArrayMode>
  >;

  /**
   * The `query()` function takes a query string with embedded `$1`, `$2`
   * (etc.) placeholders, followed by an array of query parameters, followed
   * (optionally) by query options. For example:
   *
   * ```
   * const sql = neon("postgres://user:pass@host/db");
   * const rows = await sql.query(
   *   "SELECT * FROM table WHERE id = $1", [123],
   *   { fetchOptions: { priority: "high" } }
   * );
   * // -> [ { greeting: "hello world" } ]
   * ```
   *
   * @param queryWithPlaceholders - SQL query with numbered placeholders (`$1`, `$2`, etc.), e.g. `"SELECT * FROM table WHERE id = $1"`
   * @param params - array of values corresponding to placeholders, e.g. `[123]`
   * @param queryOpts - e.g. query options, e.g. `{ fetchOptions: { priority: "high" } }`
   */
  query<
    ArrayModeOverride extends boolean = ArrayMode,
    FullResultsOverride extends boolean = FullResults,
  >(
    queryWithPlaceholders: string,
    params?: any[],
    queryOpts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>,
  ): NeonQueryPromise<
    ArrayModeOverride,
    FullResultsOverride,
    FullResultsOverride extends true
      ? FullQueryResults<ArrayModeOverride>
      : QueryRows<ArrayModeOverride>
  >;

  /**
   * The `unsafe()` function allows arbitrary strings to be interpolated in a
   * SQL query. This must be used only with trusted string values under your
   * control.
   *
   * ```
   * const sql = neon("postgres://user:pass@host/db");
   * const colName = 'greeting';
   * const rows = await sql`SELECT 'hello world' AS ${sql.unsafe(colName)}`;
   * ```
   *
   * @param rawSQL - string, SQL fragment
   */
  unsafe(rawSQL: string): UnsafeRawSql;

  /**
   * The `transaction()` function allows multiple queries to be submitted (over
   * HTTP) as a single, non-interactive Postgres transaction.
   *
   * For example:
   * ```
   * import { neon } from "@neondatabase/serverless";
   * const sql = neon("postgres://user:pass@host/db");
   *
   * const results = await sql.transaction([
   *   sql`SELECT ${1} AS num`,
   *   sql`SELECT ${'a'} AS str`,
   * ]);
   * // -> [[{ num: 1 }], [{ str: "a" }]]
   *
   * // or equivalently:
   * const results = await sql.transaction(txn => [
   *   txn`SELECT ${1} AS num`,
   *   txn`SELECT ${'a'} AS str`,
   * ]);
   * // -> [[{ num: 1 }], [{ str: "a" }]]
   * ```
   * @param queriesOrFn - Either an array of queries, or a (non-`async`) function
   * that receives a query function and returns an array of queries.
   * @param opts - The same options that may be set on individual queries in a
   * non-transaction setting -- that is, `arrayMode` `fullResults` and
   * `fetchOptions` -- plus the transaction options `isolationLevel`,
   * `readOnly` and `deferrable`. Note that none of these options can be set on
   * individual queries within a transaction.
   * @returns An array of results. The structure of each result object depends
   * on the `arrayMode` and `fullResults` options.
   */
  transaction: <
    ArrayModeOverride extends boolean = ArrayMode,
    FullResultsOverride extends boolean = FullResults,
  >(
    queriesOrFn:
      | NeonQueryPromise<ArrayMode, FullResults>[] // not ArrayModeOverride or FullResultsOverride: clamp these values to the current ones
      | ((
          sql: NeonQueryFunctionInTransaction<
            ArrayModeOverride,
            FullResultsOverride
          >,
        ) => NeonQueryInTransaction[]),
    opts?: HTTPTransactionOptions<ArrayModeOverride, FullResultsOverride>,
  ) => Promise<
    FullResultsOverride extends true
      ? FullQueryResults<ArrayModeOverride>[]
      : QueryRows<ArrayModeOverride>[]
  >;
}
