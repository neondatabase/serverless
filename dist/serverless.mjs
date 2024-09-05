var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    init_shims();
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    __name(getLens, "getLens");
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    __name(byteLength, "byteLength");
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    __name(_byteLength, "_byteLength");
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    __name(toByteArray, "toByteArray");
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    __name(tripletToBase64, "tripletToBase64");
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    __name(encodeChunk, "encodeChunk");
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
    __name(fromByteArray, "fromByteArray");
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    init_shims();
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt2 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt2 / c;
        } else {
          value += rt2 * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    init_shims();
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: /* @__PURE__ */ __name(function() {
          return 42;
        }, "foo") };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    __name(typedArraySupport, "typedArraySupport");
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }, "get")
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }, "get")
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    __name(createBuffer, "createBuffer");
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    __name(Buffer3, "Buffer");
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    __name(from, "from");
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    __name(assertSize, "assertSize");
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    __name(alloc, "alloc");
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    __name(allocUnsafe, "allocUnsafe");
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    __name(fromString, "fromString");
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    __name(fromArrayLike, "fromArrayLike");
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    __name(fromArrayView, "fromArrayView");
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    __name(fromArrayBuffer, "fromArrayBuffer");
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    __name(fromObject, "fromObject");
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    __name(checked, "checked");
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    __name(SlowBuffer, "SlowBuffer");
    Buffer3.isBuffer = /* @__PURE__ */ __name(function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    }, "isBuffer");
    Buffer3.compare = /* @__PURE__ */ __name(function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    }, "compare");
    Buffer3.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, "isEncoding");
    Buffer3.concat = /* @__PURE__ */ __name(function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    }, "concat");
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    __name(byteLength, "byteLength");
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    __name(slowToString, "slowToString");
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    __name(swap, "swap");
    Buffer3.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    }, "swap16");
    Buffer3.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    }, "swap32");
    Buffer3.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    }, "swap64");
    Buffer3.prototype.toString = /* @__PURE__ */ __name(function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    }, "toString");
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = /* @__PURE__ */ __name(function equals(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    }, "equals");
    Buffer3.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    }, "inspect");
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = /* @__PURE__ */ __name(function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    }, "compare");
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    __name(bidirectionalIndexOf, "bidirectionalIndexOf");
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      __name(read, "read");
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    __name(arrayIndexOf, "arrayIndexOf");
    Buffer3.prototype.includes = /* @__PURE__ */ __name(function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    }, "includes");
    Buffer3.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    }, "indexOf");
    Buffer3.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    }, "lastIndexOf");
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    __name(hexWrite, "hexWrite");
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    __name(utf8Write, "utf8Write");
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    __name(asciiWrite, "asciiWrite");
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    __name(base64Write, "base64Write");
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    __name(ucs2Write, "ucs2Write");
    Buffer3.prototype.write = /* @__PURE__ */ __name(function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }, "write");
    Buffer3.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, "toJSON");
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    __name(base64Slice, "base64Slice");
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    __name(utf8Slice, "utf8Slice");
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    __name(decodeCodePointsArray, "decodeCodePointsArray");
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    __name(asciiSlice, "asciiSlice");
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    __name(latin1Slice, "latin1Slice");
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    __name(hexSlice, "hexSlice");
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    __name(utf16leSlice, "utf16leSlice");
    Buffer3.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    }, "slice");
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    __name(checkOffset, "checkOffset");
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = /* @__PURE__ */ __name(function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    }, "readUIntLE");
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = /* @__PURE__ */ __name(function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    }, "readUIntBE");
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = /* @__PURE__ */ __name(function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    }, "readUInt8");
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = /* @__PURE__ */ __name(function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    }, "readUInt16LE");
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = /* @__PURE__ */ __name(function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    }, "readUInt16BE");
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = /* @__PURE__ */ __name(function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    }, "readUInt32LE");
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = /* @__PURE__ */ __name(function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    }, "readUInt32BE");
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    }, "readBigUInt64LE"));
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    }, "readBigUInt64BE"));
    Buffer3.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    }, "readIntLE");
    Buffer3.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    }, "readIntBE");
    Buffer3.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    }, "readInt8");
    Buffer3.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16LE");
    Buffer3.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16BE");
    Buffer3.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    }, "readInt32LE");
    Buffer3.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    }, "readInt32BE");
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    }, "readBigInt64LE"));
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    }, "readBigInt64BE"));
    Buffer3.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    }, "readFloatLE");
    Buffer3.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    }, "readFloatBE");
    Buffer3.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    }, "readDoubleLE");
    Buffer3.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    }, "readDoubleBE");
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    __name(checkInt, "checkInt");
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = /* @__PURE__ */ __name(function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntLE");
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = /* @__PURE__ */ __name(function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntBE");
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = /* @__PURE__ */ __name(function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    }, "writeUInt8");
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = /* @__PURE__ */ __name(function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeUInt16LE");
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = /* @__PURE__ */ __name(function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeUInt16BE");
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = /* @__PURE__ */ __name(function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    }, "writeUInt32LE");
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = /* @__PURE__ */ __name(function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeUInt32BE");
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    __name(wrtBigUInt64LE, "wrtBigUInt64LE");
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    __name(wrtBigUInt64BE, "wrtBigUInt64BE");
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"));
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"));
    Buffer3.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntLE");
    Buffer3.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntBE");
    Buffer3.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    }, "writeInt8");
    Buffer3.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeInt16LE");
    Buffer3.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeInt16BE");
    Buffer3.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    }, "writeInt32LE");
    Buffer3.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeInt32BE");
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64LE"));
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE"));
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    __name(checkIEEE754, "checkIEEE754");
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    __name(writeFloat, "writeFloat");
    Buffer3.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    }, "writeFloatLE");
    Buffer3.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    }, "writeFloatBE");
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    __name(writeDouble, "writeDouble");
    Buffer3.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    }, "writeDoubleLE");
    Buffer3.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    }, "writeDoubleBE");
    Buffer3.prototype.copy = /* @__PURE__ */ __name(function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    }, "copy");
    Buffer3.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    }, "fill");
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        static {
          __name(this, "NodeError");
        }
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    __name(E, "E");
    E(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    __name(addNumericalSeparator, "addNumericalSeparator");
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    __name(checkBounds, "checkBounds");
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    __name(checkIntBI, "checkIntBI");
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    __name(validateNumber, "validateNumber");
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
      );
    }
    __name(boundsError, "boundsError");
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    __name(base64clean, "base64clean");
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    __name(utf8ToBytes, "utf8ToBytes");
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    __name(asciiToBytes, "asciiToBytes");
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    __name(utf16leToBytes, "utf16leToBytes");
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    __name(base64ToBytes, "base64ToBytes");
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    __name(blitBuffer, "blitBuffer");
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    __name(isInstance, "isInstance");
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    __name(numberIsNaN, "numberIsNaN");
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    __name(defineBigIntMethod, "defineBigIntMethod");
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
  }
});

// shims/shims.js
var global, setImmediate, clearImmediate, crypto, Buffer2, process;
var init_shims = __esm({
  "shims/shims.js"() {
    "use strict";
    global = globalThis;
    setImmediate = globalThis.setImmediate ?? ((fn) => setTimeout(fn, 0));
    clearImmediate = globalThis.clearImmediate ?? ((id) => clearTimeout(id));
    crypto = globalThis.crypto ?? {};
    crypto.subtle ??= {};
    Buffer2 = typeof globalThis.Buffer === "function" && typeof globalThis.Buffer.allocUnsafe === "function" ? globalThis.Buffer : require_buffer().Buffer;
    process = globalThis.process ?? {};
    process.env ??= {};
    try {
      process.nextTick(() => void 0);
    } catch (err) {
      const resolve = Promise.resolve();
      process.nextTick = resolve.then.bind(resolve);
    }
  }
});

// node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/events/events.js"(exports, module) {
    "use strict";
    init_shims();
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : /* @__PURE__ */ __name(function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    }, "ReflectApply");
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      }, "ReflectOwnKeys");
    } else {
      ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      }, "ReflectOwnKeys");
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    __name(ProcessEmitWarning, "ProcessEmitWarning");
    var NumberIsNaN = Number.isNaN || /* @__PURE__ */ __name(function NumberIsNaN2(value) {
      return value !== value;
    }, "NumberIsNaN");
    function EventEmitter2() {
      EventEmitter2.init.call(this);
    }
    __name(EventEmitter2, "EventEmitter");
    module.exports = EventEmitter2;
    module.exports.once = once;
    EventEmitter2.EventEmitter = EventEmitter2;
    EventEmitter2.prototype._events = void 0;
    EventEmitter2.prototype._eventsCount = 0;
    EventEmitter2.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    __name(checkListener, "checkListener");
    Object.defineProperty(EventEmitter2, "defaultMaxListeners", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return defaultMaxListeners;
      }, "get"),
      set: /* @__PURE__ */ __name(function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }, "set")
    });
    EventEmitter2.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter2.prototype.setMaxListeners = /* @__PURE__ */ __name(function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    }, "setMaxListeners");
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter2.defaultMaxListeners;
      return that._maxListeners;
    }
    __name(_getMaxListeners, "_getMaxListeners");
    EventEmitter2.prototype.getMaxListeners = /* @__PURE__ */ __name(function getMaxListeners() {
      return _getMaxListeners(this);
    }, "getMaxListeners");
    EventEmitter2.prototype.emit = /* @__PURE__ */ __name(function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    }, "emit");
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    __name(_addListener, "_addListener");
    EventEmitter2.prototype.addListener = /* @__PURE__ */ __name(function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    }, "addListener");
    EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
    EventEmitter2.prototype.prependListener = /* @__PURE__ */ __name(function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    }, "prependListener");
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    __name(onceWrapper, "onceWrapper");
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    __name(_onceWrap, "_onceWrap");
    EventEmitter2.prototype.once = /* @__PURE__ */ __name(function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    }, "once");
    EventEmitter2.prototype.prependOnceListener = /* @__PURE__ */ __name(function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }, "prependOnceListener");
    EventEmitter2.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    }, "removeListener");
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        var key;
        for (i = 0; i < keys2.length; ++i) {
          key = keys2[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    }, "removeAllListeners");
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    __name(_listeners, "_listeners");
    EventEmitter2.prototype.listeners = /* @__PURE__ */ __name(function listeners(type) {
      return _listeners(this, type, true);
    }, "listeners");
    EventEmitter2.prototype.rawListeners = /* @__PURE__ */ __name(function rawListeners(type) {
      return _listeners(this, type, false);
    }, "rawListeners");
    EventEmitter2.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter2.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    __name(listenerCount, "listenerCount");
    EventEmitter2.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    }, "eventNames");
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    __name(arrayClone, "arrayClone");
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    __name(spliceOne, "spliceOne");
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    __name(unwrapListeners, "unwrapListeners");
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        __name(errorListener, "errorListener");
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        __name(resolver, "resolver");
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    __name(once, "once");
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    __name(addErrorHandlerIfEventEmitter, "addErrorHandlerIfEventEmitter");
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, /* @__PURE__ */ __name(function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        }, "wrapListener"));
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
  }
});

// shims/util/index.ts
var util_exports = {};
__export(util_exports, {
  default: () => util_default
});
var util_default;
var init_util = __esm({
  "shims/util/index.ts"() {
    "use strict";
    init_shims();
    util_default = {};
  }
});

// shims/crypto/sha256.ts
function sha256(data) {
  let h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762, h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225, tsz = 0, bp = 0;
  const k = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], rrot = /* @__PURE__ */ __name((x, n) => x >>> n | x << 32 - n, "rrot"), w = new Uint32Array(64), buf = new Uint8Array(64), process2 = /* @__PURE__ */ __name(() => {
    for (let j = 0, r2 = 0; j < 16; j++, r2 += 4) {
      w[j] = buf[r2] << 24 | buf[r2 + 1] << 16 | buf[r2 + 2] << 8 | buf[r2 + 3];
    }
    for (let j = 16; j < 64; j++) {
      let s0 = rrot(w[j - 15], 7) ^ rrot(w[j - 15], 18) ^ w[j - 15] >>> 3;
      let s1 = rrot(w[j - 2], 17) ^ rrot(w[j - 2], 19) ^ w[j - 2] >>> 10;
      w[j] = w[j - 16] + s0 + w[j - 7] + s1 | 0;
    }
    let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
    for (let j = 0; j < 64; j++) {
      let S1 = rrot(e, 6) ^ rrot(e, 11) ^ rrot(e, 25), ch = e & f ^ ~e & g, t1 = h + S1 + ch + k[j] + w[j] | 0, S0 = rrot(a, 2) ^ rrot(a, 13) ^ rrot(a, 22), maj = a & b ^ a & c ^ b & c, t2 = S0 + maj | 0;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    h0 = h0 + a | 0;
    h1 = h1 + b | 0;
    h2 = h2 + c | 0;
    h3 = h3 + d | 0;
    h4 = h4 + e | 0;
    h5 = h5 + f | 0;
    h6 = h6 + g | 0;
    h7 = h7 + h | 0;
    bp = 0;
  }, "process"), add = /* @__PURE__ */ __name((data2) => {
    if (typeof data2 === "string") {
      data2 = new TextEncoder().encode(data2);
    }
    for (let i = 0; i < data2.length; i++) {
      buf[bp++] = data2[i];
      if (bp === 64) process2();
    }
    tsz += data2.length;
  }, "add"), digest = /* @__PURE__ */ __name(() => {
    buf[bp++] = 128;
    if (bp == 64) process2();
    if (bp + 8 > 64) {
      while (bp < 64) buf[bp++] = 0;
      process2();
    }
    while (bp < 58) buf[bp++] = 0;
    let L = tsz * 8;
    buf[bp++] = L / 1099511627776 & 255;
    buf[bp++] = L / 4294967296 & 255;
    buf[bp++] = L >>> 24;
    buf[bp++] = L >>> 16 & 255;
    buf[bp++] = L >>> 8 & 255;
    buf[bp++] = L & 255;
    process2();
    let reply = new Uint8Array(32);
    reply[0] = h0 >>> 24;
    reply[1] = h0 >>> 16 & 255;
    reply[2] = h0 >>> 8 & 255;
    reply[3] = h0 & 255;
    reply[4] = h1 >>> 24;
    reply[5] = h1 >>> 16 & 255;
    reply[6] = h1 >>> 8 & 255;
    reply[7] = h1 & 255;
    reply[8] = h2 >>> 24;
    reply[9] = h2 >>> 16 & 255;
    reply[10] = h2 >>> 8 & 255;
    reply[11] = h2 & 255;
    reply[12] = h3 >>> 24;
    reply[13] = h3 >>> 16 & 255;
    reply[14] = h3 >>> 8 & 255;
    reply[15] = h3 & 255;
    reply[16] = h4 >>> 24;
    reply[17] = h4 >>> 16 & 255;
    reply[18] = h4 >>> 8 & 255;
    reply[19] = h4 & 255;
    reply[20] = h5 >>> 24;
    reply[21] = h5 >>> 16 & 255;
    reply[22] = h5 >>> 8 & 255;
    reply[23] = h5 & 255;
    reply[24] = h6 >>> 24;
    reply[25] = h6 >>> 16 & 255;
    reply[26] = h6 >>> 8 & 255;
    reply[27] = h6 & 255;
    reply[28] = h7 >>> 24;
    reply[29] = h7 >>> 16 & 255;
    reply[30] = h7 >>> 8 & 255;
    reply[31] = h7 & 255;
    return reply;
  }, "digest");
  if (data === void 0) return { add, digest };
  add(data);
  return digest();
}
var init_sha256 = __esm({
  "shims/crypto/sha256.ts"() {
    "use strict";
    init_shims();
    __name(sha256, "sha256");
  }
});

// shims/crypto/md5.ts
var Md5;
var init_md5 = __esm({
  "shims/crypto/md5.ts"() {
    "use strict";
    init_shims();
    Md5 = class _Md5 {
      static {
        __name(this, "Md5");
      }
      static hashByteArray(arr, raw = false) {
        return this.onePassHasher.start().appendByteArray(arr).end(raw);
      }
      static hashStr(str, raw = false) {
        return this.onePassHasher.start().appendStr(str).end(raw);
      }
      static hashAsciiStr(str, raw = false) {
        return this.onePassHasher.start().appendAsciiStr(str).end(raw);
      }
      // Private Static Variables
      static stateIdentity = new Int32Array([
        1732584193,
        -271733879,
        -1732584194,
        271733878
      ]);
      static buffer32Identity = new Int32Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      static hexChars = "0123456789abcdef";
      static hexOut = [];
      // Permanent instance is to use for one-call hashing
      static onePassHasher = new _Md5();
      static _hex(x) {
        const hc = _Md5.hexChars;
        const ho = _Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
        for (i = 0; i < 4; i += 1) {
          offset = i * 8;
          n = x[i];
          for (j = 0; j < 8; j += 2) {
            ho[offset + 1 + j] = hc.charAt(n & 15);
            n >>>= 4;
            ho[offset + 0 + j] = hc.charAt(n & 15);
            n >>>= 4;
          }
        }
        return ho.join("");
      }
      static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      _dataLength = 0;
      _bufferLength = 0;
      _state = new Int32Array(4);
      _buffer = new ArrayBuffer(68);
      _buffer8;
      _buffer32;
      constructor() {
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
      }
      /**
       * Initialise buffer to be hashed
       */
      start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(_Md5.stateIdentity);
        return this;
      }
      // Char to code point to to array conversion:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
      /**
       * Append a UTF-8 string to the hash buffer
       * @param str String to append
       */
      appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
        for (i = 0; i < str.length; i += 1) {
          code = str.charCodeAt(i);
          if (code < 128) {
            buf8[bufLen++] = code;
          } else if (code < 2048) {
            buf8[bufLen++] = (code >>> 6) + 192;
            buf8[bufLen++] = code & 63 | 128;
          } else if (code < 55296 || code > 56319) {
            buf8[bufLen++] = (code >>> 12) + 224;
            buf8[bufLen++] = code >>> 6 & 63 | 128;
            buf8[bufLen++] = code & 63 | 128;
          } else {
            code = (code - 55296) * 1024 + (str.charCodeAt(++i) - 56320) + 65536;
            if (code > 1114111) {
              throw new Error(
                "Unicode standard supports code points up to U+10FFFF"
              );
            }
            buf8[bufLen++] = (code >>> 18) + 240;
            buf8[bufLen++] = code >>> 12 & 63 | 128;
            buf8[bufLen++] = code >>> 6 & 63 | 128;
            buf8[bufLen++] = code & 63 | 128;
          }
          if (bufLen >= 64) {
            this._dataLength += 64;
            _Md5._md5cycle(this._state, buf32);
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
      appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (; ; ) {
          i = Math.min(str.length - j, 64 - bufLen);
          while (i--) {
            buf8[bufLen++] = str.charCodeAt(j++);
          }
          if (bufLen < 64) {
            break;
          }
          this._dataLength += 64;
          _Md5._md5cycle(this._state, buf32);
          bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
      }
      /**
       * Append a byte array to the hash buffer
       * @param input array to append
       */
      appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (; ; ) {
          i = Math.min(input.length - j, 64 - bufLen);
          while (i--) {
            buf8[bufLen++] = input[j++];
          }
          if (bufLen < 64) {
            break;
          }
          this._dataLength += 64;
          _Md5._md5cycle(this._state, buf32);
          bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
      }
      /**
       * Get the state of the hash buffer
       */
      getState() {
        const s = this._state;
        return {
          buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
          buflen: this._bufferLength,
          length: this._dataLength,
          state: [s[0], s[1], s[2], s[3]]
        };
      }
      /**
       * Override the current state of the hash buffer
       * @param state New hash buffer state
       */
      setState(state) {
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
      end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        this._dataLength += bufLen;
        const dataBitsLen = this._dataLength * 8;
        buf8[bufLen] = 128;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(_Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
          _Md5._md5cycle(this._state, buf32);
          buf32.set(_Md5.buffer32Identity);
        }
        if (dataBitsLen <= 4294967295) {
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
        _Md5._md5cycle(this._state, buf32);
        return raw ? this._state : _Md5._hex(this._state);
      }
    };
  }
});

// shims/crypto/index.ts
var crypto_exports = {};
__export(crypto_exports, {
  createHash: () => createHash,
  createHmac: () => createHmac,
  randomBytes: () => randomBytes
});
function randomBytes(length) {
  return crypto.getRandomValues(Buffer2.alloc(length));
}
function createHash(type) {
  if (type === "sha256")
    return {
      update: /* @__PURE__ */ __name(function(data) {
        return {
          digest: /* @__PURE__ */ __name(function() {
            return Buffer2.from(sha256(data));
          }, "digest")
        };
      }, "update")
    };
  if (type === "md5")
    return {
      update: /* @__PURE__ */ __name(function(data) {
        return {
          digest: /* @__PURE__ */ __name(function() {
            return typeof data === "string" ? Md5.hashStr(data) : Md5.hashByteArray(data);
          }, "digest")
        };
      }, "update")
    };
  throw new Error(`Hash type '${type}' not supported`);
}
function createHmac(type, key) {
  if (type !== "sha256")
    throw new Error(`Only sha256 is supported (requested: '${type}')`);
  return {
    update: /* @__PURE__ */ __name(function(data) {
      return {
        digest: /* @__PURE__ */ __name(function() {
          if (typeof key === "string") key = new TextEncoder().encode(key);
          if (typeof data === "string") data = new TextEncoder().encode(data);
          const keyLen = key.length;
          if (keyLen > 64) {
            key = sha256(key);
          } else if (keyLen < 64) {
            const tmp = new Uint8Array(64);
            tmp.set(key);
            key = tmp;
          }
          const innerKey = new Uint8Array(64);
          const outerKey = new Uint8Array(64);
          for (let i = 0; i < 64; i++) {
            innerKey[i] = 54 ^ key[i];
            outerKey[i] = 92 ^ key[i];
          }
          const msg = new Uint8Array(data.length + 64);
          msg.set(innerKey, 0);
          msg.set(data, 64);
          const result = new Uint8Array(64 + 32);
          result.set(outerKey, 0);
          result.set(sha256(msg), 64);
          return Buffer2.from(sha256(result));
        }, "digest")
      };
    }, "update")
  };
}
var init_crypto = __esm({
  "shims/crypto/index.ts"() {
    "use strict";
    init_shims();
    init_sha256();
    init_md5();
    __name(randomBytes, "randomBytes");
    __name(createHash, "createHash");
    __name(createHmac, "createHmac");
  }
});

// node_modules/pg/node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "node_modules/pg/node_modules/postgres-array/index.js"(exports) {
    "use strict";
    init_shims();
    exports.parse = function(source, transform) {
      return new ArrayParser(source, transform).parse();
    };
    var ArrayParser = class _ArrayParser {
      static {
        __name(this, "ArrayParser");
      }
      constructor(source, transform) {
        this.source = source;
        this.transform = transform || identity;
        this.position = 0;
        this.entries = [];
        this.recorded = [];
        this.dimension = 0;
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var character = this.source[this.position++];
        if (character === "\\") {
          return {
            value: this.source[this.position++],
            escaped: true
          };
        }
        return {
          value: character,
          escaped: false
        };
      }
      record(character) {
        this.recorded.push(character);
      }
      newEntry(includeEmpty) {
        var entry;
        if (this.recorded.length > 0 || includeEmpty) {
          entry = this.recorded.join("");
          if (entry === "NULL" && !includeEmpty) {
            entry = null;
          }
          if (entry !== null) entry = this.transform(entry);
          this.entries.push(entry);
          this.recorded = [];
        }
      }
      consumeDimensions() {
        if (this.source[0] === "[") {
          while (!this.isEof()) {
            var char = this.nextCharacter();
            if (char.value === "=") break;
          }
        }
      }
      parse(nested) {
        var character, parser, quote;
        this.consumeDimensions();
        while (!this.isEof()) {
          character = this.nextCharacter();
          if (character.value === "{" && !quote) {
            this.dimension++;
            if (this.dimension > 1) {
              parser = new _ArrayParser(this.source.substr(this.position - 1), this.transform);
              this.entries.push(parser.parse(true));
              this.position += parser.position - 2;
            }
          } else if (character.value === "}" && !quote) {
            this.dimension--;
            if (!this.dimension) {
              this.newEntry();
              if (nested) return this.entries;
            }
          } else if (character.value === '"' && !character.escaped) {
            if (quote) this.newEntry(true);
            quote = !quote;
          } else if (character.value === "," && !quote) {
            this.newEntry();
          } else {
            this.record(character.value);
          }
        }
        if (this.dimension !== 0) {
          throw new Error("array dimension not balanced");
        }
        return this.entries;
      }
    };
    function identity(value) {
      return value;
    }
    __name(identity, "identity");
  }
});

// node_modules/pg/node_modules/pg-types/lib/arrayParser.js
var require_arrayParser = __commonJS({
  "node_modules/pg/node_modules/pg-types/lib/arrayParser.js"(exports, module) {
    init_shims();
    var array = require_postgres_array();
    module.exports = {
      create: /* @__PURE__ */ __name(function(source, transform) {
        return {
          parse: /* @__PURE__ */ __name(function() {
            return array.parse(source, transform);
          }, "parse")
        };
      }, "create")
    };
  }
});

// node_modules/pg/node_modules/postgres-date/index.js
var require_postgres_date = __commonJS({
  "node_modules/pg/node_modules/postgres-date/index.js"(exports, module) {
    "use strict";
    init_shims();
    var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/;
    var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/;
    var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
    var INFINITY = /^-?infinity$/;
    module.exports = /* @__PURE__ */ __name(function parseDate(isoDate) {
      if (INFINITY.test(isoDate)) {
        return Number(isoDate.replace("i", "I"));
      }
      var matches = DATE_TIME.exec(isoDate);
      if (!matches) {
        return getDate(isoDate) || null;
      }
      var isBC = !!matches[8];
      var year = parseInt(matches[1], 10);
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var hour = parseInt(matches[4], 10);
      var minute = parseInt(matches[5], 10);
      var second = parseInt(matches[6], 10);
      var ms = matches[7];
      ms = ms ? 1e3 * parseFloat(ms) : 0;
      var date;
      var offset = timeZoneOffset(isoDate);
      if (offset != null) {
        date = new Date(Date.UTC(year, month, day, hour, minute, second, ms));
        if (is0To99(year)) {
          date.setUTCFullYear(year);
        }
        if (offset !== 0) {
          date.setTime(date.getTime() - offset);
        }
      } else {
        date = new Date(year, month, day, hour, minute, second, ms);
        if (is0To99(year)) {
          date.setFullYear(year);
        }
      }
      return date;
    }, "parseDate");
    function getDate(isoDate) {
      var matches = DATE.exec(isoDate);
      if (!matches) {
        return;
      }
      var year = parseInt(matches[1], 10);
      var isBC = !!matches[4];
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var date = new Date(year, month, day);
      if (is0To99(year)) {
        date.setFullYear(year);
      }
      return date;
    }
    __name(getDate, "getDate");
    function timeZoneOffset(isoDate) {
      if (isoDate.endsWith("+00")) {
        return 0;
      }
      var zone = TIME_ZONE.exec(isoDate.split(" ")[1]);
      if (!zone) return;
      var type = zone[1];
      if (type === "Z") {
        return 0;
      }
      var sign = type === "-" ? -1 : 1;
      var offset = parseInt(zone[2], 10) * 3600 + parseInt(zone[3] || 0, 10) * 60 + parseInt(zone[4] || 0, 10);
      return offset * sign * 1e3;
    }
    __name(timeZoneOffset, "timeZoneOffset");
    function bcYearToNegativeYear(year) {
      return -(year - 1);
    }
    __name(bcYearToNegativeYear, "bcYearToNegativeYear");
    function is0To99(num) {
      return num >= 0 && num < 100;
    }
    __name(is0To99, "is0To99");
  }
});

// node_modules/xtend/mutable.js
var require_mutable = __commonJS({
  "node_modules/xtend/mutable.js"(exports, module) {
    init_shims();
    module.exports = extend;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    function extend(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
    __name(extend, "extend");
  }
});

// node_modules/pg/node_modules/postgres-interval/index.js
var require_postgres_interval = __commonJS({
  "node_modules/pg/node_modules/postgres-interval/index.js"(exports, module) {
    "use strict";
    init_shims();
    var extend = require_mutable();
    module.exports = PostgresInterval;
    function PostgresInterval(raw) {
      if (!(this instanceof PostgresInterval)) {
        return new PostgresInterval(raw);
      }
      extend(this, parse2(raw));
    }
    __name(PostgresInterval, "PostgresInterval");
    var properties = ["seconds", "minutes", "hours", "days", "months", "years"];
    PostgresInterval.prototype.toPostgres = function() {
      var filtered = properties.filter(this.hasOwnProperty, this);
      if (this.milliseconds && filtered.indexOf("seconds") < 0) {
        filtered.push("seconds");
      }
      if (filtered.length === 0) return "0";
      return filtered.map(function(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "");
        }
        return value + " " + property;
      }, this).join(" ");
    };
    var propertiesISOEquivalent = {
      years: "Y",
      months: "M",
      days: "D",
      hours: "H",
      minutes: "M",
      seconds: "S"
    };
    var dateProperties = ["years", "months", "days"];
    var timeProperties = ["hours", "minutes", "seconds"];
    PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
      var datePart = dateProperties.map(buildProperty, this).join("");
      var timePart = timeProperties.map(buildProperty, this).join("");
      return "P" + datePart + "T" + timePart;
      function buildProperty(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "");
        }
        return value + propertiesISOEquivalent[property];
      }
      __name(buildProperty, "buildProperty");
    };
    var NUMBER = "([+-]?\\d+)";
    var YEAR = NUMBER + "\\s+years?";
    var MONTH = NUMBER + "\\s+mons?";
    var DAY = NUMBER + "\\s+days?";
    var TIME = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?";
    var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function(regexString) {
      return "(" + regexString + ")?";
    }).join("\\s*"));
    var positions = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12
    };
    var negatives = ["hours", "minutes", "seconds", "milliseconds"];
    function parseMilliseconds(fraction) {
      var microseconds = fraction + "000000".slice(fraction.length);
      return parseInt(microseconds, 10) / 1e3;
    }
    __name(parseMilliseconds, "parseMilliseconds");
    function parse2(interval) {
      if (!interval) return {};
      var matches = INTERVAL.exec(interval);
      var isNegative = matches[8] === "-";
      return Object.keys(positions).reduce(function(parsed, property) {
        var position = positions[property];
        var value = matches[position];
        if (!value) return parsed;
        value = property === "milliseconds" ? parseMilliseconds(value) : parseInt(value, 10);
        if (!value) return parsed;
        if (isNegative && ~negatives.indexOf(property)) {
          value *= -1;
        }
        parsed[property] = value;
        return parsed;
      }, {});
    }
    __name(parse2, "parse");
  }
});

// node_modules/pg/node_modules/postgres-bytea/index.js
var require_postgres_bytea = __commonJS({
  "node_modules/pg/node_modules/postgres-bytea/index.js"(exports, module) {
    "use strict";
    init_shims();
    module.exports = /* @__PURE__ */ __name(function parseBytea(input) {
      if (/^\\x/.test(input)) {
        return new Buffer2(input.substr(2), "hex");
      }
      var output = "";
      var i = 0;
      while (i < input.length) {
        if (input[i] !== "\\") {
          output += input[i];
          ++i;
        } else {
          if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
            output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8));
            i += 4;
          } else {
            var backslashes = 1;
            while (i + backslashes < input.length && input[i + backslashes] === "\\") {
              backslashes++;
            }
            for (var k = 0; k < Math.floor(backslashes / 2); ++k) {
              output += "\\";
            }
            i += Math.floor(backslashes / 2) * 2;
          }
        }
      }
      return new Buffer2(output, "binary");
    }, "parseBytea");
  }
});

// node_modules/pg/node_modules/pg-types/lib/textParsers.js
var require_textParsers = __commonJS({
  "node_modules/pg/node_modules/pg-types/lib/textParsers.js"(exports, module) {
    init_shims();
    var array = require_postgres_array();
    var arrayParser = require_arrayParser();
    var parseDate = require_postgres_date();
    var parseInterval = require_postgres_interval();
    var parseByteA = require_postgres_bytea();
    function allowNull(fn) {
      return /* @__PURE__ */ __name(function nullAllowed(value) {
        if (value === null) return value;
        return fn(value);
      }, "nullAllowed");
    }
    __name(allowNull, "allowNull");
    function parseBool(value) {
      if (value === null) return value;
      return value === "TRUE" || value === "t" || value === "true" || value === "y" || value === "yes" || value === "on" || value === "1";
    }
    __name(parseBool, "parseBool");
    function parseBoolArray(value) {
      if (!value) return null;
      return array.parse(value, parseBool);
    }
    __name(parseBoolArray, "parseBoolArray");
    function parseBaseTenInt(string) {
      return parseInt(string, 10);
    }
    __name(parseBaseTenInt, "parseBaseTenInt");
    function parseIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(parseBaseTenInt));
    }
    __name(parseIntegerArray, "parseIntegerArray");
    function parseBigIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(function(entry) {
        return parseBigInteger(entry).trim();
      }));
    }
    __name(parseBigIntegerArray, "parseBigIntegerArray");
    var parsePointArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parsePoint(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parsePointArray");
    var parseFloatArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseFloat(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseFloatArray");
    var parseStringArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value);
      return p2.parse();
    }, "parseStringArray");
    var parseDateArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseDate(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseDateArray");
    var parseIntervalArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      var p2 = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseInterval(entry);
        }
        return entry;
      });
      return p2.parse();
    }, "parseIntervalArray");
    var parseByteAArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(parseByteA));
    }, "parseByteAArray");
    var parseInteger = /* @__PURE__ */ __name(function(value) {
      return parseInt(value, 10);
    }, "parseInteger");
    var parseBigInteger = /* @__PURE__ */ __name(function(value) {
      var valStr = String(value);
      if (/^\d+$/.test(valStr)) {
        return valStr;
      }
      return value;
    }, "parseBigInteger");
    var parseJsonArray = /* @__PURE__ */ __name(function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(JSON.parse));
    }, "parseJsonArray");
    var parsePoint = /* @__PURE__ */ __name(function(value) {
      if (value[0] !== "(") {
        return null;
      }
      value = value.substring(1, value.length - 1).split(",");
      return {
        x: parseFloat(value[0]),
        y: parseFloat(value[1])
      };
    }, "parsePoint");
    var parseCircle = /* @__PURE__ */ __name(function(value) {
      if (value[0] !== "<" && value[1] !== "(") {
        return null;
      }
      var point = "(";
      var radius = "";
      var pointParsed = false;
      for (var i = 2; i < value.length - 1; i++) {
        if (!pointParsed) {
          point += value[i];
        }
        if (value[i] === ")") {
          pointParsed = true;
          continue;
        } else if (!pointParsed) {
          continue;
        }
        if (value[i] === ",") {
          continue;
        }
        radius += value[i];
      }
      var result = parsePoint(point);
      result.radius = parseFloat(radius);
      return result;
    }, "parseCircle");
    var init = /* @__PURE__ */ __name(function(register) {
      register(20, parseBigInteger);
      register(21, parseInteger);
      register(23, parseInteger);
      register(26, parseInteger);
      register(700, parseFloat);
      register(701, parseFloat);
      register(16, parseBool);
      register(1082, parseDate);
      register(1114, parseDate);
      register(1184, parseDate);
      register(600, parsePoint);
      register(651, parseStringArray);
      register(718, parseCircle);
      register(1e3, parseBoolArray);
      register(1001, parseByteAArray);
      register(1005, parseIntegerArray);
      register(1007, parseIntegerArray);
      register(1028, parseIntegerArray);
      register(1016, parseBigIntegerArray);
      register(1017, parsePointArray);
      register(1021, parseFloatArray);
      register(1022, parseFloatArray);
      register(1231, parseFloatArray);
      register(1014, parseStringArray);
      register(1015, parseStringArray);
      register(1008, parseStringArray);
      register(1009, parseStringArray);
      register(1040, parseStringArray);
      register(1041, parseStringArray);
      register(1115, parseDateArray);
      register(1182, parseDateArray);
      register(1185, parseDateArray);
      register(1186, parseInterval);
      register(1187, parseIntervalArray);
      register(17, parseByteA);
      register(114, JSON.parse.bind(JSON));
      register(3802, JSON.parse.bind(JSON));
      register(199, parseJsonArray);
      register(3807, parseJsonArray);
      register(3907, parseStringArray);
      register(2951, parseStringArray);
      register(791, parseStringArray);
      register(1183, parseStringArray);
      register(1270, parseStringArray);
    }, "init");
    module.exports = {
      init
    };
  }
});

// node_modules/pg-int8/index.js
var require_pg_int8 = __commonJS({
  "node_modules/pg-int8/index.js"(exports, module) {
    "use strict";
    init_shims();
    var BASE = 1e6;
    function readInt8(buffer) {
      var high = buffer.readInt32BE(0);
      var low = buffer.readUInt32BE(4);
      var sign = "";
      if (high < 0) {
        high = ~high + (low === 0);
        low = ~low + 1 >>> 0;
        sign = "-";
      }
      var result = "";
      var carry;
      var t;
      var digits;
      var pad;
      var l2;
      var i;
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l2 = 6 - digits.length;
        for (i = 0; i < l2; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        t = 4294967296 * carry + low;
        digits = "" + t % BASE;
        return sign + digits + result;
      }
    }
    __name(readInt8, "readInt8");
    module.exports = readInt8;
  }
});

// node_modules/pg/node_modules/pg-types/lib/binaryParsers.js
var require_binaryParsers = __commonJS({
  "node_modules/pg/node_modules/pg-types/lib/binaryParsers.js"(exports, module) {
    init_shims();
    var parseInt64 = require_pg_int8();
    var parseBits = /* @__PURE__ */ __name(function(data, bits, offset, invert, callback) {
      offset = offset || 0;
      invert = invert || false;
      callback = callback || function(lastValue, newValue, bits2) {
        return lastValue * Math.pow(2, bits2) + newValue;
      };
      var offsetBytes = offset >> 3;
      var inv = /* @__PURE__ */ __name(function(value) {
        if (invert) {
          return ~value & 255;
        }
        return value;
      }, "inv");
      var mask = 255;
      var firstBits = 8 - offset % 8;
      if (bits < firstBits) {
        mask = 255 << 8 - bits & 255;
        firstBits = bits;
      }
      if (offset) {
        mask = mask >> offset % 8;
      }
      var result = 0;
      if (offset % 8 + bits >= 8) {
        result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
      }
      var bytes = bits + offset >> 3;
      for (var i = offsetBytes + 1; i < bytes; i++) {
        result = callback(result, inv(data[i]), 8);
      }
      var lastBits = (bits + offset) % 8;
      if (lastBits > 0) {
        result = callback(result, inv(data[bytes]) >> 8 - lastBits, lastBits);
      }
      return result;
    }, "parseBits");
    var parseFloatFromBits = /* @__PURE__ */ __name(function(data, precisionBits, exponentBits) {
      var bias = Math.pow(2, exponentBits - 1) - 1;
      var sign = parseBits(data, 1);
      var exponent = parseBits(data, exponentBits, 1);
      if (exponent === 0) {
        return 0;
      }
      var precisionBitsCounter = 1;
      var parsePrecisionBits = /* @__PURE__ */ __name(function(lastValue, newValue, bits) {
        if (lastValue === 0) {
          lastValue = 1;
        }
        for (var i = 1; i <= bits; i++) {
          precisionBitsCounter /= 2;
          if ((newValue & 1 << bits - i) > 0) {
            lastValue += precisionBitsCounter;
          }
        }
        return lastValue;
      }, "parsePrecisionBits");
      var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);
      if (exponent == Math.pow(2, exponentBits + 1) - 1) {
        if (mantissa === 0) {
          return sign === 0 ? Infinity : -Infinity;
        }
        return NaN;
      }
      return (sign === 0 ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
    }, "parseFloatFromBits");
    var parseInt16 = /* @__PURE__ */ __name(function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 15, 1, true) + 1);
      }
      return parseBits(value, 15, 1);
    }, "parseInt16");
    var parseInt32 = /* @__PURE__ */ __name(function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 31, 1, true) + 1);
      }
      return parseBits(value, 31, 1);
    }, "parseInt32");
    var parseFloat32 = /* @__PURE__ */ __name(function(value) {
      return parseFloatFromBits(value, 23, 8);
    }, "parseFloat32");
    var parseFloat64 = /* @__PURE__ */ __name(function(value) {
      return parseFloatFromBits(value, 52, 11);
    }, "parseFloat64");
    var parseNumeric = /* @__PURE__ */ __name(function(value) {
      var sign = parseBits(value, 16, 32);
      if (sign == 49152) {
        return NaN;
      }
      var weight = Math.pow(1e4, parseBits(value, 16, 16));
      var result = 0;
      var digits = [];
      var ndigits = parseBits(value, 16);
      for (var i = 0; i < ndigits; i++) {
        result += parseBits(value, 16, 64 + 16 * i) * weight;
        weight /= 1e4;
      }
      var scale = Math.pow(10, parseBits(value, 16, 48));
      return (sign === 0 ? 1 : -1) * Math.round(result * scale) / scale;
    }, "parseNumeric");
    var parseDate = /* @__PURE__ */ __name(function(isUTC, value) {
      var sign = parseBits(value, 1);
      var rawValue = parseBits(value, 63, 1);
      var result = new Date((sign === 0 ? 1 : -1) * rawValue / 1e3 + 9466848e5);
      if (!isUTC) {
        result.setTime(result.getTime() + result.getTimezoneOffset() * 6e4);
      }
      result.usec = rawValue % 1e3;
      result.getMicroSeconds = function() {
        return this.usec;
      };
      result.setMicroSeconds = function(value2) {
        this.usec = value2;
      };
      result.getUTCMicroSeconds = function() {
        return this.usec;
      };
      return result;
    }, "parseDate");
    var parseArray = /* @__PURE__ */ __name(function(value) {
      var dim = parseBits(value, 32);
      var flags = parseBits(value, 32, 32);
      var elementType = parseBits(value, 32, 64);
      var offset = 96;
      var dims = [];
      for (var i = 0; i < dim; i++) {
        dims[i] = parseBits(value, 32, offset);
        offset += 32;
        offset += 32;
      }
      var parseElement = /* @__PURE__ */ __name(function(elementType2) {
        var length = parseBits(value, 32, offset);
        offset += 32;
        if (length == 4294967295) {
          return null;
        }
        var result;
        if (elementType2 == 23 || elementType2 == 20) {
          result = parseBits(value, length * 8, offset);
          offset += length * 8;
          return result;
        } else if (elementType2 == 25) {
          result = value.toString(this.encoding, offset >> 3, (offset += length << 3) >> 3);
          return result;
        } else {
          console.log("ERROR: ElementType not implemented: " + elementType2);
        }
      }, "parseElement");
      var parse2 = /* @__PURE__ */ __name(function(dimension, elementType2) {
        var array = [];
        var i2;
        if (dimension.length > 1) {
          var count = dimension.shift();
          for (i2 = 0; i2 < count; i2++) {
            array[i2] = parse2(dimension, elementType2);
          }
          dimension.unshift(count);
        } else {
          for (i2 = 0; i2 < dimension[0]; i2++) {
            array[i2] = parseElement(elementType2);
          }
        }
        return array;
      }, "parse");
      return parse2(dims, elementType);
    }, "parseArray");
    var parseText = /* @__PURE__ */ __name(function(value) {
      return value.toString("utf8");
    }, "parseText");
    var parseBool = /* @__PURE__ */ __name(function(value) {
      if (value === null) return null;
      return parseBits(value, 8) > 0;
    }, "parseBool");
    var init = /* @__PURE__ */ __name(function(register) {
      register(20, parseInt64);
      register(21, parseInt16);
      register(23, parseInt32);
      register(26, parseInt32);
      register(1700, parseNumeric);
      register(700, parseFloat32);
      register(701, parseFloat64);
      register(16, parseBool);
      register(1114, parseDate.bind(null, false));
      register(1184, parseDate.bind(null, true));
      register(1e3, parseArray);
      register(1007, parseArray);
      register(1016, parseArray);
      register(1008, parseArray);
      register(1009, parseArray);
      register(25, parseText);
    }, "init");
    module.exports = {
      init
    };
  }
});

// node_modules/pg/node_modules/pg-types/lib/builtins.js
var require_builtins = __commonJS({
  "node_modules/pg/node_modules/pg-types/lib/builtins.js"(exports, module) {
    init_shims();
    module.exports = {
      BOOL: 16,
      BYTEA: 17,
      CHAR: 18,
      INT8: 20,
      INT2: 21,
      INT4: 23,
      REGPROC: 24,
      TEXT: 25,
      OID: 26,
      TID: 27,
      XID: 28,
      CID: 29,
      JSON: 114,
      XML: 142,
      PG_NODE_TREE: 194,
      SMGR: 210,
      PATH: 602,
      POLYGON: 604,
      CIDR: 650,
      FLOAT4: 700,
      FLOAT8: 701,
      ABSTIME: 702,
      RELTIME: 703,
      TINTERVAL: 704,
      CIRCLE: 718,
      MACADDR8: 774,
      MONEY: 790,
      MACADDR: 829,
      INET: 869,
      ACLITEM: 1033,
      BPCHAR: 1042,
      VARCHAR: 1043,
      DATE: 1082,
      TIME: 1083,
      TIMESTAMP: 1114,
      TIMESTAMPTZ: 1184,
      INTERVAL: 1186,
      TIMETZ: 1266,
      BIT: 1560,
      VARBIT: 1562,
      NUMERIC: 1700,
      REFCURSOR: 1790,
      REGPROCEDURE: 2202,
      REGOPER: 2203,
      REGOPERATOR: 2204,
      REGCLASS: 2205,
      REGTYPE: 2206,
      UUID: 2950,
      TXID_SNAPSHOT: 2970,
      PG_LSN: 3220,
      PG_NDISTINCT: 3361,
      PG_DEPENDENCIES: 3402,
      TSVECTOR: 3614,
      TSQUERY: 3615,
      GTSVECTOR: 3642,
      REGCONFIG: 3734,
      REGDICTIONARY: 3769,
      JSONB: 3802,
      REGNAMESPACE: 4089,
      REGROLE: 4096
    };
  }
});

// node_modules/pg/node_modules/pg-types/index.js
var require_pg_types = __commonJS({
  "node_modules/pg/node_modules/pg-types/index.js"(exports) {
    init_shims();
    var textParsers = require_textParsers();
    var binaryParsers = require_binaryParsers();
    var arrayParser = require_arrayParser();
    var builtinTypes = require_builtins();
    exports.getTypeParser = getTypeParser;
    exports.setTypeParser = setTypeParser;
    exports.arrayParser = arrayParser;
    exports.builtins = builtinTypes;
    var typeParsers = {
      text: {},
      binary: {}
    };
    function noParse(val) {
      return String(val);
    }
    __name(noParse, "noParse");
    function getTypeParser(oid, format) {
      format = format || "text";
      if (!typeParsers[format]) {
        return noParse;
      }
      return typeParsers[format][oid] || noParse;
    }
    __name(getTypeParser, "getTypeParser");
    function setTypeParser(oid, format, parseFn) {
      if (typeof format == "function") {
        parseFn = format;
        format = "text";
      }
      typeParsers[format][oid] = parseFn;
    }
    __name(setTypeParser, "setTypeParser");
    textParsers.init(function(oid, converter) {
      typeParsers.text[oid] = converter;
    });
    binaryParsers.init(function(oid, converter) {
      typeParsers.binary[oid] = converter;
    });
  }
});

// node_modules/pg/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/pg/lib/defaults.js"(exports, module) {
    "use strict";
    init_shims();
    module.exports = {
      // database host. defaults to localhost
      host: "localhost",
      // database user's name
      user: process.platform === "win32" ? process.env.USERNAME : process.env.USER,
      // name of database to connect
      database: void 0,
      // database user's password
      password: null,
      // a Postgres connection string to be used instead of setting individual connection items
      // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
      // in the defaults object.
      connectionString: void 0,
      // database port
      port: 5432,
      // number of rows to return at a time from a prepared statement's
      // portal. 0 will return all rows at once
      rows: 0,
      // binary result mode
      binary: false,
      // Connection pool options - see https://github.com/brianc/node-pg-pool
      // number of connections to use in connection pool
      // 0 will disable connection pooling
      max: 10,
      // max milliseconds a client can go unused before it is removed
      // from the pool and destroyed
      idleTimeoutMillis: 3e4,
      client_encoding: "",
      ssl: false,
      application_name: void 0,
      fallback_application_name: void 0,
      options: void 0,
      parseInputDatesAsUTC: false,
      // max milliseconds any query using this connection will execute for before timing out in error.
      // false=unlimited
      statement_timeout: false,
      // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
      // false=unlimited
      lock_timeout: false,
      // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
      // false=unlimited
      idle_in_transaction_session_timeout: false,
      // max milliseconds to wait for query to complete (client side)
      query_timeout: false,
      connect_timeout: 0,
      keepalives: 1,
      keepalives_idle: 0
    };
    var pgTypes = require_pg_types();
    var parseBigInteger = pgTypes.getTypeParser(20, "text");
    var parseBigIntegerArray = pgTypes.getTypeParser(1016, "text");
    module.exports.__defineSetter__("parseInt8", function(val) {
      pgTypes.setTypeParser(20, "text", val ? pgTypes.getTypeParser(23, "text") : parseBigInteger);
      pgTypes.setTypeParser(1016, "text", val ? pgTypes.getTypeParser(1007, "text") : parseBigIntegerArray);
    });
  }
});

// node_modules/pg/lib/utils.js
var require_utils = __commonJS({
  "node_modules/pg/lib/utils.js"(exports, module) {
    "use strict";
    init_shims();
    var crypto2 = (init_crypto(), __toCommonJS(crypto_exports));
    var defaults2 = require_defaults();
    function escapeElement(elementRepresentation) {
      var escaped = elementRepresentation.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return '"' + escaped + '"';
    }
    __name(escapeElement, "escapeElement");
    function arrayString(val) {
      var result = "{";
      for (var i = 0; i < val.length; i++) {
        if (i > 0) {
          result = result + ",";
        }
        if (val[i] === null || typeof val[i] === "undefined") {
          result = result + "NULL";
        } else if (Array.isArray(val[i])) {
          result = result + arrayString(val[i]);
        } else if (val[i] instanceof Buffer2) {
          result += "\\\\x" + val[i].toString("hex");
        } else {
          result += escapeElement(prepareValue2(val[i]));
        }
      }
      result = result + "}";
      return result;
    }
    __name(arrayString, "arrayString");
    var prepareValue2 = /* @__PURE__ */ __name(function(val, seen) {
      if (val == null) {
        return null;
      }
      if (val instanceof Buffer2) {
        return val;
      }
      if (ArrayBuffer.isView(val)) {
        var buf = Buffer2.from(val.buffer, val.byteOffset, val.byteLength);
        if (buf.length === val.byteLength) {
          return buf;
        }
        return buf.slice(val.byteOffset, val.byteOffset + val.byteLength);
      }
      if (val instanceof Date) {
        if (defaults2.parseInputDatesAsUTC) {
          return dateToStringUTC(val);
        } else {
          return dateToString(val);
        }
      }
      if (Array.isArray(val)) {
        return arrayString(val);
      }
      if (typeof val === "object") {
        return prepareObject(val, seen);
      }
      return val.toString();
    }, "prepareValue");
    function prepareObject(val, seen) {
      if (val && typeof val.toPostgres === "function") {
        seen = seen || [];
        if (seen.indexOf(val) !== -1) {
          throw new Error('circular reference detected while preparing "' + val + '" for query');
        }
        seen.push(val);
        return prepareValue2(val.toPostgres(prepareValue2), seen);
      }
      return JSON.stringify(val);
    }
    __name(prepareObject, "prepareObject");
    function pad(number, digits) {
      number = "" + number;
      while (number.length < digits) {
        number = "0" + number;
      }
      return number;
    }
    __name(pad, "pad");
    function dateToString(date) {
      var offset = -date.getTimezoneOffset();
      var year = date.getFullYear();
      var isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      var ret = pad(year, 4) + "-" + pad(date.getMonth() + 1, 2) + "-" + pad(date.getDate(), 2) + "T" + pad(date.getHours(), 2) + ":" + pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2) + "." + pad(date.getMilliseconds(), 3);
      if (offset < 0) {
        ret += "-";
        offset *= -1;
      } else {
        ret += "+";
      }
      ret += pad(Math.floor(offset / 60), 2) + ":" + pad(offset % 60, 2);
      if (isBCYear) ret += " BC";
      return ret;
    }
    __name(dateToString, "dateToString");
    function dateToStringUTC(date) {
      var year = date.getUTCFullYear();
      var isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      var ret = pad(year, 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + "T" + pad(date.getUTCHours(), 2) + ":" + pad(date.getUTCMinutes(), 2) + ":" + pad(date.getUTCSeconds(), 2) + "." + pad(date.getUTCMilliseconds(), 3);
      ret += "+00:00";
      if (isBCYear) ret += " BC";
      return ret;
    }
    __name(dateToStringUTC, "dateToStringUTC");
    function normalizeQueryConfig(config, values, callback) {
      config = typeof config === "string" ? { text: config } : config;
      if (values) {
        if (typeof values === "function") {
          config.callback = values;
        } else {
          config.values = values;
        }
      }
      if (callback) {
        config.callback = callback;
      }
      return config;
    }
    __name(normalizeQueryConfig, "normalizeQueryConfig");
    var md5 = /* @__PURE__ */ __name(function(string) {
      return crypto2.createHash("md5").update(string, "utf-8").digest("hex");
    }, "md5");
    var postgresMd5PasswordHash = /* @__PURE__ */ __name(function(user, password, salt) {
      var inner = md5(password + user);
      var outer = md5(Buffer2.concat([Buffer2.from(inner), salt]));
      return "md5" + outer;
    }, "postgresMd5PasswordHash");
    module.exports = {
      prepareValue: /* @__PURE__ */ __name(function prepareValueWrapper(value) {
        return prepareValue2(value);
      }, "prepareValueWrapper"),
      normalizeQueryConfig,
      postgresMd5PasswordHash,
      md5
    };
  }
});

// node_modules/pg/lib/sasl.js
var require_sasl = __commonJS({
  "node_modules/pg/lib/sasl.js"(exports, module) {
    "use strict";
    init_shims();
    var crypto2 = (init_crypto(), __toCommonJS(crypto_exports));
    function startSession(mechanisms) {
      if (mechanisms.indexOf("SCRAM-SHA-256") === -1) {
        throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
      }
      const clientNonce = crypto2.randomBytes(18).toString("base64");
      return {
        mechanism: "SCRAM-SHA-256",
        clientNonce,
        response: "n,,n=*,r=" + clientNonce,
        message: "SASLInitialResponse"
      };
    }
    __name(startSession, "startSession");
    function continueSession(session, password, serverData) {
      if (session.message !== "SASLInitialResponse") {
        throw new Error("SASL: Last message was not SASLInitialResponse");
      }
      if (typeof password !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      }
      const sv = parseServerFirstMessage(serverData);
      if (!sv.nonce.startsWith(session.clientNonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      } else if (sv.nonce.length === session.clientNonce.length) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      }
      var saltBytes = Buffer2.from(sv.salt, "base64");
      var saltedPassword = Hi(password, saltBytes, sv.iteration);
      var clientKey = hmacSha256(saltedPassword, "Client Key");
      var storedKey = sha2562(clientKey);
      var clientFirstMessageBare = "n=*,r=" + session.clientNonce;
      var serverFirstMessage = "r=" + sv.nonce + ",s=" + sv.salt + ",i=" + sv.iteration;
      var clientFinalMessageWithoutProof = "c=biws,r=" + sv.nonce;
      var authMessage = clientFirstMessageBare + "," + serverFirstMessage + "," + clientFinalMessageWithoutProof;
      var clientSignature = hmacSha256(storedKey, authMessage);
      var clientProofBytes = xorBuffers(clientKey, clientSignature);
      var clientProof = clientProofBytes.toString("base64");
      var serverKey = hmacSha256(saltedPassword, "Server Key");
      var serverSignatureBytes = hmacSha256(serverKey, authMessage);
      session.message = "SASLResponse";
      session.serverSignature = serverSignatureBytes.toString("base64");
      session.response = clientFinalMessageWithoutProof + ",p=" + clientProof;
    }
    __name(continueSession, "continueSession");
    function finalizeSession(session, serverData) {
      if (session.message !== "SASLResponse") {
        throw new Error("SASL: Last message was not SASLResponse");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      }
      const { serverSignature } = parseServerFinalMessage(serverData);
      if (serverSignature !== session.serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
      }
    }
    __name(finalizeSession, "finalizeSession");
    function isPrintableChars(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: text must be a string");
      }
      return text.split("").map((_2, i) => text.charCodeAt(i)).every((c) => c >= 33 && c <= 43 || c >= 45 && c <= 126);
    }
    __name(isPrintableChars, "isPrintableChars");
    function isBase64(text) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text);
    }
    __name(isBase64, "isBase64");
    function parseAttributePairs(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: attribute pairs text must be a string");
      }
      return new Map(
        text.split(",").map((attrValue) => {
          if (!/^.=/.test(attrValue)) {
            throw new Error("SASL: Invalid attribute pair entry");
          }
          const name = attrValue[0];
          const value = attrValue.substring(2);
          return [name, value];
        })
      );
    }
    __name(parseAttributePairs, "parseAttributePairs");
    function parseServerFirstMessage(data) {
      const attrPairs = parseAttributePairs(data);
      const nonce = attrPairs.get("r");
      if (!nonce) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      } else if (!isPrintableChars(nonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
      }
      const salt = attrPairs.get("s");
      if (!salt) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      } else if (!isBase64(salt)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
      }
      const iterationText = attrPairs.get("i");
      if (!iterationText) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      } else if (!/^[1-9][0-9]*$/.test(iterationText)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
      }
      const iteration = parseInt(iterationText, 10);
      return {
        nonce,
        salt,
        iteration
      };
    }
    __name(parseServerFirstMessage, "parseServerFirstMessage");
    function parseServerFinalMessage(serverData) {
      const attrPairs = parseAttributePairs(serverData);
      const serverSignature = attrPairs.get("v");
      if (!serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
      } else if (!isBase64(serverSignature)) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
      }
      return {
        serverSignature
      };
    }
    __name(parseServerFinalMessage, "parseServerFinalMessage");
    function xorBuffers(a, b) {
      if (!Buffer2.isBuffer(a)) {
        throw new TypeError("first argument must be a Buffer");
      }
      if (!Buffer2.isBuffer(b)) {
        throw new TypeError("second argument must be a Buffer");
      }
      if (a.length !== b.length) {
        throw new Error("Buffer lengths must match");
      }
      if (a.length === 0) {
        throw new Error("Buffers cannot be empty");
      }
      return Buffer2.from(a.map((_2, i) => a[i] ^ b[i]));
    }
    __name(xorBuffers, "xorBuffers");
    function sha2562(text) {
      return crypto2.createHash("sha256").update(text).digest();
    }
    __name(sha2562, "sha256");
    function hmacSha256(key, msg) {
      return crypto2.createHmac("sha256", key).update(msg).digest();
    }
    __name(hmacSha256, "hmacSha256");
    function Hi(password, saltBytes, iterations) {
      var ui1 = hmacSha256(password, Buffer2.concat([saltBytes, Buffer2.from([0, 0, 0, 1])]));
      var ui = ui1;
      for (var i = 0; i < iterations - 1; i++) {
        ui1 = hmacSha256(password, ui1);
        ui = xorBuffers(ui, ui1);
      }
      return ui;
    }
    __name(Hi, "Hi");
    module.exports = {
      startSession,
      continueSession,
      finalizeSession
    };
  }
});

// shims/path/index.ts
var path_exports = {};
__export(path_exports, {
  join: () => join
});
function join(...args) {
  return args.join("/");
}
var init_path = __esm({
  "shims/path/index.ts"() {
    "use strict";
    init_shims();
    __name(join, "join");
  }
});

// shims/fs/index.ts
var fs_exports = {};
__export(fs_exports, {
  stat: () => stat
});
function stat(file, cb) {
  cb(new Error("No filesystem"));
}
var init_fs = __esm({
  "shims/fs/index.ts"() {
    "use strict";
    init_shims();
    __name(stat, "stat");
  }
});

// shims/stream/index.ts
var stream_exports = {};
__export(stream_exports, {
  default: () => stream_default
});
var stream_default;
var init_stream = __esm({
  "shims/stream/index.ts"() {
    "use strict";
    init_shims();
    stream_default = {};
  }
});

// shims/string_decoder/index.ts
var string_decoder_exports = {};
__export(string_decoder_exports, {
  StringDecoder: () => StringDecoder
});
var StringDecoder;
var init_string_decoder = __esm({
  "shims/string_decoder/index.ts"() {
    "use strict";
    init_shims();
    StringDecoder = class {
      static {
        __name(this, "StringDecoder");
      }
      td;
      constructor(encoding) {
        this.td = new TextDecoder(encoding);
      }
      write(data) {
        return this.td.decode(data, { stream: true });
      }
      end(data) {
        return this.td.decode(data);
      }
    };
  }
});

// node_modules/split2/index.js
var require_split2 = __commonJS({
  "node_modules/split2/index.js"(exports, module) {
    "use strict";
    init_shims();
    var { Transform } = (init_stream(), __toCommonJS(stream_exports));
    var { StringDecoder: StringDecoder2 } = (init_string_decoder(), __toCommonJS(string_decoder_exports));
    var kLast = Symbol("last");
    var kDecoder = Symbol("decoder");
    function transform(chunk, enc, cb) {
      let list;
      if (this.overflow) {
        const buf = this[kDecoder].write(chunk);
        list = buf.split(this.matcher);
        if (list.length === 1) return cb();
        list.shift();
        this.overflow = false;
      } else {
        this[kLast] += this[kDecoder].write(chunk);
        list = this[kLast].split(this.matcher);
      }
      this[kLast] = list.pop();
      for (let i = 0; i < list.length; i++) {
        try {
          push(this, this.mapper(list[i]));
        } catch (error) {
          return cb(error);
        }
      }
      this.overflow = this[kLast].length > this.maxLength;
      if (this.overflow && !this.skipOverflow) {
        cb(new Error("maximum buffer reached"));
        return;
      }
      cb();
    }
    __name(transform, "transform");
    function flush(cb) {
      this[kLast] += this[kDecoder].end();
      if (this[kLast]) {
        try {
          push(this, this.mapper(this[kLast]));
        } catch (error) {
          return cb(error);
        }
      }
      cb();
    }
    __name(flush, "flush");
    function push(self, val) {
      if (val !== void 0) {
        self.push(val);
      }
    }
    __name(push, "push");
    function noop(incoming) {
      return incoming;
    }
    __name(noop, "noop");
    function split(matcher, mapper, options) {
      matcher = matcher || /\r?\n/;
      mapper = mapper || noop;
      options = options || {};
      switch (arguments.length) {
        case 1:
          if (typeof matcher === "function") {
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof matcher === "object" && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {
            options = matcher;
            matcher = /\r?\n/;
          }
          break;
        case 2:
          if (typeof matcher === "function") {
            options = mapper;
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof mapper === "object") {
            options = mapper;
            mapper = noop;
          }
      }
      options = Object.assign({}, options);
      options.autoDestroy = true;
      options.transform = transform;
      options.flush = flush;
      options.readableObjectMode = true;
      const stream = new Transform(options);
      stream[kLast] = "";
      stream[kDecoder] = new StringDecoder2("utf8");
      stream.matcher = matcher;
      stream.mapper = mapper;
      stream.maxLength = options.maxLength;
      stream.skipOverflow = options.skipOverflow || false;
      stream.overflow = false;
      stream._destroy = function(err, cb) {
        this._writableState.errorEmitted = false;
        cb(err);
      };
      return stream;
    }
    __name(split, "split");
    module.exports = split;
  }
});

// node_modules/pgpass/lib/helper.js
var require_helper = __commonJS({
  "node_modules/pgpass/lib/helper.js"(exports, module) {
    "use strict";
    init_shims();
    var path = (init_path(), __toCommonJS(path_exports));
    var Stream = (init_stream(), __toCommonJS(stream_exports)).Stream;
    var split = require_split2();
    var util = (init_util(), __toCommonJS(util_exports));
    var defaultPort = 5432;
    var isWin = process.platform === "win32";
    var warnStream = process.stderr;
    var S_IRWXG = 56;
    var S_IRWXO = 7;
    var S_IFMT = 61440;
    var S_IFREG = 32768;
    function isRegFile(mode) {
      return (mode & S_IFMT) == S_IFREG;
    }
    __name(isRegFile, "isRegFile");
    var fieldNames = ["host", "port", "database", "user", "password"];
    var nrOfFields = fieldNames.length;
    var passKey = fieldNames[nrOfFields - 1];
    function warn() {
      var isWritable = warnStream instanceof Stream && true === warnStream.writable;
      if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write(util.format.apply(util, args));
      }
    }
    __name(warn, "warn");
    Object.defineProperty(module.exports, "isWin", {
      get: /* @__PURE__ */ __name(function() {
        return isWin;
      }, "get"),
      set: /* @__PURE__ */ __name(function(val) {
        isWin = val;
      }, "set")
    });
    module.exports.warnTo = function(stream) {
      var old = warnStream;
      warnStream = stream;
      return old;
    };
    module.exports.getFileName = function(rawEnv) {
      var env = rawEnv || process.env;
      var file = env.PGPASSFILE || (isWin ? path.join(env.APPDATA || "./", "postgresql", "pgpass.conf") : path.join(env.HOME || "./", ".pgpass"));
      return file;
    };
    module.exports.usePgPass = function(stats, fname) {
      if (Object.prototype.hasOwnProperty.call(process.env, "PGPASSWORD")) {
        return false;
      }
      if (isWin) {
        return true;
      }
      fname = fname || "<unkn>";
      if (!isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
      }
      if (stats.mode & (S_IRWXG | S_IRWXO)) {
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
      }
      return true;
    };
    var matcher = module.exports.match = function(connInfo, entry) {
      return fieldNames.slice(0, -1).reduce(function(prev, field, idx) {
        if (idx == 1) {
          if (Number(connInfo[field] || defaultPort) === Number(entry[field])) {
            return prev && true;
          }
        }
        return prev && (entry[field] === "*" || entry[field] === connInfo[field]);
      }, true);
    };
    module.exports.getPassword = function(connInfo, stream, cb) {
      var pass;
      var lineStream = stream.pipe(split());
      function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
          pass = entry[passKey];
          lineStream.end();
        }
      }
      __name(onLine, "onLine");
      var onEnd = /* @__PURE__ */ __name(function() {
        stream.destroy();
        cb(pass);
      }, "onEnd");
      var onErr = /* @__PURE__ */ __name(function(err) {
        stream.destroy();
        warn("WARNING: error on reading file: %s", err);
        cb(void 0);
      }, "onErr");
      stream.on("error", onErr);
      lineStream.on("data", onLine).on("end", onEnd).on("error", onErr);
    };
    var parseLine = module.exports.parseLine = function(line) {
      if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
      }
      var curChar = "";
      var prevChar = "";
      var fieldIdx = 0;
      var startIdx = 0;
      var endIdx = 0;
      var obj = {};
      var isLastField = false;
      var addToObj = /* @__PURE__ */ __name(function(idx, i0, i1) {
        var field = line.substring(i0, i1);
        if (!Object.hasOwnProperty.call(process.env, "PGPASS_NO_DEESCAPE")) {
          field = field.replace(/\\([:\\])/g, "$1");
        }
        obj[fieldNames[idx]] = field;
      }, "addToObj");
      for (var i = 0; i < line.length - 1; i += 1) {
        curChar = line.charAt(i + 1);
        prevChar = line.charAt(i);
        isLastField = fieldIdx == nrOfFields - 1;
        if (isLastField) {
          addToObj(fieldIdx, startIdx);
          break;
        }
        if (i >= 0 && curChar == ":" && prevChar !== "\\") {
          addToObj(fieldIdx, startIdx, i + 1);
          startIdx = i + 2;
          fieldIdx += 1;
        }
      }
      obj = Object.keys(obj).length === nrOfFields ? obj : null;
      return obj;
    };
    var isValidEntry = module.exports.isValidEntry = function(entry) {
      var rules = {
        // host
        0: function(x) {
          return x.length > 0;
        },
        // port
        1: function(x) {
          if (x === "*") {
            return true;
          }
          x = Number(x);
          return isFinite(x) && x > 0 && x < 9007199254740992 && Math.floor(x) === x;
        },
        // database
        2: function(x) {
          return x.length > 0;
        },
        // username
        3: function(x) {
          return x.length > 0;
        },
        // password
        4: function(x) {
          return x.length > 0;
        }
      };
      for (var idx = 0; idx < fieldNames.length; idx += 1) {
        var rule = rules[idx];
        var value = entry[fieldNames[idx]] || "";
        var res = rule(value);
        if (!res) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/pgpass/lib/index.js
var require_lib = __commonJS({
  "node_modules/pgpass/lib/index.js"(exports, module) {
    "use strict";
    init_shims();
    var path = (init_path(), __toCommonJS(path_exports));
    var fs = (init_fs(), __toCommonJS(fs_exports));
    var helper = require_helper();
    module.exports = function(connInfo, cb) {
      var file = helper.getFileName();
      fs.stat(file, function(err, stat2) {
        if (err || !helper.usePgPass(stat2, file)) {
          return cb(void 0);
        }
        var st2 = fs.createReadStream(file);
        helper.getPassword(connInfo, st2, cb);
      });
    };
    module.exports.warnTo = helper.warnTo;
  }
});

// node_modules/pg/lib/type-overrides.js
var require_type_overrides = __commonJS({
  "node_modules/pg/lib/type-overrides.js"(exports, module) {
    "use strict";
    init_shims();
    var types2 = require_pg_types();
    function TypeOverrides2(userTypes) {
      this._types = userTypes || types2;
      this.text = {};
      this.binary = {};
    }
    __name(TypeOverrides2, "TypeOverrides");
    TypeOverrides2.prototype.getOverrides = function(format) {
      switch (format) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    };
    TypeOverrides2.prototype.setTypeParser = function(oid, format, parseFn) {
      if (typeof format === "function") {
        parseFn = format;
        format = "text";
      }
      this.getOverrides(format)[oid] = parseFn;
    };
    TypeOverrides2.prototype.getTypeParser = function(oid, format) {
      format = format || "text";
      return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format);
    };
    module.exports = TypeOverrides2;
  }
});

// shims/dns/index.ts
var dns_exports = {};
__export(dns_exports, {
  default: () => dns_default
});
var dns_default;
var init_dns = __esm({
  "shims/dns/index.ts"() {
    "use strict";
    init_shims();
    dns_default = {};
  }
});

// shims/url/index.ts
var url_exports = {};
__export(url_exports, {
  parse: () => parse
});
function parse(url, parseQueryString = false) {
  const { protocol } = new URL(url);
  const httpUrl = "http:" + url.substring(protocol.length);
  let {
    username,
    password,
    host,
    hostname,
    port,
    pathname,
    search,
    searchParams,
    hash
  } = new URL(httpUrl);
  password = decodeURIComponent(password);
  username = decodeURIComponent(username);
  pathname = decodeURIComponent(pathname);
  const auth = username + ":" + password;
  const query = parseQueryString ? Object.fromEntries(searchParams.entries()) : search;
  return {
    href: url,
    protocol,
    auth,
    username,
    password,
    host,
    hostname,
    port,
    pathname,
    search,
    query,
    hash
  };
}
var init_url = __esm({
  "shims/url/index.ts"() {
    "use strict";
    init_shims();
    __name(parse, "parse");
  }
});

// node_modules/pg-connection-string/index.js
var require_pg_connection_string = __commonJS({
  "node_modules/pg-connection-string/index.js"(exports, module) {
    "use strict";
    init_shims();
    var url = (init_url(), __toCommonJS(url_exports));
    var fs = (init_fs(), __toCommonJS(fs_exports));
    function parse2(str) {
      if (str.charAt(0) === "/") {
        var config = str.split(" ");
        return { host: config[0], database: config[1] };
      }
      var result = url.parse(
        / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str) ? encodeURI(str).replace(/\%25(\d\d)/g, "%$1") : str,
        true
      );
      var config = result.query;
      for (var k in config) {
        if (Array.isArray(config[k])) {
          config[k] = config[k][config[k].length - 1];
        }
      }
      var auth = (result.auth || ":").split(":");
      config.user = auth[0];
      config.password = auth.splice(1).join(":");
      config.port = result.port;
      if (result.protocol == "socket:") {
        config.host = decodeURI(result.pathname);
        config.database = result.query.db;
        config.client_encoding = result.query.encoding;
        return config;
      }
      if (!config.host) {
        config.host = result.hostname;
      }
      var pathname = result.pathname;
      if (!config.host && pathname && /^%2f/i.test(pathname)) {
        var pathnameSplit = pathname.split("/");
        config.host = decodeURIComponent(pathnameSplit[0]);
        pathname = pathnameSplit.splice(1).join("/");
      }
      if (pathname && pathname.charAt(0) === "/") {
        pathname = pathname.slice(1) || null;
      }
      config.database = pathname && decodeURI(pathname);
      if (config.ssl === "true" || config.ssl === "1") {
        config.ssl = true;
      }
      if (config.ssl === "0") {
        config.ssl = false;
      }
      if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
        config.ssl = {};
      }
      if (config.sslcert) {
        config.ssl.cert = fs.readFileSync(config.sslcert).toString();
      }
      if (config.sslkey) {
        config.ssl.key = fs.readFileSync(config.sslkey).toString();
      }
      if (config.sslrootcert) {
        config.ssl.ca = fs.readFileSync(config.sslrootcert).toString();
      }
      switch (config.sslmode) {
        case "disable": {
          config.ssl = false;
          break;
        }
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full": {
          break;
        }
        case "no-verify": {
          config.ssl.rejectUnauthorized = false;
          break;
        }
      }
      return config;
    }
    __name(parse2, "parse");
    module.exports = parse2;
    parse2.parse = parse2;
  }
});

// node_modules/pg/lib/connection-parameters.js
var require_connection_parameters = __commonJS({
  "node_modules/pg/lib/connection-parameters.js"(exports, module) {
    "use strict";
    init_shims();
    var dns = (init_dns(), __toCommonJS(dns_exports));
    var defaults2 = require_defaults();
    var parse2 = require_pg_connection_string().parse;
    var val = /* @__PURE__ */ __name(function(key, config, envVar) {
      if (envVar === void 0) {
        envVar = process.env["PG" + key.toUpperCase()];
      } else if (envVar === false) {
      } else {
        envVar = process.env[envVar];
      }
      return config[key] || envVar || defaults2[key];
    }, "val");
    var readSSLConfigFromEnvironment = /* @__PURE__ */ __name(function() {
      switch (process.env.PGSSLMODE) {
        case "disable":
          return false;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return true;
        case "no-verify":
          return { rejectUnauthorized: false };
      }
      return defaults2.ssl;
    }, "readSSLConfigFromEnvironment");
    var quoteParamValue = /* @__PURE__ */ __name(function(value) {
      return "'" + ("" + value).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quoteParamValue");
    var add = /* @__PURE__ */ __name(function(params, config, paramName) {
      var value = config[paramName];
      if (value !== void 0 && value !== null) {
        params.push(paramName + "=" + quoteParamValue(value));
      }
    }, "add");
    var ConnectionParameters2 = class {
      static {
        __name(this, "ConnectionParameters");
      }
      constructor(config) {
        config = typeof config === "string" ? parse2(config) : config || {};
        if (config.connectionString) {
          config = Object.assign({}, config, parse2(config.connectionString));
        }
        this.user = val("user", config);
        this.database = val("database", config);
        if (this.database === void 0) {
          this.database = this.user;
        }
        this.port = parseInt(val("port", config), 10);
        this.host = val("host", config);
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: val("password", config)
        });
        this.binary = val("binary", config);
        this.options = val("options", config);
        this.ssl = typeof config.ssl === "undefined" ? readSSLConfigFromEnvironment() : config.ssl;
        if (typeof this.ssl === "string") {
          if (this.ssl === "true") {
            this.ssl = true;
          }
        }
        if (this.ssl === "no-verify") {
          this.ssl = { rejectUnauthorized: false };
        }
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this.client_encoding = val("client_encoding", config);
        this.replication = val("replication", config);
        this.isDomainSocket = !(this.host || "").indexOf("/");
        this.application_name = val("application_name", config, "PGAPPNAME");
        this.fallback_application_name = val("fallback_application_name", config, false);
        this.statement_timeout = val("statement_timeout", config, false);
        this.lock_timeout = val("lock_timeout", config, false);
        this.idle_in_transaction_session_timeout = val("idle_in_transaction_session_timeout", config, false);
        this.query_timeout = val("query_timeout", config, false);
        if (config.connectionTimeoutMillis === void 0) {
          this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0;
        } else {
          this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1e3);
        }
        if (config.keepAlive === false) {
          this.keepalives = 0;
        } else if (config.keepAlive === true) {
          this.keepalives = 1;
        }
        if (typeof config.keepAliveInitialDelayMillis === "number") {
          this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1e3);
        }
      }
      getLibpqConnectionString(cb) {
        var params = [];
        add(params, this, "user");
        add(params, this, "password");
        add(params, this, "port");
        add(params, this, "application_name");
        add(params, this, "fallback_application_name");
        add(params, this, "connect_timeout");
        add(params, this, "options");
        var ssl = typeof this.ssl === "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        add(params, ssl, "sslmode");
        add(params, ssl, "sslca");
        add(params, ssl, "sslkey");
        add(params, ssl, "sslcert");
        add(params, ssl, "sslrootcert");
        if (this.database) {
          params.push("dbname=" + quoteParamValue(this.database));
        }
        if (this.replication) {
          params.push("replication=" + quoteParamValue(this.replication));
        }
        if (this.host) {
          params.push("host=" + quoteParamValue(this.host));
        }
        if (this.isDomainSocket) {
          return cb(null, params.join(" "));
        }
        if (this.client_encoding) {
          params.push("client_encoding=" + quoteParamValue(this.client_encoding));
        }
        dns.lookup(this.host, function(err, address) {
          if (err) return cb(err, null);
          params.push("hostaddr=" + quoteParamValue(address));
          return cb(null, params.join(" "));
        });
      }
    };
    module.exports = ConnectionParameters2;
  }
});

// node_modules/pg/lib/result.js
var require_result = __commonJS({
  "node_modules/pg/lib/result.js"(exports, module) {
    "use strict";
    init_shims();
    var types2 = require_pg_types();
    var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/;
    var Result = class {
      static {
        __name(this, "Result");
      }
      constructor(rowMode, types3) {
        this.command = null;
        this.rowCount = null;
        this.oid = null;
        this.rows = [];
        this.fields = [];
        this._parsers = void 0;
        this._types = types3;
        this.RowCtor = null;
        this.rowAsArray = rowMode === "array";
        if (this.rowAsArray) {
          this.parseRow = this._parseRowAsArray;
        }
      }
      // adds a command complete message
      addCommandComplete(msg) {
        var match;
        if (msg.text) {
          match = matchRegexp.exec(msg.text);
        } else {
          match = matchRegexp.exec(msg.command);
        }
        if (match) {
          this.command = match[1];
          if (match[3]) {
            this.oid = parseInt(match[2], 10);
            this.rowCount = parseInt(match[3], 10);
          } else if (match[2]) {
            this.rowCount = parseInt(match[2], 10);
          }
        }
      }
      _parseRowAsArray(rowData) {
        var row = new Array(rowData.length);
        for (var i = 0, len = rowData.length; i < len; i++) {
          var rawValue = rowData[i];
          if (rawValue !== null) {
            row[i] = this._parsers[i](rawValue);
          } else {
            row[i] = null;
          }
        }
        return row;
      }
      parseRow(rowData) {
        var row = {};
        for (var i = 0, len = rowData.length; i < len; i++) {
          var rawValue = rowData[i];
          var field = this.fields[i].name;
          if (rawValue !== null) {
            row[field] = this._parsers[i](rawValue);
          } else {
            row[field] = null;
          }
        }
        return row;
      }
      addRow(row) {
        this.rows.push(row);
      }
      addFields(fieldDescriptions) {
        this.fields = fieldDescriptions;
        if (this.fields.length) {
          this._parsers = new Array(fieldDescriptions.length);
        }
        for (var i = 0; i < fieldDescriptions.length; i++) {
          var desc = fieldDescriptions[i];
          if (this._types) {
            this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || "text");
          } else {
            this._parsers[i] = types2.getTypeParser(desc.dataTypeID, desc.format || "text");
          }
        }
      }
    };
    module.exports = Result;
  }
});

// node_modules/pg/lib/query.js
var require_query = __commonJS({
  "node_modules/pg/lib/query.js"(exports, module) {
    "use strict";
    init_shims();
    var { EventEmitter: EventEmitter2 } = require_events();
    var Result = require_result();
    var utils = require_utils();
    var Query2 = class extends EventEmitter2 {
      static {
        __name(this, "Query");
      }
      constructor(config, values, callback) {
        super();
        config = utils.normalizeQueryConfig(config, values, callback);
        this.text = config.text;
        this.values = config.values;
        this.rows = config.rows;
        this.types = config.types;
        this.name = config.name;
        this.binary = config.binary;
        this.portal = config.portal || "";
        this.callback = config.callback;
        this._rowMode = config.rowMode;
        if (process.domain && config.callback) {
          this.callback = process.domain.bind(config.callback);
        }
        this._result = new Result(this._rowMode, this.types);
        this._results = this._result;
        this.isPreparedStatement = false;
        this._canceledDueToError = false;
        this._promise = null;
      }
      requiresPreparation() {
        if (this.name) {
          return true;
        }
        if (this.rows) {
          return true;
        }
        if (!this.text) {
          return false;
        }
        if (!this.values) {
          return false;
        }
        return this.values.length > 0;
      }
      _checkForMultirow() {
        if (this._result.command) {
          if (!Array.isArray(this._results)) {
            this._results = [this._result];
          }
          this._result = new Result(this._rowMode, this.types);
          this._results.push(this._result);
        }
      }
      // associates row metadata from the supplied
      // message with this query object
      // metadata used when parsing row results
      handleRowDescription(msg) {
        this._checkForMultirow();
        this._result.addFields(msg.fields);
        this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(msg) {
        let row;
        if (this._canceledDueToError) {
          return;
        }
        try {
          row = this._result.parseRow(msg.fields);
        } catch (err) {
          this._canceledDueToError = err;
          return;
        }
        this.emit("row", row, this._result);
        if (this._accumulateRows) {
          this._result.addRow(row);
        }
      }
      handleCommandComplete(msg, connection) {
        this._checkForMultirow();
        this._result.addCommandComplete(msg);
        if (this.rows) {
          connection.sync();
        }
      }
      // if a named prepared statement is created with empty query text
      // the backend will send an emptyQuery message but *not* a command complete message
      // since we pipeline sync immediately after execute we don't need to do anything here
      // unless we have rows specified, in which case we did not pipeline the intial sync call
      handleEmptyQuery(connection) {
        if (this.rows) {
          connection.sync();
        }
      }
      handleError(err, connection) {
        if (this._canceledDueToError) {
          err = this._canceledDueToError;
          this._canceledDueToError = false;
        }
        if (this.callback) {
          return this.callback(err);
        }
        this.emit("error", err);
      }
      handleReadyForQuery(con) {
        if (this._canceledDueToError) {
          return this.handleError(this._canceledDueToError, con);
        }
        if (this.callback) {
          try {
            this.callback(null, this._results);
          } catch (err) {
            process.nextTick(() => {
              throw err;
            });
          }
        }
        this.emit("end", this._results);
      }
      submit(connection) {
        if (typeof this.text !== "string" && typeof this.name !== "string") {
          return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        }
        const previous = connection.parsedStatements[this.name];
        if (this.text && previous && this.text !== previous) {
          return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        }
        if (this.values && !Array.isArray(this.values)) {
          return new Error("Query values must be an array");
        }
        if (this.requiresPreparation()) {
          this.prepare(connection);
        } else {
          connection.query(this.text);
        }
        return null;
      }
      hasBeenParsed(connection) {
        return this.name && connection.parsedStatements[this.name];
      }
      handlePortalSuspended(connection) {
        this._getRows(connection, this.rows);
      }
      _getRows(connection, rows) {
        connection.execute({
          portal: this.portal,
          rows
        });
        if (!rows) {
          connection.sync();
        } else {
          connection.flush();
        }
      }
      // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
      prepare(connection) {
        this.isPreparedStatement = true;
        if (!this.hasBeenParsed(connection)) {
          connection.parse({
            text: this.text,
            name: this.name,
            types: this.types
          });
        }
        try {
          connection.bind({
            portal: this.portal,
            statement: this.name,
            values: this.values,
            binary: this.binary,
            valueMapper: utils.prepareValue
          });
        } catch (err) {
          this.handleError(err, connection);
          return;
        }
        connection.describe({
          type: "P",
          name: this.portal || ""
        });
        this._getRows(connection, this.rows);
      }
      handleCopyInResponse(connection) {
        connection.sendCopyFail("No source stream defined");
      }
      // eslint-disable-next-line no-unused-vars
      handleCopyData(msg, connection) {
      }
    };
    module.exports = Query2;
  }
});

// shims/net/index.ts
var net_exports = {};
__export(net_exports, {
  Socket: () => Socket,
  isIP: () => isIP
});
function hexDump(data) {
  return `${data.length} bytes` + data.reduce(
    (memo, byte) => memo + " " + byte.toString(16).padStart(2, "0"),
    "\nhex:"
  ) + "\nstr: " + new TextDecoder().decode(data);
}
function log(...args) {
  console.log(
    ...args.map(
      (arg) => arg instanceof Uint8Array ? hexDump(arg) : arg instanceof ArrayBuffer ? hexDump(new Uint8Array(arg)) : arg
    )
  );
}
function isIP(input) {
  return 0;
}
var import_events, FIRST_WORD_REGEX, Socket;
var init_net = __esm({
  "shims/net/index.ts"() {
    "use strict";
    init_shims();
    import_events = __toESM(require_events(), 1);
    __name(hexDump, "hexDump");
    __name(log, "log");
    __name(isIP, "isIP");
    FIRST_WORD_REGEX = /^[^.]+\./;
    Socket = class _Socket extends import_events.EventEmitter {
      static {
        __name(this, "Socket");
      }
      static defaults = {
        // these options relate to the fetch transport and take effect *only* when set globally
        poolQueryViaFetch: false,
        fetchEndpoint: /* @__PURE__ */ __name((host, _port, options) => {
          let newHost;
          if (options?.jwtAuth) {
            newHost = host.replace(FIRST_WORD_REGEX, "apiauth.");
          } else {
            newHost = host.replace(FIRST_WORD_REGEX, "api.");
          }
          return "https://" + newHost + "/sql";
        }, "fetchEndpoint"),
        fetchConnectionCache: true,
        fetchFunction: void 0,
        // these options relate to the WebSocket transport
        webSocketConstructor: void 0,
        wsProxy: /* @__PURE__ */ __name((host) => host + "/v2", "wsProxy"),
        useSecureWebSocket: true,
        forceDisablePgSSL: true,
        coalesceWrites: true,
        pipelineConnect: "password",
        // these options apply only to Postgres-native TLS over WebSockets (when forceDisablePgSSL === false)
        subtls: void 0,
        rootCerts: "",
        pipelineTLS: false,
        disableSNI: false
      };
      static opts = {};
      opts = {};
      static get poolQueryViaFetch() {
        return _Socket.opts.poolQueryViaFetch ?? _Socket.defaults.poolQueryViaFetch;
      }
      static set poolQueryViaFetch(newValue) {
        _Socket.opts.poolQueryViaFetch = newValue;
      }
      static get fetchEndpoint() {
        return _Socket.opts.fetchEndpoint ?? _Socket.defaults.fetchEndpoint;
      }
      static set fetchEndpoint(newValue) {
        _Socket.opts.fetchEndpoint = newValue;
      }
      static get fetchConnectionCache() {
        return true;
      }
      static set fetchConnectionCache(newValue) {
        console.warn(
          "The `fetchConnectionCache` option is deprecated (now always `true`)"
        );
      }
      static get fetchFunction() {
        return _Socket.opts.fetchFunction ?? _Socket.defaults.fetchFunction;
      }
      static set fetchFunction(newValue) {
        _Socket.opts.fetchFunction = newValue;
      }
      static get webSocketConstructor() {
        return _Socket.opts.webSocketConstructor ?? _Socket.defaults.webSocketConstructor;
      }
      static set webSocketConstructor(newValue) {
        _Socket.opts.webSocketConstructor = newValue;
      }
      get webSocketConstructor() {
        return this.opts.webSocketConstructor ?? _Socket.webSocketConstructor;
      }
      set webSocketConstructor(newValue) {
        this.opts.webSocketConstructor = newValue;
      }
      static get wsProxy() {
        return _Socket.opts.wsProxy ?? _Socket.defaults.wsProxy;
      }
      static set wsProxy(newValue) {
        _Socket.opts.wsProxy = newValue;
      }
      get wsProxy() {
        return this.opts.wsProxy ?? _Socket.wsProxy;
      }
      set wsProxy(newValue) {
        this.opts.wsProxy = newValue;
      }
      static get coalesceWrites() {
        return _Socket.opts.coalesceWrites ?? _Socket.defaults.coalesceWrites;
      }
      static set coalesceWrites(newValue) {
        _Socket.opts.coalesceWrites = newValue;
      }
      get coalesceWrites() {
        return this.opts.coalesceWrites ?? _Socket.coalesceWrites;
      }
      set coalesceWrites(newValue) {
        this.opts.coalesceWrites = newValue;
      }
      static get useSecureWebSocket() {
        return _Socket.opts.useSecureWebSocket ?? _Socket.defaults.useSecureWebSocket;
      }
      static set useSecureWebSocket(newValue) {
        _Socket.opts.useSecureWebSocket = newValue;
      }
      get useSecureWebSocket() {
        return this.opts.useSecureWebSocket ?? _Socket.useSecureWebSocket;
      }
      set useSecureWebSocket(newValue) {
        this.opts.useSecureWebSocket = newValue;
      }
      static get forceDisablePgSSL() {
        return _Socket.opts.forceDisablePgSSL ?? _Socket.defaults.forceDisablePgSSL;
      }
      static set forceDisablePgSSL(newValue) {
        _Socket.opts.forceDisablePgSSL = newValue;
      }
      get forceDisablePgSSL() {
        return this.opts.forceDisablePgSSL ?? _Socket.forceDisablePgSSL;
      }
      set forceDisablePgSSL(newValue) {
        this.opts.forceDisablePgSSL = newValue;
      }
      static get disableSNI() {
        return _Socket.opts.disableSNI ?? _Socket.defaults.disableSNI;
      }
      static set disableSNI(newValue) {
        _Socket.opts.disableSNI = newValue;
      }
      get disableSNI() {
        return this.opts.disableSNI ?? _Socket.disableSNI;
      }
      set disableSNI(newValue) {
        this.opts.disableSNI = newValue;
      }
      static get pipelineConnect() {
        return _Socket.opts.pipelineConnect ?? _Socket.defaults.pipelineConnect;
      }
      static set pipelineConnect(newValue) {
        _Socket.opts.pipelineConnect = newValue;
      }
      get pipelineConnect() {
        return this.opts.pipelineConnect ?? _Socket.pipelineConnect;
      }
      set pipelineConnect(newValue) {
        this.opts.pipelineConnect = newValue;
      }
      static get subtls() {
        return _Socket.opts.subtls ?? _Socket.defaults.subtls;
      }
      static set subtls(newValue) {
        _Socket.opts.subtls = newValue;
      }
      get subtls() {
        return this.opts.subtls ?? _Socket.subtls;
      }
      set subtls(newValue) {
        this.opts.subtls = newValue;
      }
      static get pipelineTLS() {
        return _Socket.opts.pipelineTLS ?? _Socket.defaults.pipelineTLS;
      }
      static set pipelineTLS(newValue) {
        _Socket.opts.pipelineTLS = newValue;
      }
      get pipelineTLS() {
        return this.opts.pipelineTLS ?? _Socket.pipelineTLS;
      }
      set pipelineTLS(newValue) {
        this.opts.pipelineTLS = newValue;
      }
      static get rootCerts() {
        return _Socket.opts.rootCerts ?? _Socket.defaults.rootCerts;
      }
      static set rootCerts(newValue) {
        _Socket.opts.rootCerts = newValue;
      }
      get rootCerts() {
        return this.opts.rootCerts ?? _Socket.rootCerts;
      }
      set rootCerts(newValue) {
        this.opts.rootCerts = newValue;
      }
      wsProxyAddrForHost(host, port) {
        const wsProxy = this.wsProxy;
        if (wsProxy === void 0) {
          throw new Error(
            `No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string`
          );
        }
        return typeof wsProxy === "function" ? wsProxy(host, port) : `${wsProxy}?address=${host}:${port}`;
      }
      connecting = false;
      pending = true;
      writable = true;
      encrypted = false;
      authorized = false;
      destroyed = false;
      ws = null;
      writeBuffer;
      // used only if coalesceWrites === true
      tlsState = 0 /* None */;
      tlsRead;
      tlsWrite;
      setNoDelay() {
        log("setNoDelay (no-op)");
        return this;
      }
      setKeepAlive() {
        log("setKeepAlive (no-op)");
        return this;
      }
      ref() {
        log("ref (no-op)");
        return this;
      }
      unref() {
        log("unref (no-op)");
        return this;
      }
      connect(port, host, connectListener) {
        this.connecting = true;
        if (connectListener) this.once("connect", connectListener);
        const handleWebSocketOpen = /* @__PURE__ */ __name(() => {
          log("socket ready");
          this.connecting = false;
          this.pending = false;
          this.emit("connect");
          this.emit("ready");
        }, "handleWebSocketOpen");
        const configureWebSocket = /* @__PURE__ */ __name((ws, immediateOpen = false) => {
          ws.binaryType = "arraybuffer";
          ws.addEventListener("error", (err) => {
            log("websocket error", err);
            this.emit("error", err);
            this.emit("close");
          });
          ws.addEventListener("message", (msg) => {
            log("socket received:", msg.data);
            if (this.tlsState === 0 /* None */) {
              log("emitting received data");
              const buffer = Buffer2.from(msg.data);
              this.emit("data", buffer);
            }
          });
          ws.addEventListener("close", () => {
            log("websocket closed");
            this.emit("close");
          });
          if (immediateOpen) handleWebSocketOpen();
          else ws.addEventListener("open", handleWebSocketOpen);
        }, "configureWebSocket");
        let wsAddr;
        try {
          wsAddr = this.wsProxyAddrForHost(
            host,
            typeof port === "string" ? parseInt(port, 10) : port
          );
        } catch (err) {
          this.emit("error", err);
          this.emit("close");
          return;
        }
        try {
          const wsProtocol = this.useSecureWebSocket ? "wss:" : "ws:";
          const wsAddrFull = wsProtocol + "//" + wsAddr;
          if (this.webSocketConstructor !== void 0) {
            this.ws = new this.webSocketConstructor(wsAddrFull);
            configureWebSocket(this.ws);
          } else {
            try {
              this.ws = new WebSocket(wsAddrFull);
              configureWebSocket(this.ws);
            } catch (err) {
              log("new WebSocket() failed");
              this.ws = new __unstable_WebSocket(wsAddrFull);
              configureWebSocket(this.ws);
            }
          }
        } catch (err) {
          log("WebSocket constructors failed");
          const wsProtocol = this.useSecureWebSocket ? "https:" : "http:";
          const fetchAddrFull = wsProtocol + "//" + wsAddr;
          fetch(fetchAddrFull, { headers: { Upgrade: "websocket" } }).then((resp) => {
            this.ws = resp.webSocket;
            if (this.ws == null) throw err;
            this.ws.accept();
            configureWebSocket(this.ws, true);
            log("Cloudflare WebSocket opened");
          }).catch((err2) => {
            log(`fetch() with { Upgrade: "websocket" } failed`);
            this.emit(
              "error",
              new Error(
                `All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${err2.message}`
              )
            );
            this.emit("close");
          });
        }
      }
      async startTls(host) {
        log("starting TLS");
        if (this.subtls === void 0)
          throw new Error(
            "For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information."
          );
        this.tlsState = 1 /* Handshake */;
        const rootCerts = this.subtls.TrustedCert.fromPEM(this.rootCerts);
        const readQueue = new this.subtls.WebSocketReadQueue(this.ws);
        const networkRead = readQueue.read.bind(readQueue);
        const networkWrite = this.rawWrite.bind(this);
        const [tlsRead, tlsWrite] = await this.subtls.startTls(
          host,
          rootCerts,
          networkRead,
          networkWrite,
          {
            useSNI: !this.disableSNI,
            expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0
            // expect (and discard) an 'S' before the TLS response if pipelineTLS is set
          }
        );
        this.tlsRead = tlsRead;
        this.tlsWrite = tlsWrite;
        log("TLS connection established");
        this.tlsState = 2 /* Established */;
        this.encrypted = true;
        this.authorized = true;
        this.emit("secureConnection", this);
        this.tlsReadLoop();
      }
      async tlsReadLoop() {
        while (true) {
          log("awaiting TLS data ...");
          const data = await this.tlsRead();
          if (data === void 0) {
            log("no TLS data, breaking loop");
            break;
          } else {
            log("emitting decrypted TLS data:", data);
            const buffer = Buffer2.from(data);
            this.emit("data", buffer);
          }
        }
      }
      rawWrite(data) {
        if (!this.coalesceWrites) {
          this.ws.send(data);
          return;
        }
        if (this.writeBuffer === void 0) {
          this.writeBuffer = data;
          setTimeout(() => {
            this.ws.send(this.writeBuffer);
            this.writeBuffer = void 0;
          }, 0);
        } else {
          const newBuffer = new Uint8Array(this.writeBuffer.length + data.length);
          newBuffer.set(this.writeBuffer);
          newBuffer.set(data, this.writeBuffer.length);
          this.writeBuffer = newBuffer;
        }
      }
      write(data, encoding = "utf8", callback = (err) => {
      }) {
        if (data.length === 0) {
          callback();
          return true;
        }
        if (typeof data === "string")
          data = Buffer2.from(data, encoding);
        if (this.tlsState === 0 /* None */) {
          log("sending data direct:", data);
          this.rawWrite(data);
          callback();
        } else if (this.tlsState === 1 /* Handshake */) {
          log("TLS handshake in progress, queueing data:", data);
          this.once("secureConnection", () => {
            this.write(data, encoding, callback);
          });
        } else {
          log("encrypting data:", data);
          this.tlsWrite(data);
          callback();
        }
        return true;
      }
      end(data = Buffer2.alloc(0), encoding = "utf8", callback = () => {
      }) {
        log("ending socket");
        this.write(data, encoding, () => {
          this.ws.close();
          callback();
        });
        return this;
      }
      destroy() {
        this.destroyed = true;
        return this.end();
      }
    };
  }
});

// node_modules/pg-protocol/dist/messages.js
var require_messages = __commonJS({
  "node_modules/pg-protocol/dist/messages.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
    exports.parseComplete = {
      name: "parseComplete",
      length: 5
    };
    exports.bindComplete = {
      name: "bindComplete",
      length: 5
    };
    exports.closeComplete = {
      name: "closeComplete",
      length: 5
    };
    exports.noData = {
      name: "noData",
      length: 5
    };
    exports.portalSuspended = {
      name: "portalSuspended",
      length: 5
    };
    exports.replicationStart = {
      name: "replicationStart",
      length: 4
    };
    exports.emptyQuery = {
      name: "emptyQuery",
      length: 4
    };
    exports.copyDone = {
      name: "copyDone",
      length: 4
    };
    var DatabaseError2 = class extends Error {
      static {
        __name(this, "DatabaseError");
      }
      constructor(message, length, name) {
        super(message);
        this.length = length;
        this.name = name;
      }
    };
    exports.DatabaseError = DatabaseError2;
    var CopyDataMessage = class {
      static {
        __name(this, "CopyDataMessage");
      }
      constructor(length, chunk) {
        this.length = length;
        this.chunk = chunk;
        this.name = "copyData";
      }
    };
    exports.CopyDataMessage = CopyDataMessage;
    var CopyResponse = class {
      static {
        __name(this, "CopyResponse");
      }
      constructor(length, name, binary, columnCount) {
        this.length = length;
        this.name = name;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
      }
    };
    exports.CopyResponse = CopyResponse;
    var Field = class {
      static {
        __name(this, "Field");
      }
      constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format) {
        this.name = name;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
      }
    };
    exports.Field = Field;
    var RowDescriptionMessage = class {
      static {
        __name(this, "RowDescriptionMessage");
      }
      constructor(length, fieldCount) {
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = "rowDescription";
        this.fields = new Array(this.fieldCount);
      }
    };
    exports.RowDescriptionMessage = RowDescriptionMessage;
    var ParameterDescriptionMessage = class {
      static {
        __name(this, "ParameterDescriptionMessage");
      }
      constructor(length, parameterCount) {
        this.length = length;
        this.parameterCount = parameterCount;
        this.name = "parameterDescription";
        this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
    var ParameterStatusMessage = class {
      static {
        __name(this, "ParameterStatusMessage");
      }
      constructor(length, parameterName, parameterValue) {
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = "parameterStatus";
      }
    };
    exports.ParameterStatusMessage = ParameterStatusMessage;
    var AuthenticationMD5Password = class {
      static {
        __name(this, "AuthenticationMD5Password");
      }
      constructor(length, salt) {
        this.length = length;
        this.salt = salt;
        this.name = "authenticationMD5Password";
      }
    };
    exports.AuthenticationMD5Password = AuthenticationMD5Password;
    var BackendKeyDataMessage = class {
      static {
        __name(this, "BackendKeyDataMessage");
      }
      constructor(length, processID, secretKey) {
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = "backendKeyData";
      }
    };
    exports.BackendKeyDataMessage = BackendKeyDataMessage;
    var NotificationResponseMessage = class {
      static {
        __name(this, "NotificationResponseMessage");
      }
      constructor(length, processId, channel, payload) {
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = "notification";
      }
    };
    exports.NotificationResponseMessage = NotificationResponseMessage;
    var ReadyForQueryMessage = class {
      static {
        __name(this, "ReadyForQueryMessage");
      }
      constructor(length, status) {
        this.length = length;
        this.status = status;
        this.name = "readyForQuery";
      }
    };
    exports.ReadyForQueryMessage = ReadyForQueryMessage;
    var CommandCompleteMessage = class {
      static {
        __name(this, "CommandCompleteMessage");
      }
      constructor(length, text) {
        this.length = length;
        this.text = text;
        this.name = "commandComplete";
      }
    };
    exports.CommandCompleteMessage = CommandCompleteMessage;
    var DataRowMessage = class {
      static {
        __name(this, "DataRowMessage");
      }
      constructor(length, fields) {
        this.length = length;
        this.fields = fields;
        this.name = "dataRow";
        this.fieldCount = fields.length;
      }
    };
    exports.DataRowMessage = DataRowMessage;
    var NoticeMessage = class {
      static {
        __name(this, "NoticeMessage");
      }
      constructor(length, message) {
        this.length = length;
        this.message = message;
        this.name = "notice";
      }
    };
    exports.NoticeMessage = NoticeMessage;
  }
});

// node_modules/pg-protocol/dist/buffer-writer.js
var require_buffer_writer = __commonJS({
  "node_modules/pg-protocol/dist/buffer-writer.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Writer = void 0;
    var Writer = class {
      static {
        __name(this, "Writer");
      }
      constructor(size = 256) {
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer2.allocUnsafe(size);
      }
      ensure(size) {
        var remaining = this.buffer.length - this.offset;
        if (remaining < size) {
          var oldBuffer = this.buffer;
          var newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
          this.buffer = Buffer2.allocUnsafe(newSize);
          oldBuffer.copy(this.buffer);
        }
      }
      addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = num >>> 24 & 255;
        this.buffer[this.offset++] = num >>> 16 & 255;
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addCString(string) {
        if (!string) {
          this.ensure(1);
        } else {
          var len = Buffer2.byteLength(string);
          this.ensure(len + 1);
          this.buffer.write(string, this.offset, "utf-8");
          this.offset += len;
        }
        this.buffer[this.offset++] = 0;
        return this;
      }
      addString(string = "") {
        var len = Buffer2.byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
      }
      add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
      }
      join(code) {
        if (code) {
          this.buffer[this.headerPosition] = code;
          const length = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
      }
      flush(code) {
        var result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer2.allocUnsafe(this.size);
        return result;
      }
    };
    exports.Writer = Writer;
  }
});

// node_modules/pg-protocol/dist/serializer.js
var require_serializer = __commonJS({
  "node_modules/pg-protocol/dist/serializer.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = void 0;
    var buffer_writer_1 = require_buffer_writer();
    var writer = new buffer_writer_1.Writer();
    var startup = /* @__PURE__ */ __name((opts) => {
      writer.addInt16(3).addInt16(0);
      for (const key of Object.keys(opts)) {
        writer.addCString(key).addCString(opts[key]);
      }
      writer.addCString("client_encoding").addCString("UTF8");
      var bodyBuffer = writer.addCString("").flush();
      var length = bodyBuffer.length + 4;
      return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
    }, "startup");
    var requestSsl = /* @__PURE__ */ __name(() => {
      const response = Buffer2.allocUnsafe(8);
      response.writeInt32BE(8, 0);
      response.writeInt32BE(80877103, 4);
      return response;
    }, "requestSsl");
    var password = /* @__PURE__ */ __name((password2) => {
      return writer.addCString(password2).flush(
        112
        /* code.startup */
      );
    }, "password");
    var sendSASLInitialResponseMessage = /* @__PURE__ */ __name(function(mechanism, initialResponse) {
      writer.addCString(mechanism).addInt32(Buffer2.byteLength(initialResponse)).addString(initialResponse);
      return writer.flush(
        112
        /* code.startup */
      );
    }, "sendSASLInitialResponseMessage");
    var sendSCRAMClientFinalMessage = /* @__PURE__ */ __name(function(additionalData) {
      return writer.addString(additionalData).flush(
        112
        /* code.startup */
      );
    }, "sendSCRAMClientFinalMessage");
    var query = /* @__PURE__ */ __name((text) => {
      return writer.addCString(text).flush(
        81
        /* code.query */
      );
    }, "query");
    var emptyArray = [];
    var parse2 = /* @__PURE__ */ __name((query2) => {
      const name = query2.name || "";
      if (name.length > 63) {
        console.error("Warning! Postgres only supports 63 characters for query names.");
        console.error("You supplied %s (%s)", name, name.length);
        console.error("This can cause conflicts and silent errors executing queries");
      }
      const types2 = query2.types || emptyArray;
      var len = types2.length;
      var buffer = writer.addCString(name).addCString(query2.text).addInt16(len);
      for (var i = 0; i < len; i++) {
        buffer.addInt32(types2[i]);
      }
      return writer.flush(
        80
        /* code.parse */
      );
    }, "parse");
    var paramWriter = new buffer_writer_1.Writer();
    var writeValues = /* @__PURE__ */ __name(function(values, valueMapper) {
      for (let i = 0; i < values.length; i++) {
        const mappedVal = valueMapper ? valueMapper(values[i], i) : values[i];
        if (mappedVal == null) {
          writer.addInt16(
            0
            /* ParamType.STRING */
          );
          paramWriter.addInt32(-1);
        } else if (mappedVal instanceof Buffer2) {
          writer.addInt16(
            1
            /* ParamType.BINARY */
          );
          paramWriter.addInt32(mappedVal.length);
          paramWriter.add(mappedVal);
        } else {
          writer.addInt16(
            0
            /* ParamType.STRING */
          );
          paramWriter.addInt32(Buffer2.byteLength(mappedVal));
          paramWriter.addString(mappedVal);
        }
      }
    }, "writeValues");
    var bind = /* @__PURE__ */ __name((config = {}) => {
      const portal = config.portal || "";
      const statement = config.statement || "";
      const binary = config.binary || false;
      const values = config.values || emptyArray;
      const len = values.length;
      writer.addCString(portal).addCString(statement);
      writer.addInt16(len);
      writeValues(values, config.valueMapper);
      writer.addInt16(len);
      writer.add(paramWriter.flush());
      writer.addInt16(
        binary ? 1 : 0
        /* ParamType.STRING */
      );
      return writer.flush(
        66
        /* code.bind */
      );
    }, "bind");
    var emptyExecute = Buffer2.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
    var execute = /* @__PURE__ */ __name((config) => {
      if (!config || !config.portal && !config.rows) {
        return emptyExecute;
      }
      const portal = config.portal || "";
      const rows = config.rows || 0;
      const portalLength = Buffer2.byteLength(portal);
      const len = 4 + portalLength + 1 + 4;
      const buff = Buffer2.allocUnsafe(1 + len);
      buff[0] = 69;
      buff.writeInt32BE(len, 1);
      buff.write(portal, 5, "utf-8");
      buff[portalLength + 5] = 0;
      buff.writeUInt32BE(rows, buff.length - 4);
      return buff;
    }, "execute");
    var cancel = /* @__PURE__ */ __name((processID, secretKey) => {
      const buffer = Buffer2.allocUnsafe(16);
      buffer.writeInt32BE(16, 0);
      buffer.writeInt16BE(1234, 4);
      buffer.writeInt16BE(5678, 6);
      buffer.writeInt32BE(processID, 8);
      buffer.writeInt32BE(secretKey, 12);
      return buffer;
    }, "cancel");
    var cstringMessage = /* @__PURE__ */ __name((code, string) => {
      const stringLen = Buffer2.byteLength(string);
      const len = 4 + stringLen + 1;
      const buffer = Buffer2.allocUnsafe(1 + len);
      buffer[0] = code;
      buffer.writeInt32BE(len, 1);
      buffer.write(string, 5, "utf-8");
      buffer[len] = 0;
      return buffer;
    }, "cstringMessage");
    var emptyDescribePortal = writer.addCString("P").flush(
      68
      /* code.describe */
    );
    var emptyDescribeStatement = writer.addCString("S").flush(
      68
      /* code.describe */
    );
    var describe = /* @__PURE__ */ __name((msg) => {
      return msg.name ? cstringMessage(68, `${msg.type}${msg.name || ""}`) : msg.type === "P" ? emptyDescribePortal : emptyDescribeStatement;
    }, "describe");
    var close = /* @__PURE__ */ __name((msg) => {
      const text = `${msg.type}${msg.name || ""}`;
      return cstringMessage(67, text);
    }, "close");
    var copyData = /* @__PURE__ */ __name((chunk) => {
      return writer.add(chunk).flush(
        100
        /* code.copyFromChunk */
      );
    }, "copyData");
    var copyFail = /* @__PURE__ */ __name((message) => {
      return cstringMessage(102, message);
    }, "copyFail");
    var codeOnlyBuffer = /* @__PURE__ */ __name((code) => Buffer2.from([code, 0, 0, 0, 4]), "codeOnlyBuffer");
    var flushBuffer = codeOnlyBuffer(
      72
      /* code.flush */
    );
    var syncBuffer = codeOnlyBuffer(
      83
      /* code.sync */
    );
    var endBuffer = codeOnlyBuffer(
      88
      /* code.end */
    );
    var copyDoneBuffer = codeOnlyBuffer(
      99
      /* code.copyDone */
    );
    var serialize = {
      startup,
      password,
      requestSsl,
      sendSASLInitialResponseMessage,
      sendSCRAMClientFinalMessage,
      query,
      parse: parse2,
      bind,
      execute,
      describe,
      close,
      flush: /* @__PURE__ */ __name(() => flushBuffer, "flush"),
      sync: /* @__PURE__ */ __name(() => syncBuffer, "sync"),
      end: /* @__PURE__ */ __name(() => endBuffer, "end"),
      copyData,
      copyDone: /* @__PURE__ */ __name(() => copyDoneBuffer, "copyDone"),
      copyFail,
      cancel
    };
    exports.serialize = serialize;
  }
});

// node_modules/pg-protocol/dist/buffer-reader.js
var require_buffer_reader = __commonJS({
  "node_modules/pg-protocol/dist/buffer-reader.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferReader = void 0;
    var emptyBuffer = Buffer2.allocUnsafe(0);
    var BufferReader = class {
      static {
        __name(this, "BufferReader");
      }
      constructor(offset = 0) {
        this.offset = offset;
        this.buffer = emptyBuffer;
        this.encoding = "utf-8";
      }
      setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
      }
      int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
      }
      byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
      }
      int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
      }
      string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
      cstring() {
        const start = this.offset;
        let end = start;
        while (this.buffer[end++] !== 0) {
        }
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
      }
      bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
    };
    exports.BufferReader = BufferReader;
  }
});

// node_modules/pg-protocol/dist/parser.js
var require_parser = __commonJS({
  "node_modules/pg-protocol/dist/parser.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var messages_1 = require_messages();
    var buffer_reader_1 = require_buffer_reader();
    var CODE_LENGTH = 1;
    var LEN_LENGTH = 4;
    var HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
    var emptyBuffer = Buffer2.allocUnsafe(0);
    var Parser = class {
      static {
        __name(this, "Parser");
      }
      constructor(opts) {
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === "binary") {
          throw new Error("Binary mode not supported yet");
        }
        this.mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || "text";
      }
      parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while (offset + HEADER_LENGTH <= bufferFullLength) {
          const code = this.buffer[offset];
          const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
          const fullMessageLength = CODE_LENGTH + length;
          if (fullMessageLength + offset <= bufferFullLength) {
            const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
            callback(message);
            offset += fullMessageLength;
          } else {
            break;
          }
        }
        if (offset === bufferFullLength) {
          this.buffer = emptyBuffer;
          this.bufferLength = 0;
          this.bufferOffset = 0;
        } else {
          this.bufferLength = bufferFullLength - offset;
          this.bufferOffset = offset;
        }
      }
      mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
          const newLength = this.bufferLength + buffer.byteLength;
          const newFullLength = newLength + this.bufferOffset;
          if (newFullLength > this.buffer.byteLength) {
            let newBuffer;
            if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
              newBuffer = this.buffer;
            } else {
              let newBufferLength = this.buffer.byteLength * 2;
              while (newLength >= newBufferLength) {
                newBufferLength *= 2;
              }
              newBuffer = Buffer2.allocUnsafe(newBufferLength);
            }
            this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
            this.buffer = newBuffer;
            this.bufferOffset = 0;
          }
          buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
          this.bufferLength = newLength;
        } else {
          this.buffer = buffer;
          this.bufferOffset = 0;
          this.bufferLength = buffer.byteLength;
        }
      }
      handlePacket(offset, code, length, bytes) {
        switch (code) {
          case 50:
            return messages_1.bindComplete;
          case 49:
            return messages_1.parseComplete;
          case 51:
            return messages_1.closeComplete;
          case 110:
            return messages_1.noData;
          case 115:
            return messages_1.portalSuspended;
          case 99:
            return messages_1.copyDone;
          case 87:
            return messages_1.replicationStart;
          case 73:
            return messages_1.emptyQuery;
          case 68:
            return this.parseDataRowMessage(offset, length, bytes);
          case 67:
            return this.parseCommandCompleteMessage(offset, length, bytes);
          case 90:
            return this.parseReadyForQueryMessage(offset, length, bytes);
          case 65:
            return this.parseNotificationMessage(offset, length, bytes);
          case 82:
            return this.parseAuthenticationResponse(offset, length, bytes);
          case 83:
            return this.parseParameterStatusMessage(offset, length, bytes);
          case 75:
            return this.parseBackendKeyData(offset, length, bytes);
          case 69:
            return this.parseErrorMessage(offset, length, bytes, "error");
          case 78:
            return this.parseErrorMessage(offset, length, bytes, "notice");
          case 84:
            return this.parseRowDescriptionMessage(offset, length, bytes);
          case 116:
            return this.parseParameterDescriptionMessage(offset, length, bytes);
          case 71:
            return this.parseCopyInMessage(offset, length, bytes);
          case 72:
            return this.parseCopyOutMessage(offset, length, bytes);
          case 100:
            return this.parseCopyData(offset, length, bytes);
          default:
            return new messages_1.DatabaseError("received invalid response: " + code.toString(16), length, "error");
        }
      }
      parseReadyForQueryMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const status = this.reader.string(1);
        return new messages_1.ReadyForQueryMessage(length, status);
      }
      parseCommandCompleteMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const text = this.reader.cstring();
        return new messages_1.CommandCompleteMessage(length, text);
      }
      parseCopyData(offset, length, bytes) {
        const chunk = bytes.slice(offset, offset + (length - 4));
        return new messages_1.CopyDataMessage(length, chunk);
      }
      parseCopyInMessage(offset, length, bytes) {
        return this.parseCopyMessage(offset, length, bytes, "copyInResponse");
      }
      parseCopyOutMessage(offset, length, bytes) {
        return this.parseCopyMessage(offset, length, bytes, "copyOutResponse");
      }
      parseCopyMessage(offset, length, bytes, messageName) {
        this.reader.setBuffer(offset, bytes);
        const isBinary = this.reader.byte() !== 0;
        const columnCount = this.reader.int16();
        const message = new messages_1.CopyResponse(length, messageName, isBinary, columnCount);
        for (let i = 0; i < columnCount; i++) {
          message.columnTypes[i] = this.reader.int16();
        }
        return message;
      }
      parseNotificationMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const processId = this.reader.int32();
        const channel = this.reader.cstring();
        const payload = this.reader.cstring();
        return new messages_1.NotificationResponseMessage(length, processId, channel, payload);
      }
      parseRowDescriptionMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const fieldCount = this.reader.int16();
        const message = new messages_1.RowDescriptionMessage(length, fieldCount);
        for (let i = 0; i < fieldCount; i++) {
          message.fields[i] = this.parseField();
        }
        return message;
      }
      parseField() {
        const name = this.reader.cstring();
        const tableID = this.reader.int32();
        const columnID = this.reader.int16();
        const dataTypeID = this.reader.int32();
        const dataTypeSize = this.reader.int16();
        const dataTypeModifier = this.reader.int32();
        const mode = this.reader.int16() === 0 ? "text" : "binary";
        return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
      }
      parseParameterDescriptionMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const parameterCount = this.reader.int16();
        const message = new messages_1.ParameterDescriptionMessage(length, parameterCount);
        for (let i = 0; i < parameterCount; i++) {
          message.dataTypeIDs[i] = this.reader.int32();
        }
        return message;
      }
      parseDataRowMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const fieldCount = this.reader.int16();
        const fields = new Array(fieldCount);
        for (let i = 0; i < fieldCount; i++) {
          const len = this.reader.int32();
          fields[i] = len === -1 ? null : this.reader.string(len);
        }
        return new messages_1.DataRowMessage(length, fields);
      }
      parseParameterStatusMessage(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const name = this.reader.cstring();
        const value = this.reader.cstring();
        return new messages_1.ParameterStatusMessage(length, name, value);
      }
      parseBackendKeyData(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const processID = this.reader.int32();
        const secretKey = this.reader.int32();
        return new messages_1.BackendKeyDataMessage(length, processID, secretKey);
      }
      parseAuthenticationResponse(offset, length, bytes) {
        this.reader.setBuffer(offset, bytes);
        const code = this.reader.int32();
        const message = {
          name: "authenticationOk",
          length
        };
        switch (code) {
          case 0:
            break;
          case 3:
            if (message.length === 8) {
              message.name = "authenticationCleartextPassword";
            }
            break;
          case 5:
            if (message.length === 12) {
              message.name = "authenticationMD5Password";
              const salt = this.reader.bytes(4);
              return new messages_1.AuthenticationMD5Password(length, salt);
            }
            break;
          case 10:
            message.name = "authenticationSASL";
            message.mechanisms = [];
            let mechanism;
            do {
              mechanism = this.reader.cstring();
              if (mechanism) {
                message.mechanisms.push(mechanism);
              }
            } while (mechanism);
            break;
          case 11:
            message.name = "authenticationSASLContinue";
            message.data = this.reader.string(length - 8);
            break;
          case 12:
            message.name = "authenticationSASLFinal";
            message.data = this.reader.string(length - 8);
            break;
          default:
            throw new Error("Unknown authenticationOk message type " + code);
        }
        return message;
      }
      parseErrorMessage(offset, length, bytes, name) {
        this.reader.setBuffer(offset, bytes);
        const fields = {};
        let fieldType = this.reader.string(1);
        while (fieldType !== "\0") {
          fields[fieldType] = this.reader.cstring();
          fieldType = this.reader.string(1);
        }
        const messageValue = fields.M;
        const message = name === "notice" ? new messages_1.NoticeMessage(length, messageValue) : new messages_1.DatabaseError(messageValue, length, name);
        message.severity = fields.S;
        message.code = fields.C;
        message.detail = fields.D;
        message.hint = fields.H;
        message.position = fields.P;
        message.internalPosition = fields.p;
        message.internalQuery = fields.q;
        message.where = fields.W;
        message.schema = fields.s;
        message.table = fields.t;
        message.column = fields.c;
        message.dataType = fields.d;
        message.constraint = fields.n;
        message.file = fields.F;
        message.line = fields.L;
        message.routine = fields.R;
        return message;
      }
    };
    exports.Parser = Parser;
  }
});

// node_modules/pg-protocol/dist/index.js
var require_dist = __commonJS({
  "node_modules/pg-protocol/dist/index.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatabaseError = exports.serialize = exports.parse = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "DatabaseError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return messages_1.DatabaseError;
    }, "get") });
    var serializer_1 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return serializer_1.serialize;
    }, "get") });
    var parser_1 = require_parser();
    function parse2(stream, callback) {
      const parser = new parser_1.Parser();
      stream.on("data", (buffer) => parser.parse(buffer, callback));
      return new Promise((resolve) => stream.on("end", () => resolve()));
    }
    __name(parse2, "parse");
    exports.parse = parse2;
  }
});

// shims/tls/index.ts
var tls_exports = {};
__export(tls_exports, {
  connect: () => connect
});
function connect({
  socket,
  servername
}) {
  socket.startTls(servername);
  return socket;
}
var init_tls = __esm({
  "shims/tls/index.ts"() {
    "use strict";
    init_shims();
    __name(connect, "connect");
  }
});

// node_modules/pg/lib/connection.js
var require_connection = __commonJS({
  "node_modules/pg/lib/connection.js"(exports, module) {
    "use strict";
    init_shims();
    var net = (init_net(), __toCommonJS(net_exports));
    var EventEmitter2 = require_events().EventEmitter;
    var { parse: parse2, serialize } = require_dist();
    var flushBuffer = serialize.flush();
    var syncBuffer = serialize.sync();
    var endBuffer = serialize.end();
    var Connection3 = class extends EventEmitter2 {
      static {
        __name(this, "Connection");
      }
      constructor(config) {
        super();
        config = config || {};
        this.stream = config.stream || new net.Socket();
        this._keepAlive = config.keepAlive;
        this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis;
        this.lastBuffer = false;
        this.parsedStatements = {};
        this.ssl = config.ssl || false;
        this._ending = false;
        this._emitMessage = false;
        var self = this;
        this.on("newListener", function(eventName) {
          if (eventName === "message") {
            self._emitMessage = true;
          }
        });
      }
      connect(port, host) {
        var self = this;
        this._connecting = true;
        this.stream.setNoDelay(true);
        this.stream.connect(port, host);
        this.stream.once("connect", function() {
          if (self._keepAlive) {
            self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis);
          }
          self.emit("connect");
        });
        const reportStreamError = /* @__PURE__ */ __name(function(error) {
          if (self._ending && (error.code === "ECONNRESET" || error.code === "EPIPE")) {
            return;
          }
          self.emit("error", error);
        }, "reportStreamError");
        this.stream.on("error", reportStreamError);
        this.stream.on("close", function() {
          self.emit("end");
        });
        if (!this.ssl) {
          return this.attachListeners(this.stream);
        }
        this.stream.once("data", function(buffer) {
          var responseCode = buffer.toString("utf8");
          switch (responseCode) {
            case "S":
              break;
            case "N":
              self.stream.end();
              return self.emit("error", new Error("The server does not support SSL connections"));
            default:
              self.stream.end();
              return self.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          var tls = (init_tls(), __toCommonJS(tls_exports));
          const options = {
            socket: self.stream
          };
          if (self.ssl !== true) {
            Object.assign(options, self.ssl);
            if ("key" in self.ssl) {
              options.key = self.ssl.key;
            }
          }
          if (net.isIP(host) === 0) {
            options.servername = host;
          }
          try {
            self.stream = tls.connect(options);
          } catch (err) {
            return self.emit("error", err);
          }
          self.attachListeners(self.stream);
          self.stream.on("error", reportStreamError);
          self.emit("sslconnect");
        });
      }
      attachListeners(stream) {
        stream.on("end", () => {
          this.emit("end");
        });
        parse2(stream, (msg) => {
          var eventName = msg.name === "error" ? "errorMessage" : msg.name;
          if (this._emitMessage) {
            this.emit("message", msg);
          }
          this.emit(eventName, msg);
        });
      }
      requestSsl() {
        this.stream.write(serialize.requestSsl());
      }
      startup(config) {
        this.stream.write(serialize.startup(config));
      }
      cancel(processID, secretKey) {
        this._send(serialize.cancel(processID, secretKey));
      }
      password(password) {
        this._send(serialize.password(password));
      }
      sendSASLInitialResponseMessage(mechanism, initialResponse) {
        this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse));
      }
      sendSCRAMClientFinalMessage(additionalData) {
        this._send(serialize.sendSCRAMClientFinalMessage(additionalData));
      }
      _send(buffer) {
        if (!this.stream.writable) {
          return false;
        }
        return this.stream.write(buffer);
      }
      query(text) {
        this._send(serialize.query(text));
      }
      // send parse message
      parse(query) {
        this._send(serialize.parse(query));
      }
      // send bind message
      bind(config) {
        this._send(serialize.bind(config));
      }
      // send execute message
      execute(config) {
        this._send(serialize.execute(config));
      }
      flush() {
        if (this.stream.writable) {
          this.stream.write(flushBuffer);
        }
      }
      sync() {
        this._ending = true;
        this._send(flushBuffer);
        this._send(syncBuffer);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        this._ending = true;
        if (!this._connecting || !this.stream.writable) {
          this.stream.end();
          return;
        }
        return this.stream.write(endBuffer, () => {
          this.stream.end();
        });
      }
      close(msg) {
        this._send(serialize.close(msg));
      }
      describe(msg) {
        this._send(serialize.describe(msg));
      }
      sendCopyFromChunk(chunk) {
        this._send(serialize.copyData(chunk));
      }
      endCopyFrom() {
        this._send(serialize.copyDone());
      }
      sendCopyFail(msg) {
        this._send(serialize.copyFail(msg));
      }
    };
    module.exports = Connection3;
  }
});

// node_modules/pg/lib/client.js
var require_client = __commonJS({
  "node_modules/pg/lib/client.js"(exports, module) {
    "use strict";
    init_shims();
    var EventEmitter2 = require_events().EventEmitter;
    var util = (init_util(), __toCommonJS(util_exports));
    var utils = require_utils();
    var sasl = require_sasl();
    var pgPass = require_lib();
    var TypeOverrides2 = require_type_overrides();
    var ConnectionParameters2 = require_connection_parameters();
    var Query2 = require_query();
    var defaults2 = require_defaults();
    var Connection3 = require_connection();
    var Client3 = class extends EventEmitter2 {
      static {
        __name(this, "Client");
      }
      constructor(config) {
        super();
        this.connectionParameters = new ConnectionParameters2(config);
        this.user = this.connectionParameters.user;
        this.database = this.connectionParameters.database;
        this.port = this.connectionParameters.port;
        this.host = this.connectionParameters.host;
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: this.connectionParameters.password
        });
        this.replication = this.connectionParameters.replication;
        var c = config || {};
        this._Promise = c.Promise || global.Promise;
        this._types = new TypeOverrides2(c.types);
        this._ending = false;
        this._connecting = false;
        this._connected = false;
        this._connectionError = false;
        this._queryable = true;
        this.connection = c.connection || new Connection3({
          stream: c.stream,
          ssl: this.connectionParameters.ssl,
          keepAlive: c.keepAlive || false,
          keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
          encoding: this.connectionParameters.client_encoding || "utf8"
        });
        this.queryQueue = [];
        this.binary = c.binary || defaults2.binary;
        this.processID = null;
        this.secretKey = null;
        this.ssl = this.connectionParameters.ssl || false;
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
      }
      _errorAllQueries(err) {
        const enqueueError = /* @__PURE__ */ __name((query) => {
          process.nextTick(() => {
            query.handleError(err, this.connection);
          });
        }, "enqueueError");
        if (this.activeQuery) {
          enqueueError(this.activeQuery);
          this.activeQuery = null;
        }
        this.queryQueue.forEach(enqueueError);
        this.queryQueue.length = 0;
      }
      _connect(callback) {
        var self = this;
        var con = this.connection;
        this._connectionCallback = callback;
        if (this._connecting || this._connected) {
          const err = new Error("Client has already been connected. You cannot reuse a client.");
          process.nextTick(() => {
            callback(err);
          });
          return;
        }
        this._connecting = true;
        this.connectionTimeoutHandle;
        if (this._connectionTimeoutMillis > 0) {
          this.connectionTimeoutHandle = setTimeout(() => {
            con._ending = true;
            con.stream.destroy(new Error("timeout expired"));
          }, this._connectionTimeoutMillis);
        }
        if (this.host && this.host.indexOf("/") === 0) {
          con.connect(this.host + "/.s.PGSQL." + this.port);
        } else {
          con.connect(this.port, this.host);
        }
        con.on("connect", function() {
          if (self.ssl) {
            con.requestSsl();
          } else {
            con.startup(self.getStartupConf());
          }
        });
        con.on("sslconnect", function() {
          con.startup(self.getStartupConf());
        });
        this._attachListeners(con);
        con.once("end", () => {
          const error = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle);
          this._errorAllQueries(error);
          if (!this._ending) {
            if (this._connecting && !this._connectionError) {
              if (this._connectionCallback) {
                this._connectionCallback(error);
              } else {
                this._handleErrorEvent(error);
              }
            } else if (!this._connectionError) {
              this._handleErrorEvent(error);
            }
          }
          process.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(callback) {
        if (callback) {
          this._connect(callback);
          return;
        }
        return new this._Promise((resolve, reject) => {
          this._connect((error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }
      _attachListeners(con) {
        con.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this));
        con.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this));
        con.on("authenticationSASL", this._handleAuthSASL.bind(this));
        con.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this));
        con.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this));
        con.on("backendKeyData", this._handleBackendKeyData.bind(this));
        con.on("error", this._handleErrorEvent.bind(this));
        con.on("errorMessage", this._handleErrorMessage.bind(this));
        con.on("readyForQuery", this._handleReadyForQuery.bind(this));
        con.on("notice", this._handleNotice.bind(this));
        con.on("rowDescription", this._handleRowDescription.bind(this));
        con.on("dataRow", this._handleDataRow.bind(this));
        con.on("portalSuspended", this._handlePortalSuspended.bind(this));
        con.on("emptyQuery", this._handleEmptyQuery.bind(this));
        con.on("commandComplete", this._handleCommandComplete.bind(this));
        con.on("parseComplete", this._handleParseComplete.bind(this));
        con.on("copyInResponse", this._handleCopyInResponse.bind(this));
        con.on("copyData", this._handleCopyData.bind(this));
        con.on("notification", this._handleNotification.bind(this));
      }
      // TODO(bmc): deprecate pgpass "built in" integration since this.password can be a function
      // it can be supplied by the user if required - this is a breaking change!
      _checkPgPass(cb) {
        const con = this.connection;
        if (typeof this.password === "function") {
          this._Promise.resolve().then(() => this.password()).then((pass) => {
            if (pass !== void 0) {
              if (typeof pass !== "string") {
                con.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = pass;
            } else {
              this.connectionParameters.password = this.password = null;
            }
            cb();
          }).catch((err) => {
            con.emit("error", err);
          });
        } else if (this.password !== null) {
          cb();
        } else {
          pgPass(this.connectionParameters, (pass) => {
            if (void 0 !== pass) {
              this.connectionParameters.password = this.password = pass;
            }
            cb();
          });
        }
      }
      _handleAuthCleartextPassword(msg) {
        this._checkPgPass(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(msg) {
        this._checkPgPass(() => {
          const hashedPassword = utils.postgresMd5PasswordHash(this.user, this.password, msg.salt);
          this.connection.password(hashedPassword);
        });
      }
      _handleAuthSASL(msg) {
        this._checkPgPass(() => {
          this.saslSession = sasl.startSession(msg.mechanisms);
          this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
        });
      }
      _handleAuthSASLContinue(msg) {
        sasl.continueSession(this.saslSession, this.password, msg.data);
        this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
      }
      _handleAuthSASLFinal(msg) {
        sasl.finalizeSession(this.saslSession, msg.data);
        this.saslSession = null;
      }
      _handleBackendKeyData(msg) {
        this.processID = msg.processID;
        this.secretKey = msg.secretKey;
      }
      _handleReadyForQuery(msg) {
        if (this._connecting) {
          this._connecting = false;
          this._connected = true;
          clearTimeout(this.connectionTimeoutHandle);
          if (this._connectionCallback) {
            this._connectionCallback(null, this);
            this._connectionCallback = null;
          }
          this.emit("connect");
        }
        const { activeQuery } = this;
        this.activeQuery = null;
        this.readyForQuery = true;
        if (activeQuery) {
          activeQuery.handleReadyForQuery(this.connection);
        }
        this._pulseQueryQueue();
      }
      // if we receieve an error event or error message
      // during the connection process we handle it here
      _handleErrorWhileConnecting(err) {
        if (this._connectionError) {
          return;
        }
        this._connectionError = true;
        clearTimeout(this.connectionTimeoutHandle);
        if (this._connectionCallback) {
          return this._connectionCallback(err);
        }
        this.emit("error", err);
      }
      // if we're connected and we receive an error event from the connection
      // this means the socket is dead - do a hard abort of all queries and emit
      // the socket error on the client as well
      _handleErrorEvent(err) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(err);
        }
        this._queryable = false;
        this._errorAllQueries(err);
        this.emit("error", err);
      }
      // handle error messages from the postgres backend
      _handleErrorMessage(msg) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(msg);
        }
        const activeQuery = this.activeQuery;
        if (!activeQuery) {
          this._handleErrorEvent(msg);
          return;
        }
        this.activeQuery = null;
        activeQuery.handleError(msg, this.connection);
      }
      _handleRowDescription(msg) {
        this.activeQuery.handleRowDescription(msg);
      }
      _handleDataRow(msg) {
        this.activeQuery.handleDataRow(msg);
      }
      _handlePortalSuspended(msg) {
        this.activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(msg) {
        this.activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(msg) {
        this.activeQuery.handleCommandComplete(msg, this.connection);
      }
      _handleParseComplete(msg) {
        if (this.activeQuery.name) {
          this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text;
        }
      }
      _handleCopyInResponse(msg) {
        this.activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(msg) {
        this.activeQuery.handleCopyData(msg, this.connection);
      }
      _handleNotification(msg) {
        this.emit("notification", msg);
      }
      _handleNotice(msg) {
        this.emit("notice", msg);
      }
      getStartupConf() {
        var params = this.connectionParameters;
        var data = {
          user: params.user,
          database: params.database
        };
        var appName = params.application_name || params.fallback_application_name;
        if (appName) {
          data.application_name = appName;
        }
        if (params.replication) {
          data.replication = "" + params.replication;
        }
        if (params.statement_timeout) {
          data.statement_timeout = String(parseInt(params.statement_timeout, 10));
        }
        if (params.lock_timeout) {
          data.lock_timeout = String(parseInt(params.lock_timeout, 10));
        }
        if (params.idle_in_transaction_session_timeout) {
          data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10));
        }
        if (params.options) {
          data.options = params.options;
        }
        return data;
      }
      cancel(client, query) {
        if (client.activeQuery === query) {
          var con = this.connection;
          if (this.host && this.host.indexOf("/") === 0) {
            con.connect(this.host + "/.s.PGSQL." + this.port);
          } else {
            con.connect(this.port, this.host);
          }
          con.on("connect", function() {
            con.cancel(client.processID, client.secretKey);
          });
        } else if (client.queryQueue.indexOf(query) !== -1) {
          client.queryQueue.splice(client.queryQueue.indexOf(query), 1);
        }
      }
      setTypeParser(oid, format, parseFn) {
        return this._types.setTypeParser(oid, format, parseFn);
      }
      getTypeParser(oid, format) {
        return this._types.getTypeParser(oid, format);
      }
      // Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
      escapeIdentifier(str) {
        return '"' + str.replace(/"/g, '""') + '"';
      }
      // Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
      escapeLiteral(str) {
        var hasBackslash = false;
        var escaped = "'";
        for (var i = 0; i < str.length; i++) {
          var c = str[i];
          if (c === "'") {
            escaped += c + c;
          } else if (c === "\\") {
            escaped += c + c;
            hasBackslash = true;
          } else {
            escaped += c;
          }
        }
        escaped += "'";
        if (hasBackslash === true) {
          escaped = " E" + escaped;
        }
        return escaped;
      }
      _pulseQueryQueue() {
        if (this.readyForQuery === true) {
          this.activeQuery = this.queryQueue.shift();
          if (this.activeQuery) {
            this.readyForQuery = false;
            this.hasExecuted = true;
            const queryError = this.activeQuery.submit(this.connection);
            if (queryError) {
              process.nextTick(() => {
                this.activeQuery.handleError(queryError, this.connection);
                this.readyForQuery = true;
                this._pulseQueryQueue();
              });
            }
          } else if (this.hasExecuted) {
            this.activeQuery = null;
            this.emit("drain");
          }
        }
      }
      query(config, values, callback) {
        var query;
        var result;
        var readTimeout;
        var readTimeoutTimer;
        var queryCallback;
        if (config === null || config === void 0) {
          throw new TypeError("Client was passed a null or undefined query");
        } else if (typeof config.submit === "function") {
          readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
          result = query = config;
          if (typeof values === "function") {
            query.callback = query.callback || values;
          }
        } else {
          readTimeout = this.connectionParameters.query_timeout;
          query = new Query2(config, values, callback);
          if (!query.callback) {
            result = new this._Promise((resolve, reject) => {
              query.callback = (err, res) => err ? reject(err) : resolve(res);
            });
          }
        }
        if (readTimeout) {
          queryCallback = query.callback;
          readTimeoutTimer = setTimeout(() => {
            var error = new Error("Query read timeout");
            process.nextTick(() => {
              query.handleError(error, this.connection);
            });
            queryCallback(error);
            query.callback = () => {
            };
            var index = this.queryQueue.indexOf(query);
            if (index > -1) {
              this.queryQueue.splice(index, 1);
            }
            this._pulseQueryQueue();
          }, readTimeout);
          query.callback = (err, res) => {
            clearTimeout(readTimeoutTimer);
            queryCallback(err, res);
          };
        }
        if (this.binary && !query.binary) {
          query.binary = true;
        }
        if (query._result && !query._result._types) {
          query._result._types = this._types;
        }
        if (!this._queryable) {
          process.nextTick(() => {
            query.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
          });
          return result;
        }
        if (this._ending) {
          process.nextTick(() => {
            query.handleError(new Error("Client was closed and is not queryable"), this.connection);
          });
          return result;
        }
        this.queryQueue.push(query);
        this._pulseQueryQueue();
        return result;
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      end(cb) {
        this._ending = true;
        if (!this.connection._connecting) {
          if (cb) {
            cb();
          } else {
            return this._Promise.resolve();
          }
        }
        if (this.activeQuery || !this._queryable) {
          this.connection.stream.destroy();
        } else {
          this.connection.end();
        }
        if (cb) {
          this.connection.once("end", cb);
        } else {
          return new this._Promise((resolve) => {
            this.connection.once("end", resolve);
          });
        }
      }
    };
    Client3.Query = Query2;
    module.exports = Client3;
  }
});

// node_modules/pg-pool/index.js
var require_pg_pool = __commonJS({
  "node_modules/pg-pool/index.js"(exports, module) {
    "use strict";
    init_shims();
    var EventEmitter2 = require_events().EventEmitter;
    var NOOP = /* @__PURE__ */ __name(function() {
    }, "NOOP");
    var removeWhere = /* @__PURE__ */ __name((list, predicate) => {
      const i = list.findIndex(predicate);
      return i === -1 ? void 0 : list.splice(i, 1)[0];
    }, "removeWhere");
    var IdleItem = class {
      static {
        __name(this, "IdleItem");
      }
      constructor(client, idleListener, timeoutId) {
        this.client = client;
        this.idleListener = idleListener;
        this.timeoutId = timeoutId;
      }
    };
    var PendingItem = class {
      static {
        __name(this, "PendingItem");
      }
      constructor(callback) {
        this.callback = callback;
      }
    };
    function throwOnDoubleRelease() {
      throw new Error("Release called on client which has already been released to the pool.");
    }
    __name(throwOnDoubleRelease, "throwOnDoubleRelease");
    function promisify2(Promise2, callback) {
      if (callback) {
        return { callback, result: void 0 };
      }
      let rej;
      let res;
      const cb = /* @__PURE__ */ __name(function(err, client) {
        err ? rej(err) : res(client);
      }, "cb");
      const result = new Promise2(function(resolve, reject) {
        res = resolve;
        rej = reject;
      }).catch((err) => {
        Error.captureStackTrace(err);
        throw err;
      });
      return { callback: cb, result };
    }
    __name(promisify2, "promisify");
    function makeIdleListener(pool, client) {
      return /* @__PURE__ */ __name(function idleListener(err) {
        err.client = client;
        client.removeListener("error", idleListener);
        client.on("error", () => {
          pool.log("additional client error after disconnection due to error", err);
        });
        pool._remove(client);
        pool.emit("error", err, client);
      }, "idleListener");
    }
    __name(makeIdleListener, "makeIdleListener");
    var Pool2 = class extends EventEmitter2 {
      static {
        __name(this, "Pool");
      }
      constructor(options, Client3) {
        super();
        this.options = Object.assign({}, options);
        if (options != null && "password" in options) {
          Object.defineProperty(this.options, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: options.password
          });
        }
        if (options != null && options.ssl && options.ssl.key) {
          Object.defineProperty(this.options.ssl, "key", {
            enumerable: false
          });
        }
        this.options.max = this.options.max || this.options.poolSize || 10;
        this.options.maxUses = this.options.maxUses || Infinity;
        this.options.allowExitOnIdle = this.options.allowExitOnIdle || false;
        this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0;
        this.log = this.options.log || function() {
        };
        this.Client = this.options.Client || Client3 || require_lib2().Client;
        this.Promise = this.options.Promise || global.Promise;
        if (typeof this.options.idleTimeoutMillis === "undefined") {
          this.options.idleTimeoutMillis = 1e4;
        }
        this._clients = [];
        this._idle = [];
        this._expired = /* @__PURE__ */ new WeakSet();
        this._pendingQueue = [];
        this._endCallback = void 0;
        this.ending = false;
        this.ended = false;
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _pulseQueue() {
        this.log("pulse queue");
        if (this.ended) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          this.log("pulse queue on ending");
          if (this._idle.length) {
            this._idle.slice().map((item) => {
              this._remove(item.client);
            });
          }
          if (!this._clients.length) {
            this.ended = true;
            this._endCallback();
          }
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull()) {
          return;
        }
        const pendingItem = this._pendingQueue.shift();
        if (this._idle.length) {
          const idleItem = this._idle.pop();
          clearTimeout(idleItem.timeoutId);
          const client = idleItem.client;
          client.ref && client.ref();
          const idleListener = idleItem.idleListener;
          return this._acquireClient(client, pendingItem, idleListener, false);
        }
        if (!this._isFull()) {
          return this.newClient(pendingItem);
        }
        throw new Error("unexpected condition");
      }
      _remove(client) {
        const removed = removeWhere(this._idle, (item) => item.client === client);
        if (removed !== void 0) {
          clearTimeout(removed.timeoutId);
        }
        this._clients = this._clients.filter((c) => c !== client);
        client.end();
        this.emit("remove", client);
      }
      connect(cb) {
        if (this.ending) {
          const err = new Error("Cannot use a pool after calling end on the pool");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        const response = promisify2(this.Promise, cb);
        const result = response.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length) {
            process.nextTick(() => this._pulseQueue());
          }
          if (!this.options.connectionTimeoutMillis) {
            this._pendingQueue.push(new PendingItem(response.callback));
            return result;
          }
          const queueCallback = /* @__PURE__ */ __name((err, res, done) => {
            clearTimeout(tid);
            response.callback(err, res, done);
          }, "queueCallback");
          const pendingItem = new PendingItem(queueCallback);
          const tid = setTimeout(() => {
            removeWhere(this._pendingQueue, (i) => i.callback === queueCallback);
            pendingItem.timedOut = true;
            response.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          this._pendingQueue.push(pendingItem);
          return result;
        }
        this.newClient(new PendingItem(response.callback));
        return result;
      }
      newClient(pendingItem) {
        const client = new this.Client(this.options);
        this._clients.push(client);
        const idleListener = makeIdleListener(this, client);
        this.log("checking client timeout");
        let tid;
        let timeoutHit = false;
        if (this.options.connectionTimeoutMillis) {
          tid = setTimeout(() => {
            this.log("ending client due to timeout");
            timeoutHit = true;
            client.connection ? client.connection.stream.destroy() : client.end();
          }, this.options.connectionTimeoutMillis);
        }
        this.log("connecting new client");
        client.connect((err) => {
          if (tid) {
            clearTimeout(tid);
          }
          client.on("error", idleListener);
          if (err) {
            this.log("client failed to connect", err);
            this._clients = this._clients.filter((c) => c !== client);
            if (timeoutHit) {
              err.message = "Connection terminated due to connection timeout";
            }
            this._pulseQueue();
            if (!pendingItem.timedOut) {
              pendingItem.callback(err, void 0, NOOP);
            }
          } else {
            this.log("new client connected");
            if (this.options.maxLifetimeSeconds !== 0) {
              const maxLifetimeTimeout = setTimeout(() => {
                this.log("ending client due to expired lifetime");
                this._expired.add(client);
                const idleIndex = this._idle.findIndex((idleItem) => idleItem.client === client);
                if (idleIndex !== -1) {
                  this._acquireClient(
                    client,
                    new PendingItem((err2, client2, clientRelease) => clientRelease()),
                    idleListener,
                    false
                  );
                }
              }, this.options.maxLifetimeSeconds * 1e3);
              maxLifetimeTimeout.unref();
              client.once("end", () => clearTimeout(maxLifetimeTimeout));
            }
            return this._acquireClient(client, pendingItem, idleListener, true);
          }
        });
      }
      // acquire a client for a pending work item
      _acquireClient(client, pendingItem, idleListener, isNew) {
        if (isNew) {
          this.emit("connect", client);
        }
        this.emit("acquire", client);
        client.release = this._releaseOnce(client, idleListener);
        client.removeListener("error", idleListener);
        if (!pendingItem.timedOut) {
          if (isNew && this.options.verify) {
            this.options.verify(client, (err) => {
              if (err) {
                client.release(err);
                return pendingItem.callback(err, void 0, NOOP);
              }
              pendingItem.callback(void 0, client, client.release);
            });
          } else {
            pendingItem.callback(void 0, client, client.release);
          }
        } else {
          if (isNew && this.options.verify) {
            this.options.verify(client, client.release);
          } else {
            client.release();
          }
        }
      }
      // returns a function that wraps _release and throws if called more than once
      _releaseOnce(client, idleListener) {
        let released = false;
        return (err) => {
          if (released) {
            throwOnDoubleRelease();
          }
          released = true;
          this._release(client, idleListener, err);
        };
      }
      // release a client back to the poll, include an error
      // to remove it from the pool
      _release(client, idleListener, err) {
        client.on("error", idleListener);
        client._poolUseCount = (client._poolUseCount || 0) + 1;
        this.emit("release", err, client);
        if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
          if (client._poolUseCount >= this.options.maxUses) {
            this.log("remove expended client");
          }
          this._remove(client);
          this._pulseQueue();
          return;
        }
        const isExpired = this._expired.has(client);
        if (isExpired) {
          this.log("remove expired client");
          this._expired.delete(client);
          this._remove(client);
          this._pulseQueue();
          return;
        }
        let tid;
        if (this.options.idleTimeoutMillis) {
          tid = setTimeout(() => {
            this.log("remove idle client");
            this._remove(client);
          }, this.options.idleTimeoutMillis);
          if (this.options.allowExitOnIdle) {
            tid.unref();
          }
        }
        if (this.options.allowExitOnIdle) {
          client.unref();
        }
        this._idle.push(new IdleItem(client, idleListener, tid));
        this._pulseQueue();
      }
      query(text, values, cb) {
        if (typeof text === "function") {
          const response2 = promisify2(this.Promise, text);
          setImmediate(function() {
            return response2.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          });
          return response2.result;
        }
        if (typeof values === "function") {
          cb = values;
          values = void 0;
        }
        const response = promisify2(this.Promise, cb);
        cb = response.callback;
        this.connect((err, client) => {
          if (err) {
            return cb(err);
          }
          let clientReleased = false;
          const onError = /* @__PURE__ */ __name((err2) => {
            if (clientReleased) {
              return;
            }
            clientReleased = true;
            client.release(err2);
            cb(err2);
          }, "onError");
          client.once("error", onError);
          this.log("dispatching query");
          try {
            client.query(text, values, (err2, res) => {
              this.log("query dispatched");
              client.removeListener("error", onError);
              if (clientReleased) {
                return;
              }
              clientReleased = true;
              client.release(err2);
              if (err2) {
                return cb(err2);
              }
              return cb(void 0, res);
            });
          } catch (err2) {
            client.release(err2);
            return cb(err2);
          }
        });
        return response.result;
      }
      end(cb) {
        this.log("ending");
        if (this.ending) {
          const err = new Error("Called end on pool more than once");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        this.ending = true;
        const promised = promisify2(this.Promise, cb);
        this._endCallback = promised.callback;
        this._pulseQueue();
        return promised.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((acc, client) => acc + (this._expired.has(client) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    module.exports = Pool2;
  }
});

// shims/pg-native/index.js
var pg_native_exports = {};
__export(pg_native_exports, {
  default: () => pg_native_default
});
var pg_native_default;
var init_pg_native = __esm({
  "shims/pg-native/index.js"() {
    "use strict";
    init_shims();
    pg_native_default = {};
  }
});

// node_modules/pg/package.json
var require_package = __commonJS({
  "node_modules/pg/package.json"(exports, module) {
    module.exports = {
      name: "pg",
      version: "8.8.0",
      description: "PostgreSQL client - pure javascript & libpq with the same API",
      keywords: [
        "database",
        "libpq",
        "pg",
        "postgre",
        "postgres",
        "postgresql",
        "rdbms"
      ],
      homepage: "https://github.com/brianc/node-postgres",
      repository: {
        type: "git",
        url: "git://github.com/brianc/node-postgres.git",
        directory: "packages/pg"
      },
      author: "Brian Carlson <brian.m.carlson@gmail.com>",
      main: "./lib",
      dependencies: {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.5.2",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        pgpass: "1.x"
      },
      devDependencies: {
        async: "2.6.4",
        bluebird: "3.5.2",
        co: "4.6.0",
        "pg-copy-streams": "0.3.0"
      },
      peerDependencies: {
        "pg-native": ">=3.0.1"
      },
      peerDependenciesMeta: {
        "pg-native": {
          optional: true
        }
      },
      scripts: {
        test: "make test-all"
      },
      files: [
        "lib",
        "SPONSORS.md"
      ],
      license: "MIT",
      engines: {
        node: ">= 8.0.0"
      },
      gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655"
    };
  }
});

// node_modules/pg/lib/native/query.js
var require_query2 = __commonJS({
  "node_modules/pg/lib/native/query.js"(exports, module) {
    "use strict";
    init_shims();
    var EventEmitter2 = require_events().EventEmitter;
    var util = (init_util(), __toCommonJS(util_exports));
    var utils = require_utils();
    var NativeQuery = module.exports = function(config, values, callback) {
      EventEmitter2.call(this);
      config = utils.normalizeQueryConfig(config, values, callback);
      this.text = config.text;
      this.values = config.values;
      this.name = config.name;
      this.callback = config.callback;
      this.state = "new";
      this._arrayMode = config.rowMode === "array";
      this._emitRowEvents = false;
      this.on(
        "newListener",
        function(event) {
          if (event === "row") this._emitRowEvents = true;
        }.bind(this)
      );
    };
    util.inherits(NativeQuery, EventEmitter2);
    var errorFieldMap = {
      /* eslint-disable quote-props */
      sqlState: "code",
      statementPosition: "position",
      messagePrimary: "message",
      context: "where",
      schemaName: "schema",
      tableName: "table",
      columnName: "column",
      dataTypeName: "dataType",
      constraintName: "constraint",
      sourceFile: "file",
      sourceLine: "line",
      sourceFunction: "routine"
    };
    NativeQuery.prototype.handleError = function(err) {
      var fields = this.native.pq.resultErrorFields();
      if (fields) {
        for (var key in fields) {
          var normalizedFieldName = errorFieldMap[key] || key;
          err[normalizedFieldName] = fields[key];
        }
      }
      if (this.callback) {
        this.callback(err);
      } else {
        this.emit("error", err);
      }
      this.state = "error";
    };
    NativeQuery.prototype.then = function(onSuccess, onFailure) {
      return this._getPromise().then(onSuccess, onFailure);
    };
    NativeQuery.prototype.catch = function(callback) {
      return this._getPromise().catch(callback);
    };
    NativeQuery.prototype._getPromise = function() {
      if (this._promise) return this._promise;
      this._promise = new Promise(
        function(resolve, reject) {
          this._once("end", resolve);
          this._once("error", reject);
        }.bind(this)
      );
      return this._promise;
    };
    NativeQuery.prototype.submit = function(client) {
      this.state = "running";
      var self = this;
      this.native = client.native;
      client.native.arrayMode = this._arrayMode;
      var after = /* @__PURE__ */ __name(function(err, rows, results) {
        client.native.arrayMode = false;
        setImmediate(function() {
          self.emit("_done");
        });
        if (err) {
          return self.handleError(err);
        }
        if (self._emitRowEvents) {
          if (results.length > 1) {
            rows.forEach((rowOfRows, i) => {
              rowOfRows.forEach((row) => {
                self.emit("row", row, results[i]);
              });
            });
          } else {
            rows.forEach(function(row) {
              self.emit("row", row, results);
            });
          }
        }
        self.state = "end";
        self.emit("end", results);
        if (self.callback) {
          self.callback(null, results);
        }
      }, "after");
      if (process.domain) {
        after = process.domain.bind(after);
      }
      if (this.name) {
        if (this.name.length > 63) {
          console.error("Warning! Postgres only supports 63 characters for query names.");
          console.error("You supplied %s (%s)", this.name, this.name.length);
          console.error("This can cause conflicts and silent errors executing queries");
        }
        var values = (this.values || []).map(utils.prepareValue);
        if (client.namedQueries[this.name]) {
          if (this.text && client.namedQueries[this.name] !== this.text) {
            const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
            return after(err);
          }
          return client.native.execute(this.name, values, after);
        }
        return client.native.prepare(this.name, this.text, values.length, function(err) {
          if (err) return after(err);
          client.namedQueries[self.name] = self.text;
          return self.native.execute(self.name, values, after);
        });
      } else if (this.values) {
        if (!Array.isArray(this.values)) {
          const err = new Error("Query values must be an array");
          return after(err);
        }
        var vals = this.values.map(utils.prepareValue);
        client.native.query(this.text, vals, after);
      } else {
        client.native.query(this.text, after);
      }
    };
  }
});

// node_modules/pg/lib/native/client.js
var require_client2 = __commonJS({
  "node_modules/pg/lib/native/client.js"(exports, module) {
    "use strict";
    init_shims();
    var Native = (init_pg_native(), __toCommonJS(pg_native_exports));
    var TypeOverrides2 = require_type_overrides();
    var pkg = require_package();
    var EventEmitter2 = require_events().EventEmitter;
    var util = (init_util(), __toCommonJS(util_exports));
    var ConnectionParameters2 = require_connection_parameters();
    var NativeQuery = require_query2();
    var Client3 = module.exports = function(config) {
      EventEmitter2.call(this);
      config = config || {};
      this._Promise = config.Promise || global.Promise;
      this._types = new TypeOverrides2(config.types);
      this.native = new Native({
        types: this._types
      });
      this._queryQueue = [];
      this._ending = false;
      this._connecting = false;
      this._connected = false;
      this._queryable = true;
      var cp = this.connectionParameters = new ConnectionParameters2(config);
      this.user = cp.user;
      Object.defineProperty(this, "password", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: cp.password
      });
      this.database = cp.database;
      this.host = cp.host;
      this.port = cp.port;
      this.namedQueries = {};
    };
    Client3.Query = NativeQuery;
    util.inherits(Client3, EventEmitter2);
    Client3.prototype._errorAllQueries = function(err) {
      const enqueueError = /* @__PURE__ */ __name((query) => {
        process.nextTick(() => {
          query.native = this.native;
          query.handleError(err);
        });
      }, "enqueueError");
      if (this._hasActiveQuery()) {
        enqueueError(this._activeQuery);
        this._activeQuery = null;
      }
      this._queryQueue.forEach(enqueueError);
      this._queryQueue.length = 0;
    };
    Client3.prototype._connect = function(cb) {
      var self = this;
      if (this._connecting) {
        process.nextTick(() => cb(new Error("Client has already been connected. You cannot reuse a client.")));
        return;
      }
      this._connecting = true;
      this.connectionParameters.getLibpqConnectionString(function(err, conString) {
        if (err) return cb(err);
        self.native.connect(conString, function(err2) {
          if (err2) {
            self.native.end();
            return cb(err2);
          }
          self._connected = true;
          self.native.on("error", function(err3) {
            self._queryable = false;
            self._errorAllQueries(err3);
            self.emit("error", err3);
          });
          self.native.on("notification", function(msg) {
            self.emit("notification", {
              channel: msg.relname,
              payload: msg.extra
            });
          });
          self.emit("connect");
          self._pulseQueryQueue(true);
          cb();
        });
      });
    };
    Client3.prototype.connect = function(callback) {
      if (callback) {
        this._connect(callback);
        return;
      }
      return new this._Promise((resolve, reject) => {
        this._connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    };
    Client3.prototype.query = function(config, values, callback) {
      var query;
      var result;
      var readTimeout;
      var readTimeoutTimer;
      var queryCallback;
      if (config === null || config === void 0) {
        throw new TypeError("Client was passed a null or undefined query");
      } else if (typeof config.submit === "function") {
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        result = query = config;
        if (typeof values === "function") {
          config.callback = values;
        }
      } else {
        readTimeout = this.connectionParameters.query_timeout;
        query = new NativeQuery(config, values, callback);
        if (!query.callback) {
          let resolveOut, rejectOut;
          result = new this._Promise((resolve, reject) => {
            resolveOut = resolve;
            rejectOut = reject;
          });
          query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res);
        }
      }
      if (readTimeout) {
        queryCallback = query.callback;
        readTimeoutTimer = setTimeout(() => {
          var error = new Error("Query read timeout");
          process.nextTick(() => {
            query.handleError(error, this.connection);
          });
          queryCallback(error);
          query.callback = () => {
          };
          var index = this._queryQueue.indexOf(query);
          if (index > -1) {
            this._queryQueue.splice(index, 1);
          }
          this._pulseQueryQueue();
        }, readTimeout);
        query.callback = (err, res) => {
          clearTimeout(readTimeoutTimer);
          queryCallback(err, res);
        };
      }
      if (!this._queryable) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client has encountered a connection error and is not queryable"));
        });
        return result;
      }
      if (this._ending) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client was closed and is not queryable"));
        });
        return result;
      }
      this._queryQueue.push(query);
      this._pulseQueryQueue();
      return result;
    };
    Client3.prototype.end = function(cb) {
      var self = this;
      this._ending = true;
      if (!this._connected) {
        this.once("connect", this.end.bind(this, cb));
      }
      var result;
      if (!cb) {
        result = new this._Promise(function(resolve, reject) {
          cb = /* @__PURE__ */ __name((err) => err ? reject(err) : resolve(), "cb");
        });
      }
      this.native.end(function() {
        self._errorAllQueries(new Error("Connection terminated"));
        process.nextTick(() => {
          self.emit("end");
          if (cb) cb();
        });
      });
      return result;
    };
    Client3.prototype._hasActiveQuery = function() {
      return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
    };
    Client3.prototype._pulseQueryQueue = function(initialConnection) {
      if (!this._connected) {
        return;
      }
      if (this._hasActiveQuery()) {
        return;
      }
      var query = this._queryQueue.shift();
      if (!query) {
        if (!initialConnection) {
          this.emit("drain");
        }
        return;
      }
      this._activeQuery = query;
      query.submit(this);
      var self = this;
      query.once("_done", function() {
        self._pulseQueryQueue();
      });
    };
    Client3.prototype.cancel = function(query) {
      if (this._activeQuery === query) {
        this.native.cancel(function() {
        });
      } else if (this._queryQueue.indexOf(query) !== -1) {
        this._queryQueue.splice(this._queryQueue.indexOf(query), 1);
      }
    };
    Client3.prototype.ref = function() {
    };
    Client3.prototype.unref = function() {
    };
    Client3.prototype.setTypeParser = function(oid, format, parseFn) {
      return this._types.setTypeParser(oid, format, parseFn);
    };
    Client3.prototype.getTypeParser = function(oid, format) {
      return this._types.getTypeParser(oid, format);
    };
  }
});

// node_modules/pg/lib/native/index.js
var require_native = __commonJS({
  "node_modules/pg/lib/native/index.js"(exports, module) {
    "use strict";
    init_shims();
    module.exports = require_client2();
  }
});

// node_modules/pg/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/pg/lib/index.js"(exports, module) {
    "use strict";
    init_shims();
    var Client3 = require_client();
    var defaults2 = require_defaults();
    var Connection3 = require_connection();
    var Pool2 = require_pg_pool();
    var { DatabaseError: DatabaseError2 } = require_dist();
    var poolFactory = /* @__PURE__ */ __name((Client4) => {
      return class BoundPool extends Pool2 {
        static {
          __name(this, "BoundPool");
        }
        constructor(options) {
          super(options, Client4);
        }
      };
    }, "poolFactory");
    var PG = /* @__PURE__ */ __name(function(clientConstructor) {
      this.defaults = defaults2;
      this.Client = clientConstructor;
      this.Query = this.Client.Query;
      this.Pool = poolFactory(this.Client);
      this._pools = [];
      this.Connection = Connection3;
      this.types = require_pg_types();
      this.DatabaseError = DatabaseError2;
    }, "PG");
    if (typeof process.env.NODE_PG_FORCE_NATIVE !== "undefined") {
      module.exports = new PG(require_native());
    } else {
      module.exports = new PG(Client3);
      Object.defineProperty(module.exports, "native", {
        configurable: true,
        enumerable: false,
        get() {
          var native = null;
          try {
            native = new PG(require_native());
          } catch (err) {
            if (err.code !== "MODULE_NOT_FOUND") {
              throw err;
            }
          }
          Object.defineProperty(module.exports, "native", {
            value: native
          });
          return native;
        }
      });
    }
  }
});

// src/index.ts
init_shims();

// node_modules/subtls/index.js
var subtls_exports = {};
__export(subtls_exports, {
  SocketReadQueue: () => Lt,
  TrustedCert: () => st,
  WebSocketReadQueue: () => vt,
  startTls: () => he
});
init_shims();
function p(...r2) {
  if (r2.length === 1 && r2[0] instanceof Uint8Array) return r2[0];
  let e = r2.reduce((n, a) => n + a.length, 0), t = new Uint8Array(e), i = 0;
  for (let n of r2) t.set(n, i), i += n.length;
  return t;
}
__name(p, "p");
function O(r2, e) {
  let t = r2.length;
  if (t !== e.length) return false;
  for (let i = 0; i < t; i++) if (r2[i] !== e[i]) return false;
  return true;
}
__name(O, "O");
var it = "\xB7\xB7 ";
var Nt = new TextEncoder();
var Yt = new TextDecoder();
var N = class {
  static {
    __name(this, "N");
  }
  offset;
  dataView;
  data;
  comments;
  indents;
  indent;
  constructor(e) {
    this.offset = 0, this.data = typeof e == "number" ? new Uint8Array(e) : e, this.dataView = new DataView(
      this.data.buffer,
      this.data.byteOffset,
      this.data.byteLength
    ), this.comments = {}, this.indents = {}, this.indent = 0;
  }
  extend(e) {
    let t = typeof e == "number" ? new Uint8Array(e) : e;
    this.data = p(this.data, t), this.dataView = new DataView(
      this.data.buffer,
      this.data.byteOffset,
      this.data.byteLength
    );
  }
  remaining() {
    return this.data.length - this.offset;
  }
  subarray(e) {
    return this.data.subarray(this.offset, this.offset += e);
  }
  skip(e, t) {
    return this.offset += e, t && this.comment(t), this;
  }
  comment(e, t = this.offset) {
    throw new Error("No comments should be emitted outside of chatty mode");
  }
  readBytes(e) {
    return this.data.slice(this.offset, this.offset += e);
  }
  readUTF8String(e) {
    let t = this.subarray(e);
    return Yt.decode(
      t
    );
  }
  readUTF8StringNullTerminated() {
    let e = this.offset;
    for (; this.data[e] !== 0; ) e++;
    let t = this.readUTF8String(e - this.offset);
    return this.expectUint8(0, "end of string"), t;
  }
  readUint8(e) {
    let t = this.dataView.getUint8(this.offset);
    return this.offset += 1, t;
  }
  readUint16(e) {
    let t = this.dataView.getUint16(this.offset);
    return this.offset += 2, t;
  }
  readUint24(e) {
    let t = this.readUint8(), i = this.readUint16();
    return (t << 16) + i;
  }
  readUint32(e) {
    let t = this.dataView.getUint32(this.offset);
    return this.offset += 4, t;
  }
  expectBytes(e, t) {
    let i = this.readBytes(e.length);
    if (!O(i, e)) throw new Error("Unexpected bytes");
  }
  expectUint8(e, t) {
    let i = this.readUint8();
    if (i !== e) throw new Error(`Expected ${e}, got ${i}`);
  }
  expectUint16(e, t) {
    let i = this.readUint16();
    if (i !== e) throw new Error(`Expected ${e}, got ${i}`);
  }
  expectUint24(e, t) {
    let i = this.readUint24();
    if (i !== e) throw new Error(`Expected ${e}, got ${i}`);
  }
  expectUint32(e, t) {
    let i = this.readUint32();
    if (i !== e) throw new Error(`Expected ${e}, got ${i}`);
  }
  expectLength(e, t = 1) {
    let i = this.offset, n = i + e;
    if (n > this.data.length) throw new Error("Expected length exceeds remaining data length");
    return this.indent += t, this.indents[i] = this.indent, [() => {
      if (this.indent -= t, this.indents[this.offset] = this.indent, this.offset !== n) throw new Error(
        `${e} bytes expected but ${this.offset - i} read`
      );
    }, () => n - this.offset];
  }
  expectLengthUint8(e) {
    let t = this.readUint8();
    return this.expectLength(t);
  }
  expectLengthUint16(e) {
    let t = this.readUint16();
    return this.expectLength(t);
  }
  expectLengthUint24(e) {
    let t = this.readUint24();
    return this.expectLength(t);
  }
  expectLengthUint32(e) {
    let t = this.readUint32();
    return this.expectLength(t);
  }
  expectLengthUint8Incl(e) {
    let t = this.readUint8();
    return this.expectLength(
      t - 1
    );
  }
  expectLengthUint16Incl(e) {
    let t = this.readUint16();
    return this.expectLength(
      t - 2
    );
  }
  expectLengthUint24Incl(e) {
    let t = this.readUint24();
    return this.expectLength(
      t - 3
    );
  }
  expectLengthUint32Incl(e) {
    let t = this.readUint32();
    return this.expectLength(
      t - 4
    );
  }
  writeBytes(e) {
    return this.data.set(e, this.offset), this.offset += e.length, this;
  }
  writeUTF8String(e) {
    let t = Nt.encode(e);
    return this.writeBytes(t), this;
  }
  writeUTF8StringNullTerminated(e) {
    let t = Nt.encode(e);
    return this.writeBytes(t), this.writeUint8(0), this;
  }
  writeUint8(e, t) {
    return this.dataView.setUint8(this.offset, e), this.offset += 1, this;
  }
  writeUint16(e, t) {
    return this.dataView.setUint16(this.offset, e), this.offset += 2, this;
  }
  writeUint24(e, t) {
    return this.writeUint8((e & 16711680) >> 16), this.writeUint16(e & 65535, t), this;
  }
  writeUint32(e, t) {
    return this.dataView.setUint32(this.offset, e), this.offset += 4, this;
  }
  _writeLengthGeneric(e, t, i) {
    let n = this.offset;
    this.offset += e;
    let a = this.offset;
    return this.indent += 1, this.indents[a] = this.indent, () => {
      let c = this.offset - (t ? n : a);
      if (e === 1) this.dataView.setUint8(n, c);
      else if (e === 2) this.dataView.setUint16(n, c);
      else if (e === 3) this.dataView.setUint8(n, (c & 16711680) >> 16), this.dataView.setUint16(n + 1, c & 65535);
      else if (e === 4) this.dataView.setUint32(
        n,
        c
      );
      else throw new Error(`Invalid length for length field: ${e}`);
      this.indent -= 1, this.indents[this.offset] = this.indent;
    };
  }
  writeLengthUint8(e) {
    return this._writeLengthGeneric(
      1,
      false,
      e
    );
  }
  writeLengthUint16(e) {
    return this._writeLengthGeneric(2, false, e);
  }
  writeLengthUint24(e) {
    return this._writeLengthGeneric(3, false, e);
  }
  writeLengthUint32(e) {
    return this._writeLengthGeneric(
      4,
      false,
      e
    );
  }
  writeLengthUint8Incl(e) {
    return this._writeLengthGeneric(1, true, e);
  }
  writeLengthUint16Incl(e) {
    return this._writeLengthGeneric(2, true, e);
  }
  writeLengthUint24Incl(e) {
    return this._writeLengthGeneric(
      3,
      true,
      e
    );
  }
  writeLengthUint32Incl(e) {
    return this._writeLengthGeneric(4, true, e);
  }
  array() {
    return this.data.subarray(0, this.offset);
  }
  commentedString(e = false) {
    let t = this.indents[0] !== void 0 ? it.repeat(this.indents[0]) : "", i = this.indents[0] ?? 0, n = e ? this.data.length : this.offset;
    for (let a = 0; a < n; a++) {
      t += this.data[a].toString(16).padStart(2, "0") + " ";
      let c = this.comments[a + 1];
      this.indents[a + 1] !== void 0 && (i = this.indents[a + 1]), c && (t += ` ${c}
${it.repeat(i)}`);
    }
    return t;
  }
};
function St(r2, e, t, i = true) {
  let n = new N(1024);
  n.writeUint8(22, 0), n.writeUint16(769, 0);
  let a = n.writeLengthUint16();
  n.writeUint8(1, 0);
  let c = n.writeLengthUint24();
  n.writeUint16(
    771,
    0
  ), crypto.getRandomValues(n.subarray(32));
  let s = n.writeLengthUint8(0);
  n.writeBytes(
    t
  ), s();
  let o = n.writeLengthUint16(0);
  n.writeUint16(4865, 0), o();
  let h = n.writeLengthUint8(
    0
  );
  n.writeUint8(0, 0), h();
  let y = n.writeLengthUint16(0);
  if (i) {
    n.writeUint16(0, 0);
    let q = n.writeLengthUint16(0), G = n.writeLengthUint16(0);
    n.writeUint8(0, 0);
    let D = n.writeLengthUint16(
      0
    );
    n.writeUTF8String(r2), D(), G(), q();
  }
  n.writeUint16(11, 0);
  let d = n.writeLengthUint16(
    0
  ), m = n.writeLengthUint8(0);
  n.writeUint8(0, 0), m(), d(), n.writeUint16(10, 0);
  let g = n.writeLengthUint16(0), A = n.writeLengthUint16(0);
  n.writeUint16(23, 0), A(), g(), n.writeUint16(
    13,
    0
  );
  let L = n.writeLengthUint16(0), f = n.writeLengthUint16(0);
  n.writeUint16(1027, 0), n.writeUint16(2052, 0), f(), L(), n.writeUint16(43, 0);
  let u = n.writeLengthUint16(0), x = n.writeLengthUint8(0);
  n.writeUint16(772, 0), x(), u(), n.writeUint16(51, 0);
  let T = n.writeLengthUint16(
    0
  ), $ = n.writeLengthUint16(0);
  n.writeUint16(23, 0);
  let P = n.writeLengthUint16(0);
  return n.writeBytes(new Uint8Array(e)), P(), $(), T(), y(), c(), a(), n;
}
__name(St, "St");
function K(r2, e = "") {
  return [...r2].map((t) => t.toString(16).padStart(2, "0")).join(e);
}
__name(K, "K");
function Ut(r2, e) {
  let t, i, [n] = r2.expectLength(r2.remaining());
  r2.expectUint8(2, 0);
  let [
    a
  ] = r2.expectLengthUint24(0);
  r2.expectUint16(771, 0);
  let c = r2.readBytes(32);
  if (O(c, [
    207,
    33,
    173,
    116,
    229,
    154,
    97,
    17,
    190,
    29,
    140,
    2,
    30,
    101,
    184,
    145,
    194,
    162,
    17,
    22,
    122,
    187,
    140,
    94,
    7,
    158,
    9,
    226,
    200,
    168,
    51,
    156
  ])) throw new Error("Unexpected HelloRetryRequest");
  r2.expectUint8(
    e.length,
    0
  ), r2.expectBytes(e, 0), r2.expectUint16(4865, 0), r2.expectUint8(0, 0);
  let [s, o] = r2.expectLengthUint16(0);
  for (; o() > 0; ) {
    let h = r2.readUint16(0), [y] = r2.expectLengthUint16(
      0
    );
    if (h === 43) r2.expectUint16(772, 0), i = true;
    else if (h === 51) r2.expectUint16(23, 0), r2.expectUint16(
      65
    ), t = r2.readBytes(65);
    else throw new Error(`Unexpected extension 0x${K([h])}`);
    y();
  }
  if (s(), a(), n(), i !== true) throw new Error("No TLS version provided");
  if (t === void 0) throw new Error(
    "No key provided"
  );
  return t;
}
__name(Ut, "Ut");
var Ce = new RegExp(`  .+|^(${it})+`, "gm");
var rt = 16384;
var te = rt + 1 + 255;
async function ht(r2, e, t = rt) {
  let n = await r2(5);
  if (n === void 0)
    return;
  if (n.length < 5) throw new Error("TLS record header truncated");
  let a = new N(
    n
  ), c = a.readUint8();
  if (c < 20 || c > 24) throw new Error(`Illegal TLS record type 0x${c.toString(16)}`);
  if (e !== void 0 && c !== e) throw new Error(`Unexpected TLS record type 0x${c.toString(16).padStart(2, "0")} (expected 0x${e.toString(16).padStart(2, "0")})`);
  a.expectUint16(771, "TLS record version 1.2 (middlebox compatibility)");
  let s = a.readUint16(0);
  if (s > t) throw new Error(`Record too long: ${s} bytes`);
  let o = await r2(
    s
  );
  if (o === void 0 || o.length < s) throw new Error("TLS record content truncated");
  return {
    headerData: n,
    header: a,
    type: c,
    length: s,
    content: o
  };
}
__name(ht, "ht");
async function dt(r2, e, t) {
  let i = await ht(
    r2,
    23,
    te
  );
  if (i === void 0) return;
  let n = new N(i.content), [a] = n.expectLength(n.remaining());
  n.skip(i.length - 16, 0), n.skip(16, 0), a();
  let c = await e.process(i.content, 16, i.headerData), s = c.length - 1;
  for (; c[s] === 0; ) s -= 1;
  if (s < 0) throw new Error("Decrypted message has no record type indicator (all zeroes)");
  let o = c[s], h = c.subarray(0, s);
  if (!(o === 21 && h.length === 2 && h[0] === 1 && h[1] === 0)) {
    if (o === 22 && h[0] === 4) return dt(r2, e, t);
    if (t !== void 0 && o !== t) throw new Error(`Unexpected TLS record type 0x${o.toString(16).padStart(
      2,
      "0"
    )} (expected 0x${t.toString(16).padStart(2, "0")})`);
    return h;
  }
}
__name(dt, "dt");
async function ee(r2, e, t) {
  let i = p(r2, [t]), n = 5, s = i.length + 16, o = new N(n + s);
  o.writeUint8(23, 0), o.writeUint16(
    771,
    0
  ), o.writeUint16(s, `${s} bytes follow`);
  let [h] = o.expectLength(s), y = o.array(), d = await e.process(i, 16, y);
  return o.writeBytes(d.subarray(0, d.length - 16)), o.writeBytes(d.subarray(
    d.length - 16
  )), h(), o.array();
}
__name(ee, "ee");
async function At(r2, e, t) {
  let i = Math.ceil(r2.length / rt), n = [];
  for (let a = 0; a < i; a++) {
    let c = r2.subarray(a * rt, (a + 1) * rt), s = await ee(c, e, t);
    n.push(
      s
    );
  }
  return n;
}
__name(At, "At");
var l = crypto.subtle;
var Ht = new TextEncoder();
async function lt(r2, e, t) {
  let i = await l.importKey(
    "raw",
    r2,
    { name: "HMAC", hash: { name: `SHA-${t}` } },
    false,
    ["sign"]
  );
  var n = new Uint8Array(await l.sign(
    "HMAC",
    i,
    e
  ));
  return n;
}
__name(lt, "lt");
async function ne(r2, e, t, i) {
  let n = i >> 3, a = Math.ceil(t / n), c = new Uint8Array(
    a * n
  ), s = await l.importKey("raw", r2, { name: "HMAC", hash: { name: `SHA-${i}` } }, false, ["sign"]), o = new Uint8Array(0);
  for (let h = 0; h < a; h++) {
    let y = p(o, e, [h + 1]), d = await l.sign(
      "HMAC",
      s,
      y
    ), m = new Uint8Array(d);
    c.set(m, n * h), o = m;
  }
  return c.subarray(0, t);
}
__name(ne, "ne");
var Rt = Ht.encode(
  "tls13 "
);
async function S(r2, e, t, i, n) {
  let a = Ht.encode(e), c = p(
    [(i & 65280) >> 8, i & 255],
    [Rt.length + a.length],
    Rt,
    a,
    [t.length],
    t
  );
  return ne(r2, c, i, n);
}
__name(S, "S");
async function Kt(r2, e, t, i, n) {
  let a = i >>> 3, c = new Uint8Array(a), s = await l.importKey(
    "raw",
    r2,
    { name: "ECDH", namedCurve: "P-256" },
    false,
    []
  ), o = await l.deriveBits({
    name: "ECDH",
    public: s
  }, e, 256), h = new Uint8Array(o), y = await l.digest("SHA-256", t), d = new Uint8Array(
    y
  ), m = await lt(new Uint8Array(1), c, i), g = await l.digest(`SHA-${i}`, new Uint8Array(
    0
  )), A = new Uint8Array(g), L = await S(m, "derived", A, a, i), f = await lt(L, h, i), u = await S(
    f,
    "c hs traffic",
    d,
    a,
    i
  ), x = await S(f, "s hs traffic", d, a, i), T = await S(u, "key", new Uint8Array(
    0
  ), n, i), $ = await S(x, "key", new Uint8Array(0), n, i), P = await S(u, "iv", new Uint8Array(
    0
  ), 12, i), q = await S(x, "iv", new Uint8Array(0), 12, i);
  return {
    serverHandshakeKey: $,
    serverHandshakeIV: q,
    clientHandshakeKey: T,
    clientHandshakeIV: P,
    handshakeSecret: f,
    clientSecret: u,
    serverSecret: x
  };
}
__name(Kt, "Kt");
async function Tt(r2, e, t, i) {
  let n = t >>> 3, a = new Uint8Array(n), c = await l.digest(`SHA-${t}`, new Uint8Array(0)), s = new Uint8Array(c), o = await S(r2, "derived", s, n, t), h = await lt(
    o,
    a,
    t
  ), y = await S(h, "c ap traffic", e, n, t), d = await S(h, "s ap traffic", e, n, t), m = await S(
    y,
    "key",
    new Uint8Array(0),
    i,
    t
  ), g = await S(d, "key", new Uint8Array(0), i, t), A = await S(
    y,
    "iv",
    new Uint8Array(0),
    12,
    t
  ), L = await S(d, "iv", new Uint8Array(0), 12, t);
  return {
    serverApplicationKey: g,
    serverApplicationIV: L,
    clientApplicationKey: m,
    clientApplicationIV: A
  };
}
__name(Tt, "Tt");
var Z = class {
  static {
    __name(this, "Z");
  }
  constructor(e, t, i) {
    this.mode = e;
    this.key = t;
    this.initialIv = i;
  }
  recordsProcessed = 0n;
  priorPromise = Promise.resolve(new Uint8Array());
  async process(e, t, i) {
    let n = this.processUnsequenced(e, t, i);
    return this.priorPromise = this.priorPromise.then(() => n);
  }
  async processUnsequenced(e, t, i) {
    let n = this.recordsProcessed;
    this.recordsProcessed += 1n;
    let a = this.initialIv.slice(), c = BigInt(a.length), s = c - 1n;
    for (let m = 0n; m < c; m++) {
      let g = n >> (m << 3n);
      if (g === 0n) break;
      a[Number(s - m)] ^= Number(g & 0xffn);
    }
    let o = t << 3, h = { name: "AES-GCM", iv: a, tagLength: o, additionalData: i }, y = await l[this.mode](h, this.key, e);
    return new Uint8Array(y);
  }
};
function yt(r2) {
  return r2 > 64 && r2 < 91 ? r2 - 65 : r2 > 96 && r2 < 123 ? r2 - 71 : r2 > 47 && r2 < 58 ? r2 + 4 : r2 === 43 ? 62 : r2 === 47 ? 63 : r2 === 61 ? 64 : void 0;
}
__name(yt, "yt");
function Dt(r2) {
  let e = r2.length, t = 0, i = 0, n = 64, a = 64, c = 64, s = 64, o = new Uint8Array(e * 0.75);
  for (; t < e; ) n = yt(r2.charCodeAt(t++)), a = yt(r2.charCodeAt(
    t++
  )), c = yt(r2.charCodeAt(t++)), s = yt(r2.charCodeAt(t++)), o[i++] = n << 2 | a >> 4, o[i++] = (a & 15) << 4 | c >> 2, o[i++] = (c & 3) << 6 | s;
  let h = a === 64 ? 0 : c === 64 ? 2 : s === 64 ? 1 : 0;
  return o.subarray(
    0,
    i - h
  );
}
__name(Dt, "Dt");
var M = class extends N {
  static {
    __name(this, "M");
  }
  readASN1Length(e) {
    let t = this.readUint8();
    if (t < 128) return t;
    let i = t & 127, n = 0;
    if (i === 1) return this.readUint8(n);
    if (i === 2) return this.readUint16(
      n
    );
    if (i === 3) return this.readUint24(n);
    if (i === 4) return this.readUint32(n);
    throw new Error(
      `ASN.1 length fields are only supported up to 4 bytes (this one is ${i} bytes)`
    );
  }
  expectASN1Length(e) {
    let t = this.readASN1Length(e);
    return this.expectLength(t);
  }
  readASN1OID() {
    let [e, t] = this.expectASN1Length(0), i = this.readUint8(), n = `${Math.floor(i / 40)}.${i % 40}`;
    for (; t() > 0; ) {
      let a = 0;
      for (; ; ) {
        let c = this.readUint8();
        if (a <<= 7, a += c & 127, c < 128) break;
      }
      n += `.${a}`;
    }
    return e(), n;
  }
  readASN1Boolean() {
    let [e, t] = this.expectASN1Length(0), i = t();
    if (i !== 1)
      throw new Error(`Boolean has weird length: ${i}`);
    let n = this.readUint8(), a;
    if (n === 255) a = true;
    else if (n === 0) a = false;
    else throw new Error(`Boolean has weird value: 0x${K(
      [n]
    )}`);
    return e(), a;
  }
  readASN1UTCTime() {
    let [e, t] = this.expectASN1Length(0), n = this.readUTF8String(t()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);
    if (!n) throw new Error(
      "Unrecognised ASN.1 UTC time format"
    );
    let [, a, c, s, o, h, y] = n, d = parseInt(a, 10), m = d + (d >= 50 ? 1900 : 2e3), g = /* @__PURE__ */ new Date(`${m}-${c}-${s}T${o}:${h}:${y}Z`);
    return e(), g;
  }
  readASN1BitString() {
    let [e, t] = this.expectASN1Length(0), i = this.readUint8(0), n = t(), a = this.readBytes(n);
    if (i > 7) throw new Error(`Invalid right pad value: ${i}`);
    if (i > 0) {
      let c = 8 - i;
      for (let s = n - 1; s > 0; s--) a[s] = 255 & a[s - 1] << c | a[s] >>> i;
      a[0] = a[0] >>> i;
    }
    return e(), a;
  }
};
function mt(r2, e = (i, n) => n, t) {
  return JSON.stringify(r2, (n, a) => e(n, typeof a != "object" || a === null || Array.isArray(a) ? a : Object.fromEntries(Object.entries(a).sort(([c], [s]) => c < s ? -1 : c > s ? 1 : 0))), t);
}
__name(mt, "mt");
var gt = 1;
var tt = 2;
var U = 48;
var ie = 49;
var Q = 6;
var re = 19;
var se = 12;
var bt = 23;
var ft = 5;
var _ = 4;
var ut = 3;
var $t = 163;
var W = 128;
var ae = {
  "2.5.4.6": "C",
  "2.5.4.10": "O",
  "2.5.4.11": "OU",
  "2.5.4.3": "CN",
  "2.5.4.7": "L",
  "2.5.4.8": "ST",
  "2.5.4.12": "T",
  "2.5.4.42": "GN",
  "2.5.4.43": "I",
  "2.5.4.4": "SN",
  "1.2.840.113549.1.9.1": "E-mail"
};
function qt(r2) {
  let { length: e } = r2;
  if (e > 4) throw new Error(`Bit string length ${e} would overflow JS bit operators`);
  let t = 0, i = 0;
  for (let n = r2.length - 1; n >= 0; n--) t |= r2[n] << i, i += 8;
  return t;
}
__name(qt, "qt");
function Ct(r2, e) {
  let t = {};
  r2.expectUint8(U, 0);
  let [i, n] = r2.expectASN1Length(
    0
  );
  for (; n() > 0; ) {
    r2.expectUint8(ie, 0);
    let [a] = r2.expectASN1Length(0);
    r2.expectUint8(
      U,
      0
    );
    let [c] = r2.expectASN1Length(0);
    r2.expectUint8(Q, 0);
    let s = r2.readASN1OID(), o = ae[s] ?? s, h = r2.readUint8();
    if (h !== re) {
      if (h !== se) throw new Error(`Unexpected item type in certificate ${e}: 0x${K([h])}`);
    }
    let [y, d] = r2.expectASN1Length(0), m = r2.readUTF8String(
      d()
    );
    if (y(), c(), a(), t[o] !== void 0) throw new Error(`Duplicate OID ${o} in certificate ${e}`);
    t[o] = m;
  }
  return i(), t;
}
__name(Ct, "Ct");
function Bt(r2, e = 0) {
  let t = [], [i, n] = r2.expectASN1Length(
    0
  );
  for (; n() > 0; ) {
    let a = r2.readUint8(0), [c, s] = r2.expectASN1Length(0), o;
    a === (e | 2) ? o = r2.readUTF8String(s()) : o = r2.readBytes(s()), t.push({ name: o, type: a }), c();
  }
  return i(), t;
}
__name(Bt, "Bt");
function Ft(r2) {
  let e = {
    "1.2.840.113549.1.1.1": { name: "RSAES-PKCS1-v1_5" },
    "1.2.840.113549.1.1.5": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-1" } },
    "1.2.840.113549.1.1.11": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } },
    "1.2.840.113549.1.1.12": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" } },
    "1.2.840.113549.1.1.13": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" } },
    "1.2.840.113549.1.1.10": { name: "RSA-PSS" },
    "1.2.840.113549.1.1.7": { name: "RSA-OAEP" },
    "1.2.840.10045.2.1": { name: "ECDSA", hash: { name: "SHA-1" } },
    "1.2.840.10045.4.1": { name: "ECDSA", hash: { name: "SHA-1" } },
    "1.2.840.10045.4.3.2": { name: "ECDSA", hash: { name: "SHA-256" } },
    "1.2.840.10045.4.3.3": { name: "ECDSA", hash: {
      name: "SHA-384"
    } },
    "1.2.840.10045.4.3.4": { name: "ECDSA", hash: { name: "SHA-512" } },
    "1.3.133.16.840.63.0.2": { name: "ECDH", kdf: "SHA-1" },
    "1.3.132.1.11.1": { name: "ECDH", kdf: "SHA-256" },
    "1.3.132.1.11.2": { name: "ECDH", kdf: "SHA-384" },
    "1.3.132.1.11.3": { name: "ECDH", kdf: "SHA-512" },
    "2.16.840.1.101.3.4.1.2": { name: "AES-CBC", length: 128 },
    "2.16.840.1.101.3.4.1.22": { name: "AES-CBC", length: 192 },
    "2.16.840.1.101.3.4.1.42": { name: "AES-CBC", length: 256 },
    "2.16.840.1.101.3.4.1.6": { name: "AES-GCM", length: 128 },
    "2.16.840.1.101.3.4.1.26": { name: "AES-GCM", length: 192 },
    "2.16.840.1.101.3.4.1.46": { name: "AES-GCM", length: 256 },
    "2.16.840.1.101.3.4.1.4": { name: "AES-CFB", length: 128 },
    "2.16.840.1.101.3.4.1.24": { name: "AES-CFB", length: 192 },
    "2.16.840.1.101.3.4.1.44": { name: "AES-CFB", length: 256 },
    "2.16.840.1.101.3.4.1.5": { name: "AES-KW", length: 128 },
    "2.16.840.1.101.3.4.1.25": { name: "AES-KW", length: 192 },
    "2.16.840.1.101.3.4.1.45": { name: "AES-KW", length: 256 },
    "1.2.840.113549.2.7": { name: "HMAC", hash: { name: "SHA-1" } },
    "1.2.840.113549.2.9": { name: "HMAC", hash: { name: "SHA-256" } },
    "1.2.840.113549.2.10": { name: "HMAC", hash: { name: "SHA-384" } },
    "1.2.840.113549.2.11": { name: "HMAC", hash: { name: "SHA-512" } },
    "1.2.840.113549.1.9.16.3.5": { name: "DH" },
    "1.3.14.3.2.26": { name: "SHA-1" },
    "2.16.840.1.101.3.4.2.1": { name: "SHA-256" },
    "2.16.840.1.101.3.4.2.2": { name: "SHA-384" },
    "2.16.840.1.101.3.4.2.3": { name: "SHA-512" },
    "1.2.840.113549.1.5.12": { name: "PBKDF2" },
    "1.2.840.10045.3.1.7": { name: "P-256" },
    "1.3.132.0.34": { name: "P-384" },
    "1.3.132.0.35": {
      name: "P-521"
    }
  }[r2];
  if (e === void 0) throw new Error(`Unsupported algorithm identifier: ${r2}`);
  return e;
}
__name(Ft, "Ft");
function Ot(r2, e = []) {
  return Object.values(r2).forEach((t) => {
    typeof t == "string" ? e = [...e, t] : e = Ot(t, e);
  }), e;
}
__name(Ot, "Ot");
function Pt(r2) {
  return Ot(r2).join(" / ");
}
__name(Pt, "Pt");
var ce = [
  "digitalSignature",
  "nonRepudiation",
  "keyEncipherment",
  "dataEncipherment",
  "keyAgreement",
  "keyCertSign",
  "cRLSign",
  "encipherOnly",
  "decipherOnly"
];
var X = class r {
  static {
    __name(this, "r");
  }
  serialNumber;
  algorithm;
  issuer;
  validityPeriod;
  subject;
  publicKey;
  signature;
  keyUsage;
  subjectAltNames;
  extKeyUsage;
  authorityKeyIdentifier;
  subjectKeyIdentifier;
  basicConstraints;
  signedData;
  static distinguishedNamesAreEqual(e, t) {
    return mt(e) === mt(t);
  }
  static readableDN(e) {
    return Object.entries(e).map((t) => t.join(
      "="
    )).join(", ");
  }
  constructor(e) {
    let t = e instanceof M ? e : new M(e);
    t.expectUint8(
      U,
      0
    );
    let [i] = t.expectASN1Length(0), n = t.offset;
    t.expectUint8(U, 0);
    let [a] = t.expectASN1Length(
      0
    );
    t.expectBytes([160, 3, 2, 1, 2], 0), t.expectUint8(tt, 0);
    let [c, s] = t.expectASN1Length(
      0
    );
    this.serialNumber = t.subarray(s()), c(), t.expectUint8(U, 0);
    let [o, h] = t.expectASN1Length(
      0
    );
    t.expectUint8(Q, 0), this.algorithm = t.readASN1OID(), h() > 0 && (t.expectUint8(ft, 0), t.expectUint8(0, 0)), o(), this.issuer = Ct(t, "issuer"), t.expectUint8(U, 0);
    let [y] = t.expectASN1Length(
      0
    );
    t.expectUint8(bt, 0);
    let d = t.readASN1UTCTime();
    t.expectUint8(bt, 0);
    let m = t.readASN1UTCTime();
    this.validityPeriod = { notBefore: d, notAfter: m }, y(), this.subject = Ct(t, "subject");
    let g = t.offset;
    t.expectUint8(U, 0);
    let [A] = t.expectASN1Length(0);
    t.expectUint8(U, 0);
    let [
      L,
      f
    ] = t.expectASN1Length(0), u = [];
    for (; f() > 0; ) {
      let H = t.readUint8();
      if (H === Q) {
        let z = t.readASN1OID();
        u.push(z);
      } else H === ft && t.expectUint8(0, 0);
    }
    L(), t.expectUint8(ut, 0);
    let x = t.readASN1BitString();
    this.publicKey = { identifiers: u, data: x, all: t.data.subarray(
      g,
      t.offset
    ) }, A(), t.expectUint8($t, 0);
    let [T] = t.expectASN1Length();
    t.expectUint8(
      U,
      0
    );
    let [$, P] = t.expectASN1Length(0);
    for (; P() > 0; ) {
      t.expectUint8(U, 0);
      let [H, z] = t.expectASN1Length();
      t.expectUint8(Q, 0);
      let B = t.readASN1OID();
      if (B === "2.5.29.17") {
        t.expectUint8(_, 0);
        let [k] = t.expectASN1Length(0);
        t.expectUint8(U, 0);
        let b = Bt(t, W);
        this.subjectAltNames = b.filter((C) => C.type === (2 | W)).map((C) => C.name), k();
      } else if (B === "2.5.29.15") {
        t.expectUint8(
          gt,
          0
        );
        let k = t.readASN1Boolean();
        t.expectUint8(_, 0);
        let [b] = t.expectASN1Length(0);
        t.expectUint8(ut, 0);
        let C = t.readASN1BitString(), E = qt(C), I = new Set(ce.filter((w, j) => E & 1 << j));
        b(), this.keyUsage = { critical: k, usages: I };
      } else if (B === "2.5.29.37") {
        this.extKeyUsage = {}, t.expectUint8(_, 0);
        let [k] = t.expectASN1Length(0);
        t.expectUint8(U, 0);
        let [b, C] = t.expectASN1Length(0);
        for (; C() > 0; ) {
          t.expectUint8(Q, 0);
          let E = t.readASN1OID();
          E === "1.3.6.1.5.5.7.3.1" && (this.extKeyUsage.serverTls = true), E === "1.3.6.1.5.5.7.3.2" && (this.extKeyUsage.clientTls = true);
        }
        b(), k();
      } else if (B === "2.5.29.35") {
        t.expectUint8(_, 0);
        let [
          k
        ] = t.expectASN1Length(0);
        t.expectUint8(U, 0);
        let [b, C] = t.expectASN1Length(0);
        for (; C() > 0; ) {
          let E = t.readUint8();
          if (E === (W | 0)) {
            let [I, w] = t.expectASN1Length(0);
            this.authorityKeyIdentifier = t.readBytes(w()), I();
          } else if (E === (W | 1)) {
            let [I, w] = t.expectASN1Length(0);
            t.skip(
              w(),
              0
            ), I();
          } else if (E === (W | 2)) {
            let [I, w] = t.expectASN1Length(0);
            t.skip(w(), 0), I();
          } else if (E === (W | 33)) {
            let [I, w] = t.expectASN1Length(0);
            t.skip(w(), 0), I();
          } else throw new Error(`Unexpected data type ${E} in authorityKeyIdentifier certificate extension`);
        }
        b(), k();
      } else if (B === "2.5.29.14") {
        t.expectUint8(_, 0);
        let [k] = t.expectASN1Length(0);
        t.expectUint8(_, 0);
        let [b, C] = t.expectASN1Length(0);
        this.subjectKeyIdentifier = t.readBytes(C()), b(), k();
      } else if (B === "2.5.29.19") {
        let k, b = t.readUint8();
        if (b === gt && (k = t.readASN1Boolean(), b = t.readUint8()), b !== _) throw new Error("Unexpected type in certificate basic constraints");
        let [C] = t.expectASN1Length(0);
        t.expectUint8(U, 0);
        let [E, I] = t.expectASN1Length(), w;
        I() > 0 && (t.expectUint8(gt, 0), w = t.readASN1Boolean());
        let j;
        if (I() > 0) {
          t.expectUint8(tt, 0);
          let J = t.readASN1Length(0);
          if (j = J === 1 ? t.readUint8() : J === 2 ? t.readUint16() : J === 3 ? t.readUint24() : void 0, j === void 0) throw new Error("Too many bytes in max path length in certificate basicConstraints");
        }
        E(), C(), this.basicConstraints = { critical: k, ca: w, pathLength: j };
      } else
        t.skip(z(), 0);
      H();
    }
    $(), T(), a(), this.signedData = t.data.subarray(n, t.offset), t.expectUint8(
      U,
      0
    );
    let [q, G] = t.expectASN1Length(0);
    t.expectUint8(Q, 0);
    let D = t.readASN1OID();
    if (G() > 0 && (t.expectUint8(ft, 0), t.expectUint8(0, 0)), q(), D !== this.algorithm) throw new Error(
      `Certificate specifies different signature algorithms inside (${this.algorithm}) and out (${D})`
    );
    t.expectUint8(ut, 0), this.signature = t.readASN1BitString(), i();
  }
  static fromPEM(e) {
    let t = "[A-Z0-9 ]+", i = new RegExp(`-{5}BEGIN ${t}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END ${t}-{5}`, "g"), n = [], a = null;
    for (; a = i.exec(e); ) {
      let c = a[1].replace(/[\r\n]/g, ""), s = Dt(c), o = new this(s);
      n.push(o);
    }
    return n;
  }
  subjectAltNameMatchingHost(e) {
    let t = /[.][^.]+[.][^.]+$/;
    return (this.subjectAltNames ?? []).find((i) => {
      let n = i, a = e;
      if (t.test(e) && t.test(n) && n.startsWith("*.") && (n = n.slice(1), a = a.slice(a.indexOf("."))), n === a) return true;
    });
  }
  isValidAtMoment(e = /* @__PURE__ */ new Date()) {
    return e >= this.validityPeriod.notBefore && e <= this.validityPeriod.notAfter;
  }
  description() {
    return "subject: " + r.readableDN(this.subject) + (this.subjectAltNames ? `
subject alt names: ` + this.subjectAltNames.join(", ") : "") + (this.subjectKeyIdentifier ? `
subject key id: ${K(this.subjectKeyIdentifier, " ")}` : "") + `
issuer: ` + r.readableDN(this.issuer) + (this.authorityKeyIdentifier ? `
authority key id: ${K(this.authorityKeyIdentifier, " ")}` : "") + `
validity: ` + this.validityPeriod.notBefore.toISOString() + " \u2013 " + this.validityPeriod.notAfter.toISOString() + ` (${this.isValidAtMoment() ? "currently valid" : "not valid"})` + (this.keyUsage ? `
key usage (${this.keyUsage.critical ? "critical" : "non-critical"}): ` + [...this.keyUsage.usages].join(", ") : "") + (this.extKeyUsage ? `
extended key usage: TLS server \u2014\xA0${this.extKeyUsage.serverTls}, TLS client \u2014\xA0${this.extKeyUsage.clientTls}` : "") + (this.basicConstraints ? `
basic constraints (${this.basicConstraints.critical ? "critical" : "non-critical"}): CA \u2014\xA0${this.basicConstraints.ca}, path length \u2014 ${this.basicConstraints.pathLength}` : "") + `
signature algorithm: ` + Pt(Ft(this.algorithm));
  }
  toJSON() {
    return {
      serialNumber: [...this.serialNumber],
      algorithm: this.algorithm,
      issuer: this.issuer,
      validityPeriod: { notBefore: this.validityPeriod.notBefore.toISOString(), notAfter: this.validityPeriod.notAfter.toISOString() },
      subject: this.subject,
      publicKey: { identifiers: this.publicKey.identifiers, data: [...this.publicKey.data], all: [...this.publicKey.all] },
      signature: [...this.signature],
      keyUsage: {
        critical: this.keyUsage?.critical,
        usages: [...this.keyUsage?.usages ?? []]
      },
      subjectAltNames: this.subjectAltNames,
      extKeyUsage: this.extKeyUsage,
      authorityKeyIdentifier: this.authorityKeyIdentifier && [...this.authorityKeyIdentifier],
      subjectKeyIdentifier: this.subjectKeyIdentifier && [...this.subjectKeyIdentifier],
      basicConstraints: this.basicConstraints,
      signedData: [
        ...this.signedData
      ]
    };
  }
};
var st = class extends X {
  static {
    __name(this, "st");
  }
};
async function pt(r2, e, t, i, n) {
  r2.expectUint8(U, 0);
  let [a] = r2.expectASN1Length(0);
  r2.expectUint8(
    tt,
    0
  );
  let [c, s] = r2.expectASN1Length(0), o = r2.readBytes(s());
  c(), r2.expectUint8(tt, 0);
  let [h, y] = r2.expectASN1Length(0), d = r2.readBytes(y());
  h(), a();
  let m = /* @__PURE__ */ __name((u, x) => u.length > x ? u.subarray(u.length - x) : u.length < x ? p(new Uint8Array(x - u.length), u) : u, "m"), g = i === "P-256" ? 32 : 48, A = p(m(o, g), m(d, g)), L = await l.importKey(
    "spki",
    e,
    { name: "ECDSA", namedCurve: i },
    false,
    ["verify"]
  );
  if (await l.verify({ name: "ECDSA", hash: n }, L, A, t) !== true) throw new Error(
    "ECDSA-SECP256R1-SHA256 certificate verify failed"
  );
}
__name(pt, "pt");
async function jt(r2, e, t, i = true, n = true) {
  for (let h of e) ;
  let a = e[0];
  if (a.subjectAltNameMatchingHost(
    r2
  ) === void 0) throw new Error(`No matching subjectAltName for ${r2}`);
  if (!a.isValidAtMoment())
    throw new Error("End-user certificate is not valid now");
  if (i && !a.extKeyUsage?.serverTls)
    throw new Error("End-user certificate has no TLS server extKeyUsage");
  let o = false;
  for (let h of t)
    ;
  for (let h = 0, y = e.length; h < y; h++) {
    let d = e[h], m = d.authorityKeyIdentifier, g;
    if (m === void 0 ? g = t.find((f) => X.distinguishedNamesAreEqual(f.subject, d.issuer)) : g = t.find((f) => f.subjectKeyIdentifier !== void 0 && O(f.subjectKeyIdentifier, m)), g === void 0 && (g = e[h + 1]), g === void 0) throw new Error("Ran out of certificates before reaching trusted root");
    let A = g instanceof st;
    if (g.isValidAtMoment() !== true) throw new Error("Signing certificate is not valid now");
    if (n && g.keyUsage?.usages.has("digitalSignature") !== true)
      throw new Error("Signing certificate keyUsage does not include digital signatures");
    if (g.basicConstraints?.ca !== true) throw new Error("Signing certificate basicConstraints do not indicate a CA certificate");
    let { pathLength: L } = g.basicConstraints;
    if (L !== void 0 && L < h) throw new Error("Exceeded certificate pathLength");
    if (d.algorithm === "1.2.840.10045.4.3.2" || d.algorithm === "1.2.840.10045.4.3.3") {
      let f = d.algorithm === "1.2.840.10045.4.3.2" ? "SHA-256" : "SHA-384", u = g.publicKey.identifiers, x = u.includes(
        "1.2.840.10045.3.1.7"
      ) ? "P-256" : u.includes("1.3.132.0.34") ? "P-384" : void 0;
      if (x === void 0) throw new Error("Unsupported signing key curve");
      let T = new M(d.signature);
      await pt(T, g.publicKey.all, d.signedData, x, f);
    } else if (d.algorithm === "1.2.840.113549.1.1.11" || d.algorithm === "1.2.840.113549.1.1.12") {
      let f = d.algorithm === "1.2.840.113549.1.1.11" ? "SHA-256" : "SHA-384", u = await l.importKey("spki", g.publicKey.all, { name: "RSASSA-PKCS1-v1_5", hash: f }, false, ["verify"]);
      if (await l.verify({ name: "RSASSA-PKCS1-v1_5" }, u, d.signature, d.signedData) !== true) throw new Error("RSASSA_PKCS1-v1_5-SHA256 certificate verify failed");
    } else throw new Error("Unsupported signing algorithm");
    if (A) {
      o = true;
      break;
    }
  }
  return o;
}
__name(jt, "jt");
var oe = new TextEncoder();
async function Vt(r2, e, t, i, n, a = true, c = true) {
  let s = new M(await e());
  s.expectUint8(8, 0);
  let [o] = s.expectLengthUint24(), [h, y] = s.expectLengthUint16(0);
  for (; y() > 0; ) {
    let R = s.readUint16(0);
    if (R === 0) s.expectUint16(0, 0);
    else if (R === 10) {
      let [V, F] = s.expectLengthUint16("groups data");
      s.skip(F(), 0), V();
    } else throw new Error(`Unsupported server encrypted extension type 0x${K([R]).padStart(4, "0")}`);
  }
  h(), o(), s.remaining() === 0 && s.extend(await e());
  let d = false, m = s.readUint8();
  if (m === 13) {
    d = true;
    let [R] = s.expectLengthUint24(
      "certificate request data"
    );
    s.expectUint8(0, 0);
    let [V, F] = s.expectLengthUint16("certificate request extensions");
    s.skip(F(), 0), V(), R(), s.remaining() === 0 && s.extend(
      await e()
    ), m = s.readUint8();
  }
  if (m !== 11) throw new Error(`Unexpected handshake message type 0x${K([m])}`);
  let [g] = s.expectLengthUint24(0);
  s.expectUint8(0, 0);
  let [A, L] = s.expectLengthUint24(0), f = [];
  for (; L() > 0; ) {
    let [R] = s.expectLengthUint24(0), V = new X(s);
    f.push(V), R();
    let [F, et] = s.expectLengthUint16(), wt = s.subarray(et());
    F();
  }
  if (A(), g(), f.length === 0) throw new Error("No certificates supplied");
  let u = f[0], x = s.data.subarray(
    0,
    s.offset
  ), T = p(i, x), $ = await l.digest("SHA-256", T), P = new Uint8Array($), q = p(oe.encode(
    " ".repeat(64) + "TLS 1.3, server CertificateVerify"
  ), [0], P);
  s.remaining() === 0 && s.extend(await e()), s.expectUint8(15, 0);
  let [G] = s.expectLengthUint24(0), D = s.readUint16();
  if (D === 1027) {
    let [R] = s.expectLengthUint16();
    await pt(
      s,
      u.publicKey.all,
      q,
      "P-256",
      "SHA-256"
    ), R();
  } else if (D === 2052) {
    let [R, V] = s.expectLengthUint16(), F = s.subarray(V());
    R();
    let et = await l.importKey("spki", u.publicKey.all, { name: "RSA-PSS", hash: "SHA-256" }, false, ["verify"]);
    if (await l.verify({ name: "RSA-PSS", saltLength: 32 }, et, F, q) !== true)
      throw new Error("RSA-PSS-RSAE-SHA256 certificate verify failed");
  } else throw new Error(
    `Unsupported certificate verify signature type 0x${K([D]).padStart(4, "0")}`
  );
  G();
  let H = s.data.subarray(0, s.offset), z = p(i, H), B = await S(t, "finished", new Uint8Array(
    0
  ), 32, 256), k = await l.digest("SHA-256", z), b = await l.importKey("raw", B, {
    name: "HMAC",
    hash: { name: "SHA-256" }
  }, false, ["sign"]), C = await l.sign("HMAC", b, k), E = new Uint8Array(
    C
  );
  s.remaining() === 0 && s.extend(await e()), s.expectUint8(20, 0);
  let [I, w] = s.expectLengthUint24(
    0
  ), j = s.readBytes(w());
  if (I(), s.remaining() !== 0) throw new Error("Unexpected extra bytes in server handshake");
  if (O(j, E) !== true) throw new Error("Invalid server verify hash");
  if (!await jt(r2, f, n, a, c)) throw new Error("Validated certificate chain did not end in a trusted root");
  return [s.data, d];
}
__name(Vt, "Vt");
async function he(r2, e, t, i, {
  useSNI: n,
  requireServerTlsExtKeyUsage: a,
  requireDigitalSigKeyUsage: c,
  writePreData: s,
  expectPreData: o,
  commentPreData: h
} = {}) {
  n ??= true, a ??= true, c ??= true;
  let y = await l.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveKey", "deriveBits"]), d = await l.exportKey("raw", y.publicKey), m = new Uint8Array(32);
  crypto.getRandomValues(m);
  let A = St(
    r2,
    d,
    m,
    n
  ).array(), L = s ? p(s, A) : A;
  if (i(L), o) {
    let v = await t(o.length);
    if (!v || !O(v, o))
      throw new Error("Pre data did not match expectation");
  }
  let f = await ht(t, 22);
  if (f === void 0) throw new Error("Connection closed while awaiting server hello");
  let u = new N(
    f.content
  ), x = Ut(u, m), T = await ht(t, 20);
  if (T === void 0) throw new Error("Connection closed awaiting server cipher change");
  let $ = new N(T.content), [P] = $.expectLength(
    1
  );
  $.expectUint8(1, 0), P();
  let q = A.subarray(5), G = f.content, D = p(q, G), H = await Kt(
    x,
    y.privateKey,
    D,
    256,
    16
  ), z = await l.importKey("raw", H.serverHandshakeKey, { name: "AES-GCM" }, false, ["decrypt"]), B = new Z("decrypt", z, H.serverHandshakeIV), k = await l.importKey(
    "raw",
    H.clientHandshakeKey,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  ), b = new Z(
    "encrypt",
    k,
    H.clientHandshakeIV
  ), C = /* @__PURE__ */ __name(async () => {
    let v = await dt(t, B, 22);
    if (v === void 0) throw new Error(
      "Premature end of encrypted server handshake"
    );
    return v;
  }, "C"), [E, I] = await Vt(
    r2,
    C,
    H.serverSecret,
    D,
    e,
    a,
    c
  ), w = new N(6);
  w.writeUint8(20, 0), w.writeUint16(771, 0);
  let j = w.writeLengthUint16();
  w.writeUint8(1, 0), j();
  let J = w.array(), Y = new Uint8Array(0);
  if (I) {
    let v = new N(8);
    v.writeUint8(11, 0);
    let nt = v.writeLengthUint24("client certificate data");
    v.writeUint8(
      0,
      0
    ), v.writeUint24(0, 0), nt(), Y = v.array();
  }
  let R = p(D, E, Y), V = await l.digest("SHA-256", R), F = new Uint8Array(V), et = await S(
    H.clientSecret,
    "finished",
    new Uint8Array(0),
    32,
    256
  ), wt = await l.importKey("raw", et, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), Mt = await l.sign("HMAC", wt, F), _t = new Uint8Array(Mt), at = new N(36);
  at.writeUint8(
    20,
    0
  );
  let Gt = at.writeLengthUint24(0);
  at.writeBytes(_t), Gt();
  let zt = at.array(), kt = await At(
    p(Y, zt),
    b,
    22
  ), Et = F;
  if (Y.length > 0) {
    let v = R.subarray(0, R.length - Y.length), nt = await l.digest("SHA-256", v);
    Et = new Uint8Array(nt);
  }
  let ct = await Tt(
    H.handshakeSecret,
    Et,
    256,
    16
  ), Jt = await l.importKey("raw", ct.clientApplicationKey, { name: "AES-GCM" }, true, ["encrypt"]), Zt = new Z("encrypt", Jt, ct.clientApplicationIV), Qt = await l.importKey(
    "raw",
    ct.serverApplicationKey,
    { name: "AES-GCM" },
    true,
    ["decrypt"]
  ), Wt = new Z("decrypt", Qt, ct.serverApplicationIV), ot = false;
  return [() => {
    if (!ot) {
      let v = p(J, ...kt);
      i(v), ot = true;
    }
    return dt(
      t,
      Wt
    );
  }, async (v) => {
    let nt = ot;
    ot = true;
    let It = await At(v, Zt, 23), Xt = nt ? p(...It) : p(
      J,
      ...kt,
      ...It
    );
    i(Xt);
  }];
}
__name(he, "he");
var xt = class {
  static {
    __name(this, "xt");
  }
  queue;
  outstandingRequest;
  constructor() {
    this.queue = [];
  }
  enqueue(e) {
    this.queue.push(e), this.dequeue();
  }
  dequeue() {
    if (this.outstandingRequest === void 0) return;
    let { resolve: e, bytes: t } = this.outstandingRequest, i = this.bytesInQueue();
    if (i < t && this.socketIsNotClosed()) return;
    if (t = Math.min(t, i), t === 0) return e(void 0);
    this.outstandingRequest = void 0;
    let n = this.queue[0], a = n.length;
    if (a === t) return this.queue.shift(), e(n);
    if (a > t) return this.queue[0] = n.subarray(t), e(n.subarray(0, t));
    {
      let c = new Uint8Array(t), s = t, o = 0;
      for (; s > 0; ) {
        let h = this.queue[0], y = h.length;
        y <= s ? (this.queue.shift(), c.set(
          h,
          o
        ), o += y, s -= y) : (this.queue[0] = h.subarray(s), c.set(h.subarray(0, s), o), s -= s, o += s);
      }
      return e(c);
    }
  }
  bytesInQueue() {
    return this.queue.reduce((e, t) => e + t.length, 0);
  }
  async read(e) {
    if (this.outstandingRequest !== void 0) throw new Error("Can\u2019t read while already awaiting read");
    return new Promise((t) => {
      this.outstandingRequest = { resolve: t, bytes: e }, this.dequeue();
    });
  }
};
var vt = class extends xt {
  static {
    __name(this, "vt");
  }
  constructor(t) {
    super();
    this.socket = t;
    t.addEventListener(
      "message",
      (i) => this.enqueue(new Uint8Array(i.data))
    ), t.addEventListener("close", () => this.dequeue());
  }
  socketIsNotClosed() {
    let { socket: t } = this, { readyState: i } = t;
    return i <= 1;
  }
};
var Lt = class extends xt {
  static {
    __name(this, "Lt");
  }
  constructor(t) {
    super();
    this.socket = t;
    t.on("data", (i) => this.enqueue(
      new Uint8Array(i)
    )), t.on("close", () => this.dequeue());
  }
  socketIsNotClosed() {
    let { socket: t } = this, { readyState: i } = t;
    return i === "opening" || i === "open";
  }
};

// src/isrgrootx1.pem
var isrgrootx1_default = "-----BEGIN CERTIFICATE-----\nMIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw\nTzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh\ncmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4\nWhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu\nZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY\nMTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc\nh77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+\n0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U\nA5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW\nT8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH\nB5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC\nB5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv\nKBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn\nOlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn\njh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw\nqHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI\nrU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV\nHRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq\nhkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL\nubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ\n3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK\nNFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5\nORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur\nTkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC\njNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc\noyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq\n4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA\nmRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d\nemyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=\n-----END CERTIFICATE-----\n";

// node_modules/fast-equals/dist/esm/index.mjs
init_shims();
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return /* @__PURE__ */ __name(function isEqual(a, b, state) {
    return comparatorA(a, b, state) && comparatorB(a, b, state);
  }, "isEqual");
}
__name(combineComparators, "combineComparators");
function createIsCircular(areItemsEqual) {
  return /* @__PURE__ */ __name(function isCircular(a, b, state) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
      return areItemsEqual(a, b, state);
    }
    var cache = state.cache;
    var cachedA = cache.get(a);
    var cachedB = cache.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a;
    }
    cache.set(a, b);
    cache.set(b, a);
    var result = areItemsEqual(a, b, state);
    cache.delete(a);
    cache.delete(b);
    return result;
  }, "isCircular");
}
__name(createIsCircular, "createIsCircular");
function getStrictProperties(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
__name(getStrictProperties, "getStrictProperties");
var hasOwn = Object.hasOwn || function(object, property) {
  return hasOwnProperty.call(object, property);
};
function sameValueZeroEqual(a, b) {
  return a || b ? a === b : a === b || a !== a && b !== b;
}
__name(sameValueZeroEqual, "sameValueZeroEqual");
var OWNER = "_owner";
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var keys = Object.keys;
function areArraysEqual(a, b, state) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!state.equals(a[index], b[index], index, index, a, b, state)) {
      return false;
    }
  }
  return true;
}
__name(areArraysEqual, "areArraysEqual");
function areDatesEqual(a, b) {
  return sameValueZeroEqual(a.getTime(), b.getTime());
}
__name(areDatesEqual, "areDatesEqual");
function areMapsEqual(a, b, state) {
  if (a.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a.entries();
  var index = 0;
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      var _a = aResult.value, aKey = _a[0], aValue = _a[1];
      var _b = bResult.value, bKey = _b[0], bValue = _b[1];
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aKey, bKey, index, matchIndex, a, b, state) && state.equals(aValue, bValue, aKey, bKey, a, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index++;
  }
  return true;
}
__name(areMapsEqual, "areMapsEqual");
function areObjectsEqual(a, b, state) {
  var properties = keys(a);
  var index = properties.length;
  if (keys(b).length !== index) {
    return false;
  }
  var property;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property) || !state.equals(a[property], b[property], property, property, a, b, state)) {
      return false;
    }
  }
  return true;
}
__name(areObjectsEqual, "areObjectsEqual");
function areObjectsEqualStrict(a, b, state) {
  var properties = getStrictProperties(a);
  var index = properties.length;
  if (getStrictProperties(b).length !== index) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property)) {
      return false;
    }
    if (!state.equals(a[property], b[property], property, property, a, b, state)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor(a, property);
    descriptorB = getOwnPropertyDescriptor(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
__name(areObjectsEqualStrict, "areObjectsEqualStrict");
function arePrimitiveWrappersEqual(a, b) {
  return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
__name(arePrimitiveWrappersEqual, "arePrimitiveWrappersEqual");
function areRegExpsEqual(a, b) {
  return a.source === b.source && a.flags === b.flags;
}
__name(areRegExpsEqual, "areRegExpsEqual");
function areSetsEqual(a, b, state) {
  if (a.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
__name(areSetsEqual, "areSetsEqual");
function areTypedArraysEqual(a, b) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
__name(areTypedArraysEqual, "areTypedArraysEqual");
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var isArray = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a) {
  var areArraysEqual2 = _a.areArraysEqual, areDatesEqual2 = _a.areDatesEqual, areMapsEqual2 = _a.areMapsEqual, areObjectsEqual2 = _a.areObjectsEqual, arePrimitiveWrappersEqual2 = _a.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a.areRegExpsEqual, areSetsEqual2 = _a.areSetsEqual, areTypedArraysEqual2 = _a.areTypedArraysEqual;
  return /* @__PURE__ */ __name(function comparator(a, b, state) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null || typeof a !== "object" || typeof b !== "object") {
      return a !== a && b !== b;
    }
    var constructor = a.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a, b, state);
    }
    if (isArray(a)) {
      return areArraysEqual2(a, b, state);
    }
    if (isTypedArray != null && isTypedArray(a)) {
      return areTypedArraysEqual2(a, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a, b, state);
    }
    var tag = getTag(a);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a, b, state);
    }
    return false;
  }, "comparator");
}
__name(createEqualityComparator, "createEqualityComparator");
function createEqualityComparatorConfig(_a) {
  var circular = _a.circular, createCustomConfig = _a.createCustomConfig, strict = _a.strict;
  var config = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual
  };
  if (createCustomConfig) {
    config = assign({}, config, createCustomConfig(config));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
    config = assign({}, config, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config;
}
__name(createEqualityComparatorConfig, "createEqualityComparatorConfig");
function createInternalEqualityComparator(compare) {
  return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a, b, state);
  };
}
__name(createInternalEqualityComparator, "createInternalEqualityComparator");
function createIsEqual(_a) {
  var circular = _a.circular, comparator = _a.comparator, createState = _a.createState, equals = _a.equals, strict = _a.strict;
  if (createState) {
    return /* @__PURE__ */ __name(function isEqual(a, b) {
      var _a2 = createState(), _b = _a2.cache, cache = _b === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b, meta = _a2.meta;
      return comparator(a, b, {
        cache,
        equals,
        meta,
        strict
      });
    }, "isEqual");
  }
  if (circular) {
    return /* @__PURE__ */ __name(function isEqual(a, b) {
      return comparator(a, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    }, "isEqual");
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return /* @__PURE__ */ __name(function isEqual(a, b) {
    return comparator(a, b, state);
  }, "isEqual");
}
__name(createIsEqual, "createIsEqual");
var deepEqual = createCustomEqual();
var strictDeepEqual = createCustomEqual({ strict: true });
var circularDeepEqual = createCustomEqual({ circular: true });
var strictCircularDeepEqual = createCustomEqual({
  circular: true,
  strict: true
});
var shallowEqual = createCustomEqual({
  createInternalComparator: /* @__PURE__ */ __name(function() {
    return sameValueZeroEqual;
  }, "createInternalComparator")
});
var strictShallowEqual = createCustomEqual({
  strict: true,
  createInternalComparator: /* @__PURE__ */ __name(function() {
    return sameValueZeroEqual;
  }, "createInternalComparator")
});
var circularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: /* @__PURE__ */ __name(function() {
    return sameValueZeroEqual;
  }, "createInternalComparator")
});
var strictCircularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: /* @__PURE__ */ __name(function() {
    return sameValueZeroEqual;
  }, "createInternalComparator"),
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.circular, circular = _a === void 0 ? false : _a, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
  var config = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}
__name(createCustomEqual, "createCustomEqual");

// export/index.ts
init_shims();
var import_pg = __toESM(require_lib2());
init_net();

// export/httpQuery.ts
init_shims();
init_url();
init_net();
var import_utils = __toESM(require_utils());
var import_type_overrides = __toESM(require_type_overrides());
var NeonDbError = class extends Error {
  static {
    __name(this, "NeonDbError");
  }
  name = "NeonDbError";
  severity;
  code;
  detail;
  hint;
  position;
  internalPosition;
  internalQuery;
  where;
  schema;
  table;
  column;
  dataType;
  constraint;
  file;
  line;
  routine;
  sourceError;
};
var txnArgErrMsg = "transaction() expects an array of queries, or a function returning an array of queries";
var errorFields = [
  "severity",
  "code",
  "detail",
  "hint",
  "position",
  "internalPosition",
  "internalQuery",
  "where",
  "schema",
  "table",
  "column",
  "dataType",
  "constraint",
  "file",
  "line",
  "routine"
];
function neon(connectionString, {
  arrayMode: neonOptArrayMode,
  fullResults: neonOptFullResults,
  fetchOptions: neonOptFetchOptions,
  isolationLevel: neonOptIsolationLevel,
  readOnly: neonOptReadOnly,
  deferrable: neonOptDeferrable,
  queryCallback,
  resultCallback,
  authToken
} = {}) {
  if (!connectionString)
    throw new Error(
      "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?"
    );
  let db;
  try {
    db = parse(connectionString);
  } catch {
    throw new Error(
      "Database connection string provided to `neon()` is not a valid URL. Connection string: " + String(connectionString)
    );
  }
  const { protocol, username, password, hostname, port, pathname } = db;
  if (protocol !== "postgres:" && protocol !== "postgresql:" || !username || !hostname || !pathname) {
    throw new Error(
      "Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value"
    );
  }
  function resolve(strings, ...params) {
    let query;
    let queryOpts;
    if (typeof strings === "string") {
      query = strings;
      queryOpts = params[1];
      params = params[0] ?? [];
    } else {
      query = "";
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += "$" + (i + 1);
      }
    }
    params = params.map((param) => (0, import_utils.prepareValue)(param));
    const parameterizedQuery = { query, params };
    if (queryCallback) queryCallback(parameterizedQuery);
    return createNeonQueryPromise(execute, parameterizedQuery, queryOpts);
  }
  __name(resolve, "resolve");
  resolve.transaction = async (queries2, txnOpts) => {
    if (typeof queries2 === "function") queries2 = queries2(resolve);
    if (!Array.isArray(queries2)) throw new Error(txnArgErrMsg);
    queries2.forEach((query) => {
      if (query[Symbol.toStringTag] !== "NeonQueryPromise")
        throw new Error(txnArgErrMsg);
    });
    const parameterizedQueries = queries2.map(
      (query) => query.parameterizedQuery
    );
    const opts = queries2.map((query) => query.opts ?? {});
    return execute(parameterizedQueries, opts, txnOpts);
  };
  async function execute(parameterizedQuery, allSqlOpts, txnOpts) {
    const { fetchEndpoint, fetchFunction } = Socket;
    const url = typeof fetchEndpoint === "function" ? fetchEndpoint(hostname, port, {
      jwtAuth: authToken !== void 0
    }) : fetchEndpoint;
    const bodyData = Array.isArray(parameterizedQuery) ? { queries: parameterizedQuery } : parameterizedQuery;
    let resolvedFetchOptions = neonOptFetchOptions ?? {};
    let resolvedArrayMode = neonOptArrayMode ?? false;
    let resolvedFullResults = neonOptFullResults ?? false;
    let resolvedIsolationLevel = neonOptIsolationLevel;
    let resolvedReadOnly = neonOptReadOnly;
    let resolvedDeferrable = neonOptDeferrable;
    if (txnOpts !== void 0) {
      if (txnOpts.fetchOptions !== void 0)
        resolvedFetchOptions = {
          ...resolvedFetchOptions,
          ...txnOpts.fetchOptions
        };
      if (txnOpts.arrayMode !== void 0)
        resolvedArrayMode = txnOpts.arrayMode;
      if (txnOpts.fullResults !== void 0)
        resolvedFullResults = txnOpts.fullResults;
      if (txnOpts.isolationLevel !== void 0)
        resolvedIsolationLevel = txnOpts.isolationLevel;
      if (txnOpts.readOnly !== void 0) resolvedReadOnly = txnOpts.readOnly;
      if (txnOpts.deferrable !== void 0)
        resolvedDeferrable = txnOpts.deferrable;
    }
    if (allSqlOpts !== void 0 && !Array.isArray(allSqlOpts) && allSqlOpts.fetchOptions !== void 0) {
      resolvedFetchOptions = {
        ...resolvedFetchOptions,
        ...allSqlOpts.fetchOptions
      };
    }
    const headers = {
      "Neon-Connection-String": connectionString,
      "Neon-Raw-Text-Output": "true",
      // because we do our own parsing with node-postgres
      "Neon-Array-Mode": "true"
      // this saves data and post-processing even if we return objects, not arrays
    };
    if (typeof authToken === "string") {
      headers["Authorization"] = `Bearer ${authToken}`;
    } else if (typeof authToken === "function") {
      headers["Authorization"] = `Bearer ${Promise.resolve(authToken())}`;
    }
    if (Array.isArray(parameterizedQuery)) {
      if (resolvedIsolationLevel !== void 0)
        headers["Neon-Batch-Isolation-Level"] = resolvedIsolationLevel;
      if (resolvedReadOnly !== void 0)
        headers["Neon-Batch-Read-Only"] = String(resolvedReadOnly);
      if (resolvedDeferrable !== void 0)
        headers["Neon-Batch-Deferrable"] = String(resolvedDeferrable);
    }
    let response;
    try {
      response = await (fetchFunction ?? fetch)(url, {
        method: "POST",
        body: JSON.stringify(bodyData),
        // TODO: use json-custom-numbers to allow BigInts?
        headers,
        ...resolvedFetchOptions
        // this is last, so it gets the final say
      });
    } catch (err) {
      const connectErr = new NeonDbError(
        `Error connecting to database: ${err.message}`
      );
      connectErr.sourceError = err;
      throw connectErr;
    }
    if (response.ok) {
      const rawResults = await response.json();
      if (Array.isArray(parameterizedQuery)) {
        const resultArray = rawResults.results;
        if (!Array.isArray(resultArray))
          throw new NeonDbError(
            "Neon internal error: unexpected result format"
          );
        return resultArray.map((result, i) => {
          let sqlOpts = allSqlOpts[i] ?? {};
          let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
          let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
          return processQueryResult(result, {
            arrayMode,
            fullResults,
            parameterizedQuery: parameterizedQuery[i],
            resultCallback,
            types: sqlOpts.types
          });
        });
      } else {
        let sqlOpts = allSqlOpts ?? {};
        let arrayMode = sqlOpts.arrayMode ?? resolvedArrayMode;
        let fullResults = sqlOpts.fullResults ?? resolvedFullResults;
        return processQueryResult(rawResults, {
          arrayMode,
          fullResults,
          parameterizedQuery,
          resultCallback,
          types: sqlOpts.types
        });
      }
    } else {
      const { status } = response;
      if (status === 400) {
        const json = await response.json();
        const dbError = new NeonDbError(json.message);
        for (const field of errorFields)
          dbError[field] = json[field] ?? void 0;
        throw dbError;
      } else {
        const text = await response.text();
        throw new NeonDbError(`Server error (HTTP status ${status}): ${text}`);
      }
    }
  }
  __name(execute, "execute");
  return resolve;
}
__name(neon, "neon");
function createNeonQueryPromise(execute, parameterizedQuery, opts) {
  return {
    [Symbol.toStringTag]: "NeonQueryPromise",
    parameterizedQuery,
    opts,
    then: /* @__PURE__ */ __name((resolve, reject) => execute(parameterizedQuery, opts).then(resolve, reject), "then"),
    catch: /* @__PURE__ */ __name((reject) => execute(parameterizedQuery, opts).catch(reject), "catch"),
    finally: /* @__PURE__ */ __name((finallyFn) => execute(parameterizedQuery, opts).finally(finallyFn), "finally")
  };
}
__name(createNeonQueryPromise, "createNeonQueryPromise");
function processQueryResult(rawResults, {
  arrayMode,
  fullResults,
  parameterizedQuery,
  resultCallback,
  types: customTypes
}) {
  const types2 = new import_type_overrides.default(customTypes);
  const colNames = rawResults.fields.map((field) => field.name);
  const parsers = rawResults.fields.map(
    (field) => types2.getTypeParser(field.dataTypeID)
  );
  const rows = arrayMode === true ? (
    // maintain array-of-arrays structure
    rawResults.rows.map(
      (row) => row.map(
        (col, i) => col === null ? null : parsers[i](col)
      )
    )
  ) : (
    // turn into an object
    rawResults.rows.map((row) => {
      return Object.fromEntries(
        row.map((col, i) => [
          colNames[i],
          col === null ? null : parsers[i](col)
        ])
      );
    })
  );
  if (resultCallback)
    resultCallback(parameterizedQuery, rawResults, rows, {
      arrayMode,
      fullResults
    });
  if (fullResults) {
    rawResults.viaNeonFetch = true;
    rawResults.rowAsArray = arrayMode;
    rawResults.rows = rows;
    rawResults._parsers = parsers;
    rawResults._types = types2;
    return rawResults;
  }
  return rows;
}
__name(processQueryResult, "processQueryResult");

// export/index.ts
var import_connection_parameters = __toESM(require_connection_parameters());
var import_pg2 = __toESM(require_lib2());
var NeonClient = class extends import_pg.Client {
  constructor(config) {
    super(config);
    this.config = config;
  }
  static {
    __name(this, "NeonClient");
  }
  get neonConfig() {
    return this.connection.stream;
  }
  connect(callback) {
    const { neonConfig } = this;
    if (neonConfig.forceDisablePgSSL) {
      this.ssl = this.connection.ssl = false;
    }
    if (this.ssl && neonConfig.useSecureWebSocket) {
      console.warn(
        `SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.`
      );
    }
    const hasConfiguredHost = this.config?.host !== void 0 || this.config?.connectionString !== void 0 || process.env.PGHOST !== void 0;
    const defaultUser = process.env.USER ?? process.env.USERNAME;
    if (!hasConfiguredHost && this.host === "localhost" && this.user === defaultUser && this.database === defaultUser && this.password === null)
      throw new Error(
        `No database host or connection string was set, and key parameters have default values (host: localhost, user: ${defaultUser}, db: ${defaultUser}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`
      );
    const result = super.connect(callback);
    const pipelineTLS = neonConfig.pipelineTLS && this.ssl;
    const pipelineConnect = neonConfig.pipelineConnect === "password";
    if (!pipelineTLS && !neonConfig.pipelineConnect) return result;
    const con = this.connection;
    if (pipelineTLS) {
      con.on("connect", () => con.stream.emit("data", "S"));
    }
    if (pipelineConnect) {
      con.removeAllListeners("authenticationCleartextPassword");
      con.removeAllListeners("readyForQuery");
      con.once(
        "readyForQuery",
        () => con.on("readyForQuery", this._handleReadyForQuery.bind(this))
      );
      const connectEvent = this.ssl ? "sslconnect" : "connect";
      con.on(connectEvent, () => {
        this._handleAuthCleartextPassword();
        this._handleReadyForQuery();
      });
    }
    return result;
  }
  async _handleAuthSASLContinue(msg) {
    const session = this.saslSession;
    const password = this.password;
    const serverData = msg.data;
    if (session.message !== "SASLInitialResponse" || typeof password !== "string" || typeof serverData !== "string")
      throw new Error("SASL: protocol error");
    const attrPairs = Object.fromEntries(
      serverData.split(",").map((attrValue) => {
        if (!/^.=/.test(attrValue))
          throw new Error("SASL: Invalid attribute pair entry");
        const name = attrValue[0];
        const value = attrValue.substring(2);
        return [name, value];
      })
    );
    const nonce = attrPairs.r;
    const salt = attrPairs.s;
    const iterationText = attrPairs.i;
    if (!nonce || !/^[!-+--~]+$/.test(nonce))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable"
      );
    if (!salt || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
      salt
    ))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64"
      );
    if (!iterationText || !/^[1-9][0-9]*$/.test(iterationText))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count"
      );
    if (!nonce.startsWith(session.clientNonce))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce"
      );
    if (nonce.length === session.clientNonce.length)
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short"
      );
    const iterations = parseInt(iterationText, 10);
    const saltBytes = Buffer2.from(salt, "base64");
    const enc = new TextEncoder();
    const passwordBytes = enc.encode(password);
    const iterHmacKey = await crypto.subtle.importKey(
      "raw",
      passwordBytes,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    let ui1 = new Uint8Array(
      await crypto.subtle.sign(
        "HMAC",
        iterHmacKey,
        Buffer2.concat([saltBytes, Buffer2.from([0, 0, 0, 1])])
      )
    );
    let ui = ui1;
    for (var i = 0; i < iterations - 1; i++) {
      ui1 = new Uint8Array(await crypto.subtle.sign("HMAC", iterHmacKey, ui1));
      ui = Buffer2.from(ui.map((_2, i2) => ui[i2] ^ ui1[i2]));
    }
    const saltedPassword = ui;
    const ckHmacKey = await crypto.subtle.importKey(
      "raw",
      saltedPassword,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    const clientKey = new Uint8Array(
      await crypto.subtle.sign("HMAC", ckHmacKey, enc.encode("Client Key"))
    );
    const storedKey = await crypto.subtle.digest("SHA-256", clientKey);
    const clientFirstMessageBare = "n=*,r=" + session.clientNonce;
    const serverFirstMessage = "r=" + nonce + ",s=" + salt + ",i=" + iterations;
    const clientFinalMessageWithoutProof = "c=biws,r=" + nonce;
    const authMessage = clientFirstMessageBare + "," + serverFirstMessage + "," + clientFinalMessageWithoutProof;
    const csHmacKey = await crypto.subtle.importKey(
      "raw",
      storedKey,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    var clientSignature = new Uint8Array(
      await crypto.subtle.sign("HMAC", csHmacKey, enc.encode(authMessage))
    );
    var clientProofBytes = Buffer2.from(
      clientKey.map((_2, i2) => clientKey[i2] ^ clientSignature[i2])
    );
    var clientProof = clientProofBytes.toString("base64");
    const skHmacKey = await crypto.subtle.importKey(
      "raw",
      saltedPassword,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    const serverKey = await crypto.subtle.sign(
      "HMAC",
      skHmacKey,
      enc.encode("Server Key")
    );
    const ssbHmacKey = await crypto.subtle.importKey(
      "raw",
      serverKey,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    var serverSignatureBytes = Buffer2.from(
      await crypto.subtle.sign("HMAC", ssbHmacKey, enc.encode(authMessage))
    );
    session.message = "SASLResponse";
    session.serverSignature = serverSignatureBytes.toString("base64");
    session.response = clientFinalMessageWithoutProof + ",p=" + clientProof;
    this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
};
function promisify(Promise2, callback) {
  if (callback) return { callback, result: void 0 };
  let rej, res;
  const cb = /* @__PURE__ */ __name(function(err, client) {
    err ? rej(err) : res(client);
  }, "cb");
  const result = new Promise2(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  return { callback: cb, result };
}
__name(promisify, "promisify");
var NeonPool = class extends import_pg.Pool {
  static {
    __name(this, "NeonPool");
  }
  Client = NeonClient;
  hasFetchUnsupportedListeners = false;
  on(event, listener) {
    if (event !== "error") this.hasFetchUnsupportedListeners = true;
    return super.on(event, listener);
  }
  // @ts-ignore -- is it even possible to make TS happy with these overloaded function types?
  query(config, values, cb) {
    if (!Socket.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof config === "function") {
      return super.query(config, values, cb);
    }
    if (typeof values === "function") {
      cb = values;
      values = void 0;
    }
    const response = promisify(this.Promise, cb);
    cb = response.callback;
    try {
      const cp = new import_connection_parameters.default(
        this.options
      );
      const euc = encodeURIComponent, eu = encodeURI;
      const connectionString = `postgresql://${euc(cp.user)}:${euc(cp.password)}@${euc(cp.host)}/${eu(cp.database)}`;
      const queryText = typeof config === "string" ? config : config.text;
      const queryValues = values ?? config.values ?? [];
      const sql = neon(connectionString, {
        fullResults: true,
        arrayMode: config.rowMode === "array"
      });
      sql(queryText, queryValues, {
        types: config.types ?? this.options?.types
      }).then((result) => cb(void 0, result)).catch((err) => cb(err));
    } catch (err) {
      cb(err);
    }
    return response.result;
  }
};

// src/util.ts
init_shims();
async function timed(f) {
  const t0 = Date.now();
  const result = await f();
  const t = Date.now() - t0;
  return [t, result];
}
__name(timed, "timed");
async function timedRepeats(n, f, timeListener = (ms, result) => {
}) {
  const results = [];
  for (let i = 0; i < n; i++) {
    const tPlusResult = await timed(f);
    const [t, result] = tPlusResult;
    timeListener(t, result);
    results.push(tPlusResult);
  }
  const total = results.reduce((memo, [t]) => memo + t, 0);
  return [total, results];
}
__name(timedRepeats, "timedRepeats");
async function runQuery(queryable, query) {
  const { sql, test } = query;
  const { rows } = await (typeof queryable === "function" ? queryable(sql) : queryable.query(sql));
  if (!test(rows))
    throw new Error(
      `Result fails test
Query: ${sql}
Result: ${JSON.stringify(rows)}`
    );
  return rows;
}
__name(runQuery, "runQuery");
async function clientRunQuery(n, client, ctx2, query) {
  await client.connect();
  const tPlusResults = await timedRepeats(n, () => runQuery(client, query));
  ctx2.waitUntil(client.end());
  return tPlusResults;
}
__name(clientRunQuery, "clientRunQuery");
async function poolRunQuery(n, dbUrl, ctx2, query) {
  const pool = new NeonPool({ connectionString: dbUrl });
  const tPlusResults = await timedRepeats(n, () => runQuery(pool, query));
  ctx2.waitUntil(pool.end());
  return tPlusResults;
}
__name(poolRunQuery, "poolRunQuery");
async function httpRunQuery(n, dbUrl, ctx2, query) {
  const sql = neon(dbUrl, { fullResults: true });
  const tPlusResults = await timedRepeats(n, () => runQuery(sql, query));
  return tPlusResults;
}
__name(httpRunQuery, "httpRunQuery");

// src/queries.ts
init_shims();
var queries = [
  {
    sql: "SELECT * FROM employees LIMIT 10",
    test: /* @__PURE__ */ __name((rows) => rows.length > 1 && typeof rows[0].first_name === "string", "test")
  },
  {
    sql: "SELECT now()",
    test: /* @__PURE__ */ __name((rows) => /^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.test(rows[0].now.toISOString()), "test")
  }
];

// src/index.ts
async function cf(request, env, ctx2) {
  let results = [];
  for (const query of queries) {
    const [, [[, result]]] = await poolRunQuery(1, env.NEON_DB_URL, ctx2, query);
    results.push(result);
  }
  for (const query of queries) {
    const [, [[, result]]] = await httpRunQuery(1, env.NEON_DB_URL, ctx2, query);
    results.push(result);
  }
  return new Response(JSON.stringify(results, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
}
__name(cf, "cf");
var ctx = {
  waitUntil(promise) {
  },
  passThroughOnException() {
  }
};
async function batchQueryTest(env, log2 = (...s) => {
}) {
  const sql = neon(env.NEON_DB_URL);
  const [[ra], [rb]] = await sql.transaction([
    sql`SELECT ${1}::int AS "batchInt"`,
    sql`SELECT ${"hello"} AS "batchStr"`
  ]);
  log2("batch results:", JSON.stringify(ra), JSON.stringify(rb), "\n");
  if (ra.batchInt !== 1 || rb.batchStr !== "hello")
    throw new Error("Batch query problem");
  const [[r1], [r2]] = await sql.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn`SELECT ${"hello"} AS "batchStr"`
  ]);
  log2("batch results:", JSON.stringify(r1), JSON.stringify(r2), "\n");
  if (r1.batchInt !== 1 || r2.batchStr !== "hello")
    throw new Error("Batch query problem");
  const emptyResult = await sql.transaction((txn) => []);
  log2("empty txn result:", JSON.stringify(emptyResult), "\n");
  const [[[r3]], [[r4]]] = await sql.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${"hello"} AS "batchStr"`
    ],
    { arrayMode: true, isolationLevel: "Serializable", readOnly: true }
  );
  log2(
    "array mode (via transaction options) batch results:",
    JSON.stringify(r3),
    JSON.stringify(r4),
    "\n"
  );
  if (r3 !== 1 || r4 !== "hello") throw new Error("Batch query problem");
  const sqlArr = neon(env.NEON_DB_URL, {
    arrayMode: true,
    isolationLevel: "RepeatableRead"
  });
  const [[[r5]], [[r6]]] = await sqlArr.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn`SELECT ${"hello"} AS "batchStr"`
  ]);
  log2(
    "array mode (via neon options) batch results:",
    JSON.stringify(r5),
    JSON.stringify(r6),
    "\n"
  );
  if (r5 !== 1 || r6 !== "hello") throw new Error("Batch query problem");
  const sqlArr2 = neon(env.NEON_DB_URL, { arrayMode: true });
  const [[r7], [r8]] = await sqlArr2.transaction(
    (txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      txn`SELECT ${"hello"} AS "batchStr"`
    ],
    { arrayMode: false }
  );
  log2(
    "ordinary (via overridden options) batch results:",
    JSON.stringify(r7),
    JSON.stringify(r8),
    "\n"
  );
  if (r7.batchInt !== 1 || r8.batchStr !== "hello")
    throw new Error("Batch query problem");
  const [[r9], [r10]] = await sql.transaction((txn) => [
    txn`SELECT ${1}::int AS "batchInt"`,
    txn('SELECT $1 AS "batchStr"', ["hello"], { arrayMode: true })
  ]);
  log2(
    "query options on individual batch queries:",
    JSON.stringify(r9),
    JSON.stringify(r10),
    "\n"
  );
  if (r9.batchInt !== 1 || r10[0] !== "hello")
    throw new Error("Batch query problem");
  let queryErr = void 0;
  try {
    await sql.transaction((txn) => [
      txn`SELECT ${1}::int AS "batchInt"`,
      `SELECT 'hello' AS "batchStr"`
    ]);
  } catch (err) {
    queryErr = err;
  }
  if (queryErr === void 0)
    throw new Error(
      "Error should have been raised for string passed to `transaction()`"
    );
  log2("successfully caught invalid query passed to `transaction()`\n");
  let connErr;
  try {
    const urlWithBadPassword = env.NEON_DB_URL.replace(/@/, "x@");
    await neon(urlWithBadPassword).transaction((txn) => [
      txn`SELECT 'never' AS this_should_be_seen_precisely`
    ]);
  } catch (err) {
    connErr = err;
  }
  if (connErr === void 0)
    throw new Error("Error should have been raised for bad password");
  log2("successfully caught invalid password passed to `neon()`\n");
}
__name(batchQueryTest, "batchQueryTest");
async function latencies(env, useSubtls, log2 = (...s) => {
}) {
  const queryRepeats = [1, 3];
  const connectRepeats = 9;
  log2("Warm-up ...\n\n");
  await poolRunQuery(1, env.NEON_DB_URL, ctx, queries[0]);
  let counter = 0;
  log2(`
===== SQL-over-HTTP tests =====

`);
  const pgShowKeys = /* @__PURE__ */ new Set(["command", "rowCount", "rows", "fields"]);
  const pool = await new NeonPool({ connectionString: env.NEON_DB_URL });
  const sql = neon(env.NEON_DB_URL, {
    resultCallback: /* @__PURE__ */ __name(async (query, result, rows, opts) => {
      const pgRes = await pool.query({
        text: query.query,
        values: query.params,
        ...opts.arrayMode ? { rowMode: "array" } : {}
      });
      const commandMatches = result.command === pgRes.command;
      const rowCountMatches = result.rowCount === pgRes.rowCount;
      const dataTypesMatch = deepEqual(
        result.fields.map((f) => f.dataTypeID),
        pgRes.fields.map((f) => f.dataTypeID)
      );
      const rowsMatch = deepEqual(rows, pgRes.rows);
      const ok = commandMatches && rowCountMatches && rowsMatch && dataTypesMatch;
      log2(
        ok ? "\u2713" : "X",
        JSON.stringify(query),
        "\n  -> us:",
        JSON.stringify(rows),
        "\n  -> pg:",
        JSON.stringify(pgRes.rows),
        "\n"
      );
    }, "resultCallback")
  });
  const now = /* @__PURE__ */ new Date();
  await sql`SELECT ${1} AS int_uncast`;
  await sql`SELECT ${1}::int AS int`;
  await sql`SELECT ${1}::int8 AS int8num`;
  await sql`SELECT ${1}::decimal AS decimalnum`;
  await sql`SELECT ${"[1,4)"}::int4range AS int4range`;
  await sql`SELECT ${"hello"} AS str`;
  await sql`SELECT ${["a", "b", "c"]} AS arrstr_uncast`;
  await sql`SELECT ${[[2], [4]]}::int[][] AS arrnumnested`;
  await sql`SELECT ${now}::timestamptz AS timestamptznow`;
  await sql`SELECT ${"16:17:18+01:00"}::timetz AS timetz`;
  await sql`SELECT ${"17:18:19"}::time AS time`;
  await sql`SELECT ${now}::date AS datenow`;
  await sql`SELECT ${{ x: "y" }} AS obj_uncast`;
  await sql`SELECT ${"11:22:33:44:55:66"}::macaddr AS macaddr`;
  await sql`SELECT ${"\\xDEADBEEF"}::bytea AS bytea`;
  await sql`SELECT ${"(2, 3)"}::point AS point`;
  await sql`SELECT ${"<(2, 3), 1>"}::circle AS circle`;
  await sql`SELECT ${"10.10.10.0/24"}::cidr AS cidr`;
  await sql`SELECT ${true} AS bool_uncast`;
  await sql`SELECT ${"hello"} || ' ' || ${"world"} AS greeting`;
  await sql`SELECT ${[1, 2, 3]}::int[] AS arrnum`;
  await sql`SELECT ${["a", "b", "c"]}::text[] AS arrstr`;
  await sql`SELECT ${{ x: "y" }}::jsonb AS jsonb_obj`;
  await sql`SELECT ${{ x: "y" }}::json AS json_obj`;
  await sql`SELECT ${["11:22:33:44:55:66"]}::macaddr[] AS arrmacaddr`;
  await sql`SELECT ${["10.10.10.0/24"]}::cidr[] AS arrcidr`;
  await sql`SELECT ${true}::boolean AS bool`;
  await sql`SELECT ${[now]}::timestamptz[] AS arrtstz`;
  await sql`SELECT ${["(2, 3)"]}::point[] AS arrpoint`;
  await sql`SELECT ${["<(2, 3), 1>"]}::circle[] AS arrcircle`;
  await sql`SELECT ${["\\xDEADBEEF", "\\xDEADBEEF"]}::bytea[] AS arrbytea`;
  await sql`SELECT null AS null`;
  await sql`SELECT ${null} AS null`;
  await sql`SELECT ${"NULL"} AS null_str`;
  await sql`SELECT ${[1, 2, 3]} AS arrnum_uncast`;
  await sql`SELECT ${[[2], [4]]} AS arrnumnested_uncast`;
  await sql`SELECT ${now} AS timenow_uncast`;
  await sql`SELECT ${now}::timestamp AS timestampnow`;
  await sql("SELECT $1::timestamp AS timestampnow", [now]);
  await sql("SELECT $1 || ' ' || $2 AS greeting", ["hello", "world"]);
  await sql("SELECT 123 AS num");
  await sql("SELECT 123 AS num", [], { arrayMode: true, fullResults: true });
  function sqlWithRetries(sql2, timeoutMs, attempts = 3) {
    return async function(strings, ...params) {
      let query = "";
      for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        if (i < params.length) query += "$" + (i + 1);
      }
      for (let i = 1; ; i++) {
        const abortController = new AbortController();
        const timeout = setTimeout(
          () => abortController.abort("fetch timed out"),
          timeoutMs
        );
        try {
          const { signal } = abortController;
          const result = await sql2(query, params, { fetchOptions: { signal } });
          return result;
        } catch (err) {
          const timedOut = err.sourceError && err.sourceError instanceof DOMException && err.sourceError.name === "AbortError";
          if (!timedOut || i >= attempts) throw err;
        } finally {
          clearTimeout(timeout);
        }
      }
    };
  }
  __name(sqlWithRetries, "sqlWithRetries");
  const sqlRetry = sqlWithRetries(sql, 5e3);
  await sqlRetry`SELECT ${"did this time out?"} AS str`;
  await batchQueryTest(env, log2);
  Socket.fetchFunction = (url, options) => {
    console.log("custom fetch:", url, options);
    return fetch(url, options);
  };
  await sql`SELECT ${"customFetch"} AS str`;
  const errstatement = "SELECT 123::int[] WHERE x";
  try {
    await sql(errstatement);
  } catch (err) {
    console.log(
      "Fields of this expected error should match the following error, except for having no `length` field"
    );
    console.log(err);
  }
  try {
    await poolRunQuery(1, env.NEON_DB_URL, ctx, {
      sql: errstatement,
      test: /* @__PURE__ */ __name(() => true, "test")
    });
  } catch (err) {
    console.log(
      "Fields of this expected error should match the previous error, except for having an additional `length` field"
    );
    console.log(err);
  }
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  pool.end();
  log2(`

===== Pool/Client tests =====
`);
  for (const query of queries) {
    log2(`
----- ${query.sql} -----

`);
    async function section(queryRepeat, f) {
      const marker = String.fromCharCode(
        counter + (counter > 25 ? 49 - 26 : 65)
      );
      log2(`${marker}
`);
      try {
        await fetch(`http://localhost:443/${marker}`);
      } catch {
      }
      log2(`<span class="live">Live:</span>    `);
      const [, results] = await timedRepeats(
        connectRepeats,
        () => f(queryRepeat),
        (t) => log2(`<span class="live">${t.toFixed()}ms</span> `)
      );
      log2("\nSorted:  ");
      results.map(([t]) => t).sort((a, b) => a - b).forEach((t, i) => {
        log2(
          i === (connectRepeats - 1) / 2 ? `<span class="median">${t.toFixed()}ms</span> ` : `${t.toFixed()}ms `
        );
      });
      log2("\n\n");
      counter += 1;
    }
    __name(section, "section");
    async function sections(title, f) {
      log2(`----- ${title} -----

`);
      for (let queryRepeat of queryRepeats) {
        log2(`${queryRepeat} quer${queryRepeat === 1 ? "y" : "ies"} \u2013 `);
        await section(queryRepeat, f);
      }
    }
    __name(sections, "sections");
    await sections("Neon/wss, no pipelining", async (n) => {
      const client = new NeonClient(env.NEON_DB_URL);
      client.neonConfig.pipelineConnect = false;
      await clientRunQuery(n, client, ctx, query);
    });
    await sections("Neon/wss, pipelined connect (default)", async (n) => {
      const client = new NeonClient(env.NEON_DB_URL);
      await clientRunQuery(n, client, ctx, query);
    });
    await sections("Neon/wss, pipelined connect, no coalescing", async (n) => {
      const client = new NeonClient(env.NEON_DB_URL);
      client.neonConfig.coalesceWrites = false;
      await clientRunQuery(n, client, ctx, query);
    });
    await sections(
      "Neon/wss, pipelined connect using Pool.query",
      async (n) => {
        await poolRunQuery(n, env.NEON_DB_URL, ctx, query);
      }
    );
    await sections(
      "Neon/wss, pipelined connect using Pool.connect",
      async (n) => {
        const pool2 = new NeonPool({ connectionString: env.NEON_DB_URL });
        const poolClient = await pool2.connect();
        await timedRepeats(n, () => runQuery(poolClient, query));
        poolClient.release();
        ctx.waitUntil(pool2.end());
      }
    );
    if (useSubtls) {
      Socket.subtls = subtls_exports;
      Socket.rootCerts = isrgrootx1_default;
      await sections("pg/subtls, pipelined connect", async (n) => {
        const client = new NeonClient(env.NEON_DB_URL);
        client.neonConfig.wsProxy = (host, port) => `subtls-wsproxy.jawj.workers.dev/?address=${host}:${port}`;
        client.neonConfig.forceDisablePgSSL = client.neonConfig.useSecureWebSocket = false;
        client.neonConfig.pipelineTLS = false;
        client.neonConfig.pipelineConnect = false;
        try {
          await clientRunQuery(n, client, ctx, query);
        } catch (err) {
          console.error(`
*** ${err.message}`);
        }
      });
    }
  }
}
__name(latencies, "latencies");
export {
  batchQueryTest,
  cf,
  latencies,
  Socket as neonConfig
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
