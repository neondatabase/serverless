import { Pool, neonConfig } from '@neondatabase/serverless';
import { expect, test, vi } from 'vitest';

for (const [endpoint, connectionString] of [
  ['direct', process.env.VITE_NEON_DB_URL],
  ['pooled', process.env.VITE_NEON_DB_POOLER_URL],
] as const) {
  test.skipIf(!connectionString)(
    `warns once about ignored connection options on the ${endpoint} endpoint without requiring WebSockets`,
    async () => {
      const previousMode = neonConfig.poolQueryViaFetch;
      const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const pool = new Pool({
        connectionString,
        application_name: 'pool-connection-options-test',
        statement_timeout: 1,
        options: '-c search_path=pg_catalog',
      });
      neonConfig.poolQueryViaFetch = true;
      try {
        for (const value of [1, 2]) {
          const result = await pool.query('SELECT $1::int AS value', [value]);
          expect(result.rows).toEqual([{ value }]);
          expect(result).toHaveProperty('viaNeonFetch', true);
        }
        expect(pool.totalCount).toBe(0);
        expect(warning).toHaveBeenCalledOnce();
        const message = String(warning.mock.calls[0][0]);
        expect(message).toContain('application_name');
        expect(message).toContain('statement_timeout');
        expect(message).toContain('options');
      } finally {
        neonConfig.poolQueryViaFetch = previousMode;
        warning.mockRestore();
        await pool.end();
      }
    },
  );
}
