"use strict";var mo=Object.create;var Ce=Object.defineProperty;var go=Object.getOwnPropertyDescriptor;var wo=Object.getOwnPropertyNames;var bo=Object.getPrototypeOf,vo=Object.prototype.hasOwnProperty;var So=(r,e,t)=>e in r?Ce(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>Ce(r,"name",{value:e,configurable:!0});var K=(r,e)=>()=>(r&&(e=r(r=0)),e);var T=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ee=(r,e)=>{for(var t in e)Ce(r,t,{get:e[t],
enumerable:!0})},Ln=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of wo(e))!vo.
call(r,i)&&i!==t&&Ce(r,i,{get:()=>e[i],enumerable:!(n=go(e,i))||n.enumerable});return r};var Se=(r,e,t)=>(t=r!=null?mo(bo(r)):{},Ln(e||!r||!r.__esModule?Ce(t,"default",{value:r,enumerable:!0}):
t,r)),D=r=>Ln(Ce({},"__esModule",{value:!0}),r);var E=(r,e,t)=>So(r,typeof e!="symbol"?e+"":e,t);var kn=T(ut=>{"use strict";p();ut.byteLength=Eo;ut.toByteArray=_o;ut.fromByteArray=To;var ue=[],te=[],
xo=typeof Uint8Array<"u"?Uint8Array:Array,Ut="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(xe=0,Fn=Ut.length;xe<Fn;++xe)ue[xe]=Ut[xe],te[Ut.charCodeAt(xe)]=xe;var xe,Fn;te[45]=
62;te[95]=63;function Mn(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Mn,"getLens");
function Eo(r){var e=Mn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(Eo,"byteLength");function Ao(r,e,t){return(e+
t)*3/4-t}a(Ao,"_byteLength");function _o(r){var e,t=Mn(r),n=t[0],i=t[1],s=new xo(Ao(r,n,i)),o=0,u=i>
0?n-4:n,c;for(c=0;c<u;c+=4)e=te[r.charCodeAt(c)]<<18|te[r.charCodeAt(c+1)]<<12|te[r.charCodeAt(c+2)]<<
6|te[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=te[r.charCodeAt(
c)]<<2|te[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=te[r.charCodeAt(c)]<<10|te[r.charCodeAt(c+1)]<<
4|te[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(_o,"toByteArray");function Co(r){return ue[r>>
18&63]+ue[r>>12&63]+ue[r>>6&63]+ue[r&63]}a(Co,"tripletToBase64");function Io(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Co(n));return i.join("")}a(Io,"en\
codeChunk");function To(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(Io(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(ue[e>>2]+ue[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(ue[e>>10]+ue[e>>4&63]+ue[e<<2&63]+"=")),i.join("")}a(To,"fromByteArray")});var Un=T(Dt=>{p();Dt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,l=c>>1,f=-7,d=t?i-1:0,g=t?
-1:1,A=r[e+d];for(d+=g,s=A&(1<<-f)-1,A>>=-f,f+=u;f>0;s=s*256+r[e+d],d+=g,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+d],d+=g,f-=8);if(s===0)s=1-l;else{if(s===c)return o?NaN:(A?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-l}return(A?-1:1)*o*Math.pow(2,s-n)};Dt.write=function(r,e,t,n,i,s){var o,u,c,l=s*8-i-1,
f=(1<<l)-1,d=f>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=n?0:s-1,_=n?1:-1,N=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=
Math.pow(2,-o))<1&&(o--,c*=2),o+d>=1?e+=g/c:e+=g*Math.pow(2,1-d),e*c>=2&&(o++,c/=2),o+d>=f?(u=0,o=f):
o+d>=1?(u=(e*c-1)*Math.pow(2,i),o=o+d):(u=e*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;r[t+A]=u&255,A+=
_,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;r[t+A]=o&255,A+=_,o/=256,l-=8);r[t+A-_]|=N*128}});var Xn=T(Re=>{"use strict";p();var Ot=kn(),Te=Un(),Dn=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;Re.Buffer=h;Re.SlowBuffer=Mo;Re.INSPECT_MAX_BYTES=
50;var ct=2147483647;Re.kMaxLength=ct;h.TYPED_ARRAY_SUPPORT=Po();!h.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Po(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(Po,"typedArraySupport");Object.
defineProperty(h.prototype,"parent",{enumerable:!0,get:a(function(){if(h.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:a(function(){if(h.isBuffer(
this))return this.byteOffset},"get")});function pe(r){if(r>ct)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,h.prototype),
e}a(pe,"createBuffer");function h(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return jt(r)}return qn(r,e,t)}
a(h,"Buffer");h.poolSize=8192;function qn(r,e,t){if(typeof r=="string")return Bo(r,e);if(ArrayBuffer.
isView(r))return Lo(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ce(r,ArrayBuffer)||
r&&ce(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ce(r,SharedArrayBuffer)||r&&ce(r.buffer,
SharedArrayBuffer)))return Nt(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return h.
from(n,e,t);let i=Fo(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return h.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a(qn,"from");h.from=function(r,e,t){return qn(r,e,t)};Object.setPrototypeOf(h.prototype,
Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function jn(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(jn,"assertSize");function Ro(r,e,t){return jn(r),r<=0?pe(r):e!==void 0?typeof t==
"string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}a(Ro,"alloc");h.alloc=function(r,e,t){return Ro(r,e,t)};
function jt(r){return jn(r),pe(r<0?0:Wt(r)|0)}a(jt,"allocUnsafe");h.allocUnsafe=function(r){return jt(
r)};h.allocUnsafeSlow=function(r){return jt(r)};function Bo(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Wn(r,e)|0,n=pe(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a(Bo,"fromString");function Qt(r){let e=r.length<0?0:Wt(r.length)|
0,t=pe(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(Qt,"fromArrayLike");function Lo(r){if(ce(r,Uint8Array)){
let e=new Uint8Array(r);return Nt(e.buffer,e.byteOffset,e.byteLength)}return Qt(r)}a(Lo,"fromArrayVi\
ew");function Nt(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,h.prototype),n}a(Nt,"fromArrayBuffer");function Fo(r){if(h.isBuffer(r)){
let e=Wt(r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Gt(r.length)?pe(0):Qt(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Qt(r.data)}
a(Fo,"fromObject");function Wt(r){if(r>=ct)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+ct.toString(16)+" bytes");return r|0}a(Wt,"checked");function Mo(r){return+r!=
r&&(r=0),h.alloc(+r)}a(Mo,"SlowBuffer");h.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
h.prototype},"isBuffer");h.compare=a(function(e,t){if(ce(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),
ce(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError(
'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,
i=t.length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?
1:0},"compare");h.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"\
utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"\
utf-16le":return!0;default:return!1}},"isEncoding");h.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError(
'"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);let n;if(t===void 0)
for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=h.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];
if(ce(o,Uint8Array))s+o.length>i.length?(h.isBuffer(o)||(o=h.from(o)),o.copy(i,s)):Uint8Array.prototype.
set.call(i,o,s);else if(h.isBuffer(o))o.copy(i,s);else throw new TypeError('"list" argument must be \
an Array of Buffers');s+=o.length}return i},"concat");function Wn(r,e){if(h.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||ce(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return qt(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Jn(r).length;default:
if(i)return n?-1:qt(r).length;e=(""+e).toLowerCase(),i=!0}}a(Wn,"byteLength");h.byteLength=Wn;function ko(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Go(this,e,t);case"u\
tf8":case"utf-8":return Gn(this,e,t);case"ascii":return Wo(this,e,t);case"latin1":case"binary":return Ho(
this,e,t);case"base64":return qo(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $o(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(ko,
"slowToString");h.prototype._isBuffer=!0;function Ee(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(Ee,"swap");
h.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ee(this,t,t+1);return this},"swap16");h.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this},"swap32");h.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this},
"swap64");h.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Gn(
this,0,e):ko.apply(this,arguments)},"toString");h.prototype.toLocaleString=h.prototype.toString;h.prototype.
equals=a(function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:h.compare(this,e)===0},"equals");h.prototype.inspect=a(function(){let e="",t=Re.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");Dn&&(h.prototype[Dn]=h.prototype.inspect);h.prototype.compare=a(function(e,t,n,i,s){
if(ce(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,c=Math.min(o,u),l=this.slice(
i,s),f=e.slice(t,n);for(let d=0;d<c;++d)if(l[d]!==f[d]){o=l[d],u=f[d];break}return o<u?-1:u<o?1:0},"\
compare");function Hn(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Gt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=h.from(
e,n)),h.isBuffer(e))return e.length===0?-1:On(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):On(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(Hn,"bidire\
ctionalIndexOf");function On(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function c(f,d){return s===1?f[d]:f.readUInt16BE(d*s)}a(c,"read");let l;if(i){let f=-1;for(l=
t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===u)return f*s}else f!==-1&&(l-=l-f),
f=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let f=!0;for(let d=0;d<u;d++)if(c(r,l+d)!==c(e,d)){f=!1;break}
if(f)return l}return-1}a(On,"arrayIndexOf");h.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");h.prototype.indexOf=a(function(e,t,n){return Hn(this,e,t,n,!0)},"indexOf");
h.prototype.lastIndexOf=a(function(e,t,n){return Hn(this,e,t,n,!1)},"lastIndexOf");function Uo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Gt(u))return o;r[t+o]=u}return o}a(Uo,"hexWrite");function Do(r,e,t,n){
return lt(qt(e,r.length-t),r,t,n)}a(Do,"utf8Write");function Oo(r,e,t,n){return lt(Yo(e),r,t,n)}a(Oo,
"asciiWrite");function Qo(r,e,t,n){return lt(Jn(e),r,t,n)}a(Qo,"base64Write");function No(r,e,t,n){return lt(
Zo(e,r.length-t),r,t,n)}a(No,"ucs2Write");h.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Uo(this,e,t,n);case"utf8":case"\
utf-8":return Do(this,e,t,n);case"ascii":case"latin1":case"binary":return Oo(this,e,t,n);case"base64":
return Qo(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return No(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");h.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function qo(r,e,t){return e===0&&t===r.length?Ot.fromByteArray(r):Ot.fromByteArray(r.slice(e,t))}
a(qo,"base64Slice");function Gn(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let c,l,f,d;switch(u){case 1:s<128&&(o=s);break;case 2:c=r[i+
1],(c&192)===128&&(d=(s&31)<<6|c&63,d>127&&(o=d));break;case 3:c=r[i+1],l=r[i+2],(c&192)===128&&(l&192)===
128&&(d=(s&15)<<12|(c&63)<<6|l&63,d>2047&&(d<55296||d>57343)&&(o=d));break;case 4:c=r[i+1],l=r[i+2],
f=r[i+3],(c&192)===128&&(l&192)===128&&(f&192)===128&&(d=(s&15)<<18|(c&63)<<12|(l&63)<<6|f&63,d>65535&&
d<1114112&&(o=d))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return jo(n)}a(Gn,"utf8Slice");var Qn=4096;function jo(r){let e=r.length;if(e<=Qn)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
Qn));return t}a(jo,"decodeCodePointsArray");function Wo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Wo,"asciiSlice");function Ho(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(Ho,"latin1Slice");function Go(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Jo[r[s]];return i}
a(Go,"hexSlice");function $o(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a($o,"utf16leSlice");h.prototype.slice=a(function(e,t){let n=this.
length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<
e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,h.prototype),i},"slice");function O(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to \
access beyond buffer length")}a(O,"checkOffset");h.prototype.readUintLE=h.prototype.readUIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||O(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},
"readUIntLE");h.prototype.readUintBE=h.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,
t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"readUIntBE");h.
prototype.readUint8=h.prototype.readUInt8=a(function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]},
"readUInt8");h.prototype.readUint16LE=h.prototype.readUInt16LE=a(function(e,t){return e=e>>>0,t||O(e,
2,this.length),this[e]|this[e+1]<<8},"readUInt16LE");h.prototype.readUint16BE=h.prototype.readUInt16BE=
a(function(e,t){return e=e>>>0,t||O(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");h.prototype.
readUint32LE=h.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),(this[e]|
this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");h.prototype.readUint32BE=h.prototype.
readUInt32BE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+
2]<<8|this[e+3])},"readUInt32BE");h.prototype.readBigUInt64LE=ge(a(function(e){e=e>>>0,Pe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));h.prototype.readBigUInt64BE=ge(a(function(e){e=e>>>0,Pe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let i=t*2**24+this[++e]*2**16+
this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(
32))+BigInt(s)},"readBigUInt64BE"));h.prototype.readIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,t,
this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.
pow(2,8*t)),i},"readIntLE");h.prototype.readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,t,this.length);
let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*
t)),o},"readIntBE");h.prototype.readInt8=a(function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]&
128?(255-this[e]+1)*-1:this[e]},"readInt8");h.prototype.readInt16LE=a(function(e,t){e=e>>>0,t||O(e,2,
this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");h.prototype.readInt16BE=
a(function(e,t){e=e>>>0,t||O(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:
n},"readInt16BE");h.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]|
this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");h.prototype.readInt32BE=a(function(e,t){return e=
e>>>0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");h.prototype.
readBigInt64LE=ge(a(function(e){e=e>>>0,Pe(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
He(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));h.prototype.readBigInt64BE=
ge(a(function(e){e=e>>>0,Pe(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.
length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));h.prototype.readFloatLE=a(function(e,t){
return e=e>>>0,t||O(e,4,this.length),Te.read(this,e,!0,23,4)},"readFloatLE");h.prototype.readFloatBE=
a(function(e,t){return e=e>>>0,t||O(e,4,this.length),Te.read(this,e,!1,23,4)},"readFloatBE");h.prototype.
readDoubleLE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Te.read(this,e,!0,52,8)},"readDoub\
leLE");h.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Te.read(this,e,
!1,52,8)},"readDoubleBE");function z(r,e,t,n,i,s){if(!h.isBuffer(r))throw new TypeError('"buffer" ar\
gument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of boun\
ds');if(t+n>r.length)throw new RangeError("Index out of range")}a(z,"checkInt");h.prototype.writeUintLE=
h.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;z(this,
e,t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");
h.prototype.writeUintBE=h.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;z(this,e,t,n,u,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;
return t+n},"writeUIntBE");h.prototype.writeUint8=h.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||z(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");h.prototype.writeUint16LE=h.prototype.
writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=
e>>>8,t+2},"writeUInt16LE");h.prototype.writeUint16BE=h.prototype.writeUInt16BE=a(function(e,t,n){return e=
+e,t=t>>>0,n||z(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");h.prototype.
writeUint32LE=h.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,4,4294967295,
0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");h.prototype.
writeUint32BE=h.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,4,4294967295,
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function $n(r,e,t,n,i){
Zn(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a($n,"wrtBigUInt64LE");function Vn(r,e,t,n,i){Zn(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Vn,"wrtBigUInt64BE");h.prototype.
writeBigUInt64LE=ge(a(function(e,t=0){return $n(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));h.prototype.writeBigUInt64BE=ge(a(function(e,t=0){return Vn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64BE"));h.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let c=Math.pow(2,8*n-1);z(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntLE");h.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);z(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;
for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+
n},"writeIntBE");h.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,1,127,-128),
e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");h.prototype.writeInt16LE=a(function(e,t,n){return e=
+e,t=t>>>0,n||z(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");h.prototype.
writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+
1]=e&255,t+2},"writeInt16BE");h.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,
e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"\
writeInt32LE");h.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,4,2147483647,
-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,
t+4},"writeInt32BE");h.prototype.writeBigInt64LE=ge(a(function(e,t=0){return $n(this,e,t,-BigInt("0x\
8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));h.prototype.writeBigInt64BE=ge(
a(function(e,t=0){return Vn(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"w\
riteBigInt64BE"));function Kn(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range")}a(Kn,"checkIEEE754");function zn(r,e,t,n,i){return e=
+e,t=t>>>0,i||Kn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Te.write(r,e,t,n,23,4),t+4}a(zn,
"writeFloat");h.prototype.writeFloatLE=a(function(e,t,n){return zn(this,e,t,!0,n)},"writeFloatLE");h.
prototype.writeFloatBE=a(function(e,t,n){return zn(this,e,t,!1,n)},"writeFloatBE");function Yn(r,e,t,n,i){
return e=+e,t=t>>>0,i||Kn(r,e,t,8,17976931348623157e292,-17976931348623157e292),Te.write(r,e,t,n,52,
8),t+8}a(Yn,"writeDouble");h.prototype.writeDoubleLE=a(function(e,t,n){return Yn(this,e,t,!0,n)},"wr\
iteDoubleLE");h.prototype.writeDoubleBE=a(function(e,t,n){return Yn(this,e,t,!1,n)},"writeDoubleBE");
h.prototype.copy=a(function(e,t,n,i){if(!h.isBuffer(e))throw new TypeError("argument should be a Buf\
fer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<
0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd \
out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===
e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");h.prototype.fill=a(function(e,t,n,i){if(typeof e=="string"){
if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!=
"string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!h.isEncoding(i))throw new TypeError(
"Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=
o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<
n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>
0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)this[s]=e;else{let o=h.isBuffer(e)?e:h.from(e,
i),u=o.length;if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Ie={};function Ht(r,e,t){var n;Ie[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(Ht,"E");Ht("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Ht(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);Ht("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Nn(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Nn(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function Nn(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(Nn,"addNumericalSeparator");function Vo(r,e,t){
Pe(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&He(e,r.length-(t+1))}a(Vo,"checkBounds");function Zn(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Ie.ERR_OUT_OF_RANGE("value",u,r)}Vo(n,i,s)}a(Zn,"checkIntBI");function Pe(r,e){if(typeof r!=
"number")throw new Ie.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Pe,"validateNumber");function He(r,e,t){throw Math.
floor(r)!==r?(Pe(r,t),new Ie.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ie.ERR_BUFFER_OUT_OF_BOUNDS:
new Ie.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(He,"boundsError");var Ko=/[^+/0-9A-Za-z-_]/g;
function zo(r){if(r=r.split("=")[0],r=r.trim().replace(Ko,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(zo,"base64clean");function qt(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(qt,"utf\
8ToBytes");function Yo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
Yo,"asciiToBytes");function Zo(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(Zo,"utf16leToBytes");function Jn(r){return Ot.toByteArray(
zo(r))}a(Jn,"base64ToBytes");function lt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(lt,"blitBuffer");function ce(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(ce,"isInstance");function Gt(r){return r!==
r}a(Gt,"numberIsNaN");var Jo=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function ge(r){return typeof BigInt>"u"?
Xo:r}a(ge,"defineBigIntMethod");function Xo(){throw new Error("BigInt not supported")}a(Xo,"BufferBi\
gIntNotDefined")});var w,b,v,y,m,p=K(()=>{"use strict";w=globalThis,b=globalThis.setImmediate??(r=>setTimeout(r,0)),v=globalThis.
clearImmediate??(r=>clearTimeout(r)),y=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.
allocUnsafe=="function"?globalThis.Buffer:Xn().Buffer,m=globalThis.process??{};m.env??(m.env={});try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var we=T((Il,$t)=>{"use strict";p();var Be=typeof Reflect=="object"?Reflect:null,ei=Be&&typeof Be.apply==
"function"?Be.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),ft;
Be&&typeof Be.ownKeys=="function"?ft=Be.ownKeys:Object.getOwnPropertySymbols?ft=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):ft=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function ea(r){console&&console.warn&&console.warn(r)}a(ea,
"ProcessEmitWarning");var ri=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function R(){R.
init.call(this)}a(R,"EventEmitter");$t.exports=R;$t.exports.once=ia;R.EventEmitter=R;R.prototype._events=
void 0;R.prototype._eventsCount=0;R.prototype._maxListeners=void 0;var ti=10;function ht(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(ht,"checkListener");Object.defineProperty(R,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return ti},"get"),set:a(function(r){if(typeof r!="number"||r<0||ri(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");ti=r},
"set")});R.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
R.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||ri(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function ni(r){return r._maxListeners===void 0?R.defaultMaxListeners:r._maxListeners}
a(ni,"_getMaxListeners");R.prototype.getMaxListeners=a(function(){return ni(this)},"getMaxListeners");
R.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")ei(c,this,t);else for(var l=c.
length,f=ui(c,l),n=0;n<l;++n)ei(f[n],this,t);return!0},"emit");function ii(r,e,t,n){var i,s,o;if(ht(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=ni(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,ea(u)}return r}a(ii,"_addListener");R.prototype.addListener=a(function(e,t){
return ii(this,e,t,!1)},"addListener");R.prototype.on=R.prototype.addListener;R.prototype.prependListener=
a(function(e,t){return ii(this,e,t,!0)},"prependListener");function ta(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(ta,"onceWrapper");function si(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=ta.bind(n);return i.listener=t,n.wrapFn=i,i}a(si,"_onceW\
rap");R.prototype.once=a(function(e,t){return ht(t),this.on(e,si(this,e,t)),this},"once");R.prototype.
prependOnceListener=a(function(e,t){return ht(t),this.prependListener(e,si(this,e,t)),this},"prepend\
OnceListener");R.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(ht(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():ra(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");R.prototype.off=R.prototype.
removeListener;R.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function oi(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
na(i):ui(i,i.length)}a(oi,"_listeners");R.prototype.listeners=a(function(e){return oi(this,e,!0)},"l\
isteners");R.prototype.rawListeners=a(function(e){return oi(this,e,!1)},"rawListeners");R.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):ai.call(r,e)};R.prototype.
listenerCount=ai;function ai(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(ai,"listenerCount");R.prototype.eventNames=a(function(){
return this._eventsCount>0?ft(this._events):[]},"eventNames");function ui(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(ui,"arrayClone");function ra(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(ra,"spliceOne");function na(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(na,"unwrapListeners");function ia(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),ci(r,e,s,{once:!0}),e!=="error"&&
sa(r,i,{once:!0})})}a(ia,"once");function sa(r,e,t){typeof r.on=="function"&&ci(r,"error",e,t)}a(sa,
"addErrorHandlerIfEventEmitter");function ci(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(ci,"eventTargetAgnosticAddListener")});var hi={};ee(hi,{Socket:()=>de,isIP:()=>oa});function oa(r){return 0}var fi,li,x,de,Ge=K(()=>{"use s\
trict";p();fi=Se(we(),1);a(oa,"isIP");li=/^[^.]+\./,x=class x extends fi.EventEmitter{constructor(){
super(...arguments);E(this,"opts",{});E(this,"connecting",!1);E(this,"pending",!0);E(this,"writable",
!0);E(this,"encrypted",!1);E(this,"authorized",!1);E(this,"destroyed",!1);E(this,"ws",null);E(this,"\
writeBuffer");E(this,"tlsState",0);E(this,"tlsRead");E(this,"tlsWrite")}static get poolQueryViaFetch(){
return x.opts.poolQueryViaFetch??x.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){x.opts.
poolQueryViaFetch=t}static get fetchEndpoint(){return x.opts.fetchEndpoint??x.defaults.fetchEndpoint}static set fetchEndpoint(t){
x.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)")}static get fetchFunction(){
return x.opts.fetchFunction??x.defaults.fetchFunction}static set fetchFunction(t){x.opts.fetchFunction=
t}static get webSocketConstructor(){return x.opts.webSocketConstructor??x.defaults.webSocketConstructor}static set webSocketConstructor(t){
x.opts.webSocketConstructor=t}get webSocketConstructor(){return this.opts.webSocketConstructor??x.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return x.opts.wsProxy??x.defaults.wsProxy}static set wsProxy(t){
x.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??x.wsProxy}set wsProxy(t){this.opts.wsProxy=
t}static get coalesceWrites(){return x.opts.coalesceWrites??x.defaults.coalesceWrites}static set coalesceWrites(t){
x.opts.coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??x.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return x.opts.useSecureWebSocket??x.defaults.
useSecureWebSocket}static set useSecureWebSocket(t){x.opts.useSecureWebSocket=t}get useSecureWebSocket(){
return this.opts.useSecureWebSocket??x.useSecureWebSocket}set useSecureWebSocket(t){this.opts.useSecureWebSocket=
t}static get forceDisablePgSSL(){return x.opts.forceDisablePgSSL??x.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){
x.opts.forceDisablePgSSL=t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??x.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return x.opts.disableSNI??x.defaults.disableSNI}static set disableSNI(t){
x.opts.disableSNI=t}get disableSNI(){return this.opts.disableSNI??x.disableSNI}set disableSNI(t){this.
opts.disableSNI=t}static get pipelineConnect(){return x.opts.pipelineConnect??x.defaults.pipelineConnect}static set pipelineConnect(t){
x.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??x.pipelineConnect}set pipelineConnect(t){
this.opts.pipelineConnect=t}static get subtls(){return x.opts.subtls??x.defaults.subtls}static set subtls(t){
x.opts.subtls=t}get subtls(){return this.opts.subtls??x.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return x.opts.pipelineTLS??x.defaults.pipelineTLS}static set pipelineTLS(t){x.opts.pipelineTLS=t}get pipelineTLS(){
return this.opts.pipelineTLS??x.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){
return x.opts.rootCerts??x.defaults.rootCerts}static set rootCerts(t){x.opts.rootCerts=t}get rootCerts(){
return this.opts.rootCerts??x.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https\
://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--s\
tring--string");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("co\
nnect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),this.emit("ready")},"\
handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuffer",c.addEventListener("error",f=>{this.
emit("error",f),this.emit("close")}),c.addEventListener("message",f=>{if(this.tlsState===0){let d=y.
from(f.data);this.emit("data",d)}}),c.addEventListener("close",()=>{this.emit("close")}),l?s():c.addEventListener(
"open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="string"?parseInt(t,10):
t)}catch(c){this.emit("error",c),this.emit("close");return}try{let l=(this.useSecureWebSocket?"wss:":
"ws:")+"//"+u;if(this.webSocketConstructor!==void 0)this.ws=new this.webSocketConstructor(l),o(this.
ws);else try{this.ws=new WebSocket(l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){
let f=(this.useSecureWebSocket?"https:":"http:")+"//"+u;fetch(f,{headers:{Upgrade:"websocket"}}).then(
d=>{if(this.ws=d.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,!0)}).catch(d=>{this.emit(
"error",new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer \
to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websoc\
ket--undefined. Details: ${d}`)),this.emit("close")})}}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://g\
ithub.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");this.tlsState=1;let n=await this.
subtls.TrustedCert.databaseFromPEM(this.rootCerts),i=new this.subtls.WebSocketReadQueue(this.ws),s=i.
read.bind(i),o=this.rawWrite.bind(this),{read:u,write:c}=await this.subtls.startTls(t,n,s,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=
c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=y.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===void 0)this.writeBuffer=t,setTimeout(
()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.
length+t.length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="\
utf8",i=s=>{}){return t.length===0?(i(),!0):(typeof t=="string"&&(t=y.from(t,n)),this.tlsState===0?(this.
rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(t,n,i)}):(this.tlsWrite(
t),i()),!0)}end(t=y.alloc(0),n="utf8",i=()=>{}){return this.write(t,n,()=>{this.ws.close(),i()}),this}destroy(){
return this.destroyed=!0,this.end()}};a(x,"Socket"),E(x,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a(
(t,n,i)=>{let s;return i?.jwtAuth?s=t.replace(li,"apiauth."):s=t.replace(li,"api."),"https://"+s+"/s\
ql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,wsProxy:a(
t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,pipelineConnect:"\
password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),E(x,"opts",{});de=x});var pi={};ee(pi,{parse:()=>Vt});function Vt(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:l,search:f,searchParams:d,hash:g}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),l=decodeURIComponent(l);let A=i+":"+s,_=e?Object.
fromEntries(d.entries()):f;return{href:r,protocol:t,auth:A,username:i,password:s,host:o,hostname:u,port:c,
pathname:l,search:f,query:_,hash:g}}var Kt=K(()=>{"use strict";p();a(Vt,"parse")});function Ve(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
c=1541459225,l=0,f=0,d=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a((C,S)=>C>>>S|C<<32-
S,"rrot"),A=new Uint32Array(64),_=new Uint8Array(64),N=a(()=>{for(let B=0,G=0;B<16;B++,G+=4)A[B]=_[G]<<
24|_[G+1]<<16|_[G+2]<<8|_[G+3];for(let B=16;B<64;B++){let G=g(A[B-15],7)^g(A[B-15],18)^A[B-15]>>>3,fe=g(
A[B-2],17)^g(A[B-2],19)^A[B-2]>>>10;A[B]=A[B-16]+G+A[B-7]+fe|0}let C=e,S=t,H=n,le=i,q=s,ie=o,se=u,oe=c;
for(let B=0;B<64;B++){let G=g(q,6)^g(q,11)^g(q,25),fe=q&ie^~q&se,Ae=oe+G+fe+d[B]+A[B]|0,he=g(C,2)^g(
C,13)^g(C,22),_e=C&S^C&H^S&H,ae=he+_e|0;oe=se,se=ie,ie=q,q=le+Ae|0,le=H,H=S,S=C,C=Ae+ae|0}e=e+C|0,t=
t+S|0,n=n+H|0,i=i+le|0,s=s+q|0,o=o+ie|0,u=u+se|0,c=c+oe|0,f=0},"process"),P=a(C=>{typeof C=="string"&&
(C=new TextEncoder().encode(C));for(let S=0;S<C.length;S++)_[f++]=C[S],f===64&&N();l+=C.length},"add"),
L=a(()=>{if(_[f++]=128,f==64&&N(),f+8>64){for(;f<64;)_[f++]=0;N()}for(;f<58;)_[f++]=0;let C=l*8;_[f++]=
C/1099511627776&255,_[f++]=C/4294967296&255,_[f++]=C>>>24,_[f++]=C>>>16&255,_[f++]=C>>>8&255,_[f++]=
C&255,N();let S=new Uint8Array(32);return S[0]=e>>>24,S[1]=e>>>16&255,S[2]=e>>>8&255,S[3]=e&255,S[4]=
t>>>24,S[5]=t>>>16&255,S[6]=t>>>8&255,S[7]=t&255,S[8]=n>>>24,S[9]=n>>>16&255,S[10]=n>>>8&255,S[11]=n&
255,S[12]=i>>>24,S[13]=i>>>16&255,S[14]=i>>>8&255,S[15]=i&255,S[16]=s>>>24,S[17]=s>>>16&255,S[18]=s>>>
8&255,S[19]=s&255,S[20]=o>>>24,S[21]=o>>>16&255,S[22]=o>>>8&255,S[23]=o&255,S[24]=u>>>24,S[25]=u>>>16&
255,S[26]=u>>>8&255,S[27]=u&255,S[28]=c>>>24,S[29]=c>>>16&255,S[30]=c>>>8&255,S[31]=c&255,S},"digest");
return r===void 0?{add:P,digest:L}:(P(r),L())}var bi=K(()=>{"use strict";p();a(Ve,"sha256")});var U,Ke,vi=K(()=>{"use strict";p();U=class U{constructor(){E(this,"_dataLength",0);E(this,"_bufferL\
ength",0);E(this,"_state",new Int32Array(4));E(this,"_buffer",new ArrayBuffer(68));E(this,"_buffer8");
E(this,"_buffer32");this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this.
_buffer,0,17),this.start()}static hashByteArray(e,t=!1){return this.onePassHasher.start().appendByteArray(
e).end(t)}static hashStr(e,t=!1){return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=U.hexChars,n=U.hexOut,
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
0,this._bufferLength=0,this._state.set(U.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),s<128)t[i++]=s;else if(s<
2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|
128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error(
"Unicode standard supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=
s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,U._md5cycle(this._state,n),i-=64,n[0]=n[16])}
return this._bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,
s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=
64,U._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this._buffer8,
n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e[o++];
if(i<64)break;this._dataLength+=64,U._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}getState(){
let e=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this.
_bufferLength,length:this._dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,
i=this._state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],
i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,n=this.
_buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=
n[t+2]=n[t+3]=0,i.set(U.buffer32Identity.subarray(s),s),t>55&&(U._md5cycle(this._state,i),i.set(U.buffer32Identity)),
o<=4294967295)i[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;i[14]=c,i[15]=l}return U._md5cycle(this._state,i),e?this._state:U._hex(
this._state)}};a(U,"Md5"),E(U,"stateIdentity",new Int32Array([1732584193,-271733879,-1732584194,271733878])),
E(U,"buffer32Identity",new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),E(U,"hexChars","0123456789\
abcdef"),E(U,"hexOut",[]),E(U,"onePassHasher",new U);Ke=U});var Yt={};ee(Yt,{createHash:()=>va,createHmac:()=>Sa,randomBytes:()=>ba});function ba(r){return crypto.
getRandomValues(y.alloc(r))}function va(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return y.from(Ve(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?Ke.hashStr(e):Ke.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function Sa(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=Ve(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(Ve(o),64),y.from(Ve(u))},
"digest")}},"update")}}var Zt=K(()=>{"use strict";p();bi();vi();a(ba,"randomBytes");a(va,"createHash");
a(Sa,"createHmac")});var Xt=T(Si=>{"use strict";p();Si.parse=function(r,e){return new Jt(r,e).parse()};var mt=class mt{constructor(e,t){
this.source=e,this.transform=t||xa,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
return this.position>=this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){this.recorded.push(
e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),
t!==null&&(t=this.transform(t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.
consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.
dimension>1&&(n=new mt(this.source.substr(this.position-1),this.transform),this.entries.push(n.parse(
!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(!0),i=!i):t.value===
","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==0)throw new Error("array dimension \
not balanced");return this.entries}};a(mt,"ArrayParser");var Jt=mt;function xa(r){return r}a(xa,"ide\
ntity")});var er=T((Yl,xi)=>{p();var Ea=Xt();xi.exports={create:a(function(r,e){return{parse:a(function(){return Ea.
parse(r,e)},"parse")}},"create")}});var _i=T((Xl,Ai)=>{"use strict";p();var Aa=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
_a=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Ca=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Ia=/^-?infinity$/;Ai.
exports=a(function(e){if(Ia.test(e))return Number(e.replace("i","I"));var t=Aa.exec(e);if(!t)return Ta(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Ei(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var d,g=Pa(e);return g!=null?
(d=new Date(Date.UTC(i,s,o,u,c,l,f)),tr(i)&&d.setUTCFullYear(i),g!==0&&d.setTime(d.getTime()-g)):(d=
new Date(i,s,o,u,c,l,f),tr(i)&&d.setFullYear(i)),d},"parseDate");function Ta(r){var e=_a.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Ei(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return tr(
t)&&o.setFullYear(t),o}}a(Ta,"getDate");function Pa(r){if(r.endsWith("+00"))return 0;var e=Ca.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(Pa,"timeZoneOffset");function Ei(r){return-(r-
1)}a(Ei,"bcYearToNegativeYear");function tr(r){return r>=0&&r<100}a(tr,"is0To99")});var Ii=T((rf,Ci)=>{p();Ci.exports=Ba;var Ra=Object.prototype.hasOwnProperty;function Ba(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)Ra.call(t,n)&&(r[n]=t[n])}return r}a(Ba,"ext\
end")});var Ri=T((of,Pi)=>{"use strict";p();var La=Ii();Pi.exports=Le;function Le(r){if(!(this instanceof Le))
return new Le(r);La(this,Ha(r))}a(Le,"PostgresInterval");var Fa=["seconds","minutes","hours","days",
"months","years"];Le.prototype.toPostgres=function(){var r=Fa.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Ma={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},ka=["years","months","days"],Ua=["hours","minutes","seconds"];Le.prototype.toISOString=Le.prototype.
toISO=function(){var r=ka.map(t,this).join(""),e=Ua.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+Ma[n]}};var rr="([+-]?\\d+)",Da=rr+"\\s+years?",Oa=rr+"\\s+mons?",Qa=rr+"\\s+days?",Na="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",qa=new RegExp([Da,Oa,Qa,Na].map(function(r){return"\
("+r+")?"}).join("\\s*")),Ti={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
ja=["hours","minutes","seconds","milliseconds"];function Wa(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Wa,"parseMilliseconds");function Ha(r){if(!r)return{};var e=qa.exec(r),t=e[8]==="-";return Object.
keys(Ti).reduce(function(n,i){var s=Ti[i],o=e[s];return!o||(o=i==="milliseconds"?Wa(o):parseInt(o,10),
!o)||(t&&~ja.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a(Ha,"parse")});var Li=T((cf,Bi)=>{"use strict";p();Bi.exports=a(function(e){if(/^\\x/.test(e))return new y(e.substr(
2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.substr(n+
1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&e[n+i]===
"\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return new y(t,"binary")},"\
parseBytea")});var Qi=T((hf,Oi)=>{p();var ze=Xt(),Ye=er(),gt=_i(),Mi=Ri(),ki=Li();function wt(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(wt,"allowNull");function Ui(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Ui,"parseBool");function Ga(r){return r?
ze.parse(r,Ui):null}a(Ga,"parseBoolArray");function $a(r){return parseInt(r,10)}a($a,"parseBaseTenIn\
t");function nr(r){return r?ze.parse(r,wt($a)):null}a(nr,"parseIntegerArray");function Va(r){return r?
ze.parse(r,wt(function(e){return Di(e).trim()})):null}a(Va,"parseBigIntegerArray");var Ka=a(function(r){
if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=ar(t)),t});return e.parse()},"pa\
rsePointArray"),ir=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),re=a(function(r){if(!r)return null;var e=Ye.
create(r);return e.parse()},"parseStringArray"),sr=a(function(r){if(!r)return null;var e=Ye.create(r,
function(t){return t!==null&&(t=gt(t)),t});return e.parse()},"parseDateArray"),za=a(function(r){if(!r)
return null;var e=Ye.create(r,function(t){return t!==null&&(t=Mi(t)),t});return e.parse()},"parseInt\
ervalArray"),Ya=a(function(r){return r?ze.parse(r,wt(ki)):null},"parseByteAArray"),or=a(function(r){
return parseInt(r,10)},"parseInteger"),Di=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),Fi=a(function(r){return r?ze.parse(r,wt(JSON.parse)):null},"parseJsonArray"),ar=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),Za=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=ar(e);return s.radius=parseFloat(t),s},"parseCircle"),Ja=a(function(r){r(20,Di),r(21,or),
r(23,or),r(26,or),r(700,parseFloat),r(701,parseFloat),r(16,Ui),r(1082,gt),r(1114,gt),r(1184,gt),r(600,
ar),r(651,re),r(718,Za),r(1e3,Ga),r(1001,Ya),r(1005,nr),r(1007,nr),r(1028,nr),r(1016,Va),r(1017,Ka),
r(1021,ir),r(1022,ir),r(1231,ir),r(1014,re),r(1015,re),r(1008,re),r(1009,re),r(1040,re),r(1041,re),r(
1115,sr),r(1182,sr),r(1185,sr),r(1186,Mi),r(1187,za),r(17,ki),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,Fi),r(3807,Fi),r(3907,re),r(2951,re),r(791,re),r(1183,re),r(1270,re)},"init");
Oi.exports={init:Ja}});var qi=T((yf,Ni)=>{"use strict";p();var Y=1e6;function Xa(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,c,l,f;{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+
t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}
{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.
length,f=0;f<l;f++)c+="0";i=c+u+i}{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&
e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}return s=e%Y,o=4294967296*s+t,u=
""+o%Y,n+u+i}a(Xa,"readInt8");Ni.exports=Xa});var $i=T((wf,Gi)=>{p();var eu=qi(),F=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(A,_,N){return A*
Math.pow(2,N)+_};var s=t>>3,o=a(function(A){return n?~A&255:A},"inv"),u=255,c=8-t%8;e<c&&(u=255<<8-e&
255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&u,c));for(var f=e+t>>3,d=s+1;d<f;d++)l=i(l,o(
r[d]),8);var g=(e+t)%8;return g>0&&(l=i(l,o(r[f])>>8-g,g)),l},"parseBits"),Hi=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=F(r,1),s=F(r,t,1);if(s===0)return 0;var o=1,u=a(function(l,f,d){l===0&&(l=1);for(var g=1;g<=
d;g++)o/=2,(f&1<<d-g)>0&&(l+=o);return l},"parsePrecisionBits"),c=F(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),tu=a(function(r){
return F(r,1)==1?-1*(F(r,15,1,!0)+1):F(r,15,1)},"parseInt16"),ji=a(function(r){return F(r,1)==1?-1*(F(
r,31,1,!0)+1):F(r,31,1)},"parseInt32"),ru=a(function(r){return Hi(r,23,8)},"parseFloat32"),nu=a(function(r){
return Hi(r,52,11)},"parseFloat64"),iu=a(function(r){var e=F(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,F(r,16,16)),n=0,i=[],s=F(r,16),o=0;o<s;o++)n+=F(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,F(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Wi=a(function(r,e){var t=F(e,1),n=F(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Ze=a(function(r){for(var e=F(
r,32),t=F(r,32,32),n=F(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=F(r,32,i),i+=32,i+=32;var u=a(function(l){
var f=F(r,32,i);if(i+=32,f==4294967295)return null;var d;if(l==23||l==20)return d=F(r,f*8,i),i+=f*8,
d;if(l==25)return d=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),d;console.log("ERROR: ElementType no\
t implemented: "+l)},"parseElement"),c=a(function(l,f){var d=[],g;if(l.length>1){var A=l.shift();for(g=
0;g<A;g++)d[g]=c(l,f);l.unshift(A)}else for(g=0;g<l[0];g++)d[g]=u(f);return d},"parse");return c(s,n)},
"parseArray"),su=a(function(r){return r.toString("utf8")},"parseText"),ou=a(function(r){return r===null?
null:F(r,8)>0},"parseBool"),au=a(function(r){r(20,eu),r(21,tu),r(23,ji),r(26,ji),r(1700,iu),r(700,ru),
r(701,nu),r(16,ou),r(1114,Wi.bind(null,!1)),r(1184,Wi.bind(null,!0)),r(1e3,Ze),r(1007,Ze),r(1016,Ze),
r(1008,Ze),r(1009,Ze),r(25,su)},"init");Gi.exports={init:au}});var Ki=T((Sf,Vi)=>{p();Vi.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var et=T(Xe=>{p();var uu=Qi(),cu=$i(),lu=er(),fu=Ki();Xe.getTypeParser=hu;Xe.setTypeParser=pu;Xe.arrayParser=
lu;Xe.builtins=fu;var Je={text:{},binary:{}};function zi(r){return String(r)}a(zi,"noParse");function hu(r,e){
return e=e||"text",Je[e]&&Je[e][r]||zi}a(hu,"getTypeParser");function pu(r,e,t){typeof e=="function"&&
(t=e,e="text"),Je[e][r]=t}a(pu,"setTypeParser");uu.init(function(r,e){Je.text[r]=e});cu.init(function(r,e){
Je.binary[r]=e})});var tt=T((Cf,ur)=>{"use strict";p();ur.exports={host:"localhost",user:m.platform==="win32"?m.env.USERNAME:
m.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var Fe=et(),du=Fe.getTypeParser(20,"text"),yu=Fe.getTypeParser(1016,
"text");ur.exports.__defineSetter__("parseInt8",function(r){Fe.setTypeParser(20,"text",r?Fe.getTypeParser(
23,"text"):du),Fe.setTypeParser(1016,"text",r?Fe.getTypeParser(1007,"text"):yu)})});var rt=T((Tf,Zi)=>{"use strict";p();var mu=(Zt(),D(Yt)),gu=tt();function wu(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(wu,"escapeElement");function Yi(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Yi(r[t]):
r[t]instanceof y?e+="\\\\x"+r[t].toString("hex"):e+=wu(bt(r[t]));return e=e+"}",e}a(Yi,"arrayString");
var bt=a(function(r,e){if(r==null)return null;if(r instanceof y)return r;if(ArrayBuffer.isView(r)){var t=y.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?gu.parseInputDatesAsUTC?Su(r):vu(r):Array.isArray(r)?Yi(r):typeof r==
"object"?bu(r,e):r.toString()},"prepareValue");function bu(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),bt(r.toPostgres(bt),e)}return JSON.stringify(r)}a(bu,"prepareObject");function W(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(W,"pad");function vu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=W(t,4)+"-"+W(r.getMonth()+1,2)+"-"+W(r.getDate(),2)+"T"+W(r.getHours(),
2)+":"+W(r.getMinutes(),2)+":"+W(r.getSeconds(),2)+"."+W(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=W(Math.floor(e/60),2)+":"+W(e%60,2),n&&(i+=" BC"),i}a(vu,"dateToString");function Su(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=W(e,4)+"-"+W(r.getUTCMonth()+1,2)+"-"+W(r.
getUTCDate(),2)+"T"+W(r.getUTCHours(),2)+":"+W(r.getUTCMinutes(),2)+":"+W(r.getUTCSeconds(),2)+"."+W(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Su,"dateToStringUTC");function xu(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(xu,"normalizeQueryConfig");var cr=a(function(r){return mu.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Eu=a(function(r,e,t){var n=cr(e+r),i=cr(y.concat([y.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");Zi.exports={prepareValue:a(function(e){return bt(e)},"prepareValueWrapper"),
normalizeQueryConfig:xu,postgresMd5PasswordHash:Eu,md5:cr}});var St=T((Bf,Ji)=>{"use strict";p();var Au=et();function vt(r){this._types=r||Au,this.text={},this.binary=
{}}a(vt,"TypeOverrides");vt.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};vt.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};vt.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Ji.exports=vt});var nt={};ee(nt,{default:()=>Tu});var Tu,it=K(()=>{"use strict";p();Tu={}});var us=T((qf,as)=>{"use strict";p();var fr=(Zt(),D(Yt));function Pu(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=fr.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a(Pu,"startSession");function Ru(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=Fu(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=y.from(n.salt,"base64"),s=Uu(e,i,n.iteration),o=ke(s,"Client Key"),u=ku(
o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,d=c+
","+l+","+f,g=ke(u,d),A=os(o,g),_=A.toString("base64"),N=ke(s,"Server Key"),P=ke(N,d);r.message="SAS\
LResponse",r.serverSignature=P.toString("base64"),r.response=f+",p="+_}a(Ru,"continueSession");function Bu(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Mu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(Bu,"finalizeSession");function Lu(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(Lu,"isPrintableChars");function is(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(is,"isBase64");function ss(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(ss,"parseAttribute\
Pairs");function Fu(r){let e=ss(r),t=e.get("r");if(t){if(!Lu(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!is(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(Fu,"parseServerFirstMessage");
function Mu(r){let t=ss(r).get("v");if(t){if(!is(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a(Mu,"parseServerFinalMessage");function os(r,e){if(!y.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!y.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return y.from(r.map((t,n)=>r[n]^e[n]))}
a(os,"xorBuffers");function ku(r){return fr.createHash("sha256").update(r).digest()}a(ku,"sha256");function ke(r,e){
return fr.createHmac("sha256",r).update(e).digest()}a(ke,"hmacSha256");function Uu(r,e,t){for(var n=ke(
r,y.concat([e,y.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=ke(r,n),i=os(i,n);return i}a(Uu,"Hi");as.exports=
{startSession:Pu,continueSession:Ru,finalizeSession:Bu}});var hr={};ee(hr,{join:()=>Du});function Du(...r){return r.join("/")}var pr=K(()=>{"use strict";p();a(
Du,"join")});var dr={};ee(dr,{stat:()=>Ou});function Ou(r,e){e(new Error("No filesystem"))}var yr=K(()=>{"use str\
ict";p();a(Ou,"stat")});var mr={};ee(mr,{default:()=>Qu});var Qu,gr=K(()=>{"use strict";p();Qu={}});var cs={};ee(cs,{StringDecoder:()=>wr});var br,wr,ls=K(()=>{"use strict";p();br=class br{constructor(e){
E(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(br,"StringDecoder");wr=br});var ds=T((Zf,ps)=>{"use strict";p();var{Transform:Nu}=(gr(),D(mr)),{StringDecoder:qu}=(ls(),D(cs)),be=Symbol(
"last"),At=Symbol("decoder");function ju(r,e,t){let n;if(this.overflow){if(n=this[At].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[be]+=this[At].write(r),n=
this[be].split(this.matcher);this[be]=n.pop();for(let i=0;i<n.length;i++)try{hs(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[be].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(ju,"transform");function Wu(r){if(this[be]+=this[At].end(),this[be])
try{hs(this,this.mapper(this[be]))}catch(e){return r(e)}r()}a(Wu,"flush");function hs(r,e){e!==void 0&&
r.push(e)}a(hs,"push");function fs(r){return r}a(fs,"noop");function Hu(r,e,t){switch(r=r||/\r?\n/,e=
e||fs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=fs)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=ju,t.flush=Wu,t.readableObjectMode=
!0;let n=new Nu(t);return n[be]="",n[At]=new qu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(Hu,"split");ps.exports=Hu});var gs=T((eh,me)=>{"use strict";p();var ys=(pr(),D(hr)),Gu=(gr(),D(mr)).Stream,$u=ds(),ms=(it(),D(nt)),
Vu=5432,_t=m.platform==="win32",st=m.stderr,Ku=56,zu=7,Yu=61440,Zu=32768;function Ju(r){return(r&Yu)==
Zu}a(Ju,"isRegFile");var Ue=["host","port","database","user","password"],vr=Ue.length,Xu=Ue[vr-1];function Sr(){
var r=st instanceof Gu&&st.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);st.write(ms.format.apply(ms,e))}}a(Sr,"warn");Object.defineProperty(me.exports,"isWin",{get:a(function(){
return _t},"get"),set:a(function(r){_t=r},"set")});me.exports.warnTo=function(r){var e=st;return st=
r,e};me.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||(_t?ys.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):ys.join(e.HOME||"./",".pgpass"));return t};me.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(m.env,"PGPASSWORD")?!1:_t?!0:(e=e||"<unkn>",Ju(r.mode)?r.
mode&(Ku|zu)?(Sr('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(Sr('WARNING: password file "%s" is not a plain file',e),!1))};var ec=me.exports.
match=function(r,e){return Ue.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||Vu)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};me.exports.getPassword=function(r,e,t){var n,i=e.pipe(
$u());function s(c){var l=tc(c);l&&rc(l)&&ec(r,l)&&(n=l[Xu],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),Sr("WARNING: error on reading file: %s",c),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var tc=me.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(
function(f,d,g){var A=r.substring(d,g);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(A=A.
replace(/\\([:\\])/g,"$1")),o[Ue[f]]=A},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==vr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).
length===vr?o:null,o},rc=me.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<Ue.length;t+=1){var n=e[t],i=r[Ue[t]]||"",s=n(i);if(!s)return!1}return!0}});var bs=T((ih,xr)=>{"use strict";p();var nh=(pr(),D(hr)),ws=(yr(),D(dr)),Ct=gs();xr.exports=function(r,e){
var t=Ct.getFileName();ws.stat(t,function(n,i){if(n||!Ct.usePgPass(i,t))return e(void 0);var s=ws.createReadStream(
t);Ct.getPassword(r,s,e)})};xr.exports.warnTo=Ct.warnTo});var vs={};ee(vs,{default:()=>nc});var nc,Ss=K(()=>{"use strict";p();nc={}});var Es=T((ah,xs)=>{"use strict";p();var ic=(Kt(),D(pi)),Er=(yr(),D(dr));function Ar(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=ic.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)?encodeURI(r).replace(/\%25(\d\d)/g,"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&
(t[n]=t[n][t[n].length-1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(
":"),t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=e.query.db,t.
client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.pathname;if(!t.host&&s&&/^%2f/i.
test(s)){var o=s.split("/");t.host=decodeURIComponent(o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(
0)==="/"&&(s=s.slice(1)||null),t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),
t.ssl==="0"&&(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&(t.ssl.
cert=Er.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=Er.readFileSync(t.sslkey).toString()),
t.sslrootcert&&(t.ssl.ca=Er.readFileSync(t.sslrootcert).toString()),t.sslmode){case"disable":{t.ssl=
!1;break}case"prefer":case"require":case"verify-ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=
!1;break}}return t}a(Ar,"parse");xs.exports=Ar;Ar.parse=Ar});var It=T((lh,Cs)=>{"use strict";p();var sc=(Ss(),D(vs)),_s=tt(),As=Es().parse,$=a(function(r,e,t){return t===
void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),e[r]||t||_s[r]},"val"),oc=a(function(){switch(m.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return _s.ssl},"readSSLConfigFromEnvironment"),De=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),ne=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+De(n))},"add"),Cr=class Cr{constructor(e){e=typeof e=="string"?As(e):
e||{},e.connectionString&&(e=Object.assign({},e,As(e.connectionString))),this.user=$("user",e),this.
database=$("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt($("por\
t",e),10),this.host=$("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:$("password",e)}),this.binary=$("binary",e),this.options=$("options",e),this.ssl=typeof e.
ssl>"u"?oc():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&
(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this.client_encoding=$("client_encoding",e),this.replication=$("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=$("application_name",e,"PGAPPNAME"),this.fallback_application_name=
$("fallback_application_name",e,!1),this.statement_timeout=$("statement_timeout",e,!1),this.lock_timeout=
$("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=$("idle_in_transaction_session_timeo\
ut",e,!1),this.query_timeout=$("query_timeout",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=
m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===
!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="nu\
mber"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];ne(t,this,"user"),ne(t,this,"password"),ne(t,this,"port"),ne(t,this,"application_name"),ne(
t,this,"fallback_application_name"),ne(t,this,"connect_timeout"),ne(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(ne(t,n,"sslmode"),ne(t,n,"sslca"),ne(t,n,"s\
slkey"),ne(t,n,"sslcert"),ne(t,n,"sslrootcert"),this.database&&t.push("dbname="+De(this.database)),this.
replication&&t.push("replication="+De(this.replication)),this.host&&t.push("host="+De(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+De(this.client_encoding)),
sc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+De(s)),e(null,t.join(" ")))})}};
a(Cr,"ConnectionParameters");var _r=Cr;Cs.exports=_r});var Ps=T((ph,Ts)=>{"use strict";p();var ac=et(),Is=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,Tr=class Tr{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Is.exec(e.text):t=Is.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=ac.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(Tr,"Result");var Ir=Tr;Ts.exports=Ir});var Fs=T((mh,Ls)=>{"use strict";p();var{EventEmitter:uc}=we(),Rs=Ps(),Bs=rt(),Rr=class Rr extends uc{constructor(e,t,n){
super(),e=Bs.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),this._result=
new Rs(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new Rs(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.callback||!this.
listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){try{t=this._result.parseRow(
e.fields)}catch(n){this._canceledDueToError=n;return}this.emit("row",t,this._result),this._accumulateRows&&
this._result.addRow(t)}}handleCommandComplete(e,t){this._checkForMultirow(),this._result.addCommandComplete(
e),this.rows&&t.sync()}handleEmptyQuery(e){this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&
(e=this._canceledDueToError,this._canceledDueToError=!1),this.callback)return this.callback(e);this.
emit("error",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(this._canceledDueToError,
e);if(this.callback)try{this.callback(null,this._results)}catch(t){m.nextTick(()=>{throw t})}this.emit(
"end",this._results)}submit(e){if(typeof this.text!="string"&&typeof this.name!="string")return new Error(
"A query must have either text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be unique - '${this.name}\
' was used for a different statement`):this.values&&!Array.isArray(this.values)?new Error("Query val\
ues must be an array"):(this.requiresPreparation()?this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){
return this.name&&e.parsedStatements[this.name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){
e.execute({portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=!0,this.
hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});try{e.bind({portal:this.
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:Bs.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Rr,"Query");var Pr=Rr;Ls.exports=
Pr});var on=T(I=>{"use strict";p();Object.defineProperty(I,"__esModule",{value:!0});I.NoticeMessage=I.DataRowMessage=
I.CommandCompleteMessage=I.ReadyForQueryMessage=I.NotificationResponseMessage=I.BackendKeyDataMessage=
I.AuthenticationMD5Password=I.ParameterStatusMessage=I.ParameterDescriptionMessage=I.RowDescriptionMessage=
I.Field=I.CopyResponse=I.CopyDataMessage=I.DatabaseError=I.copyDone=I.emptyQuery=I.replicationStart=
I.portalSuspended=I.noData=I.closeComplete=I.bindComplete=I.parseComplete=void 0;I.parseComplete={name:"\
parseComplete",length:5};I.bindComplete={name:"bindComplete",length:5};I.closeComplete={name:"closeC\
omplete",length:5};I.noData={name:"noData",length:5};I.portalSuspended={name:"portalSuspended",length:5};
I.replicationStart={name:"replicationStart",length:4};I.emptyQuery={name:"emptyQuery",length:4};I.copyDone=
{name:"copyDone",length:4};var Gr=class Gr extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(Gr,"DatabaseError");var Br=Gr;I.DatabaseError=Br;var $r=class $r{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a($r,"CopyDataMessage");var Lr=$r;I.CopyDataMessage=Lr;var Vr=class Vr{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(Vr,"CopyResponse");var Fr=Vr;
I.CopyResponse=Fr;var Kr=class Kr{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a(Kr,"Field");var Mr=Kr;
I.Field=Mr;var zr=class zr{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(zr,"RowDescriptionMessage");var kr=zr;I.RowDescriptionMessage=
kr;var Yr=class Yr{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(Yr,"ParameterDescriptionMessage");var Ur=Yr;
I.ParameterDescriptionMessage=Ur;var Zr=class Zr{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(Zr,"ParameterStatusMessage");var Dr=Zr;I.ParameterStatusMessage=
Dr;var Jr=class Jr{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(Jr,"AuthenticationMD5Password");var Or=Jr;I.AuthenticationMD5Password=Or;var Xr=class Xr{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Xr,"BackendKeyDataMes\
sage");var Qr=Xr;I.BackendKeyDataMessage=Qr;var en=class en{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(en,"NotificationResponseMessa\
ge");var Nr=en;I.NotificationResponseMessage=Nr;var tn=class tn{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(tn,"ReadyForQueryMessage");var qr=tn;I.ReadyForQueryMessage=qr;
var rn=class rn{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(rn,"Comma\
ndCompleteMessage");var jr=rn;I.CommandCompleteMessage=jr;var nn=class nn{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(nn,"DataRowMessage");var Wr=nn;I.DataRowMessage=
Wr;var sn=class sn{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(sn,"NoticeMe\
ssage");var Hr=sn;I.NoticeMessage=Hr});var Ms=T(Tt=>{"use strict";p();Object.defineProperty(Tt,"__esModule",{value:!0});Tt.Writer=void 0;var un=class un{constructor(e=256){
this.size=e,this.offset=5,this.headerPosition=0,this.buffer=y.allocUnsafe(e)}ensure(e){var t=this.buffer.
length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=y.allocUnsafe(i),
n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=e>>>24&255,this.buffer[this.
offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){
return this.ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=y.byteLength(e);this.ensure(t+1),this.buffer.write(e,this.offset,"ut\
f-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){var t=y.byteLength(e);
return this.ensure(t),this.buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(
e.length),e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+
1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.offset=5,this.
headerPosition=0,this.buffer=y.allocUnsafe(this.size),t}};a(un,"Writer");var an=un;Tt.Writer=an});var Us=T(Rt=>{"use strict";p();Object.defineProperty(Rt,"__esModule",{value:!0});Rt.serialize=void 0;
var cn=Ms(),M=new cn.Writer,cc=a(r=>{M.addInt16(3).addInt16(0);for(let n of Object.keys(r))M.addCString(
n).addCString(r[n]);M.addCString("client_encoding").addCString("UTF8");var e=M.addCString("").flush(),
t=e.length+4;return new cn.Writer().addInt32(t).add(e).flush()},"startup"),lc=a(()=>{let r=y.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),fc=a(r=>M.addCString(r).flush(
112),"password"),hc=a(function(r,e){return M.addCString(r).addInt32(y.byteLength(e)).addString(e),M.
flush(112)},"sendSASLInitialResponseMessage"),pc=a(function(r){return M.addString(r).flush(112)},"se\
ndSCRAMClientFinalMessage"),dc=a(r=>M.addCString(r).flush(81),"query"),ks=[],yc=a(r=>{let e=r.name||
"";e.length>63&&(console.error("Warning! Postgres only supports 63 characters for query names."),console.
error("You supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors e\
xecuting queries"));let t=r.types||ks;for(var n=t.length,i=M.addCString(e).addCString(r.text).addInt16(
n),s=0;s<n;s++)i.addInt32(t[s]);return M.flush(80)},"parse"),Oe=new cn.Writer,mc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(M.addInt16(0),Oe.addInt32(-1)):n instanceof y?(M.addInt16(
1),Oe.addInt32(n.length),Oe.add(n)):(M.addInt16(0),Oe.addInt32(y.byteLength(n)),Oe.addString(n))}},"\
writeValues"),gc=a((r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||ks,s=i.length;
return M.addCString(e).addCString(t),M.addInt16(s),mc(i,r.valueMapper),M.addInt16(s),M.add(Oe.flush()),
M.addInt16(n?1:0),M.flush(66)},"bind"),wc=y.from([69,0,0,0,9,0,0,0,0,0]),bc=a(r=>{if(!r||!r.portal&&
!r.rows)return wc;let e=r.portal||"",t=r.rows||0,n=y.byteLength(e),i=4+n+1+4,s=y.allocUnsafe(1+i);return s[0]=
69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.writeUInt32BE(t,s.length-4),s},"execute"),vc=a(
(r,e)=>{let t=y.allocUnsafe(16);return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,
6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"cancel"),ln=a((r,e)=>{let n=4+y.byteLength(e)+1,i=y.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),
Sc=M.addCString("P").flush(68),xc=M.addCString("S").flush(68),Ec=a(r=>r.name?ln(68,`${r.type}${r.name||
""}`):r.type==="P"?Sc:xc,"describe"),Ac=a(r=>{let e=`${r.type}${r.name||""}`;return ln(67,e)},"close"),
_c=a(r=>M.add(r).flush(100),"copyData"),Cc=a(r=>ln(102,r),"copyFail"),Pt=a(r=>y.from([r,0,0,0,4]),"c\
odeOnlyBuffer"),Ic=Pt(72),Tc=Pt(83),Pc=Pt(88),Rc=Pt(99),Bc={startup:cc,password:fc,requestSsl:lc,sendSASLInitialResponseMessage:hc,
sendSCRAMClientFinalMessage:pc,query:dc,parse:yc,bind:gc,execute:bc,describe:Ec,close:Ac,flush:a(()=>Ic,
"flush"),sync:a(()=>Tc,"sync"),end:a(()=>Pc,"end"),copyData:_c,copyDone:a(()=>Rc,"copyDone"),copyFail:Cc,
cancel:vc};Rt.serialize=Bc});var Ds=T(Bt=>{"use strict";p();Object.defineProperty(Bt,"__esModule",{value:!0});Bt.BufferReader=void 0;
var Lc=y.allocUnsafe(0),hn=class hn{constructor(e=0){this.offset=e,this.buffer=Lc,this.encoding="utf\
-8"}setBuffer(e,t){this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(hn,"BufferReader");var fn=hn;Bt.BufferReader=fn});var Ns=T(Lt=>{"use strict";p();Object.defineProperty(Lt,"__esModule",{value:!0});Lt.Parser=void 0;var k=on(),
Fc=Ds(),pn=1,Mc=4,Os=pn+Mc,Qs=y.allocUnsafe(0),yn=class yn{constructor(e){if(this.buffer=Qs,this.bufferLength=
0,this.bufferOffset=0,this.reader=new Fc.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+
this.bufferLength,i=this.bufferOffset;for(;i+Os<=n;){let s=this.buffer[i],o=this.buffer.readUInt32BE(
i+pn),u=pn+o;if(u+i<=n){let c=this.handlePacket(i+Os,s,o,this.buffer);t(c),i+=u}else break}i===n?(this.
buffer=Qs,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){
let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.buffer;else{let s=this.
buffer.byteLength*2;for(;t>=s;)s*=2;i=y.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+
this.bufferLength),this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return k.bindComplete;case 49:return k.parseComplete;case 51:return k.closeComplete;case 110:
return k.noData;case 115:return k.portalSuspended;case 99:return k.copyDone;case 87:return k.replicationStart;case 73:
return k.emptyQuery;case 68:return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.parseNotificationMessage(
e,n,i);case 82:return this.parseAuthenticationResponse(e,n,i);case 83:return this.parseParameterStatusMessage(
e,n,i);case 75:return this.parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"e\
rror");case 78:return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.parseCopyInMessage(
e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:return this.parseCopyData(e,n,i);default:
return new k.DatabaseError("received invalid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.string(1);return new k.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new k.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){
let i=n.slice(e,e+(t-4));return new k.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(
e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==0,o=this.reader.
int16(),u=new k.CopyResponse(t,i,s,o);for(let c=0;c<o;c++)u.columnTypes[c]=this.reader.int16();return u}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();
return new k.NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new k.RowDescriptionMessage(t,i);for(let o=0;o<i;o++)s.fields[o]=this.
parseField();return s}parseField(){let e=this.reader.cstring(),t=this.reader.uint32(),n=this.reader.
int16(),i=this.reader.uint32(),s=this.reader.int16(),o=this.reader.int32(),u=this.reader.int16()===0?
"text":"binary";return new k.Field(e,t,n,i,s,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new k.ParameterDescriptionMessage(t,i);for(let o=0;o<i;o++)
s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){let u=this.reader.int32();s[o]=u===-1?
null:this.reader.string(u)}return new k.DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.cstring(),s=this.reader.cstring();return new k.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.
int32();return new k.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:break;case 3:s.
length===8&&(s.name="authenticationCleartextPassword");break;case 5:if(s.length===12){s.name="authen\
ticationMD5Password";let u=this.reader.bytes(4);return new k.AuthenticationMD5Password(t,u)}break;case 10:
s.name="authenticationSASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);break;case 12:s.name=
"authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:throw new Error("Unknown auth\
enticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(e,n);let s={},
o=this.reader.string(1);for(;o!=="\0";)s[o]=this.reader.cstring(),o=this.reader.string(1);let u=s.M,
c=i==="notice"?new k.NoticeMessage(t,u):new k.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,
c.detail=s.D,c.hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.schema=
s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.line=s.L,c.routine=s.R,c}};
a(yn,"Parser");var dn=yn;Lt.Parser=dn});var mn=T(ve=>{"use strict";p();Object.defineProperty(ve,"__esModule",{value:!0});ve.DatabaseError=ve.
serialize=ve.parse=void 0;var kc=on();Object.defineProperty(ve,"DatabaseError",{enumerable:!0,get:a(
function(){return kc.DatabaseError},"get")});var Uc=Us();Object.defineProperty(ve,"serialize",{enumerable:!0,
get:a(function(){return Uc.serialize},"get")});var Dc=Ns();function Oc(r,e){let t=new Dc.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(Oc,"parse");ve.parse=Oc});var qs={};ee(qs,{connect:()=>Qc});function Qc({socket:r,servername:e}){return r.startTls(e),r}var js=K(
()=>{"use strict";p();a(Qc,"connect")});var bn=T((Qh,Gs)=>{"use strict";p();var Ws=(Ge(),D(hi)),Nc=we().EventEmitter,{parse:qc,serialize:Q}=mn(),
Hs=Q.flush(),jc=Q.sync(),Wc=Q.end(),wn=class wn extends Nc{constructor(e){super(),e=e||{},this.stream=
e.stream||new Ws.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(js(),D(qs));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=
n.ssl.key)),Ws.isIP(t)===0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",
l)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),qc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(Q.requestSsl())}startup(e){this.
stream.write(Q.startup(e))}cancel(e,t){this._send(Q.cancel(e,t))}password(e){this._send(Q.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(Q.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(Q.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(Q.query(e))}parse(e){
this._send(Q.parse(e))}bind(e){this._send(Q.bind(e))}execute(e){this._send(Q.execute(e))}flush(){this.
stream.writable&&this.stream.write(Hs)}sync(){this._ending=!0,this._send(Hs),this._send(jc)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(Wc,()=>{this.stream.end()})}close(e){this._send(Q.
close(e))}describe(e){this._send(Q.describe(e))}sendCopyFromChunk(e){this._send(Q.copyData(e))}endCopyFrom(){
this._send(Q.copyDone())}sendCopyFail(e){this._send(Q.copyFail(e))}};a(wn,"Connection");var gn=wn;Gs.
exports=gn});var Ks=T((Wh,Vs)=>{"use strict";p();var Hc=we().EventEmitter,jh=(it(),D(nt)),Gc=rt(),vn=us(),$c=bs(),
Vc=St(),Kc=It(),$s=Fs(),zc=tt(),Yc=bn(),Sn=class Sn extends Hc{constructor(e){super(),this.connectionParameters=
new Kc(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||w.Promise,
this._types=new Vc(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new Yc({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||zc.binary,this.
processID=null,this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.key&&
Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=t.connectionTimeoutMillis||
0}_errorAllQueries(e){let t=a(n=>{m.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");
this.activeQuery&&(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse a client.");m.nextTick(
()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&
(this.connectionTimeoutHandle=setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expir\
ed"))},this._connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.\
s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),this._attachListeners(
n),n.once("end",()=>{let i=this._ending?new Error("Connection terminated"):new Error("Connection ter\
minated unexpectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(i),this._ending||
(this._connecting&&!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),m.nextTick(()=>{this.emit("en\
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
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():$c(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=Gc.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=vn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){vn.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){vn.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
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
!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);e&&m.nextTick(()=>{this.activeQuery.
handleError(e,this.connection),this.readyForQuery=!0,this._pulseQueryQueue()})}else this.hasExecuted&&
(this.activeQuery=null,this.emit("drain"))}query(e,t,n){var i,s,o,u,c;if(e==null)throw new TypeError(
"Client was passed a null or undefined query");return typeof e.submit=="function"?(o=e.query_timeout||
this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&(i.callback=i.callback||t)):(o=this.
connectionParameters.query_timeout,i=new $s(e,t,n),i.callback||(s=new this._Promise((l,f)=>{i.callback=
(d,g)=>d?f(d):l(g)}))),o&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");m.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var f=this.queryQueue.indexOf(i);f>-1&&
this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=(l,f)=>{clearTimeout(u),c(l,f)}),
this.binary&&!i.binary&&(i.binary=!0),i._result&&!i._result._types&&(i._result._types=this._types),this.
_queryable?this._ending?(m.nextTick(()=>{i.handleError(new Error("Client was closed and is not query\
able"),this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(m.nextTick(()=>{i.
handleError(new Error("Client has encountered a connection error and is not queryable"),this.connection)}),
s)}ref(){this.connection.ref()}unref(){this.connection.unref()}end(e){if(this._ending=!0,!this.connection.
_connecting)if(e)e();else return this._Promise.resolve();if(this.activeQuery||!this._queryable?this.
connection.stream.destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(Sn,"Client");var Ft=Sn;Ft.Query=$s;Vs.exports=Ft});var Js=T(($h,Zs)=>{"use strict";p();var Zc=we().EventEmitter,zs=a(function(){},"NOOP"),Ys=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),An=class An{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(An,"IdleItem");var xn=An,_n=class _n{constructor(e){
this.callback=e}};a(_n,"PendingItem");var Qe=_n;function Jc(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(Jc,"throwOnDoubleRelease");function Mt(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(Mt,"promisify");
function Xc(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(Xc,"makeIdleListener");var Cn=class Cn extends Zc{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||!1,this.
options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},
this.Client=this.options.Client||t||ot().Client,this.Promise=this.options.Promise||w.Promise,typeof this.
options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this.
_expired=new WeakSet,this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&
this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());
return}if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this.
_isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}
if(!this._isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e){let t=Ys(
this._idle,n=>n.client===e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(
n=>n!==e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a poo\
l after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=Mt(this.Promise,e),n=t.
result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(()=>this._pulseQueue()),
!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new Qe(t.callback)),n;let i=a((u,c,l)=>{
clearTimeout(o),t.callback(u,c,l)},"queueCallback"),s=new Qe(i),o=setTimeout(()=>{Ys(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},this.
options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.newClient(new Qe(t.
callback)),n}newClient(e){let t=new this.Client(this.options);this._clients.push(t);let n=Xc(this,t);
this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{
this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},this.
options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(o=>{if(i&&clearTimeout(
i),t.on("error",n),o)this.log("client failed to connect",o),this._clients=this._clients.filter(u=>u!==
t),s&&(o=new Error("Connection terminated due to connection timeout",{cause:o})),this._pulseQueue(),
e.timedOut||e.callback(o,void 0,zs);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.add(t),this.
_idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new Qe((l,f,d)=>d()),n,!1)},this.options.
maxLifetimeSeconds*1e3);u.unref(),t.once("end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,
!0)}})}_acquireClient(e,t,n,i){i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(
e,n),e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(e,e.release):
e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.release(s),t.callback(s,void 0,
zs);t.callback(void 0,e,e.release)}):t.callback(void 0,e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{
n&&Jc(),n=!0,this._release(e,t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||
0)+1,this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=this.options.
maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove expended client"),this._remove(e),this.
_pulseQueue();return}if(this._expired.has(e)){this.log("remove expired client"),this._expired.delete(
e),this._remove(e),this._pulseQueue();return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{
this.log("remove idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new xn(e,t,s)),this._pulseQueue()}query(e,t,n){
if(typeof e=="function"){let s=Mt(this.Promise,e);return b(function(){return s.callback(new Error("P\
assing a function as the first parameter to pool.query is not supported"))}),s.result}typeof t=="fun\
ction"&&(n=t,t=void 0);let i=Mt(this.Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)return n(
s);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("error",c),this.log("dispatching \
query");try{o.query(e,t,(l,f)=>{if(this.log("query dispatched"),o.removeListener("error",c),!u)return u=
!0,o.release(l),l?n(l):n(void 0,f)})}catch(l){return o.release(l),n(l)}}),i.result}end(e){if(this.log(
"ending"),this.ending){let n=new Error("Called end on pool more than once");return e?e(n):this.Promise.
reject(n)}this.ending=!0;let t=Mt(this.Promise,e);return this._endCallback=t.callback,this._pulseQueue(),
t.result}get waitingCount(){return this._pendingQueue.length}get idleCount(){return this._idle.length}get expiredCount(){
return this._clients.reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(Cn,"Pool");var En=Cn;Zs.exports=En});var Xs={};ee(Xs,{default:()=>el});var el,eo=K(()=>{"use strict";p();el={}});var to=T((Yh,tl)=>{tl.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var io=T((Zh,no)=>{"use strict";p();var ro=we().EventEmitter,rl=(it(),D(nt)),In=rt(),Ne=no.exports=function(r,e,t){
ro.call(this),r=In.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};rl.inherits(Ne,ro);
var nl={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};Ne.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=nl[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};Ne.prototype.then=function(r,e){return this._getPromise().then(
r,e)};Ne.prototype.catch=function(r){return this._getPromise().catch(r)};Ne.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};Ne.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,b(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(c,l)=>{c.forEach(f=>{e.emit("row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(In.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(In.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var uo=T((tp,ao)=>{"use strict";p();var il=(eo(),D(Xs)),sl=St(),ep=to(),so=we().EventEmitter,ol=(it(),D(nt)),
al=It(),oo=io(),Z=ao.exports=function(r){so.call(this),r=r||{},this._Promise=r.Promise||w.Promise,this.
_types=new sl(r.types),this.native=new il({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new al(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};Z.Query=
oo;ol.inherits(Z,so);Z.prototype._errorAllQueries=function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.
native,t.handleError(r)})},"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};Z.prototype._connect=function(r){var e=this;
if(this._connecting){m.nextTick(()=>r(new Error("Client has already been connected. You cannot reuse\
 a client.")));return}this._connecting=!0,this.connectionParameters.getLibpqConnectionString(function(t,n){
if(t)return r(t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,e.native.
on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notifi\
cation",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.emit("connect"),e.
_pulseQueryQueue(!0),r()})})};Z.prototype.connect=function(r){if(r){this._connect(r);return}return new this.
_Promise((e,t)=>{this._connect(n=>{n?t(n):e()})})};Z.prototype.query=function(r,e,t){var n,i,s,o,u;if(r==
null)throw new TypeError("Client was passed a null or undefined query");if(typeof r.submit=="functio\
n")s=r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="function"&&(r.callback=
e);else if(s=this.connectionParameters.query_timeout,n=new oo(r,e,t),!n.callback){let c,l;i=new this.
_Promise((f,d)=>{c=f,l=d}),n.callback=(f,d)=>f?l(f):c(d)}return s&&(u=n.callback,o=setTimeout(()=>{var c=new Error(
"Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),u(c),n.callback=()=>{};var l=this.
_queryQueue.indexOf(n);l>-1&&this._queryQueue.splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{
clearTimeout(o),u(c,l)}),this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),
i):(n.native=this.native,m.nextTick(()=>{n.handleError(new Error("Client has encountered a connectio\
n error and is not queryable"))}),i)};Z.prototype.end=function(r){var e=this;this._ending=!0,this._connected||
this.once("connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){r=a(s=>s?
i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error("Connection terminated")),
m.nextTick(()=>{e.emit("end"),r&&r()})}),t};Z.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};Z.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){r||this.emit("dra\
in");return}this._activeQuery=e,e.submit(this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};
Z.prototype.cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};Z.prototype.ref=function(){};
Z.prototype.unref=function(){};Z.prototype.setTypeParser=function(r,e,t){return this._types.setTypeParser(
r,e,t)};Z.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var Tn=T((ip,co)=>{"use strict";p();co.exports=uo()});var ot=T((op,at)=>{"use strict";p();var ul=Ks(),cl=tt(),ll=bn(),fl=Js(),{DatabaseError:hl}=mn(),pl=a(
r=>{var e;return e=class extends fl{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),Pn=a(
function(r){this.defaults=cl,this.Client=r,this.Query=this.Client.Query,this.Pool=pl(this.Client),this.
_pools=[],this.Connection=ll,this.types=et(),this.DatabaseError=hl},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<
"u"?at.exports=new Pn(Tn()):(at.exports=new Pn(ul),Object.defineProperty(at.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Pn(Tn())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(at.exports,"native",{value:r}),r}}))});var ml={};ee(ml,{Client:()=>qe,DatabaseError:()=>je.DatabaseError,NeonDbError:()=>ye,Pool:()=>kt,SqlTemplate:()=>Me,
_bundleExt:()=>yl,defaults:()=>je.defaults,neon:()=>lr,neonConfig:()=>de,types:()=>je.types});module.
exports=D(ml);p();p();Ge();Kt();p();var aa=Object.defineProperty,ua=Object.defineProperties,ca=Object.getOwnPropertyDescriptors,di=Object.
getOwnPropertySymbols,la=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable,yi=a(
(r,e,t)=>e in r?aa(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
ha=a((r,e)=>{for(var t in e||(e={}))la.call(e,t)&&yi(r,t,e[t]);if(di)for(var t of di(e))fa.call(e,t)&&
yi(r,t,e[t]);return r},"__spreadValues"),pa=a((r,e)=>ua(r,ca(e)),"__spreadProps"),da=1008e3,mi=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,ya=new TextDecoder,zt=new TextEncoder,pt=zt.encode("0123456789\
abcdef"),dt=zt.encode("0123456789ABCDEF"),ma=zt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var gi=ma.slice();gi[62]=45;gi[63]=95;var $e,yt;function ga(r,{alphabet:e,scratchArr:t}={}){if(!$e)if($e=
new Uint16Array(256),yt=new Uint16Array(256),mi)for(let _=0;_<256;_++)$e[_]=pt[_&15]<<8|pt[_>>>4],yt[_]=
dt[_&15]<<8|dt[_>>>4];else for(let _=0;_<256;_++)$e[_]=pt[_&15]|pt[_>>>4]<<8,yt[_]=dt[_&15]|dt[_>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),c=new Uint32Array(o.buffer,o.byteOffset,i),l=e==="upper"?yt:$e,f=0,d=0,g;if(mi)
for(;f<s;)g=u[f++],c[d++]=l[g>>>8&255]<<16|l[g&255],c[d++]=l[g>>>24]<<16|l[g>>>16&255];else for(;f<s;)
g=u[f++],c[d++]=l[g>>>24]<<16|l[g>>>16&255],c[d++]=l[g>>>8&255]<<16|l[g&255];for(f<<=2;f<n;)o[f]=l[r[f++]];
return ya.decode(o.subarray(0,n))}a(ga,"_toHex");function wa(r,e={}){let t="",n=r.length,i=da>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n);for(let u=0;u<s;u++){let c=u*i,l=c+i;t+=ga(r.subarray(c,l),pa(ha(
{},e),{scratchArr:o}))}return t}a(wa,"_toHexChunked");function wi(r,e={}){return e.alphabet!=="upper"&&
typeof r.toHex=="function"?r.toHex():wa(r,e)}a(wi,"toHex");var rs=Se(rt()),ns=Se(St());function _u(r){return r instanceof y?"\\x"+wi(r):r}a(_u,"encodeBuffersAsBytea");var xt=class xt extends Error{constructor(t){
super(t);E(this,"name","NeonDbError");E(this,"severity");E(this,"code");E(this,"detail");E(this,"hin\
t");E(this,"position");E(this,"internalPosition");E(this,"internalQuery");E(this,"where");E(this,"sc\
hema");E(this,"table");E(this,"column");E(this,"dataType");E(this,"constraint");E(this,"file");E(this,
"line");E(this,"routine");E(this,"sourceError");"captureStackTrace"in Error&&typeof Error.captureStackTrace==
"function"&&Error.captureStackTrace(this,xt)}};a(xt,"NeonDbError");var ye=xt,Xi="transaction() expec\
ts an array of queries, or a function returning an array of queries",Cu=["severity","code","detail",
"hint","position","internalPosition","internalQuery","where","schema","table","column","dataType","c\
onstraint","file","line","routine"],Et=class Et{constructor(e,t){this.strings=e;this.values=t}compile(e={
query:"",params:[]}){let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<
n.length){let o=n[i];if(o instanceof Et)o.compile(e);else{let{params:u}=e,c=_u((0,rs.prepareValue)(o));
u.push(c),e.query+="$"+u.length}}return e}};a(Et,"SqlTemplate");var Me=Et;function lr(r,{arrayMode:e,
fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,authToken:u}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment variable has not bee\
n set?");let c;try{c=Vt(r)}catch{throw new Error("Database connection string provided to `neon()` is\
 not a valid URL. Connection string: "+String(r))}let{protocol:l,username:f,hostname:d,port:g,pathname:A}=c;
if(l!=="postgres:"&&l!=="postgresql:"||!f||!d||!A)throw new Error("Database connection string format\
 for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");function _(P,...L){
if(!(Array.isArray(P)&&Array.isArray(P.raw)&&Array.isArray(L)))throw new Error("Must be called as a \
tagged-template function: sql`...`, not sql(`...`)");return es(N,new Me(P,L))}a(_,"templateFn"),_.query=
(P,L,C)=>es(N,new Me([P],L),C),_.unsafe=P=>new Me([P],[]),_.transaction=async(P,L)=>{if(typeof P=="f\
unction"&&(P=P(_)),!Array.isArray(P))throw new Error(Xi);P.forEach(H=>{if(H[Symbol.toStringTag]!=="N\
eonQueryPromise")throw new Error(Xi)});let C=P.map(H=>H.sqlTemplate),S=P.map(H=>H.opts??{});return N(
C,S,L)};async function N(P,L,C){let{fetchEndpoint:S,fetchFunction:H}=de,le=Array.isArray(P)?{queries:P.
map(J=>J.compile())}:P.compile(),q=n??{},ie=e??!1,se=t??!1,oe=i,B=s,G=o;C!==void 0&&(C.fetchOptions!==
void 0&&(q={...q,...C.fetchOptions}),C.arrayMode!==void 0&&(ie=C.arrayMode),C.fullResults!==void 0&&
(se=C.fullResults),C.isolationLevel!==void 0&&(oe=C.isolationLevel),C.readOnly!==void 0&&(B=C.readOnly),
C.deferrable!==void 0&&(G=C.deferrable)),L!==void 0&&!Array.isArray(L)&&L.fetchOptions!==void 0&&(q=
{...q,...L.fetchOptions});let fe=u;!Array.isArray(L)&&L?.authToken!==void 0&&(fe=L.authToken);let Ae=typeof S==
"function"?S(d,g,{jwtAuth:fe!==void 0}):S,he={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"tru\
e","Neon-Array-Mode":"true"},_e=await Iu(fe);_e&&(he.Authorization=`Bearer ${_e}`),Array.isArray(P)&&
(oe!==void 0&&(he["Neon-Batch-Isolation-Level"]=oe),B!==void 0&&(he["Neon-Batch-Read-Only"]=String(B)),
G!==void 0&&(he["Neon-Batch-Deferrable"]=String(G)));let ae;try{ae=await(H??fetch)(Ae,{method:"POST",
body:JSON.stringify(le),headers:he,...q})}catch(J){let j=new ye(`Error connecting to database: ${J}`);
throw j.sourceError=J,j}if(ae.ok){let J=await ae.json();if(Array.isArray(P)){let j=J.results;if(!Array.
isArray(j))throw new ye("Neon internal error: unexpected result format");return j.map((X,V)=>{let We=L[V]??
{},po=We.arrayMode??ie,yo=We.fullResults??se;return ts(X,{arrayMode:po,fullResults:yo,types:We.types})})}else{
let j=L??{},X=j.arrayMode??ie,V=j.fullResults??se;return ts(J,{arrayMode:X,fullResults:V,types:j.types})}}else{
let{status:J}=ae;if(J===400){let j=await ae.json(),X=new ye(j.message);for(let V of Cu)X[V]=j[V]??void 0;
throw X}else{let j=await ae.text();throw new ye(`Server error (HTTP status ${J}): ${j}`)}}}return a(
N,"execute"),_}a(lr,"neon");function es(r,e,t){return{[Symbol.toStringTag]:"NeonQueryPromise",sqlTemplate:e,
opts:t,then:a((n,i)=>r(e,t).then(n,i),"then"),catch:a(n=>r(e,t).catch(n),"catch"),finally:a(n=>r(e,t).
finally(n),"finally")}}a(es,"createNeonQueryPromise");function ts(r,{arrayMode:e,fullResults:t,types:n}){
let i=new ns.default(n),s=r.fields.map(c=>c.name),o=r.fields.map(c=>i.getTypeParser(c.dataTypeID)),u=e===
!0?r.rows.map(c=>c.map((l,f)=>l===null?null:o[f](l))):r.rows.map(c=>Object.fromEntries(c.map((l,f)=>[
s[f],l===null?null:o[f](l)])));return t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r._parsers=o,r._types=
i,r):u}a(ts,"processQueryResult");async function Iu(r){if(typeof r=="string")return r;if(typeof r=="\
function")try{return await Promise.resolve(r())}catch(e){let t=new ye("Error getting auth token.");throw e instanceof
Error&&(t=new ye(`Error getting auth token: ${e.message}`)),t}}a(Iu,"getAuthToken");p();var fo=Se(ot());p();var lo=Se(ot());var Rn=class Rn extends lo.Client{constructor(t){super(t);this.config=t}get neonConfig(){return this.
connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=
!1),this.ssl&&n.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=re\
quire in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSo\
cket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disabl\
e SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");let i=this.config?.host!==
void 0||this.config?.connectionString!==void 0||m.env.PGHOST!==void 0,s=m.env.USER??m.env.USERNAME;if(!i&&
this.host==="localhost"&&this.user===s&&this.database===s&&this.password===null)throw new Error(`No \
database host or connection string was set, and key parameters have default values (host: localhost,\
 user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you in\
tended to connect with these parameters, please set the host to 'localhost' explicitly.`);let o=super.
connect(t),u=n.pipelineTLS&&this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;
let l=this.connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners("a\
uthenticationCleartextPassword"),l.removeAllListeners("readyForQuery"),l.once("readyForQuery",()=>l.
on("readyForQuery",this._handleReadyForQuery.bind(this)));let f=this.ssl?"sslconnect":"connect";l.on(
f,()=>{this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){
if(typeof crypto>"u"||crypto.subtle===void 0||crypto.subtle.importKey===void 0)throw new Error("Cann\
ot use SASL auth when `crypto.subtle` is not defined");let n=crypto.subtle,i=this.saslSession,s=this.
password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="string"||typeof o!="string")throw new Error(
"SASL: protocol error");let u=Object.fromEntries(o.split(",").map(X=>{if(!/^.=/.test(X))throw new Error(
"SASL: Invalid attribute pair entry");let V=X[0],We=X.substring(2);return[V,We]})),c=u.r,l=u.s,f=u.i;
if(!c||!/^[!-+--~]+$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unpri\
ntable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(l))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.test(f))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!c.startsWith(i.clientNonce))
throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");if(c.
length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too\
 short");let d=parseInt(f,10),g=y.from(l,"base64"),A=new TextEncoder,_=A.encode(s),N=await n.importKey(
"raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),P=new Uint8Array(await n.sign("HMAC",N,y.concat(
[g,y.from([0,0,0,1])]))),L=P;for(var C=0;C<d-1;C++)P=new Uint8Array(await n.sign("HMAC",N,P)),L=y.from(
L.map((X,V)=>L[V]^P[V]));let S=L,H=await n.importKey("raw",S,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),le=new Uint8Array(await n.sign("HMAC",H,A.encode("Client Key"))),q=await n.digest("SHA-256",
le),ie="n=*,r="+i.clientNonce,se="r="+c+",s="+l+",i="+d,oe="c=biws,r="+c,B=ie+","+se+","+oe,G=await n.
importKey("raw",q,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var fe=new Uint8Array(await n.sign(
"HMAC",G,A.encode(B))),Ae=y.from(le.map((X,V)=>le[V]^fe[V])),he=Ae.toString("base64");let _e=await n.
importKey("raw",S,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),ae=await n.sign("HMAC",_e,A.encode(
"Server Key")),J=await n.importKey("raw",ae,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var j=y.
from(await n.sign("HMAC",J,A.encode(B)));i.message="SASLResponse",i.serverSignature=j.toString("base\
64"),i.response=oe+",p="+he,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
a(Rn,"NeonClient");var qe=Rn;Ge();var ho=Se(It());function dl(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(dl,"promisify");var Bn=class Bn extends fo.Pool{constructor(){
super(...arguments);E(this,"Client",qe);E(this,"hasFetchUnsupportedListeners",!1);E(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!de.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=dl(this.Promise,i);i=s.callback;try{let o=new ho.default(
this.options),u=encodeURIComponent,c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${c(o.database)}`,f=typeof t=="string"?t:t.text,d=n??t.values??[];lr(l,{fullResults:!0,arrayMode:t.
rowMode==="array"})(f,d,{types:t.types??this.options?.types}).then(A=>i(void 0,A)).catch(A=>i(A))}catch(o){
i(o)}return s.result}};a(Bn,"NeonPool");var kt=Bn;Ge();var je=Se(ot()),yl="js";
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
