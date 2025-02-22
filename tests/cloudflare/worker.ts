import { Client, Pool, neon } from '../..';
import type { ExecutionContext } from '@cloudflare/workers-types';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { sql } from 'drizzle-orm';

export default {
  async fetch(request: Request, emptyEnv: any, ctx: ExecutionContext) {
    // only wrangler.toml can be used to provide env vars (https://github.com/cloudflare/workers-sdk/issues/2898)
    // -- so we pass them in via the request URL instead
    const url = new URL(request.url);
    const envJSON = decodeURIComponent(url.search.slice(1));
    const env = JSON.parse(envJSON);

    const DATABASE_URL = env.VITE_NEON_DB_URL;
    let q: string;

    console.log(url.pathname);

    if (url.pathname === '/noquery') {
      const client = new Client(DATABASE_URL);
      await client.connect();
      ctx.waitUntil(client.end());
      return new Response('{ "result": "OK" }', { headers: { 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/drizzle/noquery') {
      const client = new Client({ connectionString: DATABASE_URL });
      const db = drizzle(DATABASE_URL);
      await client.connect();
      // do nothing
      ctx.waitUntil(client.end());
      return new Response('{ "result": "OK" }', { headers: { 'Content-Type': 'application/json' } });
    }

    // test WebSockets (Client.prototype.query)
    q = "SELECT 'client' AS clientstr";
    const client = new Client(DATABASE_URL);
    await client.connect();
    const { rows: clientRows } = await client.query(q);
    ctx.waitUntil(client.end());

    // test WebSockets (Pool.prototype.query)
    q = "SELECT 'pool' AS poolstr";
    const pool = new Pool({ connectionString: DATABASE_URL });
    const { rows: poolRows } = await pool.query(q);

    // test WebSockets (Pool.prototype.connect)
    q = "SELECT 'poolclient' AS poolclientstr";
    const poolClient = await pool.connect();
    const { rows: poolClientRows } = await poolClient.query(q);
    poolClient.release();
    ctx.waitUntil(pool.end());

    // test http fetch
    q = "SELECT 'fetch' AS fetchstr";
    const sql = neon(DATABASE_URL, { fullResults: true });
    const { rows: fetchRows } = await sql(q);

    // respond
    const responseData = { clientRows, poolRows, poolClientRows, fetchRows };
    const responseJson = JSON.stringify(responseData, null, 2);
    return new Response(responseJson, { headers: { 'Content-Type': 'application/json' } });
  },
};
