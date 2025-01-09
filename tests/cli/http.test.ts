import { expect, test, vi, beforeAll, assertType } from 'vitest';
import {
  FullQueryResults,
  neon,
  neonConfig,
  Pool,
} from '../../dist/npm';
import { sampleQueries } from './sampleQueries';
import { shimWebSocketIfRequired } from './ws';

const DB_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DB_URL);
const sqlFull = neon(DB_URL, { fullResults: true });
const pool = new Pool({ connectionString: DB_URL });

beforeAll(shimWebSocketIfRequired);

test(
  'http query results match WebSocket query results',
  { timeout: 30000 },
  async () => {
    const client = await pool.connect();

    for (const queryPromise of sampleQueries(sqlFull)) {
      const { query, params } = queryPromise.parameterizedQuery;
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
  const sql__ = neon(DB_URL);
  const sqlff = neon(DB_URL, { arrayMode: false, fullResults: false });
  const sqlft = neon(DB_URL, { arrayMode: false, fullResults: true });
  const sqltf = neon(DB_URL, { arrayMode: true, fullResults: false });
  const sqltt = neon(DB_URL, { arrayMode: true, fullResults: true });
  const sqlt_ = neon(DB_URL, { arrayMode: true });
  const sql_t = neon(DB_URL, { fullResults: true });

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
  const fftt = await sqlff("SELECT 'xyz' AS str", [], {
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

  const ttff = await sqltt("SELECT 'xyz' AS str", [], {
    arrayMode: false,
    fullResults: false,
  });
  assertType<Record<string, unknown>[]>(ttff);
  expect(ttff[0].str).toBe('xyz');
});

test('custom fetch', async () => {
  const fn = vi.fn();
  neonConfig.fetchFunction = (url: string, options: any) => {
    fn(url);
    return fetch(url, options);
  };
  await expect(sql`SELECT ${'customFetch'} AS str`).resolves.toStrictEqual([
    { str: 'customFetch' },
  ]);
  expect(fn).toHaveBeenCalledOnce();
});

test('errors match WebSocket query errors', async () => {
  const q = 'SELECT 123 WHERE x';

  await Promise.all([
    expect(sql(q)).rejects.toThrowError('column "x" does not exist'),
    expect(pool.query(q)).rejects.toThrowError('column "x" does not exist'),
  ]);

  // now compare all other properties (`code`, `routine`, `severity`, etc.)
  const [httpErr, wsErr] = (await Promise.all([
    new Promise((resolve) => sql(q).catch((e: Error) => resolve(e))),
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
  await expect(sql('SELECT $1', [])).rejects.toThrowError(
    'bind message supplies 0 parameters',
  );

  await expect(sql('SELECT $1', [1, 2])).rejects.toThrowError(
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
    sql('SELECT pg_sleep(2)', [], { fetchOptions: { signal } }),
  ).rejects.toThrow('TimeoutError');
});

test('timeout not aborting an http query', { timeout: 5000 }, async () => {
  // note: in Node pre-17.3, you'd do this instead:

  // const abortController = new AbortController();
  // const timeout = setTimeout(() => abortController.abort(new Error('fetch timed out')), 2500);
  // const { signal } = abortController;

  const signal = AbortSignal.timeout(2500);

  await expect(
    sql('SELECT pg_sleep(.25)', [], { fetchOptions: { signal } }),
  ).resolves.toStrictEqual([{ pg_sleep: '' }]);
});

test('database URL with wrong user to `neon()`', async () => {
  const urlWithBadHost = DB_URL.replace('//', '//x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrowError(
    'password authentication failed',
  );
});

test('database URL with wrong password to `neon()`', async () => {
  const urlWithBadPassword = DB_URL.replace('@', 'x@');
  const sqlBad = neon(urlWithBadPassword);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrowError(
    'password authentication failed',
  );
});

test('database URL with wrong project to `neon()`', async () => {
  const urlWithBadHost = DB_URL.replace('@', '@x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrowError(
    'password authentication failed',
  );
});

test(
  'database URL with wrong host to `neon()`',
  { timeout: 10000 },
  async () => {
    const urlWithBadHost = DB_URL.replace('.neon.tech', '.neon.techh');
    const sqlBad = neon(urlWithBadHost);
    await expect(sqlBad`SELECT ${1}::int AS one`).rejects.toThrowError(
      'fetch failed',
    );
  },
);

test('undefined database URL', async () => {
  expect(() => neon(undefined as unknown as string)).toThrowError(
    'No database connection string was provided',
  );
});

test('empty database URL to `neon()`', async () => {
  expect(() => neon('')).toThrowError(
    'No database connection string was provided',
  );
});

test('wrong-scheme database URL to `neon()`', async () => {
  expect(() => neon(DB_URL.replace(/^/, 'x'))).toThrowError(
    'Database connection string format for `neon()` should be',
  );
});
