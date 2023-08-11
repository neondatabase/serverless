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

interface Query {
  query: string;
  params: any[];
}

interface HTTPQueryOptions {
  arrayMode?: boolean;  // default false
  fullResults?: boolean;  // default false
  fetchOptions?: Record<string, any>;
  queryCallback?: (query: Query) => void;
  resultCallback?: (query: Query, result: any, rows: any, opts: any) => void;
  isolationLevel?: "Serializable" | "ReadUncommitted" | "ReadCommitted" | "RepeatableRead";
  readOnly?: boolean;
}

export function neon(
  connectionString: string, {
    arrayMode: arrayModeDefault,
    fullResults: fullresultsDefault,
    fetchOptions: fetchOptionsDefault,
    queryCallback,
    resultCallback,
    isolationLevel: isolationLevelDefault,
    readOnly: readOnlyDefault,
  }: HTTPQueryOptions = {},
) {
  // check connection string
  if (!connectionString) throw new Error('No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?');

  let db;
  try { db = parse(connectionString); }
  catch {
    throw new Error('Database connection string provided to `neon()` is not a valid URL. Connection string: ' + String(connectionString));
  }

  const { protocol, username, password, hostname, port, pathname } = db;
  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !username || !password || !hostname || !pathname) {
    throw new Error('Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value');
  }

  let arrayMode = arrayModeDefault ?? false;
  let fullResults = fullresultsDefault ?? false;
  let isolationLevel = isolationLevelDefault ?? "ReadCommitted";
  let readOnly = readOnlyDefault ?? false;

  const resolve = (strings: TemplateStringsArray | string, ...params: any[]): NeonPromise => {
    let query;
    let opts: HTTPQueryOptions | undefined;
    if (typeof strings === 'string') {  // ordinary (non tagged-template) usage
      query = strings;

      // options passed here override options passed to neon
      opts = params[1];  // the third argument, which is the second of the ...rest arguments

      params = params[0] ?? [];  // the second argument, which is the first of the ...rest arguments
    } else { // tagged-template usage
      query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += '$' + (i + 1);
      }
    }

    // preparing the query params makes timezones and array types consistent with ordinary node-postgres/pg
    params = params.map((param) => prepareValue(param));

    const qp = { query, params };
    if (queryCallback) queryCallback(qp);
    return createNeonPromise(
      (qp) => execute(qp, opts),
      qp,
    );
  };

  const execute = async (
    qp: Query | Query[],
    opts?: HTTPQueryOptions,
  ): Promise<any> => {
    let fetchOptions = fetchOptionsDefault ?? {};

    const { fetchEndpoint, fetchConnectionCache, fetchFunction } = Socket;

    const url = typeof fetchEndpoint === 'function' ?
      fetchEndpoint(hostname, port) : fetchEndpoint;

    const addionalHeaders: Record<string, string> = {};
    if (fetchConnectionCache === true) {
      addionalHeaders['Neon-Pool-Opt-In'] = 'true';
    }

    if (opts !== undefined) {
      if (opts.arrayMode !== undefined) arrayMode = opts.arrayMode;
      if (opts.fullResults !== undefined) fullResults = opts.fullResults;
      if (opts.isolationLevel !== undefined) isolationLevel = opts.isolationLevel;
      if (opts.readOnly !== undefined) readOnly = opts.readOnly;
      if (opts.fetchOptions !== undefined)
        fetchOptions = { ...fetchOptions, ...opts.fetchOptions };
    }

    if (isolationLevel !== 'ReadCommitted') addionalHeaders['Neon-Batch-Isolation-Level'] = isolationLevel;
    if (readOnly === true) addionalHeaders['Neon-Batch-Read-Only'] = 'true';

    // we want this to neutralise aggressive and non-standard caching by e.g. Next.js
    // (https://nextjs.org/docs/app/building-your-application/data-fetching/caching),
    // but it currently breaks on Cloudflare Workers (https://github.com/cloudflare/workerd/issues/698), so ...
    let fetchCacheOption: {} = { cache: 'no-store' };
    // @ts-ignore
    try { new Request('x:', fetchCacheOption); }
    catch (err) { fetchCacheOption = {}; }

    let response;
    try {
      response = await (fetchFunction ?? fetch)(url, {
        method: 'POST',
        body: JSON.stringify(qp),
        headers: {
          'Neon-Connection-String': connectionString,
          'Neon-Raw-Text-Output': 'true',
          'Neon-Array-Mode': 'true',
          ...addionalHeaders,
        },
        ...fetchCacheOption,
        ...fetchOptions, // this is last, so it gets the final say
      });
    } catch (err: any) {
      const connectErr = new NeonDbError(`Error connecting to database: ${err.message}`);
      connectErr.sourceError = err;
      throw connectErr;
    }

    if (response.ok) {
      const rawResults = await response.json() as any;
      if (Array.isArray(rawResults)) {
        // multiple queries
        return Promise.all(
          rawResults.map((result, idx) =>
            processSingle(result, (qp as Query[])[idx]),
          ),
        );
      }
      // single query
      return processSingle(rawResults, qp as Query);
    } else {
      const { status } = response;
      if (status === 400) {
        const { message, code } = await response.json() as any;
        const dbError = new NeonDbError(message);
        dbError.code = code;
        throw dbError;

      } else {
        const text = await response.text();
        throw new NeonDbError(`Database error (HTTP status ${status}): ${text}`);
      }
    }
  };

  const processSingle = async (rawResults: any, qp: Query): Promise<any> => {
    const colNames = rawResults.fields.map((field: any) => field.name);
    const parsers = rawResults.fields.map((field: any) =>
      types.getTypeParser(field.dataTypeID),
    );

    // now parse and possibly restructure the rows data like node-postgres does
    const rows =
      arrayMode === true
        ? // maintain array-of-arrays structure
          rawResults.rows.map((row: any) =>
            row.map((col: any, i: number) =>
              col === null ? null : parsers[i](col),
            ),
          )
        : // turn into an object
          rawResults.rows.map((row: any) => {
            return Object.fromEntries(
              row.map((col: any, i: number) => [
                colNames[i],
                col === null ? null : parsers[i](col),
              ]),
            );
          });

    if (resultCallback)
      resultCallback(qp, rawResults, rows, { arrayMode, fullResults });

    if (fullResults) {
      rawResults.viaNeonFetch = true;
      rawResults.rowAsArray = arrayMode;
      rawResults.rows = rows;
      return rawResults;
    }

    return rows;
  };

  resolve.transaction = async (
    queries: NeonPromise[],
    opts?: HTTPQueryOptions,
  ) => {
    if (Array.isArray(queries) === false) {
      throw new Error('transaction() must be passed an array of queries');
    }
    const payload = queries.map((qv) => {
      if (qv[Symbol.toStringTag] === 'NeonPromise') {
        // we want to have support for nested promises
        return (qv as NeonPromise).transaction();
      } else {
        throw new Error(
          'transaction() must be passed an array of queries created with neon (sql) funciton',
        );
      }
    });
    return execute(payload, opts);
  };
  return resolve;
}

type NeonPromise<T = any> = Promise<T> & { transaction: () => Query };

const createNeonPromise = (
  callback: (q: Query) => unknown,
  qp: Query,
): NeonPromise => {
  let promise: Promise<unknown> | undefined;
  const _callback = () => {
    try {
      return (promise ??= valueToPromise(callback(qp)));
    } catch (err) {
      return Promise.reject(err);
    }
  };
  return {
    then: (resolve, reject) => {
      console.log('neon then', _callback);
      return _callback().then(resolve, reject);
    },
    catch: (reject) => {
      return _callback().catch(reject);
    },
    finally: (onFinally) => {
      return _callback().finally(onFinally);
    },
    transaction: () => {
      return qp;
    },
    [Symbol.toStringTag]: 'NeonPromise',
  } as NeonPromise;
};

function valueToPromise<T>(thing: T): Promise<T> {
  if (thing && typeof (thing as unknown as Promise<T>)['then'] === 'function') {
    return thing as unknown as Promise<T>;
  }
  return Promise.resolve(thing);
}
