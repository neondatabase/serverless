// note: sha256 and md5 are now bundled in this file since dts-generate-bundle had trouble importing them

export function randomBytes(length: number) {
  return crypto.getRandomValues(Buffer.alloc(length));
}

// hash/hmac notes:
// (1) we can't use crypto.subtle here because the returns must be synchronous
// (2) these are very limited implementations: SHA-256/MD5 only, and you can only call `update` once!

export function createHash(type: 'sha256') {
  if (type === 'sha256')
    return {
      update: function (data: string | Buffer | Uint8Array) {
        return {
          digest: function () {
            return Buffer.from(sha256(data));
          },
        };
      },
    };
  if (type === 'md5')
    return {
      update: function (data: string | Buffer | Uint8Array) {
        return {
          digest: function () {
            return typeof data === 'string' ? Md5.hashStr(data) : Md5.hashByteArray(data);
          },
        };
      },
    };
  throw new Error(`Hash type '${type}' not supported`);
}

export function createHmac(type: 'sha256', key: string | Buffer | Uint8Array) {
  if (type !== 'sha256') throw new Error(`Only sha256 is supported (requested: '${type}')`);
  return {
    update: function (data: string | Buffer | Uint8Array) {
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
            innerKey[i] = 0x36 ^ key[i] as number;  // cast should be unnecessary but dts-bundle-generator appears to need it
            outerKey[i] = 0x5c ^ key[i] as number;  // ditto
          }

          const msg = new Uint8Array(data.length + 64);
          msg.set(innerKey, 0);
          msg.set(data, 64);

          const result = new Uint8Array(64 + 32);
          result.set(outerKey, 0);
          result.set(sha256(msg), 64);

          return Buffer.from(sha256(result));
        },
      };
    },
  };
}

/*
TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT YOU WANT TO.

*/

interface HasherState {
  buffer: string;
  buflen: number;
  length: number;
  state: number[];
}

export class Md5 {
  /* GM added 2023-05-18 */
  /**
   * Hash an array on the spot
   * @param str String to hash
   * @param raw Whether to return the value as an `Int32Array`
   */
  public static hashByteArray(arr: Uint8Array, raw?: false): string;
  public static hashByteArray(arr: Uint8Array, raw: true): Int32Array;
  public static hashByteArray(arr: Uint8Array, raw: boolean = false) {
    return this.onePassHasher.start().appendByteArray(arr).end(raw);
  }
  /* end GM added */

  /**
   * Hash a UTF-8 string on the spot
   * @param str String to hash
   * @param raw Whether to return the value as an `Int32Array`
   */
  public static hashStr(str: string, raw?: false): string;
  public static hashStr(str: string, raw: true): Int32Array;
  public static hashStr(str: string, raw: boolean = false) {
    return this.onePassHasher.start().appendStr(str).end(raw);
  }

  /**
   * Hash a ASCII string on the spot
   * @param str String to hash
   * @param raw Whether to return the value as an `Int32Array`
   */
  public static hashAsciiStr(str: string, raw?: false): string;
  public static hashAsciiStr(str: string, raw: true): Int32Array;
  public static hashAsciiStr(str: string, raw: boolean = false) {
    return this.onePassHasher.start().appendAsciiStr(str).end(raw);
  }
  // Private Static Variables
  private static stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
  private static buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  private static hexChars = '0123456789abcdef';
  private static hexOut: string[] = [];

  // Permanent instance is to use for one-call hashing
  private static onePassHasher = new Md5();

  private static _hex(x: Int32Array): string {
    const hc = Md5.hexChars;
    const ho = Md5.hexOut;
    let n;
    let offset;
    let j;
    let i;

    for (i = 0; i < 4; i += 1) {
      offset = i * 8;
      n = x[i];
      for (j = 0; j < 8; j += 2) {
        ho[offset + 1 + j] = hc.charAt(n & 0x0f);
        n >>>= 4;
        ho[offset + 0 + j] = hc.charAt(n & 0x0f);
        n >>>= 4;
      }
    }
    return ho.join('');
  }

  private static _md5cycle(x: Int32Array | Uint32Array, k: Int32Array | Uint32Array) {
    let a = x[0];
    let b = x[1];
    let c = x[2];
    let d = x[3];
    // ff()
    a += (((b & c) | (~b & d)) + k[0] - 680876936) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[1] - 389564586) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[2] + 606105819) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[3] - 1044525330) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[4] - 176418897) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[5] + 1200080426) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[6] - 1473231341) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[7] - 45705983) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[8] + 1770035416) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[9] - 1958414417) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[10] - 42063) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[11] - 1990404162) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[12] + 1804603682) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[13] - 40341101) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[14] - 1502002290) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[15] + 1236535329) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    // gg()
    a += (((b & d) | (c & ~d)) + k[1] - 165796510) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[6] - 1069501632) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[11] + 643717713) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[0] - 373897302) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[5] - 701558691) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[10] + 38016083) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[15] - 660478335) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[4] - 405537848) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[9] + 568446438) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[14] - 1019803690) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[3] - 187363961) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[8] + 1163531501) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[13] - 1444681467) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[2] - 51403784) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[7] + 1735328473) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[12] - 1926607734) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    // hh()
    a += ((b ^ c ^ d) + k[5] - 378558) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[8] - 2022574463) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[11] + 1839030562) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[14] - 35309556) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[1] - 1530992060) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[4] + 1272893353) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[7] - 155497632) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[10] - 1094730640) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[13] + 681279174) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[0] - 358537222) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[3] - 722521979) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[6] + 76029189) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[9] - 640364487) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[12] - 421815835) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[15] + 530742520) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[2] - 995338651) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    // ii()
    a += ((c ^ (b | ~d)) + k[0] - 198630844) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[7] + 1126891415) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[14] - 1416354905) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[5] - 57434055) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[12] + 1700485571) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[3] - 1894986606) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[10] - 1051523) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[1] - 2054922799) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[8] + 1873313359) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[15] - 30611744) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[6] - 1560198380) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[13] + 1309151649) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[4] - 145523070) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[11] - 1120210379) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[2] + 718787259) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[9] - 343485551) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;

    x[0] = (a + x[0]) | 0;
    x[1] = (b + x[1]) | 0;
    x[2] = (c + x[2]) | 0;
    x[3] = (d + x[3]) | 0;
  }

  private _dataLength = 0;
  private _bufferLength = 0;

  private _state: Int32Array = new Int32Array(4);
  private _buffer: ArrayBuffer = new ArrayBuffer(68);
  private _buffer8: Uint8Array;
  private _buffer32: Uint32Array;

  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68);
    this._buffer32 = new Uint32Array(this._buffer, 0, 17);
    this.start();
  }

  /**
   * Initialise buffer to be hashed
   */
  public start() {
    this._dataLength = 0;
    this._bufferLength = 0;
    this._state.set(Md5.stateIdentity);
    return this;
  }

  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown

  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  public appendStr(str: string) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let code;
    let i;

    for (i = 0; i < str.length; i += 1) {
      code = str.charCodeAt(i);
      if (code < 128) {
        buf8[bufLen++] = code;
      } else if (code < 0x800) {
        buf8[bufLen++] = (code >>> 6) + 0xc0;
        buf8[bufLen++] = (code & 0x3f) | 0x80;
      } else if (code < 0xd800 || code > 0xdbff) {
        buf8[bufLen++] = (code >>> 12) + 0xe0;
        buf8[bufLen++] = ((code >>> 6) & 0x3f) | 0x80;
        buf8[bufLen++] = (code & 0x3f) | 0x80;
      } else {
        code = (code - 0xd800) * 0x400 + (str.charCodeAt(++i) - 0xdc00) + 0x10000;
        if (code > 0x10ffff) {
          throw new Error('Unicode standard supports code points up to U+10FFFF');
        }
        buf8[bufLen++] = (code >>> 18) + 0xf0;
        buf8[bufLen++] = ((code >>> 12) & 0x3f) | 0x80;
        buf8[bufLen++] = ((code >>> 6) & 0x3f) | 0x80;
        buf8[bufLen++] = (code & 0x3f) | 0x80;
      }
      if (bufLen >= 64) {
        this._dataLength += 64;
        Md5._md5cycle(this._state, buf32);
        bufLen -= 64;
        buf32[0] = buf32[16];
      }
    }
    this._bufferLength = bufLen;
    return this;
  }

  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  public appendAsciiStr(str: string) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;

    for (;;) {
      i = Math.min(str.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = str.charCodeAt(j++);
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }

  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  public appendByteArray(input: Uint8Array) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;

    for (;;) {
      i = Math.min(input.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = input[j++];
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }

  /**
   * Get the state of the hash buffer
   */
  public getState(): HasherState {
    const s = this._state;

    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [s[0], s[1], s[2], s[3]],
    };
  }

  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  public setState(state: HasherState) {
    const buf = state.buffer;
    const x = state.state;
    const s = this._state;
    let i;

    this._dataLength = state.length;
    this._bufferLength = state.buflen;
    s[0] = x[0];
    s[1] = x[1];
    s[2] = x[2];
    s[3] = x[3];

    for (i = 0; i < buf.length; i += 1) {
      this._buffer8[i] = buf.charCodeAt(i);
    }
  }

  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  public end(raw: boolean = false) {
    const bufLen = this._bufferLength;
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    const i = (bufLen >> 2) + 1;

    this._dataLength += bufLen;
    const dataBitsLen = this._dataLength * 8;

    buf8[bufLen] = 0x80;
    buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
    buf32.set(Md5.buffer32Identity.subarray(i), i);

    if (bufLen > 55) {
      Md5._md5cycle(this._state, buf32);
      buf32.set(Md5.buffer32Identity);
    }

    // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that
    if (dataBitsLen <= 0xffffffff) {
      buf32[14] = dataBitsLen;
    } else {
      const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
      if (matches === null) {
        return;
      }

      const lo = parseInt(matches[2], 16);
      const hi = parseInt(matches[1], 16) || 0;

      buf32[14] = lo;
      buf32[15] = hi;
    }

    Md5._md5cycle(this._state, buf32);

    return raw ? this._state : Md5._hex(this._state);
  }
}

// if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
//   throw new Error('Md5 self test failed.');
// }


/*
Copyright 2022 Andrea Griffini

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// sha256(data) returns the digest
// sha256() returns an object you can call .add(data) zero or more time and .digest() at the end
// digest is a 32-byte Uint8Array instance with an added .hex() function.
// Input should be either a string (that will be encoded as UTF-8) or an array-like object with values 0..255.

export function sha256<T extends string | Uint8Array>(
  data?: T,
): T extends string | Uint8Array
  ? Uint8Array
  : { add: (data: string | Uint8Array) => void; digest: () => Uint8Array } {
  let h0 = 0x6a09e667,
    h1 = 0xbb67ae85,
    h2 = 0x3c6ef372,
    h3 = 0xa54ff53a,
    h4 = 0x510e527f,
    h5 = 0x9b05688c,
    h6 = 0x1f83d9ab,
    h7 = 0x5be0cd19,
    tsz = 0,
    bp = 0;
  const k = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ],
    rrot = (x: number, n: number) => (x >>> n) | (x << (32 - n)),
    w = new Uint32Array(64),
    buf = new Uint8Array(64),
    process = () => {
      for (let j = 0, r = 0; j < 16; j++, r += 4) {
        w[j] = (buf[r] << 24) | (buf[r + 1] << 16) | (buf[r + 2] << 8) | buf[r + 3];
      }
      for (let j = 16; j < 64; j++) {
        let s0 = rrot(w[j - 15], 7) ^ rrot(w[j - 15], 18) ^ (w[j - 15] >>> 3);
        let s1 = rrot(w[j - 2], 17) ^ rrot(w[j - 2], 19) ^ (w[j - 2] >>> 10);
        w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
      }
      let a = h0,
        b = h1,
        c = h2,
        d = h3,
        e = h4,
        f = h5,
        g = h6,
        h = h7;
      for (let j = 0; j < 64; j++) {
        let S1 = rrot(e, 6) ^ rrot(e, 11) ^ rrot(e, 25),
          ch = (e & f) ^ (~e & g),
          t1 = (h + S1 + ch + k[j] + w[j]) | 0,
          S0 = rrot(a, 2) ^ rrot(a, 13) ^ rrot(a, 22),
          maj = (a & b) ^ (a & c) ^ (b & c),
          t2 = (S0 + maj) | 0;
        h = g;
        g = f;
        f = e;
        e = (d + t1) | 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) | 0;
      }
      h0 = (h0 + a) | 0;
      h1 = (h1 + b) | 0;
      h2 = (h2 + c) | 0;
      h3 = (h3 + d) | 0;
      h4 = (h4 + e) | 0;
      h5 = (h5 + f) | 0;
      h6 = (h6 + g) | 0;
      h7 = (h7 + h) | 0;
      bp = 0;
    },
    add = (data: string | Uint8Array) => {
      if (typeof data === 'string') {
        data = new TextEncoder().encode(data);
      }
      for (let i = 0; i < data.length; i++) {
        buf[bp++] = data[i];
        if (bp === 64) process();
      }
      tsz += data.length;
    },
    digest = () => {
      buf[bp++] = 0x80;
      if (bp == 64) process();
      if (bp + 8 > 64) {
        while (bp < 64) buf[bp++] = 0x00;
        process();
      }
      while (bp < 58) buf[bp++] = 0x00;
      // Max number of bytes is 35,184,372,088,831
      let L = tsz * 8;
      buf[bp++] = (L / 1099511627776) & 255;
      buf[bp++] = (L / 4294967296) & 255;
      buf[bp++] = L >>> 24;
      buf[bp++] = (L >>> 16) & 255;
      buf[bp++] = (L >>> 8) & 255;
      buf[bp++] = L & 255;
      process();
      let reply = new Uint8Array(32);
      reply[0] = h0 >>> 24;
      reply[1] = (h0 >>> 16) & 255;
      reply[2] = (h0 >>> 8) & 255;
      reply[3] = h0 & 255;
      reply[4] = h1 >>> 24;
      reply[5] = (h1 >>> 16) & 255;
      reply[6] = (h1 >>> 8) & 255;
      reply[7] = h1 & 255;
      reply[8] = h2 >>> 24;
      reply[9] = (h2 >>> 16) & 255;
      reply[10] = (h2 >>> 8) & 255;
      reply[11] = h2 & 255;
      reply[12] = h3 >>> 24;
      reply[13] = (h3 >>> 16) & 255;
      reply[14] = (h3 >>> 8) & 255;
      reply[15] = h3 & 255;
      reply[16] = h4 >>> 24;
      reply[17] = (h4 >>> 16) & 255;
      reply[18] = (h4 >>> 8) & 255;
      reply[19] = h4 & 255;
      reply[20] = h5 >>> 24;
      reply[21] = (h5 >>> 16) & 255;
      reply[22] = (h5 >>> 8) & 255;
      reply[23] = h5 & 255;
      reply[24] = h6 >>> 24;
      reply[25] = (h6 >>> 16) & 255;
      reply[26] = (h6 >>> 8) & 255;
      reply[27] = h6 & 255;
      reply[28] = h7 >>> 24;
      reply[29] = (h7 >>> 16) & 255;
      reply[30] = (h7 >>> 8) & 255;
      reply[31] = h7 & 255;
      return reply;
    };
  if (data === undefined) return { add, digest } as any;
  add(data);
  return digest() as any;
}
