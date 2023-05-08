import { parse } from '../shims/url';

type SQLParam = string | number | boolean | Date | null;

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
          const inParamType = typeof inParam;
          const inParamDate = inParam instanceof Date;

          const cast =
            inParamType === 'string' ? '' :  // text is the default
              inParamType === 'number' ? '::float8' :
                inParamType === 'boolean' ? '::boolean' :
                  inParamDate ? '::timestamptz' :
                    null;

          if (cast === null) throw new Error(`Invalid SQL parameter type for param: ${inParam}`);

          const outParam = inParamDate ? inParam.toISOString() : inParam;
          outParams.push(outParam);

          query += '$' + outParams.length + cast;
        }
      }
    }

    try {
      const url = `https://${host}/sql`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'X-Neon-ConnectionString': connectionString },
        body: JSON.stringify({ query, params: outParams }),
      });

      if (response.ok) {
        return response.json();

      } else {
        const { status } = response;
        if (status == 400) {
          let message = await response.text() as any;
          throw new Error(`Database error: ${message}`);

        } else {
          throw new Error(`Database error (HTTP status ${status})`);
        }
      }

    } catch (err: any) {
      throw new Error(`Error connecting to database: ${err.message}`)
    }
  }
}


