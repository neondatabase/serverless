// see vercel.test.ts: we copy this from index.mjs in the root folder
import { Client, Pool, neon } from '../../neondatabase-serverless.mjs';

// note: we use this file for both Edge and Node runtimes
// - for both, we append a definition for the variable `moment`
// - for Edge, we also append/export the appropriate `config` variable

export default async (req, rc) => {
  // rc is response for nodejs, context for edge

  const DATABASE_URL = process.env.DATABASE_URL; // note: destructuring may not work as expected here
  let q;

  // test WebSockets (Client.prototype.query)
  q = "SELECT 'client' AS clientstr";
  const client = new Client(DATABASE_URL);
  await client.connect();
  const { rows: clientRows } = await client.query(q);
  await client.end(); // await is OK here, but waitUntil(...) is quicker for real use-cases

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
  const { rows: fetchRows } = await sql(q);

  // respond
  const responseData = {
    clientRows,
    poolRows,
    poolClientRows,
    fetchRows,
    moment,
  };

  if (rc.json) {
    // nodejs runtime
    rc.json(responseData);
  } else {
    // edge runtime
    return new Response(JSON.stringify(responseData), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
