// note: subtls has non-deterministic failures using webcrypto on node
import { webcrypto } from 'crypto';
globalThis.crypto ??= webcrypto;

import ws from 'ws';
globalThis.WebSocket = ws;

const { latencies } = await import('../serverless.mjs');  // dynamic import picks up globalThis values, when static import doesn't
const log = (s) => process.stdout.write(s.replace(/<[^>]+>/g, ''));

latencies(process.env, false, log);  // false -> no subtls tests
