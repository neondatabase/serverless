"use strict";var Io=Object.create;var Pe=Object.defineProperty;var Po=Object.getOwnPropertyDescriptor;var Ro=Object.getOwnPropertyNames;var Bo=Object.getPrototypeOf,Lo=Object.prototype.hasOwnProperty;var ko=(r,e,t)=>e in r?Pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>Pe(r,"name",{value:e,configurable:!0});var G=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var I=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},re=(r,e)=>{
for(var t in e)Pe(r,t,{get:e[t],enumerable:!0})},Wn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Ro(e))!Lo.call(r,i)&&i!==t&&Pe(r,i,{get:()=>e[i],enumerable:!(n=Po(e,i))||n.
enumerable});return r};var ve=(r,e,t)=>(t=r!=null?Io(Bo(r)):{},Wn(e||!r||!r.__esModule?Pe(t,"default",{value:r,enumerable:!0}):
t,r)),O=r=>Wn(Pe({},"__esModule",{value:!0}),r);var x=(r,e,t)=>ko(r,typeof e!="symbol"?e+"":e,t);var $n=I(ht=>{"use strict";p();ht.byteLength=Mo;ht.toByteArray=Do;ht.fromByteArray=Qo;var ce=[],ne=[],
Fo=typeof Uint8Array<"u"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(_e=0,jn=Nt.length;_e<jn;++_e)ce[_e]=Nt[_e],ne[Nt.charCodeAt(_e)]=_e;var _e,jn;ne[45]=
62;ne[95]=63;function Hn(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Hn,"getLens");
function Mo(r){var e=Hn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(Mo,"byteLength");function Uo(r,e,t){return(e+
t)*3/4-t}a(Uo,"_byteLength");function Do(r){var e,t=Hn(r),n=t[0],i=t[1],s=new Fo(Uo(r,n,i)),o=0,u=i>
0?n-4:n,c;for(c=0;c<u;c+=4)e=ne[r.charCodeAt(c)]<<18|ne[r.charCodeAt(c+1)]<<12|ne[r.charCodeAt(c+2)]<<
6|ne[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=ne[r.charCodeAt(
c)]<<2|ne[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=ne[r.charCodeAt(c)]<<10|ne[r.charCodeAt(c+1)]<<
4|ne[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(Do,"toByteArray");function Oo(r){return ce[r>>
18&63]+ce[r>>12&63]+ce[r>>6&63]+ce[r&63]}a(Oo,"tripletToBase64");function qo(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Oo(n));return i.join("")}a(qo,"en\
codeChunk");function Qo(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(qo(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(ce[e>>2]+ce[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(ce[e>>10]+ce[e>>4&63]+ce[e<<2&63]+"=")),i.join("")}a(Qo,"fromByteArray")});var Gn=I(Wt=>{p();Wt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,l=c>>1,f=-7,m=t?i-1:0,b=t?
-1:1,A=r[e+m];for(m+=b,s=A&(1<<-f)-1,A>>=-f,f+=u;f>0;s=s*256+r[e+m],m+=b,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+m],m+=b,f-=8);if(s===0)s=1-l;else{if(s===c)return o?NaN:(A?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-l}return(A?-1:1)*o*Math.pow(2,s-n)};Wt.write=function(r,e,t,n,i,s){var o,u,c,l=s*8-i-1,
f=(1<<l)-1,m=f>>1,b=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=n?0:s-1,_=n?1:-1,D=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=
Math.pow(2,-o))<1&&(o--,c*=2),o+m>=1?e+=b/c:e+=b*Math.pow(2,1-m),e*c>=2&&(o++,c/=2),o+m>=f?(u=0,o=f):
o+m>=1?(u=(e*c-1)*Math.pow(2,i),o=o+m):(u=e*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;r[t+A]=u&255,A+=
_,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;r[t+A]=o&255,A+=_,o/=256,l-=8);r[t+A-_]|=D*128}});var ci=I(ke=>{"use strict";p();var jt=$n(),Be=Gn(),Vn=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;ke.Buffer=h;ke.SlowBuffer=Go;ke.INSPECT_MAX_BYTES=
50;var pt=2147483647;ke.kMaxLength=pt;h.TYPED_ARRAY_SUPPORT=No();!h.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function No(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(No,"typedArraySupport");Object.
defineProperty(h.prototype,"parent",{enumerable:!0,get:a(function(){if(h.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:a(function(){if(h.isBuffer(
this))return this.byteOffset},"get")});function de(r){if(r>pt)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,h.prototype),
e}a(de,"createBuffer");function h(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return Vt(r)}return Zn(r,e,t)}
a(h,"Buffer");h.poolSize=8192;function Zn(r,e,t){if(typeof r=="string")return jo(r,e);if(ArrayBuffer.
isView(r))return Ho(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(le(r,ArrayBuffer)||
r&&le(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(le(r,SharedArrayBuffer)||r&&le(r.buffer,
SharedArrayBuffer)))return $t(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return h.
from(n,e,t);let i=$o(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return h.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a(Zn,"from");h.from=function(r,e,t){return Zn(r,e,t)};Object.setPrototypeOf(h.prototype,
Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function Jn(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(Jn,"assertSize");function Wo(r,e,t){return Jn(r),r<=0?de(r):e!==void 0?typeof t==
"string"?de(r).fill(e,t):de(r).fill(e):de(r)}a(Wo,"alloc");h.alloc=function(r,e,t){return Wo(r,e,t)};
function Vt(r){return Jn(r),de(r<0?0:zt(r)|0)}a(Vt,"allocUnsafe");h.allocUnsafe=function(r){return Vt(
r)};h.allocUnsafeSlow=function(r){return Vt(r)};function jo(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Xn(r,e)|0,n=de(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a(jo,"fromString");function Ht(r){let e=r.length<0?0:zt(r.length)|
0,t=de(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(Ht,"fromArrayLike");function Ho(r){if(le(r,Uint8Array)){
let e=new Uint8Array(r);return $t(e.buffer,e.byteOffset,e.byteLength)}return Ht(r)}a(Ho,"fromArrayVi\
ew");function $t(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,h.prototype),n}a($t,"fromArrayBuffer");function $o(r){if(h.isBuffer(r)){
let e=zt(r.length)|0,t=de(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Yt(r.length)?de(0):Ht(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Ht(r.data)}
a($o,"fromObject");function zt(r){if(r>=pt)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+pt.toString(16)+" bytes");return r|0}a(zt,"checked");function Go(r){return+r!=
r&&(r=0),h.alloc(+r)}a(Go,"SlowBuffer");h.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
h.prototype},"isBuffer");h.compare=a(function(e,t){if(le(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),
le(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError(
'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,
i=t.length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?
1:0},"compare");h.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"\
utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"\
utf-16le":return!0;default:return!1}},"isEncoding");h.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError(
'"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);let n;if(t===void 0)
for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=h.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];
if(le(o,Uint8Array))s+o.length>i.length?(h.isBuffer(o)||(o=h.from(o)),o.copy(i,s)):Uint8Array.prototype.
set.call(i,o,s);else if(h.isBuffer(o))o.copy(i,s);else throw new TypeError('"list" argument must be \
an Array of Buffers');s+=o.length}return i},"concat");function Xn(r,e){if(h.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||le(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Gt(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ui(r).length;default:
if(i)return n?-1:Gt(r).length;e=(""+e).toLowerCase(),i=!0}}a(Xn,"byteLength");h.byteLength=Xn;function Vo(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return na(this,e,t);case"u\
tf8":case"utf-8":return ti(this,e,t);case"ascii":return ta(this,e,t);case"latin1":case"binary":return ra(
this,e,t);case"base64":return Xo(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ia(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(Vo,
"slowToString");h.prototype._isBuffer=!0;function Ce(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(Ce,"swap");
h.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ce(this,t,t+1);return this},"swap16");h.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)Ce(this,t,t+3),Ce(this,t+1,t+2);return this},"swap32");h.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)Ce(this,t,t+7),Ce(this,t+1,t+6),Ce(this,t+2,t+5),Ce(this,t+3,t+4);return this},
"swap64");h.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?ti(
this,0,e):Vo.apply(this,arguments)},"toString");h.prototype.toLocaleString=h.prototype.toString;h.prototype.
equals=a(function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:h.compare(this,e)===0},"equals");h.prototype.inspect=a(function(){let e="",t=ke.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");Vn&&(h.prototype[Vn]=h.prototype.inspect);h.prototype.compare=a(function(e,t,n,i,s){
if(le(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,c=Math.min(o,u),l=this.slice(
i,s),f=e.slice(t,n);for(let m=0;m<c;++m)if(l[m]!==f[m]){o=l[m],u=f[m];break}return o<u?-1:u<o?1:0},"\
compare");function ei(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Yt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=h.from(
e,n)),h.isBuffer(e))return e.length===0?-1:zn(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):zn(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(ei,"bidire\
ctionalIndexOf");function zn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function c(f,m){return s===1?f[m]:f.readUInt16BE(m*s)}a(c,"read");let l;if(i){let f=-1;for(l=
t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===u)return f*s}else f!==-1&&(l-=l-f),
f=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let f=!0;for(let m=0;m<u;m++)if(c(r,l+m)!==c(e,m)){f=!1;break}
if(f)return l}return-1}a(zn,"arrayIndexOf");h.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");h.prototype.indexOf=a(function(e,t,n){return ei(this,e,t,n,!0)},"indexOf");
h.prototype.lastIndexOf=a(function(e,t,n){return ei(this,e,t,n,!1)},"lastIndexOf");function zo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Yt(u))return o;r[t+o]=u}return o}a(zo,"hexWrite");function Ko(r,e,t,n){
return dt(Gt(e,r.length-t),r,t,n)}a(Ko,"utf8Write");function Yo(r,e,t,n){return dt(ua(e),r,t,n)}a(Yo,
"asciiWrite");function Zo(r,e,t,n){return dt(ui(e),r,t,n)}a(Zo,"base64Write");function Jo(r,e,t,n){return dt(
ca(e,r.length-t),r,t,n)}a(Jo,"ucs2Write");h.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return zo(this,e,t,n);case"utf8":case"\
utf-8":return Ko(this,e,t,n);case"ascii":case"latin1":case"binary":return Yo(this,e,t,n);case"base64":
return Zo(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jo(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");h.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function Xo(r,e,t){return e===0&&t===r.length?jt.fromByteArray(r):jt.fromByteArray(r.slice(e,t))}
a(Xo,"base64Slice");function ti(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let c,l,f,m;switch(u){case 1:s<128&&(o=s);break;case 2:c=r[i+
1],(c&192)===128&&(m=(s&31)<<6|c&63,m>127&&(o=m));break;case 3:c=r[i+1],l=r[i+2],(c&192)===128&&(l&192)===
128&&(m=(s&15)<<12|(c&63)<<6|l&63,m>2047&&(m<55296||m>57343)&&(o=m));break;case 4:c=r[i+1],l=r[i+2],
f=r[i+3],(c&192)===128&&(l&192)===128&&(f&192)===128&&(m=(s&15)<<18|(c&63)<<12|(l&63)<<6|f&63,m>65535&&
m<1114112&&(o=m))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return ea(n)}a(ti,"utf8Slice");var Kn=4096;function ea(r){let e=r.length;if(e<=Kn)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
Kn));return t}a(ea,"decodeCodePointsArray");function ta(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(ta,"asciiSlice");function ra(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(ra,"latin1Slice");function na(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=la[r[s]];return i}
a(na,"hexSlice");function ia(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a(ia,"utf16leSlice");h.prototype.slice=a(function(e,t){let n=this.
length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<
e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,h.prototype),i},"slice");function q(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to \
access beyond buffer length")}a(q,"checkOffset");h.prototype.readUintLE=h.prototype.readUIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||q(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},
"readUIntLE");h.prototype.readUintBE=h.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,
t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"readUIntBE");h.
prototype.readUint8=h.prototype.readUInt8=a(function(e,t){return e=e>>>0,t||q(e,1,this.length),this[e]},
"readUInt8");h.prototype.readUint16LE=h.prototype.readUInt16LE=a(function(e,t){return e=e>>>0,t||q(e,
2,this.length),this[e]|this[e+1]<<8},"readUInt16LE");h.prototype.readUint16BE=h.prototype.readUInt16BE=
a(function(e,t){return e=e>>>0,t||q(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");h.prototype.
readUint32LE=h.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||q(e,4,this.length),(this[e]|
this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");h.prototype.readUint32BE=h.prototype.
readUInt32BE=a(function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+
2]<<8|this[e+3])},"readUInt32BE");h.prototype.readBigUInt64LE=xe(a(function(e){e=e>>>0,Le(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ze(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));h.prototype.readBigUInt64BE=xe(a(function(e){e=e>>>0,Le(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ze(e,this.length-8);let i=t*2**24+this[++e]*2**16+
this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(
32))+BigInt(s)},"readBigUInt64BE"));h.prototype.readIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,t,
this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.
pow(2,8*t)),i},"readIntLE");h.prototype.readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,t,this.length);
let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*
t)),o},"readIntBE");h.prototype.readInt8=a(function(e,t){return e=e>>>0,t||q(e,1,this.length),this[e]&
128?(255-this[e]+1)*-1:this[e]},"readInt8");h.prototype.readInt16LE=a(function(e,t){e=e>>>0,t||q(e,2,
this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");h.prototype.readInt16BE=
a(function(e,t){e=e>>>0,t||q(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:
n},"readInt16BE");h.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]|
this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");h.prototype.readInt32BE=a(function(e,t){return e=
e>>>0,t||q(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");h.prototype.
readBigInt64LE=xe(a(function(e){e=e>>>0,Le(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
ze(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));h.prototype.readBigInt64BE=
xe(a(function(e){e=e>>>0,Le(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ze(e,this.
length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));h.prototype.readFloatLE=a(function(e,t){
return e=e>>>0,t||q(e,4,this.length),Be.read(this,e,!0,23,4)},"readFloatLE");h.prototype.readFloatBE=
a(function(e,t){return e=e>>>0,t||q(e,4,this.length),Be.read(this,e,!1,23,4)},"readFloatBE");h.prototype.
readDoubleLE=a(function(e,t){return e=e>>>0,t||q(e,8,this.length),Be.read(this,e,!0,52,8)},"readDoub\
leLE");h.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||q(e,8,this.length),Be.read(this,e,
!1,52,8)},"readDoubleBE");function V(r,e,t,n,i,s){if(!h.isBuffer(r))throw new TypeError('"buffer" ar\
gument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of boun\
ds');if(t+n>r.length)throw new RangeError("Index out of range")}a(V,"checkInt");h.prototype.writeUintLE=
h.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;V(this,
e,t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");
h.prototype.writeUintBE=h.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;V(this,e,t,n,u,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;
return t+n},"writeUIntBE");h.prototype.writeUint8=h.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||V(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");h.prototype.writeUint16LE=h.prototype.
writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=
e>>>8,t+2},"writeUInt16LE");h.prototype.writeUint16BE=h.prototype.writeUInt16BE=a(function(e,t,n){return e=
+e,t=t>>>0,n||V(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");h.prototype.
writeUint32LE=h.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,4,4294967295,
0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");h.prototype.
writeUint32BE=h.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,4,4294967295,
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ri(r,e,t,n,i){
ai(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a(ri,"wrtBigUInt64LE");function ni(r,e,t,n,i){ai(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(ni,"wrtBigUInt64BE");h.prototype.
writeBigUInt64LE=xe(a(function(e,t=0){return ri(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));h.prototype.writeBigUInt64BE=xe(a(function(e,t=0){return ni(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64BE"));h.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let c=Math.pow(2,8*n-1);V(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntLE");h.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);V(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;
for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+
n},"writeIntBE");h.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,1,127,-128),
e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");h.prototype.writeInt16LE=a(function(e,t,n){return e=
+e,t=t>>>0,n||V(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");h.prototype.
writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+
1]=e&255,t+2},"writeInt16BE");h.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,
e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"\
writeInt32LE");h.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,4,2147483647,
-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,
t+4},"writeInt32BE");h.prototype.writeBigInt64LE=xe(a(function(e,t=0){return ri(this,e,t,-BigInt("0x\
8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));h.prototype.writeBigInt64BE=xe(
a(function(e,t=0){return ni(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"w\
riteBigInt64BE"));function ii(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range")}a(ii,"checkIEEE754");function si(r,e,t,n,i){return e=
+e,t=t>>>0,i||ii(r,e,t,4,34028234663852886e22,-34028234663852886e22),Be.write(r,e,t,n,23,4),t+4}a(si,
"writeFloat");h.prototype.writeFloatLE=a(function(e,t,n){return si(this,e,t,!0,n)},"writeFloatLE");h.
prototype.writeFloatBE=a(function(e,t,n){return si(this,e,t,!1,n)},"writeFloatBE");function oi(r,e,t,n,i){
return e=+e,t=t>>>0,i||ii(r,e,t,8,17976931348623157e292,-17976931348623157e292),Be.write(r,e,t,n,52,
8),t+8}a(oi,"writeDouble");h.prototype.writeDoubleLE=a(function(e,t,n){return oi(this,e,t,!0,n)},"wr\
iteDoubleLE");h.prototype.writeDoubleBE=a(function(e,t,n){return oi(this,e,t,!1,n)},"writeDoubleBE");
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
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Re={};function Kt(r,e,t){var n;Re[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(Kt,"E");Kt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Kt(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);Kt("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Yn(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Yn(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function Yn(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(Yn,"addNumericalSeparator");function sa(r,e,t){
Le(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ze(e,r.length-(t+1))}a(sa,"checkBounds");function ai(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Re.ERR_OUT_OF_RANGE("value",u,r)}sa(n,i,s)}a(ai,"checkIntBI");function Le(r,e){if(typeof r!=
"number")throw new Re.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Le,"validateNumber");function ze(r,e,t){throw Math.
floor(r)!==r?(Le(r,t),new Re.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Re.ERR_BUFFER_OUT_OF_BOUNDS:
new Re.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(ze,"boundsError");var oa=/[^+/0-9A-Za-z-_]/g;
function aa(r){if(r=r.split("=")[0],r=r.trim().replace(oa,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(aa,"base64clean");function Gt(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(Gt,"utf\
8ToBytes");function ua(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
ua,"asciiToBytes");function ca(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(ca,"utf16leToBytes");function ui(r){return jt.toByteArray(
aa(r))}a(ui,"base64ToBytes");function dt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(dt,"blitBuffer");function le(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(le,"isInstance");function Yt(r){return r!==
r}a(Yt,"numberIsNaN");var la=(function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e})();function xe(r){return typeof BigInt>"u"?
fa:r}a(xe,"defineBigIntMethod");function fa(){throw new Error("BigInt not supported")}a(fa,"BufferBi\
gIntNotDefined")});var w,v,S,d,y,p=G(()=>{"use strict";w=globalThis,v=globalThis.setImmediate??(r=>setTimeout(r,0)),S=globalThis.
clearImmediate??(r=>clearTimeout(r)),d=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.
allocUnsafe=="function"?globalThis.Buffer:ci().Buffer,y=globalThis.process??{};y.env??(y.env={});try{
y.nextTick(()=>{})}catch{let e=Promise.resolve();y.nextTick=e.then.bind(e)}});var Se=I((Yl,Zt)=>{"use strict";p();var Fe=typeof Reflect=="object"?Reflect:null,li=Fe&&typeof Fe.apply==
"function"?Fe.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),yt;
Fe&&typeof Fe.ownKeys=="function"?yt=Fe.ownKeys:Object.getOwnPropertySymbols?yt=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):yt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function ha(r){console&&console.warn&&console.warn(r)}a(ha,
"ProcessEmitWarning");var hi=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function R(){R.
init.call(this)}a(R,"EventEmitter");Zt.exports=R;Zt.exports.once=ma;R.EventEmitter=R;R.prototype._events=
void 0;R.prototype._eventsCount=0;R.prototype._maxListeners=void 0;var fi=10;function mt(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(mt,"checkListener");Object.defineProperty(R,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return fi},"get"),set:a(function(r){if(typeof r!="number"||r<0||hi(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");fi=r},
"set")});R.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
R.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||hi(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function pi(r){return r._maxListeners===void 0?R.defaultMaxListeners:r._maxListeners}
a(pi,"_getMaxListeners");R.prototype.getMaxListeners=a(function(){return pi(this)},"getMaxListeners");
R.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")li(c,this,t);else for(var l=c.
length,f=wi(c,l),n=0;n<l;++n)li(f[n],this,t);return!0},"emit");function di(r,e,t,n){var i,s,o;if(mt(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=pi(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,ha(u)}return r}a(di,"_addListener");R.prototype.addListener=a(function(e,t){
return di(this,e,t,!1)},"addListener");R.prototype.on=R.prototype.addListener;R.prototype.prependListener=
a(function(e,t){return di(this,e,t,!0)},"prependListener");function pa(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(pa,"onceWrapper");function yi(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=pa.bind(n);return i.listener=t,n.wrapFn=i,i}a(yi,"_onceW\
rap");R.prototype.once=a(function(e,t){return mt(t),this.on(e,yi(this,e,t)),this},"once");R.prototype.
prependOnceListener=a(function(e,t){return mt(t),this.prependListener(e,yi(this,e,t)),this},"prepend\
OnceListener");R.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(mt(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():da(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");R.prototype.off=R.prototype.
removeListener;R.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function mi(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
ya(i):wi(i,i.length)}a(mi,"_listeners");R.prototype.listeners=a(function(e){return mi(this,e,!0)},"l\
isteners");R.prototype.rawListeners=a(function(e){return mi(this,e,!1)},"rawListeners");R.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):gi.call(r,e)};R.prototype.
listenerCount=gi;function gi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(gi,"listenerCount");R.prototype.eventNames=a(function(){
return this._eventsCount>0?yt(this._events):[]},"eventNames");function wi(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(wi,"arrayClone");function da(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(da,"spliceOne");function ya(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(ya,"unwrapListeners");function ma(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),bi(r,e,s,{once:!0}),e!=="error"&&
ga(r,i,{once:!0})})}a(ma,"once");function ga(r,e,t){typeof r.on=="function"&&bi(r,"error",e,t)}a(ga,
"addErrorHandlerIfEventEmitter");function bi(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(bi,"eventTargetAgnosticAddListener")});var Si={};re(Si,{Socket:()=>oe,isIP:()=>wa});function wa(r){return 0}var xi,vi,E,oe,Me=G(()=>{"use s\
trict";p();xi=ve(Se(),1);a(wa,"isIP");vi=/^[^.]+\./,E=class E extends xi.EventEmitter{constructor(){
super(...arguments);x(this,"opts",{});x(this,"connecting",!1);x(this,"pending",!0);x(this,"writable",
!0);x(this,"encrypted",!1);x(this,"authorized",!1);x(this,"destroyed",!1);x(this,"ws",null);x(this,"\
writeBuffer");x(this,"tlsState",0);x(this,"tlsRead");x(this,"tlsWrite")}static get poolQueryViaFetch(){
return E.opts.poolQueryViaFetch??E.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){E.opts.
poolQueryViaFetch=t}static get fetchEndpoint(){return E.opts.fetchEndpoint??E.defaults.fetchEndpoint}static set fetchEndpoint(t){
E.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)")}static get fetchFunction(){
return E.opts.fetchFunction??E.defaults.fetchFunction}static set fetchFunction(t){E.opts.fetchFunction=
t}static get webSocketConstructor(){return E.opts.webSocketConstructor??E.defaults.webSocketConstructor}static set webSocketConstructor(t){
E.opts.webSocketConstructor=t}get webSocketConstructor(){return this.opts.webSocketConstructor??E.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return E.opts.wsProxy??E.defaults.wsProxy}static set wsProxy(t){
E.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??E.wsProxy}set wsProxy(t){this.opts.wsProxy=
t}static get coalesceWrites(){return E.opts.coalesceWrites??E.defaults.coalesceWrites}static set coalesceWrites(t){
E.opts.coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??E.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return E.opts.useSecureWebSocket??E.defaults.
useSecureWebSocket}static set useSecureWebSocket(t){E.opts.useSecureWebSocket=t}get useSecureWebSocket(){
return this.opts.useSecureWebSocket??E.useSecureWebSocket}set useSecureWebSocket(t){this.opts.useSecureWebSocket=
t}static get forceDisablePgSSL(){return E.opts.forceDisablePgSSL??E.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){
E.opts.forceDisablePgSSL=t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??E.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return E.opts.disableSNI??E.defaults.disableSNI}static set disableSNI(t){
E.opts.disableSNI=t}get disableSNI(){return this.opts.disableSNI??E.disableSNI}set disableSNI(t){this.
opts.disableSNI=t}static get disableWarningInBrowsers(){return E.opts.disableWarningInBrowsers??E.defaults.
disableWarningInBrowsers}static set disableWarningInBrowsers(t){E.opts.disableWarningInBrowsers=t}get disableWarningInBrowsers(){
return this.opts.disableWarningInBrowsers??E.disableWarningInBrowsers}set disableWarningInBrowsers(t){
this.opts.disableWarningInBrowsers=t}static get pipelineConnect(){return E.opts.pipelineConnect??E.defaults.
pipelineConnect}static set pipelineConnect(t){E.opts.pipelineConnect=t}get pipelineConnect(){return this.
opts.pipelineConnect??E.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return E.opts.subtls??E.defaults.subtls}static set subtls(t){E.opts.subtls=t}get subtls(){return this.
opts.subtls??E.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){return E.opts.pipelineTLS??
E.defaults.pipelineTLS}static set pipelineTLS(t){E.opts.pipelineTLS=t}get pipelineTLS(){return this.
opts.pipelineTLS??E.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){return E.
opts.rootCerts??E.defaults.rootCerts}static set rootCerts(t){E.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??E.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){let i=this.
wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https://github.c\
om/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--stri\
ng");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("co\
nnect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),this.emit("ready")},"\
handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuffer",c.addEventListener("error",f=>{this.
emit("error",f),this.emit("close")}),c.addEventListener("message",f=>{if(this.tlsState===0){let m=d.
from(f.data);this.emit("data",m)}}),c.addEventListener("close",()=>{this.emit("close")}),l?s():c.addEventListener(
"open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="string"?parseInt(t,10):
t)}catch(c){this.emit("error",c),this.emit("close");return}try{let l=(this.useSecureWebSocket?"wss:":
"ws:")+"//"+u;if(this.webSocketConstructor!==void 0)this.ws=new this.webSocketConstructor(l),o(this.
ws);else try{this.ws=new WebSocket(l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){
let f=(this.useSecureWebSocket?"https:":"http:")+"//"+u;fetch(f,{headers:{Upgrade:"websocket"}}).then(
m=>{if(this.ws=m.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,!0)}).catch(m=>{this.emit(
"error",new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer \
to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websoc\
ket--undefined. Details: ${m}`)),this.emit("close")})}}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://g\
ithub.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");this.tlsState=1;let n=await this.
subtls.TrustedCert.databaseFromPEM(this.rootCerts),i=new this.subtls.WebSocketReadQueue(this.ws),s=i.
read.bind(i),o=this.rawWrite.bind(this),{read:u,write:c}=await this.subtls.startTls(t,n,s,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=
c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=d.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws&&this.ws.send(t);return}if(this.writeBuffer===void 0)this.writeBuffer=
t,setTimeout(()=>{this.ws&&this.ws.send(this.writeBuffer),this.writeBuffer=void 0},0);else{let n=new Uint8Array(
this.writeBuffer.length+t.length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?(i(),!0):(typeof t=="string"&&(t=d.from(t,n)),this.
tlsState===0?(this.rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(t,
n,i)}):(this.tlsWrite(t),i()),!0)}end(t=d.alloc(0),n="utf8",i=()=>{}){return this.write(t,n,()=>{this.
ws.close(),i()}),this}destroy(){return this.destroyed=!0,this.end()}};a(E,"Socket"),x(E,"defaults",{
poolQueryViaFetch:!1,fetchEndpoint:a((t,n,i)=>{let s;return i?.jwtAuth?s=t.replace(vi,"apiauth."):s=
t.replace(vi,"api."),"https://"+s+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,
webSocketConstructor:void 0,wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,
coalesceWrites:!0,pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1,
disableWarningInBrowsers:!1}),x(E,"opts",{});oe=E});var Ei={};re(Ei,{parse:()=>Jt});function Jt(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:l,search:f,searchParams:m,hash:b}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),l=decodeURIComponent(l);let A=i+":"+s,_=e?Object.
fromEntries(m.entries()):f;return{href:r,protocol:t,auth:A,username:i,password:s,host:o,hostname:u,port:c,
pathname:l,search:f,query:_,hash:b}}var Xt=G(()=>{"use strict";p();a(Jt,"parse")});var ir=I(Ri=>{"use strict";p();Ri.parse=function(r,e){return new nr(r,e).parse()};var St=class St{constructor(e,t){
this.source=e,this.transform=t||Ba,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
return this.position>=this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){this.recorded.push(
e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),
t!==null&&(t=this.transform(t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.
consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.
dimension>1&&(n=new St(this.source.substr(this.position-1),this.transform),this.entries.push(n.parse(
!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(!0),i=!i):t.value===
","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==0)throw new Error("array dimension \
not balanced");return this.entries}};a(St,"ArrayParser");var nr=St;function Ba(r){return r}a(Ba,"ide\
ntity")});var sr=I((Ef,Bi)=>{p();var La=ir();Bi.exports={create:a(function(r,e){return{parse:a(function(){return La.
parse(r,e)},"parse")}},"create")}});var Fi=I((Cf,ki)=>{"use strict";p();var ka=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Fa=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Ma=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Ua=/^-?infinity$/;ki.
exports=a(function(e){if(Ua.test(e))return Number(e.replace("i","I"));var t=ka.exec(e);if(!t)return Da(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Li(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var m,b=Oa(e);return b!=null?
(m=new Date(Date.UTC(i,s,o,u,c,l,f)),or(i)&&m.setUTCFullYear(i),b!==0&&m.setTime(m.getTime()-b)):(m=
new Date(i,s,o,u,c,l,f),or(i)&&m.setFullYear(i)),m},"parseDate");function Da(r){var e=Fa.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Li(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return or(
t)&&o.setFullYear(t),o}}a(Da,"getDate");function Oa(r){if(r.endsWith("+00"))return 0;var e=Ma.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(Oa,"timeZoneOffset");function Li(r){return-(r-
1)}a(Li,"bcYearToNegativeYear");function or(r){return r>=0&&r<100}a(or,"is0To99")});var Ui=I((Pf,Mi)=>{p();Mi.exports=Qa;var qa=Object.prototype.hasOwnProperty;function Qa(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)qa.call(t,n)&&(r[n]=t[n])}return r}a(Qa,"ext\
end")});var qi=I((Lf,Oi)=>{"use strict";p();var Na=Ui();Oi.exports=Oe;function Oe(r){if(!(this instanceof Oe))
return new Oe(r);Na(this,Xa(r))}a(Oe,"PostgresInterval");var Wa=["seconds","minutes","hours","days",
"months","years"];Oe.prototype.toPostgres=function(){var r=Wa.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var ja={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},Ha=["years","months","days"],$a=["hours","minutes","seconds"];Oe.prototype.toISOString=Oe.prototype.
toISO=function(){var r=Ha.map(t,this).join(""),e=$a.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+ja[n]}};var ar="([+-]?\\d+)",Ga=ar+"\\s+years?",Va=ar+"\\s+mons?",za=ar+"\\s+days?",Ka="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Ya=new RegExp([Ga,Va,za,Ka].map(function(r){return"\
("+r+")?"}).join("\\s*")),Di={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
Za=["hours","minutes","seconds","milliseconds"];function Ja(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Ja,"parseMilliseconds");function Xa(r){if(!r)return{};var e=Ya.exec(r),t=e[8]==="-";return Object.
keys(Di).reduce(function(n,i){var s=Di[i],o=e[s];return!o||(o=i==="milliseconds"?Ja(o):parseInt(o,10),
!o)||(t&&~Za.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a(Xa,"parse")});var Wi=I((Mf,Ni)=>{"use strict";p();var Qi=d.from||d;Ni.exports=a(function(e){if(/^\\x/.test(e))return Qi(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.
substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&
e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return Qi(t,"binar\
y")},"parseBytea")});var Ki=I((Of,zi)=>{p();var Ze=ir(),Je=sr(),Et=Fi(),Hi=qi(),$i=Wi();function At(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(At,"allowNull");function Gi(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Gi,"parseBool");function eu(r){return r?
Ze.parse(r,Gi):null}a(eu,"parseBoolArray");function tu(r){return parseInt(r,10)}a(tu,"parseBaseTenIn\
t");function ur(r){return r?Ze.parse(r,At(tu)):null}a(ur,"parseIntegerArray");function ru(r){return r?
Ze.parse(r,At(function(e){return Vi(e).trim()})):null}a(ru,"parseBigIntegerArray");var nu=a(function(r){
if(!r)return null;var e=Je.create(r,function(t){return t!==null&&(t=hr(t)),t});return e.parse()},"pa\
rsePointArray"),cr=a(function(r){if(!r)return null;var e=Je.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),ie=a(function(r){if(!r)return null;var e=Je.
create(r);return e.parse()},"parseStringArray"),lr=a(function(r){if(!r)return null;var e=Je.create(r,
function(t){return t!==null&&(t=Et(t)),t});return e.parse()},"parseDateArray"),iu=a(function(r){if(!r)
return null;var e=Je.create(r,function(t){return t!==null&&(t=Hi(t)),t});return e.parse()},"parseInt\
ervalArray"),su=a(function(r){return r?Ze.parse(r,At($i)):null},"parseByteAArray"),fr=a(function(r){
return parseInt(r,10)},"parseInteger"),Vi=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),ji=a(function(r){return r?Ze.parse(r,At(JSON.parse)):null},"parseJsonArray"),hr=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),ou=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=hr(e);return s.radius=parseFloat(t),s},"parseCircle"),au=a(function(r){r(20,Vi),r(21,fr),
r(23,fr),r(26,fr),r(700,parseFloat),r(701,parseFloat),r(16,Gi),r(1082,Et),r(1114,Et),r(1184,Et),r(600,
hr),r(651,ie),r(718,ou),r(1e3,eu),r(1001,su),r(1005,ur),r(1007,ur),r(1028,ur),r(1016,ru),r(1017,nu),
r(1021,cr),r(1022,cr),r(1231,cr),r(1014,ie),r(1015,ie),r(1008,ie),r(1009,ie),r(1040,ie),r(1041,ie),r(
1115,lr),r(1182,lr),r(1185,lr),r(1186,Hi),r(1187,iu),r(17,$i),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,ji),r(3807,ji),r(3907,ie),r(2951,ie),r(791,ie),r(1183,ie),r(1270,ie)},"init");
zi.exports={init:au}});var Zi=I((Nf,Yi)=>{"use strict";p();var z=1e6;function uu(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,c,l,f;{if(s=e%z,e=e/z>>>0,o=4294967296*s+
t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}
{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.
length,f=0;f<l;f++)c+="0";i=c+u+i}{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&
e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}return s=e%z,o=4294967296*s+t,u=
""+o%z,n+u+i}a(uu,"readInt8");Yi.exports=uu});var rs=I((Hf,ts)=>{p();var cu=Zi(),k=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(A,_,D){return A*
Math.pow(2,D)+_};var s=t>>3,o=a(function(A){return n?~A&255:A},"inv"),u=255,c=8-t%8;e<c&&(u=255<<8-e&
255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&u,c));for(var f=e+t>>3,m=s+1;m<f;m++)l=i(l,o(
r[m]),8);var b=(e+t)%8;return b>0&&(l=i(l,o(r[f])>>8-b,b)),l},"parseBits"),es=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=k(r,1),s=k(r,t,1);if(s===0)return 0;var o=1,u=a(function(l,f,m){l===0&&(l=1);for(var b=1;b<=
m;b++)o/=2,(f&1<<m-b)>0&&(l+=o);return l},"parsePrecisionBits"),c=k(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),lu=a(function(r){
return k(r,1)==1?-1*(k(r,15,1,!0)+1):k(r,15,1)},"parseInt16"),Ji=a(function(r){return k(r,1)==1?-1*(k(
r,31,1,!0)+1):k(r,31,1)},"parseInt32"),fu=a(function(r){return es(r,23,8)},"parseFloat32"),hu=a(function(r){
return es(r,52,11)},"parseFloat64"),pu=a(function(r){var e=k(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,k(r,16,16)),n=0,i=[],s=k(r,16),o=0;o<s;o++)n+=k(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,k(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Xi=a(function(r,e){var t=k(e,1),n=k(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Xe=a(function(r){for(var e=k(
r,32),t=k(r,32,32),n=k(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=k(r,32,i),i+=32,i+=32;var u=a(function(l){
var f=k(r,32,i);if(i+=32,f==4294967295)return null;var m;if(l==23||l==20)return m=k(r,f*8,i),i+=f*8,
m;if(l==25)return m=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),m;console.log("ERROR: ElementType no\
t implemented: "+l)},"parseElement"),c=a(function(l,f){var m=[],b;if(l.length>1){var A=l.shift();for(b=
0;b<A;b++)m[b]=c(l,f);l.unshift(A)}else for(b=0;b<l[0];b++)m[b]=u(f);return m},"parse");return c(s,n)},
"parseArray"),du=a(function(r){return r.toString("utf8")},"parseText"),yu=a(function(r){return r===null?
null:k(r,8)>0},"parseBool"),mu=a(function(r){r(20,cu),r(21,lu),r(23,Ji),r(26,Ji),r(1700,pu),r(700,fu),
r(701,hu),r(16,yu),r(1114,Xi.bind(null,!1)),r(1184,Xi.bind(null,!0)),r(1e3,Xe),r(1007,Xe),r(1016,Xe),
r(1008,Xe),r(1009,Xe),r(25,du)},"init");ts.exports={init:mu}});var is=I((Vf,ns)=>{p();ns.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var rt=I(tt=>{p();var gu=Ki(),wu=rs(),bu=sr(),vu=is();tt.getTypeParser=xu;tt.setTypeParser=Su;tt.arrayParser=
bu;tt.builtins=vu;var et={text:{},binary:{}};function ss(r){return String(r)}a(ss,"noParse");function xu(r,e){
return e=e||"text",et[e]&&et[e][r]||ss}a(xu,"getTypeParser");function Su(r,e,t){typeof e=="function"&&
(t=e,e="text"),et[e][r]=t}a(Su,"setTypeParser");gu.init(function(r,e){et.text[r]=e});wu.init(function(r,e){
et.binary[r]=e})});var Ct=I((Jf,os)=>{"use strict";p();var Eu=rt();function _t(r){this._types=r||Eu,this.text={},this.binary=
{}}a(_t,"TypeOverrides");_t.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};_t.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};_t.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};os.exports=_t});function nt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
c=1541459225,l=0,f=0,m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],b=a((T,g)=>T>>>g|T<<32-
g,"rrot"),A=new Uint32Array(64),_=new Uint8Array(64),D=a(()=>{for(let B=0,j=0;B<16;B++,j+=4)A[B]=_[j]<<
24|_[j+1]<<16|_[j+2]<<8|_[j+3];for(let B=16;B<64;B++){let j=b(A[B-15],7)^b(A[B-15],18)^A[B-15]>>>3,he=b(
A[B-2],17)^b(A[B-2],19)^A[B-2]>>>10;A[B]=A[B-16]+j+A[B-7]+he|0}let T=e,g=t,Z=n,W=i,X=s,ee=o,ae=u,ue=c;
for(let B=0;B<64;B++){let j=b(X,6)^b(X,11)^b(X,25),he=X&ee^~X&ae,ge=ue+j+he+m[B]+A[B]|0,Ve=b(T,2)^b(
T,13)^b(T,22),pe=T&g^T&Z^g&Z,Ie=Ve+pe|0;ue=ae,ae=ee,ee=X,X=W+ge|0,W=Z,Z=g,g=T,T=ge+Ie|0}e=e+T|0,t=t+
g|0,n=n+Z|0,i=i+W|0,s=s+X|0,o=o+ee|0,u=u+ae|0,c=c+ue|0,f=0},"process"),Y=a(T=>{typeof T=="string"&&(T=
new TextEncoder().encode(T));for(let g=0;g<T.length;g++)_[f++]=T[g],f===64&&D();l+=T.length},"add"),
P=a(()=>{if(_[f++]=128,f==64&&D(),f+8>64){for(;f<64;)_[f++]=0;D()}for(;f<58;)_[f++]=0;let T=l*8;_[f++]=
T/1099511627776&255,_[f++]=T/4294967296&255,_[f++]=T>>>24,_[f++]=T>>>16&255,_[f++]=T>>>8&255,_[f++]=
T&255,D();let g=new Uint8Array(32);return g[0]=e>>>24,g[1]=e>>>16&255,g[2]=e>>>8&255,g[3]=e&255,g[4]=
t>>>24,g[5]=t>>>16&255,g[6]=t>>>8&255,g[7]=t&255,g[8]=n>>>24,g[9]=n>>>16&255,g[10]=n>>>8&255,g[11]=n&
255,g[12]=i>>>24,g[13]=i>>>16&255,g[14]=i>>>8&255,g[15]=i&255,g[16]=s>>>24,g[17]=s>>>16&255,g[18]=s>>>
8&255,g[19]=s&255,g[20]=o>>>24,g[21]=o>>>16&255,g[22]=o>>>8&255,g[23]=o&255,g[24]=u>>>24,g[25]=u>>>16&
255,g[26]=u>>>8&255,g[27]=u&255,g[28]=c>>>24,g[29]=c>>>16&255,g[30]=c>>>8&255,g[31]=c&255,g},"digest");
return r===void 0?{add:Y,digest:P}:(Y(r),P())}var as=G(()=>{"use strict";p();a(nt,"sha256")});var U,it,us=G(()=>{"use strict";p();U=class U{constructor(){x(this,"_dataLength",0);x(this,"_bufferL\
ength",0);x(this,"_state",new Int32Array(4));x(this,"_buffer",new ArrayBuffer(68));x(this,"_buffer8");
x(this,"_buffer32");this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this.
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
this._state)}};a(U,"Md5"),x(U,"stateIdentity",new Int32Array([1732584193,-271733879,-1732584194,271733878])),
x(U,"buffer32Identity",new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),x(U,"hexChars","0123456789\
abcdef"),x(U,"hexOut",[]),x(U,"onePassHasher",new U);it=U});var pr={};re(pr,{createHash:()=>_u,createHmac:()=>Cu,randomBytes:()=>Au});function Au(r){return crypto.
getRandomValues(d.alloc(r))}function _u(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return d.from(nt(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?it.hashStr(e):it.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function Cu(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=nt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(nt(o),64),d.from(nt(u))},
"digest")}},"update")}}var dr=G(()=>{"use strict";p();as();us();a(Au,"randomBytes");a(_u,"createHash");
a(Cu,"createHmac")});var st=I((fh,yr)=>{"use strict";p();yr.exports={host:"localhost",user:y.platform==="win32"?y.env.USERNAME:
y.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var qe=rt(),Tu=qe.getTypeParser(20,"text"),Iu=qe.getTypeParser(1016,
"text");yr.exports.__defineSetter__("parseInt8",function(r){qe.setTypeParser(20,"text",r?qe.getTypeParser(
23,"text"):Tu),qe.setTypeParser(1016,"text",r?qe.getTypeParser(1007,"text"):Iu)})});var ot=I((ph,ls)=>{"use strict";p();var Pu=(dr(),O(pr)),Ru=st();function Bu(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Bu,"escapeElement");function cs(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+cs(r[t]):
r[t]instanceof d?e+="\\\\x"+r[t].toString("hex"):e+=Bu(Tt(r[t]));return e=e+"}",e}a(cs,"arrayString");
var Tt=a(function(r,e){if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?Ru.parseInputDatesAsUTC?Fu(r):ku(r):Array.isArray(r)?cs(r):typeof r==
"object"?Lu(r,e):r.toString()},"prepareValue");function Lu(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),Tt(r.toPostgres(Tt),e)}return JSON.stringify(r)}a(Lu,"prepareObject");function N(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(N,"pad");function ku(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=N(t,4)+"-"+N(r.getMonth()+1,2)+"-"+N(r.getDate(),2)+"T"+N(r.getHours(),
2)+":"+N(r.getMinutes(),2)+":"+N(r.getSeconds(),2)+"."+N(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=N(Math.floor(e/60),2)+":"+N(e%60,2),n&&(i+=" BC"),i}a(ku,"dateToString");function Fu(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=N(e,4)+"-"+N(r.getUTCMonth()+1,2)+"-"+N(r.
getUTCDate(),2)+"T"+N(r.getUTCHours(),2)+":"+N(r.getUTCMinutes(),2)+":"+N(r.getUTCSeconds(),2)+"."+N(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Fu,"dateToStringUTC");function Mu(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(Mu,"normalizeQueryConfig");var mr=a(function(r){return Pu.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Uu=a(function(r,e,t){var n=mr(e+r),i=mr(d.concat([d.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");ls.exports={prepareValue:a(function(e){return Tt(e)},"prepareValueWrapper"),
normalizeQueryConfig:Mu,postgresMd5PasswordHash:Uu,md5:mr}});var at={};re(at,{default:()=>qu});var qu,ut=G(()=>{"use strict";p();qu={}});var vs=I((Ih,bs)=>{"use strict";p();var wr=(dr(),O(pr));function Qu(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=wr.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a(Qu,"startSession");function Nu(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=Hu(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=d.from(n.salt,"base64"),s=Vu(e,i,n.iteration),o=Qe(s,"Client Key"),u=Gu(
o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,m=c+
","+l+","+f,b=Qe(u,m),A=ws(o,b),_=A.toString("base64"),D=Qe(s,"Server Key"),Y=Qe(D,m);r.message="SAS\
LResponse",r.serverSignature=Y.toString("base64"),r.response=f+",p="+_}a(Nu,"continueSession");function Wu(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=$u(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(Wu,"finalizeSession");function ju(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(ju,"isPrintableChars");function ms(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(ms,"isBase64");function gs(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(gs,"parseAttribute\
Pairs");function Hu(r){let e=gs(r),t=e.get("r");if(t){if(!ju(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!ms(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(Hu,"parseServerFirstMessage");
function $u(r){let t=gs(r).get("v");if(t){if(!ms(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a($u,"parseServerFinalMessage");function ws(r,e){if(!d.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return d.from(r.map((t,n)=>r[n]^e[n]))}
a(ws,"xorBuffers");function Gu(r){return wr.createHash("sha256").update(r).digest()}a(Gu,"sha256");function Qe(r,e){
return wr.createHmac("sha256",r).update(e).digest()}a(Qe,"hmacSha256");function Vu(r,e,t){for(var n=Qe(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Qe(r,n),i=ws(i,n);return i}a(Vu,"Hi");bs.exports=
{startSession:Qu,continueSession:Nu,finalizeSession:Wu}});var br={};re(br,{join:()=>zu});function zu(...r){return r.join("/")}var vr=G(()=>{"use strict";p();a(
zu,"join")});var xr={};re(xr,{stat:()=>Ku});function Ku(r,e){e(new Error("No filesystem"))}var Sr=G(()=>{"use str\
ict";p();a(Ku,"stat")});var Er={};re(Er,{default:()=>Yu});var Yu,Ar=G(()=>{"use strict";p();Yu={}});var xs={};re(xs,{StringDecoder:()=>_r});var Cr,_r,Ss=G(()=>{"use strict";p();Cr=class Cr{constructor(e){
x(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(Cr,"StringDecoder");_r=Cr});var Cs=I((Oh,_s)=>{"use strict";p();var{Transform:Zu}=(Ar(),O(Er)),{StringDecoder:Ju}=(Ss(),O(xs)),Ae=Symbol(
"last"),It=Symbol("decoder");function Xu(r,e,t){let n;if(this.overflow){if(n=this[It].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[Ae]+=this[It].write(r),n=
this[Ae].split(this.matcher);this[Ae]=n.pop();for(let i=0;i<n.length;i++)try{As(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[Ae].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(Xu,"transform");function ec(r){if(this[Ae]+=this[It].end(),this[Ae])
try{As(this,this.mapper(this[Ae]))}catch(e){return r(e)}r()}a(ec,"flush");function As(r,e){e!==void 0&&
r.push(e)}a(As,"push");function Es(r){return r}a(Es,"noop");function tc(r,e,t){switch(r=r||/\r?\n/,e=
e||Es,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=Es)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=Xu,t.flush=ec,t.readableObjectMode=
!0;let n=new Zu(t);return n[Ae]="",n[It]=new Ju("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(tc,"split");_s.exports=tc});var Ps=I((Nh,me)=>{"use strict";p();var Ts=(vr(),O(br)),rc=(Ar(),O(Er)).Stream,nc=Cs(),Is=(ut(),O(at)),
ic=5432,Pt=y.platform==="win32",ct=y.stderr,sc=56,oc=7,ac=61440,uc=32768;function cc(r){return(r&ac)==
uc}a(cc,"isRegFile");var Ne=["host","port","database","user","password"],Tr=Ne.length,lc=Ne[Tr-1];function Ir(){
var r=ct instanceof rc&&ct.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);ct.write(Is.format.apply(Is,e))}}a(Ir,"warn");Object.defineProperty(me.exports,"isWin",{get:a(function(){
return Pt},"get"),set:a(function(r){Pt=r},"set")});me.exports.warnTo=function(r){var e=ct;return ct=
r,e};me.exports.getFileName=function(r){var e=r||y.env,t=e.PGPASSFILE||(Pt?Ts.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):Ts.join(e.HOME||"./",".pgpass"));return t};me.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(y.env,"PGPASSWORD")?!1:Pt?!0:(e=e||"<unkn>",cc(r.mode)?r.
mode&(sc|oc)?(Ir('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(Ir('WARNING: password file "%s" is not a plain file',e),!1))};var fc=me.exports.
match=function(r,e){return Ne.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||ic)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};me.exports.getPassword=function(r,e,t){var n,i=e.pipe(
nc());function s(c){var l=hc(c);l&&pc(l)&&fc(r,l)&&(n=l[lc],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),Ir("WARNING: error on reading file: %s",c),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var hc=me.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(
function(f,m,b){var A=r.substring(m,b);Object.hasOwnProperty.call(y.env,"PGPASS_NO_DEESCAPE")||(A=A.
replace(/\\([:\\])/g,"$1")),o[Ne[f]]=A},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Tr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).
length===Tr?o:null,o},pc=me.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<Ne.length;t+=1){var n=e[t],i=r[Ne[t]]||"",s=n(i);if(!s)return!1}return!0}});var Bs=I(($h,Pr)=>{"use strict";p();var Hh=(vr(),O(br)),Rs=(Sr(),O(xr)),Rt=Ps();Pr.exports=function(r,e){
var t=Rt.getFileName();Rs.stat(t,function(n,i){if(n||!Rt.usePgPass(i,t))return e(void 0);var s=Rs.createReadStream(
t);Rt.getPassword(r,s,e)})};Pr.exports.warnTo=Rt.warnTo});var Ls={};re(Ls,{default:()=>dc});var dc,ks=G(()=>{"use strict";p();dc={}});var Lr=I((zh,Fs)=>{"use strict";p();var yc=(Xt(),O(Ei)),Rr=(Sr(),O(xr));function Br(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=yc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)?encodeURI(r).replace(/\%25(\d\d)/g,"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&
(t[n]=t[n][t[n].length-1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(
":"),t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=e.query.db,t.
client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.pathname;if(!t.host&&s&&/^%2f/i.
test(s)){var o=s.split("/");t.host=decodeURIComponent(o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(
0)==="/"&&(s=s.slice(1)||null),t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),
t.ssl==="0"&&(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&(t.ssl.
cert=Rr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=Rr.readFileSync(t.sslkey).toString()),
t.sslrootcert&&(t.ssl.ca=Rr.readFileSync(t.sslrootcert).toString()),t.sslmode){case"disable":{t.ssl=
!1;break}case"prefer":case"require":case"verify-ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=
!1;break}}return t}a(Br,"parse");Fs.exports=Br;Br.parse=Br});var Bt=I((Zh,Ds)=>{"use strict";p();var mc=(ks(),O(Ls)),Us=st(),Ms=Lr().parse,H=a(function(r,e,t){return t===
void 0?t=y.env["PG"+r.toUpperCase()]:t===!1||(t=y.env[t]),e[r]||t||Us[r]},"val"),gc=a(function(){switch(y.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return Us.ssl},"readSSLConfigFromEnvironment"),We=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),se=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+We(n))},"add"),Fr=class Fr{constructor(e){e=typeof e=="string"?Ms(e):
e||{},e.connectionString&&(e=Object.assign({},e,Ms(e.connectionString))),this.user=H("user",e),this.
database=H("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(H("por\
t",e),10),this.host=H("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:H("password",e)}),this.binary=H("binary",e),this.options=H("options",e),this.ssl=typeof e.
ssl>"u"?gc():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&
(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this.client_encoding=H("client_encoding",e),this.replication=H("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=H("application_name",e,"PGAPPNAME"),this.fallback_application_name=
H("fallback_application_name",e,!1),this.statement_timeout=H("statement_timeout",e,!1),this.lock_timeout=
H("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=H("idle_in_transaction_session_timeo\
ut",e,!1),this.query_timeout=H("query_timeout",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=
y.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===
!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="nu\
mber"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];se(t,this,"user"),se(t,this,"password"),se(t,this,"port"),se(t,this,"application_name"),se(
t,this,"fallback_application_name"),se(t,this,"connect_timeout"),se(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(se(t,n,"sslmode"),se(t,n,"sslca"),se(t,n,"s\
slkey"),se(t,n,"sslcert"),se(t,n,"sslrootcert"),this.database&&t.push("dbname="+We(this.database)),this.
replication&&t.push("replication="+We(this.replication)),this.host&&t.push("host="+We(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+We(this.client_encoding)),
mc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+We(s)),e(null,t.join(" ")))})}};
a(Fr,"ConnectionParameters");var kr=Fr;Ds.exports=kr});var Qs=I((ep,qs)=>{"use strict";p();var wc=rt(),Os=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,Ur=class Ur{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Os.exec(e.text):t=Os.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=wc.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(Ur,"Result");var Mr=Ur;qs.exports=Mr});var Hs=I((np,js)=>{"use strict";p();var{EventEmitter:bc}=Se(),Ns=Qs(),Ws=ot(),Or=class Or extends bc{constructor(e,t,n){
super(),e=Ws.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,y.domain&&e.callback&&(this.callback=y.domain.bind(e.callback)),this._result=
new Ns(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new Ns(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.callback||!this.
listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){try{t=this._result.parseRow(
e.fields)}catch(n){this._canceledDueToError=n;return}this.emit("row",t,this._result),this._accumulateRows&&
this._result.addRow(t)}}handleCommandComplete(e,t){this._checkForMultirow(),this._result.addCommandComplete(
e),this.rows&&t.sync()}handleEmptyQuery(e){this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&
(e=this._canceledDueToError,this._canceledDueToError=!1),this.callback)return this.callback(e);this.
emit("error",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(this._canceledDueToError,
e);if(this.callback)try{this.callback(null,this._results)}catch(t){y.nextTick(()=>{throw t})}this.emit(
"end",this._results)}submit(e){if(typeof this.text!="string"&&typeof this.name!="string")return new Error(
"A query must have either text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be unique - '${this.name}\
' was used for a different statement`):this.values&&!Array.isArray(this.values)?new Error("Query val\
ues must be an array"):(this.requiresPreparation()?this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){
return this.name&&e.parsedStatements[this.name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){
e.execute({portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=!0,this.
hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});try{e.bind({portal:this.
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:Ws.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Or,"Query");var Dr=Or;js.exports=
Dr});var dn=I(C=>{"use strict";p();Object.defineProperty(C,"__esModule",{value:!0});C.NoticeMessage=C.DataRowMessage=
C.CommandCompleteMessage=C.ReadyForQueryMessage=C.NotificationResponseMessage=C.BackendKeyDataMessage=
C.AuthenticationMD5Password=C.ParameterStatusMessage=C.ParameterDescriptionMessage=C.RowDescriptionMessage=
C.Field=C.CopyResponse=C.CopyDataMessage=C.DatabaseError=C.copyDone=C.emptyQuery=C.replicationStart=
C.portalSuspended=C.noData=C.closeComplete=C.bindComplete=C.parseComplete=void 0;C.parseComplete={name:"\
parseComplete",length:5};C.bindComplete={name:"bindComplete",length:5};C.closeComplete={name:"closeC\
omplete",length:5};C.noData={name:"noData",length:5};C.portalSuspended={name:"portalSuspended",length:5};
C.replicationStart={name:"replicationStart",length:4};C.emptyQuery={name:"emptyQuery",length:4};C.copyDone=
{name:"copyDone",length:4};var Xr=class Xr extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(Xr,"DatabaseError");var qr=Xr;C.DatabaseError=qr;var en=class en{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a(en,"CopyDataMessage");var Qr=en;C.CopyDataMessage=Qr;var tn=class tn{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(tn,"CopyResponse");var Nr=tn;
C.CopyResponse=Nr;var rn=class rn{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a(rn,"Field");var Wr=rn;
C.Field=Wr;var nn=class nn{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(nn,"RowDescriptionMessage");var jr=nn;C.RowDescriptionMessage=
jr;var sn=class sn{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(sn,"ParameterDescriptionMessage");var Hr=sn;
C.ParameterDescriptionMessage=Hr;var on=class on{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(on,"ParameterStatusMessage");var $r=on;C.ParameterStatusMessage=
$r;var an=class an{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(an,"AuthenticationMD5Password");var Gr=an;C.AuthenticationMD5Password=Gr;var un=class un{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(un,"BackendKeyDataMes\
sage");var Vr=un;C.BackendKeyDataMessage=Vr;var cn=class cn{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(cn,"NotificationResponseMessa\
ge");var zr=cn;C.NotificationResponseMessage=zr;var ln=class ln{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(ln,"ReadyForQueryMessage");var Kr=ln;C.ReadyForQueryMessage=Kr;
var fn=class fn{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(fn,"Comma\
ndCompleteMessage");var Yr=fn;C.CommandCompleteMessage=Yr;var hn=class hn{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(hn,"DataRowMessage");var Zr=hn;C.DataRowMessage=
Zr;var pn=class pn{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(pn,"NoticeMe\
ssage");var Jr=pn;C.NoticeMessage=Jr});var $s=I(Lt=>{"use strict";p();Object.defineProperty(Lt,"__esModule",{value:!0});Lt.Writer=void 0;var mn=class mn{constructor(e=256){
this.size=e,this.offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){if(this.buffer.
length-this.offset<e){let n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(i),n.copy(
this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=e>>>24&255,this.buffer[this.
offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){
return this.ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{let t=d.byteLength(e);this.ensure(t+1),this.buffer.write(e,this.offset,"ut\
f-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){let t=d.byteLength(e);
return this.ensure(t),this.buffer.write(e,this.offset),this.offset+=t,this}addInt32PrefixedString(e){
let t=d.byteLength(e);this.ensure(4+t);let n=this.buffer,i=this.offset;return n[i++]=t>>>24&255,n[i++]=
t>>>16&255,n[i++]=t>>>8&255,n[i++]=t>>>0&255,n.write(e,i,"utf-8"),this.offset=i+t,this}add(e){return this.
ensure(e.length),e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+
1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){let t=this.join(e);return this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}clear(){this.offset=5,this.headerPosition=0}};
a(mn,"Writer");var yn=mn;Lt.Writer=yn});var Vs=I(Ft=>{"use strict";p();Object.defineProperty(Ft,"__esModule",{value:!0});Ft.serialize=void 0;
var gn=$s(),L=new gn.Writer,vc=a(r=>{L.addInt16(3).addInt16(0);for(let n of Object.keys(r))L.addCString(
n).addCString(r[n]);L.addCString("client_encoding").addCString("UTF8");let e=L.addCString("").flush(),
t=e.length+4;return new gn.Writer().addInt32(t).add(e).flush()},"startup"),xc=a(()=>{let r=d.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Sc=a(r=>L.addCString(r).flush(
112),"password"),Ec=a(function(r,e){return L.addCString(r).addInt32PrefixedString(e),L.flush(112)},"\
sendSASLInitialResponseMessage"),Ac=a(function(r){return L.addString(r).flush(112)},"sendSCRAMClient\
FinalMessage"),_c=a(r=>L.addCString(r).flush(81),"query"),Gs=[],Cc=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),console.error("You \
supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors executing qu\
eries"));let t=r.types||Gs,n=t.length,i=L.addCString(e).addCString(r.text).addInt16(n);for(let s=0;s<
n;s++)i.addInt32(t[s]);return L.flush(80)},"parse"),je=new gn.Writer,Tc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(L.addInt16(0),je.addInt32(-1)):n instanceof d?(L.addInt16(
1),je.addInt32(n.length),je.add(n)):(L.addInt16(0),je.addInt32PrefixedString(n))}},"writeValues"),Ic=a(
(r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||Gs,s=i.length;L.addCString(
e).addCString(t),L.addInt16(s);try{Tc(i,r.valueMapper)}catch(o){throw L.clear(),je.clear(),o}return L.
addInt16(s),L.add(je.flush()),L.addInt16(1),L.addInt16(n?1:0),L.flush(66)},"bind"),Pc=d.from([69,0,0,
0,9,0,0,0,0,0]),Rc=a(r=>{if(!r||!r.portal&&!r.rows)return Pc;let e=r.portal||"",t=r.rows||0,n=d.byteLength(
e),i=4+n+1+4,s=d.allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.
writeUInt32BE(t,s.length-4),s},"execute"),Bc=a((r,e)=>{let t=d.allocUnsafe(16);return t.writeInt32BE(
16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"can\
cel"),wn=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),
i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),Lc=L.addCString("P").flush(68),kc=L.addCString("S").
flush(68),Fc=a(r=>r.name?wn(68,`${r.type}${r.name||""}`):r.type==="P"?Lc:kc,"describe"),Mc=a(r=>{let e=`${r.
type}${r.name||""}`;return wn(67,e)},"close"),Uc=a(r=>L.add(r).flush(100),"copyData"),Dc=a(r=>wn(102,
r),"copyFail"),kt=a(r=>d.from([r,0,0,0,4]),"codeOnlyBuffer"),Oc=kt(72),qc=kt(83),Qc=kt(88),Nc=kt(99),
Wc={startup:vc,password:Sc,requestSsl:xc,sendSASLInitialResponseMessage:Ec,sendSCRAMClientFinalMessage:Ac,
query:_c,parse:Cc,bind:Ic,execute:Rc,describe:Fc,close:Mc,flush:a(()=>Oc,"flush"),sync:a(()=>qc,"syn\
c"),end:a(()=>Qc,"end"),copyData:Uc,copyDone:a(()=>Nc,"copyDone"),copyFail:Dc,cancel:Bc};Ft.serialize=
Wc});var zs=I(Mt=>{"use strict";p();Object.defineProperty(Mt,"__esModule",{value:!0});Mt.BufferReader=void 0;
var vn=class vn{constructor(e=0){this.offset=e,this.buffer=d.allocUnsafe(0),this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=2,
e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++];);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(vn,"BufferReader");var bn=vn;Mt.BufferReader=bn});var Js=I(Ut=>{"use strict";p();Object.defineProperty(Ut,"__esModule",{value:!0});Ut.Parser=void 0;var F=dn(),
jc=zs(),Sn=1,Hc=4,Ks=Sn+Hc,J=-1,xn=d.allocUnsafe(0),An=class An{constructor(e){if(this.buffer=xn,this.
bufferLength=0,this.bufferOffset=0,this.reader=new jc.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+Ks<=n;){let s=this.buffer[i],o=this.buffer.
readUInt32BE(i+Sn),u=Sn+o;if(u+i<=n){let c=this.handlePacket(i+Ks,s,o,this.buffer);t(c),i+=u}else break}
i===n?(this.buffer=xn,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=
i)}mergeBuffer(e){if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.
buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=d.allocUnsafe(s)}this.buffer.copy(i,0,this.
bufferOffset,this.bufferOffset+this.bufferLength),this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,
this.bufferOffset+this.bufferLength),this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.
bufferLength=e.byteLength}handlePacket(e,t,n,i){let{reader:s}=this;s.setBuffer(e,i);let o;switch(t){case 50:
o=F.bindComplete;break;case 49:o=F.parseComplete;break;case 51:o=F.closeComplete;break;case 110:o=F.
noData;break;case 115:o=F.portalSuspended;break;case 99:o=F.copyDone;break;case 87:o=F.replicationStart;
break;case 73:o=F.emptyQuery;break;case 68:o=el(s);break;case 67:o=Gc(s);break;case 90:o=$c(s);break;case 65:
o=Yc(s);break;case 82:o=nl(s,n);break;case 83:o=tl(s);break;case 75:o=rl(s);break;case 69:o=Ys(s,"er\
ror");break;case 78:o=Ys(s,"notice");break;case 84:o=Zc(s);break;case 116:o=Xc(s);break;case 71:o=zc(
s);break;case 72:o=Kc(s);break;case 100:o=Vc(s,n);break;default:return new F.DatabaseError("received\
 invalid response: "+t.toString(16),n,"error")}return s.setBuffer(0,xn),o.length=n,o}};a(An,"Parser");
var En=An;Ut.Parser=En;var $c=a(r=>{let e=r.string(1);return new F.ReadyForQueryMessage(J,e)},"parse\
ReadyForQueryMessage"),Gc=a(r=>{let e=r.cstring();return new F.CommandCompleteMessage(J,e)},"parseCo\
mmandCompleteMessage"),Vc=a((r,e)=>{let t=r.bytes(e-4);return new F.CopyDataMessage(J,t)},"parseCopy\
Data"),zc=a(r=>Zs(r,"copyInResponse"),"parseCopyInMessage"),Kc=a(r=>Zs(r,"copyOutResponse"),"parseCo\
pyOutMessage"),Zs=a((r,e)=>{let t=r.byte()!==0,n=r.int16(),i=new F.CopyResponse(J,e,t,n);for(let s=0;s<
n;s++)i.columnTypes[s]=r.int16();return i},"parseCopyMessage"),Yc=a(r=>{let e=r.int32(),t=r.cstring(),
n=r.cstring();return new F.NotificationResponseMessage(J,e,t,n)},"parseNotificationMessage"),Zc=a(r=>{
let e=r.int16(),t=new F.RowDescriptionMessage(J,e);for(let n=0;n<e;n++)t.fields[n]=Jc(r);return t},"\
parseRowDescriptionMessage"),Jc=a(r=>{let e=r.cstring(),t=r.uint32(),n=r.int16(),i=r.uint32(),s=r.int16(),
o=r.int32(),u=r.int16()===0?"text":"binary";return new F.Field(e,t,n,i,s,o,u)},"parseField"),Xc=a(r=>{
let e=r.int16(),t=new F.ParameterDescriptionMessage(J,e);for(let n=0;n<e;n++)t.dataTypeIDs[n]=r.uint32();
return t},"parseParameterDescriptionMessage"),el=a(r=>{let e=r.int16(),t=new Array(e);for(let n=0;n<
e;n++){let i=r.int32();t[n]=i===-1?null:r.string(i)}return new F.DataRowMessage(J,t)},"parseDataRowM\
essage"),tl=a(r=>{let e=r.cstring(),t=r.cstring();return new F.ParameterStatusMessage(J,e,t)},"parse\
ParameterStatusMessage"),rl=a(r=>{let e=r.int32(),t=r.int32();return new F.BackendKeyDataMessage(J,e,
t)},"parseBackendKeyData"),nl=a((r,e)=>{let t=r.int32(),n={name:"authenticationOk",length:e};switch(t){case 0:
break;case 3:n.length===8&&(n.name="authenticationCleartextPassword");break;case 5:if(n.length===12){
n.name="authenticationMD5Password";let i=r.bytes(4);return new F.AuthenticationMD5Password(J,i)}break;case 10:
{n.name="authenticationSASL",n.mechanisms=[];let i;do i=r.cstring(),i&&n.mechanisms.push(i);while(i)}
break;case 11:n.name="authenticationSASLContinue",n.data=r.string(e-8);break;case 12:n.name="authent\
icationSASLFinal",n.data=r.string(e-8);break;default:throw new Error("Unknown authenticationOk messa\
ge type "+t)}return n},"parseAuthenticationResponse"),Ys=a((r,e)=>{let t={},n=r.string(1);for(;n!=="\
\0";)t[n]=r.cstring(),n=r.string(1);let i=t.M,s=e==="notice"?new F.NoticeMessage(J,i):new F.DatabaseError(
i,J,e);return s.severity=t.S,s.code=t.C,s.detail=t.D,s.hint=t.H,s.position=t.P,s.internalPosition=t.
p,s.internalQuery=t.q,s.where=t.W,s.schema=t.s,s.table=t.t,s.column=t.c,s.dataType=t.d,s.constraint=
t.n,s.file=t.F,s.line=t.L,s.routine=t.R,s},"parseErrorMessage")});var _n=I(Te=>{"use strict";p();Object.defineProperty(Te,"__esModule",{value:!0});Te.DatabaseError=Te.
serialize=void 0;Te.parse=al;var il=dn();Object.defineProperty(Te,"DatabaseError",{enumerable:!0,get:a(
function(){return il.DatabaseError},"get")});var sl=Vs();Object.defineProperty(Te,"serialize",{enumerable:!0,
get:a(function(){return sl.serialize},"get")});var ol=Js();function al(r,e){let t=new ol.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(al,"parse")});var Xs={};re(Xs,{connect:()=>ul});function ul({socket:r,servername:e}){return r.startTls(e),r}var eo=G(
()=>{"use strict";p();a(ul,"connect")});var In=I((Cp,no)=>{"use strict";p();var to=(Me(),O(Si)),cl=Se().EventEmitter,{parse:ll,serialize:Q}=_n(),
ro=Q.flush(),fl=Q.sync(),hl=Q.end(),Tn=class Tn extends cl{constructor(e){super(),e=e||{},this.stream=
e.stream||new to.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(eo(),O(Xs));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=
n.ssl.key)),to.isIP(t)===0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",
l)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),ll(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(Q.requestSsl())}startup(e){this.
stream.write(Q.startup(e))}cancel(e,t){this._send(Q.cancel(e,t))}password(e){this._send(Q.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(Q.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(Q.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(Q.query(e))}parse(e){
this._send(Q.parse(e))}bind(e){this._send(Q.bind(e))}execute(e){this._send(Q.execute(e))}flush(){this.
stream.writable&&this.stream.write(ro)}sync(){this._ending=!0,this._send(ro),this._send(fl)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(hl,()=>{this.stream.end()})}close(e){this._send(Q.
close(e))}describe(e){this._send(Q.describe(e))}sendCopyFromChunk(e){this._send(Q.copyData(e))}endCopyFrom(){
this._send(Q.copyDone())}sendCopyFail(e){this._send(Q.copyFail(e))}};a(Tn,"Connection");var Cn=Tn;no.
exports=Cn});var oo=I((Rp,so)=>{"use strict";p();var pl=Se().EventEmitter,Pp=(ut(),O(at)),dl=ot(),Pn=vs(),yl=Bs(),
ml=Ct(),gl=Bt(),io=Hs(),wl=st(),bl=In(),Rn=class Rn extends pl{constructor(e){super(),this.connectionParameters=
new gl(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||w.Promise,
this._types=new ml(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new bl({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||wl.binary,this.
processID=null,this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.key&&
Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=t.connectionTimeoutMillis||
0}_errorAllQueries(e){let t=a(n=>{y.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");
this.activeQuery&&(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse a client.");y.nextTick(
()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&
(this.connectionTimeoutHandle=setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expir\
ed"))},this._connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.\
s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),this._attachListeners(
n),n.once("end",()=>{let i=this._ending?new Error("Connection terminated"):new Error("Connection ter\
minated unexpectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(i),this._ending||
(this._connecting&&!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),y.nextTick(()=>{this.emit("en\
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
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():yl(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=dl.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=Pn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){Pn.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){Pn.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
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
!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);e&&y.nextTick(()=>{this.activeQuery.
handleError(e,this.connection),this.readyForQuery=!0,this._pulseQueryQueue()})}else this.hasExecuted&&
(this.activeQuery=null,this.emit("drain"))}query(e,t,n){var i,s,o,u,c;if(e==null)throw new TypeError(
"Client was passed a null or undefined query");return typeof e.submit=="function"?(o=e.query_timeout||
this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&(i.callback=i.callback||t)):(o=this.
connectionParameters.query_timeout,i=new io(e,t,n),i.callback||(s=new this._Promise((l,f)=>{i.callback=
(m,b)=>m?f(m):l(b)}))),o&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");y.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var f=this.queryQueue.indexOf(i);f>-1&&
this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=(l,f)=>{clearTimeout(u),c(l,f)}),
this.binary&&!i.binary&&(i.binary=!0),i._result&&!i._result._types&&(i._result._types=this._types),this.
_queryable?this._ending?(y.nextTick(()=>{i.handleError(new Error("Client was closed and is not query\
able"),this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(y.nextTick(()=>{i.
handleError(new Error("Client has encountered a connection error and is not queryable"),this.connection)}),
s)}ref(){this.connection.ref()}unref(){this.connection.unref()}end(e){if(this._ending=!0,!this.connection.
_connecting)if(e)e();else return this._Promise.resolve();if(this.activeQuery||!this._queryable?this.
connection.stream.destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(Rn,"Client");var Dt=Rn;Dt.Query=io;so.exports=Dt});var co=I((kp,uo)=>{"use strict";p();var vl=Se().EventEmitter,Bn=a(function(){},"NOOP"),ao=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),Fn=class Fn{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(Fn,"IdleItem");var Ln=Fn,Mn=class Mn{constructor(e){
this.callback=e}};a(Mn,"PendingItem");var He=Mn;function xl(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(xl,"throwOnDoubleRelease");function Ot(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(Ot,"promisify");
function Sl(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(Sl,"makeIdleListener");var Un=class Un extends vl{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
min=this.options.min||0,this.options.maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=
this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,
this.log=this.options.log||function(){},this.Client=this.options.Client||t||lt().Client,this.Promise=
this.options.Promise||w.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=[],this._endCallback=
void 0,this.ending=!1,this.ended=!1}_promiseTry(e){let t=this.Promise;return typeof t.try=="function"?
t.try(e):new t(n=>n(e()))}_isFull(){return this._clients.length>=this.options.max}_isAboveMin(){return this.
_clients.length>this.options.min}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.log("puls\
e queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&this._idle.
slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}
if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this._isFull())
return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(t.
timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}if(!this.
_isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e,t){let n=ao(this.
_idle,s=>s.client===e);n!==void 0&&clearTimeout(n.timeoutId),this._clients=this._clients.filter(s=>s!==
e);let i=this;e.end(()=>{i.emit("remove",e),typeof t=="function"&&t()})}connect(e){if(this.ending){let i=new Error(
"Cannot use a pool after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=Ot(this.
Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&y.nextTick(()=>this.
_pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new He(t.callback)),
n;let i=a((u,c,l)=>{clearTimeout(o),t.callback(u,c,l)},"queueCallback"),s=new He(i),o=setTimeout(()=>{
ao(this._pendingQueue,u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when t\
rying to connect"))},this.options.connectionTimeoutMillis);return o.unref&&o.unref(),this._pendingQueue.
push(s),n}return this.newClient(new He(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=Sl(this,t);this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{t.connection?(this.log("ending client due to timeout"),s=!0,t.connection.stream.destroy()):
t.isConnected()||(this.log("ending client due to timeout"),s=!0,t.end())},this.options.connectionTimeoutMillis)),
this.log("connecting new client"),t.connect(o=>{if(i&&clearTimeout(i),t.on("error",n),o)this.log("cl\
ient failed to connect",o),this._clients=this._clients.filter(u=>u!==t),s&&(o=new Error("Connection \
terminated due to connection timeout",{cause:o})),this._pulseQueue(),e.timedOut||e.callback(o,void 0,
Bn);else{if(this.log("new client connected"),this.options.onConnect){this._promiseTry(()=>this.options.
onConnect(t)).then(()=>{this._afterConnect(t,e,n)},u=>{this._clients=this._clients.filter(c=>c!==t),
t.end(()=>{this._pulseQueue(),e.timedOut||e.callback(u,void 0,Bn)})});return}return this._afterConnect(
t,e,n)}})}_afterConnect(e,t,n){if(this.options.maxLifetimeSeconds!==0){let i=setTimeout(()=>{this.log(
"ending client due to expired lifetime"),this._expired.add(e),this._idle.findIndex(o=>o.client===e)!==
-1&&this._acquireClient(e,new He((o,u,c)=>c()),n,!1)},this.options.maxLifetimeSeconds*1e3);i.unref(),
e.once("end",()=>clearTimeout(i))}return this._acquireClient(e,t,n,!0)}_acquireClient(e,t,n,i){i&&this.
emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),e.removeListener("error",n),
t.timedOut?i&&this.options.verify?this.options.verify(e,e.release):e.release():i&&this.options.verify?
this.options.verify(e,s=>{if(s)return e.release(s),t.callback(s,void 0,Bn);t.callback(void 0,e,e.release)}):
t.callback(void 0,e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&xl(),n=!0,this._release(e,t,
i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,this.emit("release",n,
e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=this.options.maxUses)return e._poolUseCount>=
this.options.maxUses&&this.log("remove expended client"),this._remove(e,this._pulseQueue.bind(this));
if(this._expired.has(e))return this.log("remove expired client"),this._expired.delete(e),this._remove(
e,this._pulseQueue.bind(this));let s;this.options.idleTimeoutMillis&&this._isAboveMin()&&(s=setTimeout(
()=>{this._isAboveMin()&&(this.log("remove idle client"),this._remove(e,this._pulseQueue.bind(this)))},
this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&
e.unref(),this._idle.push(new Ln(e,t,s)),this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Ot(
this.Promise,e);return v(function(){return s.callback(new Error("Passing a function as the first par\
ameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=t,t=void 0);let i=Ot(this.
Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)return n(s);let u=!1,c=a(l=>{u||(u=!0,o.release(
l),n(l))},"onError");o.once("error",c),this.log("dispatching query");try{o.query(e,t,(l,f)=>{if(this.
log("query dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,f)})}catch(l){
return o.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),this.ending){let n=new Error("Call\
ed end on pool more than once");return e?e(n):this.Promise.reject(n)}this.ending=!0;let t=Ot(this.Promise,
e);return this._endCallback=t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.reduce((e,t)=>e+
(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.length}};a(Un,"Pool");var kn=Un;
uo.exports=kn});var lo={};re(lo,{default:()=>El});var El,fo=G(()=>{"use strict";p();El={}});var ho=I((Dp,Al)=>{Al.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var mo=I((Op,yo)=>{"use strict";p();var po=Se().EventEmitter,_l=(ut(),O(at)),Dn=ot(),$e=yo.exports=function(r,e,t){
po.call(this),r=Dn.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};_l.inherits($e,po);
var Cl={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};$e.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=Cl[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};$e.prototype.then=function(r,e){return this._getPromise().then(
r,e)};$e.prototype.catch=function(r){return this._getPromise().catch(r)};$e.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};$e.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,v(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(c,l)=>{c.forEach(f=>{e.emit("row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(y.domain&&(t=y.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(Dn.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(Dn.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var vo=I((Wp,bo)=>{"use strict";p();var Tl=(fo(),O(lo)),Il=Ct(),Np=ho(),go=Se().EventEmitter,Pl=(ut(),O(at)),
Rl=Bt(),wo=mo(),K=bo.exports=function(r){go.call(this),r=r||{},this._Promise=r.Promise||w.Promise,this.
_types=new Il(r.types),this.native=new Tl({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Rl(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};K.Query=
wo;Pl.inherits(K,go);K.prototype._errorAllQueries=function(r){let e=a(t=>{y.nextTick(()=>{t.native=this.
native,t.handleError(r)})},"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};K.prototype._connect=function(r){var e=this;
if(this._connecting){y.nextTick(()=>r(new Error("Client has already been connected. You cannot reuse\
 a client.")));return}this._connecting=!0,this.connectionParameters.getLibpqConnectionString(function(t,n){
if(t)return r(t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,e.native.
on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notifi\
cation",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.emit("connect"),e.
_pulseQueryQueue(!0),r()})})};K.prototype.connect=function(r){if(r){this._connect(r);return}return new this.
_Promise((e,t)=>{this._connect(n=>{n?t(n):e()})})};K.prototype.query=function(r,e,t){var n,i,s,o,u;if(r==
null)throw new TypeError("Client was passed a null or undefined query");if(typeof r.submit=="functio\
n")s=r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="function"&&(r.callback=
e);else if(s=this.connectionParameters.query_timeout,n=new wo(r,e,t),!n.callback){let c,l;i=new this.
_Promise((f,m)=>{c=f,l=m}),n.callback=(f,m)=>f?l(f):c(m)}return s&&(u=n.callback,o=setTimeout(()=>{var c=new Error(
"Query read timeout");y.nextTick(()=>{n.handleError(c,this.connection)}),u(c),n.callback=()=>{};var l=this.
_queryQueue.indexOf(n);l>-1&&this._queryQueue.splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{
clearTimeout(o),u(c,l)}),this._queryable?this._ending?(n.native=this.native,y.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),
i):(n.native=this.native,y.nextTick(()=>{n.handleError(new Error("Client has encountered a connectio\
n error and is not queryable"))}),i)};K.prototype.end=function(r){var e=this;this._ending=!0,this._connected||
this.once("connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){r=a(s=>s?
i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error("Connection terminated")),
y.nextTick(()=>{e.emit("end"),r&&r()})}),t};K.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};K.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){r||this.emit("dra\
in");return}this._activeQuery=e,e.submit(this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};
K.prototype.cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};K.prototype.ref=function(){};
K.prototype.unref=function(){};K.prototype.setTypeParser=function(r,e,t){return this._types.setTypeParser(
r,e,t)};K.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var On=I(($p,xo)=>{"use strict";p();xo.exports=vo()});var lt=I((Vp,ft)=>{"use strict";p();var Bl=oo(),Ll=st(),kl=In(),Fl=co(),{DatabaseError:Ml}=_n(),Ul=a(
r=>{var e;return e=class extends Fl{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),qn=a(
function(r){this.defaults=Ll,this.Client=r,this.Query=this.Client.Query,this.Pool=Ul(this.Client),this.
_pools=[],this.Connection=kl,this.types=rt(),this.DatabaseError=Ml},"PG");typeof y.env.NODE_PG_FORCE_NATIVE<
"u"?ft.exports=new qn(On()):(ft.exports=new qn(Bl),Object.defineProperty(ft.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new qn(On())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(ft.exports,"native",{value:r}),r}}))});var ql={};re(ql,{Client:()=>Ge,DatabaseError:()=>fe.DatabaseError,Pool:()=>qt,SqlTemplate:()=>Ue,UnsafeRawSql:()=>De,
_bundleExt:()=>Ol,defaults:()=>fe.defaults,escapeIdentifier:()=>fe.escapeIdentifier,escapeLiteral:()=>fe.escapeLiteral,
neon:()=>gr,neonConfig:()=>oe,parseConnectionString:()=>_o.parse,types:()=>fe.types,warnIfBrowser:()=>Ye});
module.exports=O(ql);p();p();Me();Xt();p();var ba=Object.defineProperty,va=Object.defineProperties,xa=Object.getOwnPropertyDescriptors,Ai=Object.
getOwnPropertySymbols,Sa=Object.prototype.hasOwnProperty,Ea=Object.prototype.propertyIsEnumerable,_i=a(
(r,e,t)=>e in r?ba(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
Aa=a((r,e)=>{for(var t in e||(e={}))Sa.call(e,t)&&_i(r,t,e[t]);if(Ai)for(var t of Ai(e))Ea.call(e,t)&&
_i(r,t,e[t]);return r},"__spreadValues"),_a=a((r,e)=>va(r,xa(e)),"__spreadProps"),Ca=1008e3,Ci=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,Ta=new TextDecoder,er=new TextEncoder,gt=er.encode("0123456789\
abcdef"),wt=er.encode("0123456789ABCDEF"),Ia=er.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var Ti=Ia.slice();Ti[62]=45;Ti[63]=95;var Ke,bt;function Pa(r,{alphabet:e,scratchArr:t}={}){if(!Ke)if(Ke=
new Uint16Array(256),bt=new Uint16Array(256),Ci)for(let _=0;_<256;_++)Ke[_]=gt[_&15]<<8|gt[_>>>4],bt[_]=
wt[_&15]<<8|wt[_>>>4];else for(let _=0;_<256;_++)Ke[_]=gt[_&15]|gt[_>>>4]<<8,bt[_]=wt[_&15]|wt[_>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),c=new Uint32Array(o.buffer,o.byteOffset,i),l=e==="upper"?bt:Ke,f=0,m=0,b;if(Ci)
for(;f<s;)b=u[f++],c[m++]=l[b>>>8&255]<<16|l[b&255],c[m++]=l[b>>>24]<<16|l[b>>>16&255];else for(;f<s;)
b=u[f++],c[m++]=l[b>>>24]<<16|l[b>>>16&255],c[m++]=l[b>>>8&255]<<16|l[b&255];for(f<<=2;f<n;)o[f]=l[r[f++]];
return Ta.decode(o.subarray(0,n))}a(Pa,"_toHex");function Ra(r,e={}){let t="",n=r.length,i=Ca>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n);for(let u=0;u<s;u++){let c=u*i,l=c+i;t+=Pa(r.subarray(c,l),_a(Aa(
{},e),{scratchArr:o}))}return t}a(Ra,"_toHexChunked");function Ii(r,e={}){return e.alphabet!=="upper"&&
typeof r.toHex=="function"?r.toHex():Ra(r,e)}a(Ii,"toHex");p();p();var tr=class tr{constructor(e,t,n){x(this,"execute",e);x(this,"queryData",t);x(this,"opts",n)}then(e,t){
return this.execute(this.queryData,this.opts).then(e,t)}catch(e){return this.execute(this.queryData,
this.opts).catch(e)}finally(e){return this.execute(this.queryData,this.opts).finally(e)}};a(tr,"Neon\
QueryPromise");var Ee=tr;var vt=class vt{constructor(e,t){x(this,"strings",e);x(this,"values",t)}toParameterizedQuery(e={query:"",
params:[]}){let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<n.length){
let o=n[i];if(o instanceof De)e.query+=o.sql;else if(o instanceof Ee)if(o.queryData instanceof vt)o.
queryData.toParameterizedQuery(e);else{if(o.queryData.params?.length)throw new Error("This query is \
not composable");e.query+=o.queryData.query}else{let{params:u}=e;u.push(o),e.query+="$"+u.length,(o instanceof
d||ArrayBuffer.isView(o))&&(e.query+="::bytea")}}return e}};a(vt,"SqlTemplate");var Ue=vt,rr=class rr{constructor(e){
x(this,"sql",e)}};a(rr,"UnsafeRawSql");var De=rr;p();function Ye(){typeof window<"u"&&typeof document<"u"&&typeof console<"u"&&typeof console.warn=="func\
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
        ************************************************************`)}a(Ye,"warnIfBrowser");p();var xt=class xt extends Error{constructor(t){super(t);x(this,"name","NeonDbError");x(this,"severity");
x(this,"code");x(this,"detail");x(this,"hint");x(this,"position");x(this,"internalPosition");x(this,
"internalQuery");x(this,"where");x(this,"schema");x(this,"table");x(this,"column");x(this,"dataType");
x(this,"constraint");x(this,"file");x(this,"line");x(this,"routine");x(this,"sourceError");"captureS\
tackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,xt)}};a(
xt,"NeonDbError");var ye=xt,Pi=["severity","code","detail","hint","position","internalPosition","int\
ernalQuery","where","schema","table","column","dataType","constraint","file","line","routine"];Me();var ds=ve(Ct()),ys=ve(ot());var fs="transaction() expects an array of queries, or a function returning an array of queries";function Du(r){
return r instanceof d?"\\x"+Ii(r):r}a(Du,"encodeBuffersAsBytea");function hs(r){let{query:e,params:t}=r instanceof
Ue?r.toParameterizedQuery():r;return{query:e,params:t.map(n=>Du((0,ys.prepareValue)(n)))}}a(hs,"prep\
areQuery");function gr(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,
authToken:u,disableWarningInBrowsers:c}={}){if(!r)throw new Error("No database connection string was\
 provided to `neon()`. Perhaps an environment variable has not been set?");let l;try{l=Jt(r)}catch{throw new Error(
"Database connection string provided to `neon()` is not a valid URL. Connection string: "+String(r))}
let{protocol:f,username:m,hostname:b,port:A,pathname:_}=l;if(f!=="postgres:"&&f!=="postgresql:"||!m||
!b||!_)throw new Error("Database connection string format for `neon()` should be: postgresql://user:\
password@host.tld/dbname?option=value");function D(P,...T){if(!(Array.isArray(P)&&Array.isArray(P.raw)&&
Array.isArray(T)))throw new Error('This function can now be called only as a tagged-template functio\
n: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call wi\
th value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).');return new Ee(
Y,new Ue(P,T))}a(D,"templateFn"),D.query=(P,T,g)=>new Ee(Y,{query:P,params:T??[]},g),D.unsafe=P=>new De(
P),D.transaction=async(P,T)=>{if(typeof P=="function"&&(P=P(D)),!Array.isArray(P))throw new Error(fs);
P.forEach(W=>{if(!(W instanceof Ee))throw new Error(fs)});let g=P.map(W=>W.queryData),Z=P.map(W=>W.opts??
{});return Y(g,Z,T)};async function Y(P,T,g){let{fetchEndpoint:Z,fetchFunction:W}=oe,X=Array.isArray(
P)?{queries:P.map(te=>hs(te))}:hs(P),ee=n??{},ae=e??!1,ue=t??!1,B=i,j=s,he=o;g!==void 0&&(g.fetchOptions!==
void 0&&(ee={...ee,...g.fetchOptions}),g.arrayMode!==void 0&&(ae=g.arrayMode),g.fullResults!==void 0&&
(ue=g.fullResults),g.isolationLevel!==void 0&&(B=g.isolationLevel),g.readOnly!==void 0&&(j=g.readOnly),
g.deferrable!==void 0&&(he=g.deferrable)),T!==void 0&&!Array.isArray(T)&&T.fetchOptions!==void 0&&(ee=
{...ee,...T.fetchOptions});let ge=u;!Array.isArray(T)&&T?.authToken!==void 0&&(ge=T.authToken);let Ve=typeof Z==
"function"?Z(b,A,{jwtAuth:ge!==void 0}):Z,pe={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"tru\
e","Neon-Array-Mode":"true"},Ie=await Ou(ge);Ie&&(pe.Authorization=`Bearer ${Ie}`),Array.isArray(P)&&
(B!==void 0&&(pe["Neon-Batch-Isolation-Level"]=B),j!==void 0&&(pe["Neon-Batch-Read-Only"]=String(j)),
he!==void 0&&(pe["Neon-Batch-Deferrable"]=String(he))),c||oe.disableWarningInBrowsers||Ye();let we;try{
we=await(W??fetch)(Ve,{method:"POST",body:JSON.stringify(X),headers:pe,...ee})}catch(te){let M=new ye(
`Error connecting to database: ${te}`);throw M.sourceError=te,M}if(we.ok){let te=await we.json();if(Array.
isArray(P)){let M=te.results;if(!Array.isArray(M))throw new ye("Neon internal error: unexpected resu\
lt format");return M.map(($,be)=>{let Qt=T[be]??{},Co=Qt.arrayMode??ae,To=Qt.fullResults??ue;return ps(
$,{arrayMode:Co,fullResults:To,types:Qt.types})})}else{let M=T??{},$=M.arrayMode??ae,be=M.fullResults??
ue;return ps(te,{arrayMode:$,fullResults:be,types:M.types})}}else{let{status:te}=we;if(te===400){let M=await we.
json(),$=new ye(M.message);for(let be of Pi)$[be]=M[be]??void 0;throw $}else{let M=await we.text();throw new ye(
`Server error (HTTP status ${te}): ${M}`)}}}return a(Y,"execute"),D}a(gr,"neon");function ps(r,{arrayMode:e,
fullResults:t,types:n}){let i=new ds.default(n),s=r.fields.map(c=>c.name),o=r.fields.map(c=>i.getTypeParser(
c.dataTypeID)),u=e===!0?r.rows.map(c=>c.map((l,f)=>l===null?null:o[f](l))):r.rows.map(c=>Object.fromEntries(
c.map((l,f)=>[s[f],l===null?null:o[f](l)])));return t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r._parsers=
o,r._types=i,r):u}a(ps,"processQueryResult");async function Ou(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new ye("Error getting auth token.");
throw e instanceof Error&&(t=new ye(`Error getting auth token: ${e.message}`)),t}}a(Ou,"getAuthToken");p();var Eo=ve(lt());p();var So=ve(lt());var Qn=class Qn extends So.Client{constructor(t){super(t);x(this,"config",t)}get neonConfig(){return this.
connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=
!1),this.ssl&&n.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=re\
quire in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSo\
cket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disabl\
e SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");let i=typeof this.config!=
"string"&&this.config?.host!==void 0||typeof this.config!="string"&&this.config?.connectionString!==
void 0||y.env.PGHOST!==void 0,s=y.env.USER??y.env.USERNAME;if(!i&&this.host==="localhost"&&this.user===
s&&this.database===s&&this.password===null)throw new Error(`No database host or connection string wa\
s set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null\
). Is an environment variable missing? Alternatively, if you intended to connect with these paramete\
rs, please set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&this.ssl,
c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let l=this.connection;if(u&&l.on(
"connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners("authenticationCleartextPassword"),
l.removeAllListeners("readyForQuery"),l.once("readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let f=this.ssl?"sslconnect":"connect";l.on(f,()=>{this.neonConfig.disableWarningInBrowsers||
Ye(),this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){
if(typeof crypto>"u"||crypto.subtle===void 0||crypto.subtle.importKey===void 0)throw new Error("Cann\
ot use SASL auth when `crypto.subtle` is not defined");let n=crypto.subtle,i=this.saslSession,s=this.
password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="string"||typeof o!="string")throw new Error(
"SASL: protocol error");let u=Object.fromEntries(o.split(",").map(M=>{if(!/^.=/.test(M))throw new Error(
"SASL: Invalid attribute pair entry");let $=M[0],be=M.substring(2);return[$,be]})),c=u.r,l=u.s,f=u.i;
if(!c||!/^[!-+--~]+$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unpri\
ntable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(l))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.test(f))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!c.startsWith(i.clientNonce))
throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");if(c.
length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too\
 short");let m=parseInt(f,10),b=d.from(l,"base64"),A=new TextEncoder,_=A.encode(s),D=await n.importKey(
"raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Y=new Uint8Array(await n.sign("HMAC",D,d.concat(
[b,d.from([0,0,0,1])]))),P=Y;for(var T=0;T<m-1;T++)Y=new Uint8Array(await n.sign("HMAC",D,Y)),P=d.from(
P.map((M,$)=>P[$]^Y[$]));let g=P,Z=await n.importKey("raw",g,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),W=new Uint8Array(await n.sign("HMAC",Z,A.encode("Client Key"))),X=await n.digest("SHA-256",
W),ee="n=*,r="+i.clientNonce,ae="r="+c+",s="+l+",i="+m,ue="c=biws,r="+c,B=ee+","+ae+","+ue,j=await n.
importKey("raw",X,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var he=new Uint8Array(await n.sign(
"HMAC",j,A.encode(B))),ge=d.from(W.map((M,$)=>W[$]^he[$])),Ve=ge.toString("base64");let pe=await n.importKey(
"raw",g,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Ie=await n.sign("HMAC",pe,A.encode("Server \
Key")),we=await n.importKey("raw",Ie,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var te=d.from(
await n.sign("HMAC",we,A.encode(B)));i.message="SASLResponse",i.serverSignature=te.toString("base64"),
i.response=ue+",p="+Ve,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};a(Qn,
"NeonClient");var Ge=Qn;Me();var Ao=ve(Bt());function Dl(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(Dl,"promisify");var Nn=class Nn extends Eo.Pool{constructor(){
super(...arguments);x(this,"Client",Ge);x(this,"hasFetchUnsupportedListeners",!1);x(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!oe.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=Dl(this.Promise,i);i=s.callback;try{let o=new Ao.default(
this.options),u=encodeURIComponent,c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${c(o.database)}`,f=typeof t=="string"?t:t.text,m=n??t.values??[];gr(l,{fullResults:!0,arrayMode:t.
rowMode==="array"}).query(f,m,{types:t.types??this.options?.types}).then(A=>i(void 0,A)).catch(A=>i(
A))}catch(o){i(o)}return s.result}};a(Nn,"NeonPool");var qt=Nn;Me();var fe=ve(lt()),_o=ve(Lr()),Ol="js";
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
