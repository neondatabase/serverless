import { parse } from '../shims/url';

type SQLParam = string | number | boolean | Date | null;

export default function sqlTemplate(connectionString: string) {
  const db = parse(connectionString);
  const { protocol, username, password, host, pathname } = db;

  if ((protocol !== 'postgres:' && protocol !== 'postgresql:') || !host || !username || !password || !pathname) {
    throw new Error('Database connection string format should be: postgres://user:password@host.tld/dbname?option=value');
  }

  return async function (strings: TemplateStringsArray, ...params: SQLParam[]): Promise<any> {
    let query = '';
    for (let i = 0; i < strings.length; i++) {
      query += strings[i];

      if (i < params.length) {
        query += `$${i + 1}`;

        const param = params[i];
        if (param instanceof Date) {
          query += `::timestamptz`;
          params[i] = param.toISOString();

        } else {
          const type = typeof param;
          if (type !== 'string' && type !== 'number' && type !== 'boolean' && param !== null) {
            throw new Error(`Invalid SQL parameter type for param: ${param}`);
          }
        }
      }
    }

    try {
      const url = `https://${host}/sql`;
      console.log(url);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'X-Neon-Database': connectionString },
        body: JSON.stringify({ query, params }),
      });

      if (response.ok) {
        return response.json();

      } else {
        const { status } = response;
        if (status == 400) {
          const code = response.headers.get('X-Neon-Postgres-Error-Code') ?? 'n/a';
          const { message } = await response.json() as any;
          throw new Error(`Database error (Postgres code ${code}): ${message}`);

        } else {
          throw new Error(`Database error (HTTP status ${status})`);
        }
      }

    } catch (err: any) {
      throw new Error(`Error connecting to database: ${err.message}`)
    }
  }
}


