import { Client } from 'pg';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const client = new Client({ connectionString: env.DATABASE_URL });
    await client.connect();
    const result = await client.query('SELECT x * 2 AS x2 FROM generate_series(0, 5000) as x');  // 'SELECT now()');
    // console.log(result);
    return new Response(JSON.stringify(result.rows));
  }
}
