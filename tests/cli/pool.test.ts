import { Pool, neonConfig } from '@neondatabase/serverless';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

const connectionString = 'postgresql://user:password@db.example/database';
const result = { command: 'SELECT', rowCount: 0, oid: 0, fields: [], rows: [] };
const httpResult = { ...result, viaNeonFetch: true, rowAsArray: false };
const originalFetch = neonConfig.fetchFunction;
const originalPoolQueryViaFetch = neonConfig.poolQueryViaFetch;
const warning = vi.fn();
const baseQuery = vi.fn((...args: unknown[]) => {
  const callback = (typeof args[1] === 'function' ? args[1] : args[2]) as (
    error: Error | undefined,
    value: typeof result,
  ) => void;
  callback(undefined, result);
});
const fetch = vi.fn(async (_url: unknown, _init: { body: string }) => ({
  ok: true,
  json: async () => ({ ...result, fields: [], rows: [] }),
}));

beforeEach(() => {
  for (const name of [
    'PGAPPNAME',
    'PGOPTIONS',
    'PGCLIENT_ENCODING',
    'PGREPLICATION',
  ]) {
    vi.stubEnv(name, '');
  }
  neonConfig.poolQueryViaFetch = true;
  neonConfig.fetchFunction = fetch;
  vi.spyOn(console, 'warn').mockImplementation(warning);
  vi.spyOn(Object.getPrototypeOf(Pool.prototype), 'query').mockImplementation(
    baseQuery,
  );
});

afterEach(() => {
  neonConfig.fetchFunction = originalFetch;
  neonConfig.poolQueryViaFetch = originalPoolQueryViaFetch;
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

const connectionOptions = [
  ['statement_timeout', 300000],
  ['idle_in_transaction_session_timeout', 300000],
  ['lock_timeout', 3000],
  ['application_name', 'my-application'],
  ['fallback_application_name', 'my-fallback'],
  ['options', '-c search_path=tenant'],
  ['client_encoding', 'UTF8'],
  ['replication', 'database'],
  ['query_timeout', 3000],
] as const;

test.each(connectionOptions)(
  'warns about the %s pool option without changing transport',
  async (name, value) => {
    const pool = new Pool({ connectionString, [name]: value });
    await expect(pool.query('SELECT $1', [1])).resolves.toMatchObject(
      httpResult,
    );
    expect(warning).toHaveBeenCalledOnce();
    expect(warning).toHaveBeenCalledWith(expect.stringContaining(name));
    expect(baseQuery).not.toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledOnce();
    await pool.end();
  },
);

test('preserves callbacks when connection-string and environment options trigger a warning', async () => {
  vi.stubEnv('PGAPPNAME', 'environment-application');
  const url = new URL(connectionString);
  url.searchParams.set('statement_timeout', '300000');
  url.searchParams.set('options', '-c search_path=tenant');
  const pool = new Pool({ connectionString: url.href });
  const config = { text: 'SELECT $1', values: [1] };
  const callback = vi.fn();
  expect(pool.query(config, callback)).toBeUndefined();
  await vi.waitFor(() => expect(callback).toHaveBeenCalledOnce());
  expect(callback).toHaveBeenCalledWith(
    undefined,
    expect.objectContaining(httpResult),
  );
  expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({
    query: 'SELECT $1',
    params: ['1'],
  });
  expect(warning).toHaveBeenCalledOnce();
  for (const name of ['statement_timeout', 'options', 'application_name']) {
    expect(warning).toHaveBeenCalledWith(expect.stringContaining(name));
  }
  expect(baseQuery).not.toHaveBeenCalled();
  expect(fetch).toHaveBeenCalledOnce();
  await pool.end();
});

test('still uses HTTP without connection options, including sslmode=require', async () => {
  const pool = new Pool({
    connectionString: `${connectionString}?sslmode=require`,
  });
  await pool.query('SELECT 1');
  expect(fetch).toHaveBeenCalledOnce();
  expect(baseQuery).not.toHaveBeenCalled();
  expect(warning).not.toHaveBeenCalled();
  await pool.end();
});

test('warns once per pool without logging credentials or option values', async () => {
  const pool = new Pool({
    connectionString,
    statement_timeout: 300000,
    options: '-c search_path=private_tenant',
  });
  pool.on('error', () => {});
  await pool.query('SELECT 1');
  await pool.query('SELECT 2');
  expect(warning).toHaveBeenCalledOnce();
  const message = String(warning.mock.calls[0][0]);
  expect(message).toContain('statement_timeout');
  expect(message).toContain('options');
  expect(message).not.toContain(connectionString);
  expect(message).not.toContain('password');
  expect(message).not.toContain('private_tenant');
  const second = new Pool({ connectionString, application_name: 'second' });
  await second.query('SELECT 1');
  await second.query('SELECT 2');
  expect(warning).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledTimes(4);
  expect(baseQuery).not.toHaveBeenCalled();
  await pool.end();
  await second.end();
});

test('does not warn when HTTP pool queries are disabled', async () => {
  neonConfig.poolQueryViaFetch = false;
  const pool = new Pool({ connectionString, statement_timeout: 300000 });
  await new Promise<void>((resolve, reject) => {
    pool.query('SELECT 1', (error) => (error ? reject(error) : resolve()));
  });
  expect(baseQuery).toHaveBeenCalledOnce();
  expect(warning).not.toHaveBeenCalled();
  expect(fetch).not.toHaveBeenCalled();
  await pool.end();
});

test('preserves HTTP rejections and does not warn again after a failed query', async () => {
  fetch.mockRejectedValueOnce(new Error('request failed'));
  const pool = new Pool({ connectionString, statement_timeout: 300000 });
  await expect(pool.query('SELECT 1')).rejects.toThrow('request failed');
  await expect(pool.query('SELECT 2')).resolves.toMatchObject(httpResult);
  expect(warning).toHaveBeenCalledOnce();
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(baseQuery).not.toHaveBeenCalled();
  await pool.end();
});
