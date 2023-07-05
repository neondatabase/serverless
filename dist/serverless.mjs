var Ha=Object.create;var rt=Object.defineProperty;var Ka=Object.getOwnPropertyDescriptor;var Wa=Object.getOwnPropertyNames;var Ga=Object.getPrototypeOf,Va=Object.prototype.hasOwnProperty;var o=(r,e)=>rt(r,"name",{value:e,configurable:!0});var X=(r,e)=>()=>(r&&(e=r(r=0)),e);var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),he=(r,e)=>{for(var t in e)
rt(r,t,{get:e[t],enumerable:!0})},On=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Wa(e))!Va.call(r,i)&&i!==t&&rt(r,i,{get:()=>e[i],enumerable:!(n=
Ka(e,i))||n.enumerable});return r};var nt=(r,e,t)=>(t=r!=null?Ha(Ga(r)):{},On(e||!r||!r.__esModule?rt(t,"default",{
value:r,enumerable:!0}):t,r)),z=r=>On(rt({},"__esModule",{value:!0}),r);var $n=I(Tt=>{"use strict";p();Tt.byteLength=Ya;Tt.toByteArray=Za;Tt.fromByteArray=
to;var we=[],fe=[],za=typeof Uint8Array<"u"?Uint8Array:Array,sr="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,Qn=sr.length;Pe<Qn;++Pe)
we[Pe]=sr[Pe],fe[sr.charCodeAt(Pe)]=Pe;var Pe,Qn;fe["-".charCodeAt(0)]=62;fe["_".
charCodeAt(0)]=63;function jn(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o(jn,"getLens");function Ya(r){var e=jn(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(Ya,"byteLength");function Ja(r,e,t){return(e+t)*3/4-t}o(Ja,"_byteLeng\
th");function Za(r){var e,t=jn(r),n=t[0],i=t[1],s=new za(Ja(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=fe[r.charCodeAt(c)]<<18|fe[r.charCodeAt(c+1)]<<12|fe[r.
charCodeAt(c+2)]<<6|fe[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=fe[r.charCodeAt(c)]<<2|fe[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=fe[r.charCodeAt(c)]<<10|fe[r.charCodeAt(c+1)]<<4|fe[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o(Za,"toByteArray");function Xa(r){return we[r>>
18&63]+we[r>>12&63]+we[r>>6&63]+we[r&63]}o(Xa,"tripletToBase64");function eo(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(Xa(n));return i.join("")}o(eo,"encodeChunk");function to(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(eo(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(we[e>>2]+we[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
we[e>>10]+we[e>>4&63]+we[e<<2&63]+"=")),i.join("")}o(to,"fromByteArray")});var Hn=I(ar=>{p();ar.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,y=t?-1:1,g=r[e+f];for(f+=y,s=g&(1<<-h)-1,g>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=y,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=y,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(g?
-1:1)*a*Math.pow(2,s-n)};ar.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:s-1,m=n?1:-1,C=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=y/c:e+=
y*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+g]=u&255,g+=m,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+g]=a&255,g+=m,a/=256,l-=8);r[t+g-m]|=C*128}});var oi=I(Oe=>{"use strict";p();var or=$n(),De=Hn(),Kn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Oe.Buffer=
d;Oe.SlowBuffer=oo;Oe.INSPECT_MAX_BYTES=50;var It=2147483647;Oe.kMaxLength=It;d.
TYPED_ARRAY_SUPPORT=ro();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function ro(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(ro,"typedArraySupport");Object.defineProperty(d.prototype,
"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}});
Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(
this))return this.byteOffset}});function xe(r){if(r>It)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,d.prototype),e}o(xe,"createBuffer");function d(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return hr(r)}return zn(r,e,t)}o(d,"Buf\
fer");d.poolSize=8192;function zn(r,e,t){if(typeof r=="string")return io(r,e);if(ArrayBuffer.
isView(r))return so(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(me(r,ArrayBuffer)||r&&me(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(me(r,SharedArrayBuffer)||r&&me(r.buffer,SharedArrayBuffer)))return cr(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return d.from(n,e,t);let i=ao(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
zn,"from");d.from=function(r,e,t){return zn(r,e,t)};Object.setPrototypeOf(d.prototype,
Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Yn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(Yn,"assertSize");function no(r,e,t){
return Yn(r),r<=0?xe(r):e!==void 0?typeof t=="string"?xe(r).fill(e,t):xe(r).fill(
e):xe(r)}o(no,"alloc");d.alloc=function(r,e,t){return no(r,e,t)};function hr(r){
return Yn(r),xe(r<0?0:fr(r)|0)}o(hr,"allocUnsafe");d.allocUnsafe=function(r){return hr(
r)};d.allocUnsafeSlow=function(r){return hr(r)};function io(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Jn(r,e)|0,n=xe(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(io,"fromString");function ur(r){let e=r.length<0?0:fr(r.length)|0,t=xe(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(ur,"fromArrayLike");function so(r){if(me(r,Uint8Array)){
let e=new Uint8Array(r);return cr(e.buffer,e.byteOffset,e.byteLength)}return ur(
r)}o(so,"fromArrayView");function cr(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(cr,"fromArrayBuffer");function ao(r){if(d.isBuffer(r)){let e=fr(
r.length)|0,t=xe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||pr(r.length)?xe(0):ur(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return ur(r.data)}o(ao,"fromObject");function fr(r){if(r>=
It)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
It.toString(16)+" bytes");return r|0}o(fr,"checked");function oo(r){return+r!=r&&
(r=0),d.alloc(+r)}o(oo,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==d.prototype},"isBuffer");d.compare=o(function(e,t){if(me(e,Uint8Array)&&
(e=d.from(e,e.offset,e.byteLength)),me(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),
!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");d.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");d.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(me(a,Uint8Array))s+a.length>i.length?(d.isBuffer(
a)||(a=d.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(d.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function Jn(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||me(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return lr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return ai(r).length;default:if(i)return n?-1:lr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(Jn,"byteLength");d.byteLength=Jn;function uo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return So(
this,e,t);case"utf8":case"utf-8":return Xn(this,e,t);case"ascii":return mo(this,
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
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?Xn(
this,0,e):uo.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=Oe.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Kn&&(d.prototype[Kn]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(me(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function Zn(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,pr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:Wn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Wn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Zn,"bid\
irectionalIndexOf");function Wn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Wn,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return Zn(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return Zn(this,e,t,n,!1)},"lastIndexOf");function co(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(pr(u))
return a;r[t+a]=u}return a}o(co,"hexWrite");function lo(r,e,t,n){return Bt(lr(e,
r.length-t),r,t,n)}o(lo,"utf8Write");function ho(r,e,t,n){return Bt(vo(e),r,t,n)}
o(ho,"asciiWrite");function fo(r,e,t,n){return Bt(ai(e),r,t,n)}o(fo,"base64Write");
function po(r,e,t,n){return Bt(Co(e,r.length-t),r,t,n)}o(po,"ucs2Write");d.prototype.
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
length?or.fromByteArray(r):or.fromByteArray(r.slice(e,t))}o(yo,"base64Slice");function Xn(r,e,t){
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
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(Eo,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function Y(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(Y,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||Y(e,t,this.length);let i=this[e],
s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");d.prototype.
readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||Y(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){return e=
e>>>0,t||Y(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=d.prototype.
readUInt16LE=o(function(e,t){return e=e>>>0,t||Y(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=o(function(e,t){
return e=e>>>0,t||Y(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");d.prototype.
readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=e>>>0,t||Y(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){return e=e>>>0,
t||Y(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");d.prototype.readBigUInt64LE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));d.prototype.
readBigUInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&it(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=o(function(e,t,n){
e=e>>>0,t=t>>>0,n||Y(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)
i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");d.prototype.
readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||Y(e,t,this.length);let i=t,s=1,a=this[e+
--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*t)),
a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=e>>>0,t||Y(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");d.prototype.readInt16LE=
o(function(e,t){e=e>>>0,t||Y(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=o(function(e,t){e=e>>>
0,t||Y(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=e>>>0,t||Y(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");d.prototype.
readInt32BE=o(function(e,t){return e=e>>>0,t||Y(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.readBigInt64LE=ve(o(function(e){
e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));d.prototype.readBigInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));d.prototype.
readFloatLE=o(function(e,t){return e=e>>>0,t||Y(e,4,this.length),De.read(this,e,
!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){return e=e>>>0,
t||Y(e,4,this.length),De.read(this,e,!1,23,4)},"readFloatBE");d.prototype.readDoubleLE=
o(function(e,t){return e=e>>>0,t||Y(e,8,this.length),De.read(this,e,!0,52,8)},"r\
eadDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=e>>>0,t||Y(e,8,this.
length),De.read(this,e,!1,52,8)},"readDoubleBE");function oe(r,e,t,n,i,s){if(!d.
isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>
i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)
throw new RangeError("Index out of range")}o(oe,"checkInt");d.prototype.writeUintLE=
d.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;oe(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<n&&(s*=256);)this[t+
a]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=d.prototype.writeUIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;oe(this,
e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)this[t+s]=e/a&255;
return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.writeUInt8=o(function(e,t,n){
return e=+e,t=t>>>0,n||oe(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");d.prototype.
writeUint16LE=d.prototype.writeUInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
oe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");d.prototype.
writeUint16BE=d.prototype.writeUInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||
oe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");d.prototype.
writeUint32LE=d.prototype.writeUInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
oe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=
e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=d.prototype.writeUInt32BE=
o(function(e,t,n){return e=+e,t=t>>>0,n||oe(this,e,t,4,4294967295,0),this[t]=e>>>
24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ei(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>
8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,t}o(ei,"wrtBigUInt64LE");function ti(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=a,a=a>>8,r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(ti,"wrtBigUInt64BE");d.
prototype.writeBigUInt64LE=ve(o(function(e,t=0){return ei(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=ve(o(function(e,t=0){
return ti(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
d.prototype.writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);oe(this,e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIn\
tLE");d.prototype.writeIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.
pow(2,8*n-1);oe(this,e,t,n,c-1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&
(a*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},
"writeIntBE");d.prototype.writeInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||oe(
this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");d.prototype.
writeInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||oe(this,e,t,2,32767,-32768),
this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");d.prototype.writeInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||oe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");d.prototype.writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>
0,n||oe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+
2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");d.prototype.writeInt32BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||oe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+
e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"write\
Int32BE");d.prototype.writeBigInt64LE=ve(o(function(e,t=0){return ei(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.
writeBigInt64BE=ve(o(function(e,t=0){return ti(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function ri(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}o(ri,"checkIEEE754");function ni(r,e,t,n,i){return e=+e,t=
t>>>0,i||ri(r,e,t,4,34028234663852886e22,-34028234663852886e22),De.write(r,e,t,n,
23,4),t+4}o(ni,"writeFloat");d.prototype.writeFloatLE=o(function(e,t,n){return ni(
this,e,t,!0,n)},"writeFloatLE");d.prototype.writeFloatBE=o(function(e,t,n){return ni(
this,e,t,!1,n)},"writeFloatBE");function ii(r,e,t,n,i){return e=+e,t=t>>>0,i||ri(
r,e,t,8,17976931348623157e292,-17976931348623157e292),De.write(r,e,t,n,52,8),t+8}
o(ii,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){return ii(this,e,
t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){return ii(
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
a[s%u]}return this},"fill");var qe={};function dr(r,e,t){qe[r]=class extends t{static{
o(this,"NodeError")}constructor(){super(),Object.defineProperty(this,"message",{
value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name}\
 [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.
name} [${r}]: ${this.message}`}}}o(dr,"E");dr("ERR_BUFFER_OUT_OF_BOUNDS",function(r){
return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside bu\
ffer bounds"},RangeError);dr("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}\
" argument must be of type number. Received type ${typeof e}`},TypeError);dr("ER\
R_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;
return Number.isInteger(t)&&Math.abs(t)>2**32?i=Vn(String(t)):typeof t=="bigint"&&
(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Vn(i)),i+=
"n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Vn(r){let e="",
t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.
slice(0,t)}${e}`}o(Vn,"addNumericalSeparator");function xo(r,e,t){ke(e,"offset"),
(r[e]===void 0||r[e+t]===void 0)&&it(e,r.length-(t+1))}o(xo,"checkBounds");function si(r,e,t,n,i,s){
if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and \
< 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,new qe.ERR_OUT_OF_RANGE(
"value",u,r)}xo(n,i,s)}o(si,"checkIntBI");function ke(r,e){if(typeof r!="number")
throw new qe.ERR_INVALID_ARG_TYPE(e,"number",r)}o(ke,"validateNumber");function it(r,e,t){
throw Math.floor(r)!==r?(ke(r,t),new qe.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new qe.ERR_BUFFER_OUT_OF_BOUNDS:new qe.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}o(it,"boundsError");var bo=/[^+/0-9A-Za-z-_]/g;function Ao(r){
if(r=r.split("=")[0],r=r.trim().replace(bo,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}o(Ao,"base64clean");function lr(r,e){e=e||1/0;let t,n=r.
length,i=null,s=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&t<57344){if(!i){
if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===n){(e-=3)>-1&&
s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,
189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,
189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;
s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}o(
lr,"utf8ToBytes");function vo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}o(vo,"asciiToBytes");function Co(r,e){let t,n,i,s=[];for(let a=0;a<
r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,i=t%256,s.push(i),s.push(n);return s}
o(Co,"utf16leToBytes");function ai(r){return or.toByteArray(Ao(r))}o(ai,"base64T\
oBytes");function Bt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}o(Bt,"blitBuffer");function me(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
o(me,"isInstance");function pr(r){return r!==r}o(pr,"numberIsNaN");var _o=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function ve(r){return typeof BigInt>"u"?Uo:r}
o(ve,"defineBigIntMethod");function Uo(){throw new Error("BigInt not supported")}
o(Uo,"BufferBigIntNotDefined")});var A,v,_,x,w,S,p=X(()=>{"use strict";A=globalThis,v=globalThis.setImmediate??(r=>setTimeout(
r,0)),_=globalThis.clearImmediate??(r=>clearTimeout(r)),x=globalThis.crypto??{};
x.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:oi().Buffer,S=globalThis.process??{};S.env??={};try{
S.nextTick(()=>{})}catch{let e=Promise.resolve();S.nextTick=e.then.bind(e)}});var gi={};he(gi,{parse:()=>wr});function wr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:y}=new URL(n);s=decodeURIComponent(s);let g=i+":"+s,
m=e?Object.fromEntries(f.entries()):h;return{href:r,protocol:t,auth:g,username:i,
password:s,host:a,hostname:u,port:c,pathname:l,search:h,query:m,hash:y}}var mr=X(
()=>{"use strict";p();o(wr,"parse")});var _e=I((zh,gr)=>{"use strict";p();var je=typeof Reflect=="object"?Reflect:null,
Si=je&&typeof je.apply=="function"?je.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Rt;je&&typeof je.ownKeys=="function"?Rt=je.ownKeys:
Object.getOwnPropertySymbols?Rt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Rt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Zo(r){console&&console.warn&&
console.warn(r)}o(Zo,"ProcessEmitWarning");var xi=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function F(){F.init.call(this)}o(F,"EventEmitter");gr.exports=
F;gr.exports.once=ru;F.EventEmitter=F;F.prototype._events=void 0;F.prototype._eventsCount=
0;F.prototype._maxListeners=void 0;var Ei=10;function Mt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(Mt,"checkListener");Object.defineProperty(F,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Ei},set:function(r){if(typeof r!="\
number"||r<0||xi(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Ei=r}});F.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};F.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||xi(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function bi(r){return r._maxListeners===void 0?F.defaultMaxListeners:r._maxListeners}
o(bi,"_getMaxListeners");F.prototype.getMaxListeners=o(function(){return bi(this)},
"getMaxListeners");F.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")Si(c,this,t);else for(var l=c.
length,h=Ui(c,l),n=0;n<l;++n)Si(h[n],this,t);return!0},"emit");function Ai(r,e,t,n){
var i,s,a;if(Mt(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=bi(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,Zo(u)}
return r}o(Ai,"_addListener");F.prototype.addListener=o(function(e,t){return Ai(
this,e,t,!1)},"addListener");F.prototype.on=F.prototype.addListener;F.prototype.
prependListener=o(function(e,t){return Ai(this,e,t,!0)},"prependListener");function Xo(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(Xo,"onceWrapper");function vi(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=Xo.bind(n);return i.listener=t,n.wrapFn=i,i}o(vi,"\
_onceWrap");F.prototype.once=o(function(e,t){return Mt(t),this.on(e,vi(this,e,t)),
this},"once");F.prototype.prependOnceListener=o(function(e,t){return Mt(t),this.
prependListener(e,vi(this,e,t)),this},"prependOnceListener");F.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(Mt(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():eu(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");F.prototype.off=F.prototype.
removeListener;F.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function Ci(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?tu(i):Ui(i,i.length)}o(Ci,"_listeners");F.prototype.
listeners=o(function(e){return Ci(this,e,!0)},"listeners");F.prototype.rawListeners=
o(function(e){return Ci(this,e,!1)},"rawListeners");F.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):_i.call(r,e)};F.prototype.
listenerCount=_i;function _i(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(_i,"listenerCount");
F.prototype.eventNames=o(function(){return this._eventsCount>0?Rt(this._events):
[]},"eventNames");function Ui(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(Ui,"arrayClone");function eu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(eu,"spliceOne");function tu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(tu,"unwrapListeners");function ru(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Li(r,e,s,{once:!0}),e!=="error"&&nu(r,i,{once:!0})})}
o(ru,"once");function nu(r,e,t){typeof r.on=="function"&&Li(r,"error",e,t)}o(nu,
"addErrorHandlerIfEventEmitter");function Li(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Li,"eventTargetAgnosticAddListener")});function re(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}function ut(r,e){let t=r.length;if(t!==e.length)return!1;for(let n=0;n<
t;n++)if(r[n]!==e[n])return!1;return!0}function su(r,e,t,n=!0){let i=new ge(1024);
i.writeUint8(22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(
1,0);let a=i.writeLengthUint24();i.writeUint16(771,0),x.getRandomValues(i.subarray(
32));let u=i.writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);
i.writeUint16(4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.
writeLengthUint16(0);if(n){i.writeUint16(0,0);let M=i.writeLengthUint16(0),D=i.writeLengthUint16(
0);i.writeUint8(0,0);let P=i.writeLengthUint16(0);i.writeUTF8String(r),P(),D(),M()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),y=i.writeLengthUint8(0);i.writeUint8(
0,0),y(),f(),i.writeUint16(10,0);let g=i.writeLengthUint16(0),m=i.writeLengthUint16(
0);i.writeUint16(23,0),m(),g(),i.writeUint16(13,0);let C=i.writeLengthUint16(0),
U=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),U(),C(),i.writeUint16(
43,0);let T=i.writeLengthUint16(0),E=i.writeLengthUint8(0);i.writeUint16(772,0),
E(),T(),i.writeUint16(51,0);let b=i.writeLengthUint16(0),q=i.writeLengthUint16(0);
i.writeUint16(23,0);let $=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),$(),q(),b(),h(),a(),s(),i}function Ue(r,e=""){return[...r].map(t=>t.toString(
16).padStart(2,"0")).join(e)}function au(r,e){let t,n,[i]=r.expectLength(r.remaining());
r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(771,0);let a=r.
readBytes(32);if(ut(a,[207,33,173,116,229,154,97,17,190,29,140,2,30,101,184,145,
194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error("Unexp\
ected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Ue([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
async function Ar(r,e,t=at){let n=await r(5);if(n===void 0)return;if(n.length<5)
throw new Error("TLS record header truncated");let i=new ge(n),s=i.readUint8();if(s<
20||s>24)throw new Error(`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&
s!==e)throw new Error(`Unexpected TLS record type 0x${s.toString(16).padStart(2,
"0")} (expected 0x${e.toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS r\
ecord version 1.2 (middlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(
`Record too long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error(
"TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
async function vr(r,e,t){let n=await Ar(r,23,ou);if(n===void 0)return;let i=new ge(
n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),i.skip(16,0),
s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===0;)
u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (all\
 zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&l[1]===
0)){if(c===22&&l[0]===4)return vr(r,e,t);if(t!==void 0&&c!==t)throw new Error(`U\
nexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.toString(
16).padStart(2,"0")})`);return l}}async function uu(r,e,t){let n=re(r,[t]),i=5,s=n.
length+16,a=new ge(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.writeUint16(s,
`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.process(n,16,
c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(l.length-
16)),u(),a.array()}async function Ii(r,e,t){let n=Math.ceil(r.length/at),i=[];for(let s=0;s<
n;s++){let a=r.subarray(s*at,(s+1)*at),u=await uu(a,e,t);i.push(u)}return i}async function Cr(r,e,t){
let n=await R.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await R.sign("HMAC",n,e));return i}async function cu(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await R.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=re(c,e,[l+1]),f=await R.sign("HMAC",u,h),y=new Uint8Array(f);a.set(y,i*l),
c=y}return a.subarray(0,t)}async function ne(r,e,t,n,i){let s=Ni.encode(e),a=re(
[(n&65280)>>8,n&255],[Bi.length+s.length],Bi,s,[t.length],t);return cu(r,a,n,i)}
async function lu(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(s),u=await R.importKey(
"raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await R.deriveBits({name:"ECDH",
public:u},e,256),l=new Uint8Array(c),h=await R.digest("SHA-256",t),f=new Uint8Array(
h),y=await Cr(new Uint8Array(1),a,n),g=await R.digest(`SHA-${n}`,new Uint8Array(
0)),m=new Uint8Array(g),C=await ne(y,"derived",m,s,n),U=await Cr(C,l,n),T=await ne(
U,"c hs traffic",f,s,n),E=await ne(U,"s hs traffic",f,s,n),b=await ne(T,"key",new Uint8Array(
0),i,n),q=await ne(E,"key",new Uint8Array(0),i,n),$=await ne(T,"iv",new Uint8Array(
0),12,n),M=await ne(E,"iv",new Uint8Array(0),12,n);return{serverHandshakeKey:q,serverHandshakeIV:M,
clientHandshakeKey:b,clientHandshakeIV:$,handshakeSecret:U,clientSecret:T,serverSecret:E}}
async function hu(r,e,t,n){let i=t>>>3,s=new Uint8Array(i),a=await R.digest(`SHA\
-${t}`,new Uint8Array(0)),u=new Uint8Array(a),c=await ne(r,"derived",u,i,t),l=await Cr(
c,s,t),h=await ne(l,"c ap traffic",e,i,t),f=await ne(l,"s ap traffic",e,i,t),y=await ne(
h,"key",new Uint8Array(0),n,t),g=await ne(f,"key",new Uint8Array(0),n,t),m=await ne(
h,"iv",new Uint8Array(0),12,t),C=await ne(f,"iv",new Uint8Array(0),12,t);return{
serverApplicationKey:g,serverApplicationIV:C,clientApplicationKey:y,clientApplicationIV:m}}
function Ft(r){return r>64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:
r===47?63:r===61?64:void 0}function fu(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,
u=64,c=new Uint8Array(e*.75);for(;t<e;)i=Ft(r.charCodeAt(t++)),s=Ft(r.charCodeAt(
t++)),a=Ft(r.charCodeAt(t++)),u=Ft(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&
15)<<4|a>>2,c[n++]=(a&3)<<6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(
0,n-l)}function Pi(r,e=(n,i)=>i,t){return JSON.stringify(r,(n,i)=>e(n,typeof i!=
"object"||i===null||Array.isArray(i)?i:Object.fromEntries(Object.entries(i).sort(
([s],[a])=>s<a?-1:s>a?1:0))),t)}function gu(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}function Mi(r,e){let t={};r.expectUint8(
te,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(du,0);let[s]=r.expectASN1Length(
0);r.expectUint8(te,0);let[a]=r.expectASN1Length(0);r.expectUint8(He,0);let u=r.
readASN1OID(),c=mu[u]??u,l=r.readUint8();if(l!==pu&&l!==yu)throw new Error(`Unex\
pected item type in certificate ${e}: 0x${Ue([l])}`);let[h,f]=r.expectASN1Length(
0),y=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)throw new Error(`Duplica\
te OID ${c} in certificate ${e}`);t[c]=y}return n(),t}function Su(r,e=0){let t=[],
[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.readUint8(0),[a,u]=r.expectASN1Length(
0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.readBytes(u()),t.push({name:c,type:s}),
a()}return n(),t}function Eu(r){let e={"1.2.840.113549.1.1.1":{name:"RSAES-PKCS1\
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
r: ${r}`);return e}function Fi(r,e=[]){return Object.values(r).forEach(t=>{typeof t==
"string"?e=[...e,t]:e=Fi(t,e)}),e}function xu(r){return Fi(r).join(" / ")}async function qi(r,e,t,n,i){
r.expectUint8(te,0);let[s]=r.expectASN1Length(0);r.expectUint8(Dt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Dt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let y=o((U,T)=>U.length>T?U.subarray(U.length-T):U.
length<T?re(new Uint8Array(T-U.length),U):U,"m"),g=n==="P-256"?32:48,m=re(y(c,g),
y(f,g)),C=await R.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await R.verify({name:"ECDSA",hash:i},C,m,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}async function Au(r,e,t,n=!0,i=!0){for(let u of e)
;let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(`No matc\
hing subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("End-user\
 certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=t.find(
m=>ot.distinguishedNamesAreEqual(m.subject,l.issuer)):f=t.find(m=>m.subjectKeyIdentifier!==
void 0&&ut(m.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let y=f instanceof _r;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:g}=f.basicConstraints;if(g!==void 0&&g<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let m=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",C=f.publicKey.identifiers,U=C.includes("1.2.840.10045.3.1.7")?"P-256":C.includes(
"1.3.132.0.34")?"P-384":void 0;if(U===void 0)throw new Error("Unsupported signin\
g key curve");let T=new qt(l.signature);await qi(T,f.publicKey.all,l.signedData,
U,m)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let m=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",C=await R.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:m},!1,["verify"]);
if(await R.verify({name:"RSASSA-PKCS1-v1_5"},C,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(y){a=!0;break}}return a}async function Cu(r,e,t,n,i,s=!0,a=!0){
let u=new qt(await e());u.expectUint8(8,0);let[c]=u.expectLengthUint24(),[l,h]=u.
expectLengthUint16(0);for(;h()>0;){let V=u.readUint16(0);if(V===0)u.expectUint16(
0,0);else if(V===10){let[ye,Ee]=u.expectLengthUint16("groups data");u.skip(Ee(),
0),ye()}else throw new Error(`Unsupported server encrypted extension type 0x${Ue(
[V]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.extend(await e());let f=!1,
y=u.readUint8();if(y===13){f=!0;let[V]=u.expectLengthUint24("certificate request\
 data");u.expectUint8(0,0);let[ye,Ee]=u.expectLengthUint16("certificate request \
extensions");u.skip(Ee(),0),ye(),V(),u.remaining()===0&&u.extend(await e()),y=u.
readUint8()}if(y!==11)throw new Error(`Unexpected handshake message type 0x${Ue(
[y])}`);let[g]=u.expectLengthUint24(0);u.expectUint8(0,0);let[m,C]=u.expectLengthUint24(
0),U=[];for(;C()>0;){let[V]=u.expectLengthUint24(0),ye=new ot(u);U.push(ye),V();
let[Ee,Fe]=u.expectLengthUint16(),Fn=u.subarray(Fe());Ee()}if(m(),g(),U.length===
0)throw new Error("No certificates supplied");let T=U[0],E=u.data.subarray(0,u.offset),
b=re(n,E),q=await R.digest("SHA-256",b),$=new Uint8Array(q),M=re(vu.encode(" ".repeat(
64)+"TLS 1.3, server CertificateVerify"),[0],$);u.remaining()===0&&u.extend(await e()),
u.expectUint8(15,0);let[D]=u.expectLengthUint24(0),P=u.readUint16();if(P===1027){
let[V]=u.expectLengthUint16();await qi(u,T.publicKey.all,M,"P-256","SHA-256"),V()}else if(P===
2052){let[V,ye]=u.expectLengthUint16(),Ee=u.subarray(ye());V();let Fe=await R.importKey(
"spki",T.publicKey.all,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]);if(await R.
verify({name:"RSA-PSS",saltLength:32},Fe,Ee,M)!==!0)throw new Error("RSA-PSS-RSA\
E-SHA256 certificate verify failed")}else throw new Error(`Unsupported certifica\
te verify signature type 0x${Ue([P]).padStart(4,"0")}`);D();let le=u.data.subarray(
0,u.offset),B=re(n,le),N=await ne(t,"finished",new Uint8Array(0),32,256),k=await R.
digest("SHA-256",B),H=await R.importKey("raw",N,{name:"HMAC",hash:{name:"SHA-256"}},
!1,["sign"]),W=await R.sign("HMAC",H,k),G=new Uint8Array(W);u.remaining()===0&&u.
extend(await e()),u.expectUint8(20,0);let[O,se]=u.expectLengthUint24(0),ee=u.readBytes(
se());if(O(),u.remaining()!==0)throw new Error("Unexpected extra bytes in server\
 handshake");if(ut(ee,G)!==!0)throw new Error("Invalid server verify hash");if(!await Au(
r,U,i,s,a))throw new Error("Validated certificate chain did not end in a trusted\
 root");return[u.data,f]}async function Di(r,e,t,n,{useSNI:i,requireServerTlsExtKeyUsage:s,
requireDigitalSigKeyUsage:a,writePreData:u,expectPreData:c,commentPreData:l}={}){
i??=!0,s??=!0,a??=!0;let h=await R.generateKey({name:"ECDH",namedCurve:"P-256"},
!0,["deriveKey","deriveBits"]),f=await R.exportKey("raw",h.publicKey),y=new Uint8Array(
32);x.getRandomValues(y);let g=su(r,f,y,i).array(),m=u?re(u,g):g;if(n(m),c){let Z=await t(
c.length);if(!Z||!ut(Z,c))throw new Error("Pre data did not match expectation")}
let C=await Ar(t,22);if(C===void 0)throw new Error("Connection closed while awai\
ting server hello");let U=new ge(C.content),T=au(U,y),E=await Ar(t,20);if(E===void 0)
throw new Error("Connection closed awaiting server cipher change");let b=new ge(
E.content),[q]=b.expectLength(1);b.expectUint8(1,0),q();let $=g.subarray(5),M=C.
content,D=re($,M),P=await lu(T,h.privateKey,D,256,16),le=await R.importKey("raw",
P.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),B=new Nt("decrypt",le,P.serverHandshakeIV),
N=await R.importKey("raw",P.clientHandshakeKey,{name:"AES-GCM"},!1,["encrypt"]),
k=new Nt("encrypt",N,P.clientHandshakeIV),H=o(async()=>{let Z=await vr(t,B,22);if(Z===
void 0)throw new Error("Premature end of encrypted server handshake");return Z},
"C"),[W,G]=await Cu(r,H,P.serverSecret,D,e,s,a),O=new ge(6);O.writeUint8(20,0),O.
writeUint16(771,0);let se=O.writeLengthUint16();O.writeUint8(1,0),se();let ee=O.
array(),V=new Uint8Array(0);if(G){let Z=new ge(8);Z.writeUint8(11,0);let tt=Z.writeLengthUint24(
"client certificate data");Z.writeUint8(0,0),Z.writeUint24(0,0),tt(),V=Z.array()}
let ye=re(D,W,V),Ee=await R.digest("SHA-256",ye),Fe=new Uint8Array(Ee),Fn=await ne(
P.clientSecret,"finished",new Uint8Array(0),32,256),Ma=await R.importKey("raw",Fn,
{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Na=await R.sign("HMAC",Ma,Fe),Fa=new Uint8Array(
Na),_t=new ge(36);_t.writeUint8(20,0);let qa=_t.writeLengthUint24(0);_t.writeBytes(
Fa),qa();let Da=_t.array(),qn=await Ii(re(V,Da),k,22),Dn=Fe;if(V.length>0){let Z=ye.
subarray(0,ye.length-V.length),tt=await R.digest("SHA-256",Z);Dn=new Uint8Array(
tt)}let Ut=await hu(P.handshakeSecret,Dn,256,16),ka=await R.importKey("raw",Ut.clientApplicationKey,
{name:"AES-GCM"},!0,["encrypt"]),Oa=new Nt("encrypt",ka,Ut.clientApplicationIV),
Qa=await R.importKey("raw",Ut.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),
ja=new Nt("decrypt",Qa,Ut.serverApplicationIV),Lt=!1;return[()=>{if(!Lt){let Z=re(
ee,...qn);n(Z),Lt=!0}return vr(t,ja)},async Z=>{let tt=Lt;Lt=!0;let kn=await Ii(
Z,Oa,23),$a=tt?re(...kn):re(ee,...qn,...kn);n($a)}]}var br,Ti,iu,ge,Zh,at,ou,R,Ni,
Bi,Nt,qt,Sr,Dt,te,du,He,pu,yu,Ri,Er,Me,xr,wu,$e,mu,bu,ot,_r,vu,_u,ki,Oi=X(()=>{p();
o(re,"p");o(ut,"O");br="\xB7\xB7 ",Ti=new TextEncoder,iu=new TextDecoder,ge=class{static{
o(this,"N")}offset;dataView;data;comments;indents;indent;constructor(r){this.offset=
0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(this.
data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.indents=
{},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;this.data=
re(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.byteOffset,
this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(r){
return this.data.subarray(this.offset,this.offset+=r)}skip(r,e){return this.offset+=
r,e&&this.comment(e),this}comment(r,e=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}readBytes(r){return this.data.slice(this.
offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);return iu.decode(
e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==0;)r++;let e=this.
readUTF8String(r-this.offset);return this.expectUint8(0,"end of string"),e}readUint8(r){
let e=this.dataView.getUint8(this.offset);return this.offset+=1,e}readUint16(r){
let e=this.dataView.getUint16(this.offset);return this.offset+=2,e}readUint24(r){
let e=this.readUint8(),t=this.readUint16();return(e<<16)+t}readUint32(r){let e=this.
dataView.getUint32(this.offset);return this.offset+=4,e}expectBytes(r,e){let t=this.
readBytes(r.length);if(!ut(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
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
let e=Ti.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=Ti.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
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
void 0?br.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${br.repeat(t)}`)}return e}};o(su,"St");o(Ue,"K");o(au,"Ut");Zh=new RegExp(`  .+\
|^(${br})+`,"gm"),at=16384,ou=at+1+255;o(Ar,"ht");o(vr,"dt");o(uu,"ee");o(Ii,"At");
R=x.subtle,Ni=new TextEncoder;o(Cr,"lt");o(cu,"ne");Bi=Ni.encode("tls13 ");o(ne,
"S");o(lu,"Kt");o(hu,"Tt");Nt=class{static{o(this,"Q")}constructor(r,e,t){this.mode=
r,this.key=e,this.initialIv=t}recordsProcessed=0n;priorPromise=Promise.resolve(new Uint8Array);async process(r,e,t){
let n=this.processUnsequenced(r,e,t);return this.priorPromise=this.priorPromise.
then(()=>n)}async processUnsequenced(r,e,t){let n=this.recordsProcessed;this.recordsProcessed+=
1n;let i=this.initialIv.slice(),s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){
let f=n>>(h<<3n);if(f===0n)break;i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"\
AES-GCM",iv:i,tagLength:u,additionalData:t},l=await R[this.mode](c,this.key,r);return new Uint8Array(
l)}};o(Ft,"yt");o(fu,"Dt");qt=class extends ge{static{o(this,"_")}readASN1Length(r){
let e=this.readUint8();if(e<128)return e;let t=e&127,n=0;if(t===1)return this.readUint8(
n);if(t===2)return this.readUint16(n);if(t===3)return this.readUint24(n);if(t===
4)return this.readUint32(n);throw new Error(`ASN.1 length fields are only suppor\
ted up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){let e=this.readASN1Length(
r);return this.expectLength(e)}readASN1OID(){let[r,e]=this.expectASN1Length(0),t=this.
readUint8(),n=`${Math.floor(t/40)}.${t%40}`;for(;e()>0;){let i=0;for(;;){let s=this.
readUint8();if(i<<=7,i+=s&127,s<128)break}n+=`.${i}`}return r(),n}readASN1Boolean(){
let[r,e]=this.expectASN1Length(0),t=e();if(t!==1)throw new Error(`Boolean has we\
ird length: ${t}`);let n=this.readUint8(),i;if(n===255)i=!0;else if(n===0)i=!1;else
throw new Error(`Boolean has weird value: 0x${Ue([n])}`);return r(),i}readASN1UTCTime(){
let[r,e]=this.expectASN1Length(0),t=this.readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);
if(!t)throw new Error("Unrecognised ASN.1 UTC time format");let[,n,i,s,a,u,c]=t,
l=parseInt(n,10),h=l+(l>=50?1900:2e3),f=new Date(`${h}-${i}-${s}T${a}:${u}:${c}Z`);
return r(),f}readASN1BitString(){let[r,e]=this.expectASN1Length(0),t=this.readUint8(
0),n=e(),i=this.readBytes(n);if(t>7)throw new Error(`Invalid right pad value: ${t}`);
if(t>0){let s=8-t;for(let a=n-1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>
t}return r(),i}};o(Pi,"mt");Sr=1,Dt=2,te=48,du=49,He=6,pu=19,yu=12,Ri=23,Er=5,Me=
4,xr=3,wu=163,$e=128,mu={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"\
CN","2.5.4.7":"L","2.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","\
2.5.4.4":"SN","1.2.840.113549.1.9.1":"E-mail"};o(gu,"qt");o(Mi,"Ct");o(Su,"Bt");
o(Eu,"Ft");o(Fi,"Ot");o(xu,"Pt");bu=["digitalSignature","nonRepudiation","keyEnc\
ipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOn\
ly","decipherOnly"],ot=class{static{o(this,"P")}serialNumber;algorithm;issuer;validityPeriod;subject;publicKey;signature;keyUsage;subjectAltNames;extKeyUsage;authorityKeyIdentifier;subjectKeyIdentifier;basicConstraints;signedData;static distinguishedNamesAreEqual(r,e){
return Pi(r)===Pi(e)}static readableDN(r){return Object.entries(r).map(e=>e.join(
"=")).join(", ")}constructor(r){let e=r instanceof qt?r:new qt(r);e.expectUint8(
te,0);let[t]=e.expectASN1Length(0),n=e.offset;e.expectUint8(te,0);let[i]=e.expectASN1Length(
0);e.expectBytes([160,3,2,1,2],0),e.expectUint8(Dt,0);let[s,a]=e.expectASN1Length(
0);this.serialNumber=e.subarray(a()),s(),e.expectUint8(te,0);let[u,c]=e.expectASN1Length(
0);e.expectUint8(He,0),this.algorithm=e.readASN1OID(),c()>0&&(e.expectUint8(Er,0),
e.expectUint8(0,0)),u(),this.issuer=Mi(e,"issuer"),e.expectUint8(te,0);let[l]=e.
expectASN1Length(0);e.expectUint8(Ri,0);let h=e.readASN1UTCTime();e.expectUint8(
Ri,0);let f=e.readASN1UTCTime();this.validityPeriod={notBefore:h,notAfter:f},l(),
this.subject=Mi(e,"subject");let y=e.offset;e.expectUint8(te,0);let[g]=e.expectASN1Length(
0);e.expectUint8(te,0);let[m,C]=e.expectASN1Length(0),U=[];for(;C()>0;){let P=e.
readUint8();if(P===He){let le=e.readASN1OID();U.push(le)}else P===Er&&e.expectUint8(
0,0)}m(),e.expectUint8(xr,0);let T=e.readASN1BitString();this.publicKey={identifiers:U,
data:T,all:e.data.subarray(y,e.offset)},g(),e.expectUint8(wu,0);let[E]=e.expectASN1Length();
e.expectUint8(te,0);let[b,q]=e.expectASN1Length(0);for(;q()>0;){e.expectUint8(te,
0);let[P,le]=e.expectASN1Length();e.expectUint8(He,0);let B=e.readASN1OID();if(B===
"2.5.29.17"){e.expectUint8(Me,0);let[N]=e.expectASN1Length(0);e.expectUint8(te,0);
let k=Su(e,$e);this.subjectAltNames=k.filter(H=>H.type===(2|$e)).map(H=>H.name),
N()}else if(B==="2.5.29.15"){e.expectUint8(Sr,0);let N=e.readASN1Boolean();e.expectUint8(
Me,0);let[k]=e.expectASN1Length(0);e.expectUint8(xr,0);let H=e.readASN1BitString(),
W=gu(H),G=new Set(bu.filter((O,se)=>W&1<<se));k(),this.keyUsage={critical:N,usages:G}}else if(B===
"2.5.29.37"){this.extKeyUsage={},e.expectUint8(Me,0);let[N]=e.expectASN1Length(0);
e.expectUint8(te,0);let[k,H]=e.expectASN1Length(0);for(;H()>0;){e.expectUint8(He,
0);let W=e.readASN1OID();W==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
W==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}k(),N()}else if(B==="2.\
5.29.35"){e.expectUint8(Me,0);let[N]=e.expectASN1Length(0);e.expectUint8(te,0);let[
k,H]=e.expectASN1Length(0);for(;H()>0;){let W=e.readUint8();if(W===($e|0)){let[G,
O]=e.expectASN1Length(0);this.authorityKeyIdentifier=e.readBytes(O()),G()}else if(W===
($e|1)){let[G,O]=e.expectASN1Length(0);e.skip(O(),0),G()}else if(W===($e|2)){let[
G,O]=e.expectASN1Length(0);e.skip(O(),0),G()}else if(W===($e|33)){let[G,O]=e.expectASN1Length(
0);e.skip(O(),0),G()}else throw new Error(`Unexpected data type ${W} in authorit\
yKeyIdentifier certificate extension`)}k(),N()}else if(B==="2.5.29.14"){e.expectUint8(
Me,0);let[N]=e.expectASN1Length(0);e.expectUint8(Me,0);let[k,H]=e.expectASN1Length(
0);this.subjectKeyIdentifier=e.readBytes(H()),k(),N()}else if(B==="2.5.29.19"){let N,
k=e.readUint8();if(k===Sr&&(N=e.readASN1Boolean(),k=e.readUint8()),k!==Me)throw new Error(
"Unexpected type in certificate basic constraints");let[H]=e.expectASN1Length(0);
e.expectUint8(te,0);let[W,G]=e.expectASN1Length(),O;G()>0&&(e.expectUint8(Sr,0),
O=e.readASN1Boolean());let se;if(G()>0){e.expectUint8(Dt,0);let ee=e.readASN1Length(
0);if(se=ee===1?e.readUint8():ee===2?e.readUint16():ee===3?e.readUint24():void 0,
se===void 0)throw new Error("Too many bytes in max path length in certificate ba\
sicConstraints")}W(),H(),this.basicConstraints={critical:N,ca:O,pathLength:se}}else
e.skip(le(),0);P()}b(),E(),i(),this.signedData=e.data.subarray(n,e.offset),e.expectUint8(
te,0);let[$,M]=e.expectASN1Length(0);e.expectUint8(He,0);let D=e.readASN1OID();if(M()>
0&&(e.expectUint8(Er,0),e.expectUint8(0,0)),$(),D!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${D})`);e.expectUint8(xr,0),this.signature=e.readASN1BitString(),t()}static fromPEM(r){
let e="[A-Z0-9 ]+",t=new RegExp(`-{5}BEGIN ${e}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END\
 ${e}-{5}`,"g"),n=[],i=null;for(;i=t.exec(r);){let s=i[1].replace(/[\r\n]/g,""),
a=fu(s),u=new this(a);n.push(u)}return n}subjectAltNameMatchingHost(r){let e=/[.][^.]+[.][^.]+$/;
return(this.subjectAltNames??[]).find(t=>{let n=t,i=r;if(e.test(r)&&e.test(n)&&n.
startsWith("*.")&&(n=n.slice(1),i=i.slice(i.indexOf("."))),n===i)return!0})}isValidAtMoment(r=new Date){
return r>=this.validityPeriod.notBefore&&r<=this.validityPeriod.notAfter}description(){
return"subject: "+ot.readableDN(this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Ue(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+ot.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
authority key id: ${Ue(this.authorityKeyIdentifier," ")}`:"")+`
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
signature algorithm: `+xu(Eu(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},_r=class extends ot{static{o(this,"st")}};o(qi,"pt");o(Au,
"jt");vu=new TextEncoder;o(Cu,"Vt");o(Di,"he");_u=class{static{o(this,"xt")}queue;outstandingRequest;constructor(){
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
{resolve:e,bytes:r},this.dequeue()})}},ki=class extends _u{static{o(this,"vt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}}});var Ur,Qi=X(()=>{Ur=`-----BEGIN CERTIFICATE-----
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
`});var $i={};he($i,{Socket:()=>Se,isIP:()=>Lu});function Lu(r){return 0}var ji,Se,kt=X(
()=>{"use strict";p();ji=nt(_e(),1);Oi();Qi();o(Lu,"isIP");Se=class r extends ji.EventEmitter{static{
o(this,"Socket")}static defaults={poolQueryViaFetch:!1,fetchConnectionCache:!1,webSocketConstructor:void 0,
wsProxy:e=>e+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
disableSNI:!1,pipelineConnect:"password",pipelineTLS:!1,rootCerts:Ur};static poolQueryViaFetch;_poolQueryViaFetch;get poolQueryViaFetch(){
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
e}static pipelineTLS;_pipelineTLS;get pipelineTLS(){return this._pipelineTLS??r.
pipelineTLS??r.defaults.pipelineTLS}set pipelineTLS(e){this._pipelineTLS=e}static rootCerts;_rootCerts;get rootCerts(){
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
"connect"),this.emit("ready"),this}async startTls(e){this.tlsState=1;let t=_r.fromPEM(
Ur),n=new ki(this.ws),i=n.read.bind(n),s=this.rawWrite.bind(this),[a,u]=await Di(
e,t,i,s,{useSNI:!this.disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([
83]):void 0});this.tlsRead=a,this.tlsWrite=u,this.tlsState=2,this.encrypted=!0,this.
authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let e=await this.tlsRead();if(e===void 0)break;{let t=w.from(e);this.emit(
"data",t)}}}rawWrite(e){if(!this.coalesceWrites){this.ws.send(e);return}if(this.
writeBuffer===void 0)this.writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let t=new Uint8Array(this.writeBuffer.length+e.
length);t.set(this.writeBuffer),t.set(e,this.writeBuffer.length),this.writeBuffer=
t}}write(e,t="utf8",n=i=>{}){return e.length===0?n():(typeof e=="string"&&(e=w.from(
e,t)),this.tlsState===0?this.rawWrite(e):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(e,t,n)):this.tlsWrite(e),!0)}end(e=w.alloc(0),t="utf8",n){
return this.write(e,t,()=>{this.ws.close(),n&&n()}),this}destroy(){return this.destroyed=
!0,this.end()}}});function ct(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],y=o((E,b)=>E>>>b|E<<32-b,
"rrot"),g=new Uint32Array(64),m=new Uint8Array(64),C=o(()=>{for(let B=0,N=0;B<16;B++,
N+=4)g[B]=m[N]<<24|m[N+1]<<16|m[N+2]<<8|m[N+3];for(let B=16;B<64;B++){let N=y(g[B-
15],7)^y(g[B-15],18)^g[B-15]>>>3,k=y(g[B-2],17)^y(g[B-2],19)^g[B-2]>>>10;g[B]=g[B-
16]+N+g[B-7]+k|0}let E=e,b=t,q=n,$=i,M=s,D=a,P=u,le=c;for(let B=0;B<64;B++){let N=y(
M,6)^y(M,11)^y(M,25),k=M&D^~M&P,H=le+N+k+f[B]+g[B]|0,W=y(E,2)^y(E,13)^y(E,22),G=E&
b^E&q^b&q,O=W+G|0;le=P,P=D,D=M,M=$+H|0,$=q,q=b,b=E,E=H+O|0}e=e+E|0,t=t+b|0,n=n+q|
0,i=i+$|0,s=s+M|0,a=a+D|0,u=u+P|0,c=c+le|0,h=0},"process"),U=o(E=>{typeof E=="st\
ring"&&(E=new TextEncoder().encode(E));for(let b=0;b<E.length;b++)m[h++]=E[b],h===
64&&C();l+=E.length},"add"),T=o(()=>{if(m[h++]=128,h==64&&C(),h+8>64){for(;h<64;)
m[h++]=0;C()}for(;h<58;)m[h++]=0;let E=l*8;m[h++]=E/1099511627776&255,m[h++]=E/4294967296&
255,m[h++]=E>>>24,m[h++]=E>>>16&255,m[h++]=E>>>8&255,m[h++]=E&255,C();let b=new Uint8Array(
32);return b[0]=e>>>24,b[1]=e>>>16&255,b[2]=e>>>8&255,b[3]=e&255,b[4]=t>>>24,b[5]=
t>>>16&255,b[6]=t>>>8&255,b[7]=t&255,b[8]=n>>>24,b[9]=n>>>16&255,b[10]=n>>>8&255,
b[11]=n&255,b[12]=i>>>24,b[13]=i>>>16&255,b[14]=i>>>8&255,b[15]=i&255,b[16]=s>>>
24,b[17]=s>>>16&255,b[18]=s>>>8&255,b[19]=s&255,b[20]=a>>>24,b[21]=a>>>16&255,b[22]=
a>>>8&255,b[23]=a&255,b[24]=u>>>24,b[25]=u>>>16&255,b[26]=u>>>8&255,b[27]=u&255,
b[28]=c>>>24,b[29]=c>>>16&255,b[30]=c>>>8&255,b[31]=c&255,b},"digest");return r===
void 0?{add:U,digest:T}:(U(r),T())}var Hi=X(()=>{"use strict";p();o(ct,"sha256")});var lt,Ki=X(()=>{"use strict";p();lt=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
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
_state:r._hex(this._state)}}});var Lr={};he(Lr,{createHash:()=>Iu,createHmac:()=>Bu,randomBytes:()=>Tu});function Tu(r){
return x.getRandomValues(w.alloc(r))}function Iu(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return w.from(ct(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?lt.hashStr(e):lt.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Bu(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=ct(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(ct(a),64),w.from(ct(u))}}}}}var Tr=X(()=>{p();Hi();Ki();o(Tu,"randomBytes");
o(Iu,"createHash");o(Bu,"createHmac")});var Br=I(Wi=>{"use strict";p();Wi.parse=function(r,e){return new Ir(r,e).parse()};
var Ir=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||Pu,this.position=0,this.entries=[],this.recorded=[],this.dimension=
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
0)throw new Error("array dimension not balanced");return this.entries}};function Pu(r){
return r}o(Pu,"identity")});var Pr=I((Lf,Gi)=>{p();var Ru=Br();Gi.exports={create:function(r,e){return{parse:function(){
return Ru.parse(r,e)}}}}});var Yi=I((If,zi)=>{"use strict";p();var Mu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Nu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Fu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,qu=/^-?infinity$/;
zi.exports=o(function(e){if(qu.test(e))return Number(e.replace("i","I"));var t=Mu.
exec(e);if(!t)return Du(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Vi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,y=ku(e);return y!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),Rr(i)&&f.setUTCFullYear(i),y!==0&&f.setTime(f.getTime()-y)):(f=new Date(
i,s,a,u,c,l,h),Rr(i)&&f.setFullYear(i)),f},"parseDate");function Du(r){var e=Nu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Vi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Rr(t)&&a.setFullYear(t),a}}o(Du,"getDate");
function ku(r){if(r.endsWith("+00"))return 0;var e=Fu.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(ku,"timeZoneOffset");function Vi(r){
return-(r-1)}o(Vi,"bcYearToNegativeYear");function Rr(r){return r>=0&&r<100}o(Rr,
"is0To99")});var Zi=I((Rf,Ji)=>{p();Ji.exports=Qu;var Ou=Object.prototype.hasOwnProperty;function Qu(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Ou.call(t,
n)&&(r[n]=t[n])}return r}o(Qu,"extend")});var ts=I((Ff,es)=>{"use strict";p();var ju=Zi();es.exports=Ke;function Ke(r){if(!(this instanceof
Ke))return new Ke(r);ju(this,ec(r))}o(Ke,"PostgresInterval");var $u=["seconds","\
minutes","hours","days","months","years"];Ke.prototype.toPostgres=function(){var r=$u.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Hu={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Ku=["years","months","days"],Wu=["hours","minutes","seconds"];Ke.
prototype.toISOString=Ke.prototype.toISO=function(){var r=Ku.map(t,this).join(""),
e=Wu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Hu[n]}};var Mr="([+-]?\\d+)",Gu=Mr+"\\s+years?",Vu=Mr+"\\s+mons?",zu=Mr+"\
\\s+days?",Yu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Ju=new RegExp([
Gu,Vu,zu,Yu].map(function(r){return"("+r+")?"}).join("\\s*")),Xi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},Zu=["hours","minutes","sec\
onds","milliseconds"];function Xu(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(Xu,"parseMilliseconds");function ec(r){if(!r)return{};var e=Ju.exec(
r),t=e[8]==="-";return Object.keys(Xi).reduce(function(n,i){var s=Xi[i],a=e[s];return!a||
(a=i==="milliseconds"?Xu(a):parseInt(a,10),!a)||(t&&~Zu.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(ec,"parse")});var ns=I((kf,rs)=>{"use strict";p();rs.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var ls=I((jf,cs)=>{p();var ht=Br(),ft=Pr(),Ot=Yi(),ss=ts(),as=ns();function Qt(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Qt,"allowNull");function os(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(os,"parseBool");function tc(r){return r?ht.parse(r,os):null}o(tc,"pars\
eBoolArray");function rc(r){return parseInt(r,10)}o(rc,"parseBaseTenInt");function Nr(r){
return r?ht.parse(r,Qt(rc)):null}o(Nr,"parseIntegerArray");function nc(r){return r?
ht.parse(r,Qt(function(e){return us(e).trim()})):null}o(nc,"parseBigIntegerArray");
var ic=o(function(r){if(!r)return null;var e=ft.create(r,function(t){return t!==
null&&(t=kr(t)),t});return e.parse()},"parsePointArray"),Fr=o(function(r){if(!r)
return null;var e=ft.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),de=o(function(r){if(!r)return null;var e=ft.
create(r);return e.parse()},"parseStringArray"),qr=o(function(r){if(!r)return null;
var e=ft.create(r,function(t){return t!==null&&(t=Ot(t)),t});return e.parse()},"\
parseDateArray"),sc=o(function(r){if(!r)return null;var e=ft.create(r,function(t){
return t!==null&&(t=ss(t)),t});return e.parse()},"parseIntervalArray"),ac=o(function(r){
return r?ht.parse(r,Qt(as)):null},"parseByteAArray"),Dr=o(function(r){return parseInt(
r,10)},"parseInteger"),us=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),is=o(function(r){return r?ht.parse(r,Qt(JSON.parse)):null},
"parseJsonArray"),kr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),oc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=kr(e);return s.radius=parseFloat(t),s},"parseCircle"),uc=o(function(r){r(20,
us),r(21,Dr),r(23,Dr),r(26,Dr),r(700,parseFloat),r(701,parseFloat),r(16,os),r(1082,
Ot),r(1114,Ot),r(1184,Ot),r(600,kr),r(651,de),r(718,oc),r(1e3,tc),r(1001,ac),r(1005,
Nr),r(1007,Nr),r(1028,Nr),r(1016,nc),r(1017,ic),r(1021,Fr),r(1022,Fr),r(1231,Fr),
r(1014,de),r(1015,de),r(1008,de),r(1009,de),r(1040,de),r(1041,de),r(1115,qr),r(1182,
qr),r(1185,qr),r(1186,ss),r(1187,sc),r(17,as),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,is),r(3807,is),r(3907,de),r(2951,de),r(791,de),r(1183,
de),r(1270,de)},"init");cs.exports={init:uc}});var fs=I((Kf,hs)=>{"use strict";p();var ue=1e6;function cc(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%ue,e=e/ue>>>0,a=4294967296*s+t,t=a/ue>>>0,u=""+(a-ue*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ue,e=e/ue>>>
0,a=4294967296*s+t,t=a/ue>>>0,u=""+(a-ue*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ue,e=e/ue>>>0,a=4294967296*s+t,t=a/
ue>>>0,u=""+(a-ue*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%ue,a=4294967296*s+t,u=""+a%ue,n+u+i}o(cc,"readInt8");hs.
exports=cc});var ms=I((Vf,ws)=>{p();var lc=fs(),Q=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(g,m,C){
return g*Math.pow(2,C)+m};var s=t>>3,a=o(function(g){return n?~g&255:g},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var y=(e+t)%8;return y>0&&
(l=i(l,a(r[h])>>8-y,y)),l},"parseBits"),ys=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=Q(r,1),s=Q(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var y=1;y<=f;y++)a/=2,(h&1<<f-y)>0&&(l+=a);return l},"parsePrecisionBits"),
c=Q(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),hc=o(function(r){return Q(r,1)==1?-1*
(Q(r,15,1,!0)+1):Q(r,15,1)},"parseInt16"),ds=o(function(r){return Q(r,1)==1?-1*(Q(
r,31,1,!0)+1):Q(r,31,1)},"parseInt32"),fc=o(function(r){return ys(r,23,8)},"pars\
eFloat32"),dc=o(function(r){return ys(r,52,11)},"parseFloat64"),pc=o(function(r){
var e=Q(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,Q(r,16,16)),n=0,i=[],
s=Q(r,16),a=0;a<s;a++)n+=Q(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,Q(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ps=o(function(r,e){var t=Q(
e,1),n=Q(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),dt=o(function(r){for(var e=Q(r,32),t=Q(r,32,32),
n=Q(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=Q(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=Q(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
Q(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],y;if(l.length>1){var g=l.shift();for(y=0;y<g;y++)f[y]=c(l,h);l.unshift(
g)}else for(y=0;y<l[0];y++)f[y]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),yc=o(function(r){return r.toString("utf8")},"parseText"),wc=o(function(r){return r===
null?null:Q(r,8)>0},"parseBool"),mc=o(function(r){r(20,lc),r(21,hc),r(23,ds),r(26,
ds),r(1700,pc),r(700,fc),r(701,dc),r(16,wc),r(1114,ps.bind(null,!1)),r(1184,ps.bind(
null,!0)),r(1e3,dt),r(1007,dt),r(1016,dt),r(1008,dt),r(1009,dt),r(25,yc)},"init");
ws.exports={init:mc}});var Ss=I((Jf,gs)=>{p();gs.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var wt=I(yt=>{p();var gc=ls(),Sc=ms(),Ec=Pr(),xc=Ss();yt.getTypeParser=bc;yt.setTypeParser=
Ac;yt.arrayParser=Ec;yt.builtins=xc;var pt={text:{},binary:{}};function Es(r){return String(
r)}o(Es,"noParse");function bc(r,e){return e=e||"text",pt[e]&&pt[e][r]||Es}o(bc,
"getTypeParser");function Ac(r,e,t){typeof e=="function"&&(t=e,e="text"),pt[e][r]=
t}o(Ac,"setTypeParser");gc.init(function(r,e){pt.text[r]=e});Sc.init(function(r,e){
pt.binary[r]=e})});var mt=I((rd,Or)=>{"use strict";p();Or.exports={host:"localhost",user:S.platform===
"win32"?S.env.USERNAME:S.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var We=wt(),vc=We.getTypeParser(
20,"text"),Cc=We.getTypeParser(1016,"text");Or.exports.__defineSetter__("parseIn\
t8",function(r){We.setTypeParser(20,"text",r?We.getTypeParser(23,"text"):vc),We.
setTypeParser(1016,"text",r?We.getTypeParser(1007,"text"):Cc)})});var gt=I((id,bs)=>{"use strict";p();var _c=(Tr(),z(Lr)),Uc=mt();function Lc(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Lc,"escapeElement");
function xs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+xs(r[t]):r[t]instanceof w?e+="\\\\x"+r[t].
toString("hex"):e+=Lc(jt(r[t]));return e=e+"}",e}o(xs,"arrayString");var jt=o(function(r,e){
if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.isView(r)){var t=w.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Uc.parseInputDatesAsUTC?
Bc(r):Ic(r):Array.isArray(r)?xs(r):typeof r=="object"?Tc(r,e):r.toString()},"pre\
pareValue");function Tc(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),jt(r.toPostgres(jt),e)}return JSON.stringify(r)}
o(Tc,"prepareObject");function ie(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}o(
ie,"pad");function Ic(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=ie(t,4)+"-"+ie(r.getMonth()+1,2)+"-"+ie(r.getDate(),2)+"\
T"+ie(r.getHours(),2)+":"+ie(r.getMinutes(),2)+":"+ie(r.getSeconds(),2)+"."+ie(r.
getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=ie(Math.floor(e/60),2)+
":"+ie(e%60,2),n&&(i+=" BC"),i}o(Ic,"dateToString");function Bc(r){var e=r.getUTCFullYear(),
t=e<1;t&&(e=Math.abs(e)+1);var n=ie(e,4)+"-"+ie(r.getUTCMonth()+1,2)+"-"+ie(r.getUTCDate(),
2)+"T"+ie(r.getUTCHours(),2)+":"+ie(r.getUTCMinutes(),2)+":"+ie(r.getUTCSeconds(),
2)+"."+ie(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}o(Bc,"dat\
eToStringUTC");function Pc(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e==
"function"?r.callback=e:r.values=e),t&&(r.callback=t),r}o(Pc,"normalizeQueryConf\
ig");var Qr=o(function(r){return _c.createHash("md5").update(r,"utf-8").digest("\
hex")},"md5"),Rc=o(function(r,e,t){var n=Qr(e+r),i=Qr(w.concat([w.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");bs.exports={prepareValue:o(function(e){return jt(
e)},"prepareValueWrapper"),normalizeQueryConfig:Pc,postgresMd5PasswordHash:Rc,md5:Qr}});var xt={};he(xt,{default:()=>Mc});var Mc,bt=X(()=>{p();Mc={}});var Ls=I((pd,Us)=>{"use strict";p();var jr=(Tr(),z(Lr));function Nc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=jr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Nc,"startSession");function Fc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=kc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=jc(e,
i,n.iteration),a=Ge(s,"Client Key"),u=Qc(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,y=Ge(u,f),g=_s(
a,y),m=g.toString("base64"),C=Ge(s,"Server Key"),U=Ge(C,f);r.message="SASLRespon\
se",r.serverSignature=U.toString("base64"),r.response=h+",p="+m}o(Fc,"continueSe\
ssion");function qc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Oc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(qc,"finalizeSession");function Dc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(Dc,"isPrintableC\
hars");function vs(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(vs,"isBase64");function Cs(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(Cs,"parseAttributePairs");function kc(r){let e=Cs(
r),t=e.get("r");if(t){if(!Dc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!vs(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(kc,"parseServerFirstMe\
ssage");function Oc(r){let t=Cs(r).get("v");if(t){if(!vs(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(Oc,"parseServerFinalMessage");function _s(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(_s,"xorBuffers");function Qc(r){return jr.createHash(
"sha256").update(r).digest()}o(Qc,"sha256");function Ge(r,e){return jr.createHmac(
"sha256",r).update(e).digest()}o(Ge,"hmacSha256");function jc(r,e,t){for(var n=Ge(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Ge(r,n),i=_s(i,n);return i}
o(jc,"Hi");Us.exports={startSession:Nc,continueSession:Fc,finalizeSession:qc}});var $r={};he($r,{join:()=>$c});function $c(...r){return r.join("/")}var Hr=X(()=>{
p();o($c,"join")});var Kr={};he(Kr,{stat:()=>Hc});function Hc(r,e){e(new Error("No filesystem"))}var Wr=X(
()=>{p();o(Hc,"stat")});var Gr={};he(Gr,{default:()=>Kc});var Kc,Vr=X(()=>{p();Kc={}});var Ts={};he(Ts,{StringDecoder:()=>zr});var zr,Is=X(()=>{p();zr=class{static{o(this,
"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Ms=I((vd,Rs)=>{"use strict";p();var{Transform:Wc}=(Vr(),z(Gr)),{StringDecoder:Gc}=(Is(),z(Ts)),
Te=Symbol("last"),$t=Symbol("decoder");function Vc(r,e,t){let n;if(this.overflow){
if(n=this[$t].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Te]+=this[$t].write(r),n=this[Te].split(this.matcher);this[Te]=
n.pop();for(let i=0;i<n.length;i++)try{Ps(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Te].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(Vc,"transform");function zc(r){
if(this[Te]+=this[$t].end(),this[Te])try{Ps(this,this.mapper(this[Te]))}catch(e){
return r(e)}r()}o(zc,"flush");function Ps(r,e){e!==void 0&&r.push(e)}o(Ps,"push");
function Bs(r){return r}o(Bs,"noop");function Yc(r,e,t){switch(r=r||/\r?\n/,e=e||
Bs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Bs)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Vc,t.flush=zc,t.readableObjectMode=!0;
let n=new Wc(t);return n[Te]="",n[$t]=new Gc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(Yc,"split");Rs.exports=Yc});var qs=I((Ud,be)=>{"use strict";p();var Ns=(Hr(),z($r)),Jc=(Vr(),z(Gr)).Stream,Zc=Ms(),
Fs=(bt(),z(xt)),Xc=5432,Ht=S.platform==="win32",At=S.stderr,el=56,tl=7,rl=61440,
nl=32768;function il(r){return(r&rl)==nl}o(il,"isRegFile");var Ve=["host","port",
"database","user","password"],Yr=Ve.length,sl=Ve[Yr-1];function Jr(){var r=At instanceof
Jc&&At.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);At.write(Fs.format.apply(Fs,e))}}o(Jr,"warn");Object.defineProperty(be.exports,
"isWin",{get:function(){return Ht},set:function(r){Ht=r}});be.exports.warnTo=function(r){
var e=At;return At=r,e};be.exports.getFileName=function(r){var e=r||S.env,t=e.PGPASSFILE||
(Ht?Ns.join(e.APPDATA||"./","postgresql","pgpass.conf"):Ns.join(e.HOME||"./",".p\
gpass"));return t};be.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(S.env,"PGPASSWORD")?!1:Ht?!0:(e=e||"<unkn>",il(r.mode)?r.mode&(el|tl)?(Jr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(Jr('WARNING: password file "%s" is not a plain file',
e),!1))};var al=be.exports.match=function(r,e){return Ve.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||Xc)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};be.exports.getPassword=function(r,e,t){var n,i=e.pipe(Zc());function s(c){var l=ol(
c);l&&ul(l)&&al(r,l)&&(n=l[sl],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),Jr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var ol=be.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(h,f,y){var g=r.substring(f,
y);Object.hasOwnProperty.call(S.env,"PGPASS_NO_DEESCAPE")||(g=g.replace(/\\([:\\])/g,
"$1")),a[Ve[h]]=g},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Yr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=
Object.keys(a).length===Yr?a:null,a},ul=be.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<Ve.length;t+=
1){var n=e[t],i=r[Ve[t]]||"",s=n(i);if(!s)return!1}return!0}});var ks=I((Bd,Zr)=>{"use strict";p();var Id=(Hr(),z($r)),Ds=(Wr(),z(Kr)),Kt=qs();
Zr.exports=function(r,e){var t=Kt.getFileName();Ds.stat(t,function(n,i){if(n||!Kt.
usePgPass(i,t))return e(void 0);var s=Ds.createReadStream(t);Kt.getPassword(r,s,
e)})};Zr.exports.warnTo=Kt.warnTo});var Xr=I((Rd,Os)=>{"use strict";p();var cl=wt();function Wt(r){this._types=r||cl,
this.text={},this.binary={}}o(Wt,"TypeOverrides");Wt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
Wt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};Wt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Os.exports=Wt});var Qs={};he(Qs,{default:()=>ll});var ll,js=X(()=>{p();ll={}});var Hs=I((qd,$s)=>{"use strict";p();var hl=(mr(),z(gi)),en=(Wr(),z(Kr));function tn(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=hl.
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
return t}o(tn,"parse");$s.exports=tn;tn.parse=tn});var Gt=I((Od,Gs)=>{"use strict";p();var fl=(js(),z(Qs)),Ws=mt(),Ks=Hs().parse,ae=o(
function(r,e,t){return t===void 0?t=S.env["PG"+r.toUpperCase()]:t===!1||(t=S.env[t]),
e[r]||t||Ws[r]},"val"),dl=o(function(){switch(S.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Ws.ssl},"readSSLConfigFromEnvironment"),ze=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),pe=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+ze(n))},"ad\
d"),rn=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Ks(e):e||{},e.connectionString&&(e=Object.assign({},e,Ks(e.connectionString))),
this.user=ae("user",e),this.database=ae("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(ae("port",e),10),this.host=ae("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:ae(
"password",e)}),this.binary=ae("binary",e),this.options=ae("options",e),this.ssl=
typeof e.ssl>"u"?dl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
ae("client_encoding",e),this.replication=ae("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=ae("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=ae("fallback_application_name",e,!1),this.
statement_timeout=ae("statement_timeout",e,!1),this.lock_timeout=ae("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=ae("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=ae("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=S.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
pe(t,this,"user"),pe(t,this,"password"),pe(t,this,"port"),pe(t,this,"application\
_name"),pe(t,this,"fallback_application_name"),pe(t,this,"connect_timeout"),pe(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(pe(t,n,"sslmode"),pe(t,n,"sslca"),pe(t,n,"sslkey"),pe(t,n,"sslcert"),
pe(t,n,"sslrootcert"),this.database&&t.push("dbname="+ze(this.database)),this.replication&&
t.push("replication="+ze(this.replication)),this.host&&t.push("host="+ze(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+ze(this.client_encoding)),fl.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+ze(s)),e(null,t.join(" ")))})}};Gs.exports=rn});var Ys=I(($d,zs)=>{"use strict";p();var pl=wt(),Vs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
nn=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
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
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=pl.getTypeParser(
n.dataTypeID,n.format||"text")}}};zs.exports=nn});var ea=I((Wd,Xs)=>{"use strict";p();var{EventEmitter:yl}=_e(),Js=Ys(),Zs=gt(),sn=class extends yl{static{
o(this,"Query")}constructor(e,t,n){super(),e=Zs.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,S.domain&&e.callback&&(this.callback=S.domain.bind(e.callback)),
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
S.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
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
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};Xs.exports=sn});var En=I(L=>{"use strict";p();Object.defineProperty(L,"__esModule",{value:!0});L.
NoticeMessage=L.DataRowMessage=L.CommandCompleteMessage=L.ReadyForQueryMessage=L.
NotificationResponseMessage=L.BackendKeyDataMessage=L.AuthenticationMD5Password=
L.ParameterStatusMessage=L.ParameterDescriptionMessage=L.RowDescriptionMessage=L.
Field=L.CopyResponse=L.CopyDataMessage=L.DatabaseError=L.copyDone=L.emptyQuery=L.
replicationStart=L.portalSuspended=L.noData=L.closeComplete=L.bindComplete=L.parseComplete=
void 0;L.parseComplete={name:"parseComplete",length:5};L.bindComplete={name:"bin\
dComplete",length:5};L.closeComplete={name:"closeComplete",length:5};L.noData={name:"\
noData",length:5};L.portalSuspended={name:"portalSuspended",length:5};L.replicationStart=
{name:"replicationStart",length:4};L.emptyQuery={name:"emptyQuery",length:4};L.copyDone=
{name:"copyDone",length:4};var an=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};L.DatabaseError=an;
var on=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};L.CopyDataMessage=on;var un=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};L.CopyResponse=un;var cn=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};L.Field=cn;var ln=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};L.RowDescriptionMessage=
ln;var hn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};L.ParameterDescriptionMessage=hn;var fn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};L.ParameterStatusMessage=fn;
var dn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};L.AuthenticationMD5Password=
dn;var pn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};L.BackendKeyDataMessage=
pn;var yn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};L.NotificationResponseMessage=yn;var wn=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};L.ReadyForQueryMessage=wn;var mn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};L.CommandCompleteMessage=
mn;var gn=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};L.DataRowMessage=gn;var Sn=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};L.NoticeMessage=Sn});var ta=I(Vt=>{"use strict";p();Object.defineProperty(Vt,"__esModule",{value:!0});
Vt.Writer=void 0;var xn=class{static{o(this,"Writer")}constructor(e=256){this.size=
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
size),t}};Vt.Writer=xn});var na=I(Yt=>{"use strict";p();Object.defineProperty(Yt,"__esModule",{value:!0});
Yt.serialize=void 0;var bn=ta(),j=new bn.Writer,wl=o(r=>{j.addInt16(3).addInt16(
0);for(let n of Object.keys(r))j.addCString(n).addCString(r[n]);j.addCString("cl\
ient_encoding").addCString("UTF8");var e=j.addCString("").flush(),t=e.length+4;return new bn.
Writer().addInt32(t).add(e).flush()},"startup"),ml=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),gl=o(r=>j.
addCString(r).flush(112),"password"),Sl=o(function(r,e){return j.addCString(r).addInt32(
w.byteLength(e)).addString(e),j.flush(112)},"sendSASLInitialResponseMessage"),El=o(
function(r){return j.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),xl=o(
r=>j.addCString(r).flush(81),"query"),ra=[],bl=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ra;for(var n=t.length,
i=j.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return j.
flush(80)},"parse"),Ye=new bn.Writer,Al=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(j.addInt16(0),Ye.addInt32(-1)):n instanceof w?(j.
addInt16(1),Ye.addInt32(n.length),Ye.add(n)):(j.addInt16(0),Ye.addInt32(w.byteLength(
n)),Ye.addString(n))}},"writeValues"),vl=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ra,s=i.length;return j.addCString(e).addCString(t),
j.addInt16(s),Al(i,r.valueMapper),j.addInt16(s),j.add(Ye.flush()),j.addInt16(n?1:
0),j.flush(66)},"bind"),Cl=w.from([69,0,0,0,9,0,0,0,0,0]),_l=o(r=>{if(!r||!r.portal&&
!r.rows)return Cl;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Ul=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),An=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Ll=j.addCString("P").flush(68),Tl=j.addCString("S").flush(68),
Il=o(r=>r.name?An(68,`${r.type}${r.name||""}`):r.type==="P"?Ll:Tl,"describe"),Bl=o(
r=>{let e=`${r.type}${r.name||""}`;return An(67,e)},"close"),Pl=o(r=>j.add(r).flush(
100),"copyData"),Rl=o(r=>An(102,r),"copyFail"),zt=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Ml=zt(72),Nl=zt(83),Fl=zt(88),ql=zt(99),Dl={startup:wl,password:gl,
requestSsl:ml,sendSASLInitialResponseMessage:Sl,sendSCRAMClientFinalMessage:El,query:xl,
parse:bl,bind:vl,execute:_l,describe:Il,close:Bl,flush:()=>Ml,sync:()=>Nl,end:()=>Fl,
copyData:Pl,copyDone:()=>ql,copyFail:Rl,cancel:Ul};Yt.serialize=Dl});var ia=I(Jt=>{"use strict";p();Object.defineProperty(Jt,"__esModule",{value:!0});
Jt.BufferReader=void 0;var kl=w.allocUnsafe(0),vn=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=kl,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};Jt.BufferReader=vn});var sa={};he(sa,{default:()=>Ol});var Ol,aa=X(()=>{p();Ol={}});var ca=I(Je=>{"use strict";p();var Ql=Je&&Je.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Je,"__esModule",{value:!0});Je.
Parser=void 0;var K=En(),jl=ia(),$l=Ql((aa(),z(sa))),Cn=1,Hl=4,oa=Cn+Hl,ua=w.allocUnsafe(
0),_n=class{static{o(this,"Parser")}constructor(e){if(this.buffer=ua,this.bufferLength=
0,this.bufferOffset=0,this.reader=new jl.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(
e);let n=this.bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+oa<=n;){
let s=this.buffer[i],a=this.buffer.readUInt32BE(i+Cn),u=Cn+a;if(u+i<=n){let c=this.
handlePacket(i+oa,s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=ua,this.
bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return K.bindComplete;case 49:return K.parseComplete;case 51:return K.
closeComplete;case 110:return K.noData;case 115:return K.portalSuspended;case 99:
return K.copyDone;case 87:return K.replicationStart;case 73:return K.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:$l.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new K.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new K.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new K.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,a=this.reader.int16(),u=new K.CopyResponse(t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.reader.cstring();return new K.
NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new K.RowDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new K.
Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new K.ParameterDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<i;a++){
let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new K.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new K.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new K.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new K.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&s.mechanisms.push(a);while(a);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=
this.reader.cstring(),a=this.reader.string(1);let u=s.M,c=i==="notice"?new K.NoticeMessage(
t,u):new K.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};Je.Parser=_n});var Un=I(Ie=>{"use strict";p();Object.defineProperty(Ie,"__esModule",{value:!0});
Ie.DatabaseError=Ie.serialize=Ie.parse=void 0;var Kl=En();Object.defineProperty(
Ie,"DatabaseError",{enumerable:!0,get:function(){return Kl.DatabaseError}});var Wl=na();
Object.defineProperty(Ie,"serialize",{enumerable:!0,get:function(){return Wl.serialize}});
var Gl=ca();function Vl(r,e){let t=new Gl.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(Vl,"parse");Ie.parse=Vl});var la={};he(la,{connect:()=>zl});function zl(r){let{socket:e,servername:t}=r;return e.
startTls(t),e}var ha=X(()=>{p();o(zl,"connect")});var Tn=I((wp,pa)=>{"use strict";p();var fa=(kt(),z($i)),Yl=_e().EventEmitter,{parse:Jl,
serialize:J}=Un(),da=J.flush(),Zl=J.sync(),Xl=J.end(),Ln=class extends Yl{static{
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
 establishing an SSL connection"))}var u=(ha(),z(la));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),fa.isIP(t)===
0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),Jl(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(J.requestSsl())}startup(e){this.stream.write(J.startup(e))}cancel(e,t){
this._send(J.cancel(e,t))}password(e){this._send(J.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(J.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(J.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(J.query(e))}parse(e){this._send(J.parse(
e))}bind(e){this._send(J.bind(e))}execute(e){this._send(J.execute(e))}flush(){this.
stream.writable&&this.stream.write(da)}sync(){this._ending=!0,this._send(da),this.
_send(Zl)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=
!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(Xl,()=>{this.stream.end()})}close(e){this._send(J.close(e))}describe(e){
this._send(J.describe(e))}sendCopyFromChunk(e){this._send(J.copyData(e))}endCopyFrom(){
this._send(J.copyDone())}sendCopyFail(e){this._send(J.copyFail(e))}};pa.exports=
Ln});var ma=I((Ep,wa)=>{"use strict";p();var eh=_e().EventEmitter,Sp=(bt(),z(xt)),th=gt(),
In=Ls(),rh=ks(),nh=Xr(),ih=Gt(),ya=ea(),sh=mt(),ah=Tn(),Zt=class extends eh{static{
o(this,"Client")}constructor(e){super(),this.connectionParameters=new ih(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||A.Promise,this._types=new nh(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new ah({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||sh.binary,this.processID=null,
this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.
key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=
t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=o(n=>{S.nextTick(()=>{n.handleError(
e,this.connection)})},"enqueueError");this.activeQuery&&(t(this.activeQuery),this.
activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.length=0}_connect(e){
var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse\
 a client.");S.nextTick(()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,
this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=setTimeout(()=>{n.
_ending=!0,n.stream.destroy(new Error("timeout expired"))},this._connectionTimeoutMillis)),
this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+this.port):
n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),
this._attachListeners(n),n.once("end",()=>{let i=this._ending?new Error("Connect\
ion terminated"):new Error("Connection terminated unexpectedly");clearTimeout(this.
connectionTimeoutHandle),this._errorAllQueries(i),this._ending||(this._connecting&&
!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),S.nextTick(
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
"error",n)}):this.password!==null?e():rh(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=th.postgresMd5PasswordHash(this.user,this.password,
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
e&&S.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,a,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(a=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new ya(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,y)=>f?h(f):l(y)}))),
a&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");S.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},a),i.callback=
(l,h)=>{clearTimeout(u),c(l,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(S.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(S.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};Zt.Query=ya;wa.exports=Zt});var xa=I((Ap,Ea)=>{"use strict";p();var oh=_e().EventEmitter,ga=o(function(){},"\
NOOP"),Sa=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Bn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},Ze=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function uh(){throw new Error("Release called on client which \
has already been released to the pool.")}o(uh,"throwOnDoubleRelease");function Xt(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(Xt,"promisify");function ch(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(ch,"makeIdleListener");var Pn=class extends oh{static{o(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||er().Client,this.Promise=this.options.Promise||A.
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
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=Xt(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&S.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new Ze(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(a),t.callback(u,c,l)},
"queueCallback"),s=new Ze(i),a=setTimeout(()=>{Sa(this._pendingQueue,u=>u.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new Ze(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=ch(this,t);this.log("checking client timeout");let i,
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
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&uh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Bn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Xt(this.Promise,e);
return v(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=Xt(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Xt(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};Ea.exports=Pn});var ba={};he(ba,{default:()=>lh});var lh,Aa=X(()=>{p();lh={}});var va=I((Up,hh)=>{hh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var Ua=I((Lp,_a)=>{"use strict";p();var Ca=_e().EventEmitter,fh=(bt(),z(xt)),Rn=gt(),
Xe=_a.exports=function(r,e,t){Ca.call(this),r=Rn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};fh.inherits(
Xe,Ca);var dh={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Xe.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=dh[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Xe.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Xe.prototype.catch=function(r){return this._getPromise().
catch(r)};Xe.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Xe.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,v(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(S.domain&&(t=S.domain.bind(
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
text,t)}});var Ba=I((Pp,Ia)=>{"use strict";p();var ph=(Aa(),z(ba)),yh=Xr(),Bp=va(),La=_e().
EventEmitter,wh=(bt(),z(xt)),mh=Gt(),Ta=Ua(),ce=Ia.exports=function(r){La.call(this),
r=r||{},this._Promise=r.Promise||A.Promise,this._types=new yh(r.types),this.native=
new ph({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new mh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};ce.Query=Ta;wh.inherits(ce,La);ce.prototype._errorAllQueries=
function(r){let e=o(t=>{S.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};ce.prototype._connect=
function(r){var e=this;if(this._connecting){S.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};ce.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};ce.prototype.query=function(r,e,t){var n,
i,s,a,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new Ta(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
h,l=f}),n.callback=(h,f)=>h?l(h):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");S.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{clearTimeout(a),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,S.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,S.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
ce.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),S.nextTick(()=>{e.emit("end"),r&&r()})}),t};ce.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};ce.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};ce.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};ce.prototype.ref=function(){};
ce.prototype.unref=function(){};ce.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};ce.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Mn=I((Np,Pa)=>{"use strict";p();Pa.exports=Ba()});var er=I((Dp,vt)=>{"use strict";p();var gh=ma(),Sh=mt(),Eh=Tn(),xh=xa(),{DatabaseError:bh}=Un(),
Ah=o(r=>class extends xh{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),Nn=o(function(r){this.defaults=Sh,this.Client=r,this.Query=this.Client.
Query,this.Pool=Ah(this.Client),this._pools=[],this.Connection=Eh,this.types=wt(),
this.DatabaseError=bh},"PG");typeof S.env.NODE_PG_FORCE_NATIVE<"u"?vt.exports=new Nn(
Mn()):(vt.exports=new Nn(gh),Object.defineProperty(vt.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Nn(Mn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(vt.exports,"native",{value:r}),r}}))});p();p();var Lo=Object.getOwnPropertyNames,To=Object.getOwnPropertySymbols,Io=Object.prototype.
hasOwnProperty;function ui(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(ui,"combineComparators");function Pt(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Pt,"createIsCircular");
function ci(r){return Lo(r).concat(To(r))}o(ci,"getStrictProperties");var wi=Object.
hasOwn||function(r,e){return Io.call(r,e)};function Qe(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(Qe,"sameValueZeroEqual");var mi="_owner",li=Object.getOwnPropertyDescriptor,
hi=Object.keys;function Bo(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(Bo,"areArraysEqual");function Po(r,e){
return Qe(r.getTime(),e.getTime())}o(Po,"areDatesEqual");function fi(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,y=f[0],g=f[1],
m=u.value,C=m[0],U=m[1];!l&&!n[h]&&(l=t.equals(y,C,s,h,r,e,t)&&t.equals(g,U,y,C,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(fi,"areMapsEqual");function Ro(r,e,t){
var n=hi(r),i=n.length;if(hi(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===mi&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!wi(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(Ro,"areObjectsEqual");function st(r,e,t){var n=ci(
r),i=n.length;if(ci(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===mi&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!wi(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=li(r,s),u=li(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(st,"a\
reObjectsEqualStrict");function Mo(r,e){return Qe(r.valueOf(),e.valueOf())}o(Mo,
"arePrimitiveWrappersEqual");function No(r,e){return r.source===e.source&&r.flags===
e.flags}o(No,"areRegExpsEqual");function di(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(di,"areSetsEqual");function Fo(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(Fo,"are\
TypedArraysEqual");var qo="[object Arguments]",Do="[object Boolean]",ko="[object\
 Date]",Oo="[object Map]",Qo="[object Number]",jo="[object Object]",$o="[object \
RegExp]",Ho="[object Set]",Ko="[object String]",Wo=Array.isArray,pi=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,yi=Object.assign,Go=Object.
prototype.toString.call.bind(Object.prototype.toString);function Vo(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,y){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var g=h.constructor;if(g!==f.constructor)return!1;if(g===Object)return i(
h,f,y);if(Wo(h))return e(h,f,y);if(pi!=null&&pi(h))return c(h,f,y);if(g===Date)return t(
h,f,y);if(g===RegExp)return a(h,f,y);if(g===Map)return n(h,f,y);if(g===Set)return u(
h,f,y);var m=Go(h);return m===ko?t(h,f,y):m===$o?a(h,f,y):m===Oo?n(h,f,y):m===Ho?
u(h,f,y):m===jo?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,y):m===
qo?i(h,f,y):m===Do||m===Qo||m===Ko?s(h,f,y):!1},"comparator")}o(Vo,"createEquali\
tyComparator");function zo(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?st:Bo,areDatesEqual:Po,areMapsEqual:n?ui(fi,st):fi,areObjectsEqual:n?
st:Ro,arePrimitiveWrappersEqual:Mo,areRegExpsEqual:No,areSetsEqual:n?ui(di,st):di,
areTypedArraysEqual:n?st:Fo};if(t&&(i=yi({},i,t(i))),e){var s=Pt(i.areArraysEqual),
a=Pt(i.areMapsEqual),u=Pt(i.areObjectsEqual),c=Pt(i.areSetsEqual);i=yi({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(zo,"createEqualityC\
omparatorConfig");function Yo(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(Yo,"createInternalEqualityComparator");function Jo(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,y=f===void 0?e?new WeakMap:void 0:f,g=h.meta;return t(c,l,{cache:y,equals:i,
meta:g,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(Jo,"createIsEqual");
var yr=Ce(),qh=Ce({strict:!0}),Dh=Ce({circular:!0}),kh=Ce({circular:!0,strict:!0}),
Oh=Ce({createInternalComparator:function(){return Qe}}),Qh=Ce({strict:!0,createInternalComparator:function(){
return Qe}}),jh=Ce({circular:!0,createInternalComparator:function(){return Qe}}),
$h=Ce({circular:!0,createInternalComparator:function(){return Qe},strict:!0});function Ce(r){
r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,
i=r.createState,s=r.strict,a=s===void 0?!1:s,u=zo(r),c=Vo(u),l=n?n(c):Yo(c);return Jo(
{circular:t,comparator:c,createState:i,equals:l,strict:a})}o(Ce,"createCustomEqu\
al");p();p();mr();kt();var As=nt(gt());var St=class extends Error{static{o(this,"NeonDbError")}code=null;name="NeonDbEr\
ror"};function Et(r,{arrayMode:e,fullResults:t,queryCallback:n,resultCallback:i}={}){
let s=wr(r),{protocol:a,username:u,password:c,hostname:l,pathname:h}=s;if(a!=="p\
ostgres:"&&a!=="postgresql:"||!l||!u||!c||!h)throw new Error("Database connectio\
n string format should be: postgres://user:password@host.tld/dbname?option=value");
return async function(f,...y){let g=e,m=t,C;if(typeof f=="string"){C=f;let E=y[1];
E!==void 0&&(E.arrayMode!==void 0&&(g=E.arrayMode),E.fullResults!==void 0&&(m=E.
fullResults)),y=y[0]??[]}else{C="";for(let E=0;E<f.length;E++)C+=f[E],E<y.length&&
(C+="$"+(E+1))}y=y.map(E=>(0,As.prepareValue)(E));let U,T;try{let E=`https://${l}\
/sql`,b=Se.fetchConnectionCache===!0?{"Neon-Pool-Opt-In":"true"}:{};U={query:C,params:y},
n&&n(U),T=await fetch(E,{body:JSON.stringify(U),method:"POST",headers:{"Neon-Con\
nection-String":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true",...b}})}catch(E){
throw new St(`Error connecting to database: ${E.message}`)}if(T.ok){let E=await T.
json(),b=E.fields.map(M=>M.name),q=E.fields.map(M=>Le.types.getTypeParser(M.dataTypeID)),
$=g===!0?E.rows.map(M=>M.map((D,P)=>D===null?null:q[P](D))):E.rows.map(M=>Object.
fromEntries(M.map((D,P)=>[b[P],D===null?null:q[P](D)])));return i&&i(U,E,$,{arrayMode:g,
fullResults:m}),m?(E.viaNeonFetch=!0,E.rowAsArray=g,E.rows=$,E):$}else{let{status:E}=T;
if(E===400){let{message:b,code:q}=await T.json(),$=new St(b);throw $.code=q,$}else{
let b=await T.text();throw new St(`Database error (HTTP status ${E}): ${b}`)}}}}
o(Et,"neon");var tr=nt(er());kt();var Ra=nt(Gt()),Le=nt(er());var Ae=class extends tr.Client{static{o(this,"NeonClient")}get neonConfig(){return this.
connection.stream}connect(e){let{neonConfig:t}=this;t.forceDisablePgSSL&&(this.ssl=
this.connection.ssl=!1),this.ssl&&t.useSecureWebSocket&&console.warn("SSL is ena\
bled for both Postgres (e.g. ?sslmode=require in the connection string + forceDi\
sablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double\
 encryption will increase latency and CPU usage. It may be appropriate to disabl\
e SSL in the Postgres connection parameters or set forceDisablePgSSL = true."),this.
host==="localhost"&&console.warn("The database host is 'localhost', which is the\
 default host when none is set. If that's intentional, please ignore this warnin\
g. If not, perhaps an environment variable has not been set, or has not been pas\
sed to the library?");let n=super.connect(e),i=t.pipelineTLS&&this.ssl,s=t.pipelineConnect===
"password";if(!i&&!t.pipelineConnect)return n;let a=this.connection;if(i&&a.on("\
connect",()=>a.stream.emit("data","S")),s){a.removeAllListeners("authenticationC\
leartextPassword"),a.removeAllListeners("readyForQuery"),a.once("readyForQuery",
()=>a.on("readyForQuery",this._handleReadyForQuery.bind(this)));let u=this.ssl?"\
sslconnect":"connect";a.on(u,()=>{this._handleAuthCleartextPassword(),this._handleReadyForQuery()})}
return n}async _handleAuthSASLContinue(e){let t=this.saslSession,n=this.password,
i=e.data;if(t.message!=="SASLInitialResponse"||typeof n!="string"||typeof i!="st\
ring")throw new Error("SASL: protocol error");let s=Object.fromEntries(i.split("\
,").map(se=>{if(!/^.=/.test(se))throw new Error("SASL: Invalid attribute pair en\
try");let ee=se[0],V=se.substring(2);return[ee,V]})),a=s.r,u=s.s,c=s.i;if(!a||!/^[!-+--~]+$/.
test(a))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprint\
able");if(!u||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!c||!/^[1-9][0-9]*$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!a.startsWith(t.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(a.length===t.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let l=parseInt(c,10),h=w.from(u,"base64"),f=new TextEncoder,
y=f.encode(n),g=await x.subtle.importKey("raw",y,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),m=new Uint8Array(await x.subtle.sign("HMAC",g,w.concat([h,w.from(
[0,0,0,1])]))),C=m;for(var U=0;U<l-1;U++)m=new Uint8Array(await x.subtle.sign("H\
MAC",g,m)),C=w.from(C.map((se,ee)=>C[ee]^m[ee]));let T=C,E=await x.subtle.importKey(
"raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),b=new Uint8Array(await x.
subtle.sign("HMAC",E,f.encode("Client Key"))),q=await x.subtle.digest("SHA-256",
b),$="n=*,r="+t.clientNonce,M="r="+a+",s="+u+",i="+l,D="c=biws,r="+a,P=$+","+M+"\
,"+D,le=await x.subtle.importKey("raw",q,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var B=new Uint8Array(await x.subtle.sign("HMAC",le,f.encode(P))),N=w.from(
b.map((se,ee)=>b[ee]^B[ee])),k=N.toString("base64");let H=await x.subtle.importKey(
"raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),W=await x.subtle.sign("\
HMAC",H,f.encode("Server Key")),G=await x.subtle.importKey("raw",W,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]);var O=w.from(await x.subtle.sign("HMAC",G,f.
encode(P)));t.message="SASLResponse",t.serverSignature=O.toString("base64"),t.response=
D+",p="+k,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function vh(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
vh,"promisify");var Ne=class extends tr.Pool{static{o(this,"NeonPool")}Client=Ae;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!Se.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=vh(this.Promise,
n);n=i.callback;try{let s=new Ra.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];Et(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h).then(y=>n(void 0,y)).catch(y=>n(y))}catch(s){n(s)}return i.result}};p();async function Ch(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(Ch,"t\
imed");async function Ct(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await Ch(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(Ct,"timedRepeat\
s");async function rr(r,e){let{sql:t,test:n}=e,{rows:i}=await r.query(t);if(!n(i))
throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(rr,"runQuery");async function et(r,e,t,n){
await e.connect();let i=await Ct(r,()=>rr(e,n));return t.waitUntil(e.end()),i}o(
et,"clientRunQuery");async function nr(r,e,t,n){let i=new Ne({connectionString:e}),
s=await Ct(r,()=>rr(i,n));return t.waitUntil(i.end()),s}o(nr,"poolRunQuery");p();var ir=[{sql:"SELECT * FROM employees LIMIT 10",test:r=>r.length>1&&typeof r[0].
first_name=="string"},{sql:"SELECT now()",test:r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString())}];async function a0(r,e,t){let n=[];for(let i of ir){let[,[[,s]]]=await nr(1,e.NEON_DB_URL,
t,i);n.push(s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-T\
ype":"application/json"}})}o(a0,"cf");var Be={waitUntil(r){},passThroughOnException(){}};
async function o0(r,e,t=n=>{}){let n=[1,3],i=15;t(`Warm-up ...

`),await nr(1,r.NEON_DB_URL,Be,ir[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Ne({connectionString:r.
NEON_DB_URL}),c=Et(r.NEON_DB_URL,{resultCallback:async(h,f,y,g)=>{let m=await u.
query({text:h.query,values:h.params,...g.arrayMode?{rowMode:"array"}:{}}),C=f.command===
m.command,U=f.rowCount===m.rowCount,T=yr(f.fields.map(q=>q.dataTypeID),m.fields.
map(q=>q.dataTypeID)),E=yr(y,m.rows);console.log(C&&U&&E&&T?"\u2713":"X",JSON.stringify(
h),`
  -> us:`,y,`
  -> pg:`,m.rows)}}),l=new Date;await c`SELECT ${1} AS int_uncast`,await c`SELECT ${1}::int AS int`,
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
 123 AS num",[],{arrayMode:!0,fullResults:!0}),Se.fetchConnectionCache=!0,await c`SELECT ${"\
hello"} AS str`,await c`SELECT ${"world"} AS str`,await c("SELECT 123 AS num"),await new Promise(
h=>setTimeout(h,1e3)),u.end();for(let h of ir){t(`
===== ${h.sql} =====

`);async function f(g,m){let C=String.fromCharCode(s+(s>25?23:65));t(`${C}
`);try{await fetch(`http://localhost:443/${C}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,U]=await Ct(i,()=>m(g),T=>t(`<span class="live">${T.toFixed()}\
ms</span> `));t(`
Sorted:  `),U.map(([T])=>T).sort((T,E)=>T-E).forEach((T,E)=>{t(E===(i-1)/2?`<spa\
n class="median">${T.toFixed()}ms</span> `:`${T.toFixed()}ms `)}),t(`

`),s+=1}o(f,"section");async function y(g,m){t(`----- ${g} -----

`);for(let C of n)t(`${C} quer${C===1?"y":"ies"} \u2013 `),await f(C,m)}o(y,"sec\
tions"),await y("Neon/wss, no pipelining",async g=>{let m=new Ae(r.NEON_DB_URL);
m.neonConfig.pipelineConnect=!1,await et(g,m,Be,h)}),await y("Neon/wss, pipeline\
d connect (default)",async g=>{let m=new Ae(r.NEON_DB_URL);await et(g,m,Be,h)}),
await y("Neon/wss, pipelined connect, no coalescing",async g=>{let m=new Ae(r.NEON_DB_URL);
m.neonConfig.coalesceWrites=!1,await et(g,m,Be,h)}),await y("Neon/wss, pipelined\
 connect using Pool.query",async g=>{await nr(g,r.NEON_DB_URL,Be,h)}),await y("N\
eon/wss, pipelined connect using Pool.connect",async g=>{let m=new Ne({connectionString:r.
NEON_DB_URL}),C=await m.connect();await Ct(g,()=>rr(C,h)),C.release(),Be.waitUntil(
m.end())}),await y("Patched pg/wss, pipelined connect",async g=>{let m=new Ae(r.
MY_DB_URL);m.neonConfig.wsProxy=(C,U)=>`ws.manipulexity.com/v1?address=${C}:${U}`,
m.neonConfig.pipelineConnect="password",await et(g,m,Be,h)}),e&&await y("Patched\
 pg/subtls, pipelined TLS + connect",async g=>{let m=new Ae(r.MY_DB_URL);m.neonConfig.
wsProxy=(C,U)=>`ws.manipulexity.com/v1?address=${C}:${U}`,m.neonConfig.forceDisablePgSSL=
m.neonConfig.useSecureWebSocket=!1,m.neonConfig.pipelineTLS=!0,m.neonConfig.pipelineConnect=
"password",await et(g,m,Be,h)})}}o(o0,"latencies");export{a0 as cf,o0 as latencies,Se as neonConfig};
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
