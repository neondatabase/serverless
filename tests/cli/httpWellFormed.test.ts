import { describe, expect, test, vi } from 'vitest';
import { neon, neonConfig } from '@neondatabase/serverless';

async function captureHttpBodies<T>(fn: () => Promise<T>): Promise<any[]> {
  const prevFetch = neonConfig.fetchFunction;
  const bodies: any[] = [];
  neonConfig.fetchFunction = vi.fn(
    async (_url: string, options: { body: string }) => {
      const parsed = JSON.parse(options.body);
      bodies.push(parsed);
      return Response.json(
        'queries' in parsed
          ? {
              results: parsed.queries.map(() => ({
                fields: [],
                rows: [],
                command: 'SELECT',
                rowCount: 0,
              })),
            }
          : {
              fields: [],
              rows: [],
              command: 'SELECT',
              rowCount: 0,
            },
      );
    },
  );
  try {
    await fn();
  } finally {
    neonConfig.fetchFunction = prevFetch;
  }
  return bodies;
}

describe('HTTP lone surrogate sanitization', () => {
  test('replaces lone surrogates in parameters and query text while preserving valid pairs', async () => {
    const sql = neon('postgres://user:pass@example.com/db');
    const truncated = 'Launch day 🚀 is here'.slice(0, 12); // 'Launch day \ud83d'
    const lowOnly = 'tail\udc00end';
    const validEmoji = 'Launch day 🚀';

    const bodies = await captureHttpBodies(async () => {
      await sql`SELECT ${truncated} AS a, ${lowOnly} AS b, ${validEmoji} AS c`;
      await sql.query(`SELECT '${truncated}'::text`, [truncated, ['\ud83d']]);
      await sql.transaction([sql`SELECT ${truncated}`, sql`SELECT ${lowOnly}`]);
    });

    expect(bodies).toHaveLength(3);
    expect(bodies[0].params).toEqual([
      'Launch day \ufffd',
      'tail\ufffdend',
      'Launch day 🚀',
    ]);
    expect(bodies[1].query).toBe("SELECT 'Launch day \ufffd'::text");
    expect(bodies[1].params[0]).toBe('Launch day \ufffd');
    expect(bodies[1].params[1]).toBe('{"\ufffd"}');
    expect(bodies[2].queries[0].params).toEqual(['Launch day \ufffd']);
    expect(bodies[2].queries[1].params).toEqual(['tail\ufffdend']);
  });
});
