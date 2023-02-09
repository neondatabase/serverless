import { webcrypto } from 'crypto';
globalThis.crypto = webcrypto;

import ws from 'ws';
const { neonConfig, latencies } = await import('../serverless.mjs');  // the dynamic import picks up globalThis.crypto value
neonConfig.webSocketConstructor = ws;

const log = (s) => process.stdout.write(s.replace(/<[^>]+>/g, ''));

latencies(process.env, false, log);
