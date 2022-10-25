import { Client } from 'pg';
import * as db from 'zapatos/db';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const client = new Client({ connectionString: env.DATABASE_URL });
    await client.connect();
    const result1 = await db.select('whc_sites_2021', db.all, { columns: ['name_en'] }).run(client); // client.query('SELECT name_en FROM whc_sites_2021 ORDER BY name_en');
    // const placeholders = new Array(100).fill(0).map((_, i) => `(\$${i + 1})`).join(', ');
    // const values = await Promise.all(new Array(100).fill(0).map(_ => crypto.randomUUID()));
    // const values = await Promise.all(new Array(100).fill(0).map(_ => crypto.randomUUID()));
    // const result2 = await db.insert('strings',) // await client.query(`INSERT INTO strings (string) VALUES ${placeholders} RETURNING id`, values);
    await client.end();
    return new Response(JSON.stringify(result1));
  }
}
