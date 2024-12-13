import { expect, test } from 'vitest';
import { neon, Pool as WsPool } from '../export';
import { Pool as PgPool } from 'pg';

const DB_URL = process.env.VITE_NEON_DB_URL!;

const sql = neon(DB_URL);
const wsPool = new WsPool({ connectionString: DB_URL });
const pgPool = new PgPool({ connectionString: DB_URL });

test('WebSockets query results match pg/TCP query results', { timeout: 30000 }, async () => {

  // check that http and WebSocket responses match across a range of queries

  const wsClient = await wsPool.connect();
  const pgClient = await pgPool.connect();
  const now = new Date();

  async function compare(queryPromise: ReturnType<typeof sql>) {
    const { query, params } = queryPromise.parameterizedQuery;
    const [wsResult, pgResult] = await Promise.all([
       wsClient.query(query, params),
       pgClient.query(query, params),
    ]);
    expect(wsResult).toMatchObject(pgResult);
  }

  await compare(sql`SELECT ${1} AS int_uncast`);
  await compare(sql`SELECT ${-1}::int AS int`);
  await compare(sql`SELECT ${1}::int8 AS int8num`);
  await compare(sql`SELECT ${-1}::decimal AS decimalnum`);
  await compare(sql`SELECT ${2n} AS bigint`);
  await compare(sql`SELECT ${9007199254740993n} AS bigint`);
  await compare(sql`SELECT ${Math.PI} AS pi`);
  await compare(sql`SELECT ${Math.PI}::real AS pi`);
  await compare(sql`SELECT ${Math.PI}::double precision AS pi`);
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
  await compare(sql`SELECT ${{ x: 'y' }} AS json_obj_uncast`);
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
  await compare(sql`SELECT ${new Uint8Array(65536).fill(128)} AS bytea`);
  await compare(sql`SELECT ${Buffer.from([65, 66, 67])} AS bytea`);

  // non-template usage
  await compare(sql('SELECT $1::timestamp AS timestampnow', [now]));
  await compare(sql("SELECT $1 || ' ' || $2 AS greeting", ['hello', 'world']));
  await compare(sql('SELECT 123 AS num'));
  await compare(sql('SELECT 123 AS num', []));

  wsClient.release();
  pgClient.release();
});
