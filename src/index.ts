import { Client, Pool } from '../export';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';
import { Socket } from '../shims/net';

export interface Env { DATABASE_URL: string; }

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const t0 = Date.now();

    // note: there are some places where DOM lib types clobber Cloudflare ones
    const cf = (request as any).cf ?? {} as any;
    const lat = cf.latitude ?? '37.818496';
    const lng = cf.longitude ?? '-122.473831';
    const city = cf.city ?? 'Unknown location (assuming San Francisco)';
    const country = cf.country ?? 'Earth';

    // note that for Neon DB host addresses, these settings will be overridden
    Socket.useSecureWebSocket = true;  // true to use wss + cleartext pg, false to use ws + subtls pg
    Socket.disableTLS = Socket.useSecureWebSocket;
    Socket.fastStart = Socket.useSecureWebSocket;

    const client = new Client(env.DATABASE_URL);
    await client.connect();
    // const client = new Pool({ connectionString: env.DATABASE_URL });


    const distance = db.sql<s.whc_sites_2021.SQL>`
      ${"location"} <-> st_makepoint(${db.param(lng)}, ${db.param(lat)})`;

    const nearestSites = await db.select('whc_sites_2021', db.all, {
      columns: ['name_en', 'id_no', 'category'],
      extras: { distance },
      order: { by: distance, direction: 'ASC' },
      limit: 10,
    }).run(client);

    ctx.waitUntil(client.end());

    const t = Date.now() - t0;
    return new Response(JSON.stringify({ t, lat, lng, city, country, nearestSites }, null, 2),
      { headers: { 'Content-Type': 'application/json' } });
  }
}
