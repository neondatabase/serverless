import { expect, test } from 'vitest';
import { PrismaNeonHTTP } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;

test('basic query using Prisma with http', async () => {
  const adapter = new PrismaNeonHTTP(DATABASE_URL, {});
  const prisma = new PrismaClient({ adapter });
  const tzName = 'Europe/London';
  const result = await prisma.pg_timezone_names.findFirst({
    where: { name: tzName },
  });
  expect(result!.name).toBe(tzName);
  expect(result!.abbrev).toBeTypeOf('string');
  expect(result!.is_dst).toBeTypeOf('boolean');
});
