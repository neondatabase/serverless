export const Buffer = require('buffer/').Buffer;
export const process = {
  env: {},
  nextTick: fn => setTimeout(fn, 0),
};
export const global = globalThis;
export const setImmediate = (fn) => setTimeout(fn, 0);
