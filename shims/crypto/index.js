import { sha256 } from './sha256';

export function randomBytes(length) {
  return crypto.getRandomValues(Buffer.alloc(length));
}

// hash/hmac notes:
// (1) we can't use crypto.subtle here because the returns must be synchronous
// (2) these are very limited implementations: SHA-256 only, and you can only call `update` once!

export function createHash(type /* 'sha256' or 'md5' */) {
  if (type !== 'sha256') throw new Error('Only sha256 is supported');
  return {
    update: function (data /* string or Buffer */) {
      return {
        digest: function () {
          return Buffer.from(sha256(data));
        }
      }
    }
  }
}

export function createHmac(type /* 'sha256' or 'md5' */, key /* string or Buffer/Uint8Array */) {
  if (type !== 'sha256') throw new Error('Only sha256 is supported');
  return {
    update: function (data /* string or Buffer */) {
      return {
        digest: function () {
          if (typeof key === 'string') key = new TextEncoder().encode(key);
          if (typeof data === 'string') data = new TextEncoder().encode(data);

          const keyLen = key.length;
          if (keyLen > 64) {
            key = sha256(key);
          } else if (keyLen < 64) {
            const tmp = new Uint8Array(64);
            tmp.set(key);
            key = tmp;
          }
          // else key length is 64, so leave well alone

          const innerKey = new Uint8Array(64);
          const outerKey = new Uint8Array(64);
          for (let i = 0; i < 64; i++) {
            innerKey[i] = 0x36 ^ key[i];
            outerKey[i] = 0x5c ^ key[i];
          }

          const msg = new Uint8Array(data.length + 64);
          msg.set(innerKey, 0);
          msg.set(data, 64);

          const result = new Uint8Array(64 + 32);
          result.set(outerKey, 0);
          result.set(sha256(msg), 64);

          return Buffer.from(sha256(result));
        }
      }
    }
  }
}
