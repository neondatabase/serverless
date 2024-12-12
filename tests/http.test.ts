import { expect, test } from 'vitest';
import { neon, Pool } from '../export'

const DB_URL = process.env.VITE_NEON_DB_URL!;
const pool = new Pool({ connectionString: DB_URL });

test('tagged-template http query results match WebSocket query results', { timeout: 30000 }, async () => {
  
  // check that http and WebSocket responses match across a range of queries,
  // subject to the following known differences:
  // * http results are plain Objects, not Result instances
  // * http results lack `oid` and `RowCtor` fields (which are both usually `null`)
  
  const client = await pool.connect();
  const sql = neon(DB_URL, { fullResults: true });
  const now = new Date();

  async function compare(queryPromise: ReturnType<typeof sql>) {
    const { query, params } = queryPromise.parameterizedQuery;
    const [httpResult, wsResult] = await Promise.all([
      queryPromise,
      client.query(query, params),
    ]);
    const httpResultWithNullExtras = { ...httpResult, oid: null, RowCtor: null };
    const wsResultAsRawObject = { ...wsResult };
    expect(httpResultWithNullExtras).toMatchObject(wsResultAsRawObject);
  }
  
  await compare(sql`SELECT ${1} AS int_uncast`);
  await compare(sql`SELECT ${1}::int AS int`);
  await compare(sql`SELECT ${1}::int8 AS int8num`);
  await compare(sql`SELECT ${1}::decimal AS decimalnum`);
  await compare(sql`SELECT ${'[1,4)'}::int4range AS int4range`);
  await compare(sql`SELECT ${'hello'} AS str`);
  await compare(sql`SELECT ${['a', 'b', 'c']} AS arrstr_uncast`);
  await compare(sql`SELECT ${[[2], [4]]}::int[][] AS arrnumnested`);
  await compare(sql`SELECT ${now}::timestamptz AS timestamptznow`);
  await compare(sql`SELECT ${'16:17:18+01:00'}::timetz AS timetz`);
  await compare(sql`SELECT ${'17:18:19'}::time AS time`);
  await compare(sql`SELECT ${now}::date AS datenow`);
  await compare(sql`SELECT ${{ x: 'y' }} AS obj_uncast`);
  await compare(sql`SELECT ${'11:22:33:44:55:66'}::macaddr AS macaddr`);
  await compare(sql`SELECT ${'\\xDEADBEEF'}::bytea AS bytea`);
  await compare(sql`SELECT ${'(2, 3)'}::point AS point`);
  await compare(sql`SELECT ${'<(2, 3), 1>'}::circle AS circle`);
  await compare(sql`SELECT ${'10.10.10.0/24'}::cidr AS cidr`);
  await compare(sql`SELECT ${true} AS bool_uncast`);
  await compare(sql`SELECT ${'hello'} || ' ' || ${'world'} AS greeting`);
  await compare(sql`SELECT ${[1, 2, 3]}::int[] AS arrnum`);
  await compare(sql`SELECT ${['a', 'b', 'c']}::text[] AS arrstr`);
  await compare(sql`SELECT ${{ x: 'y' }}::jsonb AS jsonb_obj`);
  await compare(sql`SELECT ${{ x: 'y' }}::json AS json_obj`);
  await compare(sql`SELECT ${['11:22:33:44:55:66']}::macaddr[] AS arrmacaddr`);
  await compare(sql`SELECT ${['10.10.10.0/24']}::cidr[] AS arrcidr`);
  await compare(sql`SELECT ${true}::boolean AS bool`);
  await compare(sql`SELECT ${[now]}::timestamptz[] AS arrtstz`);
  await compare(sql`SELECT ${['(2, 3)']}::point[] AS arrpoint`);
  await compare(sql`SELECT ${['<(2, 3), 1>']}::circle[] AS arrcircle`);
  await compare(sql`SELECT ${['\\xDEADBEEF', '\\xDEADBEEF']}::bytea[] AS arrbytea`);
  await compare(sql`SELECT null AS null`);
  await compare(sql`SELECT ${null} AS null`);
  await compare(sql`SELECT ${'NULL'} AS null_str`);
  await compare(sql`SELECT ${[1, 2, 3]} AS arrnum_uncast`);
  await compare(sql`SELECT ${[[2], [4]]} AS arrnumnested_uncast`);
  await compare(sql`SELECT ${now} AS timenow_uncast`);
  await compare(sql`SELECT ${now}::timestamp AS timestampnow`);
  await compare(sql`SELECT ${new Uint8Array([65, 66, 67])} AS bytea`);
  await compare(sql`SELECT ${Buffer.from([65, 66, 67])} AS bytea`);

  client.release();
});

