import { parse } from '../shims/url';
import { Socket } from '../shims/net';
import { types } from '.';

// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from '../node_modules/pg/lib/utils';

export class NeonDbError extends Error {
  name = 'NeonDbError';
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
}

interface ParseTemplateResult {
  query: string;
  params: any[];
  arrayMode: boolean;
  fullResults: boolean;
  fetchOptions: Record<string, any>;
}

function parseTemplate(strings: TemplateStringsArray | string, params: any[], arrayModeDefault?: boolean, fullresultsDefault?: boolean, fetchOptionsDefault?: Record<string, any>): ParseTemplateResult {
  let arrayMode = arrayModeDefault ?? false;
  let fullResults = fullresultsDefault ?? false;
  let fetchOptions = fetchOptionsDefault ?? {};

  let query;
  if (typeof strings === 'string') {  // ordinary (non tagged-template) usage
    query = strings;

    // options passed here override options passed to neon, ignored in txn mode
    const opts = params[1];  // the third argument, which is the second of the ...rest arguments
    if (opts !== undefined) {
      if (opts.arrayMode !== undefined) arrayMode = opts.arrayMode;
      if (opts.fullResults !== undefined) fullResults = opts.fullResults;
      if (opts.fetchOptions !== undefined) fetchOptions = { ...fetchOptions, ...opts.fetchOptions };
    }

    params = params[0] ?? [];  // the second argument, which is the first of the ...rest arguments

  } else {  // tagged-template usage
    query = '';
    for (let i = 0; i < strings.length; i++) {
      query += strings[i];
      if (i < params.length) query += '$' + (i + 1);
    }
  }

  // preparing the query params makes timezones and array types consistent with ordinary node-postgres/pg
  params = params.map(param => prepareValue(param));

  return {
    query, params, arrayMode, fullResults, fetchOptions
  }
}

function parseHttpResponse(rawResults: any, arrayMode: boolean): any {
  const colNames = rawResults.fields.map((field: any) => field.name);
  const parsers = rawResults.fields.map((field: any) => types.getTypeParser(field.dataTypeID));

  // now parse and possibly restructure the rows data like node-postgres does
  const rows = arrayMode === true ?
    // maintain array-of-arrays structure
    rawResults.rows.map((row: any) => row.map((col: any, i: number) => col === null ? null : parsers[i](col))) :
    // turn into an object
    rawResults.rows.map((row: any) => {
      return Object.fromEntries(
        row.map((col: any, i: number) => [colNames[i], col === null ? null : parsers[i](col)])
      )
    });

  return rows
}

function socketInfo(hostname: string, port: string): { url: string, connCacheHeader: Record<string, any>, fetchFunction: typeof Socket.fetchFunction } {
  const { fetchEndpoint, fetchConnectionCache, fetchFunction } = Socket;

  const url = typeof fetchEndpoint === 'function' ?
    fetchEndpoint(hostname, port) : fetchEndpoint;

  const connCacheHeader = fetchConnectionCache === true ?
    { 'Neon-Pool-Opt-In': 'true' } : {};

  return { url, connCacheHeader, fetchFunction }
}

async function executeSql(fetchFunction: typeof Socket.fetchFunction, url: string, qp: any, connectionString: string, connCacheHeader: Record<string, any>, fetchOptions: Record<string, any>): Promise<any> {
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
        ...connCacheHeader,
      },
      ...fetchCacheOption,
      ...fetchOptions,  // this is last, so it gets the final say
    });

  } catch (err: any) {
    const connectErr = new NeonDbError(`Error connecting to database: ${err.message}`);
    connectErr.sourceError = err;
    throw connectErr;
  }

  return response
}

interface NeonHttp {
  (strings: TemplateStringsArray | string, ...xparams: any[]): Promise<any>;
  sql: (strings: TemplateStringsArray | string, ...xparams: any[]) => Promise<any>;
  txn: (queries: ParseTemplateResult[]) => Promise<any>;
  stmt: (strings: TemplateStringsArray | string, ...xparams: any[]) => ParseTemplateResult;
}

export function neon(
  connectionString: string, {
    arrayMode: arrayModeDefault,
    fullResults: fullresultsDefault,
    fetchOptions: fetchOptionsDefault,
    queryCallback,
    resultCallback
  }: HTTPQueryOptions = {}
): NeonHttp {

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

  // single-flight query function
  const sql = async function (strings: TemplateStringsArray | string, ...xparams: any[]): Promise<any> {
    const { url, connCacheHeader, fetchFunction } = socketInfo(hostname, port);
    const { query, params, arrayMode, fullResults, fetchOptions } = parseTemplate(strings, xparams, arrayModeDefault, fullresultsDefault, fetchOptionsDefault)
    const qp = { query, params };
    if (queryCallback) queryCallback(qp);

    const response = await executeSql(fetchFunction, url, qp, connectionString, connCacheHeader, fetchOptions);

    if (response.ok) {
      const rawResults = await response.json() as any;

      const rows = parseHttpResponse(rawResults, arrayMode);

      if (resultCallback) resultCallback(qp, rawResults, rows, { arrayMode, fullResults });

      if (fullResults) {
        rawResults.viaNeonFetch = true;
        rawResults.rowAsArray = arrayMode;
        rawResults.rows = rows;
        return rawResults;
      }

      return rows;
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
  }

  const stmt = function (strings: TemplateStringsArray | string, ...xparams: any[]): ParseTemplateResult {
    return parseTemplate(strings, xparams, arrayModeDefault, fullresultsDefault, fetchOptionsDefault);
  }

  const txn = async function (queries: ParseTemplateResult[], opts?: {
    arrayMode?: boolean;  // default false
    fullResults?: boolean;  // default false
    fetchOptions?: Record<string, any>;
  }): Promise<any> {
    const { url, connCacheHeader, fetchFunction } = socketInfo(hostname, port);

    const qps = queries.map(({ query, params }) => ({ query, params }))
    qps.forEach(qp => {
      if (queryCallback) queryCallback(qp);
    })

    let arrayMode = arrayModeDefault ?? false;
    let fullResults = fullresultsDefault ?? false;
    let fetchOptions = fetchOptionsDefault ?? {};
    if (opts !== undefined) {
      if (opts.arrayMode !== undefined) arrayMode = opts.arrayMode;
      if (opts.fullResults !== undefined) fullResults = opts.fullResults;
      if (opts.fetchOptions !== undefined) fetchOptions = { ...fetchOptions, ...opts.fetchOptions };
    }

    const response = await executeSql(fetchFunction, url, qps, connectionString, connCacheHeader, fetchOptions);

    if (response.ok) {
      const rawResults = (await response.json() as any).results;
      const allRows: any[] = [];
      rawResults.forEach((resp: any, i: number) => {
        const rows = parseHttpResponse(resp, arrayMode);
        const qp = qps[i];
        if (resultCallback) resultCallback(qp, rawResults, rows, { arrayMode, fullResults });
        allRows.push(rows);
      })

      if (fullResults) {
        rawResults.viaNeonFetch = true;
        rawResults.rowAsArray = arrayMode;
        rawResults.allRows = allRows;
        return rawResults;
      }

      return allRows;
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
  }

  let ret = <NeonHttp>sql
  ret.sql = sql
  ret.stmt = stmt
  ret.txn = txn

  return ret
}
