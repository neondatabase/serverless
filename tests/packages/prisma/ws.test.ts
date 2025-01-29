import { expect, test } from 'vitest';
import { Pool } from '@neondatabase/serverless'; // see package.json: this points to 'file:../../../dist/npm'
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;

test('basic query using Prisma with WebSockets', async () => {
  const pool = new Pool({ connectionString: DATABASE_URL });

  // note: we bypass the PrismaNeon constructor and recreate the work it does
  // manually, because the `instanceof` check it performs throws an error (is
  // it running in a different context, perhaps?)

  // not:
  // const adapter = new PrismaNeon(pool);

  // instead:
  const adapter = Object.create(PrismaNeon.prototype);
  adapter.adapterName = '@prisma/adapter-neon';
  adapter.provider = 'postgres';
  adapter.client = pool;
  adapter.isRunning = true;

  const prisma = new PrismaClient({ adapter });
  const tzName = 'Europe/London';
  const result = await prisma.pg_timezone_names.findFirst({
    where: { name: tzName },
  });
  expect(result!.name).toBe(tzName);
  expect(result!.abbrev).toBeTypeOf('string');
  expect(result!.is_dst).toBeTypeOf('boolean');
});
