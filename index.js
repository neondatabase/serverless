"use strict";var So=Object.create;var Te=Object.defineProperty;var Eo=Object.getOwnPropertyDescriptor;var Ao=Object.getOwnPropertyNames;var Co=Object.getPrototypeOf,_o=Object.prototype.hasOwnProperty;var Io=(r,e,t)=>e in r?Te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>Te(r,"name",{value:e,configurable:!0});var G=(r,e)=>()=>(r&&(e=r(r=0)),e);var T=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),te=(r,e)=>{for(var t in e)Te(r,t,{get:e[t],
enumerable:!0})},On=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ao(e))!_o.
call(r,i)&&i!==t&&Te(r,i,{get:()=>e[i],enumerable:!(n=Eo(e,i))||n.enumerable});return r};var Ae=(r,e,t)=>(t=r!=null?So(Co(r)):{},On(e||!r||!r.__esModule?Te(t,"default",{value:r,enumerable:!0}):
t,r)),O=r=>On(Te({},"__esModule",{value:!0}),r);var E=(r,e,t)=>Io(r,typeof e!="symbol"?e+"":e,t);var Nn=T(ft=>{"use strict";p();ft.byteLength=Po;ft.toByteArray=Ro;ft.fromByteArray=ko;var ue=[],re=[],
To=typeof Uint8Array<"u"?Uint8Array:Array,Qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(Ce=0,qn=Qt.length;Ce<qn;++Ce)ue[Ce]=Qt[Ce],re[Qt.charCodeAt(Ce)]=Ce;var Ce,qn;re[45]=
62;re[95]=63;function Qn(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Qn,"getLens");
function Po(r){var e=Qn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(Po,"byteLength");function Bo(r,e,t){return(e+
t)*3/4-t}a(Bo,"_byteLength");function Ro(r){var e,t=Qn(r),n=t[0],i=t[1],s=new To(Bo(r,n,i)),o=0,u=i>
0?n-4:n,c;for(c=0;c<u;c+=4)e=re[r.charCodeAt(c)]<<18|re[r.charCodeAt(c+1)]<<12|re[r.charCodeAt(c+2)]<<
6|re[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=re[r.charCodeAt(
c)]<<2|re[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=re[r.charCodeAt(c)]<<10|re[r.charCodeAt(c+1)]<<
4|re[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(Ro,"toByteArray");function Lo(r){return ue[r>>
18&63]+ue[r>>12&63]+ue[r>>6&63]+ue[r&63]}a(Lo,"tripletToBase64");function Fo(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Lo(n));return i.join("")}a(Fo,"en\
codeChunk");function ko(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(Fo(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(ue[e>>2]+ue[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(ue[e>>10]+ue[e>>4&63]+ue[e<<2&63]+"=")),i.join("")}a(ko,"fromByteArray")});var Wn=T(Nt=>{p();Nt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,l=c>>1,f=-7,y=t?i-1:0,g=t?
-1:1,A=r[e+y];for(y+=g,s=A&(1<<-f)-1,A>>=-f,f+=u;f>0;s=s*256+r[e+y],y+=g,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+y],y+=g,f-=8);if(s===0)s=1-l;else{if(s===c)return o?NaN:(A?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-l}return(A?-1:1)*o*Math.pow(2,s-n)};Nt.write=function(r,e,t,n,i,s){var o,u,c,l=s*8-i-1,
f=(1<<l)-1,y=f>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=n?0:s-1,C=n?1:-1,D=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=
Math.pow(2,-o))<1&&(o--,c*=2),o+y>=1?e+=g/c:e+=g*Math.pow(2,1-y),e*c>=2&&(o++,c/=2),o+y>=f?(u=0,o=f):
o+y>=1?(u=(e*c-1)*Math.pow(2,i),o=o+y):(u=e*Math.pow(2,y-1)*Math.pow(2,i),o=0));i>=8;r[t+A]=u&255,A+=
C,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;r[t+A]=o&255,A+=C,o/=256,l-=8);r[t+A-C]|=D*128}});var si=T(Le=>{"use strict";p();var Wt=Nn(),Be=Wn(),jn=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;Le.Buffer=h;Le.SlowBuffer=Qo;Le.INSPECT_MAX_BYTES=
50;var ht=2147483647;Le.kMaxLength=ht;h.TYPED_ARRAY_SUPPORT=Mo();!h.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Mo(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(Mo,"typedArraySupport");Object.
defineProperty(h.prototype,"parent",{enumerable:!0,get:a(function(){if(h.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:a(function(){if(h.isBuffer(
this))return this.byteOffset},"get")});function pe(r){if(r>ht)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,h.prototype),
e}a(pe,"createBuffer");function h(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return Gt(r)}return Vn(r,e,t)}
a(h,"Buffer");h.poolSize=8192;function Vn(r,e,t){if(typeof r=="string")return Do(r,e);if(ArrayBuffer.
isView(r))return Oo(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ce(r,ArrayBuffer)||
r&&ce(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ce(r,SharedArrayBuffer)||r&&ce(r.buffer,
SharedArrayBuffer)))return Ht(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return h.
from(n,e,t);let i=qo(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return h.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a(Vn,"from");h.from=function(r,e,t){return Vn(r,e,t)};Object.setPrototypeOf(h.prototype,
Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function zn(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(zn,"assertSize");function Uo(r,e,t){return zn(r),r<=0?pe(r):e!==void 0?typeof t==
"string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}a(Uo,"alloc");h.alloc=function(r,e,t){return Uo(r,e,t)};
function Gt(r){return zn(r),pe(r<0?0:Vt(r)|0)}a(Gt,"allocUnsafe");h.allocUnsafe=function(r){return Gt(
r)};h.allocUnsafeSlow=function(r){return Gt(r)};function Do(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Kn(r,e)|0,n=pe(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a(Do,"fromString");function jt(r){let e=r.length<0?0:Vt(r.length)|
0,t=pe(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(jt,"fromArrayLike");function Oo(r){if(ce(r,Uint8Array)){
let e=new Uint8Array(r);return Ht(e.buffer,e.byteOffset,e.byteLength)}return jt(r)}a(Oo,"fromArrayVi\
ew");function Ht(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,h.prototype),n}a(Ht,"fromArrayBuffer");function qo(r){if(h.isBuffer(r)){
let e=Vt(r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Kt(r.length)?pe(0):jt(r);if(r.type==="Buffer"&&Array.isArray(r.data))return jt(r.data)}
a(qo,"fromObject");function Vt(r){if(r>=ht)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+ht.toString(16)+" bytes");return r|0}a(Vt,"checked");function Qo(r){return+r!=
r&&(r=0),h.alloc(+r)}a(Qo,"SlowBuffer");h.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
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
an Array of Buffers');s+=o.length}return i},"concat");function Kn(r,e){if(h.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||ce(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return $t(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ii(r).length;default:
if(i)return n?-1:$t(r).length;e=(""+e).toLowerCase(),i=!0}}a(Kn,"byteLength");h.byteLength=Kn;function No(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Zo(this,e,t);case"u\
tf8":case"utf-8":return Zn(this,e,t);case"ascii":return Ko(this,e,t);case"latin1":case"binary":return Yo(
this,e,t);case"base64":return Vo(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jo(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(No,
"slowToString");h.prototype._isBuffer=!0;function _e(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(_e,"swap");
h.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)_e(this,t,t+1);return this},"swap16");h.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)_e(this,t,t+3),_e(this,t+1,t+2);return this},"swap32");h.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)_e(this,t,t+7),_e(this,t+1,t+6),_e(this,t+2,t+5),_e(this,t+3,t+4);return this},
"swap64");h.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Zn(
this,0,e):No.apply(this,arguments)},"toString");h.prototype.toLocaleString=h.prototype.toString;h.prototype.
equals=a(function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:h.compare(this,e)===0},"equals");h.prototype.inspect=a(function(){let e="",t=Le.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");jn&&(h.prototype[jn]=h.prototype.inspect);h.prototype.compare=a(function(e,t,n,i,s){
if(ce(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,c=Math.min(o,u),l=this.slice(
i,s),f=e.slice(t,n);for(let y=0;y<c;++y)if(l[y]!==f[y]){o=l[y],u=f[y];break}return o<u?-1:u<o?1:0},"\
compare");function Yn(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Kt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=h.from(
e,n)),h.isBuffer(e))return e.length===0?-1:Hn(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):Hn(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(Yn,"bidire\
ctionalIndexOf");function Hn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function c(f,y){return s===1?f[y]:f.readUInt16BE(y*s)}a(c,"read");let l;if(i){let f=-1;for(l=
t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===u)return f*s}else f!==-1&&(l-=l-f),
f=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let f=!0;for(let y=0;y<u;y++)if(c(r,l+y)!==c(e,y)){f=!1;break}
if(f)return l}return-1}a(Hn,"arrayIndexOf");h.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");h.prototype.indexOf=a(function(e,t,n){return Yn(this,e,t,n,!0)},"indexOf");
h.prototype.lastIndexOf=a(function(e,t,n){return Yn(this,e,t,n,!1)},"lastIndexOf");function Wo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Kt(u))return o;r[t+o]=u}return o}a(Wo,"hexWrite");function jo(r,e,t,n){
return pt($t(e,r.length-t),r,t,n)}a(jo,"utf8Write");function Ho(r,e,t,n){return pt(ra(e),r,t,n)}a(Ho,
"asciiWrite");function $o(r,e,t,n){return pt(ii(e),r,t,n)}a($o,"base64Write");function Go(r,e,t,n){return pt(
na(e,r.length-t),r,t,n)}a(Go,"ucs2Write");h.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Wo(this,e,t,n);case"utf8":case"\
utf-8":return jo(this,e,t,n);case"ascii":case"latin1":case"binary":return Ho(this,e,t,n);case"base64":
return $o(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Go(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");h.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function Vo(r,e,t){return e===0&&t===r.length?Wt.fromByteArray(r):Wt.fromByteArray(r.slice(e,t))}
a(Vo,"base64Slice");function Zn(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let c,l,f,y;switch(u){case 1:s<128&&(o=s);break;case 2:c=r[i+
1],(c&192)===128&&(y=(s&31)<<6|c&63,y>127&&(o=y));break;case 3:c=r[i+1],l=r[i+2],(c&192)===128&&(l&192)===
128&&(y=(s&15)<<12|(c&63)<<6|l&63,y>2047&&(y<55296||y>57343)&&(o=y));break;case 4:c=r[i+1],l=r[i+2],
f=r[i+3],(c&192)===128&&(l&192)===128&&(f&192)===128&&(y=(s&15)<<18|(c&63)<<12|(l&63)<<6|f&63,y>65535&&
y<1114112&&(o=y))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return zo(n)}a(Zn,"utf8Slice");var $n=4096;function zo(r){let e=r.length;if(e<=$n)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
$n));return t}a(zo,"decodeCodePointsArray");function Ko(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Ko,"asciiSlice");function Yo(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(Yo,"latin1Slice");function Zo(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=ia[r[s]];return i}
a(Zo,"hexSlice");function Jo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a(Jo,"utf16leSlice");h.prototype.slice=a(function(e,t){let n=this.
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
2]<<8|this[e+3])},"readUInt32BE");h.prototype.readBigUInt64LE=be(a(function(e){e=e>>>0,Re(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ve(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));h.prototype.readBigUInt64BE=be(a(function(e){e=e>>>0,Re(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ve(e,this.length-8);let i=t*2**24+this[++e]*2**16+
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
readBigInt64LE=be(a(function(e){e=e>>>0,Re(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
Ve(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));h.prototype.readBigInt64BE=
be(a(function(e){e=e>>>0,Re(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ve(e,this.
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
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Jn(r,e,t,n,i){
ni(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a(Jn,"wrtBigUInt64LE");function Xn(r,e,t,n,i){ni(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Xn,"wrtBigUInt64BE");h.prototype.
writeBigUInt64LE=be(a(function(e,t=0){return Jn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));h.prototype.writeBigUInt64BE=be(a(function(e,t=0){return Xn(this,e,t,BigInt(0),BigInt(
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
t+4},"writeInt32BE");h.prototype.writeBigInt64LE=be(a(function(e,t=0){return Jn(this,e,t,-BigInt("0x\
8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));h.prototype.writeBigInt64BE=be(
a(function(e,t=0){return Xn(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"w\
riteBigInt64BE"));function ei(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range")}a(ei,"checkIEEE754");function ti(r,e,t,n,i){return e=
+e,t=t>>>0,i||ei(r,e,t,4,34028234663852886e22,-34028234663852886e22),Be.write(r,e,t,n,23,4),t+4}a(ti,
"writeFloat");h.prototype.writeFloatLE=a(function(e,t,n){return ti(this,e,t,!0,n)},"writeFloatLE");h.
prototype.writeFloatBE=a(function(e,t,n){return ti(this,e,t,!1,n)},"writeFloatBE");function ri(r,e,t,n,i){
return e=+e,t=t>>>0,i||ei(r,e,t,8,17976931348623157e292,-17976931348623157e292),Be.write(r,e,t,n,52,
8),t+8}a(ri,"writeDouble");h.prototype.writeDoubleLE=a(function(e,t,n){return ri(this,e,t,!0,n)},"wr\
iteDoubleLE");h.prototype.writeDoubleBE=a(function(e,t,n){return ri(this,e,t,!1,n)},"writeDoubleBE");
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
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Pe={};function zt(r,e,t){var n;Pe[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(zt,"E");zt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);zt(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);zt("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Gn(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Gn(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function Gn(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(Gn,"addNumericalSeparator");function Xo(r,e,t){
Re(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Ve(e,r.length-(t+1))}a(Xo,"checkBounds");function ni(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Pe.ERR_OUT_OF_RANGE("value",u,r)}Xo(n,i,s)}a(ni,"checkIntBI");function Re(r,e){if(typeof r!=
"number")throw new Pe.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Re,"validateNumber");function Ve(r,e,t){throw Math.
floor(r)!==r?(Re(r,t),new Pe.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Pe.ERR_BUFFER_OUT_OF_BOUNDS:
new Pe.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(Ve,"boundsError");var ea=/[^+/0-9A-Za-z-_]/g;
function ta(r){if(r=r.split("=")[0],r=r.trim().replace(ea,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(ta,"base64clean");function $t(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a($t,"utf\
8ToBytes");function ra(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
ra,"asciiToBytes");function na(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(na,"utf16leToBytes");function ii(r){return Wt.toByteArray(
ta(r))}a(ii,"base64ToBytes");function pt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(pt,"blitBuffer");function ce(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(ce,"isInstance");function Kt(r){return r!==
r}a(Kt,"numberIsNaN");var ia=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function be(r){return typeof BigInt>"u"?
sa:r}a(be,"defineBigIntMethod");function sa(){throw new Error("BigInt not supported")}a(sa,"BufferBi\
gIntNotDefined")});var b,v,x,d,m,p=G(()=>{"use strict";b=globalThis,v=globalThis.setImmediate??(r=>setTimeout(r,0)),x=globalThis.
clearImmediate??(r=>clearTimeout(r)),d=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.
allocUnsafe=="function"?globalThis.Buffer:si().Buffer,m=globalThis.process??{};m.env??(m.env={});try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var ve=T((Fl,Yt)=>{"use strict";p();var Fe=typeof Reflect=="object"?Reflect:null,oi=Fe&&typeof Fe.apply==
"function"?Fe.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),dt;
Fe&&typeof Fe.ownKeys=="function"?dt=Fe.ownKeys:Object.getOwnPropertySymbols?dt=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):dt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function oa(r){console&&console.warn&&console.warn(r)}a(oa,
"ProcessEmitWarning");var ui=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function B(){B.
init.call(this)}a(B,"EventEmitter");Yt.exports=B;Yt.exports.once=la;B.EventEmitter=B;B.prototype._events=
void 0;B.prototype._eventsCount=0;B.prototype._maxListeners=void 0;var ai=10;function yt(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(yt,"checkListener");Object.defineProperty(B,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return ai},"get"),set:a(function(r){if(typeof r!="number"||r<0||ui(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");ai=r},
"set")});B.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
B.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||ui(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function ci(r){return r._maxListeners===void 0?B.defaultMaxListeners:r._maxListeners}
a(ci,"_getMaxListeners");B.prototype.getMaxListeners=a(function(){return ci(this)},"getMaxListeners");
B.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")oi(c,this,t);else for(var l=c.
length,f=di(c,l),n=0;n<l;++n)oi(f[n],this,t);return!0},"emit");function li(r,e,t,n){var i,s,o;if(yt(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=ci(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,oa(u)}return r}a(li,"_addListener");B.prototype.addListener=a(function(e,t){
return li(this,e,t,!1)},"addListener");B.prototype.on=B.prototype.addListener;B.prototype.prependListener=
a(function(e,t){return li(this,e,t,!0)},"prependListener");function aa(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(aa,"onceWrapper");function fi(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=aa.bind(n);return i.listener=t,n.wrapFn=i,i}a(fi,"_onceW\
rap");B.prototype.once=a(function(e,t){return yt(t),this.on(e,fi(this,e,t)),this},"once");B.prototype.
prependOnceListener=a(function(e,t){return yt(t),this.prependListener(e,fi(this,e,t)),this},"prepend\
OnceListener");B.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(yt(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():ua(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");B.prototype.off=B.prototype.
removeListener;B.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function hi(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
ca(i):di(i,i.length)}a(hi,"_listeners");B.prototype.listeners=a(function(e){return hi(this,e,!0)},"l\
isteners");B.prototype.rawListeners=a(function(e){return hi(this,e,!1)},"rawListeners");B.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):pi.call(r,e)};B.prototype.
listenerCount=pi;function pi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(pi,"listenerCount");B.prototype.eventNames=a(function(){
return this._eventsCount>0?dt(this._events):[]},"eventNames");function di(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(di,"arrayClone");function ua(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(ua,"spliceOne");function ca(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(ca,"unwrapListeners");function la(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),yi(r,e,s,{once:!0}),e!=="error"&&
fa(r,i,{once:!0})})}a(la,"once");function fa(r,e,t){typeof r.on=="function"&&yi(r,"error",e,t)}a(fa,
"addErrorHandlerIfEventEmitter");function yi(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(yi,"eventTargetAgnosticAddListener")});var gi={};te(gi,{Socket:()=>se,isIP:()=>ha});function ha(r){return 0}var wi,mi,S,se,ke=G(()=>{"use s\
trict";p();wi=Ae(ve(),1);a(ha,"isIP");mi=/^[^.]+\./,S=class S extends wi.EventEmitter{constructor(){
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
opts.disableSNI=t}static get disableWarningInBrowsers(){return S.opts.disableWarningInBrowsers??S.defaults.
disableWarningInBrowsers}static set disableWarningInBrowsers(t){S.opts.disableWarningInBrowsers=t}get disableWarningInBrowsers(){
return this.opts.disableWarningInBrowsers??S.disableWarningInBrowsers}set disableWarningInBrowsers(t){
this.opts.disableWarningInBrowsers=t}static get pipelineConnect(){return S.opts.pipelineConnect??S.defaults.
pipelineConnect}static set pipelineConnect(t){S.opts.pipelineConnect=t}get pipelineConnect(){return this.
opts.pipelineConnect??S.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return S.opts.subtls??S.defaults.subtls}static set subtls(t){S.opts.subtls=t}get subtls(){return this.
opts.subtls??S.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){return S.opts.pipelineTLS??
S.defaults.pipelineTLS}static set pipelineTLS(t){S.opts.pipelineTLS=t}get pipelineTLS(){return this.
opts.pipelineTLS??S.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){return S.
opts.rootCerts??S.defaults.rootCerts}static set rootCerts(t){S.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??S.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){let i=this.
wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https://github.c\
om/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--stri\
ng");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
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
if(!this.coalesceWrites){this.ws&&this.ws.send(t);return}if(this.writeBuffer===void 0)this.writeBuffer=
t,setTimeout(()=>{this.ws&&this.ws.send(this.writeBuffer),this.writeBuffer=void 0},0);else{let n=new Uint8Array(
this.writeBuffer.length+t.length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?(i(),!0):(typeof t=="string"&&(t=d.from(t,n)),this.
tlsState===0?(this.rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(t,
n,i)}):(this.tlsWrite(t),i()),!0)}end(t=d.alloc(0),n="utf8",i=()=>{}){return this.write(t,n,()=>{this.
ws.close(),i()}),this}destroy(){return this.destroyed=!0,this.end()}};a(S,"Socket"),E(S,"defaults",{
poolQueryViaFetch:!1,fetchEndpoint:a((t,n,i)=>{let s;return i?.jwtAuth?s=t.replace(mi,"apiauth."):s=
t.replace(mi,"api."),"https://"+s+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,
webSocketConstructor:void 0,wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,
coalesceWrites:!0,pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1,
disableWarningInBrowsers:!1}),E(S,"opts",{});se=S});var bi={};te(bi,{parse:()=>Zt});function Zt(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:l,search:f,searchParams:y,hash:g}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),l=decodeURIComponent(l);let A=i+":"+s,C=e?Object.
fromEntries(y.entries()):f;return{href:r,protocol:t,auth:A,username:i,password:s,host:o,hostname:u,port:c,
pathname:l,search:f,query:C,hash:g}}var Jt=G(()=>{"use strict";p();a(Zt,"parse")});var rr=T(Ci=>{"use strict";p();Ci.parse=function(r,e){return new tr(r,e).parse()};var vt=class vt{constructor(e,t){
this.source=e,this.transform=t||Ca,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
return this.position>=this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){this.recorded.push(
e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),
t!==null&&(t=this.transform(t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.
consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.
dimension>1&&(n=new vt(this.source.substr(this.position-1),this.transform),this.entries.push(n.parse(
!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(!0),i=!i):t.value===
","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==0)throw new Error("array dimension \
not balanced");return this.entries}};a(vt,"ArrayParser");var tr=vt;function Ca(r){return r}a(Ca,"ide\
ntity")});var nr=T((Xl,_i)=>{p();var _a=rr();_i.exports={create:a(function(r,e){return{parse:a(function(){return _a.
parse(r,e)},"parse")}},"create")}});var Pi=T((rf,Ti)=>{"use strict";p();var Ia=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Ta=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Pa=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Ba=/^-?infinity$/;Ti.
exports=a(function(e){if(Ba.test(e))return Number(e.replace("i","I"));var t=Ia.exec(e);if(!t)return Ra(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Ii(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var y,g=La(e);return g!=null?
(y=new Date(Date.UTC(i,s,o,u,c,l,f)),ir(i)&&y.setUTCFullYear(i),g!==0&&y.setTime(y.getTime()-g)):(y=
new Date(i,s,o,u,c,l,f),ir(i)&&y.setFullYear(i)),y},"parseDate");function Ra(r){var e=Ta.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Ii(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return ir(
t)&&o.setFullYear(t),o}}a(Ra,"getDate");function La(r){if(r.endsWith("+00"))return 0;var e=Pa.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(La,"timeZoneOffset");function Ii(r){return-(r-
1)}a(Ii,"bcYearToNegativeYear");function ir(r){return r>=0&&r<100}a(ir,"is0To99")});var Ri=T((of,Bi)=>{p();Bi.exports=ka;var Fa=Object.prototype.hasOwnProperty;function ka(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)Fa.call(t,n)&&(r[n]=t[n])}return r}a(ka,"ext\
end")});var ki=T((cf,Fi)=>{"use strict";p();var Ma=Ri();Fi.exports=De;function De(r){if(!(this instanceof De))
return new De(r);Ma(this,Va(r))}a(De,"PostgresInterval");var Ua=["seconds","minutes","hours","days",
"months","years"];De.prototype.toPostgres=function(){var r=Ua.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Da={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},Oa=["years","months","days"],qa=["hours","minutes","seconds"];De.prototype.toISOString=De.prototype.
toISO=function(){var r=Oa.map(t,this).join(""),e=qa.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+Da[n]}};var sr="([+-]?\\d+)",Qa=sr+"\\s+years?",Na=sr+"\\s+mons?",Wa=sr+"\\s+days?",ja="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Ha=new RegExp([Qa,Na,Wa,ja].map(function(r){return"\
("+r+")?"}).join("\\s*")),Li={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
$a=["hours","minutes","seconds","milliseconds"];function Ga(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Ga,"parseMilliseconds");function Va(r){if(!r)return{};var e=Ha.exec(r),t=e[8]==="-";return Object.
keys(Li).reduce(function(n,i){var s=Li[i],o=e[s];return!o||(o=i==="milliseconds"?Ga(o):parseInt(o,10),
!o)||(t&&~$a.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a(Va,"parse")});var Ui=T((hf,Mi)=>{"use strict";p();Mi.exports=a(function(e){if(/^\\x/.test(e))return new d(e.substr(
2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.substr(n+
1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&e[n+i]===
"\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return new d(t,"binary")},"\
parseBytea")});var ji=T((yf,Wi)=>{p();var Ye=rr(),Ze=nr(),xt=Pi(),Oi=ki(),qi=Ui();function St(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(St,"allowNull");function Qi(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Qi,"parseBool");function za(r){return r?
Ye.parse(r,Qi):null}a(za,"parseBoolArray");function Ka(r){return parseInt(r,10)}a(Ka,"parseBaseTenIn\
t");function or(r){return r?Ye.parse(r,St(Ka)):null}a(or,"parseIntegerArray");function Ya(r){return r?
Ye.parse(r,St(function(e){return Ni(e).trim()})):null}a(Ya,"parseBigIntegerArray");var Za=a(function(r){
if(!r)return null;var e=Ze.create(r,function(t){return t!==null&&(t=lr(t)),t});return e.parse()},"pa\
rsePointArray"),ar=a(function(r){if(!r)return null;var e=Ze.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),ne=a(function(r){if(!r)return null;var e=Ze.
create(r);return e.parse()},"parseStringArray"),ur=a(function(r){if(!r)return null;var e=Ze.create(r,
function(t){return t!==null&&(t=xt(t)),t});return e.parse()},"parseDateArray"),Ja=a(function(r){if(!r)
return null;var e=Ze.create(r,function(t){return t!==null&&(t=Oi(t)),t});return e.parse()},"parseInt\
ervalArray"),Xa=a(function(r){return r?Ye.parse(r,St(qi)):null},"parseByteAArray"),cr=a(function(r){
return parseInt(r,10)},"parseInteger"),Ni=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),Di=a(function(r){return r?Ye.parse(r,St(JSON.parse)):null},"parseJsonArray"),lr=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),eu=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=lr(e);return s.radius=parseFloat(t),s},"parseCircle"),tu=a(function(r){r(20,Ni),r(21,cr),
r(23,cr),r(26,cr),r(700,parseFloat),r(701,parseFloat),r(16,Qi),r(1082,xt),r(1114,xt),r(1184,xt),r(600,
lr),r(651,ne),r(718,eu),r(1e3,za),r(1001,Xa),r(1005,or),r(1007,or),r(1028,or),r(1016,Ya),r(1017,Za),
r(1021,ar),r(1022,ar),r(1231,ar),r(1014,ne),r(1015,ne),r(1008,ne),r(1009,ne),r(1040,ne),r(1041,ne),r(
1115,ur),r(1182,ur),r(1185,ur),r(1186,Oi),r(1187,Ja),r(17,qi),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,Di),r(3807,Di),r(3907,ne),r(2951,ne),r(791,ne),r(1183,ne),r(1270,ne)},"init");
Wi.exports={init:tu}});var $i=T((gf,Hi)=>{"use strict";p();var z=1e6;function ru(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,c,l,f;{if(s=e%z,e=e/z>>>0,o=4294967296*s+
t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}
{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.
length,f=0;f<l;f++)c+="0";i=c+u+i}{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&
e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}return s=e%z,o=4294967296*s+t,u=
""+o%z,n+u+i}a(ru,"readInt8");Hi.exports=ru});var Yi=T((xf,Ki)=>{p();var nu=$i(),L=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(A,C,D){return A*
Math.pow(2,D)+C};var s=t>>3,o=a(function(A){return n?~A&255:A},"inv"),u=255,c=8-t%8;e<c&&(u=255<<8-e&
255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&u,c));for(var f=e+t>>3,y=s+1;y<f;y++)l=i(l,o(
r[y]),8);var g=(e+t)%8;return g>0&&(l=i(l,o(r[f])>>8-g,g)),l},"parseBits"),zi=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=L(r,1),s=L(r,t,1);if(s===0)return 0;var o=1,u=a(function(l,f,y){l===0&&(l=1);for(var g=1;g<=
y;g++)o/=2,(f&1<<y-g)>0&&(l+=o);return l},"parsePrecisionBits"),c=L(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),iu=a(function(r){
return L(r,1)==1?-1*(L(r,15,1,!0)+1):L(r,15,1)},"parseInt16"),Gi=a(function(r){return L(r,1)==1?-1*(L(
r,31,1,!0)+1):L(r,31,1)},"parseInt32"),su=a(function(r){return zi(r,23,8)},"parseFloat32"),ou=a(function(r){
return zi(r,52,11)},"parseFloat64"),au=a(function(r){var e=L(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,L(r,16,16)),n=0,i=[],s=L(r,16),o=0;o<s;o++)n+=L(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,L(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Vi=a(function(r,e){var t=L(e,1),n=L(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Je=a(function(r){for(var e=L(
r,32),t=L(r,32,32),n=L(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=L(r,32,i),i+=32,i+=32;var u=a(function(l){
var f=L(r,32,i);if(i+=32,f==4294967295)return null;var y;if(l==23||l==20)return y=L(r,f*8,i),i+=f*8,
y;if(l==25)return y=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),y;console.log("ERROR: ElementType no\
t implemented: "+l)},"parseElement"),c=a(function(l,f){var y=[],g;if(l.length>1){var A=l.shift();for(g=
0;g<A;g++)y[g]=c(l,f);l.unshift(A)}else for(g=0;g<l[0];g++)y[g]=u(f);return y},"parse");return c(s,n)},
"parseArray"),uu=a(function(r){return r.toString("utf8")},"parseText"),cu=a(function(r){return r===null?
null:L(r,8)>0},"parseBool"),lu=a(function(r){r(20,nu),r(21,iu),r(23,Gi),r(26,Gi),r(1700,au),r(700,su),
r(701,ou),r(16,cu),r(1114,Vi.bind(null,!1)),r(1184,Vi.bind(null,!0)),r(1e3,Je),r(1007,Je),r(1016,Je),
r(1008,Je),r(1009,Je),r(25,uu)},"init");Ki.exports={init:lu}});var Ji=T((Af,Zi)=>{p();Zi.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var tt=T(et=>{p();var fu=ji(),hu=Yi(),pu=nr(),du=Ji();et.getTypeParser=yu;et.setTypeParser=mu;et.arrayParser=
pu;et.builtins=du;var Xe={text:{},binary:{}};function Xi(r){return String(r)}a(Xi,"noParse");function yu(r,e){
return e=e||"text",Xe[e]&&Xe[e][r]||Xi}a(yu,"getTypeParser");function mu(r,e,t){typeof e=="function"&&
(t=e,e="text"),Xe[e][r]=t}a(mu,"setTypeParser");fu.init(function(r,e){Xe.text[r]=e});hu.init(function(r,e){
Xe.binary[r]=e})});var At=T((Pf,es)=>{"use strict";p();var wu=tt();function Et(r){this._types=r||wu,this.text={},this.binary=
{}}a(Et,"TypeOverrides");Et.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};Et.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};Et.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};es.exports=Et});function rt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
c=1541459225,l=0,f=0,y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a((I,w)=>I>>>w|I<<32-
w,"rrot"),A=new Uint32Array(64),C=new Uint8Array(64),D=a(()=>{for(let R=0,j=0;R<16;R++,j+=4)A[R]=C[j]<<
24|C[j+1]<<16|C[j+2]<<8|C[j+3];for(let R=16;R<64;R++){let j=g(A[R-15],7)^g(A[R-15],18)^A[R-15]>>>3,fe=g(
A[R-2],17)^g(A[R-2],19)^A[R-2]>>>10;A[R]=A[R-16]+j+A[R-7]+fe|0}let I=e,w=t,Z=n,W=i,J=s,X=o,oe=u,ae=c;
for(let R=0;R<64;R++){let j=g(J,6)^g(J,11)^g(J,25),fe=J&X^~J&oe,me=ae+j+fe+y[R]+A[R]|0,Ge=g(I,2)^g(I,
13)^g(I,22),he=I&w^I&Z^w&Z,Ie=Ge+he|0;ae=oe,oe=X,X=J,J=W+me|0,W=Z,Z=w,w=I,I=me+Ie|0}e=e+I|0,t=t+w|0,
n=n+Z|0,i=i+W|0,s=s+J|0,o=o+X|0,u=u+oe|0,c=c+ae|0,f=0},"process"),Y=a(I=>{typeof I=="string"&&(I=new TextEncoder().
encode(I));for(let w=0;w<I.length;w++)C[f++]=I[w],f===64&&D();l+=I.length},"add"),P=a(()=>{if(C[f++]=
128,f==64&&D(),f+8>64){for(;f<64;)C[f++]=0;D()}for(;f<58;)C[f++]=0;let I=l*8;C[f++]=I/1099511627776&
255,C[f++]=I/4294967296&255,C[f++]=I>>>24,C[f++]=I>>>16&255,C[f++]=I>>>8&255,C[f++]=I&255,D();let w=new Uint8Array(
32);return w[0]=e>>>24,w[1]=e>>>16&255,w[2]=e>>>8&255,w[3]=e&255,w[4]=t>>>24,w[5]=t>>>16&255,w[6]=t>>>
8&255,w[7]=t&255,w[8]=n>>>24,w[9]=n>>>16&255,w[10]=n>>>8&255,w[11]=n&255,w[12]=i>>>24,w[13]=i>>>16&255,
w[14]=i>>>8&255,w[15]=i&255,w[16]=s>>>24,w[17]=s>>>16&255,w[18]=s>>>8&255,w[19]=s&255,w[20]=o>>>24,w[21]=
o>>>16&255,w[22]=o>>>8&255,w[23]=o&255,w[24]=u>>>24,w[25]=u>>>16&255,w[26]=u>>>8&255,w[27]=u&255,w[28]=
c>>>24,w[29]=c>>>16&255,w[30]=c>>>8&255,w[31]=c&255,w},"digest");return r===void 0?{add:Y,digest:P}:
(Y(r),P())}var ts=G(()=>{"use strict";p();a(rt,"sha256")});var U,nt,rs=G(()=>{"use strict";p();U=class U{constructor(){E(this,"_dataLength",0);E(this,"_bufferL\
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
abcdef"),E(U,"hexOut",[]),E(U,"onePassHasher",new U);nt=U});var fr={};te(fr,{createHash:()=>bu,createHmac:()=>vu,randomBytes:()=>gu});function gu(r){return crypto.
getRandomValues(d.alloc(r))}function bu(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return d.from(rt(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?nt.hashStr(e):nt.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function vu(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=rt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(rt(o),64),d.from(rt(u))},
"digest")}},"update")}}var hr=G(()=>{"use strict";p();ts();rs();a(gu,"randomBytes");a(bu,"createHash");
a(vu,"createHmac")});var it=T((Wf,pr)=>{"use strict";p();pr.exports={host:"localhost",user:m.platform==="win32"?m.env.USERNAME:
m.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var Oe=tt(),xu=Oe.getTypeParser(20,"text"),Su=Oe.getTypeParser(1016,
"text");pr.exports.__defineSetter__("parseInt8",function(r){Oe.setTypeParser(20,"text",r?Oe.getTypeParser(
23,"text"):xu),Oe.setTypeParser(1016,"text",r?Oe.getTypeParser(1007,"text"):Su)})});var st=T((Hf,is)=>{"use strict";p();var Eu=(hr(),O(fr)),Au=it();function Cu(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Cu,"escapeElement");function ns(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+ns(r[t]):
r[t]instanceof d?e+="\\\\x"+r[t].toString("hex"):e+=Cu(Ct(r[t]));return e=e+"}",e}a(ns,"arrayString");
var Ct=a(function(r,e){if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?Au.parseInputDatesAsUTC?Tu(r):Iu(r):Array.isArray(r)?ns(r):typeof r==
"object"?_u(r,e):r.toString()},"prepareValue");function _u(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),Ct(r.toPostgres(Ct),e)}return JSON.stringify(r)}a(_u,"prepareObject");function N(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(N,"pad");function Iu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=N(t,4)+"-"+N(r.getMonth()+1,2)+"-"+N(r.getDate(),2)+"T"+N(r.getHours(),
2)+":"+N(r.getMinutes(),2)+":"+N(r.getSeconds(),2)+"."+N(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=N(Math.floor(e/60),2)+":"+N(e%60,2),n&&(i+=" BC"),i}a(Iu,"dateToString");function Tu(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=N(e,4)+"-"+N(r.getUTCMonth()+1,2)+"-"+N(r.
getUTCDate(),2)+"T"+N(r.getUTCHours(),2)+":"+N(r.getUTCMinutes(),2)+":"+N(r.getUTCSeconds(),2)+"."+N(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Tu,"dateToStringUTC");function Pu(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(Pu,"normalizeQueryConfig");var dr=a(function(r){return Eu.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Bu=a(function(r,e,t){var n=dr(e+r),i=dr(d.concat([d.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");is.exports={prepareValue:a(function(e){return Ct(e)},"prepareValueWrapper"),
normalizeQueryConfig:Pu,postgresMd5PasswordHash:Bu,md5:dr}});var ot={};te(ot,{default:()=>ku});var ku,at=G(()=>{"use strict";p();ku={}});var ds=T((nh,ps)=>{"use strict";p();var wr=(hr(),O(fr));function Mu(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=wr.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a(Mu,"startSession");function Uu(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=qu(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=d.from(n.salt,"base64"),s=Wu(e,i,n.iteration),o=qe(s,"Client Key"),u=Nu(
o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,y=c+
","+l+","+f,g=qe(u,y),A=hs(o,g),C=A.toString("base64"),D=qe(s,"Server Key"),Y=qe(D,y);r.message="SAS\
LResponse",r.serverSignature=Y.toString("base64"),r.response=f+",p="+C}a(Uu,"continueSession");function Du(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Qu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(Du,"finalizeSession");function Ou(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(Ou,"isPrintableChars");function ls(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(ls,"isBase64");function fs(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(fs,"parseAttribute\
Pairs");function qu(r){let e=fs(r),t=e.get("r");if(t){if(!Ou(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!ls(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(qu,"parseServerFirstMessage");
function Qu(r){let t=fs(r).get("v");if(t){if(!ls(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a(Qu,"parseServerFinalMessage");function hs(r,e){if(!d.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return d.from(r.map((t,n)=>r[n]^e[n]))}
a(hs,"xorBuffers");function Nu(r){return wr.createHash("sha256").update(r).digest()}a(Nu,"sha256");function qe(r,e){
return wr.createHmac("sha256",r).update(e).digest()}a(qe,"hmacSha256");function Wu(r,e,t){for(var n=qe(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=qe(r,n),i=hs(i,n);return i}a(Wu,"Hi");ps.exports=
{startSession:Mu,continueSession:Uu,finalizeSession:Du}});var gr={};te(gr,{join:()=>ju});function ju(...r){return r.join("/")}var br=G(()=>{"use strict";p();a(
ju,"join")});var vr={};te(vr,{stat:()=>Hu});function Hu(r,e){e(new Error("No filesystem"))}var xr=G(()=>{"use str\
ict";p();a(Hu,"stat")});var Sr={};te(Sr,{default:()=>$u});var $u,Er=G(()=>{"use strict";p();$u={}});var ys={};te(ys,{StringDecoder:()=>Ar});var Cr,Ar,ms=G(()=>{"use strict";p();Cr=class Cr{constructor(e){
E(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(Cr,"StringDecoder");Ar=Cr});var vs=T((ph,bs)=>{"use strict";p();var{Transform:Gu}=(Er(),O(Sr)),{StringDecoder:Vu}=(ms(),O(ys)),Se=Symbol(
"last"),It=Symbol("decoder");function zu(r,e,t){let n;if(this.overflow){if(n=this[It].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[Se]+=this[It].write(r),n=
this[Se].split(this.matcher);this[Se]=n.pop();for(let i=0;i<n.length;i++)try{gs(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[Se].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(zu,"transform");function Ku(r){if(this[Se]+=this[It].end(),this[Se])
try{gs(this,this.mapper(this[Se]))}catch(e){return r(e)}r()}a(Ku,"flush");function gs(r,e){e!==void 0&&
r.push(e)}a(gs,"push");function ws(r){return r}a(ws,"noop");function Yu(r,e,t){switch(r=r||/\r?\n/,e=
e||ws,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=ws)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=zu,t.flush=Ku,t.readableObjectMode=
!0;let n=new Gu(t);return n[Se]="",n[It]=new Vu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(Yu,"split");bs.exports=Yu});var Es=T((mh,ye)=>{"use strict";p();var xs=(br(),O(gr)),Zu=(Er(),O(Sr)).Stream,Ju=vs(),Ss=(at(),O(ot)),
Xu=5432,Tt=m.platform==="win32",ut=m.stderr,ec=56,tc=7,rc=61440,nc=32768;function ic(r){return(r&rc)==
nc}a(ic,"isRegFile");var Qe=["host","port","database","user","password"],_r=Qe.length,sc=Qe[_r-1];function Ir(){
var r=ut instanceof Zu&&ut.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);ut.write(Ss.format.apply(Ss,e))}}a(Ir,"warn");Object.defineProperty(ye.exports,"isWin",{get:a(function(){
return Tt},"get"),set:a(function(r){Tt=r},"set")});ye.exports.warnTo=function(r){var e=ut;return ut=
r,e};ye.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||(Tt?xs.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):xs.join(e.HOME||"./",".pgpass"));return t};ye.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(m.env,"PGPASSWORD")?!1:Tt?!0:(e=e||"<unkn>",ic(r.mode)?r.
mode&(ec|tc)?(Ir('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(Ir('WARNING: password file "%s" is not a plain file',e),!1))};var oc=ye.exports.
match=function(r,e){return Qe.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||Xu)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};ye.exports.getPassword=function(r,e,t){var n,i=e.pipe(
Ju());function s(c){var l=ac(c);l&&uc(l)&&oc(r,l)&&(n=l[sc],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),Ir("WARNING: error on reading file: %s",c),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var ac=ye.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(
function(f,y,g){var A=r.substring(y,g);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(A=A.
replace(/\\([:\\])/g,"$1")),o[Qe[f]]=A},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==_r-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).
length===_r?o:null,o},uc=ye.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<Qe.length;t+=1){var n=e[t],i=r[Qe[t]]||"",s=n(i);if(!s)return!1}return!0}});var Cs=T((vh,Tr)=>{"use strict";p();var bh=(br(),O(gr)),As=(xr(),O(vr)),Pt=Es();Tr.exports=function(r,e){
var t=Pt.getFileName();As.stat(t,function(n,i){if(n||!Pt.usePgPass(i,t))return e(void 0);var s=As.createReadStream(
t);Pt.getPassword(r,s,e)})};Tr.exports.warnTo=Pt.warnTo});var _s={};te(_s,{default:()=>cc});var cc,Is=G(()=>{"use strict";p();cc={}});var Ps=T((Eh,Ts)=>{"use strict";p();var lc=(Jt(),O(bi)),Pr=(xr(),O(vr));function Br(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=lc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)?encodeURI(r).replace(/\%25(\d\d)/g,"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&
(t[n]=t[n][t[n].length-1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(
":"),t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=e.query.db,t.
client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.pathname;if(!t.host&&s&&/^%2f/i.
test(s)){var o=s.split("/");t.host=decodeURIComponent(o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(
0)==="/"&&(s=s.slice(1)||null),t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),
t.ssl==="0"&&(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&(t.ssl.
cert=Pr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=Pr.readFileSync(t.sslkey).toString()),
t.sslrootcert&&(t.ssl.ca=Pr.readFileSync(t.sslrootcert).toString()),t.sslmode){case"disable":{t.ssl=
!1;break}case"prefer":case"require":case"verify-ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=
!1;break}}return t}a(Br,"parse");Ts.exports=Br;Br.parse=Br});var Bt=T((_h,Ls)=>{"use strict";p();var fc=(Is(),O(_s)),Rs=it(),Bs=Ps().parse,H=a(function(r,e,t){return t===
void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),e[r]||t||Rs[r]},"val"),hc=a(function(){switch(m.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return Rs.ssl},"readSSLConfigFromEnvironment"),Ne=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),ie=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+Ne(n))},"add"),Lr=class Lr{constructor(e){e=typeof e=="string"?Bs(e):
e||{},e.connectionString&&(e=Object.assign({},e,Bs(e.connectionString))),this.user=H("user",e),this.
database=H("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(H("por\
t",e),10),this.host=H("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:H("password",e)}),this.binary=H("binary",e),this.options=H("options",e),this.ssl=typeof e.
ssl>"u"?hc():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&
(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this.client_encoding=H("client_encoding",e),this.replication=H("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=H("application_name",e,"PGAPPNAME"),this.fallback_application_name=
H("fallback_application_name",e,!1),this.statement_timeout=H("statement_timeout",e,!1),this.lock_timeout=
H("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=H("idle_in_transaction_session_timeo\
ut",e,!1),this.query_timeout=H("query_timeout",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=
m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===
!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="nu\
mber"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];ie(t,this,"user"),ie(t,this,"password"),ie(t,this,"port"),ie(t,this,"application_name"),ie(
t,this,"fallback_application_name"),ie(t,this,"connect_timeout"),ie(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(ie(t,n,"sslmode"),ie(t,n,"sslca"),ie(t,n,"s\
slkey"),ie(t,n,"sslcert"),ie(t,n,"sslrootcert"),this.database&&t.push("dbname="+Ne(this.database)),this.
replication&&t.push("replication="+Ne(this.replication)),this.host&&t.push("host="+Ne(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+Ne(this.client_encoding)),
fc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+Ne(s)),e(null,t.join(" ")))})}};
a(Lr,"ConnectionParameters");var Rr=Lr;Ls.exports=Rr});var Ms=T((Ph,ks)=>{"use strict";p();var pc=tt(),Fs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,kr=class kr{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Fs.exec(e.text):t=Fs.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=pc.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(kr,"Result");var Fr=kr;ks.exports=Fr});var qs=T((Lh,Os)=>{"use strict";p();var{EventEmitter:dc}=ve(),Us=Ms(),Ds=st(),Ur=class Ur extends dc{constructor(e,t,n){
super(),e=Ds.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),this._result=
new Us(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new Us(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
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
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:Ds.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Ur,"Query");var Mr=Ur;Os.exports=
Mr});var hn=T(_=>{"use strict";p();Object.defineProperty(_,"__esModule",{value:!0});_.NoticeMessage=_.DataRowMessage=
_.CommandCompleteMessage=_.ReadyForQueryMessage=_.NotificationResponseMessage=_.BackendKeyDataMessage=
_.AuthenticationMD5Password=_.ParameterStatusMessage=_.ParameterDescriptionMessage=_.RowDescriptionMessage=
_.Field=_.CopyResponse=_.CopyDataMessage=_.DatabaseError=_.copyDone=_.emptyQuery=_.replicationStart=
_.portalSuspended=_.noData=_.closeComplete=_.bindComplete=_.parseComplete=void 0;_.parseComplete={name:"\
parseComplete",length:5};_.bindComplete={name:"bindComplete",length:5};_.closeComplete={name:"closeC\
omplete",length:5};_.noData={name:"noData",length:5};_.portalSuspended={name:"portalSuspended",length:5};
_.replicationStart={name:"replicationStart",length:4};_.emptyQuery={name:"emptyQuery",length:4};_.copyDone=
{name:"copyDone",length:4};var Zr=class Zr extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(Zr,"DatabaseError");var Dr=Zr;_.DatabaseError=Dr;var Jr=class Jr{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a(Jr,"CopyDataMessage");var Or=Jr;_.CopyDataMessage=Or;var Xr=class Xr{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(Xr,"CopyResponse");var qr=Xr;
_.CopyResponse=qr;var en=class en{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a(en,"Field");var Qr=en;
_.Field=Qr;var tn=class tn{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(tn,"RowDescriptionMessage");var Nr=tn;_.RowDescriptionMessage=
Nr;var rn=class rn{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(rn,"ParameterDescriptionMessage");var Wr=rn;
_.ParameterDescriptionMessage=Wr;var nn=class nn{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(nn,"ParameterStatusMessage");var jr=nn;_.ParameterStatusMessage=
jr;var sn=class sn{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(sn,"AuthenticationMD5Password");var Hr=sn;_.AuthenticationMD5Password=Hr;var on=class on{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(on,"BackendKeyDataMes\
sage");var $r=on;_.BackendKeyDataMessage=$r;var an=class an{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(an,"NotificationResponseMessa\
ge");var Gr=an;_.NotificationResponseMessage=Gr;var un=class un{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(un,"ReadyForQueryMessage");var Vr=un;_.ReadyForQueryMessage=Vr;
var cn=class cn{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(cn,"Comma\
ndCompleteMessage");var zr=cn;_.CommandCompleteMessage=zr;var ln=class ln{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(ln,"DataRowMessage");var Kr=ln;_.DataRowMessage=
Kr;var fn=class fn{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(fn,"NoticeMe\
ssage");var Yr=fn;_.NoticeMessage=Yr});var Qs=T(Rt=>{"use strict";p();Object.defineProperty(Rt,"__esModule",{value:!0});Rt.Writer=void 0;var dn=class dn{constructor(e=256){
this.size=e,this.offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){if(this.buffer.
length-this.offset<e){let n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(i),n.copy(
this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=e>>>24&255,this.buffer[this.
offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){
return this.ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{let t=d.byteLength(e);this.ensure(t+1),this.buffer.write(e,this.offset,"ut\
f-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){let t=d.byteLength(e);
return this.ensure(t),this.buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(
e.length),e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+
1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){let t=this.join(e);return this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}};a(dn,"Writer");var pn=dn;Rt.Writer=pn});var Ws=T(Ft=>{"use strict";p();Object.defineProperty(Ft,"__esModule",{value:!0});Ft.serialize=void 0;
var yn=Qs(),F=new yn.Writer,yc=a(r=>{F.addInt16(3).addInt16(0);for(let n of Object.keys(r))F.addCString(
n).addCString(r[n]);F.addCString("client_encoding").addCString("UTF8");let e=F.addCString("").flush(),
t=e.length+4;return new yn.Writer().addInt32(t).add(e).flush()},"startup"),mc=a(()=>{let r=d.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),wc=a(r=>F.addCString(r).flush(
112),"password"),gc=a(function(r,e){return F.addCString(r).addInt32(d.byteLength(e)).addString(e),F.
flush(112)},"sendSASLInitialResponseMessage"),bc=a(function(r){return F.addString(r).flush(112)},"se\
ndSCRAMClientFinalMessage"),vc=a(r=>F.addCString(r).flush(81),"query"),Ns=[],xc=a(r=>{let e=r.name||
"";e.length>63&&(console.error("Warning! Postgres only supports 63 characters for query names."),console.
error("You supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors e\
xecuting queries"));let t=r.types||Ns,n=t.length,i=F.addCString(e).addCString(r.text).addInt16(n);for(let s=0;s<
n;s++)i.addInt32(t[s]);return F.flush(80)},"parse"),We=new yn.Writer,Sc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(F.addInt16(0),We.addInt32(-1)):n instanceof d?(F.addInt16(
1),We.addInt32(n.length),We.add(n)):(F.addInt16(0),We.addInt32(d.byteLength(n)),We.addString(n))}},"\
writeValues"),Ec=a((r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||Ns,s=i.length;
return F.addCString(e).addCString(t),F.addInt16(s),Sc(i,r.valueMapper),F.addInt16(s),F.add(We.flush()),
F.addInt16(n?1:0),F.flush(66)},"bind"),Ac=d.from([69,0,0,0,9,0,0,0,0,0]),Cc=a(r=>{if(!r||!r.portal&&
!r.rows)return Ac;let e=r.portal||"",t=r.rows||0,n=d.byteLength(e),i=4+n+1+4,s=d.allocUnsafe(1+i);return s[0]=
69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.writeUInt32BE(t,s.length-4),s},"execute"),_c=a(
(r,e)=>{let t=d.allocUnsafe(16);return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,
6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"cancel"),mn=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),
Ic=F.addCString("P").flush(68),Tc=F.addCString("S").flush(68),Pc=a(r=>r.name?mn(68,`${r.type}${r.name||
""}`):r.type==="P"?Ic:Tc,"describe"),Bc=a(r=>{let e=`${r.type}${r.name||""}`;return mn(67,e)},"close"),
Rc=a(r=>F.add(r).flush(100),"copyData"),Lc=a(r=>mn(102,r),"copyFail"),Lt=a(r=>d.from([r,0,0,0,4]),"c\
odeOnlyBuffer"),Fc=Lt(72),kc=Lt(83),Mc=Lt(88),Uc=Lt(99),Dc={startup:yc,password:wc,requestSsl:mc,sendSASLInitialResponseMessage:gc,
sendSCRAMClientFinalMessage:bc,query:vc,parse:xc,bind:Ec,execute:Cc,describe:Pc,close:Bc,flush:a(()=>Fc,
"flush"),sync:a(()=>kc,"sync"),end:a(()=>Mc,"end"),copyData:Rc,copyDone:a(()=>Uc,"copyDone"),copyFail:Lc,
cancel:_c};Ft.serialize=Dc});var js=T(kt=>{"use strict";p();Object.defineProperty(kt,"__esModule",{value:!0});kt.BufferReader=void 0;
var Oc=d.allocUnsafe(0),gn=class gn{constructor(e=0){this.offset=e,this.buffer=Oc,this.encoding="utf\
-8"}setBuffer(e,t){this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(gn,"BufferReader");var wn=gn;kt.BufferReader=wn});var Gs=T(Mt=>{"use strict";p();Object.defineProperty(Mt,"__esModule",{value:!0});Mt.Parser=void 0;var k=hn(),
qc=js(),bn=1,Qc=4,Hs=bn+Qc,$s=d.allocUnsafe(0),xn=class xn{constructor(e){if(this.buffer=$s,this.bufferLength=
0,this.bufferOffset=0,this.reader=new qc.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+
this.bufferLength,i=this.bufferOffset;for(;i+Hs<=n;){let s=this.buffer[i],o=this.buffer.readUInt32BE(
i+bn),u=bn+o;if(u+i<=n){let c=this.handlePacket(i+Hs,s,o,this.buffer);t(c),i+=u}else break}i===n?(this.
buffer=$s,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){
let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.buffer;else{let s=this.
buffer.byteLength*2;for(;t>=s;)s*=2;i=d.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+
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
ticationMD5Password";let o=this.reader.bytes(4);return new k.AuthenticationMD5Password(t,o)}break;case 10:
{s.name="authenticationSASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o)}
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);break;case 12:s.name=
"authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:throw new Error("Unknown auth\
enticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(e,n);let s={},
o=this.reader.string(1);for(;o!=="\0";)s[o]=this.reader.cstring(),o=this.reader.string(1);let u=s.M,
c=i==="notice"?new k.NoticeMessage(t,u):new k.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,
c.detail=s.D,c.hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.schema=
s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.line=s.L,c.routine=s.R,c}};
a(xn,"Parser");var vn=xn;Mt.Parser=vn});var Sn=T(Ee=>{"use strict";p();Object.defineProperty(Ee,"__esModule",{value:!0});Ee.DatabaseError=Ee.
serialize=Ee.parse=void 0;var Nc=hn();Object.defineProperty(Ee,"DatabaseError",{enumerable:!0,get:a(
function(){return Nc.DatabaseError},"get")});var Wc=Ws();Object.defineProperty(Ee,"serialize",{enumerable:!0,
get:a(function(){return Wc.serialize},"get")});var jc=Gs();function Hc(r,e){let t=new jc.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(Hc,"parse");Ee.parse=Hc});var Vs={};te(Vs,{connect:()=>$c});function $c({socket:r,servername:e}){return r.startTls(e),r}var zs=G(
()=>{"use strict";p();a($c,"connect")});var Cn=T((tp,Zs)=>{"use strict";p();var Ks=(ke(),O(gi)),Gc=ve().EventEmitter,{parse:Vc,serialize:Q}=Sn(),
Ys=Q.flush(),zc=Q.sync(),Kc=Q.end(),An=class An extends Gc{constructor(e){super(),e=e||{},this.stream=
e.stream||new Ks.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(zs(),O(Vs));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=
n.ssl.key)),Ks.isIP(t)===0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",
l)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),Vc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(Q.requestSsl())}startup(e){this.
stream.write(Q.startup(e))}cancel(e,t){this._send(Q.cancel(e,t))}password(e){this._send(Q.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(Q.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(Q.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(Q.query(e))}parse(e){
this._send(Q.parse(e))}bind(e){this._send(Q.bind(e))}execute(e){this._send(Q.execute(e))}flush(){this.
stream.writable&&this.stream.write(Ys)}sync(){this._ending=!0,this._send(Ys),this._send(zc)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(Kc,()=>{this.stream.end()})}close(e){this._send(Q.
close(e))}describe(e){this._send(Q.describe(e))}sendCopyFromChunk(e){this._send(Q.copyData(e))}endCopyFrom(){
this._send(Q.copyDone())}sendCopyFail(e){this._send(Q.copyFail(e))}};a(An,"Connection");var En=An;Zs.
exports=En});var eo=T((sp,Xs)=>{"use strict";p();var Yc=ve().EventEmitter,ip=(at(),O(ot)),Zc=st(),_n=ds(),Jc=Cs(),
Xc=At(),el=Bt(),Js=qs(),tl=it(),rl=Cn(),In=class In extends Yc{constructor(e){super(),this.connectionParameters=
new el(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||b.Promise,
this._types=new Xc(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new rl({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||tl.binary,this.
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
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Jc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=Zc.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=_n.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){_n.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){_n.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
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
connectionParameters.query_timeout,i=new Js(e,t,n),i.callback||(s=new this._Promise((l,f)=>{i.callback=
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
_Promise(t=>{this.connection.once("end",t)})}};a(In,"Client");var Ut=In;Ut.Query=Js;Xs.exports=Ut});var io=T((up,no)=>{"use strict";p();var nl=ve().EventEmitter,to=a(function(){},"NOOP"),ro=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),Bn=class Bn{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(Bn,"IdleItem");var Tn=Bn,Rn=class Rn{constructor(e){
this.callback=e}};a(Rn,"PendingItem");var je=Rn;function il(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(il,"throwOnDoubleRelease");function Dt(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(Dt,"promisify");
function sl(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(sl,"makeIdleListener");var Ln=class Ln extends nl{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
min=this.options.min||0,this.options.maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=
this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,
this.log=this.options.log||function(){},this.Client=this.options.Client||t||ct().Client,this.Promise=
this.options.Promise||b.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=[],this._endCallback=
void 0,this.ending=!1,this.ended=!1}_isFull(){return this._clients.length>=this.options.max}_isAboveMin(){
return this._clients.length>this.options.min}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&
this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());
return}if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this.
_isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}
if(!this._isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e){let t=ro(
this._idle,n=>n.client===e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(
n=>n!==e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a poo\
l after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=Dt(this.Promise,e),n=t.
result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(()=>this._pulseQueue()),
!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new je(t.callback)),n;let i=a((u,c,l)=>{
clearTimeout(o),t.callback(u,c,l)},"queueCallback"),s=new je(i),o=setTimeout(()=>{ro(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},this.
options.connectionTimeoutMillis);return o.unref&&o.unref(),this._pendingQueue.push(s),n}return this.
newClient(new je(t.callback)),n}newClient(e){let t=new this.Client(this.options);this._clients.push(
t);let n=sl(this,t);this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(o=>{if(i&&
clearTimeout(i),t.on("error",n),o)this.log("client failed to connect",o),this._clients=this._clients.
filter(u=>u!==t),s&&(o=new Error("Connection terminated due to connection timeout",{cause:o})),this.
_pulseQueue(),e.timedOut||e.callback(o,void 0,to);else{if(this.log("new client connected"),this.options.
maxLifetimeSeconds!==0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new je((l,f,y)=>y()),
n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",()=>clearTimeout(u))}return this.
_acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){i&&this.emit("connect",e),this.emit("acquire",e),
e.release=this._releaseOnce(e,n),e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.
options.verify(e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,to);t.callback(void 0,e,e.release)}):t.callback(void 0,e,e.release)}_releaseOnce(e,t){
let n=!1;return i=>{n&&il(),n=!0,this._release(e,t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=
(e._poolUseCount||0)+1,this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove expended client"),this.
_remove(e),this._pulseQueue();return}if(this._expired.has(e)){this.log("remove expired client"),this.
_expired.delete(e),this._remove(e),this._pulseQueue();return}let s;this.options.idleTimeoutMillis&&this.
_isAboveMin()&&(s=setTimeout(()=>{this.log("remove idle client"),this._remove(e)},this.options.idleTimeoutMillis),
this.options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Tn(
e,t,s)),this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Dt(this.Promise,e);return v(function(){
return s.callback(new Error("Passing a function as the first parameter to pool.query is not supporte\
d"))}),s.result}typeof t=="function"&&(n=t,t=void 0);let i=Dt(this.Promise,n);return n=i.callback,this.
connect((s,o)=>{if(s)return n(s);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("er\
ror",c),this.log("dispatching query");try{o.query(e,t,(l,f)=>{if(this.log("query dispatched"),o.removeListener(
"error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,f)})}catch(l){return o.release(l),n(l)}}),i.result}end(e){
if(this.log("ending"),this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Dt(this.Promise,e);return this._endCallback=t.callback,this.
_pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.length}get idleCount(){return this.
_idle.length}get expiredCount(){return this._clients.reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){
return this._clients.length}};a(Ln,"Pool");var Pn=Ln;no.exports=Pn});var so={};te(so,{default:()=>ol});var ol,oo=G(()=>{"use strict";p();ol={}});var ao=T((hp,al)=>{al.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var lo=T((pp,co)=>{"use strict";p();var uo=ve().EventEmitter,ul=(at(),O(ot)),Fn=st(),He=co.exports=function(r,e,t){
uo.call(this),r=Fn.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};ul.inherits(He,uo);
var cl={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};He.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=cl[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};He.prototype.then=function(r,e){return this._getPromise().then(
r,e)};He.prototype.catch=function(r){return this._getPromise().catch(r)};He.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};He.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,v(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(c,l)=>{c.forEach(f=>{e.emit("row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(Fn.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(Fn.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var yo=T((wp,po)=>{"use strict";p();var ll=(oo(),O(so)),fl=At(),mp=ao(),fo=ve().EventEmitter,hl=(at(),O(ot)),
pl=Bt(),ho=lo(),K=po.exports=function(r){fo.call(this),r=r||{},this._Promise=r.Promise||b.Promise,this.
_types=new fl(r.types),this.native=new ll({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new pl(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};K.Query=
ho;hl.inherits(K,fo);K.prototype._errorAllQueries=function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.
native,t.handleError(r)})},"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};K.prototype._connect=function(r){var e=this;
if(this._connecting){m.nextTick(()=>r(new Error("Client has already been connected. You cannot reuse\
 a client.")));return}this._connecting=!0,this.connectionParameters.getLibpqConnectionString(function(t,n){
if(t)return r(t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,e.native.
on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notifi\
cation",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.emit("connect"),e.
_pulseQueryQueue(!0),r()})})};K.prototype.connect=function(r){if(r){this._connect(r);return}return new this.
_Promise((e,t)=>{this._connect(n=>{n?t(n):e()})})};K.prototype.query=function(r,e,t){var n,i,s,o,u;if(r==
null)throw new TypeError("Client was passed a null or undefined query");if(typeof r.submit=="functio\
n")s=r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="function"&&(r.callback=
e);else if(s=this.connectionParameters.query_timeout,n=new ho(r,e,t),!n.callback){let c,l;i=new this.
_Promise((f,y)=>{c=f,l=y}),n.callback=(f,y)=>f?l(f):c(y)}return s&&(u=n.callback,o=setTimeout(()=>{var c=new Error(
"Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),u(c),n.callback=()=>{};var l=this.
_queryQueue.indexOf(n);l>-1&&this._queryQueue.splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{
clearTimeout(o),u(c,l)}),this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),
i):(n.native=this.native,m.nextTick(()=>{n.handleError(new Error("Client has encountered a connectio\
n error and is not queryable"))}),i)};K.prototype.end=function(r){var e=this;this._ending=!0,this._connected||
this.once("connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){r=a(s=>s?
i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error("Connection terminated")),
m.nextTick(()=>{e.emit("end"),r&&r()})}),t};K.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};K.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){r||this.emit("dra\
in");return}this._activeQuery=e,e.submit(this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};
K.prototype.cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};K.prototype.ref=function(){};
K.prototype.unref=function(){};K.prototype.setTypeParser=function(r,e,t){return this._types.setTypeParser(
r,e,t)};K.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var kn=T((vp,mo)=>{"use strict";p();mo.exports=yo()});var ct=T((Sp,lt)=>{"use strict";p();var dl=eo(),yl=it(),ml=Cn(),wl=io(),{DatabaseError:gl}=Sn(),bl=a(
r=>{var e;return e=class extends wl{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),Mn=a(
function(r){this.defaults=yl,this.Client=r,this.Query=this.Client.Query,this.Pool=bl(this.Client),this.
_pools=[],this.Connection=ml,this.types=tt(),this.DatabaseError=gl},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<
"u"?lt.exports=new Mn(kn()):(lt.exports=new Mn(dl),Object.defineProperty(lt.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Mn(kn())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(lt.exports,"native",{value:r}),r}}))});var Sl={};te(Sl,{Client:()=>$e,DatabaseError:()=>le.DatabaseError,NeonDbError:()=>de,NeonQueryPromise:()=>xe,
Pool:()=>Ot,SqlTemplate:()=>Me,UnsafeRawSql:()=>Ue,_bundleExt:()=>xl,defaults:()=>le.defaults,escapeIdentifier:()=>le.escapeIdentifier,
escapeLiteral:()=>le.escapeLiteral,neon:()=>yr,neonConfig:()=>se,types:()=>le.types,warnIfBrowser:()=>Ke});
module.exports=O(Sl);p();p();ke();Jt();p();var pa=Object.defineProperty,da=Object.defineProperties,ya=Object.getOwnPropertyDescriptors,vi=Object.
getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,wa=Object.prototype.propertyIsEnumerable,xi=a(
(r,e,t)=>e in r?pa(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
ga=a((r,e)=>{for(var t in e||(e={}))ma.call(e,t)&&xi(r,t,e[t]);if(vi)for(var t of vi(e))wa.call(e,t)&&
xi(r,t,e[t]);return r},"__spreadValues"),ba=a((r,e)=>da(r,ya(e)),"__spreadProps"),va=1008e3,Si=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,xa=new TextDecoder,Xt=new TextEncoder,mt=Xt.encode("0123456789\
abcdef"),wt=Xt.encode("0123456789ABCDEF"),Sa=Xt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var Ei=Sa.slice();Ei[62]=45;Ei[63]=95;var ze,gt;function Ea(r,{alphabet:e,scratchArr:t}={}){if(!ze)if(ze=
new Uint16Array(256),gt=new Uint16Array(256),Si)for(let C=0;C<256;C++)ze[C]=mt[C&15]<<8|mt[C>>>4],gt[C]=
wt[C&15]<<8|wt[C>>>4];else for(let C=0;C<256;C++)ze[C]=mt[C&15]|mt[C>>>4]<<8,gt[C]=wt[C&15]|wt[C>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),c=new Uint32Array(o.buffer,o.byteOffset,i),l=e==="upper"?gt:ze,f=0,y=0,g;if(Si)
for(;f<s;)g=u[f++],c[y++]=l[g>>>8&255]<<16|l[g&255],c[y++]=l[g>>>24]<<16|l[g>>>16&255];else for(;f<s;)
g=u[f++],c[y++]=l[g>>>24]<<16|l[g>>>16&255],c[y++]=l[g>>>8&255]<<16|l[g&255];for(f<<=2;f<n;)o[f]=l[r[f++]];
return xa.decode(o.subarray(0,n))}a(Ea,"_toHex");function Aa(r,e={}){let t="",n=r.length,i=va>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n);for(let u=0;u<s;u++){let c=u*i,l=c+i;t+=Ea(r.subarray(c,l),ba(ga(
{},e),{scratchArr:o}))}return t}a(Aa,"_toHexChunked");function Ai(r,e={}){return e.alphabet!=="upper"&&
typeof r.toHex=="function"?r.toHex():Aa(r,e)}a(Ai,"toHex");p();var bt=class bt{constructor(e,t){this.strings=e;this.values=t}toParameterizedQuery(e={query:"",params:[]}){
let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<n.length){let o=n[i];
if(o instanceof Ue)e.query+=o.sql;else if(o instanceof xe)if(o.queryData instanceof bt)o.queryData.toParameterizedQuery(
e);else{if(o.queryData.params?.length)throw new Error("This query is not composable");e.query+=o.queryData.
query}else{let{params:u}=e;u.push(o),e.query+="$"+u.length,(o instanceof d||ArrayBuffer.isView(o))&&
(e.query+="::bytea")}}return e}};a(bt,"SqlTemplate");var Me=bt,er=class er{constructor(e){this.sql=e}};
a(er,"UnsafeRawSql");var Ue=er;p();function Ke(){typeof window<"u"&&typeof document<"u"&&typeof console<"u"&&typeof console.warn=="func\
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
        ************************************************************`)}a(Ke,"warnIfBrowser");ke();var us=Ae(At()),cs=Ae(st());var _t=class _t extends Error{constructor(t){super(t);E(this,"name","NeonDbError");E(this,"severity");
E(this,"code");E(this,"detail");E(this,"hint");E(this,"position");E(this,"internalPosition");E(this,
"internalQuery");E(this,"where");E(this,"schema");E(this,"table");E(this,"column");E(this,"dataType");
E(this,"constraint");E(this,"file");E(this,"line");E(this,"routine");E(this,"sourceError");"captureS\
tackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,_t)}};a(
_t,"NeonDbError");var de=_t,ss="transaction() expects an array of queries, or a function returning a\
n array of queries",Ru=["severity","code","detail","hint","position","internalPosition","internalQue\
ry","where","schema","table","column","dataType","constraint","file","line","routine"];function Lu(r){
return r instanceof d?"\\x"+Ai(r):r}a(Lu,"encodeBuffersAsBytea");function os(r){let{query:e,params:t}=r instanceof
Me?r.toParameterizedQuery():r;return{query:e,params:t.map(n=>Lu((0,cs.prepareValue)(n)))}}a(os,"prep\
areQuery");function yr(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,
authToken:u,disableWarningInBrowsers:c}={}){if(!r)throw new Error("No database connection string was\
 provided to `neon()`. Perhaps an environment variable has not been set?");let l;try{l=Zt(r)}catch{throw new Error(
"Database connection string provided to `neon()` is not a valid URL. Connection string: "+String(r))}
let{protocol:f,username:y,hostname:g,port:A,pathname:C}=l;if(f!=="postgres:"&&f!=="postgresql:"||!y||
!g||!C)throw new Error("Database connection string format for `neon()` should be: postgresql://user:\
password@host.tld/dbname?option=value");function D(P,...I){if(!(Array.isArray(P)&&Array.isArray(P.raw)&&
Array.isArray(I)))throw new Error('This function can now be called only as a tagged-template functio\
n: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call wi\
th value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).');return new xe(
Y,new Me(P,I))}a(D,"templateFn"),D.query=(P,I,w)=>new xe(Y,{query:P,params:I??[]},w),D.unsafe=P=>new Ue(
P),D.transaction=async(P,I)=>{if(typeof P=="function"&&(P=P(D)),!Array.isArray(P))throw new Error(ss);
P.forEach(W=>{if(!(W instanceof xe))throw new Error(ss)});let w=P.map(W=>W.queryData),Z=P.map(W=>W.opts??
{});return Y(w,Z,I)};async function Y(P,I,w){let{fetchEndpoint:Z,fetchFunction:W}=se,J=Array.isArray(
P)?{queries:P.map(ee=>os(ee))}:os(P),X=n??{},oe=e??!1,ae=t??!1,R=i,j=s,fe=o;w!==void 0&&(w.fetchOptions!==
void 0&&(X={...X,...w.fetchOptions}),w.arrayMode!==void 0&&(oe=w.arrayMode),w.fullResults!==void 0&&
(ae=w.fullResults),w.isolationLevel!==void 0&&(R=w.isolationLevel),w.readOnly!==void 0&&(j=w.readOnly),
w.deferrable!==void 0&&(fe=w.deferrable)),I!==void 0&&!Array.isArray(I)&&I.fetchOptions!==void 0&&(X=
{...X,...I.fetchOptions});let me=u;!Array.isArray(I)&&I?.authToken!==void 0&&(me=I.authToken);let Ge=typeof Z==
"function"?Z(g,A,{jwtAuth:me!==void 0}):Z,he={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"tru\
e","Neon-Array-Mode":"true"},Ie=await Fu(me);Ie&&(he.Authorization=`Bearer ${Ie}`),Array.isArray(P)&&
(R!==void 0&&(he["Neon-Batch-Isolation-Level"]=R),j!==void 0&&(he["Neon-Batch-Read-Only"]=String(j)),
fe!==void 0&&(he["Neon-Batch-Deferrable"]=String(fe))),c||se.disableWarningInBrowsers||Ke();let we;try{
we=await(W??fetch)(Ge,{method:"POST",body:JSON.stringify(J),headers:he,...X})}catch(ee){let M=new de(
`Error connecting to database: ${ee}`);throw M.sourceError=ee,M}if(we.ok){let ee=await we.json();if(Array.
isArray(P)){let M=ee.results;if(!Array.isArray(M))throw new de("Neon internal error: unexpected resu\
lt format");return M.map(($,ge)=>{let qt=I[ge]??{},vo=qt.arrayMode??oe,xo=qt.fullResults??ae;return as(
$,{arrayMode:vo,fullResults:xo,types:qt.types})})}else{let M=I??{},$=M.arrayMode??oe,ge=M.fullResults??
ae;return as(ee,{arrayMode:$,fullResults:ge,types:M.types})}}else{let{status:ee}=we;if(ee===400){let M=await we.
json(),$=new de(M.message);for(let ge of Ru)$[ge]=M[ge]??void 0;throw $}else{let M=await we.text();throw new de(
`Server error (HTTP status ${ee}): ${M}`)}}}return a(Y,"execute"),D}a(yr,"neon");var mr=class mr{constructor(e,t,n){
this.execute=e;this.queryData=t;this.opts=n}then(e,t){return this.execute(this.queryData,this.opts).
then(e,t)}catch(e){return this.execute(this.queryData,this.opts).catch(e)}finally(e){return this.execute(
this.queryData,this.opts).finally(e)}};a(mr,"NeonQueryPromise");var xe=mr;function as(r,{arrayMode:e,
fullResults:t,types:n}){let i=new us.default(n),s=r.fields.map(c=>c.name),o=r.fields.map(c=>i.getTypeParser(
c.dataTypeID)),u=e===!0?r.rows.map(c=>c.map((l,f)=>l===null?null:o[f](l))):r.rows.map(c=>Object.fromEntries(
c.map((l,f)=>[s[f],l===null?null:o[f](l)])));return t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r._parsers=
o,r._types=i,r):u}a(as,"processQueryResult");async function Fu(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new de("Error getting auth token.");
throw e instanceof Error&&(t=new de(`Error getting auth token: ${e.message}`)),t}}a(Fu,"getAuthToken");p();var go=Ae(ct());p();var wo=Ae(ct());var Un=class Un extends wo.Client{constructor(t){super(t);this.config=t}get neonConfig(){return this.
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
bind(this)));let f=this.ssl?"sslconnect":"connect";l.on(f,()=>{this.neonConfig.disableWarningInBrowsers||
Ke(),this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){
if(typeof crypto>"u"||crypto.subtle===void 0||crypto.subtle.importKey===void 0)throw new Error("Cann\
ot use SASL auth when `crypto.subtle` is not defined");let n=crypto.subtle,i=this.saslSession,s=this.
password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="string"||typeof o!="string")throw new Error(
"SASL: protocol error");let u=Object.fromEntries(o.split(",").map(M=>{if(!/^.=/.test(M))throw new Error(
"SASL: Invalid attribute pair entry");let $=M[0],ge=M.substring(2);return[$,ge]})),c=u.r,l=u.s,f=u.i;
if(!c||!/^[!-+--~]+$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unpri\
ntable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(l))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.test(f))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!c.startsWith(i.clientNonce))
throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");if(c.
length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too\
 short");let y=parseInt(f,10),g=d.from(l,"base64"),A=new TextEncoder,C=A.encode(s),D=await n.importKey(
"raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Y=new Uint8Array(await n.sign("HMAC",D,d.concat(
[g,d.from([0,0,0,1])]))),P=Y;for(var I=0;I<y-1;I++)Y=new Uint8Array(await n.sign("HMAC",D,Y)),P=d.from(
P.map((M,$)=>P[$]^Y[$]));let w=P,Z=await n.importKey("raw",w,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),W=new Uint8Array(await n.sign("HMAC",Z,A.encode("Client Key"))),J=await n.digest("SHA-256",
W),X="n=*,r="+i.clientNonce,oe="r="+c+",s="+l+",i="+y,ae="c=biws,r="+c,R=X+","+oe+","+ae,j=await n.importKey(
"raw",J,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var fe=new Uint8Array(await n.sign("HMAC",j,
A.encode(R))),me=d.from(W.map((M,$)=>W[$]^fe[$])),Ge=me.toString("base64");let he=await n.importKey(
"raw",w,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Ie=await n.sign("HMAC",he,A.encode("Server \
Key")),we=await n.importKey("raw",Ie,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var ee=d.from(
await n.sign("HMAC",we,A.encode(R)));i.message="SASLResponse",i.serverSignature=ee.toString("base64"),
i.response=ae+",p="+Ge,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};a(Un,
"NeonClient");var $e=Un;ke();var bo=Ae(Bt());function vl(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(vl,"promisify");var Dn=class Dn extends go.Pool{constructor(){
super(...arguments);E(this,"Client",$e);E(this,"hasFetchUnsupportedListeners",!1);E(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!se.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=vl(this.Promise,i);i=s.callback;try{let o=new bo.default(
this.options),u=encodeURIComponent,c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${c(o.database)}`,f=typeof t=="string"?t:t.text,y=n??t.values??[];yr(l,{fullResults:!0,arrayMode:t.
rowMode==="array"}).query(f,y,{types:t.types??this.options?.types}).then(A=>i(void 0,A)).catch(A=>i(
A))}catch(o){i(o)}return s.result}};a(Dn,"NeonPool");var Ot=Dn;ke();var le=Ae(ct()),xl="js";
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
