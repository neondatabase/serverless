import { parse } from '../shims/url';
import { types } from '.';

type JSONValue = null | boolean | number | string | JSONObject | JSONArray;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];

type SQLParam = JSONValue | Date | SQLObject | SQLArray;
type SQLObject = { [k: string]: SQLParam };
type SQLArray = SQLParam[];

export class NeonDbError extends Error {
  code: string | null = null;
  name = 'NeonDbError';
}

interface Query {
  query: string;
  params: SQLParam[];
}

const noParseDataTypeIDs = new Set([
  1007,  // integer[]
  1009,  // text[]
  1040,  // macaddr[]
  651,   // cidr[]
  114,   // json
  3802,  // jsonb
  16,    // boolean
]);

export function neon(
  connectionString: string,
  queryCb?: (query: Query) => void,
  resultCb?: (query: Query, result: JSONObject, rows: any) => void,
) {
  const db = parse(connectionString);
  const { protocol, username, password, host, pathname } = db;

  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !host || !username || !password || !pathname) {
    throw new Error('Database connection string format should be: postgres://user:password@host.tld/dbname?option=value');
  }

  return async function (strings: TemplateStringsArray | string, ...params: SQLParam[]): Promise<any> {
    let query;

    if (typeof strings === 'string') {
      query = strings;

    } else {
      query = '';
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += '$' + (i + 1);
      }
    }

    let qp, response;
    try {
      const url = `https://${host}/sql`;
      qp = { query, params };
      if (queryCb) queryCb(qp);

      const body = JSON.stringify(qp);
      response = await fetch(url, {
        body,
        method: 'POST',
        headers: { 'Neon-Connection-String': connectionString },
      });

    } catch (err: any) {
      throw new NeonDbError(`Error connecting to database: ${err.message}`)
    }

    if (response.ok) {
      const results = await response.json() as any;

      // TODO: better parsing

      const parsers = Object.fromEntries(
        results.fields.map((f: any) => [
          f.name,
          noParseDataTypeIDs.has(f.dataTypeID) ?
            (x: any) => x :
            types.getTypeParser(f.dataTypeID)
        ])
      );
      const rows = results.rows.map((row: any) => Object.fromEntries(
        Object.entries(row).map(([name, value]) => [name, value === null ? value : parsers[name](value)])
      ));

      // alternative: no parsing
      // const rows = results.rows;

      if (resultCb) resultCb(qp, results, rows);
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
}