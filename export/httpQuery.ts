import { types as defaultTypes } from '.';
import { Socket } from '../shims/net';
import { parse } from '../shims/url';

// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from 'pg/lib/utils';
// @ts-ignore -- this isn't officially exported by pg
import TypeOverrides from 'pg/lib/type-overrides';

function encodeBuffersAsBytea(value: unknown): unknown {
  if (value instanceof Buffer) {
    // convert Buffer to bytea hex format
    // https://www.postgresql.org/docs/current/datatype-binary.html#DATATYPE-BINARY-BYTEA-HEX-FORMAT
    return '\\x' + value.toString('hex');
  }
  return value;
}

export class NeonDbError extends Error {
  name = 'NeonDbError' as const;

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

  constructor(message: string) {
    super(message);

    if ('captureStackTrace' in Error && typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NeonDbError);
    }
  }
}

interface ParameterizedQuery {
  query: string;
  params: any[];
}

interface HTTPQueryOptions {
  arrayMode?: boolean; // default false
  fullResults?: boolean; // default false
  fetchOptions?: Record<string, any>;
  types?: typeof defaultTypes;

  // these callback options are not currently exported:
  queryCallback?: (query: ParameterizedQuery) => void;
  resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;

  // JWT auth token to be passed as the Bearer token in the Authorization
  // header
  authToken?: string | (() => Promise<string> | string);
}

interface HTTPTransactionOptions extends HTTPQueryOptions {
  // note that ReadUncommitted is really ReadCommitted in Postgres: https://www.postgresql.org/docs/current/transaction-iso.html
  isolationLevel?: 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
  readOnly?: boolean;
  deferrable?: boolean;
}

interface NeonQueryPromise<T = any> extends Promise<T> {
  parameterizedQuery: ParameterizedQuery;
  opts?: HTTPQueryOptions;
}

interface ProcessQueryResultOptions {
  arrayMode: boolean;
  fullResults: boolean;
  parameterizedQuery: ParameterizedQuery;
  resultCallback: HTTPQueryOptions['resultCallback'];
  types?: typeof defaultTypes;
}

const txnArgErrMsg = 'transaction() expects an array of queries, or a function returning an array of queries';
const errorFields = [
  'severity',
  'code',
  'detail',
  'hint',
  'position',
  'internalPosition',
  'internalQuery',
  'where',
  'schema',
  'table',
  'column',
  'dataType',
  'constraint',
  'file',
  'line',
  'routine',
] as const;

/* 
Most config options can be set in 3 places:

* in a call to `neon`, 
* in a call to `transaction`, 
* or in the call to `sql` (i.e. the function returned by `neon`).

The option variables corresponding these levels are prefixed
`neonOpt`, `txnOpt` and `sqlOpt` respectively.

As you would expect, options at lower levels override higher levels. 
That is:

* `sql` options override `transaction` ones,
* `transaction` options override `neon` ones, and
* `neon` options override defaults.
*/

export function neon(
  connectionString: string,
  {
    arrayMode: neonOptArrayMode,
    fullResults: neonOptFullResults,
    fetchOptions: neonOptFetchOptions,
    isolationLevel: neonOptIsolationLevel,
    readOnly: neonOptReadOnly,
    deferrable: neonOptDeferrable,
    queryCallback,
    resultCallback,
    authToken,
  }: HTTPTransactionOptions = {},
) {
  // check the connection string

  if (!connectionString)
    throw new Error(
      'No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?',
    );

  let db;
  try {
    db = parse(connectionString);
  } catch {
    throw new Error(
      'Database connection string provided to `neon()` is not a valid URL. Connection string: ' +
        String(connectionString),
    );
  }

  const { protocol, username, hostname, port, pathname } = db;
  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !username || !hostname || !pathname) {
    throw new Error(
      'Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value',
    );
  }

  // resolve query, params and opts
  function resolve(strings: TemplateStringsArray | string, ...params: any[]): NeonQueryPromise {
    let query;
    let queryOpts: HTTPQueryOptions | undefined;

    if (typeof strings === 'string') {
      // ordinary (non tagged-template) usage
      query = strings;

      // options passed here override options passed to neon
      queryOpts = params[1]; // the third argument, which is the second of the ...rest arguments
      params = params[0] ?? []; // the second argument, which is the first of the ...rest arguments
    } else {
      // tagged-template usage
      query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += '$' + (i + 1);
      }
    }

    // prepare the query params to make timezones and array types consistent with ordinary node-postgres/pg
    params = params.map((param) => encodeBuffersAsBytea(prepareValue(param)));

    const parameterizedQuery = { query, params };
    if (queryCallback) queryCallback(parameterizedQuery);

    return createNeonQueryPromise(execute, parameterizedQuery, queryOpts);
  }

  resolve.transaction = async (
    queries: NeonQueryPromise[] | ((sql: (strings: TemplateStringsArray | string, ...params: any[]) => NeonQueryPromise) => NeonQueryPromise[]),
    txnOpts?: HTTPTransactionOptions,
  ) => {
    if (typeof queries === 'function') queries = queries(resolve);

    if (!Array.isArray(queries)) throw new Error(txnArgErrMsg);
    queries.forEach((query) => {
      if (query[Symbol.toStringTag] !== 'NeonQueryPromise') throw new Error(txnArgErrMsg);
    });

    const parameterizedQueries = queries.map((query) => (query as NeonQueryPromise).parameterizedQuery);
    const opts = queries.map((query) => (query as NeonQueryPromise).opts ?? {});
    return execute(parameterizedQueries, opts, txnOpts);
  };

  // execute query
  async function execute(
    parameterizedQuery: ParameterizedQuery | ParameterizedQuery[],
    allSqlOpts?: HTTPQueryOptions | HTTPQueryOptions[],
    txnOpts?: HTTPTransactionOptions,
  ) {
    const { fetchEndpoint, fetchFunction } = Socket;

    const bodyData = Array.isArray(parameterizedQuery) ? { queries: parameterizedQuery } : parameterizedQuery;

    // --- resolve options to transaction level ---

    let resolvedFetchOptions = neonOptFetchOptions ?? {};
    let resolvedArrayMode = neonOptArrayMode ?? false;
    let resolvedFullResults = neonOptFullResults ?? false;
    let resolvedIsolationLevel = neonOptIsolationLevel; // default is undefined
    let resolvedReadOnly = neonOptReadOnly; // default is undefined
    let resolvedDeferrable = neonOptDeferrable; // default is undefined

    // batch query
    if (txnOpts !== undefined) {
      if (txnOpts.fetchOptions !== undefined)
        resolvedFetchOptions = {
          ...resolvedFetchOptions,
          ...txnOpts.fetchOptions,
        };
      if (txnOpts.arrayMode !== undefined) resolvedArrayMode = txnOpts.arrayMode;
      if (txnOpts.fullResults !== undefined) resolvedFullResults = txnOpts.fullResults;
      if (txnOpts.isolationLevel !== undefined) resolvedIsolationLevel = txnOpts.isolationLevel;
      if (txnOpts.readOnly !== undefined) resolvedReadOnly = txnOpts.readOnly;
      if (txnOpts.deferrable !== undefined) resolvedDeferrable = txnOpts.deferrable;
    }

    // single query -- cannot be true at same time as `txnOpts !== undefined` above
    if (allSqlOpts !== undefined && !Array.isArray(allSqlOpts) && allSqlOpts.fetchOptions !== undefined) {
      resolvedFetchOptions = {
        ...resolvedFetchOptions,
        ...allSqlOpts.fetchOptions,
      };
    }

    // --- resolve auth token usage ---
    let resolvedAuthToken = authToken;
    if (!Array.isArray(allSqlOpts) && allSqlOpts?.authToken !== undefined) {
      resolvedAuthToken = allSqlOpts.authToken;
    }

    // --- set up the URL ---
    const url =
      typeof fetchEndpoint === 'function'
        ? fetchEndpoint(hostname, port, {
            jwtAuth: resolvedAuthToken !== undefined,
          })
        : fetchEndpoint;

    // --- set headers ---
    const headers: Record<string, string> = {
      'Neon-Connection-String': connectionString,
      'Neon-Raw-Text-Output': 'true', // because we do our own parsing with node-postgres
      'Neon-Array-Mode': 'true', // this saves data and post-processing even if we return objects, not arrays
    };

    // --- add auth token to headers ---
    const validAuthToken = await getAuthToken(resolvedAuthToken);
    if (validAuthToken) {
      headers['Authorization'] = `Bearer ${validAuthToken}`;
    }

    if (Array.isArray(parameterizedQuery)) {
      // only send these headers for batch queries, where they matter
      if (resolvedIsolationLevel !== undefined)
        headers['Neon-Batch-Isolation-Level'] = resolvedIsolationLevel;
      if (resolvedReadOnly !== undefined) headers['Neon-Batch-Read-Only'] = String(resolvedReadOnly);
      if (resolvedDeferrable !== undefined) headers['Neon-Batch-Deferrable'] = String(resolvedDeferrable);
    }

    // --- run query ---

    let response;
    try {
      response = await (fetchFunction ?? fetch)(url, {
        method: 'POST',
        body: JSON.stringify(bodyData), // TODO: use json-custom-numbers to allow BigInts?
        headers,
        ...resolvedFetchOptions, // this is last, so it gets the final say
      });
    } catch (err: any) {
      const connectErr = new NeonDbError(`Error connecting to database: ${err}`);
      connectErr.sourceError = err;
      throw connectErr;
    }

    if (response.ok) {
      const rawResults = (await response.json()) as any;

      if (Array.isArray(parameterizedQuery)) {
        // batch query
        const resultArray = rawResults.results;
        if (!Array.isArray(resultArray))
          throw new NeonDbError('Neon internal error: unexpected result format');
        return resultArray.map((result, i) => {
          let sqlOpts = (allSqlOpts as HTTPQueryOptions[])[i] ?? {};
          let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
          let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
          return processQueryResult(result, {
            arrayMode,
            fullResults,
            parameterizedQuery: parameterizedQuery[i],
            resultCallback,
            types: sqlOpts.types,
          });
        });
      } else {
        // single query
        let sqlOpts = (allSqlOpts as HTTPQueryOptions) ?? {};
        let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
        let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
        return processQueryResult(rawResults, {
          arrayMode,
          fullResults,
          parameterizedQuery,
          resultCallback,
          types: sqlOpts.types,
        });
      }
    } else {
      const { status } = response;
      if (status === 400) {
        const json = (await response.json()) as any;
        const dbError = new NeonDbError(json.message);
        for (const field of errorFields) dbError[field] = json[field] ?? undefined;
        throw dbError;
      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  }

  return resolve;
}

function createNeonQueryPromise(
  execute: (pq: ParameterizedQuery, hqo?: HTTPQueryOptions) => Promise<any>,
  parameterizedQuery: ParameterizedQuery,
  opts?: HTTPQueryOptions,
) {
  return {
    [Symbol.toStringTag]: 'NeonQueryPromise',
    parameterizedQuery,
    opts,
    then: (resolve, reject) => execute(parameterizedQuery, opts).then(resolve, reject),
    catch: (reject) => execute(parameterizedQuery, opts).catch(reject),
    finally: (finallyFn) => execute(parameterizedQuery, opts).finally(finallyFn),
  } as NeonQueryPromise;
}

function processQueryResult(
  rawResults: any,
  {
    arrayMode,
    fullResults,
    parameterizedQuery,
    resultCallback,
    types: customTypes,
  }: ProcessQueryResultOptions,
) {
  const types = new TypeOverrides(customTypes);
  const colNames = rawResults.fields.map((field: any) => field.name);
  const parsers = rawResults.fields.map((field: any) => types.getTypeParser(field.dataTypeID));

  // now parse and possibly restructure the rows data like node-postgres does
  const rows =
    arrayMode === true
      ? // maintain array-of-arrays structure
        rawResults.rows.map((row: any) =>
          row.map((col: any, i: number) => (col === null ? null : parsers[i](col))),
        )
      : // turn into an object
        rawResults.rows.map((row: any) => {
          return Object.fromEntries(
            row.map((col: any, i: number) => [colNames[i], col === null ? null : parsers[i](col)]),
          );
        });

  if (resultCallback)
    resultCallback(parameterizedQuery, rawResults, rows, {
      arrayMode,
      fullResults,
    });

  if (fullResults) {
    rawResults.viaNeonFetch = true;
    rawResults.rowAsArray = arrayMode;
    rawResults.rows = rows;
    rawResults._parsers = parsers;
    rawResults._types = types;
    return rawResults;
  }

  return rows;
}

async function getAuthToken(authToken: HTTPQueryOptions['authToken']) {
  if (typeof authToken === 'string') {
    return authToken;
  }

  if (typeof authToken === 'function') {
    try {
      return await Promise.resolve(authToken());
    } catch (err) {
      let authError = new NeonDbError('Error getting auth token.');
      if (err instanceof Error) {
        authError = new NeonDbError(`Error getting auth token: ${err.message}`);
      }
      throw authError;
    }
  }
}
