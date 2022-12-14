import { Client } from 'pg';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';
import { Socket } from '../shims/net';
import patchPgClient from '../shims/patchPgClient';
import rewritePgConfig from '../shims/rewritePgConfig';

export interface Env {
  DATABASE_URL: string;
  WASM_PATH: string | undefined;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    // note: there are some places where DOM lib types clobber Cloudflare ones
    const cf = (request as any).cf ?? {} as any;
    const lat = cf.latitude ?? '37.818496';
    const lng = cf.longitude ?? '-122.473831';
    const city = cf.city ?? 'Unknown location (assuming San Francisco)';
    const country = cf.country ?? 'Earth';

    Socket.wasmPath = env.WASM_PATH;  // must be set on browsers, undefined on Cloudflare

    // EITHER: disable SCRAM
    const client = new Client(rewritePgConfig(env.DATABASE_URL));

    // OR: optimise SCRAM
    // neonConfig.disableSCRAM = false;
    // const client = patchPgClient(new Client({ connectionString: env.DATABASE_URL }));

    await client.connect();

    const distance = db.sql<s.whc_sites_2021.SQL>`
      ${"location"} <-> st_makepoint(${db.param(lng)}, ${db.param(lat)})`;

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
