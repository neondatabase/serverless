import { expect, test, beforeAll, afterAll } from 'vitest';
import { unstable_dev, type Unstable_DevWorker } from 'wrangler';

let worker: Unstable_DevWorker;

beforeAll(async () => {
  worker = await unstable_dev('tests/cloudflare/worker.ts', {
    experimental: { disableExperimentalWarning: true },
  });
});

afterAll(async () => {
  await worker.stop();
});

test('Cloudflare Worker should respond with queried values', async () => {
  // only wrangler.toml can be used to provide env vars (https://github.com/cloudflare/workers-sdk/issues/2898)
  // -- so we pass them in via the request URL instead
  const env = Object.fromEntries(
    Object.entries(process.env).filter(([k, v]) => k.startsWith('VITE_')),
  );
  const envJSON = JSON.stringify(env);
  const envJSONEncoded = encodeURIComponent(envJSON);

  const resp = await worker.fetch('http://dummy.host/' + envJSONEncoded);
  const json = await resp.json();

  expect(json).toStrictEqual({
    clientRows: [{ clientstr: 'client' }],
    poolRows: [{ poolstr: 'pool' }],
    poolClientRows: [{ poolclientstr: 'poolclient' }],
    fetchRows: [{ fetchstr: 'fetch' }],
  });
});
