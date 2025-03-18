"use strict";var vo=Object.create;var Te=Object.defineProperty;var xo=Object.getOwnPropertyDescriptor;var So=Object.getOwnPropertyNames;var Eo=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty;var Co=(r,e,t)=>e in r?Te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>Te(r,"name",{value:e,configurable:!0});var z=(r,e)=>()=>(r&&(e=r(r=0)),e);var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ee=(r,e)=>{for(var t in e)Te(r,t,{get:e[t],
enumerable:!0})},Un=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of So(e))!Ao.
call(r,i)&&i!==t&&Te(r,i,{get:()=>e[i],enumerable:!(n=xo(e,i))||n.enumerable});return r};var Se=(r,e,t)=>(t=r!=null?vo(Eo(r)):{},Un(e||!r||!r.__esModule?Te(t,"default",{value:r,enumerable:!0}):
t,r)),D=r=>Un(Te({},"__esModule",{value:!0}),r);var E=(r,e,t)=>Co(r,typeof e!="symbol"?e+"":e,t);var qn=I(lt=>{"use strict";p();lt.byteLength=To;lt.toByteArray=Po;lt.fromByteArray=Lo;var ue=[],te=[],
_o=typeof Uint8Array<"u"?Uint8Array:Array,Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(Ee=0,Dn=Ot.length;Ee<Dn;++Ee)ue[Ee]=Ot[Ee],te[Ot.charCodeAt(Ee)]=Ee;var Ee,Dn;te[45]=
62;te[95]=63;function On(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(On,"getLens");
function To(r){var e=On(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(To,"byteLength");function Io(r,e,t){return(e+
t)*3/4-t}a(Io,"_byteLength");function Po(r){var e,t=On(r),n=t[0],i=t[1],s=new _o(Io(r,n,i)),o=0,u=i>
0?n-4:n,c;for(c=0;c<u;c+=4)e=te[r.charCodeAt(c)]<<18|te[r.charCodeAt(c+1)]<<12|te[r.charCodeAt(c+2)]<<
6|te[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=te[r.charCodeAt(
c)]<<2|te[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=te[r.charCodeAt(c)]<<10|te[r.charCodeAt(c+1)]<<
4|te[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(Po,"toByteArray");function Ro(r){return ue[r>>
18&63]+ue[r>>12&63]+ue[r>>6&63]+ue[r&63]}a(Ro,"tripletToBase64");function Bo(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Ro(n));return i.join("")}a(Bo,"en\
codeChunk");function Lo(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(Bo(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(ue[e>>2]+ue[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(ue[e>>10]+ue[e>>4&63]+ue[e<<2&63]+"=")),i.join("")}a(Lo,"fromByteArray")});var Qn=I(qt=>{p();qt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,l=c>>1,f=-7,y=t?i-1:0,g=t?
-1:1,A=r[e+y];for(y+=g,s=A&(1<<-f)-1,A>>=-f,f+=u;f>0;s=s*256+r[e+y],y+=g,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+y],y+=g,f-=8);if(s===0)s=1-l;else{if(s===c)return o?NaN:(A?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-l}return(A?-1:1)*o*Math.pow(2,s-n)};qt.write=function(r,e,t,n,i,s){var o,u,c,l=s*8-i-1,
f=(1<<l)-1,y=f>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=n?0:s-1,C=n?1:-1,Q=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=
Math.pow(2,-o))<1&&(o--,c*=2),o+y>=1?e+=g/c:e+=g*Math.pow(2,1-y),e*c>=2&&(o++,c/=2),o+y>=f?(u=0,o=f):
o+y>=1?(u=(e*c-1)*Math.pow(2,i),o=o+y):(u=e*Math.pow(2,y-1)*Math.pow(2,i),o=0));i>=8;r[t+A]=u&255,A+=
C,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;r[t+A]=o&255,A+=C,o/=256,l-=8);r[t+A-C]|=Q*128}});var ni=I(Be=>{"use strict";p();var Qt=qn(),Pe=Qn(),Nn=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;Be.Buffer=h;Be.SlowBuffer=Oo;Be.INSPECT_MAX_BYTES=
50;var ft=2147483647;Be.kMaxLength=ft;h.TYPED_ARRAY_SUPPORT=Fo();!h.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Fo(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(Fo,"typedArraySupport");Object.
defineProperty(h.prototype,"parent",{enumerable:!0,get:a(function(){if(h.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:a(function(){if(h.isBuffer(
this))return this.byteOffset},"get")});function pe(r){if(r>ft)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,h.prototype),
e}a(pe,"createBuffer");function h(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return Ht(r)}return $n(r,e,t)}
a(h,"Buffer");h.poolSize=8192;function $n(r,e,t){if(typeof r=="string")return Mo(r,e);if(ArrayBuffer.
isView(r))return Uo(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ce(r,ArrayBuffer)||
r&&ce(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ce(r,SharedArrayBuffer)||r&&ce(r.buffer,
SharedArrayBuffer)))return jt(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return h.
from(n,e,t);let i=Do(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return h.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a($n,"from");h.from=function(r,e,t){return $n(r,e,t)};Object.setPrototypeOf(h.prototype,
Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function Gn(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(Gn,"assertSize");function ko(r,e,t){return Gn(r),r<=0?pe(r):e!==void 0?typeof t==
"string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}a(ko,"alloc");h.alloc=function(r,e,t){return ko(r,e,t)};
function Ht(r){return Gn(r),pe(r<0?0:$t(r)|0)}a(Ht,"allocUnsafe");h.allocUnsafe=function(r){return Ht(
r)};h.allocUnsafeSlow=function(r){return Ht(r)};function Mo(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Vn(r,e)|0,n=pe(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a(Mo,"fromString");function Nt(r){let e=r.length<0?0:$t(r.length)|
0,t=pe(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(Nt,"fromArrayLike");function Uo(r){if(ce(r,Uint8Array)){
let e=new Uint8Array(r);return jt(e.buffer,e.byteOffset,e.byteLength)}return Nt(r)}a(Uo,"fromArrayVi\
ew");function jt(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,h.prototype),n}a(jt,"fromArrayBuffer");function Do(r){if(h.isBuffer(r)){
let e=$t(r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Vt(r.length)?pe(0):Nt(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Nt(r.data)}
a(Do,"fromObject");function $t(r){if(r>=ft)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+ft.toString(16)+" bytes");return r|0}a($t,"checked");function Oo(r){return+r!=
r&&(r=0),h.alloc(+r)}a(Oo,"SlowBuffer");h.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
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
an Array of Buffers');s+=o.length}return i},"concat");function Vn(r,e){if(h.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||ce(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Wt(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ri(r).length;default:
if(i)return n?-1:Wt(r).length;e=(""+e).toLowerCase(),i=!0}}a(Vn,"byteLength");h.byteLength=Vn;function qo(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Ko(this,e,t);case"u\
tf8":case"utf-8":return Kn(this,e,t);case"ascii":return Vo(this,e,t);case"latin1":case"binary":return zo(
this,e,t);case"base64":return $o(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yo(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(qo,
"slowToString");h.prototype._isBuffer=!0;function Ae(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(Ae,"swap");
h.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ae(this,t,t+1);return this},"swap16");h.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)Ae(this,t,t+3),Ae(this,t+1,t+2);return this},"swap32");h.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)Ae(this,t,t+7),Ae(this,t+1,t+6),Ae(this,t+2,t+5),Ae(this,t+3,t+4);return this},
"swap64");h.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Kn(
this,0,e):qo.apply(this,arguments)},"toString");h.prototype.toLocaleString=h.prototype.toString;h.prototype.
equals=a(function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:h.compare(this,e)===0},"equals");h.prototype.inspect=a(function(){let e="",t=Be.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");Nn&&(h.prototype[Nn]=h.prototype.inspect);h.prototype.compare=a(function(e,t,n,i,s){
if(ce(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,c=Math.min(o,u),l=this.slice(
i,s),f=e.slice(t,n);for(let y=0;y<c;++y)if(l[y]!==f[y]){o=l[y],u=f[y];break}return o<u?-1:u<o?1:0},"\
compare");function zn(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Vt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=h.from(
e,n)),h.isBuffer(e))return e.length===0?-1:jn(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):jn(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(zn,"bidire\
ctionalIndexOf");function jn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function c(f,y){return s===1?f[y]:f.readUInt16BE(y*s)}a(c,"read");let l;if(i){let f=-1;for(l=
t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===u)return f*s}else f!==-1&&(l-=l-f),
f=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let f=!0;for(let y=0;y<u;y++)if(c(r,l+y)!==c(e,y)){f=!1;break}
if(f)return l}return-1}a(jn,"arrayIndexOf");h.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");h.prototype.indexOf=a(function(e,t,n){return zn(this,e,t,n,!0)},"indexOf");
h.prototype.lastIndexOf=a(function(e,t,n){return zn(this,e,t,n,!1)},"lastIndexOf");function Qo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Vt(u))return o;r[t+o]=u}return o}a(Qo,"hexWrite");function No(r,e,t,n){
return ht(Wt(e,r.length-t),r,t,n)}a(No,"utf8Write");function jo(r,e,t,n){return ht(ea(e),r,t,n)}a(jo,
"asciiWrite");function Wo(r,e,t,n){return ht(ri(e),r,t,n)}a(Wo,"base64Write");function Ho(r,e,t,n){return ht(
ta(e,r.length-t),r,t,n)}a(Ho,"ucs2Write");h.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Qo(this,e,t,n);case"utf8":case"\
utf-8":return No(this,e,t,n);case"ascii":case"latin1":case"binary":return jo(this,e,t,n);case"base64":
return Wo(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ho(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");h.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function $o(r,e,t){return e===0&&t===r.length?Qt.fromByteArray(r):Qt.fromByteArray(r.slice(e,t))}
a($o,"base64Slice");function Kn(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let c,l,f,y;switch(u){case 1:s<128&&(o=s);break;case 2:c=r[i+
1],(c&192)===128&&(y=(s&31)<<6|c&63,y>127&&(o=y));break;case 3:c=r[i+1],l=r[i+2],(c&192)===128&&(l&192)===
128&&(y=(s&15)<<12|(c&63)<<6|l&63,y>2047&&(y<55296||y>57343)&&(o=y));break;case 4:c=r[i+1],l=r[i+2],
f=r[i+3],(c&192)===128&&(l&192)===128&&(f&192)===128&&(y=(s&15)<<18|(c&63)<<12|(l&63)<<6|f&63,y>65535&&
y<1114112&&(o=y))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return Go(n)}a(Kn,"utf8Slice");var Wn=4096;function Go(r){let e=r.length;if(e<=Wn)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
Wn));return t}a(Go,"decodeCodePointsArray");function Vo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Vo,"asciiSlice");function zo(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(zo,"latin1Slice");function Ko(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=ra[r[s]];return i}
a(Ko,"hexSlice");function Yo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a(Yo,"utf16leSlice");h.prototype.slice=a(function(e,t){let n=this.
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
2]<<8|this[e+3])},"readUInt32BE");h.prototype.readBigUInt64LE=ge(a(function(e){e=e>>>0,Re(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));h.prototype.readBigUInt64BE=ge(a(function(e){e=e>>>0,Re(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.length-8);let i=t*2**24+this[++e]*2**16+
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
readBigInt64LE=ge(a(function(e){e=e>>>0,Re(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
Ge(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));h.prototype.readBigInt64BE=
ge(a(function(e){e=e>>>0,Re(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.
length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));h.prototype.readFloatLE=a(function(e,t){
return e=e>>>0,t||O(e,4,this.length),Pe.read(this,e,!0,23,4)},"readFloatLE");h.prototype.readFloatBE=
a(function(e,t){return e=e>>>0,t||O(e,4,this.length),Pe.read(this,e,!1,23,4)},"readFloatBE");h.prototype.
readDoubleLE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Pe.read(this,e,!0,52,8)},"readDoub\
leLE");h.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Pe.read(this,e,
!1,52,8)},"readDoubleBE");function K(r,e,t,n,i,s){if(!h.isBuffer(r))throw new TypeError('"buffer" ar\
gument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of boun\
ds');if(t+n>r.length)throw new RangeError("Index out of range")}a(K,"checkInt");h.prototype.writeUintLE=
h.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;K(this,
e,t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");
h.prototype.writeUintBE=h.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;K(this,e,t,n,u,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;
return t+n},"writeUIntBE");h.prototype.writeUint8=h.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");h.prototype.writeUint16LE=h.prototype.
writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=
e>>>8,t+2},"writeUInt16LE");h.prototype.writeUint16BE=h.prototype.writeUInt16BE=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");h.prototype.
writeUint32LE=h.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,4294967295,
0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");h.prototype.
writeUint32BE=h.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,4294967295,
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Yn(r,e,t,n,i){
ti(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a(Yn,"wrtBigUInt64LE");function Zn(r,e,t,n,i){ti(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Zn,"wrtBigUInt64BE");h.prototype.
writeBigUInt64LE=ge(a(function(e,t=0){return Yn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));h.prototype.writeBigUInt64BE=ge(a(function(e,t=0){return Zn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64BE"));h.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let c=Math.pow(2,8*n-1);K(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntLE");h.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);K(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;
for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+
n},"writeIntBE");h.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,1,127,-128),
e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");h.prototype.writeInt16LE=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");h.prototype.
writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+
1]=e&255,t+2},"writeInt16BE");h.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,
e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"\
writeInt32LE");h.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,2147483647,
-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,
t+4},"writeInt32BE");h.prototype.writeBigInt64LE=ge(a(function(e,t=0){return Yn(this,e,t,-BigInt("0x\
8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));h.prototype.writeBigInt64BE=ge(
a(function(e,t=0){return Zn(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"w\
riteBigInt64BE"));function Jn(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range")}a(Jn,"checkIEEE754");function Xn(r,e,t,n,i){return e=
+e,t=t>>>0,i||Jn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Pe.write(r,e,t,n,23,4),t+4}a(Xn,
"writeFloat");h.prototype.writeFloatLE=a(function(e,t,n){return Xn(this,e,t,!0,n)},"writeFloatLE");h.
prototype.writeFloatBE=a(function(e,t,n){return Xn(this,e,t,!1,n)},"writeFloatBE");function ei(r,e,t,n,i){
return e=+e,t=t>>>0,i||Jn(r,e,t,8,17976931348623157e292,-17976931348623157e292),Pe.write(r,e,t,n,52,
8),t+8}a(ei,"writeDouble");h.prototype.writeDoubleLE=a(function(e,t,n){return ei(this,e,t,!0,n)},"wr\
iteDoubleLE");h.prototype.writeDoubleBE=a(function(e,t,n){return ei(this,e,t,!1,n)},"writeDoubleBE");
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
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Ie={};function Gt(r,e,t){var n;Ie[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(Gt,"E");Gt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Gt(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);Gt("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Hn(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Hn(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function Hn(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(Hn,"addNumericalSeparator");function Zo(r,e,t){
Re(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Ge(e,r.length-(t+1))}a(Zo,"checkBounds");function ti(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Ie.ERR_OUT_OF_RANGE("value",u,r)}Zo(n,i,s)}a(ti,"checkIntBI");function Re(r,e){if(typeof r!=
"number")throw new Ie.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Re,"validateNumber");function Ge(r,e,t){throw Math.
floor(r)!==r?(Re(r,t),new Ie.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ie.ERR_BUFFER_OUT_OF_BOUNDS:
new Ie.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(Ge,"boundsError");var Jo=/[^+/0-9A-Za-z-_]/g;
function Xo(r){if(r=r.split("=")[0],r=r.trim().replace(Jo,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(Xo,"base64clean");function Wt(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(Wt,"utf\
8ToBytes");function ea(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
ea,"asciiToBytes");function ta(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(ta,"utf16leToBytes");function ri(r){return Qt.toByteArray(
Xo(r))}a(ri,"base64ToBytes");function ht(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(ht,"blitBuffer");function ce(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(ce,"isInstance");function Vt(r){return r!==
r}a(Vt,"numberIsNaN");var ra=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function ge(r){return typeof BigInt>"u"?
na:r}a(ge,"defineBigIntMethod");function na(){throw new Error("BigInt not supported")}a(na,"BufferBi\
gIntNotDefined")});var w,b,v,d,m,p=z(()=>{"use strict";w=globalThis,b=globalThis.setImmediate??(r=>setTimeout(r,0)),v=globalThis.
clearImmediate??(r=>clearTimeout(r)),d=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.
allocUnsafe=="function"?globalThis.Buffer:ni().Buffer,m=globalThis.process??{};m.env??(m.env={});try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var we=I((Bl,zt)=>{"use strict";p();var Le=typeof Reflect=="object"?Reflect:null,ii=Le&&typeof Le.apply==
"function"?Le.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),pt;
Le&&typeof Le.ownKeys=="function"?pt=Le.ownKeys:Object.getOwnPropertySymbols?pt=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):pt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function ia(r){console&&console.warn&&console.warn(r)}a(ia,
"ProcessEmitWarning");var oi=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function R(){R.
init.call(this)}a(R,"EventEmitter");zt.exports=R;zt.exports.once=ua;R.EventEmitter=R;R.prototype._events=
void 0;R.prototype._eventsCount=0;R.prototype._maxListeners=void 0;var si=10;function dt(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(dt,"checkListener");Object.defineProperty(R,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return si},"get"),set:a(function(r){if(typeof r!="number"||r<0||oi(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");si=r},
"set")});R.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
R.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||oi(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function ai(r){return r._maxListeners===void 0?R.defaultMaxListeners:r._maxListeners}
a(ai,"_getMaxListeners");R.prototype.getMaxListeners=a(function(){return ai(this)},"getMaxListeners");
R.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")ii(c,this,t);else for(var l=c.
length,f=hi(c,l),n=0;n<l;++n)ii(f[n],this,t);return!0},"emit");function ui(r,e,t,n){var i,s,o;if(dt(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=ai(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,ia(u)}return r}a(ui,"_addListener");R.prototype.addListener=a(function(e,t){
return ui(this,e,t,!1)},"addListener");R.prototype.on=R.prototype.addListener;R.prototype.prependListener=
a(function(e,t){return ui(this,e,t,!0)},"prependListener");function sa(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(sa,"onceWrapper");function ci(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=sa.bind(n);return i.listener=t,n.wrapFn=i,i}a(ci,"_onceW\
rap");R.prototype.once=a(function(e,t){return dt(t),this.on(e,ci(this,e,t)),this},"once");R.prototype.
prependOnceListener=a(function(e,t){return dt(t),this.prependListener(e,ci(this,e,t)),this},"prepend\
OnceListener");R.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(dt(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():oa(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");R.prototype.off=R.prototype.
removeListener;R.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function li(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
aa(i):hi(i,i.length)}a(li,"_listeners");R.prototype.listeners=a(function(e){return li(this,e,!0)},"l\
isteners");R.prototype.rawListeners=a(function(e){return li(this,e,!1)},"rawListeners");R.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):fi.call(r,e)};R.prototype.
listenerCount=fi;function fi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(fi,"listenerCount");R.prototype.eventNames=a(function(){
return this._eventsCount>0?pt(this._events):[]},"eventNames");function hi(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(hi,"arrayClone");function oa(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(oa,"spliceOne");function aa(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(aa,"unwrapListeners");function ua(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),pi(r,e,s,{once:!0}),e!=="error"&&
ca(r,i,{once:!0})})}a(ua,"once");function ca(r,e,t){typeof r.on=="function"&&pi(r,"error",e,t)}a(ca,
"addErrorHandlerIfEventEmitter");function pi(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(pi,"eventTargetAgnosticAddListener")});var mi={};ee(mi,{Socket:()=>de,isIP:()=>la});function la(r){return 0}var yi,di,S,de,Ve=z(()=>{"use s\
trict";p();yi=Se(we(),1);a(la,"isIP");di=/^[^.]+\./,S=class S extends yi.EventEmitter{constructor(){
super(...arguments);E(this,"opts",{});E(this,"connecting",!1);E(this,"pending",!0);E(this,"writable",
!0);E(this,"encrypted",!1);E(this,"authorized",!1);E(this,"destroyed",!1);E(this,"ws",null);E(this,"\
writeBuffer");E(this,"tlsState",0);E(this,"tlsRead");E(this,"tlsWrite")}static get poolQueryViaFetch(){
return S.opts.poolQueryViaFetch??S.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){S.opts.
poolQueryViaFetch=t}static get fetchEndpoint(){return S.opts.fetchEndpoint??S.defaults.fetchEndpoint}static set fetchEndpoint(t){
S.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)")}static get fetchFunction(){
return S.opts.fetchFunction??S.defaults.fetchFunction}static set fetchFunction(t){S.opts.fetchFunction=
t}static get webSocketConstructor(){return S.opts.webSocketConstructor??S.defaults.webSocketConstructor}static set webSocketConstructor(t){
S.opts.webSocketConstructor=t}get webSocketConstructor(){return this.opts.webSocketConstructor??S.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return S.opts.wsProxy??S.defaults.wsProxy}static set wsProxy(t){
S.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??S.wsProxy}set wsProxy(t){this.opts.wsProxy=
t}static get coalesceWrites(){return S.opts.coalesceWrites??S.defaults.coalesceWrites}static set coalesceWrites(t){
S.opts.coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??S.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return S.opts.useSecureWebSocket??S.defaults.
useSecureWebSocket}static set useSecureWebSocket(t){S.opts.useSecureWebSocket=t}get useSecureWebSocket(){
return this.opts.useSecureWebSocket??S.useSecureWebSocket}set useSecureWebSocket(t){this.opts.useSecureWebSocket=
t}static get forceDisablePgSSL(){return S.opts.forceDisablePgSSL??S.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){
S.opts.forceDisablePgSSL=t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??S.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return S.opts.disableSNI??S.defaults.disableSNI}static set disableSNI(t){
S.opts.disableSNI=t}get disableSNI(){return this.opts.disableSNI??S.disableSNI}set disableSNI(t){this.
opts.disableSNI=t}static get pipelineConnect(){return S.opts.pipelineConnect??S.defaults.pipelineConnect}static set pipelineConnect(t){
S.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??S.pipelineConnect}set pipelineConnect(t){
this.opts.pipelineConnect=t}static get subtls(){return S.opts.subtls??S.defaults.subtls}static set subtls(t){
S.opts.subtls=t}get subtls(){return this.opts.subtls??S.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return S.opts.pipelineTLS??S.defaults.pipelineTLS}static set pipelineTLS(t){S.opts.pipelineTLS=t}get pipelineTLS(){
return this.opts.pipelineTLS??S.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){
return S.opts.rootCerts??S.defaults.rootCerts}static set rootCerts(t){S.opts.rootCerts=t}get rootCerts(){
return this.opts.rootCerts??S.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https\
://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--s\
tring--string");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("co\
nnect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),this.emit("ready")},"\
handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuffer",c.addEventListener("error",f=>{this.
emit("error",f),this.emit("close")}),c.addEventListener("message",f=>{if(this.tlsState===0){let y=d.
from(f.data);this.emit("data",y)}}),c.addEventListener("close",()=>{this.emit("close")}),l?s():c.addEventListener(
"open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="string"?parseInt(t,10):
t)}catch(c){this.emit("error",c),this.emit("close");return}try{let l=(this.useSecureWebSocket?"wss:":
"ws:")+"//"+u;if(this.webSocketConstructor!==void 0)this.ws=new this.webSocketConstructor(l),o(this.
ws);else try{this.ws=new WebSocket(l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){
let f=(this.useSecureWebSocket?"https:":"http:")+"//"+u;fetch(f,{headers:{Upgrade:"websocket"}}).then(
y=>{if(this.ws=y.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,!0)}).catch(y=>{this.emit(
"error",new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer \
to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websoc\
ket--undefined. Details: ${y}`)),this.emit("close")})}}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://g\
ithub.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");this.tlsState=1;let n=await this.
subtls.TrustedCert.databaseFromPEM(this.rootCerts),i=new this.subtls.WebSocketReadQueue(this.ws),s=i.
read.bind(i),o=this.rawWrite.bind(this),{read:u,write:c}=await this.subtls.startTls(t,n,s,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=
c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=d.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===void 0)this.writeBuffer=t,setTimeout(
()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.
length+t.length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="\
utf8",i=s=>{}){return t.length===0?(i(),!0):(typeof t=="string"&&(t=d.from(t,n)),this.tlsState===0?(this.
rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(t,n,i)}):(this.tlsWrite(
t),i()),!0)}end(t=d.alloc(0),n="utf8",i=()=>{}){return this.write(t,n,()=>{this.ws.close(),i()}),this}destroy(){
return this.destroyed=!0,this.end()}};a(S,"Socket"),E(S,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a(
(t,n,i)=>{let s;return i?.jwtAuth?s=t.replace(di,"apiauth."):s=t.replace(di,"api."),"https://"+s+"/s\
ql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,wsProxy:a(
t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,pipelineConnect:"\
password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),E(S,"opts",{});de=S});var gi={};ee(gi,{parse:()=>Kt});function Kt(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:l,search:f,searchParams:y,hash:g}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),l=decodeURIComponent(l);let A=i+":"+s,C=e?Object.
fromEntries(y.entries()):f;return{href:r,protocol:t,auth:A,username:i,password:s,host:o,hostname:u,port:c,
pathname:l,search:f,query:C,hash:g}}var Yt=z(()=>{"use strict";p();a(Kt,"parse")});var er=I(Ei=>{"use strict";p();Ei.parse=function(r,e){return new Xt(r,e).parse()};var bt=class bt{constructor(e,t){
this.source=e,this.transform=t||Ea,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
return this.position>=this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){this.recorded.push(
e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),
t!==null&&(t=this.transform(t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.
consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.
dimension>1&&(n=new bt(this.source.substr(this.position-1),this.transform),this.entries.push(n.parse(
!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(!0),i=!i):t.value===
","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==0)throw new Error("array dimension \
not balanced");return this.entries}};a(bt,"ArrayParser");var Xt=bt;function Ea(r){return r}a(Ea,"ide\
ntity")});var tr=I((zl,Ai)=>{p();var Aa=er();Ai.exports={create:a(function(r,e){return{parse:a(function(){return Aa.
parse(r,e)},"parse")}},"create")}});var Ti=I((Zl,_i)=>{"use strict";p();var Ca=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
_a=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Ta=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Ia=/^-?infinity$/;_i.
exports=a(function(e){if(Ia.test(e))return Number(e.replace("i","I"));var t=Ca.exec(e);if(!t)return Pa(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Ci(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var y,g=Ra(e);return g!=null?
(y=new Date(Date.UTC(i,s,o,u,c,l,f)),rr(i)&&y.setUTCFullYear(i),g!==0&&y.setTime(y.getTime()-g)):(y=
new Date(i,s,o,u,c,l,f),rr(i)&&y.setFullYear(i)),y},"parseDate");function Pa(r){var e=_a.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Ci(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return rr(
t)&&o.setFullYear(t),o}}a(Pa,"getDate");function Ra(r){if(r.endsWith("+00"))return 0;var e=Ta.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(Ra,"timeZoneOffset");function Ci(r){return-(r-
1)}a(Ci,"bcYearToNegativeYear");function rr(r){return r>=0&&r<100}a(rr,"is0To99")});var Pi=I((ef,Ii)=>{p();Ii.exports=La;var Ba=Object.prototype.hasOwnProperty;function La(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)Ba.call(t,n)&&(r[n]=t[n])}return r}a(La,"ext\
end")});var Li=I((nf,Bi)=>{"use strict";p();var Fa=Pi();Bi.exports=Me;function Me(r){if(!(this instanceof Me))
return new Me(r);Fa(this,$a(r))}a(Me,"PostgresInterval");var ka=["seconds","minutes","hours","days",
"months","years"];Me.prototype.toPostgres=function(){var r=ka.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Ma={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},Ua=["years","months","days"],Da=["hours","minutes","seconds"];Me.prototype.toISOString=Me.prototype.
toISO=function(){var r=Ua.map(t,this).join(""),e=Da.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+Ma[n]}};var nr="([+-]?\\d+)",Oa=nr+"\\s+years?",qa=nr+"\\s+mons?",Qa=nr+"\\s+days?",Na="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",ja=new RegExp([Oa,qa,Qa,Na].map(function(r){return"\
("+r+")?"}).join("\\s*")),Ri={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
Wa=["hours","minutes","seconds","milliseconds"];function Ha(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Ha,"parseMilliseconds");function $a(r){if(!r)return{};var e=ja.exec(r),t=e[8]==="-";return Object.
keys(Ri).reduce(function(n,i){var s=Ri[i],o=e[s];return!o||(o=i==="milliseconds"?Ha(o):parseInt(o,10),
!o)||(t&&~Wa.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a($a,"parse")});var ki=I((af,Fi)=>{"use strict";p();Fi.exports=a(function(e){if(/^\\x/.test(e))return new d(e.substr(
2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.substr(n+
1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&e[n+i]===
"\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return new d(t,"binary")},"\
parseBytea")});var Ni=I((lf,Qi)=>{p();var Ke=er(),Ye=tr(),vt=Ti(),Ui=Li(),Di=ki();function xt(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(xt,"allowNull");function Oi(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Oi,"parseBool");function Ga(r){return r?
Ke.parse(r,Oi):null}a(Ga,"parseBoolArray");function Va(r){return parseInt(r,10)}a(Va,"parseBaseTenIn\
t");function ir(r){return r?Ke.parse(r,xt(Va)):null}a(ir,"parseIntegerArray");function za(r){return r?
Ke.parse(r,xt(function(e){return qi(e).trim()})):null}a(za,"parseBigIntegerArray");var Ka=a(function(r){
if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=ur(t)),t});return e.parse()},"pa\
rsePointArray"),sr=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),re=a(function(r){if(!r)return null;var e=Ye.
create(r);return e.parse()},"parseStringArray"),or=a(function(r){if(!r)return null;var e=Ye.create(r,
function(t){return t!==null&&(t=vt(t)),t});return e.parse()},"parseDateArray"),Ya=a(function(r){if(!r)
return null;var e=Ye.create(r,function(t){return t!==null&&(t=Ui(t)),t});return e.parse()},"parseInt\
ervalArray"),Za=a(function(r){return r?Ke.parse(r,xt(Di)):null},"parseByteAArray"),ar=a(function(r){
return parseInt(r,10)},"parseInteger"),qi=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),Mi=a(function(r){return r?Ke.parse(r,xt(JSON.parse)):null},"parseJsonArray"),ur=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),Ja=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=ur(e);return s.radius=parseFloat(t),s},"parseCircle"),Xa=a(function(r){r(20,qi),r(21,ar),
r(23,ar),r(26,ar),r(700,parseFloat),r(701,parseFloat),r(16,Oi),r(1082,vt),r(1114,vt),r(1184,vt),r(600,
ur),r(651,re),r(718,Ja),r(1e3,Ga),r(1001,Za),r(1005,ir),r(1007,ir),r(1028,ir),r(1016,za),r(1017,Ka),
r(1021,sr),r(1022,sr),r(1231,sr),r(1014,re),r(1015,re),r(1008,re),r(1009,re),r(1040,re),r(1041,re),r(
1115,or),r(1182,or),r(1185,or),r(1186,Ui),r(1187,Ya),r(17,Di),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,Mi),r(3807,Mi),r(3907,re),r(2951,re),r(791,re),r(1183,re),r(1270,re)},"init");
Qi.exports={init:Xa}});var Wi=I((pf,ji)=>{"use strict";p();var Y=1e6;function eu(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,c,l,f;{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+
t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}
{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.
length,f=0;f<l;f++)c+="0";i=c+u+i}{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&
e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}return s=e%Y,o=4294967296*s+t,u=
""+o%Y,n+u+i}a(eu,"readInt8");ji.exports=eu});var zi=I((mf,Vi)=>{p();var tu=Wi(),F=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(A,C,Q){return A*
Math.pow(2,Q)+C};var s=t>>3,o=a(function(A){return n?~A&255:A},"inv"),u=255,c=8-t%8;e<c&&(u=255<<8-e&
255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&u,c));for(var f=e+t>>3,y=s+1;y<f;y++)l=i(l,o(
r[y]),8);var g=(e+t)%8;return g>0&&(l=i(l,o(r[f])>>8-g,g)),l},"parseBits"),Gi=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=F(r,1),s=F(r,t,1);if(s===0)return 0;var o=1,u=a(function(l,f,y){l===0&&(l=1);for(var g=1;g<=
y;g++)o/=2,(f&1<<y-g)>0&&(l+=o);return l},"parsePrecisionBits"),c=F(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),ru=a(function(r){
return F(r,1)==1?-1*(F(r,15,1,!0)+1):F(r,15,1)},"parseInt16"),Hi=a(function(r){return F(r,1)==1?-1*(F(
r,31,1,!0)+1):F(r,31,1)},"parseInt32"),nu=a(function(r){return Gi(r,23,8)},"parseFloat32"),iu=a(function(r){
return Gi(r,52,11)},"parseFloat64"),su=a(function(r){var e=F(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,F(r,16,16)),n=0,i=[],s=F(r,16),o=0;o<s;o++)n+=F(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,F(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),$i=a(function(r,e){var t=F(e,1),n=F(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Ze=a(function(r){for(var e=F(
r,32),t=F(r,32,32),n=F(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=F(r,32,i),i+=32,i+=32;var u=a(function(l){
var f=F(r,32,i);if(i+=32,f==4294967295)return null;var y;if(l==23||l==20)return y=F(r,f*8,i),i+=f*8,
y;if(l==25)return y=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),y;console.log("ERROR: ElementType no\
t implemented: "+l)},"parseElement"),c=a(function(l,f){var y=[],g;if(l.length>1){var A=l.shift();for(g=
0;g<A;g++)y[g]=c(l,f);l.unshift(A)}else for(g=0;g<l[0];g++)y[g]=u(f);return y},"parse");return c(s,n)},
"parseArray"),ou=a(function(r){return r.toString("utf8")},"parseText"),au=a(function(r){return r===null?
null:F(r,8)>0},"parseBool"),uu=a(function(r){r(20,tu),r(21,ru),r(23,Hi),r(26,Hi),r(1700,su),r(700,nu),
r(701,iu),r(16,au),r(1114,$i.bind(null,!1)),r(1184,$i.bind(null,!0)),r(1e3,Ze),r(1007,Ze),r(1016,Ze),
r(1008,Ze),r(1009,Ze),r(25,ou)},"init");Vi.exports={init:uu}});var Yi=I((bf,Ki)=>{p();Ki.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var et=I(Xe=>{p();var cu=Ni(),lu=zi(),fu=tr(),hu=Yi();Xe.getTypeParser=pu;Xe.setTypeParser=du;Xe.arrayParser=
fu;Xe.builtins=hu;var Je={text:{},binary:{}};function Zi(r){return String(r)}a(Zi,"noParse");function pu(r,e){
return e=e||"text",Je[e]&&Je[e][r]||Zi}a(pu,"getTypeParser");function du(r,e,t){typeof e=="function"&&
(t=e,e="text"),Je[e][r]=t}a(du,"setTypeParser");cu.init(function(r,e){Je.text[r]=e});lu.init(function(r,e){
Je.binary[r]=e})});var Et=I((Af,Ji)=>{"use strict";p();var yu=et();function St(r){this._types=r||yu,this.text={},this.binary=
{}}a(St,"TypeOverrides");St.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};St.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};St.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Ji.exports=St});function tt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
c=1541459225,l=0,f=0,y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a((_,x)=>_>>>x|_<<32-
x,"rrot"),A=new Uint32Array(64),C=new Uint8Array(64),Q=a(()=>{for(let B=0,$=0;B<16;B++,$+=4)A[B]=C[$]<<
24|C[$+1]<<16|C[$+2]<<8|C[$+3];for(let B=16;B<64;B++){let $=g(A[B-15],7)^g(A[B-15],18)^A[B-15]>>>3,fe=g(
A[B-2],17)^g(A[B-2],19)^A[B-2]>>>10;A[B]=A[B-16]+$+A[B-7]+fe|0}let _=e,x=t,H=n,le=i,N=s,ie=o,se=u,oe=c;
for(let B=0;B<64;B++){let $=g(N,6)^g(N,11)^g(N,25),fe=N&ie^~N&se,Ce=oe+$+fe+y[B]+A[B]|0,he=g(_,2)^g(
_,13)^g(_,22),_e=_&x^_&H^x&H,ae=he+_e|0;oe=se,se=ie,ie=N,N=le+Ce|0,le=H,H=x,x=_,_=Ce+ae|0}e=e+_|0,t=
t+x|0,n=n+H|0,i=i+le|0,s=s+N|0,o=o+ie|0,u=u+se|0,c=c+oe|0,f=0},"process"),P=a(_=>{typeof _=="string"&&
(_=new TextEncoder().encode(_));for(let x=0;x<_.length;x++)C[f++]=_[x],f===64&&Q();l+=_.length},"add"),
L=a(()=>{if(C[f++]=128,f==64&&Q(),f+8>64){for(;f<64;)C[f++]=0;Q()}for(;f<58;)C[f++]=0;let _=l*8;C[f++]=
_/1099511627776&255,C[f++]=_/4294967296&255,C[f++]=_>>>24,C[f++]=_>>>16&255,C[f++]=_>>>8&255,C[f++]=
_&255,Q();let x=new Uint8Array(32);return x[0]=e>>>24,x[1]=e>>>16&255,x[2]=e>>>8&255,x[3]=e&255,x[4]=
t>>>24,x[5]=t>>>16&255,x[6]=t>>>8&255,x[7]=t&255,x[8]=n>>>24,x[9]=n>>>16&255,x[10]=n>>>8&255,x[11]=n&
255,x[12]=i>>>24,x[13]=i>>>16&255,x[14]=i>>>8&255,x[15]=i&255,x[16]=s>>>24,x[17]=s>>>16&255,x[18]=s>>>
8&255,x[19]=s&255,x[20]=o>>>24,x[21]=o>>>16&255,x[22]=o>>>8&255,x[23]=o&255,x[24]=u>>>24,x[25]=u>>>16&
255,x[26]=u>>>8&255,x[27]=u&255,x[28]=c>>>24,x[29]=c>>>16&255,x[30]=c>>>8&255,x[31]=c&255,x},"digest");
return r===void 0?{add:P,digest:L}:(P(r),L())}var Xi=z(()=>{"use strict";p();a(tt,"sha256")});var U,rt,es=z(()=>{"use strict";p();U=class U{constructor(){E(this,"_dataLength",0);E(this,"_bufferL\
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
abcdef"),E(U,"hexOut",[]),E(U,"onePassHasher",new U);rt=U});var cr={};ee(cr,{createHash:()=>gu,createHmac:()=>wu,randomBytes:()=>mu});function mu(r){return crypto.
getRandomValues(d.alloc(r))}function gu(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return d.from(tt(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?rt.hashStr(e):rt.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function wu(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=tt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(tt(o),64),d.from(tt(u))},
"digest")}},"update")}}var lr=z(()=>{"use strict";p();Xi();es();a(mu,"randomBytes");a(gu,"createHash");
a(wu,"createHmac")});var nt=I((Df,fr)=>{"use strict";p();fr.exports={host:"localhost",user:m.platform==="win32"?m.env.USERNAME:
m.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var Ue=et(),bu=Ue.getTypeParser(20,"text"),vu=Ue.getTypeParser(1016,
"text");fr.exports.__defineSetter__("parseInt8",function(r){Ue.setTypeParser(20,"text",r?Ue.getTypeParser(
23,"text"):bu),Ue.setTypeParser(1016,"text",r?Ue.getTypeParser(1007,"text"):vu)})});var it=I((qf,rs)=>{"use strict";p();var xu=(lr(),D(cr)),Su=nt();function Eu(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Eu,"escapeElement");function ts(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+ts(r[t]):
r[t]instanceof d?e+="\\\\x"+r[t].toString("hex"):e+=Eu(At(r[t]));return e=e+"}",e}a(ts,"arrayString");
var At=a(function(r,e){if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?Su.parseInputDatesAsUTC?_u(r):Cu(r):Array.isArray(r)?ts(r):typeof r==
"object"?Au(r,e):r.toString()},"prepareValue");function Au(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),At(r.toPostgres(At),e)}return JSON.stringify(r)}a(Au,"prepareObject");function W(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(W,"pad");function Cu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=W(t,4)+"-"+W(r.getMonth()+1,2)+"-"+W(r.getDate(),2)+"T"+W(r.getHours(),
2)+":"+W(r.getMinutes(),2)+":"+W(r.getSeconds(),2)+"."+W(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=W(Math.floor(e/60),2)+":"+W(e%60,2),n&&(i+=" BC"),i}a(Cu,"dateToString");function _u(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=W(e,4)+"-"+W(r.getUTCMonth()+1,2)+"-"+W(r.
getUTCDate(),2)+"T"+W(r.getUTCHours(),2)+":"+W(r.getUTCMinutes(),2)+":"+W(r.getUTCSeconds(),2)+"."+W(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(_u,"dateToStringUTC");function Tu(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(Tu,"normalizeQueryConfig");var hr=a(function(r){return xu.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Iu=a(function(r,e,t){var n=hr(e+r),i=hr(d.concat([d.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");rs.exports={prepareValue:a(function(e){return At(e)},"prepareValueWrapper"),
normalizeQueryConfig:Tu,postgresMd5PasswordHash:Iu,md5:hr}});var st={};ee(st,{default:()=>Lu});var Lu,ot=z(()=>{"use strict";p();Lu={}});var hs=I((Yf,fs)=>{"use strict";p();var yr=(lr(),D(cr));function Fu(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=yr.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a(Fu,"startSession");function ku(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=Du(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=d.from(n.salt,"base64"),s=Qu(e,i,n.iteration),o=De(s,"Client Key"),u=qu(
o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,y=c+
","+l+","+f,g=De(u,y),A=ls(o,g),C=A.toString("base64"),Q=De(s,"Server Key"),P=De(Q,y);r.message="SAS\
LResponse",r.serverSignature=P.toString("base64"),r.response=f+",p="+C}a(ku,"continueSession");function Mu(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Ou(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(Mu,"finalizeSession");function Uu(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(Uu,"isPrintableChars");function us(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(us,"isBase64");function cs(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(cs,"parseAttribute\
Pairs");function Du(r){let e=cs(r),t=e.get("r");if(t){if(!Uu(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!us(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(Du,"parseServerFirstMessage");
function Ou(r){let t=cs(r).get("v");if(t){if(!us(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a(Ou,"parseServerFinalMessage");function ls(r,e){if(!d.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return d.from(r.map((t,n)=>r[n]^e[n]))}
a(ls,"xorBuffers");function qu(r){return yr.createHash("sha256").update(r).digest()}a(qu,"sha256");function De(r,e){
return yr.createHmac("sha256",r).update(e).digest()}a(De,"hmacSha256");function Qu(r,e,t){for(var n=De(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=De(r,n),i=ls(i,n);return i}a(Qu,"Hi");fs.exports=
{startSession:Fu,continueSession:ku,finalizeSession:Mu}});var mr={};ee(mr,{join:()=>Nu});function Nu(...r){return r.join("/")}var gr=z(()=>{"use strict";p();a(
Nu,"join")});var wr={};ee(wr,{stat:()=>ju});function ju(r,e){e(new Error("No filesystem"))}var br=z(()=>{"use str\
ict";p();a(ju,"stat")});var vr={};ee(vr,{default:()=>Wu});var Wu,xr=z(()=>{"use strict";p();Wu={}});var ps={};ee(ps,{StringDecoder:()=>Sr});var Er,Sr,ds=z(()=>{"use strict";p();Er=class Er{constructor(e){
E(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(Er,"StringDecoder");Sr=Er});var ws=I((oh,gs)=>{"use strict";p();var{Transform:Hu}=(xr(),D(vr)),{StringDecoder:$u}=(ds(),D(ps)),ve=Symbol(
"last"),_t=Symbol("decoder");function Gu(r,e,t){let n;if(this.overflow){if(n=this[_t].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[ve]+=this[_t].write(r),n=
this[ve].split(this.matcher);this[ve]=n.pop();for(let i=0;i<n.length;i++)try{ms(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[ve].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(Gu,"transform");function Vu(r){if(this[ve]+=this[_t].end(),this[ve])
try{ms(this,this.mapper(this[ve]))}catch(e){return r(e)}r()}a(Vu,"flush");function ms(r,e){e!==void 0&&
r.push(e)}a(ms,"push");function ys(r){return r}a(ys,"noop");function zu(r,e,t){switch(r=r||/\r?\n/,e=
e||ys,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=ys)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=Gu,t.flush=Vu,t.readableObjectMode=
!0;let n=new Hu(t);return n[ve]="",n[_t]=new $u("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(zu,"split");gs.exports=zu});var xs=I((ch,me)=>{"use strict";p();var bs=(gr(),D(mr)),Ku=(xr(),D(vr)).Stream,Yu=ws(),vs=(ot(),D(st)),
Zu=5432,Tt=m.platform==="win32",at=m.stderr,Ju=56,Xu=7,ec=61440,tc=32768;function rc(r){return(r&ec)==
tc}a(rc,"isRegFile");var Oe=["host","port","database","user","password"],Ar=Oe.length,nc=Oe[Ar-1];function Cr(){
var r=at instanceof Ku&&at.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);at.write(vs.format.apply(vs,e))}}a(Cr,"warn");Object.defineProperty(me.exports,"isWin",{get:a(function(){
return Tt},"get"),set:a(function(r){Tt=r},"set")});me.exports.warnTo=function(r){var e=at;return at=
r,e};me.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||(Tt?bs.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):bs.join(e.HOME||"./",".pgpass"));return t};me.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(m.env,"PGPASSWORD")?!1:Tt?!0:(e=e||"<unkn>",rc(r.mode)?r.
mode&(Ju|Xu)?(Cr('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(Cr('WARNING: password file "%s" is not a plain file',e),!1))};var ic=me.exports.
match=function(r,e){return Oe.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||Zu)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};me.exports.getPassword=function(r,e,t){var n,i=e.pipe(
Yu());function s(c){var l=sc(c);l&&oc(l)&&ic(r,l)&&(n=l[nc],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),Cr("WARNING: error on reading file: %s",c),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var sc=me.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(
function(f,y,g){var A=r.substring(y,g);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(A=A.
replace(/\\([:\\])/g,"$1")),o[Oe[f]]=A},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Ar-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).
length===Ar?o:null,o},oc=me.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<Oe.length;t+=1){var n=e[t],i=r[Oe[t]]||"",s=n(i);if(!s)return!1}return!0}});var Es=I((ph,_r)=>{"use strict";p();var hh=(gr(),D(mr)),Ss=(br(),D(wr)),It=xs();_r.exports=function(r,e){
var t=It.getFileName();Ss.stat(t,function(n,i){if(n||!It.usePgPass(i,t))return e(void 0);var s=Ss.createReadStream(
t);It.getPassword(r,s,e)})};_r.exports.warnTo=It.warnTo});var As={};ee(As,{default:()=>ac});var ac,Cs=z(()=>{"use strict";p();ac={}});var Ts=I((mh,_s)=>{"use strict";p();var uc=(Yt(),D(gi)),Tr=(br(),D(wr));function Ir(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=uc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)?encodeURI(r).replace(/\%25(\d\d)/g,"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&
(t[n]=t[n][t[n].length-1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(
":"),t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=e.query.db,t.
client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.pathname;if(!t.host&&s&&/^%2f/i.
test(s)){var o=s.split("/");t.host=decodeURIComponent(o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(
0)==="/"&&(s=s.slice(1)||null),t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),
t.ssl==="0"&&(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&(t.ssl.
cert=Tr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=Tr.readFileSync(t.sslkey).toString()),
t.sslrootcert&&(t.ssl.ca=Tr.readFileSync(t.sslrootcert).toString()),t.sslmode){case"disable":{t.ssl=
!1;break}case"prefer":case"require":case"verify-ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=
!1;break}}return t}a(Ir,"parse");_s.exports=Ir;Ir.parse=Ir});var Pt=I((bh,Rs)=>{"use strict";p();var cc=(Cs(),D(As)),Ps=nt(),Is=Ts().parse,G=a(function(r,e,t){return t===
void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),e[r]||t||Ps[r]},"val"),lc=a(function(){switch(m.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return Ps.ssl},"readSSLConfigFromEnvironment"),qe=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),ne=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+qe(n))},"add"),Rr=class Rr{constructor(e){e=typeof e=="string"?Is(e):
e||{},e.connectionString&&(e=Object.assign({},e,Is(e.connectionString))),this.user=G("user",e),this.
database=G("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(G("por\
t",e),10),this.host=G("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:G("password",e)}),this.binary=G("binary",e),this.options=G("options",e),this.ssl=typeof e.
ssl>"u"?lc():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&
(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this.client_encoding=G("client_encoding",e),this.replication=G("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=G("application_name",e,"PGAPPNAME"),this.fallback_application_name=
G("fallback_application_name",e,!1),this.statement_timeout=G("statement_timeout",e,!1),this.lock_timeout=
G("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=G("idle_in_transaction_session_timeo\
ut",e,!1),this.query_timeout=G("query_timeout",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=
m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===
!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="nu\
mber"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];ne(t,this,"user"),ne(t,this,"password"),ne(t,this,"port"),ne(t,this,"application_name"),ne(
t,this,"fallback_application_name"),ne(t,this,"connect_timeout"),ne(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(ne(t,n,"sslmode"),ne(t,n,"sslca"),ne(t,n,"s\
slkey"),ne(t,n,"sslcert"),ne(t,n,"sslrootcert"),this.database&&t.push("dbname="+qe(this.database)),this.
replication&&t.push("replication="+qe(this.replication)),this.host&&t.push("host="+qe(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+qe(this.client_encoding)),
cc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+qe(s)),e(null,t.join(" ")))})}};
a(Rr,"ConnectionParameters");var Pr=Rr;Rs.exports=Pr});var Fs=I((Sh,Ls)=>{"use strict";p();var fc=et(),Bs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,Lr=class Lr{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Bs.exec(e.text):t=Bs.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=fc.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(Lr,"Result");var Br=Lr;Ls.exports=Br});var Ds=I((Ch,Us)=>{"use strict";p();var{EventEmitter:hc}=we(),ks=Fs(),Ms=it(),kr=class kr extends hc{constructor(e,t,n){
super(),e=Ms.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),this._result=
new ks(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new ks(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
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
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:Ms.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(kr,"Query");var Fr=kr;Us.exports=
Fr});var ln=I(T=>{"use strict";p();Object.defineProperty(T,"__esModule",{value:!0});T.NoticeMessage=T.DataRowMessage=
T.CommandCompleteMessage=T.ReadyForQueryMessage=T.NotificationResponseMessage=T.BackendKeyDataMessage=
T.AuthenticationMD5Password=T.ParameterStatusMessage=T.ParameterDescriptionMessage=T.RowDescriptionMessage=
T.Field=T.CopyResponse=T.CopyDataMessage=T.DatabaseError=T.copyDone=T.emptyQuery=T.replicationStart=
T.portalSuspended=T.noData=T.closeComplete=T.bindComplete=T.parseComplete=void 0;T.parseComplete={name:"\
parseComplete",length:5};T.bindComplete={name:"bindComplete",length:5};T.closeComplete={name:"closeC\
omplete",length:5};T.noData={name:"noData",length:5};T.portalSuspended={name:"portalSuspended",length:5};
T.replicationStart={name:"replicationStart",length:4};T.emptyQuery={name:"emptyQuery",length:4};T.copyDone=
{name:"copyDone",length:4};var Kr=class Kr extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(Kr,"DatabaseError");var Mr=Kr;T.DatabaseError=Mr;var Yr=class Yr{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a(Yr,"CopyDataMessage");var Ur=Yr;T.CopyDataMessage=Ur;var Zr=class Zr{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(Zr,"CopyResponse");var Dr=Zr;
T.CopyResponse=Dr;var Jr=class Jr{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a(Jr,"Field");var Or=Jr;
T.Field=Or;var Xr=class Xr{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(Xr,"RowDescriptionMessage");var qr=Xr;T.RowDescriptionMessage=
qr;var en=class en{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(en,"ParameterDescriptionMessage");var Qr=en;
T.ParameterDescriptionMessage=Qr;var tn=class tn{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(tn,"ParameterStatusMessage");var Nr=tn;T.ParameterStatusMessage=
Nr;var rn=class rn{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(rn,"AuthenticationMD5Password");var jr=rn;T.AuthenticationMD5Password=jr;var nn=class nn{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(nn,"BackendKeyDataMes\
sage");var Wr=nn;T.BackendKeyDataMessage=Wr;var sn=class sn{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(sn,"NotificationResponseMessa\
ge");var Hr=sn;T.NotificationResponseMessage=Hr;var on=class on{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(on,"ReadyForQueryMessage");var $r=on;T.ReadyForQueryMessage=$r;
var an=class an{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(an,"Comma\
ndCompleteMessage");var Gr=an;T.CommandCompleteMessage=Gr;var un=class un{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(un,"DataRowMessage");var Vr=un;T.DataRowMessage=
Vr;var cn=class cn{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(cn,"NoticeMe\
ssage");var zr=cn;T.NoticeMessage=zr});var Os=I(Rt=>{"use strict";p();Object.defineProperty(Rt,"__esModule",{value:!0});Rt.Writer=void 0;var hn=class hn{constructor(e=256){
this.size=e,this.offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){var t=this.buffer.
length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(i),
n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=e>>>24&255,this.buffer[this.
offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){
return this.ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=d.byteLength(e);this.ensure(t+1),this.buffer.write(e,this.offset,"ut\
f-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){var t=d.byteLength(e);
return this.ensure(t),this.buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(
e.length),e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+
1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}};a(hn,"Writer");var fn=hn;Rt.Writer=fn});var Qs=I(Lt=>{"use strict";p();Object.defineProperty(Lt,"__esModule",{value:!0});Lt.serialize=void 0;
var pn=Os(),k=new pn.Writer,pc=a(r=>{k.addInt16(3).addInt16(0);for(let n of Object.keys(r))k.addCString(
n).addCString(r[n]);k.addCString("client_encoding").addCString("UTF8");var e=k.addCString("").flush(),
t=e.length+4;return new pn.Writer().addInt32(t).add(e).flush()},"startup"),dc=a(()=>{let r=d.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),yc=a(r=>k.addCString(r).flush(
112),"password"),mc=a(function(r,e){return k.addCString(r).addInt32(d.byteLength(e)).addString(e),k.
flush(112)},"sendSASLInitialResponseMessage"),gc=a(function(r){return k.addString(r).flush(112)},"se\
ndSCRAMClientFinalMessage"),wc=a(r=>k.addCString(r).flush(81),"query"),qs=[],bc=a(r=>{let e=r.name||
"";e.length>63&&(console.error("Warning! Postgres only supports 63 characters for query names."),console.
error("You supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors e\
xecuting queries"));let t=r.types||qs;for(var n=t.length,i=k.addCString(e).addCString(r.text).addInt16(
n),s=0;s<n;s++)i.addInt32(t[s]);return k.flush(80)},"parse"),Qe=new pn.Writer,vc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(k.addInt16(0),Qe.addInt32(-1)):n instanceof d?(k.addInt16(
1),Qe.addInt32(n.length),Qe.add(n)):(k.addInt16(0),Qe.addInt32(d.byteLength(n)),Qe.addString(n))}},"\
writeValues"),xc=a((r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||qs,s=i.length;
return k.addCString(e).addCString(t),k.addInt16(s),vc(i,r.valueMapper),k.addInt16(s),k.add(Qe.flush()),
k.addInt16(n?1:0),k.flush(66)},"bind"),Sc=d.from([69,0,0,0,9,0,0,0,0,0]),Ec=a(r=>{if(!r||!r.portal&&
!r.rows)return Sc;let e=r.portal||"",t=r.rows||0,n=d.byteLength(e),i=4+n+1+4,s=d.allocUnsafe(1+i);return s[0]=
69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.writeUInt32BE(t,s.length-4),s},"execute"),Ac=a(
(r,e)=>{let t=d.allocUnsafe(16);return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,
6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"cancel"),dn=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),
Cc=k.addCString("P").flush(68),_c=k.addCString("S").flush(68),Tc=a(r=>r.name?dn(68,`${r.type}${r.name||
""}`):r.type==="P"?Cc:_c,"describe"),Ic=a(r=>{let e=`${r.type}${r.name||""}`;return dn(67,e)},"close"),
Pc=a(r=>k.add(r).flush(100),"copyData"),Rc=a(r=>dn(102,r),"copyFail"),Bt=a(r=>d.from([r,0,0,0,4]),"c\
odeOnlyBuffer"),Bc=Bt(72),Lc=Bt(83),Fc=Bt(88),kc=Bt(99),Mc={startup:pc,password:yc,requestSsl:dc,sendSASLInitialResponseMessage:mc,
sendSCRAMClientFinalMessage:gc,query:wc,parse:bc,bind:xc,execute:Ec,describe:Tc,close:Ic,flush:a(()=>Bc,
"flush"),sync:a(()=>Lc,"sync"),end:a(()=>Fc,"end"),copyData:Pc,copyDone:a(()=>kc,"copyDone"),copyFail:Rc,
cancel:Ac};Lt.serialize=Mc});var Ns=I(Ft=>{"use strict";p();Object.defineProperty(Ft,"__esModule",{value:!0});Ft.BufferReader=void 0;
var Uc=d.allocUnsafe(0),mn=class mn{constructor(e=0){this.offset=e,this.buffer=Uc,this.encoding="utf\
-8"}setBuffer(e,t){this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(mn,"BufferReader");var yn=mn;Ft.BufferReader=yn});var Hs=I(kt=>{"use strict";p();Object.defineProperty(kt,"__esModule",{value:!0});kt.Parser=void 0;var M=ln(),
Dc=Ns(),gn=1,Oc=4,js=gn+Oc,Ws=d.allocUnsafe(0),bn=class bn{constructor(e){if(this.buffer=Ws,this.bufferLength=
0,this.bufferOffset=0,this.reader=new Dc.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+
this.bufferLength,i=this.bufferOffset;for(;i+js<=n;){let s=this.buffer[i],o=this.buffer.readUInt32BE(
i+gn),u=gn+o;if(u+i<=n){let c=this.handlePacket(i+js,s,o,this.buffer);t(c),i+=u}else break}i===n?(this.
buffer=Ws,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){
let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.buffer;else{let s=this.
buffer.byteLength*2;for(;t>=s;)s*=2;i=d.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+
this.bufferLength),this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return M.bindComplete;case 49:return M.parseComplete;case 51:return M.closeComplete;case 110:
return M.noData;case 115:return M.portalSuspended;case 99:return M.copyDone;case 87:return M.replicationStart;case 73:
return M.emptyQuery;case 68:return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.parseNotificationMessage(
e,n,i);case 82:return this.parseAuthenticationResponse(e,n,i);case 83:return this.parseParameterStatusMessage(
e,n,i);case 75:return this.parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"e\
rror");case 78:return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.parseCopyInMessage(
e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:return this.parseCopyData(e,n,i);default:
return new M.DatabaseError("received invalid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.string(1);return new M.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new M.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){
let i=n.slice(e,e+(t-4));return new M.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(
e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==0,o=this.reader.
int16(),u=new M.CopyResponse(t,i,s,o);for(let c=0;c<o;c++)u.columnTypes[c]=this.reader.int16();return u}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();
return new M.NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new M.RowDescriptionMessage(t,i);for(let o=0;o<i;o++)s.fields[o]=this.
parseField();return s}parseField(){let e=this.reader.cstring(),t=this.reader.uint32(),n=this.reader.
int16(),i=this.reader.uint32(),s=this.reader.int16(),o=this.reader.int32(),u=this.reader.int16()===0?
"text":"binary";return new M.Field(e,t,n,i,s,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new M.ParameterDescriptionMessage(t,i);for(let o=0;o<i;o++)
s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){let u=this.reader.int32();s[o]=u===-1?
null:this.reader.string(u)}return new M.DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.cstring(),s=this.reader.cstring();return new M.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.
int32();return new M.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:break;case 3:s.
length===8&&(s.name="authenticationCleartextPassword");break;case 5:if(s.length===12){s.name="authen\
ticationMD5Password";let u=this.reader.bytes(4);return new M.AuthenticationMD5Password(t,u)}break;case 10:
s.name="authenticationSASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);break;case 12:s.name=
"authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:throw new Error("Unknown auth\
enticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(e,n);let s={},
o=this.reader.string(1);for(;o!=="\0";)s[o]=this.reader.cstring(),o=this.reader.string(1);let u=s.M,
c=i==="notice"?new M.NoticeMessage(t,u):new M.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,
c.detail=s.D,c.hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.schema=
s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.line=s.L,c.routine=s.R,c}};
a(bn,"Parser");var wn=bn;kt.Parser=wn});var vn=I(xe=>{"use strict";p();Object.defineProperty(xe,"__esModule",{value:!0});xe.DatabaseError=xe.
serialize=xe.parse=void 0;var qc=ln();Object.defineProperty(xe,"DatabaseError",{enumerable:!0,get:a(
function(){return qc.DatabaseError},"get")});var Qc=Qs();Object.defineProperty(xe,"serialize",{enumerable:!0,
get:a(function(){return Qc.serialize},"get")});var Nc=Hs();function jc(r,e){let t=new Nc.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(jc,"parse");xe.parse=jc});var $s={};ee($s,{connect:()=>Wc});function Wc({socket:r,servername:e}){return r.startTls(e),r}var Gs=z(
()=>{"use strict";p();a(Wc,"connect")});var En=I((zh,Ks)=>{"use strict";p();var Vs=(Ve(),D(mi)),Hc=we().EventEmitter,{parse:$c,serialize:q}=vn(),
zs=q.flush(),Gc=q.sync(),Vc=q.end(),Sn=class Sn extends Hc{constructor(e){super(),e=e||{},this.stream=
e.stream||new Vs.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(Gs(),D($s));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=
n.ssl.key)),Vs.isIP(t)===0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",
l)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),$c(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(q.requestSsl())}startup(e){this.
stream.write(q.startup(e))}cancel(e,t){this._send(q.cancel(e,t))}password(e){this._send(q.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(q.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(q.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(q.query(e))}parse(e){
this._send(q.parse(e))}bind(e){this._send(q.bind(e))}execute(e){this._send(q.execute(e))}flush(){this.
stream.writable&&this.stream.write(zs)}sync(){this._ending=!0,this._send(zs),this._send(Gc)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(Vc,()=>{this.stream.end()})}close(e){this._send(q.
close(e))}describe(e){this._send(q.describe(e))}sendCopyFromChunk(e){this._send(q.copyData(e))}endCopyFrom(){
this._send(q.copyDone())}sendCopyFail(e){this._send(q.copyFail(e))}};a(Sn,"Connection");var xn=Sn;Ks.
exports=xn});var Js=I((Jh,Zs)=>{"use strict";p();var zc=we().EventEmitter,Zh=(ot(),D(st)),Kc=it(),An=hs(),Yc=Es(),
Zc=Et(),Jc=Pt(),Ys=Ds(),Xc=nt(),el=En(),Cn=class Cn extends zc{constructor(e){super(),this.connectionParameters=
new Jc(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||w.Promise,
this._types=new Zc(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new el({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||Xc.binary,this.
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
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Yc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=Kc.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=An.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){An.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){An.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
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
connectionParameters.query_timeout,i=new Ys(e,t,n),i.callback||(s=new this._Promise((l,f)=>{i.callback=
(y,g)=>y?f(y):l(g)}))),o&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");m.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var f=this.queryQueue.indexOf(i);f>-1&&
this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=(l,f)=>{clearTimeout(u),c(l,f)}),
this.binary&&!i.binary&&(i.binary=!0),i._result&&!i._result._types&&(i._result._types=this._types),this.
_queryable?this._ending?(m.nextTick(()=>{i.handleError(new Error("Client was closed and is not query\
able"),this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(m.nextTick(()=>{i.
handleError(new Error("Client has encountered a connection error and is not queryable"),this.connection)}),
s)}ref(){this.connection.ref()}unref(){this.connection.unref()}end(e){if(this._ending=!0,!this.connection.
_connecting)if(e)e();else return this._Promise.resolve();if(this.activeQuery||!this._queryable?this.
connection.stream.destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(Cn,"Client");var Mt=Cn;Mt.Query=Ys;Zs.exports=Mt});var ro=I((tp,to)=>{"use strict";p();var tl=we().EventEmitter,Xs=a(function(){},"NOOP"),eo=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),In=class In{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(In,"IdleItem");var _n=In,Pn=class Pn{constructor(e){
this.callback=e}};a(Pn,"PendingItem");var Ne=Pn;function rl(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(rl,"throwOnDoubleRelease");function Ut(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(Ut,"promisify");
function nl(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(nl,"makeIdleListener");var Rn=class Rn extends tl{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||!1,this.
options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},
this.Client=this.options.Client||t||ut().Client,this.Promise=this.options.Promise||w.Promise,typeof this.
options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this.
_expired=new WeakSet,this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&
this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());
return}if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this.
_isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}
if(!this._isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e){let t=eo(
this._idle,n=>n.client===e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(
n=>n!==e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a poo\
l after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=Ut(this.Promise,e),n=t.
result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(()=>this._pulseQueue()),
!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new Ne(t.callback)),n;let i=a((u,c,l)=>{
clearTimeout(o),t.callback(u,c,l)},"queueCallback"),s=new Ne(i),o=setTimeout(()=>{eo(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},this.
options.connectionTimeoutMillis);return o.unref&&o.unref(),this._pendingQueue.push(s),n}return this.
newClient(new Ne(t.callback)),n}newClient(e){let t=new this.Client(this.options);this._clients.push(
t);let n=nl(this,t);this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(o=>{if(i&&
clearTimeout(i),t.on("error",n),o)this.log("client failed to connect",o),this._clients=this._clients.
filter(u=>u!==t),s&&(o=new Error("Connection terminated due to connection timeout",{cause:o})),this.
_pulseQueue(),e.timedOut||e.callback(o,void 0,Xs);else{if(this.log("new client connected"),this.options.
maxLifetimeSeconds!==0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new Ne((l,f,y)=>y()),
n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",()=>clearTimeout(u))}return this.
_acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){i&&this.emit("connect",e),this.emit("acquire",e),
e.release=this._releaseOnce(e,n),e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.
options.verify(e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,Xs);t.callback(void 0,e,e.release)}):t.callback(void 0,e,e.release)}_releaseOnce(e,t){
let n=!1;return i=>{n&&rl(),n=!0,this._release(e,t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=
(e._poolUseCount||0)+1,this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove expended client"),this.
_remove(e),this._pulseQueue();return}if(this._expired.has(e)){this.log("remove expired client"),this.
_expired.delete(e),this._remove(e),this._pulseQueue();return}let s;this.options.idleTimeoutMillis&&(s=
setTimeout(()=>{this.log("remove idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.
options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new _n(e,
t,s)),this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Ut(this.Promise,e);return b(function(){
return s.callback(new Error("Passing a function as the first parameter to pool.query is not supporte\
d"))}),s.result}typeof t=="function"&&(n=t,t=void 0);let i=Ut(this.Promise,n);return n=i.callback,this.
connect((s,o)=>{if(s)return n(s);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("er\
ror",c),this.log("dispatching query");try{o.query(e,t,(l,f)=>{if(this.log("query dispatched"),o.removeListener(
"error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,f)})}catch(l){return o.release(l),n(l)}}),i.result}end(e){
if(this.log("ending"),this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Ut(this.Promise,e);return this._endCallback=t.callback,this.
_pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.length}get idleCount(){return this.
_idle.length}get expiredCount(){return this._clients.reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){
return this._clients.length}};a(Rn,"Pool");var Tn=Rn;to.exports=Tn});var no={};ee(no,{default:()=>il});var il,io=z(()=>{"use strict";p();il={}});var so=I((sp,sl)=>{sl.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var uo=I((op,ao)=>{"use strict";p();var oo=we().EventEmitter,ol=(ot(),D(st)),Bn=it(),je=ao.exports=function(r,e,t){
oo.call(this),r=Bn.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};ol.inherits(je,oo);
var al={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};je.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=al[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};je.prototype.then=function(r,e){return this._getPromise().then(
r,e)};je.prototype.catch=function(r){return this._getPromise().catch(r)};je.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};je.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,b(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(c,l)=>{c.forEach(f=>{e.emit("row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(Bn.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(Bn.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var ho=I((lp,fo)=>{"use strict";p();var ul=(io(),D(no)),cl=Et(),cp=so(),co=we().EventEmitter,ll=(ot(),D(st)),
fl=Pt(),lo=uo(),Z=fo.exports=function(r){co.call(this),r=r||{},this._Promise=r.Promise||w.Promise,this.
_types=new cl(r.types),this.native=new ul({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new fl(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};Z.Query=
lo;ll.inherits(Z,co);Z.prototype._errorAllQueries=function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.
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
e);else if(s=this.connectionParameters.query_timeout,n=new lo(r,e,t),!n.callback){let c,l;i=new this.
_Promise((f,y)=>{c=f,l=y}),n.callback=(f,y)=>f?l(f):c(y)}return s&&(u=n.callback,o=setTimeout(()=>{var c=new Error(
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
r,e,t)};Z.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var Ln=I((pp,po)=>{"use strict";p();po.exports=ho()});var ut=I((yp,ct)=>{"use strict";p();var hl=Js(),pl=nt(),dl=En(),yl=ro(),{DatabaseError:ml}=vn(),gl=a(
r=>{var e;return e=class extends yl{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),Fn=a(
function(r){this.defaults=pl,this.Client=r,this.Query=this.Client.Query,this.Pool=gl(this.Client),this.
_pools=[],this.Connection=dl,this.types=et(),this.DatabaseError=ml},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<
"u"?ct.exports=new Fn(Ln()):(ct.exports=new Fn(hl),Object.defineProperty(ct.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Fn(Ln())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(ct.exports,"native",{value:r}),r}}))});var vl={};ee(vl,{Client:()=>We,DatabaseError:()=>He.DatabaseError,NeonDbError:()=>ye,NeonQueryPromise:()=>be,
Pool:()=>Dt,SqlTemplate:()=>Fe,UnsafeRawSql:()=>ke,_bundleExt:()=>bl,defaults:()=>He.defaults,neon:()=>pr,
neonConfig:()=>de,types:()=>He.types});module.exports=D(vl);p();p();Ve();Yt();p();var fa=Object.defineProperty,ha=Object.defineProperties,pa=Object.getOwnPropertyDescriptors,wi=Object.
getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ya=Object.prototype.propertyIsEnumerable,bi=a(
(r,e,t)=>e in r?fa(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
ma=a((r,e)=>{for(var t in e||(e={}))da.call(e,t)&&bi(r,t,e[t]);if(wi)for(var t of wi(e))ya.call(e,t)&&
bi(r,t,e[t]);return r},"__spreadValues"),ga=a((r,e)=>ha(r,pa(e)),"__spreadProps"),wa=1008e3,vi=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,ba=new TextDecoder,Zt=new TextEncoder,yt=Zt.encode("0123456789\
abcdef"),mt=Zt.encode("0123456789ABCDEF"),va=Zt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var xi=va.slice();xi[62]=45;xi[63]=95;var ze,gt;function xa(r,{alphabet:e,scratchArr:t}={}){if(!ze)if(ze=
new Uint16Array(256),gt=new Uint16Array(256),vi)for(let C=0;C<256;C++)ze[C]=yt[C&15]<<8|yt[C>>>4],gt[C]=
mt[C&15]<<8|mt[C>>>4];else for(let C=0;C<256;C++)ze[C]=yt[C&15]|yt[C>>>4]<<8,gt[C]=mt[C&15]|mt[C>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),c=new Uint32Array(o.buffer,o.byteOffset,i),l=e==="upper"?gt:ze,f=0,y=0,g;if(vi)
for(;f<s;)g=u[f++],c[y++]=l[g>>>8&255]<<16|l[g&255],c[y++]=l[g>>>24]<<16|l[g>>>16&255];else for(;f<s;)
g=u[f++],c[y++]=l[g>>>24]<<16|l[g>>>16&255],c[y++]=l[g>>>8&255]<<16|l[g&255];for(f<<=2;f<n;)o[f]=l[r[f++]];
return ba.decode(o.subarray(0,n))}a(xa,"_toHex");function Sa(r,e={}){let t="",n=r.length,i=wa>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n);for(let u=0;u<s;u++){let c=u*i,l=c+i;t+=xa(r.subarray(c,l),ga(ma(
{},e),{scratchArr:o}))}return t}a(Sa,"_toHexChunked");function Si(r,e={}){return e.alphabet!=="upper"&&
typeof r.toHex=="function"?r.toHex():Sa(r,e)}a(Si,"toHex");p();var wt=class wt{constructor(e,t){this.strings=e;this.values=t}toParameterizedQuery(e={query:"",params:[]}){
let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<n.length){let o=n[i];
if(o instanceof ke)e.query+=o.sql;else if(o instanceof be)if(o.queryData instanceof wt)o.queryData.toParameterizedQuery(
e);else{if(o.queryData.params?.length)throw new Error("This query is not composable");e.query+=o.queryData.
query}else{let{params:u}=e;u.push(o),e.query+="$"+u.length,(o instanceof d||ArrayBuffer.isView(o))&&
(e.query+="::bytea")}}return e}};a(wt,"SqlTemplate");var Fe=wt,Jt=class Jt{constructor(e){this.sql=e}};
a(Jt,"UnsafeRawSql");var ke=Jt;var os=Se(Et()),as=Se(it());var Ct=class Ct extends Error{constructor(t){super(t);E(this,"name","NeonDbError");E(this,"severity");
E(this,"code");E(this,"detail");E(this,"hint");E(this,"position");E(this,"internalPosition");E(this,
"internalQuery");E(this,"where");E(this,"schema");E(this,"table");E(this,"column");E(this,"dataType");
E(this,"constraint");E(this,"file");E(this,"line");E(this,"routine");E(this,"sourceError");"captureS\
tackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ct)}};a(
Ct,"NeonDbError");var ye=Ct,ns="transaction() expects an array of queries, or a function returning a\
n array of queries",Pu=["severity","code","detail","hint","position","internalPosition","internalQue\
ry","where","schema","table","column","dataType","constraint","file","line","routine"];function Ru(r){
return r instanceof d?"\\x"+Si(r):r}a(Ru,"encodeBuffersAsBytea");function is(r){let{query:e,params:t}=r instanceof
Fe?r.toParameterizedQuery():r;return{query:e,params:t.map(n=>Ru((0,as.prepareValue)(n)))}}a(is,"prep\
areQuery");function pr(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,
authToken:u}={}){if(!r)throw new Error("No database connection string was provided to `neon()`. Perh\
aps an environment variable has not been set?");let c;try{c=Kt(r)}catch{throw new Error("Database co\
nnection string provided to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:l,
username:f,hostname:y,port:g,pathname:A}=c;if(l!=="postgres:"&&l!=="postgresql:"||!f||!y||!A)throw new Error(
"Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbnam\
e?option=value");function C(P,...L){if(!(Array.isArray(P)&&Array.isArray(P.raw)&&Array.isArray(L)))throw new Error(
'This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("\
SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc\
.), use sql.query("SELECT $1", [value], options).');return new be(Q,new Fe(P,L))}a(C,"templateFn"),C.
query=(P,L,_)=>new be(Q,{query:P,params:L??[]},_),C.unsafe=P=>new ke(P),C.transaction=async(P,L)=>{if(typeof P==
"function"&&(P=P(C)),!Array.isArray(P))throw new Error(ns);P.forEach(H=>{if(!(H instanceof be))throw new Error(
ns)});let _=P.map(H=>H.queryData),x=P.map(H=>H.opts??{});return Q(_,x,L)};async function Q(P,L,_){let{
fetchEndpoint:x,fetchFunction:H}=de,le=Array.isArray(P)?{queries:P.map(J=>is(J))}:is(P),N=n??{},ie=e??
!1,se=t??!1,oe=i,B=s,$=o;_!==void 0&&(_.fetchOptions!==void 0&&(N={...N,..._.fetchOptions}),_.arrayMode!==
void 0&&(ie=_.arrayMode),_.fullResults!==void 0&&(se=_.fullResults),_.isolationLevel!==void 0&&(oe=_.
isolationLevel),_.readOnly!==void 0&&(B=_.readOnly),_.deferrable!==void 0&&($=_.deferrable)),L!==void 0&&
!Array.isArray(L)&&L.fetchOptions!==void 0&&(N={...N,...L.fetchOptions});let fe=u;!Array.isArray(L)&&
L?.authToken!==void 0&&(fe=L.authToken);let Ce=typeof x=="function"?x(y,g,{jwtAuth:fe!==void 0}):x,he={
"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true"},_e=await Bu(fe);_e&&
(he.Authorization=`Bearer ${_e}`),Array.isArray(P)&&(oe!==void 0&&(he["Neon-Batch-Isolation-Level"]=
oe),B!==void 0&&(he["Neon-Batch-Read-Only"]=String(B)),$!==void 0&&(he["Neon-Batch-Deferrable"]=String(
$)));let ae;try{ae=await(H??fetch)(Ce,{method:"POST",body:JSON.stringify(le),headers:he,...N})}catch(J){
let j=new ye(`Error connecting to database: ${J}`);throw j.sourceError=J,j}if(ae.ok){let J=await ae.
json();if(Array.isArray(P)){let j=J.results;if(!Array.isArray(j))throw new ye("Neon internal error: \
unexpected result format");return j.map((X,V)=>{let $e=L[V]??{},wo=$e.arrayMode??ie,bo=$e.fullResults??
se;return ss(X,{arrayMode:wo,fullResults:bo,types:$e.types})})}else{let j=L??{},X=j.arrayMode??ie,V=j.
fullResults??se;return ss(J,{arrayMode:X,fullResults:V,types:j.types})}}else{let{status:J}=ae;if(J===
400){let j=await ae.json(),X=new ye(j.message);for(let V of Pu)X[V]=j[V]??void 0;throw X}else{let j=await ae.
text();throw new ye(`Server error (HTTP status ${J}): ${j}`)}}}return a(Q,"execute"),C}a(pr,"neon");
var dr=class dr{constructor(e,t,n){this.execute=e;this.queryData=t;this.opts=n}then(e,t){return this.
execute(this.queryData,this.opts).then(e,t)}catch(e){return this.execute(this.queryData,this.opts).catch(
e)}finally(e){return this.execute(this.queryData,this.opts).finally(e)}};a(dr,"NeonQueryPromise");var be=dr;
function ss(r,{arrayMode:e,fullResults:t,types:n}){let i=new os.default(n),s=r.fields.map(c=>c.name),
o=r.fields.map(c=>i.getTypeParser(c.dataTypeID)),u=e===!0?r.rows.map(c=>c.map((l,f)=>l===null?null:o[f](
l))):r.rows.map(c=>Object.fromEntries(c.map((l,f)=>[s[f],l===null?null:o[f](l)])));return t?(r.viaNeonFetch=
!0,r.rowAsArray=e,r.rows=u,r._parsers=o,r._types=i,r):u}a(ss,"processQueryResult");async function Bu(r){
if(typeof r=="string")return r;if(typeof r=="function")try{return await Promise.resolve(r())}catch(e){
let t=new ye("Error getting auth token.");throw e instanceof Error&&(t=new ye(`Error getting auth to\
ken: ${e.message}`)),t}}a(Bu,"getAuthToken");p();var mo=Se(ut());p();var yo=Se(ut());var kn=class kn extends yo.Client{constructor(t){super(t);this.config=t}get neonConfig(){return this.
connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=
!1),this.ssl&&n.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=re\
quire in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSo\
cket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disabl\
e SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");let i=typeof this.config!=
"string"&&this.config?.host!==void 0||typeof this.config!="string"&&this.config?.connectionString!==
void 0||m.env.PGHOST!==void 0,s=m.env.USER??m.env.USERNAME;if(!i&&this.host==="localhost"&&this.user===
s&&this.database===s&&this.password===null)throw new Error(`No database host or connection string wa\
s set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null\
). Is an environment variable missing? Alternatively, if you intended to connect with these paramete\
rs, please set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&this.ssl,
c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let l=this.connection;if(u&&l.on(
"connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners("authenticationCleartextPassword"),
l.removeAllListeners("readyForQuery"),l.once("readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let f=this.ssl?"sslconnect":"connect";l.on(f,()=>{this._handleAuthCleartextPassword(),this.
_handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){if(typeof crypto>"u"||crypto.subtle===
void 0||crypto.subtle.importKey===void 0)throw new Error("Cannot use SASL auth when `crypto.subtle` \
is not defined");let n=crypto.subtle,i=this.saslSession,s=this.password,o=t.data;if(i.message!=="SAS\
LInitialResponse"||typeof s!="string"||typeof o!="string")throw new Error("SASL: protocol error");let u=Object.
fromEntries(o.split(",").map(X=>{if(!/^.=/.test(X))throw new Error("SASL: Invalid attribute pair ent\
ry");let V=X[0],$e=X.substring(2);return[V,$e]})),c=u.r,l=u.s,f=u.i;if(!c||!/^[!-+--~]+$/.test(c))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.
test(f))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!c.startsWith(
i.clientNonce))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with c\
lient nonce");if(c.length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: \
server nonce is too short");let y=parseInt(f,10),g=d.from(l,"base64"),A=new TextEncoder,C=A.encode(s),
Q=await n.importKey("raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),P=new Uint8Array(await n.
sign("HMAC",Q,d.concat([g,d.from([0,0,0,1])]))),L=P;for(var _=0;_<y-1;_++)P=new Uint8Array(await n.sign(
"HMAC",Q,P)),L=d.from(L.map((X,V)=>L[V]^P[V]));let x=L,H=await n.importKey("raw",x,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]),le=new Uint8Array(await n.sign("HMAC",H,A.encode("Client Key"))),N=await n.
digest("SHA-256",le),ie="n=*,r="+i.clientNonce,se="r="+c+",s="+l+",i="+y,oe="c=biws,r="+c,B=ie+","+se+
","+oe,$=await n.importKey("raw",N,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var fe=new Uint8Array(
await n.sign("HMAC",$,A.encode(B))),Ce=d.from(le.map((X,V)=>le[V]^fe[V])),he=Ce.toString("base64");let _e=await n.
importKey("raw",x,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),ae=await n.sign("HMAC",_e,A.encode(
"Server Key")),J=await n.importKey("raw",ae,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var j=d.
from(await n.sign("HMAC",J,A.encode(B)));i.message="SASLResponse",i.serverSignature=j.toString("base\
64"),i.response=oe+",p="+he,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
a(kn,"NeonClient");var We=kn;Ve();var go=Se(Pt());function wl(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(wl,"promisify");var Mn=class Mn extends mo.Pool{constructor(){
super(...arguments);E(this,"Client",We);E(this,"hasFetchUnsupportedListeners",!1);E(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!de.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=wl(this.Promise,i);i=s.callback;try{let o=new go.default(
this.options),u=encodeURIComponent,c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${c(o.database)}`,f=typeof t=="string"?t:t.text,y=n??t.values??[];pr(l,{fullResults:!0,arrayMode:t.
rowMode==="array"}).query(f,y,{types:t.types??this.options?.types}).then(A=>i(void 0,A)).catch(A=>i(
A))}catch(o){i(o)}return s.result}};a(Mn,"NeonPool");var Dt=Mn;Ve();var He=Se(ut()),bl="js";
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
