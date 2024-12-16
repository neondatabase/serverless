import { expect, test } from 'vitest';
import { Pool as PgPool } from 'pg';
import * as subtls from 'subtls';
import { neon, neonConfig, Pool as WsPool, Client as WsClient } from '../dist/npm';
import { sampleQueries } from './sampleQueries';

const DB_URL = process.env.VITE_NEON_DB_URL!;

const sql = neon(DB_URL);
const wsPool = new WsPool({ connectionString: DB_URL });
const pgPool = new PgPool({ connectionString: DB_URL });

test(
  'WebSockets query results match pg/TCP query results, using pool.connect()',
  { timeout: 30000 },
  async () => {
    const wsClient = await wsPool.connect();
    const pgClient = await pgPool.connect();

    for (const queryPromise of sampleQueries(sql)) {
      const { query, params } = queryPromise.parameterizedQuery;
      const [wsResult, pgResult] = await Promise.all([
        wsClient.query(query, params),
        pgClient.query(query, params),
      ]);
      expect(wsResult).toStrictEqual(pgResult);
    }

    wsClient.release();
    pgClient.release();
  },
);

test('pool.query() over WebSockets', async () => {
  const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
  expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
  expect(wsResult.viaNeonFetch).toBeUndefined();
});

test('pool.query() with poolQueryViaFetch', async () => {
  try {
    neonConfig.poolQueryViaFetch = true;
    const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
    expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
    expect(wsResult.viaNeonFetch).toBe(true);
  } finally {
    neonConfig.poolQueryViaFetch = false;
  }
});

test('client.query()', async () => {
  const client = new WsClient(DB_URL);
  await client.connect();
  const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
  await client.end();
  expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
  expect(wsResult.viaNeonFetch).toBeUndefined();
});

test('client.query() with pipelined connect (yes, no) x coalesced writes (yes, no)', async () => {
  const { pipelineConnect, coalesceWrites } = neonConfig;
  try {
    for (const pc of ['password', false] as const) {
      for (const cw of [true, false]) {
        neonConfig.pipelineConnect = pc;
        neonConfig.coalesceWrites = cw;

        const client = new WsClient(DB_URL);
        await client.connect();
        const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
        await client.end();

        expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
        expect(wsResult.viaNeonFetch).toBeUndefined();
      }
    }
  } finally {
    neonConfig.pipelineConnect = pipelineConnect;
    neonConfig.coalesceWrites = coalesceWrites;
  }
});

const ISRGX1Cert = `-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----`;

test('client.query() with custom WebSocket proxy and subtls', async () => {
  const { wsProxy, pipelineConnect, forceDisablePgSSL, rootCerts, subtls: origSubtls } = neonConfig;
  try {
    neonConfig.wsProxy = process.env.WSPROXY!;
    //neonConfig.subtls = subtls;
    //neonConfig.rootCerts = ISRGX1Cert;

    // Neon requires TLS for apparently-ordinary TCP connections
    //neonConfig.forceDisablePgSSL = false;

    // pipelining only works with password auth, which we aren't offered this way
    //neonConfig.pipelineConnect = false;

    const client = new WsClient(DB_URL);
    await client.connect();
    const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
    await client.end();
    expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
    expect(wsResult.viaNeonFetch).toBeUndefined();
  } finally {
    neonConfig.wsProxy = wsProxy;
    neonConfig.pipelineConnect = pipelineConnect;
    neonConfig.forceDisablePgSSL = forceDisablePgSSL;
    neonConfig.rootCerts = rootCerts;
    neonConfig.subtls = origSubtls;
  }
});
