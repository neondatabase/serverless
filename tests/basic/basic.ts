// these basic tests are run in Bun and Deno (which are not supported by vitest)

import { Client, Pool, neon } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'

const pv = process.versions;
for (const platform of ['deno', 'bun', 'node']) {
  const v = pv[platform];
  if (v) {
    console.log(`Using ${platform} v${v}:`);
    break;
  }
}

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;
let q: string;

// test WebSockets (Client.prototype.query)
q = "SELECT 'client' AS clientstr";
const client = new Client(DATABASE_URL);
await client.connect();
const { rows: clientRows } = await client.query(q);
await client.end();

// test WebSockets (Pool.prototype.query)
q = "SELECT 'pool' AS poolstr";
const pool = new Pool({ connectionString: DATABASE_URL });
const { rows: poolRows } = await pool.query(q);

// test WebSockets (Pool.prototype.connect)
q = "SELECT 'poolclient' AS poolclientstr";
const poolClient = await pool.connect();
const { rows: poolClientRows } = await poolClient.query(q);
poolClient.release();
await pool.end();

// test http fetch
q = "SELECT 'fetch' AS fetchstr";
const sql = neon(DATABASE_URL, { fullResults: true });
const { rows: fetchRows } = await sql.query(q);

const result = JSON.stringify({
  clientRows,
  poolRows,
  poolClientRows,
  fetchRows,
});
const expected =
  '{"clientRows":[{"clientstr":"client"}],"poolRows":[{"poolstr":"pool"}],"poolClientRows":[{"poolclientstr":"poolclient"}],"fetchRows":[{"fetchstr":"fetch"}]}';

if (result !== expected) throw new Error(`Expected ${expected}, got ${result}`);
console.log('✅ Tests passed');
