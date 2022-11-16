if (!globalThis.Buffer) globalThis.Buffer = require('buffer/').Buffer;
if (!globalThis.process) globalThis.process = {
  env: {},
  nextTick: fn => setTimeout(fn, 0),
};
if (!globalThis.global) globalThis.global = globalThis;
