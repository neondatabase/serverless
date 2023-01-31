import { Client, ClientBase, neonConfig, Pool } from '../export';

export interface Env {
  NEON_DB_URL: string;
  MY_DB_URL: string;
}

async function query(queryable: ClientBase | Pool) {
  const { rows: [{ now: now1 }] } = await queryable.query(`SELECT now()`);
  const { rows: [{ now: now2 }] } = await queryable.query(`SELECT now()`);
  return { now1, now2 };
}

async function clientQuery(client: Client, ctx: ExecutionContext) {
  await client.connect();
  const results = await query(client);
  ctx.waitUntil(client.end());
  return results;
}

async function timed(f: () => any) {
  const t0 = Date.now();
  const result = await f();
  const t = Date.now() - t0;
  return [t, result] as const;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    let client: Client;
    const pool = new Pool({ connectionString: env.NEON_DB_URL });

    console.log('=== Warm-up: Neon/wss, pipelined connect (default) ===');
    client = new Client(env.NEON_DB_URL);
    const [tNeonWarmUp, { now1, now2 }] = await timed(() => clientQuery(client, ctx));
    console.log(tNeonWarmUp);

    console.log('=== Neon/wss, no pipelining ===')
    client = new Client(env.NEON_DB_URL);
    client.neonConfig.pipelineConnect = false;
    const [tNeonUnpipelined] = await timed(() => clientQuery(client, ctx));
    console.log(tNeonUnpipelined);

    console.log('=== Neon/wss, pipelined connect (default) ===');
    client = new Client(env.NEON_DB_URL);
    const [tNeonPipelined] = await timed(() => clientQuery(client, ctx));
    console.log(tNeonPipelined);

    console.log('=== Neon/wss, pipelined connect using Pool.query ===')
    const [tNeonPipelinedPoolQuery] = await timed(() => query(pool));
    console.log(tNeonPipelinedPoolQuery);

    console.log('=== Neon/wss, pipelined connect using Pool.connect (same pool) ===')
    const [tNeonPipelinedPoolConnect] = await timed(async () => {
      const poolClient = await pool.connect();
      const results = await query(poolClient);
      poolClient.release();
      return results;
    });
    console.log(tNeonPipelinedPoolConnect);

    console.log('=== Patched pg/wss, pipelined connect ===')
    client = new Client(env.MY_DB_URL);
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.pipelineConnect = 'password';
    const [tPgWssPipelined] = await timed(() => clientQuery(client, ctx));
    console.log(tPgWssPipelined);

    console.log('=== Patched pg/subtls, no pipelining ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = false;
    client.neonConfig.pipelineConnect = false;
    const [tSubtlsUnpipelined] = await timed(() => clientQuery(client, ctx));
    console.log(tSubtlsUnpipelined);

    console.log('=== Patched pg/subtls, pipelined TLS ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = true;
    client.neonConfig.pipelineConnect = false;
    const [tSubtlsPipelinedTLS] = await timed(() => clientQuery(client, ctx));
    console.log(tSubtlsPipelinedTLS);

    console.log('=== Patched pg/subtls, pipelined connect ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = false;
    client.neonConfig.pipelineConnect = 'password';
    const [tSubtlsPipelinedConnect] = await timed(() => clientQuery(client, ctx));
    console.log(tSubtlsPipelinedConnect);

    console.log('=== Patched pg/subtls, pipelined all ===')
    client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
    client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
    client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
    client.neonConfig.pipelineTLS = true;
    client.neonConfig.pipelineConnect = 'password';
    const [tSubtlsPipelinedAll] = await timed(() => clientQuery(client, ctx));
    console.log(tSubtlsPipelinedAll);

    return new Response(
      JSON.stringify({
        tNeonWarmUp,
        tNeonUnpipelined,
        tNeonPipelined,
        tNeonPipelinedPoolQuery,
        tNeonPipelinedPoolConnect,
        tPgWssPipelined,
        tSubtlsUnpipelined,
        tSubtlsPipelinedTLS,
        tSubtlsPipelinedConnect,
        tSubtlsPipelinedAll,
        now1, now2,
      }, null, 2),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
