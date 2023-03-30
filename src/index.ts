import { Client, Pool } from '../export';
import { timedRepeats, runQuery, clientRunQuery, poolRunQuery } from './util';
import { queries } from './queries';

export { neonConfig } from '../export';

export interface Env {
  NEON_DB_URL: string;
  MY_DB_URL: string;
}

// simple tests for Cloudflare Workers

export async function cf(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  let results: any[] = [];
  for (const query of queries) {
    const [, [[, result]]] = await poolRunQuery(1, env.NEON_DB_URL, ctx, query);
    results.push(result);
  }

  return new Response(
    JSON.stringify(results, null, 2),
    { headers: { 'Content-Type': 'application/json' } },
  );
}

// latency tests for browsers and node

const ctx = {
  waitUntil(promise: Promise<any>) { },
  passThroughOnException() { },
};

export async function latencies(env: Env, subtls: boolean, log = (s: string) => { }): Promise<void> {
  const queryRepeats = [1, 3];
  const connectRepeats = 15;

  let counter = 0;

  for (const query of queries) {
    log(`\n===== ${query.sql} =====\n\n`);

    async function section(queryRepeat: number, f: (n: number) => Promise<void>) {
      const marker = String.fromCharCode(counter + (counter > 25 ? 49 - 26 : 65));  // A - Z, 1 - 9
      log(`${marker}\n`);

      // this will error, but makes for a handy heading in the dev tools Network pane (or Wireshark)
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
    await poolRunQuery(1, env.NEON_DB_URL, ctx, query);

    await sections('Neon/wss, no pipelining', async n => {
      const client = new Client(env.NEON_DB_URL);
      client.neonConfig.pipelineConnect = false;
      await clientRunQuery(n, client, ctx, query);
    });

    await sections('Neon/wss, pipelined connect (default)', async n => {
      const client = new Client(env.NEON_DB_URL);
      await clientRunQuery(n, client, ctx, query);
    });

    await sections('Neon/wss, pipelined connect, no coalescing', async n => {
      const client = new Client(env.NEON_DB_URL);
      client.neonConfig.coalesceWrites = false;
      await clientRunQuery(n, client, ctx, query);
    });

    await sections('Neon/wss, pipelined connect using Pool.query', async n => {
      await poolRunQuery(n, env.NEON_DB_URL, ctx, query);
    });

    await sections('Neon/wss, pipelined connect using Pool.connect', async n => {
      const pool = new Pool(env.NEON_DB_URL);
      const poolClient = await pool.connect();
      await timedRepeats(n, () => runQuery(poolClient, query));
      poolClient.release();
      ctx.waitUntil(pool.end());
    });

    await sections('Patched pg/wss, pipelined connect', async n => {
      const client = new Client(env.MY_DB_URL);
      client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
      client.neonConfig.pipelineConnect = 'password';
      await clientRunQuery(n, client, ctx, query);
    });

    if (subtls) {
      await sections('Patched pg/subtls, pipelined TLS + connect', async n => {
        const client = new Client(env.MY_DB_URL + '?sslmode=verify-full');
        client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
        client.neonConfig.useSecureWebSocket = false;  // true to use wss + cleartext pg, false to use ws + subtls pg
        client.neonConfig.pipelineTLS = true;
        client.neonConfig.pipelineConnect = 'password';
        await clientRunQuery(n, client, ctx, query);
      });
    }
  };
}
