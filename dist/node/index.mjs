import { webcrypto } from 'crypto';
globalThis.crypto ??= webcrypto;

const { latencies } = await import('../serverless.mjs');  // the dynamic import picks up globalThis.crypto value
const log = (s) => process.stdout.write(s.replace(/<[^>]+>/g, ''));

latencies(process.env, false, log);
