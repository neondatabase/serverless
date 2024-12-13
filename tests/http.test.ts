import { expect, test, vi } from 'vitest';
import { neon, neonConfig, Pool } from '../export'
import { sampleSelects } from './sampleSelects';

const DB_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DB_URL);
const sqlFull = neon(DB_URL, { fullResults: true });
const pool = new Pool({ connectionString: DB_URL });

test('http query results match WebSocket query results', { timeout: 30000 }, async () => {
  const client = await pool.connect();

  for (const queryPromise of sampleSelects(sqlFull)) {
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
    const wsResultProcessed = { ...wsResult, fields: wsResult.fields.map(f => ({ ...f })), viaNeonFetch: true };

    expect(httpResultProcessed).toStrictEqual(wsResultProcessed);
  }

  client.release();
});

test('custom fetch', async () => {
  const fn = vi.fn();
  neonConfig.fetchFunction = (url: string, options: any) => {
    fn(url);
    return fetch(url, options);
  };
  await expect(sql`SELECT ${'customFetch'} AS str`).resolves.toMatchObject([{ str: 'customFetch' }]);
  expect(fn).toHaveBeenCalledOnce();
});

test('errors match WebSocket query errors', async () => {
  const q = 'SELECT 123 WHERE x';

  await Promise.all([
    expect(sql(q)).rejects.toThrowError('column "x" does not exist'),
    expect(pool.query(q)).rejects.toThrowError('column "x" does not exist'),
  ]);

  // now compare all other properties (`code`, `routine`, `severity`, etc.)
  const [httpErr, wsErr] = await Promise.all([
    new Promise(resolve => sql(q).catch((e: Error) => resolve(e))),
    new Promise(resolve => pool.query(q).catch((e: Error) => resolve(e))),
  ]) as [any, any];

  // account for known/accepted differences
  httpErr.length = wsErr.length;  // http errors don't have a `length` property
  httpErr.name = wsErr.name;  // http errors are named 'NeonDbError' rather than plain 'error'
  wsErr.sourceError = undefined;  // this property is unique to http errors

  // convert the errors into ordinary Objects, because vitest compares Errors only by message
  expect({ ...httpErr }).toStrictEqual({ ...wsErr });
});

test('http queries with too few or too many parameters', async () => {
  await expect(sql('SELECT $1', []))
    .rejects.toThrowError('bind message supplies 0 parameters');

  await expect(sql('SELECT $1', [1, 2]))
    .rejects.toThrowError('bind message supplies 2 parameters');
});

test('timeout aborting an http query', { timeout: 5000 }, async () => {
  const abortController = new AbortController();
  const { signal } = abortController;
  setTimeout(() => abortController.abort('fetch timed out'), 250);

  await expect(
    sql('SELECT pg_sleep(2)', [], { fetchOptions: { signal } })
  ).rejects.toThrow('fetch timed out');
});

test('timeout not aborting an http query', { timeout: 5000 }, async () => {
  const abortController = new AbortController();
  const { signal } = abortController;
  const timeout = setTimeout(() => abortController.abort('fetch timed out'), 2000);

  await expect(
    sql('SELECT pg_sleep(.5)', [], { fetchOptions: { signal } })
  ).resolves.toStrictEqual([{ pg_sleep: '' }]);

  clearTimeout(timeout);
});

test('database URL with wrong user to `neon()`', async () => {
  const urlWithBadHost = DB_URL.replace('//', '//x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`)
    .rejects.toThrowError('password authentication failed');
});

test('database URL with wrong password to `neon()`', async () => {
  const urlWithBadPassword = DB_URL.replace('@', 'x@');
  const sqlBad = neon(urlWithBadPassword);
  await expect(sqlBad`SELECT ${1}::int AS one`)
    .rejects.toThrowError('password authentication failed');
});

test('database URL with wrong project to `neon()`', async () => {
  const urlWithBadHost = DB_URL.replace('@', '@x');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`)
    .rejects.toThrowError('password authentication failed');
});

test('database URL with wrong host to `neon()`', { timeout: 10000 }, async () => {
  const urlWithBadHost = DB_URL.replace('.neon.tech', '.neon.techh');
  const sqlBad = neon(urlWithBadHost);
  await expect(sqlBad`SELECT ${1}::int AS one`)
    .rejects.toThrowError('fetch failed');
});

test('undefined database URL', async () => {
  expect(() => neon(undefined as unknown as string))
    .toThrowError('No database connection string was provided');
});

test('empty database URL to `neon()`', async () => {
  expect(() => neon(''))
    .toThrowError('No database connection string was provided');
});

test('wrong-scheme database URL to `neon()`', async () => {
  expect(() => neon(DB_URL.replace(/^/, 'x')))
    .toThrowError('Database connection string format for `neon()` should be');
});

