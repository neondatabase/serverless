"use strict";var Ca=Object.create;var $e=Object.defineProperty;var Ia=Object.getOwnPropertyDescriptor;var Ta=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Pa=Object.prototype.hasOwnProperty;var Ba=(r,e,t)=>e in r?$e(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>$e(r,"name",{value:e,configurable:!0});var te=(r,e)=>()=>(r&&(e=r(r=0)),e);var P=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),fe=(r,e)=>{for(var t in e)$e(r,t,{get:e[t],
enumerable:!0})},Ti=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ta(e))!Pa.
call(r,i)&&i!==t&&$e(r,i,{get:()=>e[i],enumerable:!(n=Ia(e,i))||n.enumerable});return r};var qe=(r,e,t)=>(t=r!=null?Ca(Ra(r)):{},Ti(e||!r||!r.__esModule?$e(t,"default",{value:r,enumerable:!0}):
t,r)),j=r=>Ti($e({},"__esModule",{value:!0}),r);var I=(r,e,t)=>Ba(r,typeof e!="symbol"?e+"":e,t);var Bi=P(Ut=>{"use strict";p();Ut.byteLength=Fa;Ut.toByteArray=ka;Ut.fromByteArray=Oa;var xe=[],he=[],
La=typeof Uint8Array<"u"?Uint8Array:Array,gr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(Qe=0,Ri=gr.length;Qe<Ri;++Qe)xe[Qe]=gr[Qe],he[gr.charCodeAt(Qe)]=Qe;var Qe,Ri;he[45]=
62;he[95]=63;function Pi(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Pi,"getLens");
function Fa(r){var e=Pi(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(Fa,"byteLength");function Ma(r,e,t){return(e+
t)*3/4-t}a(Ma,"_byteLength");function ka(r){var e,t=Pi(r),n=t[0],i=t[1],s=new La(Ma(r,n,i)),o=0,u=i>
0?n-4:n,l;for(l=0;l<u;l+=4)e=he[r.charCodeAt(l)]<<18|he[r.charCodeAt(l+1)]<<12|he[r.charCodeAt(l+2)]<<
6|he[r.charCodeAt(l+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=he[r.charCodeAt(
l)]<<2|he[r.charCodeAt(l+1)]>>4,s[o++]=e&255),i===1&&(e=he[r.charCodeAt(l)]<<10|he[r.charCodeAt(l+1)]<<
4|he[r.charCodeAt(l+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(ka,"toByteArray");function Ua(r){return xe[r>>
18&63]+xe[r>>12&63]+xe[r>>6&63]+xe[r&63]}a(Ua,"tripletToBase64");function Da(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Ua(n));return i.join("")}a(Da,"en\
codeChunk");function Oa(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(Da(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(xe[e>>2]+xe[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(xe[e>>10]+xe[e>>4&63]+xe[e<<2&63]+"=")),i.join("")}a(Oa,"fromByteArray")});var Li=P(br=>{p();br.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,l=(1<<u)-1,c=l>>1,f=-7,y=t?i-1:0,g=t?
-1:1,E=r[e+y];for(y+=g,s=E&(1<<-f)-1,E>>=-f,f+=u;f>0;s=s*256+r[e+y],y+=g,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+y],y+=g,f-=8);if(s===0)s=1-c;else{if(s===l)return o?NaN:(E?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-c}return(E?-1:1)*o*Math.pow(2,s-n)};br.write=function(r,e,t,n,i,s){var o,u,l,c=s*8-i-1,
f=(1<<c)-1,y=f>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=n?0:s-1,C=n?1:-1,H=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=
Math.pow(2,-o))<1&&(o--,l*=2),o+y>=1?e+=g/l:e+=g*Math.pow(2,1-y),e*l>=2&&(o++,l/=2),o+y>=f?(u=0,o=f):
o+y>=1?(u=(e*l-1)*Math.pow(2,i),o=o+y):(u=e*Math.pow(2,y-1)*Math.pow(2,i),o=0));i>=8;r[t+E]=u&255,E+=
C,u/=256,i-=8);for(o=o<<i|u,c+=i;c>0;r[t+E]=o&255,E+=C,o/=256,c-=8);r[t+E-C]|=H*128}});var zi=P(ze=>{"use strict";p();var xr=Bi(),Ve=Li(),Fi=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;ze.Buffer=d;ze.SlowBuffer=Ha;ze.INSPECT_MAX_BYTES=
50;var Dt=2147483647;ze.kMaxLength=Dt;d.TYPED_ARRAY_SUPPORT=Na();!d.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Na(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(Na,"typedArraySupport");Object.
defineProperty(d.prototype,"parent",{enumerable:!0,get:a(function(){if(d.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:a(function(){if(d.isBuffer(
this))return this.byteOffset},"get")});function Ae(r){if(r>Dt)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),
e}a(Ae,"createBuffer");function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return Ar(r)}return Di(r,e,t)}
a(d,"Buffer");d.poolSize=8192;function Di(r,e,t){if(typeof r=="string")return Qa(r,e);if(ArrayBuffer.
isView(r))return ja(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Se(r,ArrayBuffer)||
r&&Se(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Se(r,SharedArrayBuffer)||r&&Se(r.buffer,
SharedArrayBuffer)))return vr(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return d.
from(n,e,t);let i=Wa(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a(Di,"from");d.from=function(r,e,t){return Di(r,e,t)};Object.setPrototypeOf(d.prototype,
Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Oi(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(Oi,"assertSize");function qa(r,e,t){return Oi(r),r<=0?Ae(r):e!==void 0?typeof t==
"string"?Ae(r).fill(e,t):Ae(r).fill(e):Ae(r)}a(qa,"alloc");d.alloc=function(r,e,t){return qa(r,e,t)};
function Ar(r){return Oi(r),Ae(r<0?0:_r(r)|0)}a(Ar,"allocUnsafe");d.allocUnsafe=function(r){return Ar(
r)};d.allocUnsafeSlow=function(r){return Ar(r)};function Qa(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Ni(r,e)|0,n=Ae(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a(Qa,"fromString");function Sr(r){let e=r.length<0?0:_r(r.length)|
0,t=Ae(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(Sr,"fromArrayLike");function ja(r){if(Se(r,Uint8Array)){
let e=new Uint8Array(r);return vr(e.buffer,e.byteOffset,e.byteLength)}return Sr(r)}a(ja,"fromArrayVi\
ew");function vr(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,d.prototype),n}a(vr,"fromArrayBuffer");function Wa(r){if(d.isBuffer(r)){
let e=_r(r.length)|0,t=Ae(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Ir(r.length)?Ae(0):Sr(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Sr(r.data)}
a(Wa,"fromObject");function _r(r){if(r>=Dt)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+Dt.toString(16)+" bytes");return r|0}a(_r,"checked");function Ha(r){return+r!=
r&&(r=0),d.alloc(+r)}a(Ha,"SlowBuffer");d.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
d.prototype},"isBuffer");d.compare=a(function(e,t){if(Se(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),
Se(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError(
'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,
i=t.length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?
1:0},"compare");d.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"\
utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"\
utf-16le":return!0;default:return!1}},"isEncoding");d.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError(
'"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;if(t===void 0)
for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];
if(Se(o,Uint8Array))s+o.length>i.length?(d.isBuffer(o)||(o=d.from(o)),o.copy(i,s)):Uint8Array.prototype.
set.call(i,o,s);else if(d.isBuffer(o))o.copy(i,s);else throw new TypeError('"list" argument must be \
an Array of Buffers');s+=o.length}return i},"concat");function Ni(r,e){if(d.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||Se(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Er(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ki(r).length;default:
if(i)return n?-1:Er(r).length;e=(""+e).toLowerCase(),i=!0}}a(Ni,"byteLength");d.byteLength=Ni;function $a(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return tu(this,e,t);case"u\
tf8":case"utf-8":return Qi(this,e,t);case"ascii":return Xa(this,e,t);case"latin1":case"binary":return eu(
this,e,t);case"base64":return Ja(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ru(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a($a,
"slowToString");d.prototype._isBuffer=!0;function je(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(je,"swap");
d.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)je(this,t,t+1);return this},"swap16");d.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)je(this,t,t+3),je(this,t+1,t+2);return this},"swap32");d.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)je(this,t,t+7),je(this,t+1,t+6),je(this,t+2,t+5),je(this,t+3,t+4);return this},
"swap64");d.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Qi(
this,0,e):$a.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.toString;d.prototype.
equals=a(function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:d.compare(this,e)===0},"equals");d.prototype.inspect=a(function(){let e="",t=ze.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");Fi&&(d.prototype[Fi]=d.prototype.inspect);d.prototype.compare=a(function(e,t,n,i,s){
if(Se(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,l=Math.min(o,u),c=this.slice(
i,s),f=e.slice(t,n);for(let y=0;y<l;++y)if(c[y]!==f[y]){o=c[y],u=f[y];break}return o<u?-1:u<o?1:0},"\
compare");function qi(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ir(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=d.from(
e,n)),d.isBuffer(e))return e.length===0?-1:Mi(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):Mi(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(qi,"bidire\
ctionalIndexOf");function Mi(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function l(f,y){return s===1?f[y]:f.readUInt16BE(y*s)}a(l,"read");let c;if(i){let f=-1;for(c=
t;c<o;c++)if(l(r,c)===l(e,f===-1?0:c-f)){if(f===-1&&(f=c),c-f+1===u)return f*s}else f!==-1&&(c-=c-f),
f=-1}else for(t+u>o&&(t=o-u),c=t;c>=0;c--){let f=!0;for(let y=0;y<u;y++)if(l(r,c+y)!==l(e,y)){f=!1;break}
if(f)return c}return-1}a(Mi,"arrayIndexOf");d.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");d.prototype.indexOf=a(function(e,t,n){return qi(this,e,t,n,!0)},"indexOf");
d.prototype.lastIndexOf=a(function(e,t,n){return qi(this,e,t,n,!1)},"lastIndexOf");function Ga(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Ir(u))return o;r[t+o]=u}return o}a(Ga,"hexWrite");function Va(r,e,t,n){
return Ot(Er(e,r.length-t),r,t,n)}a(Va,"utf8Write");function Ka(r,e,t,n){return Ot(ou(e),r,t,n)}a(Ka,
"asciiWrite");function za(r,e,t,n){return Ot(Ki(e),r,t,n)}a(za,"base64Write");function Ya(r,e,t,n){return Ot(
au(e,r.length-t),r,t,n)}a(Ya,"ucs2Write");d.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Ga(this,e,t,n);case"utf8":case"\
utf-8":return Va(this,e,t,n);case"ascii":case"latin1":case"binary":return Ka(this,e,t,n);case"base64":
return za(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ya(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");d.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function Ja(r,e,t){return e===0&&t===r.length?xr.fromByteArray(r):xr.fromByteArray(r.slice(e,t))}
a(Ja,"base64Slice");function Qi(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let l,c,f,y;switch(u){case 1:s<128&&(o=s);break;case 2:l=r[i+
1],(l&192)===128&&(y=(s&31)<<6|l&63,y>127&&(o=y));break;case 3:l=r[i+1],c=r[i+2],(l&192)===128&&(c&192)===
128&&(y=(s&15)<<12|(l&63)<<6|c&63,y>2047&&(y<55296||y>57343)&&(o=y));break;case 4:l=r[i+1],c=r[i+2],
f=r[i+3],(l&192)===128&&(c&192)===128&&(f&192)===128&&(y=(s&15)<<18|(l&63)<<12|(c&63)<<6|f&63,y>65535&&
y<1114112&&(o=y))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return Za(n)}a(Qi,"utf8Slice");var ki=4096;function Za(r){let e=r.length;if(e<=ki)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
ki));return t}a(Za,"decodeCodePointsArray");function Xa(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Xa,"asciiSlice");function eu(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(eu,"latin1Slice");function tu(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=uu[r[s]];return i}
a(tu,"hexSlice");function ru(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a(ru,"utf16leSlice");d.prototype.slice=a(function(e,t){let n=this.
length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<
e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function G(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to \
access beyond buffer length")}a(G,"checkOffset");d.prototype.readUintLE=d.prototype.readUIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||G(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},
"readUIntLE");d.prototype.readUintBE=d.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||G(e,
t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"readUIntBE");d.
prototype.readUint8=d.prototype.readUInt8=a(function(e,t){return e=e>>>0,t||G(e,1,this.length),this[e]},
"readUInt8");d.prototype.readUint16LE=d.prototype.readUInt16LE=a(function(e,t){return e=e>>>0,t||G(e,
2,this.length),this[e]|this[e+1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=
a(function(e,t){return e=e>>>0,t||G(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");d.prototype.
readUint32LE=d.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||G(e,4,this.length),(this[e]|
this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");d.prototype.readUint32BE=d.prototype.
readUInt32BE=a(function(e,t){return e=e>>>0,t||G(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+
2]<<8|this[e+3])},"readUInt32BE");d.prototype.readBigUInt64LE=Pe(a(function(e){e=e>>>0,Ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&dt(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));d.prototype.readBigUInt64BE=Pe(a(function(e){e=e>>>0,Ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&dt(e,this.length-8);let i=t*2**24+this[++e]*2**16+
this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(
32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||G(e,t,
this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.
pow(2,8*t)),i},"readIntLE");d.prototype.readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||G(e,t,this.length);
let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*
t)),o},"readIntBE");d.prototype.readInt8=a(function(e,t){return e=e>>>0,t||G(e,1,this.length),this[e]&
128?(255-this[e]+1)*-1:this[e]},"readInt8");d.prototype.readInt16LE=a(function(e,t){e=e>>>0,t||G(e,2,
this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=
a(function(e,t){e=e>>>0,t||G(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:
n},"readInt16BE");d.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||G(e,4,this.length),this[e]|
this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");d.prototype.readInt32BE=a(function(e,t){return e=
e>>>0,t||G(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.
readBigInt64LE=Pe(a(function(e){e=e>>>0,Ke(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
dt(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));d.prototype.readBigInt64BE=
Pe(a(function(e){e=e>>>0,Ke(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&dt(e,this.
length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));d.prototype.readFloatLE=a(function(e,t){
return e=e>>>0,t||G(e,4,this.length),Ve.read(this,e,!0,23,4)},"readFloatLE");d.prototype.readFloatBE=
a(function(e,t){return e=e>>>0,t||G(e,4,this.length),Ve.read(this,e,!1,23,4)},"readFloatBE");d.prototype.
readDoubleLE=a(function(e,t){return e=e>>>0,t||G(e,8,this.length),Ve.read(this,e,!0,52,8)},"readDoub\
leLE");d.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||G(e,8,this.length),Ve.read(this,e,
!1,52,8)},"readDoubleBE");function re(r,e,t,n,i,s){if(!d.isBuffer(r))throw new TypeError('"buffer" a\
rgument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bou\
nds');if(t+n>r.length)throw new RangeError("Index out of range")}a(re,"checkInt");d.prototype.writeUintLE=
d.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;re(this,
e,t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");
d.prototype.writeUintBE=d.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;re(this,e,t,n,u,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;
return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||re(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");d.prototype.writeUint16LE=d.prototype.
writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||re(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=
e>>>8,t+2},"writeUInt16LE");d.prototype.writeUint16BE=d.prototype.writeUInt16BE=a(function(e,t,n){return e=
+e,t=t>>>0,n||re(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");d.prototype.
writeUint32LE=d.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||re(this,e,t,4,4294967295,
0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");d.prototype.
writeUint32BE=d.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||re(this,e,t,4,4294967295,
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ji(r,e,t,n,i){
Vi(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a(ji,"wrtBigUInt64LE");function Wi(r,e,t,n,i){Vi(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Wi,"wrtBigUInt64BE");d.prototype.
writeBigUInt64LE=Pe(a(function(e,t=0){return ji(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));d.prototype.writeBigUInt64BE=Pe(a(function(e,t=0){return Wi(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64BE"));d.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let l=Math.pow(2,8*n-1);re(this,e,t,n,l-1,-l)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntLE");d.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let l=Math.pow(2,8*n-1);re(this,e,t,n,l-1,-l)}let s=n-1,o=1,
u=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;
return t+n},"writeIntBE");d.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||re(this,e,t,
1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");d.prototype.writeInt16LE=a(function(e,t,n){
return e=+e,t=t>>>0,n||re(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");
d.prototype.writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||re(this,e,t,2,32767,-32768),this[t]=
e>>>8,this[t+1]=e&255,t+2},"writeInt16BE");d.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=
t>>>0,n||re(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+
3]=e>>>24,t+4},"writeInt32LE");d.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||re(
this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=
e>>>8,this[t+3]=e&255,t+4},"writeInt32BE");d.prototype.writeBigInt64LE=Pe(a(function(e,t=0){return ji(
this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.
writeBigInt64BE=Pe(a(function(e,t=0){return Wi(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fff\
ffffffffffff"))},"writeBigInt64BE"));function Hi(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("\
Index out of range");if(t<0)throw new RangeError("Index out of range")}a(Hi,"checkIEEE754");function $i(r,e,t,n,i){
return e=+e,t=t>>>0,i||Hi(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ve.write(r,e,t,n,23,4),
t+4}a($i,"writeFloat");d.prototype.writeFloatLE=a(function(e,t,n){return $i(this,e,t,!0,n)},"writeFl\
oatLE");d.prototype.writeFloatBE=a(function(e,t,n){return $i(this,e,t,!1,n)},"writeFloatBE");function Gi(r,e,t,n,i){
return e=+e,t=t>>>0,i||Hi(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ve.write(r,e,t,n,52,
8),t+8}a(Gi,"writeDouble");d.prototype.writeDoubleLE=a(function(e,t,n){return Gi(this,e,t,!0,n)},"wr\
iteDoubleLE");d.prototype.writeDoubleBE=a(function(e,t,n){return Gi(this,e,t,!1,n)},"writeDoubleBE");
d.prototype.copy=a(function(e,t,n,i){if(!d.isBuffer(e))throw new TypeError("argument should be a Buf\
fer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<
0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd \
out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===
e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");d.prototype.fill=a(function(e,t,n,i){if(typeof e=="string"){
if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!=
"string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!d.isEncoding(i))throw new TypeError(
"Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=
o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<
n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>
0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)this[s]=e;else{let o=d.isBuffer(e)?e:d.from(e,
i),u=o.length;if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Ge={};function Cr(r,e,t){var n;Ge[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(Cr,"E");Cr("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Cr(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);Cr("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Ui(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Ui(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function Ui(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(Ui,"addNumericalSeparator");function nu(r,e,t){
Ke(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&dt(e,r.length-(t+1))}a(nu,"checkBounds");function Vi(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Ge.ERR_OUT_OF_RANGE("value",u,r)}nu(n,i,s)}a(Vi,"checkIntBI");function Ke(r,e){if(typeof r!=
"number")throw new Ge.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Ke,"validateNumber");function dt(r,e,t){throw Math.
floor(r)!==r?(Ke(r,t),new Ge.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ge.ERR_BUFFER_OUT_OF_BOUNDS:
new Ge.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(dt,"boundsError");var iu=/[^+/0-9A-Za-z-_]/g;
function su(r){if(r=r.split("=")[0],r=r.trim().replace(iu,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(su,"base64clean");function Er(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(Er,"utf\
8ToBytes");function ou(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
ou,"asciiToBytes");function au(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(au,"utf16leToBytes");function Ki(r){return xr.toByteArray(
su(r))}a(Ki,"base64ToBytes");function Ot(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(Ot,"blitBuffer");function Se(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(Se,"isInstance");function Ir(r){return r!==
r}a(Ir,"numberIsNaN");var uu=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function Pe(r){return typeof BigInt>"u"?
lu:r}a(Pe,"defineBigIntMethod");function lu(){throw new Error("BigInt not supported")}a(lu,"BufferBi\
gIntNotDefined")});var S,v,A,m,w,p=te(()=>{"use strict";S=globalThis,v=globalThis.setImmediate??(r=>setTimeout(r,0)),A=
globalThis.clearImmediate??(r=>clearTimeout(r)),m=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:zi().Buffer,w=globalThis.process??{};w.env??(w.env=
{});try{w.nextTick(()=>{})}catch{let e=Promise.resolve();w.nextTick=e.then.bind(e)}});var Be=P((rh,Tr)=>{"use strict";p();var Ye=typeof Reflect=="object"?Reflect:null,Yi=Ye&&typeof Ye.apply==
"function"?Ye.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),Nt;
Ye&&typeof Ye.ownKeys=="function"?Nt=Ye.ownKeys:Object.getOwnPropertySymbols?Nt=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Nt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function cu(r){console&&console.warn&&console.warn(r)}a(cu,
"ProcessEmitWarning");var Zi=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function k(){k.
init.call(this)}a(k,"EventEmitter");Tr.exports=k;Tr.exports.once=pu;k.EventEmitter=k;k.prototype._events=
void 0;k.prototype._eventsCount=0;k.prototype._maxListeners=void 0;var Ji=10;function qt(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(qt,"checkListener");Object.defineProperty(k,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return Ji},"get"),set:a(function(r){if(typeof r!="number"||r<0||Zi(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");Ji=r},
"set")});k.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
k.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||Zi(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function Xi(r){return r._maxListeners===void 0?k.defaultMaxListeners:r._maxListeners}
a(Xi,"_getMaxListeners");k.prototype.getMaxListeners=a(function(){return Xi(this)},"getMaxListeners");
k.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Yi(l,this,t);else for(var c=l.
length,f=is(l,c),n=0;n<c;++n)Yi(f[n],this,t);return!0},"emit");function es(r,e,t,n){var i,s,o;if(qt(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=Xi(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,cu(u)}return r}a(es,"_addListener");k.prototype.addListener=a(function(e,t){
return es(this,e,t,!1)},"addListener");k.prototype.on=k.prototype.addListener;k.prototype.prependListener=
a(function(e,t){return es(this,e,t,!0)},"prependListener");function fu(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(fu,"onceWrapper");function ts(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=fu.bind(n);return i.listener=t,n.wrapFn=i,i}a(ts,"_onceW\
rap");k.prototype.once=a(function(e,t){return qt(t),this.on(e,ts(this,e,t)),this},"once");k.prototype.
prependOnceListener=a(function(e,t){return qt(t),this.prependListener(e,ts(this,e,t)),this},"prepend\
OnceListener");k.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(qt(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():hu(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");k.prototype.off=k.prototype.
removeListener;k.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function rs(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
du(i):is(i,i.length)}a(rs,"_listeners");k.prototype.listeners=a(function(e){return rs(this,e,!0)},"l\
isteners");k.prototype.rawListeners=a(function(e){return rs(this,e,!1)},"rawListeners");k.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):ns.call(r,e)};k.prototype.
listenerCount=ns;function ns(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(ns,"listenerCount");k.prototype.eventNames=a(function(){
return this._eventsCount>0?Nt(this._events):[]},"eventNames");function is(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(is,"arrayClone");function hu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(hu,"spliceOne");function du(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(du,"unwrapListeners");function pu(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),ss(r,e,s,{once:!0}),e!=="error"&&
yu(r,i,{once:!0})})}a(pu,"once");function yu(r,e,t){typeof r.on=="function"&&ss(r,"error",e,t)}a(yu,
"addErrorHandlerIfEventEmitter");function ss(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(ss,"eventTargetAgnosticAddListener")});var us={};fe(us,{Socket:()=>be,isIP:()=>mu});function mu(r){return 0}var as,os,_,be,Je=te(()=>{"use \
strict";p();as=qe(Be(),1);a(mu,"isIP");os=/^[^.]+\./,_=class _ extends as.EventEmitter{constructor(){
super(...arguments);I(this,"opts",{});I(this,"connecting",!1);I(this,"pending",!0);I(this,"writable",
!0);I(this,"encrypted",!1);I(this,"authorized",!1);I(this,"destroyed",!1);I(this,"ws",null);I(this,"\
writeBuffer");I(this,"tlsState",0);I(this,"tlsRead");I(this,"tlsWrite")}static get poolQueryViaFetch(){
return _.opts.poolQueryViaFetch??_.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){_.opts.
poolQueryViaFetch=t}static get fetchEndpoint(){return _.opts.fetchEndpoint??_.defaults.fetchEndpoint}static set fetchEndpoint(t){
_.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)")}static get fetchFunction(){
return _.opts.fetchFunction??_.defaults.fetchFunction}static set fetchFunction(t){_.opts.fetchFunction=
t}static get webSocketConstructor(){return _.opts.webSocketConstructor??_.defaults.webSocketConstructor}static set webSocketConstructor(t){
_.opts.webSocketConstructor=t}get webSocketConstructor(){return this.opts.webSocketConstructor??_.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return _.opts.wsProxy??_.defaults.wsProxy}static set wsProxy(t){
_.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??_.wsProxy}set wsProxy(t){this.opts.wsProxy=
t}static get coalesceWrites(){return _.opts.coalesceWrites??_.defaults.coalesceWrites}static set coalesceWrites(t){
_.opts.coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??_.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return _.opts.useSecureWebSocket??_.defaults.
useSecureWebSocket}static set useSecureWebSocket(t){_.opts.useSecureWebSocket=t}get useSecureWebSocket(){
return this.opts.useSecureWebSocket??_.useSecureWebSocket}set useSecureWebSocket(t){this.opts.useSecureWebSocket=
t}static get forceDisablePgSSL(){return _.opts.forceDisablePgSSL??_.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){
_.opts.forceDisablePgSSL=t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??_.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return _.opts.disableSNI??_.defaults.disableSNI}static set disableSNI(t){
_.opts.disableSNI=t}get disableSNI(){return this.opts.disableSNI??_.disableSNI}set disableSNI(t){this.
opts.disableSNI=t}static get disableWarningInBrowsers(){return _.opts.disableWarningInBrowsers??_.defaults.
disableWarningInBrowsers}static set disableWarningInBrowsers(t){_.opts.disableWarningInBrowsers=t}get disableWarningInBrowsers(){
return this.opts.disableWarningInBrowsers??_.disableWarningInBrowsers}set disableWarningInBrowsers(t){
this.opts.disableWarningInBrowsers=t}static get pipelineConnect(){return _.opts.pipelineConnect??_.defaults.
pipelineConnect}static set pipelineConnect(t){_.opts.pipelineConnect=t}get pipelineConnect(){return this.
opts.pipelineConnect??_.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return _.opts.subtls??_.defaults.subtls}static set subtls(t){_.opts.subtls=t}get subtls(){return this.
opts.subtls??_.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){return _.opts.pipelineTLS??
_.defaults.pipelineTLS}static set pipelineTLS(t){_.opts.pipelineTLS=t}get pipelineTLS(){return this.
opts.pipelineTLS??_.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){return _.
opts.rootCerts??_.defaults.rootCerts}static set rootCerts(t){_.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??_.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){let i=this.
wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https://github.c\
om/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--stri\
ng");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("co\
nnect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),this.emit("ready")},"\
handleWebSocketOpen"),o=a((l,c=!1)=>{l.binaryType="arraybuffer",l.addEventListener("error",f=>{this.
emit("error",f),this.emit("close")}),l.addEventListener("message",f=>{if(this.tlsState===0){let y=m.
from(f.data);this.emit("data",y)}}),l.addEventListener("close",()=>{this.emit("close")}),c?s():l.addEventListener(
"open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="string"?parseInt(t,10):
t)}catch(l){this.emit("error",l),this.emit("close");return}try{let c=(this.useSecureWebSocket?"wss:":
"ws:")+"//"+u;if(this.webSocketConstructor!==void 0)this.ws=new this.webSocketConstructor(c),o(this.
ws);else try{this.ws=new WebSocket(c),o(this.ws)}catch{this.ws=new __unstable_WebSocket(c),o(this.ws)}}catch(l){
let f=(this.useSecureWebSocket?"https:":"http:")+"//"+u;fetch(f,{headers:{Upgrade:"websocket"}}).then(
y=>{if(this.ws=y.webSocket,this.ws==null)throw l;this.ws.accept(),o(this.ws,!0)}).catch(y=>{this.emit(
"error",new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer \
to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websoc\
ket--undefined. Details: ${y}`)),this.emit("close")})}}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://g\
ithub.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");this.tlsState=1;let n=await this.
subtls.TrustedCert.databaseFromPEM(this.rootCerts),i=new this.subtls.WebSocketReadQueue(this.ws),s=i.
read.bind(i),o=this.rawWrite.bind(this),{read:u,write:l}=await this.subtls.startTls(t,n,s,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=
l,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=m.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws&&this.ws.send(t);return}if(this.writeBuffer===void 0)this.writeBuffer=
t,setTimeout(()=>{this.ws&&this.ws.send(this.writeBuffer),this.writeBuffer=void 0},0);else{let n=new Uint8Array(
this.writeBuffer.length+t.length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?(i(),!0):(typeof t=="string"&&(t=m.from(t,n)),this.
tlsState===0?(this.rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(t,
n,i)}):(this.tlsWrite(t),i()),!0)}end(t=m.alloc(0),n="utf8",i=()=>{}){return this.write(t,n,()=>{this.
ws.close(),i()}),this}destroy(){return this.destroyed=!0,this.end()}};a(_,"Socket"),I(_,"defaults",{
poolQueryViaFetch:!1,fetchEndpoint:a((t,n,i)=>{let s;return i?.jwtAuth?s=t.replace(os,"apiauth."):s=
t.replace(os,"api."),"https://"+s+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,
webSocketConstructor:void 0,wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,
coalesceWrites:!0,pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1,
disableWarningInBrowsers:!1}),I(_,"opts",{});be=_});var ls={};fe(ls,{parse:()=>Rr});function Rr(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:l,pathname:c,search:f,searchParams:y,hash:g}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),c=decodeURIComponent(c);let E=i+":"+s,C=e?Object.
fromEntries(y.entries()):f;return{href:r,protocol:t,auth:E,username:i,password:s,host:o,hostname:u,port:l,
pathname:c,search:f,query:C,hash:g}}var Pr=te(()=>{"use strict";p();a(Rr,"parse")});var Gr=P(Ts=>{"use strict";p();Ts.parse=function(r,e){return new $r(r,e).parse()};var zt=class zt{constructor(e,t){
this.source=e,this.transform=t||ju,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
return this.position>=this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){this.recorded.push(
e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),
t!==null&&(t=this.transform(t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.
consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.
dimension>1&&(n=new zt(this.source.substr(this.position-1),this.transform),this.entries.push(n.parse(
!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(!0),i=!i):t.value===
","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==0)throw new Error("array dimension \
not balanced");return this.entries}};a(zt,"ArrayParser");var $r=zt;function ju(r){return r}a(ju,"ide\
ntity")});var Vr=P((Ih,Rs)=>{p();var Wu=Gr();Rs.exports={create:a(function(r,e){return{parse:a(function(){return Wu.
parse(r,e)},"parse")}},"create")}});var Ls=P((Ph,Bs)=>{"use strict";p();var Hu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
$u=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Gu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Vu=/^-?infinity$/;Bs.
exports=a(function(e){if(Vu.test(e))return Number(e.replace("i","I"));var t=Hu.exec(e);if(!t)return Ku(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Ps(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),l=parseInt(t[5],10),c=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var y,g=zu(e);return g!=null?
(y=new Date(Date.UTC(i,s,o,u,l,c,f)),Kr(i)&&y.setUTCFullYear(i),g!==0&&y.setTime(y.getTime()-g)):(y=
new Date(i,s,o,u,l,c,f),Kr(i)&&y.setFullYear(i)),y},"parseDate");function Ku(r){var e=$u.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Ps(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return Kr(
t)&&o.setFullYear(t),o}}a(Ku,"getDate");function zu(r){if(r.endsWith("+00"))return 0;var e=Gu.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(zu,"timeZoneOffset");function Ps(r){return-(r-
1)}a(Ps,"bcYearToNegativeYear");function Kr(r){return r>=0&&r<100}a(Kr,"is0To99")});var Ms=P((Fh,Fs)=>{p();Fs.exports=Ju;var Yu=Object.prototype.hasOwnProperty;function Ju(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)Yu.call(t,n)&&(r[n]=t[n])}return r}a(Ju,"ext\
end")});var Ds=P((Uh,Us)=>{"use strict";p();var Zu=Ms();Us.exports=it;function it(r){if(!(this instanceof it))
return new it(r);Zu(this,cl(r))}a(it,"PostgresInterval");var Xu=["seconds","minutes","hours","days",
"months","years"];it.prototype.toPostgres=function(){var r=Xu.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var el={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},tl=["years","months","days"],rl=["hours","minutes","seconds"];it.prototype.toISOString=it.prototype.
toISO=function(){var r=tl.map(t,this).join(""),e=rl.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+el[n]}};var zr="([+-]?\\d+)",nl=zr+"\\s+years?",il=zr+"\\s+mons?",sl=zr+"\\s+days?",ol="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",al=new RegExp([nl,il,sl,ol].map(function(r){return"\
("+r+")?"}).join("\\s*")),ks={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
ul=["hours","minutes","seconds","milliseconds"];function ll(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(ll,"parseMilliseconds");function cl(r){if(!r)return{};var e=al.exec(r),t=e[8]==="-";return Object.
keys(ks).reduce(function(n,i){var s=ks[i],o=e[s];return!o||(o=i==="milliseconds"?ll(o):parseInt(o,10),
!o)||(t&&~ul.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a(cl,"parse")});var Ns=P((Nh,Os)=>{"use strict";p();Os.exports=a(function(e){if(/^\\x/.test(e))return new m(e.substr(
2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.substr(n+
1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&e[n+i]===
"\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return new m(t,"binary")},"\
parseBytea")});var Gs=P((jh,$s)=>{p();var St=Gr(),vt=Vr(),Yt=Ls(),Qs=Ds(),js=Ns();function Jt(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(Jt,"allowNull");function Ws(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Ws,"parseBool");function fl(r){return r?
St.parse(r,Ws):null}a(fl,"parseBoolArray");function hl(r){return parseInt(r,10)}a(hl,"parseBaseTenIn\
t");function Yr(r){return r?St.parse(r,Jt(hl)):null}a(Yr,"parseIntegerArray");function dl(r){return r?
St.parse(r,Jt(function(e){return Hs(e).trim()})):null}a(dl,"parseBigIntegerArray");var pl=a(function(r){
if(!r)return null;var e=vt.create(r,function(t){return t!==null&&(t=en(t)),t});return e.parse()},"pa\
rsePointArray"),Jr=a(function(r){if(!r)return null;var e=vt.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),ye=a(function(r){if(!r)return null;var e=vt.
create(r);return e.parse()},"parseStringArray"),Zr=a(function(r){if(!r)return null;var e=vt.create(r,
function(t){return t!==null&&(t=Yt(t)),t});return e.parse()},"parseDateArray"),yl=a(function(r){if(!r)
return null;var e=vt.create(r,function(t){return t!==null&&(t=Qs(t)),t});return e.parse()},"parseInt\
ervalArray"),ml=a(function(r){return r?St.parse(r,Jt(js)):null},"parseByteAArray"),Xr=a(function(r){
return parseInt(r,10)},"parseInteger"),Hs=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),qs=a(function(r){return r?St.parse(r,Jt(JSON.parse)):null},"parseJsonArray"),en=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),wl=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=en(e);return s.radius=parseFloat(t),s},"parseCircle"),gl=a(function(r){r(20,Hs),r(21,Xr),
r(23,Xr),r(26,Xr),r(700,parseFloat),r(701,parseFloat),r(16,Ws),r(1082,Yt),r(1114,Yt),r(1184,Yt),r(600,
en),r(651,ye),r(718,wl),r(1e3,fl),r(1001,ml),r(1005,Yr),r(1007,Yr),r(1028,Yr),r(1016,dl),r(1017,pl),
r(1021,Jr),r(1022,Jr),r(1231,Jr),r(1014,ye),r(1015,ye),r(1008,ye),r(1009,ye),r(1040,ye),r(1041,ye),r(
1115,Zr),r(1182,Zr),r(1185,Zr),r(1186,Qs),r(1187,yl),r(17,js),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,qs),r(3807,qs),r(3907,ye),r(2951,ye),r(791,ye),r(1183,ye),r(1270,ye)},"init");
$s.exports={init:gl}});var Ks=P(($h,Vs)=>{"use strict";p();var ie=1e6;function bl(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,l,c,f;{if(s=e%ie,e=e/ie>>>0,o=4294967296*
s+t,t=o/ie>>>0,u=""+(o-ie*t),t===0&&e===0)return n+u+i;for(l="",c=6-u.length,f=0;f<c;f++)l+="0";i=l+
u+i}{if(s=e%ie,e=e/ie>>>0,o=4294967296*s+t,t=o/ie>>>0,u=""+(o-ie*t),t===0&&e===0)return n+u+i;for(l=
"",c=6-u.length,f=0;f<c;f++)l+="0";i=l+u+i}{if(s=e%ie,e=e/ie>>>0,o=4294967296*s+t,t=o/ie>>>0,u=""+(o-
ie*t),t===0&&e===0)return n+u+i;for(l="",c=6-u.length,f=0;f<c;f++)l+="0";i=l+u+i}return s=e%ie,o=4294967296*
s+t,u=""+o%ie,n+u+i}a(bl,"readInt8");Vs.exports=bl});var Xs=P((Kh,Zs)=>{p();var xl=Ks(),U=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(E,C,H){return E*
Math.pow(2,H)+C};var s=t>>3,o=a(function(E){return n?~E&255:E},"inv"),u=255,l=8-t%8;e<l&&(u=255<<8-e&
255,l=e),t&&(u=u>>t%8);var c=0;t%8+e>=8&&(c=i(0,o(r[s])&u,l));for(var f=e+t>>3,y=s+1;y<f;y++)c=i(c,o(
r[y]),8);var g=(e+t)%8;return g>0&&(c=i(c,o(r[f])>>8-g,g)),c},"parseBits"),Js=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=U(r,1),s=U(r,t,1);if(s===0)return 0;var o=1,u=a(function(c,f,y){c===0&&(c=1);for(var g=1;g<=
y;g++)o/=2,(f&1<<y-g)>0&&(c+=o);return c},"parsePrecisionBits"),l=U(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?l===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*l},"parseFloatFromBits"),Sl=a(function(r){
return U(r,1)==1?-1*(U(r,15,1,!0)+1):U(r,15,1)},"parseInt16"),zs=a(function(r){return U(r,1)==1?-1*(U(
r,31,1,!0)+1):U(r,31,1)},"parseInt32"),vl=a(function(r){return Js(r,23,8)},"parseFloat32"),El=a(function(r){
return Js(r,52,11)},"parseFloat64"),Al=a(function(r){var e=U(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,U(r,16,16)),n=0,i=[],s=U(r,16),o=0;o<s;o++)n+=U(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,U(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Ys=a(function(r,e){var t=U(e,1),n=U(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Et=a(function(r){for(var e=U(
r,32),t=U(r,32,32),n=U(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=U(r,32,i),i+=32,i+=32;var u=a(function(c){
var f=U(r,32,i);if(i+=32,f==4294967295)return null;var y;if(c==23||c==20)return y=U(r,f*8,i),i+=f*8,
y;if(c==25)return y=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),y;console.log("ERROR: ElementType no\
t implemented: "+c)},"parseElement"),l=a(function(c,f){var y=[],g;if(c.length>1){var E=c.shift();for(g=
0;g<E;g++)y[g]=l(c,f);c.unshift(E)}else for(g=0;g<c[0];g++)y[g]=u(f);return y},"parse");return l(s,n)},
"parseArray"),_l=a(function(r){return r.toString("utf8")},"parseText"),Cl=a(function(r){return r===null?
null:U(r,8)>0},"parseBool"),Il=a(function(r){r(20,xl),r(21,Sl),r(23,zs),r(26,zs),r(1700,Al),r(700,vl),
r(701,El),r(16,Cl),r(1114,Ys.bind(null,!1)),r(1184,Ys.bind(null,!0)),r(1e3,Et),r(1007,Et),r(1016,Et),
r(1008,Et),r(1009,Et),r(25,_l)},"init");Zs.exports={init:Il}});var to=P((Jh,eo)=>{p();eo.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var Ct=P(_t=>{p();var Tl=Gs(),Rl=Xs(),Pl=Vr(),Bl=to();_t.getTypeParser=Ll;_t.setTypeParser=Fl;_t.arrayParser=
Pl;_t.builtins=Bl;var At={text:{},binary:{}};function ro(r){return String(r)}a(ro,"noParse");function Ll(r,e){
return e=e||"text",At[e]&&At[e][r]||ro}a(Ll,"getTypeParser");function Fl(r,e,t){typeof e=="function"&&
(t=e,e="text"),At[e][r]=t}a(Fl,"setTypeParser");Tl.init(function(r,e){At.text[r]=e});Rl.init(function(r,e){
At.binary[r]=e})});var Xt=P((rd,no)=>{"use strict";p();var Ml=Ct();function Zt(r){this._types=r||Ml,this.text={},this.binary=
{}}a(Zt,"TypeOverrides");Zt.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};Zt.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};Zt.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};no.exports=Zt});function It(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
l=1541459225,c=0,f=0,y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a((T,b)=>T>>>b|T<<32-
b,"rrot"),E=new Uint32Array(64),C=new Uint8Array(64),H=a(()=>{for(let F=0,J=0;F<16;F++,J+=4)E[F]=C[J]<<
24|C[J+1]<<16|C[J+2]<<8|C[J+3];for(let F=16;F<64;F++){let J=g(E[F-15],7)^g(E[F-15],18)^E[F-15]>>>3,Ee=g(
E[F-2],17)^g(E[F-2],19)^E[F-2]>>>10;E[F]=E[F-16]+J+E[F-7]+Ee|0}let T=e,b=t,M=n,oe=i,$=s,ge=o,Ie=u,le=l;
for(let F=0;F<64;F++){let J=g($,6)^g($,11)^g($,25),Ee=$&ge^~$&Ie,Te=le+J+Ee+y[F]+E[F]|0,Ue=g(T,2)^g(
T,13)^g(T,22),De=T&b^T&M^b&M,Oe=Ue+De|0;le=Ie,Ie=ge,ge=$,$=oe+Te|0,oe=M,M=b,b=T,T=Te+Oe|0}e=e+T|0,t=
t+b|0,n=n+M|0,i=i+oe|0,s=s+$|0,o=o+ge|0,u=u+Ie|0,l=l+le|0,f=0},"process"),Y=a(T=>{typeof T=="string"&&
(T=new TextEncoder().encode(T));for(let b=0;b<T.length;b++)C[f++]=T[b],f===64&&H();c+=T.length},"add"),
we=a(()=>{if(C[f++]=128,f==64&&H(),f+8>64){for(;f<64;)C[f++]=0;H()}for(;f<58;)C[f++]=0;let T=c*8;C[f++]=
T/1099511627776&255,C[f++]=T/4294967296&255,C[f++]=T>>>24,C[f++]=T>>>16&255,C[f++]=T>>>8&255,C[f++]=
T&255,H();let b=new Uint8Array(32);return b[0]=e>>>24,b[1]=e>>>16&255,b[2]=e>>>8&255,b[3]=e&255,b[4]=
t>>>24,b[5]=t>>>16&255,b[6]=t>>>8&255,b[7]=t&255,b[8]=n>>>24,b[9]=n>>>16&255,b[10]=n>>>8&255,b[11]=n&
255,b[12]=i>>>24,b[13]=i>>>16&255,b[14]=i>>>8&255,b[15]=i&255,b[16]=s>>>24,b[17]=s>>>16&255,b[18]=s>>>
8&255,b[19]=s&255,b[20]=o>>>24,b[21]=o>>>16&255,b[22]=o>>>8&255,b[23]=o&255,b[24]=u>>>24,b[25]=u>>>16&
255,b[26]=u>>>8&255,b[27]=u&255,b[28]=l>>>24,b[29]=l>>>16&255,b[30]=l>>>8&255,b[31]=l&255,b},"digest");
return r===void 0?{add:Y,digest:we}:(Y(r),we())}var io=te(()=>{"use strict";p();a(It,"sha256")});var Q,Tt,so=te(()=>{"use strict";p();Q=class Q{constructor(){I(this,"_dataLength",0);I(this,"_buffer\
Length",0);I(this,"_state",new Int32Array(4));I(this,"_buffer",new ArrayBuffer(68));I(this,"_buffer8");
I(this,"_buffer32");this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this.
_buffer,0,17),this.start()}static hashByteArray(e,t=!1){return this.onePassHasher.start().appendByteArray(
e).end(t)}static hashStr(e,t=!1){return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=Q.hexChars,n=Q.hexOut,
i,s,o,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],o=0;o<8;o+=2)n[s+1+o]=t.charAt(i&15),i>>>=4,n[s+0+o]=t.charAt(
i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){let n=e[0],i=e[1],s=e[2],o=e[3];n+=(i&s|~i&o)+t[0]-
680876936|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[2]+
606105819|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&o)+
t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[5]+1200080426|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&
i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|
~i&o)+t[8]+1770035416|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,s+=
(o&n|~o&i)+t[10]-42063|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|0,
n+=(i&s|~i&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[13]-40341101|0,o=(o<<12|o>>>20)+
n|0,s+=(o&n|~o&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[15]+1236535329|0,i=(i<<22|
i>>>10)+s|0,n+=(i&o|s&~o)+t[1]-165796510|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[6]-1069501632|0,o=(o<<
9|o>>>23)+n|0,s+=(o&i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[10]+38016083|0,
o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[15]-660478335|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[4]-405537848|
0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[9]+568446438|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[14]-1019803690|
0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[2]-51403784|
0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[7]+1735328473|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[12]-1926607734|
0,i=(i<<20|i>>>12)+s|0,n+=(i^s^o)+t[5]-378558|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[8]-2022574463|0,o=(o<<
11|o>>>21)+n|0,s+=(o^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[14]-35309556|0,i=(i<<
23|i>>>9)+s|0,n+=(i^s^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[4]+1272893353|0,o=(o<<11|
o>>>21)+n|0,s+=(o^n^i)+t[7]-155497632|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[10]-1094730640|0,i=(i<<23|
i>>>9)+s|0,n+=(i^s^o)+t[13]+681279174|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[0]-358537222|0,o=(o<<11|o>>>
21)+n|0,s+=(o^n^i)+t[3]-722521979|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[12]-421815835|0,o=(o<<11|o>>>21)+n|
0,s+=(o^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,
n+=(s^(i|~o))+t[0]-198630844|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[7]+1126891415|0,o=(o<<10|o>>>22)+
n|0,s+=(n^(o|~i))+t[14]-1416354905|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>
11)+s|0,n+=(s^(i|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[3]-1894986606|0,o=(o<<10|
o>>>22)+n|0,s+=(n^(o|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[1]-2054922799|0,i=(i<<
21|i>>>11)+s|0,n+=(s^(i|~o))+t[8]+1873313359|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[15]-30611744|0,o=
(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[6]-1560198380|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[13]+1309151649|
0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[11]-1120210379|
0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[9]-343485551|
0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|0,e[2]=s+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=
0,this._bufferLength=0,this._state.set(Q.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),s<128)t[i++]=s;else if(s<
2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|
128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error(
"Unicode standard supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=
s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,Q._md5cycle(this._state,n),i-=64,n[0]=n[16])}
return this._bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,
s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=
64,Q._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this._buffer8,
n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e[o++];
if(i<64)break;this._dataLength+=64,Q._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}getState(){
let e=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this.
_bufferLength,length:this._dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,
i=this._state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],
i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,n=this.
_buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=
n[t+2]=n[t+3]=0,i.set(Q.buffer32Identity.subarray(s),s),t>55&&(Q._md5cycle(this._state,i),i.set(Q.buffer32Identity)),
o<=4294967295)i[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let l=parseInt(
u[2],16),c=parseInt(u[1],16)||0;i[14]=l,i[15]=c}return Q._md5cycle(this._state,i),e?this._state:Q._hex(
this._state)}};a(Q,"Md5"),I(Q,"stateIdentity",new Int32Array([1732584193,-271733879,-1732584194,271733878])),
I(Q,"buffer32Identity",new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),I(Q,"hexChars","0123456789\
abcdef"),I(Q,"hexOut",[]),I(Q,"onePassHasher",new Q);Tt=Q});var tn={};fe(tn,{createHash:()=>Ul,createHmac:()=>Dl,randomBytes:()=>kl});function kl(r){return crypto.
getRandomValues(m.alloc(r))}function Ul(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return m.from(It(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?Tt.hashStr(e):Tt.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function Dl(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=It(e);else if(n<64){let l=new Uint8Array(64);l.set(e),e=l}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let l=0;l<64;l++)i[l]=54^e[l],s[l]=92^e[l];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(It(o),64),m.from(It(u))},
"digest")}},"update")}}var rn=te(()=>{"use strict";p();io();so();a(kl,"randomBytes");a(Ul,"createHas\
h");a(Dl,"createHmac")});var Rt=P((yd,nn)=>{"use strict";p();nn.exports={host:"localhost",user:w.platform==="win32"?w.env.USERNAME:
w.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var st=Ct(),Ol=st.getTypeParser(20,"text"),Nl=st.getTypeParser(1016,
"text");nn.exports.__defineSetter__("parseInt8",function(r){st.setTypeParser(20,"text",r?st.getTypeParser(
23,"text"):Ol),st.setTypeParser(1016,"text",r?st.getTypeParser(1007,"text"):Nl)})});var Pt=P((wd,ao)=>{"use strict";p();var ql=(rn(),j(tn)),Ql=Rt();function jl(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(jl,"escapeElement");function oo(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+oo(r[t]):
r[t]instanceof m?e+="\\\\x"+r[t].toString("hex"):e+=jl(er(r[t]));return e=e+"}",e}a(oo,"arrayString");
var er=a(function(r,e){if(r==null)return null;if(r instanceof m)return r;if(ArrayBuffer.isView(r)){var t=m.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?Ql.parseInputDatesAsUTC?$l(r):Hl(r):Array.isArray(r)?oo(r):typeof r==
"object"?Wl(r,e):r.toString()},"prepareValue");function Wl(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),er(r.toPostgres(er),e)}return JSON.stringify(r)}a(Wl,"prepareObject");function z(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(z,"pad");function Hl(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=z(t,4)+"-"+z(r.getMonth()+1,2)+"-"+z(r.getDate(),2)+"T"+z(r.getHours(),
2)+":"+z(r.getMinutes(),2)+":"+z(r.getSeconds(),2)+"."+z(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=z(Math.floor(e/60),2)+":"+z(e%60,2),n&&(i+=" BC"),i}a(Hl,"dateToString");function $l(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=z(e,4)+"-"+z(r.getUTCMonth()+1,2)+"-"+z(r.
getUTCDate(),2)+"T"+z(r.getUTCHours(),2)+":"+z(r.getUTCMinutes(),2)+":"+z(r.getUTCSeconds(),2)+"."+z(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a($l,"dateToStringUTC");function Gl(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(Gl,"normalizeQueryConfig");var sn=a(function(r){return ql.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Vl=a(function(r,e,t){var n=sn(e+r),i=sn(m.concat([m.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");ao.exports={prepareValue:a(function(e){return er(e)},"prepareValueWrapper"),
normalizeQueryConfig:Gl,postgresMd5PasswordHash:Vl,md5:sn}});var Bt={};fe(Bt,{default:()=>rc});var rc,Lt=te(()=>{"use strict";p();rc={}});var bo=P((Bd,go)=>{"use strict";p();var un=(rn(),j(tn));function nc(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=un.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a(nc,"startSession");function ic(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=ac(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=m.from(n.salt,"base64"),s=cc(e,i,n.iteration),o=ot(s,"Client Key"),u=lc(
o),l="n=*,r="+r.clientNonce,c="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,y=l+
","+c+","+f,g=ot(u,y),E=wo(o,g),C=E.toString("base64"),H=ot(s,"Server Key"),Y=ot(H,y);r.message="SAS\
LResponse",r.serverSignature=Y.toString("base64"),r.response=f+",p="+C}a(ic,"continueSession");function sc(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=uc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(sc,"finalizeSession");function oc(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(oc,"isPrintableChars");function yo(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(yo,"isBase64");function mo(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(mo,"parseAttribute\
Pairs");function ac(r){let e=mo(r),t=e.get("r");if(t){if(!oc(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!yo(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(ac,"parseServerFirstMessage");
function uc(r){let t=mo(r).get("v");if(t){if(!yo(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a(uc,"parseServerFinalMessage");function wo(r,e){if(!m.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!m.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return m.from(r.map((t,n)=>r[n]^e[n]))}
a(wo,"xorBuffers");function lc(r){return un.createHash("sha256").update(r).digest()}a(lc,"sha256");function ot(r,e){
return un.createHmac("sha256",r).update(e).digest()}a(ot,"hmacSha256");function cc(r,e,t){for(var n=ot(
r,m.concat([e,m.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=ot(r,n),i=wo(i,n);return i}a(cc,"Hi");go.exports=
{startSession:nc,continueSession:ic,finalizeSession:sc}});var ln={};fe(ln,{join:()=>fc});function fc(...r){return r.join("/")}var cn=te(()=>{"use strict";p();
a(fc,"join")});var fn={};fe(fn,{stat:()=>hc});function hc(r,e){e(new Error("No filesystem"))}var hn=te(()=>{"use st\
rict";p();a(hc,"stat")});var dn={};fe(dn,{default:()=>dc});var dc,pn=te(()=>{"use strict";p();dc={}});var xo={};fe(xo,{StringDecoder:()=>yn});var mn,yn,So=te(()=>{"use strict";p();mn=class mn{constructor(e){
I(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(mn,"StringDecoder");yn=mn});var _o=P((Qd,Ao)=>{"use strict";p();var{Transform:pc}=(pn(),j(dn)),{StringDecoder:yc}=(So(),j(xo)),Me=Symbol(
"last"),rr=Symbol("decoder");function mc(r,e,t){let n;if(this.overflow){if(n=this[rr].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[Me]+=this[rr].write(r),n=
this[Me].split(this.matcher);this[Me]=n.pop();for(let i=0;i<n.length;i++)try{Eo(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[Me].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(mc,"transform");function wc(r){if(this[Me]+=this[rr].end(),this[Me])
try{Eo(this,this.mapper(this[Me]))}catch(e){return r(e)}r()}a(wc,"flush");function Eo(r,e){e!==void 0&&
r.push(e)}a(Eo,"push");function vo(r){return r}a(vo,"noop");function gc(r,e,t){switch(r=r||/\r?\n/,e=
e||vo,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=vo)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=mc,t.flush=wc,t.readableObjectMode=
!0;let n=new pc(t);return n[Me]="",n[rr]=new yc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(gc,"split");Ao.exports=gc});var To=P((Hd,Ce)=>{"use strict";p();var Co=(cn(),j(ln)),bc=(pn(),j(dn)).Stream,xc=_o(),Io=(Lt(),j(Bt)),
Sc=5432,nr=w.platform==="win32",Ft=w.stderr,vc=56,Ec=7,Ac=61440,_c=32768;function Cc(r){return(r&Ac)==
_c}a(Cc,"isRegFile");var at=["host","port","database","user","password"],wn=at.length,Ic=at[wn-1];function gn(){
var r=Ft instanceof bc&&Ft.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Ft.write(Io.format.apply(Io,e))}}a(gn,"warn");Object.defineProperty(Ce.exports,"isWin",{get:a(function(){
return nr},"get"),set:a(function(r){nr=r},"set")});Ce.exports.warnTo=function(r){var e=Ft;return Ft=
r,e};Ce.exports.getFileName=function(r){var e=r||w.env,t=e.PGPASSFILE||(nr?Co.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):Co.join(e.HOME||"./",".pgpass"));return t};Ce.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(w.env,"PGPASSWORD")?!1:nr?!0:(e=e||"<unkn>",Cc(r.mode)?r.
mode&(vc|Ec)?(gn('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(gn('WARNING: password file "%s" is not a plain file',e),!1))};var Tc=Ce.exports.
match=function(r,e){return at.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||Sc)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};Ce.exports.getPassword=function(r,e,t){var n,i=e.pipe(
xc());function s(l){var c=Rc(l);c&&Pc(c)&&Tc(r,c)&&(n=c[Ic],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(l){e.destroy(),gn("WARNING: error on reading file: %s",l),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var Rc=Ce.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,l=a(
function(f,y,g){var E=r.substring(y,g);Object.hasOwnProperty.call(w.env,"PGPASS_NO_DEESCAPE")||(E=E.
replace(/\\([:\\])/g,"$1")),o[at[f]]=E},"addToObj"),c=0;c<r.length-1;c+=1){if(e=r.charAt(c+1),t=r.charAt(
c),u=n==wn-1,u){l(n,i);break}c>=0&&e==":"&&t!=="\\"&&(l(n,i,c+1),i=c+2,n+=1)}return o=Object.keys(o).
length===wn?o:null,o},Pc=Ce.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<at.length;t+=1){var n=e[t],i=r[at[t]]||"",s=n(i);if(!s)return!1}return!0}});var Po=P((Kd,bn)=>{"use strict";p();var Vd=(cn(),j(ln)),Ro=(hn(),j(fn)),ir=To();bn.exports=function(r,e){
var t=ir.getFileName();Ro.stat(t,function(n,i){if(n||!ir.usePgPass(i,t))return e(void 0);var s=Ro.createReadStream(
t);ir.getPassword(r,s,e)})};bn.exports.warnTo=ir.warnTo});var Bo={};fe(Bo,{default:()=>Bc});var Bc,Lo=te(()=>{"use strict";p();Bc={}});var Mo=P((Jd,Fo)=>{"use strict";p();var Lc=(Pr(),j(ls)),xn=(hn(),j(fn));function Sn(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=Lc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)?encodeURI(r).replace(/\%25(\d\d)/g,"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&
(t[n]=t[n][t[n].length-1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(
":"),t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=e.query.db,t.
client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.pathname;if(!t.host&&s&&/^%2f/i.
test(s)){var o=s.split("/");t.host=decodeURIComponent(o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(
0)==="/"&&(s=s.slice(1)||null),t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),
t.ssl==="0"&&(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&(t.ssl.
cert=xn.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=xn.readFileSync(t.sslkey).toString()),
t.sslrootcert&&(t.ssl.ca=xn.readFileSync(t.sslrootcert).toString()),t.sslmode){case"disable":{t.ssl=
!1;break}case"prefer":case"require":case"verify-ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=
!1;break}}return t}a(Sn,"parse");Fo.exports=Sn;Sn.parse=Sn});var sr=P((ep,Do)=>{"use strict";p();var Fc=(Lo(),j(Bo)),Uo=Rt(),ko=Mo().parse,ee=a(function(r,e,t){return t===
void 0?t=w.env["PG"+r.toUpperCase()]:t===!1||(t=w.env[t]),e[r]||t||Uo[r]},"val"),Mc=a(function(){switch(w.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return Uo.ssl},"readSSLConfigFromEnvironment"),ut=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),me=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+ut(n))},"add"),En=class En{constructor(e){e=typeof e=="string"?ko(e):
e||{},e.connectionString&&(e=Object.assign({},e,ko(e.connectionString))),this.user=ee("user",e),this.
database=ee("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(ee("p\
ort",e),10),this.host=ee("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:ee("password",e)}),this.binary=ee("binary",e),this.options=ee("options",e),this.ssl=
typeof e.ssl>"u"?Mc():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="\
no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,
"key",{enumerable:!1}),this.client_encoding=ee("client_encoding",e),this.replication=ee("replication",
e),this.isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=ee("application_name",e,"\
PGAPPNAME"),this.fallback_application_name=ee("fallback_application_name",e,!1),this.statement_timeout=
ee("statement_timeout",e,!1),this.lock_timeout=ee("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=
ee("idle_in_transaction_session_timeout",e,!1),this.query_timeout=ee("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=w.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/
1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis==
"number"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];me(t,this,"user"),me(t,this,"password"),me(t,this,"port"),me(t,this,"application_name"),me(
t,this,"fallback_application_name"),me(t,this,"connect_timeout"),me(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(me(t,n,"sslmode"),me(t,n,"sslca"),me(t,n,"s\
slkey"),me(t,n,"sslcert"),me(t,n,"sslrootcert"),this.database&&t.push("dbname="+ut(this.database)),this.
replication&&t.push("replication="+ut(this.replication)),this.host&&t.push("host="+ut(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+ut(this.client_encoding)),
Fc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+ut(s)),e(null,t.join(" ")))})}};
a(En,"ConnectionParameters");var vn=En;Do.exports=vn});var qo=P((np,No)=>{"use strict";p();var kc=Ct(),Oo=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,_n=class _n{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Oo.exec(e.text):t=Oo.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=kc.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(_n,"Result");var An=_n;No.exports=An});var Ho=P((op,Wo)=>{"use strict";p();var{EventEmitter:Uc}=Be(),Qo=qo(),jo=Pt(),In=class In extends Uc{constructor(e,t,n){
super(),e=jo.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,w.domain&&e.callback&&(this.callback=w.domain.bind(e.callback)),this._result=
new Qo(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new Qo(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.callback||!this.
listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){try{t=this._result.parseRow(
e.fields)}catch(n){this._canceledDueToError=n;return}this.emit("row",t,this._result),this._accumulateRows&&
this._result.addRow(t)}}handleCommandComplete(e,t){this._checkForMultirow(),this._result.addCommandComplete(
e),this.rows&&t.sync()}handleEmptyQuery(e){this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&
(e=this._canceledDueToError,this._canceledDueToError=!1),this.callback)return this.callback(e);this.
emit("error",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(this._canceledDueToError,
e);if(this.callback)try{this.callback(null,this._results)}catch(t){w.nextTick(()=>{throw t})}this.emit(
"end",this._results)}submit(e){if(typeof this.text!="string"&&typeof this.name!="string")return new Error(
"A query must have either text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be unique - '${this.name}\
' was used for a different statement`):this.values&&!Array.isArray(this.values)?new Error("Query val\
ues must be an array"):(this.requiresPreparation()?this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){
return this.name&&e.parsedStatements[this.name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){
e.execute({portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=!0,this.
hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});try{e.bind({portal:this.
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:jo.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(In,"Query");var Cn=In;Wo.exports=
Cn});var ri=P(R=>{"use strict";p();Object.defineProperty(R,"__esModule",{value:!0});R.NoticeMessage=R.DataRowMessage=
R.CommandCompleteMessage=R.ReadyForQueryMessage=R.NotificationResponseMessage=R.BackendKeyDataMessage=
R.AuthenticationMD5Password=R.ParameterStatusMessage=R.ParameterDescriptionMessage=R.RowDescriptionMessage=
R.Field=R.CopyResponse=R.CopyDataMessage=R.DatabaseError=R.copyDone=R.emptyQuery=R.replicationStart=
R.portalSuspended=R.noData=R.closeComplete=R.bindComplete=R.parseComplete=void 0;R.parseComplete={name:"\
parseComplete",length:5};R.bindComplete={name:"bindComplete",length:5};R.closeComplete={name:"closeC\
omplete",length:5};R.noData={name:"noData",length:5};R.portalSuspended={name:"portalSuspended",length:5};
R.replicationStart={name:"replicationStart",length:4};R.emptyQuery={name:"emptyQuery",length:4};R.copyDone=
{name:"copyDone",length:4};var jn=class jn extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(jn,"DatabaseError");var Tn=jn;R.DatabaseError=Tn;var Wn=class Wn{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a(Wn,"CopyDataMessage");var Rn=Wn;R.CopyDataMessage=Rn;var Hn=class Hn{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(Hn,"CopyResponse");var Pn=Hn;
R.CopyResponse=Pn;var $n=class $n{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a($n,"Field");var Bn=$n;
R.Field=Bn;var Gn=class Gn{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(Gn,"RowDescriptionMessage");var Ln=Gn;R.RowDescriptionMessage=
Ln;var Vn=class Vn{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(Vn,"ParameterDescriptionMessage");var Fn=Vn;
R.ParameterDescriptionMessage=Fn;var Kn=class Kn{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(Kn,"ParameterStatusMessage");var Mn=Kn;R.ParameterStatusMessage=
Mn;var zn=class zn{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(zn,"AuthenticationMD5Password");var kn=zn;R.AuthenticationMD5Password=kn;var Yn=class Yn{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Yn,"BackendKeyDataMes\
sage");var Un=Yn;R.BackendKeyDataMessage=Un;var Jn=class Jn{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(Jn,"NotificationResponseMessa\
ge");var Dn=Jn;R.NotificationResponseMessage=Dn;var Zn=class Zn{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(Zn,"ReadyForQueryMessage");var On=Zn;R.ReadyForQueryMessage=On;
var Xn=class Xn{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(Xn,"Comma\
ndCompleteMessage");var Nn=Xn;R.CommandCompleteMessage=Nn;var ei=class ei{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(ei,"DataRowMessage");var qn=ei;R.DataRowMessage=
qn;var ti=class ti{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(ti,"NoticeMe\
ssage");var Qn=ti;R.NoticeMessage=Qn});var $o=P(or=>{"use strict";p();Object.defineProperty(or,"__esModule",{value:!0});or.Writer=void 0;var ii=class ii{constructor(e=256){
this.size=e,this.offset=5,this.headerPosition=0,this.buffer=m.allocUnsafe(e)}ensure(e){if(this.buffer.
length-this.offset<e){let n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=m.allocUnsafe(i),n.copy(
this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=e>>>24&255,this.buffer[this.
offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){
return this.ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{let t=m.byteLength(e);this.ensure(t+1),this.buffer.write(e,this.offset,"ut\
f-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){let t=m.byteLength(e);
return this.ensure(t),this.buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(
e.length),e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+
1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){let t=this.join(e);return this.offset=5,this.
headerPosition=0,this.buffer=m.allocUnsafe(this.size),t}};a(ii,"Writer");var ni=ii;or.Writer=ni});var Vo=P(ur=>{"use strict";p();Object.defineProperty(ur,"__esModule",{value:!0});ur.serialize=void 0;
var si=$o(),D=new si.Writer,Dc=a(r=>{D.addInt16(3).addInt16(0);for(let n of Object.keys(r))D.addCString(
n).addCString(r[n]);D.addCString("client_encoding").addCString("UTF8");let e=D.addCString("").flush(),
t=e.length+4;return new si.Writer().addInt32(t).add(e).flush()},"startup"),Oc=a(()=>{let r=m.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Nc=a(r=>D.addCString(r).flush(
112),"password"),qc=a(function(r,e){return D.addCString(r).addInt32(m.byteLength(e)).addString(e),D.
flush(112)},"sendSASLInitialResponseMessage"),Qc=a(function(r){return D.addString(r).flush(112)},"se\
ndSCRAMClientFinalMessage"),jc=a(r=>D.addCString(r).flush(81),"query"),Go=[],Wc=a(r=>{let e=r.name||
"";e.length>63&&(console.error("Warning! Postgres only supports 63 characters for query names."),console.
error("You supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors e\
xecuting queries"));let t=r.types||Go,n=t.length,i=D.addCString(e).addCString(r.text).addInt16(n);for(let s=0;s<
n;s++)i.addInt32(t[s]);return D.flush(80)},"parse"),lt=new si.Writer,Hc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(D.addInt16(0),lt.addInt32(-1)):n instanceof m?(D.addInt16(
1),lt.addInt32(n.length),lt.add(n)):(D.addInt16(0),lt.addInt32(m.byteLength(n)),lt.addString(n))}},"\
writeValues"),$c=a((r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||Go,s=i.length;
return D.addCString(e).addCString(t),D.addInt16(s),Hc(i,r.valueMapper),D.addInt16(s),D.add(lt.flush()),
D.addInt16(n?1:0),D.flush(66)},"bind"),Gc=m.from([69,0,0,0,9,0,0,0,0,0]),Vc=a(r=>{if(!r||!r.portal&&
!r.rows)return Gc;let e=r.portal||"",t=r.rows||0,n=m.byteLength(e),i=4+n+1+4,s=m.allocUnsafe(1+i);return s[0]=
69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.writeUInt32BE(t,s.length-4),s},"execute"),Kc=a(
(r,e)=>{let t=m.allocUnsafe(16);return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,
6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"cancel"),oi=a((r,e)=>{let n=4+m.byteLength(e)+1,i=m.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),
zc=D.addCString("P").flush(68),Yc=D.addCString("S").flush(68),Jc=a(r=>r.name?oi(68,`${r.type}${r.name||
""}`):r.type==="P"?zc:Yc,"describe"),Zc=a(r=>{let e=`${r.type}${r.name||""}`;return oi(67,e)},"close"),
Xc=a(r=>D.add(r).flush(100),"copyData"),ef=a(r=>oi(102,r),"copyFail"),ar=a(r=>m.from([r,0,0,0,4]),"c\
odeOnlyBuffer"),tf=ar(72),rf=ar(83),nf=ar(88),sf=ar(99),of={startup:Dc,password:Nc,requestSsl:Oc,sendSASLInitialResponseMessage:qc,
sendSCRAMClientFinalMessage:Qc,query:jc,parse:Wc,bind:$c,execute:Vc,describe:Jc,close:Zc,flush:a(()=>tf,
"flush"),sync:a(()=>rf,"sync"),end:a(()=>nf,"end"),copyData:Xc,copyDone:a(()=>sf,"copyDone"),copyFail:ef,
cancel:Kc};ur.serialize=of});var Ko=P(lr=>{"use strict";p();Object.defineProperty(lr,"__esModule",{value:!0});lr.BufferReader=void 0;
var af=m.allocUnsafe(0),ui=class ui{constructor(e=0){this.offset=e,this.buffer=af,this.encoding="utf\
-8"}setBuffer(e,t){this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(ui,"BufferReader");var ai=ui;lr.BufferReader=ai});var Jo=P(cr=>{"use strict";p();Object.defineProperty(cr,"__esModule",{value:!0});cr.Parser=void 0;var O=ri(),
uf=Ko(),li=1,lf=4,zo=li+lf,Yo=m.allocUnsafe(0),fi=class fi{constructor(e){if(this.buffer=Yo,this.bufferLength=
0,this.bufferOffset=0,this.reader=new uf.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+
this.bufferLength,i=this.bufferOffset;for(;i+zo<=n;){let s=this.buffer[i],o=this.buffer.readUInt32BE(
i+li),u=li+o;if(u+i<=n){let l=this.handlePacket(i+zo,s,o,this.buffer);t(l),i+=u}else break}i===n?(this.
buffer=Yo,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){
let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.buffer;else{let s=this.
buffer.byteLength*2;for(;t>=s;)s*=2;i=m.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+
this.bufferLength),this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return O.bindComplete;case 49:return O.parseComplete;case 51:return O.closeComplete;case 110:
return O.noData;case 115:return O.portalSuspended;case 99:return O.copyDone;case 87:return O.replicationStart;case 73:
return O.emptyQuery;case 68:return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.parseNotificationMessage(
e,n,i);case 82:return this.parseAuthenticationResponse(e,n,i);case 83:return this.parseParameterStatusMessage(
e,n,i);case 75:return this.parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"e\
rror");case 78:return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.parseCopyInMessage(
e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:return this.parseCopyData(e,n,i);default:
return new O.DatabaseError("received invalid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.string(1);return new O.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new O.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){
let i=n.slice(e,e+(t-4));return new O.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(
e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==0,o=this.reader.
int16(),u=new O.CopyResponse(t,i,s,o);for(let l=0;l<o;l++)u.columnTypes[l]=this.reader.int16();return u}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();
return new O.NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new O.RowDescriptionMessage(t,i);for(let o=0;o<i;o++)s.fields[o]=this.
parseField();return s}parseField(){let e=this.reader.cstring(),t=this.reader.uint32(),n=this.reader.
int16(),i=this.reader.uint32(),s=this.reader.int16(),o=this.reader.int32(),u=this.reader.int16()===0?
"text":"binary";return new O.Field(e,t,n,i,s,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new O.ParameterDescriptionMessage(t,i);for(let o=0;o<i;o++)
s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){let u=this.reader.int32();s[o]=u===-1?
null:this.reader.string(u)}return new O.DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.cstring(),s=this.reader.cstring();return new O.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.
int32();return new O.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:break;case 3:s.
length===8&&(s.name="authenticationCleartextPassword");break;case 5:if(s.length===12){s.name="authen\
ticationMD5Password";let o=this.reader.bytes(4);return new O.AuthenticationMD5Password(t,o)}break;case 10:
{s.name="authenticationSASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o)}
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);break;case 12:s.name=
"authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:throw new Error("Unknown auth\
enticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(e,n);let s={},
o=this.reader.string(1);for(;o!=="\0";)s[o]=this.reader.cstring(),o=this.reader.string(1);let u=s.M,
l=i==="notice"?new O.NoticeMessage(t,u):new O.DatabaseError(u,t,i);return l.severity=s.S,l.code=s.C,
l.detail=s.D,l.hint=s.H,l.position=s.P,l.internalPosition=s.p,l.internalQuery=s.q,l.where=s.W,l.schema=
s.s,l.table=s.t,l.column=s.c,l.dataType=s.d,l.constraint=s.n,l.file=s.F,l.line=s.L,l.routine=s.R,l}};
a(fi,"Parser");var ci=fi;cr.Parser=ci});var hi=P(ke=>{"use strict";p();Object.defineProperty(ke,"__esModule",{value:!0});ke.DatabaseError=ke.
serialize=ke.parse=void 0;var cf=ri();Object.defineProperty(ke,"DatabaseError",{enumerable:!0,get:a(
function(){return cf.DatabaseError},"get")});var ff=Vo();Object.defineProperty(ke,"serialize",{enumerable:!0,
get:a(function(){return ff.serialize},"get")});var hf=Jo();function df(r,e){let t=new hf.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(df,"parse");ke.parse=df});var Zo={};fe(Zo,{connect:()=>pf});function pf({socket:r,servername:e}){return r.startTls(e),r}var Xo=te(
()=>{"use strict";p();a(pf,"connect")});var yi=P((Rp,ra)=>{"use strict";p();var ea=(Je(),j(us)),yf=Be().EventEmitter,{parse:mf,serialize:K}=hi(),
ta=K.flush(),wf=K.sync(),gf=K.end(),pi=class pi extends yf{constructor(e){super(),e=e||{},this.stream=
e.stream||new ea.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(Xo(),j(Zo));let l={socket:n.stream};n.ssl!==!0&&(Object.assign(l,n.ssl),"key"in n.ssl&&(l.key=
n.ssl.key)),ea.isIP(t)===0&&(l.servername=t);try{n.stream=u.connect(l)}catch(c){return n.emit("error",
c)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),mf(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(K.requestSsl())}startup(e){this.
stream.write(K.startup(e))}cancel(e,t){this._send(K.cancel(e,t))}password(e){this._send(K.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(K.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(K.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(K.query(e))}parse(e){
this._send(K.parse(e))}bind(e){this._send(K.bind(e))}execute(e){this._send(K.execute(e))}flush(){this.
stream.writable&&this.stream.write(ta)}sync(){this._ending=!0,this._send(ta),this._send(wf)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(gf,()=>{this.stream.end()})}close(e){this._send(K.
close(e))}describe(e){this._send(K.describe(e))}sendCopyFromChunk(e){this._send(K.copyData(e))}endCopyFrom(){
this._send(K.copyDone())}sendCopyFail(e){this._send(K.copyFail(e))}};a(pi,"Connection");var di=pi;ra.
exports=di});var sa=P((Fp,ia)=>{"use strict";p();var bf=Be().EventEmitter,Lp=(Lt(),j(Bt)),xf=Pt(),mi=bo(),Sf=Po(),
vf=Xt(),Ef=sr(),na=Ho(),Af=Rt(),_f=yi(),wi=class wi extends bf{constructor(e){super(),this.connectionParameters=
new Ef(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||S.Promise,
this._types=new vf(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new _f({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||Af.binary,this.
processID=null,this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.key&&
Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=t.connectionTimeoutMillis||
0}_errorAllQueries(e){let t=a(n=>{w.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");
this.activeQuery&&(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse a client.");w.nextTick(
()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&
(this.connectionTimeoutHandle=setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expir\
ed"))},this._connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.\
s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),this._attachListeners(
n),n.once("end",()=>{let i=this._ending?new Error("Connection terminated"):new Error("Connection ter\
minated unexpectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(i),this._ending||
(this._connecting&&!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),w.nextTick(()=>{this.emit("en\
d")})})}connect(e){if(e){this._connect(e);return}return new this._Promise((t,n)=>{this._connect(i=>{
i?n(i):t()})})}_attachListeners(e){e.on("authenticationCleartextPassword",this._handleAuthCleartextPassword.
bind(this)),e.on("authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("authentic\
ationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLContinue",this._handleAuthSASLContinue.
bind(this)),e.on("authenticationSASLFinal",this._handleAuthSASLFinal.bind(this)),e.on("backendKeyDat\
a",this._handleBackendKeyData.bind(this)),e.on("error",this._handleErrorEvent.bind(this)),e.on("erro\
rMessage",this._handleErrorMessage.bind(this)),e.on("readyForQuery",this._handleReadyForQuery.bind(this)),
e.on("notice",this._handleNotice.bind(this)),e.on("rowDescription",this._handleRowDescription.bind(this)),
e.on("dataRow",this._handleDataRow.bind(this)),e.on("portalSuspended",this._handlePortalSuspended.bind(
this)),e.on("emptyQuery",this._handleEmptyQuery.bind(this)),e.on("commandComplete",this._handleCommandComplete.
bind(this)),e.on("parseComplete",this._handleParseComplete.bind(this)),e.on("copyInResponse",this._handleCopyInResponse.
bind(this)),e.on("copyData",this._handleCopyData.bind(this)),e.on("notification",this._handleNotification.
bind(this))}_checkPgPass(e){let t=this.connection;typeof this.password=="function"?this._Promise.resolve().
then(()=>this.password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("error",new TypeError(
"Password must be a string"));return}this.connectionParameters.password=this.password=n}else this.connectionParameters.
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Sf(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=xf.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=mi.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){mi.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){mi.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
this.processID=e.processID,this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this.
_connecting=!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("connect"));let{activeQuery:t}=this;
this.activeQuery=null,this.readyForQuery=!0,t&&t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),this.
_connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){if(this.
_connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,this._errorAllQueries(e),this.
emit("error",e)}_handleErrorMessage(e){if(this._connecting)return this._handleErrorWhileConnecting(e);
let t=this.activeQuery;if(!t){this._handleErrorEvent(e);return}this.activeQuery=null,t.handleError(e,
this.connection)}_handleRowDescription(e){this.activeQuery.handleRowDescription(e)}_handleDataRow(e){
this.activeQuery.handleDataRow(e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.
connection)}_handleEmptyQuery(e){this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){
this.activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.activeQuery.name&&
(this.connection.parsedStatements[this.activeQuery.name]=this.activeQuery.text)}_handleCopyInResponse(e){
this.activeQuery.handleCopyInResponse(this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(
e,this.connection)}_handleNotification(e){this.emit("notification",e)}_handleNotice(e){this.emit("no\
tice",e)}getStartupConf(){var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=""+e.replication),
e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,10))),e.lock_timeout&&
(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&(t.idle_in_transaction_session_timeout=
String(parseInt(e.idle_in_transaction_session_timeout,10))),e.options&&(t.options=e.options),t}cancel(e,t){
if(e.activeQuery===t){var n=this.connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+
"/.s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.indexOf(t),1)}setTypeParser(e,t,n){
return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){return this._types.getTypeParser(e,t)}escapeIdentifier(e){
return'"'+e.replace(/"/g,'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",i=0;i<e.length;i++){var s=e[i];
s==="'"?n+=s+s:s==="\\"?(n+=s+s,t=!0):n+=s}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){if(this.
readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){this.readyForQuery=
!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);e&&w.nextTick(()=>{this.activeQuery.
handleError(e,this.connection),this.readyForQuery=!0,this._pulseQueryQueue()})}else this.hasExecuted&&
(this.activeQuery=null,this.emit("drain"))}query(e,t,n){var i,s,o,u,l;if(e==null)throw new TypeError(
"Client was passed a null or undefined query");return typeof e.submit=="function"?(o=e.query_timeout||
this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&(i.callback=i.callback||t)):(o=this.
connectionParameters.query_timeout,i=new na(e,t,n),i.callback||(s=new this._Promise((c,f)=>{i.callback=
(y,g)=>y?f(y):c(g)}))),o&&(l=i.callback,u=setTimeout(()=>{var c=new Error("Query read timeout");w.nextTick(
()=>{i.handleError(c,this.connection)}),l(c),i.callback=()=>{};var f=this.queryQueue.indexOf(i);f>-1&&
this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=(c,f)=>{clearTimeout(u),l(c,f)}),
this.binary&&!i.binary&&(i.binary=!0),i._result&&!i._result._types&&(i._result._types=this._types),this.
_queryable?this._ending?(w.nextTick(()=>{i.handleError(new Error("Client was closed and is not query\
able"),this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(w.nextTick(()=>{i.
handleError(new Error("Client has encountered a connection error and is not queryable"),this.connection)}),
s)}ref(){this.connection.ref()}unref(){this.connection.unref()}end(e){if(this._ending=!0,!this.connection.
_connecting)if(e)e();else return this._Promise.resolve();if(this.activeQuery||!this._queryable?this.
connection.stream.destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(wi,"Client");var fr=wi;fr.Query=na;ia.exports=fr});var la=P((Up,ua)=>{"use strict";p();var Cf=Be().EventEmitter,oa=a(function(){},"NOOP"),aa=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),xi=class xi{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(xi,"IdleItem");var gi=xi,Si=class Si{constructor(e){
this.callback=e}};a(Si,"PendingItem");var ct=Si;function If(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(If,"throwOnDoubleRelease");function hr(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(hr,"promisify");
function Tf(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(Tf,"makeIdleListener");var vi=class vi extends Cf{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
min=this.options.min||0,this.options.maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=
this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,
this.log=this.options.log||function(){},this.Client=this.options.Client||t||Mt().Client,this.Promise=
this.options.Promise||S.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=[],this._endCallback=
void 0,this.ending=!1,this.ended=!1}_isFull(){return this._clients.length>=this.options.max}_isAboveMin(){
return this._clients.length>this.options.min}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&
this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());
return}if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this.
_isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}
if(!this._isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e){let t=aa(
this._idle,n=>n.client===e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(
n=>n!==e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a poo\
l after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=hr(this.Promise,e),n=t.
result;if(this._isFull()||this._idle.length){if(this._idle.length&&w.nextTick(()=>this._pulseQueue()),
!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new ct(t.callback)),n;let i=a((u,l,c)=>{
clearTimeout(o),t.callback(u,l,c)},"queueCallback"),s=new ct(i),o=setTimeout(()=>{aa(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},this.
options.connectionTimeoutMillis);return o.unref&&o.unref(),this._pendingQueue.push(s),n}return this.
newClient(new ct(t.callback)),n}newClient(e){let t=new this.Client(this.options);this._clients.push(
t);let n=Tf(this,t);this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(o=>{if(i&&
clearTimeout(i),t.on("error",n),o)this.log("client failed to connect",o),this._clients=this._clients.
filter(u=>u!==t),s&&(o=new Error("Connection terminated due to connection timeout",{cause:o})),this.
_pulseQueue(),e.timedOut||e.callback(o,void 0,oa);else{if(this.log("new client connected"),this.options.
maxLifetimeSeconds!==0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(c=>c.client===t)!==-1&&this._acquireClient(t,new ct((c,f,y)=>y()),
n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",()=>clearTimeout(u))}return this.
_acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){i&&this.emit("connect",e),this.emit("acquire",e),
e.release=this._releaseOnce(e,n),e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.
options.verify(e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,oa);t.callback(void 0,e,e.release)}):t.callback(void 0,e,e.release)}_releaseOnce(e,t){
let n=!1;return i=>{n&&If(),n=!0,this._release(e,t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=
(e._poolUseCount||0)+1,this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove expended client"),this.
_remove(e),this._pulseQueue();return}if(this._expired.has(e)){this.log("remove expired client"),this.
_expired.delete(e),this._remove(e),this._pulseQueue();return}let s;this.options.idleTimeoutMillis&&this.
_isAboveMin()&&(s=setTimeout(()=>{this.log("remove idle client"),this._remove(e)},this.options.idleTimeoutMillis),
this.options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new gi(
e,t,s)),this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=hr(this.Promise,e);return v(function(){
return s.callback(new Error("Passing a function as the first parameter to pool.query is not supporte\
d"))}),s.result}typeof t=="function"&&(n=t,t=void 0);let i=hr(this.Promise,n);return n=i.callback,this.
connect((s,o)=>{if(s)return n(s);let u=!1,l=a(c=>{u||(u=!0,o.release(c),n(c))},"onError");o.once("er\
ror",l),this.log("dispatching query");try{o.query(e,t,(c,f)=>{if(this.log("query dispatched"),o.removeListener(
"error",l),!u)return u=!0,o.release(c),c?n(c):n(void 0,f)})}catch(c){return o.release(c),n(c)}}),i.result}end(e){
if(this.log("ending"),this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=hr(this.Promise,e);return this._endCallback=t.callback,this.
_pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.length}get idleCount(){return this.
_idle.length}get expiredCount(){return this._clients.reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){
return this._clients.length}};a(vi,"Pool");var bi=vi;ua.exports=bi});var ca={};fe(ca,{default:()=>Rf});var Rf,fa=te(()=>{"use strict";p();Rf={}});var ha=P((qp,Pf)=>{Pf.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var ya=P((Qp,pa)=>{"use strict";p();var da=Be().EventEmitter,Bf=(Lt(),j(Bt)),Ei=Pt(),ft=pa.exports=function(r,e,t){
da.call(this),r=Ei.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Bf.inherits(ft,da);
var Lf={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};ft.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=Lf[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};ft.prototype.then=function(r,e){return this._getPromise().then(
r,e)};ft.prototype.catch=function(r){return this._getPromise().catch(r)};ft.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};ft.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,v(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(l,c)=>{l.forEach(f=>{e.emit("row",f,u[c])})}):o.forEach(function(l){e.emit("row",l,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(w.domain&&(t=w.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(Ei.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(Ei.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var ba=P(($p,ga)=>{"use strict";p();var Ff=(fa(),j(ca)),Mf=Xt(),Hp=ha(),ma=Be().EventEmitter,kf=(Lt(),j(Bt)),
Uf=sr(),wa=ya(),se=ga.exports=function(r){ma.call(this),r=r||{},this._Promise=r.Promise||S.Promise,this.
_types=new Mf(r.types),this.native=new Ff({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Uf(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};se.Query=
wa;kf.inherits(se,ma);se.prototype._errorAllQueries=function(r){let e=a(t=>{w.nextTick(()=>{t.native=
this.native,t.handleError(r)})},"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};se.prototype._connect=function(r){var e=this;
if(this._connecting){w.nextTick(()=>r(new Error("Client has already been connected. You cannot reuse\
 a client.")));return}this._connecting=!0,this.connectionParameters.getLibpqConnectionString(function(t,n){
if(t)return r(t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,e.native.
on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notifi\
cation",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.emit("connect"),e.
_pulseQueryQueue(!0),r()})})};se.prototype.connect=function(r){if(r){this._connect(r);return}return new this.
_Promise((e,t)=>{this._connect(n=>{n?t(n):e()})})};se.prototype.query=function(r,e,t){var n,i,s,o,u;
if(r==null)throw new TypeError("Client was passed a null or undefined query");if(typeof r.submit=="f\
unction")s=r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="function"&&(r.callback=
e);else if(s=this.connectionParameters.query_timeout,n=new wa(r,e,t),!n.callback){let l,c;i=new this.
_Promise((f,y)=>{l=f,c=y}),n.callback=(f,y)=>f?c(f):l(y)}return s&&(u=n.callback,o=setTimeout(()=>{var l=new Error(
"Query read timeout");w.nextTick(()=>{n.handleError(l,this.connection)}),u(l),n.callback=()=>{};var c=this.
_queryQueue.indexOf(n);c>-1&&this._queryQueue.splice(c,1),this._pulseQueryQueue()},s),n.callback=(l,c)=>{
clearTimeout(o),u(l,c)}),this._queryable?this._ending?(n.native=this.native,w.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),
i):(n.native=this.native,w.nextTick(()=>{n.handleError(new Error("Client has encountered a connectio\
n error and is not queryable"))}),i)};se.prototype.end=function(r){var e=this;this._ending=!0,this._connected||
this.once("connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){r=a(s=>s?
i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error("Connection terminated")),
w.nextTick(()=>{e.emit("end"),r&&r()})}),t};se.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};se.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){r||this.emit("dra\
in");return}this._activeQuery=e,e.submit(this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};
se.prototype.cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};se.prototype.ref=function(){};
se.prototype.unref=function(){};se.prototype.setTypeParser=function(r,e,t){return this._types.setTypeParser(
r,e,t)};se.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var Ai=P((Kp,xa)=>{"use strict";p();xa.exports=ba()});var Mt=P((Yp,kt)=>{"use strict";p();var Df=sa(),Of=Rt(),Nf=yi(),qf=la(),{DatabaseError:Qf}=hi(),jf=a(
r=>{var e;return e=class extends qf{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),_i=a(
function(r){this.defaults=Of,this.Client=r,this.Query=this.Client.Query,this.Pool=jf(this.Client),this.
_pools=[],this.Connection=Nf,this.types=Ct(),this.DatabaseError=Qf},"PG");typeof w.env.NODE_PG_FORCE_NATIVE<
"u"?kt.exports=new _i(Ai()):(kt.exports=new _i(Df),Object.defineProperty(kt.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new _i(Ai())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(kt.exports,"native",{value:r}),r}}))});var $f={};fe($f,{Client:()=>ht,DatabaseError:()=>ve.DatabaseError,NeonDbError:()=>ue,NeonQueryPromise:()=>Le,
Pool:()=>dr,SqlTemplate:()=>rt,UnsafeRawSql:()=>nt,_bundleExt:()=>Hf,defaults:()=>ve.defaults,escapeIdentifier:()=>ve.escapeIdentifier,
escapeLiteral:()=>ve.escapeLiteral,neon:()=>on,neonConfig:()=>be,types:()=>ve.types,warnIfBrowser:()=>xt});
module.exports=j($f);p();p();Je();Pr();p();var wu=Object.defineProperty,gu=Object.defineProperties,bu=Object.getOwnPropertyDescriptors,cs=Object.
getOwnPropertySymbols,xu=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,fs=a(
(r,e,t)=>e in r?wu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
vu=a((r,e)=>{for(var t in e||(e={}))xu.call(e,t)&&fs(r,t,e[t]);if(cs)for(var t of cs(e))Su.call(e,t)&&
fs(r,t,e[t]);return r},"__spreadValues"),Eu=a((r,e)=>gu(r,bu(e)),"__spreadProps"),Au=1008e3,hs=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,_u=new TextDecoder,Br=new TextEncoder,Qt=Br.encode("0123456789\
abcdef"),jt=Br.encode("0123456789ABCDEF"),Cu=Br.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var ds=Cu.slice();ds[62]=45;ds[63]=95;var pt,Wt;function Iu(r,{alphabet:e,scratchArr:t}={}){if(!pt)if(pt=
new Uint16Array(256),Wt=new Uint16Array(256),hs)for(let C=0;C<256;C++)pt[C]=Qt[C&15]<<8|Qt[C>>>4],Wt[C]=
jt[C&15]<<8|jt[C>>>4];else for(let C=0;C<256;C++)pt[C]=Qt[C&15]|Qt[C>>>4]<<8,Wt[C]=jt[C&15]|jt[C>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),l=new Uint32Array(o.buffer,o.byteOffset,i),c=e==="upper"?Wt:pt,f=0,y=0,g;if(hs)
for(;f<s;)g=u[f++],l[y++]=c[g>>>8&255]<<16|c[g&255],l[y++]=c[g>>>24]<<16|c[g>>>16&255];else for(;f<s;)
g=u[f++],l[y++]=c[g>>>24]<<16|c[g>>>16&255],l[y++]=c[g>>>8&255]<<16|c[g&255];for(f<<=2;f<n;)o[f]=c[r[f++]];
return _u.decode(o.subarray(0,n))}a(Iu,"_toHex");function Tu(r,e={}){let t="",n=r.length,i=Au>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n);for(let u=0;u<s;u++){let l=u*i,c=l+i;t+=Iu(r.subarray(l,c),Eu(vu(
{},e),{scratchArr:o}))}return t}a(Tu,"_toHexChunked");function ps(r,e={}){return e.alphabet!=="upper"&&
typeof r.toHex=="function"?r.toHex():Tu(r,e)}a(ps,"toHex");p();var Lr;try{Lr=new TextDecoder}catch{}var x,He,h=0;var xs=[],Ru=105,Pu=57342,Bu=57343,ys=57337;var ms=6,Ze={},yt=11281e4,_e=1681e4;var Fr=xs,Mr=0,B={},N,Gt,Vt=0,gt=0,W,de,q=[],kr=[],ne,X,mt,ws={useRecords:!1,mapsAsObjects:!0},bt=!1,
Ss=2;try{new Function("")}catch{Ss=1/0}var wt=class wt{constructor(e){if(e&&((e.keyMap||e._keyMap)&&!e.useRecords&&
(e.useRecords=!1,e.mapsAsObjects=!0),e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),
e.getStructures&&(e.getShared=e.getStructures),e.getShared&&!e.structures&&((e.structures=[]).uninitialized=
!0),e.keyMap)){this.mapKey=new Map;for(let[t,n]of Object.entries(e.keyMap))this.mapKey.set(n,t)}Object.
assign(this,e)}decodeKey(e){return this.keyMap&&this.mapKey.get(e)||e}encodeKey(e){return this.keyMap&&
this.keyMap.hasOwnProperty(e)?this.keyMap[e]:e}encodeKeys(e){if(!this._keyMap)return e;let t=new Map;
for(let[n,i]of Object.entries(e))t.set(this._keyMap.hasOwnProperty(n)?this._keyMap[n]:n,i);return t}decodeKeys(e){
if(!this._keyMap||e.constructor.name!="Map")return e;if(!this._mapKey){this._mapKey=new Map;for(let[
n,i]of Object.entries(this._keyMap))this._mapKey.set(i,n)}let t={};return e.forEach((n,i)=>t[pe(this.
_mapKey.has(i)?this._mapKey.get(i):i)]=n),t}mapDecode(e,t){let n=this.decode(e);if(this._keyMap)switch(n.
constructor.name){case"Array":return n.map(i=>this.decodeKeys(i))}return n}decode(e,t){if(x)return _s(
()=>(qr(),this?this.decode(e,t):wt.prototype.decode.call(ws,e,t)));He=t>-1?t:e.length,h=0,Mr=0,gt=0,
Gt=null,Fr=xs,W=null,x=e;try{X=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){
throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+
(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof wt){if(B=this,ne=this.sharedValues&&
(this.pack?new Array(this.maxPrivatePackedValues||16).concat(this.sharedValues):this.sharedValues),this.
structures)return N=this.structures,Ht();(!N||N.length>0)&&(N=[])}else B=ws,(!N||N.length>0)&&(N=[]),
ne=null;return Ht()}decodeMultiple(e,t){let n,i=0;try{let s=e.length;bt=!0;let o=this?this.decode(e,
s):jr.decode(e,s);if(t){if(t(o)===!1)return;for(;h<s;)if(i=h,t(Ht())===!1)return}else{for(n=[o];h<s;)
i=h,n.push(Ht());return n}}catch(s){throw s.lastPosition=i,s.values=n,s}finally{bt=!1,qr()}}};a(wt,"\
Decoder");var Ur=wt;function Ht(){try{let r=L();if(W){if(h>=W.postBundlePosition){let e=new Error("Unexpected bundle pos\
ition");throw e.incomplete=!0,e}h=W.postBundlePosition,W=null}if(h==He)N=null,x=null,de&&(de=null);else if(h>
He){let e=new Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}else if(!bt)throw new Error(
"Data read, but end of buffer not reached");return r}catch(r){throw qr(),(r instanceof RangeError||r.
message.startsWith("Unexpected end of buffer"))&&(r.incomplete=!0),r}}a(Ht,"checkedRead");function L(){
let r=x[h++],e=r>>5;if(r=r&31,r>23)switch(r){case 24:r=x[h++];break;case 25:if(e==7)return ku();r=X.
getUint16(h),h+=2;break;case 26:if(e==7){let t=X.getFloat32(h);if(B.useFloat32>2){let n=Cs[(x[h]&127)<<
1|x[h+1]>>7];return h+=4,(n*t+(t>0?.5:-.5)>>0)/n}return h+=4,t}if(r=X.getUint32(h),h+=4,e===1)return-1-
r;break;case 27:if(e==7){let t=X.getFloat64(h);return h+=8,t}if(e>1){if(X.getUint32(h)>0)throw new Error(
"JavaScript does not support arrays, maps, or strings with length over 4294967295");r=X.getUint32(h+
4)}else B.int64AsNumber?(r=X.getUint32(h)*4294967296,r+=X.getUint32(h+4)):r=X.getBigUint64(h);h+=8;break;case 31:
switch(e){case 2:case 3:throw new Error("Indefinite length not supported for byte or text strings");case 4:
let t=[],n,i=0;for(;(n=L())!=Ze;){if(i>=yt)throw new Error(`Array length exceeds ${yt}`);t[i++]=n}return e==
4?t:e==3?t.join(""):m.concat(t);case 5:let s;if(B.mapsAsObjects){let o={},u=0;if(B.keyMap)for(;(s=L())!=
Ze;){if(u++>=_e)throw new Error(`Property count exceeds ${_e}`);o[pe(B.decodeKey(s))]=L()}else for(;(s=
L())!=Ze;){if(u++>=_e)throw new Error(`Property count exceeds ${_e}`);o[pe(s)]=L()}return o}else{mt&&
(B.mapsAsObjects=!0,mt=!1);let o=new Map;if(B.keyMap){let u=0;for(;(s=L())!=Ze;){if(u++>=_e)throw new Error(
`Map size exceeds ${_e}`);o.set(B.decodeKey(s),L())}}else{let u=0;for(;(s=L())!=Ze;){if(u++>=_e)throw new Error(
`Map size exceeds ${_e}`);o.set(s,L())}}return o}case 7:return Ze;default:throw new Error("Invalid m\
ajor type for indefinite length "+e)}default:throw new Error("Unknown token "+r)}switch(e){case 0:return r;case 1:
return~r;case 2:return Mu(r);case 3:if(gt>=h)return Gt.slice(h-Vt,(h+=r)-Vt);if(gt==0&&He<140&&r<32){
let i=r<16?vs(r):Fu(r);if(i!=null)return i}return Lu(r);case 4:if(r>=yt)throw new Error(`Array lengt\
h exceeds ${yt}`);let t=new Array(r);for(let i=0;i<r;i++)t[i]=L();return t;case 5:if(r>=_e)throw new Error(
`Map size exceeds ${yt}`);if(B.mapsAsObjects){let i={};if(B.keyMap)for(let s=0;s<r;s++)i[pe(B.decodeKey(
L()))]=L();else for(let s=0;s<r;s++)i[pe(L())]=L();return i}else{mt&&(B.mapsAsObjects=!0,mt=!1);let i=new Map;
if(B.keyMap)for(let s=0;s<r;s++)i.set(B.decodeKey(L()),L());else for(let s=0;s<r;s++)i.set(L(),L());
return i}case 6:if(r>=ys){let i=N[r&8191];if(i)return i.read||(i.read=Dr(i)),i.read();if(r<65536){if(r==
Bu){let s=et(),o=L(),u=L();Nr(o,u);let l={};if(B.keyMap)for(let c=2;c<s;c++){let f=B.decodeKey(u[c-2]);
l[pe(f)]=L()}else for(let c=2;c<s;c++){let f=u[c-2];l[pe(f)]=L()}return l}else if(r==Pu){let s=et(),
o=L();for(let u=2;u<s;u++)Nr(o++,L());return L()}else if(r==ys)return Qu();if(B.getShared&&(Qr(),i=N[r&
8191],i))return i.read||(i.read=Dr(i)),i.read()}}let n=q[r];if(n)return n.handlesRead?n(L):n(L());{let i=L();
for(let s=0;s<kr.length;s++){let o=kr[s](r,i);if(o!==void 0)return o}return new tt(i,r)}case 7:switch(r){case 20:
return!1;case 21:return!0;case 22:return null;case 23:return;case 31:default:let i=(ne||We())[r];if(i!==
void 0)return i;throw new Error("Unknown token "+r)}default:if(isNaN(r)){let i=new Error("Unexpected\
 end of CBOR data");throw i.incomplete=!0,i}throw new Error("Unknown CBOR token "+r)}}a(L,"read");var gs=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function Dr(r){if(!r)throw new Error("Structure is required in record definition");function e(){let t=x[h++];
if(t=t&31,t>23)switch(t){case 24:t=x[h++];break;case 25:t=X.getUint16(h),h+=2;break;case 26:t=X.getUint32(
h),h+=4;break;default:throw new Error("Expected array header, but got "+x[h-1])}let n=this.compiledReader;
for(;n;){if(n.propertyCount===t)return n(L);n=n.next}if(this.slowReads++>=Ss){let s=this.length==t?this:
this.slice(0,t);return n=B.keyMap?new Function("r","return {"+s.map(o=>B.decodeKey(o)).map(o=>gs.test(
o)?pe(o)+":r()":"["+JSON.stringify(o)+"]:r()").join(",")+"}"):new Function("r","return {"+s.map(o=>gs.
test(o)?pe(o)+":r()":"["+JSON.stringify(o)+"]:r()").join(",")+"}"),this.compiledReader&&(n.next=this.
compiledReader),n.propertyCount=t,this.compiledReader=n,n(L)}let i={};if(B.keyMap)for(let s=0;s<t;s++)
i[pe(B.decodeKey(this[s]))]=L();else for(let s=0;s<t;s++)i[pe(this[s])]=L();return i}return a(e,"rea\
dObject"),r.slowReads=0,e}a(Dr,"createStructureReader");function pe(r){if(typeof r=="string")return r===
"__proto__"?"__proto_":r;if(typeof r=="number"||typeof r=="boolean"||typeof r=="bigint")return r.toString();
if(r==null)return r+"";throw new Error("Invalid property name type "+typeof r)}a(pe,"safeKey");var Lu=Or;function Or(r){let e;if(r<16&&(e=vs(r)))return e;if(r>64&&Lr)return Lr.decode(x.subarray(h,h+=r));let t=h+
r,n=[];for(e="";h<t;){let i=x[h++];if((i&128)===0)n.push(i);else if((i&224)===192)if(i<194||h>=t||(x[h]&
192)!==128)n.push(65533);else{let s=x[h++]&63;n.push((i&31)<<6|s)}else if((i&240)===224){let s=h<t?x[h]:
0;if(h>=t||(s&192)!==128||i===224&&s<160||i===237&&s>=160)n.push(65533);else if(h++,h>=t||(x[h]&192)!==
128)n.push(65533);else{let o=x[h++]&63;n.push((i&31)<<12|(s&63)<<6|o)}}else if((i&248)===240){let s=h<
t?x[h]:0;if(i>244||h>=t||(s&192)!==128||i===240&&s<144||i===244&&s>=144)n.push(65533);else if(h++,h>=
t||(x[h]&192)!==128)n.push(65533);else{let o=x[h++]&63;if(h>=t||(x[h]&192)!==128)n.push(65533);else{
let u=x[h++]&63,l=(i&7)<<18|(s&63)<<12|o<<6|u;l-=65536,n.push(l>>>10&1023|55296),n.push(56320|l&1023)}}}else
n.push(65533);n.length>=4096&&(e+=V.apply(String,n),n.length=0)}return n.length>0&&(e+=V.apply(String,
n)),e}a(Or,"readStringJS");var V=String.fromCharCode;function Fu(r){let e=h,t=new Array(r);for(let n=0;n<
r;n++){let i=x[h++];if((i&128)>0){h=e;return}t[n]=i}return V.apply(String,t)}a(Fu,"longStringInJS");
function vs(r){if(r<4)if(r<2){if(r===0)return"";{let e=x[h++];if((e&128)>1){h-=1;return}return V(e)}}else{
let e=x[h++],t=x[h++];if((e&128)>0||(t&128)>0){h-=2;return}if(r<3)return V(e,t);let n=x[h++];if((n&128)>
0){h-=3;return}return V(e,t,n)}else{let e=x[h++],t=x[h++],n=x[h++],i=x[h++];if((e&128)>0||(t&128)>0||
(n&128)>0||(i&128)>0){h-=4;return}if(r<6){if(r===4)return V(e,t,n,i);{let s=x[h++];if((s&128)>0){h-=
5;return}return V(e,t,n,i,s)}}else if(r<8){let s=x[h++],o=x[h++];if((s&128)>0||(o&128)>0){h-=6;return}
if(r<7)return V(e,t,n,i,s,o);let u=x[h++];if((u&128)>0){h-=7;return}return V(e,t,n,i,s,o,u)}else{let s=x[h++],
o=x[h++],u=x[h++],l=x[h++];if((s&128)>0||(o&128)>0||(u&128)>0||(l&128)>0){h-=8;return}if(r<10){if(r===
8)return V(e,t,n,i,s,o,u,l);{let c=x[h++];if((c&128)>0){h-=9;return}return V(e,t,n,i,s,o,u,l,c)}}else if(r<
12){let c=x[h++],f=x[h++];if((c&128)>0||(f&128)>0){h-=10;return}if(r<11)return V(e,t,n,i,s,o,u,l,c,f);
let y=x[h++];if((y&128)>0){h-=11;return}return V(e,t,n,i,s,o,u,l,c,f,y)}else{let c=x[h++],f=x[h++],y=x[h++],
g=x[h++];if((c&128)>0||(f&128)>0||(y&128)>0||(g&128)>0){h-=12;return}if(r<14){if(r===12)return V(e,t,
n,i,s,o,u,l,c,f,y,g);{let E=x[h++];if((E&128)>0){h-=13;return}return V(e,t,n,i,s,o,u,l,c,f,y,g,E)}}else{
let E=x[h++],C=x[h++];if((E&128)>0||(C&128)>0){h-=14;return}if(r<15)return V(e,t,n,i,s,o,u,l,c,f,y,g,
E,C);let H=x[h++];if((H&128)>0){h-=15;return}return V(e,t,n,i,s,o,u,l,c,f,y,g,E,C,H)}}}}}a(vs,"short\
StringInJS");function Mu(r){return B.copyBuffers?Uint8Array.prototype.slice.call(x,h,h+=r):x.subarray(
h,h+=r)}a(Mu,"readBin");var Es=new Float32Array(1),$t=new Uint8Array(Es.buffer,0,4);function ku(){let r=x[h++],e=x[h++],t=(r&
127)>>2;if(t===31)return e||r&3?NaN:r&128?-1/0:1/0;if(t===0){let n=((r&3)<<8|e)/16777216;return r&128?
-n:n}return $t[3]=r&128|(t>>1)+56,$t[2]=(r&7)<<5|e>>3,$t[1]=e<<5,$t[0]=0,Es[0]}a(ku,"getFloat16");var hh=new Array(
4096);var Wr=class Wr{constructor(e,t){this.value=e,this.tag=t}};a(Wr,"Tag");var tt=Wr;q[0]=r=>new Date(r);
q[1]=r=>new Date(Math.round(r*1e3));q[2]=r=>{let e=BigInt(0);for(let t=0,n=r.byteLength;t<n;t++)e=BigInt(
r[t])+(e<<BigInt(8));return e};q[3]=r=>BigInt(-1)-q[2](r);q[4]=r=>+(r[1]+"e"+r[0]);q[5]=r=>r[1]*Math.
exp(r[0]*Math.log(2));var Nr=a((r,e)=>{r=r-57344;let t=N[r];t&&t.isShared&&((N.restoreStructures||(N.
restoreStructures=[]))[r]=t),N[r]=e,e.read=Dr(e)},"recordDefinition");q[Ru]=r=>{let e=r.length,t=r[1];
Nr(r[0],t);let n={};for(let i=2;i<e;i++){let s=t[i-2];n[pe(s)]=r[i]}return n};q[14]=r=>W?W[0].slice(
W.position0,W.position0+=r):new tt(r,14);q[15]=r=>W?W[1].slice(W.position1,W.position1+=r):new tt(r,
15);var Uu={Error,RegExp};q[27]=r=>(Uu[r[0]]||Error)(r[1],r[2]);var As=a(r=>{if(x[h++]!=132){let t=new Error(
"Packed values structure must be followed by a 4 element array");throw x.length<h&&(t.incomplete=!0),
t}let e=r();if(!e||!e.length){let t=new Error("Packed values structure must be followed by a 4 eleme\
nt array");throw t.incomplete=!0,t}return ne=ne?e.concat(ne.slice(e.length)):e,ne.prefixes=r(),ne.suffixes=
r(),r()},"packedTable");As.handlesRead=!0;q[51]=As;q[ms]=r=>{if(!ne)if(B.getShared)Qr();else return new tt(
r,ms);if(typeof r=="number")return ne[16+(r>=0?2*r:-2*r-1)];let e=new Error("No support for non-inte\
ger packed references yet");throw r===void 0&&(e.incomplete=!0),e};q[28]=r=>{de||(de=new Map,de.id=0);
let e=de.id++,t=h,n=x[h],i;n>>5==4?i=[]:i={};let s={target:i};de.set(e,s);let o=r();return s.used?(Object.
getPrototypeOf(i)!==Object.getPrototypeOf(o)&&(h=t,i=o,de.set(e,{target:i}),o=r()),Object.assign(i,o)):
(s.target=o,o)};q[28].handlesRead=!0;q[29]=r=>{let e=de.get(r);return e.used=!0,e.target};q[258]=r=>new Set(
r);(q[259]=r=>(B.mapsAsObjects&&(B.mapsAsObjects=!1,mt=!0),r())).handlesRead=!0;function Xe(r,e){return typeof r==
"string"?r+e:r instanceof Array?r.concat(e):Object.assign({},r,e)}a(Xe,"combine");function We(){if(!ne)
if(B.getShared)Qr();else throw new Error("No packed values available");return ne}a(We,"getPackedValu\
es");var Du=1399353956;kr.push((r,e)=>{if(r>=225&&r<=255)return Xe(We().prefixes[r-224],e);if(r>=28704&&
r<=32767)return Xe(We().prefixes[r-28672],e);if(r>=1879052288&&r<=2147483647)return Xe(We().prefixes[r-
1879048192],e);if(r>=216&&r<=223)return Xe(e,We().suffixes[r-216]);if(r>=27647&&r<=28671)return Xe(e,
We().suffixes[r-27639]);if(r>=1811940352&&r<=1879048191)return Xe(e,We().suffixes[r-1811939328]);if(r==
Du)return{packedValues:ne,structures:N.slice(0),version:e};if(r==55799)return e});var Ou=new Uint8Array(
new Uint16Array([1]).buffer)[0]==1,bs=[Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,typeof BigUint64Array>
"u"?{name:"BigUint64Array"}:BigUint64Array,Int8Array,Int16Array,Int32Array,typeof BigInt64Array>"u"?
{name:"BigInt64Array"}:BigInt64Array,Float32Array,Float64Array],Nu=[64,68,69,70,71,72,77,78,79,85,86];
for(let r=0;r<bs.length;r++)qu(bs[r],Nu[r]);function qu(r,e){let t="get"+r.name.slice(0,-5),n;typeof r==
"function"?n=r.BYTES_PER_ELEMENT:r=null;for(let i=0;i<2;i++){if(!i&&n==1)continue;let s=n==2?1:n==4?
2:n==8?3:0;q[i?e:e-4]=n==1||i==Ou?o=>{if(!r)throw new Error("Could not find typed array for code "+e);
return!B.copyBuffers&&(n===1||n===2&&!(o.byteOffset&1)||n===4&&!(o.byteOffset&3)||n===8&&!(o.byteOffset&
7))?new r(o.buffer,o.byteOffset,o.byteLength>>s):new r(Uint8Array.prototype.slice.call(o,0).buffer)}:
o=>{if(!r)throw new Error("Could not find typed array for code "+e);let u=new DataView(o.buffer,o.byteOffset,
o.byteLength),l=o.length>>s,c=new r(l),f=u[t];for(let y=0;y<l;y++)c[y]=f.call(u,y<<s,i);return c}}}a(
qu,"registerTypedArray");function Qu(){let r=et(),e=h+L();for(let n=2;n<r;n++){let i=et();h+=i}let t=h;
return h=e,W=[Or(et()),Or(et())],W.position0=0,W.position1=0,W.postBundlePosition=h,h=t,L()}a(Qu,"re\
adBundleExt");function et(){let r=x[h++]&31;if(r>23)switch(r){case 24:r=x[h++];break;case 25:r=X.getUint16(
h),h+=2;break;case 26:r=X.getUint32(h),h+=4;break}return r}a(et,"readJustLength");function Qr(){if(B.
getShared){let r=_s(()=>(x=null,B.getShared()))||{},e=r.structures||[];B.sharedVersion=r.version,ne=
B.sharedValues=r.packedValues,N===!0?B.structures=N=e:N.splice.apply(N,[0,e.length].concat(e))}}a(Qr,
"loadShared");function _s(r){let e=He,t=h,n=Mr,i=Vt,s=gt,o=Gt,u=Fr,l=de,c=W,f=new Uint8Array(x.slice(
0,He)),y=N,g=B,E=bt,C=r();return He=e,h=t,Mr=n,Vt=i,gt=s,Gt=o,Fr=u,de=l,W=c,x=f,bt=E,N=y,B=g,X=new DataView(
x.buffer,x.byteOffset,x.byteLength),C}a(_s,"saveState");function qr(){x=null,de=null,N=null}a(qr,"cl\
earSource");var Cs=new Array(147);for(let r=0;r<256;r++)Cs[r]=+("1e"+Math.floor(45.15-r*.30103));var jr=new Ur({
useRecords:!1}),dh=jr.decode,Is=jr.decodeMultiple;p();var Kt=class Kt{constructor(e,t){this.strings=e;this.values=t}toParameterizedQuery(e={query:"",params:[]}){
let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<n.length){let o=n[i];
if(o instanceof nt)e.query+=o.sql;else if(o instanceof Le)if(o.queryData instanceof Kt)o.queryData.toParameterizedQuery(
e);else{if(o.queryData.params?.length)throw new Error("This query is not composable");e.query+=o.queryData.
query}else{let{params:u}=e;u.push(o),e.query+="$"+u.length,(o instanceof m||ArrayBuffer.isView(o))&&
(e.query+="::bytea")}}return e}};a(Kt,"SqlTemplate");var rt=Kt,Hr=class Hr{constructor(e){this.sql=e}};
a(Hr,"UnsafeRawSql");var nt=Hr;p();function xt(){typeof window<"u"&&typeof document<"u"&&typeof console<"u"&&typeof console.warn=="func\
tion"&&console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`)}a(xt,"warnIfBrowser");Je();var fo=qe(Xt()),ho=qe(Pt());var tr=class tr extends Error{constructor(t){super(t);I(this,"name","NeonDbError");I(this,"severity");
I(this,"code");I(this,"detail");I(this,"hint");I(this,"position");I(this,"internalPosition");I(this,
"internalQuery");I(this,"where");I(this,"schema");I(this,"table");I(this,"column");I(this,"dataType");
I(this,"constraint");I(this,"file");I(this,"line");I(this,"routine");I(this,"sourceError");"captureS\
tackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,tr)}};a(
tr,"NeonDbError");var ue=tr,uo="transaction() expects an array of queries, or a function returning a\
n array of queries",Kl=["severity","code","detail","hint","position","internalPosition","internalQue\
ry","where","schema","table","column","dataType","constraint","file","line","routine"],zl={json:"app\
lication/json",jsonl:"application/vnd.neon.sql.v1+json","cbor-seq":"application/vnd.neon.sql.v1+cbor"},
Yl=0,Jl=1,Zl=2;function po(r){let e=new ue(r.message);for(let t of Kl)e[t]=r[t]??void 0;return e}a(po,
"dbError");function Fe(){throw new ue("Neon internal error: unexpected streamed response message")}a(
Fe,"unexpectedStreamingMessage");async function Xl(r,e,t){let n=e==="jsonl"?(await r.text()).split(`\

`).filter(u=>u.length!==0).map(u=>JSON.parse(u)):Is(new Uint8Array(await r.arrayBuffer())),i=n.at(-1);
if(!Array.isArray(i)||i[0]!==3&&i[0]!==4)throw new ue("Neon internal error: streamed response ended \
without a terminal message");if(i[0]===4&&i.length===2&&i[1]!==null&&typeof i[1]=="object")throw po(
i[1]);if(i[0]!==3||i.length!==1)throw new ue("Neon internal error: unexpected streamed response stat\
us");let s=[],o;for(let u of n.slice(0,-1)){Array.isArray(u)||Fe();let[l,...c]=u;switch(l){case Jl:o!==
void 0&&Fe(),o={fields:c,rows:[]};break;case Yl:(o===void 0||c.length===0)&&Fe();let f=o.row??(o.row=
[]);for(let[y,g]of c.entries()){if((f.length>=o.fields.length||Array.isArray(g)&&(g.length!==1||typeof g[0]!=
"string")||!Array.isArray(g)&&g!==null&&typeof g!="string")&&Fe(),Array.isArray(g)){(o.partialText??
(o.partialText=[])).push(g[0]);continue}g===null?(o.partialText!==void 0&&Fe(),f.push(null)):(o.partialText===
void 0?f.push(g):(o.partialText.push(g),f.push(o.partialText.join(""))),o.partialText=void 0),f.length===
o.fields.length&&(y!==c.length-1&&Fe(),o.rows.push(f),o.row=void 0)}break;case Zl:(o===void 0||o.row!==
void 0||o.partialText!==void 0||c.length!==2)&&Fe(),s.push({fields:o.fields,rows:o.rows,command:c[0],
rowCount:c[1]}),o=void 0;break;default:Fe()}}if(o!==void 0||!t&&s.length!==1)throw new ue("Neon inte\
rnal error: incomplete streamed response");return t?{results:s}:s[0]}a(Xl,"readStreamingResult");function ec(r){
return r instanceof m?"\\x"+ps(r):r}a(ec,"encodeBuffersAsBytea");function lo(r){let{query:e,params:t}=r instanceof
rt?r.toParameterizedQuery():r;return{query:e,params:t.map(n=>ec((0,ho.prepareValue)(n)))}}a(lo,"prep\
areQuery");function on(r,{arrayMode:e,fullResults:t,fetchOptions:n,responseFormat:i,isolationLevel:s,
readOnly:o,deferrable:u,authToken:l,disableWarningInBrowsers:c}={}){if(!r)throw new Error("No databa\
se connection string was provided to `neon()`. Perhaps an environment variable has not been set?");let f;
try{f=Rr(r)}catch{throw new Error("Database connection string provided to `neon()` is not a valid UR\
L. Connection string: "+String(r))}let{protocol:y,username:g,hostname:E,port:C,pathname:H}=f;if(y!==
"postgres:"&&y!=="postgresql:"||!g||!E||!H)throw new Error("Database connection string format for `n\
eon()` should be: postgresql://user@host.tld/dbname?option=value");function Y(T,...b){if(!(Array.isArray(
T)&&Array.isArray(T.raw)&&Array.isArray(b)))throw new Error('This function can now be called only as\
 a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a con\
ventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], \
options).');return new Le(we,new rt(T,b))}a(Y,"templateFn"),Y.query=(T,b,M)=>new Le(we,{query:T,params:b??
[]},M),Y.unsafe=T=>new nt(T),Y.transaction=async(T,b)=>{if(typeof T=="function"&&(T=T(Y)),!Array.isArray(
T))throw new Error(uo);T.forEach($=>{if(!($ instanceof Le))throw new Error(uo)});let M=T.map($=>$.queryData),
oe=T.map($=>$.opts??{});return we(M,oe,b)};async function we(T,b,M){let{fetchEndpoint:oe,fetchFunction:$}=be,
ge=Array.isArray(T),Ie=ge?{queries:T.map(ce=>lo(ce))}:lo(T),le=n??{},F=i??"json",J=e??!1,Ee=t??!1,Te=s,
Ue=o,De=u;M!==void 0&&(M.fetchOptions!==void 0&&(le={...le,...M.fetchOptions}),M.arrayMode!==void 0&&
(J=M.arrayMode),M.fullResults!==void 0&&(Ee=M.fullResults),M.responseFormat!==void 0&&(F=M.responseFormat),
M.isolationLevel!==void 0&&(Te=M.isolationLevel),M.readOnly!==void 0&&(Ue=M.readOnly),M.deferrable!==
void 0&&(De=M.deferrable)),b!==void 0&&!Array.isArray(b)&&b.fetchOptions!==void 0&&(le={...le,...b.fetchOptions}),
b!==void 0&&!Array.isArray(b)&&b.responseFormat!==void 0&&(F=b.responseFormat);let Oe=l;!Array.isArray(
b)&&b?.authToken!==void 0&&(Oe=b.authToken);let pr=typeof oe=="function"?oe(E,C,{jwtAuth:Oe!==void 0}):
oe,Ne={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true",Accept:zl[F]},
Re=await tc(Oe);Re&&(Ne.Authorization=`Bearer ${Re}`),ge&&(Te!==void 0&&(Ne["Neon-Batch-Isolation-Le\
vel"]=Te),Ue!==void 0&&(Ne["Neon-Batch-Read-Only"]=String(Ue)),De!==void 0&&(Ne["Neon-Batch-Deferrab\
le"]=String(De))),c||be.disableWarningInBrowsers||xt();let Z;try{Z=await($??fetch)(pr,{method:"POST",
body:JSON.stringify(Ie),headers:Ne,...le})}catch(ce){let ae=new ue(`Error connecting to database: ${ce}`);
throw ae.sourceError=ce,ae}if(Z.ok){let ce=F==="json"?await Z.json():await Xl(Z,F,ge);if(ge){let ae=ce.
results;if(!Array.isArray(ae))throw new ue("Neon internal error: unexpected result format");return ae.
map((yr,mr)=>{let wr=b[mr]??{},Aa=wr.arrayMode??J,_a=wr.fullResults??Ee;return co(yr,{arrayMode:Aa,fullResults:_a,
types:wr.types})})}else{let ae=b??{},yr=ae.arrayMode??J,mr=ae.fullResults??Ee;return co(ce,{arrayMode:yr,
fullResults:mr,types:ae.types})}}else{let{status:ce}=Z;if(ce===400){let ae=await Z.json();throw po(ae)}else{
let ae=await Z.text();throw new ue(`Server error (HTTP status ${ce}): ${ae}`)}}}return a(we,"execute"),
Y}a(on,"neon");var an=class an{constructor(e,t,n){this.execute=e;this.queryData=t;this.opts=n}then(e,t){
return this.execute(this.queryData,this.opts).then(e,t)}catch(e){return this.execute(this.queryData,
this.opts).catch(e)}finally(e){return this.execute(this.queryData,this.opts).finally(e)}};a(an,"Neon\
QueryPromise");var Le=an;function co(r,{arrayMode:e,fullResults:t,types:n}){let i=new fo.default(n),
s=r.fields.map(l=>l.name),o=r.fields.map(l=>i.getTypeParser(l.dataTypeID)),u=e===!0?r.rows.map(l=>l.
map((c,f)=>c===null?null:o[f](c))):r.rows.map(l=>Object.fromEntries(l.map((c,f)=>[s[f],c===null?null:
o[f](c)])));return t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r._parsers=o,r._types=i,r):u}a(co,"p\
rocessQueryResult");async function tc(r){if(typeof r=="string")return r;if(typeof r=="function")try{
return await Promise.resolve(r())}catch(e){let t=new ue("Error getting auth token.");throw e instanceof
Error&&(t=new ue(`Error getting auth token: ${e.message}`)),t}}a(tc,"getAuthToken");p();var va=qe(Mt());p();var Sa=qe(Mt());var Ci=class Ci extends Sa.Client{constructor(t){super(t);this.config=t}get neonConfig(){return this.
connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=
!1),this.ssl&&n.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=re\
quire in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSo\
cket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disabl\
e SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");let i=typeof this.config!=
"string"&&this.config?.host!==void 0||typeof this.config!="string"&&this.config?.connectionString!==
void 0||w.env.PGHOST!==void 0,s=w.env.USER??w.env.USERNAME;if(!i&&this.host==="localhost"&&this.user===
s&&this.database===s&&this.password===null)throw new Error(`No database host or connection string wa\
s set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null\
). Is an environment variable missing? Alternatively, if you intended to connect with these paramete\
rs, please set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&this.ssl,
l=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let c=this.connection;if(u&&c.on(
"connect",()=>c.stream.emit("data","S")),l){c.removeAllListeners("authenticationCleartextPassword"),
c.removeAllListeners("readyForQuery"),c.once("readyForQuery",()=>c.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let f=this.ssl?"sslconnect":"connect";c.on(f,()=>{this.neonConfig.disableWarningInBrowsers||
xt(),this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){
if(typeof crypto>"u"||crypto.subtle===void 0||crypto.subtle.importKey===void 0)throw new Error("Cann\
ot use SASL auth when `crypto.subtle` is not defined");let n=crypto.subtle,i=this.saslSession,s=this.
password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="string"||typeof o!="string")throw new Error(
"SASL: protocol error");let u=Object.fromEntries(o.split(",").map(Re=>{if(!/^.=/.test(Re))throw new Error(
"SASL: Invalid attribute pair entry");let Z=Re[0],ce=Re.substring(2);return[Z,ce]})),l=u.r,c=u.s,f=u.
i;if(!l||!/^[!-+--~]+$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unp\
rintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(c))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.test(f))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!l.startsWith(i.clientNonce))
throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");if(l.
length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too\
 short");let y=parseInt(f,10),g=m.from(c,"base64"),E=new TextEncoder,C=E.encode(s),H=await n.importKey(
"raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Y=new Uint8Array(await n.sign("HMAC",H,m.concat(
[g,m.from([0,0,0,1])]))),we=Y;for(var T=0;T<y-1;T++)Y=new Uint8Array(await n.sign("HMAC",H,Y)),we=m.
from(we.map((Re,Z)=>we[Z]^Y[Z]));let b=we,M=await n.importKey("raw",b,{name:"HMAC",hash:{name:"SHA-2\
56"}},!1,["sign"]),oe=new Uint8Array(await n.sign("HMAC",M,E.encode("Client Key"))),$=await n.digest(
"SHA-256",oe),ge="n=*,r="+i.clientNonce,Ie="r="+l+",s="+c+",i="+y,le="c=biws,r="+l,F=ge+","+Ie+","+le,
J=await n.importKey("raw",$,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var Ee=new Uint8Array(await n.
sign("HMAC",J,E.encode(F))),Te=m.from(oe.map((Re,Z)=>oe[Z]^Ee[Z])),Ue=Te.toString("base64");let De=await n.
importKey("raw",b,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Oe=await n.sign("HMAC",De,E.encode(
"Server Key")),pr=await n.importKey("raw",Oe,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var Ne=m.
from(await n.sign("HMAC",pr,E.encode(F)));i.message="SASLResponse",i.serverSignature=Ne.toString("ba\
se64"),i.response=le+",p="+Ue,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
a(Ci,"NeonClient");var ht=Ci;Je();var Ea=qe(sr());function Wf(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(Wf,"promisify");var Ii=class Ii extends va.Pool{constructor(){
super(...arguments);I(this,"Client",ht);I(this,"hasFetchUnsupportedListeners",!1);I(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!be.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=Wf(this.Promise,i);i=s.callback;try{let o=new Ea.default(
this.options),u=encodeURIComponent,l=encodeURI,c=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${l(o.database)}`,f=typeof t=="string"?t:t.text,y=n??t.values??[];on(c,{fullResults:!0,arrayMode:t.
rowMode==="array"}).query(f,y,{types:t.types??this.options?.types}).then(E=>i(void 0,E)).catch(E=>i(
E))}catch(o){i(o)}return s.result}};a(Ii,"NeonPool");var dr=Ii;Je();var ve=qe(Mt()),Hf="js";
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
