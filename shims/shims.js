
export const global = globalThis;
export const process = globalThis.process ?? {
  env: {},
  nextTick: fn => setTimeout(fn, 0),
};
export const setImmediate = globalThis.setImmediate ?? (fn => setTimeout(fn, 0));
export const crypto = globalThis.crypto ?? { subtle: {} };
export const Buffer = globalThis.Buffer ?? require('buffer/').Buffer;
