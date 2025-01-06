import { beforeAll, expect, test } from 'vitest';
import { neon } from '../../dist/npm';
import { makeEnv } from './makeEnv';

let DB_URL;
let sql;

beforeAll(async () => {
  await makeEnv();
  DB_URL = process.env.VITE_NEON_DB_URL!;
  sql = neon(DB_URL);
});

test('fetch', async () => {
  await expect(sql`SELECT ${'fetch'} AS str`).resolves.toStrictEqual([
    { str: 'fetch' },
  ]);
});
