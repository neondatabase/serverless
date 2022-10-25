import { Client } from 'pg';
import * as db from 'zapatos/db';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const client = new Client({ connectionString: env.DATABASE_URL });
    await client.connect();
    const result = await db.select('whc_sites_2021', db.all, { columns: ['name_en'] }).run(client);
    ctx.waitUntil(client.end());
    return new Response(JSON.stringify(result));
  }
}
