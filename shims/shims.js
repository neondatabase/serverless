
export const global = globalThis;
export const setImmediate = globalThis.setImmediate ?? (fn => setTimeout(fn, 0));
export const Buffer = globalThis.Buffer ?? require('buffer/').Buffer;

export const process = globalThis.process ?? {};
process.env ??= {};
process.nextTick ??= fn => setTimeout(fn, 0);

export const crypto = globalThis.crypto ?? {};
crypto.subtle ??= {};
