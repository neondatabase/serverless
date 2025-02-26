import { assertType, expect, test } from 'vitest';
import { neon } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DATABASE_URL);

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
  const [a, b] = await sql.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ],
    { arrayMode: true, isolationLevel: 'Serializable', readOnly: true }, // arrayMode changes result format below
  );
  assertType<any[][]>(a);
  assertType<any[][]>(b);
  expect(a[0][0]).toBe(1);
  expect(b[0][0]).toBe('hello');
});

test('option setting on `neon()`', async () => {
  const sqlArr = neon(DATABASE_URL, {
    arrayMode: true, // arrayMode changes result format below
    isolationLevel: 'RepeatableRead',
  });
  const [a, b] = await sqlArr.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn`SELECT ${'hello'} AS "batchStr"`,
  ]);
  assertType<any[][]>(a);
  assertType<any[][]>(b);
  expect(a[0][0]).toBe(1);
  expect(b[0][0]).toBe('hello');
});

test('option setting on `transaction()` overrides option setting on `neon()` (a)', async () => {
  const sqlArr = neon(DATABASE_URL, { arrayMode: true });
  const [a, b] = await sqlArr.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ],
    { arrayMode: false },
  );
  assertType<Record<string, unknown>[]>(a);
  assertType<Record<string, unknown>[]>(b);
  expect(a[0].batchInt).toBe(1);
  expect(b[0].batchStr).toBe('hello');
});

test('option setting on `transaction()` overrides option setting on `neon()` (b)', async () => {
  const [a, b] = await sql.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${'hello'} AS "batchStr"`,
    ],
    { fullResults: true },
  );
  assertType<Record<string, unknown>[]>(a.rows);
  assertType<Record<string, unknown>[]>(b.rows);
  expect(a.rows[0].batchInt).toBe(1);
  expect(b.rows[0].batchStr).toBe('hello');
});

test('option setting on individual queries within a batch (unsupported by types)', async () => {
  const [[a], [b]] = await sql.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    // @ts-expect-error this works but is unsupported by the TS types
    txn.query('SELECT $1 AS "batchStr"', ['hello'], { arrayMode: true }),
  ]);
  expect(a.batchInt).toBe(1);
  expect(b[0]).toBe('hello');
});

test('invalid queries passed to `transaction()` in function', async () => {
  await expect(
    // @ts-expect-error
    sql.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      `SELECT ${'hello'} AS "batchStr"`, // <- oops, this is a bare string
    ]),
  ).rejects.toThrowError(
    'transaction() expects an array of queries, or a function returning an array of queries',
  );
});

test('invalid queries passed to `transaction()` in array', async () => {
  await expect(
    sql.transaction([
      sql`SELECT ${1}::int AS "batchInt"`,
      // @ts-expect-error
      `SELECT ${'hello'} AS "batchStr"`, // <- oops, this is a bare string
    ]),
  ).rejects.toThrowError(
    'transaction() expects an array of queries, or a function returning an array of queries',
  );
});
