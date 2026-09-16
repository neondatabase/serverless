import { expect, test, vi, assertType } from 'vitest';
import nodeFetch from 'node-fetch';
import {
  neon,
  neonConfig,
  Pool,
  SqlTemplate,
  type FullQueryResults,
} from '@neondatabase/serverless'; // see package.json: this points to 'file:.'
import { sampleQueries } from './sampleQueries';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DATABASE_URL);
const sqlFull = neon(DATABASE_URL, { fullResults: true });
const pool = new Pool({ connectionString: DATABASE_URL });

const BAD_PASSWORD_URL = DATABASE_URL.replace(/:[^:@]+@/, ':not_the_password@');

const asyncPasswordFn = async () => {
  const { password } = new URL(DATABASE_URL);
  await new Promise((resolve) => setTimeout(resolve, 10));
  return password;
};

test(
  'http query results match WebSocket query results',
  { timeout: 60000 },
  async () => {
    const client = await pool.connect();

    for (const queryPromise of sampleQueries(sqlFull)) {
      const { query, params } =
        queryPromise.queryData instanceof SqlTemplate
          ? queryPromise.queryData.toParameterizedQuery()
          : queryPromise.queryData;

      const [httpResult, wsResult] = await Promise.all([
        queryPromise,
        client.query(query, params),
      ]);

      // account for known/accepted differences:
      // * http results are plain Objects, not Result instances
      // * http results lack `oid` and `RowCtor` fields (which are both usually `null`)
      // * http result `fields` array contains plain Objects, not Field instances
      // * http results have `"viaNeonFetch": true`

      const httpResultProcessed = { ...httpResult, oid: null, RowCtor: null };
      const wsResultProcessed = {
        ...wsResult,
        fields: wsResult.fields.map((f) => ({ ...f })),
        viaNeonFetch: true,
      };
      expect(httpResultProcessed).toStrictEqual(wsResultProcessed);
    }

    client.release();
  },
);

test('non-template usage is no longer allowed', () => {
  // @ts-expect-error
  const queryFunc = () => sql(`SELECT ${1}`);
  expect(queryFunc).toThrow(
    'This function can now be called only as a tagged-template function',
  );
});

// unfortunately, using hex-escaped strings for binary data doesn't work the
//  same as sending raw binary data if Postgres can't tell it's binary data
//  -- if this test started unexpectedly failing, it might be a good thing
test('sql.query() http results for uncast binary data (it might be preferable if this test would fail)', async () => {
  const abc = await sql.query('SELECT $1 AS bytea', [
    new Uint8Array([65, 66, 67]),
  ]);
  // over TCP or WebSockets or using sql`...`, this would be { "bytea": "ABC" }
  expect(abc).toStrictEqual([{ bytea: '\\x414243' }]);
});

test('composable SQL and unsafe raw SQL', async () => {
  const q = sql`
    SELECT 
      ${sql.query('0 AS n')},
      ${123} AS z, ${sql.unsafe('"generate_series"')}
      ${sql`FROM generate_series(${1}::int, ${sql`4`})`}
    UNION SELECT
      ${sql.query('1 AS n', [])},
      ${789} AS z, ${sql.unsafe('x')}
      ${sql`FROM generate_series(${sql`${1}::int`}, ${3}::int) AS x`}
    ${sql`ORDER BY generate_series, z LIMIT ${3}`}
  `;

  const compiled = (q.queryData as SqlTemplate).toParameterizedQuery();
  expect(compiled.query.replace(/\s+/g, ' ').trim()).toEqual(
    'SELECT 0 AS n, $1 AS z, "generate_series" FROM generate_series($2::int, 4) UNION SELECT 1 AS n, $3 AS z, x FROM generate_series($4::int, $5::int) AS x ORDER BY generate_series, z LIMIT $6',
  );
  expect(compiled.params).toStrictEqual([123, 1, 789, 1, 3, 3]);

  const result = await q;
  expect(result).toStrictEqual([
    { generate_series: 1, z: '123', n: 0 },
    { generate_series: 1, z: '789', n: 1 },
    { generate_series: 2, z: '123', n: 0 },
  ]);
});

test('uncomposable SQL', () => {
  // sql.query() queries have manually-numbered parameters and thus cannot safely be composed
  const q = sql`SELECT * FROM table ${sql.query('LIMIT $1', [1])}`;
  expect(() => (q.queryData as SqlTemplate).toParameterizedQuery()).toThrow(
    'This query is not composable',
  );
});

interface FieldDef {
  name: string;
  tableID: number;
  columnID: number;
  dataTypeID: number;
  dataTypeSize: number;
  dataTypeModifier: number;
  format: string;
}

test('options to `neon()` and options on queries', async () => {
  const sql__ = neon(DATABASE_URL);
  const sqlff = neon(DATABASE_URL, { arrayMode: false, fullResults: false });
  const sqlft = neon(DATABASE_URL, { arrayMode: false, fullResults: true });
  const sqltf = neon(DATABASE_URL, { arrayMode: true, fullResults: false });
  const sqltt = neon(DATABASE_URL, { arrayMode: true, fullResults: true });
  const sqlt_ = neon(DATABASE_URL, { arrayMode: true });
  const sql_t = neon(DATABASE_URL, { fullResults: true });

  // check defaults
  assertType<typeof sqlff>(sql__);
  assertType<typeof sqlft>(sql_t);
  assertType<typeof sqltf>(sqlt_);

  // check results
  const ff = await sqlff`SELECT 'xyz' AS str`; // arrayMode false, fullResults false
  assertType<Record<string, unknown>[]>(ff); // on `Record<string, unknown>`, see https://stackoverflow.com/a/77626605
  expect(ff[0].str).toBe('xyz');

  const ft = await sqlft`SELECT 'xyz' AS str`; // arrayMode false, fullResults true
  assertType<FullQueryResults<false>>(ft);
  assertType<Record<string, unknown>[]>(ft.rows);
  assertType<FieldDef[]>(ft.fields);
  assertType<string>(ft.command);
  assertType<number>(ft.rowCount);
  assertType<false>(ft.rowAsArray);
  expect(ft.rows[0].str).toBe('xyz');
  expect(ft.fields[0].name).toBe('str');
  expect(ft.fields[0].dataTypeID).toBe(25 /* text OID */);
  expect(ft.command).toBe('SELECT');
  expect(ft.rowCount).toBe(1);
  expect(ft.rowAsArray).toBe(false);

  const tf = await sqltf`SELECT 'xyz' AS str`; // arrayMode true, fullResults false
  assertType<any[][]>(tf);
  expect(tf[0][0]).toBe('xyz');

  const tt = await sqltt`SELECT 'xyz' AS str`; // arrayMode true, fullResults true
  assertType<FullQueryResults<true>>(tt);
  assertType<any[][]>(tt.rows);
  assertType<FieldDef[]>(tt.fields);
  assertType<string>(tt.command);
  assertType<number>(tt.rowCount);
  assertType<true>(tt.rowAsArray);
  expect(tt.rows[0][0]).toBe('xyz');
  expect(tt.fields[0].name).toBe('str');
  expect(tt.fields[0].dataTypeID).toBe(25 /* text OID */);
  expect(tt.command).toBe('SELECT');
  expect(tt.rowCount).toBe(1);
  expect(tt.rowAsArray).toBe(true);

  // check per-query option overrides
  const fftt = await sqlff.query("SELECT 'xyz' AS str", [], {
    arrayMode: true,
    fullResults: true,
  });
  assertType<FullQueryResults<true>>(fftt);
  assertType<any[][]>(fftt.rows);
  assertType<FieldDef[]>(fftt.fields);
  assertType<string>(fftt.command);
  assertType<number>(fftt.rowCount);
  assertType<true>(fftt.rowAsArray);
  expect(fftt.rows[0][0]).toBe('xyz');
  expect(fftt.fields[0].name).toBe('str');
  expect(fftt.fields[0].dataTypeID).toBe(25 /* text OID */);
  expect(fftt.command).toBe('SELECT');
  expect(fftt.rowCount).toBe(1);
  expect(fftt.rowAsArray).toBe(true);

  const ttff = await sqltt.query("SELECT 'xyz' AS str", [], {
    arrayMode: false,
    fullResults: false,
  });
  assertType<Record<string, unknown>[]>(ttff);
  expect(ttff[0].str).toBe('xyz');
});

test('custom fetch', async () => {
  const prevFetchFunction = neonConfig.fetchFunction; // might be polyfilled
  try {
    const fn = vi.fn((url, options) => nodeFetch(url, options));
    neonConfig.fetchFunction = fn;
    await expect(sql`SELECT ${'customFetch'} AS str`).resolves.toStrictEqual([
      { str: 'customFetch' },
    ]);
    expect(fn).toHaveBeenCalledOnce();
  } finally {
    neonConfig.fetchFunction = prevFetchFunction;
  }
});

test('errors match WebSocket query errors', async () => {
  const q = 'SELECT 123 WHERE x';

  await Promise.all([
    expect(sql.query(q)).rejects.toThrow('column "x" does not exist'),
    expect(pool.query(q)).rejects.toThrow('column "x" does not exist'),
  ]);

  // now compare all other properties (`code`, `routine`, `severity`, etc.)
  const [httpErr, wsErr] = (await Promise.all([
    new Promise((resolve) => sql.query(q).catch((e: Error) => resolve(e))),
    new Promise((resolve) => pool.query(q).catch((e: Error) => resolve(e))),
  ])) as [any, any];

  // account for known/accepted differences
  httpErr.length = wsErr.length; // http errors don't have a `length` property
  httpErr.name = wsErr.name; // http errors are named 'NeonDbError' rather than plain 'error'
  wsErr.sourceError = undefined; // this property is unique to http errors

  // convert the errors into ordinary Objects, because vitest compares Errors only by message
  expect({ ...httpErr }).toStrictEqual({ ...wsErr });
});

test('http queries with too few or too many parameters', async () => {
  await expect(sql.query('SELECT $1', [])).rejects.toThrow(
    'bind message supplies 0 parameters',
  );

  await expect(sql.query('SELECT $1', [1, 2])).rejects.toThrow(
    'bind message supplies 2 parameters',
  );
});

test('timeout aborting an http query', { timeout: 5000 }, async () => {
  // note: in Node pre-17.3, you'd do this instead:

  // const abortController = new AbortController();
  // setTimeout(() => abortController.abort(new Error('fetch timed out')), 250);
  // const { signal } = abortController;

  const signal = AbortSignal.timeout(250);

  await expect(
    sql.query('SELECT pg_sleep(2)', [], { fetchOptions: { signal } }),
  ).rejects.toThrow('aborted');
});

test('timeout not aborting an http query', { timeout: 5000 }, async () => {
  // note: in Node pre-17.3, you'd do this instead:

  // const abortController = new AbortController();
  // const timeout = setTimeout(() => abortController.abort(new Error('fetch timed out')), 2500);
  // const { signal } = abortController;

  const signal = AbortSignal.timeout(2500);

  await expect(
    sql.query('SELECT pg_sleep(.25)', [], { fetchOptions: { signal } }),
  ).resolves.toStrictEqual([{ pg_sleep: '' }]);
});

test('database URL with wrong user to `neon()`', async () => {
  const urlWithBadHost = DATABASE_URL.replace('//', '//x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrow(
    'password authentication failed',
  );
});

test('database URL with wrong password to `neon()`', async () => {
  const urlWithBadPassword = DATABASE_URL.replace('@', 'x@');
  const sqlBad = neon(urlWithBadPassword);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrow(
    'password authentication failed',
  );
});

test('database URL with wrong project to `neon()`', async () => {
  const urlWithBadHost = DATABASE_URL.replace('@', '@x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrow(
    'password authentication failed',
  );
});

test(
  'database URL with wrong host to `neon()`',
  { timeout: 10000 },
  async () => {
    const urlWithBadHost = DATABASE_URL.replace('.neon.tech', '.neon.techh');
    const sqlBad = neon(urlWithBadHost);
    await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrow(
      /fetch failed|ENOTFOUND/, // accounts for both native fetch and node-fetch error messages
    );
  },
);

test('undefined database URL', async () => {
  const sql = neon(undefined as unknown as string);
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string format for `neon()` should be',
  );
});

test('empty database URL to `neon()`', async () => {
  const sql = neon('');
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string provided',
  );
});

test('wrong-scheme database URL to `neon()`', async () => {
  const sql = neon(DATABASE_URL.replace(/^/, 'x'));
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string format for `neon()` should be',
  );
});

test('database URL to `neon()` has no credentials', async () => {
  const sql = neon('postgresql://host/db');
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string format for `neon()` should be',
  );
});

test('database URL to `neon()` has no database name', async () => {
  const sql = neon('postgresql://user@host');
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string format for `neon()` should be',
  );
});

test('database URL to `neon()` has no database name (but trailing slash)', async () => {
  const sql = neon('postgresql://user@host/');
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'Database connection string format for `neon()` should be',
  );
});

test('basic query with only connection parameters', async () => {
  const { username, password, hostname, pathname } = new URL(DATABASE_URL);
  const sql = neon({
    username,
    password,
    hostname,
    database: pathname.slice(1), // cut off leading slash (technically not necessary)
  });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('connectionString in parameters as string', async () => {
  const sql = neon({ connectionString: DATABASE_URL });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('connectionString in parameters as Promise<string>', async () => {
  const connectionString = Promise.resolve(DATABASE_URL);
  const sql = neon({ connectionString });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('connectionString in parameters as function returning Promise<string>', async () => {
  const connectionString = async () => {
    await new Promise((resolve) => setTimeout(resolve, 10));
    return DATABASE_URL;
  };
  const sql = neon({ connectionString });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('connectionString in parameters overrides connection string as first argument', async () => {
  const sql = neon('postgresql://user@host/xyz', {
    connectionString: DATABASE_URL,
  });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('host in parameters overrides host in connection string', async () => {
  const sql = neon(DATABASE_URL, { host: '__not_valid__' });
  await expect(sql`SELECT ${1}`).rejects.toThrow(/fetch failed|ENOTFOUND/);
});

test('user name in parameters overrides user name in connection string', async () => {
  const sql = neon(DATABASE_URL, { user: 'not_me' });
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'password authentication failed',
  );
});

test('database name in parameters overrides database name in connection string', async () => {
  const sql = neon(DATABASE_URL, { database: 'not_a_database' });
  await expect(sql`SELECT ${1}`).rejects.toThrow('does not exist');
});

test('port in parameters overrides port in connection string', async () => {
  // note: Neon proxy ignores the specified port, so query succeeds
  const port = 12345;
  let fetchArgs;
  const realFetchFunction = neonConfig.fetchFunction;
  neonConfig.fetchFunction = ((...args) => {
    fetchArgs = args;
    return fetch(...args);
  }) as typeof fetch;
  const sql = neon(DATABASE_URL, { port });
  const result = await sql`SELECT 1 AS one`;
  neonConfig.fetchFunction = realFetchFunction;
  expect(result[0].one).toBe(1);
  const resolvedConnectionString =
    fetchArgs![1].headers['Neon-Connection-String'];
  const resolvedPort = new URL(resolvedConnectionString).port;
  expect(resolvedPort).toBe(String(port));
});

test('password in parameters overrides password in connection string', async () => {
  const sql = neon(DATABASE_URL, { password: 'not_the_password' });
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'password authentication failed',
  );
});

test('password function in parameters overrides correct password in connection string', async () => {
  const sql = neon(DATABASE_URL, { password: () => 'not_the_password' });
  await expect(sql`SELECT ${1}`).rejects.toThrow(
    'password authentication failed',
  );
});

test('password function in parameters overrides incorrect password in connection string', async () => {
  const { password } = new URL(DATABASE_URL);
  const sql = neon(BAD_PASSWORD_URL, {
    password: () => password,
  });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('async password function in parameters overrides password in connection string', async () => {
  const sql = neon(BAD_PASSWORD_URL, {
    password: asyncPasswordFn,
  });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('Promise<password> in parameters overrides password in connection string', async () => {
  const sql = neon(BAD_PASSWORD_URL, {
    password: new Promise((resolve) =>
      setTimeout(() => resolve(new URL(DATABASE_URL).password), 10),
    ),
  });
  const result = await sql`SELECT 1 AS one`;
  expect(result[0].one).toBe(1);
});

test('async password function in transaction options overrides password in connection string', async () => {
  const sql = neon(BAD_PASSWORD_URL);
  const result = await sql.transaction(
    [sql`SELECT 1 AS one`, sql`SELECT 2 AS two`],
    {
      password: asyncPasswordFn,
    },
  );
  expect(result[1][0].two).toBe(2);
});

test('async password function in query parameters overrides password in connection string', async () => {
  const sql = neon(BAD_PASSWORD_URL);
  const result = await sql.query('SELECT 1 AS one', [], {
    password: asyncPasswordFn,
  });
  expect(result[0].one).toBe(1);
});
