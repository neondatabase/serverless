import { Client, Pool } from '../export';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';

export interface Env {
  NEON_DB_URL: string;
  MY_DB_URL: string;
}

async function query(lng: number, lat: number, client: Client | Pool, ctx: ExecutionContext) {
  await client.connect();

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

  client.end();
  return { nearestSites, now };
}

async function timed(f: () => any) {
  const t0 = Date.now();
  const result = await f();
  const t = Date.now() - t0;
  return [t, result] as const;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    // note: there are some places where DOM lib types clobber Cloudflare ones
    const cf = (request as any).cf ?? {} as any;
    const lat = cf.latitude ?? '37.818496';
    const lng = cf.longitude ?? '-122.473831';
    const city = cf.city ?? 'Unknown location (assuming San Francisco)';
    const country = cf.country ?? 'Earth';

    let client: Client | Pool;

    console.log('=== Neon/wss, pipelined connect (default) ===')
    client = new Client(env.NEON_DB_URL);
    const [tNeonPipelined, { nearestSites, now }] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Neon/wss, no pipelining ===')
    client = new Client(env.NEON_DB_URL);
    client.neonConfig.pipelineConnect = false;
    const [tNeonUnpipelined] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Neon/wss, pipelined connect using Pool (default) ===')
    client = new Pool({ connectionString: env.NEON_DB_URL });
    const [tNeonPipelinedPool] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Patched pg/subtls, no pipelining ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = false;
    client.neonConfig.pipelineConnect = false;
    const [tSubtlsUnpipelined] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Patched pg/subtls, pipelined TLS ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = true;
    client.neonConfig.pipelineConnect = false;
    const [tSubtlsPipelinedTLS] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Patched pg/subtls, pipelined connect ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = false;
    client.neonConfig.pipelineConnect = 'password';
    const [tSubtlsPipelinedConnect] = await timed(() => query(lng, lat, client, ctx));

    console.log('=== Patched pg/subtls, pipelined all ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = true;
    client.neonConfig.pipelineConnect = 'password';
    const [tSubtlsPipelinedAll] = await timed(() => query(lng, lat, client, ctx));

    return new Response(
      JSON.stringify({
        tNeonPipelined,
        tNeonUnpipelined,
        tNeonPipelinedPool,
        tSubtlsUnpipelined,
        tSubtlsPipelinedTLS,
        tSubtlsPipelinedConnect,
        tSubtlsPipelinedAll,
        lat, lng, city, country, nearestSites, now,
      }, null, 2),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
