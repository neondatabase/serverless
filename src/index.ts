import { Client } from 'pg';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';
import patchPgClient from './patchPgClient';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    // note: there are some places where DOM lib types clobber Cloudflare ones
    const cf = (request as any).cf ?? {} as any;
    const lat = cf.latitude ?? '37.818496';
    const lng = cf.longitude ?? '-122.473831';
    const city = cf.city ?? 'Unknown location (assuming San Francisco)';
    const country = cf.country ?? 'Earth';

    const client = patchPgClient(new Client({ connectionString: env.DATABASE_URL }));
    await client.connect();
    // const distance = db.sql<s.whc_sites_2021.SQL>`
    //   ${"location"} <-> st_makepoint(${db.param(lng)}, ${db.param(lat)})`;
    const distance = db.sql<s.whc_sites_2021.SQL>`length(${"name_en"})`;
    const nearestSites = await db.select('whc_sites_2021', db.all, {
      columns: ['name_en', 'id_no', 'category'],
      extras: { distance },
      order: { by: distance, direction: 'ASC' },
      limit: 10,
    }).run(client);
    ctx.waitUntil(client.end());

    return new Response(JSON.stringify({ lat, lng, city, country, nearestSites }, null, 2),
      { headers: { 'Content-Type': 'application/json' } });
  }
}
