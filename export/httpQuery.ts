import { parse } from '../shims/url';
import { Socket } from '../shims/net';
import { types } from '.';

// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from '../node_modules/pg/lib/utils';

export class NeonDbError extends Error {
  name = 'NeonDbError' as const;
  code: string | null = null;
  sourceError: Error | undefined;
}

interface ParameterizedQuery {
  query: string;
  params: any[];
}

interface HTTPQueryOptions {
  arrayMode?: boolean;  // default false
  fullResults?: boolean;  // default false
  fetchOptions?: Record<string, any>;
  // these callback options are not currently exported:
  queryCallback?: (query: ParameterizedQuery) => void;
  resultCallback?: (query: ParameterizedQuery, result: any, rows: any, opts: any) => void;
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
};

export function neon(
  connectionString: string, {
    arrayMode: arrayModeGeneral,
    fullResults: fullResultsGeneral,
    fetchOptions: fetchOptionsGeneral,
    isolationLevel: isolationLevelGeneral,
    readOnly: readOnlyGeneral,
    deferrable: deferrableGeneral,
    queryCallback,
    resultCallback,
  }: HTTPTransactionOptions = {},
) {
  // check the connection string

  if (!connectionString) throw new Error('No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?');

  let db;
  try {
    db = parse(connectionString);
  } catch {
    throw new Error('Database connection string provided to `neon()` is not a valid URL. Connection string: ' + String(connectionString));
  }

  const { protocol, username, password, hostname, port, pathname } = db;
  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !username || !password || !hostname || !pathname) {
    throw new Error('Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value');
  }

  // resolve query, params and opts

  const resolve = (strings: TemplateStringsArray | string, ...params: any[]): NeonQueryPromise => {
    let query;
    let opts: HTTPQueryOptions | undefined;

    if (typeof strings === 'string') {  // ordinary (non tagged-template) usage
      query = strings;

      // options passed here override options passed to neon
      opts = params[1];  // the third argument, which is the second of the ...rest arguments
      params = params[0] ?? [];  // the second argument, which is the first of the ...rest arguments

    } else {  // tagged-template usage
      query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += '$' + (i + 1);
      }
    }

    // prepare the query params to make timezones and array types consistent with ordinary node-postgres/pg
    params = params.map(param => prepareValue(param));

    const parameterizedQuery = { query, params };
    if (queryCallback) queryCallback(parameterizedQuery);

    return createNeonQueryPromise(execute, parameterizedQuery, opts);
  };

  // execute query

  let arrayMode = arrayModeGeneral ?? false;
  let fullResults = fullResultsGeneral ?? false;
  let isolationLevel = isolationLevelGeneral;  // default is undefined
  let readOnly = readOnlyGeneral;  // default is undefined
  let deferrable = deferrableGeneral;  // default is undefined

  const execute = async (parameterizedQuery: ParameterizedQuery | ParameterizedQuery[], opts?: HTTPTransactionOptions) => {
    let fetchOptions = fetchOptionsGeneral ?? {};
    const { fetchEndpoint, fetchConnectionCache, fetchFunction } = Socket;

    const url = typeof fetchEndpoint === 'function' ?
      fetchEndpoint(hostname, port) : fetchEndpoint;

    const bodyData = Array.isArray(parameterizedQuery) ?
      { queries: parameterizedQuery } :
      parameterizedQuery;

    if (opts !== undefined) {
      if (opts.arrayMode !== undefined) arrayMode = opts.arrayMode;
      if (opts.fullResults !== undefined) fullResults = opts.fullResults;
      if (opts.fetchOptions !== undefined) fetchOptions = { ...fetchOptions, ...opts.fetchOptions };

      if (opts.isolationLevel !== undefined) isolationLevel = opts.isolationLevel;
      if (opts.readOnly !== undefined) readOnly = opts.readOnly;
      if (opts.deferrable !== undefined) deferrable = opts.deferrable;
    }

    const headers: Record<string, string> = {
      'Neon-Connection-String': connectionString,
      'Neon-Raw-Text-Output': 'true',  // because we do our own parsing with node-postgres
      'Neon-Array-Mode': 'true',  // this saves data and post-processing even if we return objects, not arrays
    };
    if (fetchConnectionCache === true) headers['Neon-Pool-Opt-In'] = 'true';
    if (Array.isArray(parameterizedQuery)) {  // only send these headers for batch queries, where they matter
      if (isolationLevel !== undefined) headers['Neon-Batch-Isolation-Level'] = isolationLevel;
      if (readOnly !== undefined) headers['Neon-Batch-Read-Only'] = String(readOnly);
      if (deferrable !== undefined) headers['Neon-Batch-Deferrable'] = String(deferrable);
    }

    let response;
    try {
      response = await (fetchFunction ?? fetch)(url, {
        method: 'POST',
        body: JSON.stringify(bodyData),  // TODO: use json-custom-numbers to allow BigInts?
        headers,
        ...fetchOptions, // this is last, so it gets the final say
      });

    } catch (err: any) {
      const connectErr = new NeonDbError(`Error connecting to database: ${err.message}`);
      connectErr.sourceError = err;
      throw connectErr;
    }

    if (response.ok) {
      const rawResults = await response.json() as any;

      if (Array.isArray(parameterizedQuery)) {
        // batch query
        const resultArray = rawResults.results;
        if (!Array.isArray(resultArray)) throw new NeonDbError('Neon internal error: unexpected result format');
        return resultArray.map((result, i) => processQueryResult(result, parameterizedQuery[i]));

      } else {
        // single query
        return processQueryResult(rawResults, parameterizedQuery);
      }

    } else {
      const { status } = response;
      if (status === 400) {
        const { message, code } = await response.json() as any;
        const dbError = new NeonDbError(message);
        dbError.code = code;
        throw dbError;

      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  };

  const processQueryResult = (rawResults: any, parameterizedQuery: ParameterizedQuery) => {
    const colNames = rawResults.fields.map((field: any) => field.name);
    const parsers = rawResults.fields.map((field: any) => types.getTypeParser(field.dataTypeID));

    // now parse and possibly restructure the rows data like node-postgres does
    const rows =
      arrayMode === true ?
        // maintain array-of-arrays structure
        rawResults.rows.map((row: any) =>
          row.map((col: any, i: number) =>
            col === null ? null : parsers[i](col),
          ),
        ) :
        // turn into an object
        rawResults.rows.map((row: any) => {
          return Object.fromEntries(
            row.map((col: any, i: number) => [
              colNames[i],
              col === null ? null : parsers[i](col),
            ]),
          );
        });

    if (resultCallback) resultCallback(parameterizedQuery, rawResults, rows, { arrayMode, fullResults });

    if (fullResults) {
      rawResults.viaNeonFetch = true;
      rawResults.rowAsArray = arrayMode;
      rawResults.rows = rows;
      return rawResults;
    }

    return rows;
  };

  resolve.transaction = async (queriesFn: (sql: typeof resolve) => NeonQueryPromise[], opts?: HTTPTransactionOptions) => {
    const argErrMsg = 'transaction() expects a function returning an array of queries';
    if (typeof queriesFn !== 'function') throw new Error(argErrMsg);
    const queries = queriesFn(resolve);
    if (!Array.isArray(queries)) throw new Error(argErrMsg);

    const payload = queries.map(query => {
      if (query[Symbol.toStringTag] !== 'NeonQueryPromise') throw new Error(argErrMsg);
      const neonPromise = query as NeonQueryPromise;
      if (neonPromise.opts !== undefined) throw new Error('Cannot set options on individual queries passed to `transaction()`: pass options to `transaction()` instead');
      return neonPromise.parameterizedQuery;
    });

    return execute(payload, opts);
  };

  return resolve;
}

const createNeonQueryPromise = (
  execute: (pq: ParameterizedQuery, hqo?: HTTPQueryOptions) => Promise<any>,
  parameterizedQuery: ParameterizedQuery,
  opts?: HTTPQueryOptions
) => {

  return {
    [Symbol.toStringTag]: 'NeonQueryPromise',
    parameterizedQuery,
    opts,
    then: (resolve, reject) => execute(parameterizedQuery, opts).then(resolve, reject),
    catch: reject => execute(parameterizedQuery, opts).catch(reject),
    finally: finallyFn => execute(parameterizedQuery, opts).finally(finallyFn),
  } as NeonQueryPromise;
};
