import { expect, test, vi } from 'vitest';
import { neon, neonConfig } from '@neondatabase/serverless';

test('Uint8Array elements inside an array param encode without throwing (#239)', async () => {
  const realFetchFunction = neonConfig.fetchFunction;
  let requestBody: { params?: unknown[] } | undefined;
  try {
    neonConfig.fetchFunction = vi.fn(
      async (_url: string, options: { body: string }) => {
        requestBody = JSON.parse(options.body);
        // Stop after encoding; response shape is irrelevant for this check.
        throw new Error('stop-after-encode');
      },
    );
    const sql = neon('postgresql://user:pass@example.com/db');
    await expect(
      sql.query('SELECT $1::bytea[] AS a', [[new Uint8Array([1, 2])]]),
    ).rejects.toThrow('stop-after-encode');
  } finally {
    neonConfig.fetchFunction = realFetchFunction;
  }
  // Same hex array literal Buffer elements produce; prepareValue must not
  // call .replace on a raw Uint8Array.
  expect(requestBody?.params?.[0]).toBe('{\\\\x0102}');
});
