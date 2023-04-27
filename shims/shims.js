
export const global = globalThis;

export const setImmediate = globalThis.setImmediate ?? (fn => setTimeout(fn, 0));
export const clearImmediate = globalThis.clearImmediate ?? (id => clearTimeout(id));

export const crypto = globalThis.crypto ?? {};
crypto.subtle ??= {};

// --- Buffer ---

// Next.js has a booby-trapped Buffer object that just springs errors, so we test allocUnsafe as well
export const Buffer =
  typeof globalThis.Buffer === 'function' && typeof globalThis.Buffer.allocUnsafe === 'function' ?
    globalThis.Buffer :
    require('buffer/').Buffer;


// --- process ---

export let process = globalThis.process ?? {};
process.env ??= {};

try { process.nextTick(() => void 0); }
catch (err) {
  // if we got here, either nextTick is not defined, or it's booby-trapped to throw (e.g. in Next.js), so ...
  const resolve = Promise.resolve();
  process.nextTick = resolve.then.bind(resolve);
}
