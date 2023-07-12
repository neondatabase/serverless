// note: subtls has non-deterministic failures using webcrypto on node
import { webcrypto } from 'crypto';
globalThis.crypto ??= webcrypto;

import ws from 'ws';
// import { WebSocket as ws } from 'undici';  // waiting for release of https://github.com/nodejs/undici/pull/2106
globalThis.WebSocket = ws;

const { latencies } = await import('../serverless.mjs');  // dynamic import picks up globalThis values, when static import doesn't
const log = (...s) => process.stdout.write(s.join(' ').replace(/<[^>]+>/g, ''));

latencies(process.env, true, log);  // true/false -> run subtls tests or not
