"use strict";var Ro=Object.create;var Pe=Object.defineProperty;var Lo=Object.getOwnPropertyDescriptor;var Bo=Object.getOwnPropertyNames;var Fo=Object.getPrototypeOf,ko=Object.prototype.hasOwnProperty;var Mo=(r,e,t)=>e in r?Pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e)=>Pe(r,"name",{value:e,configurable:!0});var V=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var T=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},X=(r,e)=>{
for(var t in e)Pe(r,t,{get:e[t],enumerable:!0})},Nn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Bo(e))!ko.call(r,i)&&i!==t&&Pe(r,i,{get:()=>e[i],enumerable:!(n=Lo(e,i))||n.
enumerable});return r};var be=(r,e,t)=>(t=r!=null?Ro(Fo(r)):{},Nn(e||!r||!r.__esModule?Pe(t,"default",{value:r,enumerable:!0}):
t,r)),U=r=>Nn(Pe({},"__esModule",{value:!0}),r);var E=(r,e,t)=>Mo(r,typeof e!="symbol"?e+"":e,t);var Hn=T(lt=>{"use strict";h();lt.byteLength=Oo;lt.toByteArray=qo;lt.fromByteArray=Wo;var le=[],ee=[],
Uo=typeof Uint8Array<"u"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01\
23456789+/";for(Ce=0,Wn=Nt.length;Ce<Wn;++Ce)le[Ce]=Nt[Ce],ee[Nt.charCodeAt(Ce)]=Ce;var Ce,Wn;ee[45]=
62;ee[95]=63;function jn(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be \
a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(jn,"getLens");
function Oo(r){var e=jn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(Oo,"byteLength");function Do(r,e,t){return(e+
t)*3/4-t}a(Do,"_byteLength");function qo(r){var e,t=jn(r),n=t[0],i=t[1],s=new Uo(Do(r,n,i)),o=0,u=i>
0?n-4:n,c;for(c=0;c<u;c+=4)e=ee[r.charCodeAt(c)]<<18|ee[r.charCodeAt(c+1)]<<12|ee[r.charCodeAt(c+2)]<<
6|ee[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=ee[r.charCodeAt(
c)]<<2|ee[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=ee[r.charCodeAt(c)]<<10|ee[r.charCodeAt(c+1)]<<
4|ee[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(qo,"toByteArray");function Qo(r){return le[r>>
18&63]+le[r>>12&63]+le[r>>6&63]+le[r&63]}a(Qo,"tripletToBase64");function No(r,e,t){for(var n,i=[],s=e;s<
t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Qo(n));return i.join("")}a(No,"en\
codeChunk");function Wo(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(No(r,o,
o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(le[e>>2]+le[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],
i.push(le[e>>10]+le[e>>4&63]+le[e<<2&63]+"=")),i.join("")}a(Wo,"fromByteArray")});var $n=T(Wt=>{h();Wt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,l=c>>1,f=-7,m=t?i-1:0,g=t?
-1:1,w=r[e+m];for(m+=g,s=w&(1<<-f)-1,w>>=-f,f+=u;f>0;s=s*256+r[e+m],m+=g,f-=8);for(o=s&(1<<-f)-1,s>>=
-f,f+=n;f>0;o=o*256+r[e+m],m+=g,f-=8);if(s===0)s=1-l;else{if(s===c)return o?NaN:(w?-1:1)*(1/0);o=o+Math.
pow(2,n),s=s-l}return(w?-1:1)*o*Math.pow(2,s-n)};Wt.write=function(r,e,t,n,i,s){var o,u,c,l=s*8-i-1,
f=(1<<l)-1,m=f>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=n?0:s-1,v=n?1:-1,M=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=
Math.pow(2,-o))<1&&(o--,c*=2),o+m>=1?e+=g/c:e+=g*Math.pow(2,1-m),e*c>=2&&(o++,c/=2),o+m>=f?(u=0,o=f):
o+m>=1?(u=(e*c-1)*Math.pow(2,i),o=o+m):(u=e*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;r[t+w]=u&255,w+=
v,u/=256,i-=8);for(o=o<<i|u,l+=i;l>0;r[t+w]=o&255,w+=v,o/=256,l-=8);r[t+w-v]|=M*128}});var ui=T(Fe=>{"use strict";h();var jt=Hn(),Le=$n(),Gn=typeof Symbol=="function"&&typeof Symbol.for==
"function"?Symbol.for("nodejs.util.inspect.custom"):null;Fe.Buffer=p;Fe.SlowBuffer=Ko;Fe.INSPECT_MAX_BYTES=
50;var ft=2147483647;Fe.kMaxLength=ft;p.TYPED_ARRAY_SUPPORT=jo();!p.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function jo(){
try{let r=new Uint8Array(1),e={foo:a(function(){return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}a(jo,"typedArraySupport");Object.
defineProperty(p.prototype,"parent",{enumerable:!0,get:a(function(){if(p.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:a(function(){if(p.isBuffer(
this))return this.byteOffset},"get")});function ye(r){if(r>ft)throw new RangeError('The value "'+r+'\
" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,p.prototype),
e}a(ye,"createBuffer");function p(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError(
'The "string" argument must be of type string. Received type number');return Vt(r)}return Yn(r,e,t)}
a(p,"Buffer");p.poolSize=8192;function Yn(r,e,t){if(typeof r=="string")return $o(r,e);if(ArrayBuffer.
isView(r))return Go(r);if(r==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(fe(r,ArrayBuffer)||
r&&fe(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(fe(r,SharedArrayBuffer)||r&&fe(r.buffer,
SharedArrayBuffer)))return $t(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return p.
from(n,e,t);let i=Vo(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.
toPrimitive]=="function")return p.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof r)}a(Yn,"from");p.from=function(r,e,t){return Yn(r,e,t)};Object.setPrototypeOf(p.prototype,
Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function Zn(r){if(typeof r!="number")throw new TypeError(
'"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid \
for option "size"')}a(Zn,"assertSize");function Ho(r,e,t){return Zn(r),r<=0?ye(r):e!==void 0?typeof t==
"string"?ye(r).fill(e,t):ye(r).fill(e):ye(r)}a(Ho,"alloc");p.alloc=function(r,e,t){return Ho(r,e,t)};
function Vt(r){return Zn(r),ye(r<0?0:Kt(r)|0)}a(Vt,"allocUnsafe");p.allocUnsafe=function(r){return Vt(
r)};p.allocUnsafeSlow=function(r){return Vt(r)};function $o(r,e){if((typeof e!="string"||e==="")&&(e=
"utf8"),!p.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Jn(r,e)|0,n=ye(t),i=n.write(
r,e);return i!==t&&(n=n.slice(0,i)),n}a($o,"fromString");function Ht(r){let e=r.length<0?0:Kt(r.length)|
0,t=ye(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}a(Ht,"fromArrayLike");function Go(r){if(fe(r,Uint8Array)){
let e=new Uint8Array(r);return $t(e.buffer,e.byteOffset,e.byteLength)}return Ht(r)}a(Go,"fromArrayVi\
ew");function $t(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer b\
ounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;
return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(
r,e,t),Object.setPrototypeOf(n,p.prototype),n}a($t,"fromArrayBuffer");function Vo(r){if(p.isBuffer(r)){
let e=Kt(r.length)|0,t=ye(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.
length!="number"||Yt(r.length)?ye(0):Ht(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Ht(r.data)}
a(Vo,"fromObject");function Kt(r){if(r>=ft)throw new RangeError("Attempt to allocate Buffer larger t\
han maximum size: 0x"+ft.toString(16)+" bytes");return r|0}a(Kt,"checked");function Ko(r){return+r!=
r&&(r=0),p.alloc(+r)}a(Ko,"SlowBuffer");p.isBuffer=a(function(e){return e!=null&&e._isBuffer===!0&&e!==
p.prototype},"isBuffer");p.compare=a(function(e,t){if(fe(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),
fe(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),!p.isBuffer(e)||!p.isBuffer(t))throw new TypeError(
'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,
i=t.length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?
1:0},"compare");p.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"\
utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"\
utf-16le":return!0;default:return!1}},"isEncoding");p.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError(
'"list" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);let n;if(t===void 0)
for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=p.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];
if(fe(o,Uint8Array))s+o.length>i.length?(p.isBuffer(o)||(o=p.from(o)),o.copy(i,s)):Uint8Array.prototype.
set.call(i,o,s);else if(p.isBuffer(o))o.copy(i,s);else throw new TypeError('"list" argument must be \
an Array of Buffers');s+=o.length}return i},"concat");function Jn(r,e){if(p.isBuffer(r))return r.length;
if(ArrayBuffer.isView(r)||fe(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError(
'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);
let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"\
ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Gt(r).length;case"ucs2":case"\
ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ai(r).length;default:
if(i)return n?-1:Gt(r).length;e=(""+e).toLowerCase(),i=!0}}a(Jn,"byteLength");p.byteLength=Jn;function zo(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=
0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return sa(this,e,t);case"u\
tf8":case"utf-8":return ei(this,e,t);case"ascii":return na(this,e,t);case"latin1":case"binary":return ia(
this,e,t);case"base64":return ta(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oa(
this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(zo,
"slowToString");p.prototype._isBuffer=!0;function _e(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}a(_e,"swap");
p.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must \
be a multiple of 16-bits");for(let t=0;t<e;t+=2)_e(this,t,t+1);return this},"swap16");p.prototype.swap32=
a(function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32\
-bits");for(let t=0;t<e;t+=4)_e(this,t,t+3),_e(this,t+1,t+2);return this},"swap32");p.prototype.swap64=
a(function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64\
-bits");for(let t=0;t<e;t+=8)_e(this,t,t+7),_e(this,t+1,t+6),_e(this,t+2,t+5),_e(this,t+3,t+4);return this},
"swap64");p.prototype.toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?ei(
this,0,e):zo.apply(this,arguments)},"toString");p.prototype.toLocaleString=p.prototype.toString;p.prototype.
equals=a(function(e){if(!p.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===
e?!0:p.compare(this,e)===0},"equals");p.prototype.inspect=a(function(){let e="",t=Fe.INSPECT_MAX_BYTES;
return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buff\
er "+e+">"},"inspect");Gn&&(p.prototype[Gn]=p.prototype.inspect);p.prototype.compare=a(function(e,t,n,i,s){
if(fe(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(e))throw new TypeError('The "ta\
rget" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=
0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=
n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,u=n-t,c=Math.min(o,u),l=this.slice(
i,s),f=e.slice(t,n);for(let m=0;m<c;++m)if(l[m]!==f[m]){o=l[m],u=f[m];break}return o<u?-1:u<o?1:0},"\
compare");function Xn(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?
t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Yt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.
length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=p.from(
e,n)),p.isBuffer(e))return e.length===0?-1:Vn(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.
call(r,e,t):Vn(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(Xn,"bidire\
ctionalIndexOf");function Vn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),
n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,
u/=2,t/=2}function c(f,m){return s===1?f[m]:f.readUInt16BE(m*s)}a(c,"read");let l;if(i){let f=-1;for(l=
t;l<o;l++)if(c(r,l)===c(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===u)return f*s}else f!==-1&&(l-=l-f),
f=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let f=!0;for(let m=0;m<u;m++)if(c(r,l+m)!==c(e,m)){f=!1;break}
if(f)return l}return-1}a(Vn,"arrayIndexOf");p.prototype.includes=a(function(e,t,n){return this.indexOf(
e,t,n)!==-1},"includes");p.prototype.indexOf=a(function(e,t,n){return Xn(this,e,t,n,!0)},"indexOf");
p.prototype.lastIndexOf=a(function(e,t,n){return Xn(this,e,t,n,!1)},"lastIndexOf");function Yo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=
0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Yt(u))return o;r[t+o]=u}return o}a(Yo,"hexWrite");function Zo(r,e,t,n){
return ht(Gt(e,r.length-t),r,t,n)}a(Zo,"utf8Write");function Jo(r,e,t,n){return ht(la(e),r,t,n)}a(Jo,
"asciiWrite");function Xo(r,e,t,n){return ht(ai(e),r,t,n)}a(Xo,"base64Write");function ea(r,e,t,n){return ht(
fa(e,r.length-t),r,t,n)}a(ea,"ucs2Write");p.prototype.write=a(function(e,t,n,i){if(t===void 0)i="utf\
8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))
t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||
n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buf\
fer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Yo(this,e,t,n);case"utf8":case"\
utf-8":return Zo(this,e,t,n);case"ascii":case"latin1":case"binary":return Jo(this,e,t,n);case"base64":
return Xo(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ea(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"write");p.prototype.
toJSON=a(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSO\
N");function ta(r,e,t){return e===0&&t===r.length?jt.fromByteArray(r):jt.fromByteArray(r.slice(e,t))}
a(ta,"base64Slice");function ei(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,
u=s>239?4:s>223?3:s>191?2:1;if(i+u<=t){let c,l,f,m;switch(u){case 1:s<128&&(o=s);break;case 2:c=r[i+
1],(c&192)===128&&(m=(s&31)<<6|c&63,m>127&&(o=m));break;case 3:c=r[i+1],l=r[i+2],(c&192)===128&&(l&192)===
128&&(m=(s&15)<<12|(c&63)<<6|l&63,m>2047&&(m<55296||m>57343)&&(o=m));break;case 4:c=r[i+1],l=r[i+2],
f=r[i+3],(c&192)===128&&(l&192)===128&&(f&192)===128&&(m=(s&15)<<18|(c&63)<<12|(l&63)<<6|f&63,m>65535&&
m<1114112&&(o=m))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),
n.push(o),i+=u}return ra(n)}a(ei,"utf8Slice");var Kn=4096;function ra(r){let e=r.length;if(e<=Kn)return String.
fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
Kn));return t}a(ra,"decodeCodePointsArray");function na(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(na,"asciiSlice");function ia(r,e,t){let n="";t=Math.
min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}a(ia,"latin1Slice");function sa(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=ha[r[s]];return i}
a(sa,"hexSlice");function oa(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.
fromCharCode(n[s]+n[s+1]*256);return i}a(oa,"utf16leSlice");p.prototype.slice=a(function(e,t){let n=this.
length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<
e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,p.prototype),i},"slice");function O(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to \
access beyond buffer length")}a(O,"checkOffset");p.prototype.readUintLE=p.prototype.readUIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||O(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},
"readUIntLE");p.prototype.readUintBE=p.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,
t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"readUIntBE");p.
prototype.readUint8=p.prototype.readUInt8=a(function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]},
"readUInt8");p.prototype.readUint16LE=p.prototype.readUInt16LE=a(function(e,t){return e=e>>>0,t||O(e,
2,this.length),this[e]|this[e+1]<<8},"readUInt16LE");p.prototype.readUint16BE=p.prototype.readUInt16BE=
a(function(e,t){return e=e>>>0,t||O(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");p.prototype.
readUint32LE=p.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),(this[e]|
this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");p.prototype.readUint32BE=p.prototype.
readUInt32BE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+
2]<<8|this[e+3])},"readUInt32BE");p.prototype.readBigUInt64LE=xe(a(function(e){e=e>>>0,Be(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<
BigInt(32))},"readBigUInt64LE"));p.prototype.readBigUInt64BE=xe(a(function(e){e=e>>>0,Be(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.length-8);let i=t*2**24+this[++e]*2**16+
this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(
32))+BigInt(s)},"readBigUInt64BE"));p.prototype.readIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,t,
this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.
pow(2,8*t)),i},"readIntLE");p.prototype.readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,t,this.length);
let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*
t)),o},"readIntBE");p.prototype.readInt8=a(function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]&
128?(255-this[e]+1)*-1:this[e]},"readInt8");p.prototype.readInt16LE=a(function(e,t){e=e>>>0,t||O(e,2,
this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");p.prototype.readInt16BE=
a(function(e,t){e=e>>>0,t||O(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:
n},"readInt16BE");p.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]|
this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");p.prototype.readInt32BE=a(function(e,t){return e=
e>>>0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");p.prototype.
readBigInt64LE=xe(a(function(e){e=e>>>0,Be(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&
Ge(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(
32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readBigInt64LE"));p.prototype.readBigInt64BE=
xe(a(function(e){e=e>>>0,Be(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Ge(e,this.
length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));p.prototype.readFloatLE=a(function(e,t){
return e=e>>>0,t||O(e,4,this.length),Le.read(this,e,!0,23,4)},"readFloatLE");p.prototype.readFloatBE=
a(function(e,t){return e=e>>>0,t||O(e,4,this.length),Le.read(this,e,!1,23,4)},"readFloatBE");p.prototype.
readDoubleLE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Le.read(this,e,!0,52,8)},"readDoub\
leLE");p.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||O(e,8,this.length),Le.read(this,e,
!1,52,8)},"readDoubleBE");function K(r,e,t,n,i,s){if(!p.isBuffer(r))throw new TypeError('"buffer" ar\
gument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of boun\
ds');if(t+n>r.length)throw new RangeError("Index out of range")}a(K,"checkInt");p.prototype.writeUintLE=
p.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;K(this,
e,t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");
p.prototype.writeUintBE=p.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;K(this,e,t,n,u,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;
return t+n},"writeUIntBE");p.prototype.writeUint8=p.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");p.prototype.writeUint16LE=p.prototype.
writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=
e>>>8,t+2},"writeUInt16LE");p.prototype.writeUint16BE=p.prototype.writeUInt16BE=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");p.prototype.
writeUint32LE=p.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,4294967295,
0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");p.prototype.
writeUint32BE=p.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,4294967295,
0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ti(r,e,t,n,i){
oi(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=
s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>
8,r[t++]=o,t}a(ti,"wrtBigUInt64LE");function ri(r,e,t,n,i){oi(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));
r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));
return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(ri,"wrtBigUInt64BE");p.prototype.
writeBigUInt64LE=xe(a(function(e,t=0){return ti(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"w\
riteBigUInt64LE"));p.prototype.writeBigUInt64BE=xe(a(function(e,t=0){return ri(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64BE"));p.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let c=Math.pow(2,8*n-1);K(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntLE");p.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);K(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;
for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+
n},"writeIntBE");p.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,1,127,-128),
e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");p.prototype.writeInt16LE=a(function(e,t,n){return e=
+e,t=t>>>0,n||K(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");p.prototype.
writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+
1]=e&255,t+2},"writeInt16BE");p.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,
e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"\
writeInt32LE");p.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||K(this,e,t,4,2147483647,
-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,
t+4},"writeInt32BE");p.prototype.writeBigInt64LE=xe(a(function(e,t=0){return ti(this,e,t,-BigInt("0x\
8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));p.prototype.writeBigInt64BE=xe(
a(function(e,t=0){return ri(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"w\
riteBigInt64BE"));function ni(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range")}a(ni,"checkIEEE754");function ii(r,e,t,n,i){return e=
+e,t=t>>>0,i||ni(r,e,t,4,34028234663852886e22,-34028234663852886e22),Le.write(r,e,t,n,23,4),t+4}a(ii,
"writeFloat");p.prototype.writeFloatLE=a(function(e,t,n){return ii(this,e,t,!0,n)},"writeFloatLE");p.
prototype.writeFloatBE=a(function(e,t,n){return ii(this,e,t,!1,n)},"writeFloatBE");function si(r,e,t,n,i){
return e=+e,t=t>>>0,i||ni(r,e,t,8,17976931348623157e292,-17976931348623157e292),Le.write(r,e,t,n,52,
8),t+8}a(si,"writeDouble");p.prototype.writeDoubleLE=a(function(e,t,n){return si(this,e,t,!0,n)},"wr\
iteDoubleLE");p.prototype.writeDoubleBE=a(function(e,t,n){return si(this,e,t,!1,n)},"writeDoubleBE");
p.prototype.copy=a(function(e,t,n,i){if(!p.isBuffer(e))throw new TypeError("argument should be a Buf\
fer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<
0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd \
out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===
e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");p.prototype.fill=a(function(e,t,n,i){if(typeof e=="string"){
if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!=
"string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!p.isEncoding(i))throw new TypeError(
"Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=
o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<
n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>
0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)this[s]=e;else{let o=p.isBuffer(e)?e:p.from(e,
i),u=o.length;if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=
0;s<n-t;++s)this[s+t]=o[s%u]}return this},"fill");var Re={};function zt(r,e,t){var n;Re[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),
this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${r}\
]: ${this.message}`}},a(n,"NodeError"),n)}a(zt,"E");zt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);zt(
"ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received typ\
e ${typeof e}`},TypeError);zt("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out o\
f range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=zn(String(t)):typeof t=="bigint"&&(i=String(
t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=zn(i)),i+="n"),n+=` It must be ${e}. Re\
ceived ${i}`,n},RangeError);function zn(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`\
_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}a(zn,"addNumericalSeparator");function aa(r,e,t){
Be(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Ge(e,r.length-(t+1))}a(aa,"checkBounds");function oi(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${o} and < 2${o}\
 ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} a\
nd <= ${t}${o}`,new Re.ERR_OUT_OF_RANGE("value",u,r)}aa(n,i,s)}a(oi,"checkIntBI");function Be(r,e){if(typeof r!=
"number")throw new Re.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Be,"validateNumber");function Ge(r,e,t){throw Math.
floor(r)!==r?(Be(r,t),new Re.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Re.ERR_BUFFER_OUT_OF_BOUNDS:
new Re.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(Ge,"boundsError");var ua=/[^+/0-9A-Za-z-_]/g;
function ca(r){if(r=r.split("=")[0],r=r.trim().replace(ua,""),r.length<2)return"";for(;r.length%4!==
0;)r=r+"=";return r}a(ca,"base64clean");function Gt(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<
n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+
1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),
i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=
1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=
3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|
240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(Gt,"utf\
8ToBytes");function la(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}a(
la,"asciiToBytes");function fa(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(
o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}a(fa,"utf16leToBytes");function ai(r){return jt.toByteArray(
ca(r))}a(ai,"base64ToBytes");function ht(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(ht,"blitBuffer");function fe(r,e){return r instanceof e||r!=null&&r.constructor!=
null&&r.constructor.name!=null&&r.constructor.name===e.name}a(fe,"isInstance");function Yt(r){return r!==
r}a(Yt,"numberIsNaN");var ha=(function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){
let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e})();function xe(r){return typeof BigInt>"u"?
pa:r}a(xe,"defineBigIntMethod");function pa(){throw new Error("BigInt not supported")}a(pa,"BufferBi\
gIntNotDefined")});var b,x,S,d,y,h=V(()=>{"use strict";b=globalThis,x=globalThis.setImmediate??(r=>setTimeout(r,0)),S=globalThis.
clearImmediate??(r=>clearTimeout(r)),d=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.
allocUnsafe=="function"?globalThis.Buffer:ui().Buffer,y=globalThis.process??{};y.env??(y.env={});try{
y.nextTick(()=>{})}catch{let e=Promise.resolve();y.nextTick=e.then.bind(e)}});var Se=T((Cf,tr)=>{"use strict";h();var Ue=typeof Reflect=="object"?Reflect:null,gi=Ue&&typeof Ue.apply==
"function"?Ue.apply:a(function(e,t,n){return Function.prototype.apply.call(e,t,n)},"ReflectApply"),bt;
Ue&&typeof Ue.ownKeys=="function"?bt=Ue.ownKeys:Object.getOwnPropertySymbols?bt=a(function(e){return Object.
getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):bt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Pa(r){console&&console.warn&&console.warn(r)}a(Pa,
"ProcessEmitWarning");var bi=Number.isNaN||a(function(e){return e!==e},"NumberIsNaN");function P(){P.
init.call(this)}a(P,"EventEmitter");tr.exports=P;tr.exports.once=Fa;P.EventEmitter=P;P.prototype._events=
void 0;P.prototype._eventsCount=0;P.prototype._maxListeners=void 0;var wi=10;function xt(r){if(typeof r!=
"function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}
a(xt,"checkListener");Object.defineProperty(P,"defaultMaxListeners",{enumerable:!0,get:a(function(){
return wi},"get"),set:a(function(r){if(typeof r!="number"||r<0||bi(r))throw new RangeError('The valu\
e of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");wi=r},
"set")});P.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};
P.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||bi(e))throw new RangeError('Th\
e value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=
e,this},"setMaxListeners");function xi(r){return r._maxListeners===void 0?P.defaultMaxListeners:r._maxListeners}
a(xi,"_getMaxListeners");P.prototype.getMaxListeners=a(function(){return xi(this)},"getMaxListeners");
P.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===
"error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));
throw u.context=o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")gi(c,this,t);else for(var l=c.
length,f=Ci(c,l),n=0;n<l;++n)gi(f[n],this,t);return!0},"emit");function vi(r,e,t,n){var i,s,o;if(xt(
t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&
(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o==
"function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=xi(r),i>0&&o.length>i&&!o.warned){o.warned=
!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=
r,u.type=e,u.count=o.length,Pa(u)}return r}a(vi,"_addListener");P.prototype.addListener=a(function(e,t){
return vi(this,e,t,!1)},"addListener");P.prototype.on=P.prototype.addListener;P.prototype.prependListener=
a(function(e,t){return vi(this,e,t,!0)},"prependListener");function Ra(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.
target):this.listener.apply(this.target,arguments)}a(Ra,"onceWrapper");function Si(r,e,t){var n={fired:!1,
wrapFn:void 0,target:r,type:e,listener:t},i=Ra.bind(n);return i.listener=t,n.wrapFn=i,i}a(Si,"_onceW\
rap");P.prototype.once=a(function(e,t){return xt(t),this.on(e,Si(this,e,t)),this},"once");P.prototype.
prependOnceListener=a(function(e,t){return xt(t),this.prependListener(e,Si(this,e,t)),this},"prepend\
OnceListener");P.prototype.removeListener=a(function(e,t){var n,i,s,o,u;if(xt(t),i=this._events,i===
void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?
this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||
t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():La(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==
void 0&&this.emit("removeListener",e,u||t)}return this},"removeListener");P.prototype.off=P.prototype.
removeListener;P.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;
if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=
0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=
0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function Ei(r,e,t){var n=r._events;
if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?
Ba(i):Ci(i,i.length)}a(Ei,"_listeners");P.prototype.listeners=a(function(e){return Ei(this,e,!0)},"l\
isteners");P.prototype.rawListeners=a(function(e){return Ei(this,e,!1)},"rawListeners");P.listenerCount=
function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):Ai.call(r,e)};P.prototype.
listenerCount=Ai;function Ai(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")
return 1;if(t!==void 0)return t.length}return 0}a(Ai,"listenerCount");P.prototype.eventNames=a(function(){
return this._eventsCount>0?bt(this._events):[]},"eventNames");function Ci(r,e){for(var t=new Array(e),
n=0;n<e;++n)t[n]=r[n];return t}a(Ci,"arrayClone");function La(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];
r.pop()}a(La,"spliceOne");function Ba(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].
listener||r[t];return e}a(Ba,"unwrapListeners");function Fa(r,e){return new Promise(function(t,n){function i(o){
r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){typeof r.removeListener=="function"&&r.
removeListener("error",i),t([].slice.call(arguments))}a(s,"resolver"),_i(r,e,s,{once:!0}),e!=="error"&&
ka(r,i,{once:!0})})}a(Fa,"once");function ka(r,e,t){typeof r.on=="function"&&_i(r,"error",e,t)}a(ka,
"addErrorHandlerIfEventEmitter");function _i(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):
r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,a(function i(s){n.once&&
r.removeEventListener(e,i),t(s)},"wrapListener"));else throw new TypeError('The "emitter" argument m\
ust be of type EventEmitter. Received type '+typeof r)}a(_i,"eventTargetAgnosticAddListener")});var Pi={};X(Pi,{Socket:()=>he,isIP:()=>Ma});function Ma(r){return 0}var Ii,Ti,A,he,Ke=V(()=>{"use st\
rict";h();Ii=be(Se(),1);a(Ma,"isIP");Ti=/^[^.]+\./,A=class A extends Ii.EventEmitter{constructor(){super(
...arguments);E(this,"opts",{});E(this,"connecting",!1);E(this,"pending",!0);E(this,"writable",!0);E(
this,"encrypted",!1);E(this,"authorized",!1);E(this,"destroyed",!1);E(this,"ws",null);E(this,"writeB\
uffer");E(this,"tlsState",0);E(this,"tlsRead");E(this,"tlsWrite")}static get poolQueryViaFetch(){return A.
opts.poolQueryViaFetch??A.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){A.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return A.opts.fetchEndpoint??A.defaults.fetchEndpoint}static set fetchEndpoint(t){
A.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)")}static get fetchFunction(){
return A.opts.fetchFunction??A.defaults.fetchFunction}static set fetchFunction(t){A.opts.fetchFunction=
t}static get webSocketConstructor(){return A.opts.webSocketConstructor??A.defaults.webSocketConstructor}static set webSocketConstructor(t){
A.opts.webSocketConstructor=t}get webSocketConstructor(){return this.opts.webSocketConstructor??A.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return A.opts.wsProxy??A.defaults.wsProxy}static set wsProxy(t){
A.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??A.wsProxy}set wsProxy(t){this.opts.wsProxy=
t}static get coalesceWrites(){return A.opts.coalesceWrites??A.defaults.coalesceWrites}static set coalesceWrites(t){
A.opts.coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??A.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return A.opts.useSecureWebSocket??A.defaults.
useSecureWebSocket}static set useSecureWebSocket(t){A.opts.useSecureWebSocket=t}get useSecureWebSocket(){
return this.opts.useSecureWebSocket??A.useSecureWebSocket}set useSecureWebSocket(t){this.opts.useSecureWebSocket=
t}static get forceDisablePgSSL(){return A.opts.forceDisablePgSSL??A.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){
A.opts.forceDisablePgSSL=t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??A.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return A.opts.disableSNI??A.defaults.disableSNI}static set disableSNI(t){
A.opts.disableSNI=t}get disableSNI(){return this.opts.disableSNI??A.disableSNI}set disableSNI(t){this.
opts.disableSNI=t}static get disableWarningInBrowsers(){return A.opts.disableWarningInBrowsers??A.defaults.
disableWarningInBrowsers}static set disableWarningInBrowsers(t){A.opts.disableWarningInBrowsers=t}get disableWarningInBrowsers(){
return this.opts.disableWarningInBrowsers??A.disableWarningInBrowsers}set disableWarningInBrowsers(t){
this.opts.disableWarningInBrowsers=t}static get pipelineConnect(){return A.opts.pipelineConnect??A.defaults.
pipelineConnect}static set pipelineConnect(t){A.opts.pipelineConnect=t}get pipelineConnect(){return this.
opts.pipelineConnect??A.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return A.opts.subtls??A.defaults.subtls}static set subtls(t){A.opts.subtls=t}get subtls(){return this.
opts.subtls??A.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){return A.opts.pipelineTLS??
A.defaults.pipelineTLS}static set pipelineTLS(t){A.opts.pipelineTLS=t}get pipelineTLS(){return this.
opts.pipelineTLS??A.pipelineTLS}set pipelineTLS(t){this.opts.pipelineTLS=t}static get rootCerts(){return A.
opts.rootCerts??A.defaults.rootCerts}static set rootCerts(t){A.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??A.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){let i=this.
wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please see https://github.c\
om/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--stri\
ng");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("co\
nnect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),this.emit("ready")},"\
handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuffer",c.addEventListener("error",f=>{this.
emit("error",f),this.emit("close")}),c.addEventListener("message",f=>{if(this.tlsState===0){let m=d.
from(f.data);this.emit("data",m)}}),c.addEventListener("close",()=>{this.destroyed=!0,this.emit("clo\
se")}),l?s():c.addEventListener("open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t==
"string"?parseInt(t,10):t)}catch(c){this.emit("error",c),this.emit("close");return}try{let l=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+u;if(this.webSocketConstructor!==void 0)this.ws=new this.webSocketConstructor(l),
o(this.ws);else try{this.ws=new WebSocket(l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(
this.ws)}}catch(c){let f=(this.useSecureWebSocket?"https:":"http:")+"//"+u;fetch(f,{headers:{Upgrade:"\
websocket"}}).then(m=>{if(this.ws=m.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,!0)}).
catch(m=>{this.emit("error",new Error(`All attempts to open a WebSocket to connect to the database f\
ailed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconst\
ructor-typeof-websocket--undefined. Details: ${m}`)),this.emit("close")})}}async startTls(t){if(this.
subtls===void 0)throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` to t\
he subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more infor\
mation.");this.tlsState=1;let n=await this.subtls.TrustedCert.databaseFromPEM(this.rootCerts),i=new this.
subtls.WebSocketReadQueue(this.ws),s=i.read.bind(i),o=this.rawWrite.bind(this),{read:u,write:c}=await this.
subtls.startTls(t,n,s,o,{useSNI:!this.disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):
void 0});this.tlsRead=u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop().catch(l=>{this.destroyed||(this.destroyed=!0,this.emit("\
error",l),this.ws?.close())})}async tlsReadLoop(){for(;;){let t=await this.tlsRead();if(t===void 0)break;
{let n=d.from(t);this.emit("data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws&&this.ws.send(t);
return}if(this.writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws&&this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.length);n.set(this.writeBuffer),
n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="utf8",i=s=>{}){return t.length===0?(i(),
!0):(typeof t=="string"&&(t=d.from(t,n)),this.tlsState===0?(this.rawWrite(t),i()):this.tlsState===1?
this.once("secureConnection",()=>{this.write(t,n,i)}):(this.tlsWrite(t),i()),!0)}end(t=d.alloc(0),n="\
utf8",i=()=>{}){return this.write(t,n,()=>{this.ws.close(),i()}),this}destroy(){return this.destroyed=
!0,this.end()}};a(A,"Socket"),E(A,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a((t,n,i)=>{let s;return i?.
jwtAuth?s=t.replace(Ti,"apiauth."):s=t.replace(Ti,"api."),"https://"+s+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,
fetchFunction:void 0,webSocketConstructor:void 0,wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,
forceDisablePgSSL:!0,coalesceWrites:!0,pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,
disableSNI:!1,disableWarningInBrowsers:!1}),E(A,"opts",{});he=A});var nr=T(Ri=>{"use strict";h();Ri.parse=function(r,e){return new rr(r,e).parse()};var St=class St{constructor(e,t){
this.source=e,this.transform=t||Ua,this.position=0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){
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
not balanced");return this.entries}};a(St,"ArrayParser");var rr=St;function Ua(r){return r}a(Ua,"ide\
ntity")});var ir=T((Mf,Li)=>{h();var Oa=nr();Li.exports={create:a(function(r,e){return{parse:a(function(){return Oa.
parse(r,e)},"parse")}},"create")}});var ki=T((Df,Fi)=>{"use strict";h();var Da=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
qa=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Qa=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Na=/^-?infinity$/;Fi.
exports=a(function(e){if(Na.test(e))return Number(e.replace("i","I"));var t=Da.exec(e);if(!t)return Wa(
e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Bi(i));var s=parseInt(t[2],10)-1,o=t[3],u=parseInt(t[4],
10),c=parseInt(t[5],10),l=parseInt(t[6],10),f=t[7];f=f?1e3*parseFloat(f):0;var m,g=ja(e);return g!=null?
(m=new Date(Date.UTC(i,s,o,u,c,l,f)),sr(i)&&m.setUTCFullYear(i),g!==0&&m.setTime(m.getTime()-g)):(m=
new Date(i,s,o,u,c,l,f),sr(i)&&m.setFullYear(i)),m},"parseDate");function Wa(r){var e=qa.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Bi(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(t,i,s);return sr(
t)&&o.setFullYear(t),o}}a(Wa,"getDate");function ja(r){if(r.endsWith("+00"))return 0;var e=Qa.exec(r.
split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(ja,"timeZoneOffset");function Bi(r){return-(r-
1)}a(Bi,"bcYearToNegativeYear");function sr(r){return r>=0&&r<100}a(sr,"is0To99")});var Ui=T((Nf,Mi)=>{h();Mi.exports=$a;var Ha=Object.prototype.hasOwnProperty;function $a(r){for(var e=1;e<
arguments.length;e++){var t=arguments[e];for(var n in t)Ha.call(t,n)&&(r[n]=t[n])}return r}a($a,"ext\
end")});var qi=T((Hf,Di)=>{"use strict";h();var Ga=Ui();Di.exports=Oe;function Oe(r){if(!(this instanceof Oe))
return new Oe(r);Ga(this,iu(r))}a(Oe,"PostgresInterval");var Va=["seconds","minutes","hours","days",
"months","years"];Oe.prototype.toPostgres=function(){var r=Va.filter(this.hasOwnProperty,this);return this.
milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||
0;return e==="seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Ka={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"\
S"},za=["years","months","days"],Ya=["hours","minutes","seconds"];Oe.prototype.toISOString=Oe.prototype.
toISO=function(){var r=za.map(t,this).join(""),e=Ya.map(t,this).join("");return"P"+r+"T"+e;function t(n){
var i=this[n]||0;return n==="seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(
/0+$/,"")),i+Ka[n]}};var or="([+-]?\\d+)",Za=or+"\\s+years?",Ja=or+"\\s+mons?",Xa=or+"\\s+days?",eu="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",tu=new RegExp([Za,Ja,Xa,eu].map(function(r){return"\
("+r+")?"}).join("\\s*")),Oi={years:2,months:4,days:6,hours:9,minutes:10,seconds:11,milliseconds:12},
ru=["hours","minutes","seconds","milliseconds"];function nu(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(nu,"parseMilliseconds");function iu(r){if(!r)return{};var e=tu.exec(r),t=e[8]==="-";return Object.
keys(Oi).reduce(function(n,i){var s=Oi[i],o=e[s];return!o||(o=i==="milliseconds"?nu(o):parseInt(o,10),
!o)||(t&&~ru.indexOf(i)&&(o*=-1),n[i]=o),n},{})}a(iu,"parse")});var Wi=T((Vf,Ni)=>{"use strict";h();var Qi=d.from||d;Ni.exports=a(function(e){if(/^\\x/.test(e))return Qi(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.test(e.
substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{for(var i=1;n+i<e.length&&
e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+="\\";n+=Math.floor(i/2)*2}return Qi(t,"binar\
y")},"parseBytea")});var zi=T((Yf,Ki)=>{h();var ze=nr(),Ye=ir(),Et=ki(),Hi=qi(),$i=Wi();function At(r){return a(function(t){
return t===null?t:r(t)},"nullAllowed")}a(At,"allowNull");function Gi(r){return r===null?r:r==="TRUE"||
r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}a(Gi,"parseBool");function su(r){return r?
ze.parse(r,Gi):null}a(su,"parseBoolArray");function ou(r){return parseInt(r,10)}a(ou,"parseBaseTenIn\
t");function ar(r){return r?ze.parse(r,At(ou)):null}a(ar,"parseIntegerArray");function au(r){return r?
ze.parse(r,At(function(e){return Vi(e).trim()})):null}a(au,"parseBigIntegerArray");var uu=a(function(r){
if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=fr(t)),t});return e.parse()},"pa\
rsePointArray"),ur=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){return t!==null&&(t=
parseFloat(t)),t});return e.parse()},"parseFloatArray"),te=a(function(r){if(!r)return null;var e=Ye.
create(r);return e.parse()},"parseStringArray"),cr=a(function(r){if(!r)return null;var e=Ye.create(r,
function(t){return t!==null&&(t=Et(t)),t});return e.parse()},"parseDateArray"),cu=a(function(r){if(!r)
return null;var e=Ye.create(r,function(t){return t!==null&&(t=Hi(t)),t});return e.parse()},"parseInt\
ervalArray"),lu=a(function(r){return r?ze.parse(r,At($i)):null},"parseByteAArray"),lr=a(function(r){
return parseInt(r,10)},"parseInteger"),Vi=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:r},"\
parseBigInteger"),ji=a(function(r){return r?ze.parse(r,At(JSON.parse)):null},"parseJsonArray"),fr=a(
function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split(","),{x:parseFloat(r[0]),y:parseFloat(
r[1])})},"parsePoint"),fu=a(function(r){if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,
i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=
r[i])}var s=fr(e);return s.radius=parseFloat(t),s},"parseCircle"),hu=a(function(r){r(20,Vi),r(21,lr),
r(23,lr),r(26,lr),r(700,parseFloat),r(701,parseFloat),r(16,Gi),r(1082,Et),r(1114,Et),r(1184,Et),r(600,
fr),r(651,te),r(718,fu),r(1e3,su),r(1001,lu),r(1005,ar),r(1007,ar),r(1028,ar),r(1016,au),r(1017,uu),
r(1021,ur),r(1022,ur),r(1231,ur),r(1014,te),r(1015,te),r(1008,te),r(1009,te),r(1040,te),r(1041,te),r(
1115,cr),r(1182,cr),r(1185,cr),r(1186,Hi),r(1187,cu),r(17,$i),r(114,JSON.parse.bind(JSON)),r(3802,JSON.
parse.bind(JSON)),r(199,ji),r(3807,ji),r(3907,te),r(2951,te),r(791,te),r(1183,te),r(1270,te)},"init");
Ki.exports={init:hu}});var Zi=T((Xf,Yi)=>{"use strict";h();var z=1e6;function pu(r){var e=r.readInt32BE(0),t=r.readUInt32BE(
4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,c,l,f;{if(s=e%z,e=e/z>>>0,o=4294967296*s+
t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}
{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.
length,f=0;f<l;f++)c+="0";i=c+u+i}{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,u=""+(o-z*t),t===0&&
e===0)return n+u+i;for(c="",l=6-u.length,f=0;f<l;f++)c+="0";i=c+u+i}return s=e%z,o=4294967296*s+t,u=
""+o%z,n+u+i}a(pu,"readInt8");Yi.exports=pu});var rs=T((rh,ts)=>{h();var du=Zi(),B=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(w,v,M){return w*
Math.pow(2,M)+v};var s=t>>3,o=a(function(w){return n?~w&255:w},"inv"),u=255,c=8-t%8;e<c&&(u=255<<8-e&
255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&u,c));for(var f=e+t>>3,m=s+1;m<f;m++)l=i(l,o(
r[m]),8);var g=(e+t)%8;return g>0&&(l=i(l,o(r[f])>>8-g,g)),l},"parseBits"),es=a(function(r,e,t){var n=Math.
pow(2,t-1)-1,i=B(r,1),s=B(r,t,1);if(s===0)return 0;var o=1,u=a(function(l,f,m){l===0&&(l=1);for(var g=1;g<=
m;g++)o/=2,(f&1<<m-g)>0&&(l+=o);return l},"parsePrecisionBits"),c=B(r,e,t+1,!1,u);return s==Math.pow(
2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),yu=a(function(r){
return B(r,1)==1?-1*(B(r,15,1,!0)+1):B(r,15,1)},"parseInt16"),Ji=a(function(r){return B(r,1)==1?-1*(B(
r,31,1,!0)+1):B(r,31,1)},"parseInt32"),mu=a(function(r){return es(r,23,8)},"parseFloat32"),gu=a(function(r){
return es(r,52,11)},"parseFloat64"),wu=a(function(r){var e=B(r,16,32);if(e==49152)return NaN;for(var t=Math.
pow(1e4,B(r,16,16)),n=0,i=[],s=B(r,16),o=0;o<s;o++)n+=B(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,B(r,
16,48));return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Xi=a(function(r,e){var t=B(e,1),n=B(e,
63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.getTime()+i.getTimezoneOffset()*
6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.usec},i.setMicroSeconds=function(s){this.
usec=s},i.getUTCMicroSeconds=function(){return this.usec},i},"parseDate"),Ze=a(function(r){for(var e=B(
r,32),t=B(r,32,32),n=B(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=B(r,32,i),i+=32,i+=32;var u=a(function(l){
var f=B(r,32,i);if(i+=32,f==4294967295)return null;var m;if(l==23||l==20)return m=B(r,f*8,i),i+=f*8,
m;if(l==25)return m=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),m;console.log("ERROR: ElementType no\
t implemented: "+l)},"parseElement"),c=a(function(l,f){var m=[],g;if(l.length>1){var w=l.shift();for(g=
0;g<w;g++)m[g]=c(l,f);l.unshift(w)}else for(g=0;g<l[0];g++)m[g]=u(f);return m},"parse");return c(s,n)},
"parseArray"),bu=a(function(r){return r.toString("utf8")},"parseText"),xu=a(function(r){return r===null?
null:B(r,8)>0},"parseBool"),vu=a(function(r){r(20,du),r(21,yu),r(23,Ji),r(26,Ji),r(1700,wu),r(700,mu),
r(701,gu),r(16,xu),r(1114,Xi.bind(null,!1)),r(1184,Xi.bind(null,!0)),r(1e3,Ze),r(1007,Ze),r(1016,Ze),
r(1008,Ze),r(1009,Ze),r(25,bu)},"init");ts.exports={init:vu}});var is=T((sh,ns)=>{h();ns.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,REGPROC:24,TEXT:25,
OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,SMGR:210,PATH:602,POLYGON:604,CIDR:650,
FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,
INET:869,ACLITEM:1033,BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,REGOPERATOR:2204,
REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,
TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,
REGROLE:4096}});var et=T(Xe=>{h();var Su=zi(),Eu=rs(),Au=ir(),Cu=is();Xe.getTypeParser=_u;Xe.setTypeParser=Tu;Xe.arrayParser=
Au;Xe.builtins=Cu;var Je={text:{},binary:{}};function ss(r){return String(r)}a(ss,"noParse");function _u(r,e){
return e=e||"text",Je[e]&&Je[e][r]||ss}a(_u,"getTypeParser");function Tu(r,e,t){typeof e=="function"&&
(t=e,e="text"),Je[e][r]=t}a(Tu,"setTypeParser");Su.init(function(r,e){Je.text[r]=e});Eu.init(function(r,e){
Je.binary[r]=e})});var _t=T((lh,os)=>{"use strict";h();var Iu=et();function Ct(r){this._types=r||Iu,this.text={},this.binary=
{}}a(Ct,"TypeOverrides");Ct.prototype.getOverrides=function(r){switch(r){case"text":return this.text;case"\
binary":return this.binary;default:return{}}};Ct.prototype.setTypeParser=function(r,e,t){typeof e=="\
function"&&(t=e,e="text"),this.getOverrides(e)[r]=t};Ct.prototype.getTypeParser=function(r,e){return e=
e||"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};os.exports=Ct});function tt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,o=2600822924,u=528734635,
c=1541459225,l=0,f=0,m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,
4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,
1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,
2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a((I,C)=>I>>>C|I<<32-
C,"rrot"),w=new Uint32Array(64),v=new Uint8Array(64),M=a(()=>{for(let R=0,$=0;R<16;R++,$+=4)w[R]=v[$]<<
24|v[$+1]<<16|v[$+2]<<8|v[$+3];for(let R=16;R<64;R++){let $=g(w[R-15],7)^g(w[R-15],18)^w[R-15]>>>3,Ae=g(
w[R-2],17)^g(w[R-2],19)^w[R-2]>>>10;w[R]=w[R-16]+$+w[R-7]+Ae|0}let I=e,C=t,ne=n,ie=i,H=s,oe=o,ae=u,ge=c;
for(let R=0;R<64;R++){let $=g(H,6)^g(H,11)^g(H,25),Ae=H&oe^~H&ae,ue=ge+$+Ae+m[R]+w[R]|0,Ie=g(I,2)^g(
I,13)^g(I,22),ce=I&C^I&ne^C&ne,G=Ie+ce|0;ge=ae,ae=oe,oe=H,H=ie+ue|0,ie=ne,ne=C,C=I,I=ue+G|0}e=e+I|0,
t=t+C|0,n=n+ne|0,i=i+ie|0,s=s+H|0,o=o+oe|0,u=u+ae|0,c=c+ge|0,f=0},"process"),q=a(I=>{typeof I=="stri\
ng"&&(I=new TextEncoder().encode(I));for(let C=0;C<I.length;C++)v[f++]=I[C],f===64&&M();l+=I.length},
"add"),de=a(()=>{if(v[f++]=128,f==64&&M(),f+8>64){for(;f<64;)v[f++]=0;M()}for(;f<58;)v[f++]=0;let I=l*
8;v[f++]=I/1099511627776&255,v[f++]=I/4294967296&255,v[f++]=I>>>24,v[f++]=I>>>16&255,v[f++]=I>>>8&255,
v[f++]=I&255,M();let C=new Uint8Array(32);return C[0]=e>>>24,C[1]=e>>>16&255,C[2]=e>>>8&255,C[3]=e&255,
C[4]=t>>>24,C[5]=t>>>16&255,C[6]=t>>>8&255,C[7]=t&255,C[8]=n>>>24,C[9]=n>>>16&255,C[10]=n>>>8&255,C[11]=
n&255,C[12]=i>>>24,C[13]=i>>>16&255,C[14]=i>>>8&255,C[15]=i&255,C[16]=s>>>24,C[17]=s>>>16&255,C[18]=
s>>>8&255,C[19]=s&255,C[20]=o>>>24,C[21]=o>>>16&255,C[22]=o>>>8&255,C[23]=o&255,C[24]=u>>>24,C[25]=u>>>
16&255,C[26]=u>>>8&255,C[27]=u&255,C[28]=c>>>24,C[29]=c>>>16&255,C[30]=c>>>8&255,C[31]=c&255,C},"dig\
est");return r===void 0?{add:q,digest:de}:(q(r),de())}var as=V(()=>{"use strict";h();a(tt,"sha256")});var k,rt,us=V(()=>{"use strict";h();k=class k{constructor(){E(this,"_dataLength",0);E(this,"_bufferL\
ength",0);E(this,"_state",new Int32Array(4));E(this,"_buffer",new ArrayBuffer(68));E(this,"_buffer8");
E(this,"_buffer32");this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this.
_buffer,0,17),this.start()}static hashByteArray(e,t=!1){return this.onePassHasher.start().appendByteArray(
e).end(t)}static hashStr(e,t=!1){return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=k.hexChars,n=k.hexOut,
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
0,this._bufferLength=0,this._state.set(k.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),s<128)t[i++]=s;else if(s<
2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|
128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error(
"Unicode standard supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=
s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,k._md5cycle(this._state,n),i-=64,n[0]=n[16])}
return this._bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,
s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=
64,k._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this._buffer8,
n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e[o++];
if(i<64)break;this._dataLength+=64,k._md5cycle(this._state,n),i=0}return this._bufferLength=i,this}getState(){
let e=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this.
_bufferLength,length:this._dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,
i=this._state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],
i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,n=this.
_buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=
n[t+2]=n[t+3]=0,i.set(k.buffer32Identity.subarray(s),s),t>55&&(k._md5cycle(this._state,i),i.set(k.buffer32Identity)),
o<=4294967295)i[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;i[14]=c,i[15]=l}return k._md5cycle(this._state,i),e?this._state:k._hex(
this._state)}};a(k,"Md5"),E(k,"stateIdentity",new Int32Array([1732584193,-271733879,-1732584194,271733878])),
E(k,"buffer32Identity",new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),E(k,"hexChars","0123456789\
abcdef"),E(k,"hexOut",[]),E(k,"onePassHasher",new k);rt=k});var hr={};X(hr,{createHash:()=>Ru,createHmac:()=>Lu,randomBytes:()=>Pu});function Pu(r){return crypto.
getRandomValues(d.alloc(r))}function Ru(r){if(r==="sha256")return{update:a(function(e){return{digest:a(
function(){return d.from(tt(e))},"digest")}},"update")};if(r==="md5")return{update:a(function(e){return{
digest:a(function(){return typeof e=="string"?rt.hashStr(e):rt.hashByteArray(e)},"digest")}},"update")};
throw new Error(`Hash type '${r}' not supported`)}function Lu(r,e){if(r!=="sha256")throw new Error(`\
Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{digest:a(function(){
typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(
t));let n=e.length;if(n>64)e=tt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(tt(o),64),d.from(tt(u))},
"digest")}},"update")}}var pr=V(()=>{"use strict";h();as();us();a(Pu,"randomBytes");a(Ru,"createHash");
a(Lu,"createHmac")});var nt=T((Eh,dr)=>{"use strict";h();dr.exports={host:"localhost",user:y.platform==="win32"?y.env.USERNAME:
y.env.USER,database:void 0,password:null,connectionString:void 0,port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,
client_encoding:"",ssl:!1,application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,connect_timeout:0,
keepalives:1,keepalives_idle:0};var De=et(),Bu=De.getTypeParser(20,"text"),Fu=De.getTypeParser(1016,
"text");dr.exports.__defineSetter__("parseInt8",function(r){De.setTypeParser(20,"text",r?De.getTypeParser(
23,"text"):Bu),De.setTypeParser(1016,"text",r?De.getTypeParser(1007,"text"):Fu)})});var it=T((Ch,ls)=>{"use strict";h();var ku=(pr(),U(hr)),Mu=nt();function Uu(r){var e=r.replace(/\\/g,
"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Uu,"escapeElement");function cs(r){for(var e="{",t=0;t<
r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+cs(r[t]):
r[t]instanceof d?e+="\\\\x"+r[t].toString("hex"):e+=Uu(Tt(r[t]));return e=e+"}",e}a(cs,"arrayString");
var Tt=a(function(r,e){if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+
r.byteLength)}return r instanceof Date?Mu.parseInputDatesAsUTC?qu(r):Du(r):Array.isArray(r)?cs(r):typeof r==
"object"?Ou(r,e):r.toString()},"prepareValue");function Ou(r,e){if(r&&typeof r.toPostgres=="function"){
if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+r+'" fo\
r query');return e.push(r),Tt(r.toPostgres(Tt),e)}return JSON.stringify(r)}a(Ou,"prepareObject");function W(r,e){
for(r=""+r;r.length<e;)r="0"+r;return r}a(W,"pad");function Du(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),
n=t<1;n&&(t=Math.abs(t)+1);var i=W(t,4)+"-"+W(r.getMonth()+1,2)+"-"+W(r.getDate(),2)+"T"+W(r.getHours(),
2)+":"+W(r.getMinutes(),2)+":"+W(r.getSeconds(),2)+"."+W(r.getMilliseconds(),3);return e<0?(i+="-",e*=
-1):i+="+",i+=W(Math.floor(e/60),2)+":"+W(e%60,2),n&&(i+=" BC"),i}a(Du,"dateToString");function qu(r){
var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=W(e,4)+"-"+W(r.getUTCMonth()+1,2)+"-"+W(r.
getUTCDate(),2)+"T"+W(r.getUTCHours(),2)+":"+W(r.getUTCMinutes(),2)+":"+W(r.getUTCSeconds(),2)+"."+W(
r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(qu,"dateToStringUTC");function Qu(r,e,t){
return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(Qu,"normalizeQueryConfig");var yr=a(function(r){return ku.createHash("md5").update(r,"utf-8").
digest("hex")},"md5"),Nu=a(function(r,e,t){var n=yr(e+r),i=yr(d.concat([d.from(n),t]));return"md5"+i},
"postgresMd5PasswordHash");ls.exports={prepareValue:a(function(e){return Tt(e)},"prepareValueWrapper"),
normalizeQueryConfig:Qu,postgresMd5PasswordHash:Nu,md5:yr}});var st={};X(st,{default:()=>Hu});var Hu,ot=V(()=>{"use strict";h();Hu={}});var xs=T((Qh,bs)=>{"use strict";h();var gr=(pr(),U(hr));function $u(r){if(r.indexOf("SCRAM-SHA-256")===
-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");let e=gr.randomBytes(
18).toString("base64");return{mechanism:"SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"\
SASLInitialResponse"}}a($u,"startSession");function Gu(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error("SASL: SCRAM\
-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!="string")throw new Error("SAS\
L: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");let n=zu(t);if(n.nonce.startsWith(r.clientNonce)){
if(n.nonce.length===r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not st\
art with client nonce");var i=d.from(n.salt,"base64"),s=Ju(e,i,n.iteration),o=qe(s,"Client Key"),u=Zu(
o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,m=c+
","+l+","+f,g=qe(u,m),w=ws(o,g),v=w.toString("base64"),M=qe(s,"Server Key"),q=qe(M,m);r.message="SAS\
LResponse",r.serverSignature=q.toString("base64"),r.response=f+",p="+v}a(Gu,"continueSession");function Vu(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLResponse");if(typeof e!=
"string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Yu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does\
 not match")}a(Vu,"finalizeSession");function Ku(r){if(typeof r!="string")throw new TypeError("SASL:\
 text must be a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&
e<=126)}a(Ku,"isPrintableChars");function ms(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(ms,"isBase64");function gs(r){if(typeof r!="string")throw new TypeError("SASL: attribute p\
airs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(e))throw new Error("\
SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(2);return[t,n]}))}a(gs,"parseAttribute\
Pairs");function zu(r){let e=gs(r),t=e.get("r");if(t){if(!Ku(t))throw new Error("SASL: SCRAM-SERVER-\
FIRST-MESSAGE: nonce must only contain printable characters")}else throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!ms(n))throw new Error("SASL: SCRAM-SERV\
ER-FIRST-MESSAGE: salt must be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt\
 missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: invalid iteration count")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: itera\
tion missing");let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(zu,"parseServerFirstMessage");
function Yu(r){let t=gs(r).get("v");if(t){if(!ms(t))throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAG\
E: server signature must be base64")}else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server \
signature is missing");return{serverSignature:t}}a(Yu,"parseServerFinalMessage");function ws(r,e){if(!d.
isBuffer(r))throw new TypeError("first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError(
"second argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer lengths must matc\
h");if(r.length===0)throw new Error("Buffers cannot be empty");return d.from(r.map((t,n)=>r[n]^e[n]))}
a(ws,"xorBuffers");function Zu(r){return gr.createHash("sha256").update(r).digest()}a(Zu,"sha256");function qe(r,e){
return gr.createHmac("sha256",r).update(e).digest()}a(qe,"hmacSha256");function Ju(r,e,t){for(var n=qe(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=qe(r,n),i=ws(i,n);return i}a(Ju,"Hi");bs.exports=
{startSession:$u,continueSession:Gu,finalizeSession:Vu}});var wr={};X(wr,{join:()=>Xu});function Xu(...r){return r.join("/")}var br=V(()=>{"use strict";h();a(
Xu,"join")});var xr={};X(xr,{stat:()=>ec});function ec(r,e){e(new Error("No filesystem"))}var vr=V(()=>{"use stri\
ct";h();a(ec,"stat")});var Sr={};X(Sr,{default:()=>tc});var tc,Er=V(()=>{"use strict";h();tc={}});var vs={};X(vs,{StringDecoder:()=>Ar});var Cr,Ar,Ss=V(()=>{"use strict";h();Cr=class Cr{constructor(e){
E(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){return this.
td.decode(e)}};a(Cr,"StringDecoder");Ar=Cr});var _s=T((Yh,Cs)=>{"use strict";h();var{Transform:rc}=(Er(),U(Sr)),{StringDecoder:nc}=(Ss(),U(vs)),Ee=Symbol(
"last"),It=Symbol("decoder");function ic(r,e,t){let n;if(this.overflow){if(n=this[It].write(r).split(
this.matcher),n.length===1)return t();n.shift(),this.overflow=!1}else this[Ee]+=this[It].write(r),n=
this[Ee].split(this.matcher);this[Ee]=n.pop();for(let i=0;i<n.length;i++)try{As(this,this.mapper(n[i]))}catch(s){
return t(s)}if(this.overflow=this[Ee].length>this.maxLength,this.overflow&&!this.skipOverflow){t(new Error(
"maximum buffer reached"));return}t()}a(ic,"transform");function sc(r){if(this[Ee]+=this[It].end(),this[Ee])
try{As(this,this.mapper(this[Ee]))}catch(e){return r(e)}r()}a(sc,"flush");function As(r,e){e!==void 0&&
r.push(e)}a(As,"push");function Es(r){return r}a(Es,"noop");function oc(r,e,t){switch(r=r||/\r?\n/,e=
e||Es,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r=="object"&&!(r instanceof
RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e==
"object"&&(t=e,e=Es)}t=Object.assign({},t),t.autoDestroy=!0,t.transform=ic,t.flush=sc,t.readableObjectMode=
!0;let n=new rc(t);return n[Ee]="",n[It]=new nc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=t.maxLength,
n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){this._writableState.errorEmitted=
!1,s(i)},n}a(oc,"split");Cs.exports=oc});var Ps=T((Xh,me)=>{"use strict";h();var Ts=(br(),U(wr)),ac=(Er(),U(Sr)).Stream,uc=_s(),Is=(ot(),U(st)),
cc=5432,Pt=y.platform==="win32",at=y.stderr,lc=56,fc=7,hc=61440,pc=32768;function dc(r){return(r&hc)==
pc}a(dc,"isRegFile");var Qe=["host","port","database","user","password"],_r=Qe.length,yc=Qe[_r-1];function Tr(){
var r=at instanceof ac&&at.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);at.write(Is.format.apply(Is,e))}}a(Tr,"warn");Object.defineProperty(me.exports,"isWin",{get:a(function(){
return Pt},"get"),set:a(function(r){Pt=r},"set")});me.exports.warnTo=function(r){var e=at;return at=
r,e};me.exports.getFileName=function(r){var e=r||y.env,t=e.PGPASSFILE||(Pt?Ts.join(e.APPDATA||"./","\
postgresql","pgpass.conf"):Ts.join(e.HOME||"./",".pgpass"));return t};me.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(y.env,"PGPASSWORD")?!1:Pt?!0:(e=e||"<unkn>",dc(r.mode)?r.
mode&(lc|fc)?(Tr('WARNING: password file "%s" has group or world access; permissions should be u=rw \
(0600) or less',e),!1):!0:(Tr('WARNING: password file "%s" is not a plain file',e),!1))};var mc=me.exports.
match=function(r,e){return Qe.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||cc)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};me.exports.getPassword=function(r,e,t){var n,i=e.pipe(
uc());function s(c){var l=gc(c);l&&wc(l)&&mc(r,l)&&(n=l[yc],i.end())}a(s,"onLine");var o=a(function(){
e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),Tr("WARNING: error on reading file: %s",c),t(
void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",u)};var gc=me.exports.parseLine=
function(r){if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(
function(f,m,g){var w=r.substring(m,g);Object.hasOwnProperty.call(y.env,"PGPASS_NO_DEESCAPE")||(w=w.
replace(/\\([:\\])/g,"$1")),o[Qe[f]]=w},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==_r-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).
length===_r?o:null,o},wc=me.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&Math.floor(o)===
o)},2:function(o){return o.length>0},3:function(o){return o.length>0},4:function(o){return o.length>
0}},t=0;t<Qe.length;t+=1){var n=e[t],i=r[Qe[t]]||"",s=n(i);if(!s)return!1}return!0}});var Ls=T((np,Ir)=>{"use strict";h();var rp=(br(),U(wr)),Rs=(vr(),U(xr)),Rt=Ps();Ir.exports=function(r,e){
var t=Rt.getFileName();Rs.stat(t,function(n,i){if(n||!Rt.usePgPass(i,t))return e(void 0);var s=Rs.createReadStream(
t);Rt.getPassword(r,s,e)})};Ir.exports.warnTo=Rt.warnTo});var Bs={};X(Bs,{default:()=>bc});var bc,Fs=V(()=>{"use strict";h();bc={}});var ks={};X(ks,{parse:()=>xc});function xc(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(
t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:l,search:f,searchParams:m,hash:g}=new URL(
n);s=decodeURIComponent(s),i=decodeURIComponent(i),l=decodeURIComponent(l);let w=i+":"+s,v=e?Object.
fromEntries(m.entries()):f;return{href:r,protocol:t,auth:w,username:i,password:s,host:o,hostname:u,port:c,
pathname:l,search:f,query:v,hash:g}}var Ms=V(()=>{"use strict";h();a(xc,"parse")});var Lr=T((up,Us)=>{"use strict";h();var vc=(Ms(),U(ks)),Pr=(vr(),U(xr));function Rr(r){if(r.charAt(0)===
"/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=vc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
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
!1;break}}return t}a(Rr,"parse");Us.exports=Rr;Rr.parse=Rr});var Lt=T((fp,qs)=>{"use strict";h();var Sc=(Fs(),U(Bs)),Ds=nt(),Os=Lr().parse,j=a(function(r,e,t){return t===
void 0?t=y.env["PG"+r.toUpperCase()]:t===!1||(t=y.env[t]),e[r]||t||Ds[r]},"val"),Ec=a(function(){switch(y.
env.PGSSLMODE){case"disable":return!1;case"prefer":case"require":case"verify-ca":case"verify-full":return!0;case"\
no-verify":return{rejectUnauthorized:!1}}return Ds.ssl},"readSSLConfigFromEnvironment"),Ne=a(function(r){
return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quoteParamValue"),re=a(function(r,e,t){
var n=e[t];n!=null&&r.push(t+"="+Ne(n))},"add"),Fr=class Fr{constructor(e){e=typeof e=="string"?Os(e):
e||{},e.connectionString&&(e=Object.assign({},e,Os(e.connectionString))),this.user=j("user",e),this.
database=j("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(j("por\
t",e),10),this.host=j("host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:j("password",e)}),this.binary=j("binary",e),this.options=j("options",e),this.ssl=typeof e.
ssl>"u"?Ec():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&
(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this.client_encoding=j("client_encoding",e),this.replication=j("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=j("application_name",e,"PGAPPNAME"),this.fallback_application_name=
j("fallback_application_name",e,!1),this.statement_timeout=j("statement_timeout",e,!1),this.lock_timeout=
j("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=j("idle_in_transaction_session_timeo\
ut",e,!1),this.query_timeout=j("query_timeout",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=
y.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===
!1?this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="nu\
mber"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];re(t,this,"user"),re(t,this,"password"),re(t,this,"port"),re(t,this,"application_name"),re(
t,this,"fallback_application_name"),re(t,this,"connect_timeout"),re(t,this,"options");var n=typeof this.
ssl=="object"?this.ssl:this.ssl?{sslmode:this.ssl}:{};if(re(t,n,"sslmode"),re(t,n,"sslca"),re(t,n,"s\
slkey"),re(t,n,"sslcert"),re(t,n,"sslrootcert"),this.database&&t.push("dbname="+Ne(this.database)),this.
replication&&t.push("replication="+Ne(this.replication)),this.host&&t.push("host="+Ne(this.host)),this.
isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("client_encoding="+Ne(this.client_encoding)),
Sc.lookup(this.host,function(i,s){return i?e(i,null):(t.push("hostaddr="+Ne(s)),e(null,t.join(" ")))})}};
a(Fr,"ConnectionParameters");var Br=Fr;qs.exports=Br});var Ws=T((dp,Ns)=>{"use strict";h();var Ac=et(),Qs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,Mr=class Mr{constructor(e,t){
this.command=null,this.rowCount=null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,
this._types=t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Qs.exec(e.text):t=Qs.exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],
10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){for(var t=new Array(
e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){
for(var t={},n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this.
_parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=this.
_types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=Ac.getTypeParser(n.dataTypeID,n.
format||"text")}}};a(Mr,"Result");var kr=Mr;Ns.exports=kr});var Gs=T((gp,$s)=>{"use strict";h();var{EventEmitter:Cc}=Se(),js=Ws(),Hs=it(),Or=class Or extends Cc{constructor(e,t,n){
super(),e=Hs.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.rows=e.rows,this.
types=e.types,this.name=e.name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,
this._rowMode=e.rowMode,y.domain&&e.callback&&(this.callback=y.domain.bind(e.callback)),this._result=
new js(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.text||!this.values?
!1:this.values.length>0}_checkForMultirow(){this._result.command&&(Array.isArray(this._results)||(this.
_results=[this._result]),this._result=new js(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
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
portal,statement:this.name,values:this.values,binary:this.binary,valueMapper:Hs.prepareValue})}catch(t){
this.handleError(t,e);return}e.describe({type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Or,"Query");var Ur=Or;$s.exports=
Ur});var pn=T(_=>{"use strict";h();Object.defineProperty(_,"__esModule",{value:!0});_.NoticeMessage=_.DataRowMessage=
_.CommandCompleteMessage=_.ReadyForQueryMessage=_.NotificationResponseMessage=_.BackendKeyDataMessage=
_.AuthenticationMD5Password=_.ParameterStatusMessage=_.ParameterDescriptionMessage=_.RowDescriptionMessage=
_.Field=_.CopyResponse=_.CopyDataMessage=_.DatabaseError=_.copyDone=_.emptyQuery=_.replicationStart=
_.portalSuspended=_.noData=_.closeComplete=_.bindComplete=_.parseComplete=void 0;_.parseComplete={name:"\
parseComplete",length:5};_.bindComplete={name:"bindComplete",length:5};_.closeComplete={name:"closeC\
omplete",length:5};_.noData={name:"noData",length:5};_.portalSuspended={name:"portalSuspended",length:5};
_.replicationStart={name:"replicationStart",length:4};_.emptyQuery={name:"emptyQuery",length:4};_.copyDone=
{name:"copyDone",length:4};var Jr=class Jr extends Error{constructor(e,t,n){super(e),this.length=t,this.
name=n}};a(Jr,"DatabaseError");var Dr=Jr;_.DatabaseError=Dr;var Xr=class Xr{constructor(e,t){this.length=
e,this.chunk=t,this.name="copyData"}};a(Xr,"CopyDataMessage");var qr=Xr;_.CopyDataMessage=qr;var en=class en{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(en,"CopyResponse");var Qr=en;
_.CopyResponse=Qr;var tn=class tn{constructor(e,t,n,i,s,o,u){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=u}};a(tn,"Field");var Nr=tn;
_.Field=Nr;var rn=class rn{constructor(e,t){this.length=e,this.fieldCount=t,this.name="rowDescriptio\
n",this.fields=new Array(this.fieldCount)}};a(rn,"RowDescriptionMessage");var Wr=rn;_.RowDescriptionMessage=
Wr;var nn=class nn{constructor(e,t){this.length=e,this.parameterCount=t,this.name="parameterDescript\
ion",this.dataTypeIDs=new Array(this.parameterCount)}};a(nn,"ParameterDescriptionMessage");var jr=nn;
_.ParameterDescriptionMessage=jr;var sn=class sn{constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};a(sn,"ParameterStatusMessage");var Hr=sn;_.ParameterStatusMessage=
Hr;var on=class on{constructor(e,t){this.length=e,this.salt=t,this.name="authenticationMD5Password"}};
a(on,"AuthenticationMD5Password");var $r=on;_.AuthenticationMD5Password=$r;var an=class an{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(an,"BackendKeyDataMes\
sage");var Gr=an;_.BackendKeyDataMessage=Gr;var un=class un{constructor(e,t,n,i){this.length=e,this.
processId=t,this.channel=n,this.payload=i,this.name="notification"}};a(un,"NotificationResponseMessa\
ge");var Vr=un;_.NotificationResponseMessage=Vr;var cn=class cn{constructor(e,t){this.length=e,this.
status=t,this.name="readyForQuery"}};a(cn,"ReadyForQueryMessage");var Kr=cn;_.ReadyForQueryMessage=Kr;
var ln=class ln{constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};a(ln,"Comma\
ndCompleteMessage");var zr=ln;_.CommandCompleteMessage=zr;var fn=class fn{constructor(e,t){this.length=
e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(fn,"DataRowMessage");var Yr=fn;_.DataRowMessage=
Yr;var hn=class hn{constructor(e,t){this.length=e,this.message=t,this.name="notice"}};a(hn,"NoticeMe\
ssage");var Zr=hn;_.NoticeMessage=Zr});var Vs=T(Bt=>{"use strict";h();Object.defineProperty(Bt,"__esModule",{value:!0});Bt.Writer=void 0;var yn=class yn{constructor(e=256){
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
a(yn,"Writer");var dn=yn;Bt.Writer=dn});var zs=T(kt=>{"use strict";h();Object.defineProperty(kt,"__esModule",{value:!0});kt.serialize=void 0;
var mn=Vs(),L=new mn.Writer,_c=a(r=>{L.addInt16(3).addInt16(0);for(let n of Object.keys(r))L.addCString(
n).addCString(r[n]);L.addCString("client_encoding").addCString("UTF8");let e=L.addCString("").flush(),
t=e.length+4;return new mn.Writer().addInt32(t).add(e).flush()},"startup"),Tc=a(()=>{let r=d.allocUnsafe(
8);return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Ic=a(r=>L.addCString(r).flush(
112),"password"),Pc=a(function(r,e){return L.addCString(r).addInt32PrefixedString(e),L.flush(112)},"\
sendSASLInitialResponseMessage"),Rc=a(function(r){return L.addString(r).flush(112)},"sendSCRAMClient\
FinalMessage"),Lc=a(r=>L.addCString(r).flush(81),"query"),Ks=[],Bc=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),console.error("You \
supplied %s (%s)",e,e.length),console.error("This can cause conflicts and silent errors executing qu\
eries"));let t=r.types||Ks,n=t.length,i=L.addCString(e).addCString(r.text).addInt16(n);for(let s=0;s<
n;s++)i.addInt32(t[s]);return L.flush(80)},"parse"),We=new mn.Writer,Fc=a(function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(L.addInt16(0),We.addInt32(-1)):n instanceof d?(L.addInt16(
1),We.addInt32(n.length),We.add(n)):(L.addInt16(0),We.addInt32PrefixedString(n))}},"writeValues"),kc=a(
(r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||!1,i=r.values||Ks,s=i.length;L.addCString(
e).addCString(t),L.addInt16(s);try{Fc(i,r.valueMapper)}catch(o){throw L.clear(),We.clear(),o}return L.
addInt16(s),L.add(We.flush()),L.addInt16(1),L.addInt16(n?1:0),L.flush(66)},"bind"),Mc=d.from([69,0,0,
0,9,0,0,0,0,0]),Uc=a(r=>{if(!r||!r.portal&&!r.rows)return Mc;let e=r.portal||"",t=r.rows||0,n=d.byteLength(
e),i=4+n+1+4,s=d.allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.
writeUInt32BE(t,s.length-4),s},"execute"),Oc=a((r,e)=>{let t=d.allocUnsafe(16);return t.writeInt32BE(
16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},"can\
cel"),gn=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),
i.write(e,5,"utf-8"),i[n]=0,i},"cstringMessage"),Dc=L.addCString("P").flush(68),qc=L.addCString("S").
flush(68),Qc=a(r=>r.name?gn(68,`${r.type}${r.name||""}`):r.type==="P"?Dc:qc,"describe"),Nc=a(r=>{let e=`${r.
type}${r.name||""}`;return gn(67,e)},"close"),Wc=a(r=>L.add(r).flush(100),"copyData"),jc=a(r=>gn(102,
r),"copyFail"),Ft=a(r=>d.from([r,0,0,0,4]),"codeOnlyBuffer"),Hc=Ft(72),$c=Ft(83),Gc=Ft(88),Vc=Ft(99),
Kc={startup:_c,password:Ic,requestSsl:Tc,sendSASLInitialResponseMessage:Pc,sendSCRAMClientFinalMessage:Rc,
query:Lc,parse:Bc,bind:kc,execute:Uc,describe:Qc,close:Nc,flush:a(()=>Hc,"flush"),sync:a(()=>$c,"syn\
c"),end:a(()=>Gc,"end"),copyData:Wc,copyDone:a(()=>Vc,"copyDone"),copyFail:jc,cancel:Oc};kt.serialize=
Kc});var Ys=T(Mt=>{"use strict";h();Object.defineProperty(Mt,"__esModule",{value:!0});Mt.BufferReader=void 0;
var bn=class bn{constructor(e=0){this.offset=e,this.buffer=d.allocUnsafe(0),this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=2,
e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.readInt32BE(
this.offset);return this.offset+=4,e}uint32(){let e=this.buffer.readUInt32BE(this.offset);return this.
offset+=4,e}string(e){let t=this.buffer.toString(this.encoding,this.offset,this.offset+e);return this.
offset+=e,t}cstring(){let e=this.offset,t=e;for(;this.buffer[t++];);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);return this.
offset+=e,t}};a(bn,"BufferReader");var wn=bn;Mt.BufferReader=wn});var eo=T(Ut=>{"use strict";h();Object.defineProperty(Ut,"__esModule",{value:!0});Ut.Parser=void 0;var F=pn(),
zc=Ys(),vn=1,Yc=4,Zs=vn+Yc,Z=-1,xn=d.allocUnsafe(0),En=class En{constructor(e){if(this.buffer=xn,this.
bufferLength=0,this.bufferOffset=0,this.reader=new zc.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+Zs<=n;){let s=this.buffer[i],o=this.buffer.
readUInt32BE(i+vn),u=vn+o;if(u+i<=n){let c=this.handlePacket(i+Zs,s,o,this.buffer);t(c),i+=u}else break}
i===n?(this.buffer=xn,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=
i)}mergeBuffer(e){if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.bufferLength)i=this.
buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=d.allocUnsafe(s)}this.buffer.copy(i,0,this.
bufferOffset,this.bufferOffset+this.bufferLength),this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,
this.bufferOffset+this.bufferLength),this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.
bufferLength=e.byteLength}handlePacket(e,t,n,i){let{reader:s}=this;s.setBuffer(e,i);let o;switch(t){case 50:
o=F.bindComplete;break;case 49:o=F.parseComplete;break;case 51:o=F.closeComplete;break;case 110:o=F.
noData;break;case 115:o=F.portalSuspended;break;case 99:o=F.copyDone;break;case 87:o=F.replicationStart;
break;case 73:o=F.emptyQuery;break;case 68:o=ol(s);break;case 67:o=Jc(s);break;case 90:o=Zc(s);break;case 65:
o=rl(s);break;case 82:o=cl(s,n);break;case 83:o=al(s);break;case 75:o=ul(s);break;case 69:o=Js(s,"er\
ror");break;case 78:o=Js(s,"notice");break;case 84:o=nl(s);break;case 116:o=sl(s);break;case 71:o=el(
s);break;case 72:o=tl(s);break;case 100:o=Xc(s,n);break;default:return new F.DatabaseError("received\
 invalid response: "+t.toString(16),n,"error")}return s.setBuffer(0,xn),o.length=n,o}};a(En,"Parser");
var Sn=En;Ut.Parser=Sn;var Zc=a(r=>{let e=r.string(1);return new F.ReadyForQueryMessage(Z,e)},"parse\
ReadyForQueryMessage"),Jc=a(r=>{let e=r.cstring();return new F.CommandCompleteMessage(Z,e)},"parseCo\
mmandCompleteMessage"),Xc=a((r,e)=>{let t=r.bytes(e-4);return new F.CopyDataMessage(Z,t)},"parseCopy\
Data"),el=a(r=>Xs(r,"copyInResponse"),"parseCopyInMessage"),tl=a(r=>Xs(r,"copyOutResponse"),"parseCo\
pyOutMessage"),Xs=a((r,e)=>{let t=r.byte()!==0,n=r.int16(),i=new F.CopyResponse(Z,e,t,n);for(let s=0;s<
n;s++)i.columnTypes[s]=r.int16();return i},"parseCopyMessage"),rl=a(r=>{let e=r.int32(),t=r.cstring(),
n=r.cstring();return new F.NotificationResponseMessage(Z,e,t,n)},"parseNotificationMessage"),nl=a(r=>{
let e=r.int16(),t=new F.RowDescriptionMessage(Z,e);for(let n=0;n<e;n++)t.fields[n]=il(r);return t},"\
parseRowDescriptionMessage"),il=a(r=>{let e=r.cstring(),t=r.uint32(),n=r.int16(),i=r.uint32(),s=r.int16(),
o=r.int32(),u=r.int16()===0?"text":"binary";return new F.Field(e,t,n,i,s,o,u)},"parseField"),sl=a(r=>{
let e=r.int16(),t=new F.ParameterDescriptionMessage(Z,e);for(let n=0;n<e;n++)t.dataTypeIDs[n]=r.uint32();
return t},"parseParameterDescriptionMessage"),ol=a(r=>{let e=r.int16(),t=new Array(e);for(let n=0;n<
e;n++){let i=r.int32();t[n]=i===-1?null:r.string(i)}return new F.DataRowMessage(Z,t)},"parseDataRowM\
essage"),al=a(r=>{let e=r.cstring(),t=r.cstring();return new F.ParameterStatusMessage(Z,e,t)},"parse\
ParameterStatusMessage"),ul=a(r=>{let e=r.int32(),t=r.int32();return new F.BackendKeyDataMessage(Z,e,
t)},"parseBackendKeyData"),cl=a((r,e)=>{let t=r.int32(),n={name:"authenticationOk",length:e};switch(t){case 0:
break;case 3:n.length===8&&(n.name="authenticationCleartextPassword");break;case 5:if(n.length===12){
n.name="authenticationMD5Password";let i=r.bytes(4);return new F.AuthenticationMD5Password(Z,i)}break;case 10:
{n.name="authenticationSASL",n.mechanisms=[];let i;do i=r.cstring(),i&&n.mechanisms.push(i);while(i)}
break;case 11:n.name="authenticationSASLContinue",n.data=r.string(e-8);break;case 12:n.name="authent\
icationSASLFinal",n.data=r.string(e-8);break;default:throw new Error("Unknown authenticationOk messa\
ge type "+t)}return n},"parseAuthenticationResponse"),Js=a((r,e)=>{let t={},n=r.string(1);for(;n!=="\
\0";)t[n]=r.cstring(),n=r.string(1);let i=t.M,s=e==="notice"?new F.NoticeMessage(Z,i):new F.DatabaseError(
i,Z,e);return s.severity=t.S,s.code=t.C,s.detail=t.D,s.hint=t.H,s.position=t.P,s.internalPosition=t.
p,s.internalQuery=t.q,s.where=t.W,s.schema=t.s,s.table=t.t,s.column=t.c,s.dataType=t.d,s.constraint=
t.n,s.file=t.F,s.line=t.L,s.routine=t.R,s},"parseErrorMessage")});var An=T(Te=>{"use strict";h();Object.defineProperty(Te,"__esModule",{value:!0});Te.DatabaseError=Te.
serialize=void 0;Te.parse=pl;var ll=pn();Object.defineProperty(Te,"DatabaseError",{enumerable:!0,get:a(
function(){return ll.DatabaseError},"get")});var fl=zs();Object.defineProperty(Te,"serialize",{enumerable:!0,
get:a(function(){return fl.serialize},"get")});var hl=eo();function pl(r,e){let t=new hl.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(pl,"parse")});var to={};X(to,{connect:()=>dl});function dl({socket:r,servername:e}){return r.startTls(e),r}var ro=V(
()=>{"use strict";h();a(dl,"connect")});var Tn=T((Qp,so)=>{"use strict";h();var no=(Ke(),U(Pi)),yl=Se().EventEmitter,{parse:ml,serialize:D}=An(),
io=D.flush(),gl=D.sync(),wl=D.end(),_n=class _n extends yl{constructor(e){super(),e=e||{},this.stream=
e.stream||new no.Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=!1;
var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){var n=this;
this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,t),this.stream.once("connect",function(){
n._keepAlive&&n.stream.setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");if(this.
stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.attachListeners(
this.stream);this.stream.once("data",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"\
N":return n.stream.end(),n.emit("error",new Error("The server does not support SSL connections"));default:
return n.stream.end(),n.emit("error",new Error("There was an error establishing an SSL connection"))}
var u=(ro(),U(to));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=
n.ssl.key)),no.isIP(t)===0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",
l)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on(
"end",()=>{this.emit("end")}),ml(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(D.requestSsl())}startup(e){this.
stream.write(D.startup(e))}cancel(e,t){this._send(D.cancel(e,t))}password(e){this._send(D.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(D.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){this._send(D.sendSCRAMClientFinalMessage(
e))}_send(e){return this.stream.writable?this.stream.write(e):!1}query(e){this._send(D.query(e))}parse(e){
this._send(D.parse(e))}bind(e){this._send(D.bind(e))}execute(e){this._send(D.execute(e))}flush(){this.
stream.writable&&this.stream.write(io)}sync(){this._ending=!0,this._send(io),this._send(gl)}ref(){this.
stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(wl,()=>{this.stream.end()})}close(e){this._send(D.
close(e))}describe(e){this._send(D.describe(e))}sendCopyFromChunk(e){this._send(D.copyData(e))}endCopyFrom(){
this._send(D.copyDone())}sendCopyFail(e){this._send(D.copyFail(e))}};a(_n,"Connection");var Cn=_n;so.
exports=Cn});var uo=T((Hp,ao)=>{"use strict";h();var bl=Se().EventEmitter,jp=(ot(),U(st)),xl=it(),In=xs(),vl=Ls(),
Sl=_t(),El=Lt(),oo=Gs(),Al=nt(),Cl=Tn(),Pn=class Pn extends bl{constructor(e){super(),this.connectionParameters=
new El(e),this.user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,Object.defineProperty(
this,"password",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=t.Promise||b.Promise,
this._types=new Sl(t.types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new Cl({stream:t.stream,ssl:this.connectionParameters.
ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.binary||Al.binary,this.
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
password=this.password=null;e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():vl(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){this._checkPgPass(
()=>{let t=xl.postgresMd5PasswordHash(this.user,this.password,e.salt);this.connection.password(t)})}_handleAuthSASL(e){
this._checkPgPass(()=>{this.saslSession=In.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){In.continueSession(
this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}_handleAuthSASLFinal(e){In.finalizeSession(this.saslSession,e.data),this.saslSession=null}_handleBackendKeyData(e){
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
connectionParameters.query_timeout,i=new oo(e,t,n),i.callback||(s=new this._Promise((l,f)=>{i.callback=
(m,g)=>m?f(m):l(g)}))),o&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");y.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var f=this.queryQueue.indexOf(i);f>-1&&
this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=(l,f)=>{clearTimeout(u),c(l,f)}),
this.binary&&!i.binary&&(i.binary=!0),i._result&&!i._result._types&&(i._result._types=this._types),this.
_queryable?this._ending?(y.nextTick(()=>{i.handleError(new Error("Client was closed and is not query\
able"),this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(y.nextTick(()=>{i.
handleError(new Error("Client has encountered a connection error and is not queryable"),this.connection)}),
s)}ref(){this.connection.ref()}unref(){this.connection.unref()}end(e){if(this._ending=!0,!this.connection.
_connecting)if(e)e();else return this._Promise.resolve();if(this.activeQuery||!this._queryable?this.
connection.stream.destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(Pn,"Client");var Ot=Pn;Ot.Query=oo;ao.exports=Ot});var fo=T((Vp,lo)=>{"use strict";h();var _l=Se().EventEmitter,Rn=a(function(){},"NOOP"),co=a((r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},"removeWhere"),Fn=class Fn{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}};a(Fn,"IdleItem");var Ln=Fn,kn=class kn{constructor(e){
this.callback=e}};a(kn,"PendingItem");var je=kn;function Tl(){throw new Error("Release called on cli\
ent which has already been released to the pool.")}a(Tl,"throwOnDoubleRelease");function Dt(r,e){if(e)
return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u}).catch(o=>{throw Error.captureStackTrace(o),o});return{callback:i,result:s}}a(Dt,"promisify");
function Il(r,e){return a(function t(n){n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log(
"additional client error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"i\
dleListener")}a(Il,"makeIdleListener");var Mn=class Mn extends _l{constructor(e,t){super(),this.options=
Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.
ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.options.poolSize||10,this.options.
min=this.options.min||0,this.options.maxUses=this.options.maxUses||1/0,this.options.allowExitOnIdle=
this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,
this.log=this.options.log||function(){},this.Client=this.options.Client||t||ut().Client,this.Promise=
this.options.Promise||b.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=[],this._endCallback=
void 0,this.ending=!1,this.ended=!1}_promiseTry(e){let t=this.Promise;return typeof t.try=="function"?
t.try(e):new t(n=>n(e()))}_isFull(){return this._clients.length>=this.options.max}_isAboveMin(){return this.
_clients.length>this.options.min}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.log("puls\
e queue ended");return}if(this.ending){this.log("pulse queue on ending"),this._idle.length&&this._idle.
slice().map(t=>{this._remove(t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}
if(!this._pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&this._isFull())
return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(t.
timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(n,e,i,!1)}if(!this.
_isFull())return this.newClient(e);throw new Error("unexpected condition")}_remove(e,t){let n=co(this.
_idle,s=>s.client===e);n!==void 0&&clearTimeout(n.timeoutId),this._clients=this._clients.filter(s=>s!==
e);let i=this;e.end(()=>{i.emit("remove",e),typeof t=="function"&&t()})}connect(e){if(this.ending){let i=new Error(
"Cannot use a pool after calling end on the pool");return e?e(i):this.Promise.reject(i)}let t=Dt(this.
Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&y.nextTick(()=>this.
_pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.push(new je(t.callback)),
n;let i=a((u,c,l)=>{clearTimeout(o),t.callback(u,c,l)},"queueCallback"),s=new je(i),o=setTimeout(()=>{
co(this._pendingQueue,u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when t\
rying to connect"))},this.options.connectionTimeoutMillis);return o.unref&&o.unref(),this._pendingQueue.
push(s),n}return this.newClient(new je(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=Il(this,t);this.log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{t.connection?(this.log("ending client due to timeout"),s=!0,t.connection.stream.destroy()):
t.isConnected()||(this.log("ending client due to timeout"),s=!0,t.end())},this.options.connectionTimeoutMillis)),
this.log("connecting new client"),t.connect(o=>{if(i&&clearTimeout(i),t.on("error",n),o)this.log("cl\
ient failed to connect",o),this._clients=this._clients.filter(u=>u!==t),s&&(o=new Error("Connection \
terminated due to connection timeout",{cause:o})),this._pulseQueue(),e.timedOut||e.callback(o,void 0,
Rn);else{if(this.log("new client connected"),this.options.onConnect){this._promiseTry(()=>this.options.
onConnect(t)).then(()=>{this._afterConnect(t,e,n)},u=>{this._clients=this._clients.filter(c=>c!==t),
t.end(()=>{this._pulseQueue(),e.timedOut||e.callback(u,void 0,Rn)})});return}return this._afterConnect(
t,e,n)}})}_afterConnect(e,t,n){if(this.options.maxLifetimeSeconds!==0){let i=setTimeout(()=>{this.log(
"ending client due to expired lifetime"),this._expired.add(e),this._idle.findIndex(o=>o.client===e)!==
-1&&this._acquireClient(e,new je((o,u,c)=>c()),n,!1)},this.options.maxLifetimeSeconds*1e3);i.unref(),
e.once("end",()=>clearTimeout(i))}return this._acquireClient(e,t,n,!0)}_acquireClient(e,t,n,i){i&&this.
emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),e.removeListener("error",n),
t.timedOut?i&&this.options.verify?this.options.verify(e,e.release):e.release():i&&this.options.verify?
this.options.verify(e,s=>{if(s)return e.release(s),t.callback(s,void 0,Rn);t.callback(void 0,e,e.release)}):
t.callback(void 0,e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&Tl(),n=!0,this._release(e,t,
i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,this.emit("release",n,
e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=this.options.maxUses)return e._poolUseCount>=
this.options.maxUses&&this.log("remove expended client"),this._remove(e,this._pulseQueue.bind(this));
if(this._expired.has(e))return this.log("remove expired client"),this._expired.delete(e),this._remove(
e,this._pulseQueue.bind(this));let s;this.options.idleTimeoutMillis&&this._isAboveMin()&&(s=setTimeout(
()=>{this._isAboveMin()&&(this.log("remove idle client"),this._remove(e,this._pulseQueue.bind(this)))},
this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&
e.unref(),this._idle.push(new Ln(e,t,s)),this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Dt(
this.Promise,e);return x(function(){return s.callback(new Error("Passing a function as the first par\
ameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=t,t=void 0);let i=Dt(this.
Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)return n(s);let u=!1,c=a(l=>{u||(u=!0,o.release(
l),n(l))},"onError");o.once("error",c),this.log("dispatching query");try{o.query(e,t,(l,f)=>{if(this.
log("query dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,f)})}catch(l){
return o.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),this.ending){let n=new Error("Call\
ed end on pool more than once");return e?e(n):this.Promise.reject(n)}this.ending=!0;let t=Dt(this.Promise,
e);return this._endCallback=t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.reduce((e,t)=>e+
(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.length}};a(Mn,"Pool");var Bn=Mn;
lo.exports=Bn});var ho={};X(ho,{default:()=>Pl});var Pl,po=V(()=>{"use strict";h();Pl={}});var yo=T((Zp,Rl)=>{Rl.exports={name:"pg",version:"8.8.0",description:"PostgreSQL client - pure javas\
cript & libpq with the same API",keywords:["database","libpq","pg","postgre","postgres","postgresql",
"rdbms"],homepage:"https://github.com/brianc/node-postgres",repository:{type:"git",url:"git://github\
.com/brianc/node-postgres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail\
.com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0","pg-connection-str\
ing":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-types":"^2.1.0",pgpass:"1.x"},devDependencies:{
async:"2.6.4",bluebird:"3.5.2",co:"4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":"\
>=3.0.1"},peerDependenciesMeta:{"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["li\
b","SPONSORS.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c7b9a5491\
a178655"}});var wo=T((Jp,go)=>{"use strict";h();var mo=Se().EventEmitter,Ll=(ot(),U(st)),Un=it(),He=go.exports=function(r,e,t){
mo.call(this),r=Un.normalizeQueryConfig(r,e,t),this.text=r.text,this.values=r.values,this.name=r.name,
this.callback=r.callback,this.state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,
this.on("newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Ll.inherits(He,mo);
var Bl={sqlState:"code",statementPosition:"position",messagePrimary:"message",context:"where",schemaName:"\
schema",tableName:"table",columnName:"column",dataTypeName:"dataType",constraintName:"constraint",sourceFile:"\
file",sourceLine:"line",sourceFunction:"routine"};He.prototype.handleError=function(r){var e=this.native.
pq.resultErrorFields();if(e)for(var t in e){var n=Bl[t]||t;r[n]=e[t]}this.callback?this.callback(r):
this.emit("error",r),this.state="error"};He.prototype.then=function(r,e){return this._getPromise().then(
r,e)};He.prototype.catch=function(r){return this._getPromise().catch(r)};He.prototype._getPromise=function(){
return this._promise?this._promise:(this._promise=new Promise(function(r,e){this._once("end",r),this.
_once("error",e)}.bind(this)),this._promise)};He.prototype.submit=function(r){this.state="running";var e=this;
this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(function(s,o,u){if(r.native.arrayMode=
!1,x(function(){e.emit("_done")}),s)return e.handleError(s);e._emitRowEvents&&(u.length>1?o.forEach(
(c,l)=>{c.forEach(f=>{e.emit("row",f,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="e\
nd",e.emit("end",u),e.callback&&e.callback(null,u)},"after");if(y.domain&&(t=y.domain.bind(t)),this.
name){this.name.length>63&&(console.error("Warning! Postgres only supports 63 characters for query n\
ames."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error("This can cau\
se conflicts and silent errors executing queries"));var n=(this.values||[]).map(Un.prepareValue);if(r.
namedQueries[this.name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Prepa\
red statements must be unique - '${this.name}' was used for a different statement`);return t(s)}return r.
native.execute(this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){return s?
t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(
this.values)){let s=new Error("Query values must be an array");return t(s)}var i=this.values.map(Un.
prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.text,t)}});var So=T((rd,vo)=>{"use strict";h();var Fl=(po(),U(ho)),kl=_t(),td=yo(),bo=Se().EventEmitter,Ml=(ot(),U(st)),
Ul=Lt(),xo=wo(),Y=vo.exports=function(r){bo.call(this),r=r||{},this._Promise=r.Promise||b.Promise,this.
_types=new kl(r.types),this.native=new Fl({types:this._types}),this._queryQueue=[],this._ending=!1,this.
_connecting=!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Ul(r);this.
user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.
password}),this.database=e.database,this.host=e.host,this.port=e.port,this.namedQueries={}};Y.Query=
xo;Ml.inherits(Y,bo);Y.prototype._errorAllQueries=function(r){let e=a(t=>{y.nextTick(()=>{t.native=this.
native,t.handleError(r)})},"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};Y.prototype._connect=function(r){var e=this;
if(this._connecting){y.nextTick(()=>r(new Error("Client has already been connected. You cannot reuse\
 a client.")));return}this._connecting=!0,this.connectionParameters.getLibpqConnectionString(function(t,n){
if(t)return r(t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,e.native.
on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notifi\
cation",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.emit("connect"),e.
_pulseQueryQueue(!0),r()})})};Y.prototype.connect=function(r){if(r){this._connect(r);return}return new this.
_Promise((e,t)=>{this._connect(n=>{n?t(n):e()})})};Y.prototype.query=function(r,e,t){var n,i,s,o,u;if(r==
null)throw new TypeError("Client was passed a null or undefined query");if(typeof r.submit=="functio\
n")s=r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="function"&&(r.callback=
e);else if(s=this.connectionParameters.query_timeout,n=new xo(r,e,t),!n.callback){let c,l;i=new this.
_Promise((f,m)=>{c=f,l=m}),n.callback=(f,m)=>f?l(f):c(m)}return s&&(u=n.callback,o=setTimeout(()=>{var c=new Error(
"Query read timeout");y.nextTick(()=>{n.handleError(c,this.connection)}),u(c),n.callback=()=>{};var l=this.
_queryQueue.indexOf(n);l>-1&&this._queryQueue.splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{
clearTimeout(o),u(c,l)}),this._queryable?this._ending?(n.native=this.native,y.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),
i):(n.native=this.native,y.nextTick(()=>{n.handleError(new Error("Client has encountered a connectio\
n error and is not queryable"))}),i)};Y.prototype.end=function(r){var e=this;this._ending=!0,this._connected||
this.once("connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){r=a(s=>s?
i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error("Connection terminated")),
y.nextTick(()=>{e.emit("end"),r&&r()})}),t};Y.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};Y.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){r||this.emit("dra\
in");return}this._activeQuery=e,e.submit(this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};
Y.prototype.cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};Y.prototype.ref=function(){};
Y.prototype.unref=function(){};Y.prototype.setTypeParser=function(r,e,t){return this._types.setTypeParser(
r,e,t)};Y.prototype.getTypeParser=function(r,e){return this._types.getTypeParser(r,e)}});var On=T((sd,Eo)=>{"use strict";h();Eo.exports=So()});var ut=T((ad,ct)=>{"use strict";h();var Ol=uo(),Dl=nt(),ql=Tn(),Ql=fo(),{DatabaseError:Nl}=An(),Wl=a(
r=>{var e;return e=class extends Ql{constructor(n){super(n,r)}},a(e,"BoundPool"),e},"poolFactory"),Dn=a(
function(r){this.defaults=Dl,this.Client=r,this.Query=this.Client.Query,this.Pool=Wl(this.Client),this.
_pools=[],this.Connection=ql,this.types=et(),this.DatabaseError=Nl},"PG");typeof y.env.NODE_PG_FORCE_NATIVE<
"u"?ct.exports=new Dn(On()):(ct.exports=new Dn(Ol),Object.defineProperty(ct.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Dn(On())}catch(e){if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.
defineProperty(ct.exports,"native",{value:r}),r}}))});var Vl={};X(Vl,{Client:()=>$e,DatabaseError:()=>pe.DatabaseError,NeonDbError:()=>Q,Pool:()=>qt,SqlTemplate:()=>ke,
UnsafeRawSql:()=>Me,_bundleExt:()=>Gl,defaults:()=>pe.defaults,errorFields:()=>er,escapeIdentifier:()=>pe.escapeIdentifier,
escapeLiteral:()=>pe.escapeLiteral,neon:()=>mr,neonConfig:()=>he,parseIntoClientConfig:()=>Io,types:()=>pe.types});
module.exports=U(Vl);h();h();h();var da=Object.defineProperty,ya=Object.defineProperties,ma=Object.getOwnPropertyDescriptors,ci=Object.
getOwnPropertySymbols,ga=Object.prototype.hasOwnProperty,wa=Object.prototype.propertyIsEnumerable,li=a(
(r,e,t)=>e in r?da(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,"__defNormalProp"),
ba=a((r,e)=>{for(var t in e||(e={}))ga.call(e,t)&&li(r,t,e[t]);if(ci)for(var t of ci(e))wa.call(e,t)&&
li(r,t,e[t]);return r},"__spreadValues"),xa=a((r,e)=>ya(r,ma(e)),"__spreadProps"),va=1008e3,fi=new Uint8Array(
new Uint16Array([258]).buffer)[0]===2,Sa=new TextDecoder,Zt=new TextEncoder,pt=Zt.encode("0123456789\
abcdef"),dt=Zt.encode("0123456789ABCDEF"),Ea=Zt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\
stuvwxyz0123456789+/");var hi=Ea.slice();hi[62]=45;hi[63]=95;var Ve,yt;function Aa(r,{alphabet:e,scratchArr:t}={}){if(!Ve)if(Ve=
new Uint16Array(256),yt=new Uint16Array(256),fi)for(let v=0;v<256;v++)Ve[v]=pt[v&15]<<8|pt[v>>>4],yt[v]=
dt[v&15]<<8|dt[v>>>4];else for(let v=0;v<256;v++)Ve[v]=pt[v&15]|pt[v>>>4]<<8,yt[v]=dt[v&15]|dt[v>>>4]<<
8;r.byteOffset%4!==0&&(r=new Uint8Array(r));let n=r.length,i=n>>>1,s=n>>>2,o=t||new Uint16Array(n),u=new Uint32Array(
r.buffer,r.byteOffset,s),c=new Uint32Array(o.buffer,o.byteOffset,i),l=e==="upper"?yt:Ve,f=0,m=0,g;if(fi)
for(;f<s;)g=u[f++],c[m++]=l[g>>>8&255]<<16|l[g&255],c[m++]=l[g>>>24]<<16|l[g>>>16&255];else for(;f<s;)
g=u[f++],c[m++]=l[g>>>24]<<16|l[g>>>16&255],c[m++]=l[g>>>8&255]<<16|l[g&255];for(f<<=2;f<n;)o[f]=l[r[f++]];
return Sa.decode(o.subarray(0,n))}a(Aa,"_toHex");function Ca(r,e={}){let t="",n=r.length,i=va>>>1,s=Math.
ceil(n/i),o=new Uint16Array(s>1?i:n),u=xa(ba({},e),{scratchArr:o});for(let c=0;c<s;c++){let l=c*i,f=l+
i;t+=Aa(r.subarray(l,f),u)}return t}a(Ca,"_toHexChunked");function pi(r,e={}){return e.alphabet!=="u\
pper"&&typeof r.toHex=="function"?r.toHex():Ca(r,e)}a(pi,"toHex");h();h();var Jt=class Jt{constructor(e,t,n){E(this,"execute",e);E(this,"queryData",t);E(this,"opts",n)}then(e,t){
return this.execute(this.queryData,this.opts).then(e,t)}catch(e){return this.execute(this.queryData,
this.opts).catch(e)}finally(e){return this.execute(this.queryData,this.opts).finally(e)}};a(Jt,"Neon\
QueryPromise");var ve=Jt;var mt=class mt{constructor(e,t){E(this,"strings",e);E(this,"values",t)}toParameterizedQuery(e={query:"",
params:[]}){let{strings:t,values:n}=this;for(let i=0,s=t.length;i<s;i++)if(e.query+=t[i],i<n.length){
let o=n[i];if(o instanceof Me)e.query+=o.sql;else if(o instanceof ve)if(o.queryData instanceof mt)o.
queryData.toParameterizedQuery(e);else{if(o.queryData.params?.length)throw new Error("This query is \
not composable");e.query+=o.queryData.query}else{let{params:u}=e;u.push(o),e.query+="$"+u.length,(o instanceof
d||ArrayBuffer.isView(o))&&(e.query+="::bytea")}}return e}};a(mt,"SqlTemplate");var ke=mt,Xt=class Xt{constructor(e){
E(this,"sql",e)}};a(Xt,"UnsafeRawSql");var Me=Xt;h();function gt(){typeof window<"u"&&typeof document<"u"&&typeof console<"u"&&typeof console.warn=="func\
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
        ************************************************************`)}a(gt,"warnIfBrowser");h();h();var wt=class wt extends Error{constructor(t){super(t);E(this,"name","NeonDbError");E(this,"severity");
E(this,"code");E(this,"detail");E(this,"hint");E(this,"position");E(this,"internalPosition");E(this,
"internalQuery");E(this,"where");E(this,"schema");E(this,"table");E(this,"column");E(this,"dataType");
E(this,"constraint");E(this,"file");E(this,"line");E(this,"routine");E(this,"sourceError");"captureS\
tackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,wt)}};a(
wt,"NeonDbError");var Q=wt,er=["severity","code","detail","hint","position","internalPosition","inte\
rnalQuery","where","schema","table","column","dataType","constraint","file","line","routine"];function di(r,e){let t,n;try{t=new URL(r).protocol,n=new URL("http:"+r.slice(t.length))}catch{throw new Q(
`Database connection string provided to neon() is not a valid URL (connection string: ${r})`)}let{username:i,
hostname:s,pathname:o}=n;if(t!=="postgres:"&&t!=="postgresql:"||e&&(!i||!s||s==="-"||!o||o==="/"))throw new Q(
"Wrong URL scheme or missing user, host or database in connection parameters");return n}a(di,"URLFro\
mPgConnectionString");function _a(r){return"postgresql:"+r.href.slice(r.protocol.length)}a(_a,"pgCon\
nectionStringFromURL");var Ta=["connectionString","user","username","password","host","hostname","po\
rt","database"],Ia={database:"pathname",user:"username",host:"hostname"};function yi(...r){let e={};
for(let t of r)e=t.connectionString!==void 0?t:{...e,...t};return e}a(yi,"mergeConnectionParams");async function mi(r="\
postgresql://-",e={},t={}){if(e.connectionString!==void 0&&(r=e.connectionString),typeof r=="functio\
n"&&(r=await r()),typeof r!="string")throw new Q("Connection string must be a string or a function r\
esolving to one");if(e.user!==void 0&&e.username!==void 0)throw new Q("Please specify one only of us\
er and username");if(e.host!==void 0&&e.hostname!==void 0)throw new Q("Please specify one only of ho\
st and hostname");let n=di(r,!1);await Promise.all(Ta.map(async u=>{if(u==="connectionString")return;
let c=e[u];if(typeof c=="function"&&(c=await c()),c===void 0)return;if(typeof c!="string"&&!(u==="po\
rt"&&typeof c=="number")){let f=u==="port"?" or a number":"";throw new Q(`Connection parameter "${u}\
" must be a string${f} or a function resolving to one`)}let l=Ia[u]??u;n[l]=c}));let{searchParams:i}=n;
for(let u in t)i.has(u)||i.append(u,t[u]);let s=_a(n),o=di(s,!0);return{resolvedConnectionString:s,resolvedURL:o}}
a(mi,"resolveConnectionParams");Ke();h();var vt="pkg:npm/%40neondatabase/serverless@1.1.0";var ds=be(_t()),ys=be(it());var fs="transaction() expects an array of queries, or a function returning an array of queries";function Wu(r){
return r instanceof d?"\\x"+pi(r):r}a(Wu,"encodeBuffersAsBytea");function hs(r){let{query:e,params:t}=r instanceof
ke?r.toParameterizedQuery():r;return{query:e,params:t.map(n=>Wu((0,ys.prepareValue)(n)))}}a(hs,"prep\
areQuery");function mr(r,e={}){typeof r!="string"&&(e=r??{},r=void 0);let{arrayMode:t,fullResults:n,
fetchOptions:i,isolationLevel:s,readOnly:o,deferrable:u,authToken:c,disableWarningInBrowsers:l}=e;function f(g,...w){
if(!(Array.isArray(g)&&Array.isArray(g.raw)&&Array.isArray(w)))throw new Error('This function can no\
w be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], \
options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SE\
LECT $1", [value], options).');return new ve(m,new ke(g,w))}a(f,"templateFn"),f.query=(g,w,v)=>new ve(
m,{query:g,params:w??[]},v),f.unsafe=g=>new Me(g),f.transaction=async(g,w)=>{if(typeof g=="function"&&
(g=g(f)),!Array.isArray(g))throw new Error(fs);g.forEach(q=>{if(!(q instanceof ve))throw new Error(fs)});
let v=g.map(q=>q.queryData),M=g.map(q=>q.opts??{});return m(v,M,w)};async function m(g,w,v){let{fetchEndpoint:M,
fetchFunction:q}=he,de=Array.isArray(g)?{queries:g.map(G=>hs(G))}:hs(g),I=i??{},C=t??!1,ne=n??!1,ie=s,
H=o,oe=u;v!==void 0&&(v.fetchOptions!==void 0&&(I={...I,...v.fetchOptions}),v.arrayMode!==void 0&&(C=
v.arrayMode),v.fullResults!==void 0&&(ne=v.fullResults),v.isolationLevel!==void 0&&(ie=v.isolationLevel),
v.readOnly!==void 0&&(H=v.readOnly),v.deferrable!==void 0&&(oe=v.deferrable)),w!==void 0&&!Array.isArray(
w)&&w.fetchOptions!==void 0&&(I={...I,...w.fetchOptions});let ae=c;!Array.isArray(w)&&w?.authToken!==
void 0&&(ae=w.authToken);let ge=yi(e,v??{},Array.isArray(w)||!w?{}:w),{resolvedConnectionString:R,resolvedURL:$}=await mi(
r,ge,{application_name:vt}),Ae=typeof M=="function"?M($.hostname,$.port,{jwtAuth:ae!==void 0}):M,ue={
"Neon-Connection-String":R,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true"},Ie=await ju(ae);Ie&&
(ue.Authorization=`Bearer ${Ie}`),Array.isArray(g)&&(ie!==void 0&&(ue["Neon-Batch-Isolation-Level"]=
ie),H!==void 0&&(ue["Neon-Batch-Read-Only"]=String(H)),oe!==void 0&&(ue["Neon-Batch-Deferrable"]=String(
oe))),l||he.disableWarningInBrowsers||gt();let ce;try{ce=await(q??fetch)(Ae,{method:"POST",body:JSON.
stringify(de),headers:ue,...I})}catch(G){let N=new Q(`Error connecting to database: ${G}`);throw N.sourceError=
G,N}if(ce.ok){let G=await ce.json();if(Array.isArray(g)){let N=G.results;if(!Array.isArray(N))throw new Q(
"Neon internal error: unexpected result format");return N.map((we,J)=>{let se=w[J]??{},Qt=se.arrayMode??
C,Po=se.fullResults??ne;return ps(we,{arrayMode:Qt,fullResults:Po,types:se.types})})}else{let N=w??{},
we=N.arrayMode??C,J=N.fullResults??ne;return ps(G,{arrayMode:we,fullResults:J,types:N.types})}}else{
let{status:G}=ce;if(G===400){let N=await ce.json(),we=new Q(N.message);for(let J of er)we[J]=N[J]??void 0;
throw we}else{let N=await ce.text();throw new Q(`Server error (HTTP status ${G}): ${N}`)}}}return a(
m,"execute"),f}a(mr,"neon");function ps(r,{arrayMode:e,fullResults:t,types:n}){let i=new ds.default(
n),s=r.fields.map(c=>c.name),o=r.fields.map(c=>i.getTypeParser(c.dataTypeID)),u=e===!0?r.rows.map(c=>c.
map((l,f)=>l===null?null:o[f](l))):r.rows.map(c=>Object.fromEntries(c.map((l,f)=>[s[f],l===null?null:
o[f](l)])));return t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r._parsers=o,r._types=i,r):u}a(ps,"p\
rocessQueryResult");async function ju(r){if(typeof r=="string")return r;if(typeof r=="function")try{
return await Promise.resolve(r())}catch(e){let t=new Q("Error getting auth token.");throw e instanceof
Error&&(t=new Q(`Error getting auth token: ${e.message}`)),t}}a(ju,"getAuthToken");h();var Co=be(ut());h();var Ao=be(ut());var qn=class qn extends Ao.Client{constructor(t){let n=typeof t=="string"?{connectionString:t}:{...t,
...t&&"password"in t?{password:t.password}:{}};super({fallback_application_name:vt,...n});E(this,"co\
nfig",t)}get neonConfig(){return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("SSL is enabled for b\
oth Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the We\
bSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. I\
t may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let i=typeof this.config!="string"&&this.config?.host!==void 0||typeof this.config!="string"&&
this.config?.connectionString!==void 0||y.env.PGHOST!==void 0,s=y.env.USER??y.env.USERNAME;if(!i&&this.
host==="localhost"&&this.user===s&&this.database===s&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (host: localhost, user\
: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intende\
d to connect with these parameters, please set the host to 'localhost' explicitly.`);let o=super.connect(
t),u=n.pipelineTLS&&this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let l=this.
connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners("authenticati\
onCleartextPassword"),l.removeAllListeners("readyForQuery"),l.once("readyForQuery",()=>l.on("readyFo\
rQuery",this._handleReadyForQuery.bind(this)));let f=this.password,m=Promise.resolve(typeof f=="func\
tion"?f():f),g=this.ssl?"sslconnect":"connect";l.on(g,()=>{this.neonConfig.disableWarningInBrowsers||
gt(),m.then(w=>{this.password=w,this._handleAuthCleartextPassword(),this._handleReadyForQuery()})})}
return o}async _handleAuthSASLContinue(t){if(typeof crypto>"u"||crypto.subtle===void 0||crypto.subtle.
importKey===void 0)throw new Error("Cannot use SASL auth when `crypto.subtle` is not defined");let n=crypto.
subtle,i=this.saslSession,s=this.password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="\
string"||typeof o!="string")throw new Error("SASL: protocol error");let u=Object.fromEntries(o.split(
",").map(J=>{if(!/^.=/.test(J))throw new Error("SASL: Invalid attribute pair entry");let se=J[0],Qt=J.
substring(2);return[se,Qt]})),c=u.r,l=u.s,f=u.i;if(!c||!/^[!-+--~]+$/.test(c))throw new Error("SASL:\
 SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");if(!f||!/^[1-9][0-9]*$/.
test(f))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");if(!c.startsWith(
i.clientNonce))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with c\
lient nonce");if(c.length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: \
server nonce is too short");let m=parseInt(f,10),g=d.from(l,"base64"),w=new TextEncoder,v=w.encode(s),
M=await n.importKey("raw",v,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),q=new Uint8Array(await n.
sign("HMAC",M,d.concat([g,d.from([0,0,0,1])]))),de=q;for(var I=0;I<m-1;I++)q=new Uint8Array(await n.
sign("HMAC",M,q)),de=d.from(de.map((J,se)=>de[se]^q[se]));let C=de,ne=await n.importKey("raw",C,{name:"\
HMAC",hash:{name:"SHA-256"}},!1,["sign"]),ie=new Uint8Array(await n.sign("HMAC",ne,w.encode("Client \
Key"))),H=await n.digest("SHA-256",ie),oe="n=*,r="+i.clientNonce,ae="r="+c+",s="+l+",i="+m,ge="c=biw\
s,r="+c,R=oe+","+ae+","+ge,$=await n.importKey("raw",H,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);
var Ae=new Uint8Array(await n.sign("HMAC",$,w.encode(R))),ue=d.from(ie.map((J,se)=>ie[se]^Ae[se])),Ie=ue.
toString("base64");let ce=await n.importKey("raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),
G=await n.sign("HMAC",ce,w.encode("Server Key")),N=await n.importKey("raw",G,{name:"HMAC",hash:{name:"\
SHA-256"}},!1,["sign"]);var we=d.from(await n.sign("HMAC",N,w.encode(R)));i.message="SASLResponse",i.
serverSignature=we.toString("base64"),i.response=ge+",p="+Ie,this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}};a(qn,"NeonClient");var $e=qn;Ke();var _o=be(Lt());function jl(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),
s=new r(function(o,u){n=o,t=u});return{callback:i,result:s}}a(jl,"promisify");var Qn=class Qn extends Co.Pool{constructor(){
super(...arguments);E(this,"Client",$e);E(this,"hasFetchUnsupportedListeners",!1);E(this,"addListene\
r",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!he.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")return super.query(
t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=jl(this.Promise,i);i=s.callback;try{let o=new _o.default(
this.options),u=encodeURIComponent,c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}\
/${c(o.database)}`,f=typeof t=="string"?t:t.text,m=n??t.values??[];mr(l,{fullResults:!0,arrayMode:t.
rowMode==="array"}).query(f,m,{types:t.types??this.options?.types}).then(w=>i(void 0,w)).catch(w=>i(
w))}catch(o){i(o)}return s.result}};a(Qn,"NeonPool");var qt=Qn;Ke();var pe=be(ut());h();var To=be(Lr());function Hl(r){return Object.entries(r).reduce((t,[n,i])=>(i!=null&&(t[n]=i),t),Object.create(null))}
a(Hl,"toConnectionOptions");function $l(r){return Object.entries(r).reduce((t,[n,i])=>{if(n==="ssl"){
let s=i;typeof s=="boolean"&&(t[n]=s),typeof s=="object"&&(t[n]=Hl(s))}else if(i!=null)if(n==="port"){
if(i!==""){let s=parseInt(i,10);if(isNaN(s))throw new Error(`Invalid ${n}: ${i}`);t[n]=s}}else t[n]=
i;return t},Object.create(null))}a($l,"toClientConfig");function Io(r){return $l((0,To.parse)(r))}a(
Io,"parseIntoClientConfig");var Gl="js";
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
