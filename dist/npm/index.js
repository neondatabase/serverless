"use strict";var ao=Object.create;var Me=Object.defineProperty;var oo=Object.getOwnPropertyDescriptor;var uo=Object.getOwnPropertyNames;var co=Object.getPrototypeOf,ho=Object.prototype.hasOwnProperty;var lo=(r,e,t)=>e in r?Me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var o=(r,e)=>Me(r,"name",{value:e,configurable:!0});var ie=(r,e)=>()=>(r&&(e=r(r=0)),e);var T=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ye=(r,e)=>{for(var t in e)
Me(r,t,{get:e[t],enumerable:!0})},fi=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of uo(e))!ho.call(r,i)&&i!==t&&Me(r,i,{get:()=>e[i],enumerable:!(n=
oo(e,i))||n.enumerable});return r};var et=(r,e,t)=>(t=r!=null?ao(co(r)):{},fi(e||!r||!r.__esModule?Me(t,"default",{
value:r,enumerable:!0}):t,r)),Z=r=>fi(Me({},"__esModule",{value:!0}),r);var g=(r,e,t)=>(lo(r,typeof e!="symbol"?e+"":e,t),t);var yi=T(Tt=>{"use strict";p();Tt.byteLength=po;Tt.toByteArray=wo;Tt.fromByteArray=
So;var be=[],we=[],fo=typeof Uint8Array<"u"?Uint8Array:Array,ir="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Be=0,di=ir.length;Be<di;++Be)
be[Be]=ir[Be],we[ir.charCodeAt(Be)]=Be;var Be,di;we["-".charCodeAt(0)]=62;we["_".
charCodeAt(0)]=63;function pi(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o(pi,"getLens");function po(r){var e=pi(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(po,"byteLength");function yo(r,e,t){return(e+t)*3/4-t}o(yo,"_byteLeng\
th");function wo(r){var e,t=pi(r),n=t[0],i=t[1],s=new fo(yo(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=we[r.charCodeAt(c)]<<18|we[r.charCodeAt(c+1)]<<12|we[r.
charCodeAt(c+2)]<<6|we[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=we[r.charCodeAt(c)]<<2|we[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=we[r.charCodeAt(c)]<<10|we[r.charCodeAt(c+1)]<<4|we[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o(wo,"toByteArray");function mo(r){return be[r>>
18&63]+be[r>>12&63]+be[r>>6&63]+be[r&63]}o(mo,"tripletToBase64");function go(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(mo(n));return i.join("")}o(go,"encodeChunk");function So(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(go(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(be[e>>2]+be[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
be[e>>10]+be[e>>4&63]+be[e<<2&63]+"=")),i.join("")}o(So,"fromByteArray")});var wi=T(sr=>{p();sr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,h=c>>
1,l=-7,f=t?i-1:0,m=t?-1:1,b=r[e+f];for(f+=m,s=b&(1<<-l)-1,b>>=-l,l+=u;l>0;s=s*256+
r[e+f],f+=m,l-=8);for(a=s&(1<<-l)-1,s>>=-l,l+=n;l>0;a=a*256+r[e+f],f+=m,l-=8);if(s===
0)s=1-h;else{if(s===c)return a?NaN:(b?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-h}return(b?
-1:1)*a*Math.pow(2,s-n)};sr.write=function(r,e,t,n,i,s){var a,u,c,h=s*8-i-1,l=(1<<
h)-1,f=l>>1,m=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:s-1,_=n?1:-1,L=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=l):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=m/c:e+=
m*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=l?(u=0,a=l):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+b]=u&255,b+=_,u/=256,
i-=8);for(a=a<<i|u,h+=i;h>0;r[t+b]=a&255,b+=_,a/=256,h-=8);r[t+b-_]|=L*128}});var Ri=T(qe=>{"use strict";p();var ar=yi(),Ne=wi(),mi=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;qe.Buffer=
d;qe.SlowBuffer=_o;qe.INSPECT_MAX_BYTES=50;var Bt=2147483647;qe.kMaxLength=Bt;d.
TYPED_ARRAY_SUPPORT=bo();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function bo(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(bo,"typedArraySupport");Object.defineProperty(d.prototype,
"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}});
Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(
this))return this.byteOffset}});function Ee(r){if(r>Bt)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,d.prototype),e}o(Ee,"createBuffer");function d(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return hr(r)}return xi(r,e,t)}o(d,"Buf\
fer");d.poolSize=8192;function xi(r,e,t){if(typeof r=="string")return Ao(r,e);if(ArrayBuffer.
isView(r))return vo(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(xe(r,ArrayBuffer)||r&&xe(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(xe(r,SharedArrayBuffer)||r&&xe(r.buffer,SharedArrayBuffer)))return ur(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return d.from(n,e,t);let i=Eo(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
xi,"from");d.from=function(r,e,t){return xi(r,e,t)};Object.setPrototypeOf(d.prototype,
Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Ai(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(Ai,"assertSize");function xo(r,e,t){
return Ai(r),r<=0?Ee(r):e!==void 0?typeof t=="string"?Ee(r).fill(e,t):Ee(r).fill(
e):Ee(r)}o(xo,"alloc");d.alloc=function(r,e,t){return xo(r,e,t)};function hr(r){
return Ai(r),Ee(r<0?0:lr(r)|0)}o(hr,"allocUnsafe");d.allocUnsafe=function(r){return hr(
r)};d.allocUnsafeSlow=function(r){return hr(r)};function Ao(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=vi(r,e)|0,n=Ee(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(Ao,"fromString");function or(r){let e=r.length<0?0:lr(r.length)|0,t=Ee(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(or,"fromArrayLike");function vo(r){if(xe(r,Uint8Array)){
let e=new Uint8Array(r);return ur(e.buffer,e.byteOffset,e.byteLength)}return or(
r)}o(vo,"fromArrayView");function ur(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(ur,"fromArrayBuffer");function Eo(r){if(d.isBuffer(r)){let e=lr(
r.length)|0,t=Ee(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||dr(r.length)?Ee(0):or(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return or(r.data)}o(Eo,"fromObject");function lr(r){if(r>=
Bt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Bt.toString(16)+" bytes");return r|0}o(lr,"checked");function _o(r){return+r!=r&&
(r=0),d.alloc(+r)}o(_o,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==d.prototype},"isBuffer");d.compare=o(function(e,t){if(xe(e,Uint8Array)&&
(e=d.from(e,e.offset,e.byteLength)),xe(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),
!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");d.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");d.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(xe(a,Uint8Array))s+a.length>i.length?(d.isBuffer(
a)||(a=d.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(d.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function vi(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||xe(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return cr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Pi(r).length;default:if(i)return n?-1:cr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(vi,"byteLength");d.byteLength=vi;function Uo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return ko(
this,e,t);case"utf8":case"utf-8":return _i(this,e,t);case"ascii":return Fo(this,
e,t);case"latin1":case"binary":return Mo(this,e,t);case"base64":return Po(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return No(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
Uo,"slowToString");d.prototype._isBuffer=!0;function Pe(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(Pe,"swap");d.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Pe(this,t,t+1);return this},"swap16");d.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Pe(this,t,t+3),Pe(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Pe(this,t,t+7),
Pe(this,t+1,t+6),Pe(this,t+2,t+5),Pe(this,t+3,t+4);return this},"swap64");d.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?_i(
this,0,e):Uo.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=qe.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");mi&&(d.prototype[mi]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(xe(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),h=this.slice(i,s),l=e.slice(t,n);for(let f=0;f<c;++f)
if(h[f]!==l[f]){a=h[f],u=l[f];break}return a<u?-1:u<a?1:0},"compare");function Ei(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,dr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:gi(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):gi(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Ei,"bid\
irectionalIndexOf");function gi(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(l,f){
return s===1?l[f]:l.readUInt16BE(f*s)}o(c,"read");let h;if(i){let l=-1;for(h=t;h<
a;h++)if(c(r,h)===c(e,l===-1?0:h-l)){if(l===-1&&(l=h),h-l+1===u)return l*s}else l!==
-1&&(h-=h-l),l=-1}else for(t+u>a&&(t=a-u),h=t;h>=0;h--){let l=!0;for(let f=0;f<u;f++)
if(c(r,h+f)!==c(e,f)){l=!1;break}if(l)return h}return-1}o(gi,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return Ei(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return Ei(this,e,t,n,!1)},"lastIndexOf");function Co(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(dr(u))
return a;r[t+a]=u}return a}o(Co,"hexWrite");function Io(r,e,t,n){return Pt(cr(e,
r.length-t),r,t,n)}o(Io,"utf8Write");function Lo(r,e,t,n){return Pt(Qo(e),r,t,n)}
o(Lo,"asciiWrite");function To(r,e,t,n){return Pt(Pi(e),r,t,n)}o(To,"base64Write");
function Bo(r,e,t,n){return Pt(Ho(e,r.length-t),r,t,n)}o(Bo,"ucs2Write");d.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return Co(this,e,t,n);case"utf8":case"utf-8":return Io(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Lo(this,e,t,n);case"base64":return To(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bo(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");d.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function Po(r,e,t){return e===0&&t===r.
length?ar.fromByteArray(r):ar.fromByteArray(r.slice(e,t))}o(Po,"base64Slice");function _i(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,h,l,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],h=r[i+
2],(c&192)===128&&(h&192)===128&&(f=(s&15)<<12|(c&63)<<6|h&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],h=r[i+2],l=r[i+3],(c&192)===128&&(h&192)===
128&&(l&192)===128&&(f=(s&15)<<18|(c&63)<<12|(h&63)<<6|l&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return Ro(n)}o(_i,"utf8Slice");var Si=4096;function Ro(r){
let e=r.length;if(e<=Si)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Si));return t}o(Ro,"d\
ecodeCodePointsArray");function Fo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(Fo,"asciiSlice");function Mo(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(Mo,"latin1Slice");function ko(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=jo[r[s]];return i}o(ko,"he\
xSlice");function No(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(No,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function ee(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(ee,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||ee(e,t,this.length);
let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");
d.prototype.readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,
n||ee(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*
s;return i},"readUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){
return e=e>>>0,t||ee(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=
d.prototype.readUInt16LE=o(function(e,t){return e=e>>>0,t||ee(e,2,this.length),this[e]|
this[e+1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=
o(function(e,t){return e=e>>>0,t||ee(e,2,this.length),this[e]<<8|this[e+1]},"rea\
dUInt16BE");d.prototype.readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=
e>>>0,t||ee(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},
"readUInt32LE");d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){
return e=e>>>0,t||ee(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])},"readUInt32BE");d.prototype.readBigUInt64LE=Ue(o(function(e){e=e>>>
0,De(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&tt(e,this.length-
8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*
2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigU\
Int64LE"));d.prototype.readBigUInt64BE=Ue(o(function(e){e=e>>>0,De(e,"offset");let t=this[e],
n=this[e+7];(t===void 0||n===void 0)&&tt(e,this.length-8);let i=t*2**24+this[++e]*
2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+
n;return(BigInt(i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=
o(function(e,t,n){e=e>>>0,t=t>>>0,n||ee(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<
t&&(s*=256);)i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readInt\
LE");d.prototype.readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||ee(e,t,this.length);
let i=t,s=1,a=this[e+--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=
s&&(a-=Math.pow(2,8*t)),a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=
e>>>0,t||ee(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");
d.prototype.readInt16LE=o(function(e,t){e=e>>>0,t||ee(e,2,this.length);let n=this[e]|
this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=
o(function(e,t){e=e>>>0,t||ee(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&
32768?n|4294901760:n},"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=
e>>>0,t||ee(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"\
readInt32LE");d.prototype.readInt32BE=o(function(e,t){return e=e>>>0,t||ee(e,4,this.
length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.
readBigInt64LE=Ue(o(function(e){e=e>>>0,De(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&tt(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+
6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24)},"readBigInt64LE"));d.prototype.readBigInt64BE=Ue(o(function(e){
e=e>>>0,De(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&tt(e,
this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(
i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readB\
igInt64BE"));d.prototype.readFloatLE=o(function(e,t){return e=e>>>0,t||ee(e,4,this.
length),Ne.read(this,e,!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){
return e=e>>>0,t||ee(e,4,this.length),Ne.read(this,e,!1,23,4)},"readFloatBE");d.
prototype.readDoubleLE=o(function(e,t){return e=e>>>0,t||ee(e,8,this.length),Ne.
read(this,e,!0,52,8)},"readDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=
e>>>0,t||ee(e,8,this.length),Ne.read(this,e,!1,52,8)},"readDoubleBE");function le(r,e,t,n,i,s){
if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instan\
ce');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+
n>r.length)throw new RangeError("Index out of range")}o(le,"checkInt");d.prototype.
writeUintLE=d.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,
!i){let u=Math.pow(2,8*n)-1;le(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<
n&&(s*=256);)this[t+a]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=
d.prototype.writeUIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;le(this,e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)
this[t+s]=e/a&255;return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.
writeUInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||le(this,e,t,1,255,0),this[t]=
e&255,t+1},"writeUInt8");d.prototype.writeUint16LE=d.prototype.writeUInt16LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||le(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},
"writeUInt16LE");d.prototype.writeUint16BE=d.prototype.writeUInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||le(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},
"writeUInt16BE");d.prototype.writeUint32LE=d.prototype.writeUInt32LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||le(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>
16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=
d.prototype.writeUInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||le(this,e,t,4,
4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+
4},"writeUInt32BE");function Ui(r,e,t,n,i){Bi(e,n,i,r,t,7);let s=Number(e&BigInt(
4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(
e>>BigInt(32)&BigInt(4294967295));return r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=
a,a=a>>8,r[t++]=a,t}o(Ui,"wrtBigUInt64LE");function Ci(r,e,t,n,i){Bi(e,n,i,r,t,7);
let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>
8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=a,a=a>>8,
r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(Ci,"wrtBigUInt64BE");d.prototype.writeBigUInt64LE=
Ue(o(function(e,t=0){return Ui(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},
"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=Ue(o(function(e,t=0){return Ci(
this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));d.prototype.
writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);le(this,
e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)e<0&&u===0&&this[t+
s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntLE");d.prototype.writeIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);le(this,e,t,n,c-
1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&(a*=256);)e<0&&u===0&&this[t+
s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntBE");d.prototype.writeInt8=
o(function(e,t,n){return e=+e,t=t>>>0,n||le(this,e,t,1,127,-128),e<0&&(e=255+e+1),
this[t]=e&255,t+1},"writeInt8");d.prototype.writeInt16LE=o(function(e,t,n){return e=
+e,t=t>>>0,n||le(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"wr\
iteInt16LE");d.prototype.writeInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||le(
this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeInt16BE");d.prototype.
writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||le(this,e,t,4,2147483647,-2147483648),
this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32\
LE");d.prototype.writeInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||le(this,e,
t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>
16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeInt32BE");d.prototype.writeBigInt64LE=
Ue(o(function(e,t=0){return Ui(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x\
7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.writeBigInt64BE=Ue(o(function(e,t=0){
return Ci(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},
"writeBigInt64BE"));function Ii(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError(
"Index out of range");if(t<0)throw new RangeError("Index out of range")}o(Ii,"ch\
eckIEEE754");function Li(r,e,t,n,i){return e=+e,t=t>>>0,i||Ii(r,e,t,4,34028234663852886e22,
-34028234663852886e22),Ne.write(r,e,t,n,23,4),t+4}o(Li,"writeFloat");d.prototype.
writeFloatLE=o(function(e,t,n){return Li(this,e,t,!0,n)},"writeFloatLE");d.prototype.
writeFloatBE=o(function(e,t,n){return Li(this,e,t,!1,n)},"writeFloatBE");function Ti(r,e,t,n,i){
return e=+e,t=t>>>0,i||Ii(r,e,t,8,17976931348623157e292,-17976931348623157e292),
Ne.write(r,e,t,n,52,8),t+8}o(Ti,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){
return Ti(this,e,t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){
return Ti(this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=o(function(e,t,n,i){
if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),
!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetSta\
rt out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of ran\
ge");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.
length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===e&&typeof Uint8Array.
prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");d.prototype.fill=o(function(e,t,n,i){if(typeof e==
"string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,
n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must\
 be a string");if(typeof i=="string"&&!d.isEncoding(i))throw new TypeError("Unkn\
own encoding: "+i);if(e.length===1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i===
"latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(
e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range inde\
x");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e==
"number")for(s=t;s<n;++s)this[s]=e;else{let a=d.isBuffer(e)?e:d.from(e,i),u=a.length;
if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');
for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this},"fill");var ke={};function fr(r,e,t){
var n;ke[r]=(n=class extends t{constructor(){super(),Object.defineProperty(this,
"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=
`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){
Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){
return`${this.name} [${r}]: ${this.message}`}},o(n,"NodeError"),n)}o(fr,"E");fr(
"ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bound\
s`:"Attempt to access memory outside buffer bounds"},RangeError);fr("ERR_INVALID\
_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Rece\
ived type ${typeof e}`},TypeError);fr("ERR_OUT_OF_RANGE",function(r,e,t){let n=`\
The value of "${r}" is out of range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>
2**32?i=bi(String(t)):typeof t=="bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||
t<-(BigInt(2)**BigInt(32)))&&(i=bi(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,
n},RangeError);function bi(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=
3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}o(bi,"addNumericalSepar\
ator");function Do(r,e,t){De(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&tt(e,
r.length-(t+1))}o(Do,"checkBounds");function Bi(r,e,t,n,i,s){if(r>t||r<e){let a=typeof e==
"bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${a} and < 2${a} ** ${(s+
1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:u=`>=\
 ${e}${a} and <= ${t}${a}`,new ke.ERR_OUT_OF_RANGE("value",u,r)}Do(n,i,s)}o(Bi,"\
checkIntBI");function De(r,e){if(typeof r!="number")throw new ke.ERR_INVALID_ARG_TYPE(
e,"number",r)}o(De,"validateNumber");function tt(r,e,t){throw Math.floor(r)!==r?
(De(r,t),new ke.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new ke.ERR_BUFFER_OUT_OF_BOUNDS:
new ke.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}o(tt,"boundsErr\
or");var qo=/[^+/0-9A-Za-z-_]/g;function Oo(r){if(r=r.split("=")[0],r=r.trim().replace(
qo,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}o(Oo,"base64cle\
an");function cr(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let a=0;a<n;++a){
if(t=r.charCodeAt(a),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,
191,189);continue}else if(a+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}
if(t<56320){(e-=3)>-1&&s.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+
65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;
s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<
65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){
if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error(
"Invalid code point")}return s}o(cr,"utf8ToBytes");function Qo(r){let e=[];for(let t=0;t<
r.length;++t)e.push(r.charCodeAt(t)&255);return e}o(Qo,"asciiToBytes");function Ho(r,e){
let t,n,i,s=[];for(let a=0;a<r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,
i=t%256,s.push(i),s.push(n);return s}o(Ho,"utf16leToBytes");function Pi(r){return ar.
toByteArray(Oo(r))}o(Pi,"base64ToBytes");function Pt(r,e,t,n){let i;for(i=0;i<n&&
!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}o(Pt,"blitBuffer");function xe(r,e){
return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.
constructor.name===e.name}o(xe,"isInstance");function dr(r){return r!==r}o(dr,"n\
umberIsNaN");var jo=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<
16;++t){let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function Ue(r){
return typeof BigInt>"u"?Ko:r}o(Ue,"defineBigIntMethod");function Ko(){throw new Error(
"BigInt not supported")}o(Ko,"BufferBigIntNotDefined")});var A,E,U,S,y,w,p=ie(()=>{"use strict";A=globalThis,E=globalThis.setImmediate??(r=>setTimeout(
r,0)),U=globalThis.clearImmediate??(r=>clearTimeout(r)),S=globalThis.crypto??{};
S.subtle??(S.subtle={});y=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Ri().Buffer,w=globalThis.process??
{};w.env??(w.env={});try{w.nextTick(()=>{})}catch{let e=Promise.resolve();w.nextTick=
e.then.bind(e)}});function rt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,h=0,l=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],m=o((I,x)=>I>>>x|I<<32-x,
"rrot"),b=new Uint32Array(64),_=new Uint8Array(64),L=o(()=>{for(let R=0,j=0;R<16;R++,
j+=4)b[R]=_[j]<<24|_[j+1]<<16|_[j+2]<<8|_[j+3];for(let R=16;R<64;R++){let j=m(b[R-
15],7)^m(b[R-15],18)^b[R-15]>>>3,K=m(b[R-2],17)^m(b[R-2],19)^b[R-2]>>>10;b[R]=b[R-
16]+j+b[R-7]+K|0}let I=e,x=t,N=n,V=i,k=s,re=a,D=u,he=c;for(let R=0;R<64;R++){let j=m(
k,6)^m(k,11)^m(k,25),K=k&re^~k&D,$=he+j+K+f[R]+b[R]|0,G=m(I,2)^m(I,13)^m(I,22),Y=I&
x^I&N^x&N,q=G+Y|0;he=D,D=re,re=k,k=V+$|0,V=N,N=x,x=I,I=$+q|0}e=e+I|0,t=t+x|0,n=n+
N|0,i=i+V|0,s=s+k|0,a=a+re|0,u=u+D|0,c=c+he|0,l=0},"process"),v=o(I=>{typeof I==
"string"&&(I=new TextEncoder().encode(I));for(let x=0;x<I.length;x++)_[l++]=I[x],
l===64&&L();h+=I.length},"add"),P=o(()=>{if(_[l++]=128,l==64&&L(),l+8>64){for(;l<
64;)_[l++]=0;L()}for(;l<58;)_[l++]=0;let I=h*8;_[l++]=I/1099511627776&255,_[l++]=
I/4294967296&255,_[l++]=I>>>24,_[l++]=I>>>16&255,_[l++]=I>>>8&255,_[l++]=I&255,L();
let x=new Uint8Array(32);return x[0]=e>>>24,x[1]=e>>>16&255,x[2]=e>>>8&255,x[3]=
e&255,x[4]=t>>>24,x[5]=t>>>16&255,x[6]=t>>>8&255,x[7]=t&255,x[8]=n>>>24,x[9]=n>>>
16&255,x[10]=n>>>8&255,x[11]=n&255,x[12]=i>>>24,x[13]=i>>>16&255,x[14]=i>>>8&255,
x[15]=i&255,x[16]=s>>>24,x[17]=s>>>16&255,x[18]=s>>>8&255,x[19]=s&255,x[20]=a>>>
24,x[21]=a>>>16&255,x[22]=a>>>8&255,x[23]=a&255,x[24]=u>>>24,x[25]=u>>>16&255,x[26]=
u>>>8&255,x[27]=u&255,x[28]=c>>>24,x[29]=c>>>16&255,x[30]=c>>>8&255,x[31]=c&255,
x},"digest");return r===void 0?{add:v,digest:P}:(v(r),P())}var Mi=ie(()=>{"use s\
trict";p();o(rt,"sha256")});var J,nt,ki=ie(()=>{"use strict";p();J=class J{constructor(){g(this,"_dataLength",
0);g(this,"_bufferLength",0);g(this,"_state",new Int32Array(4));g(this,"_buffer",
new ArrayBuffer(68));g(this,"_buffer8");g(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=J.
hexChars,n=J.hexOut,i,s,a,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],a=0;a<8;a+=2)n[s+1+
a]=t.charAt(i&15),i>>>=4,n[s+0+a]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],i=e[1],s=e[2],a=e[3];n+=(i&s|~i&a)+t[0]-680876936|0,n=(n<<7|n>>>25)+i|
0,a+=(n&i|~n&s)+t[1]-389564586|0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[2]+606105819|
0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&
s|~i&a)+t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,a+=(n&i|~n&s)+t[5]+1200080426|0,a=(a<<
12|a>>>20)+n|0,s+=(a&n|~a&i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+
t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&a)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+i|0,a+=(n&i|~n&s)+t[9]-1958414417|0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[10]-
42063|0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|
0,n+=(i&s|~i&a)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,a+=(n&i|~n&s)+t[13]-40341101|
0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+a|0,i+=
(s&a|~s&n)+t[15]+1236535329|0,i=(i<<22|i>>>10)+s|0,n+=(i&a|s&~a)+t[1]-165796510|
0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&~s)+t[6]-1069501632|0,a=(a<<9|a>>>23)+n|0,s+=(a&
i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+a|0,i+=(s&n|a&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&
~s)+t[10]+38016083|0,a=(a<<9|a>>>23)+n|0,s+=(a&i|n&~i)+t[15]-660478335|0,s=(s<<14|
s>>>18)+a|0,i+=(s&n|a&~n)+t[4]-405537848|0,i=(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[9]+
568446438|0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&~s)+t[14]-1019803690|0,a=(a<<9|a>>>23)+
n|0,s+=(a&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+a|0,i+=(s&n|a&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,a+=(n&
s|i&~s)+t[2]-51403784|0,a=(a<<9|a>>>23)+n|0,s+=(a&i|n&~i)+t[7]+1735328473|0,s=(s<<
14|s>>>18)+a|0,i+=(s&n|a&~n)+t[12]-1926607734|0,i=(i<<20|i>>>12)+s|0,n+=(i^s^a)+
t[5]-378558|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[8]-2022574463|0,a=(a<<11|a>>>21)+
n|0,s+=(a^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+t[14]-35309556|
0,i=(i<<23|i>>>9)+s|0,n+=(i^s^a)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+
t[4]+1272893353|0,a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+t[7]-155497632|0,s=(s<<16|s>>>
16)+a|0,i+=(s^a^n)+t[10]-1094730640|0,i=(i<<23|i>>>9)+s|0,n+=(i^s^a)+t[13]+681279174|
0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[0]-358537222|0,a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+
t[3]-722521979|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^a)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[12]-421815835|0,
a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+
t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,n+=(s^(i|~a))+t[0]-198630844|0,n=(n<<6|n>>>
26)+i|0,a+=(i^(n|~s))+t[7]+1126891415|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[14]-
1416354905|0,s=(s<<15|s>>>17)+a|0,i+=(a^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>11)+
s|0,n+=(s^(i|~a))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[3]-1894986606|
0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+a|0,i+=(a^
(s|~n))+t[1]-2054922799|0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~a))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[15]-30611744|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+
t[6]-1560198380|0,s=(s<<15|s>>>17)+a|0,i+=(a^(s|~n))+t[13]+1309151649|0,i=(i<<21|
i>>>11)+s|0,n+=(s^(i|~a))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[11]-
1120210379|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+
a|0,i+=(a^(s|~n))+t[9]-343485551|0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|
0,e[2]=s+e[2]|0,e[3]=a+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(J.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,a;for(a=0;a<e.length;a+=1){if(s=e.charCodeAt(a),
s<128)t[i++]=s;else if(s<2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||
s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*
1024+(e.charCodeAt(++a)-56320)+65536,s>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,
t[i++]=s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,J._md5cycle(this.
_state,n),i-=64,n[0]=n[16])}return this._bufferLength=i,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-
a,64-i);s--;)t[i++]=e.charCodeAt(a++);if(i<64)break;this._dataLength+=64,J._md5cycle(
this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-
a,64-i);s--;)t[i++]=e[a++];if(i<64)break;this._dataLength+=64,J._md5cycle(this._state,
n),i=0}return this._bufferLength=i,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this.
_state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=
n[1],i[2]=n[2],i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=
t;let a=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(J.buffer32Identity.
subarray(s),s),t>55&&(J._md5cycle(this._state,i),i.set(J.buffer32Identity)),a<=4294967295)
i[14]=a;else{let u=a.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),h=parseInt(u[1],16)||0;i[14]=c,i[15]=h}return J._md5cycle(this._state,i),
e?this._state:J._hex(this._state)}};o(J,"Md5"),g(J,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),g(J,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),g(J,"hexChars","0123456789abcdef"),g(J,"hexO\
ut",[]),g(J,"onePassHasher",new J);nt=J});var pr={};ye(pr,{createHash:()=>Wo,createHmac:()=>Vo,randomBytes:()=>$o});function $o(r){
return S.getRandomValues(y.alloc(r))}function Wo(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return y.from(rt(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?nt.hashStr(e):nt.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Vo(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=rt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(rt(a),64),y.from(rt(u))}}}}}var yr=ie(()=>{p();Mi();ki();o($o,"randomBytes");
o(Wo,"createHash");o(Vo,"createHmac")});var mr=T(Ni=>{"use strict";p();Ni.parse=function(r,e){return new wr(r,e).parse()};
var Rt=class Rt{constructor(e,t){this.source=e,this.transform=t||Go,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.dimension>
1&&(n=new Rt(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(i&&this.newEntry(!0),i=!i):t.value===","&&!i?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};o(Rt,"ArrayParser");var wr=Rt;function Go(r){return r}o(Go,"identity")});var gr=T((Kl,Di)=>{p();var zo=mr();Di.exports={create:function(r,e){return{parse:function(){
return zo.parse(r,e)}}}}});var Qi=T((Wl,Oi)=>{"use strict";p();var Yo=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Jo=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Zo=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Xo=/^-?infinity$/;
Oi.exports=o(function(e){if(Xo.test(e))return Number(e.replace("i","I"));var t=Yo.
exec(e);if(!t)return eu(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=qi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),h=parseInt(t[6],10),l=t[7];
l=l?1e3*parseFloat(l):0;var f,m=tu(e);return m!=null?(f=new Date(Date.UTC(i,s,a,
u,c,h,l)),Sr(i)&&f.setUTCFullYear(i),m!==0&&f.setTime(f.getTime()-m)):(f=new Date(
i,s,a,u,c,h,l),Sr(i)&&f.setFullYear(i)),f},"parseDate");function eu(r){var e=Jo.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=qi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Sr(t)&&a.setFullYear(t),a}}o(eu,"getDate");
function tu(r){if(r.endsWith("+00"))return 0;var e=Zo.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(tu,"timeZoneOffset");function qi(r){
return-(r-1)}o(qi,"bcYearToNegativeYear");function Sr(r){return r>=0&&r<100}o(Sr,
"is0To99")});var ji=T((zl,Hi)=>{p();Hi.exports=nu;var ru=Object.prototype.hasOwnProperty;function nu(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)ru.call(t,
n)&&(r[n]=t[n])}return r}o(nu,"extend")});var Wi=T((Zl,$i)=>{"use strict";p();var iu=ji();$i.exports=Oe;function Oe(r){if(!(this instanceof
Oe))return new Oe(r);iu(this,wu(r))}o(Oe,"PostgresInterval");var su=["seconds","\
minutes","hours","days","months","years"];Oe.prototype.toPostgres=function(){var r=su.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var au={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},ou=["years","months","days"],uu=["hours","minutes","seconds"];Oe.
prototype.toISOString=Oe.prototype.toISO=function(){var r=ou.map(t,this).join(""),
e=uu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+au[n]}};var br="([+-]?\\d+)",cu=br+"\\s+years?",hu=br+"\\s+mons?",lu=br+"\
\\s+days?",fu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",du=new RegExp([
cu,hu,lu,fu].map(function(r){return"("+r+")?"}).join("\\s*")),Ki={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},pu=["hours","minutes","sec\
onds","milliseconds"];function yu(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(yu,"parseMilliseconds");function wu(r){if(!r)return{};var e=du.exec(
r),t=e[8]==="-";return Object.keys(Ki).reduce(function(n,i){var s=Ki[i],a=e[s];return!a||
(a=i==="milliseconds"?yu(a):parseInt(a,10),!a)||(t&&~pu.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(wu,"parse")});var Gi=T((tf,Vi)=>{"use strict";p();Vi.exports=o(function(e){if(/^\\x/.test(e))return new y(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new y(t,"binary")},"parseBytea")});var ts=T((sf,es)=>{p();var it=mr(),st=gr(),Ft=Qi(),Yi=Wi(),Ji=Gi();function Mt(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Mt,"allowNull");function Zi(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(Zi,"parseBool");function mu(r){return r?it.parse(r,Zi):null}o(mu,"pars\
eBoolArray");function gu(r){return parseInt(r,10)}o(gu,"parseBaseTenInt");function xr(r){
return r?it.parse(r,Mt(gu)):null}o(xr,"parseIntegerArray");function Su(r){return r?
it.parse(r,Mt(function(e){return Xi(e).trim()})):null}o(Su,"parseBigIntegerArray");
var bu=o(function(r){if(!r)return null;var e=st.create(r,function(t){return t!==
null&&(t=_r(t)),t});return e.parse()},"parsePointArray"),Ar=o(function(r){if(!r)
return null;var e=st.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),me=o(function(r){if(!r)return null;var e=st.
create(r);return e.parse()},"parseStringArray"),vr=o(function(r){if(!r)return null;
var e=st.create(r,function(t){return t!==null&&(t=Ft(t)),t});return e.parse()},"\
parseDateArray"),xu=o(function(r){if(!r)return null;var e=st.create(r,function(t){
return t!==null&&(t=Yi(t)),t});return e.parse()},"parseIntervalArray"),Au=o(function(r){
return r?it.parse(r,Mt(Ji)):null},"parseByteAArray"),Er=o(function(r){return parseInt(
r,10)},"parseInteger"),Xi=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),zi=o(function(r){return r?it.parse(r,Mt(JSON.parse)):null},
"parseJsonArray"),_r=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),vu=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=_r(e);return s.radius=parseFloat(t),s},"parseCircle"),Eu=o(function(r){r(20,
Xi),r(21,Er),r(23,Er),r(26,Er),r(700,parseFloat),r(701,parseFloat),r(16,Zi),r(1082,
Ft),r(1114,Ft),r(1184,Ft),r(600,_r),r(651,me),r(718,vu),r(1e3,mu),r(1001,Au),r(1005,
xr),r(1007,xr),r(1028,xr),r(1016,Su),r(1017,bu),r(1021,Ar),r(1022,Ar),r(1231,Ar),
r(1014,me),r(1015,me),r(1008,me),r(1009,me),r(1040,me),r(1041,me),r(1115,vr),r(1182,
vr),r(1185,vr),r(1186,Yi),r(1187,xu),r(17,Ji),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,zi),r(3807,zi),r(3907,me),r(2951,me),r(791,me),r(1183,
me),r(1270,me)},"init");es.exports={init:Eu}});var ns=T((uf,rs)=>{"use strict";p();var fe=1e6;function _u(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,h,l;{if(s=e%fe,e=e/fe>>>0,a=4294967296*s+t,t=a/fe>>>0,u=""+(a-fe*t),t===0&&e===
0)return n+u+i;for(c="",h=6-u.length,l=0;l<h;l++)c+="0";i=c+u+i}{if(s=e%fe,e=e/fe>>>
0,a=4294967296*s+t,t=a/fe>>>0,u=""+(a-fe*t),t===0&&e===0)return n+u+i;for(c="",h=
6-u.length,l=0;l<h;l++)c+="0";i=c+u+i}{if(s=e%fe,e=e/fe>>>0,a=4294967296*s+t,t=a/
fe>>>0,u=""+(a-fe*t),t===0&&e===0)return n+u+i;for(c="",h=6-u.length,l=0;l<h;l++)
c+="0";i=c+u+i}return s=e%fe,a=4294967296*s+t,u=""+a%fe,n+u+i}o(_u,"readInt8");rs.
exports=_u});var us=T((lf,os)=>{p();var Uu=ns(),Q=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(b,_,L){
return b*Math.pow(2,L)+_};var s=t>>3,a=o(function(b){return n?~b&255:b},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var h=0;t%8+e>=8&&(h=i(0,a(r[s])&
u,c));for(var l=e+t>>3,f=s+1;f<l;f++)h=i(h,a(r[f]),8);var m=(e+t)%8;return m>0&&
(h=i(h,a(r[l])>>8-m,m)),h},"parseBits"),as=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=Q(r,1),s=Q(r,t,1);if(s===0)return 0;var a=1,u=o(function(h,l,f){h===0&&(h=
1);for(var m=1;m<=f;m++)a/=2,(l&1<<f-m)>0&&(h+=a);return h},"parsePrecisionBits"),
c=Q(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),Cu=o(function(r){return Q(r,1)==1?-1*
(Q(r,15,1,!0)+1):Q(r,15,1)},"parseInt16"),is=o(function(r){return Q(r,1)==1?-1*(Q(
r,31,1,!0)+1):Q(r,31,1)},"parseInt32"),Iu=o(function(r){return as(r,23,8)},"pars\
eFloat32"),Lu=o(function(r){return as(r,52,11)},"parseFloat64"),Tu=o(function(r){
var e=Q(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,Q(r,16,16)),n=0,i=[],
s=Q(r,16),a=0;a<s;a++)n+=Q(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,Q(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ss=o(function(r,e){var t=Q(
e,1),n=Q(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),at=o(function(r){for(var e=Q(r,32),t=Q(r,32,32),
n=Q(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=Q(r,32,i),i+=32,i+=32;var u=o(function(h){
var l=Q(r,32,i);if(i+=32,l==4294967295)return null;var f;if(h==23||h==20)return f=
Q(r,l*8,i),i+=l*8,f;if(h==25)return f=r.toString(this.encoding,i>>3,(i+=l<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+h)},"parseElement"),c=o(function(h,l){
var f=[],m;if(h.length>1){var b=h.shift();for(m=0;m<b;m++)f[m]=c(h,l);h.unshift(
b)}else for(m=0;m<h[0];m++)f[m]=u(l);return f},"parse");return c(s,n)},"parseArr\
ay"),Bu=o(function(r){return r.toString("utf8")},"parseText"),Pu=o(function(r){return r===
null?null:Q(r,8)>0},"parseBool"),Ru=o(function(r){r(20,Uu),r(21,Cu),r(23,is),r(26,
is),r(1700,Tu),r(700,Iu),r(701,Lu),r(16,Pu),r(1114,ss.bind(null,!1)),r(1184,ss.bind(
null,!0)),r(1e3,at),r(1007,at),r(1016,at),r(1008,at),r(1009,at),r(25,Bu)},"init");
os.exports={init:Ru}});var hs=T((pf,cs)=>{p();cs.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var ct=T(ut=>{p();var Fu=ts(),Mu=us(),ku=gr(),Nu=hs();ut.getTypeParser=Du;ut.setTypeParser=
qu;ut.arrayParser=ku;ut.builtins=Nu;var ot={text:{},binary:{}};function ls(r){return String(
r)}o(ls,"noParse");function Du(r,e){return e=e||"text",ot[e]&&ot[e][r]||ls}o(Du,
"getTypeParser");function qu(r,e,t){typeof e=="function"&&(t=e,e="text"),ot[e][r]=
t}o(qu,"setTypeParser");Fu.init(function(r,e){ot.text[r]=e});Mu.init(function(r,e){
ot.binary[r]=e})});var ht=T((Sf,Ur)=>{"use strict";p();Ur.exports={host:"localhost",user:w.platform===
"win32"?w.env.USERNAME:w.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Qe=ct(),Ou=Qe.getTypeParser(
20,"text"),Qu=Qe.getTypeParser(1016,"text");Ur.exports.__defineSetter__("parseIn\
t8",function(r){Qe.setTypeParser(20,"text",r?Qe.getTypeParser(23,"text"):Ou),Qe.
setTypeParser(1016,"text",r?Qe.getTypeParser(1007,"text"):Qu)})});var lt=T((xf,ds)=>{"use strict";p();var Hu=(yr(),Z(pr)),ju=ht();function Ku(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Ku,"escapeElement");
function fs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+fs(r[t]):r[t]instanceof y?e+="\\\\x"+r[t].
toString("hex"):e+=Ku(kt(r[t]));return e=e+"}",e}o(fs,"arrayString");var kt=o(function(r,e){
if(r==null)return null;if(r instanceof y)return r;if(ArrayBuffer.isView(r)){var t=y.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?ju.parseInputDatesAsUTC?
Vu(r):Wu(r):Array.isArray(r)?fs(r):typeof r=="object"?$u(r,e):r.toString()},"pre\
pareValue");function $u(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),kt(r.toPostgres(kt),e)}return JSON.stringify(r)}
o($u,"prepareObject");function se(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}o(
se,"pad");function Wu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=se(t,4)+"-"+se(r.getMonth()+1,2)+"-"+se(r.getDate(),2)+"\
T"+se(r.getHours(),2)+":"+se(r.getMinutes(),2)+":"+se(r.getSeconds(),2)+"."+se(r.
getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=se(Math.floor(e/60),2)+
":"+se(e%60,2),n&&(i+=" BC"),i}o(Wu,"dateToString");function Vu(r){var e=r.getUTCFullYear(),
t=e<1;t&&(e=Math.abs(e)+1);var n=se(e,4)+"-"+se(r.getUTCMonth()+1,2)+"-"+se(r.getUTCDate(),
2)+"T"+se(r.getUTCHours(),2)+":"+se(r.getUTCMinutes(),2)+":"+se(r.getUTCSeconds(),
2)+"."+se(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}o(Vu,"dat\
eToStringUTC");function Gu(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e==
"function"?r.callback=e:r.values=e),t&&(r.callback=t),r}o(Gu,"normalizeQueryConf\
ig");var Cr=o(function(r){return Hu.createHash("md5").update(r,"utf-8").digest("\
hex")},"md5"),zu=o(function(r,e,t){var n=Cr(e+r),i=Cr(y.concat([y.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");ds.exports={prepareValue:o(function(e){return kt(
e)},"prepareValueWrapper"),normalizeQueryConfig:Gu,postgresMd5PasswordHash:zu,md5:Cr}});var Ce=T((Lf,Lr)=>{"use strict";p();var He=typeof Reflect=="object"?Reflect:null,
ys=He&&typeof He.apply=="function"?He.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Dt;He&&typeof He.ownKeys=="function"?Dt=He.ownKeys:
Object.getOwnPropertySymbols?Dt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Dt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Yu(r){console&&console.warn&&
console.warn(r)}o(Yu,"ProcessEmitWarning");var ms=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function M(){M.init.call(this)}o(M,"EventEmitter");Lr.exports=
M;Lr.exports.once=ec;M.EventEmitter=M;M.prototype._events=void 0;M.prototype._eventsCount=
0;M.prototype._maxListeners=void 0;var ws=10;function qt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(qt,"checkListener");Object.defineProperty(M,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return ws},set:function(r){if(typeof r!="\
number"||r<0||ms(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");ws=r}});M.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};M.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||ms(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function gs(r){return r._maxListeners===void 0?M.defaultMaxListeners:r._maxListeners}
o(gs,"_getMaxListeners");M.prototype.getMaxListeners=o(function(){return gs(this)},
"getMaxListeners");M.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")ys(c,this,t);else for(var h=c.
length,l=vs(c,h),n=0;n<h;++n)ys(l[n],this,t);return!0},"emit");function Ss(r,e,t,n){
var i,s,a;if(qt(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=gs(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,Yu(u)}
return r}o(Ss,"_addListener");M.prototype.addListener=o(function(e,t){return Ss(
this,e,t,!1)},"addListener");M.prototype.on=M.prototype.addListener;M.prototype.
prependListener=o(function(e,t){return Ss(this,e,t,!0)},"prependListener");function Ju(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(Ju,"onceWrapper");function bs(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=Ju.bind(n);return i.listener=t,n.wrapFn=i,i}o(bs,"\
_onceWrap");M.prototype.once=o(function(e,t){return qt(t),this.on(e,bs(this,e,t)),
this},"once");M.prototype.prependOnceListener=o(function(e,t){return qt(t),this.
prependListener(e,bs(this,e,t)),this},"prependOnceListener");M.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(qt(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():Zu(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");M.prototype.off=M.prototype.
removeListener;M.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function xs(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?Xu(i):vs(i,i.length)}o(xs,"_listeners");M.prototype.
listeners=o(function(e){return xs(this,e,!0)},"listeners");M.prototype.rawListeners=
o(function(e){return xs(this,e,!1)},"rawListeners");M.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):As.call(r,e)};M.prototype.
listenerCount=As;function As(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(As,"listenerCount");
M.prototype.eventNames=o(function(){return this._eventsCount>0?Dt(this._events):
[]},"eventNames");function vs(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(vs,"arrayClone");function Zu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(Zu,"spliceOne");function Xu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(Xu,"unwrapListeners");function ec(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Es(r,e,s,{once:!0}),e!=="error"&&tc(r,i,{once:!0})})}
o(ec,"once");function tc(r,e,t){typeof r.on=="function"&&Es(r,"error",e,t)}o(tc,
"addErrorHandlerIfEventEmitter");function Es(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Es,"eventTargetAgnosticAddListener")});var dt={};ye(dt,{default:()=>rc});var rc,pt=ie(()=>{p();rc={}});var Ls=T((Rf,Is)=>{"use strict";p();var Tr=(yr(),Z(pr));function nc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Tr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(nc,"startSession");function ic(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=oc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=y.from(n.salt,"base64"),s=hc(e,
i,n.iteration),a=je(s,"Client Key"),u=cc(a),c="n=*,r="+r.clientNonce,h="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,l="c=biws,r="+n.nonce,f=c+","+h+","+l,m=je(u,f),b=Cs(
a,m),_=b.toString("base64"),L=je(s,"Server Key"),v=je(L,f);r.message="SASLRespon\
se",r.serverSignature=v.toString("base64"),r.response=l+",p="+_}o(ic,"continueSe\
ssion");function sc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=uc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(sc,"finalizeSession");function ac(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(ac,"isPrintableC\
hars");function _s(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(_s,"isBase64");function Us(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(Us,"parseAttributePairs");function oc(r){let e=Us(
r),t=e.get("r");if(t){if(!ac(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!_s(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(oc,"parseServerFirstMe\
ssage");function uc(r){let t=Us(r).get("v");if(t){if(!_s(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(uc,"parseServerFinalMessage");function Cs(r,e){if(!y.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!y.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return y.
from(r.map((t,n)=>r[n]^e[n]))}o(Cs,"xorBuffers");function cc(r){return Tr.createHash(
"sha256").update(r).digest()}o(cc,"sha256");function je(r,e){return Tr.createHmac(
"sha256",r).update(e).digest()}o(je,"hmacSha256");function hc(r,e,t){for(var n=je(
r,y.concat([e,y.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=je(r,n),i=Cs(i,n);return i}
o(hc,"Hi");Is.exports={startSession:nc,continueSession:ic,finalizeSession:sc}});var Br={};ye(Br,{join:()=>lc});function lc(...r){return r.join("/")}var Pr=ie(()=>{
p();o(lc,"join")});var Rr={};ye(Rr,{stat:()=>fc});function fc(r,e){e(new Error("No filesystem"))}var Fr=ie(
()=>{p();o(fc,"stat")});var Mr={};ye(Mr,{default:()=>dc});var dc,kr=ie(()=>{p();dc={}});var Ts={};ye(Ts,{StringDecoder:()=>Nr});var Dr,Nr,Bs=ie(()=>{p();Dr=class Dr{constructor(e){
g(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};o(Dr,"StringDecoder");Nr=Dr});var Ms=T((jf,Fs)=>{"use strict";p();var{Transform:pc}=(kr(),Z(Mr)),{StringDecoder:yc}=(Bs(),Z(Ts)),
Ie=Symbol("last"),Ot=Symbol("decoder");function wc(r,e,t){let n;if(this.overflow){
if(n=this[Ot].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Ie]+=this[Ot].write(r),n=this[Ie].split(this.matcher);this[Ie]=
n.pop();for(let i=0;i<n.length;i++)try{Rs(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Ie].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(wc,"transform");function mc(r){
if(this[Ie]+=this[Ot].end(),this[Ie])try{Rs(this,this.mapper(this[Ie]))}catch(e){
return r(e)}r()}o(mc,"flush");function Rs(r,e){e!==void 0&&r.push(e)}o(Rs,"push");
function Ps(r){return r}o(Ps,"noop");function gc(r,e,t){switch(r=r||/\r?\n/,e=e||
Ps,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Ps)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=wc,t.flush=mc,t.readableObjectMode=!0;
let n=new pc(t);return n[Ie]="",n[Ot]=new yc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(gc,"split");Fs.exports=gc});var Ds=T((Wf,_e)=>{"use strict";p();var ks=(Pr(),Z(Br)),Sc=(kr(),Z(Mr)).Stream,bc=Ms(),
Ns=(pt(),Z(dt)),xc=5432,Qt=w.platform==="win32",yt=w.stderr,Ac=56,vc=7,Ec=61440,
_c=32768;function Uc(r){return(r&Ec)==_c}o(Uc,"isRegFile");var Ke=["host","port",
"database","user","password"],qr=Ke.length,Cc=Ke[qr-1];function Or(){var r=yt instanceof
Sc&&yt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);yt.write(Ns.format.apply(Ns,e))}}o(Or,"warn");Object.defineProperty(_e.exports,
"isWin",{get:function(){return Qt},set:function(r){Qt=r}});_e.exports.warnTo=function(r){
var e=yt;return yt=r,e};_e.exports.getFileName=function(r){var e=r||w.env,t=e.PGPASSFILE||
(Qt?ks.join(e.APPDATA||"./","postgresql","pgpass.conf"):ks.join(e.HOME||"./",".p\
gpass"));return t};_e.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(w.env,"PGPASSWORD")?!1:Qt?!0:(e=e||"<unkn>",Uc(r.mode)?r.mode&(Ac|vc)?(Or('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(Or('WARNING: password file "%s" is not a plain file',
e),!1))};var Ic=_e.exports.match=function(r,e){return Ke.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||xc)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};_e.exports.getPassword=function(r,e,t){var n,i=e.pipe(bc());function s(c){var h=Lc(
c);h&&Tc(h)&&Ic(r,h)&&(n=h[Cc],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),Or("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var Lc=_e.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(l,f,m){var b=r.substring(f,
m);Object.hasOwnProperty.call(w.env,"PGPASS_NO_DEESCAPE")||(b=b.replace(/\\([:\\])/g,
"$1")),a[Ke[l]]=b},"addToObj"),h=0;h<r.length-1;h+=1){if(e=r.charAt(h+1),t=r.charAt(
h),u=n==qr-1,u){c(n,i);break}h>=0&&e==":"&&t!=="\\"&&(c(n,i,h+1),i=h+2,n+=1)}return a=
Object.keys(a).length===qr?a:null,a},Tc=_e.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<Ke.length;t+=
1){var n=e[t],i=r[Ke[t]]||"",s=n(i);if(!s)return!1}return!0}});var Os=T((Yf,Qr)=>{"use strict";p();var zf=(Pr(),Z(Br)),qs=(Fr(),Z(Rr)),Ht=Ds();
Qr.exports=function(r,e){var t=Ht.getFileName();qs.stat(t,function(n,i){if(n||!Ht.
usePgPass(i,t))return e(void 0);var s=qs.createReadStream(t);Ht.getPassword(r,s,
e)})};Qr.exports.warnTo=Ht.warnTo});var Hr=T((Zf,Qs)=>{"use strict";p();var Bc=ct();function jt(r){this._types=r||Bc,
this.text={},this.binary={}}o(jt,"TypeOverrides");jt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
jt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};jt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Qs.exports=jt});var Hs={};ye(Hs,{default:()=>Pc});var Pc,js=ie(()=>{p();Pc={}});var $s=T((rd,Ks)=>{"use strict";p();function jr(r){if(r.charAt(0)==="/"){let u=r.
split(" ");return{host:u[0],database:u[1]}}let e={},t,n=!1;/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.
test(r)&&(r=encodeURI(r).replace(/\%25(\d\d)/g,"%$1"));try{t=new URL(r,"postgres\
://base")}catch{t=new URL(r.replace("@/","@___DUMMY___/"),"postgres://base"),n=!0}
for(let u of t.searchParams.entries())e[u[0]]=u[1];if(e.user=e.user||decodeURIComponent(
t.username),e.password=e.password||decodeURIComponent(t.password),e.port=t.port,
t.protocol=="socket:")return e.host=decodeURI(t.pathname),e.database=t.searchParams.
get("db"),e.client_encoding=t.searchParams.get("encoding"),e;let i=n?"":t.hostname;
e.host?i&&(t.pathname=i+t.pathname):e.host=decodeURIComponent(i);let s=t.pathname.
slice(1)||null;e.database=s?decodeURI(s):null,(e.ssl==="true"||e.ssl==="1")&&(e.
ssl=!0),e.ssl==="0"&&(e.ssl=!1),(e.sslcert||e.sslkey||e.sslrootcert||e.sslmode)&&
(e.ssl={});let a=e.sslcert||e.sslkey||e.sslrootcert?(Fr(),Z(Rr)):null;switch(e.sslcert&&
(e.ssl.cert=a.readFileSync(e.sslcert).toString()),e.sslkey&&(e.ssl.key=a.readFileSync(
e.sslkey).toString()),e.sslrootcert&&(e.ssl.ca=a.readFileSync(e.sslrootcert).toString()),
e.sslmode){case"disable":{e.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{e.ssl.rejectUnauthorized=!1;break}}
return e}o(jr,"parse");Ks.exports=jr;jr.parse=jr});var Kt=T((sd,Gs)=>{"use strict";p();var Rc=(js(),Z(Hs)),Vs=ht(),Ws=$s().parse,ce=o(
function(r,e,t){return t===void 0?t=w.env["PG"+r.toUpperCase()]:t===!1||(t=w.env[t]),
e[r]||t||Vs[r]},"val"),Fc=o(function(){switch(w.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Vs.ssl},"readSSLConfigFromEnvironment"),$e=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),ge=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+$e(n))},"ad\
d"),$r=class $r{constructor(e){e=typeof e=="string"?Ws(e):e||{},e.connectionString&&
(e=Object.assign({},e,Ws(e.connectionString))),this.user=ce("user",e),this.database=
ce("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
ce("port",e),10),this.host=ce("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:ce("password",e)}),this.binary=ce("binary",e),this.
options=ce("options",e),this.ssl=typeof e.ssl>"u"?Fc():e.ssl,typeof this.ssl=="s\
tring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=ce("client_encoding",e),this.replication=ce("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=ce("applicati\
on_name",e,"PGAPPNAME"),this.fallback_application_name=ce("fallback_application_\
name",e,!1),this.statement_timeout=ce("statement_timeout",e,!1),this.lock_timeout=
ce("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=ce("idle_in_tra\
nsaction_session_timeout",e,!1),this.query_timeout=ce("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=w.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
ge(t,this,"user"),ge(t,this,"password"),ge(t,this,"port"),ge(t,this,"application\
_name"),ge(t,this,"fallback_application_name"),ge(t,this,"connect_timeout"),ge(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(ge(t,n,"sslmode"),ge(t,n,"sslca"),ge(t,n,"sslkey"),ge(t,n,"sslcert"),
ge(t,n,"sslrootcert"),this.database&&t.push("dbname="+$e(this.database)),this.replication&&
t.push("replication="+$e(this.replication)),this.host&&t.push("host="+$e(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+$e(this.client_encoding)),Rc.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+$e(s)),e(null,t.join(" ")))})}};o($r,"ConnectionPa\
rameters");var Kr=$r;Gs.exports=Kr});var Js=T((ud,Ys)=>{"use strict";p();var Mc=ct(),zs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
Vr=class Vr{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=zs.exec(e.text):t=zs.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){
var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},
n=0,i=e.length;n<i;n++){var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](
s):t[a]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Mc.getTypeParser(n.dataTypeID,n.format||"text")}}};o(Vr,"\
Result");var Wr=Vr;Ys.exports=Wr});var ta=T((ld,ea)=>{"use strict";p();var{EventEmitter:kc}=Ce(),Zs=Js(),Xs=lt(),zr=class zr extends kc{constructor(e,t,n){
super(),e=Xs.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,w.domain&&e.callback&&
(this.callback=w.domain.bind(e.callback)),this._result=new Zs(this._rowMode,this.
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
w.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
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
binary,valueMapper:Xs.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};o(zr,"Query");
var Gr=zr;ea.exports=Gr});function oe(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}function _t(r,e){let t=r.length;if(t!==e.length)return!1;for(let n=0;n<
t;n++)if(r[n]!==e[n])return!1;return!0}function Dc(r,e,t,n=!0){let i=new Ae(1024);
i.writeUint8(22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(
1,0);let a=i.writeLengthUint24();i.writeUint16(771,0),S.getRandomValues(i.subarray(
32));let u=i.writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);
i.writeUint16(4865,0),c();let h=i.writeLengthUint8(0);i.writeUint8(0,0),h();let l=i.
writeLengthUint16(0);if(n){i.writeUint16(0,0);let k=i.writeLengthUint16(0),re=i.
writeLengthUint16(0);i.writeUint8(0,0);let D=i.writeLengthUint16(0);i.writeUTF8String(
r),D(),re(),k()}i.writeUint16(11,0);let f=i.writeLengthUint16(0),m=i.writeLengthUint8(
0);i.writeUint8(0,0),m(),f(),i.writeUint16(10,0);let b=i.writeLengthUint16(0),_=i.
writeLengthUint16(0);i.writeUint16(23,0),_(),b(),i.writeUint16(13,0);let L=i.writeLengthUint16(
0),v=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),v(),L(),
i.writeUint16(43,0);let P=i.writeLengthUint16(0),I=i.writeLengthUint8(0);i.writeUint16(
772,0),I(),P(),i.writeUint16(51,0);let x=i.writeLengthUint16(0),N=i.writeLengthUint16(
0);i.writeUint16(23,0);let V=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),V(),N(),x(),l(),a(),s(),i}function Le(r,e=""){return[...r].map(t=>t.toString(
16).padStart(2,"0")).join(e)}function qc(r,e){let t,n,[i]=r.expectLength(r.remaining());
r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(771,0);let a=r.
readBytes(32);if(_t(a,[207,33,173,116,229,154,97,17,190,29,140,2,30,101,184,145,
194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error("Unexp\
ected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let h=r.
readUint16(0),[l]=r.expectLengthUint16(0);if(h===43)r.expectUint16(772,0),n=!0;else if(h===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Le([h])}`);l()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
async function en(r,e,t=wt){let n=await r(5);if(n===void 0)return;if(n.length<5)
throw new Error("TLS record header truncated");let i=new Ae(n),s=i.readUint8();if(s<
20||s>24)throw new Error(`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&
s!==e)throw new Error(`Unexpected TLS record type 0x${s.toString(16).padStart(2,
"0")} (expected 0x${e.toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS r\
ecord version 1.2 (middlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(
`Record too long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error(
"TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
async function tn(r,e,t){let n=await en(r,23,Oc);if(n===void 0)return;let i=new Ae(
n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),i.skip(16,0),
s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===0;)
u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (all\
 zeroes)");let c=a[u],h=a.subarray(0,u);if(!(c===21&&h.length===2&&h[0]===1&&h[1]===
0)){if(c===22&&h[0]===4)return tn(r,e,t);if(t!==void 0&&c!==t)throw new Error(`U\
nexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.toString(
16).padStart(2,"0")})`);return h}}async function Qc(r,e,t){let n=oe(r,[t]),i=5,s=n.
length+16,a=new Ae(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.writeUint16(s,
`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),h=await e.process(n,16,
c);return a.writeBytes(h.subarray(0,h.length-16)),a.writeBytes(h.subarray(h.length-
16)),u(),a.array()}async function na(r,e,t){let n=Math.ceil(r.length/wt),i=[];for(let s=0;s<
n;s++){let a=r.subarray(s*wt,(s+1)*wt),u=await Qc(a,e,t);i.push(u)}return i}async function rn(r,e,t){
let n=await F.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await F.sign("HMAC",n,e));return i}async function Hc(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await F.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let h=0;h<s;h++){
let l=oe(c,e,[h+1]),f=await F.sign("HMAC",u,l),m=new Uint8Array(f);a.set(m,i*h),
c=m}return a.subarray(0,t)}async function ue(r,e,t,n,i){let s=ua.encode(e),a=oe(
[(n&65280)>>8,n&255],[ia.length+s.length],ia,s,[t.length],t);return Hc(r,a,n,i)}
async function jc(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(s),u=await F.importKey(
"raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await F.deriveBits({name:"ECDH",
public:u},e,256),h=new Uint8Array(c),l=await F.digest("SHA-256",t),f=new Uint8Array(
l),m=await rn(new Uint8Array(1),a,n),b=await F.digest(`SHA-${n}`,new Uint8Array(
0)),_=new Uint8Array(b),L=await ue(m,"derived",_,s,n),v=await rn(L,h,n),P=await ue(
v,"c hs traffic",f,s,n),I=await ue(v,"s hs traffic",f,s,n),x=await ue(P,"key",new Uint8Array(
0),i,n),N=await ue(I,"key",new Uint8Array(0),i,n),V=await ue(P,"iv",new Uint8Array(
0),12,n),k=await ue(I,"iv",new Uint8Array(0),12,n);return{serverHandshakeKey:N,serverHandshakeIV:k,
clientHandshakeKey:x,clientHandshakeIV:V,handshakeSecret:v,clientSecret:P,serverSecret:I}}
async function Kc(r,e,t,n){let i=t>>>3,s=new Uint8Array(i),a=await F.digest(`SHA\
-${t}`,new Uint8Array(0)),u=new Uint8Array(a),c=await ue(r,"derived",u,i,t),h=await rn(
c,s,t),l=await ue(h,"c ap traffic",e,i,t),f=await ue(h,"s ap traffic",e,i,t),m=await ue(
l,"key",new Uint8Array(0),n,t),b=await ue(f,"key",new Uint8Array(0),n,t),_=await ue(
l,"iv",new Uint8Array(0),12,t),L=await ue(f,"iv",new Uint8Array(0),12,t);return{
serverApplicationKey:b,serverApplicationIV:L,clientApplicationKey:m,clientApplicationIV:_}}
function Wt(r){return r>64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:
r===47?63:r===61?64:void 0}function $c(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,
u=64,c=new Uint8Array(e*.75);for(;t<e;)i=Wt(r.charCodeAt(t++)),s=Wt(r.charCodeAt(
t++)),a=Wt(r.charCodeAt(t++)),u=Wt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&
15)<<4|a>>2,c[n++]=(a&3)<<6|u;let h=s===64?0:a===64?2:u===64?1:0;return c.subarray(
0,n-h)}function sa(r,e=(n,i)=>i,t){return JSON.stringify(r,(n,i)=>e(n,typeof i!=
"object"||i===null||Array.isArray(i)?i:Object.fromEntries(Object.entries(i).sort(
([s],[a])=>s<a?-1:s>a?1:0))),t)}function Jc(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}function oa(r,e){let t={};r.expectUint8(
ae,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(Wc,0);let[s]=r.expectASN1Length(
0);r.expectUint8(ae,0);let[a]=r.expectASN1Length(0);r.expectUint8(Ve,0);let u=r.
readASN1OID(),c=Yc[u]??u,h=r.readUint8();if(h!==Vc&&h!==Gc)throw new Error(`Unex\
pected item type in certificate ${e}: 0x${Le([h])}`);let[l,f]=r.expectASN1Length(
0),m=r.readUTF8String(f());if(l(),a(),s(),t[c]!==void 0)throw new Error(`Duplica\
te OID ${c} in certificate ${e}`);t[c]=m}return n(),t}function Zc(r,e=0){let t=[],
[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.readUint8(0),[a,u]=r.expectASN1Length(
0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.readBytes(u()),t.push({name:c,type:s}),
a()}return n(),t}function Xc(r){let e={"1.2.840.113549.1.1.1":{name:"RSAES-PKCS1\
-v1_5"},"1.2.840.113549.1.1.5":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-1"}},"1\
.2.840.113549.1.1.11":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},"1.2.840.\
113549.1.1.12":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-384"}},"1.2.840.113549.\
1.1.13":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-512"}},"1.2.840.113549.1.1.10":{
name:"RSA-PSS"},"1.2.840.113549.1.1.7":{name:"RSA-OAEP"},"1.2.840.10045.2.1":{name:"\
ECDSA",hash:{name:"SHA-1"}},"1.2.840.10045.4.1":{name:"ECDSA",hash:{name:"SHA-1"}},
"1.2.840.10045.4.3.2":{name:"ECDSA",hash:{name:"SHA-256"}},"1.2.840.10045.4.3.3":{
name:"ECDSA",hash:{name:"SHA-384"}},"1.2.840.10045.4.3.4":{name:"ECDSA",hash:{name:"\
SHA-512"}},"1.3.133.16.840.63.0.2":{name:"ECDH",kdf:"SHA-1"},"1.3.132.1.11.1":{name:"\
ECDH",kdf:"SHA-256"},"1.3.132.1.11.2":{name:"ECDH",kdf:"SHA-384"},"1.3.132.1.11.\
3":{name:"ECDH",kdf:"SHA-512"},"2.16.840.1.101.3.4.1.2":{name:"AES-CBC",length:128},
"2.16.840.1.101.3.4.1.22":{name:"AES-CBC",length:192},"2.16.840.1.101.3.4.1.42":{
name:"AES-CBC",length:256},"2.16.840.1.101.3.4.1.6":{name:"AES-GCM",length:128},
"2.16.840.1.101.3.4.1.26":{name:"AES-GCM",length:192},"2.16.840.1.101.3.4.1.46":{
name:"AES-GCM",length:256},"2.16.840.1.101.3.4.1.4":{name:"AES-CFB",length:128},
"2.16.840.1.101.3.4.1.24":{name:"AES-CFB",length:192},"2.16.840.1.101.3.4.1.44":{
name:"AES-CFB",length:256},"2.16.840.1.101.3.4.1.5":{name:"AES-KW",length:128},"\
2.16.840.1.101.3.4.1.25":{name:"AES-KW",length:192},"2.16.840.1.101.3.4.1.45":{name:"\
AES-KW",length:256},"1.2.840.113549.2.7":{name:"HMAC",hash:{name:"SHA-1"}},"1.2.\
840.113549.2.9":{name:"HMAC",hash:{name:"SHA-256"}},"1.2.840.113549.2.10":{name:"\
HMAC",hash:{name:"SHA-384"}},"1.2.840.113549.2.11":{name:"HMAC",hash:{name:"SHA-\
512"}},"1.2.840.113549.1.9.16.3.5":{name:"DH"},"1.3.14.3.2.26":{name:"SHA-1"},"2\
.16.840.1.101.3.4.2.1":{name:"SHA-256"},"2.16.840.1.101.3.4.2.2":{name:"SHA-384"},
"2.16.840.1.101.3.4.2.3":{name:"SHA-512"},"1.2.840.113549.1.5.12":{name:"PBKDF2"},
"1.2.840.10045.3.1.7":{name:"P-256"},"1.3.132.0.34":{name:"P-384"},"1.3.132.0.35":{
name:"P-521"}}[r];if(e===void 0)throw new Error(`Unsupported algorithm identifie\
r: ${r}`);return e}function ca(r,e=[]){return Object.values(r).forEach(t=>{typeof t==
"string"?e=[...e,t]:e=ca(t,e)}),e}function eh(r){return ca(r).join(" / ")}async function ha(r,e,t,n,i){
r.expectUint8(ae,0);let[s]=r.expectASN1Length(0);r.expectUint8(Gt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Gt,0);let[h,l]=r.expectASN1Length(
0),f=r.readBytes(l());h(),s();let m=o((v,P)=>v.length>P?v.subarray(v.length-P):v.
length<P?oe(new Uint8Array(P-v.length),v):v,"m"),b=n==="P-256"?32:48,_=oe(m(c,b),
m(f,b)),L=await F.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await F.verify({name:"ECDSA",hash:i},L,_,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}async function rh(r,e,t,n=!0,i=!0){for(let u of e)
;let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(`No matc\
hing subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("End-user\
 certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let h=e[u],l=h.authorityKeyIdentifier,f;if(l===void 0?f=t.find(
_=>mt.distinguishedNamesAreEqual(_.subject,h.issuer)):f=t.find(_=>_.subjectKeyIdentifier!==
void 0&&_t(_.subjectKeyIdentifier,l)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let m=f instanceof nn;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:b}=f.basicConstraints;if(b!==void 0&&b<u)throw new Error(
"Exceeded certificate pathLength");if(h.algorithm==="1.2.840.10045.4.3.2"||h.algorithm===
"1.2.840.10045.4.3.3"){let _=h.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",L=f.publicKey.identifiers,v=L.includes("1.2.840.10045.3.1.7")?"P-256":L.includes(
"1.3.132.0.34")?"P-384":void 0;if(v===void 0)throw new Error("Unsupported signin\
g key curve");let P=new Vt(h.signature);await ha(P,f.publicKey.all,h.signedData,
v,_)}else if(h.algorithm==="1.2.840.113549.1.1.11"||h.algorithm==="1.2.840.11354\
9.1.1.12"){let _=h.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",L=await F.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:_},!1,["verify"]);
if(await F.verify({name:"RSASSA-PKCS1-v1_5"},L,h.signature,h.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(m){a=!0;break}}return a}async function ih(r,e,t,n,i,s=!0,a=!0){
let u=new Vt(await e());u.expectUint8(8,0);let[c]=u.expectLengthUint24(),[h,l]=u.
expectLengthUint16(0);for(;l()>0;){let O=u.readUint16(0);if(O===0)u.expectUint16(
0,0);else if(O===10){let[Se,ve]=u.expectLengthUint16("groups data");u.skip(ve(),
0),Se()}else throw new Error(`Unsupported server encrypted extension type 0x${Le(
[O]).padStart(4,"0")}`)}h(),c(),u.remaining()===0&&u.extend(await e());let f=!1,
m=u.readUint8();if(m===13){f=!0;let[O]=u.expectLengthUint24("certificate request\
 data");u.expectUint8(0,0);let[Se,ve]=u.expectLengthUint16("certificate request \
extensions");u.skip(ve(),0),Se(),O(),u.remaining()===0&&u.extend(await e()),m=u.
readUint8()}if(m!==11)throw new Error(`Unexpected handshake message type 0x${Le(
[m])}`);let[b]=u.expectLengthUint24(0);u.expectUint8(0,0);let[_,L]=u.expectLengthUint24(
0),v=[];for(;L()>0;){let[O]=u.expectLengthUint24(0),Se=new mt(u);v.push(Se),O();
let[ve,Fe]=u.expectLengthUint16(),ui=u.subarray(Fe());ve()}if(_(),b(),v.length===
0)throw new Error("No certificates supplied");let P=v[0],I=u.data.subarray(0,u.offset),
x=oe(n,I),N=await F.digest("SHA-256",x),V=new Uint8Array(N),k=oe(nh.encode(" ".repeat(
64)+"TLS 1.3, server CertificateVerify"),[0],V);u.remaining()===0&&u.extend(await e()),
u.expectUint8(15,0);let[re]=u.expectLengthUint24(0),D=u.readUint16();if(D===1027){
let[O]=u.expectLengthUint16();await ha(u,P.publicKey.all,k,"P-256","SHA-256"),O()}else if(D===
2052){let[O,Se]=u.expectLengthUint16(),ve=u.subarray(Se());O();let Fe=await F.importKey(
"spki",P.publicKey.all,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]);if(await F.
verify({name:"RSA-PSS",saltLength:32},Fe,ve,k)!==!0)throw new Error("RSA-PSS-RSA\
E-SHA256 certificate verify failed")}else throw new Error(`Unsupported certifica\
te verify signature type 0x${Le([D]).padStart(4,"0")}`);re();let he=u.data.subarray(
0,u.offset),R=oe(n,he),j=await ue(t,"finished",new Uint8Array(0),32,256),K=await F.
digest("SHA-256",R),$=await F.importKey("raw",j,{name:"HMAC",hash:{name:"SHA-256"}},
!1,["sign"]),G=await F.sign("HMAC",$,K),Y=new Uint8Array(G);u.remaining()===0&&u.
extend(await e()),u.expectUint8(20,0);let[q,z]=u.expectLengthUint24(0),X=u.readBytes(
z());if(q(),u.remaining()!==0)throw new Error("Unexpected extra bytes in server \
handshake");if(_t(X,Y)!==!0)throw new Error("Invalid server verify hash");if(!await rh(
r,v,i,s,a))throw new Error("Validated certificate chain did not end in a trusted\
 root");return[u.data,f]}async function la(r,e,t,n,{useSNI:i,requireServerTlsExtKeyUsage:s,
requireDigitalSigKeyUsage:a,writePreData:u,expectPreData:c,commentPreData:h}={}){
i??(i=!0),s??(s=!0),a??(a=!0);let l=await F.generateKey({name:"ECDH",namedCurve:"\
P-256"},!0,["deriveKey","deriveBits"]),f=await F.exportKey("raw",l.publicKey),m=new Uint8Array(
32);S.getRandomValues(m);let b=Dc(r,f,m,i).array(),_=u?oe(u,b):b;if(n(_),c){let ne=await t(
c.length);if(!ne||!_t(ne,c))throw new Error("Pre data did not match expectation")}
let L=await en(t,22);if(L===void 0)throw new Error("Connection closed while awai\
ting server hello");let v=new Ae(L.content),P=qc(v,m),I=await en(t,20);if(I===void 0)
throw new Error("Connection closed awaiting server cipher change");let x=new Ae(
I.content),[N]=x.expectLength(1);x.expectUint8(1,0),N();let V=b.subarray(5),k=L.
content,re=oe(V,k),D=await jc(P,l.privateKey,re,256,16),he=await F.importKey("ra\
w",D.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),R=new $t("decrypt",he,D.
serverHandshakeIV),j=await F.importKey("raw",D.clientHandshakeKey,{name:"AES-GCM"},
!1,["encrypt"]),K=new $t("encrypt",j,D.clientHandshakeIV),$=o(async()=>{let ne=await tn(
t,R,22);if(ne===void 0)throw new Error("Premature end of encrypted server handsh\
ake");return ne},"C"),[G,Y]=await ih(r,$,D.serverSecret,re,e,s,a),q=new Ae(6);q.
writeUint8(20,0),q.writeUint16(771,0);let z=q.writeLengthUint16();q.writeUint8(1,
0),z();let X=q.array(),O=new Uint8Array(0);if(Y){let ne=new Ae(8);ne.writeUint8(
11,0);let Xe=ne.writeLengthUint24("client certificate data");ne.writeUint8(0,0),
ne.writeUint24(0,0),Xe(),O=ne.array()}let Se=oe(re,G,O),ve=await F.digest("SHA-2\
56",Se),Fe=new Uint8Array(ve),ui=await ue(D.clientSecret,"finished",new Uint8Array(
0),32,256),Ya=await F.importKey("raw",ui,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),Ja=await F.sign("HMAC",Ya,Fe),Za=new Uint8Array(Ja),Ct=new Ae(36);Ct.writeUint8(
20,0);let Xa=Ct.writeLengthUint24(0);Ct.writeBytes(Za),Xa();let eo=Ct.array(),ci=await na(
oe(O,eo),K,22),hi=Fe;if(O.length>0){let ne=Se.subarray(0,Se.length-O.length),Xe=await F.
digest("SHA-256",ne);hi=new Uint8Array(Xe)}let It=await Kc(D.handshakeSecret,hi,
256,16),to=await F.importKey("raw",It.clientApplicationKey,{name:"AES-GCM"},!0,[
"encrypt"]),ro=new $t("encrypt",to,It.clientApplicationIV),no=await F.importKey(
"raw",It.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),io=new $t("decryp\
t",no,It.serverApplicationIV),Lt=!1;return[()=>{if(!Lt){let ne=oe(X,...ci);n(ne),
Lt=!0}return tn(t,io)},async ne=>{let Xe=Lt;Lt=!0;let li=await na(ne,ro,23),so=Xe?
oe(...li):oe(X,...ci,...li);n(so)}]}var Xr,ra,Nc,gt,Ae,pd,wt,Oc,F,ua,ia,St,$t,bt,
Vt,Yr,Gt,ae,Wc,Ve,Vc,Gc,aa,Jr,Re,Zr,zc,We,Yc,th,xt,mt,At,nn,nh,vt,sh,Et,fa,da=ie(
()=>{p();o(oe,"p");o(_t,"O");Xr="\xB7\xB7 ",ra=new TextEncoder,Nc=new TextDecoder,
Ae=(gt=class{constructor(e){g(this,"offset");g(this,"dataView");g(this,"data");g(
this,"comments");g(this,"indents");g(this,"indent");this.offset=0,this.data=typeof e==
"number"?new Uint8Array(e):e,this.dataView=new DataView(this.data.buffer,this.data.
byteOffset,this.data.byteLength),this.comments={},this.indents={},this.indent=0}extend(e){
let t=typeof e=="number"?new Uint8Array(e):e;this.data=oe(this.data,t),this.dataView=
new DataView(this.data.buffer,this.data.byteOffset,this.data.byteLength)}remaining(){
return this.data.length-this.offset}subarray(e){return this.data.subarray(this.offset,
this.offset+=e)}skip(e,t){return this.offset+=e,t&&this.comment(t),this}comment(e,t=this.
offset){throw new Error("No comments should be emitted outside of chatty mode")}readBytes(e){
return this.data.slice(this.offset,this.offset+=e)}readUTF8String(e){let t=this.
subarray(e);return Nc.decode(t)}readUTF8StringNullTerminated(){let e=this.offset;
for(;this.data[e]!==0;)e++;let t=this.readUTF8String(e-this.offset);return this.
expectUint8(0,"end of string"),t}readUint8(e){let t=this.dataView.getUint8(this.
offset);return this.offset+=1,t}readUint16(e){let t=this.dataView.getUint16(this.
offset);return this.offset+=2,t}readUint24(e){let t=this.readUint8(),n=this.readUint16();
return(t<<16)+n}readUint32(e){let t=this.dataView.getUint32(this.offset);return this.
offset+=4,t}expectBytes(e,t){let n=this.readBytes(e.length);if(!_t(n,e))throw new Error(
"Unexpected bytes")}expectUint8(e,t){let n=this.readUint8();if(n!==e)throw new Error(
`Expected ${e}, got ${n}`)}expectUint16(e,t){let n=this.readUint16();if(n!==e)throw new Error(
`Expected ${e}, got ${n}`)}expectUint24(e,t){let n=this.readUint24();if(n!==e)throw new Error(
`Expected ${e}, got ${n}`)}expectUint32(e,t){let n=this.readUint32();if(n!==e)throw new Error(
`Expected ${e}, got ${n}`)}expectLength(e,t=1){let n=this.offset,i=n+e;if(i>this.
data.length)throw new Error("Expected length exceeds remaining data length");return this.
indent+=t,this.indents[n]=this.indent,[()=>{if(this.indent-=t,this.indents[this.
offset]=this.indent,this.offset!==i)throw new Error(`${e} bytes expected but ${this.
offset-n} read`)},()=>i-this.offset]}expectLengthUint8(e){let t=this.readUint8();
return this.expectLength(t)}expectLengthUint16(e){let t=this.readUint16();return this.
expectLength(t)}expectLengthUint24(e){let t=this.readUint24();return this.expectLength(
t)}expectLengthUint32(e){let t=this.readUint32();return this.expectLength(t)}expectLengthUint8Incl(e){
let t=this.readUint8();return this.expectLength(t-1)}expectLengthUint16Incl(e){let t=this.
readUint16();return this.expectLength(t-2)}expectLengthUint24Incl(e){let t=this.
readUint24();return this.expectLength(t-3)}expectLengthUint32Incl(e){let t=this.
readUint32();return this.expectLength(t-4)}writeBytes(e){return this.data.set(e,
this.offset),this.offset+=e.length,this}writeUTF8String(e){let t=ra.encode(e);return this.
writeBytes(t),this}writeUTF8StringNullTerminated(e){let t=ra.encode(e);return this.
writeBytes(t),this.writeUint8(0),this}writeUint8(e,t){return this.dataView.setUint8(
this.offset,e),this.offset+=1,this}writeUint16(e,t){return this.dataView.setUint16(
this.offset,e),this.offset+=2,this}writeUint24(e,t){return this.writeUint8((e&16711680)>>
16),this.writeUint16(e&65535,t),this}writeUint32(e,t){return this.dataView.setUint32(
this.offset,e),this.offset+=4,this}_writeLengthGeneric(e,t,n){let i=this.offset;
this.offset+=e;let s=this.offset;return this.indent+=1,this.indents[s]=this.indent,
()=>{let a=this.offset-(t?i:s);if(e===1)this.dataView.setUint8(i,a);else if(e===
2)this.dataView.setUint16(i,a);else if(e===3)this.dataView.setUint8(i,(a&16711680)>>
16),this.dataView.setUint16(i+1,a&65535);else if(e===4)this.dataView.setUint32(i,
a);else throw new Error(`Invalid length for length field: ${e}`);this.indent-=1,
this.indents[this.offset]=this.indent}}writeLengthUint8(e){return this._writeLengthGeneric(
1,!1,e)}writeLengthUint16(e){return this._writeLengthGeneric(2,!1,e)}writeLengthUint24(e){
return this._writeLengthGeneric(3,!1,e)}writeLengthUint32(e){return this._writeLengthGeneric(
4,!1,e)}writeLengthUint8Incl(e){return this._writeLengthGeneric(1,!0,e)}writeLengthUint16Incl(e){
return this._writeLengthGeneric(2,!0,e)}writeLengthUint24Incl(e){return this._writeLengthGeneric(
3,!0,e)}writeLengthUint32Incl(e){return this._writeLengthGeneric(4,!0,e)}array(){
return this.data.subarray(0,this.offset)}commentedString(e=!1){let t=this.indents[0]!==
void 0?Xr.repeat(this.indents[0]):"",n=this.indents[0]??0,i=e?this.data.length:this.
offset;for(let s=0;s<i;s++){t+=this.data[s].toString(16).padStart(2,"0")+" ";let a=this.
comments[s+1];this.indents[s+1]!==void 0&&(n=this.indents[s+1]),a&&(t+=` ${a}
${Xr.repeat(n)}`)}return t}},o(gt,"N"),gt);o(Dc,"St");o(Le,"K");o(qc,"Ut");pd=new RegExp(
`  .+|^(${Xr})+`,"gm"),wt=16384,Oc=wt+1+255;o(en,"ht");o(tn,"dt");o(Qc,"ee");o(na,
"At");F=S.subtle,ua=new TextEncoder;o(rn,"lt");o(Hc,"ne");ia=ua.encode("tls13 ");
o(ue,"S");o(jc,"Kt");o(Kc,"Tt");$t=(St=class{constructor(e,t,n){g(this,"recordsP\
rocessed",0n);g(this,"priorPromise",Promise.resolve(new Uint8Array));this.mode=e,
this.key=t,this.initialIv=n}async process(e,t,n){let i=this.processUnsequenced(e,
t,n);return this.priorPromise=this.priorPromise.then(()=>i)}async processUnsequenced(e,t,n){
let i=this.recordsProcessed;this.recordsProcessed+=1n;let s=this.initialIv.slice(),
a=BigInt(s.length),u=a-1n;for(let f=0n;f<a;f++){let m=i>>(f<<3n);if(m===0n)break;
s[Number(u-f)]^=Number(m&0xffn)}let c=t<<3,h={name:"AES-GCM",iv:s,tagLength:c,additionalData:n},
l=await F[this.mode](h,this.key,e);return new Uint8Array(l)}},o(St,"Q"),St);o(Wt,
"yt");o($c,"Dt");Vt=(bt=class extends Ae{readASN1Length(e){let t=this.readUint8();
if(t<128)return t;let n=t&127,i=0;if(n===1)return this.readUint8(i);if(n===2)return this.
readUint16(i);if(n===3)return this.readUint24(i);if(n===4)return this.readUint32(
i);throw new Error(`ASN.1 length fields are only supported up to 4 bytes (this o\
ne is ${n} bytes)`)}expectASN1Length(e){let t=this.readASN1Length(e);return this.
expectLength(t)}readASN1OID(){let[e,t]=this.expectASN1Length(0),n=this.readUint8(),
i=`${Math.floor(n/40)}.${n%40}`;for(;t()>0;){let s=0;for(;;){let a=this.readUint8();
if(s<<=7,s+=a&127,a<128)break}i+=`.${s}`}return e(),i}readASN1Boolean(){let[e,t]=this.
expectASN1Length(0),n=t();if(n!==1)throw new Error(`Boolean has weird length: ${n}`);
let i=this.readUint8(),s;if(i===255)s=!0;else if(i===0)s=!1;else throw new Error(
`Boolean has weird value: 0x${Le([i])}`);return e(),s}readASN1UTCTime(){let[e,t]=this.
expectASN1Length(0),n=this.readUTF8String(t()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);
if(!n)throw new Error("Unrecognised ASN.1 UTC time format");let[,i,s,a,u,c,h]=n,
l=parseInt(i,10),f=l+(l>=50?1900:2e3),m=new Date(`${f}-${s}-${a}T${u}:${c}:${h}Z`);
return e(),m}readASN1BitString(){let[e,t]=this.expectASN1Length(0),n=this.readUint8(
0),i=t(),s=this.readBytes(i);if(n>7)throw new Error(`Invalid right pad value: ${n}`);
if(n>0){let a=8-n;for(let u=i-1;u>0;u--)s[u]=255&s[u-1]<<a|s[u]>>>n;s[0]=s[0]>>>
n}return e(),s}},o(bt,"_"),bt);o(sa,"mt");Yr=1,Gt=2,ae=48,Wc=49,Ve=6,Vc=19,Gc=12,
aa=23,Jr=5,Re=4,Zr=3,zc=163,We=128,Yc={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"\
OU","2.5.4.3":"CN","2.5.4.7":"L","2.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","\
2.5.4.43":"I","2.5.4.4":"SN","1.2.840.113549.1.9.1":"E-mail"};o(Jc,"qt");o(oa,"C\
t");o(Zc,"Bt");o(Xc,"Ft");o(ca,"Ot");o(eh,"Pt");th=["digitalSignature","nonRepud\
iation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSi\
gn","encipherOnly","decipherOnly"],mt=(xt=class{constructor(e){g(this,"serialNum\
ber");g(this,"algorithm");g(this,"issuer");g(this,"validityPeriod");g(this,"subj\
ect");g(this,"publicKey");g(this,"signature");g(this,"keyUsage");g(this,"subject\
AltNames");g(this,"extKeyUsage");g(this,"authorityKeyIdentifier");g(this,"subjec\
tKeyIdentifier");g(this,"basicConstraints");g(this,"signedData");let t=e instanceof
Vt?e:new Vt(e);t.expectUint8(ae,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(
ae,0);let[s]=t.expectASN1Length(0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(
Gt,0);let[a,u]=t.expectASN1Length(0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(
ae,0);let[c,h]=t.expectASN1Length(0);t.expectUint8(Ve,0),this.algorithm=t.readASN1OID(),
h()>0&&(t.expectUint8(Jr,0),t.expectUint8(0,0)),c(),this.issuer=oa(t,"issuer"),t.
expectUint8(ae,0);let[l]=t.expectASN1Length(0);t.expectUint8(aa,0);let f=t.readASN1UTCTime();
t.expectUint8(aa,0);let m=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:m},
l(),this.subject=oa(t,"subject");let b=t.offset;t.expectUint8(ae,0);let[_]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[L,v]=t.expectASN1Length(0),P=[];for(;v()>0;){let he=t.
readUint8();if(he===Ve){let R=t.readASN1OID();P.push(R)}else he===Jr&&t.expectUint8(
0,0)}L(),t.expectUint8(Zr,0);let I=t.readASN1BitString();this.publicKey={identifiers:P,
data:I,all:t.data.subarray(b,t.offset)},_(),t.expectUint8(zc,0);let[x]=t.expectASN1Length();
t.expectUint8(ae,0);let[N,V]=t.expectASN1Length(0);for(;V()>0;){t.expectUint8(ae,
0);let[he,R]=t.expectASN1Length();t.expectUint8(Ve,0);let j=t.readASN1OID();if(j===
"2.5.29.17"){t.expectUint8(Re,0);let[K]=t.expectASN1Length(0);t.expectUint8(ae,0);
let $=Zc(t,We);this.subjectAltNames=$.filter(G=>G.type===(2|We)).map(G=>G.name),
K()}else if(j==="2.5.29.15"){t.expectUint8(Yr,0);let K=t.readASN1Boolean();t.expectUint8(
Re,0);let[$]=t.expectASN1Length(0);t.expectUint8(Zr,0);let G=t.readASN1BitString(),
Y=Jc(G),q=new Set(th.filter((z,X)=>Y&1<<X));$(),this.keyUsage={critical:K,usages:q}}else if(j===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(Re,0);let[K]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[$,G]=t.expectASN1Length(0);for(;G()>0;){t.expectUint8(Ve,
0);let Y=t.readASN1OID();Y==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
Y==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}$(),K()}else if(j==="2.\
5.29.35"){t.expectUint8(Re,0);let[K]=t.expectASN1Length(0);t.expectUint8(ae,0);let[
$,G]=t.expectASN1Length(0);for(;G()>0;){let Y=t.readUint8();if(Y===(We|0)){let[q,
z]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(z()),q()}else if(Y===
(We|1)){let[q,z]=t.expectASN1Length(0);t.skip(z(),0),q()}else if(Y===(We|2)){let[
q,z]=t.expectASN1Length(0);t.skip(z(),0),q()}else if(Y===(We|33)){let[q,z]=t.expectASN1Length(
0);t.skip(z(),0),q()}else throw new Error(`Unexpected data type ${Y} in authorit\
yKeyIdentifier certificate extension`)}$(),K()}else if(j==="2.5.29.14"){t.expectUint8(
Re,0);let[K]=t.expectASN1Length(0);t.expectUint8(Re,0);let[$,G]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(G()),$(),K()}else if(j==="2.5.29.19"){let K,
$=t.readUint8();if($===Yr&&(K=t.readASN1Boolean(),$=t.readUint8()),$!==Re)throw new Error(
"Unexpected type in certificate basic constraints");let[G]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[Y,q]=t.expectASN1Length(),z;q()>0&&(t.expectUint8(Yr,0),
z=t.readASN1Boolean());let X;if(q()>0){t.expectUint8(Gt,0);let O=t.readASN1Length(
0);if(X=O===1?t.readUint8():O===2?t.readUint16():O===3?t.readUint24():void 0,X===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}Y(),G(),this.basicConstraints={critical:K,ca:z,pathLength:X}}else t.
skip(R(),0);he()}N(),x(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
ae,0);let[k,re]=t.expectASN1Length(0);t.expectUint8(Ve,0);let D=t.readASN1OID();
if(re()>0&&(t.expectUint8(Jr,0),t.expectUint8(0,0)),k(),D!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${D})`);t.expectUint8(Zr,0),this.signature=t.readASN1BitString(),n()}static distinguishedNamesAreEqual(e,t){
return sa(e)===sa(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}static fromPEM(e){let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}\
-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){
let a=s[1].replace(/[\r\n]/g,""),u=$c(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){
let t=/[.][^.]+[.][^.]+$/;return(this.subjectAltNames??[]).find(n=>{let i=n,s=e;
if(t.test(e)&&t.test(i)&&i.startsWith("*.")&&(i=i.slice(1),s=s.slice(s.indexOf("\
."))),i===s)return!0})}isValidAtMoment(e=new Date){return e>=this.validityPeriod.
notBefore&&e<=this.validityPeriod.notAfter}description(){return"subject: "+mt.readableDN(
this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Le(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+mt.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
authority key id: ${Le(this.authorityKeyIdentifier," ")}`:"")+`
validity: `+this.validityPeriod.notBefore.toISOString()+" \u2013 "+this.validityPeriod.
notAfter.toISOString()+` (${this.isValidAtMoment()?"currently valid":"not valid"}\
)`+(this.keyUsage?`
key usage (${this.keyUsage.critical?"critical":"non-critical"}): `+[...this.keyUsage.
usages].join(", "):"")+(this.extKeyUsage?`
extended key usage: TLS server \u2014\xA0${this.extKeyUsage.serverTls}, TLS clie\
nt \u2014\xA0${this.extKeyUsage.clientTls}`:"")+(this.basicConstraints?`
basic constraints (${this.basicConstraints.critical?"critical":"non-critical"}):\
 CA \u2014\xA0${this.basicConstraints.ca}, path length \u2014 ${this.basicConstraints.
pathLength}`:"")+`
signature algorithm: `+eh(Xc(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},o(xt,"P"),xt),nn=(At=class extends mt{},o(At,"st"),At);o(
ha,"pt");o(rh,"jt");nh=new TextEncoder;o(ih,"Vt");o(la,"he");sh=(vt=class{constructor(){
g(this,"queue");g(this,"outstandingRequest");this.queue=[]}enqueue(e){this.queue.
push(e),this.dequeue()}dequeue(){if(this.outstandingRequest===void 0)return;let{
resolve:e,bytes:t}=this.outstandingRequest,n=this.bytesInQueue();if(n<t&&this.socketIsNotClosed())
return;if(t=Math.min(t,n),t===0)return e(void 0);this.outstandingRequest=void 0;
let i=this.queue[0],s=i.length;if(s===t)return this.queue.shift(),e(i);if(s>t)return this.
queue[0]=i.subarray(t),e(i.subarray(0,t));{let a=new Uint8Array(t),u=t,c=0;for(;u>
0;){let h=this.queue[0],l=h.length;l<=u?(this.queue.shift(),a.set(h,c),c+=l,u-=l):
(this.queue[0]=h.subarray(u),a.set(h.subarray(0,u),c),u-=u,c+=u)}return e(a)}}bytesInQueue(){
return this.queue.reduce((e,t)=>e+t.length,0)}async read(e){if(this.outstandingRequest!==
void 0)throw new Error("Can\u2019t read while already awaiting read");return new Promise(
t=>{this.outstandingRequest={resolve:t,bytes:e},this.dequeue()})}},o(vt,"xt"),vt),
fa=(Et=class extends sh{constructor(e){super(),this.socket=e,e.addEventListener(
"message",t=>this.enqueue(new Uint8Array(t.data))),e.addEventListener("close",()=>this.
dequeue())}socketIsNotClosed(){let{socket:e}=this,{readyState:t}=e;return t<=1}},
o(Et,"vt"),Et)});var sn,pa=ie(()=>{sn=`-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----
`});var wa={};ye(wa,{Socket:()=>Ge,isIP:()=>oh});function oh(r){return 0}var ya,B,Ge,
an=ie(()=>{"use strict";p();ya=et(Ce(),1);da();pa();o(oh,"isIP");B=class B extends ya.EventEmitter{constructor(){
super(...arguments);g(this,"_poolQueryViaFetch");g(this,"_webSocketConstructor");
g(this,"_wsProxy");g(this,"_coalesceWrites");g(this,"_useSecureWebSocket");g(this,
"_forceDisablePgSSL");g(this,"_disableSNI");g(this,"_pipelineConnect");g(this,"_\
pipelineTLS");g(this,"_rootCerts");g(this,"connecting",!1);g(this,"pending",!0);
g(this,"writable",!0);g(this,"encrypted",!1);g(this,"authorized",!1);g(this,"des\
troyed",!1);g(this,"ws",null);g(this,"writeBuffer");g(this,"tlsState",0);g(this,
"tlsRead");g(this,"tlsWrite")}get poolQueryViaFetch(){return this._poolQueryViaFetch??
B.poolQueryViaFetch??B.defaults.poolQueryViaFetch}set poolQueryViaFetch(t){this.
_poolQueryViaFetch=t}get webSocketConstructor(){return this._webSocketConstructor??
B.webSocketConstructor??B.defaults.webSocketConstructor}set webSocketConstructor(t){
this._webSocketConstructor=t}get wsProxy(){return this._wsProxy??B.wsProxy??B.defaults.
wsProxy}set wsProxy(t){this._wsProxy=t}get coalesceWrites(){return this._coalesceWrites??
B.coalesceWrites??B.defaults.coalesceWrites}set coalesceWrites(t){this._coalesceWrites=
t}get useSecureWebSocket(){return this._useSecureWebSocket??B.useSecureWebSocket??
B.defaults.useSecureWebSocket}set useSecureWebSocket(t){this._useSecureWebSocket=
t}get forceDisablePgSSL(){return this._forceDisablePgSSL??B.forceDisablePgSSL??B.
defaults.forceDisablePgSSL}set forceDisablePgSSL(t){this._forceDisablePgSSL=t}get disableSNI(){
return this._disableSNI??B.disableSNI??B.defaults.disableSNI}set disableSNI(t){this.
_disableSNI=t}get pipelineConnect(){return this._pipelineConnect??B.pipelineConnect??
B.defaults.pipelineConnect}set pipelineConnect(t){this._pipelineConnect=t}get pipelineTLS(){
return this._pipelineTLS??B.pipelineTLS??B.defaults.pipelineTLS}set pipelineTLS(t){
this._pipelineTLS=t}get rootCerts(){return this._rootCerts??B.rootCerts??B.defaults.
rootCerts}set rootCerts(t){this._rootCerts=t}wsProxyAddrForHost(t,n){let i=this.
wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configured. Please \
refer to https://github.com/neondatabase/serverless#run-your-own-websocket-proxy");
return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){
return this}ref(){return this}unref(){return this}async connect(t,n,i){this.connecting=
!0,i&&this.once("connect",i);let s;try{s=this.wsProxyAddrForHost(n,typeof t=="st\
ring"?parseInt(t,10):t)}catch(a){this.emit("error",a),this.emit("close");return}
return this.ws=await new Promise(async a=>{try{let c=(this.useSecureWebSocket?"w\
ss:":"ws:")+"//"+s,h;if(this.webSocketConstructor!==void 0)h=new this.webSocketConstructor(
c);else try{h=new WebSocket(c)}catch{h=new __unstable_WebSocket(c)}h.addEventListener(
"open",()=>{a(h)})}catch(u){try{let h=(this.useSecureWebSocket?"https:":"http:")+
"//"+s;await fetch(h,{headers:{Upgrade:"websocket"}}).then(l=>{let f=l.webSocket;
if(f==null)throw u;f.accept(),a(f)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",a=>{this.emit(
"error",a),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",a=>{if(this.tlsState===0){let u=y.
from(a.data);this.emit("data",u)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(t){this.tlsState=1;let n=nn.fromPEM(
sn),i=new fa(this.ws),s=i.read.bind(i),a=this.rawWrite.bind(this),[u,c]=await la(
t,n,s,a,{useSNI:!this.disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([
83]):void 0});this.tlsRead=u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.
authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=y.from(t);this.emit(
"data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.
writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.
length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?i():(typeof t=="string"&&(t=y.from(
t,n)),this.tlsState===0?this.rawWrite(t):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(t,n,i)):this.tlsWrite(t),!0)}end(t=y.alloc(0),n="utf8",i){
return this.write(t,n,()=>{this.ws.close(),i&&i()}),this}destroy(){return this.destroyed=
!0,this.end()}};o(B,"Socket"),g(B,"defaults",{poolQueryViaFetch:!1,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
disableSNI:!1,pipelineConnect:"password",pipelineTLS:!1,rootCerts:sn}),g(B,"pool\
QueryViaFetch"),g(B,"webSocketConstructor"),g(B,"wsProxy"),g(B,"coalesceWrites"),
g(B,"useSecureWebSocket"),g(B,"forceDisablePgSSL"),g(B,"disableSNI"),g(B,"pipeli\
neConnect"),g(B,"pipelineTLS"),g(B,"rootCerts");Ge=B});var Mn=T(C=>{"use strict";p();Object.defineProperty(C,"__esModule",{value:!0});C.
NoticeMessage=C.DataRowMessage=C.CommandCompleteMessage=C.ReadyForQueryMessage=C.
NotificationResponseMessage=C.BackendKeyDataMessage=C.AuthenticationMD5Password=
C.ParameterStatusMessage=C.ParameterDescriptionMessage=C.RowDescriptionMessage=C.
Field=C.CopyResponse=C.CopyDataMessage=C.DatabaseError=C.copyDone=C.emptyQuery=C.
replicationStart=C.portalSuspended=C.noData=C.closeComplete=C.bindComplete=C.parseComplete=
void 0;C.parseComplete={name:"parseComplete",length:5};C.bindComplete={name:"bin\
dComplete",length:5};C.closeComplete={name:"closeComplete",length:5};C.noData={name:"\
noData",length:5};C.portalSuspended={name:"portalSuspended",length:5};C.replicationStart=
{name:"replicationStart",length:4};C.emptyQuery={name:"emptyQuery",length:4};C.copyDone=
{name:"copyDone",length:4};var xn=class xn extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};o(xn,"DatabaseError");var on=xn;C.DatabaseError=on;
var An=class An{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
o(An,"CopyDataMessage");var un=An;C.CopyDataMessage=un;var vn=class vn{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};o(vn,"Co\
pyResponse");var cn=vn;C.CopyResponse=cn;var En=class En{constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};o(En,"Field");var hn=En;C.Field=hn;var _n=class _n{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};o(_n,"RowDescriptionMessage");var ln=_n;C.RowDescriptionMessage=
ln;var Un=class Un{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};o(Un,"P\
arameterDescriptionMessage");var fn=Un;C.ParameterDescriptionMessage=fn;var Cn=class Cn{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};o(Cn,"ParameterStatusMessage");var dn=Cn;C.ParameterStatusMessage=dn;var In=class In{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};o(In,"Authenti\
cationMD5Password");var pn=In;C.AuthenticationMD5Password=pn;var Ln=class Ln{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};o(Ln,
"BackendKeyDataMessage");var yn=Ln;C.BackendKeyDataMessage=yn;var Tn=class Tn{constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};o(Tn,"NotificationResponseMessage");var wn=Tn;C.NotificationResponseMessage=
wn;var Bn=class Bn{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};o(Bn,"ReadyForQueryMessage");var mn=Bn;C.ReadyForQueryMessage=mn;var Pn=class Pn{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};o(Pn,"CommandCompleteMes\
sage");var gn=Pn;C.CommandCompleteMessage=gn;var Rn=class Rn{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};o(Rn,"Data\
RowMessage");var Sn=Rn;C.DataRowMessage=Sn;var Fn=class Fn{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};o(Fn,"NoticeMessage");var bn=Fn;C.NoticeMessage=
bn});var ma=T(zt=>{"use strict";p();Object.defineProperty(zt,"__esModule",{value:!0});
zt.Writer=void 0;var Nn=class Nn{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=y.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=y.allocUnsafe(
i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=y.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=y.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=y.allocUnsafe(this.size),t}};o(Nn,"Wr\
iter");var kn=Nn;zt.Writer=kn});var Sa=T(Jt=>{"use strict";p();Object.defineProperty(Jt,"__esModule",{value:!0});
Jt.serialize=void 0;var Dn=ma(),H=new Dn.Writer,uh=o(r=>{H.addInt16(3).addInt16(
0);for(let n of Object.keys(r))H.addCString(n).addCString(r[n]);H.addCString("cl\
ient_encoding").addCString("UTF8");var e=H.addCString("").flush(),t=e.length+4;return new Dn.
Writer().addInt32(t).add(e).flush()},"startup"),ch=o(()=>{let r=y.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),hh=o(r=>H.
addCString(r).flush(112),"password"),lh=o(function(r,e){return H.addCString(r).addInt32(
y.byteLength(e)).addString(e),H.flush(112)},"sendSASLInitialResponseMessage"),fh=o(
function(r){return H.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),dh=o(
r=>H.addCString(r).flush(81),"query"),ga=[],ph=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ga;for(var n=t.length,
i=H.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return H.
flush(80)},"parse"),ze=new Dn.Writer,yh=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(H.addInt16(0),ze.addInt32(-1)):n instanceof y?(H.
addInt16(1),ze.addInt32(n.length),ze.add(n)):(H.addInt16(0),ze.addInt32(y.byteLength(
n)),ze.addString(n))}},"writeValues"),wh=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ga,s=i.length;return H.addCString(e).addCString(t),
H.addInt16(s),yh(i,r.valueMapper),H.addInt16(s),H.add(ze.flush()),H.addInt16(n?1:
0),H.flush(66)},"bind"),mh=y.from([69,0,0,0,9,0,0,0,0,0]),gh=o(r=>{if(!r||!r.portal&&
!r.rows)return mh;let e=r.portal||"",t=r.rows||0,n=y.byteLength(e),i=4+n+1+4,s=y.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Sh=o((r,e)=>{let t=y.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),qn=o((r,e)=>{let n=4+y.byteLength(e)+1,i=y.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),bh=H.addCString("P").flush(68),xh=H.addCString("S").flush(68),
Ah=o(r=>r.name?qn(68,`${r.type}${r.name||""}`):r.type==="P"?bh:xh,"describe"),vh=o(
r=>{let e=`${r.type}${r.name||""}`;return qn(67,e)},"close"),Eh=o(r=>H.add(r).flush(
100),"copyData"),_h=o(r=>qn(102,r),"copyFail"),Yt=o(r=>y.from([r,0,0,0,4]),"code\
OnlyBuffer"),Uh=Yt(72),Ch=Yt(83),Ih=Yt(88),Lh=Yt(99),Th={startup:uh,password:hh,
requestSsl:ch,sendSASLInitialResponseMessage:lh,sendSCRAMClientFinalMessage:fh,query:dh,
parse:ph,bind:wh,execute:gh,describe:Ah,close:vh,flush:()=>Uh,sync:()=>Ch,end:()=>Ih,
copyData:Eh,copyDone:()=>Lh,copyFail:_h,cancel:Sh};Jt.serialize=Th});var ba=T(Zt=>{"use strict";p();Object.defineProperty(Zt,"__esModule",{value:!0});
Zt.BufferReader=void 0;var Bh=y.allocUnsafe(0),Qn=class Qn{constructor(e=0){this.
offset=e,this.buffer=Bh,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};o(Qn,"BufferReader");var On=Qn;Zt.BufferReader=
On});var xa={};ye(xa,{default:()=>Ph});var Ph,Aa=ie(()=>{p();Ph={}});var _a=T(Ye=>{"use strict";p();var Rh=Ye&&Ye.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.
Parser=void 0;var W=Mn(),Fh=ba(),Mh=Rh((Aa(),Z(xa))),Hn=1,kh=4,va=Hn+kh,Ea=y.allocUnsafe(
0),Kn=class Kn{constructor(e){if(this.buffer=Ea,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Fh.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+va<=n;){let s=this.buffer[i],
a=this.buffer.readUInt32BE(i+Hn),u=Hn+a;if(u+i<=n){let c=this.handlePacket(i+va,
s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=Ea,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
y.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return W.bindComplete;case 49:return W.parseComplete;case 51:return W.
closeComplete;case 110:return W.noData;case 115:return W.portalSuspended;case 99:
return W.copyDone;case 87:return W.replicationStart;case 73:return W.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:Mh.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new W.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new W.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new W.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,a=this.reader.int16(),u=new W.CopyResponse(t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.reader.cstring();return new W.
NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new W.RowDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new W.
Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new W.ParameterDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<i;a++){
let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new W.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new W.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new W.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new W.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&s.mechanisms.push(a);while(a);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=
this.reader.cstring(),a=this.reader.string(1);let u=s.M,c=i==="notice"?new W.NoticeMessage(
t,u):new W.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};o(Kn,"Parser");var jn=Kn;Ye.Parser=jn});var $n=T(Te=>{"use strict";p();Object.defineProperty(Te,"__esModule",{value:!0});
Te.DatabaseError=Te.serialize=Te.parse=void 0;var Nh=Mn();Object.defineProperty(
Te,"DatabaseError",{enumerable:!0,get:function(){return Nh.DatabaseError}});var Dh=Sa();
Object.defineProperty(Te,"serialize",{enumerable:!0,get:function(){return Dh.serialize}});
var qh=_a();function Oh(r,e){let t=new qh.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(Oh,"parse");Te.parse=Oh});var Ua={};ye(Ua,{connect:()=>Qh});function Qh(r){let{socket:e,servername:t}=r;return e.
startTls(t),e}var Ca=ie(()=>{p();o(Qh,"connect")});var Gn=T((Kd,Ta)=>{"use strict";p();var Ia=(an(),Z(wa)),Hh=Ce().EventEmitter,{parse:jh,
serialize:te}=$n(),La=te.flush(),Kh=te.sync(),$h=te.end(),Vn=class Vn extends Hh{constructor(e){
super(),e=e||{},this.stream=e.stream||new Ia.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let i=o(function(s){n._ending&&
(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");
if(this.stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.
ssl)return this.attachListeners(this.stream);this.stream.once("data",function(s){
var a=s.toString("utf8");switch(a){case"S":break;case"N":return n.stream.end(),n.
emit("error",new Error("The server does not support SSL connections"));default:return n.
stream.end(),n.emit("error",new Error("There was an error establishing an SSL co\
nnection"))}var u=(Ca(),Z(Ua));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Ia.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(h){return n.emit("error",h)}n.attachListeners(n.stream),
n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),jh(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(te.requestSsl())}startup(e){
this.stream.write(te.startup(e))}cancel(e,t){this._send(te.cancel(e,t))}password(e){
this._send(te.password(e))}sendSASLInitialResponseMessage(e,t){this._send(te.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(te.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(te.query(
e))}parse(e){this._send(te.parse(e))}bind(e){this._send(te.bind(e))}execute(e){this.
_send(te.execute(e))}flush(){this.stream.writable&&this.stream.write(La)}sync(){
this._ending=!0,this._send(La),this._send(Kh)}ref(){this.stream.ref()}unref(){this.
stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write($h,()=>{this.stream.end()})}close(e){
this._send(te.close(e))}describe(e){this._send(te.describe(e))}sendCopyFromChunk(e){
this._send(te.copyData(e))}endCopyFrom(){this._send(te.copyDone())}sendCopyFail(e){
this._send(te.copyFail(e))}};o(Vn,"Connection");var Wn=Vn;Ta.exports=Wn});var Ra=T((Gd,Pa)=>{"use strict";p();var Wh=Ce().EventEmitter,Vd=(pt(),Z(dt)),Vh=lt(),
zn=Ls(),Gh=Os(),zh=Hr(),Yh=Kt(),Ba=ta(),Jh=ht(),Zh=Gn(),Yn=class Yn extends Wh{constructor(e){
super(),this.connectionParameters=new Yh(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||A.Promise,this._types=new zh(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Zh({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||Jh.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=o(
n=>{w.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let i=new Error("Client has already been conn\
ected. You cannot reuse a client.");w.nextTick(()=>{e(i)});return}this._connecting=
!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=
setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expired"))},this.
_connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.
host+"/.s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){
t.ssl?n.requestSsl():n.startup(t.getStartupConf())}),n.on("sslconnect",function(){
n.startup(t.getStartupConf())}),this._attachListeners(n),n.once("end",()=>{let i=this.
_ending?new Error("Connection terminated"):new Error("Connection terminated unex\
pectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(i),this.
_ending||(this._connecting&&!this._connectionError?this._connectionCallback?this.
_connectionCallback(i):this._handleErrorEvent(i):this._connectionError||this._handleErrorEvent(
i)),w.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
return new this._Promise((t,n)=>{this._connect(i=>{i?n(i):t()})})}_attachListeners(e){
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
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Gh(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=Vh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=zn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
zn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){zn.finalizeSession(this.saslSession,
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
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",i=0;i<e.length;i++){var s=e[i];s===
"'"?n+=s+s:s==="\\"?(n+=s+s,t=!0):n+=s}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&w.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,a,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(a=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new Ba(
e,t,n),i.callback||(s=new this._Promise((h,l)=>{i.callback=(f,m)=>f?l(f):h(m)}))),
a&&(c=i.callback,u=setTimeout(()=>{var h=new Error("Query read timeout");w.nextTick(
()=>{i.handleError(h,this.connection)}),c(h),i.callback=()=>{};var l=this.queryQueue.
indexOf(i);l>-1&&this.queryQueue.splice(l,1),this._pulseQueryQueue()},a),i.callback=
(h,l)=>{clearTimeout(u),c(h,l)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(w.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(w.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};o(Yn,"Client");var Xt=Yn;Xt.Query=
Ba;Pa.exports=Xt});var Na=T((Jd,ka)=>{"use strict";p();var Xh=Ce().EventEmitter,Fa=o(function(){},"\
NOOP"),Ma=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Xn=class Xn{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};o(Xn,"IdleItem");var Jn=Xn,ei=class ei{constructor(e){this.callback=
e}};o(ei,"PendingItem");var Je=ei;function el(){throw new Error("Release called \
on client which has already been released to the pool.")}o(el,"throwOnDoubleRele\
ase");function er(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
er,"promisify");function tl(r,e){return o(function t(n){n.client=e,e.removeListener(
"error",t),e.on("error",()=>{r.log("additional client error after disconnection \
due to error",n)}),r._remove(e),r.emit("error",n,e)},"idleListener")}o(tl,"makeI\
dleListener");var ti=class ti extends Xh{constructor(e,t){super(),this.options=Object.
assign({},e),e!=null&&"password"in e&&Object.defineProperty(this.options,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&
e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),this.options.
max=this.options.max||this.options.poolSize||10,this.options.maxUses=this.options.
maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||!1,this.
options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.options.
log||function(){},this.Client=this.options.Client||t||tr().Client,this.Promise=this.
options.Promise||A.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.
idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,
this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse q\
ueue"),this.ended){this.log("pulse queue ended");return}if(this.ending){this.log(
"pulse queue on ending"),this._idle.length&&this._idle.slice().map(t=>{this._remove(
t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}if(!this.
_pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&
this._isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this.
_idle.pop();clearTimeout(t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;
return this._acquireClient(n,e,i,!1)}if(!this._isFull())return this.newClient(e);
throw new Error("unexpected condition")}_remove(e){let t=Ma(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Can\
not use a pool after calling end on the pool");return e?e(i):this.Promise.reject(
i)}let t=er(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&w.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new Je(t.callback)),n;let i=o((u,c,h)=>{clearTimeout(
a),t.callback(u,c,h)},"queueCallback"),s=new Je(i),a=setTimeout(()=>{Ma(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(s),n}return this.newClient(new Je(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=tl(this,t);this.log("checking c\
lient timeout");let i,s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{
this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to\
 connect",a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
a,void 0,Fa);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(h=>h.client===t)!==-1&&this._acquireClient(
t,new Je((h,l,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,Fa);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&el(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Jn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=er(this.Promise,e);
return E(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=er(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(h=>{u||(u=!0,a.release(h),n(h))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(h,l)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(h),h?n(h):n(void 0,
l)})}catch(h){return a.release(h),n(h)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=er(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};o(ti,"Pool");var Zn=ti;ka.exports=Zn});var Da={};ye(Da,{default:()=>rl});var rl,qa=ie(()=>{p();rl={}});var Oa=T((tp,nl)=>{nl.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var ja=T((rp,Ha)=>{"use strict";p();var Qa=Ce().EventEmitter,il=(pt(),Z(dt)),ri=lt(),
Ze=Ha.exports=function(r,e,t){Qa.call(this),r=ri.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};il.inherits(
Ze,Qa);var sl={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Ze.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=sl[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Ze.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Ze.prototype.catch=function(r){return this._getPromise().
catch(r)};Ze.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Ze.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,E(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,h)=>{c.forEach(l=>{e.emit(
"row",l,u[h])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(w.domain&&(t=w.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(ri.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(ri.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Va=T((ap,Wa)=>{"use strict";p();var al=(qa(),Z(Da)),ol=Hr(),sp=Oa(),Ka=Ce().
EventEmitter,ul=(pt(),Z(dt)),cl=Kt(),$a=ja(),pe=Wa.exports=function(r){Ka.call(this),
r=r||{},this._Promise=r.Promise||A.Promise,this._types=new ol(r.types),this.native=
new al({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new cl(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};pe.Query=$a;ul.inherits(pe,Ka);pe.prototype._errorAllQueries=
function(r){let e=o(t=>{w.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};pe.prototype._connect=
function(r){var e=this;if(this._connecting){w.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};pe.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};pe.prototype.query=function(r,e,t){var n,
i,s,a,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new $a(r,e,t),!n.callback){let c,h;i=new this._Promise((l,f)=>{c=
l,h=f}),n.callback=(l,f)=>l?h(l):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");w.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var h=this._queryQueue.indexOf(n);h>-1&&this._queryQueue.
splice(h,1),this._pulseQueryQueue()},s),n.callback=(c,h)=>{clearTimeout(a),u(c,h)}),
this._queryable?this._ending?(n.native=this.native,w.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,w.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
pe.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),w.nextTick(()=>{e.emit("end"),r&&r()})}),t};pe.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};pe.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};pe.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};pe.prototype.ref=function(){};
pe.prototype.unref=function(){};pe.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};pe.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var ni=T((cp,Ga)=>{"use strict";p();Ga.exports=Va()});var tr=T((lp,Ut)=>{"use strict";p();var hl=Ra(),ll=ht(),fl=Gn(),dl=Na(),{DatabaseError:pl}=$n(),
yl=o(r=>{var e;return e=class extends dl{constructor(n){super(n,r)}},o(e,"BoundP\
ool"),e},"poolFactory"),ii=o(function(r){this.defaults=ll,this.Client=r,this.Query=
this.Client.Query,this.Pool=yl(this.Client),this._pools=[],this.Connection=fl,this.
types=ct(),this.DatabaseError=pl},"PG");typeof w.env.NODE_PG_FORCE_NATIVE<"u"?Ut.
exports=new ii(ni()):(Ut.exports=new ii(hl),Object.defineProperty(Ut.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new ii(ni())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(Ut.exports,"\
native",{value:r}),r}}))});var ml={};ye(ml,{Client:()=>rr,ClientBase:()=>de.ClientBase,Connection:()=>de.Connection,
DatabaseError:()=>de.DatabaseError,Pool:()=>si,Query:()=>de.Query,defaults:()=>de.defaults,
neon:()=>Nt,neonConfig:()=>Ge,types:()=>de.types});module.exports=Z(ml);p();p();p();function Fi(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(t.length),{
username:i,password:s,host:a,hostname:u,port:c,pathname:h,search:l,searchParams:f,
hash:m}=new URL(n);s=decodeURIComponent(s);let b=i+":"+s,_=e?Object.fromEntries(
f.entries()):l;return{href:r,protocol:t,auth:b,username:i,password:s,host:a,hostname:u,
port:c,pathname:h,search:l,query:_,hash:m}}o(Fi,"parse");var ps=et(lt());var Ir=class Ir extends Error{constructor(){super(...arguments);g(this,"code",null);
g(this,"name","NeonDbError")}};o(Ir,"NeonDbError");var ft=Ir;function Nt(r,{arrayMode:e,
fullResults:t,queryCallback:n,resultCallback:i}={}){let s=Fi(r),{protocol:a,username:u,
password:c,hostname:h,pathname:l}=s;if(a!=="postgres:"&&a!=="postgresql:"||!h||!u||
!c||!l)throw new Error("Database connection string format should be: postgres://\
user:password@host.tld/dbname?option=value");return async function(f,...m){let b;
if(typeof f=="string")b=f,m=m[0]??[];else{b="";for(let v=0;v<f.length;v++)b+=f[v],
v<m.length&&(b+="$"+(v+1))}m=m.map(v=>(0,ps.prepareValue)(v));let _,L;try{let v=`\
https://${h}/sql`;_={query:b,params:m},n&&n(_),L=await fetch(v,{body:JSON.stringify(
_),method:"POST",headers:{"Neon-Connection-String":r,"Neon-Raw-Text-Output":"tru\
e","Neon-Array-Mode":"true"}})}catch(v){throw new ft(`Error connecting to databa\
se: ${v.message}`)}if(L.ok){let v=await L.json(),P=v.fields.map(N=>N.name),I=v.fields.
map(N=>de.types.getTypeParser(N.dataTypeID)),x=e===!0?v.rows.map(N=>N.map((V,k)=>V===
null?null:I[k](V))):v.rows.map(N=>Object.fromEntries(N.map((V,k)=>[P[k],V===null?
null:I[k](V)])));return i&&i(_,v,x),t?(v.viaNeonFetch=!0,v.rowAsArray=e,v.rows=x,
v):x}else{let{status:v}=L;if(v===400){let{message:P,code:I}=await L.json(),x=new ft(
P);throw x.code=I,x}else{let P=await L.text();throw new ft(`Database error (HTTP\
 status ${v}): ${P}`)}}}}o(Nt,"neon");var nr=et(tr());an();var za=et(Kt()),de=et(tr());var ai=class ai extends nr.Client{get neonConfig(){return this.connection.stream}connect(e){
let{neonConfig:t}=this;t.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.
ssl&&t.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. \
?sslmode=require in the connection string + forceDisablePgSSL = false) and the W\
ebSocket tunnel (useSecureWebSocket = true). Double encryption will increase lat\
ency and CPU usage. It may be appropriate to disable SSL in the Postgres connect\
ion parameters or set forceDisablePgSSL = true."),this.host==="localhost"&&console.
warn("The database host is 'localhost', which is the default host when none is s\
et. If that's intentional, please ignore this warning. If not, perhaps an enviro\
nment variable has not been set, or has not been passed to the library?");let n=super.
connect(e),i=t.pipelineTLS&&this.ssl,s=t.pipelineConnect==="password";if(!i&&!t.
pipelineConnect)return n;let a=this.connection;if(i&&a.on("connect",()=>a.stream.
emit("data","S")),s){a.removeAllListeners("authenticationCleartextPassword"),a.removeAllListeners(
"readyForQuery"),a.once("readyForQuery",()=>a.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let u=this.ssl?"sslconnect":"connect";a.on(u,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return n}async _handleAuthSASLContinue(e){let t=this.
saslSession,n=this.password,i=e.data;if(t.message!=="SASLInitialResponse"||typeof n!=
"string"||typeof i!="string")throw new Error("SASL: protocol error");let s=Object.
fromEntries(i.split(",").map(z=>{if(!/^.=/.test(z))throw new Error("SASL: Invali\
d attribute pair entry");let X=z[0],O=z.substring(2);return[X,O]})),a=s.r,u=s.s,
c=s.i;if(!a||!/^[!-+--~]+$/.test(a))throw new Error("SASL: SCRAM-SERVER-FIRST-ME\
SSAGE: nonce missing/unprintable");if(!u||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!c||!/^[1-9][0-9]*$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!a.startsWith(t.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(a.length===t.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(c,10),l=y.from(u,"base64"),f=new TextEncoder,
m=f.encode(n),b=await S.subtle.importKey("raw",m,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),_=new Uint8Array(await S.subtle.sign("HMAC",b,y.concat([l,y.from(
[0,0,0,1])]))),L=_;for(var v=0;v<h-1;v++)_=new Uint8Array(await S.subtle.sign("H\
MAC",b,_)),L=y.from(L.map((z,X)=>L[X]^_[X]));let P=L,I=await S.subtle.importKey(
"raw",P,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),x=new Uint8Array(await S.
subtle.sign("HMAC",I,f.encode("Client Key"))),N=await S.subtle.digest("SHA-256",
x),V="n=*,r="+t.clientNonce,k="r="+a+",s="+u+",i="+h,re="c=biws,r="+a,D=V+","+k+
","+re,he=await S.subtle.importKey("raw",N,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var R=new Uint8Array(await S.subtle.sign("HMAC",he,f.encode(D))),j=y.from(
x.map((z,X)=>x[X]^R[X])),K=j.toString("base64");let $=await S.subtle.importKey("\
raw",P,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),G=await S.subtle.sign("H\
MAC",$,f.encode("Server Key")),Y=await S.subtle.importKey("raw",G,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var q=y.from(await S.subtle.sign("HMAC",Y,f.encode(
D)));t.message="SASLResponse",t.serverSignature=q.toString("base64"),t.response=
re+",p="+K,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
o(ai,"NeonClient");var rr=ai;function wl(r,e){if(e)return{callback:e,result:void 0};
let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{
callback:i,result:s}}o(wl,"promisify");var oi=class oi extends nr.Pool{constructor(){
super(...arguments);g(this,"Client",rr);g(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!Ge.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=wl(this.Promise,
i);i=s.callback;try{let a=new za.default(this.options),u=encodeURIComponent,c=encodeURI,
h=`postgresql://${u(a.user)}:${u(a.password)}@${u(a.host)}/${c(a.database)}`,l=typeof t==
"string"?t:t.text,f=(typeof t=="string"?n:t.values)??[];Nt(h,{fullResults:!0,arrayMode:t.
rowMode==="array"})(l,f).then(b=>i(void 0,b)).catch(b=>i(b))}catch(a){i(a)}return s.
result}};o(oi,"NeonPool");var si=oi;
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
