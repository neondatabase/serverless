import { expect, test } from 'vitest';
import { Pool } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'
import { drizzle } from 'drizzle-orm/neon-serverless';
import { sql } from 'drizzle-orm';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;

test('basic query using drizzle-orm with WebSockets', async () => {
  const client = new Pool({ connectionString: DATABASE_URL });
  const db = drizzle(client);

  const result = await db
    .select({ x: sql<number>`generate_series` })
    .from(sql`generate_series(1, 3)`);

  expect(result).toStrictEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
});
