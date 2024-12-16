import { types as defaultTypes } from '.';
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
interface ParameterizedQuery {
    query: string;
    params: any[];
}
interface HTTPQueryOptions {
    arrayMode?: boolean;
    fullResults?: boolean;
    fetchOptions?: Record<string, any>;
    types?: typeof defaultTypes;
    queryCallback?: (query: ParameterizedQuery) => void;
    resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
    authToken?: string | (() => Promise<string> | string);
}
interface HTTPTransactionOptions extends HTTPQueryOptions {
    isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
    readOnly?: boolean;
    deferrable?: boolean;
}
interface NeonQueryPromise<T = any> extends Promise<T> {
    parameterizedQuery: ParameterizedQuery;
    opts?: HTTPQueryOptions;
}
export declare function neon(connectionString: string, { arrayMode: neonOptArrayMode, fullResults: neonOptFullResults, fetchOptions: neonOptFetchOptions, isolationLevel: neonOptIsolationLevel, readOnly: neonOptReadOnly, deferrable: neonOptDeferrable, queryCallback, resultCallback, authToken, }?: HTTPTransactionOptions): {
    (strings: TemplateStringsArray | string, ...params: any[]): NeonQueryPromise;
    transaction(queries: NeonQueryPromise[] | ((sql: /*elided*/ any) => NeonQueryPromise[]), txnOpts?: HTTPTransactionOptions): Promise<any>;
};
export {};
