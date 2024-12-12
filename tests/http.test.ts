import { expect, test } from 'vitest';
import { neon, Pool } from '../export'

const DB_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DB_URL);
const sqlfr = neon(DB_URL, { fullResults: true });
const pool = new Pool({ connectionString: DB_URL });

test('http query results match WebSocket query results', { timeout: 30000 }, async () => {

  // check that http and WebSocket responses match across a range of queries,
  // subject to the following known differences:
  // * http results are plain Objects, not Result instances
  // * http results lack `oid` and `RowCtor` fields (which are both usually `null`)

  const client = await pool.connect();
  const now = new Date();

  async function compare(queryPromise: ReturnType<typeof sqlfr>) {
    const { query, params } = queryPromise.parameterizedQuery;
    const [httpResult, wsResult] = await Promise.all([
      queryPromise,
      client.query(query, params),
    ]);
    const httpResultWithNullExtras = { ...httpResult, oid: null, RowCtor: null };
    const wsResultAsRawObject = { ...wsResult };
    expect(httpResultWithNullExtras).toMatchObject(wsResultAsRawObject);
  }

  await compare(sqlfr`SELECT ${1} AS int_uncast`);
  await compare(sqlfr`SELECT ${1}::int AS int`);
  await compare(sqlfr`SELECT ${1}::int8 AS int8num`);
  await compare(sqlfr`SELECT ${1}::decimal AS decimalnum`);
  await compare(sqlfr`SELECT ${2n} AS bigint`);
  await compare(sqlfr`SELECT ${9007199254740993n} AS bigint`);
  await compare(sqlfr`SELECT ${Math.PI} AS pi`);
  await compare(sqlfr`SELECT ${Math.PI}::real AS pi`);
  await compare(sqlfr`SELECT ${Math.PI}::double precision AS pi`);
  await compare(sqlfr`SELECT ${'[1,4)'}::int4range AS int4range`);
  await compare(sqlfr`SELECT ${'hello'} AS str`);
  await compare(sqlfr`SELECT ${['a', 'b', 'c']} AS arrstr_uncast`);
  await compare(sqlfr`SELECT ${[[2], [4]]}::int[][] AS arrnumnested`);
  await compare(sqlfr`SELECT ${now}::timestamptz AS timestamptznow`);
  await compare(sqlfr`SELECT ${'16:17:18+01:00'}::timetz AS timetz`);
  await compare(sqlfr`SELECT ${'17:18:19'}::time AS time`);
  await compare(sqlfr`SELECT ${now}::date AS datenow`);
  await compare(sqlfr`SELECT ${{ x: 'y' }} AS obj_uncast`);
  await compare(sqlfr`SELECT ${'11:22:33:44:55:66'}::macaddr AS macaddr`);
  await compare(sqlfr`SELECT ${'\\xDEADBEEF'}::bytea AS bytea`);
  await compare(sqlfr`SELECT ${'(2, 3)'}::point AS point`);
  await compare(sqlfr`SELECT ${'<(2, 3), 1>'}::circle AS circle`);
  await compare(sqlfr`SELECT ${'10.10.10.0/24'}::cidr AS cidr`);
  await compare(sqlfr`SELECT ${true} AS bool_uncast`);
  await compare(sqlfr`SELECT ${'hello'} || ' ' || ${'world'} AS greeting`);
  await compare(sqlfr`SELECT ${[1, 2, 3]}::int[] AS arrnum`);
  await compare(sqlfr`SELECT ${['a', 'b', 'c']}::text[] AS arrstr`);
  await compare(sqlfr`SELECT ${{ x: 'y' }}::jsonb AS jsonb_obj`);
  await compare(sqlfr`SELECT ${{ x: 'y' }}::json AS json_obj`);
  await compare(sqlfr`SELECT ${['11:22:33:44:55:66']}::macaddr[] AS arrmacaddr`);
  await compare(sqlfr`SELECT ${['10.10.10.0/24']}::cidr[] AS arrcidr`);
  await compare(sqlfr`SELECT ${true}::boolean AS bool`);
  await compare(sqlfr`SELECT ${[now]}::timestamptz[] AS arrtstz`);
  await compare(sqlfr`SELECT ${['(2, 3)']}::point[] AS arrpoint`);
  await compare(sqlfr`SELECT ${['<(2, 3), 1>']}::circle[] AS arrcircle`);
  await compare(sqlfr`SELECT ${['\\xDEADBEEF', '\\xDEADBEEF']}::bytea[] AS arrbytea`);
  await compare(sqlfr`SELECT null AS null`);
  await compare(sqlfr`SELECT ${null} AS null`);
  await compare(sqlfr`SELECT ${'NULL'} AS null_str`);
  await compare(sqlfr`SELECT ${[1, 2, 3]} AS arrnum_uncast`);
  await compare(sqlfr`SELECT ${[[2], [4]]} AS arrnumnested_uncast`);
  await compare(sqlfr`SELECT ${now} AS timenow_uncast`);
  await compare(sqlfr`SELECT ${now}::timestamp AS timestampnow`);
  await compare(sqlfr`SELECT ${new Uint8Array([65, 66, 67])} AS bytea`);
  await compare(sqlfr`SELECT ${Buffer.from([65, 66, 67])} AS bytea`);

  // non-template usage
  await compare(sqlfr('SELECT $1::timestamp AS timestampnow', [now]));
  await compare(sqlfr("SELECT $1 || ' ' || $2 AS greeting", ['hello', 'world']));
  await compare(sqlfr('SELECT 123 AS num'));
  await compare(sqlfr('SELECT 123 AS num', []));

  client.release();
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
  ).resolves;

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

