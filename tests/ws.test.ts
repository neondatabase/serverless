import { expect, test, describe, beforeAll, vi } from 'vitest';
import { Pool as PgPool } from 'pg';
import * as subtls from 'subtls';
import { sampleQueries } from './sampleQueries';
import { shimWebSocketIfRequired } from './ws';
import { ISRGX1Cert } from './subtlsCert';
import {
  neon,
  neonConfig,
  Pool as WsPool,
  Client as WsClient,
} from '../dist/npm';

function recursiveTransform(x: any, transform: (x: any) => any) {
  if (Array.isArray(x)) {
    return x.map((item) => recursiveTransform(item, transform));
  } else if (x !== null && typeof x === 'object') {
    return Object.fromEntries(
      Object.entries(x).map(([k, v]) => [k, recursiveTransform(v, transform)]),
    );
  } else {
    return transform(x);
  }
}

function functionsToPlaceholders(x: any) {
  return recursiveTransform(x, (x) =>
    typeof x === 'function' ? `__fn_arity_${x.length}__` : x,
  );
}

const DB_DIRECT_URL = process.env.VITE_NEON_DB_URL!;
const DB_POOLER_URL = process.env.VITE_NEON_DB_POOLER_URL!;

const pgPool = new PgPool({ connectionString: DB_DIRECT_URL });

beforeAll(shimWebSocketIfRequired);

describe.each([
  {
    DB_URL: DB_DIRECT_URL,
    wsPool: new WsPool({ connectionString: DB_DIRECT_URL }),
  },
  {
    DB_URL: DB_POOLER_URL,
    wsPool: new WsPool({ connectionString: DB_POOLER_URL }),
  },
])('WebSocket connections and queries', ({ DB_URL, wsPool }) => {
  test(
    'WebSockets query results match pg/TCP query results, using pool.connect()',
    { timeout: 30000 },
    async () => {
      const wsClient = await wsPool.connect();
      const pgClient = await pgPool.connect();
      const sql = neon('postgresql://dummy:dummy@dummy.dummy/dummy'); // the URL is not actually used

      for (const queryPromise of sampleQueries(sql)) {
        const { query, params } = queryPromise.parameterizedQuery;
        const [wsResult, pgResult] = await Promise.all([
          wsClient.query(query, params),
          pgClient.query(query, params),
        ]);

        // unprocessed results don't strictly match because functions are minified by ws driver
        expect(functionsToPlaceholders(wsResult)).toStrictEqual(
          functionsToPlaceholders(pgResult),
        );
      }

      wsClient.release();
      pgClient.release();
    },
  );

  test('pool.query() over WebSockets', async () => {
    const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
    expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
    expect(wsResult.viaNeonFetch).toBeUndefined();
  });

  test('pool.query() with poolQueryViaFetch', async () => {
    try {
      neonConfig.poolQueryViaFetch = true;
      const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
      expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
      expect(wsResult.viaNeonFetch).toBe(true);
    } finally {
      neonConfig.poolQueryViaFetch = false;
    }
  });

  test('pool.query() with poolQueryViaFetch but also a listener that prevents fetch', async () => {
    neonConfig.poolQueryViaFetch = true;

    // use a new Pool because we know it will have to connect a new client
    const customPool = new WsPool({ connectionString: DB_URL });

    try {
      const fn = vi.fn();
      const connectListener = () => {
        customPool.removeListener('connect', connectListener);
        fn();
      };
      customPool.addListener('connect', connectListener);

      const wsResult = await customPool.query('SELECT $1::int AS one', [1]);
      expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
      expect(wsResult).not.toHaveProperty('viaNeonFetch');
      expect(fn).toHaveBeenCalledOnce();
    } finally {
      neonConfig.poolQueryViaFetch = false;
      customPool.end();
    }
  });

  test('client.query()', async () => {
    const client = new WsClient(DB_URL);
    await client.connect();
    const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
    await client.end();
    expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
    expect(wsResult.viaNeonFetch).toBeUndefined();
  });

  test('client.query() with pipelined connect (yes, no) x coalesced writes (yes, no)', async () => {
    const { pipelineConnect, coalesceWrites } = neonConfig;
    try {
      for (const pc of ['password', false] as const) {
        for (const cw of [true, false]) {
          neonConfig.pipelineConnect = pc;
          neonConfig.coalesceWrites = cw;

          const client = new WsClient(DB_URL);
          await client.connect();
          const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
          await client.end();

          expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
          expect(wsResult.viaNeonFetch).toBeUndefined();
        }
      }
    } finally {
      neonConfig.pipelineConnect = pipelineConnect;
      neonConfig.coalesceWrites = coalesceWrites;
    }
  });

  test('client.query() with custom WebSocket proxy and subtls', async () => {
    const client = new WsClient(DB_URL);
    client.neonConfig.wsProxy = process.env.VITE_WSPROXY!;
    client.neonConfig.forceDisablePgSSL = false;
    client.neonConfig.pipelineConnect = false;
    client.neonConfig.subtls = subtls;
    client.neonConfig.rootCerts = ISRGX1Cert;

    await client.connect();
    const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
    await client.end();
    expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
    expect(wsResult.viaNeonFetch).toBeUndefined();
  });
});
