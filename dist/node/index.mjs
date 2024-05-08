// note: subtls no longer has non-deterministic failures using webcrypto on node
import { webcrypto } from 'crypto';
globalThis.crypto ??= webcrypto;

import ws from 'ws';
// import { WebSocket as ws } from 'undici';  // should work just the same as ws
globalThis.WebSocket ??= ws;

const { latencies } = await import('../serverless.mjs');  // dynamic import picks up globalThis values, when static import doesn't
const log = (...s) => process.stdout.write(s.join(' ').replace(/<[^>]+>/g, ''));

latencies(process.env, true, log);  // true/false -> run subtls tests or not
