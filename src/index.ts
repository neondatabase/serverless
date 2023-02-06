import { Client, ClientBase, neonConfig, Pool } from '../export';

export interface Env {
  NEON_DB_URL: string;
  MY_DB_URL: string;
}

async function timed(f: () => Promise<any>) {
  const t0 = Date.now();
  const result = await f();
  const t = Date.now() - t0;
  return [t, result] as const;
}

async function timedRepeats(n: number, f: () => Promise<any>, timeListener = (ms: number, result: any) => { }) {
  const results = [];
  for (let i = 0; i < n; i++) {
    const tPlusResult = await timed(f);
    const [t, result] = tPlusResult;
    timeListener(t, result);
    results.push(tPlusResult);
  }
  const total = results.reduce((memo, [t]) => memo + t, 0);
  return [total, results] as const;
}

async function runQuery(queryable: ClientBase | Pool, query: string) {
  const { rows } = await queryable.query(query);
  return rows;
}

async function clientQuery(n: number, client: Client, ctx: ExecutionContext, query: string) {
  await client.connect();
  const tPlusResults = await timedRepeats(n, () => runQuery(client, query));
  ctx.waitUntil(client.end());
  return tPlusResults;
}

async function poolQuery(n: number, dbUrl: string, ctx: ExecutionContext, query: string) {
  const pool = new Pool(dbUrl);
  const tPlusResults = await timedRepeats(n, () => runQuery(pool, query));
  ctx.waitUntil(pool.end());
  return tPlusResults;
}



export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext, log = (s: string) => { }): Promise<Response> {
    const queryRepeats = [1, 3];
    const connectRepeats = 9;

    const queries = [
      'SELECT * FROM employees LIMIT 10',
      'SELECT now()',
    ];

    let counter = 0;

    for (const query of queries) {
      log(`\n===== ${query} =====\n\n`);

      async function section(queryRepeat: number, f: (n: number) => Promise<void>) {
        const marker = String.fromCharCode(65 + counter);
        log(`${marker}\n`);
        try { await fetch(`http://localhost:443/${marker}`); } catch { }

        log(`<span class="live">Live:</span>    `)
        const [, results] = await timedRepeats(
          connectRepeats,
          () => f(queryRepeat),
          t => log(`<span class="live">${t.toFixed()}ms</span> `)
        );
        log('\nSorted:  ');

        // sort
        results.map(([t]) => t).sort((a, b) => a - b)
          .forEach((t, i) => {
            log(i === (connectRepeats - 1) / 2 ?
              `<span class="median">${t.toFixed()}ms</span> ` :
              `${t.toFixed()}ms `);
          });
        log('\n\n');
        counter += 1;
      }

      async function sections(title: string, f: (n: number) => Promise<void>) {
        log(`----- ${title} -----\n\n`);
        for (let queryRepeat of queryRepeats) {
          log(`${queryRepeat} quer${queryRepeat === 1 ? 'y' : 'ies'} – `)
          await section(queryRepeat, f);
        }
      }


      log('Warm-up ...\n\n');
      const client = new Client(env.NEON_DB_URL);
      await clientQuery(1, client, ctx, query);

      await sections('Neon/wss, no pipelining', async n => {
        const client = new Client(env.NEON_DB_URL);
        client.neonConfig.pipelineConnect = false;
        await clientQuery(n, client, ctx, query);
      });

      await sections('Neon/wss, pipelined connect (default)', async n => {
        const client = new Client(env.NEON_DB_URL);
        await clientQuery(n, client, ctx, query);
      });

      await sections('Neon/wss, pipelined connect, no coalescing', async n => {
        const client = new Client(env.NEON_DB_URL);
        client.neonConfig.coalesceWrites = false;
        await clientQuery(n, client, ctx, query);
      });

      await sections('Neon/wss, pipelined connect using Pool.query', async n => {
        await poolQuery(n, env.NEON_DB_URL, ctx, query);
      });

      await sections('Neon/wss, pipelined connect using Pool.connect', async n => {
        const pool = new Pool(env.NEON_DB_URL);
        const poolClient = await pool.connect();
        await timedRepeats(n, () => runQuery(poolClient, query));
        poolClient.release();
      });

      await sections('Patched pg/wss, pipelined connect', async n => {
        const client = new Client(env.MY_DB_URL);
        client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
        client.neonConfig.pipelineConnect = 'password';
        await clientQuery(n, client, ctx, query);
      });

      await sections('Patched pg/subtls, pipelined TLS + connect', async n => {
        const client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
        client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
        client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
        client.neonConfig.pipelineTLS = true;
        client.neonConfig.pipelineConnect = 'password';
        await clientQuery(n, client, ctx, query);
      });

    };

    return new Response(
      JSON.stringify({
        x: 'x'
        // tNeonWarmUp,
        // tNeonUnpipelined,
        // tNeonPipelined,
        // tNeonPipelinedPoolQuery,
        // tNeonPipelinedPoolConnect,
        // tPgWssPipelined,
        // tSubtlsUnpipelined,
        // tSubtlsPipelinedTLS,
        // tSubtlsPipelinedConnect,
        // tSubtlsPipelinedAll,
        // now1, now2,
      }, null, 2),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
