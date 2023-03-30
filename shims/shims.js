
export const global = globalThis;
export const setImmediate = globalThis.setImmediate ?? (fn => setTimeout(fn, 0));

// Next.js appears to set up a booby-trapped Buffer object that just springs errors on us, so test allocUnsafe as well
export const Buffer =
  typeof globalThis.Buffer === 'function' && typeof globalThis.Buffer.allocUnsafe === 'function' ?
    globalThis.Buffer :
    require('buffer/').Buffer;

export const process = globalThis.process ?? {};
process.env ??= {};
process.nextTick ??= fn => setTimeout(fn, 0);

export const crypto = globalThis.crypto ?? {};
crypto.subtle ??= {};
