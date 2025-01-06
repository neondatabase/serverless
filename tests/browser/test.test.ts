import { expect, test } from 'vitest';
import { neon } from '../../dist/npm';
import { server } from '@vitest/browser/context';

const { env } = server.config;
globalThis.process = { env } as any;

const DB_URL = process.env.VITE_NEON_DB_URL!;
const sql = neon(DB_URL);

test('fetch', async () => {
  await expect(sql`SELECT ${'fetch'} AS str`).resolves.toStrictEqual([
    { str: 'fetch' },
  ]);
});
