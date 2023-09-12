"use strict";var Qi=Object.create;var Ee=Object.defineProperty;var Ni=Object.getOwnPropertyDescriptor;var Ui=Object.getOwnPropertyNames;var Wi=Object.getPrototypeOf,ji=Object.prototype.hasOwnProperty;var Hi=(r,e,t)=>e in r?Ee(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var a=(r,e)=>Ee(r,"name",{value:e,configurable:!0});var $=(r,e)=>()=>(r&&(e=r(r=0)),e);var C=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),J=(r,e)=>{for(var t in e)
Ee(r,t,{get:e[t],enumerable:!0})},wn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let s of Ui(e))!ji.call(r,s)&&s!==t&&Ee(r,s,{get:()=>e[s],enumerable:!(n=
Ni(e,s))||n.enumerable});return r};var De=(r,e,t)=>(t=r!=null?Qi(Wi(r)):{},wn(e||!r||!r.__esModule?Ee(t,"default",{
value:r,enumerable:!0}):t,r)),k=r=>wn(Ee({},"__esModule",{value:!0}),r);var P=(r,e,t)=>(Hi(r,typeof e!="symbol"?e+"":e,t),t);var xn=C(Ye=>{"use strict";h();Ye.byteLength=$i;Ye.toByteArray=Vi;Ye.fromByteArray=
Zi;var ie=[],X=[],Gi=typeof Uint8Array<"u"?Uint8Array:Array,vt="ABCDEFGHIJKLMNOP\
QRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ve=0,Sn=vt.length;ve<Sn;++ve)
ie[ve]=vt[ve],X[vt.charCodeAt(ve)]=ve;var ve,Sn;X["-".charCodeAt(0)]=62;X["_".charCodeAt(
0)]=63;function vn(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. L\
ength must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:
4-t%4;return[t,n]}a(vn,"getLens");function $i(r){var e=vn(r),t=e[0],n=e[1];return(t+
n)*3/4-n}a($i,"byteLength");function Ki(r,e,t){return(e+t)*3/4-t}a(Ki,"_byteLeng\
th");function Vi(r){var e,t=vn(r),n=t[0],s=t[1],i=new Gi(Ki(r,n,s)),o=0,u=s>0?n-
4:n,c;for(c=0;c<u;c+=4)e=X[r.charCodeAt(c)]<<18|X[r.charCodeAt(c+1)]<<12|X[r.charCodeAt(
c+2)]<<6|X[r.charCodeAt(c+3)],i[o++]=e>>16&255,i[o++]=e>>8&255,i[o++]=e&255;return s===
2&&(e=X[r.charCodeAt(c)]<<2|X[r.charCodeAt(c+1)]>>4,i[o++]=e&255),s===1&&(e=X[r.
charCodeAt(c)]<<10|X[r.charCodeAt(c+1)]<<4|X[r.charCodeAt(c+2)]>>2,i[o++]=e>>8&255,
i[o++]=e&255),i}a(Vi,"toByteArray");function zi(r){return ie[r>>18&63]+ie[r>>12&
63]+ie[r>>6&63]+ie[r&63]}a(zi,"tripletToBase64");function Yi(r,e,t){for(var n,s=[],
i=e;i<t;i+=3)n=(r[i]<<16&16711680)+(r[i+1]<<8&65280)+(r[i+2]&255),s.push(zi(n));
return s.join("")}a(Yi,"encodeChunk");function Zi(r){for(var e,t=r.length,n=t%3,
s=[],i=16383,o=0,u=t-n;o<u;o+=i)s.push(Yi(r,o,o+i>u?u:o+i));return n===1?(e=r[t-
1],s.push(ie[e>>2]+ie[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],s.push(ie[e>>
10]+ie[e>>4&63]+ie[e<<2&63]+"=")),s.join("")}a(Zi,"fromByteArray")});var Mn=C(_e=>{"use strict";h();var xt=xn(),En=typeof Symbol=="function"&&typeof Symbol.
for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_e.Buffer=g;_e.SlowBuffer=
ro;_e.INSPECT_MAX_BYTES=50;var Ze=2147483647;_e.kMaxLength=Ze;Object.defineProperty(
g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.
buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){
if(g.isBuffer(this))return this.byteOffset}});function le(r){if(r>Ze)throw new RangeError(
'The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,g.prototype),e}a(le,"createBuffer");function g(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return Ct(r)}return Tn(r,e,t)}a(g,"Buf\
fer");g.poolSize=8192;function Tn(r,e,t){if(typeof r=="string")return Xi(r,e);if(ArrayBuffer.
isView(r))return eo(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(oe(r,ArrayBuffer)||r&&oe(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(oe(r,SharedArrayBuffer)||r&&oe(r.buffer,SharedArrayBuffer)))return _t(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return g.from(n,e,t);let s=to(r);if(s)return s;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return g.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}a(
Tn,"from");g.from=function(r,e,t){return Tn(r,e,t)};Object.setPrototypeOf(g.prototype,
Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function Pn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}a(Pn,"assertSize");function Ji(r,e,t){
return Pn(r),r<=0?le(r):e!==void 0?typeof t=="string"?le(r).fill(e,t):le(r).fill(
e):le(r)}a(Ji,"alloc");g.alloc=function(r,e,t){return Ji(r,e,t)};function Ct(r){
return Pn(r),le(r<0?0:Tt(r)|0)}a(Ct,"allocUnsafe");g.allocUnsafe=function(r){return Ct(
r)};g.allocUnsafeSlow=function(r){return Ct(r)};function Xi(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!g.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Ln(r,e)|0,n=le(t),s=n.write(r,e);return s!==t&&(n=n.slice(0,s)),
n}a(Xi,"fromString");function Et(r){let e=r.length<0?0:Tt(r.length)|0,t=le(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}a(Et,"fromArrayLike");function eo(r){if(oe(r,Uint8Array)){
let e=new Uint8Array(r);return _t(e.buffer,e.byteOffset,e.byteLength)}return Et(
r)}a(eo,"fromArrayView");function _t(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,g.prototype),n}a(_t,"fromArrayBuffer");function to(r){if(g.isBuffer(r)){let e=Tt(
r.length)|0,t=le(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||It(r.length)?le(0):Et(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return Et(r.data)}a(to,"fromObject");function Tt(r){if(r>=
Ze)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Ze.toString(16)+" bytes");return r|0}a(Tt,"checked");function ro(r){return+r!=r&&
(r=0),g.alloc(+r)}a(ro,"SlowBuffer");g.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==g.prototype},"isBuffer");g.compare=a(function(e,t){if(oe(e,Uint8Array)&&
(e=g.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),
!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,s=t.
length;for(let i=0,o=Math.min(n,s);i<o;++i)if(e[i]!==t[i]){n=e[i],s=t[i];break}return n<
s?-1:s<n?1:0},"compare");g.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");g.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return g.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let s=g.allocUnsafe(t),i=0;
for(n=0;n<e.length;++n){let o=e[n];if(oe(o,Uint8Array))i+o.length>s.length?(g.isBuffer(
o)||(o=g.from(o)),o.copy(s,i)):Uint8Array.prototype.set.call(s,o,i);else if(g.isBuffer(
o))o.copy(s,i);else throw new TypeError('"list" argument must be an Array of Buf\
fers');i+=o.length}return s},"concat");function Ln(r,e){if(g.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||oe(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let s=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return At(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Fn(r).length;default:if(s)return n?-1:At(r).length;e=(""+e).toLowerCase(),
s=!0}}a(Ln,"byteLength");g.byteLength=Ln;function no(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return po(
this,e,t);case"utf8":case"utf-8":return Rn(this,e,t);case"ascii":return fo(this,
e,t);case"latin1":case"binary":return ho(this,e,t);case"base64":return co(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
no,"slowToString");g.prototype._isBuffer=!0;g.prototype.toString=a(function(){let e=this.
length;return e===0?"":arguments.length===0?Rn(this,0,e):no.apply(this,arguments)},
"toString");g.prototype.toLocaleString=g.prototype.toString;g.prototype.inspect=
a(function(){let e="",t=_e.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(
/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},"inspect");
En&&(g.prototype[En]=g.prototype.inspect);g.prototype.compare=a(function(e,t,n,s,i){
if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError(
'The "target" argument must be one of type Buffer or Uint8Array. Received type '+
typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),s===void 0&&(s=0),i===
void 0&&(i=this.length),t<0||n>e.length||s<0||i>this.length)throw new RangeError(
"out of range index");if(s>=i&&t>=n)return 0;if(s>=i)return-1;if(t>=n)return 1;if(t>>>=
0,n>>>=0,s>>>=0,i>>>=0,this===e)return 0;let o=i-s,u=n-t,c=Math.min(o,u),l=this.
slice(s,i),f=e.slice(t,n);for(let y=0;y<c;++y)if(l[y]!==f[y]){o=l[y],u=f[y];break}
return o<u?-1:u<o?1:0},"compare");function In(r,e,t,n,s){if(r.length===0)return-1;
if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),
t=+t,It(t)&&(t=s?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(s)return-1;t=
r.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof e=="string"&&(e=g.from(e,
n)),g.isBuffer(e))return e.length===0?-1:_n(r,e,t,n,s);if(typeof e=="number")return e=
e&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.
call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):_n(r,[e],t,n,s);throw new TypeError(
"val must be string, number or Buffer")}a(In,"bidirectionalIndexOf");function _n(r,e,t,n,s){
let i=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs\
2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;
i=2,o/=2,u/=2,t/=2}function c(f,y){return i===1?f[y]:f.readUInt16BE(y*i)}a(c,"re\
ad");let l;if(s){let f=-1;for(l=t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===
-1&&(f=l),l-f+1===u)return f*i}else f!==-1&&(l-=l-f),f=-1}else for(t+u>o&&(t=o-u),
l=t;l>=0;l--){let f=!0;for(let y=0;y<u;y++)if(c(r,l+y)!==c(e,y)){f=!1;break}if(f)
return l}return-1}a(_n,"arrayIndexOf");g.prototype.indexOf=a(function(e,t,n){return In(
this,e,t,n,!0)},"indexOf");g.prototype.lastIndexOf=a(function(e,t,n){return In(this,
e,t,n,!1)},"lastIndexOf");function so(r,e,t,n){t=Number(t)||0;let s=r.length-t;n?
(n=Number(n),n>s&&(n=s)):n=s;let i=e.length;n>i/2&&(n=i/2);let o;for(o=0;o<n;++o){
let u=parseInt(e.substr(o*2,2),16);if(It(u))return o;r[t+o]=u}return o}a(so,"hex\
Write");function io(r,e,t,n){return Xe(At(e,r.length-t),r,t,n)}a(io,"utf8Write");
function oo(r,e,t,n){return Xe(wo(e),r,t,n)}a(oo,"asciiWrite");function ao(r,e,t,n){
return Xe(Fn(e),r,t,n)}a(ao,"base64Write");function uo(r,e,t,n){return Xe(So(e,r.
length-t),r,t,n)}a(uo,"ucs2Write");g.prototype.write=a(function(e,t,n,s){if(t===
void 0)s="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")s=t,n=this.
length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,s===void 0&&(s="utf8")):
(s=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, len\
gth]) is no longer supported");let i=this.length-t;if((n===void 0||n>i)&&(n=i),e.
length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outsi\
de buffer bounds");s||(s="utf8");let o=!1;for(;;)switch(s){case"hex":return so(this,
e,t,n);case"utf8":case"utf-8":return io(this,e,t,n);case"ascii":case"latin1":case"\
binary":return oo(this,e,t,n);case"base64":return ao(this,e,t,n);case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return uo(this,e,t,n);default:if(o)throw new TypeError(
"Unknown encoding: "+s);s=(""+s).toLowerCase(),o=!0}},"write");function co(r,e,t){
return e===0&&t===r.length?xt.fromByteArray(r):xt.fromByteArray(r.slice(e,t))}a(
co,"base64Slice");function Rn(r,e,t){t=Math.min(r.length,t);let n=[],s=e;for(;s<
t;){let i=r[s],o=null,u=i>239?4:i>223?3:i>191?2:1;if(s+u<=t){let c,l,f,y;switch(u){case 1:
i<128&&(o=i);break;case 2:c=r[s+1],(c&192)===128&&(y=(i&31)<<6|c&63,y>127&&(o=y));
break;case 3:c=r[s+1],l=r[s+2],(c&192)===128&&(l&192)===128&&(y=(i&15)<<12|(c&63)<<
6|l&63,y>2047&&(y<55296||y>57343)&&(o=y));break;case 4:c=r[s+1],l=r[s+2],f=r[s+3],
(c&192)===128&&(l&192)===128&&(f&192)===128&&(y=(i&15)<<18|(c&63)<<12|(l&63)<<6|
f&63,y>65535&&y<1114112&&(o=y))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(
o>>>10&1023|55296),o=56320|o&1023),n.push(o),s+=u}return lo(n)}a(Rn,"utf8Slice");
var An=4096;function lo(r){let e=r.length;if(e<=An)return String.fromCharCode.apply(
String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
An));return t}a(lo,"decodeCodePointsArray");function fo(r,e,t){let n="";t=Math.min(
r.length,t);for(let s=e;s<t;++s)n+=String.fromCharCode(r[s]&127);return n}a(fo,"\
asciiSlice");function ho(r,e,t){let n="";t=Math.min(r.length,t);for(let s=e;s<t;++s)
n+=String.fromCharCode(r[s]);return n}a(ho,"latin1Slice");function po(r,e,t){let n=r.
length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let s="";for(let i=e;i<t;++i)s+=vo[r[i]];
return s}a(po,"hexSlice");function yo(r,e,t){let n=r.slice(e,t),s="";for(let i=0;i<
n.length-1;i+=2)s+=String.fromCharCode(n[i]+n[i+1]*256);return s}a(yo,"utf16leSl\
ice");g.prototype.slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,
e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let s=this.
subarray(e,t);return Object.setPrototypeOf(s,g.prototype),s},"slice");function Je(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(Je,"checkOffset");g.prototype.readUint16BE=
g.prototype.readUInt16BE=a(function(e,t){return e=e>>>0,t||Je(e,2,this.length),this[e]<<
8|this[e+1]},"readUInt16BE");g.prototype.readUint32BE=g.prototype.readUInt32BE=a(
function(e,t){return e=e>>>0,t||Je(e,4,this.length),this[e]*16777216+(this[e+1]<<
16|this[e+2]<<8|this[e+3])},"readUInt32BE");g.prototype.readInt16BE=a(function(e,t){
e=e>>>0,t||Je(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:
n},"readInt16BE");g.prototype.readInt32BE=a(function(e,t){return e=e>>>0,t||Je(e,
4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");
function Pt(r,e,t,n,s,i){if(!g.isBuffer(r))throw new TypeError('"buffer" argumen\
t must be a Buffer instance');if(e>s||e<i)throw new RangeError('"value" argument\
 is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}a(
Pt,"checkInt");g.prototype.writeUint32BE=g.prototype.writeUInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Pt(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>
16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");g.prototype.writeInt16BE=
a(function(e,t,n){return e=+e,t=t>>>0,n||Pt(this,e,t,2,32767,-32768),this[t]=e>>>
8,this[t+1]=e&255,t+2},"writeInt16BE");g.prototype.writeInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Pt(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+
e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"write\
Int32BE");g.prototype.copy=a(function(e,t,n,s){if(!g.isBuffer(e))throw new TypeError(
"argument should be a Buffer");if(n||(n=0),!s&&s!==0&&(s=this.length),t>=e.length&&
(t=e.length),t||(t=0),s>0&&s<n&&(s=n),s===n||e.length===0||this.length===0)return 0;
if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)
throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEn\
d out of bounds");s>this.length&&(s=this.length),e.length-t<s-n&&(s=e.length-t+n);
let i=s-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.
copyWithin(t,n,s):Uint8Array.prototype.set.call(e,this.subarray(n,s),t),i},"copy");
g.prototype.fill=a(function(e,t,n,s){if(typeof e=="string"){if(typeof t=="string"?
(s=t,t=0,n=this.length):typeof n=="string"&&(s=n,n=this.length),s!==void 0&&typeof s!=
"string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&
!g.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(e.length===1){let o=e.
charCodeAt(0);(s==="utf8"&&o<128||s==="latin1")&&(e=o)}}else typeof e=="number"?
e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)
throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?
this.length:n>>>0,e||(e=0);let i;if(typeof e=="number")for(i=t;i<n;++i)this[i]=e;else{
let o=g.isBuffer(e)?e:g.from(e,s),u=o.length;if(u===0)throw new TypeError('The v\
alue "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%u]}
return this},"fill");var mo={};function Lt(r,e,t){var n;mo[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,
configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){
return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,
value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}},
a(n,"NodeError"),n)}a(Lt,"E");Lt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);Lt("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);Lt("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,s=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?s=Cn(String(t)):typeof t=="bigint"&&(s=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(s=Cn(s)),s+="n"),n+=` It\
 must be ${e}. Received ${s}`,n},RangeError);function Cn(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}a(Cn,"addNumericalSeparator");var go=/[^+/0-9A-Za-z-_]/g;function bo(r){
if(r=r.split("=")[0],r=r.trim().replace(go,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}a(bo,"base64clean");function At(r,e){e=e||1/0;let t,n=r.
length,s=null,i=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!s){
if(t>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&
i.push(239,191,189);continue}s=t;continue}if(t<56320){(e-=3)>-1&&i.push(239,191,
189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(e-=3)>-1&&i.push(239,191,
189);if(s=null,t<128){if((e-=1)<0)break;i.push(t)}else if(t<2048){if((e-=2)<0)break;
i.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;i.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;i.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return i}a(
At,"utf8ToBytes");function wo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}a(wo,"asciiToBytes");function So(r,e){let t,n,s,i=[];for(let o=0;o<
r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,s=t%256,i.push(s),i.push(n);return i}
a(So,"utf16leToBytes");function Fn(r){return xt.toByteArray(bo(r))}a(Fn,"base64T\
oBytes");function Xe(r,e,t,n){let s;for(s=0;s<n&&!(s+t>=e.length||s>=r.length);++s)
e[s+t]=r[s];return s}a(Xe,"blitBuffer");function oe(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
a(oe,"isInstance");function It(r){return r!==r}a(It,"numberIsNaN");var vo=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let s=0;s<
16;++s)e[n+s]=r[t]+r[s]}return e}()});var w,v,x,b,d,p,h=$(()=>{"use strict";w=globalThis,v=globalThis.setImmediate??(r=>setTimeout(
r,0)),x=globalThis.clearImmediate??(r=>clearTimeout(r)),b=globalThis.crypto??{};
b.subtle??(b.subtle={});d=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Mn().Buffer,p=globalThis.process??
{};p.env??(p.env={});try{p.nextTick(()=>{})}catch{let e=Promise.resolve();p.nextTick=
e.then.bind(e)}});var ye=C((Dc,Rt)=>{"use strict";h();var Ae=typeof Reflect=="object"?Reflect:null,
Bn=Ae&&typeof Ae.apply=="function"?Ae.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),et;Ae&&typeof Ae.ownKeys=="function"?et=Ae.ownKeys:
Object.getOwnPropertySymbols?et=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):et=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function xo(r){console&&console.warn&&
console.warn(r)}a(xo,"ProcessEmitWarning");var kn=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function L(){L.init.call(this)}a(L,"EventEmitter");Rt.exports=
L;Rt.exports.once=Co;L.EventEmitter=L;L.prototype._events=void 0;L.prototype._eventsCount=
0;L.prototype._maxListeners=void 0;var Dn=10;function tt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(tt,"checkListener");Object.defineProperty(L,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Dn},set:function(r){if(typeof r!="\
number"||r<0||kn(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Dn=r}});L.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};L.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||kn(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function On(r){return r._maxListeners===void 0?L.defaultMaxListeners:r._maxListeners}
a(On,"_getMaxListeners");L.prototype.getMaxListeners=a(function(){return On(this)},
"getMaxListeners");L.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var s=e==="error",i=this._events;if(i!==void 0)s=s&&i.error===
void 0;else if(!s)return!1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)
throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=
o,u}var c=i[e];if(c===void 0)return!1;if(typeof c=="function")Bn(c,this,t);else for(var l=c.
length,f=Wn(c,l),n=0;n<l;++n)Bn(f[n],this,t);return!0},"emit");function qn(r,e,t,n){
var s,i,o;if(tt(t),i=r._events,i===void 0?(i=r._events=Object.create(null),r._eventsCount=
0):(i.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),i=r.
_events),o=i[e]),o===void 0)o=i[e]=t,++r._eventsCount;else if(typeof o=="functio\
n"?o=i[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),s=On(r),s>0&&o.length>s&&!o.warned){
o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=o.length,xo(u)}
return r}a(qn,"_addListener");L.prototype.addListener=a(function(e,t){return qn(
this,e,t,!1)},"addListener");L.prototype.on=L.prototype.addListener;L.prototype.
prependListener=a(function(e,t){return qn(this,e,t,!0)},"prependListener");function Eo(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}a(Eo,"onceWrapper");function Qn(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},s=Eo.bind(n);return s.listener=t,n.wrapFn=s,s}a(Qn,"\
_onceWrap");L.prototype.once=a(function(e,t){return tt(t),this.on(e,Qn(this,e,t)),
this},"once");L.prototype.prependOnceListener=a(function(e,t){return tt(t),this.
prependListener(e,Qn(this,e,t)),this},"prependOnceListener");L.prototype.removeListener=
a(function(e,t){var n,s,i,o,u;if(tt(t),s=this._events,s===void 0)return this;if(n=
s[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(i=-1,o=n.length-1;o>=0;o--)
if(n[o]===t||n[o].listener===t){u=n[o].listener,i=o;break}if(i<0)return this;i===
0?n.shift():_o(n,i),n.length===1&&(s[e]=n[0]),s.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");L.prototype.off=L.prototype.
removeListener;L.prototype.removeAllListeners=a(function(e){var t,n,s;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var i=Object.keys(n),o;for(s=0;s<i.length;++s)o=i[s],o!=="removeList\
ener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(s=t.length-1;s>=0;s--)this.
removeListener(e,t[s]);return this},"removeAllListeners");function Nn(r,e,t){var n=r.
_events;if(n===void 0)return[];var s=n[e];return s===void 0?[]:typeof s=="functi\
on"?t?[s.listener||s]:[s]:t?Ao(s):Wn(s,s.length)}a(Nn,"_listeners");L.prototype.
listeners=a(function(e){return Nn(this,e,!0)},"listeners");L.prototype.rawListeners=
a(function(e){return Nn(this,e,!1)},"rawListeners");L.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):Un.call(r,e)};L.prototype.
listenerCount=Un;function Un(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(Un,"listenerCount");
L.prototype.eventNames=a(function(){return this._eventsCount>0?et(this._events):
[]},"eventNames");function Wn(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(Wn,"arrayClone");function _o(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(_o,"spliceOne");function Ao(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(Ao,"unwrapListeners");function Co(r,e){return new Promise(
function(t,n){function s(o){r.removeListener(e,i),n(o)}a(s,"errorListener");function i(){
typeof r.removeListener=="function"&&r.removeListener("error",s),t([].slice.call(
arguments))}a(i,"resolver"),jn(r,e,i,{once:!0}),e!=="error"&&To(r,s,{once:!0})})}
a(Co,"once");function To(r,e,t){typeof r.on=="function"&&jn(r,"error",e,t)}a(To,
"addErrorHandlerIfEventEmitter");function jn(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function s(i){n.once&&r.removeEventListener(e,s),t(i)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(jn,"eventTargetAgnosticAddListener")});var ke={};J(ke,{default:()=>Po});var Po,Oe=$(()=>{h();Po={}});function qe(r){let e=1779033703,t=3144134277,n=1013904242,s=2773480762,i=1359893119,
o=2600822924,u=528734635,c=1541459225,l=0,f=0,y=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],E=a((_,m)=>_>>>m|_<<32-m,
"rrot"),T=new Uint32Array(64),R=new Uint8Array(64),W=a(()=>{for(let I=0,H=0;I<16;I++,
H+=4)T[I]=R[H]<<24|R[H+1]<<16|R[H+2]<<8|R[H+3];for(let I=16;I<64;I++){let H=E(T[I-
15],7)^E(T[I-15],18)^T[I-15]>>>3,ue=E(T[I-2],17)^E(T[I-2],19)^T[I-2]>>>10;T[I]=T[I-
16]+H+T[I-7]+ue|0}let _=e,m=t,D=n,j=s,Q=i,N=o,ae=u,de=c;for(let I=0;I<64;I++){let H=E(
Q,6)^E(Q,11)^E(Q,25),ue=Q&N^~Q&ae,pe=de+H+ue+y[I]+T[I]|0,Se=E(_,2)^E(_,13)^E(_,22),
ce=_&m^_&D^m&D,ne=Se+ce|0;de=ae,ae=N,N=Q,Q=j+pe|0,j=D,D=m,m=_,_=pe+ne|0}e=e+_|0,
t=t+m|0,n=n+D|0,s=s+j|0,i=i+Q|0,o=o+N|0,u=u+ae|0,c=c+de|0,f=0},"process"),Z=a(_=>{
typeof _=="string"&&(_=new TextEncoder().encode(_));for(let m=0;m<_.length;m++)R[f++]=
_[m],f===64&&W();l+=_.length},"add"),he=a(()=>{if(R[f++]=128,f==64&&W(),f+8>64){
for(;f<64;)R[f++]=0;W()}for(;f<58;)R[f++]=0;let _=l*8;R[f++]=_/1099511627776&255,
R[f++]=_/4294967296&255,R[f++]=_>>>24,R[f++]=_>>>16&255,R[f++]=_>>>8&255,R[f++]=
_&255,W();let m=new Uint8Array(32);return m[0]=e>>>24,m[1]=e>>>16&255,m[2]=e>>>8&
255,m[3]=e&255,m[4]=t>>>24,m[5]=t>>>16&255,m[6]=t>>>8&255,m[7]=t&255,m[8]=n>>>24,
m[9]=n>>>16&255,m[10]=n>>>8&255,m[11]=n&255,m[12]=s>>>24,m[13]=s>>>16&255,m[14]=
s>>>8&255,m[15]=s&255,m[16]=i>>>24,m[17]=i>>>16&255,m[18]=i>>>8&255,m[19]=i&255,
m[20]=o>>>24,m[21]=o>>>16&255,m[22]=o>>>8&255,m[23]=o&255,m[24]=u>>>24,m[25]=u>>>
16&255,m[26]=u>>>8&255,m[27]=u&255,m[28]=c>>>24,m[29]=c>>>16&255,m[30]=c>>>8&255,
m[31]=c&255,m},"digest");return r===void 0?{add:Z,digest:he}:(Z(r),he())}var Hn=$(
()=>{"use strict";h();a(qe,"sha256")});var O,Qe,Gn=$(()=>{"use strict";h();O=class O{constructor(){P(this,"_dataLength",
0);P(this,"_bufferLength",0);P(this,"_state",new Int32Array(4));P(this,"_buffer",
new ArrayBuffer(68));P(this,"_buffer8");P(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=O.
hexChars,n=O.hexOut,s,i,o,u;for(u=0;u<4;u+=1)for(i=u*8,s=e[u],o=0;o<8;o+=2)n[i+1+
o]=t.charAt(s&15),s>>>=4,n[i+0+o]=t.charAt(s&15),s>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],s=e[1],i=e[2],o=e[3];n+=(s&i|~s&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+s|
0,o+=(n&s|~n&i)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[2]+606105819|
0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+t[3]-1044525330|0,s=(s<<22|s>>>10)+i|0,n+=(s&
i|~s&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+s|0,o+=(n&s|~n&i)+t[5]+1200080426|0,o=(o<<
12|o>>>20)+n|0,i+=(o&n|~o&s)+t[6]-1473231341|0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+
t[7]-45705983|0,s=(s<<22|s>>>10)+i|0,n+=(s&i|~s&o)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+s|0,o+=(n&s|~n&i)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[10]-
42063|0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+t[11]-1990404162|0,s=(s<<22|s>>>10)+i|
0,n+=(s&i|~s&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+s|0,o+=(n&s|~n&i)+t[13]-40341101|
0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[14]-1502002290|0,i=(i<<17|i>>>15)+o|0,s+=
(i&o|~i&n)+t[15]+1236535329|0,s=(s<<22|s>>>10)+i|0,n+=(s&o|i&~o)+t[1]-165796510|
0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&~i)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,i+=(o&
s|n&~s)+t[11]+643717713|0,i=(i<<14|i>>>18)+o|0,s+=(i&n|o&~n)+t[0]-373897302|0,s=
(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&
~i)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,i+=(o&s|n&~s)+t[15]-660478335|0,i=(i<<14|
i>>>18)+o|0,s+=(i&n|o&~n)+t[4]-405537848|0,s=(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[9]+
568446438|0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&~i)+t[14]-1019803690|0,o=(o<<9|o>>>23)+
n|0,i+=(o&s|n&~s)+t[3]-187363961|0,i=(i<<14|i>>>18)+o|0,s+=(i&n|o&~n)+t[8]+1163531501|
0,s=(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+s|0,o+=(n&
i|s&~i)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,i+=(o&s|n&~s)+t[7]+1735328473|0,i=(i<<
14|i>>>18)+o|0,s+=(i&n|o&~n)+t[12]-1926607734|0,s=(s<<20|s>>>12)+i|0,n+=(s^i^o)+
t[5]-378558|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[8]-2022574463|0,o=(o<<11|o>>>21)+
n|0,i+=(o^n^s)+t[11]+1839030562|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+t[14]-35309556|
0,s=(s<<23|s>>>9)+i|0,n+=(s^i^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+
t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+t[7]-155497632|0,i=(i<<16|i>>>
16)+o|0,s+=(i^o^n)+t[10]-1094730640|0,s=(s<<23|s>>>9)+i|0,n+=(s^i^o)+t[13]+681279174|
0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+
t[3]-722521979|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+t[6]+76029189|0,s=(s<<23|s>>>9)+
i|0,n+=(s^i^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[12]-421815835|0,
o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+t[15]+530742520|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+
t[2]-995338651|0,s=(s<<23|s>>>9)+i|0,n+=(i^(s|~o))+t[0]-198630844|0,n=(n<<6|n>>>
26)+s|0,o+=(s^(n|~i))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[14]-
1416354905|0,i=(i<<15|i>>>17)+o|0,s+=(o^(i|~n))+t[5]-57434055|0,s=(s<<21|s>>>11)+
i|0,n+=(i^(s|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[3]-1894986606|
0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[10]-1051523|0,i=(i<<15|i>>>17)+o|0,s+=(o^
(i|~n))+t[1]-2054922799|0,s=(s<<21|s>>>11)+i|0,n+=(i^(s|~o))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+
t[6]-1560198380|0,i=(i<<15|i>>>17)+o|0,s+=(o^(i|~n))+t[13]+1309151649|0,s=(s<<21|
s>>>11)+i|0,n+=(i^(s|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[11]-
1120210379|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[2]+718787259|0,i=(i<<15|i>>>17)+
o|0,s+=(o^(i|~n))+t[9]-343485551|0,s=(s<<21|s>>>11)+i|0,e[0]=n+e[0]|0,e[1]=s+e[1]|
0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(O.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,s=this._bufferLength,i,o;for(o=0;o<e.length;o+=1){if(i=e.charCodeAt(o),
i<128)t[s++]=i;else if(i<2048)t[s++]=(i>>>6)+192,t[s++]=i&63|128;else if(i<55296||
i>56319)t[s++]=(i>>>12)+224,t[s++]=i>>>6&63|128,t[s++]=i&63|128;else{if(i=(i-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,i>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[s++]=(i>>>18)+240,t[s++]=i>>>12&63|128,
t[s++]=i>>>6&63|128,t[s++]=i&63|128}s>=64&&(this._dataLength+=64,O._md5cycle(this.
_state,n),s-=64,n[0]=n[16])}return this._bufferLength=s,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e.charCodeAt(o++);if(s<64)break;this._dataLength+=64,O._md5cycle(
this._state,n),s=0}return this._bufferLength=s,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e[o++];if(s<64)break;this._dataLength+=64,O._md5cycle(this._state,
n),s=0}return this._bufferLength=s,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,s=this.
_state,i;for(this._dataLength=e.length,this._bufferLength=e.buflen,s[0]=n[0],s[1]=
n[1],s[2]=n[2],s[3]=n[3],i=0;i<t.length;i+=1)this._buffer8[i]=t.charCodeAt(i)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,s=this._buffer32,i=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,s.set(O.buffer32Identity.
subarray(i),i),t>55&&(O._md5cycle(this._state,s),s.set(O.buffer32Identity)),o<=4294967295)
s[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;s[14]=c,s[15]=l}return O._md5cycle(this._state,s),
e?this._state:O._hex(this._state)}};a(O,"Md5"),P(O,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),P(O,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),P(O,"hexChars","0123456789abcdef"),P(O,"hexO\
ut",[]),P(O,"onePassHasher",new O);Qe=O});var Ft={};J(Ft,{createHash:()=>Io,createHmac:()=>Ro,randomBytes:()=>Lo});function Lo(r){
return b.getRandomValues(d.alloc(r))}function Io(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return d.from(qe(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?Qe.hashStr(e):Qe.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Ro(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=qe(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let s=new Uint8Array(
64),i=new Uint8Array(64);for(let c=0;c<64;c++)s[c]=54^e[c],i[c]=92^e[c];let o=new Uint8Array(
t.length+64);o.set(s,0),o.set(t,64);let u=new Uint8Array(64+32);return u.set(i,0),
u.set(qe(o),64),d.from(qe(u))}}}}}var Mt=$(()=>{h();Hn();Gn();a(Lo,"randomBytes");
a(Io,"createHash");a(Ro,"createHmac")});var Dt=C($n=>{"use strict";h();$n.parse=function(r,e){return new Bt(r,e).parse()};
var rt=class rt{constructor(e,t){this.source=e,this.transform=t||Fo,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,s;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!s)this.dimension++,this.dimension>
1&&(n=new rt(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!s){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(s&&this.newEntry(!0),s=!s):t.value===","&&!s?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};a(rt,"ArrayParser");var Bt=rt;function Fo(r){return r}a(Fo,"identity")});var kt=C((Jc,Kn)=>{h();var Mo=Dt();Kn.exports={create:function(r,e){return{parse:function(){
return Mo.parse(r,e)}}}}});var Yn=C((el,zn)=>{"use strict";h();var Bo=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Do=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,ko=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Oo=/^-?infinity$/;
zn.exports=a(function(e){if(Oo.test(e))return Number(e.replace("i","I"));var t=Bo.
exec(e);if(!t)return qo(e)||null;var n=!!t[8],s=parseInt(t[1],10);n&&(s=Vn(s));var i=parseInt(
t[2],10)-1,o=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];
f=f?1e3*parseFloat(f):0;var y,E=Qo(e);return E!=null?(y=new Date(Date.UTC(s,i,o,
u,c,l,f)),Ot(s)&&y.setUTCFullYear(s),E!==0&&y.setTime(y.getTime()-E)):(y=new Date(
s,i,o,u,c,l,f),Ot(s)&&y.setFullYear(s)),y},"parseDate");function qo(r){var e=Do.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Vn(t));var s=parseInt(e[2],
10)-1,i=e[3],o=new Date(t,s,i);return Ot(t)&&o.setFullYear(t),o}}a(qo,"getDate");
function Qo(r){if(r.endsWith("+00"))return 0;var e=ko.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,s=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return s*n*1e3}}a(Qo,"timeZoneOffset");function Vn(r){
return-(r-1)}a(Vn,"bcYearToNegativeYear");function Ot(r){return r>=0&&r<100}a(Ot,
"is0To99")});var Jn=C((nl,Zn)=>{h();Zn.exports=Uo;var No=Object.prototype.hasOwnProperty;function Uo(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)No.call(t,
n)&&(r[n]=t[n])}return r}a(Uo,"extend")});var ts=C((ol,es)=>{"use strict";h();var Wo=Jn();es.exports=Ce;function Ce(r){if(!(this instanceof
Ce))return new Ce(r);Wo(this,ea(r))}a(Ce,"PostgresInterval");var jo=["seconds","\
minutes","hours","days","months","years"];Ce.prototype.toPostgres=function(){var r=jo.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Ho={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Go=["years","months","days"],$o=["hours","minutes","seconds"];Ce.
prototype.toISOString=Ce.prototype.toISO=function(){var r=Go.map(t,this).join(""),
e=$o.map(t,this).join("");return"P"+r+"T"+e;function t(n){var s=this[n]||0;return n===
"seconds"&&this.milliseconds&&(s=(s+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),s+Ho[n]}};var qt="([+-]?\\d+)",Ko=qt+"\\s+years?",Vo=qt+"\\s+mons?",zo=qt+"\
\\s+days?",Yo="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Zo=new RegExp([
Ko,Vo,zo,Yo].map(function(r){return"("+r+")?"}).join("\\s*")),Xn={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},Jo=["hours","minutes","sec\
onds","milliseconds"];function Xo(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Xo,"parseMilliseconds");function ea(r){if(!r)return{};var e=Zo.exec(
r),t=e[8]==="-";return Object.keys(Xn).reduce(function(n,s){var i=Xn[s],o=e[i];return!o||
(o=s==="milliseconds"?Xo(o):parseInt(o,10),!o)||(t&&~Jo.indexOf(s)&&(o*=-1),n[s]=
o),n},{})}a(ea,"parse")});var ns=C((cl,rs)=>{"use strict";h();rs.exports=a(function(e){if(/^\\x/.test(e))return new d(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var s=1;n+s<e.length&&e[n+s]==="\\";)s++;for(var i=0;i<Math.floor(s/2);++i)t+=
"\\";n+=Math.floor(s/2)*2}return new d(t,"binary")},"parseBytea")});var ls=C((hl,cs)=>{h();var Ne=Dt(),Ue=kt(),nt=Yn(),is=ts(),os=ns();function st(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(st,"allowNull");function as(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(as,"parseBool");function ta(r){return r?Ne.parse(r,as):null}a(ta,"pars\
eBoolArray");function ra(r){return parseInt(r,10)}a(ra,"parseBaseTenInt");function Qt(r){
return r?Ne.parse(r,st(ra)):null}a(Qt,"parseIntegerArray");function na(r){return r?
Ne.parse(r,st(function(e){return us(e).trim()})):null}a(na,"parseBigIntegerArray");
var sa=a(function(r){if(!r)return null;var e=Ue.create(r,function(t){return t!==
null&&(t=jt(t)),t});return e.parse()},"parsePointArray"),Nt=a(function(r){if(!r)
return null;var e=Ue.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ee=a(function(r){if(!r)return null;var e=Ue.
create(r);return e.parse()},"parseStringArray"),Ut=a(function(r){if(!r)return null;
var e=Ue.create(r,function(t){return t!==null&&(t=nt(t)),t});return e.parse()},"\
parseDateArray"),ia=a(function(r){if(!r)return null;var e=Ue.create(r,function(t){
return t!==null&&(t=is(t)),t});return e.parse()},"parseIntervalArray"),oa=a(function(r){
return r?Ne.parse(r,st(os)):null},"parseByteAArray"),Wt=a(function(r){return parseInt(
r,10)},"parseInteger"),us=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),ss=a(function(r){return r?Ne.parse(r,st(JSON.parse)):null},
"parseJsonArray"),jt=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),aa=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,s=2;s<r.length-1;s++){
if(n||(e+=r[s]),r[s]===")"){n=!0;continue}else if(!n)continue;r[s]!==","&&(t+=r[s])}
var i=jt(e);return i.radius=parseFloat(t),i},"parseCircle"),ua=a(function(r){r(20,
us),r(21,Wt),r(23,Wt),r(26,Wt),r(700,parseFloat),r(701,parseFloat),r(16,as),r(1082,
nt),r(1114,nt),r(1184,nt),r(600,jt),r(651,ee),r(718,aa),r(1e3,ta),r(1001,oa),r(1005,
Qt),r(1007,Qt),r(1028,Qt),r(1016,na),r(1017,sa),r(1021,Nt),r(1022,Nt),r(1231,Nt),
r(1014,ee),r(1015,ee),r(1008,ee),r(1009,ee),r(1040,ee),r(1041,ee),r(1115,Ut),r(1182,
Ut),r(1185,Ut),r(1186,is),r(1187,ia),r(17,os),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,ss),r(3807,ss),r(3907,ee),r(2951,ee),r(791,ee),r(1183,
ee),r(1270,ee)},"init");cs.exports={init:ua}});var hs=C((yl,fs)=>{"use strict";h();var V=1e6;function ca(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var s="",i,o,u,
c,l,f;{if(i=e%V,e=e/V>>>0,o=4294967296*i+t,t=o/V>>>0,u=""+(o-V*t),t===0&&e===0)return n+
u+s;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";s=c+u+s}{if(i=e%V,e=e/V>>>0,o=4294967296*
i+t,t=o/V>>>0,u=""+(o-V*t),t===0&&e===0)return n+u+s;for(c="",l=6-u.length,f=0;f<
l;f++)c+="0";s=c+u+s}{if(i=e%V,e=e/V>>>0,o=4294967296*i+t,t=o/V>>>0,u=""+(o-V*t),
t===0&&e===0)return n+u+s;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";s=c+u+s}return i=
e%V,o=4294967296*i+t,u=""+o%V,n+u+s}a(ca,"readInt8");fs.exports=ca});var gs=C((bl,ms)=>{h();var la=hs(),F=a(function(r,e,t,n,s){t=t||0,n=n||!1,s=s||function(T,R,W){
return T*Math.pow(2,W)+R};var i=t>>3,o=a(function(T){return n?~T&255:T},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=s(0,o(r[i])&
u,c));for(var f=e+t>>3,y=i+1;y<f;y++)l=s(l,o(r[y]),8);var E=(e+t)%8;return E>0&&
(l=s(l,o(r[f])>>8-E,E)),l},"parseBits"),ys=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,s=F(r,1),i=F(r,t,1);if(i===0)return 0;var o=1,u=a(function(l,f,y){l===0&&(l=
1);for(var E=1;E<=y;E++)o/=2,(f&1<<y-E)>0&&(l+=o);return l},"parsePrecisionBits"),
c=F(r,e,t+1,!1,u);return i==Math.pow(2,t+1)-1?c===0?s===0?1/0:-1/0:NaN:(s===0?1:
-1)*Math.pow(2,i-n)*c},"parseFloatFromBits"),fa=a(function(r){return F(r,1)==1?-1*
(F(r,15,1,!0)+1):F(r,15,1)},"parseInt16"),ds=a(function(r){return F(r,1)==1?-1*(F(
r,31,1,!0)+1):F(r,31,1)},"parseInt32"),ha=a(function(r){return ys(r,23,8)},"pars\
eFloat32"),da=a(function(r){return ys(r,52,11)},"parseFloat64"),pa=a(function(r){
var e=F(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,F(r,16,16)),n=0,s=[],
i=F(r,16),o=0;o<i;o++)n+=F(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,F(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ps=a(function(r,e){var t=F(
e,1),n=F(e,63,1),s=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||s.setTime(s.
getTime()+s.getTimezoneOffset()*6e4),s.usec=n%1e3,s.getMicroSeconds=function(){return this.
usec},s.setMicroSeconds=function(i){this.usec=i},s.getUTCMicroSeconds=function(){
return this.usec},s},"parseDate"),We=a(function(r){for(var e=F(r,32),t=F(r,32,32),
n=F(r,32,64),s=96,i=[],o=0;o<e;o++)i[o]=F(r,32,s),s+=32,s+=32;var u=a(function(l){
var f=F(r,32,s);if(s+=32,f==4294967295)return null;var y;if(l==23||l==20)return y=
F(r,f*8,s),s+=f*8,y;if(l==25)return y=r.toString(this.encoding,s>>3,(s+=f<<3)>>3),
y;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=a(function(l,f){
var y=[],E;if(l.length>1){var T=l.shift();for(E=0;E<T;E++)y[E]=c(l,f);l.unshift(
T)}else for(E=0;E<l[0];E++)y[E]=u(f);return y},"parse");return c(i,n)},"parseArr\
ay"),ya=a(function(r){return r.toString("utf8")},"parseText"),ma=a(function(r){return r===
null?null:F(r,8)>0},"parseBool"),ga=a(function(r){r(20,la),r(21,fa),r(23,ds),r(26,
ds),r(1700,pa),r(700,ha),r(701,da),r(16,ma),r(1114,ps.bind(null,!1)),r(1184,ps.bind(
null,!0)),r(1e3,We),r(1007,We),r(1016,We),r(1008,We),r(1009,We),r(25,ya)},"init");
ms.exports={init:ga}});var ws=C((vl,bs)=>{h();bs.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Ge=C(He=>{h();var ba=ls(),wa=gs(),Sa=kt(),va=ws();He.getTypeParser=xa;He.setTypeParser=
Ea;He.arrayParser=Sa;He.builtins=va;var je={text:{},binary:{}};function Ss(r){return String(
r)}a(Ss,"noParse");function xa(r,e){return e=e||"text",je[e]&&je[e][r]||Ss}a(xa,
"getTypeParser");function Ea(r,e,t){typeof e=="function"&&(t=e,e="text"),je[e][r]=
t}a(Ea,"setTypeParser");ba.init(function(r,e){je.text[r]=e});wa.init(function(r,e){
je.binary[r]=e})});var $e=C((Cl,Ht)=>{"use strict";h();Ht.exports={host:"localhost",user:p.platform===
"win32"?p.env.USERNAME:p.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Te=Ge(),_a=Te.getTypeParser(
20,"text"),Aa=Te.getTypeParser(1016,"text");Ht.exports.__defineSetter__("parseIn\
t8",function(r){Te.setTypeParser(20,"text",r?Te.getTypeParser(23,"text"):_a),Te.
setTypeParser(1016,"text",r?Te.getTypeParser(1007,"text"):Aa)})});var Ke=C((Pl,xs)=>{"use strict";h();var Ca=(Mt(),k(Ft)),Ta=$e();function Pa(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Pa,"escapeElement");
function vs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+vs(r[t]):r[t]instanceof d?e+="\\\\x"+r[t].
toString("hex"):e+=Pa(it(r[t]));return e=e+"}",e}a(vs,"arrayString");var it=a(function(r,e){
if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Ta.parseInputDatesAsUTC?
Ra(r):Ia(r):Array.isArray(r)?vs(r):typeof r=="object"?La(r,e):r.toString()},"pre\
pareValue");function La(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),it(r.toPostgres(it),e)}return JSON.stringify(r)}
a(La,"prepareObject");function U(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}a(
U,"pad");function Ia(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var s=U(t,4)+"-"+U(r.getMonth()+1,2)+"-"+U(r.getDate(),2)+"T"+
U(r.getHours(),2)+":"+U(r.getMinutes(),2)+":"+U(r.getSeconds(),2)+"."+U(r.getMilliseconds(),
3);return e<0?(s+="-",e*=-1):s+="+",s+=U(Math.floor(e/60),2)+":"+U(e%60,2),n&&(s+=
" BC"),s}a(Ia,"dateToString");function Ra(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=
Math.abs(e)+1);var n=U(e,4)+"-"+U(r.getUTCMonth()+1,2)+"-"+U(r.getUTCDate(),2)+"\
T"+U(r.getUTCHours(),2)+":"+U(r.getUTCMinutes(),2)+":"+U(r.getUTCSeconds(),2)+"."+
U(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Ra,"dateToStrin\
gUTC");function Fa(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="\
function"?r.callback=e:r.values=e),t&&(r.callback=t),r}a(Fa,"normalizeQueryConfi\
g");var Gt=a(function(r){return Ca.createHash("md5").update(r,"utf-8").digest("h\
ex")},"md5"),Ma=a(function(r,e,t){var n=Gt(e+r),s=Gt(d.concat([d.from(n),t]));return"\
md5"+s},"postgresMd5PasswordHash");xs.exports={prepareValue:a(function(e){return it(
e)},"prepareValueWrapper"),normalizeQueryConfig:Fa,postgresMd5PasswordHash:Ma,md5:Gt}});var Ts=C((Rl,Cs)=>{"use strict";h();var $t=(Mt(),k(Ft));function Ba(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=$t.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(Ba,"startSession");function Da(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=qa(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var s=d.from(n.salt,"base64"),i=Ua(e,
s,n.iteration),o=Pe(i,"Client Key"),u=Na(o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,y=c+","+l+","+f,E=Pe(u,y),T=As(
o,E),R=T.toString("base64"),W=Pe(i,"Server Key"),Z=Pe(W,y);r.message="SASLRespon\
se",r.serverSignature=Z.toString("base64"),r.response=f+",p="+R}a(Da,"continueSe\
ssion");function ka(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Qa(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(ka,"finalizeSession");function Oa(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(Oa,"isPrintableC\
hars");function Es(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Es,"isBase64");function _s(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(_s,"parseAttributePairs");function qa(r){let e=_s(
r),t=e.get("r");if(t){if(!Oa(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Es(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let s=e.get("i");if(s){if(!/^[1-9][0-9]*$/.
test(s))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let i=parseInt(s,10);return{nonce:t,salt:n,iteration:i}}a(qa,"parseServerFirstMe\
ssage");function Qa(r){let t=_s(r).get("v");if(t){if(!Es(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(Qa,"parseServerFinalMessage");function As(r,e){if(!d.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return d.
from(r.map((t,n)=>r[n]^e[n]))}a(As,"xorBuffers");function Na(r){return $t.createHash(
"sha256").update(r).digest()}a(Na,"sha256");function Pe(r,e){return $t.createHmac(
"sha256",r).update(e).digest()}a(Pe,"hmacSha256");function Ua(r,e,t){for(var n=Pe(
r,d.concat([e,d.from([0,0,0,1])])),s=n,i=0;i<t-1;i++)n=Pe(r,n),s=As(s,n);return s}
a(Ua,"Hi");Cs.exports={startSession:Ba,continueSession:Da,finalizeSession:ka}});var Kt={};J(Kt,{join:()=>Wa});function Wa(...r){return r.join("/")}var Vt=$(()=>{
h();a(Wa,"join")});var zt={};J(zt,{stat:()=>ja});function ja(r,e){e(new Error("No filesystem"))}var Yt=$(
()=>{h();a(ja,"stat")});var Zt={};J(Zt,{default:()=>Ha});var Ha,Jt=$(()=>{h();Ha={}});var Ps={};J(Ps,{StringDecoder:()=>Xt});var er,Xt,Ls=$(()=>{h();er=class er{constructor(e){
P(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};a(er,"StringDecoder");Xt=er});var Ms=C((Ul,Fs)=>{"use strict";h();var{Transform:Ga}=(Jt(),k(Zt)),{StringDecoder:$a}=(Ls(),k(Ps)),
me=Symbol("last"),ot=Symbol("decoder");function Ka(r,e,t){let n;if(this.overflow){
if(n=this[ot].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[me]+=this[ot].write(r),n=this[me].split(this.matcher);this[me]=
n.pop();for(let s=0;s<n.length;s++)try{Rs(this,this.mapper(n[s]))}catch(i){return t(
i)}if(this.overflow=this[me].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(Ka,"transform");function Va(r){
if(this[me]+=this[ot].end(),this[me])try{Rs(this,this.mapper(this[me]))}catch(e){
return r(e)}r()}a(Va,"flush");function Rs(r,e){e!==void 0&&r.push(e)}a(Rs,"push");
function Is(r){return r}a(Is,"noop");function za(r,e,t){switch(r=r||/\r?\n/,e=e||
Is,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Is)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Ka,t.flush=Va,t.readableObjectMode=!0;
let n=new Ga(t);return n[me]="",n[ot]=new $a("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(s,i){
this._writableState.errorEmitted=!1,i(s)},n}a(za,"split");Fs.exports=za});var ks=C((Hl,fe)=>{"use strict";h();var Bs=(Vt(),k(Kt)),Ya=(Jt(),k(Zt)).Stream,Za=Ms(),
Ds=(Oe(),k(ke)),Ja=5432,at=p.platform==="win32",Ve=p.stderr,Xa=56,eu=7,tu=61440,
ru=32768;function nu(r){return(r&tu)==ru}a(nu,"isRegFile");var Le=["host","port",
"database","user","password"],tr=Le.length,su=Le[tr-1];function rr(){var r=Ve instanceof
Ya&&Ve.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Ve.write(Ds.format.apply(Ds,e))}}a(rr,"warn");Object.defineProperty(fe.exports,
"isWin",{get:function(){return at},set:function(r){at=r}});fe.exports.warnTo=function(r){
var e=Ve;return Ve=r,e};fe.exports.getFileName=function(r){var e=r||p.env,t=e.PGPASSFILE||
(at?Bs.join(e.APPDATA||"./","postgresql","pgpass.conf"):Bs.join(e.HOME||"./",".p\
gpass"));return t};fe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(p.env,"PGPASSWORD")?!1:at?!0:(e=e||"<unkn>",nu(r.mode)?r.mode&(Xa|eu)?(rr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(rr('WARNING: password file "%s" is not a plain file',
e),!1))};var iu=fe.exports.match=function(r,e){return Le.slice(0,-1).reduce(function(t,n,s){
return s==1&&Number(r[n]||Ja)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};fe.exports.getPassword=function(r,e,t){var n,s=e.pipe(Za());function i(c){var l=ou(
c);l&&au(l)&&iu(r,l)&&(n=l[su],s.end())}a(i,"onLine");var o=a(function(){e.destroy(),
t(n)},"onEnd"),u=a(function(c){e.destroy(),rr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),s.on("data",i).on("end",o).on("error",
u)};var ou=fe.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,s=0,i=0,o={},u=!1,c=a(function(f,y,E){var T=r.substring(y,
E);Object.hasOwnProperty.call(p.env,"PGPASS_NO_DEESCAPE")||(T=T.replace(/\\([:\\])/g,
"$1")),o[Le[f]]=T},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==tr-1,u){c(n,s);break}l>=0&&e==":"&&t!=="\\"&&(c(n,s,l+1),s=l+2,n+=1)}return o=
Object.keys(o).length===tr?o:null,o},au=fe.exports.isValidEntry=function(r){for(var e={
0:function(o){return o.length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(
o)&&o>0&&o<9007199254740992&&Math.floor(o)===o)},2:function(o){return o.length>0},
3:function(o){return o.length>0},4:function(o){return o.length>0}},t=0;t<Le.length;t+=
1){var n=e[t],s=r[Le[t]]||"",i=n(s);if(!i)return!1}return!0}});var qs=C((Vl,nr)=>{"use strict";h();var Kl=(Vt(),k(Kt)),Os=(Yt(),k(zt)),ut=ks();
nr.exports=function(r,e){var t=ut.getFileName();Os.stat(t,function(n,s){if(n||!ut.
usePgPass(s,t))return e(void 0);var i=Os.createReadStream(t);ut.getPassword(r,i,
e)})};nr.exports.warnTo=ut.warnTo});var sr=C((Yl,Qs)=>{"use strict";h();var uu=Ge();function ct(r){this._types=r||uu,
this.text={},this.binary={}}a(ct,"TypeOverrides");ct.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
ct.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};ct.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Qs.exports=ct});var Ns={};J(Ns,{default:()=>cu});var cu,Us=$(()=>{h();cu={}});var Ws={};J(Ws,{parse:()=>ir});function ir(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:s,password:i,host:o,hostname:u,port:c,pathname:l,
search:f,searchParams:y,hash:E}=new URL(n);i=decodeURIComponent(i);let T=s+":"+i,
R=e?Object.fromEntries(y.entries()):f;return{href:r,protocol:t,auth:T,username:s,
password:i,host:o,hostname:u,port:c,pathname:l,search:f,query:R,hash:E}}var or=$(
()=>{"use strict";h();a(ir,"parse")});var Hs=C((rf,js)=>{"use strict";h();var lu=(or(),k(Ws)),ar=(Yt(),k(zt));function ur(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=lu.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var s=(e.auth||":").split(":");if(t.user=s[0],t.password=s.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var i=e.
pathname;if(!t.host&&i&&/^%2f/i.test(i)){var o=i.split("/");t.host=decodeURIComponent(
o[0]),i=o.splice(1).join("/")}switch(i&&i.charAt(0)==="/"&&(i=i.slice(1)||null),
t.database=i&&decodeURI(i),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=ar.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=ar.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=ar.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(ur,"parse");js.exports=ur;ur.parse=ur});var lt=C((of,Ks)=>{"use strict";h();var fu=(Us(),k(Ns)),$s=$e(),Gs=Hs().parse,K=a(
function(r,e,t){return t===void 0?t=p.env["PG"+r.toUpperCase()]:t===!1||(t=p.env[t]),
e[r]||t||$s[r]},"val"),hu=a(function(){switch(p.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return $s.ssl},"readSSLConfigFromEnvironment"),Ie=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),te=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+Ie(n))},"ad\
d"),lr=class lr{constructor(e){e=typeof e=="string"?Gs(e):e||{},e.connectionString&&
(e=Object.assign({},e,Gs(e.connectionString))),this.user=K("user",e),this.database=
K("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
K("port",e),10),this.host=K("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:K("password",e)}),this.binary=K("binary",e),this.
options=K("options",e),this.ssl=typeof e.ssl>"u"?hu():e.ssl,typeof this.ssl=="st\
ring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=K("client_encoding",e),this.replication=K("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=K("applicatio\
n_name",e,"PGAPPNAME"),this.fallback_application_name=K("fallback_application_na\
me",e,!1),this.statement_timeout=K("statement_timeout",e,!1),this.lock_timeout=K(
"lock_timeout",e,!1),this.idle_in_transaction_session_timeout=K("idle_in_transac\
tion_session_timeout",e,!1),this.query_timeout=K("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=p.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
te(t,this,"user"),te(t,this,"password"),te(t,this,"port"),te(t,this,"application\
_name"),te(t,this,"fallback_application_name"),te(t,this,"connect_timeout"),te(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(te(t,n,"sslmode"),te(t,n,"sslca"),te(t,n,"sslkey"),te(t,n,"sslcert"),
te(t,n,"sslrootcert"),this.database&&t.push("dbname="+Ie(this.database)),this.replication&&
t.push("replication="+Ie(this.replication)),this.host&&t.push("host="+Ie(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+Ie(this.client_encoding)),fu.lookup(this.host,function(s,i){return s?
e(s,null):(t.push("hostaddr="+Ie(i)),e(null,t.join(" ")))})}};a(lr,"ConnectionPa\
rameters");var cr=lr;Ks.exports=cr});var Ys=C((cf,zs)=>{"use strict";h();var du=Ge(),Vs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
hr=class hr{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Vs.exec(e.text):t=Vs.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,s=e.length;n<s;n++){
var i=e[n];i!==null?t[n]=this._parsers[n](i):t[n]=null}return t}parseRow(e){for(var t={},
n=0,s=e.length;n<s;n++){var i=e[n],o=this.fields[n].name;i!==null?t[o]=this._parsers[n](
i):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=du.getTypeParser(n.dataTypeID,n.format||"text")}}};a(hr,"\
Result");var fr=hr;zs.exports=fr});var ei=C((hf,Xs)=>{"use strict";h();var{EventEmitter:pu}=ye(),Zs=Ys(),Js=Ke(),pr=class pr extends pu{constructor(e,t,n){
super(),e=Js.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,p.domain&&e.callback&&
(this.callback=p.domain.bind(e.callback)),this._result=new Zs(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new Zs(
this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
p.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
text!="string"&&typeof this.name!="string")return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`):this.values&&!Array.
isArray(this.values)?new Error("Query values must be an array"):(this.requiresPreparation()?
this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){return this.name&&e.parsedStatements[this.
name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){e.execute(
{portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=
!0,this.hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});
try{e.bind({portal:this.portal,statement:this.name,values:this.values,binary:this.
binary,valueMapper:Js.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(pr,"Query");
var dr=pr;Xs.exports=dr});var ri={};J(ri,{Socket:()=>ge,isIP:()=>yu});function yu(r){return 0}var ti,S,ge,
ft=$(()=>{"use strict";h();ti=De(ye(),1);a(yu,"isIP");S=class S extends ti.EventEmitter{constructor(){
super(...arguments);P(this,"opts",{});P(this,"connecting",!1);P(this,"pending",!0);
P(this,"writable",!0);P(this,"encrypted",!1);P(this,"authorized",!1);P(this,"des\
troyed",!1);P(this,"ws",null);P(this,"writeBuffer");P(this,"tlsState",0);P(this,
"tlsRead");P(this,"tlsWrite")}static get poolQueryViaFetch(){return S.opts.poolQueryViaFetch??
S.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){S.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return S.opts.fetchEndpoint??S.defaults.fetchEndpoint}static set fetchEndpoint(t){
S.opts.fetchEndpoint=t}static get fetchConnectionCache(){return S.opts.fetchConnectionCache??
S.defaults.fetchConnectionCache}static set fetchConnectionCache(t){S.opts.fetchConnectionCache=
t}static get fetchFunction(){return S.opts.fetchFunction??S.defaults.fetchFunction}static set fetchFunction(t){
S.opts.fetchFunction=t}static get webSocketConstructor(){return S.opts.webSocketConstructor??
S.defaults.webSocketConstructor}static set webSocketConstructor(t){S.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??S.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return S.opts.wsProxy??S.defaults.
wsProxy}static set wsProxy(t){S.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
S.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return S.
opts.coalesceWrites??S.defaults.coalesceWrites}static set coalesceWrites(t){S.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??S.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return S.opts.useSecureWebSocket??
S.defaults.useSecureWebSocket}static set useSecureWebSocket(t){S.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??S.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return S.opts.forceDisablePgSSL??
S.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){S.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??S.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return S.opts.disableSNI??
S.defaults.disableSNI}static set disableSNI(t){S.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??S.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return S.opts.pipelineConnect??S.defaults.pipelineConnect}static set pipelineConnect(t){
S.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
S.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return S.opts.subtls??S.defaults.subtls}static set subtls(t){S.opts.subtls=t}get subtls(){
return this.opts.subtls??S.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return S.opts.pipelineTLS??S.defaults.pipelineTLS}static set pipelineTLS(t){S.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??S.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return S.opts.rootCerts??S.defaults.
rootCerts}static set rootCerts(t){S.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??S.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let s=this.wsProxy;if(s===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof s=="function"?s(t,n):`${s}?address=${t}:${n}`}setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(t,n,s){
this.connecting=!0,s&&this.once("connect",s);let i;try{i=this.wsProxyAddrForHost(
n,typeof t=="string"?parseInt(t,10):t)}catch(o){this.emit("error",o),this.emit("\
close");return}return this.ws=await new Promise(async o=>{try{let c=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+i,l;if(this.webSocketConstructor!==void 0)l=new this.webSocketConstructor(
c);else try{l=new WebSocket(c)}catch{l=new __unstable_WebSocket(c)}l.addEventListener(
"open",()=>{o(l)})}catch(u){try{let l=(this.useSecureWebSocket?"https:":"http:")+
"//"+i;await fetch(l,{headers:{Upgrade:"websocket"}}).then(f=>{let y=f.webSocket;
if(y==null)throw u;y.accept(),o(y)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",o=>{this.emit(
"error",o),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",o=>{if(this.tlsState===0){let u=d.
from(o.data);this.emit("data",u)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let n=this.subtls.TrustedCert.fromPEM(this.rootCerts),
s=new this.subtls.WebSocketReadQueue(this.ws),i=s.read.bind(s),o=this.rawWrite.bind(
this),[u,c]=await this.subtls.startTls(t,n,i,o,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=c,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=d.from(t);this.emit(
"data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.
writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.
length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",s=i=>{}){return t.length===0?s():(typeof t=="string"&&(t=d.from(
t,n)),this.tlsState===0?this.rawWrite(t):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(t,n,s)):this.tlsWrite(t),!0)}end(t=d.alloc(0),n="utf8",s){
return this.write(t,n,()=>{this.ws.close(),s&&s()}),this}destroy(){return this.destroyed=
!0,this.end()}};a(S,"Socket"),P(S,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:t=>"\
https://"+t+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
P(S,"opts",{});ge=S});var jr=C(A=>{"use strict";h();Object.defineProperty(A,"__esModule",{value:!0});A.
NoticeMessage=A.DataRowMessage=A.CommandCompleteMessage=A.ReadyForQueryMessage=A.
NotificationResponseMessage=A.BackendKeyDataMessage=A.AuthenticationMD5Password=
A.ParameterStatusMessage=A.ParameterDescriptionMessage=A.RowDescriptionMessage=A.
Field=A.CopyResponse=A.CopyDataMessage=A.DatabaseError=A.copyDone=A.emptyQuery=A.
replicationStart=A.portalSuspended=A.noData=A.closeComplete=A.bindComplete=A.parseComplete=
void 0;A.parseComplete={name:"parseComplete",length:5};A.bindComplete={name:"bin\
dComplete",length:5};A.closeComplete={name:"closeComplete",length:5};A.noData={name:"\
noData",length:5};A.portalSuspended={name:"portalSuspended",length:5};A.replicationStart=
{name:"replicationStart",length:4};A.emptyQuery={name:"emptyQuery",length:4};A.copyDone=
{name:"copyDone",length:4};var Lr=class Lr extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};a(Lr,"DatabaseError");var yr=Lr;A.DatabaseError=yr;
var Ir=class Ir{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
a(Ir,"CopyDataMessage");var mr=Ir;A.CopyDataMessage=mr;var Rr=class Rr{constructor(e,t,n,s){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(s)}};a(Rr,"Co\
pyResponse");var gr=Rr;A.CopyResponse=gr;var Fr=class Fr{constructor(e,t,n,s,i,o,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=s,this.dataTypeSize=i,
this.dataTypeModifier=o,this.format=u}};a(Fr,"Field");var br=Fr;A.Field=br;var Mr=class Mr{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};a(Mr,"RowDescriptionMessage");var wr=Mr;A.RowDescriptionMessage=
wr;var Br=class Br{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};a(Br,"P\
arameterDescriptionMessage");var Sr=Br;A.ParameterDescriptionMessage=Sr;var Dr=class Dr{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};a(Dr,"ParameterStatusMessage");var vr=Dr;A.ParameterStatusMessage=vr;var kr=class kr{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};a(kr,"Authenti\
cationMD5Password");var xr=kr;A.AuthenticationMD5Password=xr;var Or=class Or{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Or,
"BackendKeyDataMessage");var Er=Or;A.BackendKeyDataMessage=Er;var qr=class qr{constructor(e,t,n,s){
this.length=e,this.processId=t,this.channel=n,this.payload=s,this.name="notifica\
tion"}};a(qr,"NotificationResponseMessage");var _r=qr;A.NotificationResponseMessage=
_r;var Qr=class Qr{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};a(Qr,"ReadyForQueryMessage");var Ar=Qr;A.ReadyForQueryMessage=Ar;var Nr=class Nr{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};a(Nr,"CommandCompleteMes\
sage");var Cr=Nr;A.CommandCompleteMessage=Cr;var Ur=class Ur{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(Ur,"Data\
RowMessage");var Tr=Ur;A.DataRowMessage=Tr;var Wr=class Wr{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};a(Wr,"NoticeMessage");var Pr=Wr;A.NoticeMessage=
Pr});var ni=C(ht=>{"use strict";h();Object.defineProperty(ht,"__esModule",{value:!0});
ht.Writer=void 0;var Gr=class Gr{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,s=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(
s),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=d.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=d.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}};a(Gr,"Wr\
iter");var Hr=Gr;ht.Writer=Hr});var ii=C(pt=>{"use strict";h();Object.defineProperty(pt,"__esModule",{value:!0});
pt.serialize=void 0;var $r=ni(),M=new $r.Writer,mu=a(r=>{M.addInt16(3).addInt16(
0);for(let n of Object.keys(r))M.addCString(n).addCString(r[n]);M.addCString("cl\
ient_encoding").addCString("UTF8");var e=M.addCString("").flush(),t=e.length+4;return new $r.
Writer().addInt32(t).add(e).flush()},"startup"),gu=a(()=>{let r=d.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),bu=a(r=>M.
addCString(r).flush(112),"password"),wu=a(function(r,e){return M.addCString(r).addInt32(
d.byteLength(e)).addString(e),M.flush(112)},"sendSASLInitialResponseMessage"),Su=a(
function(r){return M.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),vu=a(
r=>M.addCString(r).flush(81),"query"),si=[],xu=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||si;for(var n=t.length,
s=M.addCString(e).addCString(r.text).addInt16(n),i=0;i<n;i++)s.addInt32(t[i]);return M.
flush(80)},"parse"),Re=new $r.Writer,Eu=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(M.addInt16(0),Re.addInt32(-1)):n instanceof d?(M.
addInt16(1),Re.addInt32(n.length),Re.add(n)):(M.addInt16(0),Re.addInt32(d.byteLength(
n)),Re.addString(n))}},"writeValues"),_u=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,s=r.values||si,i=s.length;return M.addCString(e).addCString(t),
M.addInt16(i),Eu(s,r.valueMapper),M.addInt16(i),M.add(Re.flush()),M.addInt16(n?1:
0),M.flush(66)},"bind"),Au=d.from([69,0,0,0,9,0,0,0,0,0]),Cu=a(r=>{if(!r||!r.portal&&
!r.rows)return Au;let e=r.portal||"",t=r.rows||0,n=d.byteLength(e),s=4+n+1+4,i=d.
allocUnsafe(1+s);return i[0]=69,i.writeInt32BE(s,1),i.write(e,5,"utf-8"),i[n+5]=
0,i.writeUInt32BE(t,i.length-4),i},"execute"),Tu=a((r,e)=>{let t=d.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Kr=a((r,e)=>{let n=4+d.byteLength(e)+1,s=d.
allocUnsafe(1+n);return s[0]=r,s.writeInt32BE(n,1),s.write(e,5,"utf-8"),s[n]=0,s},
"cstringMessage"),Pu=M.addCString("P").flush(68),Lu=M.addCString("S").flush(68),
Iu=a(r=>r.name?Kr(68,`${r.type}${r.name||""}`):r.type==="P"?Pu:Lu,"describe"),Ru=a(
r=>{let e=`${r.type}${r.name||""}`;return Kr(67,e)},"close"),Fu=a(r=>M.add(r).flush(
100),"copyData"),Mu=a(r=>Kr(102,r),"copyFail"),dt=a(r=>d.from([r,0,0,0,4]),"code\
OnlyBuffer"),Bu=dt(72),Du=dt(83),ku=dt(88),Ou=dt(99),qu={startup:mu,password:bu,
requestSsl:gu,sendSASLInitialResponseMessage:wu,sendSCRAMClientFinalMessage:Su,query:vu,
parse:xu,bind:_u,execute:Cu,describe:Iu,close:Ru,flush:()=>Bu,sync:()=>Du,end:()=>ku,
copyData:Fu,copyDone:()=>Ou,copyFail:Mu,cancel:Tu};pt.serialize=qu});var oi=C(yt=>{"use strict";h();Object.defineProperty(yt,"__esModule",{value:!0});
yt.BufferReader=void 0;var Qu=d.allocUnsafe(0),zr=class zr{constructor(e=0){this.
offset=e,this.buffer=Qu,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};a(zr,"BufferReader");var Vr=zr;yt.BufferReader=
Vr});var ai={};J(ai,{default:()=>Nu});var Nu,ui=$(()=>{h();Nu={}});var fi=C(Fe=>{"use strict";h();var Uu=Fe&&Fe.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.
Parser=void 0;var B=jr(),Wu=oi(),ju=Uu((ui(),k(ai))),Yr=1,Hu=4,ci=Yr+Hu,li=d.allocUnsafe(
0),Jr=class Jr{constructor(e){if(this.buffer=li,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Wu.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,s=this.bufferOffset;for(;s+ci<=n;){let i=this.buffer[s],
o=this.buffer.readUInt32BE(s+Yr),u=Yr+o;if(u+s<=n){let c=this.handlePacket(s+ci,
i,o,this.buffer);t(c),s+=u}else break}s===n?(this.buffer=li,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-s,this.bufferOffset=s)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let s;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)s=this.buffer;else{let i=this.buffer.byteLength*2;for(;t>=i;)i*=2;s=
d.allocUnsafe(i)}this.buffer.copy(s,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=s,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,s){
switch(t){case 50:return B.bindComplete;case 49:return B.parseComplete;case 51:return B.
closeComplete;case 110:return B.noData;case 115:return B.portalSuspended;case 99:
return B.copyDone;case 87:return B.replicationStart;case 73:return B.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,s);case 67:return this.parseCommandCompleteMessage(
e,n,s);case 90:return this.parseReadyForQueryMessage(e,n,s);case 65:return this.
parseNotificationMessage(e,n,s);case 82:return this.parseAuthenticationResponse(
e,n,s);case 83:return this.parseParameterStatusMessage(e,n,s);case 75:return this.
parseBackendKeyData(e,n,s);case 69:return this.parseErrorMessage(e,n,s,"error");case 78:
return this.parseErrorMessage(e,n,s,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,s);case 116:return this.parseParameterDescriptionMessage(e,n,s);case 71:return this.
parseCopyInMessage(e,n,s);case 72:return this.parseCopyOutMessage(e,n,s);case 100:
return this.parseCopyData(e,n,s);default:ju.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.
reader.string(1);return new B.ReadyForQueryMessage(t,s)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.cstring();return new B.CommandCompleteMessage(
t,s)}parseCopyData(e,t,n){let s=n.slice(e,e+(t-4));return new B.CopyDataMessage(
t,s)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,s){this.reader.setBuffer(e,n);let i=this.reader.byte()!==
0,o=this.reader.int16(),u=new B.CopyResponse(t,s,i,o);for(let c=0;c<o;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i=this.reader.cstring(),o=this.reader.cstring();return new B.
NotificationResponseMessage(t,s,i,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let s=this.reader.int16(),i=new B.RowDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.fields[o]=this.parseField();return i}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),s=this.reader.int32(),i=this.reader.
int16(),o=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new B.
Field(e,t,n,s,i,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int16(),i=new B.ParameterDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.dataTypeIDs[o]=this.reader.int32();return i}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let s=this.reader.int16(),i=new Array(s);for(let o=0;o<s;o++){
let u=this.reader.int32();i[o]=u===-1?null:this.reader.string(u)}return new B.DataRowMessage(
t,i)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.reader.
cstring(),i=this.reader.cstring();return new B.ParameterStatusMessage(t,s,i)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.int32(),i=this.reader.int32();return new B.
BackendKeyDataMessage(t,s,i)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i={name:"authenticationOk",length:t};switch(s){case 0:
break;case 3:i.length===8&&(i.name="authenticationCleartextPassword");break;case 5:
if(i.length===12){i.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new B.AuthenticationMD5Password(t,u)}break;case 10:i.name="authentication\
SASL",i.mechanisms=[];let o;do o=this.reader.cstring(),o&&i.mechanisms.push(o);while(o);
break;case 11:i.name="authenticationSASLContinue",i.data=this.reader.string(t-8);
break;case 12:i.name="authenticationSASLFinal",i.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+s)}return i}parseErrorMessage(e,t,n,s){
this.reader.setBuffer(e,n);let i={},o=this.reader.string(1);for(;o!=="\0";)i[o]=
this.reader.cstring(),o=this.reader.string(1);let u=i.M,c=s==="notice"?new B.NoticeMessage(
t,u):new B.DatabaseError(u,t,s);return c.severity=i.S,c.code=i.C,c.detail=i.D,c.
hint=i.H,c.position=i.P,c.internalPosition=i.p,c.internalQuery=i.q,c.where=i.W,c.
schema=i.s,c.table=i.t,c.column=i.c,c.dataType=i.d,c.constraint=i.n,c.file=i.F,c.
line=i.L,c.routine=i.R,c}};a(Jr,"Parser");var Zr=Jr;Fe.Parser=Zr});var Xr=C(be=>{"use strict";h();Object.defineProperty(be,"__esModule",{value:!0});
be.DatabaseError=be.serialize=be.parse=void 0;var Gu=jr();Object.defineProperty(
be,"DatabaseError",{enumerable:!0,get:function(){return Gu.DatabaseError}});var $u=ii();
Object.defineProperty(be,"serialize",{enumerable:!0,get:function(){return $u.serialize}});
var Ku=fi();function Vu(r,e){let t=new Ku.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}a(Vu,"parse");be.parse=Vu});var hi={};J(hi,{connect:()=>zu});function zu({socket:r,servername:e}){return r.startTls(
e),r}var di=$(()=>{h();a(zu,"connect")});var rn=C((qf,mi)=>{"use strict";h();var pi=(ft(),k(ri)),Yu=ye().EventEmitter,{parse:Zu,
serialize:q}=Xr(),yi=q.flush(),Ju=q.sync(),Xu=q.end(),tn=class tn extends Yu{constructor(e){
super(),e=e||{},this.stream=e.stream||new pi.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let s=a(function(i){n._ending&&
(i.code==="ECONNRESET"||i.code==="EPIPE")||n.emit("error",i)},"reportStreamError");
if(this.stream.on("error",s),this.stream.on("close",function(){n.emit("end")}),!this.
ssl)return this.attachListeners(this.stream);this.stream.once("data",function(i){
var o=i.toString("utf8");switch(o){case"S":break;case"N":return n.stream.end(),n.
emit("error",new Error("The server does not support SSL connections"));default:return n.
stream.end(),n.emit("error",new Error("There was an error establishing an SSL co\
nnection"))}var u=(di(),k(hi));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),pi.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(l){return n.emit("error",l)}n.attachListeners(n.stream),
n.stream.on("error",s),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),Zu(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(q.requestSsl())}startup(e){
this.stream.write(q.startup(e))}cancel(e,t){this._send(q.cancel(e,t))}password(e){
this._send(q.password(e))}sendSASLInitialResponseMessage(e,t){this._send(q.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(q.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(q.query(
e))}parse(e){this._send(q.parse(e))}bind(e){this._send(q.bind(e))}execute(e){this.
_send(q.execute(e))}flush(){this.stream.writable&&this.stream.write(yi)}sync(){this.
_ending=!0,this._send(yi),this._send(Ju)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(Xu,()=>{this.stream.end()})}close(e){
this._send(q.close(e))}describe(e){this._send(q.describe(e))}sendCopyFromChunk(e){
this._send(q.copyData(e))}endCopyFrom(){this._send(q.copyDone())}sendCopyFail(e){
this._send(q.copyFail(e))}};a(tn,"Connection");var en=tn;mi.exports=en});var wi=C((Wf,bi)=>{"use strict";h();var ec=ye().EventEmitter,Uf=(Oe(),k(ke)),tc=Ke(),
nn=Ts(),rc=qs(),nc=sr(),sc=lt(),gi=ei(),ic=$e(),oc=rn(),sn=class sn extends ec{constructor(e){
super(),this.connectionParameters=new sc(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||w.Promise,this._types=new nc(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new oc({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||ic.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=a(
n=>{p.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let s=new Error("Client has already been conn\
ected. You cannot reuse a client.");p.nextTick(()=>{e(s)});return}this._connecting=
!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=
setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expired"))},this.
_connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.
host+"/.s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){
t.ssl?n.requestSsl():n.startup(t.getStartupConf())}),n.on("sslconnect",function(){
n.startup(t.getStartupConf())}),this._attachListeners(n),n.once("end",()=>{let s=this.
_ending?new Error("Connection terminated"):new Error("Connection terminated unex\
pectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(s),this.
_ending||(this._connecting&&!this._connectionError?this._connectionCallback?this.
_connectionCallback(s):this._handleErrorEvent(s):this._connectionError||this._handleErrorEvent(
s)),p.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
return new this._Promise((t,n)=>{this._connect(s=>{s?n(s):t()})})}_attachListeners(e){
e.on("authenticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),
e.on("authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("a\
uthenticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLCont\
inue",this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this.
_handleAuthSASLFinal.bind(this)),e.on("backendKeyData",this._handleBackendKeyData.
bind(this)),e.on("error",this._handleErrorEvent.bind(this)),e.on("errorMessage",
this._handleErrorMessage.bind(this)),e.on("readyForQuery",this._handleReadyForQuery.
bind(this)),e.on("notice",this._handleNotice.bind(this)),e.on("rowDescription",this.
_handleRowDescription.bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),
e.on("portalSuspended",this._handlePortalSuspended.bind(this)),e.on("emptyQuery",
this._handleEmptyQuery.bind(this)),e.on("commandComplete",this._handleCommandComplete.
bind(this)),e.on("parseComplete",this._handleParseComplete.bind(this)),e.on("cop\
yInResponse",this._handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.
bind(this)),e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){
let t=this.connection;typeof this.password=="function"?this._Promise.resolve().then(
()=>this.password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("erro\
r",new TypeError("Password must be a string"));return}this.connectionParameters.
password=this.password=n}else this.connectionParameters.password=this.password=null;
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():rc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=tc.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=nn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
nn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){nn.finalizeSession(this.saslSession,
e.data),this.saslSession=null}_handleBackendKeyData(e){this.processID=e.processID,
this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this._connecting=
!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("c\
onnect"));let{activeQuery:t}=this;this.activeQuery=null,this.readyForQuery=!0,t&&
t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),
this._connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){
if(this._connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,
this._errorAllQueries(e),this.emit("error",e)}_handleErrorMessage(e){if(this._connecting)
return this._handleErrorWhileConnecting(e);let t=this.activeQuery;if(!t){this._handleErrorEvent(
e);return}this.activeQuery=null,t.handleError(e,this.connection)}_handleRowDescription(e){
this.activeQuery.handleRowDescription(e)}_handleDataRow(e){this.activeQuery.handleDataRow(
e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.connection)}_handleEmptyQuery(e){
this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){this.
activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.
activeQuery.name&&(this.connection.parsedStatements[this.activeQuery.name]=this.
activeQuery.text)}_handleCopyInResponse(e){this.activeQuery.handleCopyInResponse(
this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(e,this.connection)}_handleNotification(e){
this.emit("notification",e)}_handleNotice(e){this.emit("notice",e)}getStartupConf(){
var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=
""+e.replication),e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,
10))),e.lock_timeout&&(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&
(t.idle_in_transaction_session_timeout=String(parseInt(e.idle_in_transaction_session_timeout,
10))),e.options&&(t.options=e.options),t}cancel(e,t){if(e.activeQuery===t){var n=this.
connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+
this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.
indexOf(t),1)}setTypeParser(e,t,n){return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){
return this._types.getTypeParser(e,t)}escapeIdentifier(e){return'"'+e.replace(/"/g,
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",s=0;s<e.length;s++){var i=e[s];i===
"'"?n+=i+i:i==="\\"?(n+=i+i,t=!0):n+=i}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&p.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var s,i,o,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,i=s=e,typeof t=="function"&&
(s.callback=s.callback||t)):(o=this.connectionParameters.query_timeout,s=new gi(
e,t,n),s.callback||(i=new this._Promise((l,f)=>{s.callback=(y,E)=>y?f(y):l(E)}))),
o&&(c=s.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");p.nextTick(
()=>{s.handleError(l,this.connection)}),c(l),s.callback=()=>{};var f=this.queryQueue.
indexOf(s);f>-1&&this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),s.callback=
(l,f)=>{clearTimeout(u),c(l,f)}),this.binary&&!s.binary&&(s.binary=!0),s._result&&
!s._result._types&&(s._result._types=this._types),this._queryable?this._ending?(p.
nextTick(()=>{s.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),i):(this.queryQueue.push(s),this._pulseQueryQueue(),i):(p.nextTick(
()=>{s.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),i)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(sn,"Client");var mt=sn;mt.Query=
gi;bi.exports=mt});var Ei=C((Gf,xi)=>{"use strict";h();var ac=ye().EventEmitter,Si=a(function(){},"\
NOOP"),vi=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),un=class un{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};a(un,"IdleItem");var on=un,cn=class cn{constructor(e){this.callback=
e}};a(cn,"PendingItem");var Me=cn;function uc(){throw new Error("Release called \
on client which has already been released to the pool.")}a(uc,"throwOnDoubleRele\
ase");function gt(r,e){if(e)return{callback:e,result:void 0};let t,n,s=a(function(o,u){
o?t(o):n(u)},"cb"),i=new r(function(o,u){n=o,t=u}).catch(o=>{throw Error.captureStackTrace(
o),o});return{callback:s,result:i}}a(gt,"promisify");function cc(r,e){return a(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}a(cc,"makeIdleListener");var ln=class ln extends ac{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||bt().Client,this.Promise=
this.options.Promise||w.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,
this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse q\
ueue"),this.ended){this.log("pulse queue ended");return}if(this.ending){this.log(
"pulse queue on ending"),this._idle.length&&this._idle.slice().map(t=>{this._remove(
t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}if(!this.
_pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&
this._isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this.
_idle.pop();clearTimeout(t.timeoutId);let n=t.client;n.ref&&n.ref();let s=t.idleListener;
return this._acquireClient(n,e,s,!1)}if(!this._isFull())return this.newClient(e);
throw new Error("unexpected condition")}_remove(e){let t=vi(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let s=new Error("Can\
not use a pool after calling end on the pool");return e?e(s):this.Promise.reject(
s)}let t=gt(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&p.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new Me(t.callback)),n;let s=a((u,c,l)=>{clearTimeout(
o),t.callback(u,c,l)},"queueCallback"),i=new Me(s),o=setTimeout(()=>{vi(this._pendingQueue,
u=>u.callback===s),i.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(i),n}return this.newClient(new Me(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=cc(this,t);this.log("checking c\
lient timeout");let s,i=!1;this.options.connectionTimeoutMillis&&(s=setTimeout(()=>{
this.log("ending client due to timeout"),i=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(o=>{if(s&&clearTimeout(s),t.on("error",n),o)this.log("client failed to\
 connect",o),this._clients=this._clients.filter(u=>u!==t),i&&(o.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
o,void 0,Si);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(
t,new Me((l,f,y)=>y()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,s){
s&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?s&&this.options.verify?this.options.verify(
e,e.release):e.release():s&&this.options.verify?this.options.verify(e,i=>{if(i)return e.
release(i),t.callback(i,void 0,Si);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return s=>{n&&uc(),n=!0,this._release(e,
t,s)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let i;this.options.idleTimeoutMillis&&(i=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
i.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new on(e,t,i)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let i=gt(this.Promise,e);
return v(function(){return i.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),i.result}typeof t=="function"&&(n=
t,t=void 0);let s=gt(this.Promise,n);return n=s.callback,this.connect((i,o)=>{if(i)
return n(i);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("err\
or",c),this.log("dispatching query");try{o.query(e,t,(l,f)=>{if(this.log("query \
dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,
f)})}catch(l){return o.release(l),n(l)}}),s.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=gt(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(ln,"Pool");var an=ln;xi.exports=an});var _i={};J(_i,{default:()=>lc});var lc,Ai=$(()=>{h();lc={}});var Ci=C((zf,fc)=>{fc.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
 client - pure javascript & libpq with the same API",keywords:["database","libpq",
"pg","postgre","postgres","postgresql","rdbms"],homepage:"https://github.com/bri\
anc/node-postgres",repository:{type:"git",url:"git://github.com/brianc/node-post\
gres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail.\
com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0",
"pg-connection-string":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-ty\
pes":"^2.1.0",pgpass:"1.x"},devDependencies:{async:"2.6.4",bluebird:"3.5.2",co:"\
4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":">=3.0.1"},peerDependenciesMeta:{
"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["lib","SPONSORS\
.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c\
7b9a5491a178655"}});var Li=C((Yf,Pi)=>{"use strict";h();var Ti=ye().EventEmitter,hc=(Oe(),k(ke)),fn=Ke(),
Be=Pi.exports=function(r,e,t){Ti.call(this),r=fn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};hc.inherits(
Be,Ti);var dc={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Be.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=dc[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Be.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Be.prototype.catch=function(r){return this._getPromise().
catch(r)};Be.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Be.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(i,o,u){if(r.native.arrayMode=!1,v(function(){e.emit("_done")}),i)return e.
handleError(i);e._emitRowEvents&&(u.length>1?o.forEach((c,l)=>{c.forEach(f=>{e.emit(
"row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(p.domain&&(t=p.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(fn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let i=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(i)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(i){return i?t(i):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let i=new Error("Query values must be an array");return t(i)}var s=this.
values.map(fn.prepareValue);r.native.query(this.text,s,t)}else r.native.query(this.
text,t)}});var Mi=C((eh,Fi)=>{"use strict";h();var pc=(Ai(),k(_i)),yc=sr(),Xf=Ci(),Ii=ye().
EventEmitter,mc=(Oe(),k(ke)),gc=lt(),Ri=Li(),z=Fi.exports=function(r){Ii.call(this),
r=r||{},this._Promise=r.Promise||w.Promise,this._types=new yc(r.types),this.native=
new pc({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new gc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};z.Query=Ri;mc.inherits(z,Ii);z.prototype._errorAllQueries=
function(r){let e=a(t=>{p.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};z.prototype._connect=
function(r){var e=this;if(this._connecting){p.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(s){if(s)return e.native.end(),r(s);e._connected=!0,
e.native.on("error",function(i){e._queryable=!1,e._errorAllQueries(i),e.emit("er\
ror",i)}),e.native.on("notification",function(i){e.emit("notification",{channel:i.
relname,payload:i.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};z.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};z.prototype.query=function(r,e,t){var n,
s,i,o,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")i=r.query_timeout||this.connectionParameters.
query_timeout,s=n=r,typeof e=="function"&&(r.callback=e);else if(i=this.connectionParameters.
query_timeout,n=new Ri(r,e,t),!n.callback){let c,l;s=new this._Promise((f,y)=>{c=
f,l=y}),n.callback=(f,y)=>f?l(f):c(y)}return i&&(u=n.callback,o=setTimeout(()=>{
var c=new Error("Query read timeout");p.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},i),n.callback=(c,l)=>{clearTimeout(o),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,p.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),s):(this._queryQueue.push(
n),this._pulseQueryQueue(),s):(n.native=this.native,p.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),s)};
z.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,s){
r=a(i=>i?s(i):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),p.nextTick(()=>{e.emit("end"),r&&r()})}),t};z.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};z.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};z.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};z.prototype.ref=function(){};
z.prototype.unref=function(){};z.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};z.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var hn=C((nh,Bi)=>{"use strict";h();Bi.exports=Mi()});var bt=C((ih,ze)=>{"use strict";h();var bc=wi(),wc=$e(),Sc=rn(),vc=Ei(),{DatabaseError:xc}=Xr(),
Ec=a(r=>{var e;return e=class extends vc{constructor(n){super(n,r)}},a(e,"BoundP\
ool"),e},"poolFactory"),dn=a(function(r){this.defaults=wc,this.Client=r,this.Query=
this.Client.Query,this.Pool=Ec(this.Client),this._pools=[],this.Connection=Sc,this.
types=Ge(),this.DatabaseError=xc},"PG");typeof p.env.NODE_PG_FORCE_NATIVE<"u"?ze.
exports=new dn(hn()):(ze.exports=new dn(bc),Object.defineProperty(ze.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new dn(hn())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(ze.exports,"\
native",{value:r}),r}}))});var Cc={};J(Cc,{Client:()=>wt,ClientBase:()=>Y.ClientBase,Connection:()=>Y.Connection,
DatabaseError:()=>Y.DatabaseError,NeonDbError:()=>we,Pool:()=>mn,Query:()=>Y.Query,
defaults:()=>Y.defaults,neon:()=>pn,neonConfig:()=>ge,types:()=>Y.types});module.
exports=k(Cc);h();var St=De(bt());ft();h();or();ft();var Oi=De(Ke());var yn=class yn extends Error{constructor(){super(...arguments);P(this,"name","N\
eonDbError");P(this,"code",null);P(this,"sourceError")}};a(yn,"NeonDbError");var we=yn,
Di="transaction() expects an array of queries, or a function returning an array \
of queries";function pn(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:s,
readOnly:i,deferrable:o,queryCallback:u,resultCallback:c}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment \
variable has not been set?");let l;try{l=ir(r)}catch{throw new Error("Database c\
onnection string provided to `neon()` is not a valid URL. Connection string: "+String(
r))}let{protocol:f,username:y,password:E,hostname:T,port:R,pathname:W}=l;if(f!==
"postgres:"&&f!=="postgresql:"||!y||!E||!T||!W)throw new Error("Database connect\
ion string format for `neon()` should be: postgresql://user:password@host.tld/db\
name?option=value");function Z(_,...m){let D,j;if(typeof _=="string")D=_,j=m[1],
m=m[0]??[];else{D="";for(let N=0;N<_.length;N++)D+=_[N],N<m.length&&(D+="$"+(N+1))}
m=m.map(N=>(0,Oi.prepareValue)(N));let Q={query:D,params:m};return u&&u(Q),_c(he,
Q,j)}a(Z,"resolve"),Z.transaction=async(_,m)=>{if(typeof _=="function"&&(_=_(Z)),
!Array.isArray(_))throw new Error(Di);let D=_.map(j=>{if(j[Symbol.toStringTag]!==
"NeonQueryPromise")throw new Error(Di);return j.parameterizedQuery});return he(D,
m)};async function he(_,m){let D=n??{},{fetchEndpoint:j,fetchConnectionCache:Q,fetchFunction:N}=ge,
ae=typeof j=="function"?j(T,R):j,de=Array.isArray(_)?{queries:_}:_,I=e??!1,H=t??
!1,ue=s,pe=i,Se=o;m!==void 0&&(m.arrayMode!==void 0&&(I=m.arrayMode),m.fullResults!==
void 0&&(H=m.fullResults),m.fetchOptions!==void 0&&(D={...D,...m.fetchOptions}),
m.isolationLevel!==void 0&&(ue=m.isolationLevel),m.readOnly!==void 0&&(pe=m.readOnly),
m.deferrable!==void 0&&(Se=m.deferrable));let ce={"Neon-Connection-String":r,"Ne\
on-Raw-Text-Output":"true","Neon-Array-Mode":"true"};Q===!0&&(ce["Neon-Pool-Opt-\
In"]="true"),Array.isArray(_)&&(ue!==void 0&&(ce["Neon-Batch-Isolation-Level"]=ue),
pe!==void 0&&(ce["Neon-Batch-Read-Only"]=String(pe)),Se!==void 0&&(ce["Neon-Batc\
h-Deferrable"]=String(Se)));let ne;try{ne=await(N??fetch)(ae,{method:"POST",body:JSON.
stringify(de),headers:ce,...D})}catch(se){let G=new we(`Error connecting to data\
base: ${se.message}`);throw G.sourceError=se,G}if(ne.ok){let se=await ne.json();
if(Array.isArray(_)){let G=se.results;if(!Array.isArray(G))throw new we("Neon in\
ternal error: unexpected result format");return G.map((re,xe)=>ki(re,{arrayMode:I,
fullResults:H,parameterizedQuery:_[xe],resultCallback:c}))}else return ki(se,{arrayMode:I,
fullResults:H,parameterizedQuery:_,resultCallback:c})}else{let{status:se}=ne;if(se===
400){let{message:G,code:re}=await ne.json(),xe=new we(G);throw xe.code=re,xe}else{
let G=await ne.text();throw new we(`Server error (HTTP status ${se}): ${G}`)}}}return a(
he,"execute"),Z}a(pn,"neon");function _c(r,e,t){return{[Symbol.toStringTag]:"Neo\
nQueryPromise",parameterizedQuery:e,opts:t,then:(n,s)=>r(e,t).then(n,s),catch:n=>r(
e,t).catch(n),finally:n=>r(e,t).finally(n)}}a(_c,"createNeonQueryPromise");function ki(r,{
arrayMode:e,fullResults:t,parameterizedQuery:n,resultCallback:s}){let i=r.fields.
map(c=>c.name),o=r.fields.map(c=>Y.types.getTypeParser(c.dataTypeID)),u=e===!0?r.
rows.map(c=>c.map((l,f)=>l===null?null:o[f](l))):r.rows.map(c=>Object.fromEntries(
c.map((l,f)=>[i[f],l===null?null:o[f](l)])));return s&&s(n,r,u,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r):u}a(ki,"processQueryResult");var qi=De(lt()),Y=De(bt());var gn=class gn extends St.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let s=this.config?.host!==void 0||this.config?.connectionString!==void 0||
p.env.PGHOST!==void 0,i=p.env.USER??p.env.USERNAME;if(!s&&this.host==="localhost"&&
this.user===i&&this.database===i&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${i}, db: ${i}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&
this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let l=this.
connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners(
"authenticationCleartextPassword"),l.removeAllListeners("readyForQuery"),l.once(
"readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let f=this.ssl?"sslconnect":"connect";l.on(f,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){let n=this.
saslSession,s=this.password,i=t.data;if(n.message!=="SASLInitialResponse"||typeof s!=
"string"||typeof i!="string")throw new Error("SASL: protocol error");let o=Object.
fromEntries(i.split(",").map(G=>{if(!/^.=/.test(G))throw new Error("SASL: Invali\
d attribute pair entry");let re=G[0],xe=G.substring(2);return[re,xe]})),u=o.r,c=o.
s,l=o.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let f=parseInt(l,10),y=d.from(c,"base64"),E=new TextEncoder,
T=E.encode(s),R=await b.subtle.importKey("raw",T,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),W=new Uint8Array(await b.subtle.sign("HMAC",R,d.concat([y,d.from(
[0,0,0,1])]))),Z=W;for(var he=0;he<f-1;he++)W=new Uint8Array(await b.subtle.sign(
"HMAC",R,W)),Z=d.from(Z.map((G,re)=>Z[re]^W[re]));let _=Z,m=await b.subtle.importKey(
"raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),D=new Uint8Array(await b.
subtle.sign("HMAC",m,E.encode("Client Key"))),j=await b.subtle.digest("SHA-256",
D),Q="n=*,r="+n.clientNonce,N="r="+u+",s="+c+",i="+f,ae="c=biws,r="+u,de=Q+","+N+
","+ae,I=await b.subtle.importKey("raw",j,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var H=new Uint8Array(await b.subtle.sign("HMAC",I,E.encode(de))),ue=d.
from(D.map((G,re)=>D[re]^H[re])),pe=ue.toString("base64");let Se=await b.subtle.
importKey("raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),ce=await b.subtle.
sign("HMAC",Se,E.encode("Server Key")),ne=await b.subtle.importKey("raw",ce,{name:"\
HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var se=d.from(await b.subtle.sign("HMA\
C",ne,E.encode(de)));n.message="SASLResponse",n.serverSignature=se.toString("bas\
e64"),n.response=ae+",p="+pe,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};a(gn,"NeonClient");var wt=gn;function Ac(r,e){if(e)return{callback:e,
result:void 0};let t,n,s=a(function(o,u){o?t(o):n(u)},"cb"),i=new r(function(o,u){
n=o,t=u});return{callback:s,result:i}}a(Ac,"promisify");var bn=class bn extends St.Pool{constructor(){
super(...arguments);P(this,"Client",wt);P(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,s){
if(!ge.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,s);typeof n=="function"&&(s=n,n=void 0);let i=Ac(this.Promise,
s);s=i.callback;try{let o=new qi.default(this.options),u=encodeURIComponent,c=encodeURI,
l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,f=typeof t==
"string"?t:t.text,y=n??t.values??[];pn(l,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(f,y).then(T=>s(void 0,T)).catch(T=>s(T))}catch(o){s(o)}return i.result}};
a(bn,"NeonPool");var mn=bn;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
