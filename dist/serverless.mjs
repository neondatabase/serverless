var Ha=Object.create;var st=Object.defineProperty;var Ka=Object.getOwnPropertyDescriptor;var Wa=Object.getOwnPropertyNames;var Ga=Object.getPrototypeOf,Va=Object.prototype.hasOwnProperty;var o=(r,e)=>st(r,"name",{value:e,configurable:!0});var ae=(r,e)=>()=>(r&&(e=r(r=0)),e);var N=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),fe=(r,e)=>{for(var t in e)
st(r,t,{get:e[t],enumerable:!0})},kn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Wa(e))!Va.call(r,i)&&i!==t&&st(r,i,{get:()=>e[i],enumerable:!(n=
Ka(e,i))||n.enumerable});return r};var at=(r,e,t)=>(t=r!=null?Ha(Ga(r)):{},kn(e||!r||!r.__esModule?st(t,"default",{
value:r,enumerable:!0}):t,r)),Z=r=>kn(st({},"__esModule",{value:!0}),r);var jn=N(It=>{"use strict";y();It.byteLength=Ja;It.toByteArray=Za;It.fromByteArray=
to;var me=[],pe=[],za=typeof Uint8Array<"u"?Uint8Array:Array,ir="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Re=0,Qn=ir.length;Re<Qn;++Re)
me[Re]=ir[Re],pe[ir.charCodeAt(Re)]=Re;var Re,Qn;pe["-".charCodeAt(0)]=62;pe["_".
charCodeAt(0)]=63;function $n(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o($n,"getLens");function Ja(r){var e=$n(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(Ja,"byteLength");function Ya(r,e,t){return(e+t)*3/4-t}o(Ya,"_byteLeng\
th");function Za(r){var e,t=$n(r),n=t[0],i=t[1],s=new za(Ya(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=pe[r.charCodeAt(c)]<<18|pe[r.charCodeAt(c+1)]<<12|pe[r.
charCodeAt(c+2)]<<6|pe[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=pe[r.charCodeAt(c)]<<2|pe[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=pe[r.charCodeAt(c)]<<10|pe[r.charCodeAt(c+1)]<<4|pe[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o(Za,"toByteArray");function Xa(r){return me[r>>
18&63]+me[r>>12&63]+me[r>>6&63]+me[r&63]}o(Xa,"tripletToBase64");function eo(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(Xa(n));return i.join("")}o(eo,"encodeChunk");function to(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(eo(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(me[e>>2]+me[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
me[e>>10]+me[e>>4&63]+me[e<<2&63]+"=")),i.join("")}o(to,"fromByteArray")});var Hn=N(sr=>{y();sr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,d=t?-1:1,g=r[e+f];for(f+=d,s=g&(1<<-h)-1,g>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=d,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=d,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(g?
-1:1)*a*Math.pow(2,s-n)};sr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,d=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:s-1,S=n?1:-1,A=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=d/c:e+=
d*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+g]=u&255,g+=S,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+g]=a&255,g+=S,a/=256,l-=8);r[t+g-S]|=A*128}});var oi=N($e=>{"use strict";y();var ar=jn(),ke=Hn(),Kn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$e.Buffer=
p;$e.SlowBuffer=oo;$e.INSPECT_MAX_BYTES=50;var Pt=2147483647;$e.kMaxLength=Pt;p.
TYPED_ARRAY_SUPPORT=ro();!p.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function ro(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(ro,"typedArraySupport");Object.defineProperty(p.prototype,
"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}});
Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(
this))return this.byteOffset}});function be(r){if(r>Pt)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,p.prototype),e}o(be,"createBuffer");function p(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return lr(r)}return zn(r,e,t)}o(p,"Buf\
fer");p.poolSize=8192;function zn(r,e,t){if(typeof r=="string")return io(r,e);if(ArrayBuffer.
isView(r))return so(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(ge(r,ArrayBuffer)||r&&ge(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(ge(r,SharedArrayBuffer)||r&&ge(r.buffer,SharedArrayBuffer)))return ur(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return p.from(n,e,t);let i=ao(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return p.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
zn,"from");p.from=function(r,e,t){return zn(r,e,t)};Object.setPrototypeOf(p.prototype,
Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function Jn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(Jn,"assertSize");function no(r,e,t){
return Jn(r),r<=0?be(r):e!==void 0?typeof t=="string"?be(r).fill(e,t):be(r).fill(
e):be(r)}o(no,"alloc");p.alloc=function(r,e,t){return no(r,e,t)};function lr(r){
return Jn(r),be(r<0?0:hr(r)|0)}o(lr,"allocUnsafe");p.allocUnsafe=function(r){return lr(
r)};p.allocUnsafeSlow=function(r){return lr(r)};function io(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!p.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Yn(r,e)|0,n=be(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(io,"fromString");function or(r){let e=r.length<0?0:hr(r.length)|0,t=be(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(or,"fromArrayLike");function so(r){if(ge(r,Uint8Array)){
let e=new Uint8Array(r);return ur(e.buffer,e.byteOffset,e.byteLength)}return or(
r)}o(so,"fromArrayView");function ur(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,p.prototype),n}o(ur,"fromArrayBuffer");function ao(r){if(p.isBuffer(r)){let e=hr(
r.length)|0,t=be(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||dr(r.length)?be(0):or(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return or(r.data)}o(ao,"fromObject");function hr(r){if(r>=
Pt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Pt.toString(16)+" bytes");return r|0}o(hr,"checked");function oo(r){return+r!=r&&
(r=0),p.alloc(+r)}o(oo,"SlowBuffer");p.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==p.prototype},"isBuffer");p.compare=o(function(e,t){if(ge(e,Uint8Array)&&
(e=p.from(e,e.offset,e.byteLength)),ge(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),
!p.isBuffer(e)||!p.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");p.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");p.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=p.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(ge(a,Uint8Array))s+a.length>i.length?(p.isBuffer(
a)||(a=p.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(p.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function Yn(r,e){if(p.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ge(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return cr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return ai(r).length;default:if(i)return n?-1:cr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(Yn,"byteLength");p.byteLength=Yn;function uo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return So(
this,e,t);case"utf8":case"utf-8":return Xn(this,e,t);case"ascii":return mo(this,
e,t);case"latin1":case"binary":return go(this,e,t);case"base64":return yo(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Eo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
uo,"slowToString");p.prototype._isBuffer=!0;function Ne(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(Ne,"swap");p.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Ne(this,t,t+1);return this},"swap16");p.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Ne(this,t,t+3),Ne(this,t+1,t+2);return this},"swap32");
p.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ne(this,t,t+7),
Ne(this,t+1,t+6),Ne(this,t+2,t+5),Ne(this,t+3,t+4);return this},"swap64");p.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?Xn(
this,0,e):uo.apply(this,arguments)},"toString");p.prototype.toLocaleString=p.prototype.
toString;p.prototype.equals=o(function(e){if(!p.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:p.compare(this,e)===0},"equals");
p.prototype.inspect=o(function(){let e="",t=$e.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Kn&&(p.prototype[Kn]=p.prototype.inspect);p.prototype.compare=
o(function(e,t,n,i,s){if(ge(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function Zn(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,dr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=p.from(e,n)),p.isBuffer(e))return e.length===0?-1:Wn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Wn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Zn,"bid\
irectionalIndexOf");function Wn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Wn,"arrayIndexOf");p.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");p.prototype.
indexOf=o(function(e,t,n){return Zn(this,e,t,n,!0)},"indexOf");p.prototype.lastIndexOf=
o(function(e,t,n){return Zn(this,e,t,n,!1)},"lastIndexOf");function co(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(dr(u))
return a;r[t+a]=u}return a}o(co,"hexWrite");function lo(r,e,t,n){return Bt(cr(e,
r.length-t),r,t,n)}o(lo,"utf8Write");function ho(r,e,t,n){return Bt(vo(e),r,t,n)}
o(ho,"asciiWrite");function fo(r,e,t,n){return Bt(ai(e),r,t,n)}o(fo,"base64Write");
function po(r,e,t,n){return Bt(Co(e,r.length-t),r,t,n)}o(po,"ucs2Write");p.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return co(this,e,t,n);case"utf8":case"utf-8":return lo(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return ho(this,e,t,n);case"base64":return fo(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return po(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");p.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function yo(r,e,t){return e===0&&t===r.
length?ar.fromByteArray(r):ar.fromByteArray(r.slice(e,t))}o(yo,"base64Slice");function Xn(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return wo(n)}o(Xn,"utf8Slice");var Gn=4096;function wo(r){
let e=r.length;if(e<=Gn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Gn));return t}o(wo,"d\
ecodeCodePointsArray");function mo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(mo,"asciiSlice");function go(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(go,"latin1Slice");function So(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=_o[r[s]];return i}o(So,"he\
xSlice");function Eo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(Eo,"utf16leSlice");p.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,p.prototype),i},"slice");function X(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(X,"checkOffset");p.prototype.readUintLE=
p.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=this[e],
s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");p.prototype.
readUintBE=p.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");p.prototype.readUint8=p.prototype.readUInt8=o(function(e,t){return e=
e>>>0,t||X(e,1,this.length),this[e]},"readUInt8");p.prototype.readUint16LE=p.prototype.
readUInt16LE=o(function(e,t){return e=e>>>0,t||X(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");p.prototype.readUint16BE=p.prototype.readUInt16BE=o(function(e,t){
return e=e>>>0,t||X(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");p.prototype.
readUint32LE=p.prototype.readUInt32LE=o(function(e,t){return e=e>>>0,t||X(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
p.prototype.readUint32BE=p.prototype.readUInt32BE=o(function(e,t){return e=e>>>0,
t||X(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");p.prototype.readBigUInt64LE=ve(o(function(e){e=e>>>0,Qe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ot(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));p.prototype.
readBigUInt64BE=ve(o(function(e){e=e>>>0,Qe(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&ot(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));p.prototype.readIntLE=o(function(e,t,n){
e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)
i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");p.prototype.
readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=t,s=1,a=this[e+
--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*t)),
a},"readIntBE");p.prototype.readInt8=o(function(e,t){return e=e>>>0,t||X(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");p.prototype.readInt16LE=
o(function(e,t){e=e>>>0,t||X(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");p.prototype.readInt16BE=o(function(e,t){e=e>>>
0,t||X(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");p.prototype.readInt32LE=o(function(e,t){return e=e>>>0,t||X(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");p.prototype.
readInt32BE=o(function(e,t){return e=e>>>0,t||X(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");p.prototype.readBigInt64LE=ve(o(function(e){
e=e>>>0,Qe(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ot(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));p.prototype.readBigInt64BE=ve(o(function(e){e=e>>>0,Qe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ot(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));p.prototype.
readFloatLE=o(function(e,t){return e=e>>>0,t||X(e,4,this.length),ke.read(this,e,
!0,23,4)},"readFloatLE");p.prototype.readFloatBE=o(function(e,t){return e=e>>>0,
t||X(e,4,this.length),ke.read(this,e,!1,23,4)},"readFloatBE");p.prototype.readDoubleLE=
o(function(e,t){return e=e>>>0,t||X(e,8,this.length),ke.read(this,e,!0,52,8)},"r\
eadDoubleLE");p.prototype.readDoubleBE=o(function(e,t){return e=e>>>0,t||X(e,8,this.
length),ke.read(this,e,!1,52,8)},"readDoubleBE");function ue(r,e,t,n,i,s){if(!p.
isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>
i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)
throw new RangeError("Index out of range")}o(ue,"checkInt");p.prototype.writeUintLE=
p.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;ue(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<n&&(s*=256);)this[t+
a]=e/s&255;return t+n},"writeUIntLE");p.prototype.writeUintBE=p.prototype.writeUIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;ue(this,
e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)this[t+s]=e/a&255;
return t+n},"writeUIntBE");p.prototype.writeUint8=p.prototype.writeUInt8=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");p.prototype.
writeUint16LE=p.prototype.writeUInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");p.prototype.
writeUint16BE=p.prototype.writeUInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");p.prototype.
writeUint32LE=p.prototype.writeUInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=
e&255,t+4},"writeUInt32LE");p.prototype.writeUint32BE=p.prototype.writeUInt32BE=
o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,4,4294967295,0),this[t]=e>>>
24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ei(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>
8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,t}o(ei,"wrtBigUInt64LE");function ti(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=a,a=a>>8,r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(ti,"wrtBigUInt64BE");p.
prototype.writeBigUInt64LE=ve(o(function(e,t=0){return ei(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));p.prototype.writeBigUInt64BE=ve(o(function(e,t=0){
return ti(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
p.prototype.writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);ue(this,e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIn\
tLE");p.prototype.writeIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.
pow(2,8*n-1);ue(this,e,t,n,c-1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&
(a*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},
"writeIntBE");p.prototype.writeInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(
this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");p.prototype.
writeInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),
this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");p.prototype.writeInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");p.prototype.writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>
0,n||ue(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+
2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");p.prototype.writeInt32BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+
e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"write\
Int32BE");p.prototype.writeBigInt64LE=ve(o(function(e,t=0){return ei(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));p.prototype.
writeBigInt64BE=ve(o(function(e,t=0){return ti(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function ri(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}o(ri,"checkIEEE754");function ni(r,e,t,n,i){return e=+e,t=
t>>>0,i||ri(r,e,t,4,34028234663852886e22,-34028234663852886e22),ke.write(r,e,t,n,
23,4),t+4}o(ni,"writeFloat");p.prototype.writeFloatLE=o(function(e,t,n){return ni(
this,e,t,!0,n)},"writeFloatLE");p.prototype.writeFloatBE=o(function(e,t,n){return ni(
this,e,t,!1,n)},"writeFloatBE");function ii(r,e,t,n,i){return e=+e,t=t>>>0,i||ri(
r,e,t,8,17976931348623157e292,-17976931348623157e292),ke.write(r,e,t,n,52,8),t+8}
o(ii,"writeDouble");p.prototype.writeDoubleLE=o(function(e,t,n){return ii(this,e,
t,!0,n)},"writeDoubleLE");p.prototype.writeDoubleBE=o(function(e,t,n){return ii(
this,e,t,!1,n)},"writeDoubleBE");p.prototype.copy=o(function(e,t,n,i){if(!p.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=
this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-
t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),
s},"copy");p.prototype.fill=o(function(e,t,n,i){if(typeof e=="string"){if(typeof t==
"string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i==
"string"&&!p.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===
1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)
this[s]=e;else{let a=p.isBuffer(e)?e:p.from(e,i),u=a.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=
a[s%u]}return this},"fill");var Oe={};function fr(r,e,t){Oe[r]=class extends t{static{
o(this,"NodeError")}constructor(){super(),Object.defineProperty(this,"message",{
value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name}\
 [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.
name} [${r}]: ${this.message}`}}}o(fr,"E");fr("ERR_BUFFER_OUT_OF_BOUNDS",function(r){
return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside bu\
ffer bounds"},RangeError);fr("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}\
" argument must be of type number. Received type ${typeof e}`},TypeError);fr("ER\
R_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;
return Number.isInteger(t)&&Math.abs(t)>2**32?i=Vn(String(t)):typeof t=="bigint"&&
(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Vn(i)),i+=
"n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Vn(r){let e="",
t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.
slice(0,t)}${e}`}o(Vn,"addNumericalSeparator");function bo(r,e,t){Qe(e,"offset"),
(r[e]===void 0||r[e+t]===void 0)&&ot(e,r.length-(t+1))}o(bo,"checkBounds");function si(r,e,t,n,i,s){
if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and \
< 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,new Oe.ERR_OUT_OF_RANGE(
"value",u,r)}bo(n,i,s)}o(si,"checkIntBI");function Qe(r,e){if(typeof r!="number")
throw new Oe.ERR_INVALID_ARG_TYPE(e,"number",r)}o(Qe,"validateNumber");function ot(r,e,t){
throw Math.floor(r)!==r?(Qe(r,t),new Oe.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Oe.ERR_BUFFER_OUT_OF_BOUNDS:new Oe.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}o(ot,"boundsError");var xo=/[^+/0-9A-Za-z-_]/g;function Ao(r){
if(r=r.split("=")[0],r=r.trim().replace(xo,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}o(Ao,"base64clean");function cr(r,e){e=e||1/0;let t,n=r.
length,i=null,s=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&t<57344){if(!i){
if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===n){(e-=3)>-1&&
s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,
189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,
189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;
s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}o(
cr,"utf8ToBytes");function vo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}o(vo,"asciiToBytes");function Co(r,e){let t,n,i,s=[];for(let a=0;a<
r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,i=t%256,s.push(i),s.push(n);return s}
o(Co,"utf16leToBytes");function ai(r){return ar.toByteArray(Ao(r))}o(ai,"base64T\
oBytes");function Bt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}o(Bt,"blitBuffer");function ge(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
o(ge,"isInstance");function dr(r){return r!==r}o(dr,"numberIsNaN");var _o=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function ve(r){return typeof BigInt>"u"?Lo:r}
o(ve,"defineBigIntMethod");function Lo(){throw new Error("BigInt not supported")}
o(Lo,"BufferBigIntNotDefined")});var v,_,L,x,w,m,y=ae(()=>{"use strict";v=globalThis,_=globalThis.setImmediate??(r=>setTimeout(
r,0)),L=globalThis.clearImmediate??(r=>clearTimeout(r)),x=globalThis.crypto??{};
x.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:oi().Buffer,m=globalThis.process??{};m.env??={};try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var Le=N((cf,Cr)=>{"use strict";y();var We=typeof Reflect=="object"?Reflect:null,
Ii=We&&typeof We.apply=="function"?We.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),qt;We&&typeof We.ownKeys=="function"?qt=We.ownKeys:
Object.getOwnPropertySymbols?qt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):qt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function vu(r){console&&console.warn&&
console.warn(r)}o(vu,"ProcessEmitWarning");var Bi=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function j(){j.init.call(this)}o(j,"EventEmitter");Cr.exports=
j;Cr.exports.once=Uu;j.EventEmitter=j;j.prototype._events=void 0;j.prototype._eventsCount=
0;j.prototype._maxListeners=void 0;var Pi=10;function Ot(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(Ot,"checkListener");Object.defineProperty(j,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Pi},set:function(r){if(typeof r!="\
number"||r<0||Bi(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Pi=r}});j.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};j.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||Bi(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function Ri(r){return r._maxListeners===void 0?j.defaultMaxListeners:r._maxListeners}
o(Ri,"_getMaxListeners");j.prototype.getMaxListeners=o(function(){return Ri(this)},
"getMaxListeners");j.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")Ii(c,this,t);else for(var l=c.
length,h=qi(c,l),n=0;n<l;++n)Ii(h[n],this,t);return!0},"emit");function Ni(r,e,t,n){
var i,s,a;if(Ot(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=Ri(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,vu(u)}
return r}o(Ni,"_addListener");j.prototype.addListener=o(function(e,t){return Ni(
this,e,t,!1)},"addListener");j.prototype.on=j.prototype.addListener;j.prototype.
prependListener=o(function(e,t){return Ni(this,e,t,!0)},"prependListener");function Cu(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(Cu,"onceWrapper");function Mi(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=Cu.bind(n);return i.listener=t,n.wrapFn=i,i}o(Mi,"\
_onceWrap");j.prototype.once=o(function(e,t){return Ot(t),this.on(e,Mi(this,e,t)),
this},"once");j.prototype.prependOnceListener=o(function(e,t){return Ot(t),this.
prependListener(e,Mi(this,e,t)),this},"prependOnceListener");j.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(Ot(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():_u(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");j.prototype.off=j.prototype.
removeListener;j.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function Di(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?Lu(i):qi(i,i.length)}o(Di,"_listeners");j.prototype.
listeners=o(function(e){return Di(this,e,!0)},"listeners");j.prototype.rawListeners=
o(function(e){return Di(this,e,!1)},"rawListeners");j.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):Fi.call(r,e)};j.prototype.
listenerCount=Fi;function Fi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(Fi,"listenerCount");
j.prototype.eventNames=o(function(){return this._eventsCount>0?qt(this._events):
[]},"eventNames");function qi(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(qi,"arrayClone");function _u(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(_u,"spliceOne");function Lu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(Lu,"unwrapListeners");function Uu(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Oi(r,e,s,{once:!0}),e!=="error"&&Tu(r,i,{once:!0})})}
o(Uu,"once");function Tu(r,e,t){typeof r.on=="function"&&Oi(r,"error",e,t)}o(Tu,
"addErrorHandlerIfEventEmitter");function Oi(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Oi,"eventTargetAgnosticAddListener")});var ht={};fe(ht,{default:()=>Iu});var Iu,ft=ae(()=>{y();Iu={}});function dt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],d=o((C,b)=>C>>>b|C<<32-b,
"rrot"),g=new Uint32Array(64),S=new Uint8Array(64),A=o(()=>{for(let P=0,R=0;P<16;P++,
R+=4)g[P]=S[R]<<24|S[R+1]<<16|S[R+2]<<8|S[R+3];for(let P=16;P<64;P++){let R=d(g[P-
15],7)^d(g[P-15],18)^g[P-15]>>>3,O=d(g[P-2],17)^d(g[P-2],19)^g[P-2]>>>10;g[P]=g[P-
16]+R+g[P-7]+O|0}let C=e,b=t,q=n,W=i,U=s,B=a,M=u,$=c;for(let P=0;P<64;P++){let R=d(
U,6)^d(U,11)^d(U,25),O=U&B^~U&M,Q=$+R+O+f[P]+g[P]|0,G=d(C,2)^d(C,13)^d(C,22),H=C&
b^C&q^b&q,F=G+H|0;$=M,M=B,B=U,U=W+Q|0,W=q,q=b,b=C,C=Q+F|0}e=e+C|0,t=t+b|0,n=n+q|
0,i=i+W|0,s=s+U|0,a=a+B|0,u=u+M|0,c=c+$|0,h=0},"process"),E=o(C=>{typeof C=="str\
ing"&&(C=new TextEncoder().encode(C));for(let b=0;b<C.length;b++)S[h++]=C[b],h===
64&&A();l+=C.length},"add"),T=o(()=>{if(S[h++]=128,h==64&&A(),h+8>64){for(;h<64;)
S[h++]=0;A()}for(;h<58;)S[h++]=0;let C=l*8;S[h++]=C/1099511627776&255,S[h++]=C/4294967296&
255,S[h++]=C>>>24,S[h++]=C>>>16&255,S[h++]=C>>>8&255,S[h++]=C&255,A();let b=new Uint8Array(
32);return b[0]=e>>>24,b[1]=e>>>16&255,b[2]=e>>>8&255,b[3]=e&255,b[4]=t>>>24,b[5]=
t>>>16&255,b[6]=t>>>8&255,b[7]=t&255,b[8]=n>>>24,b[9]=n>>>16&255,b[10]=n>>>8&255,
b[11]=n&255,b[12]=i>>>24,b[13]=i>>>16&255,b[14]=i>>>8&255,b[15]=i&255,b[16]=s>>>
24,b[17]=s>>>16&255,b[18]=s>>>8&255,b[19]=s&255,b[20]=a>>>24,b[21]=a>>>16&255,b[22]=
a>>>8&255,b[23]=a&255,b[24]=u>>>24,b[25]=u>>>16&255,b[26]=u>>>8&255,b[27]=u&255,
b[28]=c>>>24,b[29]=c>>>16&255,b[30]=c>>>8&255,b[31]=c&255,b},"digest");return r===
void 0?{add:E,digest:T}:(E(r),T())}var ki=ae(()=>{"use strict";y();o(dt,"sha256")});var pt,Qi=ae(()=>{"use strict";y();pt=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static stateIdentity=new Int32Array(
[1732584193,-271733879,-1732584194,271733878]);static buffer32Identity=new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);static hexChars="0123456789abcdef";static hexOut=[];static onePassHasher=new r;static _hex(e){
let t=r.hexChars,n=r.hexOut,i,s,a,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],a=0;a<8;a+=
2)n[s+1+a]=t.charAt(i&15),i>>>=4,n[s+0+a]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
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
0,e[2]=s+e[2]|0,e[3]=a+e[3]|0}_dataLength=0;_bufferLength=0;_state=new Int32Array(
4);_buffer=new ArrayBuffer(68);_buffer8;_buffer32;constructor(){this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}start(){
return this._dataLength=0,this._bufferLength=0,this._state.set(r.stateIdentity),
this}appendStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,s,a;
for(a=0;a<e.length;a+=1){if(s=e.charCodeAt(a),s<128)t[i++]=s;else if(s<2048)t[i++]=
(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=
s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++a)-56320)+
65536,s>1114111)throw new Error("Unicode standard supports code points up to U+1\
0FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=s>>>6&63|128,t[i++]=s&63|
128}i>=64&&(this._dataLength+=64,r._md5cycle(this._state,n),i-=64,n[0]=n[16])}return this.
_bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-a,64-i);s--;)t[i++]=e.charCodeAt(
a++);if(i<64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this.
_bufferLength=i,this}appendByteArray(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-a,64-i);s--;)t[i++]=e[a++];if(i<
64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this._bufferLength=
i,this}getState(){let e=this._state;return{buffer:String.fromCharCode.apply(null,
Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[
e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this._state,s;for(this.
_dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=
n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,
n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let a=this._dataLength*
8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(r.buffer32Identity.subarray(s),s),t>55&&
(r._md5cycle(this._state,i),i.set(r.buffer32Identity)),a<=4294967295)i[14]=a;else{
let u=a.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(u[2],
16),l=parseInt(u[1],16)||0;i[14]=c,i[15]=l}return r._md5cycle(this._state,i),e?this.
_state:r._hex(this._state)}}});var _r={};fe(_r,{createHash:()=>Bu,createHmac:()=>Ru,randomBytes:()=>Pu});function Pu(r){
return x.getRandomValues(w.alloc(r))}function Bu(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return w.from(dt(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?pt.hashStr(e):pt.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Ru(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=dt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(dt(a),64),w.from(dt(u))}}}}}var Lr=ae(()=>{y();ki();Qi();o(Pu,"randomBytes");
o(Bu,"createHash");o(Ru,"createHmac")});var Tr=N($i=>{"use strict";y();$i.parse=function(r,e){return new Ur(r,e).parse()};
var Ur=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||Nu,this.position=0,this.entries=[],this.recorded=[],this.dimension=
0}isEof(){return this.position>=this.source.length}nextCharacter(){var e=this.source[this.
position++];return e==="\\"?{value:this.source[this.position++],escaped:!0}:{value:e,
escaped:!1}}record(e){this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>
0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(
t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){
var t,n,i;for(this.consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),
t.value==="{"&&!i)this.dimension++,this.dimension>1&&(n=new r(this.source.substr(
this.position-1),this.transform),this.entries.push(n.parse(!0)),this.position+=n.
position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(
!0),i=!i):t.value===","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==
0)throw new Error("array dimension not balanced");return this.entries}};function Nu(r){
return r}o(Nu,"identity")});var Ir=N((_f,ji)=>{y();var Mu=Tr();ji.exports={create:function(r,e){return{parse:function(){
return Mu.parse(r,e)}}}}});var Wi=N((Uf,Ki)=>{"use strict";y();var Du=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Fu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,qu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Ou=/^-?infinity$/;
Ki.exports=o(function(e){if(Ou.test(e))return Number(e.replace("i","I"));var t=Du.
exec(e);if(!t)return ku(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Hi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,d=Qu(e);return d!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),Pr(i)&&f.setUTCFullYear(i),d!==0&&f.setTime(f.getTime()-d)):(f=new Date(
i,s,a,u,c,l,h),Pr(i)&&f.setFullYear(i)),f},"parseDate");function ku(r){var e=Fu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Hi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Pr(t)&&a.setFullYear(t),a}}o(ku,"getDate");
function Qu(r){if(r.endsWith("+00"))return 0;var e=qu.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(Qu,"timeZoneOffset");function Hi(r){
return-(r-1)}o(Hi,"bcYearToNegativeYear");function Pr(r){return r>=0&&r<100}o(Pr,
"is0To99")});var Vi=N((Pf,Gi)=>{y();Gi.exports=ju;var $u=Object.prototype.hasOwnProperty;function ju(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)$u.call(t,
n)&&(r[n]=t[n])}return r}o(ju,"extend")});var Yi=N((Nf,Ji)=>{"use strict";y();var Hu=Vi();Ji.exports=Ge;function Ge(r){if(!(this instanceof
Ge))return new Ge(r);Hu(this,rc(r))}o(Ge,"PostgresInterval");var Ku=["seconds","\
minutes","hours","days","months","years"];Ge.prototype.toPostgres=function(){var r=Ku.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Wu={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Gu=["years","months","days"],Vu=["hours","minutes","seconds"];Ge.
prototype.toISOString=Ge.prototype.toISO=function(){var r=Gu.map(t,this).join(""),
e=Vu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Wu[n]}};var Br="([+-]?\\d+)",zu=Br+"\\s+years?",Ju=Br+"\\s+mons?",Yu=Br+"\
\\s+days?",Zu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Xu=new RegExp([
zu,Ju,Yu,Zu].map(function(r){return"("+r+")?"}).join("\\s*")),zi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},ec=["hours","minutes","sec\
onds","milliseconds"];function tc(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(tc,"parseMilliseconds");function rc(r){if(!r)return{};var e=Xu.exec(
r),t=e[8]==="-";return Object.keys(zi).reduce(function(n,i){var s=zi[i],a=e[s];return!a||
(a=i==="milliseconds"?tc(a):parseInt(a,10),!a)||(t&&~ec.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(rc,"parse")});var Xi=N((Ff,Zi)=>{"use strict";y();Zi.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var as=N((kf,ss)=>{y();var yt=Tr(),wt=Ir(),kt=Wi(),ts=Yi(),rs=Xi();function Qt(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Qt,"allowNull");function ns(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(ns,"parseBool");function nc(r){return r?yt.parse(r,ns):null}o(nc,"pars\
eBoolArray");function ic(r){return parseInt(r,10)}o(ic,"parseBaseTenInt");function Rr(r){
return r?yt.parse(r,Qt(ic)):null}o(Rr,"parseIntegerArray");function sc(r){return r?
yt.parse(r,Qt(function(e){return is(e).trim()})):null}o(sc,"parseBigIntegerArray");
var ac=o(function(r){if(!r)return null;var e=wt.create(r,function(t){return t!==
null&&(t=Fr(t)),t});return e.parse()},"parsePointArray"),Nr=o(function(r){if(!r)
return null;var e=wt.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ye=o(function(r){if(!r)return null;var e=wt.
create(r);return e.parse()},"parseStringArray"),Mr=o(function(r){if(!r)return null;
var e=wt.create(r,function(t){return t!==null&&(t=kt(t)),t});return e.parse()},"\
parseDateArray"),oc=o(function(r){if(!r)return null;var e=wt.create(r,function(t){
return t!==null&&(t=ts(t)),t});return e.parse()},"parseIntervalArray"),uc=o(function(r){
return r?yt.parse(r,Qt(rs)):null},"parseByteAArray"),Dr=o(function(r){return parseInt(
r,10)},"parseInteger"),is=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),es=o(function(r){return r?yt.parse(r,Qt(JSON.parse)):null},
"parseJsonArray"),Fr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),cc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=Fr(e);return s.radius=parseFloat(t),s},"parseCircle"),lc=o(function(r){r(20,
is),r(21,Dr),r(23,Dr),r(26,Dr),r(700,parseFloat),r(701,parseFloat),r(16,ns),r(1082,
kt),r(1114,kt),r(1184,kt),r(600,Fr),r(651,ye),r(718,cc),r(1e3,nc),r(1001,uc),r(1005,
Rr),r(1007,Rr),r(1028,Rr),r(1016,sc),r(1017,ac),r(1021,Nr),r(1022,Nr),r(1231,Nr),
r(1014,ye),r(1015,ye),r(1008,ye),r(1009,ye),r(1040,ye),r(1041,ye),r(1115,Mr),r(1182,
Mr),r(1185,Mr),r(1186,ts),r(1187,oc),r(17,rs),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,es),r(3807,es),r(3907,ye),r(2951,ye),r(791,ye),r(1183,
ye),r(1270,ye)},"init");ss.exports={init:lc}});var us=N((jf,os)=>{"use strict";y();var ce=1e6;function hc(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>
0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/
ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%ce,a=4294967296*s+t,u=""+a%ce,n+u+i}o(hc,"readInt8");os.
exports=hc});var ds=N((Wf,fs)=>{y();var fc=us(),V=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(g,S,A){
return g*Math.pow(2,A)+S};var s=t>>3,a=o(function(g){return n?~g&255:g},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var d=(e+t)%8;return d>0&&
(l=i(l,a(r[h])>>8-d,d)),l},"parseBits"),hs=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=V(r,1),s=V(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var d=1;d<=f;d++)a/=2,(h&1<<f-d)>0&&(l+=a);return l},"parsePrecisionBits"),
c=V(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),dc=o(function(r){return V(r,1)==1?-1*
(V(r,15,1,!0)+1):V(r,15,1)},"parseInt16"),cs=o(function(r){return V(r,1)==1?-1*(V(
r,31,1,!0)+1):V(r,31,1)},"parseInt32"),pc=o(function(r){return hs(r,23,8)},"pars\
eFloat32"),yc=o(function(r){return hs(r,52,11)},"parseFloat64"),wc=o(function(r){
var e=V(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,V(r,16,16)),n=0,i=[],
s=V(r,16),a=0;a<s;a++)n+=V(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,V(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ls=o(function(r,e){var t=V(
e,1),n=V(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),mt=o(function(r){for(var e=V(r,32),t=V(r,32,32),
n=V(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=V(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=V(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
V(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],d;if(l.length>1){var g=l.shift();for(d=0;d<g;d++)f[d]=c(l,h);l.unshift(
g)}else for(d=0;d<l[0];d++)f[d]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),mc=o(function(r){return r.toString("utf8")},"parseText"),gc=o(function(r){return r===
null?null:V(r,8)>0},"parseBool"),Sc=o(function(r){r(20,fc),r(21,dc),r(23,cs),r(26,
cs),r(1700,wc),r(700,pc),r(701,yc),r(16,gc),r(1114,ls.bind(null,!1)),r(1184,ls.bind(
null,!0)),r(1e3,mt),r(1007,mt),r(1016,mt),r(1008,mt),r(1009,mt),r(25,mc)},"init");
fs.exports={init:Sc}});var ys=N((zf,ps)=>{y();ps.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Et=N(St=>{y();var Ec=as(),bc=ds(),xc=Ir(),Ac=ys();St.getTypeParser=vc;St.setTypeParser=
Cc;St.arrayParser=xc;St.builtins=Ac;var gt={text:{},binary:{}};function ws(r){return String(
r)}o(ws,"noParse");function vc(r,e){return e=e||"text",gt[e]&&gt[e][r]||ws}o(vc,
"getTypeParser");function Cc(r,e,t){typeof e=="function"&&(t=e,e="text"),gt[e][r]=
t}o(Cc,"setTypeParser");Ec.init(function(r,e){gt.text[r]=e});bc.init(function(r,e){
gt.binary[r]=e})});var bt=N((ed,qr)=>{"use strict";y();qr.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Ve=Et(),_c=Ve.getTypeParser(
20,"text"),Lc=Ve.getTypeParser(1016,"text");qr.exports.__defineSetter__("parseIn\
t8",function(r){Ve.setTypeParser(20,"text",r?Ve.getTypeParser(23,"text"):_c),Ve.
setTypeParser(1016,"text",r?Ve.getTypeParser(1007,"text"):Lc)})});var xt=N((rd,gs)=>{"use strict";y();var Uc=(Lr(),Z(_r)),Tc=bt();function Ic(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Ic,"escapeElement");
function ms(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+ms(r[t]):r[t]instanceof w?e+="\\\\x"+r[t].
toString("hex"):e+=Ic($t(r[t]));return e=e+"}",e}o(ms,"arrayString");var $t=o(function(r,e){
if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.isView(r)){var t=w.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Tc.parseInputDatesAsUTC?
Rc(r):Bc(r):Array.isArray(r)?ms(r):typeof r=="object"?Pc(r,e):r.toString()},"pre\
pareValue");function Pc(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),$t(r.toPostgres($t),e)}return JSON.stringify(r)}
o(Pc,"prepareObject");function se(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}o(
se,"pad");function Bc(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=se(t,4)+"-"+se(r.getMonth()+1,2)+"-"+se(r.getDate(),2)+"\
T"+se(r.getHours(),2)+":"+se(r.getMinutes(),2)+":"+se(r.getSeconds(),2)+"."+se(r.
getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=se(Math.floor(e/60),2)+
":"+se(e%60,2),n&&(i+=" BC"),i}o(Bc,"dateToString");function Rc(r){var e=r.getUTCFullYear(),
t=e<1;t&&(e=Math.abs(e)+1);var n=se(e,4)+"-"+se(r.getUTCMonth()+1,2)+"-"+se(r.getUTCDate(),
2)+"T"+se(r.getUTCHours(),2)+":"+se(r.getUTCMinutes(),2)+":"+se(r.getUTCSeconds(),
2)+"."+se(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}o(Rc,"dat\
eToStringUTC");function Nc(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e==
"function"?r.callback=e:r.values=e),t&&(r.callback=t),r}o(Nc,"normalizeQueryConf\
ig");var Or=o(function(r){return Uc.createHash("md5").update(r,"utf-8").digest("\
hex")},"md5"),Mc=o(function(r,e,t){var n=Or(e+r),i=Or(w.concat([w.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");gs.exports={prepareValue:o(function(e){return $t(
e)},"prepareValueWrapper"),normalizeQueryConfig:Nc,postgresMd5PasswordHash:Mc,md5:Or}});var As=N((sd,xs)=>{"use strict";y();var kr=(Lr(),Z(_r));function Dc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=kr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Dc,"startSession");function Fc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=kc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=jc(e,
i,n.iteration),a=ze(s,"Client Key"),u=$c(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,d=ze(u,f),g=bs(
a,d),S=g.toString("base64"),A=ze(s,"Server Key"),E=ze(A,f);r.message="SASLRespon\
se",r.serverSignature=E.toString("base64"),r.response=h+",p="+S}o(Fc,"continueSe\
ssion");function qc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Qc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(qc,"finalizeSession");function Oc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(Oc,"isPrintableC\
hars");function Ss(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(Ss,"isBase64");function Es(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(Es,"parseAttributePairs");function kc(r){let e=Es(
r),t=e.get("r");if(t){if(!Oc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Ss(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(kc,"parseServerFirstMe\
ssage");function Qc(r){let t=Es(r).get("v");if(t){if(!Ss(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(Qc,"parseServerFinalMessage");function bs(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(bs,"xorBuffers");function $c(r){return kr.createHash(
"sha256").update(r).digest()}o($c,"sha256");function ze(r,e){return kr.createHmac(
"sha256",r).update(e).digest()}o(ze,"hmacSha256");function jc(r,e,t){for(var n=ze(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=ze(r,n),i=bs(i,n);return i}
o(jc,"Hi");xs.exports={startSession:Dc,continueSession:Fc,finalizeSession:qc}});var Qr={};fe(Qr,{join:()=>Hc});function Hc(...r){return r.join("/")}var $r=ae(()=>{
y();o(Hc,"join")});var jr={};fe(jr,{stat:()=>Kc});function Kc(r,e){e(new Error("No filesystem"))}var Hr=ae(
()=>{y();o(Kc,"stat")});var Kr={};fe(Kr,{default:()=>Wc});var Wc,Wr=ae(()=>{y();Wc={}});var vs={};fe(vs,{StringDecoder:()=>Gr});var Gr,Cs=ae(()=>{y();Gr=class{static{o(
this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Ts=N((yd,Us)=>{"use strict";y();var{Transform:Gc}=(Wr(),Z(Kr)),{StringDecoder:Vc}=(Cs(),Z(vs)),
Ue=Symbol("last"),jt=Symbol("decoder");function zc(r,e,t){let n;if(this.overflow){
if(n=this[jt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Ue]+=this[jt].write(r),n=this[Ue].split(this.matcher);this[Ue]=
n.pop();for(let i=0;i<n.length;i++)try{Ls(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Ue].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(zc,"transform");function Jc(r){
if(this[Ue]+=this[jt].end(),this[Ue])try{Ls(this,this.mapper(this[Ue]))}catch(e){
return r(e)}r()}o(Jc,"flush");function Ls(r,e){e!==void 0&&r.push(e)}o(Ls,"push");
function _s(r){return r}o(_s,"noop");function Yc(r,e,t){switch(r=r||/\r?\n/,e=e||
_s,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=_s)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=zc,t.flush=Jc,t.readableObjectMode=!0;
let n=new Gc(t);return n[Ue]="",n[jt]=new Vc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(Yc,"split");Us.exports=Yc});var Bs=N((gd,xe)=>{"use strict";y();var Is=($r(),Z(Qr)),Zc=(Wr(),Z(Kr)).Stream,Xc=Ts(),
Ps=(ft(),Z(ht)),el=5432,Ht=m.platform==="win32",At=m.stderr,tl=56,rl=7,nl=61440,
il=32768;function sl(r){return(r&nl)==il}o(sl,"isRegFile");var Je=["host","port",
"database","user","password"],Vr=Je.length,al=Je[Vr-1];function zr(){var r=At instanceof
Zc&&At.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);At.write(Ps.format.apply(Ps,e))}}o(zr,"warn");Object.defineProperty(xe.exports,
"isWin",{get:function(){return Ht},set:function(r){Ht=r}});xe.exports.warnTo=function(r){
var e=At;return At=r,e};xe.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||
(Ht?Is.join(e.APPDATA||"./","postgresql","pgpass.conf"):Is.join(e.HOME||"./",".p\
gpass"));return t};xe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(m.env,"PGPASSWORD")?!1:Ht?!0:(e=e||"<unkn>",sl(r.mode)?r.mode&(tl|rl)?(zr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(zr('WARNING: password file "%s" is not a plain file',
e),!1))};var ol=xe.exports.match=function(r,e){return Je.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||el)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};xe.exports.getPassword=function(r,e,t){var n,i=e.pipe(Xc());function s(c){var l=ul(
c);l&&cl(l)&&ol(r,l)&&(n=l[al],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),zr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var ul=xe.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(h,f,d){var g=r.substring(f,
d);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(g=g.replace(/\\([:\\])/g,
"$1")),a[Je[h]]=g},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Vr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=
Object.keys(a).length===Vr?a:null,a},cl=xe.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<Je.length;t+=
1){var n=e[t],i=r[Je[t]]||"",s=n(i);if(!s)return!1}return!0}});var Ns=N((xd,Jr)=>{"use strict";y();var bd=($r(),Z(Qr)),Rs=(Hr(),Z(jr)),Kt=Bs();
Jr.exports=function(r,e){var t=Kt.getFileName();Rs.stat(t,function(n,i){if(n||!Kt.
usePgPass(i,t))return e(void 0);var s=Rs.createReadStream(t);Kt.getPassword(r,s,
e)})};Jr.exports.warnTo=Kt.warnTo});var Yr=N((vd,Ms)=>{"use strict";y();var ll=Et();function Wt(r){this._types=r||ll,
this.text={},this.binary={}}o(Wt,"TypeOverrides");Wt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
Wt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};Wt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Ms.exports=Wt});var Ds={};fe(Ds,{default:()=>hl});var hl,Fs=ae(()=>{y();hl={}});var qs={};fe(qs,{parse:()=>Zr});function Zr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:d}=new URL(n);s=decodeURIComponent(s);let g=i+":"+s,
S=e?Object.fromEntries(f.entries()):h;return{href:r,protocol:t,auth:g,username:i,
password:s,host:a,hostname:u,port:c,pathname:l,search:h,query:S,hash:d}}var Xr=ae(
()=>{y();o(Zr,"parse")});var ks=N((Id,Os)=>{"use strict";y();var fl=(Xr(),Z(qs)),en=(Hr(),Z(jr));function tn(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=fl.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var a=s.split("/");t.host=decodeURIComponent(
a[0]),s=a.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=en.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=en.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=en.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(tn,"parse");Os.exports=tn;tn.parse=tn});var Gt=N((Rd,js)=>{"use strict";y();var dl=(Fs(),Z(Ds)),$s=bt(),Qs=ks().parse,oe=o(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||$s[r]},"val"),pl=o(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return $s.ssl},"readSSLConfigFromEnvironment"),Ye=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),we=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+Ye(n))},"ad\
d"),rn=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Qs(e):e||{},e.connectionString&&(e=Object.assign({},e,Qs(e.connectionString))),
this.user=oe("user",e),this.database=oe("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(oe("port",e),10),this.host=oe("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:oe(
"password",e)}),this.binary=oe("binary",e),this.options=oe("options",e),this.ssl=
typeof e.ssl>"u"?pl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
oe("client_encoding",e),this.replication=oe("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=oe("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=oe("fallback_application_name",e,!1),this.
statement_timeout=oe("statement_timeout",e,!1),this.lock_timeout=oe("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=oe("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=oe("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
we(t,this,"user"),we(t,this,"password"),we(t,this,"port"),we(t,this,"application\
_name"),we(t,this,"fallback_application_name"),we(t,this,"connect_timeout"),we(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(we(t,n,"sslmode"),we(t,n,"sslca"),we(t,n,"sslkey"),we(t,n,"sslcert"),
we(t,n,"sslrootcert"),this.database&&t.push("dbname="+Ye(this.database)),this.replication&&
t.push("replication="+Ye(this.replication)),this.host&&t.push("host="+Ye(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+Ye(this.client_encoding)),dl.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+Ye(s)),e(null,t.join(" ")))})}};js.exports=rn});var Ws=N((Dd,Ks)=>{"use strict";y();var yl=Et(),Hs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
nn=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Hs.exec(e.text):t=Hs.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](s):t[a]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=yl.getTypeParser(
n.dataTypeID,n.format||"text")}}};Ks.exports=nn});var Js=N((Od,zs)=>{"use strict";y();var{EventEmitter:wl}=Le(),Gs=Ws(),Vs=xt(),sn=class extends wl{static{
o(this,"Query")}constructor(e,t,n){super(),e=Vs.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),
this._result=new Gs(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=
!1,this._canceledDueToError=!1,this._promise=null}requiresPreparation(){return this.
name||this.rows?!0:!this.text||!this.values?!1:this.values.length>0}_checkForMultirow(){
this._result.command&&(Array.isArray(this._results)||(this._results=[this._result]),
this._result=new Gs(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
m.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
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
binary,valueMapper:Vs.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};zs.exports=sn});var Zs={};fe(Zs,{Socket:()=>de,isIP:()=>ml});function ml(r){return 0}var Ys,de,Vt=ae(
()=>{"use strict";y();Ys=at(Le(),1);o(ml,"isIP");de=class r extends Ys.EventEmitter{static{
o(this,"Socket")}static defaults={poolQueryViaFetch:!1,fetchEndpoint:e=>"https:/\
/"+e+":4444/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:e=>e+":4444/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1};static opts={};opts={};static get poolQueryViaFetch(){
return r.opts.poolQueryViaFetch??r.defaults.poolQueryViaFetch}static set poolQueryViaFetch(e){
r.opts.poolQueryViaFetch=e}static get fetchEndpoint(){return r.opts.fetchEndpoint??
r.defaults.fetchEndpoint}static set fetchEndpoint(e){r.opts.fetchEndpoint=e}static get fetchConnectionCache(){
return r.opts.fetchConnectionCache??r.defaults.fetchConnectionCache}static set fetchConnectionCache(e){
r.opts.fetchConnectionCache=e}static get fetchFunction(){return r.opts.fetchFunction??
r.defaults.fetchFunction}static set fetchFunction(e){r.opts.fetchFunction=e}static get webSocketConstructor(){
return r.opts.webSocketConstructor??r.defaults.webSocketConstructor}static set webSocketConstructor(e){
r.opts.webSocketConstructor=e}get webSocketConstructor(){return this.opts.webSocketConstructor??
r.webSocketConstructor}set webSocketConstructor(e){this.opts.webSocketConstructor=
e}static get wsProxy(){return r.opts.wsProxy??r.defaults.wsProxy}static set wsProxy(e){
r.opts.wsProxy=e}get wsProxy(){return this.opts.wsProxy??r.wsProxy}set wsProxy(e){
this.opts.wsProxy=e}static get coalesceWrites(){return r.opts.coalesceWrites??r.
defaults.coalesceWrites}static set coalesceWrites(e){r.opts.coalesceWrites=e}get coalesceWrites(){
return this.opts.coalesceWrites??r.coalesceWrites}set coalesceWrites(e){this.opts.
coalesceWrites=e}static get useSecureWebSocket(){return r.opts.useSecureWebSocket??
r.defaults.useSecureWebSocket}static set useSecureWebSocket(e){r.opts.useSecureWebSocket=
e}get useSecureWebSocket(){return this.opts.useSecureWebSocket??r.useSecureWebSocket}set useSecureWebSocket(e){
this.opts.useSecureWebSocket=e}static get forceDisablePgSSL(){return r.opts.forceDisablePgSSL??
r.defaults.forceDisablePgSSL}static set forceDisablePgSSL(e){r.opts.forceDisablePgSSL=
e}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??r.forceDisablePgSSL}set forceDisablePgSSL(e){
this.opts.forceDisablePgSSL=e}static get disableSNI(){return r.opts.disableSNI??
r.defaults.disableSNI}static set disableSNI(e){r.opts.disableSNI=e}get disableSNI(){
return this.opts.disableSNI??r.disableSNI}set disableSNI(e){this.opts.disableSNI=
e}static get pipelineConnect(){return r.opts.pipelineConnect??r.defaults.pipelineConnect}static set pipelineConnect(e){
r.opts.pipelineConnect=e}get pipelineConnect(){return this.opts.pipelineConnect??
r.pipelineConnect}set pipelineConnect(e){this.opts.pipelineConnect=e}static get subtls(){
return r.opts.subtls??r.defaults.subtls}static set subtls(e){r.opts.subtls=e}get subtls(){
return this.opts.subtls??r.subtls}set subtls(e){this.opts.subtls=e}static get pipelineTLS(){
return r.opts.pipelineTLS??r.defaults.pipelineTLS}static set pipelineTLS(e){r.opts.
pipelineTLS=e}get pipelineTLS(){return this.opts.pipelineTLS??r.pipelineTLS}set pipelineTLS(e){
this.opts.pipelineTLS=e}static get rootCerts(){return r.opts.rootCerts??r.defaults.
rootCerts}static set rootCerts(e){r.opts.rootCerts=e}get rootCerts(){return this.
opts.rootCerts??r.rootCerts}set rootCerts(e){this.opts.rootCerts=e}wsProxyAddrForHost(e,t){
let n=this.wsProxy;if(n===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof n=="function"?n(e,t):`${n}?address=${e}:${t}`}connecting=!1;pending=!0;writable=!0;encrypted=!1;authorized=!1;destroyed=!1;ws=null;writeBuffer;tlsState=0;tlsRead;tlsWrite;setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(e,t,n){
this.connecting=!0,n&&this.once("connect",n);let i;try{i=this.wsProxyAddrForHost(
t,typeof e=="string"?parseInt(e,10):e)}catch(s){this.emit("error",s),this.emit("\
close");return}return this.ws=await new Promise(async s=>{try{let u=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+i,c;if(this.webSocketConstructor!==void 0)c=new this.webSocketConstructor(
u);else try{c=new WebSocket(u)}catch{c=new __unstable_WebSocket(u)}c.addEventListener(
"open",()=>{s(c)})}catch(a){try{let c=(this.useSecureWebSocket?"https:":"http:")+
"//"+i;await fetch(c,{headers:{Upgrade:"websocket"}}).then(l=>{let h=l.webSocket;
if(h==null)throw a;h.accept(),s(h)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",s=>{this.emit(
"error",s),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",s=>{if(this.tlsState===0){let a=w.
from(s.data);this.emit("data",a)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(e){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let t=this.subtls.TrustedCert.fromPEM(this.rootCerts),
n=new this.subtls.WebSocketReadQueue(this.ws),i=n.read.bind(n),s=this.rawWrite.bind(
this),[a,u]=await this.subtls.startTls(e,t,i,s,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=a,this.tlsWrite=u,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let e=await this.tlsRead();if(e===void 0)break;{let t=w.from(e);this.emit(
"data",t)}}}rawWrite(e){if(!this.coalesceWrites){this.ws.send(e);return}if(this.
writeBuffer===void 0)this.writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let t=new Uint8Array(this.writeBuffer.length+e.
length);t.set(this.writeBuffer),t.set(e,this.writeBuffer.length),this.writeBuffer=
t}}write(e,t="utf8",n=i=>{}){return e.length===0?n():(typeof e=="string"&&(e=w.from(
e,t)),this.tlsState===0?this.rawWrite(e):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(e,t,n)):this.tlsWrite(e),!0)}end(e=w.alloc(0),t="utf8",n){
return this.write(e,t,()=>{this.ws.close(),n&&n()}),this}destroy(){return this.destroyed=
!0,this.end()}}});var En=N(I=>{"use strict";y();Object.defineProperty(I,"__esModule",{value:!0});I.
NoticeMessage=I.DataRowMessage=I.CommandCompleteMessage=I.ReadyForQueryMessage=I.
NotificationResponseMessage=I.BackendKeyDataMessage=I.AuthenticationMD5Password=
I.ParameterStatusMessage=I.ParameterDescriptionMessage=I.RowDescriptionMessage=I.
Field=I.CopyResponse=I.CopyDataMessage=I.DatabaseError=I.copyDone=I.emptyQuery=I.
replicationStart=I.portalSuspended=I.noData=I.closeComplete=I.bindComplete=I.parseComplete=
void 0;I.parseComplete={name:"parseComplete",length:5};I.bindComplete={name:"bin\
dComplete",length:5};I.closeComplete={name:"closeComplete",length:5};I.noData={name:"\
noData",length:5};I.portalSuspended={name:"portalSuspended",length:5};I.replicationStart=
{name:"replicationStart",length:4};I.emptyQuery={name:"emptyQuery",length:4};I.copyDone=
{name:"copyDone",length:4};var an=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};I.DatabaseError=an;
var on=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};I.CopyDataMessage=on;var un=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};I.CopyResponse=un;var cn=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};I.Field=cn;var ln=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};I.RowDescriptionMessage=
ln;var hn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};I.ParameterDescriptionMessage=hn;var fn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};I.ParameterStatusMessage=fn;
var dn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};I.AuthenticationMD5Password=
dn;var pn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};I.BackendKeyDataMessage=
pn;var yn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};I.NotificationResponseMessage=yn;var wn=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};I.ReadyForQueryMessage=wn;var mn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};I.CommandCompleteMessage=
mn;var gn=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};I.DataRowMessage=gn;var Sn=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};I.NoticeMessage=Sn});var Xs=N(zt=>{"use strict";y();Object.defineProperty(zt,"__esModule",{value:!0});
zt.Writer=void 0;var bn=class{static{o(this,"Writer")}constructor(e=256){this.size=
e,this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(e)}ensure(e){var t=this.
buffer.length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.
buffer=w.allocUnsafe(i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.
buffer[this.offset++]=e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.
offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.
ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&
255,this}addCString(e){if(!e)this.ensure(1);else{var t=w.byteLength(e);this.ensure(
t+1),this.buffer.write(e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.
offset++]=0,this}addString(e=""){var t=w.byteLength(e);return this.ensure(t),this.
buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(e.length),
e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(
t,this.headerPosition+1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.
join(e);return this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(this.
size),t}};zt.Writer=bn});var ta=N(Yt=>{"use strict";y();Object.defineProperty(Yt,"__esModule",{value:!0});
Yt.serialize=void 0;var xn=Xs(),z=new xn.Writer,gl=o(r=>{z.addInt16(3).addInt16(
0);for(let n of Object.keys(r))z.addCString(n).addCString(r[n]);z.addCString("cl\
ient_encoding").addCString("UTF8");var e=z.addCString("").flush(),t=e.length+4;return new xn.
Writer().addInt32(t).add(e).flush()},"startup"),Sl=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),El=o(r=>z.
addCString(r).flush(112),"password"),bl=o(function(r,e){return z.addCString(r).addInt32(
w.byteLength(e)).addString(e),z.flush(112)},"sendSASLInitialResponseMessage"),xl=o(
function(r){return z.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Al=o(
r=>z.addCString(r).flush(81),"query"),ea=[],vl=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ea;for(var n=t.length,
i=z.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return z.
flush(80)},"parse"),Ze=new xn.Writer,Cl=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(z.addInt16(0),Ze.addInt32(-1)):n instanceof w?(z.
addInt16(1),Ze.addInt32(n.length),Ze.add(n)):(z.addInt16(0),Ze.addInt32(w.byteLength(
n)),Ze.addString(n))}},"writeValues"),_l=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ea,s=i.length;return z.addCString(e).addCString(t),
z.addInt16(s),Cl(i,r.valueMapper),z.addInt16(s),z.add(Ze.flush()),z.addInt16(n?1:
0),z.flush(66)},"bind"),Ll=w.from([69,0,0,0,9,0,0,0,0,0]),Ul=o(r=>{if(!r||!r.portal&&
!r.rows)return Ll;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Tl=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),An=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Il=z.addCString("P").flush(68),Pl=z.addCString("S").flush(68),
Bl=o(r=>r.name?An(68,`${r.type}${r.name||""}`):r.type==="P"?Il:Pl,"describe"),Rl=o(
r=>{let e=`${r.type}${r.name||""}`;return An(67,e)},"close"),Nl=o(r=>z.add(r).flush(
100),"copyData"),Ml=o(r=>An(102,r),"copyFail"),Jt=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Dl=Jt(72),Fl=Jt(83),ql=Jt(88),Ol=Jt(99),kl={startup:gl,password:El,
requestSsl:Sl,sendSASLInitialResponseMessage:bl,sendSCRAMClientFinalMessage:xl,query:Al,
parse:vl,bind:_l,execute:Ul,describe:Bl,close:Rl,flush:()=>Dl,sync:()=>Fl,end:()=>ql,
copyData:Nl,copyDone:()=>Ol,copyFail:Ml,cancel:Tl};Yt.serialize=kl});var ra=N(Zt=>{"use strict";y();Object.defineProperty(Zt,"__esModule",{value:!0});
Zt.BufferReader=void 0;var Ql=w.allocUnsafe(0),vn=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=Ql,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};Zt.BufferReader=vn});var na={};fe(na,{default:()=>$l});var $l,ia=ae(()=>{y();$l={}});var oa=N(Xe=>{"use strict";y();var jl=Xe&&Xe.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.
Parser=void 0;var J=En(),Hl=ra(),Kl=jl((ia(),Z(na))),Cn=1,Wl=4,sa=Cn+Wl,aa=w.allocUnsafe(
0),_n=class{static{o(this,"Parser")}constructor(e){if(this.buffer=aa,this.bufferLength=
0,this.bufferOffset=0,this.reader=new Hl.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(
e);let n=this.bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+sa<=n;){
let s=this.buffer[i],a=this.buffer.readUInt32BE(i+Cn),u=Cn+a;if(u+i<=n){let c=this.
handlePacket(i+sa,s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=aa,this.
bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return J.bindComplete;case 49:return J.parseComplete;case 51:return J.
closeComplete;case 110:return J.noData;case 115:return J.portalSuspended;case 99:
return J.copyDone;case 87:return J.replicationStart;case 73:return J.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:Kl.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new J.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new J.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new J.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,a=this.reader.int16(),u=new J.CopyResponse(t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.reader.cstring();return new J.
NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new J.RowDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new J.
Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new J.ParameterDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<i;a++){
let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new J.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new J.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new J.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new J.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&s.mechanisms.push(a);while(a);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=
this.reader.cstring(),a=this.reader.string(1);let u=s.M,c=i==="notice"?new J.NoticeMessage(
t,u):new J.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};Xe.Parser=_n});var Ln=N(Te=>{"use strict";y();Object.defineProperty(Te,"__esModule",{value:!0});
Te.DatabaseError=Te.serialize=Te.parse=void 0;var Gl=En();Object.defineProperty(
Te,"DatabaseError",{enumerable:!0,get:function(){return Gl.DatabaseError}});var Vl=ta();
Object.defineProperty(Te,"serialize",{enumerable:!0,get:function(){return Vl.serialize}});
var zl=oa();function Jl(r,e){let t=new zl.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(Jl,"parse");Te.parse=Jl});var ua={};fe(ua,{connect:()=>Yl});function Yl({socket:r,servername:e}){return r.
startTls(e),r}var ca=ae(()=>{y();o(Yl,"connect")});var Tn=N((hp,fa)=>{"use strict";y();var la=(Vt(),Z(Zs)),Zl=Le().EventEmitter,{parse:Xl,
serialize:ee}=Ln(),ha=ee.flush(),eh=ee.sync(),th=ee.end(),Un=class extends Zl{static{
o(this,"Connection")}constructor(e){super(),e=e||{},this.stream=e.stream||new la.
Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this.
_emitMessage=!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=
!0)})}connect(e,t){var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.
stream.connect(e,t),this.stream.once("connect",function(){n._keepAlive&&n.stream.
setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=o(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"report\
StreamError");if(this.stream.on("error",i),this.stream.on("close",function(){n.emit(
"end")}),!this.ssl)return this.attachListeners(this.stream);this.stream.once("da\
ta",function(s){var a=s.toString("utf8");switch(a){case"S":break;case"N":return n.
stream.end(),n.emit("error",new Error("The server does not support SSL connectio\
ns"));default:return n.stream.end(),n.emit("error",new Error("There was an error\
 establishing an SSL connection"))}var u=(ca(),Z(ua));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),la.isIP(t)===
0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),Xl(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(ee.requestSsl())}startup(e){this.stream.write(ee.startup(e))}cancel(e,t){
this._send(ee.cancel(e,t))}password(e){this._send(ee.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(ee.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(ee.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(ee.query(e))}parse(e){this._send(ee.
parse(e))}bind(e){this._send(ee.bind(e))}execute(e){this._send(ee.execute(e))}flush(){
this.stream.writable&&this.stream.write(ha)}sync(){this._ending=!0,this._send(ha),
this._send(eh)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this.
_ending=!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(th,()=>{this.stream.end()})}close(e){this._send(ee.close(e))}describe(e){
this._send(ee.describe(e))}sendCopyFromChunk(e){this._send(ee.copyData(e))}endCopyFrom(){
this._send(ee.copyDone())}sendCopyFail(e){this._send(ee.copyFail(e))}};fa.exports=
Un});var ya=N((yp,pa)=>{"use strict";y();var rh=Le().EventEmitter,pp=(ft(),Z(ht)),nh=xt(),
In=As(),ih=Ns(),sh=Yr(),ah=Gt(),da=Js(),oh=bt(),uh=Tn(),Xt=class extends rh{static{
o(this,"Client")}constructor(e){super(),this.connectionParameters=new ah(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||v.Promise,this._types=new sh(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new uh({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||oh.binary,this.processID=null,
this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.
key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=
t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=o(n=>{m.nextTick(()=>{n.handleError(
e,this.connection)})},"enqueueError");this.activeQuery&&(t(this.activeQuery),this.
activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.length=0}_connect(e){
var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse\
 a client.");m.nextTick(()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,
this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=setTimeout(()=>{n.
_ending=!0,n.stream.destroy(new Error("timeout expired"))},this._connectionTimeoutMillis)),
this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+this.port):
n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),
this._attachListeners(n),n.once("end",()=>{let i=this._ending?new Error("Connect\
ion terminated"):new Error("Connection terminated unexpectedly");clearTimeout(this.
connectionTimeoutHandle),this._errorAllQueries(i),this._ending||(this._connecting&&
!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),m.nextTick(
()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}return new this.
_Promise((t,n)=>{this._connect(i=>{i?n(i):t()})})}_attachListeners(e){e.on("auth\
enticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),e.on(
"authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("authen\
ticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLContinue",
this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this._handleAuthSASLFinal.
bind(this)),e.on("backendKeyData",this._handleBackendKeyData.bind(this)),e.on("e\
rror",this._handleErrorEvent.bind(this)),e.on("errorMessage",this._handleErrorMessage.
bind(this)),e.on("readyForQuery",this._handleReadyForQuery.bind(this)),e.on("not\
ice",this._handleNotice.bind(this)),e.on("rowDescription",this._handleRowDescription.
bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),e.on("portalSuspended",
this._handlePortalSuspended.bind(this)),e.on("emptyQuery",this._handleEmptyQuery.
bind(this)),e.on("commandComplete",this._handleCommandComplete.bind(this)),e.on(
"parseComplete",this._handleParseComplete.bind(this)),e.on("copyInResponse",this.
_handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.bind(this)),
e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){let t=this.
connection;typeof this.password=="function"?this._Promise.resolve().then(()=>this.
password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("error",new TypeError(
"Password must be a string"));return}this.connectionParameters.password=this.password=
n}else this.connectionParameters.password=this.password=null;e()}).catch(n=>{t.emit(
"error",n)}):this.password!==null?e():ih(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=nh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=In.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
In.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){In.finalizeSession(this.saslSession,
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
e&&m.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,a,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(a=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new da(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,d)=>f?h(f):l(d)}))),
a&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");m.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},a),i.callback=
(l,h)=>{clearTimeout(u),c(l,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(m.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(m.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};Xt.Query=da;pa.exports=Xt});var Sa=N((gp,ga)=>{"use strict";y();var ch=Le().EventEmitter,wa=o(function(){},"\
NOOP"),ma=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Pn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},et=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function lh(){throw new Error("Release called on client which \
has already been released to the pool.")}o(lh,"throwOnDoubleRelease");function er(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(er,"promisify");function hh(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(hh,"makeIdleListener");var Bn=class extends ch{static{o(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||tr().Client,this.Promise=this.options.Promise||v.
Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=
[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){return this._clients.
length>=this.options.max}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),
this._idle.length&&this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.
length||(this.ended=!0,this._endCallback());return}if(!this._pendingQueue.length){
this.log("no queued requests");return}if(!this._idle.length&&this._isFull())return;
let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(
n,e,i,!1)}if(!this._isFull())return this.newClient(e);throw new Error("unexpecte\
d condition")}_remove(e){let t=ma(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=er(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new et(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(a),t.callback(u,c,l)},
"queueCallback"),s=new et(i),a=setTimeout(()=>{ma(this._pendingQueue,u=>u.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new et(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=hh(this,t);this.log("checking client timeout");let i,
s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{this.log("ending c\
lient due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},
this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(
a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to connect",
a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connection termin\
ated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(a,void 0,
wa);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==0){
let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.
add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new et(
(l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",
()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,wa);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&lh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Pn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=er(this.Promise,e);
return _(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=er(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=er(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};ga.exports=Bn});var Ea={};fe(Ea,{default:()=>fh});var fh,ba=ae(()=>{y();fh={}});var xa=N((xp,dh)=>{dh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var Ca=N((Ap,va)=>{"use strict";y();var Aa=Le().EventEmitter,ph=(ft(),Z(ht)),Rn=xt(),
tt=va.exports=function(r,e,t){Aa.call(this),r=Rn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};ph.inherits(
tt,Aa);var yh={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};tt.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=yh[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};tt.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};tt.prototype.catch=function(r){return this._getPromise().
catch(r)};tt.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};tt.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,_(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(Rn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(Rn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Ta=N((Lp,Ua)=>{"use strict";y();var wh=(ba(),Z(Ea)),mh=Yr(),_p=xa(),_a=Le().
EventEmitter,gh=(ft(),Z(ht)),Sh=Gt(),La=Ca(),le=Ua.exports=function(r){_a.call(this),
r=r||{},this._Promise=r.Promise||v.Promise,this._types=new mh(r.types),this.native=
new wh({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Sh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};le.Query=La;gh.inherits(le,_a);le.prototype._errorAllQueries=
function(r){let e=o(t=>{m.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};le.prototype._connect=
function(r){var e=this;if(this._connecting){m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};le.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};le.prototype.query=function(r,e,t){var n,
i,s,a,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new La(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
h,l=f}),n.callback=(h,f)=>h?l(h):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{clearTimeout(a),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
le.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),m.nextTick(()=>{e.emit("end"),r&&r()})}),t};le.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};le.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};le.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};le.prototype.ref=function(){};
le.prototype.unref=function(){};le.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};le.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Nn=N((Ip,Ia)=>{"use strict";y();Ia.exports=Ta()});var tr=N((Rp,vt)=>{"use strict";y();var Eh=ya(),bh=bt(),xh=Tn(),Ah=Sa(),{DatabaseError:vh}=Ln(),
Ch=o(r=>class extends Ah{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),Mn=o(function(r){this.defaults=bh,this.Client=r,this.Query=this.Client.
Query,this.Pool=Ch(this.Client),this._pools=[],this.Connection=xh,this.types=Et(),
this.DatabaseError=vh},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?vt.exports=new Mn(
Nn()):(vt.exports=new Mn(Eh),Object.defineProperty(vt.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Mn(Nn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(vt.exports,"native",{value:r}),r}}))});y();var Ar={};fe(Ar,{SocketReadQueue:()=>Zo,TrustedCert:()=>wi,WebSocketReadQueue:()=>Yo,
startTls:()=>Jo});y();function ne(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(ne,"p");function ct(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(ct,"O");var mr="\xB7\xB7 ",
ui=new TextEncoder,Uo=new TextDecoder,Se=class{static{o(this,"N")}offset;dataView;data;comments;indents;indent;constructor(r){
this.offset=0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(
this.data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.
indents={},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;
this.data=ne(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.
byteOffset,this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(r){
return this.data.subarray(this.offset,this.offset+=r)}skip(r,e){return this.offset+=
r,e&&this.comment(e),this}comment(r,e=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}readBytes(r){return this.data.slice(this.
offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);return Uo.decode(
e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==0;)r++;let e=this.
readUTF8String(r-this.offset);return this.expectUint8(0,"end of string"),e}readUint8(r){
let e=this.dataView.getUint8(this.offset);return this.offset+=1,e}readUint16(r){
let e=this.dataView.getUint16(this.offset);return this.offset+=2,e}readUint24(r){
let e=this.readUint8(),t=this.readUint16();return(e<<16)+t}readUint32(r){let e=this.
dataView.getUint32(this.offset);return this.offset+=4,e}expectBytes(r,e){let t=this.
readBytes(r.length);if(!ct(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
let t=this.readUint8();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint16(r,e){
let t=this.readUint16();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint24(r,e){
let t=this.readUint24();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint32(r,e){
let t=this.readUint32();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectLength(r,e=1){
let t=this.offset,n=t+r;if(n>this.data.length)throw new Error("Expected length e\
xceeds remaining data length");return this.indent+=e,this.indents[t]=this.indent,
[()=>{if(this.indent-=e,this.indents[this.offset]=this.indent,this.offset!==n)throw new Error(
`${r} bytes expected but ${this.offset-t} read`)},()=>n-this.offset]}expectLengthUint8(r){
let e=this.readUint8();return this.expectLength(e)}expectLengthUint16(r){let e=this.
readUint16();return this.expectLength(e)}expectLengthUint24(r){let e=this.readUint24();
return this.expectLength(e)}expectLengthUint32(r){let e=this.readUint32();return this.
expectLength(e)}expectLengthUint8Incl(r){let e=this.readUint8();return this.expectLength(
e-1)}expectLengthUint16Incl(r){let e=this.readUint16();return this.expectLength(
e-2)}expectLengthUint24Incl(r){let e=this.readUint24();return this.expectLength(
e-3)}expectLengthUint32Incl(r){let e=this.readUint32();return this.expectLength(
e-4)}writeBytes(r){return this.data.set(r,this.offset),this.offset+=r.length,this}writeUTF8String(r){
let e=ui.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=ui.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
return this.dataView.setUint8(this.offset,r),this.offset+=1,this}writeUint16(r,e){
return this.dataView.setUint16(this.offset,r),this.offset+=2,this}writeUint24(r,e){
return this.writeUint8((r&16711680)>>16),this.writeUint16(r&65535,e),this}writeUint32(r,e){
return this.dataView.setUint32(this.offset,r),this.offset+=4,this}_writeLengthGeneric(r,e,t){
let n=this.offset;this.offset+=r;let i=this.offset;return this.indent+=1,this.indents[i]=
this.indent,()=>{let s=this.offset-(e?n:i);if(r===1)this.dataView.setUint8(n,s);else if(r===
2)this.dataView.setUint16(n,s);else if(r===3)this.dataView.setUint8(n,(s&16711680)>>
16),this.dataView.setUint16(n+1,s&65535);else if(r===4)this.dataView.setUint32(n,
s);else throw new Error(`Invalid length for length field: ${r}`);this.indent-=1,
this.indents[this.offset]=this.indent}}writeLengthUint8(r){return this._writeLengthGeneric(
1,!1,r)}writeLengthUint16(r){return this._writeLengthGeneric(2,!1,r)}writeLengthUint24(r){
return this._writeLengthGeneric(3,!1,r)}writeLengthUint32(r){return this._writeLengthGeneric(
4,!1,r)}writeLengthUint8Incl(r){return this._writeLengthGeneric(1,!0,r)}writeLengthUint16Incl(r){
return this._writeLengthGeneric(2,!0,r)}writeLengthUint24Incl(r){return this._writeLengthGeneric(
3,!0,r)}writeLengthUint32Incl(r){return this._writeLengthGeneric(4,!0,r)}array(){
return this.data.subarray(0,this.offset)}commentedString(r=!1){let e=this.indents[0]!==
void 0?mr.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${mr.repeat(t)}`)}return e}};function To(r,e,t,n=!0){let i=new Se(1024);i.writeUint8(
22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(1,0);let a=i.
writeLengthUint24();i.writeUint16(771,0),x.getRandomValues(i.subarray(32));let u=i.
writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);i.writeUint16(
4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.writeLengthUint16(
0);if(n){i.writeUint16(0,0);let U=i.writeLengthUint16(0),B=i.writeLengthUint16(0);
i.writeUint8(0,0);let M=i.writeLengthUint16(0);i.writeUTF8String(r),M(),B(),U()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),d=i.writeLengthUint8(0);i.writeUint8(
0,0),d(),f(),i.writeUint16(10,0);let g=i.writeLengthUint16(0),S=i.writeLengthUint16(
0);i.writeUint16(23,0),S(),g(),i.writeUint16(13,0);let A=i.writeLengthUint16(0),
E=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),E(),A(),i.writeUint16(
43,0);let T=i.writeLengthUint16(0),C=i.writeLengthUint8(0);i.writeUint16(772,0),
C(),T(),i.writeUint16(51,0);let b=i.writeLengthUint16(0),q=i.writeLengthUint16(0);
i.writeUint16(23,0);let W=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),W(),q(),b(),h(),a(),s(),i}o(To,"St");function Ce(r,e=""){return[...r].map(t=>t.
toString(16).padStart(2,"0")).join(e)}o(Ce,"K");function Io(r,e){let t,n,[i]=r.expectLength(
r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(
771,0);let a=r.readBytes(32);if(ct(a,[207,33,173,116,229,154,97,17,190,29,140,2,
30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error(
"Unexpected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Ce([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
o(Io,"Ut");var Qh=new RegExp(`  .+|^(${mr})+`,"gm"),ut=16384,Po=ut+1+255;async function gr(r,e,t=ut){
let n=await r(5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record \
header truncated");let i=new Se(n),s=i.readUint8();if(s<20||s>24)throw new Error(
`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(
`Unexpected TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.
toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (mid\
dlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(`Record too\
 long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("\
TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
o(gr,"ht");async function Sr(r,e,t){let n=await gr(r,23,Po);if(n===void 0)return;
let i=new Se(n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),
i.skip(16,0),s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===
0;)u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (\
all zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&
l[1]===0)){if(c===22&&l[0]===4)return Sr(r,e,t);if(t!==void 0&&c!==t)throw new Error(
`Unexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.
toString(16).padStart(2,"0")})`);return l}}o(Sr,"dt");async function Bo(r,e,t){let n=ne(
r,[t]),i=5,s=n.length+16,a=new Se(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.
writeUint16(s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.
process(n,16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(
l.length-16)),u(),a.array()}o(Bo,"ee");async function ci(r,e,t){let n=Math.ceil(
r.length/ut),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*ut,(s+1)*ut),u=await Bo(
a,e,t);i.push(u)}return i}o(ci,"At");var k=x.subtle,pi=new TextEncoder;async function Er(r,e,t){
let n=await k.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await k.sign("HMAC",n,e));return i}o(Er,"lt");async function Ro(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await k.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=ne(c,e,[l+1]),f=await k.sign("HMAC",u,h),d=new Uint8Array(f);a.set(d,i*l),
c=d}return a.subarray(0,t)}o(Ro,"ne");var li=pi.encode("tls13 ");async function ie(r,e,t,n,i){
let s=pi.encode(e),a=ne([(n&65280)>>8,n&255],[li.length+s.length],li,s,[t.length],
t);return Ro(r,a,n,i)}o(ie,"S");async function No(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await k.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await k.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await k.digest("S\
HA-256",t),f=new Uint8Array(h),d=await Er(new Uint8Array(1),a,n),g=await k.digest(
`SHA-${n}`,new Uint8Array(0)),S=new Uint8Array(g),A=await ie(d,"derived",S,s,n),
E=await Er(A,l,n),T=await ie(E,"c hs traffic",f,s,n),C=await ie(E,"s hs traffic",
f,s,n),b=await ie(T,"key",new Uint8Array(0),i,n),q=await ie(C,"key",new Uint8Array(
0),i,n),W=await ie(T,"iv",new Uint8Array(0),12,n),U=await ie(C,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:q,serverHandshakeIV:U,clientHandshakeKey:b,clientHandshakeIV:W,
handshakeSecret:E,clientSecret:T,serverSecret:C}}o(No,"Kt");async function Mo(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await k.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ie(r,"derived",u,i,t),l=await Er(c,s,t),h=await ie(l,"c ap traffic",e,
i,t),f=await ie(l,"s ap traffic",e,i,t),d=await ie(h,"key",new Uint8Array(0),n,t),
g=await ie(f,"key",new Uint8Array(0),n,t),S=await ie(h,"iv",new Uint8Array(0),12,
t),A=await ie(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:g,serverApplicationIV:A,
clientApplicationKey:d,clientApplicationIV:S}}o(Mo,"Tt");var Rt=class{static{o(this,
"Z")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t}recordsProcessed=0n;priorPromise=Promise.
resolve(new Uint8Array);async process(r,e,t){let n=this.processUnsequenced(r,e,t);
return this.priorPromise=this.priorPromise.then(()=>n)}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){let f=n>>(h<<3n);if(f===0n)break;
i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"AES-GCM",iv:i,tagLength:u,additionalData:t},
l=await k[this.mode](c,this.key,r);return new Uint8Array(l)}};function Nt(r){return r>
64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?64:void 0}
o(Nt,"yt");function Do(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,u=64,c=new Uint8Array(
e*.75);for(;t<e;)i=Nt(r.charCodeAt(t++)),s=Nt(r.charCodeAt(t++)),a=Nt(r.charCodeAt(
t++)),u=Nt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&15)<<4|a>>2,c[n++]=(a&3)<<
6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(0,n-l)}o(Do,"Dt");var Mt=class extends Se{static{
o(this,"M")}readASN1Length(r){let e=this.readUint8();if(e<128)return e;let t=e&127,
n=0;if(t===1)return this.readUint8(n);if(t===2)return this.readUint16(n);if(t===
3)return this.readUint24(n);if(t===4)return this.readUint32(n);throw new Error(`\
ASN.1 length fields are only supported up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){
let e=this.readASN1Length(r);return this.expectLength(e)}readASN1OID(){let[r,e]=this.
expectASN1Length(0),t=this.readUint8(),n=`${Math.floor(t/40)}.${t%40}`;for(;e()>
0;){let i=0;for(;;){let s=this.readUint8();if(i<<=7,i+=s&127,s<128)break}n+=`.${i}`}
return r(),n}readASN1Boolean(){let[r,e]=this.expectASN1Length(0),t=e();if(t!==1)
throw new Error(`Boolean has weird length: ${t}`);let n=this.readUint8(),i;if(n===
255)i=!0;else if(n===0)i=!1;else throw new Error(`Boolean has weird value: 0x${Ce(
[n])}`);return r(),i}readASN1UTCTime(){let[r,e]=this.expectASN1Length(0),t=this.
readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);if(!t)throw new Error(
"Unrecognised ASN.1 UTC time format");let[,n,i,s,a,u,c]=t,l=parseInt(n,10),h=l+(l>=
50?1900:2e3),f=new Date(`${h}-${i}-${s}T${a}:${u}:${c}Z`);return r(),f}readASN1BitString(){
let[r,e]=this.expectASN1Length(0),t=this.readUint8(0),n=e(),i=this.readBytes(n);
if(t>7)throw new Error(`Invalid right pad value: ${t}`);if(t>0){let s=8-t;for(let a=n-
1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>t}return r(),i}};function hi(r,e=(n,i)=>i,t){
return JSON.stringify(r,(n,i)=>e(n,typeof i!="object"||i===null||Array.isArray(i)?
i:Object.fromEntries(Object.entries(i).sort(([s],[a])=>s<a?-1:s>a?1:0))),t)}o(hi,
"mt");var pr=1,Dt=2,re=48,Fo=49,He=6,qo=19,Oo=12,fi=23,yr=5,Me=4,wr=3,ko=163,je=128,
Qo={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2\
.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.8\
40.113549.1.9.1":"E-mail"};function $o(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o($o,"qt");function di(r,e){let t={};
r.expectUint8(re,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(Fo,
0);let[s]=r.expectASN1Length(0);r.expectUint8(re,0);let[a]=r.expectASN1Length(0);
r.expectUint8(He,0);let u=r.readASN1OID(),c=Qo[u]??u,l=r.readUint8();if(l!==qo&&
l!==Oo)throw new Error(`Unexpected item type in certificate ${e}: 0x${Ce([l])}`);
let[h,f]=r.expectASN1Length(0),d=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)
throw new Error(`Duplicate OID ${c} in certificate ${e}`);t[c]=d}return n(),t}o(
di,"Ct");function jo(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.
readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.
readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o(jo,"Bt");function Ho(r){
let e={"1.2.840.113549.1.1.1":{name:"RSAES-PKCS1-v1_5"},"1.2.840.113549.1.1.5":{
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-1"}},"1.2.840.113549.1.1.11":{name:"RSA\
SSA-PKCS1-v1_5",hash:{name:"SHA-256"}},"1.2.840.113549.1.1.12":{name:"RSASSA-PKC\
S1-v1_5",hash:{name:"SHA-384"}},"1.2.840.113549.1.1.13":{name:"RSASSA-PKCS1-v1_5",
hash:{name:"SHA-512"}},"1.2.840.113549.1.1.10":{name:"RSA-PSS"},"1.2.840.113549.\
1.1.7":{name:"RSA-OAEP"},"1.2.840.10045.2.1":{name:"ECDSA",hash:{name:"SHA-1"}},
"1.2.840.10045.4.1":{name:"ECDSA",hash:{name:"SHA-1"}},"1.2.840.10045.4.3.2":{name:"\
ECDSA",hash:{name:"SHA-256"}},"1.2.840.10045.4.3.3":{name:"ECDSA",hash:{name:"SH\
A-384"}},"1.2.840.10045.4.3.4":{name:"ECDSA",hash:{name:"SHA-512"}},"1.3.133.16.\
840.63.0.2":{name:"ECDH",kdf:"SHA-1"},"1.3.132.1.11.1":{name:"ECDH",kdf:"SHA-256"},
"1.3.132.1.11.2":{name:"ECDH",kdf:"SHA-384"},"1.3.132.1.11.3":{name:"ECDH",kdf:"\
SHA-512"},"2.16.840.1.101.3.4.1.2":{name:"AES-CBC",length:128},"2.16.840.1.101.3\
.4.1.22":{name:"AES-CBC",length:192},"2.16.840.1.101.3.4.1.42":{name:"AES-CBC",length:256},
"2.16.840.1.101.3.4.1.6":{name:"AES-GCM",length:128},"2.16.840.1.101.3.4.1.26":{
name:"AES-GCM",length:192},"2.16.840.1.101.3.4.1.46":{name:"AES-GCM",length:256},
"2.16.840.1.101.3.4.1.4":{name:"AES-CFB",length:128},"2.16.840.1.101.3.4.1.24":{
name:"AES-CFB",length:192},"2.16.840.1.101.3.4.1.44":{name:"AES-CFB",length:256},
"2.16.840.1.101.3.4.1.5":{name:"AES-KW",length:128},"2.16.840.1.101.3.4.1.25":{name:"\
AES-KW",length:192},"2.16.840.1.101.3.4.1.45":{name:"AES-KW",length:256},"1.2.84\
0.113549.2.7":{name:"HMAC",hash:{name:"SHA-1"}},"1.2.840.113549.2.9":{name:"HMAC",
hash:{name:"SHA-256"}},"1.2.840.113549.2.10":{name:"HMAC",hash:{name:"SHA-384"}},
"1.2.840.113549.2.11":{name:"HMAC",hash:{name:"SHA-512"}},"1.2.840.113549.1.9.16\
.3.5":{name:"DH"},"1.3.14.3.2.26":{name:"SHA-1"},"2.16.840.1.101.3.4.2.1":{name:"\
SHA-256"},"2.16.840.1.101.3.4.2.2":{name:"SHA-384"},"2.16.840.1.101.3.4.2.3":{name:"\
SHA-512"},"1.2.840.113549.1.5.12":{name:"PBKDF2"},"1.2.840.10045.3.1.7":{name:"P\
-256"},"1.3.132.0.34":{name:"P-384"},"1.3.132.0.35":{name:"P-521"}}[r];if(e===void 0)
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(Ho,"Ft");function yi(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=yi(t,e)}),e}
o(yi,"Ot");function Ko(r){return yi(r).join(" / ")}o(Ko,"Pt");var Wo=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],xr=class br{static{o(this,"\
r")}serialNumber;algorithm;issuer;validityPeriod;subject;publicKey;signature;keyUsage;subjectAltNames;extKeyUsage;authorityKeyIdentifier;subjectKeyIdentifier;basicConstraints;signedData;static distinguishedNamesAreEqual(e,t){
return hi(e)===hi(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}constructor(e){let t=e instanceof Mt?e:new Mt(e);t.expectUint8(
re,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(re,0);let[s]=t.expectASN1Length(
0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(Dt,0);let[a,u]=t.expectASN1Length(
0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(re,0);let[c,l]=t.expectASN1Length(
0);t.expectUint8(He,0),this.algorithm=t.readASN1OID(),l()>0&&(t.expectUint8(yr,0),
t.expectUint8(0,0)),c(),this.issuer=di(t,"issuer"),t.expectUint8(re,0);let[h]=t.
expectASN1Length(0);t.expectUint8(fi,0);let f=t.readASN1UTCTime();t.expectUint8(
fi,0);let d=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:d},h(),
this.subject=di(t,"subject");let g=t.offset;t.expectUint8(re,0);let[S]=t.expectASN1Length(
0);t.expectUint8(re,0);let[A,E]=t.expectASN1Length(0),T=[];for(;E()>0;){let $=t.
readUint8();if($===He){let P=t.readASN1OID();T.push(P)}else $===yr&&t.expectUint8(
0,0)}A(),t.expectUint8(wr,0);let C=t.readASN1BitString();this.publicKey={identifiers:T,
data:C,all:t.data.subarray(g,t.offset)},S(),t.expectUint8(ko,0);let[b]=t.expectASN1Length();
t.expectUint8(re,0);let[q,W]=t.expectASN1Length(0);for(;W()>0;){t.expectUint8(re,
0);let[$,P]=t.expectASN1Length();t.expectUint8(He,0);let R=t.readASN1OID();if(R===
"2.5.29.17"){t.expectUint8(Me,0);let[O]=t.expectASN1Length(0);t.expectUint8(re,0);
let Q=jo(t,je);this.subjectAltNames=Q.filter(G=>G.type===(2|je)).map(G=>G.name),
O()}else if(R==="2.5.29.15"){t.expectUint8(pr,0);let O=t.readASN1Boolean();t.expectUint8(
Me,0);let[Q]=t.expectASN1Length(0);t.expectUint8(wr,0);let G=t.readASN1BitString(),
H=$o(G),F=new Set(Wo.filter((K,Y)=>H&1<<Y));Q(),this.keyUsage={critical:O,usages:F}}else if(R===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(Me,0);let[O]=t.expectASN1Length(0);
t.expectUint8(re,0);let[Q,G]=t.expectASN1Length(0);for(;G()>0;){t.expectUint8(He,
0);let H=t.readASN1OID();H==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
H==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}Q(),O()}else if(R==="2.\
5.29.35"){t.expectUint8(Me,0);let[O]=t.expectASN1Length(0);t.expectUint8(re,0);let[
Q,G]=t.expectASN1Length(0);for(;G()>0;){let H=t.readUint8();if(H===(je|0)){let[F,
K]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(K()),F()}else if(H===
(je|1)){let[F,K]=t.expectASN1Length(0);t.skip(K(),0),F()}else if(H===(je|2)){let[
F,K]=t.expectASN1Length(0);t.skip(K(),0),F()}else if(H===(je|33)){let[F,K]=t.expectASN1Length(
0);t.skip(K(),0),F()}else throw new Error(`Unexpected data type ${H} in authorit\
yKeyIdentifier certificate extension`)}Q(),O()}else if(R==="2.5.29.14"){t.expectUint8(
Me,0);let[O]=t.expectASN1Length(0);t.expectUint8(Me,0);let[Q,G]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(G()),Q(),O()}else if(R==="2.5.29.19"){let O,
Q=t.readUint8();if(Q===pr&&(O=t.readASN1Boolean(),Q=t.readUint8()),Q!==Me)throw new Error(
"Unexpected type in certificate basic constraints");let[G]=t.expectASN1Length(0);
t.expectUint8(re,0);let[H,F]=t.expectASN1Length(),K;F()>0&&(t.expectUint8(pr,0),
K=t.readASN1Boolean());let Y;if(F()>0){t.expectUint8(Dt,0);let D=t.readASN1Length(
0);if(Y=D===1?t.readUint8():D===2?t.readUint16():D===3?t.readUint24():void 0,Y===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}H(),G(),this.basicConstraints={critical:O,ca:K,pathLength:Y}}else t.
skip(P(),0);$()}q(),b(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
re,0);let[U,B]=t.expectASN1Length(0);t.expectUint8(He,0);let M=t.readASN1OID();if(B()>
0&&(t.expectUint8(yr,0),t.expectUint8(0,0)),U(),M!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${M})`);t.expectUint8(wr,0),this.signature=t.readASN1BitString(),n()}static fromPEM(e){
let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END\
 ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){let a=s[1].replace(/[\r\n]/g,""),
u=Do(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;
return(this.subjectAltNames??[]).find(n=>{let i=n,s=e;if(t.test(e)&&t.test(i)&&i.
startsWith("*.")&&(i=i.slice(1),s=s.slice(s.indexOf("."))),i===s)return!0})}isValidAtMoment(e=new Date){
return e>=this.validityPeriod.notBefore&&e<=this.validityPeriod.notAfter}description(){
return"subject: "+br.readableDN(this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Ce(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+br.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
authority key id: ${Ce(this.authorityKeyIdentifier," ")}`:"")+`
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
signature algorithm: `+Ko(Ho(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},wi=class extends xr{static{o(this,"st")}};async function mi(r,e,t,n,i){
r.expectUint8(re,0);let[s]=r.expectASN1Length(0);r.expectUint8(Dt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Dt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let d=o((E,T)=>E.length>T?E.subarray(E.length-T):E.
length<T?ne(new Uint8Array(T-E.length),E):E,"m"),g=n==="P-256"?32:48,S=ne(d(c,g),
d(f,g)),A=await k.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await k.verify({name:"ECDSA",hash:i},A,S,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}o(mi,"pt");async function Go(r,e,t,n=!0,i=!0){
for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=t.find(
S=>xr.distinguishedNamesAreEqual(S.subject,l.issuer)):f=t.find(S=>S.subjectKeyIdentifier!==
void 0&&ct(S.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let d=f instanceof wi;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:g}=f.basicConstraints;if(g!==void 0&&g<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let S=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",A=f.publicKey.identifiers,E=A.includes("1.2.840.10045.3.1.7")?"P-256":A.includes(
"1.3.132.0.34")?"P-384":void 0;if(E===void 0)throw new Error("Unsupported signin\
g key curve");let T=new Mt(l.signature);await mi(T,f.publicKey.all,l.signedData,
E,S)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let S=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",A=await k.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:S},!1,["verify"]);
if(await k.verify({name:"RSASSA-PKCS1-v1_5"},A,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(d){a=!0;break}}return a}o(Go,"jt");var Vo=new TextEncoder;
async function zo(r,e,t,n,i,s=!0,a=!0){let u=new Mt(await e());u.expectUint8(8,0);
let[c]=u.expectLengthUint24(),[l,h]=u.expectLengthUint16(0);for(;h()>0;){let D=u.
readUint16(0);if(D===0)u.expectUint16(0,0);else if(D===10){let[he,Ee]=u.expectLengthUint16(
"groups data");u.skip(Ee(),0),he()}else throw new Error(`Unsupported server encr\
ypted extension type 0x${Ce([D]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.
extend(await e());let f=!1,d=u.readUint8();if(d===13){f=!0;let[D]=u.expectLengthUint24(
"certificate request data");u.expectUint8(0,0);let[he,Ee]=u.expectLengthUint16("\
certificate request extensions");u.skip(Ee(),0),he(),D(),u.remaining()===0&&u.extend(
await e()),d=u.readUint8()}if(d!==11)throw new Error(`Unexpected handshake messa\
ge type 0x${Ce([d])}`);let[g]=u.expectLengthUint24(0);u.expectUint8(0,0);let[S,A]=u.
expectLengthUint24(0),E=[];for(;A()>0;){let[D]=u.expectLengthUint24(0),he=new xr(
u);E.push(he),D();let[Ee,qe]=u.expectLengthUint16(),Dn=u.subarray(qe());Ee()}if(S(),
g(),E.length===0)throw new Error("No certificates supplied");let T=E[0],C=u.data.
subarray(0,u.offset),b=ne(n,C),q=await k.digest("SHA-256",b),W=new Uint8Array(q),
U=ne(Vo.encode(" ".repeat(64)+"TLS 1.3, server CertificateVerify"),[0],W);u.remaining()===
0&&u.extend(await e()),u.expectUint8(15,0);let[B]=u.expectLengthUint24(0),M=u.readUint16();
if(M===1027){let[D]=u.expectLengthUint16();await mi(u,T.publicKey.all,U,"P-256",
"SHA-256"),D()}else if(M===2052){let[D,he]=u.expectLengthUint16(),Ee=u.subarray(
he());D();let qe=await k.importKey("spki",T.publicKey.all,{name:"RSA-PSS",hash:"\
SHA-256"},!1,["verify"]);if(await k.verify({name:"RSA-PSS",saltLength:32},qe,Ee,
U)!==!0)throw new Error("RSA-PSS-RSAE-SHA256 certificate verify failed")}else throw new Error(
`Unsupported certificate verify signature type 0x${Ce([M]).padStart(4,"0")}`);B();
let $=u.data.subarray(0,u.offset),P=ne(n,$),R=await ie(t,"finished",new Uint8Array(
0),32,256),O=await k.digest("SHA-256",P),Q=await k.importKey("raw",R,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]),G=await k.sign("HMAC",Q,O),H=new Uint8Array(
G);u.remaining()===0&&u.extend(await e()),u.expectUint8(20,0);let[F,K]=u.expectLengthUint24(
0),Y=u.readBytes(K());if(F(),u.remaining()!==0)throw new Error("Unexpected extra\
 bytes in server handshake");if(ct(Y,H)!==!0)throw new Error("Invalid server ver\
ify hash");if(!await Go(r,E,i,s,a))throw new Error("Validated certificate chain \
did not end in a trusted root");return[u.data,f]}o(zo,"Vt");async function Jo(r,e,t,n,{
useSNI:i,requireServerTlsExtKeyUsage:s,requireDigitalSigKeyUsage:a,writePreData:u,
expectPreData:c,commentPreData:l}={}){i??=!0,s??=!0,a??=!0;let h=await k.generateKey(
{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),f=await k.exportKey(
"raw",h.publicKey),d=new Uint8Array(32);x.getRandomValues(d);let g=To(r,f,d,i).array(),
S=u?ne(u,g):g;if(n(S),c){let te=await t(c.length);if(!te||!ct(te,c))throw new Error(
"Pre data did not match expectation")}let A=await gr(t,22);if(A===void 0)throw new Error(
"Connection closed while awaiting server hello");let E=new Se(A.content),T=Io(E,
d),C=await gr(t,20);if(C===void 0)throw new Error("Connection closed awaiting se\
rver cipher change");let b=new Se(C.content),[q]=b.expectLength(1);b.expectUint8(
1,0),q();let W=g.subarray(5),U=A.content,B=ne(W,U),M=await No(T,h.privateKey,B,256,
16),$=await k.importKey("raw",M.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),
P=new Rt("decrypt",$,M.serverHandshakeIV),R=await k.importKey("raw",M.clientHandshakeKey,
{name:"AES-GCM"},!1,["encrypt"]),O=new Rt("encrypt",R,M.clientHandshakeIV),Q=o(async()=>{
let te=await Sr(t,P,22);if(te===void 0)throw new Error("Premature end of encrypt\
ed server handshake");return te},"C"),[G,H]=await zo(r,Q,M.serverSecret,B,e,s,a),
F=new Se(6);F.writeUint8(20,0),F.writeUint16(771,0);let K=F.writeLengthUint16();
F.writeUint8(1,0),K();let Y=F.array(),D=new Uint8Array(0);if(H){let te=new Se(8);
te.writeUint8(11,0);let it=te.writeLengthUint24("client certificate data");te.writeUint8(
0,0),te.writeUint24(0,0),it(),D=te.array()}let he=ne(B,G,D),Ee=await k.digest("S\
HA-256",he),qe=new Uint8Array(Ee),Dn=await ie(M.clientSecret,"finished",new Uint8Array(
0),32,256),Na=await k.importKey("raw",Dn,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),Ma=await k.sign("HMAC",Na,qe),Da=new Uint8Array(Ma),Lt=new Se(36);Lt.writeUint8(
20,0);let Fa=Lt.writeLengthUint24(0);Lt.writeBytes(Da),Fa();let qa=Lt.array(),Fn=await ci(
ne(D,qa),O,22),qn=qe;if(D.length>0){let te=he.subarray(0,he.length-D.length),it=await k.
digest("SHA-256",te);qn=new Uint8Array(it)}let Ut=await Mo(M.handshakeSecret,qn,
256,16),Oa=await k.importKey("raw",Ut.clientApplicationKey,{name:"AES-GCM"},!0,[
"encrypt"]),ka=new Rt("encrypt",Oa,Ut.clientApplicationIV),Qa=await k.importKey(
"raw",Ut.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),$a=new Rt("decryp\
t",Qa,Ut.serverApplicationIV),Tt=!1;return[()=>{if(!Tt){let te=ne(Y,...Fn);n(te),
Tt=!0}return Sr(t,$a)},async te=>{let it=Tt;Tt=!0;let On=await ci(te,ka,23),ja=it?
ne(...On):ne(Y,...Fn,...On);n(ja)}]}o(Jo,"he");var gi=class{static{o(this,"xt")}queue;outstandingRequest;constructor(){
this.queue=[]}enqueue(r){this.queue.push(r),this.dequeue()}dequeue(){if(this.outstandingRequest===
void 0)return;let{resolve:r,bytes:e}=this.outstandingRequest,t=this.bytesInQueue();
if(t<e&&this.socketIsNotClosed())return;if(e=Math.min(e,t),e===0)return r(void 0);
this.outstandingRequest=void 0;let n=this.queue[0],i=n.length;if(i===e)return this.
queue.shift(),r(n);if(i>e)return this.queue[0]=n.subarray(e),r(n.subarray(0,e));
{let s=new Uint8Array(e),a=e,u=0;for(;a>0;){let c=this.queue[0],l=c.length;l<=a?
(this.queue.shift(),s.set(c,u),u+=l,a-=l):(this.queue[0]=c.subarray(a),s.set(c.subarray(
0,a),u),a-=a,u+=a)}return r(s)}}bytesInQueue(){return this.queue.reduce((r,e)=>r+
e.length,0)}async read(r){if(this.outstandingRequest!==void 0)throw new Error("C\
an\u2019t read while already awaiting read");return new Promise(e=>{this.outstandingRequest=
{resolve:e,bytes:r},this.dequeue()})}},Yo=class extends gi{static{o(this,"vt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}},Zo=class extends gi{static{o(this,
"Lt")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(new Uint8Array(
e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,{readyState:e}=r;
return e==="opening"||e==="open"}};var Si=`-----BEGIN CERTIFICATE-----
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
`;y();var eu=Object.getOwnPropertyNames,tu=Object.getOwnPropertySymbols,ru=Object.prototype.
hasOwnProperty;function Ei(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(Ei,"combineComparators");function Ft(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Ft,"createIsCircular");
function bi(r){return eu(r).concat(tu(r))}o(bi,"getStrictProperties");var Ui=Object.
hasOwn||function(r,e){return ru.call(r,e)};function Ke(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(Ke,"sameValueZeroEqual");var Ti="_owner",xi=Object.getOwnPropertyDescriptor,
Ai=Object.keys;function nu(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(nu,"areArraysEqual");function iu(r,e){
return Ke(r.getTime(),e.getTime())}o(iu,"areDatesEqual");function vi(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,d=f[0],g=f[1],
S=u.value,A=S[0],E=S[1];!l&&!n[h]&&(l=t.equals(d,A,s,h,r,e,t)&&t.equals(g,E,d,A,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(vi,"areMapsEqual");function su(r,e,t){
var n=Ai(r),i=n.length;if(Ai(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===Ti&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Ui(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(su,"areObjectsEqual");function lt(r,e,t){var n=bi(
r),i=n.length;if(bi(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===Ti&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Ui(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=xi(r,s),u=xi(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(lt,"a\
reObjectsEqualStrict");function au(r,e){return Ke(r.valueOf(),e.valueOf())}o(au,
"arePrimitiveWrappersEqual");function ou(r,e){return r.source===e.source&&r.flags===
e.flags}o(ou,"areRegExpsEqual");function Ci(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(Ci,"areSetsEqual");function uu(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(uu,"are\
TypedArraysEqual");var cu="[object Arguments]",lu="[object Boolean]",hu="[object\
 Date]",fu="[object Map]",du="[object Number]",pu="[object Object]",yu="[object \
RegExp]",wu="[object Set]",mu="[object String]",gu=Array.isArray,_i=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Li=Object.assign,Su=Object.
prototype.toString.call.bind(Object.prototype.toString);function Eu(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,d){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var g=h.constructor;if(g!==f.constructor)return!1;if(g===Object)return i(
h,f,d);if(gu(h))return e(h,f,d);if(_i!=null&&_i(h))return c(h,f,d);if(g===Date)return t(
h,f,d);if(g===RegExp)return a(h,f,d);if(g===Map)return n(h,f,d);if(g===Set)return u(
h,f,d);var S=Su(h);return S===hu?t(h,f,d):S===yu?a(h,f,d):S===fu?n(h,f,d):S===wu?
u(h,f,d):S===pu?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,d):S===
cu?i(h,f,d):S===lu||S===du||S===mu?s(h,f,d):!1},"comparator")}o(Eu,"createEquali\
tyComparator");function bu(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?lt:nu,areDatesEqual:iu,areMapsEqual:n?Ei(vi,lt):vi,areObjectsEqual:n?
lt:su,arePrimitiveWrappersEqual:au,areRegExpsEqual:ou,areSetsEqual:n?Ei(Ci,lt):Ci,
areTypedArraysEqual:n?lt:uu};if(t&&(i=Li({},i,t(i))),e){var s=Ft(i.areArraysEqual),
a=Ft(i.areMapsEqual),u=Ft(i.areObjectsEqual),c=Ft(i.areSetsEqual);i=Li({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(bu,"createEqualityC\
omparatorConfig");function xu(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(xu,"createInternalEqualityComparator");function Au(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,d=f===void 0?e?new WeakMap:void 0:f,g=h.meta;return t(c,l,{cache:d,equals:i,
meta:g,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(Au,"createIsEqual");
var vr=_e(),Zh=_e({strict:!0}),Xh=_e({circular:!0}),ef=_e({circular:!0,strict:!0}),
tf=_e({createInternalComparator:function(){return Ke}}),rf=_e({strict:!0,createInternalComparator:function(){
return Ke}}),nf=_e({circular:!0,createInternalComparator:function(){return Ke}}),
sf=_e({circular:!0,createInternalComparator:function(){return Ke},strict:!0});function _e(r){
r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,
i=r.createState,s=r.strict,a=s===void 0?!1:s,u=bu(r),c=Eu(u),l=n?n(c):xu(c);return Au(
{circular:t,comparator:c,createState:i,equals:l,strict:a})}o(_e,"createCustomEqu\
al");y();var rr=at(tr());Vt();y();Xr();Vt();var Pa=at(xt());var De=class extends Error{static{o(this,"NeonDbError")}name="NeonDbError";code=null;sourceError};
function Ie(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,
queryCallback:a,resultCallback:u}={}){if(!r)throw new Error("No database connect\
ion string was provided to `neon()`. Perhaps an environment variable has not bee\
n set?");let c;try{c=Zr(r)}catch{throw new Error("Database connection string pro\
vided to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:l,
username:h,password:f,hostname:d,port:g,pathname:S}=c;if(l!=="postgres:"&&l!=="p\
ostgresql:"||!h||!f||!d||!S)throw new Error("Database connection string format f\
or `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
let A=o((U,...B)=>{let M,$;if(typeof U=="string")M=U,$=B[1],B=B[0]??[];else{M="";
for(let R=0;R<U.length;R++)M+=U[R],R<B.length&&(M+="$"+(R+1))}B=B.map(R=>(0,Pa.prepareValue)(
R));let P={query:M,params:B};return a&&a(P),_h(q,P,$)},"resolve"),E=e??!1,T=t??!1,
C=i,b=s,q=o(async(U,B)=>{let M=n??{},{fetchEndpoint:$,fetchConnectionCache:P,fetchFunction:R}=de,
O=typeof $=="function"?$(d,g):$,Q=Array.isArray(U)?{queries:U}:U;B!==void 0&&(B.
arrayMode!==void 0&&(E=B.arrayMode),B.fullResults!==void 0&&(T=B.fullResults),B.
isolationLevel!==void 0&&(C=B.isolationLevel),B.readOnly!==void 0&&(b=B.readOnly),
B.fetchOptions!==void 0&&(M={...M,...B.fetchOptions}));let G={"Neon-Connection-S\
tring":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true"};P===!0&&(G["Neo\
n-Pool-Opt-In"]="true"),Array.isArray(U)&&(C!==void 0&&(G["Neon-Batch-Isolation-\
Level"]=C),b!==void 0&&(G["Neon-Batch-Read-Only"]=String(b)));let H;try{H=await(R??
fetch)(O,{method:"POST",body:JSON.stringify(Q),headers:G,...M})}catch(F){let K=new De(
`Error connecting to database: ${F.message}`);throw K.sourceError=F,K}if(H.ok){let F=await H.
json();if(Array.isArray(U)){let K=F.results;if(!Array.isArray(K))throw new De("N\
eon internal error: unexpected result format");return K.map((Y,D)=>W(Y,U[D]))}else
return W(F,U)}else{let{status:F}=H;if(F===400){let{message:K,code:Y}=await H.json(),
D=new De(K);throw D.code=Y,D}else{let K=await H.text();throw new De(`Server erro\
r (HTTP status ${F}): ${K}`)}}},"execute"),W=o((U,B)=>{let M=U.fields.map(R=>R.name),
$=U.fields.map(R=>Pe.types.getTypeParser(R.dataTypeID)),P=E===!0?U.rows.map(R=>R.
map((O,Q)=>O===null?null:$[Q](O))):U.rows.map(R=>Object.fromEntries(R.map((O,Q)=>[
M[Q],O===null?null:$[Q](O)])));return u&&u(B,U,P,{arrayMode:E,fullResults:T}),T?
(U.viaNeonFetch=!0,U.rowAsArray=E,U.rows=P,U):P},"processQueryResult");return A.
transaction=async(U,B)=>{if(!Array.isArray(U))throw new Error("transaction() exp\
ects an array of queries");let M=U.map($=>{if($[Symbol.toStringTag]==="NeonQuery\
Promise"){let P=$;if(P.opts!==void 0)throw new Error("Cannot set options on indi\
vidual queries passed to `transaction()`: set options on `transaction()` instead");
return P.parameterizedQuery}else throw new Error("`transaction()` expects an arr\
ay of neon queries")});return q(M,B)},A}o(Ie,"neon");var _h=o((r,e,t)=>({[Symbol.
toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:(n,i)=>r(e,t).then(
n,i),catch:n=>r(e,t).catch(n),finally:n=>r(e,t).finally(n)}),"createNeonQueryPro\
mise");var Ba=at(Gt()),Pe=at(tr());var Ae=class extends rr.Client{constructor(t){super(t);this.config=t}static{o(this,
"NeonClient")}get neonConfig(){return this.connection.stream}connect(t){let{neonConfig:n}=this;
n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&
console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the con\
nection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureW\
ebSocket = true). Double encryption will increase latency and CPU usage. It may \
be appropriate to disable SSL in the Postgres connection parameters or set force\
DisablePgSSL = true.");let i=this.config?.host!==void 0||this.config?.connectionString!==
void 0||m.env.PGHOST!==void 0,s=m.env.USER??m.env.USERNAME;if(!i&&this.host==="l\
ocalhost"&&this.user===s&&this.database===s&&this.password===null)throw new Error(
`No database host or connection string was set, and key parameters have default \
values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environmen\
t variable missing? Alternatively, if you intended to connect with these paramet\
ers, please set the host to 'localhost' explicitly.`);let a=super.connect(t),u=n.
pipelineTLS&&this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)
return a;let l=this.connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),
c){l.removeAllListeners("authenticationCleartextPassword"),l.removeAllListeners(
"readyForQuery"),l.once("readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let h=this.ssl?"sslconnect":"connect";l.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return a}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let a=Object.
fromEntries(s.split(",").map(Y=>{if(!/^.=/.test(Y))throw new Error("SASL: Invali\
d attribute pair entry");let D=Y[0],he=Y.substring(2);return[D,he]})),u=a.r,c=a.
s,l=a.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),f=w.from(c,"base64"),d=new TextEncoder,
g=d.encode(i),S=await x.subtle.importKey("raw",g,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),A=new Uint8Array(await x.subtle.sign("HMAC",S,w.concat([f,w.from(
[0,0,0,1])]))),E=A;for(var T=0;T<h-1;T++)A=new Uint8Array(await x.subtle.sign("H\
MAC",S,A)),E=w.from(E.map((Y,D)=>E[D]^A[D]));let C=E,b=await x.subtle.importKey(
"raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),q=new Uint8Array(await x.
subtle.sign("HMAC",b,d.encode("Client Key"))),W=await x.subtle.digest("SHA-256",
q),U="n=*,r="+n.clientNonce,B="r="+u+",s="+c+",i="+h,M="c=biws,r="+u,$=U+","+B+"\
,"+M,P=await x.subtle.importKey("raw",W,{name:"HMAC",hash:{name:"SHA-256"}},!1,[
"sign"]);var R=new Uint8Array(await x.subtle.sign("HMAC",P,d.encode($))),O=w.from(
q.map((Y,D)=>q[D]^R[D])),Q=O.toString("base64");let G=await x.subtle.importKey("\
raw",C,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),H=await x.subtle.sign("H\
MAC",G,d.encode("Server Key")),F=await x.subtle.importKey("raw",H,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var K=w.from(await x.subtle.sign("HMAC",F,d.encode(
$)));n.message="SASLResponse",n.serverSignature=K.toString("base64"),n.response=
M+",p="+Q,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function Lh(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
Lh,"promisify");var Fe=class extends rr.Pool{static{o(this,"NeonPool")}Client=Ae;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!de.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=Lh(this.Promise,
n);n=i.callback;try{let s=new Ba.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];Ie(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h).then(d=>n(void 0,d)).catch(d=>n(d))}catch(s){n(s)}return i.result}};y();async function Uh(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(Uh,"t\
imed");async function rt(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await Uh(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(rt,"timedRepeat\
s");async function Ct(r,e){let{sql:t,test:n}=e,{rows:i}=await(typeof r=="functio\
n"?r(t):r.query(t));if(!n(i))throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(Ct,"runQuery");async function nt(r,e,t,n){
await e.connect();let i=await rt(r,()=>Ct(e,n));return t.waitUntil(e.end()),i}o(
nt,"clientRunQuery");async function nr(r,e,t,n){let i=new Fe({connectionString:e}),
s=await rt(r,()=>Ct(i,n));return t.waitUntil(i.end()),s}o(nr,"poolRunQuery");async function Ra(r,e,t,n){
let i=Ie(e,{fullResults:!0});return await rt(r,()=>Ct(i,n))}o(Ra,"httpRunQuery");y();var _t=[{sql:"SELECT * FROM employees LIMIT 10",test:r=>r.length>1&&typeof r[0].
first_name=="string"},{sql:"SELECT now()",test:r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString())}];async function o0(r,e,t){let n=[];for(let i of _t){let[,[[,s]]]=await nr(1,e.NEON_DB_URL,
t,i);n.push(s)}for(let i of _t){let[,[[,s]]]=await Ra(1,e.NEON_DB_URL,t,i);n.push(
s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-Type":"applic\
ation/json"}})}o(o0,"cf");var Be={waitUntil(r){},passThroughOnException(){}};async function Th(r,e=(...t)=>{}){
let t=Ie(r.NEON_DB_URL),[[n],[i]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,
t`SELECT ${"hello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(n),JSON.
stringify(i),`
`),n.batchInt!==1||i.batchStr!=="hello")throw new Error("Batch query problem");let s=await t.
transaction([]);e("empty txn result:",JSON.stringify(s),`
`);let a;try{await t.transaction([t`SELECT ${1}::int AS "batchInt"`,t('SELECT $1\
 AS "batchStr"',["hello"],{arrayMode:!1})])}catch(g){a=g}if(a===void 0)throw new Error(
"Error should have been raised for individual query options inside transaction");
e(`caught option setting on individual transaction queries
`);let[[[u]],[[c]]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,t`SELECT ${"\
hello"} AS "batchStr"`],{arrayMode:!0,isolationLevel:"Serializable",readOnly:!0});
if(e("array mode (via transaction options) batch results:",JSON.stringify(u),JSON.
stringify(c),`
`),u!==1||c!=="hello")throw new Error("Batch query problem");let l=Ie(r.NEON_DB_URL,
{arrayMode:!0,isolationLevel:"RepeatableRead"}),[[[h]],[[f]]]=await l.transaction(
[l`SELECT ${1}::int AS "batchInt"`,l`SELECT ${"hello"} AS "batchStr"`]);if(e("ar\
ray mode (via neon options) batch results:",JSON.stringify(h),JSON.stringify(f),
`
`),h!==1||f!=="hello")throw new Error("Batch query problem");let d;try{await t.transaction(
[t`SELECT ${1}::int AS "batchInt"`,`SELECT 'hello' AS "batchStr"`])}catch(g){d=g}
if(d===void 0)throw new Error("Error should have been raised for string passed t\
o `transaction()`");e("caught invalid query passed to `transaction()`\n")}o(Th,"\
batchQueryTest");async function u0(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up \
...

`),await nr(1,r.NEON_DB_URL,Be,_t[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Fe({connectionString:r.
NEON_DB_URL}),c=Ie(r.NEON_DB_URL,{resultCallback:async(d,g,S,A)=>{let E=await u.
query({text:d.query,values:d.params,...A.arrayMode?{rowMode:"array"}:{}}),T=g.command===
E.command,C=g.rowCount===E.rowCount,b=vr(g.fields.map(U=>U.dataTypeID),E.fields.
map(U=>U.dataTypeID)),q=vr(S,E.rows);t(T&&C&&q&&b?"\u2713":"X",JSON.stringify(d),
`
  -> us:`,JSON.stringify(S),`
  -> pg:`,JSON.stringify(E.rows),`
`)}}),l=new Date;await c`SELECT ${1} AS int_uncast`,await c`SELECT ${1}::int AS int`,
await c`SELECT ${1}::int8 AS int8num`,await c`SELECT ${1}::decimal AS decimalnum`,
await c`SELECT ${"[1,4)"}::int4range AS int4range`,await c`SELECT ${"hello"} AS str`,
await c`SELECT ${["a","b","c"]} AS arrstr_uncast`,await c`SELECT ${[[1,2],[3,4]]}::int[][] AS arrnumnested`,
await c`SELECT ${l}::timestamptz AS timestamptznow`,await c`SELECT ${"16:17:18+0\
1:00"}::timetz AS timetz`,await c`SELECT ${"17:18:19"}::time AS time`,await c`SELECT ${l}::date AS datenow`,
await c`SELECT ${{x:"y"}} AS obj_uncast`,await c`SELECT ${"11:22:33:44:55:66"}::macaddr AS macaddr`,
await c`SELECT ${"\\xDEADBEEF"}::bytea AS bytea`,await c`SELECT ${"(2, 3)"}::point AS point`,
await c`SELECT ${"<(2, 3), 1>"}::circle AS circle`,await c`SELECT ${"10.10.10.0/\
24"}::cidr AS cidr`,await c`SELECT ${!0} AS bool_uncast`,await c`SELECT ${"hello"} || ' ' || ${"\
world"} AS greeting`,await c`SELECT ${[1,2,3]}::int[] AS arrnum`,await c`SELECT ${[
"a","b","c"]}::text[] AS arrstr`,await c`SELECT ${{x:"y"}}::jsonb AS jsonb_obj`,
await c`SELECT ${{x:"y"}}::json AS json_obj`,await c`SELECT ${["11:22:33:44:55:6\
6"]}::macaddr[] AS arrmacaddr`,await c`SELECT ${["10.10.10.0/24"]}::cidr[] AS arrcidr`,
await c`SELECT ${!0}::boolean AS bool`,await c`SELECT ${[l]}::timestamptz[] AS arrtstz`,
await c`SELECT ${["(2, 3)"]}::point[] AS arrpoint`,await c`SELECT ${["<(2, 3), 1\
>"]}::circle[] AS arrcircle`,await c`SELECT ${["\\xDEADBEEF","\\xDEADBEEF"]}::bytea[] AS arrbytea`,
await c`SELECT null AS null`,await c`SELECT ${null} AS null`,await c`SELECT ${"N\
ULL"} AS null_str`,await c`SELECT ${[1,2,3]} AS arrnum_uncast`,await c`SELECT ${[
[1,2],[3,4]]} AS arrnumnested_uncast`,await c`SELECT ${l} AS timenow_uncast`,await c`SELECT ${l}::timestamp AS timestampnow`,
await c("SELECT $1::timestamp AS timestampnow",[l]),await c("SELECT $1 || ' ' ||\
 $2 AS greeting",["hello","world"]),await c("SELECT 123 AS num"),await c("SELECT\
 123 AS num",[],{arrayMode:!0,fullResults:!0}),de.fetchConnectionCache=!0,await c`SELECT ${"\
hello"} AS str`,await c`SELECT ${"world"} AS str`,await c("SELECT 123 AS num");function h(d,g,S=3){
return async function(A,...E){let T="";for(let C=0;C<A.length;C++)T+=A[C],C<E.length&&
(T+="$"+(C+1));for(let C=1;;C++){let b=new AbortController,q=setTimeout(()=>b.abort(
"fetch timed out"),g);try{let{signal:W}=b;return await d(T,E,{fetchOptions:{signal:W}})}catch(W){
if(!(W.sourceError&&W.sourceError instanceof DOMException&&W.sourceError.name===
"AbortError")||C>=S)throw W}finally{clearTimeout(q)}}}}o(h,"sqlWithRetries"),await h(
c,5e3)`SELECT ${"did this time out?"} AS str`,await Th(r,t),de.fetchFunction=(d,g)=>(console.
log("custom fetch:",d,g),fetch(d,g)),await c`SELECT ${"customFetch"} AS str`,await new Promise(
d=>setTimeout(d,1e3)),u.end(),t(`

===== Pool/Client tests =====
`);for(let d of _t){t(`
----- ${d.sql} -----

`);async function g(A,E){let T=String.fromCharCode(s+(s>25?23:65));t(`${T}
`);try{await fetch(`http://localhost:443/${T}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,C]=await rt(i,()=>E(A),b=>t(`<span class="live">${b.toFixed()}\
ms</span> `));t(`
Sorted:  `),C.map(([b])=>b).sort((b,q)=>b-q).forEach((b,q)=>{t(q===(i-1)/2?`<spa\
n class="median">${b.toFixed()}ms</span> `:`${b.toFixed()}ms `)}),t(`

`),s+=1}o(g,"section");async function S(A,E){t(`----- ${A} -----

`);for(let T of n)t(`${T} quer${T===1?"y":"ies"} \u2013 `),await g(T,E)}o(S,"sec\
tions"),await S("Neon/wss, no pipelining",async A=>{let E=new Ae(r.NEON_DB_URL);
E.neonConfig.pipelineConnect=!1,await nt(A,E,Be,d)}),await S("Neon/wss, pipeline\
d connect (default)",async A=>{let E=new Ae(r.NEON_DB_URL);await nt(A,E,Be,d)}),
await S("Neon/wss, pipelined connect, no coalescing",async A=>{let E=new Ae(r.NEON_DB_URL);
E.neonConfig.coalesceWrites=!1,await nt(A,E,Be,d)}),await S("Neon/wss, pipelined\
 connect using Pool.query",async A=>{await nr(A,r.NEON_DB_URL,Be,d)}),await S("N\
eon/wss, pipelined connect using Pool.connect",async A=>{let E=new Fe({connectionString:r.
NEON_DB_URL}),T=await E.connect();await rt(A,()=>Ct(T,d)),T.release(),Be.waitUntil(
E.end())}),await S("Patched pg/wss, pipelined connect",async A=>{let E=new Ae(r.
MY_DB_URL);E.neonConfig.wsProxy=(T,C)=>`ws.manipulexity.com/v1?address=${T}:${C}`,
E.neonConfig.pipelineConnect="password",await nt(A,E,Be,d)}),e&&(de.subtls=Ar,de.
rootCerts=Si,await S("Patched pg/subtls, pipelined TLS + connect",async A=>{let E=new Ae(
r.MY_DB_URL);E.neonConfig.wsProxy=(T,C)=>`ws.manipulexity.com/v1?address=${T}:${C}`,
E.neonConfig.forceDisablePgSSL=E.neonConfig.useSecureWebSocket=!1,E.neonConfig.pipelineTLS=
!0,E.neonConfig.pipelineConnect="password",await nt(A,E,Be,d)}))}}o(u0,"latencie\
s");export{Th as batchQueryTest,o0 as cf,u0 as latencies,de as neonConfig};
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
