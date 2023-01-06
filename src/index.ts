import { Client, Pool } from '../export';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';

export interface Env {
  NEON_DB_URL: string;
  MY_DB_URL: string;
}

async function query(lng: number, lat: number, client: Client, ctx: ExecutionContext) {
  await client.connect();
  // const client = new Pool({ connectionString: env.DATABASE_URL });

  const distance = db.sql<s.whc_sites_2021.SQL>`
      ${"location"} <-> st_makepoint(${db.param(lng)}, ${db.param(lat)})`;

  const [nearestSites, [{ now }]] = await Promise.all([
    db.select('whc_sites_2021', db.all, {
      columns: ['name_en', 'id_no', 'category'],
      extras: { distance },
      order: { by: distance, direction: 'ASC' },
      limit: 10,
    }).run(client),
    db.sql`SELECT now()`.run(client),
  ]);

  await client.end();
  return { nearestSites, now };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    // note: there are some places where DOM lib types clobber Cloudflare ones
    const cf = (request as any).cf ?? {} as any;
    const lat = cf.latitude ?? '37.818496';
    const lng = cf.longitude ?? '-122.473831';
    const city = cf.city ?? 'Unknown location (assuming San Francisco)';
    const country = cf.country ?? 'Earth';

    // TODO: tidy up these variable names (ta, tb, nearesSites5, etc.)

    console.log('=== wss, pipelined connect (my DB only) ===')
    let client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = true;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = 'password';
    client.neonConfig.pipelineTLS = true;  // irrelevant for wss

    let t0 = Date.now();
    const { nearestSites: nearestSites1, now: now1 } = await query(lng, lat, client, ctx);
    let ta = Date.now() - t0;

    console.log('=== wss, no pipelining (my DB only) ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = true;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = false;
    client.neonConfig.pipelineTLS = false;  // irrelevant for wss

    t0 = Date.now();
    const { nearestSites: nearestSites5, now: now5 } = await query(lng, lat, client, ctx);
    let te = Date.now() - t0;


    console.log('=== subtls, fully pipelined (Neon only) ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = 'password';
    client.neonConfig.pipelineTLS = true;

    t0 = Date.now();
    const { nearestSites: nearestSites2, now: now2 } = await query(lng, lat, client, ctx);
    let tb = Date.now() - t0;


    console.log('=== subtls, pipelined TLS only (Neon only) ===')
    client = new Client(env.NEON_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = false;
    client.neonConfig.pipelineTLS = true;

    t0 = Date.now();
    const { nearestSites: nearestSites3, now: now3 } = await query(lng, lat, client, ctx);
    let tc = Date.now() - t0;


    console.log('=== subtls, pipelined connect only ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = 'password';
    client.neonConfig.pipelineTLS = false;

    t0 = Date.now();
    const { nearestSites: nearestSites4, now: now4 } = await query(lng, lat, client, ctx);
    let td = Date.now() - t0;

    console.log('=== subtls, no pipelining ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = 'ws.manipulexity.com/v1';
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.disableTLS = client.neonConfig.useSecureWebSocket;
    client.neonConfig.pipelineConnect = false;
    client.neonConfig.pipelineTLS = false;

    t0 = Date.now();
    const { nearestSites: nearestSites6, now: now6 } = await query(lng, lat, client, ctx);
    let tf = Date.now() - t0;


    return new Response(JSON.stringify({ ta, te, tb, tc, td, tf, lat, lng, city, country, nearestSites1, now1, nearestSites2, now2, nearestSites3, now3, nearestSites4, now4, nearestSites5, now5, nearestSites6, now6 }, null, 2),
      { headers: { 'Content-Type': 'application/json' } });
  }
}
