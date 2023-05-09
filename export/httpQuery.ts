import { parse } from '../shims/url';

type SQLParam = string | number | boolean | Date | null;

export class NeonDbError extends Error {
  code: string | null = null;
  name = 'NeonDbError';
}

export default function sqlTemplate(connectionString: string) {
  const db = parse(connectionString);
  const { protocol, username, password, host, pathname } = db;

  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !host || !username || !password || !pathname) {
    throw new Error('Database connection string format should be: postgres://user:password@host.tld/dbname?option=value');
  }

  return async function (strings: TemplateStringsArray, ...inParams: SQLParam[]): Promise<any> {
    let query = '';
    let outParams = [];

    for (let i = 0; i < strings.length; i++) {
      query += strings[i];

      if (i < inParams.length) {
        const inParam = inParams[i];
        if (inParam === null) {
          query += 'NULL';

        } else {
          const inParamDate = inParam instanceof Date;
          const inParamType = typeof inParam;

          const cast =
            inParamDate ? '::text::timestamptz' :
              inParamType === 'string' ? '::text' :
                inParamType === 'number' ? '::float8' :
                  inParamType === 'boolean' ? '::boolean' :
                    null;

          if (cast === null) throw new Error(`Invalid SQL parameter type for param: ${inParam}`);

          const outParam = inParamDate ? inParam.toISOString() : inParam;
          outParams.push(outParam);

          query += '$' + outParams.length + cast;
        }
      }
    }

    console.log(query, outParams);

    let response;
    try {
      const url = `https://${host}/sql`;
      response = await fetch(url, {
        method: 'POST',
        headers: { 'X-Neon-ConnectionString': connectionString },
        body: JSON.stringify({ query, params: outParams }),
      });

    } catch (err: any) {
      throw new NeonDbError(`Error connecting to database: ${err.message}`)
    }

    if (response.ok) {
      return response.json();

    } else {
      const { status } = response;
      if (status == 400) {
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


