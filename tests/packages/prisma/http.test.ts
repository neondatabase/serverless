import { expect, test } from 'vitest';
import { neon } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'
import { PrismaNeonHTTP } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;

test('basic query using Prisma with http', async () => {
  const sql = neon(DATABASE_URL);
  const adapter = new PrismaNeonHTTP(sql);
  const prisma = new PrismaClient({ adapter });
  const tzName = 'Europe/London';
  const result = await prisma.pg_timezone_names.findFirst({
    where: { name: tzName },
  });
  expect(result!.name).toBe(tzName);
  expect(result!.abbrev).toBeTypeOf('string');
  expect(result!.is_dst).toBeTypeOf('boolean');
});
