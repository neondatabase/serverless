globalThis.Buffer = require('buffer/').Buffer;
globalThis.process = {
  env: {},
  nextTick: fn => setTimeout(fn, 0),
};
globalThis.global = globalThis;
