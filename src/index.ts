import * as subtls from 'subtls';

// @ts-ignore -- esbuild knows how to deal with this
import isrgRootX1 from './isrgrootx1.pem';

import { deepEqual } from 'fast-equals';
import { Client, Pool, neon, neonConfig } from '../export';
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

// latency + compatibility tests for browsers and node

const ctx = {
  waitUntil(promise: Promise<any>) { },
  passThroughOnException() { },
};

export async function latencies(env: Env, useSubtls: boolean, log = (s: string) => { }): Promise<void> {
  const queryRepeats = [1, 3];
  const connectRepeats = 9;

  log('Warm-up ...\n\n');
  await poolRunQuery(1, env.NEON_DB_URL, ctx, queries[0]);

  let counter = 0;

  log(`\n===== SQL-over-HTTP tests =====\n\n`);

  const pgShowKeys = new Set(['command', 'rowCount', 'rows', 'fields']);

  const pool = await new Pool({ connectionString: env.NEON_DB_URL });

  const sql = neon(env.NEON_DB_URL, {
    resultCallback: async (query, result, rows, opts) => {
      const pgRes = await pool.query({
        text: query.query,
        values: query.params,
        ...(opts.arrayMode ? { rowMode: 'array' } : {}),
      });

      const commandMatches = result.command === pgRes.command;
      const rowCountMatches = result.rowCount === pgRes.rowCount;
      const dataTypesMatch = deepEqual(
        (result.fields as any[]).map(f => f.dataTypeID),
        pgRes.fields.map((f: any) => f.dataTypeID),
      );
      const rowsMatch = deepEqual(rows, pgRes.rows);
      const ok = commandMatches && rowCountMatches && rowsMatch && dataTypesMatch;

      console.log(ok ? '\u2713' : 'X', JSON.stringify(query), '\n  -> us:', rows, '\n  -> pg:', pgRes.rows);

      // if (!ok) {
      //   console.log('------');
      //   console.dir(query, { depth: null });
      //   console.log('-> raw result');
      //   console.dir(result, { depth: null });
      //   console.log('-> processed rows');
      //   console.dir(rows, { depth: null });
      //   console.log('-> pg result (abridged)');
      //   console.dir(Object.fromEntries(Object.entries(pgRes).filter(([k]) => pgShowKeys.has(k))), { depth: null });
      // }
    }
  });

  const now = new Date();

  await sql`SELECT ${1} AS int_uncast`;
  await sql`SELECT ${1}::int AS int`;
  await sql`SELECT ${1}::int8 AS int8num`;
  await sql`SELECT ${1}::decimal AS decimalnum`;
  await sql`SELECT ${'[1,4)'}::int4range AS int4range`;
  await sql`SELECT ${"hello"} AS str`;
  await sql`SELECT ${['a', 'b', 'c']} AS arrstr_uncast`;
  await sql`SELECT ${[[1, 2], [3, 4]]}::int[][] AS arrnumnested`;
  await sql`SELECT ${now}::timestamptz AS timestamptznow`;
  await sql`SELECT ${'16:17:18+01:00'}::timetz AS timetz`;
  await sql`SELECT ${'17:18:19'}::time AS time`;
  await sql`SELECT ${now}::date AS datenow`;
  await sql`SELECT ${{ "x": "y" }} AS obj_uncast`;
  await sql`SELECT ${'11:22:33:44:55:66'}::macaddr AS macaddr`;
  await sql`SELECT ${'\\xDEADBEEF'}::bytea AS bytea`;
  await sql`SELECT ${'(2, 3)'}::point AS point`;
  await sql`SELECT ${'<(2, 3), 1>'}::circle AS circle`;
  await sql`SELECT ${'10.10.10.0/24'}::cidr AS cidr`;
  await sql`SELECT ${true} AS bool_uncast`;  // 'true'
  await sql`SELECT ${'hello'} || ' ' || ${'world'} AS greeting`;
  await sql`SELECT ${[1, 2, 3]}::int[] AS arrnum`;
  await sql`SELECT ${['a', 'b', 'c']}::text[] AS arrstr`;
  await sql`SELECT ${{ "x": "y" }}::jsonb AS jsonb_obj`;
  await sql`SELECT ${{ "x": "y" }}::json AS json_obj`;
  await sql`SELECT ${['11:22:33:44:55:66']}::macaddr[] AS arrmacaddr`;
  await sql`SELECT ${['10.10.10.0/24']}::cidr[] AS arrcidr`;
  await sql`SELECT ${true}::boolean AS bool`;
  await sql`SELECT ${[now]}::timestamptz[] AS arrtstz`;
  await sql`SELECT ${['(2, 3)']}::point[] AS arrpoint`;
  await sql`SELECT ${['<(2, 3), 1>']}::circle[] AS arrcircle`;  // pg has no parser for this
  await sql`SELECT ${['\\xDEADBEEF', '\\xDEADBEEF']}::bytea[] AS arrbytea`;
  await sql`SELECT null AS null`;
  await sql`SELECT ${null} AS null`;  // us: "null", pg: null
  await sql`SELECT ${"NULL"} AS null_str`;
  await sql`SELECT ${[1, 2, 3]} AS arrnum_uncast`;  // us: '{1,2,3}', pg: '{"1","2","3"}' <-- pg imagines strings?
  await sql`SELECT ${[[1, 2], [3, 4]]} AS arrnumnested_uncast`;  // us: '{{1,2},{3,4}}', pg: '{{"1","2"},{"3","4"}}' <-- pg imagines strings?
  await sql`SELECT ${now} AS timenow_uncast`;  // us: '2023-05-26T13:35:22.616Z', pg: '2023-05-26T14:35:22.616+01:00' <-- different representations
  await sql`SELECT ${now}::timestamp AS timestampnow`;  // us: 2023-05-26T12:35:22.696Z, pg: 2023-05-26T13:35:22.696Z <-- different TZs

  // non-template usage
  await sql('SELECT $1::timestamp AS timestampnow', [now]);
  await sql("SELECT $1 || ' ' || $2 AS greeting", ['hello', 'world']);
  await sql('SELECT 123 AS num');
  await sql('SELECT 123 AS num', [], { arrayMode: true, fullResults: true });

  neonConfig.fetchConnectionCache = true;
  await sql`SELECT ${"hello"} AS str`;
  await sql`SELECT ${"world"} AS str`;
  await sql('SELECT 123 AS num');

  await new Promise(resolve => setTimeout(resolve, 1000));
  pool.end();

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
      const pool = new Pool({ connectionString: env.NEON_DB_URL });
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

    if (useSubtls) {
      neonConfig.subtls = subtls;
      neonConfig.rootCerts = isrgRootX1;

      await sections('Patched pg/subtls, pipelined TLS + connect', async n => {
        const client = new Client(env.MY_DB_URL);
        client.neonConfig.wsProxy = (host, port) => `ws.manipulexity.com/v1?address=${host}:${port}`;
        client.neonConfig.forceDisablePgSSL = client.neonConfig.useSecureWebSocket = false;
        client.neonConfig.pipelineTLS = true;
        client.neonConfig.pipelineConnect = 'password';
        await clientRunQuery(n, client, ctx, query);
      });
    }
  };
}
