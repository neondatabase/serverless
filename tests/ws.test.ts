import { expect, test } from 'vitest';
import { Pool as PgPool } from 'pg';
import { neon, Pool as WsPool } from '../export';
import { sampleSelects } from './sampleSelects';

const DB_URL = process.env.VITE_NEON_DB_URL!;

const sql = neon(DB_URL);
const wsPool = new WsPool({ connectionString: DB_URL });
const pgPool = new PgPool({ connectionString: DB_URL });

test('WebSockets query results match pg/TCP query results', { timeout: 30000 }, async () => {
  const wsClient = await wsPool.connect();
  const pgClient = await pgPool.connect();

  for (const queryPromise of sampleSelects(sql)) {
    const { query, params } = queryPromise.parameterizedQuery;
    const [wsResult, pgResult] = await Promise.all([
       wsClient.query(query, params),
       pgClient.query(query, params),
    ]);
    expect(wsResult).toMatchObject(pgResult);
  }

  wsClient.release();
  pgClient.release();
});
