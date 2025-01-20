import { expect, test } from 'vitest';
import { neon } from '../../..';
import { drizzle } from 'drizzle-orm/neon-http';
import { sql } from 'drizzle-orm';

// note that these tests rely on this line in package.json's "devDependencies":
// "@neondatabase/serverless": "file:dist/npm"

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;

test('basic query using drizzle-orm with https fetch', async () => {
  const db = drizzle({ client: neon(DATABASE_URL) });

  const result = await db
    .select({ x: sql<number>`generate_series` })
    .from(sql`generate_series(1, 3)`);

  expect(result).toStrictEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
});
