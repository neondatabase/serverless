var Ro=Object.create;var je=Object.defineProperty;var No=Object.getOwnPropertyDescriptor;var Mo=Object.getOwnPropertyNames;var qo=Object.getPrototypeOf,Fo=Object.prototype.hasOwnProperty;var Do=(r,e,t)=>e in r?je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var o=(r,e)=>je(r,"name",{value:e,configurable:!0});var le=(r,e)=>()=>(r&&(e=r(r=0)),e);var R=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ye=(r,e)=>{for(var t in e)
je(r,t,{get:e[t],enumerable:!0})},Li=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Mo(e))!Fo.call(r,i)&&i!==t&&je(r,i,{get:()=>e[i],enumerable:!(n=
No(e,i))||n.enumerable});return r};var lt=(r,e,t)=>(t=r!=null?Ro(qo(r)):{},Li(e||!r||!r.__esModule?je(t,"default",{
value:r,enumerable:!0}):t,r)),ee=r=>Li(je({},"__esModule",{value:!0}),r);var _=(r,e,t)=>(Do(r,typeof e!="symbol"?e+"":e,t),t);var Ti=R(Qt=>{"use strict";y();Qt.byteLength=ko;Qt.toByteArray=$o;Qt.fromByteArray=
Ko;var Ee=[],me=[],Oo=typeof Uint8Array<"u"?Uint8Array:Array,wr="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(qe=0,Ui=wr.length;qe<Ui;++qe)
Ee[qe]=wr[qe],me[wr.charCodeAt(qe)]=qe;var qe,Ui;me["-".charCodeAt(0)]=62;me["_".
charCodeAt(0)]=63;function _i(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o(_i,"getLens");function ko(r){var e=_i(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(ko,"byteLength");function Qo(r,e,t){return(e+t)*3/4-t}o(Qo,"_byteLeng\
th");function $o(r){var e,t=_i(r),n=t[0],i=t[1],s=new Oo(Qo(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=me[r.charCodeAt(c)]<<18|me[r.charCodeAt(c+1)]<<12|me[r.
charCodeAt(c+2)]<<6|me[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=me[r.charCodeAt(c)]<<2|me[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=me[r.charCodeAt(c)]<<10|me[r.charCodeAt(c+1)]<<4|me[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o($o,"toByteArray");function jo(r){return Ee[r>>
18&63]+Ee[r>>12&63]+Ee[r>>6&63]+Ee[r&63]}o(jo,"tripletToBase64");function Ho(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(jo(n));return i.join("")}o(Ho,"encodeChunk");function Ko(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(Ho(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(Ee[e>>2]+Ee[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
Ee[e>>10]+Ee[e>>4&63]+Ee[e<<2&63]+"=")),i.join("")}o(Ko,"fromByteArray")});var Ii=R(mr=>{y();mr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,d=t?-1:1,S=r[e+f];for(f+=d,s=S&(1<<-h)-1,S>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=d,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=d,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(S?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(S?
-1:1)*a*Math.pow(2,s-n)};mr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,d=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=n?0:s-1,E=n?1:-1,v=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=d/c:e+=
d*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+S]=u&255,S+=E,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+S]=a&255,S+=E,a/=256,l-=8);r[t+S-E]|=v*128}});var Gi=R(Ge=>{"use strict";y();var gr=Ti(),Ke=Ii(),Pi=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ge.Buffer=
p;Ge.SlowBuffer=Yo;Ge.INSPECT_MAX_BYTES=50;var $t=2147483647;Ge.kMaxLength=$t;p.
TYPED_ARRAY_SUPPORT=Wo();!p.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function Wo(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(Wo,"typedArraySupport");Object.defineProperty(p.prototype,
"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}});
Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(
this))return this.byteOffset}});function Ce(r){if(r>$t)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,p.prototype),e}o(Ce,"createBuffer");function p(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return xr(r)}return Mi(r,e,t)}o(p,"Buf\
fer");p.poolSize=8192;function Mi(r,e,t){if(typeof r=="string")return Vo(r,e);if(ArrayBuffer.
isView(r))return zo(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(be(r,ArrayBuffer)||r&&be(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(be(r,SharedArrayBuffer)||r&&be(r.buffer,SharedArrayBuffer)))return Er(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return p.from(n,e,t);let i=Jo(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return p.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
Mi,"from");p.from=function(r,e,t){return Mi(r,e,t)};Object.setPrototypeOf(p.prototype,
Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function qi(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(qi,"assertSize");function Go(r,e,t){
return qi(r),r<=0?Ce(r):e!==void 0?typeof t=="string"?Ce(r).fill(e,t):Ce(r).fill(
e):Ce(r)}o(Go,"alloc");p.alloc=function(r,e,t){return Go(r,e,t)};function xr(r){
return qi(r),Ce(r<0?0:Ar(r)|0)}o(xr,"allocUnsafe");p.allocUnsafe=function(r){return xr(
r)};p.allocUnsafeSlow=function(r){return xr(r)};function Vo(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!p.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Fi(r,e)|0,n=Ce(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(Vo,"fromString");function Sr(r){let e=r.length<0?0:Ar(r.length)|0,t=Ce(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(Sr,"fromArrayLike");function zo(r){if(be(r,Uint8Array)){
let e=new Uint8Array(r);return Er(e.buffer,e.byteOffset,e.byteLength)}return Sr(
r)}o(zo,"fromArrayView");function Er(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,p.prototype),n}o(Er,"fromArrayBuffer");function Jo(r){if(p.isBuffer(r)){let e=Ar(
r.length)|0,t=Ce(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Cr(r.length)?Ce(0):Sr(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return Sr(r.data)}o(Jo,"fromObject");function Ar(r){if(r>=
$t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
$t.toString(16)+" bytes");return r|0}o(Ar,"checked");function Yo(r){return+r!=r&&
(r=0),p.alloc(+r)}o(Yo,"SlowBuffer");p.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==p.prototype},"isBuffer");p.compare=o(function(e,t){if(be(e,Uint8Array)&&
(e=p.from(e,e.offset,e.byteLength)),be(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),
!p.isBuffer(e)||!p.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");p.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");p.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=p.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(be(a,Uint8Array))s+a.length>i.length?(p.isBuffer(
a)||(a=p.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(p.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function Fi(r,e){if(p.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||be(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return br(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Wi(r).length;default:if(i)return n?-1:br(r).length;e=(""+e).toLowerCase(),
i=!0}}o(Fi,"byteLength");p.byteLength=Fi;function Zo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return uu(
this,e,t);case"utf8":case"utf-8":return Oi(this,e,t);case"ascii":return au(this,
e,t);case"latin1":case"binary":return ou(this,e,t);case"base64":return iu(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return cu(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
Zo,"slowToString");p.prototype._isBuffer=!0;function Fe(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(Fe,"swap");p.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Fe(this,t,t+1);return this},"swap16");p.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Fe(this,t,t+3),Fe(this,t+1,t+2);return this},"swap32");
p.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Fe(this,t,t+7),
Fe(this,t+1,t+6),Fe(this,t+2,t+5),Fe(this,t+3,t+4);return this},"swap64");p.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?Oi(
this,0,e):Zo.apply(this,arguments)},"toString");p.prototype.toLocaleString=p.prototype.
toString;p.prototype.equals=o(function(e){if(!p.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:p.compare(this,e)===0},"equals");
p.prototype.inspect=o(function(){let e="",t=Ge.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Pi&&(p.prototype[Pi]=p.prototype.inspect);p.prototype.compare=
o(function(e,t,n,i,s){if(be(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function Di(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Cr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=p.from(e,n)),p.isBuffer(e))return e.length===0?-1:Bi(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Bi(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Di,"bid\
irectionalIndexOf");function Bi(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Bi,"arrayIndexOf");p.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");p.prototype.
indexOf=o(function(e,t,n){return Di(this,e,t,n,!0)},"indexOf");p.prototype.lastIndexOf=
o(function(e,t,n){return Di(this,e,t,n,!1)},"lastIndexOf");function Xo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(Cr(u))
return a;r[t+a]=u}return a}o(Xo,"hexWrite");function eu(r,e,t,n){return jt(br(e,
r.length-t),r,t,n)}o(eu,"utf8Write");function tu(r,e,t,n){return jt(du(e),r,t,n)}
o(tu,"asciiWrite");function ru(r,e,t,n){return jt(Wi(e),r,t,n)}o(ru,"base64Write");
function nu(r,e,t,n){return jt(pu(e,r.length-t),r,t,n)}o(nu,"ucs2Write");p.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return Xo(this,e,t,n);case"utf8":case"utf-8":return eu(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return tu(this,e,t,n);case"base64":return ru(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nu(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");p.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function iu(r,e,t){return e===0&&t===r.
length?gr.fromByteArray(r):gr.fromByteArray(r.slice(e,t))}o(iu,"base64Slice");function Oi(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return su(n)}o(Oi,"utf8Slice");var Ri=4096;function su(r){
let e=r.length;if(e<=Ri)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Ri));return t}o(su,"d\
ecodeCodePointsArray");function au(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(au,"asciiSlice");function ou(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(ou,"latin1Slice");function uu(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=yu[r[s]];return i}o(uu,"he\
xSlice");function cu(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(cu,"utf16leSlice");p.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,p.prototype),i},"slice");function re(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(re,"checkOffset");p.prototype.readUintLE=
p.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);
let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");
p.prototype.readUintBE=p.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,
n||re(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*
s;return i},"readUIntBE");p.prototype.readUint8=p.prototype.readUInt8=o(function(e,t){
return e=e>>>0,t||re(e,1,this.length),this[e]},"readUInt8");p.prototype.readUint16LE=
p.prototype.readUInt16LE=o(function(e,t){return e=e>>>0,t||re(e,2,this.length),this[e]|
this[e+1]<<8},"readUInt16LE");p.prototype.readUint16BE=p.prototype.readUInt16BE=
o(function(e,t){return e=e>>>0,t||re(e,2,this.length),this[e]<<8|this[e+1]},"rea\
dUInt16BE");p.prototype.readUint32LE=p.prototype.readUInt32LE=o(function(e,t){return e=
e>>>0,t||re(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},
"readUInt32LE");p.prototype.readUint32BE=p.prototype.readUInt32BE=o(function(e,t){
return e=e>>>0,t||re(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])},"readUInt32BE");p.prototype.readBigUInt64LE=_e(o(function(e){e=e>>>
0,We(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ht(e,this.length-
8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*
2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigU\
Int64LE"));p.prototype.readBigUInt64BE=_e(o(function(e){e=e>>>0,We(e,"offset");let t=this[e],
n=this[e+7];(t===void 0||n===void 0)&&ht(e,this.length-8);let i=t*2**24+this[++e]*
2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+
n;return(BigInt(i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));p.prototype.readIntLE=
o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<
t&&(s*=256);)i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readInt\
LE");p.prototype.readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);
let i=t,s=1,a=this[e+--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=
s&&(a-=Math.pow(2,8*t)),a},"readIntBE");p.prototype.readInt8=o(function(e,t){return e=
e>>>0,t||re(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");
p.prototype.readInt16LE=o(function(e,t){e=e>>>0,t||re(e,2,this.length);let n=this[e]|
this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");p.prototype.readInt16BE=
o(function(e,t){e=e>>>0,t||re(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&
32768?n|4294901760:n},"readInt16BE");p.prototype.readInt32LE=o(function(e,t){return e=
e>>>0,t||re(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"\
readInt32LE");p.prototype.readInt32BE=o(function(e,t){return e=e>>>0,t||re(e,4,this.
length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");p.prototype.
readBigInt64LE=_e(o(function(e){e=e>>>0,We(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&ht(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+
6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24)},"readBigInt64LE"));p.prototype.readBigInt64BE=_e(o(function(e){
e=e>>>0,We(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ht(e,
this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(
i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readB\
igInt64BE"));p.prototype.readFloatLE=o(function(e,t){return e=e>>>0,t||re(e,4,this.
length),Ke.read(this,e,!0,23,4)},"readFloatLE");p.prototype.readFloatBE=o(function(e,t){
return e=e>>>0,t||re(e,4,this.length),Ke.read(this,e,!1,23,4)},"readFloatBE");p.
prototype.readDoubleLE=o(function(e,t){return e=e>>>0,t||re(e,8,this.length),Ke.
read(this,e,!0,52,8)},"readDoubleLE");p.prototype.readDoubleBE=o(function(e,t){return e=
e>>>0,t||re(e,8,this.length),Ke.read(this,e,!1,52,8)},"readDoubleBE");function fe(r,e,t,n,i,s){
if(!p.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instan\
ce');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+
n>r.length)throw new RangeError("Index out of range")}o(fe,"checkInt");p.prototype.
writeUintLE=p.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,
!i){let u=Math.pow(2,8*n)-1;fe(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<
n&&(s*=256);)this[t+a]=e/s&255;return t+n},"writeUIntLE");p.prototype.writeUintBE=
p.prototype.writeUIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;fe(this,e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)
this[t+s]=e/a&255;return t+n},"writeUIntBE");p.prototype.writeUint8=p.prototype.
writeUInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,1,255,0),this[t]=
e&255,t+1},"writeUInt8");p.prototype.writeUint16LE=p.prototype.writeUInt16LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},
"writeUInt16LE");p.prototype.writeUint16BE=p.prototype.writeUInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},
"writeUInt16BE");p.prototype.writeUint32LE=p.prototype.writeUInt32LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>
16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");p.prototype.writeUint32BE=
p.prototype.writeUInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,4,
4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+
4},"writeUInt32BE");function ki(r,e,t,n,i){Ki(e,n,i,r,t,7);let s=Number(e&BigInt(
4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(
e>>BigInt(32)&BigInt(4294967295));return r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=
a,a=a>>8,r[t++]=a,t}o(ki,"wrtBigUInt64LE");function Qi(r,e,t,n,i){Ki(e,n,i,r,t,7);
let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>
8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=a,a=a>>8,
r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(Qi,"wrtBigUInt64BE");p.prototype.writeBigUInt64LE=
_e(o(function(e,t=0){return ki(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},
"writeBigUInt64LE"));p.prototype.writeBigUInt64BE=_e(o(function(e,t=0){return Qi(
this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));p.prototype.
writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);fe(this,
e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)e<0&&u===0&&this[t+
s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntLE");p.prototype.writeIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);fe(this,e,t,n,c-
1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&(a*=256);)e<0&&u===0&&this[t+
s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntBE");p.prototype.writeInt8=
o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,1,127,-128),e<0&&(e=255+e+1),
this[t]=e&255,t+1},"writeInt8");p.prototype.writeInt16LE=o(function(e,t,n){return e=
+e,t=t>>>0,n||fe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"wr\
iteInt16LE");p.prototype.writeInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(
this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeInt16BE");p.prototype.
writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,4,2147483647,-2147483648),
this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32\
LE");p.prototype.writeInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,
t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>
16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeInt32BE");p.prototype.writeBigInt64LE=
_e(o(function(e,t=0){return ki(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x\
7fffffffffffffff"))},"writeBigInt64LE"));p.prototype.writeBigInt64BE=_e(o(function(e,t=0){
return Qi(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},
"writeBigInt64BE"));function $i(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError(
"Index out of range");if(t<0)throw new RangeError("Index out of range")}o($i,"ch\
eckIEEE754");function ji(r,e,t,n,i){return e=+e,t=t>>>0,i||$i(r,e,t,4,34028234663852886e22,
-34028234663852886e22),Ke.write(r,e,t,n,23,4),t+4}o(ji,"writeFloat");p.prototype.
writeFloatLE=o(function(e,t,n){return ji(this,e,t,!0,n)},"writeFloatLE");p.prototype.
writeFloatBE=o(function(e,t,n){return ji(this,e,t,!1,n)},"writeFloatBE");function Hi(r,e,t,n,i){
return e=+e,t=t>>>0,i||$i(r,e,t,8,17976931348623157e292,-17976931348623157e292),
Ke.write(r,e,t,n,52,8),t+8}o(Hi,"writeDouble");p.prototype.writeDoubleLE=o(function(e,t,n){
return Hi(this,e,t,!0,n)},"writeDoubleLE");p.prototype.writeDoubleBE=o(function(e,t,n){
return Hi(this,e,t,!1,n)},"writeDoubleBE");p.prototype.copy=o(function(e,t,n,i){
if(!p.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),
!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetSta\
rt out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of ran\
ge");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.
length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===e&&typeof Uint8Array.
prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");p.prototype.fill=o(function(e,t,n,i){if(typeof e==
"string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,
n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must\
 be a string");if(typeof i=="string"&&!p.isEncoding(i))throw new TypeError("Unkn\
own encoding: "+i);if(e.length===1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i===
"latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(
e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range inde\
x");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e==
"number")for(s=t;s<n;++s)this[s]=e;else{let a=p.isBuffer(e)?e:p.from(e,i),u=a.length;
if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');
for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this},"fill");var He={};function vr(r,e,t){
var n;He[r]=(n=class extends t{constructor(){super(),Object.defineProperty(this,
"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=
`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(s){
Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){
return`${this.name} [${r}]: ${this.message}`}},o(n,"NodeError"),n)}o(vr,"E");vr(
"ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bound\
s`:"Attempt to access memory outside buffer bounds"},RangeError);vr("ERR_INVALID\
_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Rece\
ived type ${typeof e}`},TypeError);vr("ERR_OUT_OF_RANGE",function(r,e,t){let n=`\
The value of "${r}" is out of range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>
2**32?i=Ni(String(t)):typeof t=="bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||
t<-(BigInt(2)**BigInt(32)))&&(i=Ni(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,
n},RangeError);function Ni(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=
3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}o(Ni,"addNumericalSepar\
ator");function lu(r,e,t){We(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ht(e,
r.length-(t+1))}o(lu,"checkBounds");function Ki(r,e,t,n,i,s){if(r>t||r<e){let a=typeof e==
"bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=`>= 0${a} and < 2${a} ** ${(s+
1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:u=`>=\
 ${e}${a} and <= ${t}${a}`,new He.ERR_OUT_OF_RANGE("value",u,r)}lu(n,i,s)}o(Ki,"\
checkIntBI");function We(r,e){if(typeof r!="number")throw new He.ERR_INVALID_ARG_TYPE(
e,"number",r)}o(We,"validateNumber");function ht(r,e,t){throw Math.floor(r)!==r?
(We(r,t),new He.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new He.ERR_BUFFER_OUT_OF_BOUNDS:
new He.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}o(ht,"boundsErr\
or");var hu=/[^+/0-9A-Za-z-_]/g;function fu(r){if(r=r.split("=")[0],r=r.trim().replace(
hu,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}o(fu,"base64cle\
an");function br(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let a=0;a<n;++a){
if(t=r.charCodeAt(a),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,
191,189);continue}else if(a+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}
if(t<56320){(e-=3)>-1&&s.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+
65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;
s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<
65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){
if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error(
"Invalid code point")}return s}o(br,"utf8ToBytes");function du(r){let e=[];for(let t=0;t<
r.length;++t)e.push(r.charCodeAt(t)&255);return e}o(du,"asciiToBytes");function pu(r,e){
let t,n,i,s=[];for(let a=0;a<r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,
i=t%256,s.push(i),s.push(n);return s}o(pu,"utf16leToBytes");function Wi(r){return gr.
toByteArray(fu(r))}o(Wi,"base64ToBytes");function jt(r,e,t,n){let i;for(i=0;i<n&&
!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}o(jt,"blitBuffer");function be(r,e){
return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.
constructor.name===e.name}o(be,"isInstance");function Cr(r){return r!==r}o(Cr,"n\
umberIsNaN");var yu=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<
16;++t){let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function _e(r){
return typeof BigInt>"u"?wu:r}o(_e,"defineBigIntMethod");function wu(){throw new Error(
"BigInt not supported")}o(wu,"BufferBigIntNotDefined")});var L,U,T,A,w,g,y=le(()=>{"use strict";L=globalThis,U=globalThis.setImmediate??(r=>setTimeout(
r,0)),T=globalThis.clearImmediate??(r=>clearTimeout(r)),A=globalThis.crypto??{};
A.subtle??(A.subtle={});w=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Gi().Buffer,g=globalThis.process??
{};g.env??(g.env={});try{g.nextTick(()=>{})}catch{let e=Promise.resolve();g.nextTick=
e.then.bind(e)}});var Pe=R((Hf,qr)=>{"use strict";y();var Ye=typeof Reflect=="object"?Reflect:null,
ws=Ye&&typeof Ye.apply=="function"?Ye.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),zt;Ye&&typeof Ye.ownKeys=="function"?zt=Ye.ownKeys:
Object.getOwnPropertySymbols?zt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):zt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function dc(r){console&&console.warn&&
console.warn(r)}o(dc,"ProcessEmitWarning");var gs=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function k(){k.init.call(this)}o(k,"EventEmitter");qr.exports=
k;qr.exports.once=mc;k.EventEmitter=k;k.prototype._events=void 0;k.prototype._eventsCount=
0;k.prototype._maxListeners=void 0;var ms=10;function Jt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(Jt,"checkListener");Object.defineProperty(k,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return ms},set:function(r){if(typeof r!="\
number"||r<0||gs(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");ms=r}});k.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};k.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||gs(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function Ss(r){return r._maxListeners===void 0?k.defaultMaxListeners:r._maxListeners}
o(Ss,"_getMaxListeners");k.prototype.getMaxListeners=o(function(){return Ss(this)},
"getMaxListeners");k.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")ws(c,this,t);else for(var l=c.
length,h=vs(c,l),n=0;n<l;++n)ws(h[n],this,t);return!0},"emit");function Es(r,e,t,n){
var i,s,a;if(Jt(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=Ss(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,dc(u)}
return r}o(Es,"_addListener");k.prototype.addListener=o(function(e,t){return Es(
this,e,t,!1)},"addListener");k.prototype.on=k.prototype.addListener;k.prototype.
prependListener=o(function(e,t){return Es(this,e,t,!0)},"prependListener");function pc(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(pc,"onceWrapper");function bs(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=pc.bind(n);return i.listener=t,n.wrapFn=i,i}o(bs,"\
_onceWrap");k.prototype.once=o(function(e,t){return Jt(t),this.on(e,bs(this,e,t)),
this},"once");k.prototype.prependOnceListener=o(function(e,t){return Jt(t),this.
prependListener(e,bs(this,e,t)),this},"prependOnceListener");k.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(Jt(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():yc(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");k.prototype.off=k.prototype.
removeListener;k.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function xs(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?wc(i):vs(i,i.length)}o(xs,"_listeners");k.prototype.
listeners=o(function(e){return xs(this,e,!0)},"listeners");k.prototype.rawListeners=
o(function(e){return xs(this,e,!1)},"rawListeners");k.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):As.call(r,e)};k.prototype.
listenerCount=As;function As(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(As,"listenerCount");
k.prototype.eventNames=o(function(){return this._eventsCount>0?zt(this._events):
[]},"eventNames");function vs(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(vs,"arrayClone");function yc(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(yc,"spliceOne");function wc(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(wc,"unwrapListeners");function mc(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Cs(r,e,s,{once:!0}),e!=="error"&&gc(r,i,{once:!0})})}
o(mc,"once");function gc(r,e,t){typeof r.on=="function"&&Cs(r,"error",e,t)}o(gc,
"addErrorHandlerIfEventEmitter");function Cs(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Cs,"eventTargetAgnosticAddListener")});var xt={};ye(xt,{default:()=>Sc});var Sc,At=le(()=>{y();Sc={}});function vt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],d=o((b,m)=>b>>>m|b<<32-m,
"rrot"),S=new Uint32Array(64),E=new Uint8Array(64),v=o(()=>{for(let M=0,j=0;M<16;M++,
j+=4)S[M]=E[j]<<24|E[j+1]<<16|E[j+2]<<8|E[j+3];for(let M=16;M<64;M++){let j=d(S[M-
15],7)^d(S[M-15],18)^S[M-15]>>>3,H=d(S[M-2],17)^d(S[M-2],19)^S[M-2]>>>10;S[M]=S[M-
16]+j+S[M-7]+H|0}let b=e,m=t,C=n,N=i,q=s,Q=a,$=u,ie=c;for(let M=0;M<64;M++){let j=d(
q,6)^d(q,11)^d(q,25),H=q&Q^~q&$,K=ie+j+H+f[M]+S[M]|0,z=d(b,2)^d(b,13)^d(b,22),W=b&
m^b&C^m&C,D=z+W|0;ie=$,$=Q,Q=q,q=N+K|0,N=C,C=m,m=b,b=K+D|0}e=e+b|0,t=t+m|0,n=n+C|
0,i=i+N|0,s=s+q|0,a=a+Q|0,u=u+$|0,c=c+ie|0,h=0},"process"),x=o(b=>{typeof b=="st\
ring"&&(b=new TextEncoder().encode(b));for(let m=0;m<b.length;m++)E[h++]=b[m],h===
64&&v();l+=b.length},"add"),P=o(()=>{if(E[h++]=128,h==64&&v(),h+8>64){for(;h<64;)
E[h++]=0;v()}for(;h<58;)E[h++]=0;let b=l*8;E[h++]=b/1099511627776&255,E[h++]=b/4294967296&
255,E[h++]=b>>>24,E[h++]=b>>>16&255,E[h++]=b>>>8&255,E[h++]=b&255,v();let m=new Uint8Array(
32);return m[0]=e>>>24,m[1]=e>>>16&255,m[2]=e>>>8&255,m[3]=e&255,m[4]=t>>>24,m[5]=
t>>>16&255,m[6]=t>>>8&255,m[7]=t&255,m[8]=n>>>24,m[9]=n>>>16&255,m[10]=n>>>8&255,
m[11]=n&255,m[12]=i>>>24,m[13]=i>>>16&255,m[14]=i>>>8&255,m[15]=i&255,m[16]=s>>>
24,m[17]=s>>>16&255,m[18]=s>>>8&255,m[19]=s&255,m[20]=a>>>24,m[21]=a>>>16&255,m[22]=
a>>>8&255,m[23]=a&255,m[24]=u>>>24,m[25]=u>>>16&255,m[26]=u>>>8&255,m[27]=u&255,
m[28]=c>>>24,m[29]=c>>>16&255,m[30]=c>>>8&255,m[31]=c&255,m},"digest");return r===
void 0?{add:x,digest:P}:(x(r),P())}var Ls=le(()=>{"use strict";y();o(vt,"sha256")});var X,Ct,Us=le(()=>{"use strict";y();X=class X{constructor(){_(this,"_dataLength",
0);_(this,"_bufferLength",0);_(this,"_state",new Int32Array(4));_(this,"_buffer",
new ArrayBuffer(68));_(this,"_buffer8");_(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=X.
hexChars,n=X.hexOut,i,s,a,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],a=0;a<8;a+=2)n[s+1+
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
0,this._state.set(X.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,a;for(a=0;a<e.length;a+=1){if(s=e.charCodeAt(a),
s<128)t[i++]=s;else if(s<2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||
s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*
1024+(e.charCodeAt(++a)-56320)+65536,s>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,
t[i++]=s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,X._md5cycle(this.
_state,n),i-=64,n[0]=n[16])}return this._bufferLength=i,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-
a,64-i);s--;)t[i++]=e.charCodeAt(a++);if(i<64)break;this._dataLength+=64,X._md5cycle(
this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-
a,64-i);s--;)t[i++]=e[a++];if(i<64)break;this._dataLength+=64,X._md5cycle(this._state,
n),i=0}return this._bufferLength=i,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this.
_state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=
n[1],i[2]=n[2],i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=
t;let a=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(X.buffer32Identity.
subarray(s),s),t>55&&(X._md5cycle(this._state,i),i.set(X.buffer32Identity)),a<=4294967295)
i[14]=a;else{let u=a.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;i[14]=c,i[15]=l}return X._md5cycle(this._state,i),
e?this._state:X._hex(this._state)}};o(X,"Md5"),_(X,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),_(X,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),_(X,"hexChars","0123456789abcdef"),_(X,"hexO\
ut",[]),_(X,"onePassHasher",new X);Ct=X});var Fr={};ye(Fr,{createHash:()=>bc,createHmac:()=>xc,randomBytes:()=>Ec});function Ec(r){
return A.getRandomValues(w.alloc(r))}function bc(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return w.from(vt(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?Ct.hashStr(e):Ct.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function xc(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=vt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(vt(a),64),w.from(vt(u))}}}}}var Dr=le(()=>{y();Ls();Us();o(Ec,"randomBytes");
o(bc,"createHash");o(xc,"createHmac")});var kr=R(_s=>{"use strict";y();_s.parse=function(r,e){return new Or(r,e).parse()};
var Yt=class Yt{constructor(e,t){this.source=e,this.transform=t||Ac,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.dimension>
1&&(n=new Yt(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(i&&this.newEntry(!0),i=!i):t.value===","&&!i?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};o(Yt,"ArrayParser");var Or=Yt;function Ac(r){return r}o(Ac,"identity")});var Qr=R((od,Ts)=>{y();var vc=kr();Ts.exports={create:function(r,e){return{parse:function(){
return vc.parse(r,e)}}}}});var Bs=R((cd,Ps)=>{"use strict";y();var Cc=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Lc=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Uc=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,_c=/^-?infinity$/;
Ps.exports=o(function(e){if(_c.test(e))return Number(e.replace("i","I"));var t=Cc.
exec(e);if(!t)return Tc(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Is(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,d=Ic(e);return d!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),$r(i)&&f.setUTCFullYear(i),d!==0&&f.setTime(f.getTime()-d)):(f=new Date(
i,s,a,u,c,l,h),$r(i)&&f.setFullYear(i)),f},"parseDate");function Tc(r){var e=Lc.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Is(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return $r(t)&&a.setFullYear(t),a}}o(Tc,"getDate");
function Ic(r){if(r.endsWith("+00"))return 0;var e=Uc.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(Ic,"timeZoneOffset");function Is(r){
return-(r-1)}o(Is,"bcYearToNegativeYear");function $r(r){return r>=0&&r<100}o($r,
"is0To99")});var Ns=R((fd,Rs)=>{y();Rs.exports=Bc;var Pc=Object.prototype.hasOwnProperty;function Bc(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Pc.call(t,
n)&&(r[n]=t[n])}return r}o(Bc,"extend")});var Fs=R((yd,qs)=>{"use strict";y();var Rc=Ns();qs.exports=Ze;function Ze(r){if(!(this instanceof
Ze))return new Ze(r);Rc(this,Kc(r))}o(Ze,"PostgresInterval");var Nc=["seconds","\
minutes","hours","days","months","years"];Ze.prototype.toPostgres=function(){var r=Nc.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Mc={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},qc=["years","months","days"],Fc=["hours","minutes","seconds"];Ze.
prototype.toISOString=Ze.prototype.toISO=function(){var r=qc.map(t,this).join(""),
e=Fc.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Mc[n]}};var jr="([+-]?\\d+)",Dc=jr+"\\s+years?",Oc=jr+"\\s+mons?",kc=jr+"\
\\s+days?",Qc="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",$c=new RegExp([
Dc,Oc,kc,Qc].map(function(r){return"("+r+")?"}).join("\\s*")),Ms={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},jc=["hours","minutes","sec\
onds","milliseconds"];function Hc(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(Hc,"parseMilliseconds");function Kc(r){if(!r)return{};var e=$c.exec(
r),t=e[8]==="-";return Object.keys(Ms).reduce(function(n,i){var s=Ms[i],a=e[s];return!a||
(a=i==="milliseconds"?Hc(a):parseInt(a,10),!a)||(t&&~jc.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(Kc,"parse")});var Os=R((gd,Ds)=>{"use strict";y();Ds.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var Ws=R((bd,Ks)=>{y();var Lt=kr(),Ut=Qr(),Zt=Bs(),Qs=Fs(),$s=Os();function Xt(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Xt,"allowNull");function js(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(js,"parseBool");function Wc(r){return r?Lt.parse(r,js):null}o(Wc,"pars\
eBoolArray");function Gc(r){return parseInt(r,10)}o(Gc,"parseBaseTenInt");function Hr(r){
return r?Lt.parse(r,Xt(Gc)):null}o(Hr,"parseIntegerArray");function Vc(r){return r?
Lt.parse(r,Xt(function(e){return Hs(e).trim()})):null}o(Vc,"parseBigIntegerArray");
var zc=o(function(r){if(!r)return null;var e=Ut.create(r,function(t){return t!==
null&&(t=Vr(t)),t});return e.parse()},"parsePointArray"),Kr=o(function(r){if(!r)
return null;var e=Ut.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ge=o(function(r){if(!r)return null;var e=Ut.
create(r);return e.parse()},"parseStringArray"),Wr=o(function(r){if(!r)return null;
var e=Ut.create(r,function(t){return t!==null&&(t=Zt(t)),t});return e.parse()},"\
parseDateArray"),Jc=o(function(r){if(!r)return null;var e=Ut.create(r,function(t){
return t!==null&&(t=Qs(t)),t});return e.parse()},"parseIntervalArray"),Yc=o(function(r){
return r?Lt.parse(r,Xt($s)):null},"parseByteAArray"),Gr=o(function(r){return parseInt(
r,10)},"parseInteger"),Hs=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),ks=o(function(r){return r?Lt.parse(r,Xt(JSON.parse)):null},
"parseJsonArray"),Vr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),Zc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=Vr(e);return s.radius=parseFloat(t),s},"parseCircle"),Xc=o(function(r){r(20,
Hs),r(21,Gr),r(23,Gr),r(26,Gr),r(700,parseFloat),r(701,parseFloat),r(16,js),r(1082,
Zt),r(1114,Zt),r(1184,Zt),r(600,Vr),r(651,ge),r(718,Zc),r(1e3,Wc),r(1001,Yc),r(1005,
Hr),r(1007,Hr),r(1028,Hr),r(1016,Vc),r(1017,zc),r(1021,Kr),r(1022,Kr),r(1231,Kr),
r(1014,ge),r(1015,ge),r(1008,ge),r(1009,ge),r(1040,ge),r(1041,ge),r(1115,Wr),r(1182,
Wr),r(1185,Wr),r(1186,Qs),r(1187,Jc),r(17,$s),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,ks),r(3807,ks),r(3907,ge),r(2951,ge),r(791,ge),r(1183,
ge),r(1270,ge)},"init");Ks.exports={init:Xc}});var Vs=R((vd,Gs)=>{"use strict";y();var de=1e6;function el(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>
0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/
de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%de,a=4294967296*s+t,u=""+a%de,n+u+i}o(el,"readInt8");Gs.
exports=el});var Xs=R((Ud,Zs)=>{y();var tl=Vs(),J=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(S,E,v){
return S*Math.pow(2,v)+E};var s=t>>3,a=o(function(S){return n?~S&255:S},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var d=(e+t)%8;return d>0&&
(l=i(l,a(r[h])>>8-d,d)),l},"parseBits"),Ys=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=J(r,1),s=J(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var d=1;d<=f;d++)a/=2,(h&1<<f-d)>0&&(l+=a);return l},"parsePrecisionBits"),
c=J(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),rl=o(function(r){return J(r,1)==1?-1*
(J(r,15,1,!0)+1):J(r,15,1)},"parseInt16"),zs=o(function(r){return J(r,1)==1?-1*(J(
r,31,1,!0)+1):J(r,31,1)},"parseInt32"),nl=o(function(r){return Ys(r,23,8)},"pars\
eFloat32"),il=o(function(r){return Ys(r,52,11)},"parseFloat64"),sl=o(function(r){
var e=J(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,J(r,16,16)),n=0,i=[],
s=J(r,16),a=0;a<s;a++)n+=J(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,J(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Js=o(function(r,e){var t=J(
e,1),n=J(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),_t=o(function(r){for(var e=J(r,32),t=J(r,32,32),
n=J(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=J(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=J(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
J(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],d;if(l.length>1){var S=l.shift();for(d=0;d<S;d++)f[d]=c(l,h);l.unshift(
S)}else for(d=0;d<l[0];d++)f[d]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),al=o(function(r){return r.toString("utf8")},"parseText"),ol=o(function(r){return r===
null?null:J(r,8)>0},"parseBool"),ul=o(function(r){r(20,tl),r(21,rl),r(23,zs),r(26,
zs),r(1700,sl),r(700,nl),r(701,il),r(16,ol),r(1114,Js.bind(null,!1)),r(1184,Js.bind(
null,!0)),r(1e3,_t),r(1007,_t),r(1016,_t),r(1008,_t),r(1009,_t),r(25,al)},"init");
Zs.exports={init:ul}});var ta=R((Id,ea)=>{y();ea.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Pt=R(It=>{y();var cl=Ws(),ll=Xs(),hl=Qr(),fl=ta();It.getTypeParser=dl;It.setTypeParser=
pl;It.arrayParser=hl;It.builtins=fl;var Tt={text:{},binary:{}};function ra(r){return String(
r)}o(ra,"noParse");function dl(r,e){return e=e||"text",Tt[e]&&Tt[e][r]||ra}o(dl,
"getTypeParser");function pl(r,e,t){typeof e=="function"&&(t=e,e="text"),Tt[e][r]=
t}o(pl,"setTypeParser");cl.init(function(r,e){Tt.text[r]=e});ll.init(function(r,e){
Tt.binary[r]=e})});var Bt=R((Md,zr)=>{"use strict";y();zr.exports={host:"localhost",user:g.platform===
"win32"?g.env.USERNAME:g.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Xe=Pt(),yl=Xe.getTypeParser(
20,"text"),wl=Xe.getTypeParser(1016,"text");zr.exports.__defineSetter__("parseIn\
t8",function(r){Xe.setTypeParser(20,"text",r?Xe.getTypeParser(23,"text"):yl),Xe.
setTypeParser(1016,"text",r?Xe.getTypeParser(1007,"text"):wl)})});var Rt=R((Fd,ia)=>{"use strict";y();var ml=(Dr(),ee(Fr)),gl=Bt();function Sl(r){
var e=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Sl,"escapeEl\
ement");function na(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||
typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+na(r[t]):r[t]instanceof w?e+=
"\\\\x"+r[t].toString("hex"):e+=Sl(er(r[t]));return e=e+"}",e}o(na,"arrayString");
var er=o(function(r,e){if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.
isView(r)){var t=w.from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.
byteLength?t:t.slice(r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof
Date?gl.parseInputDatesAsUTC?xl(r):bl(r):Array.isArray(r)?na(r):typeof r=="objec\
t"?El(r,e):r.toString()},"prepareValue");function El(r,e){if(r&&typeof r.toPostgres==
"function"){if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference det\
ected while preparing "'+r+'" for query');return e.push(r),er(r.toPostgres(er),e)}
return JSON.stringify(r)}o(El,"prepareObject");function ce(r,e){for(r=""+r;r.length<
e;)r="0"+r;return r}o(ce,"pad");function bl(r){var e=-r.getTimezoneOffset(),t=r.
getFullYear(),n=t<1;n&&(t=Math.abs(t)+1);var i=ce(t,4)+"-"+ce(r.getMonth()+1,2)+
"-"+ce(r.getDate(),2)+"T"+ce(r.getHours(),2)+":"+ce(r.getMinutes(),2)+":"+ce(r.getSeconds(),
2)+"."+ce(r.getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=ce(Math.floor(
e/60),2)+":"+ce(e%60,2),n&&(i+=" BC"),i}o(bl,"dateToString");function xl(r){var e=r.
getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=ce(e,4)+"-"+ce(r.getUTCMonth()+
1,2)+"-"+ce(r.getUTCDate(),2)+"T"+ce(r.getUTCHours(),2)+":"+ce(r.getUTCMinutes(),
2)+":"+ce(r.getUTCSeconds(),2)+"."+ce(r.getUTCMilliseconds(),3);return n+="+00:0\
0",t&&(n+=" BC"),n}o(xl,"dateToStringUTC");function Al(r,e,t){return r=typeof r==
"string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}o(Al,"normalizeQueryConfig");var Jr=o(function(r){return ml.createHash("md5").
update(r,"utf-8").digest("hex")},"md5"),vl=o(function(r,e,t){var n=Jr(e+r),i=Jr(
w.concat([w.from(n),t]));return"md5"+i},"postgresMd5PasswordHash");ia.exports={prepareValue:o(
function(e){return er(e)},"prepareValueWrapper"),normalizeQueryConfig:Al,postgresMd5PasswordHash:vl,
md5:Jr}});var ca=R((kd,ua)=>{"use strict";y();var Yr=(Dr(),ee(Fr));function Cl(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Yr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Cl,"startSession");function Ll(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=Tl(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=Bl(e,
i,n.iteration),a=et(s,"Client Key"),u=Pl(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,d=et(u,f),S=oa(
a,d),E=S.toString("base64"),v=et(s,"Server Key"),x=et(v,f);r.message="SASLRespon\
se",r.serverSignature=x.toString("base64"),r.response=h+",p="+E}o(Ll,"continueSe\
ssion");function Ul(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Il(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(Ul,"finalizeSession");function _l(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(_l,"isPrintableC\
hars");function sa(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(sa,"isBase64");function aa(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(aa,"parseAttributePairs");function Tl(r){let e=aa(
r),t=e.get("r");if(t){if(!_l(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!sa(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(Tl,"parseServerFirstMe\
ssage");function Il(r){let t=aa(r).get("v");if(t){if(!sa(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(Il,"parseServerFinalMessage");function oa(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(oa,"xorBuffers");function Pl(r){return Yr.createHash(
"sha256").update(r).digest()}o(Pl,"sha256");function et(r,e){return Yr.createHmac(
"sha256",r).update(e).digest()}o(et,"hmacSha256");function Bl(r,e,t){for(var n=et(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=et(r,n),i=oa(i,n);return i}
o(Bl,"Hi");ua.exports={startSession:Cl,continueSession:Ll,finalizeSession:Ul}});var Zr={};ye(Zr,{join:()=>Rl});function Rl(...r){return r.join("/")}var Xr=le(()=>{
y();o(Rl,"join")});var en={};ye(en,{stat:()=>Nl});function Nl(r,e){e(new Error("No filesystem"))}var tn=le(
()=>{y();o(Nl,"stat")});var rn={};ye(rn,{default:()=>Ml});var Ml,nn=le(()=>{y();Ml={}});var la={};ye(la,{StringDecoder:()=>sn});var an,sn,ha=le(()=>{y();an=class an{constructor(e){
_(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};o(an,"StringDecoder");sn=an});var ya=R((Jd,pa)=>{"use strict";y();var{Transform:ql}=(nn(),ee(rn)),{StringDecoder:Fl}=(ha(),ee(la)),
Be=Symbol("last"),tr=Symbol("decoder");function Dl(r,e,t){let n;if(this.overflow){
if(n=this[tr].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Be]+=this[tr].write(r),n=this[Be].split(this.matcher);this[Be]=
n.pop();for(let i=0;i<n.length;i++)try{da(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Be].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(Dl,"transform");function Ol(r){
if(this[Be]+=this[tr].end(),this[Be])try{da(this,this.mapper(this[Be]))}catch(e){
return r(e)}r()}o(Ol,"flush");function da(r,e){e!==void 0&&r.push(e)}o(da,"push");
function fa(r){return r}o(fa,"noop");function kl(r,e,t){switch(r=r||/\r?\n/,e=e||
fa,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=fa)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Dl,t.flush=Ol,t.readableObjectMode=!0;
let n=new ql(t);return n[Be]="",n[tr]=new Fl("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(kl,"split");pa.exports=kl});var ga=R((Xd,Le)=>{"use strict";y();var wa=(Xr(),ee(Zr)),Ql=(nn(),ee(rn)).Stream,
$l=ya(),ma=(At(),ee(xt)),jl=5432,rr=g.platform==="win32",Nt=g.stderr,Hl=56,Kl=7,
Wl=61440,Gl=32768;function Vl(r){return(r&Wl)==Gl}o(Vl,"isRegFile");var tt=["hos\
t","port","database","user","password"],on=tt.length,zl=tt[on-1];function un(){var r=Nt instanceof
Ql&&Nt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Nt.write(ma.format.apply(ma,e))}}o(un,"warn");Object.defineProperty(Le.exports,
"isWin",{get:function(){return rr},set:function(r){rr=r}});Le.exports.warnTo=function(r){
var e=Nt;return Nt=r,e};Le.exports.getFileName=function(r){var e=r||g.env,t=e.PGPASSFILE||
(rr?wa.join(e.APPDATA||"./","postgresql","pgpass.conf"):wa.join(e.HOME||"./",".p\
gpass"));return t};Le.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(g.env,"PGPASSWORD")?!1:rr?!0:(e=e||"<unkn>",Vl(r.mode)?r.mode&(Hl|Kl)?(un('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(un('WARNING: password file "%s" is not a plain file',
e),!1))};var Jl=Le.exports.match=function(r,e){return tt.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||jl)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};Le.exports.getPassword=function(r,e,t){var n,i=e.pipe($l());function s(c){var l=Yl(
c);l&&Zl(l)&&Jl(r,l)&&(n=l[zl],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),un("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var Yl=Le.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(h,f,d){var S=r.substring(f,
d);Object.hasOwnProperty.call(g.env,"PGPASS_NO_DEESCAPE")||(S=S.replace(/\\([:\\])/g,
"$1")),a[tt[h]]=S},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==on-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=
Object.keys(a).length===on?a:null,a},Zl=Le.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<tt.length;t+=
1){var n=e[t],i=r[tt[t]]||"",s=n(i);if(!s)return!1}return!0}});var Ea=R((np,cn)=>{"use strict";y();var rp=(Xr(),ee(Zr)),Sa=(tn(),ee(en)),nr=ga();
cn.exports=function(r,e){var t=nr.getFileName();Sa.stat(t,function(n,i){if(n||!nr.
usePgPass(i,t))return e(void 0);var s=Sa.createReadStream(t);nr.getPassword(r,s,
e)})};cn.exports.warnTo=nr.warnTo});var ln=R((sp,ba)=>{"use strict";y();var Xl=Pt();function ir(r){this._types=r||Xl,
this.text={},this.binary={}}o(ir,"TypeOverrides");ir.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
ir.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};ir.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};ba.exports=ir});var xa={};ye(xa,{default:()=>eh});var eh,Aa=le(()=>{y();eh={}});var va={};ye(va,{parse:()=>hn});function hn(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:d}=new URL(n);s=decodeURIComponent(s);let S=i+":"+s,
E=e?Object.fromEntries(f.entries()):h;return{href:r,protocol:t,auth:S,username:i,
password:s,host:a,hostname:u,port:c,pathname:l,search:h,query:E,hash:d}}var fn=le(
()=>{"use strict";y();o(hn,"parse")});var La=R((hp,Ca)=>{"use strict";y();var th=(fn(),ee(va)),dn=(tn(),ee(en));function pn(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=th.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var a=s.split("/");t.host=decodeURIComponent(
a[0]),s=a.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=dn.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=dn.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=dn.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(pn,"parse");Ca.exports=pn;pn.parse=pn});var sr=R((pp,Ta)=>{"use strict";y();var rh=(Aa(),ee(xa)),_a=Bt(),Ua=La().parse,he=o(
function(r,e,t){return t===void 0?t=g.env["PG"+r.toUpperCase()]:t===!1||(t=g.env[t]),
e[r]||t||_a[r]},"val"),nh=o(function(){switch(g.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return _a.ssl},"readSSLConfigFromEnvironment"),rt=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),Se=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+rt(n))},"ad\
d"),wn=class wn{constructor(e){e=typeof e=="string"?Ua(e):e||{},e.connectionString&&
(e=Object.assign({},e,Ua(e.connectionString))),this.user=he("user",e),this.database=
he("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
he("port",e),10),this.host=he("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:he("password",e)}),this.binary=he("binary",e),this.
options=he("options",e),this.ssl=typeof e.ssl>"u"?nh():e.ssl,typeof this.ssl=="s\
tring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=he("client_encoding",e),this.replication=he("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=he("applicati\
on_name",e,"PGAPPNAME"),this.fallback_application_name=he("fallback_application_\
name",e,!1),this.statement_timeout=he("statement_timeout",e,!1),this.lock_timeout=
he("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=he("idle_in_tra\
nsaction_session_timeout",e,!1),this.query_timeout=he("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=g.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
Se(t,this,"user"),Se(t,this,"password"),Se(t,this,"port"),Se(t,this,"application\
_name"),Se(t,this,"fallback_application_name"),Se(t,this,"connect_timeout"),Se(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(Se(t,n,"sslmode"),Se(t,n,"sslca"),Se(t,n,"sslkey"),Se(t,n,"sslcert"),
Se(t,n,"sslrootcert"),this.database&&t.push("dbname="+rt(this.database)),this.replication&&
t.push("replication="+rt(this.replication)),this.host&&t.push("host="+rt(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+rt(this.client_encoding)),rh.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+rt(s)),e(null,t.join(" ")))})}};o(wn,"ConnectionPa\
rameters");var yn=wn;Ta.exports=yn});var Ba=R((mp,Pa)=>{"use strict";y();var ih=Pt(),Ia=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
gn=class gn{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Ia.exec(e.text):t=Ia.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){
var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},
n=0,i=e.length;n<i;n++){var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](
s):t[a]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=ih.getTypeParser(n.dataTypeID,n.format||"text")}}};o(gn,"\
Result");var mn=gn;Pa.exports=mn});var qa=R((Ep,Ma)=>{"use strict";y();var{EventEmitter:sh}=Pe(),Ra=Ba(),Na=Rt(),En=class En extends sh{constructor(e,t,n){
super(),e=Na.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,g.domain&&e.callback&&
(this.callback=g.domain.bind(e.callback)),this._result=new Ra(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new Ra(
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
g.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
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
binary,valueMapper:Na.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};o(En,"Query");
var Sn=En;Ma.exports=Sn});var Da={};ye(Da,{Socket:()=>we,isIP:()=>ah});function ah(r){return 0}var Fa,I,we,
ar=le(()=>{"use strict";y();Fa=lt(Pe(),1);o(ah,"isIP");I=class I extends Fa.EventEmitter{constructor(){
super(...arguments);_(this,"opts",{});_(this,"connecting",!1);_(this,"pending",!0);
_(this,"writable",!0);_(this,"encrypted",!1);_(this,"authorized",!1);_(this,"des\
troyed",!1);_(this,"ws",null);_(this,"writeBuffer");_(this,"tlsState",0);_(this,
"tlsRead");_(this,"tlsWrite")}static get poolQueryViaFetch(){return I.opts.poolQueryViaFetch??
I.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){I.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return I.opts.fetchEndpoint??I.defaults.fetchEndpoint}static set fetchEndpoint(t){
I.opts.fetchEndpoint=t}static get fetchConnectionCache(){return I.opts.fetchConnectionCache??
I.defaults.fetchConnectionCache}static set fetchConnectionCache(t){I.opts.fetchConnectionCache=
t}static get fetchFunction(){return I.opts.fetchFunction??I.defaults.fetchFunction}static set fetchFunction(t){
I.opts.fetchFunction=t}static get webSocketConstructor(){return I.opts.webSocketConstructor??
I.defaults.webSocketConstructor}static set webSocketConstructor(t){I.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??I.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return I.opts.wsProxy??I.defaults.
wsProxy}static set wsProxy(t){I.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
I.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return I.
opts.coalesceWrites??I.defaults.coalesceWrites}static set coalesceWrites(t){I.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??I.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return I.opts.useSecureWebSocket??
I.defaults.useSecureWebSocket}static set useSecureWebSocket(t){I.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??I.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return I.opts.forceDisablePgSSL??
I.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){I.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??I.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return I.opts.disableSNI??
I.defaults.disableSNI}static set disableSNI(t){I.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??I.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return I.opts.pipelineConnect??I.defaults.pipelineConnect}static set pipelineConnect(t){
I.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
I.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return I.opts.subtls??I.defaults.subtls}static set subtls(t){I.opts.subtls=t}get subtls(){
return this.opts.subtls??I.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return I.opts.pipelineTLS??I.defaults.pipelineTLS}static set pipelineTLS(t){I.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??I.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return I.opts.rootCerts??I.defaults.
rootCerts}static set rootCerts(t){I.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??I.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(t,n,i){
this.connecting=!0,i&&this.once("connect",i);let s;try{s=this.wsProxyAddrForHost(
n,typeof t=="string"?parseInt(t,10):t)}catch(a){this.emit("error",a),this.emit("\
close");return}return this.ws=await new Promise(async a=>{try{let c=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+s,l;if(this.webSocketConstructor!==void 0)l=new this.webSocketConstructor(
c);else try{l=new WebSocket(c)}catch{l=new __unstable_WebSocket(c)}l.addEventListener(
"open",()=>{a(l)})}catch(u){try{let l=(this.useSecureWebSocket?"https:":"http:")+
"//"+s;await fetch(l,{headers:{Upgrade:"websocket"}}).then(h=>{let f=h.webSocket;
if(f==null)throw u;f.accept(),a(f)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",a=>{this.emit(
"error",a),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",a=>{if(this.tlsState===0){let u=w.
from(a.data);this.emit("data",u)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let n=this.subtls.TrustedCert.fromPEM(this.rootCerts),
i=new this.subtls.WebSocketReadQueue(this.ws),s=i.read.bind(i),a=this.rawWrite.bind(
this),[u,c]=await this.subtls.startTls(t,n,s,a,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=c,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=w.from(t);this.emit(
"data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.
writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.
length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?i():(typeof t=="string"&&(t=w.from(
t,n)),this.tlsState===0?this.rawWrite(t):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(t,n,i)):this.tlsWrite(t),!0)}end(t=w.alloc(0),n="utf8",i){
return this.write(t,n,()=>{this.ws.close(),i&&i()}),this}destroy(){return this.destroyed=
!0,this.end()}};o(I,"Socket"),_(I,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:t=>"\
https://"+t+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
_(I,"opts",{});we=I});var zn=R(B=>{"use strict";y();Object.defineProperty(B,"__esModule",{value:!0});B.
NoticeMessage=B.DataRowMessage=B.CommandCompleteMessage=B.ReadyForQueryMessage=B.
NotificationResponseMessage=B.BackendKeyDataMessage=B.AuthenticationMD5Password=
B.ParameterStatusMessage=B.ParameterDescriptionMessage=B.RowDescriptionMessage=B.
Field=B.CopyResponse=B.CopyDataMessage=B.DatabaseError=B.copyDone=B.emptyQuery=B.
replicationStart=B.portalSuspended=B.noData=B.closeComplete=B.bindComplete=B.parseComplete=
void 0;B.parseComplete={name:"parseComplete",length:5};B.bindComplete={name:"bin\
dComplete",length:5};B.closeComplete={name:"closeComplete",length:5};B.noData={name:"\
noData",length:5};B.portalSuspended={name:"portalSuspended",length:5};B.replicationStart=
{name:"replicationStart",length:4};B.emptyQuery={name:"emptyQuery",length:4};B.copyDone=
{name:"copyDone",length:4};var Mn=class Mn extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};o(Mn,"DatabaseError");var bn=Mn;B.DatabaseError=bn;
var qn=class qn{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
o(qn,"CopyDataMessage");var xn=qn;B.CopyDataMessage=xn;var Fn=class Fn{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};o(Fn,"Co\
pyResponse");var An=Fn;B.CopyResponse=An;var Dn=class Dn{constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};o(Dn,"Field");var vn=Dn;B.Field=vn;var On=class On{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};o(On,"RowDescriptionMessage");var Cn=On;B.RowDescriptionMessage=
Cn;var kn=class kn{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};o(kn,"P\
arameterDescriptionMessage");var Ln=kn;B.ParameterDescriptionMessage=Ln;var Qn=class Qn{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};o(Qn,"ParameterStatusMessage");var Un=Qn;B.ParameterStatusMessage=Un;var $n=class $n{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};o($n,"Authenti\
cationMD5Password");var _n=$n;B.AuthenticationMD5Password=_n;var jn=class jn{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};o(jn,
"BackendKeyDataMessage");var Tn=jn;B.BackendKeyDataMessage=Tn;var Hn=class Hn{constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};o(Hn,"NotificationResponseMessage");var In=Hn;B.NotificationResponseMessage=
In;var Kn=class Kn{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};o(Kn,"ReadyForQueryMessage");var Pn=Kn;B.ReadyForQueryMessage=Pn;var Wn=class Wn{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};o(Wn,"CommandCompleteMes\
sage");var Bn=Wn;B.CommandCompleteMessage=Bn;var Gn=class Gn{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};o(Gn,"Data\
RowMessage");var Rn=Gn;B.DataRowMessage=Rn;var Vn=class Vn{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};o(Vn,"NoticeMessage");var Nn=Vn;B.NoticeMessage=
Nn});var Oa=R(or=>{"use strict";y();Object.defineProperty(or,"__esModule",{value:!0});
or.Writer=void 0;var Yn=class Yn{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=w.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=w.allocUnsafe(
i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=w.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=w.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(this.size),t}};o(Yn,"Wr\
iter");var Jn=Yn;or.Writer=Jn});var Qa=R(cr=>{"use strict";y();Object.defineProperty(cr,"__esModule",{value:!0});
cr.serialize=void 0;var Zn=Oa(),Y=new Zn.Writer,oh=o(r=>{Y.addInt16(3).addInt16(
0);for(let n of Object.keys(r))Y.addCString(n).addCString(r[n]);Y.addCString("cl\
ient_encoding").addCString("UTF8");var e=Y.addCString("").flush(),t=e.length+4;return new Zn.
Writer().addInt32(t).add(e).flush()},"startup"),uh=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),ch=o(r=>Y.
addCString(r).flush(112),"password"),lh=o(function(r,e){return Y.addCString(r).addInt32(
w.byteLength(e)).addString(e),Y.flush(112)},"sendSASLInitialResponseMessage"),hh=o(
function(r){return Y.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),fh=o(
r=>Y.addCString(r).flush(81),"query"),ka=[],dh=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ka;for(var n=t.length,
i=Y.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return Y.
flush(80)},"parse"),nt=new Zn.Writer,ph=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(Y.addInt16(0),nt.addInt32(-1)):n instanceof w?(Y.
addInt16(1),nt.addInt32(n.length),nt.add(n)):(Y.addInt16(0),nt.addInt32(w.byteLength(
n)),nt.addString(n))}},"writeValues"),yh=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ka,s=i.length;return Y.addCString(e).addCString(t),
Y.addInt16(s),ph(i,r.valueMapper),Y.addInt16(s),Y.add(nt.flush()),Y.addInt16(n?1:
0),Y.flush(66)},"bind"),wh=w.from([69,0,0,0,9,0,0,0,0,0]),mh=o(r=>{if(!r||!r.portal&&
!r.rows)return wh;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),gh=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Xn=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Sh=Y.addCString("P").flush(68),Eh=Y.addCString("S").flush(68),
bh=o(r=>r.name?Xn(68,`${r.type}${r.name||""}`):r.type==="P"?Sh:Eh,"describe"),xh=o(
r=>{let e=`${r.type}${r.name||""}`;return Xn(67,e)},"close"),Ah=o(r=>Y.add(r).flush(
100),"copyData"),vh=o(r=>Xn(102,r),"copyFail"),ur=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Ch=ur(72),Lh=ur(83),Uh=ur(88),_h=ur(99),Th={startup:oh,password:ch,
requestSsl:uh,sendSASLInitialResponseMessage:lh,sendSCRAMClientFinalMessage:hh,query:fh,
parse:dh,bind:yh,execute:mh,describe:bh,close:xh,flush:()=>Ch,sync:()=>Lh,end:()=>Uh,
copyData:Ah,copyDone:()=>_h,copyFail:vh,cancel:gh};cr.serialize=Th});var $a=R(lr=>{"use strict";y();Object.defineProperty(lr,"__esModule",{value:!0});
lr.BufferReader=void 0;var Ih=w.allocUnsafe(0),ti=class ti{constructor(e=0){this.
offset=e,this.buffer=Ih,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};o(ti,"BufferReader");var ei=ti;lr.BufferReader=
ei});var ja={};ye(ja,{default:()=>Ph});var Ph,Ha=le(()=>{y();Ph={}});var Ga=R(it=>{"use strict";y();var Bh=it&&it.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(it,"__esModule",{value:!0});it.
Parser=void 0;var Z=zn(),Rh=$a(),Nh=Bh((Ha(),ee(ja))),ri=1,Mh=4,Ka=ri+Mh,Wa=w.allocUnsafe(
0),ii=class ii{constructor(e){if(this.buffer=Wa,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Rh.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+Ka<=n;){let s=this.buffer[i],
a=this.buffer.readUInt32BE(i+ri),u=ri+a;if(u+i<=n){let c=this.handlePacket(i+Ka,
s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=Wa,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return Z.bindComplete;case 49:return Z.parseComplete;case 51:return Z.
closeComplete;case 110:return Z.noData;case 115:return Z.portalSuspended;case 99:
return Z.copyDone;case 87:return Z.replicationStart;case 73:return Z.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:Nh.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new Z.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new Z.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new Z.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,a=this.reader.int16(),u=new Z.CopyResponse(t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.reader.cstring();return new Z.
NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new Z.RowDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new Z.
Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new Z.ParameterDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<i;a++){
let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new Z.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new Z.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new Z.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new Z.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&s.mechanisms.push(a);while(a);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=
this.reader.cstring(),a=this.reader.string(1);let u=s.M,c=i==="notice"?new Z.NoticeMessage(
t,u):new Z.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};o(ii,"Parser");var ni=ii;it.Parser=ni});var si=R(Re=>{"use strict";y();Object.defineProperty(Re,"__esModule",{value:!0});
Re.DatabaseError=Re.serialize=Re.parse=void 0;var qh=zn();Object.defineProperty(
Re,"DatabaseError",{enumerable:!0,get:function(){return qh.DatabaseError}});var Fh=Qa();
Object.defineProperty(Re,"serialize",{enumerable:!0,get:function(){return Fh.serialize}});
var Dh=Ga();function Oh(r,e){let t=new Dh.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(Oh,"parse");Re.parse=Oh});var Va={};ye(Va,{connect:()=>kh});function kh({socket:r,servername:e}){return r.
startTls(e),r}var za=le(()=>{y();o(kh,"connect")});var ui=R((Wp,Za)=>{"use strict";y();var Ja=(ar(),ee(Da)),Qh=Pe().EventEmitter,{parse:$h,
serialize:ne}=si(),Ya=ne.flush(),jh=ne.sync(),Hh=ne.end(),oi=class oi extends Qh{constructor(e){
super(),e=e||{},this.stream=e.stream||new Ja.Socket,this._keepAlive=e.keepAlive,
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
nnection"))}var u=(za(),ee(Va));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Ja.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(l){return n.emit("error",l)}n.attachListeners(n.stream),
n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),$h(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(ne.requestSsl())}startup(e){
this.stream.write(ne.startup(e))}cancel(e,t){this._send(ne.cancel(e,t))}password(e){
this._send(ne.password(e))}sendSASLInitialResponseMessage(e,t){this._send(ne.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(ne.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(ne.query(
e))}parse(e){this._send(ne.parse(e))}bind(e){this._send(ne.bind(e))}execute(e){this.
_send(ne.execute(e))}flush(){this.stream.writable&&this.stream.write(Ya)}sync(){
this._ending=!0,this._send(Ya),this._send(jh)}ref(){this.stream.ref()}unref(){this.
stream.unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){
this.stream.end();return}return this.stream.write(Hh,()=>{this.stream.end()})}close(e){
this._send(ne.close(e))}describe(e){this._send(ne.describe(e))}sendCopyFromChunk(e){
this._send(ne.copyData(e))}endCopyFrom(){this._send(ne.copyDone())}sendCopyFail(e){
this._send(ne.copyFail(e))}};o(oi,"Connection");var ai=oi;Za.exports=ai});var to=R((Jp,eo)=>{"use strict";y();var Kh=Pe().EventEmitter,zp=(At(),ee(xt)),Wh=Rt(),
ci=ca(),Gh=Ea(),Vh=ln(),zh=sr(),Xa=qa(),Jh=Bt(),Yh=ui(),li=class li extends Kh{constructor(e){
super(),this.connectionParameters=new zh(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||L.Promise,this._types=new Vh(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Yh({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||Jh.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=o(
n=>{g.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let i=new Error("Client has already been conn\
ected. You cannot reuse a client.");g.nextTick(()=>{e(i)});return}this._connecting=
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
i)),g.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
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
this._checkPgPass(()=>{let t=Wh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=ci.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
ci.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){ci.finalizeSession(this.saslSession,
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
e&&g.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,a,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(a=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new Xa(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,d)=>f?h(f):l(d)}))),
a&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");g.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},a),i.callback=
(l,h)=>{clearTimeout(u),c(l,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(g.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(g.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};o(li,"Client");var hr=li;hr.Query=
Xa;eo.exports=hr});var so=R((Xp,io)=>{"use strict";y();var Zh=Pe().EventEmitter,ro=o(function(){},"\
NOOP"),no=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),di=class di{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};o(di,"IdleItem");var hi=di,pi=class pi{constructor(e){this.callback=
e}};o(pi,"PendingItem");var st=pi;function Xh(){throw new Error("Release called \
on client which has already been released to the pool.")}o(Xh,"throwOnDoubleRele\
ase");function fr(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(
a),a});return{callback:i,result:s}}o(fr,"promisify");function ef(r,e){return o(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}o(ef,"makeIdleListener");var yi=class yi extends Zh{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||dr().Client,this.Promise=
this.options.Promise||L.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,
this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse q\
ueue"),this.ended){this.log("pulse queue ended");return}if(this.ending){this.log(
"pulse queue on ending"),this._idle.length&&this._idle.slice().map(t=>{this._remove(
t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}if(!this.
_pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&
this._isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this.
_idle.pop();clearTimeout(t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;
return this._acquireClient(n,e,i,!1)}if(!this._isFull())return this.newClient(e);
throw new Error("unexpected condition")}_remove(e){let t=no(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Can\
not use a pool after calling end on the pool");return e?e(i):this.Promise.reject(
i)}let t=fr(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&g.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new st(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(
a),t.callback(u,c,l)},"queueCallback"),s=new st(i),a=setTimeout(()=>{no(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(s),n}return this.newClient(new st(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=ef(this,t);this.log("checking c\
lient timeout");let i,s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{
this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to\
 connect",a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
a,void 0,ro);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(
t,new st((l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,ro);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&Xh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new hi(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=fr(this.Promise,e);
return U(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=fr(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=fr(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};o(yi,"Pool");var fi=yi;io.exports=fi});var ao={};ye(ao,{default:()=>tf});var tf,oo=le(()=>{y();tf={}});var uo=R((n0,rf)=>{rf.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var ho=R((i0,lo)=>{"use strict";y();var co=Pe().EventEmitter,nf=(At(),ee(xt)),wi=Rt(),
at=lo.exports=function(r,e,t){co.call(this),r=wi.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};nf.inherits(
at,co);var sf={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};at.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=sf[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};at.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};at.prototype.catch=function(r){return this._getPromise().
catch(r)};at.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};at.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,U(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(g.domain&&(t=g.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(wi.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(wi.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var wo=R((u0,yo)=>{"use strict";y();var af=(oo(),ee(ao)),of=ln(),o0=uo(),fo=Pe().
EventEmitter,uf=(At(),ee(xt)),cf=sr(),po=ho(),pe=yo.exports=function(r){fo.call(
this),r=r||{},this._Promise=r.Promise||L.Promise,this._types=new of(r.types),this.
native=new af({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new cf(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};pe.Query=po;uf.inherits(pe,fo);pe.prototype._errorAllQueries=
function(r){let e=o(t=>{g.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};pe.prototype._connect=
function(r){var e=this;if(this._connecting){g.nextTick(()=>r(new Error("Client h\
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
query_timeout,n=new po(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
h,l=f}),n.callback=(h,f)=>h?l(h):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");g.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{clearTimeout(a),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,g.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,g.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
pe.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),g.nextTick(()=>{e.emit("end"),r&&r()})}),t};pe.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};pe.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};pe.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};pe.prototype.ref=function(){};
pe.prototype.unref=function(){};pe.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};pe.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var mi=R((h0,mo)=>{"use strict";y();mo.exports=wo()});var dr=R((d0,Mt)=>{"use strict";y();var lf=to(),hf=Bt(),ff=ui(),df=so(),{DatabaseError:pf}=si(),
yf=o(r=>{var e;return e=class extends df{constructor(n){super(n,r)}},o(e,"BoundP\
ool"),e},"poolFactory"),gi=o(function(r){this.defaults=hf,this.Client=r,this.Query=
this.Client.Query,this.Pool=yf(this.Client),this._pools=[],this.Connection=ff,this.
types=Pt(),this.DatabaseError=pf},"PG");typeof g.env.NODE_PG_FORCE_NATIVE<"u"?Mt.
exports=new gi(mi()):(Mt.exports=new gi(lf),Object.defineProperty(Mt.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new gi(mi())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(Mt.exports,"\
native",{value:r}),r}}))});y();var Nr={};ye(Nr,{SocketReadQueue:()=>Qu,TrustedCert:()=>rs,WebSocketReadQueue:()=>ku,
startTls:()=>Ou});y();function oe(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(oe,"p");function Et(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(Et,"O");var Tr="\xB7\xB7 ",
Vi=new TextEncoder,mu=new TextDecoder,dt,xe=(dt=class{constructor(e){_(this,"off\
set");_(this,"dataView");_(this,"data");_(this,"comments");_(this,"indents");_(this,
"indent");this.offset=0,this.data=typeof e=="number"?new Uint8Array(e):e,this.dataView=
new DataView(this.data.buffer,this.data.byteOffset,this.data.byteLength),this.comments=
{},this.indents={},this.indent=0}extend(e){let t=typeof e=="number"?new Uint8Array(
e):e;this.data=oe(this.data,t),this.dataView=new DataView(this.data.buffer,this.
data.byteOffset,this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(e){
return this.data.subarray(this.offset,this.offset+=e)}skip(e,t){return this.offset+=
e,t&&this.comment(t),this}comment(e,t=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}readBytes(e){return this.data.slice(this.
offset,this.offset+=e)}readUTF8String(e){let t=this.subarray(e);return mu.decode(
t)}readUTF8StringNullTerminated(){let e=this.offset;for(;this.data[e]!==0;)e++;let t=this.
readUTF8String(e-this.offset);return this.expectUint8(0,"end of string"),t}readUint8(e){
let t=this.dataView.getUint8(this.offset);return this.offset+=1,t}readUint16(e){
let t=this.dataView.getUint16(this.offset);return this.offset+=2,t}readUint24(e){
let t=this.readUint8(),n=this.readUint16();return(t<<16)+n}readUint32(e){let t=this.
dataView.getUint32(this.offset);return this.offset+=4,t}expectBytes(e,t){let n=this.
readBytes(e.length);if(!Et(n,e))throw new Error("Unexpected bytes")}expectUint8(e,t){
let n=this.readUint8();if(n!==e)throw new Error(`Expected ${e}, got ${n}`)}expectUint16(e,t){
let n=this.readUint16();if(n!==e)throw new Error(`Expected ${e}, got ${n}`)}expectUint24(e,t){
let n=this.readUint24();if(n!==e)throw new Error(`Expected ${e}, got ${n}`)}expectUint32(e,t){
let n=this.readUint32();if(n!==e)throw new Error(`Expected ${e}, got ${n}`)}expectLength(e,t=1){
let n=this.offset,i=n+e;if(i>this.data.length)throw new Error("Expected length e\
xceeds remaining data length");return this.indent+=t,this.indents[n]=this.indent,
[()=>{if(this.indent-=t,this.indents[this.offset]=this.indent,this.offset!==i)throw new Error(
`${e} bytes expected but ${this.offset-n} read`)},()=>i-this.offset]}expectLengthUint8(e){
let t=this.readUint8();return this.expectLength(t)}expectLengthUint16(e){let t=this.
readUint16();return this.expectLength(t)}expectLengthUint24(e){let t=this.readUint24();
return this.expectLength(t)}expectLengthUint32(e){let t=this.readUint32();return this.
expectLength(t)}expectLengthUint8Incl(e){let t=this.readUint8();return this.expectLength(
t-1)}expectLengthUint16Incl(e){let t=this.readUint16();return this.expectLength(
t-2)}expectLengthUint24Incl(e){let t=this.readUint24();return this.expectLength(
t-3)}expectLengthUint32Incl(e){let t=this.readUint32();return this.expectLength(
t-4)}writeBytes(e){return this.data.set(e,this.offset),this.offset+=e.length,this}writeUTF8String(e){
let t=Vi.encode(e);return this.writeBytes(t),this}writeUTF8StringNullTerminated(e){
let t=Vi.encode(e);return this.writeBytes(t),this.writeUint8(0),this}writeUint8(e,t){
return this.dataView.setUint8(this.offset,e),this.offset+=1,this}writeUint16(e,t){
return this.dataView.setUint16(this.offset,e),this.offset+=2,this}writeUint24(e,t){
return this.writeUint8((e&16711680)>>16),this.writeUint16(e&65535,t),this}writeUint32(e,t){
return this.dataView.setUint32(this.offset,e),this.offset+=4,this}_writeLengthGeneric(e,t,n){
let i=this.offset;this.offset+=e;let s=this.offset;return this.indent+=1,this.indents[s]=
this.indent,()=>{let a=this.offset-(t?i:s);if(e===1)this.dataView.setUint8(i,a);else if(e===
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
void 0?Tr.repeat(this.indents[0]):"",n=this.indents[0]??0,i=e?this.data.length:this.
offset;for(let s=0;s<i;s++){t+=this.data[s].toString(16).padStart(2,"0")+" ";let a=this.
comments[s+1];this.indents[s+1]!==void 0&&(n=this.indents[s+1]),a&&(t+=` ${a}
${Tr.repeat(n)}`)}return t}},o(dt,"N"),dt);function gu(r,e,t,n=!0){let i=new xe(
1024);i.writeUint8(22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(
1,0);let a=i.writeLengthUint24();i.writeUint16(771,0),A.getRandomValues(i.subarray(
32));let u=i.writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);
i.writeUint16(4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.
writeLengthUint16(0);if(n){i.writeUint16(0,0);let q=i.writeLengthUint16(0),Q=i.writeLengthUint16(
0);i.writeUint8(0,0);let $=i.writeLengthUint16(0);i.writeUTF8String(r),$(),Q(),q()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),d=i.writeLengthUint8(0);i.writeUint8(
0,0),d(),f(),i.writeUint16(10,0);let S=i.writeLengthUint16(0),E=i.writeLengthUint16(
0);i.writeUint16(23,0),E(),S(),i.writeUint16(13,0);let v=i.writeLengthUint16(0),
x=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),x(),v(),i.writeUint16(
43,0);let P=i.writeLengthUint16(0),b=i.writeLengthUint8(0);i.writeUint16(772,0),
b(),P(),i.writeUint16(51,0);let m=i.writeLengthUint16(0),C=i.writeLengthUint16(0);
i.writeUint16(23,0);let N=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),N(),C(),m(),h(),a(),s(),i}o(gu,"St");function Te(r,e=""){return[...r].map(t=>t.
toString(16).padStart(2,"0")).join(e)}o(Te,"K");function Su(r,e){let t,n,[i]=r.expectLength(
r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(
771,0);let a=r.readBytes(32);if(Et(a,[207,33,173,116,229,154,97,17,190,29,140,2,
30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error(
"Unexpected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Te([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
o(Su,"Ut");var If=new RegExp(`  .+|^(${Tr})+`,"gm"),ft=16384,Eu=ft+1+255;async function Ir(r,e,t=ft){
let n=await r(5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record \
header truncated");let i=new xe(n),s=i.readUint8();if(s<20||s>24)throw new Error(
`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(
`Unexpected TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.
toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (mid\
dlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(`Record too\
 long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("\
TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
o(Ir,"ht");async function Pr(r,e,t){let n=await Ir(r,23,Eu);if(n===void 0)return;
let i=new xe(n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),
i.skip(16,0),s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===
0;)u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (\
all zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&
l[1]===0)){if(c===22&&l[0]===4)return Pr(r,e,t);if(t!==void 0&&c!==t)throw new Error(
`Unexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.
toString(16).padStart(2,"0")})`);return l}}o(Pr,"dt");async function bu(r,e,t){let n=oe(
r,[t]),i=5,s=n.length+16,a=new xe(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.
writeUint16(s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.
process(n,16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(
l.length-16)),u(),a.array()}o(bu,"ee");async function zi(r,e,t){let n=Math.ceil(
r.length/ft),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*ft,(s+1)*ft),u=await bu(
a,e,t);i.push(u)}return i}o(zi,"At");var O=A.subtle,es=new TextEncoder;async function Br(r,e,t){
let n=await O.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await O.sign("HMAC",n,e));return i}o(Br,"lt");async function xu(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await O.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=oe(c,e,[l+1]),f=await O.sign("HMAC",u,h),d=new Uint8Array(f);a.set(d,i*l),
c=d}return a.subarray(0,t)}o(xu,"ne");var Ji=es.encode("tls13 ");async function ue(r,e,t,n,i){
let s=es.encode(e),a=oe([(n&65280)>>8,n&255],[Ji.length+s.length],Ji,s,[t.length],
t);return xu(r,a,n,i)}o(ue,"S");async function Au(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await O.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await O.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await O.digest("S\
HA-256",t),f=new Uint8Array(h),d=await Br(new Uint8Array(1),a,n),S=await O.digest(
`SHA-${n}`,new Uint8Array(0)),E=new Uint8Array(S),v=await ue(d,"derived",E,s,n),
x=await Br(v,l,n),P=await ue(x,"c hs traffic",f,s,n),b=await ue(x,"s hs traffic",
f,s,n),m=await ue(P,"key",new Uint8Array(0),i,n),C=await ue(b,"key",new Uint8Array(
0),i,n),N=await ue(P,"iv",new Uint8Array(0),12,n),q=await ue(b,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:C,serverHandshakeIV:q,clientHandshakeKey:m,clientHandshakeIV:N,
handshakeSecret:x,clientSecret:P,serverSecret:b}}o(Au,"Kt");async function vu(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await O.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ue(r,"derived",u,i,t),l=await Br(c,s,t),h=await ue(l,"c ap traffic",e,
i,t),f=await ue(l,"s ap traffic",e,i,t),d=await ue(h,"key",new Uint8Array(0),n,t),
S=await ue(f,"key",new Uint8Array(0),n,t),E=await ue(h,"iv",new Uint8Array(0),12,
t),v=await ue(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:S,serverApplicationIV:v,
clientApplicationKey:d,clientApplicationIV:E}}o(vu,"Tt");var pt,Ht=(pt=class{constructor(e,t,n){
_(this,"recordsProcessed",0n);_(this,"priorPromise",Promise.resolve(new Uint8Array));
this.mode=e,this.key=t,this.initialIv=n}async process(e,t,n){let i=this.processUnsequenced(
e,t,n);return this.priorPromise=this.priorPromise.then(()=>i)}async processUnsequenced(e,t,n){
let i=this.recordsProcessed;this.recordsProcessed+=1n;let s=this.initialIv.slice(),
a=BigInt(s.length),u=a-1n;for(let f=0n;f<a;f++){let d=i>>(f<<3n);if(d===0n)break;
s[Number(u-f)]^=Number(d&0xffn)}let c=t<<3,l={name:"AES-GCM",iv:s,tagLength:c,additionalData:n},
h=await O[this.mode](l,this.key,e);return new Uint8Array(h)}},o(pt,"Z"),pt);function Kt(r){
return r>64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?
64:void 0}o(Kt,"yt");function Cu(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,u=64,c=new Uint8Array(
e*.75);for(;t<e;)i=Kt(r.charCodeAt(t++)),s=Kt(r.charCodeAt(t++)),a=Kt(r.charCodeAt(
t++)),u=Kt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&15)<<4|a>>2,c[n++]=(a&3)<<
6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(0,n-l)}o(Cu,"Dt");var yt,
Wt=(yt=class extends xe{readASN1Length(e){let t=this.readUint8();if(t<128)return t;
let n=t&127,i=0;if(n===1)return this.readUint8(i);if(n===2)return this.readUint16(
i);if(n===3)return this.readUint24(i);if(n===4)return this.readUint32(i);throw new Error(
`ASN.1 length fields are only supported up to 4 bytes (this one is ${n} bytes)`)}expectASN1Length(e){
let t=this.readASN1Length(e);return this.expectLength(t)}readASN1OID(){let[e,t]=this.
expectASN1Length(0),n=this.readUint8(),i=`${Math.floor(n/40)}.${n%40}`;for(;t()>
0;){let s=0;for(;;){let a=this.readUint8();if(s<<=7,s+=a&127,a<128)break}i+=`.${s}`}
return e(),i}readASN1Boolean(){let[e,t]=this.expectASN1Length(0),n=t();if(n!==1)
throw new Error(`Boolean has weird length: ${n}`);let i=this.readUint8(),s;if(i===
255)s=!0;else if(i===0)s=!1;else throw new Error(`Boolean has weird value: 0x${Te(
[i])}`);return e(),s}readASN1UTCTime(){let[e,t]=this.expectASN1Length(0),n=this.
readUTF8String(t()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);if(!n)throw new Error(
"Unrecognised ASN.1 UTC time format");let[,i,s,a,u,c,l]=n,h=parseInt(i,10),f=h+(h>=
50?1900:2e3),d=new Date(`${f}-${s}-${a}T${u}:${c}:${l}Z`);return e(),d}readASN1BitString(){
let[e,t]=this.expectASN1Length(0),n=this.readUint8(0),i=t(),s=this.readBytes(i);
if(n>7)throw new Error(`Invalid right pad value: ${n}`);if(n>0){let a=8-n;for(let u=i-
1;u>0;u--)s[u]=255&s[u-1]<<a|s[u]>>>n;s[0]=s[0]>>>n}return e(),s}},o(yt,"M"),yt);
function Yi(r,e=(n,i)=>i,t){return JSON.stringify(r,(n,i)=>e(n,typeof i!="object"||
i===null||Array.isArray(i)?i:Object.fromEntries(Object.entries(i).sort(([s],[a])=>s<
a?-1:s>a?1:0))),t)}o(Yi,"mt");var Lr=1,Gt=2,ae=48,Lu=49,ze=6,Uu=19,_u=12,Zi=23,Ur=5,
De=4,_r=3,Tu=163,Ve=128,Iu={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.\
3":"CN","2.5.4.7":"L","2.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"\
I","2.5.4.4":"SN","1.2.840.113549.1.9.1":"E-mail"};function Pu(r){let{length:e}=r;
if(e>4)throw new Error(`Bit string length ${e} would overflow JS bit operators`);
let t=0,n=0;for(let i=r.length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o(Pu,"qt");function Xi(r,e){
let t={};r.expectUint8(ae,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(
Lu,0);let[s]=r.expectASN1Length(0);r.expectUint8(ae,0);let[a]=r.expectASN1Length(
0);r.expectUint8(ze,0);let u=r.readASN1OID(),c=Iu[u]??u,l=r.readUint8();if(l!==Uu&&
l!==_u)throw new Error(`Unexpected item type in certificate ${e}: 0x${Te([l])}`);
let[h,f]=r.expectASN1Length(0),d=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)
throw new Error(`Duplicate OID ${c} in certificate ${e}`);t[c]=d}return n(),t}o(
Xi,"Ct");function Bu(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.
readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.
readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o(Bu,"Bt");function Ru(r){
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
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(Ru,"Ft");function ts(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=ts(t,e)}),e}
o(ts,"Ot");function Nu(r){return ts(r).join(" / ")}o(Nu,"Pt");var Mu=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],Oe,Rr=(Oe=class{constructor(e){
_(this,"serialNumber");_(this,"algorithm");_(this,"issuer");_(this,"validityPeri\
od");_(this,"subject");_(this,"publicKey");_(this,"signature");_(this,"keyUsage");
_(this,"subjectAltNames");_(this,"extKeyUsage");_(this,"authorityKeyIdentifier");
_(this,"subjectKeyIdentifier");_(this,"basicConstraints");_(this,"signedData");let t=e instanceof
Wt?e:new Wt(e);t.expectUint8(ae,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(
ae,0);let[s]=t.expectASN1Length(0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(
Gt,0);let[a,u]=t.expectASN1Length(0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(
ae,0);let[c,l]=t.expectASN1Length(0);t.expectUint8(ze,0),this.algorithm=t.readASN1OID(),
l()>0&&(t.expectUint8(Ur,0),t.expectUint8(0,0)),c(),this.issuer=Xi(t,"issuer"),t.
expectUint8(ae,0);let[h]=t.expectASN1Length(0);t.expectUint8(Zi,0);let f=t.readASN1UTCTime();
t.expectUint8(Zi,0);let d=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:d},
h(),this.subject=Xi(t,"subject");let S=t.offset;t.expectUint8(ae,0);let[E]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[v,x]=t.expectASN1Length(0),P=[];for(;x()>0;){let ie=t.
readUint8();if(ie===ze){let M=t.readASN1OID();P.push(M)}else ie===Ur&&t.expectUint8(
0,0)}v(),t.expectUint8(_r,0);let b=t.readASN1BitString();this.publicKey={identifiers:P,
data:b,all:t.data.subarray(S,t.offset)},E(),t.expectUint8(Tu,0);let[m]=t.expectASN1Length();
t.expectUint8(ae,0);let[C,N]=t.expectASN1Length(0);for(;N()>0;){t.expectUint8(ae,
0);let[ie,M]=t.expectASN1Length();t.expectUint8(ze,0);let j=t.readASN1OID();if(j===
"2.5.29.17"){t.expectUint8(De,0);let[H]=t.expectASN1Length(0);t.expectUint8(ae,0);
let K=Bu(t,Ve);this.subjectAltNames=K.filter(z=>z.type===(2|Ve)).map(z=>z.name),
H()}else if(j==="2.5.29.15"){t.expectUint8(Lr,0);let H=t.readASN1Boolean();t.expectUint8(
De,0);let[K]=t.expectASN1Length(0);t.expectUint8(_r,0);let z=t.readASN1BitString(),
W=Pu(z),D=new Set(Mu.filter((G,V)=>W&1<<V));K(),this.keyUsage={critical:H,usages:D}}else if(j===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(De,0);let[H]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[K,z]=t.expectASN1Length(0);for(;z()>0;){t.expectUint8(ze,
0);let W=t.readASN1OID();W==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
W==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}K(),H()}else if(j==="2.\
5.29.35"){t.expectUint8(De,0);let[H]=t.expectASN1Length(0);t.expectUint8(ae,0);let[
K,z]=t.expectASN1Length(0);for(;z()>0;){let W=t.readUint8();if(W===(Ve|0)){let[D,
G]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(G()),D()}else if(W===
(Ve|1)){let[D,G]=t.expectASN1Length(0);t.skip(G(),0),D()}else if(W===(Ve|2)){let[
D,G]=t.expectASN1Length(0);t.skip(G(),0),D()}else if(W===(Ve|33)){let[D,G]=t.expectASN1Length(
0);t.skip(G(),0),D()}else throw new Error(`Unexpected data type ${W} in authorit\
yKeyIdentifier certificate extension`)}K(),H()}else if(j==="2.5.29.14"){t.expectUint8(
De,0);let[H]=t.expectASN1Length(0);t.expectUint8(De,0);let[K,z]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(z()),K(),H()}else if(j==="2.5.29.19"){let H,
K=t.readUint8();if(K===Lr&&(H=t.readASN1Boolean(),K=t.readUint8()),K!==De)throw new Error(
"Unexpected type in certificate basic constraints");let[z]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[W,D]=t.expectASN1Length(),G;D()>0&&(t.expectUint8(Lr,0),
G=t.readASN1Boolean());let V;if(D()>0){t.expectUint8(Gt,0);let F=t.readASN1Length(
0);if(V=F===1?t.readUint8():F===2?t.readUint16():F===3?t.readUint24():void 0,V===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}W(),z(),this.basicConstraints={critical:H,ca:G,pathLength:V}}else t.
skip(M(),0);ie()}C(),m(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
ae,0);let[q,Q]=t.expectASN1Length(0);t.expectUint8(ze,0);let $=t.readASN1OID();if(Q()>
0&&(t.expectUint8(Ur,0),t.expectUint8(0,0)),q(),$!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${$})`);t.expectUint8(_r,0),this.signature=t.readASN1BitString(),n()}static distinguishedNamesAreEqual(e,t){
return Yi(e)===Yi(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}static fromPEM(e){let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}\
-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){
let a=s[1].replace(/[\r\n]/g,""),u=Cu(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){
let t=/[.][^.]+[.][^.]+$/;return(this.subjectAltNames??[]).find(n=>{let i=n,s=e;
if(t.test(e)&&t.test(i)&&i.startsWith("*.")&&(i=i.slice(1),s=s.slice(s.indexOf("\
."))),i===s)return!0})}isValidAtMoment(e=new Date){return e>=this.validityPeriod.
notBefore&&e<=this.validityPeriod.notAfter}description(){return"subject: "+Oe.readableDN(
this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Te(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+Oe.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
authority key id: ${Te(this.authorityKeyIdentifier," ")}`:"")+`
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
signature algorithm: `+Nu(Ru(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},o(Oe,"r"),Oe),wt,rs=(wt=class extends Rr{},o(wt,"st"),wt);
async function ns(r,e,t,n,i){r.expectUint8(ae,0);let[s]=r.expectASN1Length(0);r.
expectUint8(Gt,0);let[a,u]=r.expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(
Gt,0);let[l,h]=r.expectASN1Length(0),f=r.readBytes(h());l(),s();let d=o((x,P)=>x.
length>P?x.subarray(x.length-P):x.length<P?oe(new Uint8Array(P-x.length),x):x,"m"),
S=n==="P-256"?32:48,E=oe(d(c,S),d(f,S)),v=await O.importKey("spki",e,{name:"ECDS\
A",namedCurve:n},!1,["verify"]);if(await O.verify({name:"ECDSA",hash:i},v,E,t)!==
!0)throw new Error("ECDSA-SECP256R1-SHA256 certificate verify failed")}o(ns,"pt");
async function qu(r,e,t,n=!0,i=!0){for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(
r)===void 0)throw new Error(`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())
throw new Error("End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)
throw new Error("End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t)
;for(let u=0,c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===
void 0?f=t.find(E=>Rr.distinguishedNamesAreEqual(E.subject,l.issuer)):f=t.find(E=>E.
subjectKeyIdentifier!==void 0&&Et(E.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+
1]),f===void 0)throw new Error("Ran out of certificates before reaching trusted \
root");let d=f instanceof rs;if(f.isValidAtMoment()!==!0)throw new Error("Signin\
g certificate is not valid now");if(i&&f.keyUsage?.usages.has("digitalSignature")!==
!0)throw new Error("Signing certificate keyUsage does not include digital signat\
ures");if(f.basicConstraints?.ca!==!0)throw new Error("Signing certificate basic\
Constraints do not indicate a CA certificate");let{pathLength:S}=f.basicConstraints;
if(S!==void 0&&S<u)throw new Error("Exceeded certificate pathLength");if(l.algorithm===
"1.2.840.10045.4.3.2"||l.algorithm==="1.2.840.10045.4.3.3"){let E=l.algorithm===
"1.2.840.10045.4.3.2"?"SHA-256":"SHA-384",v=f.publicKey.identifiers,x=v.includes(
"1.2.840.10045.3.1.7")?"P-256":v.includes("1.3.132.0.34")?"P-384":void 0;if(x===
void 0)throw new Error("Unsupported signing key curve");let P=new Wt(l.signature);
await ns(P,f.publicKey.all,l.signedData,x,E)}else if(l.algorithm==="1.2.840.1135\
49.1.1.11"||l.algorithm==="1.2.840.113549.1.1.12"){let E=l.algorithm==="1.2.840.\
113549.1.1.11"?"SHA-256":"SHA-384",v=await O.importKey("spki",f.publicKey.all,{name:"\
RSASSA-PKCS1-v1_5",hash:E},!1,["verify"]);if(await O.verify({name:"RSASSA-PKCS1-\
v1_5"},v,l.signature,l.signedData)!==!0)throw new Error("RSASSA_PKCS1-v1_5-SHA25\
6 certificate verify failed")}else throw new Error("Unsupported signing algorith\
m");if(d){a=!0;break}}return a}o(qu,"jt");var Fu=new TextEncoder;async function Du(r,e,t,n,i,s=!0,a=!0){
let u=new Wt(await e());u.expectUint8(8,0);let[c]=u.expectLengthUint24(),[l,h]=u.
expectLengthUint16(0);for(;h()>0;){let F=u.readUint16(0);if(F===0)u.expectUint16(
0,0);else if(F===10){let[te,ve]=u.expectLengthUint16("groups data");u.skip(ve(),
0),te()}else throw new Error(`Unsupported server encrypted extension type 0x${Te(
[F]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.extend(await e());let f=!1,
d=u.readUint8();if(d===13){f=!0;let[F]=u.expectLengthUint24("certificate request\
 data");u.expectUint8(0,0);let[te,ve]=u.expectLengthUint16("certificate request \
extensions");u.skip(ve(),0),te(),F(),u.remaining()===0&&u.extend(await e()),d=u.
readUint8()}if(d!==11)throw new Error(`Unexpected handshake message type 0x${Te(
[d])}`);let[S]=u.expectLengthUint24(0);u.expectUint8(0,0);let[E,v]=u.expectLengthUint24(
0),x=[];for(;v()>0;){let[F]=u.expectLengthUint24(0),te=new Rr(u);x.push(te),F();
let[ve,$e]=u.expectLengthUint16(),xi=u.subarray($e());ve()}if(E(),S(),x.length===
0)throw new Error("No certificates supplied");let P=x[0],b=u.data.subarray(0,u.offset),
m=oe(n,b),C=await O.digest("SHA-256",m),N=new Uint8Array(C),q=oe(Fu.encode(" ".repeat(
64)+"TLS 1.3, server CertificateVerify"),[0],N);u.remaining()===0&&u.extend(await e()),
u.expectUint8(15,0);let[Q]=u.expectLengthUint24(0),$=u.readUint16();if($===1027){
let[F]=u.expectLengthUint16();await ns(u,P.publicKey.all,q,"P-256","SHA-256"),F()}else if($===
2052){let[F,te]=u.expectLengthUint16(),ve=u.subarray(te());F();let $e=await O.importKey(
"spki",P.publicKey.all,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]);if(await O.
verify({name:"RSA-PSS",saltLength:32},$e,ve,q)!==!0)throw new Error("RSA-PSS-RSA\
E-SHA256 certificate verify failed")}else throw new Error(`Unsupported certifica\
te verify signature type 0x${Te([$]).padStart(4,"0")}`);Q();let ie=u.data.subarray(
0,u.offset),M=oe(n,ie),j=await ue(t,"finished",new Uint8Array(0),32,256),H=await O.
digest("SHA-256",M),K=await O.importKey("raw",j,{name:"HMAC",hash:{name:"SHA-256"}},
!1,["sign"]),z=await O.sign("HMAC",K,H),W=new Uint8Array(z);u.remaining()===0&&u.
extend(await e()),u.expectUint8(20,0);let[D,G]=u.expectLengthUint24(0),V=u.readBytes(
G());if(D(),u.remaining()!==0)throw new Error("Unexpected extra bytes in server \
handshake");if(Et(V,W)!==!0)throw new Error("Invalid server verify hash");if(!await qu(
r,x,i,s,a))throw new Error("Validated certificate chain did not end in a trusted\
 root");return[u.data,f]}o(Du,"Vt");async function Ou(r,e,t,n,{useSNI:i,requireServerTlsExtKeyUsage:s,
requireDigitalSigKeyUsage:a,writePreData:u,expectPreData:c,commentPreData:l}={}){
i??(i=!0),s??(s=!0),a??(a=!0);let h=await O.generateKey({name:"ECDH",namedCurve:"\
P-256"},!0,["deriveKey","deriveBits"]),f=await O.exportKey("raw",h.publicKey),d=new Uint8Array(
32);A.getRandomValues(d);let S=gu(r,f,d,i).array(),E=u?oe(u,S):S;if(n(E),c){let se=await t(
c.length);if(!se||!Et(se,c))throw new Error("Pre data did not match expectation")}
let v=await Ir(t,22);if(v===void 0)throw new Error("Connection closed while awai\
ting server hello");let x=new xe(v.content),P=Su(x,d),b=await Ir(t,20);if(b===void 0)
throw new Error("Connection closed awaiting server cipher change");let m=new xe(
b.content),[C]=m.expectLength(1);m.expectUint8(1,0),C();let N=S.subarray(5),q=v.
content,Q=oe(N,q),$=await Au(P,h.privateKey,Q,256,16),ie=await O.importKey("raw",
$.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),M=new Ht("decrypt",ie,$.serverHandshakeIV),
j=await O.importKey("raw",$.clientHandshakeKey,{name:"AES-GCM"},!1,["encrypt"]),
H=new Ht("encrypt",j,$.clientHandshakeIV),K=o(async()=>{let se=await Pr(t,M,22);
if(se===void 0)throw new Error("Premature end of encrypted server handshake");return se},
"C"),[z,W]=await Du(r,K,$.serverSecret,Q,e,s,a),D=new xe(6);D.writeUint8(20,0),D.
writeUint16(771,0);let G=D.writeLengthUint16();D.writeUint8(1,0),G();let V=D.array(),
F=new Uint8Array(0);if(W){let se=new xe(8);se.writeUint8(11,0);let ct=se.writeLengthUint24(
"client certificate data");se.writeUint8(0,0),se.writeUint24(0,0),ct(),F=se.array()}
let te=oe(Q,z,F),ve=await O.digest("SHA-256",te),$e=new Uint8Array(ve),xi=await ue(
$.clientSecret,"finished",new Uint8Array(0),32,256),Ao=await O.importKey("raw",xi,
{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),vo=await O.sign("HMAC",Ao,$e),Co=new Uint8Array(
vo),Dt=new xe(36);Dt.writeUint8(20,0);let Lo=Dt.writeLengthUint24(0);Dt.writeBytes(
Co),Lo();let Uo=Dt.array(),Ai=await zi(oe(F,Uo),H,22),vi=$e;if(F.length>0){let se=te.
subarray(0,te.length-F.length),ct=await O.digest("SHA-256",se);vi=new Uint8Array(
ct)}let Ot=await vu($.handshakeSecret,vi,256,16),_o=await O.importKey("raw",Ot.clientApplicationKey,
{name:"AES-GCM"},!0,["encrypt"]),To=new Ht("encrypt",_o,Ot.clientApplicationIV),
Io=await O.importKey("raw",Ot.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),
Po=new Ht("decrypt",Io,Ot.serverApplicationIV),kt=!1;return[()=>{if(!kt){let se=oe(
V,...Ai);n(se),kt=!0}return Pr(t,Po)},async se=>{let ct=kt;kt=!0;let Ci=await zi(
se,To,23),Bo=ct?oe(...Ci):oe(V,...Ai,...Ci);n(Bo)}]}o(Ou,"he");var mt,is=(mt=class{constructor(){
_(this,"queue");_(this,"outstandingRequest");this.queue=[]}enqueue(e){this.queue.
push(e),this.dequeue()}dequeue(){if(this.outstandingRequest===void 0)return;let{
resolve:e,bytes:t}=this.outstandingRequest,n=this.bytesInQueue();if(n<t&&this.socketIsNotClosed())
return;if(t=Math.min(t,n),t===0)return e(void 0);this.outstandingRequest=void 0;
let i=this.queue[0],s=i.length;if(s===t)return this.queue.shift(),e(i);if(s>t)return this.
queue[0]=i.subarray(t),e(i.subarray(0,t));{let a=new Uint8Array(t),u=t,c=0;for(;u>
0;){let l=this.queue[0],h=l.length;h<=u?(this.queue.shift(),a.set(l,c),c+=h,u-=h):
(this.queue[0]=l.subarray(u),a.set(l.subarray(0,u),c),u-=u,c+=u)}return e(a)}}bytesInQueue(){
return this.queue.reduce((e,t)=>e+t.length,0)}async read(e){if(this.outstandingRequest!==
void 0)throw new Error("Can\u2019t read while already awaiting read");return new Promise(
t=>{this.outstandingRequest={resolve:t,bytes:e},this.dequeue()})}},o(mt,"xt"),mt),
gt,ku=(gt=class extends is{constructor(e){super(),this.socket=e,e.addEventListener(
"message",t=>this.enqueue(new Uint8Array(t.data))),e.addEventListener("close",()=>this.
dequeue())}socketIsNotClosed(){let{socket:e}=this,{readyState:t}=e;return t<=1}},
o(gt,"vt"),gt),St,Qu=(St=class extends is{constructor(e){super(),this.socket=e,e.
on("data",t=>this.enqueue(new Uint8Array(t))),e.on("close",()=>this.dequeue())}socketIsNotClosed(){
let{socket:e}=this,{readyState:t}=e;return t==="opening"||t==="open"}},o(St,"Lt"),
St);var ss=`-----BEGIN CERTIFICATE-----
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
`;y();var ju=Object.getOwnPropertyNames,Hu=Object.getOwnPropertySymbols,Ku=Object.prototype.
hasOwnProperty;function as(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(as,"combineComparators");function Vt(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Vt,"createIsCircular");
function os(r){return ju(r).concat(Hu(r))}o(os,"getStrictProperties");var ps=Object.
hasOwn||function(r,e){return Ku.call(r,e)};function Je(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(Je,"sameValueZeroEqual");var ys="_owner",us=Object.getOwnPropertyDescriptor,
cs=Object.keys;function Wu(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(Wu,"areArraysEqual");function Gu(r,e){
return Je(r.getTime(),e.getTime())}o(Gu,"areDatesEqual");function ls(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,d=f[0],S=f[1],
E=u.value,v=E[0],x=E[1];!l&&!n[h]&&(l=t.equals(d,v,s,h,r,e,t)&&t.equals(S,x,d,v,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(ls,"areMapsEqual");function Vu(r,e,t){
var n=cs(r),i=n.length;if(cs(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===ys&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!ps(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(Vu,"areObjectsEqual");function bt(r,e,t){var n=os(
r),i=n.length;if(os(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===ys&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!ps(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=us(r,s),u=us(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(bt,"a\
reObjectsEqualStrict");function zu(r,e){return Je(r.valueOf(),e.valueOf())}o(zu,
"arePrimitiveWrappersEqual");function Ju(r,e){return r.source===e.source&&r.flags===
e.flags}o(Ju,"areRegExpsEqual");function hs(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(hs,"areSetsEqual");function Yu(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(Yu,"are\
TypedArraysEqual");var Zu="[object Arguments]",Xu="[object Boolean]",ec="[object\
 Date]",tc="[object Map]",rc="[object Number]",nc="[object Object]",ic="[object \
RegExp]",sc="[object Set]",ac="[object String]",oc=Array.isArray,fs=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,ds=Object.assign,uc=Object.
prototype.toString.call.bind(Object.prototype.toString);function cc(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,d){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var S=h.constructor;if(S!==f.constructor)return!1;if(S===Object)return i(
h,f,d);if(oc(h))return e(h,f,d);if(fs!=null&&fs(h))return c(h,f,d);if(S===Date)return t(
h,f,d);if(S===RegExp)return a(h,f,d);if(S===Map)return n(h,f,d);if(S===Set)return u(
h,f,d);var E=uc(h);return E===ec?t(h,f,d):E===ic?a(h,f,d):E===tc?n(h,f,d):E===sc?
u(h,f,d):E===nc?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,d):E===
Zu?i(h,f,d):E===Xu||E===rc||E===ac?s(h,f,d):!1},"comparator")}o(cc,"createEquali\
tyComparator");function lc(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?bt:Wu,areDatesEqual:Gu,areMapsEqual:n?as(ls,bt):ls,areObjectsEqual:n?
bt:Vu,arePrimitiveWrappersEqual:zu,areRegExpsEqual:Ju,areSetsEqual:n?as(hs,bt):hs,
areTypedArraysEqual:n?bt:Yu};if(t&&(i=ds({},i,t(i))),e){var s=Vt(i.areArraysEqual),
a=Vt(i.areMapsEqual),u=Vt(i.areObjectsEqual),c=Vt(i.areSetsEqual);i=ds({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(lc,"createEqualityC\
omparatorConfig");function hc(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(hc,"createInternalEqualityComparator");function fc(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,d=f===void 0?e?new WeakMap:void 0:f,S=h.meta;return t(c,l,{cache:d,equals:i,
meta:S,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(fc,"createIsEqual");
var Mr=Ie(),Nf=Ie({strict:!0}),Mf=Ie({circular:!0}),qf=Ie({circular:!0,strict:!0}),
Ff=Ie({createInternalComparator:function(){return Je}}),Df=Ie({strict:!0,createInternalComparator:function(){
return Je}}),Of=Ie({circular:!0,createInternalComparator:function(){return Je}}),
kf=Ie({circular:!0,createInternalComparator:function(){return Je},strict:!0});function Ie(r){
r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,
i=r.createState,s=r.strict,a=s===void 0?!1:s,u=lc(r),c=cc(u),l=n?n(c):hc(c);return fc(
{circular:t,comparator:c,createState:i,equals:l,strict:a})}o(Ie,"createCustomEqu\
al");y();var pr=lt(dr());ar();y();fn();ar();var Eo=lt(Rt());var Si=class Si extends Error{constructor(){super(...arguments);_(this,"name","N\
eonDbError");_(this,"code",null);_(this,"sourceError")}};o(Si,"NeonDbError");var ke=Si,
go="transaction() expects an array of queries, or a function returning an array \
of queries";function Ae(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,
readOnly:s,deferrable:a,queryCallback:u,resultCallback:c}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment \
variable has not been set?");let l;try{l=hn(r)}catch{throw new Error("Database c\
onnection string provided to `neon()` is not a valid URL. Connection string: "+String(
r))}let{protocol:h,username:f,password:d,hostname:S,port:E,pathname:v}=l;if(h!==
"postgres:"&&h!=="postgresql:"||!f||!d||!S||!v)throw new Error("Database connect\
ion string format for `neon()` should be: postgresql://user:password@host.tld/db\
name?option=value");function x(b,...m){let C,N;if(typeof b=="string")C=b,N=m[1],
m=m[0]??[];else{C="";for(let Q=0;Q<b.length;Q++)C+=b[Q],Q<m.length&&(C+="$"+(Q+1))}
m=m.map(Q=>(0,Eo.prepareValue)(Q));let q={query:C,params:m};return u&&u(q),wf(P,
q,N)}o(x,"resolve"),x.transaction=async(b,m)=>{if(typeof b=="function"&&(b=b(x)),
!Array.isArray(b))throw new Error(go);let C=b.map(N=>{if(N[Symbol.toStringTag]!==
"NeonQueryPromise")throw new Error(go);return N.parameterizedQuery});return P(C,
m)};async function P(b,m){let C=n??{},{fetchEndpoint:N,fetchConnectionCache:q,fetchFunction:Q}=we,
$=typeof N=="function"?N(S,E):N,ie=Array.isArray(b)?{queries:b}:b,M=e??!1,j=t??!1,
H=i,K=s,z=a;m!==void 0&&(m.arrayMode!==void 0&&(M=m.arrayMode),m.fullResults!==void 0&&
(j=m.fullResults),m.fetchOptions!==void 0&&(C={...C,...m.fetchOptions}),m.isolationLevel!==
void 0&&(H=m.isolationLevel),m.readOnly!==void 0&&(K=m.readOnly),m.deferrable!==
void 0&&(z=m.deferrable));let W={"Neon-Connection-String":r,"Neon-Raw-Text-Outpu\
t":"true","Neon-Array-Mode":"true"};q===!0&&(W["Neon-Pool-Opt-In"]="true"),Array.
isArray(b)&&(H!==void 0&&(W["Neon-Batch-Isolation-Level"]=H),K!==void 0&&(W["Neo\
n-Batch-Read-Only"]=String(K)),z!==void 0&&(W["Neon-Batch-Deferrable"]=String(z)));
let D;try{D=await(Q??fetch)($,{method:"POST",body:JSON.stringify(ie),headers:W,...C})}catch(G){
let V=new ke(`Error connecting to database: ${G.message}`);throw V.sourceError=G,
V}if(D.ok){let G=await D.json();if(Array.isArray(b)){let V=G.results;if(!Array.isArray(
V))throw new ke("Neon internal error: unexpected result format");return V.map((F,te)=>So(
F,{arrayMode:M,fullResults:j,parameterizedQuery:b[te],resultCallback:c}))}else return So(
G,{arrayMode:M,fullResults:j,parameterizedQuery:b,resultCallback:c})}else{let{status:G}=D;
if(G===400){let{message:V,code:F}=await D.json(),te=new ke(V);throw te.code=F,te}else{
let V=await D.text();throw new ke(`Server error (HTTP status ${G}): ${V}`)}}}return o(
P,"execute"),x}o(Ae,"neon");function wf(r,e,t){return{[Symbol.toStringTag]:"Neon\
QueryPromise",parameterizedQuery:e,opts:t,then:(n,i)=>r(e,t).then(n,i),catch:n=>r(
e,t).catch(n),finally:n=>r(e,t).finally(n)}}o(wf,"createNeonQueryPromise");function So(r,{
arrayMode:e,fullResults:t,parameterizedQuery:n,resultCallback:i}){let s=r.fields.
map(c=>c.name),a=r.fields.map(c=>Ne.types.getTypeParser(c.dataTypeID)),u=e===!0?
r.rows.map(c=>c.map((l,h)=>l===null?null:a[h](l))):r.rows.map(c=>Object.fromEntries(
c.map((l,h)=>[s[h],l===null?null:a[h](l)])));return i&&i(n,r,u,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r):u}o(So,"processQueryResult");var bo=lt(sr()),Ne=lt(dr());var Ei=class Ei extends pr.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let i=this.config?.host!==void 0||this.config?.connectionString!==void 0||
g.env.PGHOST!==void 0,s=g.env.USER??g.env.USERNAME;if(!i&&this.host==="localhost"&&
this.user===s&&this.database===s&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${s}, db: ${s}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let a=super.connect(t),u=n.pipelineTLS&&
this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return a;let l=this.
connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners(
"authenticationCleartextPassword"),l.removeAllListeners("readyForQuery"),l.once(
"readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let h=this.ssl?"sslconnect":"connect";l.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return a}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let a=Object.
fromEntries(s.split(",").map(V=>{if(!/^.=/.test(V))throw new Error("SASL: Invali\
d attribute pair entry");let F=V[0],te=V.substring(2);return[F,te]})),u=a.r,c=a.
s,l=a.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),f=w.from(c,"base64"),d=new TextEncoder,
S=d.encode(i),E=await A.subtle.importKey("raw",S,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),v=new Uint8Array(await A.subtle.sign("HMAC",E,w.concat([f,w.from(
[0,0,0,1])]))),x=v;for(var P=0;P<h-1;P++)v=new Uint8Array(await A.subtle.sign("H\
MAC",E,v)),x=w.from(x.map((V,F)=>x[F]^v[F]));let b=x,m=await A.subtle.importKey(
"raw",b,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),C=new Uint8Array(await A.
subtle.sign("HMAC",m,d.encode("Client Key"))),N=await A.subtle.digest("SHA-256",
C),q="n=*,r="+n.clientNonce,Q="r="+u+",s="+c+",i="+h,$="c=biws,r="+u,ie=q+","+Q+
","+$,M=await A.subtle.importKey("raw",N,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var j=new Uint8Array(await A.subtle.sign("HMAC",M,d.encode(ie))),H=w.from(
C.map((V,F)=>C[F]^j[F])),K=H.toString("base64");let z=await A.subtle.importKey("\
raw",b,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),W=await A.subtle.sign("H\
MAC",z,d.encode("Server Key")),D=await A.subtle.importKey("raw",W,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var G=w.from(await A.subtle.sign("HMAC",D,d.encode(
ie)));n.message="SASLResponse",n.serverSignature=G.toString("base64"),n.response=
$+",p="+K,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
o(Ei,"NeonClient");var Ue=Ei;function mf(r,e){if(e)return{callback:e,result:void 0};
let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{
callback:i,result:s}}o(mf,"promisify");var bi=class bi extends pr.Pool{constructor(){
super(...arguments);_(this,"Client",Ue);_(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!we.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=mf(this.Promise,
i);i=s.callback;try{let a=new bo.default(this.options),u=encodeURIComponent,c=encodeURI,
l=`postgresql://${u(a.user)}:${u(a.password)}@${u(a.host)}/${c(a.database)}`,h=typeof t==
"string"?t:t.text,f=n??t.values??[];Ae(l,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(h,f).then(S=>i(void 0,S)).catch(S=>i(S))}catch(a){i(a)}return s.result}};
o(bi,"NeonPool");var Qe=bi;y();async function gf(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(gf,"t\
imed");async function ot(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await gf(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(ot,"timedRepeat\
s");async function qt(r,e){let{sql:t,test:n}=e,{rows:i}=await(typeof r=="functio\
n"?r(t):r.query(t));if(!n(i))throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(qt,"runQuery");async function ut(r,e,t,n){
await e.connect();let i=await ot(r,()=>qt(e,n));return t.waitUntil(e.end()),i}o(
ut,"clientRunQuery");async function yr(r,e,t,n){let i=new Qe({connectionString:e}),
s=await ot(r,()=>qt(i,n));return t.waitUntil(i.end()),s}o(yr,"poolRunQuery");async function xo(r,e,t,n){
let i=Ae(e,{fullResults:!0});return await ot(r,()=>qt(i,n))}o(xo,"httpRunQuery");y();var Ft=[{sql:"SELECT * FROM employees LIMIT 10",test:r=>r.length>1&&typeof r[0].
first_name=="string"},{sql:"SELECT now()",test:r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString())}];async function Q0(r,e,t){let n=[];for(let i of Ft){let[,[[,s]]]=await yr(1,e.NEON_DB_URL,
t,i);n.push(s)}for(let i of Ft){let[,[[,s]]]=await xo(1,e.NEON_DB_URL,t,i);n.push(
s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-Type":"applic\
ation/json"}})}o(Q0,"cf");var Me={waitUntil(r){},passThroughOnException(){}};async function Sf(r,e=(...t)=>{}){
let t=Ae(r.NEON_DB_URL),[[n],[i]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,
t`SELECT ${"hello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(n),JSON.
stringify(i),`
`),n.batchInt!==1||i.batchStr!=="hello")throw new Error("Batch query problem");let[
[s],[a]]=await t.transaction(C=>[C`SELECT ${1}::int AS "batchInt"`,C`SELECT ${"h\
ello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(s),JSON.stringify(a),
`
`),s.batchInt!==1||a.batchStr!=="hello")throw new Error("Batch query problem");let u=await t.
transaction(C=>[]);e("empty txn result:",JSON.stringify(u),`
`);let[[[c]],[[l]]]=await t.transaction(C=>[C`SELECT ${1}::int AS "batchInt"`,C`SELECT ${"\
hello"} AS "batchStr"`],{arrayMode:!0,isolationLevel:"Serializable",readOnly:!0});
if(e("array mode (via transaction options) batch results:",JSON.stringify(c),JSON.
stringify(l),`
`),c!==1||l!=="hello")throw new Error("Batch query problem");let h=Ae(r.NEON_DB_URL,
{arrayMode:!0,isolationLevel:"RepeatableRead"}),[[[f]],[[d]]]=await h.transaction(
C=>[C`SELECT ${1}::int AS "batchInt"`,C`SELECT ${"hello"} AS "batchStr"`]);if(e(
"array mode (via neon options) batch results:",JSON.stringify(f),JSON.stringify(
d),`
`),f!==1||d!=="hello")throw new Error("Batch query problem");let S=Ae(r.NEON_DB_URL,
{arrayMode:!0}),[[E],[v]]=await S.transaction(C=>[C`SELECT ${1}::int AS "batchInt"`,
C`SELECT ${"hello"} AS "batchStr"`],{arrayMode:!1});if(e("ordinary (via overridd\
en options) batch results:",JSON.stringify(E),JSON.stringify(v),`
`),E.batchInt!==1||v.batchStr!=="hello")throw new Error("Batch query problem");let[
[x],[P]]=await t.transaction(C=>[C`SELECT ${1}::int AS "batchInt"`,C('SELECT $1 \
AS "batchStr"',["hello"],{arrayMode:!0})]);if(e("ignored query options batch res\
ults:",JSON.stringify(x),JSON.stringify(P),`
`),x.batchInt!==1||P.batchStr!=="hello")throw new Error("Batch query problem");let b;
try{await t.transaction(C=>[C`SELECT ${1}::int AS "batchInt"`,`SELECT 'hello' AS\
 "batchStr"`])}catch(C){b=C}if(b===void 0)throw new Error("Error should have bee\
n raised for string passed to `transaction()`");e("caught invalid query passed t\
o `transaction()`\n");let m;try{let C=r.NEON_DB_URL.replace(/@/,"x@");await Ae(C).
transaction(N=>[N`SELECT 'never' AS this_should_be_seen_precisely`])}catch(C){m=
C}if(m===void 0)throw new Error("Error should have been raised for bad password");
e("caught invalid password passed to `neon()`\n")}o(Sf,"batchQueryTest");async function $0(r,e,t=(...n)=>{}){
let n=[1,3],i=9;t(`Warm-up ...

`),await yr(1,r.NEON_DB_URL,Me,Ft[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Qe({connectionString:r.
NEON_DB_URL}),c=Ae(r.NEON_DB_URL,{resultCallback:async(d,S,E,v)=>{let x=await u.
query({text:d.query,values:d.params,...v.arrayMode?{rowMode:"array"}:{}}),P=S.command===
x.command,b=S.rowCount===x.rowCount,m=Mr(S.fields.map(q=>q.dataTypeID),x.fields.
map(q=>q.dataTypeID)),C=Mr(E,x.rows);t(P&&b&&C&&m?"\u2713":"X",JSON.stringify(d),
`
  -> us:`,JSON.stringify(E),`
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
 123 AS num",[],{arrayMode:!0,fullResults:!0}),we.fetchConnectionCache=!0,await c`SELECT ${"\
hello"} AS str`,await c`SELECT ${"world"} AS str`,await c("SELECT 123 AS num");function h(d,S,E=3){
return async function(v,...x){let P="";for(let b=0;b<v.length;b++)P+=v[b],b<x.length&&
(P+="$"+(b+1));for(let b=1;;b++){let m=new AbortController,C=setTimeout(()=>m.abort(
"fetch timed out"),S);try{let{signal:N}=m;return await d(P,x,{fetchOptions:{signal:N}})}catch(N){
if(!(N.sourceError&&N.sourceError instanceof DOMException&&N.sourceError.name===
"AbortError")||b>=E)throw N}finally{clearTimeout(C)}}}}o(h,"sqlWithRetries"),await h(
c,5e3)`SELECT ${"did this time out?"} AS str`,await Sf(r,t),we.fetchFunction=(d,S)=>(console.
log("custom fetch:",d,S),fetch(d,S)),await c`SELECT ${"customFetch"} AS str`,await new Promise(
d=>setTimeout(d,1e3)),u.end(),t(`

===== Pool/Client tests =====
`);for(let d of Ft){t(`
----- ${d.sql} -----

`);async function S(v,x){let P=String.fromCharCode(s+(s>25?23:65));t(`${P}
`);try{await fetch(`http://localhost:443/${P}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,b]=await ot(i,()=>x(v),m=>t(`<span class="live">${m.toFixed()}\
ms</span> `));t(`
Sorted:  `),b.map(([m])=>m).sort((m,C)=>m-C).forEach((m,C)=>{t(C===(i-1)/2?`<spa\
n class="median">${m.toFixed()}ms</span> `:`${m.toFixed()}ms `)}),t(`

`),s+=1}o(S,"section");async function E(v,x){t(`----- ${v} -----

`);for(let P of n)t(`${P} quer${P===1?"y":"ies"} \u2013 `),await S(P,x)}o(E,"sec\
tions"),await E("Neon/wss, no pipelining",async v=>{let x=new Ue(r.NEON_DB_URL);
x.neonConfig.pipelineConnect=!1,await ut(v,x,Me,d)}),await E("Neon/wss, pipeline\
d connect (default)",async v=>{let x=new Ue(r.NEON_DB_URL);await ut(v,x,Me,d)}),
await E("Neon/wss, pipelined connect, no coalescing",async v=>{let x=new Ue(r.NEON_DB_URL);
x.neonConfig.coalesceWrites=!1,await ut(v,x,Me,d)}),await E("Neon/wss, pipelined\
 connect using Pool.query",async v=>{await yr(v,r.NEON_DB_URL,Me,d)}),await E("N\
eon/wss, pipelined connect using Pool.connect",async v=>{let x=new Qe({connectionString:r.
NEON_DB_URL}),P=await x.connect();await ot(v,()=>qt(P,d)),P.release(),Me.waitUntil(
x.end())}),await E("Patched pg/wss, pipelined connect",async v=>{let x=new Ue(r.
MY_DB_URL);x.neonConfig.wsProxy=(P,b)=>`ws.manipulexity.com/v1?address=${P}:${b}`,
x.neonConfig.pipelineConnect="password",await ut(v,x,Me,d)}),e&&(we.subtls=Nr,we.
rootCerts=ss,await E("Patched pg/subtls, pipelined TLS + connect",async v=>{let x=new Ue(
r.MY_DB_URL);x.neonConfig.wsProxy=(P,b)=>`ws.manipulexity.com/v1?address=${P}:${b}`,
x.neonConfig.forceDisablePgSSL=x.neonConfig.useSecureWebSocket=!1,x.neonConfig.pipelineTLS=
!0,x.neonConfig.pipelineConnect="password",await ut(v,x,Me,d)}))}}o($0,"latencie\
s");export{Sf as batchQueryTest,Q0 as cf,$0 as latencies,we as neonConfig};
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
