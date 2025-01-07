import { types as defaultTypes } from '.';
import type { FieldDef, types as PgTypes } from 'pg';
export declare class NeonDbError extends Error {
    name: "NeonDbError";
    severity: string | undefined;
    code: string | undefined;
    detail: string | undefined;
    hint: string | undefined;
    position: string | undefined;
    internalPosition: string | undefined;
    internalQuery: string | undefined;
    where: string | undefined;
    schema: string | undefined;
    table: string | undefined;
    column: string | undefined;
    dataType: string | undefined;
    constraint: string | undefined;
    file: string | undefined;
    line: string | undefined;
    routine: string | undefined;
    sourceError: Error | undefined;
    constructor(message: string);
}
export type QueryRows<ArrayMode extends boolean> = ArrayMode extends true ? any[][] : Record<string, any>[];
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
export interface HTTPQueryOptions<ArrayMode extends boolean, FullResults extends boolean> {
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
    fullResults?: FullResults;
    /**
     * Any options in `fetchOptions` are merged in to the options passed to
     * `fetch`. In case of conflict with what would otherwise be passed, these
     * options take precedence.
     */
    fetchOptions?: Record<string, any>;
    /**
     * JWT auth token to be passed as the Bearer token in the Authorization header
     *
     * Default: `undefined`
     */
    authToken?: string | (() => Promise<string> | string);
    /**
     * Custom type parsers
     * See https://github.com/brianc/node-pg-types
     */
    types?: typeof PgTypes;
    queryCallback?: (query: ParameterizedQuery) => void;
    resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
}
export interface HTTPTransactionOptions<ArrayMode extends boolean, FullResults extends boolean> extends HTTPQueryOptions<ArrayMode, FullResults> {
    isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
    readOnly?: boolean;
    deferrable?: boolean;
}
export interface NeonQueryPromise<ArrayMode extends boolean, FullResults extends boolean, T = any> extends Promise<T> {
    parameterizedQuery: ParameterizedQuery;
    opts?: HTTPQueryOptions<ArrayMode, FullResults>;
}
export interface ProcessQueryResultOptions {
    arrayMode: boolean;
    fullResults: boolean;
    parameterizedQuery: ParameterizedQuery;
    resultCallback: HTTPQueryOptions<false, false>['resultCallback'];
    types?: typeof defaultTypes;
}
export interface NeonQueryFunctionInTransaction<ArrayMode extends boolean, FullResults extends boolean> {
    (strings: TemplateStringsArray, ...params: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
    (string: string, params?: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
}
export interface NeonQueryInTransaction {
    parameterizedQuery: ParameterizedQuery;
}
export interface NeonQueryFunction<ArrayMode extends boolean, FullResults extends boolean> {
    (strings: TemplateStringsArray, ...params: any[]): NeonQueryPromise<ArrayMode, FullResults, FullResults extends true ? FullQueryResults<ArrayMode> : QueryRows<ArrayMode>>;
    <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(string: string, params?: any[], opts?: HTTPQueryOptions<ArrayModeOverride, FullResultsOverride>): NeonQueryPromise<ArrayModeOverride, FullResultsOverride, FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride> : QueryRows<ArrayModeOverride>>;
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
     *   sql`SELECT 1 AS num`,
     *   sql`SELECT 'a' AS str`,
     * ]);
     * // -> [[{ num: 1 }], [{ str: "a" }]]
     *
     * // or equivalently:
     * const results = await sql.transaction(txn => [
     *   txn`SELECT 1 AS num`,
     *   txn`SELECT 'a' AS str`,
     * ]);
     * // -> [[{ num: 1 }], [{ str: "a" }]]
     * ```
     * @param queriesOrFn Either an array of queries, or a (non-`async`) function
     * that receives a query function and returns an array of queries.
     * @param opts The same options that may be set on individual queries in a
     * non-transaction setting -- that is, `arrayMode` `fullResults` and
     * `fetchOptions` -- plus the transaction options `isolationLevel`,
     * `readOnly` and `deferrable`. Note that none of these options can be set on
     * individual queries within a transaction.
     * @returns An array of results. The structure of each result object depends
     * on the `arrayMode` and `fullResults` options.
     */
    transaction: <ArrayModeOverride extends boolean = ArrayMode, FullResultsOverride extends boolean = FullResults>(queriesOrFn: NeonQueryPromise<ArrayMode, FullResults>[] | ((sql: NeonQueryFunctionInTransaction<ArrayModeOverride, FullResultsOverride>) => NeonQueryInTransaction[]), opts?: HTTPTransactionOptions<ArrayModeOverride, FullResultsOverride>) => Promise<FullResultsOverride extends true ? FullQueryResults<ArrayModeOverride>[] : QueryRows<ArrayModeOverride>[]>;
}
export declare function neon<ArrayMode extends boolean = false, FullResults extends boolean = false>(connectionString: string, { arrayMode: neonOptArrayMode, fullResults: neonOptFullResults, fetchOptions: neonOptFetchOptions, isolationLevel: neonOptIsolationLevel, readOnly: neonOptReadOnly, deferrable: neonOptDeferrable, queryCallback, resultCallback, authToken, }?: HTTPTransactionOptions<ArrayMode, FullResults>): NeonQueryFunction<ArrayMode, FullResults>;
