import { expect, test } from 'vitest';
import { neon } from '../export'

const DB_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DB_URL);

test('basic batch query with array of sql', async () => {
  const [[a], [b]] = await sql.transaction([
    sql`SELECT ${1}::int AS "batchInt"`,
    sql`SELECT ${'hello'} AS "batchStr"`,
  ]);
  expect(a.batchInt).toBe(1);
  expect(b.batchStr).toBe('hello');
});

test('basic batch query with function', async () => {
  const [[a], [b]] = await sql.transaction((txn) => [
    txn`SELECT ${2}::int AS "batchInt"`,
    txn`SELECT ${'goodbye'} AS "batchStr"`,
  ]);
  expect(a.batchInt).toBe(2);
  expect(b.batchStr).toBe('goodbye');
});

test('empty batch query with function', async () => {
  const emptyResult = await sql.transaction(() => []);
  expect(emptyResult).toHaveLength(0);
});

test('empty batch query with array', async () => {
  const emptyResult = await sql.transaction([]);
  expect(emptyResult).toHaveLength(0);
});

test('option setting on `transaction()`', async () => {
  const [[[a]], [[b]]] = await sql.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ],
    { arrayMode: true, isolationLevel: 'Serializable', readOnly: true },  // arrayMode changes result format destructured above
  );
  expect(a).toBe(1);
  expect(b).toBe('hello');
});

test('option setting on `neon()`', async () => {
  const sqlArr = neon(DB_URL, {
    arrayMode: true,  // arrayMode changes result format destructured below
    isolationLevel: 'RepeatableRead',
  });
  const [[[a]], [[b]]] = await sqlArr.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn`SELECT ${'hello'} AS "batchStr"`,
  ]);
  expect(a).toBe(1);
  expect(b).toBe('hello');
});

test('option setting on `transaction()` overrides option setting on `neon()`', async () => {
  const sqlArr = neon(DB_URL, { arrayMode: true });
  const [[a], [b]] = await sqlArr.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ],
    { arrayMode: false },
  );
  expect(a.batchInt).toBe(1);
  expect(b.batchStr).toBe('hello');
});

test('option setting on individual queries within a batch', async () => {
  const [[a], [b]] = await sql.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn('SELECT $1 AS "batchStr"', ['hello'], { arrayMode: true }),
  ]);
  expect(a.batchInt).toBe(1);
  expect(b[0]).toBe('hello');
});

test('invalid queries passed to `transaction()` in function', async () => {
  await expect(
    // @ts-expect-error
    sql.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      `SELECT ${'hello'} AS "batchStr"`,  // <- oops, this is a bare string
    ])
  )
  .rejects.toThrowError('transaction() expects an array of queries, or a function returning an array of queries');
});

test('`transaction()` using database URL with wrong user', async () => {
  const urlWithBadHost = DB_URL.replace('//', '//x');
  const sqlBad = neon(urlWithBadHost);
  await expect(
    sqlBad.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ])
  )
  .rejects.toThrowError('password authentication failed for user');
});

test('`transaction()` using database URL with wrong password', async () => {
  const urlWithBadPassword = DB_URL.replace('@', 'x@');
  const sqlBad = neon(urlWithBadPassword);
  await expect(
    sqlBad.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ])
  )
  .rejects.toThrowError('password authentication failed for user');
});

test('`transaction()` using database URL with wrong project', async () => {
  const urlWithBadHost = DB_URL.replace('@', '@x');
  const sqlBad = neon(urlWithBadHost);
  await expect(
    sqlBad.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ])
  )
  .rejects.toThrowError('password authentication failed for user');
});

test('`transaction()` using database URL with wrong host', async () => {
  const urlWithBadHost = DB_URL.replace('.neon.tech', '.neon.bxgpsmb.tech');
  const sqlBad = neon(urlWithBadHost);
  await expect(
    sqlBad.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ])
  )
  .rejects.toThrowError('Error connecting to database: fetch failed');
});

test('undefined database URL to `neon()`', async () => {
  expect(() => neon(undefined as unknown as string)).toThrowError('No database connection string was provided');
});

test('empty database URL to `neon()`', async () => {
  expect(() => neon('')).toThrowError('No database connection string was provided');
});

test('wrong-scheme database URL to `neon()`', async () => {
  expect(() => neon(DB_URL.replace(/^/, 'x'))).toThrowError('Database connection string format for `neon()` should be');
});
