var Ha=Object.create;var rt=Object.defineProperty;var Ka=Object.getOwnPropertyDescriptor;var Wa=Object.getOwnPropertyNames;var Ga=Object.getPrototypeOf,Va=Object.prototype.hasOwnProperty;var o=(r,e)=>rt(r,"name",{value:e,configurable:!0});var ae=(r,e)=>()=>(r&&(e=r(r=0)),e);var B=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),he=(r,e)=>{for(var t in e)
rt(r,t,{get:e[t],enumerable:!0})},Qn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Wa(e))!Va.call(r,i)&&i!==t&&rt(r,i,{get:()=>e[i],enumerable:!(n=
Ka(e,i))||n.enumerable});return r};var nt=(r,e,t)=>(t=r!=null?Ha(Ga(r)):{},Qn(e||!r||!r.__esModule?rt(t,"default",{
value:r,enumerable:!0}):t,r)),J=r=>Qn(rt({},"__esModule",{value:!0}),r);var Hn=B(Lt=>{"use strict";y();Lt.byteLength=Ya;Lt.toByteArray=Za;Lt.fromByteArray=
to;var me=[],fe=[],za=typeof Uint8Array<"u"?Uint8Array:Array,ir="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,jn=ir.length;Pe<jn;++Pe)
me[Pe]=ir[Pe],fe[ir.charCodeAt(Pe)]=Pe;var Pe,jn;fe["-".charCodeAt(0)]=62;fe["_".
charCodeAt(0)]=63;function $n(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o($n,"getLens");function Ya(r){var e=$n(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(Ya,"byteLength");function Ja(r,e,t){return(e+t)*3/4-t}o(Ja,"_byteLeng\
th");function Za(r){var e,t=$n(r),n=t[0],i=t[1],s=new za(Ja(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=fe[r.charCodeAt(c)]<<18|fe[r.charCodeAt(c+1)]<<12|fe[r.
charCodeAt(c+2)]<<6|fe[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=fe[r.charCodeAt(c)]<<2|fe[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=fe[r.charCodeAt(c)]<<10|fe[r.charCodeAt(c+1)]<<4|fe[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o(Za,"toByteArray");function Xa(r){return me[r>>
18&63]+me[r>>12&63]+me[r>>6&63]+me[r&63]}o(Xa,"tripletToBase64");function eo(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(Xa(n));return i.join("")}o(eo,"encodeChunk");function to(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(eo(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(me[e>>2]+me[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
me[e>>10]+me[e>>4&63]+me[e<<2&63]+"=")),i.join("")}o(to,"fromByteArray")});var Kn=B(sr=>{y();sr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,p=t?-1:1,g=r[e+f];for(f+=p,s=g&(1<<-h)-1,g>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=p,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=p,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(g?
-1:1)*a*Math.pow(2,s-n)};sr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:s-1,S=n?1:-1,A=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=p/c:e+=
p*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+g]=u&255,g+=S,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+g]=a&255,g+=S,a/=256,l-=8);r[t+g-S]|=A*128}});var ui=B(Oe=>{"use strict";y();var ar=Hn(),De=Kn(),Wn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Oe.Buffer=
d;Oe.SlowBuffer=oo;Oe.INSPECT_MAX_BYTES=50;var Tt=2147483647;Oe.kMaxLength=Tt;d.
TYPED_ARRAY_SUPPORT=ro();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function ro(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(ro,"typedArraySupport");Object.defineProperty(d.prototype,
"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}});
Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(
this))return this.byteOffset}});function be(r){if(r>Tt)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,d.prototype),e}o(be,"createBuffer");function d(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return lr(r)}return Yn(r,e,t)}o(d,"Buf\
fer");d.poolSize=8192;function Yn(r,e,t){if(typeof r=="string")return io(r,e);if(ArrayBuffer.
isView(r))return so(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(ge(r,ArrayBuffer)||r&&ge(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(ge(r,SharedArrayBuffer)||r&&ge(r.buffer,SharedArrayBuffer)))return ur(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return d.from(n,e,t);let i=ao(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
Yn,"from");d.from=function(r,e,t){return Yn(r,e,t)};Object.setPrototypeOf(d.prototype,
Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Jn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(Jn,"assertSize");function no(r,e,t){
return Jn(r),r<=0?be(r):e!==void 0?typeof t=="string"?be(r).fill(e,t):be(r).fill(
e):be(r)}o(no,"alloc");d.alloc=function(r,e,t){return no(r,e,t)};function lr(r){
return Jn(r),be(r<0?0:hr(r)|0)}o(lr,"allocUnsafe");d.allocUnsafe=function(r){return lr(
r)};d.allocUnsafeSlow=function(r){return lr(r)};function io(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Zn(r,e)|0,n=be(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(io,"fromString");function or(r){let e=r.length<0?0:hr(r.length)|0,t=be(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(or,"fromArrayLike");function so(r){if(ge(r,Uint8Array)){
let e=new Uint8Array(r);return ur(e.buffer,e.byteOffset,e.byteLength)}return or(
r)}o(so,"fromArrayView");function ur(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(ur,"fromArrayBuffer");function ao(r){if(d.isBuffer(r)){let e=hr(
r.length)|0,t=be(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||dr(r.length)?be(0):or(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return or(r.data)}o(ao,"fromObject");function hr(r){if(r>=
Tt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Tt.toString(16)+" bytes");return r|0}o(hr,"checked");function oo(r){return+r!=r&&
(r=0),d.alloc(+r)}o(oo,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==d.prototype},"isBuffer");d.compare=o(function(e,t){if(ge(e,Uint8Array)&&
(e=d.from(e,e.offset,e.byteLength)),ge(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),
!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");d.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");d.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(ge(a,Uint8Array))s+a.length>i.length?(d.isBuffer(
a)||(a=d.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(d.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function Zn(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ge(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return cr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return oi(r).length;default:if(i)return n?-1:cr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(Zn,"byteLength");d.byteLength=Zn;function uo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return So(
this,e,t);case"utf8":case"utf-8":return ei(this,e,t);case"ascii":return mo(this,
e,t);case"latin1":case"binary":return go(this,e,t);case"base64":return yo(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Eo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
uo,"slowToString");d.prototype._isBuffer=!0;function Re(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(Re,"swap");d.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Re(this,t,t+1);return this},"swap16");d.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Re(this,t,t+3),Re(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Re(this,t,t+7),
Re(this,t+1,t+6),Re(this,t+2,t+5),Re(this,t+3,t+4);return this},"swap64");d.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?ei(
this,0,e):uo.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=Oe.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Wn&&(d.prototype[Wn]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(ge(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function Xn(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,dr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:Gn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Gn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Xn,"bid\
irectionalIndexOf");function Gn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Gn,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return Xn(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return Xn(this,e,t,n,!1)},"lastIndexOf");function co(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(dr(u))
return a;r[t+a]=u}return a}o(co,"hexWrite");function lo(r,e,t,n){return It(cr(e,
r.length-t),r,t,n)}o(lo,"utf8Write");function ho(r,e,t,n){return It(vo(e),r,t,n)}
o(ho,"asciiWrite");function fo(r,e,t,n){return It(oi(e),r,t,n)}o(fo,"base64Write");
function po(r,e,t,n){return It(Co(e,r.length-t),r,t,n)}o(po,"ucs2Write");d.prototype.
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
write");d.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function yo(r,e,t){return e===0&&t===r.
length?ar.fromByteArray(r):ar.fromByteArray(r.slice(e,t))}o(yo,"base64Slice");function ei(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return wo(n)}o(ei,"utf8Slice");var Vn=4096;function wo(r){
let e=r.length;if(e<=Vn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Vn));return t}o(wo,"d\
ecodeCodePointsArray");function mo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(mo,"asciiSlice");function go(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(go,"latin1Slice");function So(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=_o[r[s]];return i}o(So,"he\
xSlice");function Eo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(Eo,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function X(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(X,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=this[e],
s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");d.prototype.
readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){return e=
e>>>0,t||X(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=d.prototype.
readUInt16LE=o(function(e,t){return e=e>>>0,t||X(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=o(function(e,t){
return e=e>>>0,t||X(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");d.prototype.
readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=e>>>0,t||X(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){return e=e>>>0,
t||X(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");d.prototype.readBigUInt64LE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));d.prototype.
readBigUInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&it(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=o(function(e,t,n){
e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)
i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");d.prototype.
readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||X(e,t,this.length);let i=t,s=1,a=this[e+
--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*t)),
a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=e>>>0,t||X(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");d.prototype.readInt16LE=
o(function(e,t){e=e>>>0,t||X(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=o(function(e,t){e=e>>>
0,t||X(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=e>>>0,t||X(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");d.prototype.
readInt32BE=o(function(e,t){return e=e>>>0,t||X(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.readBigInt64LE=ve(o(function(e){
e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));d.prototype.readBigInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));d.prototype.
readFloatLE=o(function(e,t){return e=e>>>0,t||X(e,4,this.length),De.read(this,e,
!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){return e=e>>>0,
t||X(e,4,this.length),De.read(this,e,!1,23,4)},"readFloatBE");d.prototype.readDoubleLE=
o(function(e,t){return e=e>>>0,t||X(e,8,this.length),De.read(this,e,!0,52,8)},"r\
eadDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=e>>>0,t||X(e,8,this.
length),De.read(this,e,!1,52,8)},"readDoubleBE");function ue(r,e,t,n,i,s){if(!d.
isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>
i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)
throw new RangeError("Index out of range")}o(ue,"checkInt");d.prototype.writeUintLE=
d.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;ue(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<n&&(s*=256);)this[t+
a]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=d.prototype.writeUIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;ue(this,
e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)this[t+s]=e/a&255;
return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.writeUInt8=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");d.prototype.
writeUint16LE=d.prototype.writeUInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");d.prototype.
writeUint16BE=d.prototype.writeUInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");d.prototype.
writeUint32LE=d.prototype.writeUInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=
e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=d.prototype.writeUInt32BE=
o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,4,4294967295,0),this[t]=e>>>
24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ti(r,e,t,n,i){
ai(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>
8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,t}o(ti,"wrtBigUInt64LE");function ri(r,e,t,n,i){
ai(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=a,a=a>>8,r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(ri,"wrtBigUInt64BE");d.
prototype.writeBigUInt64LE=ve(o(function(e,t=0){return ti(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=ve(o(function(e,t=0){
return ri(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
d.prototype.writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);ue(this,e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIn\
tLE");d.prototype.writeIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.
pow(2,8*n-1);ue(this,e,t,n,c-1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&
(a*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},
"writeIntBE");d.prototype.writeInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(
this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");d.prototype.
writeInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),
this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");d.prototype.writeInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");d.prototype.writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>
0,n||ue(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+
2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");d.prototype.writeInt32BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+
e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"write\
Int32BE");d.prototype.writeBigInt64LE=ve(o(function(e,t=0){return ti(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.
writeBigInt64BE=ve(o(function(e,t=0){return ri(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function ni(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}o(ni,"checkIEEE754");function ii(r,e,t,n,i){return e=+e,t=
t>>>0,i||ni(r,e,t,4,34028234663852886e22,-34028234663852886e22),De.write(r,e,t,n,
23,4),t+4}o(ii,"writeFloat");d.prototype.writeFloatLE=o(function(e,t,n){return ii(
this,e,t,!0,n)},"writeFloatLE");d.prototype.writeFloatBE=o(function(e,t,n){return ii(
this,e,t,!1,n)},"writeFloatBE");function si(r,e,t,n,i){return e=+e,t=t>>>0,i||ni(
r,e,t,8,17976931348623157e292,-17976931348623157e292),De.write(r,e,t,n,52,8),t+8}
o(si,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){return si(this,e,
t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){return si(
this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=o(function(e,t,n,i){if(!d.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=
this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-
t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),
s},"copy");d.prototype.fill=o(function(e,t,n,i){if(typeof e=="string"){if(typeof t==
"string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i==
"string"&&!d.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===
1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)
this[s]=e;else{let a=d.isBuffer(e)?e:d.from(e,i),u=a.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=
a[s%u]}return this},"fill");var qe={};function fr(r,e,t){qe[r]=class extends t{static{
o(this,"NodeError")}constructor(){super(),Object.defineProperty(this,"message",{
value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name}\
 [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.
name} [${r}]: ${this.message}`}}}o(fr,"E");fr("ERR_BUFFER_OUT_OF_BOUNDS",function(r){
return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside bu\
ffer bounds"},RangeError);fr("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}\
" argument must be of type number. Received type ${typeof e}`},TypeError);fr("ER\
R_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;
return Number.isInteger(t)&&Math.abs(t)>2**32?i=zn(String(t)):typeof t=="bigint"&&
(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=zn(i)),i+=
"n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function zn(r){let e="",
t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.
slice(0,t)}${e}`}o(zn,"addNumericalSeparator");function bo(r,e,t){ke(e,"offset"),
(r[e]===void 0||r[e+t]===void 0)&&it(e,r.length-(t+1))}o(bo,"checkBounds");function ai(r,e,t,n,i,s){
if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and \
< 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,new qe.ERR_OUT_OF_RANGE(
"value",u,r)}bo(n,i,s)}o(ai,"checkIntBI");function ke(r,e){if(typeof r!="number")
throw new qe.ERR_INVALID_ARG_TYPE(e,"number",r)}o(ke,"validateNumber");function it(r,e,t){
throw Math.floor(r)!==r?(ke(r,t),new qe.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new qe.ERR_BUFFER_OUT_OF_BOUNDS:new qe.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}o(it,"boundsError");var xo=/[^+/0-9A-Za-z-_]/g;function Ao(r){
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
o(Co,"utf16leToBytes");function oi(r){return ar.toByteArray(Ao(r))}o(oi,"base64T\
oBytes");function It(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}o(It,"blitBuffer");function ge(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
o(ge,"isInstance");function dr(r){return r!==r}o(dr,"numberIsNaN");var _o=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function ve(r){return typeof BigInt>"u"?Uo:r}
o(ve,"defineBigIntMethod");function Uo(){throw new Error("BigInt not supported")}
o(Uo,"BufferBigIntNotDefined")});var v,_,U,b,w,m,y=ae(()=>{"use strict";v=globalThis,_=globalThis.setImmediate??(r=>setTimeout(
r,0)),U=globalThis.clearImmediate??(r=>clearTimeout(r)),b=globalThis.crypto??{};
b.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:ui().Buffer,m=globalThis.process??{};m.env??={};try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var Bi={};he(Bi,{parse:()=>Cr});function Cr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:p}=new URL(n);s=decodeURIComponent(s);let g=i+":"+s,
S=e?Object.fromEntries(f.entries()):h;return{href:r,protocol:t,auth:g,username:i,
password:s,host:a,hostname:u,port:c,pathname:l,search:h,query:S,hash:p}}var _r=ae(
()=>{y();o(Cr,"parse")});var Ue=B((cf,Ur)=>{"use strict";y();var He=typeof Reflect=="object"?Reflect:null,
Pi=He&&typeof He.apply=="function"?He.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Ft;He&&typeof He.ownKeys=="function"?Ft=He.ownKeys:
Object.getOwnPropertySymbols?Ft=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Ft=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function vu(r){console&&console.warn&&
console.warn(r)}o(vu,"ProcessEmitWarning");var Mi=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function q(){q.init.call(this)}o(q,"EventEmitter");Ur.exports=
q;Ur.exports.once=Lu;q.EventEmitter=q;q.prototype._events=void 0;q.prototype._eventsCount=
0;q.prototype._maxListeners=void 0;var Ri=10;function qt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(qt,"checkListener");Object.defineProperty(q,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Ri},set:function(r){if(typeof r!="\
number"||r<0||Mi(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Ri=r}});q.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};q.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||Mi(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function Ni(r){return r._maxListeners===void 0?q.defaultMaxListeners:r._maxListeners}
o(Ni,"_getMaxListeners");q.prototype.getMaxListeners=o(function(){return Ni(this)},
"getMaxListeners");q.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")Pi(c,this,t);else for(var l=c.
length,h=Oi(c,l),n=0;n<l;++n)Pi(h[n],this,t);return!0},"emit");function Fi(r,e,t,n){
var i,s,a;if(qt(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=Ni(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,vu(u)}
return r}o(Fi,"_addListener");q.prototype.addListener=o(function(e,t){return Fi(
this,e,t,!1)},"addListener");q.prototype.on=q.prototype.addListener;q.prototype.
prependListener=o(function(e,t){return Fi(this,e,t,!0)},"prependListener");function Cu(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(Cu,"onceWrapper");function qi(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=Cu.bind(n);return i.listener=t,n.wrapFn=i,i}o(qi,"\
_onceWrap");q.prototype.once=o(function(e,t){return qt(t),this.on(e,qi(this,e,t)),
this},"once");q.prototype.prependOnceListener=o(function(e,t){return qt(t),this.
prependListener(e,qi(this,e,t)),this},"prependOnceListener");q.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(qt(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():_u(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");q.prototype.off=q.prototype.
removeListener;q.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function Di(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?Uu(i):Oi(i,i.length)}o(Di,"_listeners");q.prototype.
listeners=o(function(e){return Di(this,e,!0)},"listeners");q.prototype.rawListeners=
o(function(e){return Di(this,e,!1)},"rawListeners");q.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):ki.call(r,e)};q.prototype.
listenerCount=ki;function ki(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(ki,"listenerCount");
q.prototype.eventNames=o(function(){return this._eventsCount>0?Ft(this._events):
[]},"eventNames");function Oi(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(Oi,"arrayClone");function _u(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(_u,"spliceOne");function Uu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(Uu,"unwrapListeners");function Lu(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Qi(r,e,s,{once:!0}),e!=="error"&&Tu(r,i,{once:!0})})}
o(Lu,"once");function Tu(r,e,t){typeof r.on=="function"&&Qi(r,"error",e,t)}o(Tu,
"addErrorHandlerIfEventEmitter");function Qi(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Qi,"eventTargetAgnosticAddListener")});var $i={};he($i,{Socket:()=>de,isIP:()=>Iu});function Iu(r){return 0}var ji,de,Dt=ae(
()=>{"use strict";y();ji=nt(Ue(),1);o(Iu,"isIP");de=class r extends ji.EventEmitter{static{
o(this,"Socket")}static defaults={webSocketConstructor:void 0,wsProxy:e=>e+"/v2",
useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,pipelineConnect:"pa\
ssword",poolQueryViaFetch:!1,fetchConnectionCache:!1,subtls:void 0,rootCerts:"",
pipelineTLS:!1,disableSNI:!1};static poolQueryViaFetch;_poolQueryViaFetch;get poolQueryViaFetch(){
return this._poolQueryViaFetch??r.poolQueryViaFetch??r.defaults.poolQueryViaFetch}set poolQueryViaFetch(e){
this._poolQueryViaFetch=e}static fetchConnectionCache;_fetchConnectionCache;get fetchConnectionCache(){
return this._fetchConnectionCache??r.fetchConnectionCache??r.defaults.fetchConnectionCache}set fetchConnectionCache(e){
this._fetchConnectionCache=e}static webSocketConstructor;_webSocketConstructor;get webSocketConstructor(){
return this._webSocketConstructor??r.webSocketConstructor??r.defaults.webSocketConstructor}set webSocketConstructor(e){
this._webSocketConstructor=e}static wsProxy;_wsProxy;get wsProxy(){return this._wsProxy??
r.wsProxy??r.defaults.wsProxy}set wsProxy(e){this._wsProxy=e}static coalesceWrites;_coalesceWrites;get coalesceWrites(){
return this._coalesceWrites??r.coalesceWrites??r.defaults.coalesceWrites}set coalesceWrites(e){
this._coalesceWrites=e}static useSecureWebSocket;_useSecureWebSocket;get useSecureWebSocket(){
return this._useSecureWebSocket??r.useSecureWebSocket??r.defaults.useSecureWebSocket}set useSecureWebSocket(e){
this._useSecureWebSocket=e}static forceDisablePgSSL;_forceDisablePgSSL;get forceDisablePgSSL(){
return this._forceDisablePgSSL??r.forceDisablePgSSL??r.defaults.forceDisablePgSSL}set forceDisablePgSSL(e){
this._forceDisablePgSSL=e}static disableSNI;_disableSNI;get disableSNI(){return this.
_disableSNI??r.disableSNI??r.defaults.disableSNI}set disableSNI(e){this._disableSNI=
e}static pipelineConnect;_pipelineConnect;get pipelineConnect(){return this._pipelineConnect??
r.pipelineConnect??r.defaults.pipelineConnect}set pipelineConnect(e){this._pipelineConnect=
e}static subtls;_subtls;get subtls(){return this._subtls??r.subtls??r.defaults.subtls}set subtls(e){
this._subtls=e}static pipelineTLS;_pipelineTLS;get pipelineTLS(){return this._pipelineTLS??
r.pipelineTLS??r.defaults.pipelineTLS}set pipelineTLS(e){this._pipelineTLS=e}static rootCerts;_rootCerts;get rootCerts(){
return this._rootCerts??r.rootCerts??r.defaults.rootCerts}set rootCerts(e){this.
_rootCerts=e}wsProxyAddrForHost(e,t){let n=this.wsProxy;if(n===void 0)throw new Error(
"No WebSocket proxy is configured. Please refer to https://github.com/neondataba\
se/serverless#run-your-own-websocket-proxy");return typeof n=="function"?n(e,t):
`${n}?address=${e}:${t}`}connecting=!1;pending=!0;writable=!0;encrypted=!1;authorized=!1;destroyed=!1;ws=null;writeBuffer;tlsState=0;tlsRead;tlsWrite;setNoDelay(){
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
!0,this.end()}}});function ut(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],p=o((C,E)=>C>>>E|C<<32-E,
"rrot"),g=new Uint32Array(64),S=new Uint8Array(64),A=o(()=>{for(let P=0,$=0;P<16;P++,
$+=4)g[P]=S[$]<<24|S[$+1]<<16|S[$+2]<<8|S[$+3];for(let P=16;P<64;P++){let $=p(g[P-
15],7)^p(g[P-15],18)^g[P-15]>>>3,H=p(g[P-2],17)^p(g[P-2],19)^g[P-2]>>>10;g[P]=g[P-
16]+$+g[P-7]+H|0}let C=e,E=t,L=n,R=i,M=s,D=a,N=u,z=c;for(let P=0;P<64;P++){let $=p(
M,6)^p(M,11)^p(M,25),H=M&D^~M&N,K=z+$+H+f[P]+g[P]|0,G=p(C,2)^p(C,13)^p(C,22),Y=C&
E^C&L^E&L,k=G+Y|0;z=N,N=D,D=M,M=R+K|0,R=L,L=E,E=C,C=K+k|0}e=e+C|0,t=t+E|0,n=n+L|
0,i=i+R|0,s=s+M|0,a=a+D|0,u=u+N|0,c=c+z|0,h=0},"process"),x=o(C=>{typeof C=="str\
ing"&&(C=new TextEncoder().encode(C));for(let E=0;E<C.length;E++)S[h++]=C[E],h===
64&&A();l+=C.length},"add"),T=o(()=>{if(S[h++]=128,h==64&&A(),h+8>64){for(;h<64;)
S[h++]=0;A()}for(;h<58;)S[h++]=0;let C=l*8;S[h++]=C/1099511627776&255,S[h++]=C/4294967296&
255,S[h++]=C>>>24,S[h++]=C>>>16&255,S[h++]=C>>>8&255,S[h++]=C&255,A();let E=new Uint8Array(
32);return E[0]=e>>>24,E[1]=e>>>16&255,E[2]=e>>>8&255,E[3]=e&255,E[4]=t>>>24,E[5]=
t>>>16&255,E[6]=t>>>8&255,E[7]=t&255,E[8]=n>>>24,E[9]=n>>>16&255,E[10]=n>>>8&255,
E[11]=n&255,E[12]=i>>>24,E[13]=i>>>16&255,E[14]=i>>>8&255,E[15]=i&255,E[16]=s>>>
24,E[17]=s>>>16&255,E[18]=s>>>8&255,E[19]=s&255,E[20]=a>>>24,E[21]=a>>>16&255,E[22]=
a>>>8&255,E[23]=a&255,E[24]=u>>>24,E[25]=u>>>16&255,E[26]=u>>>8&255,E[27]=u&255,
E[28]=c>>>24,E[29]=c>>>16&255,E[30]=c>>>8&255,E[31]=c&255,E},"digest");return r===
void 0?{add:x,digest:T}:(x(r),T())}var Hi=ae(()=>{"use strict";y();o(ut,"sha256")});var ct,Ki=ae(()=>{"use strict";y();ct=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
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
_state:r._hex(this._state)}}});var Lr={};he(Lr,{createHash:()=>Pu,createHmac:()=>Ru,randomBytes:()=>Bu});function Bu(r){
return b.getRandomValues(w.alloc(r))}function Pu(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return w.from(ut(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?ct.hashStr(e):ct.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Ru(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=ut(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(ut(a),64),w.from(ut(u))}}}}}var Tr=ae(()=>{y();Hi();Ki();o(Bu,"randomBytes");
o(Pu,"createHash");o(Ru,"createHmac")});var Br=B(Wi=>{"use strict";y();Wi.parse=function(r,e){return new Ir(r,e).parse()};
var Ir=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||Mu,this.position=0,this.entries=[],this.recorded=[],this.dimension=
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
0)throw new Error("array dimension not balanced");return this.entries}};function Mu(r){
return r}o(Mu,"identity")});var Pr=B((Uf,Gi)=>{y();var Nu=Br();Gi.exports={create:function(r,e){return{parse:function(){
return Nu.parse(r,e)}}}}});var Yi=B((Tf,zi)=>{"use strict";y();var Fu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
qu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Du=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,ku=/^-?infinity$/;
zi.exports=o(function(e){if(ku.test(e))return Number(e.replace("i","I"));var t=Fu.
exec(e);if(!t)return Ou(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Vi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,p=Qu(e);return p!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),Rr(i)&&f.setUTCFullYear(i),p!==0&&f.setTime(f.getTime()-p)):(f=new Date(
i,s,a,u,c,l,h),Rr(i)&&f.setFullYear(i)),f},"parseDate");function Ou(r){var e=qu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Vi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Rr(t)&&a.setFullYear(t),a}}o(Ou,"getDate");
function Qu(r){if(r.endsWith("+00"))return 0;var e=Du.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(Qu,"timeZoneOffset");function Vi(r){
return-(r-1)}o(Vi,"bcYearToNegativeYear");function Rr(r){return r>=0&&r<100}o(Rr,
"is0To99")});var Zi=B((Pf,Ji)=>{y();Ji.exports=$u;var ju=Object.prototype.hasOwnProperty;function $u(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)ju.call(t,
n)&&(r[n]=t[n])}return r}o($u,"extend")});var ts=B((Nf,es)=>{"use strict";y();var Hu=Zi();es.exports=Ke;function Ke(r){if(!(this instanceof
Ke))return new Ke(r);Hu(this,rc(r))}o(Ke,"PostgresInterval");var Ku=["seconds","\
minutes","hours","days","months","years"];Ke.prototype.toPostgres=function(){var r=Ku.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Wu={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Gu=["years","months","days"],Vu=["hours","minutes","seconds"];Ke.
prototype.toISOString=Ke.prototype.toISO=function(){var r=Gu.map(t,this).join(""),
e=Vu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Wu[n]}};var Mr="([+-]?\\d+)",zu=Mr+"\\s+years?",Yu=Mr+"\\s+mons?",Ju=Mr+"\
\\s+days?",Zu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Xu=new RegExp([
zu,Yu,Ju,Zu].map(function(r){return"("+r+")?"}).join("\\s*")),Xi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},ec=["hours","minutes","sec\
onds","milliseconds"];function tc(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(tc,"parseMilliseconds");function rc(r){if(!r)return{};var e=Xu.exec(
r),t=e[8]==="-";return Object.keys(Xi).reduce(function(n,i){var s=Xi[i],a=e[s];return!a||
(a=i==="milliseconds"?tc(a):parseInt(a,10),!a)||(t&&~ec.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(rc,"parse")});var ns=B((Df,rs)=>{"use strict";y();rs.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var ls=B((Qf,cs)=>{y();var lt=Br(),ht=Pr(),kt=Yi(),ss=ts(),as=ns();function Ot(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Ot,"allowNull");function os(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(os,"parseBool");function nc(r){return r?lt.parse(r,os):null}o(nc,"pars\
eBoolArray");function ic(r){return parseInt(r,10)}o(ic,"parseBaseTenInt");function Nr(r){
return r?lt.parse(r,Ot(ic)):null}o(Nr,"parseIntegerArray");function sc(r){return r?
lt.parse(r,Ot(function(e){return us(e).trim()})):null}o(sc,"parseBigIntegerArray");
var ac=o(function(r){if(!r)return null;var e=ht.create(r,function(t){return t!==
null&&(t=kr(t)),t});return e.parse()},"parsePointArray"),Fr=o(function(r){if(!r)
return null;var e=ht.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),pe=o(function(r){if(!r)return null;var e=ht.
create(r);return e.parse()},"parseStringArray"),qr=o(function(r){if(!r)return null;
var e=ht.create(r,function(t){return t!==null&&(t=kt(t)),t});return e.parse()},"\
parseDateArray"),oc=o(function(r){if(!r)return null;var e=ht.create(r,function(t){
return t!==null&&(t=ss(t)),t});return e.parse()},"parseIntervalArray"),uc=o(function(r){
return r?lt.parse(r,Ot(as)):null},"parseByteAArray"),Dr=o(function(r){return parseInt(
r,10)},"parseInteger"),us=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),is=o(function(r){return r?lt.parse(r,Ot(JSON.parse)):null},
"parseJsonArray"),kr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),cc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=kr(e);return s.radius=parseFloat(t),s},"parseCircle"),lc=o(function(r){r(20,
us),r(21,Dr),r(23,Dr),r(26,Dr),r(700,parseFloat),r(701,parseFloat),r(16,os),r(1082,
kt),r(1114,kt),r(1184,kt),r(600,kr),r(651,pe),r(718,cc),r(1e3,nc),r(1001,uc),r(1005,
Nr),r(1007,Nr),r(1028,Nr),r(1016,sc),r(1017,ac),r(1021,Fr),r(1022,Fr),r(1231,Fr),
r(1014,pe),r(1015,pe),r(1008,pe),r(1009,pe),r(1040,pe),r(1041,pe),r(1115,qr),r(1182,
qr),r(1185,qr),r(1186,ss),r(1187,oc),r(17,as),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,is),r(3807,is),r(3907,pe),r(2951,pe),r(791,pe),r(1183,
pe),r(1270,pe)},"init");cs.exports={init:lc}});var fs=B((Hf,hs)=>{"use strict";y();var ce=1e6;function hc(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>
0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/
ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%ce,a=4294967296*s+t,u=""+a%ce,n+u+i}o(hc,"readInt8");hs.
exports=hc});var ms=B((Gf,ws)=>{y();var fc=fs(),Q=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(g,S,A){
return g*Math.pow(2,A)+S};var s=t>>3,a=o(function(g){return n?~g&255:g},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var p=(e+t)%8;return p>0&&
(l=i(l,a(r[h])>>8-p,p)),l},"parseBits"),ys=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=Q(r,1),s=Q(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var p=1;p<=f;p++)a/=2,(h&1<<f-p)>0&&(l+=a);return l},"parsePrecisionBits"),
c=Q(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),dc=o(function(r){return Q(r,1)==1?-1*
(Q(r,15,1,!0)+1):Q(r,15,1)},"parseInt16"),ds=o(function(r){return Q(r,1)==1?-1*(Q(
r,31,1,!0)+1):Q(r,31,1)},"parseInt32"),pc=o(function(r){return ys(r,23,8)},"pars\
eFloat32"),yc=o(function(r){return ys(r,52,11)},"parseFloat64"),wc=o(function(r){
var e=Q(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,Q(r,16,16)),n=0,i=[],
s=Q(r,16),a=0;a<s;a++)n+=Q(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,Q(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ps=o(function(r,e){var t=Q(
e,1),n=Q(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),ft=o(function(r){for(var e=Q(r,32),t=Q(r,32,32),
n=Q(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=Q(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=Q(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
Q(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],p;if(l.length>1){var g=l.shift();for(p=0;p<g;p++)f[p]=c(l,h);l.unshift(
g)}else for(p=0;p<l[0];p++)f[p]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),mc=o(function(r){return r.toString("utf8")},"parseText"),gc=o(function(r){return r===
null?null:Q(r,8)>0},"parseBool"),Sc=o(function(r){r(20,fc),r(21,dc),r(23,ds),r(26,
ds),r(1700,wc),r(700,pc),r(701,yc),r(16,gc),r(1114,ps.bind(null,!1)),r(1184,ps.bind(
null,!0)),r(1e3,ft),r(1007,ft),r(1016,ft),r(1008,ft),r(1009,ft),r(25,mc)},"init");
ws.exports={init:Sc}});var Ss=B((Yf,gs)=>{y();gs.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var yt=B(pt=>{y();var Ec=ls(),bc=ms(),xc=Pr(),Ac=Ss();pt.getTypeParser=vc;pt.setTypeParser=
Cc;pt.arrayParser=xc;pt.builtins=Ac;var dt={text:{},binary:{}};function Es(r){return String(
r)}o(Es,"noParse");function vc(r,e){return e=e||"text",dt[e]&&dt[e][r]||Es}o(vc,
"getTypeParser");function Cc(r,e,t){typeof e=="function"&&(t=e,e="text"),dt[e][r]=
t}o(Cc,"setTypeParser");Ec.init(function(r,e){dt.text[r]=e});bc.init(function(r,e){
dt.binary[r]=e})});var wt=B((td,Or)=>{"use strict";y();Or.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var We=yt(),_c=We.getTypeParser(
20,"text"),Uc=We.getTypeParser(1016,"text");Or.exports.__defineSetter__("parseIn\
t8",function(r){We.setTypeParser(20,"text",r?We.getTypeParser(23,"text"):_c),We.
setTypeParser(1016,"text",r?We.getTypeParser(1007,"text"):Uc)})});var mt=B((nd,xs)=>{"use strict";y();var Lc=(Tr(),J(Lr)),Tc=wt();function Ic(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Ic,"escapeElement");
function bs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+bs(r[t]):r[t]instanceof w?e+="\\\\x"+r[t].
toString("hex"):e+=Ic(Qt(r[t]));return e=e+"}",e}o(bs,"arrayString");var Qt=o(function(r,e){
if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.isView(r)){var t=w.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Tc.parseInputDatesAsUTC?
Rc(r):Pc(r):Array.isArray(r)?bs(r):typeof r=="object"?Bc(r,e):r.toString()},"pre\
pareValue");function Bc(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),Qt(r.toPostgres(Qt),e)}return JSON.stringify(r)}
o(Bc,"prepareObject");function se(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}o(
se,"pad");function Pc(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=se(t,4)+"-"+se(r.getMonth()+1,2)+"-"+se(r.getDate(),2)+"\
T"+se(r.getHours(),2)+":"+se(r.getMinutes(),2)+":"+se(r.getSeconds(),2)+"."+se(r.
getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=se(Math.floor(e/60),2)+
":"+se(e%60,2),n&&(i+=" BC"),i}o(Pc,"dateToString");function Rc(r){var e=r.getUTCFullYear(),
t=e<1;t&&(e=Math.abs(e)+1);var n=se(e,4)+"-"+se(r.getUTCMonth()+1,2)+"-"+se(r.getUTCDate(),
2)+"T"+se(r.getUTCHours(),2)+":"+se(r.getUTCMinutes(),2)+":"+se(r.getUTCSeconds(),
2)+"."+se(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}o(Rc,"dat\
eToStringUTC");function Mc(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e==
"function"?r.callback=e:r.values=e),t&&(r.callback=t),r}o(Mc,"normalizeQueryConf\
ig");var Qr=o(function(r){return Lc.createHash("md5").update(r,"utf-8").digest("\
hex")},"md5"),Nc=o(function(r,e,t){var n=Qr(e+r),i=Qr(w.concat([w.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");xs.exports={prepareValue:o(function(e){return Qt(
e)},"prepareValueWrapper"),normalizeQueryConfig:Mc,postgresMd5PasswordHash:Nc,md5:Qr}});var Et={};he(Et,{default:()=>Fc});var Fc,bt=ae(()=>{y();Fc={}});var Ls=B((dd,Us)=>{"use strict";y();var $r=(Tr(),J(Lr));function qc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=$r.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(qc,"startSession");function Dc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=Qc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=Hc(e,
i,n.iteration),a=Ge(s,"Client Key"),u=$c(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,p=Ge(u,f),g=_s(
a,p),S=g.toString("base64"),A=Ge(s,"Server Key"),x=Ge(A,f);r.message="SASLRespon\
se",r.serverSignature=x.toString("base64"),r.response=h+",p="+S}o(Dc,"continueSe\
ssion");function kc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=jc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(kc,"finalizeSession");function Oc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(Oc,"isPrintableC\
hars");function vs(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(vs,"isBase64");function Cs(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(Cs,"parseAttributePairs");function Qc(r){let e=Cs(
r),t=e.get("r");if(t){if(!Oc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!vs(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(Qc,"parseServerFirstMe\
ssage");function jc(r){let t=Cs(r).get("v");if(t){if(!vs(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(jc,"parseServerFinalMessage");function _s(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(_s,"xorBuffers");function $c(r){return $r.createHash(
"sha256").update(r).digest()}o($c,"sha256");function Ge(r,e){return $r.createHmac(
"sha256",r).update(e).digest()}o(Ge,"hmacSha256");function Hc(r,e,t){for(var n=Ge(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Ge(r,n),i=_s(i,n);return i}
o(Hc,"Hi");Us.exports={startSession:qc,continueSession:Dc,finalizeSession:kc}});var Hr={};he(Hr,{join:()=>Kc});function Kc(...r){return r.join("/")}var Kr=ae(()=>{
y();o(Kc,"join")});var Wr={};he(Wr,{stat:()=>Wc});function Wc(r,e){e(new Error("No filesystem"))}var Gr=ae(
()=>{y();o(Wc,"stat")});var Vr={};he(Vr,{default:()=>Gc});var Gc,zr=ae(()=>{y();Gc={}});var Ts={};he(Ts,{StringDecoder:()=>Yr});var Yr,Is=ae(()=>{y();Yr=class{static{o(
this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Ms=B((Ad,Rs)=>{"use strict";y();var{Transform:Vc}=(zr(),J(Vr)),{StringDecoder:zc}=(Is(),J(Ts)),
Te=Symbol("last"),jt=Symbol("decoder");function Yc(r,e,t){let n;if(this.overflow){
if(n=this[jt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Te]+=this[jt].write(r),n=this[Te].split(this.matcher);this[Te]=
n.pop();for(let i=0;i<n.length;i++)try{Ps(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Te].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(Yc,"transform");function Jc(r){
if(this[Te]+=this[jt].end(),this[Te])try{Ps(this,this.mapper(this[Te]))}catch(e){
return r(e)}r()}o(Jc,"flush");function Ps(r,e){e!==void 0&&r.push(e)}o(Ps,"push");
function Bs(r){return r}o(Bs,"noop");function Zc(r,e,t){switch(r=r||/\r?\n/,e=e||
Bs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Bs)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Yc,t.flush=Jc,t.readableObjectMode=!0;
let n=new Vc(t);return n[Te]="",n[jt]=new zc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(Zc,"split");Rs.exports=Zc});var qs=B((_d,xe)=>{"use strict";y();var Ns=(Kr(),J(Hr)),Xc=(zr(),J(Vr)).Stream,el=Ms(),
Fs=(bt(),J(Et)),tl=5432,$t=m.platform==="win32",xt=m.stderr,rl=56,nl=7,il=61440,
sl=32768;function al(r){return(r&il)==sl}o(al,"isRegFile");var Ve=["host","port",
"database","user","password"],Jr=Ve.length,ol=Ve[Jr-1];function Zr(){var r=xt instanceof
Xc&&xt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);xt.write(Fs.format.apply(Fs,e))}}o(Zr,"warn");Object.defineProperty(xe.exports,
"isWin",{get:function(){return $t},set:function(r){$t=r}});xe.exports.warnTo=function(r){
var e=xt;return xt=r,e};xe.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||
($t?Ns.join(e.APPDATA||"./","postgresql","pgpass.conf"):Ns.join(e.HOME||"./",".p\
gpass"));return t};xe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(m.env,"PGPASSWORD")?!1:$t?!0:(e=e||"<unkn>",al(r.mode)?r.mode&(rl|nl)?(Zr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(Zr('WARNING: password file "%s" is not a plain file',
e),!1))};var ul=xe.exports.match=function(r,e){return Ve.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||tl)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};xe.exports.getPassword=function(r,e,t){var n,i=e.pipe(el());function s(c){var l=cl(
c);l&&ll(l)&&ul(r,l)&&(n=l[ol],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),Zr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var cl=xe.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(h,f,p){var g=r.substring(f,
p);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(g=g.replace(/\\([:\\])/g,
"$1")),a[Ve[h]]=g},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Jr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=
Object.keys(a).length===Jr?a:null,a},ll=xe.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<Ve.length;t+=
1){var n=e[t],i=r[Ve[t]]||"",s=n(i);if(!s)return!1}return!0}});var ks=B((Id,Xr)=>{"use strict";y();var Td=(Kr(),J(Hr)),Ds=(Gr(),J(Wr)),Ht=qs();
Xr.exports=function(r,e){var t=Ht.getFileName();Ds.stat(t,function(n,i){if(n||!Ht.
usePgPass(i,t))return e(void 0);var s=Ds.createReadStream(t);Ht.getPassword(r,s,
e)})};Xr.exports.warnTo=Ht.warnTo});var en=B((Pd,Os)=>{"use strict";y();var hl=yt();function Kt(r){this._types=r||hl,
this.text={},this.binary={}}o(Kt,"TypeOverrides");Kt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
Kt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};Kt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Os.exports=Kt});var Qs={};he(Qs,{default:()=>fl});var fl,js=ae(()=>{y();fl={}});var Hs=B((Fd,$s)=>{"use strict";y();var dl=(_r(),J(Bi)),tn=(Gr(),J(Wr));function rn(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=dl.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var a=s.split("/");t.host=decodeURIComponent(
a[0]),s=a.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=tn.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=tn.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=tn.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(rn,"parse");$s.exports=rn;rn.parse=rn});var Wt=B((kd,Gs)=>{"use strict";y();var pl=(js(),J(Qs)),Ws=wt(),Ks=Hs().parse,oe=o(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||Ws[r]},"val"),yl=o(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Ws.ssl},"readSSLConfigFromEnvironment"),ze=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),ye=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+ze(n))},"ad\
d"),nn=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Ks(e):e||{},e.connectionString&&(e=Object.assign({},e,Ks(e.connectionString))),
this.user=oe("user",e),this.database=oe("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(oe("port",e),10),this.host=oe("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:oe(
"password",e)}),this.binary=oe("binary",e),this.options=oe("options",e),this.ssl=
typeof e.ssl>"u"?yl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
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
ye(t,this,"user"),ye(t,this,"password"),ye(t,this,"port"),ye(t,this,"application\
_name"),ye(t,this,"fallback_application_name"),ye(t,this,"connect_timeout"),ye(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(ye(t,n,"sslmode"),ye(t,n,"sslca"),ye(t,n,"sslkey"),ye(t,n,"sslcert"),
ye(t,n,"sslrootcert"),this.database&&t.push("dbname="+ze(this.database)),this.replication&&
t.push("replication="+ze(this.replication)),this.host&&t.push("host="+ze(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+ze(this.client_encoding)),pl.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+ze(s)),e(null,t.join(" ")))})}};Gs.exports=nn});var Ys=B((jd,zs)=>{"use strict";y();var wl=yt(),Vs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
sn=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Vs.exec(e.text):t=Vs.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](s):t[a]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=wl.getTypeParser(
n.dataTypeID,n.format||"text")}}};zs.exports=sn});var ea=B((Kd,Xs)=>{"use strict";y();var{EventEmitter:ml}=Ue(),Js=Ys(),Zs=mt(),an=class extends ml{static{
o(this,"Query")}constructor(e,t,n){super(),e=Zs.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),
this._result=new Js(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=
!1,this._canceledDueToError=!1,this._promise=null}requiresPreparation(){return this.
name||this.rows?!0:!this.text||!this.values?!1:this.values.length>0}_checkForMultirow(){
this._result.command&&(Array.isArray(this._results)||(this._results=[this._result]),
this._result=new Js(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
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
binary,valueMapper:Zs.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};Xs.exports=an});var bn=B(I=>{"use strict";y();Object.defineProperty(I,"__esModule",{value:!0});I.
NoticeMessage=I.DataRowMessage=I.CommandCompleteMessage=I.ReadyForQueryMessage=I.
NotificationResponseMessage=I.BackendKeyDataMessage=I.AuthenticationMD5Password=
I.ParameterStatusMessage=I.ParameterDescriptionMessage=I.RowDescriptionMessage=I.
Field=I.CopyResponse=I.CopyDataMessage=I.DatabaseError=I.copyDone=I.emptyQuery=I.
replicationStart=I.portalSuspended=I.noData=I.closeComplete=I.bindComplete=I.parseComplete=
void 0;I.parseComplete={name:"parseComplete",length:5};I.bindComplete={name:"bin\
dComplete",length:5};I.closeComplete={name:"closeComplete",length:5};I.noData={name:"\
noData",length:5};I.portalSuspended={name:"portalSuspended",length:5};I.replicationStart=
{name:"replicationStart",length:4};I.emptyQuery={name:"emptyQuery",length:4};I.copyDone=
{name:"copyDone",length:4};var on=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};I.DatabaseError=on;
var un=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};I.CopyDataMessage=un;var cn=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};I.CopyResponse=cn;var ln=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};I.Field=ln;var hn=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};I.RowDescriptionMessage=
hn;var fn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};I.ParameterDescriptionMessage=fn;var dn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};I.ParameterStatusMessage=dn;
var pn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};I.AuthenticationMD5Password=
pn;var yn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};I.BackendKeyDataMessage=
yn;var wn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};I.NotificationResponseMessage=wn;var mn=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};I.ReadyForQueryMessage=mn;var gn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};I.CommandCompleteMessage=
gn;var Sn=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};I.DataRowMessage=Sn;var En=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};I.NoticeMessage=En});var ta=B(Gt=>{"use strict";y();Object.defineProperty(Gt,"__esModule",{value:!0});
Gt.Writer=void 0;var xn=class{static{o(this,"Writer")}constructor(e=256){this.size=
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
size),t}};Gt.Writer=xn});var na=B(zt=>{"use strict";y();Object.defineProperty(zt,"__esModule",{value:!0});
zt.serialize=void 0;var An=ta(),j=new An.Writer,gl=o(r=>{j.addInt16(3).addInt16(
0);for(let n of Object.keys(r))j.addCString(n).addCString(r[n]);j.addCString("cl\
ient_encoding").addCString("UTF8");var e=j.addCString("").flush(),t=e.length+4;return new An.
Writer().addInt32(t).add(e).flush()},"startup"),Sl=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),El=o(r=>j.
addCString(r).flush(112),"password"),bl=o(function(r,e){return j.addCString(r).addInt32(
w.byteLength(e)).addString(e),j.flush(112)},"sendSASLInitialResponseMessage"),xl=o(
function(r){return j.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Al=o(
r=>j.addCString(r).flush(81),"query"),ra=[],vl=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ra;for(var n=t.length,
i=j.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return j.
flush(80)},"parse"),Ye=new An.Writer,Cl=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(j.addInt16(0),Ye.addInt32(-1)):n instanceof w?(j.
addInt16(1),Ye.addInt32(n.length),Ye.add(n)):(j.addInt16(0),Ye.addInt32(w.byteLength(
n)),Ye.addString(n))}},"writeValues"),_l=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ra,s=i.length;return j.addCString(e).addCString(t),
j.addInt16(s),Cl(i,r.valueMapper),j.addInt16(s),j.add(Ye.flush()),j.addInt16(n?1:
0),j.flush(66)},"bind"),Ul=w.from([69,0,0,0,9,0,0,0,0,0]),Ll=o(r=>{if(!r||!r.portal&&
!r.rows)return Ul;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Tl=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),vn=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Il=j.addCString("P").flush(68),Bl=j.addCString("S").flush(68),
Pl=o(r=>r.name?vn(68,`${r.type}${r.name||""}`):r.type==="P"?Il:Bl,"describe"),Rl=o(
r=>{let e=`${r.type}${r.name||""}`;return vn(67,e)},"close"),Ml=o(r=>j.add(r).flush(
100),"copyData"),Nl=o(r=>vn(102,r),"copyFail"),Vt=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Fl=Vt(72),ql=Vt(83),Dl=Vt(88),kl=Vt(99),Ol={startup:gl,password:El,
requestSsl:Sl,sendSASLInitialResponseMessage:bl,sendSCRAMClientFinalMessage:xl,query:Al,
parse:vl,bind:_l,execute:Ll,describe:Pl,close:Rl,flush:()=>Fl,sync:()=>ql,end:()=>Dl,
copyData:Ml,copyDone:()=>kl,copyFail:Nl,cancel:Tl};zt.serialize=Ol});var ia=B(Yt=>{"use strict";y();Object.defineProperty(Yt,"__esModule",{value:!0});
Yt.BufferReader=void 0;var Ql=w.allocUnsafe(0),Cn=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=Ql,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};Yt.BufferReader=Cn});var sa={};he(sa,{default:()=>jl});var jl,aa=ae(()=>{y();jl={}});var ca=B(Je=>{"use strict";y();var $l=Je&&Je.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Je,"__esModule",{value:!0});Je.
Parser=void 0;var W=bn(),Hl=ia(),Kl=$l((aa(),J(sa))),_n=1,Wl=4,oa=_n+Wl,ua=w.allocUnsafe(
0),Un=class{static{o(this,"Parser")}constructor(e){if(this.buffer=ua,this.bufferLength=
0,this.bufferOffset=0,this.reader=new Hl.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(
e);let n=this.bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+oa<=n;){
let s=this.buffer[i],a=this.buffer.readUInt32BE(i+_n),u=_n+a;if(u+i<=n){let c=this.
handlePacket(i+oa,s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=ua,this.
bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
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
return this.parseCopyData(e,n,i);default:Kl.default.fail(`unknown message code: ${t.
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
line=s.L,c.routine=s.R,c}};Je.Parser=Un});var Ln=B(Ie=>{"use strict";y();Object.defineProperty(Ie,"__esModule",{value:!0});
Ie.DatabaseError=Ie.serialize=Ie.parse=void 0;var Gl=bn();Object.defineProperty(
Ie,"DatabaseError",{enumerable:!0,get:function(){return Gl.DatabaseError}});var Vl=na();
Object.defineProperty(Ie,"serialize",{enumerable:!0,get:function(){return Vl.serialize}});
var zl=ca();function Yl(r,e){let t=new zl.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(Yl,"parse");Ie.parse=Yl});var la={};he(la,{connect:()=>Jl});function Jl({socket:r,servername:e}){return r.
startTls(e),r}var ha=ae(()=>{y();o(Jl,"connect")});var In=B((yp,pa)=>{"use strict";y();var fa=(Dt(),J($i)),Zl=Ue().EventEmitter,{parse:Xl,
serialize:ee}=Ln(),da=ee.flush(),eh=ee.sync(),th=ee.end(),Tn=class extends Zl{static{
o(this,"Connection")}constructor(e){super(),e=e||{},this.stream=e.stream||new fa.
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
 establishing an SSL connection"))}var u=(ha(),J(la));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),fa.isIP(t)===
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
this.stream.writable&&this.stream.write(da)}sync(){this._ending=!0,this._send(da),
this._send(eh)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this.
_ending=!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(th,()=>{this.stream.end()})}close(e){this._send(ee.close(e))}describe(e){
this._send(ee.describe(e))}sendCopyFromChunk(e){this._send(ee.copyData(e))}endCopyFrom(){
this._send(ee.copyDone())}sendCopyFail(e){this._send(ee.copyFail(e))}};pa.exports=
Tn});var ma=B((Sp,wa)=>{"use strict";y();var rh=Ue().EventEmitter,gp=(bt(),J(Et)),nh=mt(),
Bn=Ls(),ih=ks(),sh=en(),ah=Wt(),ya=ea(),oh=wt(),uh=In(),Jt=class extends rh{static{
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
this.saslSession=Bn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
Bn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){Bn.finalizeSession(this.saslSession,
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
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new ya(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,p)=>f?h(f):l(p)}))),
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
_Promise(t=>{this.connection.once("end",t)})}};Jt.Query=ya;wa.exports=Jt});var ba=B((xp,Ea)=>{"use strict";y();var ch=Ue().EventEmitter,ga=o(function(){},"\
NOOP"),Sa=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Pn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},Ze=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function lh(){throw new Error("Release called on client which \
has already been released to the pool.")}o(lh,"throwOnDoubleRelease");function Zt(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(Zt,"promisify");function hh(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(hh,"makeIdleListener");var Rn=class extends ch{static{o(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||Xt().Client,this.Promise=this.options.Promise||v.
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
d condition")}_remove(e){let t=Sa(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=Zt(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new Ze(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(a),t.callback(u,c,l)},
"queueCallback"),s=new Ze(i),a=setTimeout(()=>{Sa(this._pendingQueue,u=>u.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new Ze(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=hh(this,t);this.log("checking client timeout");let i,
s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{this.log("ending c\
lient due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},
this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(
a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to connect",
a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connection termin\
ated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(a,void 0,
ga);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==0){
let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.
add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new Ze(
(l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",
()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,ga);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&lh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Pn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Zt(this.Promise,e);
return _(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=Zt(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Zt(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};Ea.exports=Rn});var xa={};he(xa,{default:()=>fh});var fh,Aa=ae(()=>{y();fh={}});var va=B((_p,dh)=>{dh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var Ua=B((Up,_a)=>{"use strict";y();var Ca=Ue().EventEmitter,ph=(bt(),J(Et)),Mn=mt(),
Xe=_a.exports=function(r,e,t){Ca.call(this),r=Mn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};ph.inherits(
Xe,Ca);var yh={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Xe.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=yh[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Xe.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Xe.prototype.catch=function(r){return this._getPromise().
catch(r)};Xe.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Xe.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,_(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(Mn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(Mn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Ba=B((Bp,Ia)=>{"use strict";y();var wh=(Aa(),J(xa)),mh=en(),Ip=va(),La=Ue().
EventEmitter,gh=(bt(),J(Et)),Sh=Wt(),Ta=Ua(),le=Ia.exports=function(r){La.call(this),
r=r||{},this._Promise=r.Promise||v.Promise,this._types=new mh(r.types),this.native=
new wh({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Sh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};le.Query=Ta;gh.inherits(le,La);le.prototype._errorAllQueries=
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
query_timeout,n=new Ta(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
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
_types.getTypeParser(r,e)}});var Nn=B((Mp,Pa)=>{"use strict";y();Pa.exports=Ba()});var Xt=B((qp,At)=>{"use strict";y();var Eh=ma(),bh=wt(),xh=In(),Ah=ba(),{DatabaseError:vh}=Ln(),
Ch=o(r=>class extends Ah{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),Fn=o(function(r){this.defaults=bh,this.Client=r,this.Query=this.Client.
Query,this.Pool=Ch(this.Client),this._pools=[],this.Connection=xh,this.types=yt(),
this.DatabaseError=vh},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?At.exports=new Fn(
Nn()):(At.exports=new Fn(Eh),Object.defineProperty(At.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Fn(Nn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(At.exports,"native",{value:r}),r}}))});y();var Ar={};he(Ar,{SocketReadQueue:()=>Zo,TrustedCert:()=>mi,WebSocketReadQueue:()=>Jo,
startTls:()=>Yo});y();function ne(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(ne,"p");function at(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(at,"O");var mr="\xB7\xB7 ",
ci=new TextEncoder,Lo=new TextDecoder,Se=class{static{o(this,"N")}offset;dataView;data;comments;indents;indent;constructor(r){
this.offset=0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(
this.data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.
indents={},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;
this.data=ne(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.
byteOffset,this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(r){
return this.data.subarray(this.offset,this.offset+=r)}skip(r,e){return this.offset+=
r,e&&this.comment(e),this}comment(r,e=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}readBytes(r){return this.data.slice(this.
offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);return Lo.decode(
e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==0;)r++;let e=this.
readUTF8String(r-this.offset);return this.expectUint8(0,"end of string"),e}readUint8(r){
let e=this.dataView.getUint8(this.offset);return this.offset+=1,e}readUint16(r){
let e=this.dataView.getUint16(this.offset);return this.offset+=2,e}readUint24(r){
let e=this.readUint8(),t=this.readUint16();return(e<<16)+t}readUint32(r){let e=this.
dataView.getUint32(this.offset);return this.offset+=4,e}expectBytes(r,e){let t=this.
readBytes(r.length);if(!at(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
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
let e=ci.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=ci.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
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
writeLengthUint24();i.writeUint16(771,0),b.getRandomValues(i.subarray(32));let u=i.
writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);i.writeUint16(
4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.writeLengthUint16(
0);if(n){i.writeUint16(0,0);let M=i.writeLengthUint16(0),D=i.writeLengthUint16(0);
i.writeUint8(0,0);let N=i.writeLengthUint16(0);i.writeUTF8String(r),N(),D(),M()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),p=i.writeLengthUint8(0);i.writeUint8(
0,0),p(),f(),i.writeUint16(10,0);let g=i.writeLengthUint16(0),S=i.writeLengthUint16(
0);i.writeUint16(23,0),S(),g(),i.writeUint16(13,0);let A=i.writeLengthUint16(0),
x=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),x(),A(),i.writeUint16(
43,0);let T=i.writeLengthUint16(0),C=i.writeLengthUint8(0);i.writeUint16(772,0),
C(),T(),i.writeUint16(51,0);let E=i.writeLengthUint16(0),L=i.writeLengthUint16(0);
i.writeUint16(23,0);let R=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),R(),L(),E(),h(),a(),s(),i}o(To,"St");function Ce(r,e=""){return[...r].map(t=>t.
toString(16).padStart(2,"0")).join(e)}o(Ce,"K");function Io(r,e){let t,n,[i]=r.expectLength(
r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(
771,0);let a=r.readBytes(32);if(at(a,[207,33,173,116,229,154,97,17,190,29,140,2,
30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error(
"Unexpected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Ce([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
o(Io,"Ut");var kh=new RegExp(`  .+|^(${mr})+`,"gm"),st=16384,Bo=st+1+255;async function gr(r,e,t=st){
let n=await r(5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record \
header truncated");let i=new Se(n),s=i.readUint8();if(s<20||s>24)throw new Error(
`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(
`Unexpected TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.
toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (mid\
dlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(`Record too\
 long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("\
TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
o(gr,"ht");async function Sr(r,e,t){let n=await gr(r,23,Bo);if(n===void 0)return;
let i=new Se(n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),
i.skip(16,0),s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===
0;)u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (\
all zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&
l[1]===0)){if(c===22&&l[0]===4)return Sr(r,e,t);if(t!==void 0&&c!==t)throw new Error(
`Unexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.
toString(16).padStart(2,"0")})`);return l}}o(Sr,"dt");async function Po(r,e,t){let n=ne(
r,[t]),i=5,s=n.length+16,a=new Se(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.
writeUint16(s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.
process(n,16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(
l.length-16)),u(),a.array()}o(Po,"ee");async function li(r,e,t){let n=Math.ceil(
r.length/st),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*st,(s+1)*st),u=await Po(
a,e,t);i.push(u)}return i}o(li,"At");var F=b.subtle,yi=new TextEncoder;async function Er(r,e,t){
let n=await F.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await F.sign("HMAC",n,e));return i}o(Er,"lt");async function Ro(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await F.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=ne(c,e,[l+1]),f=await F.sign("HMAC",u,h),p=new Uint8Array(f);a.set(p,i*l),
c=p}return a.subarray(0,t)}o(Ro,"ne");var hi=yi.encode("tls13 ");async function ie(r,e,t,n,i){
let s=yi.encode(e),a=ne([(n&65280)>>8,n&255],[hi.length+s.length],hi,s,[t.length],
t);return Ro(r,a,n,i)}o(ie,"S");async function Mo(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await F.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await F.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await F.digest("S\
HA-256",t),f=new Uint8Array(h),p=await Er(new Uint8Array(1),a,n),g=await F.digest(
`SHA-${n}`,new Uint8Array(0)),S=new Uint8Array(g),A=await ie(p,"derived",S,s,n),
x=await Er(A,l,n),T=await ie(x,"c hs traffic",f,s,n),C=await ie(x,"s hs traffic",
f,s,n),E=await ie(T,"key",new Uint8Array(0),i,n),L=await ie(C,"key",new Uint8Array(
0),i,n),R=await ie(T,"iv",new Uint8Array(0),12,n),M=await ie(C,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:L,serverHandshakeIV:M,clientHandshakeKey:E,clientHandshakeIV:R,
handshakeSecret:x,clientSecret:T,serverSecret:C}}o(Mo,"Kt");async function No(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await F.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ie(r,"derived",u,i,t),l=await Er(c,s,t),h=await ie(l,"c ap traffic",e,
i,t),f=await ie(l,"s ap traffic",e,i,t),p=await ie(h,"key",new Uint8Array(0),n,t),
g=await ie(f,"key",new Uint8Array(0),n,t),S=await ie(h,"iv",new Uint8Array(0),12,
t),A=await ie(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:g,serverApplicationIV:A,
clientApplicationKey:p,clientApplicationIV:S}}o(No,"Tt");var Bt=class{static{o(this,
"Z")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t}recordsProcessed=0n;priorPromise=Promise.
resolve(new Uint8Array);async process(r,e,t){let n=this.processUnsequenced(r,e,t);
return this.priorPromise=this.priorPromise.then(()=>n)}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){let f=n>>(h<<3n);if(f===0n)break;
i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"AES-GCM",iv:i,tagLength:u,additionalData:t},
l=await F[this.mode](c,this.key,r);return new Uint8Array(l)}};function Pt(r){return r>
64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?64:void 0}
o(Pt,"yt");function Fo(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,u=64,c=new Uint8Array(
e*.75);for(;t<e;)i=Pt(r.charCodeAt(t++)),s=Pt(r.charCodeAt(t++)),a=Pt(r.charCodeAt(
t++)),u=Pt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&15)<<4|a>>2,c[n++]=(a&3)<<
6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(0,n-l)}o(Fo,"Dt");var Rt=class extends Se{static{
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
1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>t}return r(),i}};function fi(r,e=(n,i)=>i,t){
return JSON.stringify(r,(n,i)=>e(n,typeof i!="object"||i===null||Array.isArray(i)?
i:Object.fromEntries(Object.entries(i).sort(([s],[a])=>s<a?-1:s>a?1:0))),t)}o(fi,
"mt");var pr=1,Mt=2,re=48,qo=49,je=6,Do=19,ko=12,di=23,yr=5,Me=4,wr=3,Oo=163,Qe=128,
Qo={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2\
.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.8\
40.113549.1.9.1":"E-mail"};function jo(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o(jo,"qt");function pi(r,e){let t={};
r.expectUint8(re,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(qo,
0);let[s]=r.expectASN1Length(0);r.expectUint8(re,0);let[a]=r.expectASN1Length(0);
r.expectUint8(je,0);let u=r.readASN1OID(),c=Qo[u]??u,l=r.readUint8();if(l!==Do&&
l!==ko)throw new Error(`Unexpected item type in certificate ${e}: 0x${Ce([l])}`);
let[h,f]=r.expectASN1Length(0),p=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)
throw new Error(`Duplicate OID ${c} in certificate ${e}`);t[c]=p}return n(),t}o(
pi,"Ct");function $o(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.
readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.
readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o($o,"Bt");function Ho(r){
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
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(Ho,"Ft");function wi(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=wi(t,e)}),e}
o(wi,"Ot");function Ko(r){return wi(r).join(" / ")}o(Ko,"Pt");var Wo=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],xr=class br{static{o(this,"\
r")}serialNumber;algorithm;issuer;validityPeriod;subject;publicKey;signature;keyUsage;subjectAltNames;extKeyUsage;authorityKeyIdentifier;subjectKeyIdentifier;basicConstraints;signedData;static distinguishedNamesAreEqual(e,t){
return fi(e)===fi(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}constructor(e){let t=e instanceof Rt?e:new Rt(e);t.expectUint8(
re,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(re,0);let[s]=t.expectASN1Length(
0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(Mt,0);let[a,u]=t.expectASN1Length(
0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(re,0);let[c,l]=t.expectASN1Length(
0);t.expectUint8(je,0),this.algorithm=t.readASN1OID(),l()>0&&(t.expectUint8(yr,0),
t.expectUint8(0,0)),c(),this.issuer=pi(t,"issuer"),t.expectUint8(re,0);let[h]=t.
expectASN1Length(0);t.expectUint8(di,0);let f=t.readASN1UTCTime();t.expectUint8(
di,0);let p=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:p},h(),
this.subject=pi(t,"subject");let g=t.offset;t.expectUint8(re,0);let[S]=t.expectASN1Length(
0);t.expectUint8(re,0);let[A,x]=t.expectASN1Length(0),T=[];for(;x()>0;){let z=t.
readUint8();if(z===je){let P=t.readASN1OID();T.push(P)}else z===yr&&t.expectUint8(
0,0)}A(),t.expectUint8(wr,0);let C=t.readASN1BitString();this.publicKey={identifiers:T,
data:C,all:t.data.subarray(g,t.offset)},S(),t.expectUint8(Oo,0);let[E]=t.expectASN1Length();
t.expectUint8(re,0);let[L,R]=t.expectASN1Length(0);for(;R()>0;){t.expectUint8(re,
0);let[z,P]=t.expectASN1Length();t.expectUint8(je,0);let $=t.readASN1OID();if($===
"2.5.29.17"){t.expectUint8(Me,0);let[H]=t.expectASN1Length(0);t.expectUint8(re,0);
let K=$o(t,Qe);this.subjectAltNames=K.filter(G=>G.type===(2|Qe)).map(G=>G.name),
H()}else if($==="2.5.29.15"){t.expectUint8(pr,0);let H=t.readASN1Boolean();t.expectUint8(
Me,0);let[K]=t.expectASN1Length(0);t.expectUint8(wr,0);let G=t.readASN1BitString(),
Y=jo(G),k=new Set(Wo.filter((V,Z)=>Y&1<<Z));K(),this.keyUsage={critical:H,usages:k}}else if($===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(Me,0);let[H]=t.expectASN1Length(0);
t.expectUint8(re,0);let[K,G]=t.expectASN1Length(0);for(;G()>0;){t.expectUint8(je,
0);let Y=t.readASN1OID();Y==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
Y==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}K(),H()}else if($==="2.\
5.29.35"){t.expectUint8(Me,0);let[H]=t.expectASN1Length(0);t.expectUint8(re,0);let[
K,G]=t.expectASN1Length(0);for(;G()>0;){let Y=t.readUint8();if(Y===(Qe|0)){let[k,
V]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(V()),k()}else if(Y===
(Qe|1)){let[k,V]=t.expectASN1Length(0);t.skip(V(),0),k()}else if(Y===(Qe|2)){let[
k,V]=t.expectASN1Length(0);t.skip(V(),0),k()}else if(Y===(Qe|33)){let[k,V]=t.expectASN1Length(
0);t.skip(V(),0),k()}else throw new Error(`Unexpected data type ${Y} in authorit\
yKeyIdentifier certificate extension`)}K(),H()}else if($==="2.5.29.14"){t.expectUint8(
Me,0);let[H]=t.expectASN1Length(0);t.expectUint8(Me,0);let[K,G]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(G()),K(),H()}else if($==="2.5.29.19"){let H,
K=t.readUint8();if(K===pr&&(H=t.readASN1Boolean(),K=t.readUint8()),K!==Me)throw new Error(
"Unexpected type in certificate basic constraints");let[G]=t.expectASN1Length(0);
t.expectUint8(re,0);let[Y,k]=t.expectASN1Length(),V;k()>0&&(t.expectUint8(pr,0),
V=t.readASN1Boolean());let Z;if(k()>0){t.expectUint8(Mt,0);let O=t.readASN1Length(
0);if(Z=O===1?t.readUint8():O===2?t.readUint16():O===3?t.readUint24():void 0,Z===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}Y(),G(),this.basicConstraints={critical:H,ca:V,pathLength:Z}}else t.
skip(P(),0);z()}L(),E(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
re,0);let[M,D]=t.expectASN1Length(0);t.expectUint8(je,0);let N=t.readASN1OID();if(D()>
0&&(t.expectUint8(yr,0),t.expectUint8(0,0)),M(),N!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${N})`);t.expectUint8(wr,0),this.signature=t.readASN1BitString(),n()}static fromPEM(e){
let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END\
 ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){let a=s[1].replace(/[\r\n]/g,""),
u=Fo(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;
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
...this.signedData]}}},mi=class extends xr{static{o(this,"st")}};async function gi(r,e,t,n,i){
r.expectUint8(re,0);let[s]=r.expectASN1Length(0);r.expectUint8(Mt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Mt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let p=o((x,T)=>x.length>T?x.subarray(x.length-T):x.
length<T?ne(new Uint8Array(T-x.length),x):x,"m"),g=n==="P-256"?32:48,S=ne(p(c,g),
p(f,g)),A=await F.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await F.verify({name:"ECDSA",hash:i},A,S,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}o(gi,"pt");async function Go(r,e,t,n=!0,i=!0){
for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=t.find(
S=>xr.distinguishedNamesAreEqual(S.subject,l.issuer)):f=t.find(S=>S.subjectKeyIdentifier!==
void 0&&at(S.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let p=f instanceof mi;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:g}=f.basicConstraints;if(g!==void 0&&g<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let S=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",A=f.publicKey.identifiers,x=A.includes("1.2.840.10045.3.1.7")?"P-256":A.includes(
"1.3.132.0.34")?"P-384":void 0;if(x===void 0)throw new Error("Unsupported signin\
g key curve");let T=new Rt(l.signature);await gi(T,f.publicKey.all,l.signedData,
x,S)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let S=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",A=await F.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:S},!1,["verify"]);
if(await F.verify({name:"RSASSA-PKCS1-v1_5"},A,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(p){a=!0;break}}return a}o(Go,"jt");var Vo=new TextEncoder;
async function zo(r,e,t,n,i,s=!0,a=!0){let u=new Rt(await e());u.expectUint8(8,0);
let[c]=u.expectLengthUint24(),[l,h]=u.expectLengthUint16(0);for(;h()>0;){let O=u.
readUint16(0);if(O===0)u.expectUint16(0,0);else if(O===10){let[we,Ee]=u.expectLengthUint16(
"groups data");u.skip(Ee(),0),we()}else throw new Error(`Unsupported server encr\
ypted extension type 0x${Ce([O]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.
extend(await e());let f=!1,p=u.readUint8();if(p===13){f=!0;let[O]=u.expectLengthUint24(
"certificate request data");u.expectUint8(0,0);let[we,Ee]=u.expectLengthUint16("\
certificate request extensions");u.skip(Ee(),0),we(),O(),u.remaining()===0&&u.extend(
await e()),p=u.readUint8()}if(p!==11)throw new Error(`Unexpected handshake messa\
ge type 0x${Ce([p])}`);let[g]=u.expectLengthUint24(0);u.expectUint8(0,0);let[S,A]=u.
expectLengthUint24(0),x=[];for(;A()>0;){let[O]=u.expectLengthUint24(0),we=new xr(
u);x.push(we),O();let[Ee,Fe]=u.expectLengthUint16(),qn=u.subarray(Fe());Ee()}if(S(),
g(),x.length===0)throw new Error("No certificates supplied");let T=x[0],C=u.data.
subarray(0,u.offset),E=ne(n,C),L=await F.digest("SHA-256",E),R=new Uint8Array(L),
M=ne(Vo.encode(" ".repeat(64)+"TLS 1.3, server CertificateVerify"),[0],R);u.remaining()===
0&&u.extend(await e()),u.expectUint8(15,0);let[D]=u.expectLengthUint24(0),N=u.readUint16();
if(N===1027){let[O]=u.expectLengthUint16();await gi(u,T.publicKey.all,M,"P-256",
"SHA-256"),O()}else if(N===2052){let[O,we]=u.expectLengthUint16(),Ee=u.subarray(
we());O();let Fe=await F.importKey("spki",T.publicKey.all,{name:"RSA-PSS",hash:"\
SHA-256"},!1,["verify"]);if(await F.verify({name:"RSA-PSS",saltLength:32},Fe,Ee,
M)!==!0)throw new Error("RSA-PSS-RSAE-SHA256 certificate verify failed")}else throw new Error(
`Unsupported certificate verify signature type 0x${Ce([N]).padStart(4,"0")}`);D();
let z=u.data.subarray(0,u.offset),P=ne(n,z),$=await ie(t,"finished",new Uint8Array(
0),32,256),H=await F.digest("SHA-256",P),K=await F.importKey("raw",$,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]),G=await F.sign("HMAC",K,H),Y=new Uint8Array(
G);u.remaining()===0&&u.extend(await e()),u.expectUint8(20,0);let[k,V]=u.expectLengthUint24(
0),Z=u.readBytes(V());if(k(),u.remaining()!==0)throw new Error("Unexpected extra\
 bytes in server handshake");if(at(Z,Y)!==!0)throw new Error("Invalid server ver\
ify hash");if(!await Go(r,x,i,s,a))throw new Error("Validated certificate chain \
did not end in a trusted root");return[u.data,f]}o(zo,"Vt");async function Yo(r,e,t,n,{
useSNI:i,requireServerTlsExtKeyUsage:s,requireDigitalSigKeyUsage:a,writePreData:u,
expectPreData:c,commentPreData:l}={}){i??=!0,s??=!0,a??=!0;let h=await F.generateKey(
{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),f=await F.exportKey(
"raw",h.publicKey),p=new Uint8Array(32);b.getRandomValues(p);let g=To(r,f,p,i).array(),
S=u?ne(u,g):g;if(n(S),c){let te=await t(c.length);if(!te||!at(te,c))throw new Error(
"Pre data did not match expectation")}let A=await gr(t,22);if(A===void 0)throw new Error(
"Connection closed while awaiting server hello");let x=new Se(A.content),T=Io(x,
p),C=await gr(t,20);if(C===void 0)throw new Error("Connection closed awaiting se\
rver cipher change");let E=new Se(C.content),[L]=E.expectLength(1);E.expectUint8(
1,0),L();let R=g.subarray(5),M=A.content,D=ne(R,M),N=await Mo(T,h.privateKey,D,256,
16),z=await F.importKey("raw",N.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),
P=new Bt("decrypt",z,N.serverHandshakeIV),$=await F.importKey("raw",N.clientHandshakeKey,
{name:"AES-GCM"},!1,["encrypt"]),H=new Bt("encrypt",$,N.clientHandshakeIV),K=o(async()=>{
let te=await Sr(t,P,22);if(te===void 0)throw new Error("Premature end of encrypt\
ed server handshake");return te},"C"),[G,Y]=await zo(r,K,N.serverSecret,D,e,s,a),
k=new Se(6);k.writeUint8(20,0),k.writeUint16(771,0);let V=k.writeLengthUint16();
k.writeUint8(1,0),V();let Z=k.array(),O=new Uint8Array(0);if(Y){let te=new Se(8);
te.writeUint8(11,0);let tt=te.writeLengthUint24("client certificate data");te.writeUint8(
0,0),te.writeUint24(0,0),tt(),O=te.array()}let we=ne(D,G,O),Ee=await F.digest("S\
HA-256",we),Fe=new Uint8Array(Ee),qn=await ie(N.clientSecret,"finished",new Uint8Array(
0),32,256),Ma=await F.importKey("raw",qn,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),Na=await F.sign("HMAC",Ma,Fe),Fa=new Uint8Array(Na),Ct=new Se(36);Ct.writeUint8(
20,0);let qa=Ct.writeLengthUint24(0);Ct.writeBytes(Fa),qa();let Da=Ct.array(),Dn=await li(
ne(O,Da),H,22),kn=Fe;if(O.length>0){let te=we.subarray(0,we.length-O.length),tt=await F.
digest("SHA-256",te);kn=new Uint8Array(tt)}let _t=await No(N.handshakeSecret,kn,
256,16),ka=await F.importKey("raw",_t.clientApplicationKey,{name:"AES-GCM"},!0,[
"encrypt"]),Oa=new Bt("encrypt",ka,_t.clientApplicationIV),Qa=await F.importKey(
"raw",_t.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),ja=new Bt("decryp\
t",Qa,_t.serverApplicationIV),Ut=!1;return[()=>{if(!Ut){let te=ne(Z,...Dn);n(te),
Ut=!0}return Sr(t,ja)},async te=>{let tt=Ut;Ut=!0;let On=await li(te,Oa,23),$a=tt?
ne(...On):ne(Z,...Dn,...On);n($a)}]}o(Yo,"he");var Si=class{static{o(this,"xt")}queue;outstandingRequest;constructor(){
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
{resolve:e,bytes:r},this.dequeue()})}},Jo=class extends Si{static{o(this,"vt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}},Zo=class extends Si{static{o(this,
"Lt")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(new Uint8Array(
e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,{readyState:e}=r;
return e==="opening"||e==="open"}};var Ei=`-----BEGIN CERTIFICATE-----
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
hasOwnProperty;function bi(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(bi,"combineComparators");function Nt(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Nt,"createIsCircular");
function xi(r){return eu(r).concat(tu(r))}o(xi,"getStrictProperties");var Ti=Object.
hasOwn||function(r,e){return ru.call(r,e)};function $e(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o($e,"sameValueZeroEqual");var Ii="_owner",Ai=Object.getOwnPropertyDescriptor,
vi=Object.keys;function nu(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(nu,"areArraysEqual");function iu(r,e){
return $e(r.getTime(),e.getTime())}o(iu,"areDatesEqual");function Ci(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,p=f[0],g=f[1],
S=u.value,A=S[0],x=S[1];!l&&!n[h]&&(l=t.equals(p,A,s,h,r,e,t)&&t.equals(g,x,p,A,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(Ci,"areMapsEqual");function su(r,e,t){
var n=vi(r),i=n.length;if(vi(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===Ii&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Ti(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(su,"areObjectsEqual");function ot(r,e,t){var n=xi(
r),i=n.length;if(xi(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===Ii&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Ti(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=Ai(r,s),u=Ai(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(ot,"a\
reObjectsEqualStrict");function au(r,e){return $e(r.valueOf(),e.valueOf())}o(au,
"arePrimitiveWrappersEqual");function ou(r,e){return r.source===e.source&&r.flags===
e.flags}o(ou,"areRegExpsEqual");function _i(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(_i,"areSetsEqual");function uu(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(uu,"are\
TypedArraysEqual");var cu="[object Arguments]",lu="[object Boolean]",hu="[object\
 Date]",fu="[object Map]",du="[object Number]",pu="[object Object]",yu="[object \
RegExp]",wu="[object Set]",mu="[object String]",gu=Array.isArray,Ui=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Li=Object.assign,Su=Object.
prototype.toString.call.bind(Object.prototype.toString);function Eu(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,p){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var g=h.constructor;if(g!==f.constructor)return!1;if(g===Object)return i(
h,f,p);if(gu(h))return e(h,f,p);if(Ui!=null&&Ui(h))return c(h,f,p);if(g===Date)return t(
h,f,p);if(g===RegExp)return a(h,f,p);if(g===Map)return n(h,f,p);if(g===Set)return u(
h,f,p);var S=Su(h);return S===hu?t(h,f,p):S===yu?a(h,f,p):S===fu?n(h,f,p):S===wu?
u(h,f,p):S===pu?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,p):S===
cu?i(h,f,p):S===lu||S===du||S===mu?s(h,f,p):!1},"comparator")}o(Eu,"createEquali\
tyComparator");function bu(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?ot:nu,areDatesEqual:iu,areMapsEqual:n?bi(Ci,ot):Ci,areObjectsEqual:n?
ot:su,arePrimitiveWrappersEqual:au,areRegExpsEqual:ou,areSetsEqual:n?bi(_i,ot):_i,
areTypedArraysEqual:n?ot:uu};if(t&&(i=Li({},i,t(i))),e){var s=Nt(i.areArraysEqual),
a=Nt(i.areMapsEqual),u=Nt(i.areObjectsEqual),c=Nt(i.areSetsEqual);i=Li({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(bu,"createEqualityC\
omparatorConfig");function xu(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(xu,"createInternalEqualityComparator");function Au(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,p=f===void 0?e?new WeakMap:void 0:f,g=h.meta;return t(c,l,{cache:p,equals:i,
meta:g,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(Au,"createIsEqual");
var vr=_e(),Yh=_e({strict:!0}),Jh=_e({circular:!0}),Zh=_e({circular:!0,strict:!0}),
Xh=_e({createInternalComparator:function(){return $e}}),ef=_e({strict:!0,createInternalComparator:function(){
return $e}}),tf=_e({circular:!0,createInternalComparator:function(){return $e}}),
rf=_e({circular:!0,createInternalComparator:function(){return $e},strict:!0});function _e(r){
r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,
i=r.createState,s=r.strict,a=s===void 0?!1:s,u=bu(r),c=Eu(u),l=n?n(c):xu(c);return Au(
{circular:t,comparator:c,createState:i,equals:l,strict:a})}o(_e,"createCustomEqu\
al");y();y();_r();Dt();var As=nt(mt());var gt=class extends Error{static{o(this,"NeonDbError")}name="NeonDbError";code=null;sourceError};
function St(r,{arrayMode:e,fullResults:t,fetchOptions:n,queryCallback:i,resultCallback:s}={}){
let a=Cr(r),{protocol:u,username:c,password:l,hostname:h,pathname:f}=a;if(u!=="p\
ostgres:"&&u!=="postgresql:"||!h||!c||!l||!f)throw new Error("Database connectio\
n string format should be: postgresql://user:password@host.tld/dbname?option=val\
ue");return h==="localhost"&&console.warn(jr),async function(p,...g){let S=e??!1,
A=t??!1,x=n??{},T;if(typeof p=="string"){T=p;let L=g[1];L!==void 0&&(L.arrayMode!==
void 0&&(S=L.arrayMode),L.fullResults!==void 0&&(A=L.fullResults),L.fetchOptions!==
void 0&&(x={...x,...L.fetchOptions})),g=g[0]??[]}else{T="";for(let L=0;L<p.length;L++)
T+=p[L],L<g.length&&(T+="$"+(L+1))}g=g.map(L=>(0,As.prepareValue)(L));let C,E;try{
let L=`https://${h}/sql`,R=de.fetchConnectionCache===!0?{"Neon-Pool-Opt-In":"tru\
e"}:{};C={query:T,params:g},i&&i(C),E=await fetch(L,{method:"POST",body:JSON.stringify(
C),headers:{"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Array\
-Mode":"true",...R},...x})}catch(L){let R=new gt(`Error connecting to database: ${L.
message}`);throw R.sourceError=L,R}if(E.ok){let L=await E.json(),R=L.fields.map(
N=>N.name),M=L.fields.map(N=>Le.types.getTypeParser(N.dataTypeID)),D=S===!0?L.rows.
map(N=>N.map((z,P)=>z===null?null:M[P](z))):L.rows.map(N=>Object.fromEntries(N.map(
(z,P)=>[R[P],z===null?null:M[P](z)])));return s&&s(C,L,D,{arrayMode:S,fullResults:A}),
A?(L.viaNeonFetch=!0,L.rowAsArray=S,L.rows=D,L):D}else{let{status:L}=E;if(L===400){
let{message:R,code:M}=await E.json(),D=new gt(R);throw D.code=M,D}else{let R=await E.
text();throw new gt(`Database error (HTTP status ${L}): ${R}`)}}}}o(St,"neon");var er=nt(Xt());Dt();var Ra=nt(Wt()),Le=nt(Xt());var jr="The database host is 'localhost', which is the default host when none is\
 set. If that's intentional, please ignore this warning. If not, perhaps an envi\
ronment variable has not been set, or has not been passed to the library?",Ae=class extends er.Client{static{
o(this,"NeonClient")}get neonConfig(){return this.connection.stream}connect(e){let{
neonConfig:t}=this;t.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.ssl&&
t.useSecureWebSocket&&console.warn("SSL is enabled for both Postgres (e.g. ?sslm\
ode=require in the connection string + forceDisablePgSSL = false) and the WebSoc\
ket tunnel (useSecureWebSocket = true). Double encryption will increase latency \
and CPU usage. It may be appropriate to disable SSL in the Postgres connection p\
arameters or set forceDisablePgSSL = true."),this.host==="localhost"&&console.warn(
jr);let n=super.connect(e),i=t.pipelineTLS&&this.ssl,s=t.pipelineConnect==="pass\
word";if(!i&&!t.pipelineConnect)return n;let a=this.connection;if(i&&a.on("conne\
ct",()=>a.stream.emit("data","S")),s){a.removeAllListeners("authenticationCleart\
extPassword"),a.removeAllListeners("readyForQuery"),a.once("readyForQuery",()=>a.
on("readyForQuery",this._handleReadyForQuery.bind(this)));let u=this.ssl?"sslcon\
nect":"connect";a.on(u,()=>{this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}
return n}async _handleAuthSASLContinue(e){let t=this.saslSession,n=this.password,
i=e.data;if(t.message!=="SASLInitialResponse"||typeof n!="string"||typeof i!="st\
ring")throw new Error("SASL: protocol error");let s=Object.fromEntries(i.split("\
,").map(V=>{if(!/^.=/.test(V))throw new Error("SASL: Invalid attribute pair entr\
y");let Z=V[0],O=V.substring(2);return[Z,O]})),a=s.r,u=s.s,c=s.i;if(!a||!/^[!-+--~]+$/.
test(a))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprint\
able");if(!u||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!c||!/^[1-9][0-9]*$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!a.startsWith(t.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(a.length===t.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let l=parseInt(c,10),h=w.from(u,"base64"),f=new TextEncoder,
p=f.encode(n),g=await b.subtle.importKey("raw",p,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),S=new Uint8Array(await b.subtle.sign("HMAC",g,w.concat([h,w.from(
[0,0,0,1])]))),A=S;for(var x=0;x<l-1;x++)S=new Uint8Array(await b.subtle.sign("H\
MAC",g,S)),A=w.from(A.map((V,Z)=>A[Z]^S[Z]));let T=A,C=await b.subtle.importKey(
"raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),E=new Uint8Array(await b.
subtle.sign("HMAC",C,f.encode("Client Key"))),L=await b.subtle.digest("SHA-256",
E),R="n=*,r="+t.clientNonce,M="r="+a+",s="+u+",i="+l,D="c=biws,r="+a,N=R+","+M+"\
,"+D,z=await b.subtle.importKey("raw",L,{name:"HMAC",hash:{name:"SHA-256"}},!1,[
"sign"]);var P=new Uint8Array(await b.subtle.sign("HMAC",z,f.encode(N))),$=w.from(
E.map((V,Z)=>E[Z]^P[Z])),H=$.toString("base64");let K=await b.subtle.importKey("\
raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),G=await b.subtle.sign("H\
MAC",K,f.encode("Server Key")),Y=await b.subtle.importKey("raw",G,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var k=w.from(await b.subtle.sign("HMAC",Y,f.encode(
N)));t.message="SASLResponse",t.serverSignature=k.toString("base64"),t.response=
D+",p="+H,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function _h(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
_h,"promisify");var Ne=class extends er.Pool{static{o(this,"NeonPool")}Client=Ae;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!de.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=_h(this.Promise,
n);n=i.callback;try{let s=new Ra.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];St(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h).then(p=>n(void 0,p)).catch(p=>n(p))}catch(s){n(s)}return i.result}};y();async function Uh(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(Uh,"t\
imed");async function vt(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await Uh(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(vt,"timedRepeat\
s");async function tr(r,e){let{sql:t,test:n}=e,{rows:i}=await r.query(t);if(!n(i))
throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(tr,"runQuery");async function et(r,e,t,n){
await e.connect();let i=await vt(r,()=>tr(e,n));return t.waitUntil(e.end()),i}o(
et,"clientRunQuery");async function rr(r,e,t,n){let i=new Ne({connectionString:e}),
s=await vt(r,()=>tr(i,n));return t.waitUntil(i.end()),s}o(rr,"poolRunQuery");y();var nr=[{sql:"SELECT * FROM employees LIMIT 10",test:r=>r.length>1&&typeof r[0].
first_name=="string"},{sql:"SELECT now()",test:r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString())}];async function a0(r,e,t){let n=[];for(let i of nr){let[,[[,s]]]=await rr(1,e.NEON_DB_URL,
t,i);n.push(s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-T\
ype":"application/json"}})}o(a0,"cf");var Be={waitUntil(r){},passThroughOnException(){}};
async function o0(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up ...

`),await rr(1,r.NEON_DB_URL,Be,nr[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Ne({connectionString:r.
NEON_DB_URL}),c=St(r.NEON_DB_URL,{resultCallback:async(p,g,S,A)=>{let x=await u.
query({text:p.query,values:p.params,...A.arrayMode?{rowMode:"array"}:{}}),T=g.command===
x.command,C=g.rowCount===x.rowCount,E=vr(g.fields.map(M=>M.dataTypeID),x.fields.
map(M=>M.dataTypeID)),L=vr(S,x.rows);t(T&&C&&L&&E?"\u2713":"X",JSON.stringify(p),
`
  -> us:`,JSON.stringify(S),`
  -> pg:`,JSON.stringify(x.rows),`
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
hello"} AS str`,await c`SELECT ${"world"} AS str`,await c("SELECT 123 AS num");function h(p,g,S=3){
return async function(A,...x){let T="";for(let C=0;C<A.length;C++)T+=A[C],C<x.length&&
(T+="$"+(C+1));for(let C=1;;C++){let E=new AbortController,L=setTimeout(()=>E.abort(
"fetch timed out"),g);try{let{signal:R}=E;return await p(T,x,{fetchOptions:{signal:R}})}catch(R){
if(!(R.sourceError&&R.sourceError instanceof DOMException&&R.sourceError.name===
"AbortError")||C>=S)throw R}finally{clearTimeout(L)}}}}o(h,"sqlWithRetries"),await h(
c,5e3)`SELECT ${"did this time out?"} AS str`,await new Promise(p=>setTimeout(p,
1e3)),u.end();for(let p of nr){t(`
===== ${p.sql} =====

`);async function g(A,x){let T=String.fromCharCode(s+(s>25?23:65));t(`${T}
`);try{await fetch(`http://localhost:443/${T}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,C]=await vt(i,()=>x(A),E=>t(`<span class="live">${E.toFixed()}\
ms</span> `));t(`
Sorted:  `),C.map(([E])=>E).sort((E,L)=>E-L).forEach((E,L)=>{t(L===(i-1)/2?`<spa\
n class="median">${E.toFixed()}ms</span> `:`${E.toFixed()}ms `)}),t(`

`),s+=1}o(g,"section");async function S(A,x){t(`----- ${A} -----

`);for(let T of n)t(`${T} quer${T===1?"y":"ies"} \u2013 `),await g(T,x)}o(S,"sec\
tions"),await S("Neon/wss, no pipelining",async A=>{let x=new Ae(r.NEON_DB_URL);
x.neonConfig.pipelineConnect=!1,await et(A,x,Be,p)}),await S("Neon/wss, pipeline\
d connect (default)",async A=>{let x=new Ae(r.NEON_DB_URL);await et(A,x,Be,p)}),
await S("Neon/wss, pipelined connect, no coalescing",async A=>{let x=new Ae(r.NEON_DB_URL);
x.neonConfig.coalesceWrites=!1,await et(A,x,Be,p)}),await S("Neon/wss, pipelined\
 connect using Pool.query",async A=>{await rr(A,r.NEON_DB_URL,Be,p)}),await S("N\
eon/wss, pipelined connect using Pool.connect",async A=>{let x=new Ne({connectionString:r.
NEON_DB_URL}),T=await x.connect();await vt(A,()=>tr(T,p)),T.release(),Be.waitUntil(
x.end())}),await S("Patched pg/wss, pipelined connect",async A=>{let x=new Ae(r.
MY_DB_URL);x.neonConfig.wsProxy=(T,C)=>`ws.manipulexity.com/v1?address=${T}:${C}`,
x.neonConfig.pipelineConnect="password",await et(A,x,Be,p)}),e&&(de.subtls=Ar,de.
rootCerts=Ei,await S("Patched pg/subtls, pipelined TLS + connect",async A=>{let x=new Ae(
r.MY_DB_URL);x.neonConfig.wsProxy=(T,C)=>`ws.manipulexity.com/v1?address=${T}:${C}`,
x.neonConfig.forceDisablePgSSL=x.neonConfig.useSecureWebSocket=!1,x.neonConfig.pipelineTLS=
!0,x.neonConfig.pipelineConnect="password",await et(A,x,Be,p)}))}}o(o0,"latencie\
s");export{a0 as cf,o0 as latencies,de as neonConfig};
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
