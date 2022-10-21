import { Client } from 'pg';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const client = new Client({ connectionString: env.DATABASE_URL });
    await client.connect();
    console.log('*** connected! ***')
    const result = await client.query('SELECT now()');
    return new Response(JSON.stringify(result.rows));
  }
}
