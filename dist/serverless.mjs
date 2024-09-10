var Ka=Object.create;var ut=Object.defineProperty;var Wa=Object.getOwnPropertyDescriptor;var Ga=Object.getOwnPropertyNames;var Va=Object.getPrototypeOf,za=Object.prototype.hasOwnProperty;var o=(r,e)=>ut(r,"name",{value:e,configurable:!0});var he=(r,e)=>()=>(r&&(e=r(r=0)),e);var B=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ye=(r,e)=>{for(var t in e)
ut(r,t,{get:e[t],enumerable:!0})},jn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Ga(e))!za.call(r,i)&&i!==t&&ut(r,i,{get:()=>e[i],enumerable:!(n=
Wa(e,i))||n.enumerable});return r};var Qe=(r,e,t)=>(t=r!=null?Ka(Va(r)):{},jn(e||!r||!r.__esModule?ut(t,"default",{
value:r,enumerable:!0}):t,r)),ee=r=>jn(ut({},"__esModule",{value:!0}),r);var Wn=B(Rt=>{"use strict";p();Rt.byteLength=Ya;Rt.toByteArray=Xa;Rt.fromByteArray=
ro;var be=[],me=[],Ja=typeof Uint8Array<"u"?Uint8Array:Array,cr="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Me=0,Hn=cr.length;Me<Hn;++Me)
be[Me]=cr[Me],me[cr.charCodeAt(Me)]=Me;var Me,Hn;me[45]=62;me[95]=63;function Kn(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}o(Kn,
"getLens");function Ya(r){var e=Kn(r),t=e[0],n=e[1];return(t+n)*3/4-n}o(Ya,"byte\
Length");function Za(r,e,t){return(e+t)*3/4-t}o(Za,"_byteLength");function Xa(r){
var e,t=Kn(r),n=t[0],i=t[1],s=new Ja(Za(r,n,i)),a=0,u=i>0?n-4:n,c;for(c=0;c<u;c+=
4)e=me[r.charCodeAt(c)]<<18|me[r.charCodeAt(c+1)]<<12|me[r.charCodeAt(c+2)]<<6|me[r.
charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=e&255;return i===2&&(e=
me[r.charCodeAt(c)]<<2|me[r.charCodeAt(c+1)]>>4,s[a++]=e&255),i===1&&(e=me[r.charCodeAt(
c)]<<10|me[r.charCodeAt(c+1)]<<4|me[r.charCodeAt(c+2)]>>2,s[a++]=e>>8&255,s[a++]=
e&255),s}o(Xa,"toByteArray");function eo(r){return be[r>>18&63]+be[r>>12&63]+be[r>>
6&63]+be[r&63]}o(eo,"tripletToBase64");function to(r,e,t){for(var n,i=[],s=e;s<t;s+=
3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(eo(n));return i.join(
"")}o(to,"encodeChunk");function ro(r){for(var e,t=r.length,n=t%3,i=[],s=16383,a=0,
u=t-n;a<u;a+=s)i.push(to(r,a,a+s>u?u:a+s));return n===1?(e=r[t-1],i.push(be[e>>2]+
be[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(be[e>>10]+be[e>>4&63]+be[e<<
2&63]+"=")),i.join("")}o(ro,"fromByteArray")});var Gn=B(lr=>{p();lr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,y=t?-1:1,g=r[e+f];for(f+=y,s=g&(1<<-h)-1,g>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=y,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=y,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(g?
-1:1)*a*Math.pow(2,s-n)};lr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:s-1,E=n?1:-1,U=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=y/c:e+=
y*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+g]=u&255,g+=E,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+g]=a&255,g+=E,a/=256,l-=8);r[t+g-E]|=U*128}});var li=B(Ke=>{"use strict";p();var hr=Wn(),je=Gn(),Vn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ke.Buffer=
d;Ke.SlowBuffer=uo;Ke.INSPECT_MAX_BYTES=50;var Nt=2147483647;Ke.kMaxLength=Nt;d.
TYPED_ARRAY_SUPPORT=no();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function no(){try{let r=new Uint8Array(1),e={foo:o(function(){
return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(
r,e),r.foo()===42}catch{return!1}}o(no,"typedArraySupport");Object.defineProperty(
d.prototype,"parent",{enumerable:!0,get:o(function(){if(d.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:o(
function(){if(d.isBuffer(this))return this.byteOffset},"get")});function Ce(r){if(r>
Nt)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(
r);return Object.setPrototypeOf(e,d.prototype),e}o(Ce,"createBuffer");function d(r,e,t){
if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" a\
rgument must be of type string. Received type number');return yr(r)}return Zn(r,
e,t)}o(d,"Buffer");d.poolSize=8192;function Zn(r,e,t){if(typeof r=="string")return so(
r,e);if(ArrayBuffer.isView(r))return ao(r);if(r==null)throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type "+typeof r);if(xe(r,ArrayBuffer)||r&&xe(r.buffer,ArrayBuffer)||
typeof SharedArrayBuffer<"u"&&(xe(r,SharedArrayBuffer)||r&&xe(r.buffer,SharedArrayBuffer)))
return dr(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();
if(n!=null&&n!==r)return d.from(n,e,t);let i=oo(r);if(i)return i;if(typeof Symbol<
"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.
from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type "+typeof r)}o(Zn,"from");d.from=function(r,e,t){return Zn(r,e,t)};
Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,
Uint8Array);function Xn(r){if(typeof r!="number")throw new TypeError('"size" arg\
ument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is\
 invalid for option "size"')}o(Xn,"assertSize");function io(r,e,t){return Xn(r),
r<=0?Ce(r):e!==void 0?typeof t=="string"?Ce(r).fill(e,t):Ce(r).fill(e):Ce(r)}o(io,
"alloc");d.alloc=function(r,e,t){return io(r,e,t)};function yr(r){return Xn(r),Ce(
r<0?0:mr(r)|0)}o(yr,"allocUnsafe");d.allocUnsafe=function(r){return yr(r)};d.allocUnsafeSlow=
function(r){return yr(r)};function so(r,e){if((typeof e!="string"||e==="")&&(e="\
utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=ei(r,e)|
0,n=Ce(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}o(so,"fromString");function fr(r){
let e=r.length<0?0:mr(r.length)|0,t=Ce(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}
o(fr,"fromArrayLike");function ao(r){if(xe(r,Uint8Array)){let e=new Uint8Array(r);
return dr(e.buffer,e.byteOffset,e.byteLength)}return fr(r)}o(ao,"fromArrayView");
function dr(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outs\
ide of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" i\
s outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(dr,"fromArrayBuffer");function oo(r){if(d.isBuffer(r)){let e=mr(
r.length)|0,t=Ce(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||gr(r.length)?Ce(0):fr(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return fr(r.data)}o(oo,"fromObject");function mr(r){if(r>=
Nt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Nt.toString(16)+" bytes");return r|0}o(mr,"checked");function uo(r){return+r!=r&&
(r=0),d.alloc(+r)}o(uo,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
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
fers');s+=a.length}return i},"concat");function ei(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||xe(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return pr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return ci(r).length;default:if(i)return n?-1:pr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(ei,"byteLength");d.byteLength=ei;function co(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Eo(
this,e,t);case"utf8":case"utf-8":return ri(this,e,t);case"ascii":return go(this,
e,t);case"latin1":case"binary":return So(this,e,t);case"base64":return mo(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
co,"slowToString");d.prototype._isBuffer=!0;function qe(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(qe,"swap");d.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)qe(this,t,t+1);return this},"swap16");d.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)qe(this,t,t+3),qe(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)qe(this,t,t+7),
qe(this,t+1,t+6),qe(this,t+2,t+5),qe(this,t+3,t+4);return this},"swap64");d.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?ri(
this,0,e):co.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=Ke.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Vn&&(d.prototype[Vn]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(xe(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function ti(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,gr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:zn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):zn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(ti,"bid\
irectionalIndexOf");function zn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(zn,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return ti(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return ti(this,e,t,n,!1)},"lastIndexOf");function lo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(gr(u))
return a;r[t+a]=u}return a}o(lo,"hexWrite");function ho(r,e,t,n){return Mt(pr(e,
r.length-t),r,t,n)}o(ho,"utf8Write");function fo(r,e,t,n){return Mt(Co(e),r,t,n)}
o(fo,"asciiWrite");function po(r,e,t,n){return Mt(ci(e),r,t,n)}o(po,"base64Write");
function yo(r,e,t,n){return Mt(_o(e,r.length-t),r,t,n)}o(yo,"ucs2Write");d.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return lo(this,e,t,n);case"utf8":case"utf-8":return ho(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return fo(this,e,t,n);case"base64":return po(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yo(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");d.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function mo(r,e,t){return e===0&&t===r.
length?hr.fromByteArray(r):hr.fromByteArray(r.slice(e,t))}o(mo,"base64Slice");function ri(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return wo(n)}o(ri,"utf8Slice");var Jn=4096;function wo(r){
let e=r.length;if(e<=Jn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Jn));return t}o(wo,"d\
ecodeCodePointsArray");function go(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(go,"asciiSlice");function So(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(So,"latin1Slice");function Eo(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Lo[r[s]];return i}o(Eo,"he\
xSlice");function bo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(bo,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function te(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(te,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||te(e,t,this.length);
let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");
d.prototype.readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,
n||te(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*
s;return i},"readUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){
return e=e>>>0,t||te(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=
d.prototype.readUInt16LE=o(function(e,t){return e=e>>>0,t||te(e,2,this.length),this[e]|
this[e+1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=
o(function(e,t){return e=e>>>0,t||te(e,2,this.length),this[e]<<8|this[e+1]},"rea\
dUInt16BE");d.prototype.readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=
e>>>0,t||te(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},
"readUInt32LE");d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){
return e=e>>>0,t||te(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])},"readUInt32BE");d.prototype.readBigUInt64LE=Le(o(function(e){e=e>>>
0,He(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ct(e,this.length-
8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*
2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigU\
Int64LE"));d.prototype.readBigUInt64BE=Le(o(function(e){e=e>>>0,He(e,"offset");let t=this[e],
n=this[e+7];(t===void 0||n===void 0)&&ct(e,this.length-8);let i=t*2**24+this[++e]*
2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+
n;return(BigInt(i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=
o(function(e,t,n){e=e>>>0,t=t>>>0,n||te(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<
t&&(s*=256);)i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readInt\
LE");d.prototype.readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||te(e,t,this.length);
let i=t,s=1,a=this[e+--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=
s&&(a-=Math.pow(2,8*t)),a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=
e>>>0,t||te(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");
d.prototype.readInt16LE=o(function(e,t){e=e>>>0,t||te(e,2,this.length);let n=this[e]|
this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=
o(function(e,t){e=e>>>0,t||te(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&
32768?n|4294901760:n},"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=
e>>>0,t||te(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"\
readInt32LE");d.prototype.readInt32BE=o(function(e,t){return e=e>>>0,t||te(e,4,this.
length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.
readBigInt64LE=Le(o(function(e){e=e>>>0,He(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&ct(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+
6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24)},"readBigInt64LE"));d.prototype.readBigInt64BE=Le(o(function(e){
e=e>>>0,He(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ct(e,
this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(
i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readB\
igInt64BE"));d.prototype.readFloatLE=o(function(e,t){return e=e>>>0,t||te(e,4,this.
length),je.read(this,e,!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){
return e=e>>>0,t||te(e,4,this.length),je.read(this,e,!1,23,4)},"readFloatBE");d.
prototype.readDoubleLE=o(function(e,t){return e=e>>>0,t||te(e,8,this.length),je.
read(this,e,!0,52,8)},"readDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=
e>>>0,t||te(e,8,this.length),je.read(this,e,!1,52,8)},"readDoubleBE");function fe(r,e,t,n,i,s){
if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instan\
ce');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+
n>r.length)throw new RangeError("Index out of range")}o(fe,"checkInt");d.prototype.
writeUintLE=d.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,
!i){let u=Math.pow(2,8*n)-1;fe(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<
n&&(s*=256);)this[t+a]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=
d.prototype.writeUIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;fe(this,e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)
this[t+s]=e/a&255;return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.
writeUInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,1,255,0),this[t]=
e&255,t+1},"writeUInt8");d.prototype.writeUint16LE=d.prototype.writeUInt16LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},
"writeUInt16LE");d.prototype.writeUint16BE=d.prototype.writeUInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},
"writeUInt16BE");d.prototype.writeUint32LE=d.prototype.writeUInt32LE=o(function(e,t,n){
return e=+e,t=t>>>0,n||fe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>
16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=
d.prototype.writeUInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,4,
4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+
4},"writeUInt32BE");function ni(r,e,t,n,i){ui(e,n,i,r,t,7);let s=Number(e&BigInt(
4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(
e>>BigInt(32)&BigInt(4294967295));return r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=
a,a=a>>8,r[t++]=a,t}o(ni,"wrtBigUInt64LE");function ii(r,e,t,n,i){ui(e,n,i,r,t,7);
let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>
8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=a,a=a>>8,
r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(ii,"wrtBigUInt64BE");d.prototype.writeBigUInt64LE=
Le(o(function(e,t=0){return ni(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},
"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=Le(o(function(e,t=0){return ii(
this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));d.prototype.
writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);fe(this,
e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)e<0&&u===0&&this[t+
s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntLE");d.prototype.writeIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,8*n-1);fe(this,e,t,n,c-
1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&(a*=256);)e<0&&u===0&&this[t+
s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIntBE");d.prototype.writeInt8=
o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,1,127,-128),e<0&&(e=255+e+1),
this[t]=e&255,t+1},"writeInt8");d.prototype.writeInt16LE=o(function(e,t,n){return e=
+e,t=t>>>0,n||fe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"wr\
iteInt16LE");d.prototype.writeInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(
this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeInt16BE");d.prototype.
writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,t,4,2147483647,-2147483648),
this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32\
LE");d.prototype.writeInt32BE=o(function(e,t,n){return e=+e,t=t>>>0,n||fe(this,e,
t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>
16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeInt32BE");d.prototype.writeBigInt64LE=
Le(o(function(e,t=0){return ni(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x\
7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.writeBigInt64BE=Le(o(function(e,t=0){
return ii(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},
"writeBigInt64BE"));function si(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError(
"Index out of range");if(t<0)throw new RangeError("Index out of range")}o(si,"ch\
eckIEEE754");function ai(r,e,t,n,i){return e=+e,t=t>>>0,i||si(r,e,t,4,34028234663852886e22,
-34028234663852886e22),je.write(r,e,t,n,23,4),t+4}o(ai,"writeFloat");d.prototype.
writeFloatLE=o(function(e,t,n){return ai(this,e,t,!0,n)},"writeFloatLE");d.prototype.
writeFloatBE=o(function(e,t,n){return ai(this,e,t,!1,n)},"writeFloatBE");function oi(r,e,t,n,i){
return e=+e,t=t>>>0,i||si(r,e,t,8,17976931348623157e292,-17976931348623157e292),
je.write(r,e,t,n,52,8),t+8}o(oi,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){
return oi(this,e,t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){
return oi(this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=o(function(e,t,n,i){
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
for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this},"fill");var $e={};function wr(r,e,t){
$e[r]=class extends t{static{o(this,"NodeError")}constructor(){super(),Object.defineProperty(
this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.
name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){
Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){
return`${this.name} [${r}]: ${this.message}`}}}o(wr,"E");wr("ERR_BUFFER_OUT_OF_B\
OUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to acces\
s memory outside buffer bounds"},RangeError);wr("ERR_INVALID_ARG_TYPE",function(r,e){
return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);
wr("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range\
.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Yn(String(t)):typeof t=="\
bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=
Yn(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Yn(r){
let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;
return`${r.slice(0,t)}${e}`}o(Yn,"addNumericalSeparator");function xo(r,e,t){He(
e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ct(e,r.length-(t+1))}o(xo,"checkBo\
unds");function ui(r,e,t,n,i,s){if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>
3?e===0||e===BigInt(0)?u=`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} \
** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,
new $e.ERR_OUT_OF_RANGE("value",u,r)}xo(n,i,s)}o(ui,"checkIntBI");function He(r,e){
if(typeof r!="number")throw new $e.ERR_INVALID_ARG_TYPE(e,"number",r)}o(He,"vali\
dateNumber");function ct(r,e,t){throw Math.floor(r)!==r?(He(r,t),new $e.ERR_OUT_OF_RANGE(
t||"offset","an integer",r)):e<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE(
t||"offset",`>= ${t?1:0} and <= ${e}`,r)}o(ct,"boundsError");var Ao=/[^+/0-9A-Za-z-_]/g;
function vo(r){if(r=r.split("=")[0],r=r.trim().replace(Ao,""),r.length<2)return"";
for(;r.length%4!==0;)r=r+"=";return r}o(vo,"base64clean");function pr(r,e){e=e||
1/0;let t,n=r.length,i=null,s=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&
t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===
n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.
push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&
s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){
if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.
push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(
t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code \
point")}return s}o(pr,"utf8ToBytes");function Co(r){let e=[];for(let t=0;t<r.length;++t)
e.push(r.charCodeAt(t)&255);return e}o(Co,"asciiToBytes");function _o(r,e){let t,
n,i,s=[];for(let a=0;a<r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,i=t%256,
s.push(i),s.push(n);return s}o(_o,"utf16leToBytes");function ci(r){return hr.toByteArray(
vo(r))}o(ci,"base64ToBytes");function Mt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||
i>=r.length);++i)e[i+t]=r[i];return i}o(Mt,"blitBuffer");function xe(r,e){return r instanceof
e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===
e.name}o(xe,"isInstance");function gr(r){return r!==r}o(gr,"numberIsNaN");var Lo=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function Le(r){return typeof BigInt>"u"?To:r}
o(Le,"defineBigIntMethod");function To(){throw new Error("BigInt not supported")}
o(To,"BufferBigIntNotDefined")});var _,L,T,x,m,S,p=he(()=>{"use strict";_=globalThis,L=globalThis.setImmediate??(r=>setTimeout(
r,0)),T=globalThis.clearImmediate??(r=>clearTimeout(r)),x=globalThis.crypto??{};
x.subtle??={};m=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:li().Buffer,S=globalThis.process??{};S.env??={};try{
S.nextTick(()=>{})}catch{let e=Promise.resolve();S.nextTick=e.then.bind(e)}});var Ie=B((cf,Ir)=>{"use strict";p();var ze=typeof Reflect=="object"?Reflect:null,
Ri=ze&&typeof ze.apply=="function"?ze.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Qt;ze&&typeof ze.ownKeys=="function"?Qt=ze.ownKeys:
Object.getOwnPropertySymbols?Qt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Qt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Cu(r){console&&console.warn&&
console.warn(r)}o(Cu,"ProcessEmitWarning");var Mi=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function k(){k.init.call(this)}o(k,"EventEmitter");Ir.exports=
k;Ir.exports.once=Uu;k.EventEmitter=k;k.prototype._events=void 0;k.prototype._eventsCount=
0;k.prototype._maxListeners=void 0;var Ni=10;function $t(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o($t,"checkListener");Object.defineProperty(k,"defaultMaxLi\
steners",{enumerable:!0,get:o(function(){return Ni},"get"),set:o(function(r){if(typeof r!=
"number"||r<0||Mi(r))throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received '+r+".");Ni=r},"set")});
k.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this).
_events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=
this._maxListeners||void 0};k.prototype.setMaxListeners=o(function(e){if(typeof e!=
"number"||e<0||Mi(e))throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},
"setMaxListeners");function qi(r){return r._maxListeners===void 0?k.defaultMaxListeners:
r._maxListeners}o(qi,"_getMaxListeners");k.prototype.getMaxListeners=o(function(){
return qi(this)},"getMaxListeners");k.prototype.emit=o(function(e){for(var t=[],
n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;
if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var a;if(t.length>
0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+
a.message+")":""));throw u.context=a,u}var c=s[e];if(c===void 0)return!1;if(typeof c==
"function")Ri(c,this,t);else for(var l=c.length,h=Qi(c,l),n=0;n<l;++n)Ri(h[n],this,
t);return!0},"emit");function Di(r,e,t,n){var i,s,a;if($t(t),s=r._events,s===void 0?
(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&(r.emit(
"newListener",e,t.listener?t.listener:t),s=r._events),a=s[e]),a===void 0)a=s[e]=
t,++r._eventsCount;else if(typeof a=="function"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(
t):a.push(t),i=qi(r),i>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Po\
ssible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners a\
dded. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExce\
ededWarning",u.emitter=r,u.type=e,u.count=a.length,Cu(u)}return r}o(Di,"_addList\
ener");k.prototype.addListener=o(function(e,t){return Di(this,e,t,!1)},"addListe\
ner");k.prototype.on=k.prototype.addListener;k.prototype.prependListener=o(function(e,t){
return Di(this,e,t,!0)},"prependListener");function _u(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?
this.listener.call(this.target):this.listener.apply(this.target,arguments)}o(_u,
"onceWrapper");function Fi(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,
listener:t},i=_u.bind(n);return i.listener=t,n.wrapFn=i,i}o(Fi,"_onceWrap");k.prototype.
once=o(function(e,t){return $t(t),this.on(e,Fi(this,e,t)),this},"once");k.prototype.
prependOnceListener=o(function(e,t){return $t(t),this.prependListener(e,Fi(this,
e,t)),this},"prependOnceListener");k.prototype.removeListener=o(function(e,t){var n,
i,s,a,u;if($t(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;
if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):
(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!=
"function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){u=n[a].
listener,s=a;break}if(s<0)return this;s===0?n.shift():Lu(n,s),n.length===1&&(i[e]=
n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,u||t)}return this},
"removeListener");k.prototype.off=k.prototype.removeListener;k.prototype.removeAllListeners=
o(function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===
void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),
this;if(arguments.length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],
a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=
n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-
1;i>=0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function Oi(r,e,t){
var n=r._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i==
"function"?t?[i.listener||i]:[i]:t?Tu(i):Qi(i,i.length)}o(Oi,"_listeners");k.prototype.
listeners=o(function(e){return Oi(this,e,!0)},"listeners");k.prototype.rawListeners=
o(function(e){return Oi(this,e,!1)},"rawListeners");k.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):ki.call(r,e)};k.prototype.
listenerCount=ki;function ki(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(ki,"listenerCount");
k.prototype.eventNames=o(function(){return this._eventsCount>0?Qt(this._events):
[]},"eventNames");function Qi(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(Qi,"arrayClone");function Lu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(Lu,"spliceOne");function Tu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(Tu,"unwrapListeners");function Uu(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),$i(r,e,s,{once:!0}),e!=="error"&&Iu(r,i,{once:!0})})}
o(Uu,"once");function Iu(r,e,t){typeof r.on=="function"&&$i(r,"error",e,t)}o(Iu,
"addErrorHandlerIfEventEmitter");function $i(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o($i,"eventTargetAgnosticAddListener")});var dt={};ye(dt,{default:()=>Pu});var Pu,pt=he(()=>{"use strict";p();Pu={}});function yt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],y=o((A,w)=>A>>>w|A<<32-w,
"rrot"),g=new Uint32Array(64),E=new Uint8Array(64),U=o(()=>{for(let N=0,Q=0;N<16;N++,
Q+=4)g[N]=E[Q]<<24|E[Q+1]<<16|E[Q+2]<<8|E[Q+3];for(let N=16;N<64;N++){let Q=y(g[N-
15],7)^y(g[N-15],18)^g[N-15]>>>3,$=y(g[N-2],17)^y(g[N-2],19)^g[N-2]>>>10;g[N]=g[N-
16]+Q+g[N-7]+$|0}let A=e,w=t,b=n,I=i,R=s,q=a,M=u,ne=c;for(let N=0;N<64;N++){let Q=y(
R,6)^y(R,11)^y(R,25),$=R&q^~R&M,j=ne+Q+$+f[N]+g[N]|0,H=y(A,2)^y(A,13)^y(A,22),W=A&
w^A&b^w&b,O=H+W|0;ne=M,M=q,q=R,R=I+j|0,I=b,b=w,w=A,A=j+O|0}e=e+A|0,t=t+w|0,n=n+b|
0,i=i+I|0,s=s+R|0,a=a+q|0,u=u+M|0,c=c+ne|0,h=0},"process"),C=o(A=>{typeof A=="st\
ring"&&(A=new TextEncoder().encode(A));for(let w=0;w<A.length;w++)E[h++]=A[w],h===
64&&U();l+=A.length},"add"),v=o(()=>{if(E[h++]=128,h==64&&U(),h+8>64){for(;h<64;)
E[h++]=0;U()}for(;h<58;)E[h++]=0;let A=l*8;E[h++]=A/1099511627776&255,E[h++]=A/4294967296&
255,E[h++]=A>>>24,E[h++]=A>>>16&255,E[h++]=A>>>8&255,E[h++]=A&255,U();let w=new Uint8Array(
32);return w[0]=e>>>24,w[1]=e>>>16&255,w[2]=e>>>8&255,w[3]=e&255,w[4]=t>>>24,w[5]=
t>>>16&255,w[6]=t>>>8&255,w[7]=t&255,w[8]=n>>>24,w[9]=n>>>16&255,w[10]=n>>>8&255,
w[11]=n&255,w[12]=i>>>24,w[13]=i>>>16&255,w[14]=i>>>8&255,w[15]=i&255,w[16]=s>>>
24,w[17]=s>>>16&255,w[18]=s>>>8&255,w[19]=s&255,w[20]=a>>>24,w[21]=a>>>16&255,w[22]=
a>>>8&255,w[23]=a&255,w[24]=u>>>24,w[25]=u>>>16&255,w[26]=u>>>8&255,w[27]=u&255,
w[28]=c>>>24,w[29]=c>>>16&255,w[30]=c>>>8&255,w[31]=c&255,w},"digest");return r===
void 0?{add:C,digest:v}:(C(r),v())}var ji=he(()=>{"use strict";p();o(yt,"sha256")});var mt,Hi=he(()=>{"use strict";p();mt=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
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
_state:r._hex(this._state)}}});var Pr={};ye(Pr,{createHash:()=>Ru,createHmac:()=>Nu,randomBytes:()=>Bu});function Bu(r){
return x.getRandomValues(m.alloc(r))}function Ru(r){if(r==="sha256")return{update:o(
function(e){return{digest:o(function(){return m.from(yt(e))},"digest")}},"update")};
if(r==="md5")return{update:o(function(e){return{digest:o(function(){return typeof e==
"string"?mt.hashStr(e):mt.hashByteArray(e)},"digest")}},"update")};throw new Error(
`Hash type '${r}' not supported`)}function Nu(r,e){if(r!=="sha256")throw new Error(
`Only sha256 is supported (requested: '${r}')`);return{update:o(function(t){return{
digest:o(function(){typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t==
"string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>64)e=yt(e);else if(n<
64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(64),s=new Uint8Array(
64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(t.length+
64);a.set(i,0),a.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.set(yt(a),
64),m.from(yt(u))},"digest")}},"update")}}var Br=he(()=>{"use strict";p();ji();Hi();
o(Bu,"randomBytes");o(Ru,"createHash");o(Nu,"createHmac")});var Nr=B(Ki=>{"use strict";p();Ki.parse=function(r,e){return new Rr(r,e).parse()};
var Rr=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
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
return r}o(Mu,"identity")});var Mr=B((_f,Wi)=>{p();var qu=Nr();Wi.exports={create:o(function(r,e){return{parse:o(
function(){return qu.parse(r,e)},"parse")}},"create")}});var zi=B((Uf,Vi)=>{"use strict";p();var Du=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Fu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Ou=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,ku=/^-?infinity$/;
Vi.exports=o(function(e){if(ku.test(e))return Number(e.replace("i","I"));var t=Du.
exec(e);if(!t)return Qu(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Gi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,y=$u(e);return y!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),qr(i)&&f.setUTCFullYear(i),y!==0&&f.setTime(f.getTime()-y)):(f=new Date(
i,s,a,u,c,l,h),qr(i)&&f.setFullYear(i)),f},"parseDate");function Qu(r){var e=Fu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Gi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return qr(t)&&a.setFullYear(t),a}}o(Qu,"getDate");
function $u(r){if(r.endsWith("+00"))return 0;var e=Ou.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o($u,"timeZoneOffset");function Gi(r){
return-(r-1)}o(Gi,"bcYearToNegativeYear");function qr(r){return r>=0&&r<100}o(qr,
"is0To99")});var Yi=B((Bf,Ji)=>{p();Ji.exports=Hu;var ju=Object.prototype.hasOwnProperty;function Hu(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)ju.call(t,
n)&&(r[n]=t[n])}return r}o(Hu,"extend")});var es=B((Mf,Xi)=>{"use strict";p();var Ku=Yi();Xi.exports=Je;function Je(r){if(!(this instanceof
Je))return new Je(r);Ku(this,nc(r))}o(Je,"PostgresInterval");var Wu=["seconds","\
minutes","hours","days","months","years"];Je.prototype.toPostgres=function(){var r=Wu.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Gu={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Vu=["years","months","days"],zu=["hours","minutes","seconds"];Je.
prototype.toISOString=Je.prototype.toISO=function(){var r=Vu.map(t,this).join(""),
e=zu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Gu[n]}};var Dr="([+-]?\\d+)",Ju=Dr+"\\s+years?",Yu=Dr+"\\s+mons?",Zu=Dr+"\
\\s+days?",Xu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",ec=new RegExp([
Ju,Yu,Zu,Xu].map(function(r){return"("+r+")?"}).join("\\s*")),Zi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},tc=["hours","minutes","sec\
onds","milliseconds"];function rc(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(rc,"parseMilliseconds");function nc(r){if(!r)return{};var e=ec.exec(
r),t=e[8]==="-";return Object.keys(Zi).reduce(function(n,i){var s=Zi[i],a=e[s];return!a||
(a=i==="milliseconds"?rc(a):parseInt(a,10),!a)||(t&&~tc.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(nc,"parse")});var rs=B((Ff,ts)=>{"use strict";p();ts.exports=o(function(e){if(/^\\x/.test(e))return new m(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new m(t,"binary")},"parseBytea")});var cs=B((Qf,us)=>{p();var wt=Nr(),gt=Mr(),jt=zi(),is=es(),ss=rs();function Ht(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Ht,"allowNull");function as(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(as,"parseBool");function ic(r){return r?wt.parse(r,as):null}o(ic,"pars\
eBoolArray");function sc(r){return parseInt(r,10)}o(sc,"parseBaseTenInt");function Fr(r){
return r?wt.parse(r,Ht(sc)):null}o(Fr,"parseIntegerArray");function ac(r){return r?
wt.parse(r,Ht(function(e){return os(e).trim()})):null}o(ac,"parseBigIntegerArray");
var oc=o(function(r){if(!r)return null;var e=gt.create(r,function(t){return t!==
null&&(t=$r(t)),t});return e.parse()},"parsePointArray"),Or=o(function(r){if(!r)
return null;var e=gt.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),we=o(function(r){if(!r)return null;var e=gt.
create(r);return e.parse()},"parseStringArray"),kr=o(function(r){if(!r)return null;
var e=gt.create(r,function(t){return t!==null&&(t=jt(t)),t});return e.parse()},"\
parseDateArray"),uc=o(function(r){if(!r)return null;var e=gt.create(r,function(t){
return t!==null&&(t=is(t)),t});return e.parse()},"parseIntervalArray"),cc=o(function(r){
return r?wt.parse(r,Ht(ss)):null},"parseByteAArray"),Qr=o(function(r){return parseInt(
r,10)},"parseInteger"),os=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),ns=o(function(r){return r?wt.parse(r,Ht(JSON.parse)):null},
"parseJsonArray"),$r=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),lc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=$r(e);return s.radius=parseFloat(t),s},"parseCircle"),hc=o(function(r){r(20,
os),r(21,Qr),r(23,Qr),r(26,Qr),r(700,parseFloat),r(701,parseFloat),r(16,as),r(1082,
jt),r(1114,jt),r(1184,jt),r(600,$r),r(651,we),r(718,lc),r(1e3,ic),r(1001,cc),r(1005,
Fr),r(1007,Fr),r(1028,Fr),r(1016,ac),r(1017,oc),r(1021,Or),r(1022,Or),r(1231,Or),
r(1014,we),r(1015,we),r(1008,we),r(1009,we),r(1040,we),r(1041,we),r(1115,kr),r(1182,
kr),r(1185,kr),r(1186,is),r(1187,uc),r(17,ss),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,ns),r(3807,ns),r(3907,we),r(2951,we),r(791,we),r(1183,
we),r(1270,we)},"init");us.exports={init:hc}});var hs=B((Hf,ls)=>{"use strict";p();var de=1e6;function fc(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>
0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/
de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%de,a=4294967296*s+t,u=""+a%de,n+u+i}o(fc,"readInt8");ls.
exports=fc});var ms=B((Gf,ys)=>{p();var dc=hs(),V=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(g,E,U){
return g*Math.pow(2,U)+E};var s=t>>3,a=o(function(g){return n?~g&255:g},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var y=(e+t)%8;return y>0&&
(l=i(l,a(r[h])>>8-y,y)),l},"parseBits"),ps=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=V(r,1),s=V(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var y=1;y<=f;y++)a/=2,(h&1<<f-y)>0&&(l+=a);return l},"parsePrecisionBits"),
c=V(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),pc=o(function(r){return V(r,1)==1?-1*
(V(r,15,1,!0)+1):V(r,15,1)},"parseInt16"),fs=o(function(r){return V(r,1)==1?-1*(V(
r,31,1,!0)+1):V(r,31,1)},"parseInt32"),yc=o(function(r){return ps(r,23,8)},"pars\
eFloat32"),mc=o(function(r){return ps(r,52,11)},"parseFloat64"),wc=o(function(r){
var e=V(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,V(r,16,16)),n=0,i=[],
s=V(r,16),a=0;a<s;a++)n+=V(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,V(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ds=o(function(r,e){var t=V(
e,1),n=V(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),St=o(function(r){for(var e=V(r,32),t=V(r,32,32),
n=V(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=V(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=V(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
V(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],y;if(l.length>1){var g=l.shift();for(y=0;y<g;y++)f[y]=c(l,h);l.unshift(
g)}else for(y=0;y<l[0];y++)f[y]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),gc=o(function(r){return r.toString("utf8")},"parseText"),Sc=o(function(r){return r===
null?null:V(r,8)>0},"parseBool"),Ec=o(function(r){r(20,dc),r(21,pc),r(23,fs),r(26,
fs),r(1700,wc),r(700,yc),r(701,mc),r(16,Sc),r(1114,ds.bind(null,!1)),r(1184,ds.bind(
null,!0)),r(1e3,St),r(1007,St),r(1016,St),r(1008,St),r(1009,St),r(25,gc)},"init");
ys.exports={init:Ec}});var gs=B((Jf,ws)=>{p();ws.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var xt=B(bt=>{p();var bc=cs(),xc=ms(),Ac=Mr(),vc=gs();bt.getTypeParser=Cc;bt.setTypeParser=
_c;bt.arrayParser=Ac;bt.builtins=vc;var Et={text:{},binary:{}};function Ss(r){return String(
r)}o(Ss,"noParse");function Cc(r,e){return e=e||"text",Et[e]&&Et[e][r]||Ss}o(Cc,
"getTypeParser");function _c(r,e,t){typeof e=="function"&&(t=e,e="text"),Et[e][r]=
t}o(_c,"setTypeParser");bc.init(function(r,e){Et.text[r]=e});xc.init(function(r,e){
Et.binary[r]=e})});var At=B((td,jr)=>{"use strict";p();jr.exports={host:"localhost",user:S.platform===
"win32"?S.env.USERNAME:S.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Ye=xt(),Lc=Ye.getTypeParser(
20,"text"),Tc=Ye.getTypeParser(1016,"text");jr.exports.__defineSetter__("parseIn\
t8",function(r){Ye.setTypeParser(20,"text",r?Ye.getTypeParser(23,"text"):Lc),Ye.
setTypeParser(1016,"text",r?Ye.getTypeParser(1007,"text"):Tc)})});var vt=B((nd,bs)=>{"use strict";p();var Uc=(Br(),ee(Pr)),Ic=At();function Pc(r){
var e=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Pc,"escapeEl\
ement");function Es(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||
typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Es(r[t]):r[t]instanceof m?e+=
"\\\\x"+r[t].toString("hex"):e+=Pc(Kt(r[t]));return e=e+"}",e}o(Es,"arrayString");
var Kt=o(function(r,e){if(r==null)return null;if(r instanceof m)return r;if(ArrayBuffer.
isView(r)){var t=m.from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.
byteLength?t:t.slice(r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof
Date?Ic.parseInputDatesAsUTC?Nc(r):Rc(r):Array.isArray(r)?Es(r):typeof r=="objec\
t"?Bc(r,e):r.toString()},"prepareValue");function Bc(r,e){if(r&&typeof r.toPostgres==
"function"){if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference det\
ected while preparing "'+r+'" for query');return e.push(r),Kt(r.toPostgres(Kt),e)}
return JSON.stringify(r)}o(Bc,"prepareObject");function ce(r,e){for(r=""+r;r.length<
e;)r="0"+r;return r}o(ce,"pad");function Rc(r){var e=-r.getTimezoneOffset(),t=r.
getFullYear(),n=t<1;n&&(t=Math.abs(t)+1);var i=ce(t,4)+"-"+ce(r.getMonth()+1,2)+
"-"+ce(r.getDate(),2)+"T"+ce(r.getHours(),2)+":"+ce(r.getMinutes(),2)+":"+ce(r.getSeconds(),
2)+"."+ce(r.getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=ce(Math.floor(
e/60),2)+":"+ce(e%60,2),n&&(i+=" BC"),i}o(Rc,"dateToString");function Nc(r){var e=r.
getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=ce(e,4)+"-"+ce(r.getUTCMonth()+
1,2)+"-"+ce(r.getUTCDate(),2)+"T"+ce(r.getUTCHours(),2)+":"+ce(r.getUTCMinutes(),
2)+":"+ce(r.getUTCSeconds(),2)+"."+ce(r.getUTCMilliseconds(),3);return n+="+00:0\
0",t&&(n+=" BC"),n}o(Nc,"dateToStringUTC");function Mc(r,e,t){return r=typeof r==
"string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}o(Mc,"normalizeQueryConfig");var Hr=o(function(r){return Uc.createHash("md5").
update(r,"utf-8").digest("hex")},"md5"),qc=o(function(r,e,t){var n=Hr(e+r),i=Hr(
m.concat([m.from(n),t]));return"md5"+i},"postgresMd5PasswordHash");bs.exports={prepareValue:o(
function(e){return Kt(e)},"prepareValueWrapper"),normalizeQueryConfig:Mc,postgresMd5PasswordHash:qc,
md5:Hr}});var _s=B((ad,Cs)=>{"use strict";p();var Kr=(Br(),ee(Pr));function Dc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Kr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Dc,"startSession");function Fc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=Qc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=m.from(n.salt,"base64"),s=Hc(e,
i,n.iteration),a=Ze(s,"Client Key"),u=jc(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,y=Ze(u,f),g=vs(
a,y),E=g.toString("base64"),U=Ze(s,"Server Key"),C=Ze(U,f);r.message="SASLRespon\
se",r.serverSignature=C.toString("base64"),r.response=h+",p="+E}o(Fc,"continueSe\
ssion");function Oc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=$c(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(Oc,"finalizeSession");function kc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(kc,"isPrintableC\
hars");function xs(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(xs,"isBase64");function As(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(As,"parseAttributePairs");function Qc(r){let e=As(
r),t=e.get("r");if(t){if(!kc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!xs(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(Qc,"parseServerFirstMe\
ssage");function $c(r){let t=As(r).get("v");if(t){if(!xs(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o($c,"parseServerFinalMessage");function vs(r,e){if(!m.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!m.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return m.
from(r.map((t,n)=>r[n]^e[n]))}o(vs,"xorBuffers");function jc(r){return Kr.createHash(
"sha256").update(r).digest()}o(jc,"sha256");function Ze(r,e){return Kr.createHmac(
"sha256",r).update(e).digest()}o(Ze,"hmacSha256");function Hc(r,e,t){for(var n=Ze(
r,m.concat([e,m.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Ze(r,n),i=vs(i,n);return i}
o(Hc,"Hi");Cs.exports={startSession:Dc,continueSession:Fc,finalizeSession:Oc}});var Wr={};ye(Wr,{join:()=>Kc});function Kc(...r){return r.join("/")}var Gr=he(()=>{
"use strict";p();o(Kc,"join")});var Vr={};ye(Vr,{stat:()=>Wc});function Wc(r,e){e(new Error("No filesystem"))}var zr=he(
()=>{"use strict";p();o(Wc,"stat")});var Jr={};ye(Jr,{default:()=>Gc});var Gc,Yr=he(()=>{"use strict";p();Gc={}});var Ls={};ye(Ls,{StringDecoder:()=>Zr});var Zr,Ts=he(()=>{"use strict";p();Zr=class{static{
o(this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Bs=B((md,Ps)=>{"use strict";p();var{Transform:Vc}=(Yr(),ee(Jr)),{StringDecoder:zc}=(Ts(),ee(Ls)),
Pe=Symbol("last"),Wt=Symbol("decoder");function Jc(r,e,t){let n;if(this.overflow){
if(n=this[Wt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Pe]+=this[Wt].write(r),n=this[Pe].split(this.matcher);this[Pe]=
n.pop();for(let i=0;i<n.length;i++)try{Is(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Pe].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(Jc,"transform");function Yc(r){
if(this[Pe]+=this[Wt].end(),this[Pe])try{Is(this,this.mapper(this[Pe]))}catch(e){
return r(e)}r()}o(Yc,"flush");function Is(r,e){e!==void 0&&r.push(e)}o(Is,"push");
function Us(r){return r}o(Us,"noop");function Zc(r,e,t){switch(r=r||/\r?\n/,e=e||
Us,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Us)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Jc,t.flush=Yc,t.readableObjectMode=!0;
let n=new Vc(t);return n[Pe]="",n[Wt]=new zc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(Zc,"split");Ps.exports=Zc});var Ms=B((Sd,_e)=>{"use strict";p();var Rs=(Gr(),ee(Wr)),Xc=(Yr(),ee(Jr)).Stream,
el=Bs(),Ns=(pt(),ee(dt)),tl=5432,Gt=S.platform==="win32",Ct=S.stderr,rl=56,nl=7,
il=61440,sl=32768;function al(r){return(r&il)==sl}o(al,"isRegFile");var Xe=["hos\
t","port","database","user","password"],Xr=Xe.length,ol=Xe[Xr-1];function en(){var r=Ct instanceof
Xc&&Ct.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Ct.write(Ns.format.apply(Ns,e))}}o(en,"warn");Object.defineProperty(_e.exports,
"isWin",{get:o(function(){return Gt},"get"),set:o(function(r){Gt=r},"set")});_e.
exports.warnTo=function(r){var e=Ct;return Ct=r,e};_e.exports.getFileName=function(r){
var e=r||S.env,t=e.PGPASSFILE||(Gt?Rs.join(e.APPDATA||"./","postgresql","pgpass.\
conf"):Rs.join(e.HOME||"./",".pgpass"));return t};_e.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(S.env,"PGPASSWORD")?!1:Gt?!0:(e=e||"\
<unkn>",al(r.mode)?r.mode&(rl|nl)?(en('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less',e),!1):!0:(en('WARNING:\
 password file "%s" is not a plain file',e),!1))};var ul=_e.exports.match=function(r,e){
return Xe.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||tl)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};_e.exports.getPassword=function(r,e,t){
var n,i=e.pipe(el());function s(c){var l=cl(c);l&&ll(l)&&ul(r,l)&&(n=l[ol],i.end())}
o(s,"onLine");var a=o(function(){e.destroy(),t(n)},"onEnd"),u=o(function(c){e.destroy(),
en("WARNING: error on reading file: %s",c),t(void 0)},"onErr");e.on("error",u),i.
on("data",s).on("end",a).on("error",u)};var cl=_e.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,a={},
u=!1,c=o(function(h,f,y){var g=r.substring(f,y);Object.hasOwnProperty.call(S.env,
"PGPASS_NO_DEESCAPE")||(g=g.replace(/\\([:\\])/g,"$1")),a[Xe[h]]=g},"addToObj"),
l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(l),u=n==Xr-1,u){c(n,i);break}
l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=Object.keys(a).length===
Xr?a:null,a},ll=_e.exports.isValidEntry=function(r){for(var e={0:function(a){return a.
length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(a)&&a>0&&a<9007199254740992&&
Math.floor(a)===a)},2:function(a){return a.length>0},3:function(a){return a.length>
0},4:function(a){return a.length>0}},t=0;t<Xe.length;t+=1){var n=e[t],i=r[Xe[t]]||
"",s=n(i);if(!s)return!1}return!0}});var Ds=B((Ad,tn)=>{"use strict";p();var xd=(Gr(),ee(Wr)),qs=(zr(),ee(Vr)),Vt=Ms();
tn.exports=function(r,e){var t=Vt.getFileName();qs.stat(t,function(n,i){if(n||!Vt.
usePgPass(i,t))return e(void 0);var s=qs.createReadStream(t);Vt.getPassword(r,s,
e)})};tn.exports.warnTo=Vt.warnTo});var Jt=B((Cd,Fs)=>{"use strict";p();var hl=xt();function zt(r){this._types=r||hl,
this.text={},this.binary={}}o(zt,"TypeOverrides");zt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
zt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};zt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Fs.exports=zt});var Os={};ye(Os,{default:()=>fl});var fl,ks=he(()=>{"use strict";p();fl={}});var Qs={};ye(Qs,{parse:()=>rn});function rn(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:y}=new URL(n);s=decodeURIComponent(s),i=decodeURIComponent(
i),l=decodeURIComponent(l);let g=i+":"+s,E=e?Object.fromEntries(f.entries()):h;return{
href:r,protocol:t,auth:g,username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,query:E,hash:y}}var nn=he(()=>{"use strict";p();o(rn,"parse")});var js=B((Pd,$s)=>{"use strict";p();var dl=(nn(),ee(Qs)),sn=(zr(),ee(Vr));function an(r){
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
(t.ssl.cert=sn.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=sn.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=sn.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(an,"parse");$s.exports=an;an.parse=an});var Yt=B((Nd,Ws)=>{"use strict";p();var pl=(ks(),ee(Os)),Ks=At(),Hs=js().parse,le=o(
function(r,e,t){return t===void 0?t=S.env["PG"+r.toUpperCase()]:t===!1||(t=S.env[t]),
e[r]||t||Ks[r]},"val"),yl=o(function(){switch(S.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Ks.ssl},"readSSLConfigFromEnvironment"),et=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),ge=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+et(n))},"ad\
d"),on=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Hs(e):e||{},e.connectionString&&(e=Object.assign({},e,Hs(e.connectionString))),
this.user=le("user",e),this.database=le("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(le("port",e),10),this.host=le("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:le(
"password",e)}),this.binary=le("binary",e),this.options=le("options",e),this.ssl=
typeof e.ssl>"u"?yl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
le("client_encoding",e),this.replication=le("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=le("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=le("fallback_application_name",e,!1),this.
statement_timeout=le("statement_timeout",e,!1),this.lock_timeout=le("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=le("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=le("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=S.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
ge(t,this,"user"),ge(t,this,"password"),ge(t,this,"port"),ge(t,this,"application\
_name"),ge(t,this,"fallback_application_name"),ge(t,this,"connect_timeout"),ge(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(ge(t,n,"sslmode"),ge(t,n,"sslca"),ge(t,n,"sslkey"),ge(t,n,"sslcert"),
ge(t,n,"sslrootcert"),this.database&&t.push("dbname="+et(this.database)),this.replication&&
t.push("replication="+et(this.replication)),this.host&&t.push("host="+et(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+et(this.client_encoding)),pl.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+et(s)),e(null,t.join(" ")))})}};Ws.exports=on});var zs=B((Dd,Vs)=>{"use strict";p();var ml=xt(),Gs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
un=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Gs.exec(e.text):t=Gs.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](s):t[a]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=ml.getTypeParser(
n.dataTypeID,n.format||"text")}}};Vs.exports=un});var Xs=B((kd,Zs)=>{"use strict";p();var{EventEmitter:wl}=Ie(),Js=zs(),Ys=vt(),cn=class extends wl{static{
o(this,"Query")}constructor(e,t,n){super(),e=Ys.normalizeQueryConfig(e,t,n),this.
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
binary,valueMapper:Ys.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};Zs.exports=cn});var ta={};ye(ta,{Socket:()=>Se,isIP:()=>gl});function gl(r){return 0}var ea,Sl,Se,
Zt=he(()=>{"use strict";p();ea=Qe(Ie(),1);o(gl,"isIP");Sl=o(r=>r.replace(/^[^.]+\./,
"api."),"transformHost"),Se=class r extends ea.EventEmitter{static{o(this,"Socke\
t")}static defaults={poolQueryViaFetch:!1,fetchEndpoint:o(e=>"https://"+Sl(e)+"/\
sql","fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:o(e=>e+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1};static opts={};opts={};static get poolQueryViaFetch(){
return r.opts.poolQueryViaFetch??r.defaults.poolQueryViaFetch}static set poolQueryViaFetch(e){
r.opts.poolQueryViaFetch=e}static get fetchEndpoint(){return r.opts.fetchEndpoint??
r.defaults.fetchEndpoint}static set fetchEndpoint(e){r.opts.fetchEndpoint=e}static get fetchConnectionCache(){
return!0}static set fetchConnectionCache(e){console.warn("The `fetchConnectionCa\
che` option is deprecated (now always `true`)")}static get fetchFunction(){return r.
opts.fetchFunction??r.defaults.fetchFunction}static set fetchFunction(e){r.opts.
fetchFunction=e}static get webSocketConstructor(){return r.opts.webSocketConstructor??
r.defaults.webSocketConstructor}static set webSocketConstructor(e){r.opts.webSocketConstructor=
e}get webSocketConstructor(){return this.opts.webSocketConstructor??r.webSocketConstructor}set webSocketConstructor(e){
this.opts.webSocketConstructor=e}static get wsProxy(){return r.opts.wsProxy??r.defaults.
wsProxy}static set wsProxy(e){r.opts.wsProxy=e}get wsProxy(){return this.opts.wsProxy??
r.wsProxy}set wsProxy(e){this.opts.wsProxy=e}static get coalesceWrites(){return r.
opts.coalesceWrites??r.defaults.coalesceWrites}static set coalesceWrites(e){r.opts.
coalesceWrites=e}get coalesceWrites(){return this.opts.coalesceWrites??r.coalesceWrites}set coalesceWrites(e){
this.opts.coalesceWrites=e}static get useSecureWebSocket(){return r.opts.useSecureWebSocket??
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
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof n=="functi\
on"?n(e,t):`${n}?address=${e}:${t}`}connecting=!1;pending=!0;writable=!0;encrypted=!1;authorized=!1;destroyed=!1;ws=null;writeBuffer;tlsState=0;tlsRead;tlsWrite;setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}connect(e,t,n){
this.connecting=!0,n&&this.once("connect",n);let i=o(()=>{this.connecting=!1,this.
pending=!1,this.emit("connect"),this.emit("ready")},"handleWebSocketOpen"),s=o((u,c=!1)=>{
u.binaryType="arraybuffer",u.addEventListener("error",l=>{this.emit("error",l),this.
emit("close")}),u.addEventListener("message",l=>{if(this.tlsState===0){let h=m.from(
l.data);this.emit("data",h)}}),u.addEventListener("close",()=>{this.emit("close")}),
c?i():u.addEventListener("open",i)},"configureWebSocket"),a;try{a=this.wsProxyAddrForHost(
t,typeof e=="string"?parseInt(e,10):e)}catch(u){this.emit("error",u),this.emit("\
close");return}try{let c=(this.useSecureWebSocket?"wss:":"ws:")+"//"+a;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(c),s(this.ws);else try{this.ws=new WebSocket(
c),s(this.ws)}catch{this.ws=new __unstable_WebSocket(c),s(this.ws)}}catch(u){let l=(this.
useSecureWebSocket?"https:":"http:")+"//"+a;fetch(l,{headers:{Upgrade:"websocket"}}).
then(h=>{if(this.ws=h.webSocket,this.ws==null)throw u;this.ws.accept(),s(this.ws,
!0)}).catch(h=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${h.message}`)),this.emit("close")})}}async startTls(e){if(this.subtls===
void 0)throw new Error("For Postgres SSL connections, you must set `neonConfig.s\
ubtls` to the subtls library. See https://github.com/neondatabase/serverless/blo\
b/main/CONFIG.md for more information.");this.tlsState=1;let t=this.subtls.TrustedCert.
fromPEM(this.rootCerts),n=new this.subtls.WebSocketReadQueue(this.ws),i=n.read.bind(
n),s=this.rawWrite.bind(this),[a,u]=await this.subtls.startTls(e,t,i,s,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=
a,this.tlsWrite=u,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){let e=await this.
tlsRead();if(e===void 0)break;{let t=m.from(e);this.emit("data",t)}}}rawWrite(e){
if(!this.coalesceWrites){this.ws.send(e);return}if(this.writeBuffer===void 0)this.
writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},
0);else{let t=new Uint8Array(this.writeBuffer.length+e.length);t.set(this.writeBuffer),
t.set(e,this.writeBuffer.length),this.writeBuffer=t}}write(e,t="utf8",n=i=>{}){return e.
length===0?(n(),!0):(typeof e=="string"&&(e=m.from(e,t)),this.tlsState===0?(this.
rawWrite(e),n()):this.tlsState===1?this.once("secureConnection",()=>{this.write(
e,t,n)}):(this.tlsWrite(e),n()),!0)}end(e=m.alloc(0),t="utf8",n=()=>{}){return this.
write(e,t,()=>{this.ws.close(),n()}),this}destroy(){return this.destroyed=!0,this.
end()}}});var vn=B(P=>{"use strict";p();Object.defineProperty(P,"__esModule",{value:!0});P.
NoticeMessage=P.DataRowMessage=P.CommandCompleteMessage=P.ReadyForQueryMessage=P.
NotificationResponseMessage=P.BackendKeyDataMessage=P.AuthenticationMD5Password=
P.ParameterStatusMessage=P.ParameterDescriptionMessage=P.RowDescriptionMessage=P.
Field=P.CopyResponse=P.CopyDataMessage=P.DatabaseError=P.copyDone=P.emptyQuery=P.
replicationStart=P.portalSuspended=P.noData=P.closeComplete=P.bindComplete=P.parseComplete=
void 0;P.parseComplete={name:"parseComplete",length:5};P.bindComplete={name:"bin\
dComplete",length:5};P.closeComplete={name:"closeComplete",length:5};P.noData={name:"\
noData",length:5};P.portalSuspended={name:"portalSuspended",length:5};P.replicationStart=
{name:"replicationStart",length:4};P.emptyQuery={name:"emptyQuery",length:4};P.copyDone=
{name:"copyDone",length:4};var ln=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};P.DatabaseError=ln;
var hn=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};P.CopyDataMessage=hn;var fn=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};P.CopyResponse=fn;var dn=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};P.Field=dn;var pn=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};P.RowDescriptionMessage=
pn;var yn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};P.ParameterDescriptionMessage=yn;var mn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};P.ParameterStatusMessage=mn;
var wn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};P.AuthenticationMD5Password=
wn;var gn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};P.BackendKeyDataMessage=
gn;var Sn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};P.NotificationResponseMessage=Sn;var En=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};P.ReadyForQueryMessage=En;var bn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};P.CommandCompleteMessage=
bn;var xn=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};P.DataRowMessage=xn;var An=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};P.NoticeMessage=An});var ra=B(Xt=>{"use strict";p();Object.defineProperty(Xt,"__esModule",{value:!0});
Xt.Writer=void 0;var Cn=class{static{o(this,"Writer")}constructor(e=256){this.size=
e,this.offset=5,this.headerPosition=0,this.buffer=m.allocUnsafe(e)}ensure(e){var t=this.
buffer.length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.
buffer=m.allocUnsafe(i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.
buffer[this.offset++]=e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.
offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.
ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&
255,this}addCString(e){if(!e)this.ensure(1);else{var t=m.byteLength(e);this.ensure(
t+1),this.buffer.write(e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.
offset++]=0,this}addString(e=""){var t=m.byteLength(e);return this.ensure(t),this.
buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(e.length),
e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(
t,this.headerPosition+1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.
join(e);return this.offset=5,this.headerPosition=0,this.buffer=m.allocUnsafe(this.
size),t}};Xt.Writer=Cn});var ia=B(tr=>{"use strict";p();Object.defineProperty(tr,"__esModule",{value:!0});
tr.serialize=void 0;var _n=ra(),z=new _n.Writer,El=o(r=>{z.addInt16(3).addInt16(
0);for(let n of Object.keys(r))z.addCString(n).addCString(r[n]);z.addCString("cl\
ient_encoding").addCString("UTF8");var e=z.addCString("").flush(),t=e.length+4;return new _n.
Writer().addInt32(t).add(e).flush()},"startup"),bl=o(()=>{let r=m.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),xl=o(r=>z.
addCString(r).flush(112),"password"),Al=o(function(r,e){return z.addCString(r).addInt32(
m.byteLength(e)).addString(e),z.flush(112)},"sendSASLInitialResponseMessage"),vl=o(
function(r){return z.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Cl=o(
r=>z.addCString(r).flush(81),"query"),na=[],_l=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||na;for(var n=t.length,
i=z.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return z.
flush(80)},"parse"),tt=new _n.Writer,Ll=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(z.addInt16(0),tt.addInt32(-1)):n instanceof m?(z.
addInt16(1),tt.addInt32(n.length),tt.add(n)):(z.addInt16(0),tt.addInt32(m.byteLength(
n)),tt.addString(n))}},"writeValues"),Tl=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||na,s=i.length;return z.addCString(e).addCString(t),
z.addInt16(s),Ll(i,r.valueMapper),z.addInt16(s),z.add(tt.flush()),z.addInt16(n?1:
0),z.flush(66)},"bind"),Ul=m.from([69,0,0,0,9,0,0,0,0,0]),Il=o(r=>{if(!r||!r.portal&&
!r.rows)return Ul;let e=r.portal||"",t=r.rows||0,n=m.byteLength(e),i=4+n+1+4,s=m.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Pl=o((r,e)=>{let t=m.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Ln=o((r,e)=>{let n=4+m.byteLength(e)+1,i=m.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Bl=z.addCString("P").flush(68),Rl=z.addCString("S").flush(68),
Nl=o(r=>r.name?Ln(68,`${r.type}${r.name||""}`):r.type==="P"?Bl:Rl,"describe"),Ml=o(
r=>{let e=`${r.type}${r.name||""}`;return Ln(67,e)},"close"),ql=o(r=>z.add(r).flush(
100),"copyData"),Dl=o(r=>Ln(102,r),"copyFail"),er=o(r=>m.from([r,0,0,0,4]),"code\
OnlyBuffer"),Fl=er(72),Ol=er(83),kl=er(88),Ql=er(99),$l={startup:El,password:xl,
requestSsl:bl,sendSASLInitialResponseMessage:Al,sendSCRAMClientFinalMessage:vl,query:Cl,
parse:_l,bind:Tl,execute:Il,describe:Nl,close:Ml,flush:o(()=>Fl,"flush"),sync:o(
()=>Ol,"sync"),end:o(()=>kl,"end"),copyData:ql,copyDone:o(()=>Ql,"copyDone"),copyFail:Dl,
cancel:Pl};tr.serialize=$l});var sa=B(rr=>{"use strict";p();Object.defineProperty(rr,"__esModule",{value:!0});
rr.BufferReader=void 0;var jl=m.allocUnsafe(0),Tn=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=jl,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};rr.BufferReader=Tn});var ua=B(nr=>{"use strict";p();Object.defineProperty(nr,"__esModule",{value:!0});
nr.Parser=void 0;var J=vn(),Hl=sa(),Un=1,Kl=4,aa=Un+Kl,oa=m.allocUnsafe(0),In=class{static{
o(this,"Parser")}constructor(e){if(this.buffer=oa,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Hl.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+aa<=n;){let s=this.buffer[i],
a=this.buffer.readUInt32BE(i+Un),u=Un+a;if(u+i<=n){let c=this.handlePacket(i+aa,
s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=oa,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
m.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
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
return this.parseCopyData(e,n,i);default:return new J.DatabaseError("received in\
valid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.string(1);return new J.ReadyForQueryMessage(
t,i)}parseCommandCompleteMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring();return new J.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){let i=n.
slice(e,e+(t-4));return new J.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyOutResponse")}parseCopyMessage(e,t,n,i){this.reader.
setBuffer(e,n);let s=this.reader.byte()!==0,a=this.reader.int16(),u=new J.CopyResponse(
t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=this.reader.int16();return u}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.
reader.cstring();return new J.NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new J.RowDescriptionMessage(
t,i);for(let a=0;a<i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.
reader.cstring(),t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),
s=this.reader.int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"bi\
nary";return new J.Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new J.ParameterDescriptionMessage(
t,i);for(let a=0;a<i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<
i;a++){let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new J.
DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.cstring(),s=this.reader.cstring();return new J.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),
s=this.reader.int32();return new J.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s={name:"authenticationOk",
length:t};switch(i){case 0:break;case 3:s.length===8&&(s.name="authenticationCle\
artextPassword");break;case 5:if(s.length===12){s.name="authenticationMD5Passwor\
d";let u=this.reader.bytes(4);return new J.AuthenticationMD5Password(t,u)}break;case 10:
s.name="authenticationSASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&
s.mechanisms.push(a);while(a);break;case 11:s.name="authenticationSASLContinue",
s.data=this.reader.string(t-8);break;case 12:s.name="authenticationSASLFinal",s.
data=this.reader.string(t-8);break;default:throw new Error("Unknown authenticati\
onOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(
e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=this.reader.cstring(),
a=this.reader.string(1);let u=s.M,c=i==="notice"?new J.NoticeMessage(t,u):new J.
DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.hint=s.H,c.
position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.schema=s.s,
c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.line=s.L,c.
routine=s.R,c}};nr.Parser=In});var Pn=B(Be=>{"use strict";p();Object.defineProperty(Be,"__esModule",{value:!0});
Be.DatabaseError=Be.serialize=Be.parse=void 0;var Wl=vn();Object.defineProperty(
Be,"DatabaseError",{enumerable:!0,get:o(function(){return Wl.DatabaseError},"get")});
var Gl=ia();Object.defineProperty(Be,"serialize",{enumerable:!0,get:o(function(){
return Gl.serialize},"get")});var Vl=ua();function zl(r,e){let t=new Vl.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}o(zl,"parse");Be.
parse=zl});var ca={};ye(ca,{connect:()=>Jl});function Jl({socket:r,servername:e}){return r.
startTls(e),r}var la=he(()=>{"use strict";p();o(Jl,"connect")});var Rn=B((hp,da)=>{"use strict";p();var ha=(Zt(),ee(ta)),Yl=Ie().EventEmitter,{parse:Zl,
serialize:re}=Pn(),fa=re.flush(),Xl=re.sync(),eh=re.end(),Bn=class extends Yl{static{
o(this,"Connection")}constructor(e){super(),e=e||{},this.stream=e.stream||new ha.
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
 establishing an SSL connection"))}var u=(la(),ee(ca));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),ha.isIP(t)===
0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),Zl(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(re.requestSsl())}startup(e){this.stream.write(re.startup(e))}cancel(e,t){
this._send(re.cancel(e,t))}password(e){this._send(re.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(re.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(re.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(re.query(e))}parse(e){this._send(re.
parse(e))}bind(e){this._send(re.bind(e))}execute(e){this._send(re.execute(e))}flush(){
this.stream.writable&&this.stream.write(fa)}sync(){this._ending=!0,this._send(fa),
this._send(Xl)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this.
_ending=!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(eh,()=>{this.stream.end()})}close(e){this._send(re.close(e))}describe(e){
this._send(re.describe(e))}sendCopyFromChunk(e){this._send(re.copyData(e))}endCopyFrom(){
this._send(re.copyDone())}sendCopyFail(e){this._send(re.copyFail(e))}};da.exports=
Bn});var ma=B((yp,ya)=>{"use strict";p();var th=Ie().EventEmitter,pp=(pt(),ee(dt)),rh=vt(),
Nn=_s(),nh=Ds(),ih=Jt(),sh=Yt(),pa=Xs(),ah=At(),oh=Rn(),ir=class extends th{static{
o(this,"Client")}constructor(e){super(),this.connectionParameters=new sh(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||_.Promise,this._types=new ih(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new oh({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||ah.binary,this.processID=null,
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
"error",n)}):this.password!==null?e():nh(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=rh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=Nn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
Nn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){Nn.finalizeSession(this.saslSession,
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
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new pa(
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
_Promise(t=>{this.connection.once("end",t)})}};ir.Query=pa;ya.exports=ir});var Ea=B((gp,Sa)=>{"use strict";p();var uh=Ie().EventEmitter,wa=o(function(){},"\
NOOP"),ga=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Mn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},rt=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function ch(){throw new Error("Release called on client which \
has already been released to the pool.")}o(ch,"throwOnDoubleRelease");function sr(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(sr,"promisify");function lh(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(lh,"makeIdleListener");var qn=class extends uh{static{o(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||ar().Client,this.Promise=this.options.Promise||_.
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
d condition")}_remove(e){let t=ga(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=sr(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&S.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new rt(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(a),t.callback(u,c,l)},
"queueCallback"),s=new rt(i),a=setTimeout(()=>{ga(this._pendingQueue,u=>u.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new rt(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=lh(this,t);this.log("checking client timeout");let i,
s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{this.log("ending c\
lient due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},
this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(
a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to connect",
a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connection termin\
ated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(a,void 0,
wa);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==0){
let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.
add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new rt(
(l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",
()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,wa);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&ch(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Mn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=sr(this.Promise,e);
return L(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=sr(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=sr(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};Sa.exports=qn});var ba={};ye(ba,{default:()=>hh});var hh,xa=he(()=>{"use strict";p();hh={}});var Aa=B((xp,fh)=>{fh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var _a=B((Ap,Ca)=>{"use strict";p();var va=Ie().EventEmitter,dh=(pt(),ee(dt)),Dn=vt(),
nt=Ca.exports=function(r,e,t){va.call(this),r=Dn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};dh.inherits(
nt,va);var ph={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};nt.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=ph[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};nt.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};nt.prototype.catch=function(r){return this._getPromise().
catch(r)};nt.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};nt.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,L(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(S.domain&&(t=S.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(Dn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(Dn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Ia=B((Lp,Ua)=>{"use strict";p();var yh=(xa(),ee(ba)),mh=Jt(),_p=Aa(),La=Ie().
EventEmitter,wh=(pt(),ee(dt)),gh=Yt(),Ta=_a(),pe=Ua.exports=function(r){La.call(
this),r=r||{},this._Promise=r.Promise||_.Promise,this._types=new mh(r.types),this.
native=new yh({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new gh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};pe.Query=Ta;wh.inherits(pe,La);pe.prototype._errorAllQueries=
function(r){let e=o(t=>{S.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};pe.prototype._connect=
function(r){var e=this;if(this._connecting){S.nextTick(()=>r(new Error("Client h\
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
query_timeout,n=new Ta(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
h,l=f}),n.callback=(h,f)=>h?l(h):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");S.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{clearTimeout(a),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,S.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,S.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
pe.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),S.nextTick(()=>{e.emit("end"),r&&r()})}),t};pe.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};pe.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};pe.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};pe.prototype.ref=function(){};
pe.prototype.unref=function(){};pe.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};pe.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Fn=B((Ip,Pa)=>{"use strict";p();Pa.exports=Ia()});var ar=B((Rp,_t)=>{"use strict";p();var Sh=ma(),Eh=At(),bh=Rn(),xh=Ea(),{DatabaseError:Ah}=Pn(),
vh=o(r=>class extends xh{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),On=o(function(r){this.defaults=Eh,this.Client=r,this.Query=this.Client.
Query,this.Pool=vh(this.Client),this._pools=[],this.Connection=bh,this.types=xt(),
this.DatabaseError=Ah},"PG");typeof S.env.NODE_PG_FORCE_NATIVE<"u"?_t.exports=new On(
Fn()):(_t.exports=new On(Sh),Object.defineProperty(_t.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new On(Fn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(_t.exports,"native",{value:r}),r}}))});p();var Tr={};ye(Tr,{SocketReadQueue:()=>Xo,TrustedCert:()=>Si,WebSocketReadQueue:()=>Zo,
startTls:()=>Yo});p();function oe(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(oe,"p");function ht(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(ht,"O");var xr="\xB7\xB7 ",
hi=new TextEncoder,Uo=new TextDecoder,Ae=class{static{o(this,"N")}offset;dataView;data;comments;indents;indent;constructor(r){
this.offset=0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(
this.data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.
indents={},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;
this.data=oe(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.
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
readBytes(r.length);if(!ht(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
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
let e=hi.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=hi.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
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
void 0?xr.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${xr.repeat(t)}`)}return e}};function Io(r,e,t,n=!0){let i=new Ae(1024);i.writeUint8(
22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(1,0);let a=i.
writeLengthUint24();i.writeUint16(771,0),x.getRandomValues(i.subarray(32));let u=i.
writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);i.writeUint16(
4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.writeLengthUint16(
0);if(n){i.writeUint16(0,0);let R=i.writeLengthUint16(0),q=i.writeLengthUint16(0);
i.writeUint8(0,0);let M=i.writeLengthUint16(0);i.writeUTF8String(r),M(),q(),R()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),y=i.writeLengthUint8(0);i.writeUint8(
0,0),y(),f(),i.writeUint16(10,0);let g=i.writeLengthUint16(0),E=i.writeLengthUint16(
0);i.writeUint16(23,0),E(),g(),i.writeUint16(13,0);let U=i.writeLengthUint16(0),
C=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),C(),U(),i.writeUint16(
43,0);let v=i.writeLengthUint16(0),A=i.writeLengthUint8(0);i.writeUint16(772,0),
A(),v(),i.writeUint16(51,0);let w=i.writeLengthUint16(0),b=i.writeLengthUint16(0);
i.writeUint16(23,0);let I=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),I(),b(),w(),h(),a(),s(),i}o(Io,"St");function Te(r,e=""){return[...r].map(t=>t.
toString(16).padStart(2,"0")).join(e)}o(Te,"K");function Po(r,e){let t,n,[i]=r.expectLength(
r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(
771,0);let a=r.readBytes(32);if(ht(a,[207,33,173,116,229,154,97,17,190,29,140,2,
30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error(
"Unexpected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Te([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
o(Po,"Ut");var Qh=new RegExp(`  .+|^(${xr})+`,"gm"),lt=16384,Bo=lt+1+255;async function Ar(r,e,t=lt){
let n=await r(5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record \
header truncated");let i=new Ae(n),s=i.readUint8();if(s<20||s>24)throw new Error(
`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(
`Unexpected TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.
toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (mid\
dlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(`Record too\
 long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("\
TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
o(Ar,"ht");async function vr(r,e,t){let n=await Ar(r,23,Bo);if(n===void 0)return;
let i=new Ae(n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),
i.skip(16,0),s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===
0;)u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (\
all zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&
l[1]===0)){if(c===22&&l[0]===4)return vr(r,e,t);if(t!==void 0&&c!==t)throw new Error(
`Unexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.
toString(16).padStart(2,"0")})`);return l}}o(vr,"dt");async function Ro(r,e,t){let n=oe(
r,[t]),i=5,s=n.length+16,a=new Ae(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.
writeUint16(s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.
process(n,16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(
l.length-16)),u(),a.array()}o(Ro,"ee");async function fi(r,e,t){let n=Math.ceil(
r.length/lt),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*lt,(s+1)*lt),u=await Ro(
a,e,t);i.push(u)}return i}o(fi,"At");var F=x.subtle,wi=new TextEncoder;async function Cr(r,e,t){
let n=await F.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await F.sign("HMAC",n,e));return i}o(Cr,"lt");async function No(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await F.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=oe(c,e,[l+1]),f=await F.sign("HMAC",u,h),y=new Uint8Array(f);a.set(y,i*l),
c=y}return a.subarray(0,t)}o(No,"ne");var di=wi.encode("tls13 ");async function ue(r,e,t,n,i){
let s=wi.encode(e),a=oe([(n&65280)>>8,n&255],[di.length+s.length],di,s,[t.length],
t);return No(r,a,n,i)}o(ue,"S");async function Mo(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await F.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await F.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await F.digest("S\
HA-256",t),f=new Uint8Array(h),y=await Cr(new Uint8Array(1),a,n),g=await F.digest(
`SHA-${n}`,new Uint8Array(0)),E=new Uint8Array(g),U=await ue(y,"derived",E,s,n),
C=await Cr(U,l,n),v=await ue(C,"c hs traffic",f,s,n),A=await ue(C,"s hs traffic",
f,s,n),w=await ue(v,"key",new Uint8Array(0),i,n),b=await ue(A,"key",new Uint8Array(
0),i,n),I=await ue(v,"iv",new Uint8Array(0),12,n),R=await ue(A,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:b,serverHandshakeIV:R,clientHandshakeKey:w,clientHandshakeIV:I,
handshakeSecret:C,clientSecret:v,serverSecret:A}}o(Mo,"Kt");async function qo(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await F.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ue(r,"derived",u,i,t),l=await Cr(c,s,t),h=await ue(l,"c ap traffic",e,
i,t),f=await ue(l,"s ap traffic",e,i,t),y=await ue(h,"key",new Uint8Array(0),n,t),
g=await ue(f,"key",new Uint8Array(0),n,t),E=await ue(h,"iv",new Uint8Array(0),12,
t),U=await ue(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:g,serverApplicationIV:U,
clientApplicationKey:y,clientApplicationIV:E}}o(qo,"Tt");var qt=class{static{o(this,
"Z")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t}recordsProcessed=0n;priorPromise=Promise.
resolve(new Uint8Array);async process(r,e,t){let n=this.processUnsequenced(r,e,t);
return this.priorPromise=this.priorPromise.then(()=>n)}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){let f=n>>(h<<3n);if(f===0n)break;
i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"AES-GCM",iv:i,tagLength:u,additionalData:t},
l=await F[this.mode](c,this.key,r);return new Uint8Array(l)}};function Dt(r){return r>
64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?64:void 0}
o(Dt,"yt");function Do(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,u=64,c=new Uint8Array(
e*.75);for(;t<e;)i=Dt(r.charCodeAt(t++)),s=Dt(r.charCodeAt(t++)),a=Dt(r.charCodeAt(
t++)),u=Dt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&15)<<4|a>>2,c[n++]=(a&3)<<
6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(0,n-l)}o(Do,"Dt");var Ft=class extends Ae{static{
o(this,"M")}readASN1Length(r){let e=this.readUint8();if(e<128)return e;let t=e&127,
n=0;if(t===1)return this.readUint8(n);if(t===2)return this.readUint16(n);if(t===
3)return this.readUint24(n);if(t===4)return this.readUint32(n);throw new Error(`\
ASN.1 length fields are only supported up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){
let e=this.readASN1Length(r);return this.expectLength(e)}readASN1OID(){let[r,e]=this.
expectASN1Length(0),t=this.readUint8(),n=`${Math.floor(t/40)}.${t%40}`;for(;e()>
0;){let i=0;for(;;){let s=this.readUint8();if(i<<=7,i+=s&127,s<128)break}n+=`.${i}`}
return r(),n}readASN1Boolean(){let[r,e]=this.expectASN1Length(0),t=e();if(t!==1)
throw new Error(`Boolean has weird length: ${t}`);let n=this.readUint8(),i;if(n===
255)i=!0;else if(n===0)i=!1;else throw new Error(`Boolean has weird value: 0x${Te(
[n])}`);return r(),i}readASN1UTCTime(){let[r,e]=this.expectASN1Length(0),t=this.
readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);if(!t)throw new Error(
"Unrecognised ASN.1 UTC time format");let[,n,i,s,a,u,c]=t,l=parseInt(n,10),h=l+(l>=
50?1900:2e3),f=new Date(`${h}-${i}-${s}T${a}:${u}:${c}Z`);return r(),f}readASN1BitString(){
let[r,e]=this.expectASN1Length(0),t=this.readUint8(0),n=e(),i=this.readBytes(n);
if(t>7)throw new Error(`Invalid right pad value: ${t}`);if(t>0){let s=8-t;for(let a=n-
1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>t}return r(),i}};function pi(r,e=(n,i)=>i,t){
return JSON.stringify(r,(n,i)=>e(n,typeof i!="object"||i===null||Array.isArray(i)?
i:Object.fromEntries(Object.entries(i).sort(([s],[a])=>s<a?-1:s>a?1:0))),t)}o(pi,
"mt");var Sr=1,Ot=2,ae=48,Fo=49,Ge=6,Oo=19,ko=12,yi=23,Er=5,De=4,br=3,Qo=163,We=128,
$o={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2\
.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.8\
40.113549.1.9.1":"E-mail"};function jo(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o(jo,"qt");function mi(r,e){let t={};
r.expectUint8(ae,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(Fo,
0);let[s]=r.expectASN1Length(0);r.expectUint8(ae,0);let[a]=r.expectASN1Length(0);
r.expectUint8(Ge,0);let u=r.readASN1OID(),c=$o[u]??u,l=r.readUint8();if(l!==Oo&&
l!==ko)throw new Error(`Unexpected item type in certificate ${e}: 0x${Te([l])}`);
let[h,f]=r.expectASN1Length(0),y=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)
throw new Error(`Duplicate OID ${c} in certificate ${e}`);t[c]=y}return n(),t}o(
mi,"Ct");function Ho(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.
readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.
readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o(Ho,"Bt");function Ko(r){
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
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(Ko,"Ft");function gi(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=gi(t,e)}),e}
o(gi,"Ot");function Wo(r){return gi(r).join(" / ")}o(Wo,"Pt");var Go=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],Lr=class _r{static{o(this,"\
r")}serialNumber;algorithm;issuer;validityPeriod;subject;publicKey;signature;keyUsage;subjectAltNames;extKeyUsage;authorityKeyIdentifier;subjectKeyIdentifier;basicConstraints;signedData;static distinguishedNamesAreEqual(e,t){
return pi(e)===pi(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}constructor(e){let t=e instanceof Ft?e:new Ft(e);t.expectUint8(
ae,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(ae,0);let[s]=t.expectASN1Length(
0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(Ot,0);let[a,u]=t.expectASN1Length(
0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(ae,0);let[c,l]=t.expectASN1Length(
0);t.expectUint8(Ge,0),this.algorithm=t.readASN1OID(),l()>0&&(t.expectUint8(Er,0),
t.expectUint8(0,0)),c(),this.issuer=mi(t,"issuer"),t.expectUint8(ae,0);let[h]=t.
expectASN1Length(0);t.expectUint8(yi,0);let f=t.readASN1UTCTime();t.expectUint8(
yi,0);let y=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:y},h(),
this.subject=mi(t,"subject");let g=t.offset;t.expectUint8(ae,0);let[E]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[U,C]=t.expectASN1Length(0),v=[];for(;C()>0;){let ne=t.
readUint8();if(ne===Ge){let N=t.readASN1OID();v.push(N)}else ne===Er&&t.expectUint8(
0,0)}U(),t.expectUint8(br,0);let A=t.readASN1BitString();this.publicKey={identifiers:v,
data:A,all:t.data.subarray(g,t.offset)},E(),t.expectUint8(Qo,0);let[w]=t.expectASN1Length();
t.expectUint8(ae,0);let[b,I]=t.expectASN1Length(0);for(;I()>0;){t.expectUint8(ae,
0);let[ne,N]=t.expectASN1Length();t.expectUint8(Ge,0);let Q=t.readASN1OID();if(Q===
"2.5.29.17"){t.expectUint8(De,0);let[$]=t.expectASN1Length(0);t.expectUint8(ae,0);
let j=Ho(t,We);this.subjectAltNames=j.filter(H=>H.type===(2|We)).map(H=>H.name),
$()}else if(Q==="2.5.29.15"){t.expectUint8(Sr,0);let $=t.readASN1Boolean();t.expectUint8(
De,0);let[j]=t.expectASN1Length(0);t.expectUint8(br,0);let H=t.readASN1BitString(),
W=jo(H),O=new Set(Go.filter((Y,X)=>W&1<<X));j(),this.keyUsage={critical:$,usages:O}}else if(Q===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(De,0);let[$]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[j,H]=t.expectASN1Length(0);for(;H()>0;){t.expectUint8(Ge,
0);let W=t.readASN1OID();W==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
W==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}j(),$()}else if(Q==="2.\
5.29.35"){t.expectUint8(De,0);let[$]=t.expectASN1Length(0);t.expectUint8(ae,0);let[
j,H]=t.expectASN1Length(0);for(;H()>0;){let W=t.readUint8();if(W===(We|0)){let[O,
Y]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(Y()),O()}else if(W===
(We|1)){let[O,Y]=t.expectASN1Length(0);t.skip(Y(),0),O()}else if(W===(We|2)){let[
O,Y]=t.expectASN1Length(0);t.skip(Y(),0),O()}else if(W===(We|33)){let[O,Y]=t.expectASN1Length(
0);t.skip(Y(),0),O()}else throw new Error(`Unexpected data type ${W} in authorit\
yKeyIdentifier certificate extension`)}j(),$()}else if(Q==="2.5.29.14"){t.expectUint8(
De,0);let[$]=t.expectASN1Length(0);t.expectUint8(De,0);let[j,H]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(H()),j(),$()}else if(Q==="2.5.29.19"){let $,
j=t.readUint8();if(j===Sr&&($=t.readASN1Boolean(),j=t.readUint8()),j!==De)throw new Error(
"Unexpected type in certificate basic constraints");let[H]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[W,O]=t.expectASN1Length(),Y;O()>0&&(t.expectUint8(Sr,0),
Y=t.readASN1Boolean());let X;if(O()>0){t.expectUint8(Ot,0);let D=t.readASN1Length(
0);if(X=D===1?t.readUint8():D===2?t.readUint16():D===3?t.readUint24():void 0,X===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}W(),H(),this.basicConstraints={critical:$,ca:Y,pathLength:X}}else t.
skip(N(),0);ne()}b(),w(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
ae,0);let[R,q]=t.expectASN1Length(0);t.expectUint8(Ge,0);let M=t.readASN1OID();if(q()>
0&&(t.expectUint8(Er,0),t.expectUint8(0,0)),R(),M!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${M})`);t.expectUint8(br,0),this.signature=t.readASN1BitString(),n()}static fromPEM(e){
let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END\
 ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){let a=s[1].replace(/[\r\n]/g,""),
u=Do(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;
return(this.subjectAltNames??[]).find(n=>{let i=n,s=e;if(t.test(e)&&t.test(i)&&i.
startsWith("*.")&&(i=i.slice(1),s=s.slice(s.indexOf("."))),i===s)return!0})}isValidAtMoment(e=new Date){
return e>=this.validityPeriod.notBefore&&e<=this.validityPeriod.notAfter}description(){
return"subject: "+_r.readableDN(this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Te(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+_r.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
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
signature algorithm: `+Wo(Ko(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},Si=class extends Lr{static{o(this,"st")}};async function Ei(r,e,t,n,i){
r.expectUint8(ae,0);let[s]=r.expectASN1Length(0);r.expectUint8(Ot,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Ot,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let y=o((C,v)=>C.length>v?C.subarray(C.length-v):C.
length<v?oe(new Uint8Array(v-C.length),C):C,"m"),g=n==="P-256"?32:48,E=oe(y(c,g),
y(f,g)),U=await F.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await F.verify({name:"ECDSA",hash:i},U,E,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}o(Ei,"pt");async function Vo(r,e,t,n=!0,i=!0){
for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=t.find(
E=>Lr.distinguishedNamesAreEqual(E.subject,l.issuer)):f=t.find(E=>E.subjectKeyIdentifier!==
void 0&&ht(E.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let y=f instanceof Si;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:g}=f.basicConstraints;if(g!==void 0&&g<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let E=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",U=f.publicKey.identifiers,C=U.includes("1.2.840.10045.3.1.7")?"P-256":U.includes(
"1.3.132.0.34")?"P-384":void 0;if(C===void 0)throw new Error("Unsupported signin\
g key curve");let v=new Ft(l.signature);await Ei(v,f.publicKey.all,l.signedData,
C,E)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let E=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",U=await F.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:E},!1,["verify"]);
if(await F.verify({name:"RSASSA-PKCS1-v1_5"},U,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(y){a=!0;break}}return a}o(Vo,"jt");var zo=new TextEncoder;
async function Jo(r,e,t,n,i,s=!0,a=!0){let u=new Ft(await e());u.expectUint8(8,0);
let[c]=u.expectLengthUint24(),[l,h]=u.expectLengthUint16(0);for(;h()>0;){let D=u.
readUint16(0);if(D===0)u.expectUint16(0,0);else if(D===10){let[G,Z]=u.expectLengthUint16(
"groups data");u.skip(Z(),0),G()}else throw new Error(`Unsupported server encryp\
ted extension type 0x${Te([D]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.extend(
await e());let f=!1,y=u.readUint8();if(y===13){f=!0;let[D]=u.expectLengthUint24(
"certificate request data");u.expectUint8(0,0);let[G,Z]=u.expectLengthUint16("ce\
rtificate request extensions");u.skip(Z(),0),G(),D(),u.remaining()===0&&u.extend(
await e()),y=u.readUint8()}if(y!==11)throw new Error(`Unexpected handshake messa\
ge type 0x${Te([y])}`);let[g]=u.expectLengthUint24(0);u.expectUint8(0,0);let[E,U]=u.
expectLengthUint24(0),C=[];for(;U()>0;){let[D]=u.expectLengthUint24(0),G=new Lr(
u);C.push(G),D();let[Z,K]=u.expectLengthUint16(),se=u.subarray(K());Z()}if(E(),g(),
C.length===0)throw new Error("No certificates supplied");let v=C[0],A=u.data.subarray(
0,u.offset),w=oe(n,A),b=await F.digest("SHA-256",w),I=new Uint8Array(b),R=oe(zo.
encode(" ".repeat(64)+"TLS 1.3, server CertificateVerify"),[0],I);u.remaining()===
0&&u.extend(await e()),u.expectUint8(15,0);let[q]=u.expectLengthUint24(0),M=u.readUint16();
if(M===1027){let[D]=u.expectLengthUint16();await Ei(u,v.publicKey.all,R,"P-256",
"SHA-256"),D()}else if(M===2052){let[D,G]=u.expectLengthUint16(),Z=u.subarray(G());
D();let K=await F.importKey("spki",v.publicKey.all,{name:"RSA-PSS",hash:"SHA-256"},
!1,["verify"]);if(await F.verify({name:"RSA-PSS",saltLength:32},K,Z,R)!==!0)throw new Error(
"RSA-PSS-RSAE-SHA256 certificate verify failed")}else throw new Error(`Unsupport\
ed certificate verify signature type 0x${Te([M]).padStart(4,"0")}`);q();let ne=u.
data.subarray(0,u.offset),N=oe(n,ne),Q=await ue(t,"finished",new Uint8Array(0),32,
256),$=await F.digest("SHA-256",N),j=await F.importKey("raw",Q,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]),H=await F.sign("HMAC",j,$),W=new Uint8Array(H);u.remaining()===
0&&u.extend(await e()),u.expectUint8(20,0);let[O,Y]=u.expectLengthUint24(0),X=u.
readBytes(Y());if(O(),u.remaining()!==0)throw new Error("Unexpected extra bytes \
in server handshake");if(ht(X,W)!==!0)throw new Error("Invalid server verify has\
h");if(!await Vo(r,C,i,s,a))throw new Error("Validated certificate chain did not\
 end in a trusted root");return[u.data,f]}o(Jo,"Vt");async function Yo(r,e,t,n,{
useSNI:i,requireServerTlsExtKeyUsage:s,requireDigitalSigKeyUsage:a,writePreData:u,
expectPreData:c,commentPreData:l}={}){i??=!0,s??=!0,a??=!0;let h=await F.generateKey(
{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),f=await F.exportKey(
"raw",h.publicKey),y=new Uint8Array(32);x.getRandomValues(y);let g=Io(r,f,y,i).array(),
E=u?oe(u,g):g;if(n(E),c){let ie=await t(c.length);if(!ie||!ht(ie,c))throw new Error(
"Pre data did not match expectation")}let U=await Ar(t,22);if(U===void 0)throw new Error(
"Connection closed while awaiting server hello");let C=new Ae(U.content),v=Po(C,
y),A=await Ar(t,20);if(A===void 0)throw new Error("Connection closed awaiting se\
rver cipher change");let w=new Ae(A.content),[b]=w.expectLength(1);w.expectUint8(
1,0),b();let I=g.subarray(5),R=U.content,q=oe(I,R),M=await Mo(v,h.privateKey,q,256,
16),ne=await F.importKey("raw",M.serverHandshakeKey,{name:"AES-GCM"},!1,["decryp\
t"]),N=new qt("decrypt",ne,M.serverHandshakeIV),Q=await F.importKey("raw",M.clientHandshakeKey,
{name:"AES-GCM"},!1,["encrypt"]),$=new qt("encrypt",Q,M.clientHandshakeIV),j=o(async()=>{
let ie=await vr(t,N,22);if(ie===void 0)throw new Error("Premature end of encrypt\
ed server handshake");return ie},"C"),[H,W]=await Jo(r,j,M.serverSecret,q,e,s,a),
O=new Ae(6);O.writeUint8(20,0),O.writeUint16(771,0);let Y=O.writeLengthUint16();
O.writeUint8(1,0),Y();let X=O.array(),D=new Uint8Array(0);if(W){let ie=new Ae(8);
ie.writeUint8(11,0);let ot=ie.writeLengthUint24("client certificate data");ie.writeUint8(
0,0),ie.writeUint24(0,0),ot(),D=ie.array()}let G=oe(q,H,D),Z=await F.digest("SHA\
-256",G),K=new Uint8Array(Z),se=await ue(M.clientSecret,"finished",new Uint8Array(
0),32,256),Ee=await F.importKey("raw",se,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),at=await F.sign("HMAC",Ee,K),ur=new Uint8Array(at),ke=new Ae(36);ke.writeUint8(
20,0);let Fa=ke.writeLengthUint24(0);ke.writeBytes(ur),Fa();let Oa=ke.array(),kn=await fi(
oe(D,Oa),$,22),Qn=K;if(D.length>0){let ie=G.subarray(0,G.length-D.length),ot=await F.
digest("SHA-256",ie);Qn=new Uint8Array(ot)}let Pt=await qo(M.handshakeSecret,Qn,
256,16),ka=await F.importKey("raw",Pt.clientApplicationKey,{name:"AES-GCM"},!0,[
"encrypt"]),Qa=new qt("encrypt",ka,Pt.clientApplicationIV),$a=await F.importKey(
"raw",Pt.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),ja=new qt("decryp\
t",$a,Pt.serverApplicationIV),Bt=!1;return[()=>{if(!Bt){let ie=oe(X,...kn);n(ie),
Bt=!0}return vr(t,ja)},async ie=>{let ot=Bt;Bt=!0;let $n=await fi(ie,Qa,23),Ha=ot?
oe(...$n):oe(X,...kn,...$n);n(Ha)}]}o(Yo,"he");var bi=class{static{o(this,"xt")}queue;outstandingRequest;constructor(){
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
{resolve:e,bytes:r},this.dequeue()})}},Zo=class extends bi{static{o(this,"vt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}},Xo=class extends bi{static{o(this,
"Lt")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(new Uint8Array(
e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,{readyState:e}=r;
return e==="opening"||e==="open"}};var xi=`-----BEGIN CERTIFICATE-----
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
`;p();var tu=Object.getOwnPropertyNames,ru=Object.getOwnPropertySymbols,nu=Object.prototype.
hasOwnProperty;function Ai(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(Ai,"combineComparators");function kt(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(kt,"createIsCircular");
function vi(r){return tu(r).concat(ru(r))}o(vi,"getStrictProperties");var Pi=Object.
hasOwn||function(r,e){return nu.call(r,e)};function Ve(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(Ve,"sameValueZeroEqual");var Bi="_owner",Ci=Object.getOwnPropertyDescriptor,
_i=Object.keys;function iu(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(iu,"areArraysEqual");function su(r,e){
return Ve(r.getTime(),e.getTime())}o(su,"areDatesEqual");function Li(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,y=f[0],g=f[1],
E=u.value,U=E[0],C=E[1];!l&&!n[h]&&(l=t.equals(y,U,s,h,r,e,t)&&t.equals(g,C,y,U,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(Li,"areMapsEqual");function au(r,e,t){
var n=_i(r),i=n.length;if(_i(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===Bi&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Pi(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(au,"areObjectsEqual");function ft(r,e,t){var n=vi(
r),i=n.length;if(vi(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===Bi&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Pi(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=Ci(r,s),u=Ci(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(ft,"a\
reObjectsEqualStrict");function ou(r,e){return Ve(r.valueOf(),e.valueOf())}o(ou,
"arePrimitiveWrappersEqual");function uu(r,e){return r.source===e.source&&r.flags===
e.flags}o(uu,"areRegExpsEqual");function Ti(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(Ti,"areSetsEqual");function cu(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(cu,"are\
TypedArraysEqual");var lu="[object Arguments]",hu="[object Boolean]",fu="[object\
 Date]",du="[object Map]",pu="[object Number]",yu="[object Object]",mu="[object \
RegExp]",wu="[object Set]",gu="[object String]",Su=Array.isArray,Ui=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Ii=Object.assign,Eu=Object.
prototype.toString.call.bind(Object.prototype.toString);function bu(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,y){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var g=h.constructor;if(g!==f.constructor)return!1;if(g===Object)return i(
h,f,y);if(Su(h))return e(h,f,y);if(Ui!=null&&Ui(h))return c(h,f,y);if(g===Date)return t(
h,f,y);if(g===RegExp)return a(h,f,y);if(g===Map)return n(h,f,y);if(g===Set)return u(
h,f,y);var E=Eu(h);return E===fu?t(h,f,y):E===mu?a(h,f,y):E===du?n(h,f,y):E===wu?
u(h,f,y):E===yu?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,y):E===
lu?i(h,f,y):E===hu||E===pu||E===gu?s(h,f,y):!1},"comparator")}o(bu,"createEquali\
tyComparator");function xu(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?ft:iu,areDatesEqual:su,areMapsEqual:n?Ai(Li,ft):Li,areObjectsEqual:n?
ft:au,arePrimitiveWrappersEqual:ou,areRegExpsEqual:uu,areSetsEqual:n?Ai(Ti,ft):Ti,
areTypedArraysEqual:n?ft:cu};if(t&&(i=Ii({},i,t(i))),e){var s=kt(i.areArraysEqual),
a=kt(i.areMapsEqual),u=kt(i.areObjectsEqual),c=kt(i.areSetsEqual);i=Ii({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(xu,"createEqualityC\
omparatorConfig");function Au(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(Au,"createInternalEqualityComparator");function vu(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,y=f===void 0?e?new WeakMap:void 0:f,g=h.meta;return t(c,l,{cache:y,equals:i,
meta:g,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(vu,"createIsEqual");
var Ur=Ue(),Zh=Ue({strict:!0}),Xh=Ue({circular:!0}),ef=Ue({circular:!0,strict:!0}),
tf=Ue({createInternalComparator:o(function(){return Ve},"createInternalComparato\
r")}),rf=Ue({strict:!0,createInternalComparator:o(function(){return Ve},"createI\
nternalComparator")}),nf=Ue({circular:!0,createInternalComparator:o(function(){return Ve},
"createInternalComparator")}),sf=Ue({circular:!0,createInternalComparator:o(function(){
return Ve},"createInternalComparator"),strict:!0});function Ue(r){r===void 0&&(r=
{});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,i=r.createState,
s=r.strict,a=s===void 0?!1:s,u=xu(r),c=bu(u),l=n?n(c):Au(c);return vu({circular:t,
comparator:c,createState:i,equals:l,strict:a})}o(Ue,"createCustomEqual");p();var or=Qe(ar());Zt();p();nn();Zt();var Na=Qe(vt()),Ma=Qe(Jt());var Fe=class extends Error{static{o(this,"NeonDbError")}name="NeonDbError";severity;code;detail;hint;position;internalPosition;internalQuery;where;schema;table;column;dataType;constraint;file;line;routine;sourceError},
Ba="transaction() expects an array of queries, or a function returning an array \
of queries",Ch=["severity","code","detail","hint","position","internalPosition",
"internalQuery","where","schema","table","column","dataType","constraint","file",
"line","routine"];function ve(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,
readOnly:s,deferrable:a,queryCallback:u,resultCallback:c,tracer:l}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment \
variable has not been set?");let h;try{h=rn(r)}catch{throw new Error("Database c\
onnection string provided to `neon()` is not a valid URL. Connection string: "+String(
r))}let{protocol:f,username:y,password:g,hostname:E,port:U,pathname:C}=h;if(f!==
"postgres:"&&f!=="postgresql:"||!y||!g||!E||!C)throw new Error("Database connect\
ion string format for `neon()` should be: postgresql://user:password@host.tld/db\
name?option=value");function v(w,...b){let I,R;if(typeof w=="string")I=w,R=b[1],
b=b[0]??[];else{I="";for(let M=0;M<w.length;M++)I+=w[M],M<b.length&&(I+="$"+(M+1))}
b=b.map(M=>(0,Na.prepareValue)(M));let q={query:I,params:b};return u&&u(q),_h(A,
q,R)}o(v,"resolve"),v.transaction=async(w,b)=>{if(typeof w=="function"&&(w=w(v)),
!Array.isArray(w))throw new Error(Ba);w.forEach(q=>{if(q[Symbol.toStringTag]!=="\
NeonQueryPromise")throw new Error(Ba)});let I=w.map(q=>q.parameterizedQuery),R=w.
map(q=>q.opts??{});return A(I,R,b)};async function A(w,b,I){let{fetchEndpoint:R,
fetchFunction:q}=Se,M=typeof R=="function"?R(E,U):R,ne=Array.isArray(w)?{queries:w}:
w,N=n??{},Q=e??!1,$=t??!1,j=i,H=s,W=a;I!==void 0&&(I.fetchOptions!==void 0&&(N={
...N,...I.fetchOptions}),I.arrayMode!==void 0&&(Q=I.arrayMode),I.fullResults!==void 0&&
($=I.fullResults),I.isolationLevel!==void 0&&(j=I.isolationLevel),I.readOnly!==void 0&&
(H=I.readOnly),I.deferrable!==void 0&&(W=I.deferrable)),b!==void 0&&!Array.isArray(
b)&&b.fetchOptions!==void 0&&(N={...N,...b.fetchOptions});let O={"Neon-Connectio\
n-String":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true"},Y=Array.isArray(
w);Y&&(j!==void 0&&(O["Neon-Batch-Isolation-Level"]=j),H!==void 0&&(O["Neon-Batc\
h-Read-Only"]=String(H)),W!==void 0&&(O["Neon-Batch-Deferrable"]=String(W)));let X=o(
G=>G(),"wrapper"),D=I?.tracer||l;if(D){let G=Y?{queries:w.map(Z=>Z.query)}:{query:w.
query};X=o(Z=>D.startActiveSpan(`${Y?"batch ":""}query`,{attributes:G},async K=>{
try{let se=await Z();return K.setStatus({code:1}),se}catch(se){let Ee=se instanceof
Error?se.message:`${se}`;throw K.setStatus({code:2,message:Ee}),se}finally{K.end()}}),
"wrapper")}return X(async()=>{let G;try{G=await(q??fetch)(M,{method:"POST",body:JSON.
stringify(ne),headers:O,...N})}catch(Z){let K=new Fe(`Error connecting to databa\
se: ${Z.message}`);throw K.sourceError=Z,K}if(G.ok){let Z=await G.json();if(Y){let K=Z.
results;if(!Array.isArray(K))throw new Fe("Neon internal error: unexpected resul\
t format");return K.map((se,Ee)=>{let at=b[Ee]??{},ur=at.arrayMode??Q,ke=at.fullResults??
$;return Ra(se,{arrayMode:ur,fullResults:ke,parameterizedQuery:w[Ee],resultCallback:c,
types:at.types})})}else{let K=b??{},se=K.arrayMode??Q,Ee=K.fullResults??$;return Ra(
Z,{arrayMode:se,fullResults:Ee,parameterizedQuery:w,resultCallback:c,types:K.types})}}else{
let{status:Z}=G;if(Z===400){let K=await G.json(),se=new Fe(K.message);for(let Ee of Ch)
se[Ee]=K[Ee]??void 0;throw se}else{let K=await G.text();throw new Fe(`Server err\
or (HTTP status ${Z}): ${K}`)}}return v})}o(A,"execute")}o(ve,"neon");function _h(r,e,t){
return{[Symbol.toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:o(
(n,i)=>r(e,t).then(n,i),"then"),catch:o(n=>r(e,t).catch(n),"catch"),finally:o(n=>r(
e,t).finally(n),"finally")}}o(_h,"createNeonQueryPromise");function Ra(r,{arrayMode:e,
fullResults:t,parameterizedQuery:n,resultCallback:i,types:s}){let a=new Ma.default(
s),u=r.fields.map(h=>h.name),c=r.fields.map(h=>a.getTypeParser(h.dataTypeID)),l=e===
!0?r.rows.map(h=>h.map((f,y)=>f===null?null:c[y](f))):r.rows.map(h=>Object.fromEntries(
h.map((f,y)=>[u[y],f===null?null:c[y](f)])));return i&&i(n,r,l,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=l,r._parsers=c,r._types=a,r):l}o(Ra,"\
processQueryResult");var qa=Qe(Yt()),it=Qe(ar());var Re=class extends or.Client{constructor(t){super(t);this.config=t}static{o(this,
"NeonClient")}get neonConfig(){return this.connection.stream}connect(t){let{neonConfig:n}=this;
n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&
console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the con\
nection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureW\
ebSocket = true). Double encryption will increase latency and CPU usage. It may \
be appropriate to disable SSL in the Postgres connection parameters or set force\
DisablePgSSL = true.");let i=this.config?.host!==void 0||this.config?.connectionString!==
void 0||S.env.PGHOST!==void 0,s=S.env.USER??S.env.USERNAME;if(!i&&this.host==="l\
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
fromEntries(s.split(",").map(X=>{if(!/^.=/.test(X))throw new Error("SASL: Invali\
d attribute pair entry");let D=X[0],G=X.substring(2);return[D,G]})),u=a.r,c=a.s,
l=a.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-ME\
SSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),f=m.from(c,"base64"),y=new TextEncoder,
g=y.encode(i),E=await x.subtle.importKey("raw",g,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),U=new Uint8Array(await x.subtle.sign("HMAC",E,m.concat([f,m.from(
[0,0,0,1])]))),C=U;for(var v=0;v<h-1;v++)U=new Uint8Array(await x.subtle.sign("H\
MAC",E,U)),C=m.from(C.map((X,D)=>C[D]^U[D]));let A=C,w=await x.subtle.importKey(
"raw",A,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),b=new Uint8Array(await x.
subtle.sign("HMAC",w,y.encode("Client Key"))),I=await x.subtle.digest("SHA-256",
b),R="n=*,r="+n.clientNonce,q="r="+u+",s="+c+",i="+h,M="c=biws,r="+u,ne=R+","+q+
","+M,N=await x.subtle.importKey("raw",I,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var Q=new Uint8Array(await x.subtle.sign("HMAC",N,y.encode(ne))),$=m.from(
b.map((X,D)=>b[D]^Q[D])),j=$.toString("base64");let H=await x.subtle.importKey("\
raw",A,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),W=await x.subtle.sign("H\
MAC",H,y.encode("Server Key")),O=await x.subtle.importKey("raw",W,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var Y=m.from(await x.subtle.sign("HMAC",O,y.encode(
ne)));n.message="SASLResponse",n.serverSignature=Y.toString("base64"),n.response=
M+",p="+j,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function Lh(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
Lh,"promisify");var Oe=class extends or.Pool{static{o(this,"NeonPool")}Client=Re;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!Se.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=Lh(this.Promise,
n);n=i.callback;try{let s=new qa.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];ve(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h,{types:e.types??this.options?.types}).then(y=>n(void 0,y)).catch(y=>n(
y))}catch(s){n(s)}return i.result}};p();async function Th(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(Th,"t\
imed");async function st(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await Th(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(st,"timedRepeat\
s");async function Lt(r,e){let{sql:t,test:n}=e,{rows:i}=await(typeof r=="functio\
n"?r(t):r.query(t));if(!n(i))throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(Lt,"runQuery");async function Tt(r,e,t,n){
await e.connect();let i=await st(r,()=>Lt(e,n));return t.waitUntil(e.end()),i}o(
Tt,"clientRunQuery");async function Ut(r,e,t,n){let i=new Oe({connectionString:e}),
s=await st(r,()=>Lt(i,n));return t.waitUntil(i.end()),s}o(Ut,"poolRunQuery");async function Da(r,e,t,n){
let i=ve(e,{fullResults:!0});return await st(r,()=>Lt(i,n))}o(Da,"httpRunQuery");p();var It=[{sql:"SELECT * FROM employees LIMIT 10",test:o(r=>r.length>1&&typeof r[0].
first_name=="string","test")},{sql:"SELECT now()",test:o(r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString()),"test")}];async function o0(r,e,t){let n=[];for(let i of It){let[,[[,s]]]=await Ut(1,e.NEON_DB_URL,
t,i);n.push(s)}for(let i of It){let[,[[,s]]]=await Da(1,e.NEON_DB_URL,t,i);n.push(
s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-Type":"applic\
ation/json"}})}o(o0,"cf");var Ne={waitUntil(r){},passThroughOnException(){}};async function Uh(r,e=(...t)=>{}){
let t=ve(r.NEON_DB_URL),[[n],[i]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,
t`SELECT ${"hello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(n),JSON.
stringify(i),`
`),n.batchInt!==1||i.batchStr!=="hello")throw new Error("Batch query problem");let[
[s],[a]]=await t.transaction(b=>[b`SELECT ${1}::int AS "batchInt"`,b`SELECT ${"h\
ello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(s),JSON.stringify(a),
`
`),s.batchInt!==1||a.batchStr!=="hello")throw new Error("Batch query problem");let u=await t.
transaction(b=>[]);e("empty txn result:",JSON.stringify(u),`
`);let[[[c]],[[l]]]=await t.transaction(b=>[b`SELECT ${1}::int AS "batchInt"`,b`SELECT ${"\
hello"} AS "batchStr"`],{arrayMode:!0,isolationLevel:"Serializable",readOnly:!0});
if(e("array mode (via transaction options) batch results:",JSON.stringify(c),JSON.
stringify(l),`
`),c!==1||l!=="hello")throw new Error("Batch query problem");let h=ve(r.NEON_DB_URL,
{arrayMode:!0,isolationLevel:"RepeatableRead"}),[[[f]],[[y]]]=await h.transaction(
b=>[b`SELECT ${1}::int AS "batchInt"`,b`SELECT ${"hello"} AS "batchStr"`]);if(e(
"array mode (via neon options) batch results:",JSON.stringify(f),JSON.stringify(
y),`
`),f!==1||y!=="hello")throw new Error("Batch query problem");let g=ve(r.NEON_DB_URL,
{arrayMode:!0}),[[E],[U]]=await g.transaction(b=>[b`SELECT ${1}::int AS "batchInt"`,
b`SELECT ${"hello"} AS "batchStr"`],{arrayMode:!1});if(e("ordinary (via overridd\
en options) batch results:",JSON.stringify(E),JSON.stringify(U),`
`),E.batchInt!==1||U.batchStr!=="hello")throw new Error("Batch query problem");let[
[C],[v]]=await t.transaction(b=>[b`SELECT ${1}::int AS "batchInt"`,b('SELECT $1 \
AS "batchStr"',["hello"],{arrayMode:!0})]);if(e("query options on individual bat\
ch queries:",JSON.stringify(C),JSON.stringify(v),`
`),C.batchInt!==1||v[0]!=="hello")throw new Error("Batch query problem");let A;try{
await t.transaction(b=>[b`SELECT ${1}::int AS "batchInt"`,`SELECT 'hello' AS "ba\
tchStr"`])}catch(b){A=b}if(A===void 0)throw new Error("Error should have been ra\
ised for string passed to `transaction()`");e("successfully caught invalid query\
 passed to `transaction()`\n");let w;try{let b=r.NEON_DB_URL.replace(/@/,"x@");await ve(
b).transaction(I=>[I`SELECT 'never' AS this_should_be_seen_precisely`])}catch(b){
w=b}if(w===void 0)throw new Error("Error should have been raised for bad passwor\
d");e("successfully caught invalid password passed to `neon()`\n")}o(Uh,"batchQu\
eryTest");async function u0(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up ...

`),await Ut(1,r.NEON_DB_URL,Ne,It[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Oe({connectionString:r.
NEON_DB_URL}),c=ve(r.NEON_DB_URL,{resultCallback:o(async(g,E,U,C)=>{let v=await u.
query({text:g.query,values:g.params,...C.arrayMode?{rowMode:"array"}:{}}),A=E.command===
v.command,w=E.rowCount===v.rowCount,b=Ur(E.fields.map(q=>q.dataTypeID),v.fields.
map(q=>q.dataTypeID)),I=Ur(U,v.rows);t(A&&w&&I&&b?"\u2713":"X",JSON.stringify(g),
`
  -> us:`,JSON.stringify(U),`
  -> pg:`,JSON.stringify(v.rows),`
`)},"resultCallback")}),l=new Date;await c`SELECT ${1} AS int_uncast`,await c`SELECT ${1}::int AS int`,
await c`SELECT ${1}::int8 AS int8num`,await c`SELECT ${1}::decimal AS decimalnum`,
await c`SELECT ${"[1,4)"}::int4range AS int4range`,await c`SELECT ${"hello"} AS str`,
await c`SELECT ${["a","b","c"]} AS arrstr_uncast`,await c`SELECT ${[[2],[4]]}::int[][] AS arrnumnested`,
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
[2],[4]]} AS arrnumnested_uncast`,await c`SELECT ${l} AS timenow_uncast`,await c`SELECT ${l}::timestamp AS timestampnow`,
await c("SELECT $1::timestamp AS timestampnow",[l]),await c("SELECT $1 || ' ' ||\
 $2 AS greeting",["hello","world"]),await c("SELECT 123 AS num"),await c("SELECT\
 123 AS num",[],{arrayMode:!0,fullResults:!0});function h(g,E,U=3){return async function(C,...v){
let A="";for(let w=0;w<C.length;w++)A+=C[w],w<v.length&&(A+="$"+(w+1));for(let w=1;;w++){
let b=new AbortController,I=setTimeout(()=>b.abort("fetch timed out"),E);try{let{
signal:R}=b;return await g(A,v,{fetchOptions:{signal:R}})}catch(R){if(!(R.sourceError&&
R.sourceError instanceof DOMException&&R.sourceError.name==="AbortError")||w>=U)
throw R}finally{clearTimeout(I)}}}}o(h,"sqlWithRetries"),await h(c,5e3)`SELECT ${"\
did this time out?"} AS str`,await Uh(r,t),Se.fetchFunction=(g,E)=>(console.log(
"custom fetch:",g,E),fetch(g,E)),await c`SELECT ${"customFetch"} AS str`;let y="\
SELECT 123::int[] WHERE x";try{await c(y)}catch(g){console.log("Fields of this e\
xpected error should match the following error, except for having no `length` fi\
eld"),console.log(g)}try{await Ut(1,r.NEON_DB_URL,Ne,{sql:y,test:o(()=>!0,"test")})}catch(g){
console.log("Fields of this expected error should match the previous error, exce\
pt for having an additional `length` field"),console.log(g)}await new Promise(g=>setTimeout(
g,1e3)),u.end(),t(`

===== Pool/Client tests =====
`);for(let g of It){t(`
----- ${g.sql} -----

`);async function E(C,v){let A=String.fromCharCode(s+(s>25?23:65));t(`${A}
`);try{await fetch(`http://localhost:443/${A}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,w]=await st(i,()=>v(C),b=>t(`<span class="live">${b.toFixed()}\
ms</span> `));t(`
Sorted:  `),w.map(([b])=>b).sort((b,I)=>b-I).forEach((b,I)=>{t(I===(i-1)/2?`<spa\
n class="median">${b.toFixed()}ms</span> `:`${b.toFixed()}ms `)}),t(`

`),s+=1}o(E,"section");async function U(C,v){t(`----- ${C} -----

`);for(let A of n)t(`${A} quer${A===1?"y":"ies"} \u2013 `),await E(A,v)}o(U,"sec\
tions"),await U("Neon/wss, no pipelining",async C=>{let v=new Re(r.NEON_DB_URL);
v.neonConfig.pipelineConnect=!1,await Tt(C,v,Ne,g)}),await U("Neon/wss, pipeline\
d connect (default)",async C=>{let v=new Re(r.NEON_DB_URL);await Tt(C,v,Ne,g)}),
await U("Neon/wss, pipelined connect, no coalescing",async C=>{let v=new Re(r.NEON_DB_URL);
v.neonConfig.coalesceWrites=!1,await Tt(C,v,Ne,g)}),await U("Neon/wss, pipelined\
 connect using Pool.query",async C=>{await Ut(C,r.NEON_DB_URL,Ne,g)}),await U("N\
eon/wss, pipelined connect using Pool.connect",async C=>{let v=new Oe({connectionString:r.
NEON_DB_URL}),A=await v.connect();await st(C,()=>Lt(A,g)),A.release(),Ne.waitUntil(
v.end())}),e&&(Se.subtls=Tr,Se.rootCerts=xi,await U("pg/subtls, pipelined connec\
t",async C=>{let v=new Re(r.NEON_DB_URL);v.neonConfig.wsProxy=(A,w)=>`subtls-wsp\
roxy.jawj.workers.dev/?address=${A}:${w}`,v.neonConfig.forceDisablePgSSL=v.neonConfig.
useSecureWebSocket=!1,v.neonConfig.pipelineTLS=!1,v.neonConfig.pipelineConnect=!1;
try{await Tt(C,v,Ne,g)}catch(A){console.error(`
*** ${A.message}`)}}))}}o(u0,"latencies");export{Uh as batchQueryTest,o0 as cf,u0 as latencies,Se as neonConfig};
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
