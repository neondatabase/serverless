var Ga=Object.create;var ot=Object.defineProperty;var Va=Object.getOwnPropertyDescriptor;var za=Object.getOwnPropertyNames;var Ja=Object.getPrototypeOf,Ya=Object.prototype.hasOwnProperty;var o=(r,e)=>ot(r,"name",{value:e,configurable:!0});var ye=(r,e)=>()=>(r&&(e=r(r=0)),e);var R=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),me=(r,e)=>{for(var t in e)
ot(r,t,{get:e[t],enumerable:!0})},Hn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of za(e))!Ya.call(r,i)&&i!==t&&ot(r,i,{get:()=>e[i],enumerable:!(n=
Va(e,i))||n.enumerable});return r};var Qe=(r,e,t)=>(t=r!=null?Ga(Ja(r)):{},Hn(e||!r||!r.__esModule?ot(t,"default",{
value:r,enumerable:!0}):t,r)),te=r=>Hn(ot({},"__esModule",{value:!0}),r);var Gn=R(Nt=>{"use strict";y();Nt.byteLength=Xa;Nt.toByteArray=to;Nt.fromByteArray=
io;var Ee=[],we=[],Za=typeof Uint8Array<"u"?Uint8Array:Array,lr="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(qe=0,Kn=lr.length;qe<Kn;++qe)
Ee[qe]=lr[qe],we[lr.charCodeAt(qe)]=qe;var qe,Kn;we[45]=62;we[95]=63;function Wn(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}o(Wn,
"getLens");function Xa(r){var e=Wn(r),t=e[0],n=e[1];return(t+n)*3/4-n}o(Xa,"byte\
Length");function eo(r,e,t){return(e+t)*3/4-t}o(eo,"_byteLength");function to(r){
var e,t=Wn(r),n=t[0],i=t[1],s=new Za(eo(r,n,i)),a=0,u=i>0?n-4:n,c;for(c=0;c<u;c+=
4)e=we[r.charCodeAt(c)]<<18|we[r.charCodeAt(c+1)]<<12|we[r.charCodeAt(c+2)]<<6|we[r.
charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=e&255;return i===2&&(e=
we[r.charCodeAt(c)]<<2|we[r.charCodeAt(c+1)]>>4,s[a++]=e&255),i===1&&(e=we[r.charCodeAt(
c)]<<10|we[r.charCodeAt(c+1)]<<4|we[r.charCodeAt(c+2)]>>2,s[a++]=e>>8&255,s[a++]=
e&255),s}o(to,"toByteArray");function ro(r){return Ee[r>>18&63]+Ee[r>>12&63]+Ee[r>>
6&63]+Ee[r&63]}o(ro,"tripletToBase64");function no(r,e,t){for(var n,i=[],s=e;s<t;s+=
3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(ro(n));return i.join(
"")}o(no,"encodeChunk");function io(r){for(var e,t=r.length,n=t%3,i=[],s=16383,a=0,
u=t-n;a<u;a+=s)i.push(no(r,a,a+s>u?u:a+s));return n===1?(e=r[t-1],i.push(Ee[e>>2]+
Ee[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(Ee[e>>10]+Ee[e>>4&63]+Ee[e<<
2&63]+"=")),i.join("")}o(io,"fromByteArray")});var Vn=R(hr=>{y();hr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,p=t?-1:1,m=r[e+f];for(f+=p,s=m&(1<<-h)-1,m>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=p,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=p,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(m?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(m?
-1:1)*a*Math.pow(2,s-n)};hr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=n?0:s-1,x=n?1:-1,L=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=p/c:e+=
p*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+m]=u&255,m+=x,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+m]=a&255,m+=x,a/=256,l-=8);r[t+m-x]|=L*128}});var hi=R(Ke=>{"use strict";y();var fr=Gn(),je=Vn(),zn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ke.Buffer=
d;Ke.SlowBuffer=lo;Ke.INSPECT_MAX_BYTES=50;var Mt=2147483647;Ke.kMaxLength=Mt;d.
TYPED_ARRAY_SUPPORT=so();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function so(){try{let r=new Uint8Array(1),e={foo:o(function(){
return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(
r,e),r.foo()===42}catch{return!1}}o(so,"typedArraySupport");Object.defineProperty(
d.prototype,"parent",{enumerable:!0,get:o(function(){if(d.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:o(
function(){if(d.isBuffer(this))return this.byteOffset},"get")});function Ce(r){if(r>
Mt)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(
r);return Object.setPrototypeOf(e,d.prototype),e}o(Ce,"createBuffer");function d(r,e,t){
if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" a\
rgument must be of type string. Received type number');return mr(r)}return Xn(r,
e,t)}o(d,"Buffer");d.poolSize=8192;function Xn(r,e,t){if(typeof r=="string")return oo(
r,e);if(ArrayBuffer.isView(r))return uo(r);if(r==null)throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type "+typeof r);if(xe(r,ArrayBuffer)||r&&xe(r.buffer,ArrayBuffer)||
typeof SharedArrayBuffer<"u"&&(xe(r,SharedArrayBuffer)||r&&xe(r.buffer,SharedArrayBuffer)))
return pr(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();
if(n!=null&&n!==r)return d.from(n,e,t);let i=co(r);if(i)return i;if(typeof Symbol<
"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.
from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type "+typeof r)}o(Xn,"from");d.from=function(r,e,t){return Xn(r,e,t)};
Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,
Uint8Array);function ei(r){if(typeof r!="number")throw new TypeError('"size" arg\
ument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is\
 invalid for option "size"')}o(ei,"assertSize");function ao(r,e,t){return ei(r),
r<=0?Ce(r):e!==void 0?typeof t=="string"?Ce(r).fill(e,t):Ce(r).fill(e):Ce(r)}o(ao,
"alloc");d.alloc=function(r,e,t){return ao(r,e,t)};function mr(r){return ei(r),Ce(
r<0?0:wr(r)|0)}o(mr,"allocUnsafe");d.allocUnsafe=function(r){return mr(r)};d.allocUnsafeSlow=
function(r){return mr(r)};function oo(r,e){if((typeof e!="string"||e==="")&&(e="\
utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=ti(r,e)|
0,n=Ce(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}o(oo,"fromString");function dr(r){
let e=r.length<0?0:wr(r.length)|0,t=Ce(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}
o(dr,"fromArrayLike");function uo(r){if(xe(r,Uint8Array)){let e=new Uint8Array(r);
return pr(e.buffer,e.byteOffset,e.byteLength)}return dr(r)}o(uo,"fromArrayView");
function pr(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outs\
ide of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" i\
s outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(pr,"fromArrayBuffer");function co(r){if(d.isBuffer(r)){let e=wr(
r.length)|0,t=Ce(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Sr(r.length)?Ce(0):dr(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return dr(r.data)}o(co,"fromObject");function wr(r){if(r>=
Mt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Mt.toString(16)+" bytes");return r|0}o(wr,"checked");function lo(r){return+r!=r&&
(r=0),d.alloc(+r)}o(lo,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
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
fers');s+=a.length}return i},"concat");function ti(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||xe(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return yr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return li(r).length;default:if(i)return n?-1:yr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(ti,"byteLength");d.byteLength=ti;function ho(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return xo(
this,e,t);case"utf8":case"utf-8":return ni(this,e,t);case"ascii":return bo(this,
e,t);case"latin1":case"binary":return Eo(this,e,t);case"base64":return go(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ao(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
ho,"slowToString");d.prototype._isBuffer=!0;function ke(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(ke,"swap");d.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)ke(this,t,t+1);return this},"swap16");d.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)ke(this,t,t+3),ke(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ke(this,t,t+7),
ke(this,t+1,t+6),ke(this,t+2,t+5),ke(this,t+3,t+4);return this},"swap64");d.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?ni(
this,0,e):ho.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=Ke.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");zn&&(d.prototype[zn]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(xe(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function ri(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Sr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:Jn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Jn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(ri,"bid\
irectionalIndexOf");function Jn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Jn,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return ri(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return ri(this,e,t,n,!1)},"lastIndexOf");function fo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(Sr(u))
return a;r[t+a]=u}return a}o(fo,"hexWrite");function po(r,e,t,n){return Dt(yr(e,
r.length-t),r,t,n)}o(po,"utf8Write");function yo(r,e,t,n){return Dt(To(e),r,t,n)}
o(yo,"asciiWrite");function mo(r,e,t,n){return Dt(li(e),r,t,n)}o(mo,"base64Write");
function wo(r,e,t,n){return Dt(Uo(e,r.length-t),r,t,n)}o(wo,"ucs2Write");d.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return fo(this,e,t,n);case"utf8":case"utf-8":return po(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return yo(this,e,t,n);case"base64":return mo(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wo(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");d.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function go(r,e,t){return e===0&&t===r.
length?fr.fromByteArray(r):fr.fromByteArray(r.slice(e,t))}o(go,"base64Slice");function ni(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return So(n)}o(ni,"utf8Slice");var Yn=4096;function So(r){
let e=r.length;if(e<=Yn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Yn));return t}o(So,"d\
ecodeCodePointsArray");function bo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(bo,"asciiSlice");function Eo(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(Eo,"latin1Slice");function xo(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Lo[r[s]];return i}o(xo,"he\
xSlice");function Ao(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(Ao,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function re(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(re,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);
let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");
d.prototype.readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,
n||re(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*
s;return i},"readUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){
return e=e>>>0,t||re(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=
d.prototype.readUInt16LE=o(function(e,t){return e=e>>>0,t||re(e,2,this.length),this[e]|
this[e+1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=
o(function(e,t){return e=e>>>0,t||re(e,2,this.length),this[e]<<8|this[e+1]},"rea\
dUInt16BE");d.prototype.readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=
e>>>0,t||re(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},
"readUInt32LE");d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){
return e=e>>>0,t||re(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])},"readUInt32BE");d.prototype.readBigUInt64LE=Ue(o(function(e){e=e>>>
0,He(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ut(e,this.length-
8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*
2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigU\
Int64LE"));d.prototype.readBigUInt64BE=Ue(o(function(e){e=e>>>0,He(e,"offset");let t=this[e],
n=this[e+7];(t===void 0||n===void 0)&&ut(e,this.length-8);let i=t*2**24+this[++e]*
2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+
n;return(BigInt(i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=
o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<
t&&(s*=256);)i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readInt\
LE");d.prototype.readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||re(e,t,this.length);
let i=t,s=1,a=this[e+--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=
s&&(a-=Math.pow(2,8*t)),a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=
e>>>0,t||re(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");
d.prototype.readInt16LE=o(function(e,t){e=e>>>0,t||re(e,2,this.length);let n=this[e]|
this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=
o(function(e,t){e=e>>>0,t||re(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&
32768?n|4294901760:n},"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=
e>>>0,t||re(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"\
readInt32LE");d.prototype.readInt32BE=o(function(e,t){return e=e>>>0,t||re(e,4,this.
length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.
readBigInt64LE=Ue(o(function(e){e=e>>>0,He(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&ut(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+
6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24)},"readBigInt64LE"));d.prototype.readBigInt64BE=Ue(o(function(e){
e=e>>>0,He(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ut(e,
this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(
i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readB\
igInt64BE"));d.prototype.readFloatLE=o(function(e,t){return e=e>>>0,t||re(e,4,this.
length),je.read(this,e,!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){
return e=e>>>0,t||re(e,4,this.length),je.read(this,e,!1,23,4)},"readFloatBE");d.
prototype.readDoubleLE=o(function(e,t){return e=e>>>0,t||re(e,8,this.length),je.
read(this,e,!0,52,8)},"readDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=
e>>>0,t||re(e,8,this.length),je.read(this,e,!1,52,8)},"readDoubleBE");function fe(r,e,t,n,i,s){
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
4},"writeUInt32BE");function ii(r,e,t,n,i){ci(e,n,i,r,t,7);let s=Number(e&BigInt(
4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(
e>>BigInt(32)&BigInt(4294967295));return r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=
a,a=a>>8,r[t++]=a,t}o(ii,"wrtBigUInt64LE");function si(r,e,t,n,i){ci(e,n,i,r,t,7);
let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>
8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=a,a=a>>8,
r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(si,"wrtBigUInt64BE");d.prototype.writeBigUInt64LE=
Ue(o(function(e,t=0){return ii(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},
"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=Ue(o(function(e,t=0){return si(
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
Ue(o(function(e,t=0){return ii(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x\
7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.writeBigInt64BE=Ue(o(function(e,t=0){
return si(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},
"writeBigInt64BE"));function ai(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError(
"Index out of range");if(t<0)throw new RangeError("Index out of range")}o(ai,"ch\
eckIEEE754");function oi(r,e,t,n,i){return e=+e,t=t>>>0,i||ai(r,e,t,4,34028234663852886e22,
-34028234663852886e22),je.write(r,e,t,n,23,4),t+4}o(oi,"writeFloat");d.prototype.
writeFloatLE=o(function(e,t,n){return oi(this,e,t,!0,n)},"writeFloatLE");d.prototype.
writeFloatBE=o(function(e,t,n){return oi(this,e,t,!1,n)},"writeFloatBE");function ui(r,e,t,n,i){
return e=+e,t=t>>>0,i||ai(r,e,t,8,17976931348623157e292,-17976931348623157e292),
je.write(r,e,t,n,52,8),t+8}o(ui,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){
return ui(this,e,t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){
return ui(this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=o(function(e,t,n,i){
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
for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this},"fill");var $e={};function gr(r,e,t){
$e[r]=class extends t{static{o(this,"NodeError")}constructor(){super(),Object.defineProperty(
this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.
name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){
Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){
return`${this.name} [${r}]: ${this.message}`}}}o(gr,"E");gr("ERR_BUFFER_OUT_OF_B\
OUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to acces\
s memory outside buffer bounds"},RangeError);gr("ERR_INVALID_ARG_TYPE",function(r,e){
return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);
gr("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range\
.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Zn(String(t)):typeof t=="\
bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=
Zn(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Zn(r){
let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;
return`${r.slice(0,t)}${e}`}o(Zn,"addNumericalSeparator");function vo(r,e,t){He(
e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ut(e,r.length-(t+1))}o(vo,"checkBo\
unds");function ci(r,e,t,n,i,s){if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>
3?e===0||e===BigInt(0)?u=`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} \
** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,
new $e.ERR_OUT_OF_RANGE("value",u,r)}vo(n,i,s)}o(ci,"checkIntBI");function He(r,e){
if(typeof r!="number")throw new $e.ERR_INVALID_ARG_TYPE(e,"number",r)}o(He,"vali\
dateNumber");function ut(r,e,t){throw Math.floor(r)!==r?(He(r,t),new $e.ERR_OUT_OF_RANGE(
t||"offset","an integer",r)):e<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE(
t||"offset",`>= ${t?1:0} and <= ${e}`,r)}o(ut,"boundsError");var Co=/[^+/0-9A-Za-z-_]/g;
function _o(r){if(r=r.split("=")[0],r=r.trim().replace(Co,""),r.length<2)return"";
for(;r.length%4!==0;)r=r+"=";return r}o(_o,"base64clean");function yr(r,e){e=e||
1/0;let t,n=r.length,i=null,s=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&
t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===
n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.
push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&
s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){
if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.
push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(
t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code \
point")}return s}o(yr,"utf8ToBytes");function To(r){let e=[];for(let t=0;t<r.length;++t)
e.push(r.charCodeAt(t)&255);return e}o(To,"asciiToBytes");function Uo(r,e){let t,
n,i,s=[];for(let a=0;a<r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,i=t%256,
s.push(i),s.push(n);return s}o(Uo,"utf16leToBytes");function li(r){return fr.toByteArray(
_o(r))}o(li,"base64ToBytes");function Dt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||
i>=r.length);++i)e[i+t]=r[i];return i}o(Dt,"blitBuffer");function xe(r,e){return r instanceof
e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===
e.name}o(xe,"isInstance");function Sr(r){return r!==r}o(Sr,"numberIsNaN");var Lo=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function Ue(r){return typeof BigInt>"u"?Io:r}
o(Ue,"defineBigIntMethod");function Io(){throw new Error("BigInt not supported")}
o(Io,"BufferBigIntNotDefined")});var _,T,U,A,w,S,y=ye(()=>{"use strict";_=globalThis,T=globalThis.setImmediate??(r=>setTimeout(
r,0)),U=globalThis.clearImmediate??(r=>clearTimeout(r)),A=globalThis.crypto??{};
A.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:hi().Buffer,S=globalThis.process??{};S.env??={};try{
S.nextTick(()=>{})}catch{let e=Promise.resolve();S.nextTick=e.then.bind(e)}});var Be=R((bf,Pr)=>{"use strict";y();var ze=typeof Reflect=="object"?Reflect:null,
Ni=ze&&typeof ze.apply=="function"?ze.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Qt;ze&&typeof ze.ownKeys=="function"?Qt=ze.ownKeys:
Object.getOwnPropertySymbols?Qt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Qt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Nu(r){console&&console.warn&&
console.warn(r)}o(Nu,"ProcessEmitWarning");var Di=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function O(){O.init.call(this)}o(O,"EventEmitter");Pr.exports=
O;Pr.exports.once=qu;O.EventEmitter=O;O.prototype._events=void 0;O.prototype._eventsCount=
0;O.prototype._maxListeners=void 0;var Mi=10;function $t(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o($t,"checkListener");Object.defineProperty(O,"defaultMaxLi\
steners",{enumerable:!0,get:o(function(){return Mi},"get"),set:o(function(r){if(typeof r!=
"number"||r<0||Di(r))throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received '+r+".");Mi=r},"set")});
O.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this).
_events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=
this._maxListeners||void 0};O.prototype.setMaxListeners=o(function(e){if(typeof e!=
"number"||e<0||Di(e))throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},
"setMaxListeners");function Fi(r){return r._maxListeners===void 0?O.defaultMaxListeners:
r._maxListeners}o(Fi,"_getMaxListeners");O.prototype.getMaxListeners=o(function(){
return Fi(this)},"getMaxListeners");O.prototype.emit=o(function(e){for(var t=[],
n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;
if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var a;if(t.length>
0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+
a.message+")":""));throw u.context=a,u}var c=s[e];if(c===void 0)return!1;if(typeof c==
"function")Ni(c,this,t);else for(var l=c.length,h=$i(c,l),n=0;n<l;++n)Ni(h[n],this,
t);return!0},"emit");function qi(r,e,t,n){var i,s,a;if($t(t),s=r._events,s===void 0?
(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&(r.emit(
"newListener",e,t.listener?t.listener:t),s=r._events),a=s[e]),a===void 0)a=s[e]=
t,++r._eventsCount;else if(typeof a=="function"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(
t):a.push(t),i=Fi(r),i>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Po\
ssible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners a\
dded. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExce\
ededWarning",u.emitter=r,u.type=e,u.count=a.length,Nu(u)}return r}o(qi,"_addList\
ener");O.prototype.addListener=o(function(e,t){return qi(this,e,t,!1)},"addListe\
ner");O.prototype.on=O.prototype.addListener;O.prototype.prependListener=o(function(e,t){
return qi(this,e,t,!0)},"prependListener");function Mu(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?
this.listener.call(this.target):this.listener.apply(this.target,arguments)}o(Mu,
"onceWrapper");function ki(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,
listener:t},i=Mu.bind(n);return i.listener=t,n.wrapFn=i,i}o(ki,"_onceWrap");O.prototype.
once=o(function(e,t){return $t(t),this.on(e,ki(this,e,t)),this},"once");O.prototype.
prependOnceListener=o(function(e,t){return $t(t),this.prependListener(e,ki(this,
e,t)),this},"prependOnceListener");O.prototype.removeListener=o(function(e,t){var n,
i,s,a,u;if($t(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;
if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):
(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!=
"function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){u=n[a].
listener,s=a;break}if(s<0)return this;s===0?n.shift():Du(n,s),n.length===1&&(i[e]=
n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,u||t)}return this},
"removeListener");O.prototype.off=O.prototype.removeListener;O.prototype.removeAllListeners=
o(function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===
void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),
this;if(arguments.length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],
a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=
n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-
1;i>=0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function Oi(r,e,t){
var n=r._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i==
"function"?t?[i.listener||i]:[i]:t?Fu(i):$i(i,i.length)}o(Oi,"_listeners");O.prototype.
listeners=o(function(e){return Oi(this,e,!0)},"listeners");O.prototype.rawListeners=
o(function(e){return Oi(this,e,!1)},"rawListeners");O.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):Qi.call(r,e)};O.prototype.
listenerCount=Qi;function Qi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(Qi,"listenerCount");
O.prototype.eventNames=o(function(){return this._eventsCount>0?Qt(this._events):
[]},"eventNames");function $i(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o($i,"arrayClone");function Du(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(Du,"spliceOne");function Fu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(Fu,"unwrapListeners");function qu(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),ji(r,e,s,{once:!0}),e!=="error"&&ku(r,i,{once:!0})})}
o(qu,"once");function ku(r,e,t){typeof r.on=="function"&&ji(r,"error",e,t)}o(ku,
"addErrorHandlerIfEventEmitter");function ji(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(ji,"eventTargetAgnosticAddListener")});var dt={};me(dt,{default:()=>Ou});var Ou,pt=ye(()=>{"use strict";y();Ou={}});var Br={};me(Br,{Md5:()=>mt,createHash:()=>$u,createHmac:()=>ju,randomBytes:()=>Qu,
sha256:()=>yt});function Qu(r){return A.getRandomValues(w.alloc(r))}function $u(r){
if(r==="sha256")return{update:o(function(e){return{digest:o(function(){return w.
from(yt(e))},"digest")}},"update")};if(r==="md5")return{update:o(function(e){return{
digest:o(function(){return typeof e=="string"?mt.hashStr(e):mt.hashByteArray(e)},
"digest")}},"update")};throw new Error(`Hash type '${r}' not supported`)}function ju(r,e){
if(r!=="sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);
return{update:o(function(t){return{digest:o(function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=yt(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.
set(yt(a),64),w.from(yt(u))},"digest")}},"update")}}function yt(r){let e=1779033703,
t=3144134277,n=1013904242,i=2773480762,s=1359893119,a=2600822924,u=528734635,c=1541459225,
l=0,h=0,f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,
2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,
3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,
1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,
338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,
2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,
275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,
1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,
3329325298],p=o((b,g)=>b>>>g|b<<32-g,"rrot"),m=new Uint32Array(64),x=new Uint8Array(
64),L=o(()=>{for(let D=0,G=0;D<16;D++,G+=4)m[D]=x[G]<<24|x[G+1]<<16|x[G+2]<<8|x[G+
3];for(let D=16;D<64;D++){let G=p(m[D-15],7)^p(m[D-15],18)^m[D-15]>>>3,ie=p(m[D-
2],17)^p(m[D-2],19)^m[D-2]>>>10;m[D]=m[D-16]+G+m[D-7]+ie|0}let b=e,g=t,E=n,M=i,B=s,
F=a,H=u,Z=c;for(let D=0;D<64;D++){let G=p(B,6)^p(B,11)^p(B,25),ie=B&F^~B&H,ee=Z+
G+ie+f[D]+m[D]|0,K=p(b,2)^p(b,13)^p(b,22),$=b&g^b&E^g&E,Q=K+$|0;Z=H,H=F,F=B,B=M+
ee|0,M=E,E=g,g=b,b=ee+Q|0}e=e+b|0,t=t+g|0,n=n+E|0,i=i+M|0,s=s+B|0,a=a+F|0,u=u+H|
0,c=c+Z|0,h=0},"process"),v=o(b=>{typeof b=="string"&&(b=new TextEncoder().encode(
b));for(let g=0;g<b.length;g++)x[h++]=b[g],h===64&&L();l+=b.length},"add"),C=o(()=>{
if(x[h++]=128,h==64&&L(),h+8>64){for(;h<64;)x[h++]=0;L()}for(;h<58;)x[h++]=0;let b=l*
8;x[h++]=b/1099511627776&255,x[h++]=b/4294967296&255,x[h++]=b>>>24,x[h++]=b>>>16&
255,x[h++]=b>>>8&255,x[h++]=b&255,L();let g=new Uint8Array(32);return g[0]=e>>>24,
g[1]=e>>>16&255,g[2]=e>>>8&255,g[3]=e&255,g[4]=t>>>24,g[5]=t>>>16&255,g[6]=t>>>8&
255,g[7]=t&255,g[8]=n>>>24,g[9]=n>>>16&255,g[10]=n>>>8&255,g[11]=n&255,g[12]=i>>>
24,g[13]=i>>>16&255,g[14]=i>>>8&255,g[15]=i&255,g[16]=s>>>24,g[17]=s>>>16&255,g[18]=
s>>>8&255,g[19]=s&255,g[20]=a>>>24,g[21]=a>>>16&255,g[22]=a>>>8&255,g[23]=a&255,
g[24]=u>>>24,g[25]=u>>>16&255,g[26]=u>>>8&255,g[27]=u&255,g[28]=c>>>24,g[29]=c>>>
16&255,g[30]=c>>>8&255,g[31]=c&255,g},"digest");return r===void 0?{add:v,digest:C}:
(v(r),C())}var mt,Rr=ye(()=>{"use strict";y();o(Qu,"randomBytes");o($u,"createHa\
sh");o(ju,"createHmac");mt=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
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
_state:r._hex(this._state)}};o(yt,"sha256")});var Mr=R(Hi=>{"use strict";y();Hi.parse=function(r,e){return new Nr(r,e).parse()};
var Nr=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||Hu,this.position=0,this.entries=[],this.recorded=[],this.dimension=
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
0)throw new Error("array dimension not balanced");return this.entries}};function Hu(r){
return r}o(Hu,"identity")});var Dr=R((Lf,Ki)=>{y();var Ku=Mr();Ki.exports={create:o(function(r,e){return{parse:o(
function(){return Ku.parse(r,e)},"parse")}},"create")}});var Vi=R((Bf,Gi)=>{"use strict";y();var Wu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Gu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Vu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,zu=/^-?infinity$/;
Gi.exports=o(function(e){if(zu.test(e))return Number(e.replace("i","I"));var t=Wu.
exec(e);if(!t)return Ju(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Wi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,p=Yu(e);return p!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),Fr(i)&&f.setUTCFullYear(i),p!==0&&f.setTime(f.getTime()-p)):(f=new Date(
i,s,a,u,c,l,h),Fr(i)&&f.setFullYear(i)),f},"parseDate");function Ju(r){var e=Gu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Wi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Fr(t)&&a.setFullYear(t),a}}o(Ju,"getDate");
function Yu(r){if(r.endsWith("+00"))return 0;var e=Vu.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(Yu,"timeZoneOffset");function Wi(r){
return-(r-1)}o(Wi,"bcYearToNegativeYear");function Fr(r){return r>=0&&r<100}o(Fr,
"is0To99")});var Ji=R((Mf,zi)=>{y();zi.exports=Xu;var Zu=Object.prototype.hasOwnProperty;function Xu(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Zu.call(t,
n)&&(r[n]=t[n])}return r}o(Xu,"extend")});var Xi=R((qf,Zi)=>{"use strict";y();var ec=Ji();Zi.exports=Je;function Je(r){if(!(this instanceof
Je))return new Je(r);ec(this,fc(r))}o(Je,"PostgresInterval");var tc=["seconds","\
minutes","hours","days","months","years"];Je.prototype.toPostgres=function(){var r=tc.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var rc={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},nc=["years","months","days"],ic=["hours","minutes","seconds"];Je.
prototype.toISOString=Je.prototype.toISO=function(){var r=nc.map(t,this).join(""),
e=ic.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+rc[n]}};var qr="([+-]?\\d+)",sc=qr+"\\s+years?",ac=qr+"\\s+mons?",oc=qr+"\
\\s+days?",uc="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",cc=new RegExp([
sc,ac,oc,uc].map(function(r){return"("+r+")?"}).join("\\s*")),Yi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},lc=["hours","minutes","sec\
onds","milliseconds"];function hc(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(hc,"parseMilliseconds");function fc(r){if(!r)return{};var e=cc.exec(
r),t=e[8]==="-";return Object.keys(Yi).reduce(function(n,i){var s=Yi[i],a=e[s];return!a||
(a=i==="milliseconds"?hc(a):parseInt(a,10),!a)||(t&&~lc.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(fc,"parse")});var ts=R((Qf,es)=>{"use strict";y();es.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var us=R((Hf,os)=>{y();var wt=Mr(),gt=Dr(),jt=Vi(),ns=Xi(),is=ts();function Ht(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Ht,"allowNull");function ss(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(ss,"parseBool");function dc(r){return r?wt.parse(r,ss):null}o(dc,"pars\
eBoolArray");function pc(r){return parseInt(r,10)}o(pc,"parseBaseTenInt");function kr(r){
return r?wt.parse(r,Ht(pc)):null}o(kr,"parseIntegerArray");function yc(r){return r?
wt.parse(r,Ht(function(e){return as(e).trim()})):null}o(yc,"parseBigIntegerArray");
var mc=o(function(r){if(!r)return null;var e=gt.create(r,function(t){return t!==
null&&(t=jr(t)),t});return e.parse()},"parsePointArray"),Or=o(function(r){if(!r)
return null;var e=gt.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ge=o(function(r){if(!r)return null;var e=gt.
create(r);return e.parse()},"parseStringArray"),Qr=o(function(r){if(!r)return null;
var e=gt.create(r,function(t){return t!==null&&(t=jt(t)),t});return e.parse()},"\
parseDateArray"),wc=o(function(r){if(!r)return null;var e=gt.create(r,function(t){
return t!==null&&(t=ns(t)),t});return e.parse()},"parseIntervalArray"),gc=o(function(r){
return r?wt.parse(r,Ht(is)):null},"parseByteAArray"),$r=o(function(r){return parseInt(
r,10)},"parseInteger"),as=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),rs=o(function(r){return r?wt.parse(r,Ht(JSON.parse)):null},
"parseJsonArray"),jr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),Sc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=jr(e);return s.radius=parseFloat(t),s},"parseCircle"),bc=o(function(r){r(20,
as),r(21,$r),r(23,$r),r(26,$r),r(700,parseFloat),r(701,parseFloat),r(16,ss),r(1082,
jt),r(1114,jt),r(1184,jt),r(600,jr),r(651,ge),r(718,Sc),r(1e3,dc),r(1001,gc),r(1005,
kr),r(1007,kr),r(1028,kr),r(1016,yc),r(1017,mc),r(1021,Or),r(1022,Or),r(1231,Or),
r(1014,ge),r(1015,ge),r(1008,ge),r(1009,ge),r(1040,ge),r(1041,ge),r(1115,Qr),r(1182,
Qr),r(1185,Qr),r(1186,ns),r(1187,wc),r(17,is),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,rs),r(3807,rs),r(3907,ge),r(2951,ge),r(791,ge),r(1183,
ge),r(1270,ge)},"init");os.exports={init:bc}});var ls=R((Gf,cs)=>{"use strict";y();var de=1e6;function Ec(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>
0,a=4294967296*s+t,t=a/de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%de,e=e/de>>>0,a=4294967296*s+t,t=a/
de>>>0,u=""+(a-de*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%de,a=4294967296*s+t,u=""+a%de,n+u+i}o(Ec,"readInt8");cs.
exports=Ec});var ys=R((Jf,ps)=>{y();var xc=ls(),z=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(m,x,L){
return m*Math.pow(2,L)+x};var s=t>>3,a=o(function(m){return n?~m&255:m},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var p=(e+t)%8;return p>0&&
(l=i(l,a(r[h])>>8-p,p)),l},"parseBits"),ds=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=z(r,1),s=z(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var p=1;p<=f;p++)a/=2,(h&1<<f-p)>0&&(l+=a);return l},"parsePrecisionBits"),
c=z(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),Ac=o(function(r){return z(r,1)==1?-1*
(z(r,15,1,!0)+1):z(r,15,1)},"parseInt16"),hs=o(function(r){return z(r,1)==1?-1*(z(
r,31,1,!0)+1):z(r,31,1)},"parseInt32"),vc=o(function(r){return ds(r,23,8)},"pars\
eFloat32"),Cc=o(function(r){return ds(r,52,11)},"parseFloat64"),_c=o(function(r){
var e=z(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,z(r,16,16)),n=0,i=[],
s=z(r,16),a=0;a<s;a++)n+=z(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,z(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),fs=o(function(r,e){var t=z(
e,1),n=z(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),St=o(function(r){for(var e=z(r,32),t=z(r,32,32),
n=z(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=z(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=z(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
z(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],p;if(l.length>1){var m=l.shift();for(p=0;p<m;p++)f[p]=c(l,h);l.unshift(
m)}else for(p=0;p<l[0];p++)f[p]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),Tc=o(function(r){return r.toString("utf8")},"parseText"),Uc=o(function(r){return r===
null?null:z(r,8)>0},"parseBool"),Lc=o(function(r){r(20,xc),r(21,Ac),r(23,hs),r(26,
hs),r(1700,_c),r(700,vc),r(701,Cc),r(16,Uc),r(1114,fs.bind(null,!1)),r(1184,fs.bind(
null,!0)),r(1e3,St),r(1007,St),r(1016,St),r(1008,St),r(1009,St),r(25,Tc)},"init");
ps.exports={init:Lc}});var ws=R((Xf,ms)=>{y();ms.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var xt=R(Et=>{y();var Ic=us(),Pc=ys(),Bc=Dr(),Rc=ws();Et.getTypeParser=Nc;Et.setTypeParser=
Mc;Et.arrayParser=Bc;Et.builtins=Rc;var bt={text:{},binary:{}};function gs(r){return String(
r)}o(gs,"noParse");function Nc(r,e){return e=e||"text",bt[e]&&bt[e][r]||gs}o(Nc,
"getTypeParser");function Mc(r,e,t){typeof e=="function"&&(t=e,e="text"),bt[e][r]=
t}o(Mc,"setTypeParser");Ic.init(function(r,e){bt.text[r]=e});Pc.init(function(r,e){
bt.binary[r]=e})});var At=R((id,Hr)=>{"use strict";y();Hr.exports={host:"localhost",user:S.platform===
"win32"?S.env.USERNAME:S.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Ye=xt(),Dc=Ye.getTypeParser(
20,"text"),Fc=Ye.getTypeParser(1016,"text");Hr.exports.__defineSetter__("parseIn\
t8",function(r){Ye.setTypeParser(20,"text",r?Ye.getTypeParser(23,"text"):Dc),Ye.
setTypeParser(1016,"text",r?Ye.getTypeParser(1007,"text"):Fc)})});var vt=R((ad,bs)=>{"use strict";y();var qc=(Rr(),te(Br)),kc=At();function Oc(r){
var e=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Oc,"escapeEl\
ement");function Ss(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||
typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Ss(r[t]):r[t]instanceof w?e+=
"\\\\x"+r[t].toString("hex"):e+=Oc(Kt(r[t]));return e=e+"}",e}o(Ss,"arrayString");
var Kt=o(function(r,e){if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.
isView(r)){var t=w.from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.
byteLength?t:t.slice(r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof
Date?kc.parseInputDatesAsUTC?jc(r):$c(r):Array.isArray(r)?Ss(r):typeof r=="objec\
t"?Qc(r,e):r.toString()},"prepareValue");function Qc(r,e){if(r&&typeof r.toPostgres==
"function"){if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference det\
ected while preparing "'+r+'" for query');return e.push(r),Kt(r.toPostgres(Kt),e)}
return JSON.stringify(r)}o(Qc,"prepareObject");function ce(r,e){for(r=""+r;r.length<
e;)r="0"+r;return r}o(ce,"pad");function $c(r){var e=-r.getTimezoneOffset(),t=r.
getFullYear(),n=t<1;n&&(t=Math.abs(t)+1);var i=ce(t,4)+"-"+ce(r.getMonth()+1,2)+
"-"+ce(r.getDate(),2)+"T"+ce(r.getHours(),2)+":"+ce(r.getMinutes(),2)+":"+ce(r.getSeconds(),
2)+"."+ce(r.getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=ce(Math.floor(
e/60),2)+":"+ce(e%60,2),n&&(i+=" BC"),i}o($c,"dateToString");function jc(r){var e=r.
getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=ce(e,4)+"-"+ce(r.getUTCMonth()+
1,2)+"-"+ce(r.getUTCDate(),2)+"T"+ce(r.getUTCHours(),2)+":"+ce(r.getUTCMinutes(),
2)+":"+ce(r.getUTCSeconds(),2)+"."+ce(r.getUTCMilliseconds(),3);return n+="+00:0\
0",t&&(n+=" BC"),n}o(jc,"dateToStringUTC");function Hc(r,e,t){return r=typeof r==
"string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}o(Hc,"normalizeQueryConfig");var Kr=o(function(r){return qc.createHash("md5").
update(r,"utf-8").digest("hex")},"md5"),Kc=o(function(r,e,t){var n=Kr(e+r),i=Kr(
w.concat([w.from(n),t]));return"md5"+i},"postgresMd5PasswordHash");bs.exports={prepareValue:o(
function(e){return Kt(e)},"prepareValueWrapper"),normalizeQueryConfig:Hc,postgresMd5PasswordHash:Kc,
md5:Kr}});var Cs=R((cd,vs)=>{"use strict";y();var Wr=(Rr(),te(Br));function Wc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Wr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Wc,"startSession");function Gc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=Jc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=Xc(e,
i,n.iteration),a=Ze(s,"Client Key"),u=Zc(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,p=Ze(u,f),m=As(
a,p),x=m.toString("base64"),L=Ze(s,"Server Key"),v=Ze(L,f);r.message="SASLRespon\
se",r.serverSignature=v.toString("base64"),r.response=h+",p="+x}o(Gc,"continueSe\
ssion");function Vc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Yc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(Vc,"finalizeSession");function zc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(zc,"isPrintableC\
hars");function Es(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(Es,"isBase64");function xs(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(xs,"parseAttributePairs");function Jc(r){let e=xs(
r),t=e.get("r");if(t){if(!zc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Es(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(Jc,"parseServerFirstMe\
ssage");function Yc(r){let t=xs(r).get("v");if(t){if(!Es(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(Yc,"parseServerFinalMessage");function As(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(As,"xorBuffers");function Zc(r){return Wr.createHash(
"sha256").update(r).digest()}o(Zc,"sha256");function Ze(r,e){return Wr.createHmac(
"sha256",r).update(e).digest()}o(Ze,"hmacSha256");function Xc(r,e,t){for(var n=Ze(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Ze(r,n),i=As(i,n);return i}
o(Xc,"Hi");vs.exports={startSession:Wc,continueSession:Gc,finalizeSession:Vc}});var Gr={};me(Gr,{join:()=>el});function el(...r){return r.join("/")}var Vr=ye(()=>{
"use strict";y();o(el,"join")});var zr={};me(zr,{stat:()=>tl});function tl(r,e){e(new Error("No filesystem"))}var Jr=ye(
()=>{"use strict";y();o(tl,"stat")});var Yr={};me(Yr,{default:()=>rl});var rl,Zr=ye(()=>{"use strict";y();rl={}});var _s={};me(_s,{StringDecoder:()=>Xr});var Xr,Ts=ye(()=>{"use strict";y();Xr=class{static{
o(this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Ps=R((Sd,Is)=>{"use strict";y();var{Transform:nl}=(Zr(),te(Yr)),{StringDecoder:il}=(Ts(),te(_s)),
Re=Symbol("last"),Wt=Symbol("decoder");function sl(r,e,t){let n;if(this.overflow){
if(n=this[Wt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Re]+=this[Wt].write(r),n=this[Re].split(this.matcher);this[Re]=
n.pop();for(let i=0;i<n.length;i++)try{Ls(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Re].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(sl,"transform");function al(r){
if(this[Re]+=this[Wt].end(),this[Re])try{Ls(this,this.mapper(this[Re]))}catch(e){
return r(e)}r()}o(al,"flush");function Ls(r,e){e!==void 0&&r.push(e)}o(Ls,"push");
function Us(r){return r}o(Us,"noop");function ol(r,e,t){switch(r=r||/\r?\n/,e=e||
Us,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Us)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=sl,t.flush=al,t.readableObjectMode=!0;
let n=new nl(t);return n[Re]="",n[Wt]=new il("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(ol,"split");Is.exports=ol});var Ns=R((xd,_e)=>{"use strict";y();var Bs=(Vr(),te(Gr)),ul=(Zr(),te(Yr)).Stream,
cl=Ps(),Rs=(pt(),te(dt)),ll=5432,Gt=S.platform==="win32",Ct=S.stderr,hl=56,fl=7,
dl=61440,pl=32768;function yl(r){return(r&dl)==pl}o(yl,"isRegFile");var Xe=["hos\
t","port","database","user","password"],en=Xe.length,ml=Xe[en-1];function tn(){var r=Ct instanceof
ul&&Ct.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Ct.write(Rs.format.apply(Rs,e))}}o(tn,"warn");Object.defineProperty(_e.exports,
"isWin",{get:o(function(){return Gt},"get"),set:o(function(r){Gt=r},"set")});_e.
exports.warnTo=function(r){var e=Ct;return Ct=r,e};_e.exports.getFileName=function(r){
var e=r||S.env,t=e.PGPASSFILE||(Gt?Bs.join(e.APPDATA||"./","postgresql","pgpass.\
conf"):Bs.join(e.HOME||"./",".pgpass"));return t};_e.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(S.env,"PGPASSWORD")?!1:Gt?!0:(e=e||"\
<unkn>",yl(r.mode)?r.mode&(hl|fl)?(tn('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less',e),!1):!0:(tn('WARNING:\
 password file "%s" is not a plain file',e),!1))};var wl=_e.exports.match=function(r,e){
return Xe.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||ll)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};_e.exports.getPassword=function(r,e,t){
var n,i=e.pipe(cl());function s(c){var l=gl(c);l&&Sl(l)&&wl(r,l)&&(n=l[ml],i.end())}
o(s,"onLine");var a=o(function(){e.destroy(),t(n)},"onEnd"),u=o(function(c){e.destroy(),
tn("WARNING: error on reading file: %s",c),t(void 0)},"onErr");e.on("error",u),i.
on("data",s).on("end",a).on("error",u)};var gl=_e.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,a={},
u=!1,c=o(function(h,f,p){var m=r.substring(f,p);Object.hasOwnProperty.call(S.env,
"PGPASS_NO_DEESCAPE")||(m=m.replace(/\\([:\\])/g,"$1")),a[Xe[h]]=m},"addToObj"),
l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(l),u=n==en-1,u){c(n,i);break}
l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=Object.keys(a).length===
en?a:null,a},Sl=_e.exports.isValidEntry=function(r){for(var e={0:function(a){return a.
length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(a)&&a>0&&a<9007199254740992&&
Math.floor(a)===a)},2:function(a){return a.length>0},3:function(a){return a.length>
0},4:function(a){return a.length>0}},t=0;t<Xe.length;t+=1){var n=e[t],i=r[Xe[t]]||
"",s=n(i);if(!s)return!1}return!0}});var Ds=R((_d,rn)=>{"use strict";y();var Cd=(Vr(),te(Gr)),Ms=(Jr(),te(zr)),Vt=Ns();
rn.exports=function(r,e){var t=Vt.getFileName();Ms.stat(t,function(n,i){if(n||!Vt.
usePgPass(i,t))return e(void 0);var s=Ms.createReadStream(t);Vt.getPassword(r,s,
e)})};rn.exports.warnTo=Vt.warnTo});var Jt=R((Ud,Fs)=>{"use strict";y();var bl=xt();function zt(r){this._types=r||bl,
this.text={},this.binary={}}o(zt,"TypeOverrides");zt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
zt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};zt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Fs.exports=zt});var qs={};me(qs,{default:()=>El});var El,ks=ye(()=>{"use strict";y();El={}});var Os={};me(Os,{parse:()=>nn});function nn(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:p}=new URL(n);s=decodeURIComponent(s),i=decodeURIComponent(
i),l=decodeURIComponent(l);let m=i+":"+s,x=e?Object.fromEntries(f.entries()):h;return{
href:r,protocol:t,auth:m,username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,query:x,hash:p}}var sn=ye(()=>{"use strict";y();o(nn,"parse")});var $s=R((Nd,Qs)=>{"use strict";y();var xl=(sn(),te(Os)),an=(Jr(),te(zr));function on(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=xl.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var a=s.split("/");t.host=decodeURIComponent(
a[0]),s=a.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=an.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=an.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=an.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(on,"parse");Qs.exports=on;on.parse=on});var Yt=R((Fd,Ks)=>{"use strict";y();var Al=(ks(),te(qs)),Hs=At(),js=$s().parse,he=o(
function(r,e,t){return t===void 0?t=S.env["PG"+r.toUpperCase()]:t===!1||(t=S.env[t]),
e[r]||t||Hs[r]},"val"),vl=o(function(){switch(S.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Hs.ssl},"readSSLConfigFromEnvironment"),et=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),Se=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+et(n))},"ad\
d"),un=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?js(e):e||{},e.connectionString&&(e=Object.assign({},e,js(e.connectionString))),
this.user=he("user",e),this.database=he("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(he("port",e),10),this.host=he("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:he(
"password",e)}),this.binary=he("binary",e),this.options=he("options",e),this.ssl=
typeof e.ssl>"u"?vl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
he("client_encoding",e),this.replication=he("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=he("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=he("fallback_application_name",e,!1),this.
statement_timeout=he("statement_timeout",e,!1),this.lock_timeout=he("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=he("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=he("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=S.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
Se(t,this,"user"),Se(t,this,"password"),Se(t,this,"port"),Se(t,this,"application\
_name"),Se(t,this,"fallback_application_name"),Se(t,this,"connect_timeout"),Se(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(Se(t,n,"sslmode"),Se(t,n,"sslca"),Se(t,n,"sslkey"),Se(t,n,"sslcert"),
Se(t,n,"sslrootcert"),this.database&&t.push("dbname="+et(this.database)),this.replication&&
t.push("replication="+et(this.replication)),this.host&&t.push("host="+et(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+et(this.client_encoding)),Al.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+et(s)),e(null,t.join(" ")))})}};Ks.exports=un});var Vs=R((Od,Gs)=>{"use strict";y();var Cl=xt(),Ws=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
cn=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Ws.exec(e.text):t=Ws.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](s):t[a]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=Cl.getTypeParser(
n.dataTypeID,n.format||"text")}}};Gs.exports=cn});var Zs=R((jd,Ys)=>{"use strict";y();var{EventEmitter:_l}=Be(),zs=Vs(),Js=vt(),ln=class extends _l{static{
o(this,"Query")}constructor(e,t,n){super(),e=Js.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,S.domain&&e.callback&&(this.callback=S.domain.bind(e.callback)),
this._result=new zs(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=
!1,this._canceledDueToError=!1,this._promise=null}requiresPreparation(){return this.
name||this.rows?!0:!this.text||!this.values?!1:this.values.length>0}_checkForMultirow(){
this._result.command&&(Array.isArray(this._results)||(this._results=[this._result]),
this._result=new zs(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
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
binary,valueMapper:Js.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};Ys.exports=ln});var ta={};me(ta,{Socket:()=>be,isIP:()=>Tl});function Tl(r){return 0}var ea,Xs,be,
Zt=ye(()=>{"use strict";y();ea=Qe(Be(),1);o(Tl,"isIP");Xs=/^[^.]+\./,be=class r extends ea.EventEmitter{static{
o(this,"Socket")}static defaults={poolQueryViaFetch:!1,fetchEndpoint:o((e,t,n)=>{
let i;return n?.jwtAuth?i=e.replace(Xs,"apiauth."):i=e.replace(Xs,"api."),"https\
://"+i+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,
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
emit("close")}),u.addEventListener("message",l=>{if(this.tlsState===0){let h=w.from(
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
. Details: ${h}`)),this.emit("close")})}}async startTls(e){if(this.subtls===void 0)
throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` \
to the subtls library. See https://github.com/neondatabase/serverless/blob/main/\
CONFIG.md for more information.");this.tlsState=1;let t=this.subtls.TrustedCert.
fromPEM(this.rootCerts),n=new this.subtls.WebSocketReadQueue(this.ws),i=n.read.bind(
n),s=this.rawWrite.bind(this),[a,u]=await this.subtls.startTls(e,t,i,s,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=
a,this.tlsWrite=u,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){let e=await this.
tlsRead();if(e===void 0)break;{let t=w.from(e);this.emit("data",t)}}}rawWrite(e){
if(!this.coalesceWrites){this.ws.send(e);return}if(this.writeBuffer===void 0)this.
writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},
0);else{let t=new Uint8Array(this.writeBuffer.length+e.length);t.set(this.writeBuffer),
t.set(e,this.writeBuffer.length),this.writeBuffer=t}}write(e,t="utf8",n=i=>{}){return e.
length===0?(n(),!0):(typeof e=="string"&&(e=w.from(e,t)),this.tlsState===0?(this.
rawWrite(e),n()):this.tlsState===1?this.once("secureConnection",()=>{this.write(
e,t,n)}):(this.tlsWrite(e),n()),!0)}end(e=w.alloc(0),t="utf8",n=()=>{}){return this.
write(e,t,()=>{this.ws.close(),n()}),this}destroy(){return this.destroyed=!0,this.
end()}}});var Cn=R(I=>{"use strict";y();Object.defineProperty(I,"__esModule",{value:!0});I.
NoticeMessage=I.DataRowMessage=I.CommandCompleteMessage=I.ReadyForQueryMessage=I.
NotificationResponseMessage=I.BackendKeyDataMessage=I.AuthenticationMD5Password=
I.ParameterStatusMessage=I.ParameterDescriptionMessage=I.RowDescriptionMessage=I.
Field=I.CopyResponse=I.CopyDataMessage=I.DatabaseError=I.copyDone=I.emptyQuery=I.
replicationStart=I.portalSuspended=I.noData=I.closeComplete=I.bindComplete=I.parseComplete=
void 0;I.parseComplete={name:"parseComplete",length:5};I.bindComplete={name:"bin\
dComplete",length:5};I.closeComplete={name:"closeComplete",length:5};I.noData={name:"\
noData",length:5};I.portalSuspended={name:"portalSuspended",length:5};I.replicationStart=
{name:"replicationStart",length:4};I.emptyQuery={name:"emptyQuery",length:4};I.copyDone=
{name:"copyDone",length:4};var hn=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};I.DatabaseError=hn;
var fn=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};I.CopyDataMessage=fn;var dn=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};I.CopyResponse=dn;var pn=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};I.Field=pn;var yn=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};I.RowDescriptionMessage=
yn;var mn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};I.ParameterDescriptionMessage=mn;var wn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};I.ParameterStatusMessage=wn;
var gn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};I.AuthenticationMD5Password=
gn;var Sn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};I.BackendKeyDataMessage=
Sn;var bn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};I.NotificationResponseMessage=bn;var En=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};I.ReadyForQueryMessage=En;var xn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};I.CommandCompleteMessage=
xn;var An=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};I.DataRowMessage=An;var vn=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};I.NoticeMessage=vn});var ra=R(Xt=>{"use strict";y();Object.defineProperty(Xt,"__esModule",{value:!0});
Xt.Writer=void 0;var _n=class{static{o(this,"Writer")}constructor(e=256){this.size=
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
size),t}};Xt.Writer=_n});var ia=R(tr=>{"use strict";y();Object.defineProperty(tr,"__esModule",{value:!0});
tr.serialize=void 0;var Tn=ra(),J=new Tn.Writer,Ul=o(r=>{J.addInt16(3).addInt16(
0);for(let n of Object.keys(r))J.addCString(n).addCString(r[n]);J.addCString("cl\
ient_encoding").addCString("UTF8");var e=J.addCString("").flush(),t=e.length+4;return new Tn.
Writer().addInt32(t).add(e).flush()},"startup"),Ll=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Il=o(r=>J.
addCString(r).flush(112),"password"),Pl=o(function(r,e){return J.addCString(r).addInt32(
w.byteLength(e)).addString(e),J.flush(112)},"sendSASLInitialResponseMessage"),Bl=o(
function(r){return J.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Rl=o(
r=>J.addCString(r).flush(81),"query"),na=[],Nl=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||na;for(var n=t.length,
i=J.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return J.
flush(80)},"parse"),tt=new Tn.Writer,Ml=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(J.addInt16(0),tt.addInt32(-1)):n instanceof w?(J.
addInt16(1),tt.addInt32(n.length),tt.add(n)):(J.addInt16(0),tt.addInt32(w.byteLength(
n)),tt.addString(n))}},"writeValues"),Dl=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||na,s=i.length;return J.addCString(e).addCString(t),
J.addInt16(s),Ml(i,r.valueMapper),J.addInt16(s),J.add(tt.flush()),J.addInt16(n?1:
0),J.flush(66)},"bind"),Fl=w.from([69,0,0,0,9,0,0,0,0,0]),ql=o(r=>{if(!r||!r.portal&&
!r.rows)return Fl;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),kl=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Un=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Ol=J.addCString("P").flush(68),Ql=J.addCString("S").flush(68),
$l=o(r=>r.name?Un(68,`${r.type}${r.name||""}`):r.type==="P"?Ol:Ql,"describe"),jl=o(
r=>{let e=`${r.type}${r.name||""}`;return Un(67,e)},"close"),Hl=o(r=>J.add(r).flush(
100),"copyData"),Kl=o(r=>Un(102,r),"copyFail"),er=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Wl=er(72),Gl=er(83),Vl=er(88),zl=er(99),Jl={startup:Ul,password:Il,
requestSsl:Ll,sendSASLInitialResponseMessage:Pl,sendSCRAMClientFinalMessage:Bl,query:Rl,
parse:Nl,bind:Dl,execute:ql,describe:$l,close:jl,flush:o(()=>Wl,"flush"),sync:o(
()=>Gl,"sync"),end:o(()=>Vl,"end"),copyData:Hl,copyDone:o(()=>zl,"copyDone"),copyFail:Kl,
cancel:kl};tr.serialize=Jl});var sa=R(rr=>{"use strict";y();Object.defineProperty(rr,"__esModule",{value:!0});
rr.BufferReader=void 0;var Yl=w.allocUnsafe(0),Ln=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=Yl,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};rr.BufferReader=Ln});var ua=R(nr=>{"use strict";y();Object.defineProperty(nr,"__esModule",{value:!0});
nr.Parser=void 0;var Y=Cn(),Zl=sa(),In=1,Xl=4,aa=In+Xl,oa=w.allocUnsafe(0),Pn=class{static{
o(this,"Parser")}constructor(e){if(this.buffer=oa,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Zl.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+aa<=n;){let s=this.buffer[i],
a=this.buffer.readUInt32BE(i+In),u=In+a;if(u+i<=n){let c=this.handlePacket(i+aa,
s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=oa,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return Y.bindComplete;case 49:return Y.parseComplete;case 51:return Y.
closeComplete;case 110:return Y.noData;case 115:return Y.portalSuspended;case 99:
return Y.copyDone;case 87:return Y.replicationStart;case 73:return Y.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:return new Y.DatabaseError("received in\
valid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.string(1);return new Y.ReadyForQueryMessage(
t,i)}parseCommandCompleteMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring();return new Y.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){let i=n.
slice(e,e+(t-4));return new Y.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyOutResponse")}parseCopyMessage(e,t,n,i){this.reader.
setBuffer(e,n);let s=this.reader.byte()!==0,a=this.reader.int16(),u=new Y.CopyResponse(
t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=this.reader.int16();return u}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.
reader.cstring();return new Y.NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new Y.RowDescriptionMessage(
t,i);for(let a=0;a<i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.
reader.cstring(),t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),
s=this.reader.int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"bi\
nary";return new Y.Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new Y.ParameterDescriptionMessage(
t,i);for(let a=0;a<i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<
i;a++){let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new Y.
DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.cstring(),s=this.reader.cstring();return new Y.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),
s=this.reader.int32();return new Y.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s={name:"authenticationOk",
length:t};switch(i){case 0:break;case 3:s.length===8&&(s.name="authenticationCle\
artextPassword");break;case 5:if(s.length===12){s.name="authenticationMD5Passwor\
d";let u=this.reader.bytes(4);return new Y.AuthenticationMD5Password(t,u)}break;case 10:
s.name="authenticationSASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&
s.mechanisms.push(a);while(a);break;case 11:s.name="authenticationSASLContinue",
s.data=this.reader.string(t-8);break;case 12:s.name="authenticationSASLFinal",s.
data=this.reader.string(t-8);break;default:throw new Error("Unknown authenticati\
onOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(
e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=this.reader.cstring(),
a=this.reader.string(1);let u=s.M,c=i==="notice"?new Y.NoticeMessage(t,u):new Y.
DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.hint=s.H,c.
position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.schema=s.s,
c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.line=s.L,c.
routine=s.R,c}};nr.Parser=Pn});var Bn=R(Ne=>{"use strict";y();Object.defineProperty(Ne,"__esModule",{value:!0});
Ne.DatabaseError=Ne.serialize=Ne.parse=void 0;var eh=Cn();Object.defineProperty(
Ne,"DatabaseError",{enumerable:!0,get:o(function(){return eh.DatabaseError},"get")});
var th=ia();Object.defineProperty(Ne,"serialize",{enumerable:!0,get:o(function(){
return th.serialize},"get")});var rh=ua();function nh(r,e){let t=new rh.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}o(nh,"parse");Ne.
parse=nh});var ca={};me(ca,{connect:()=>ih});function ih({socket:r,servername:e}){return r.
startTls(e),r}var la=ye(()=>{"use strict";y();o(ih,"connect")});var Nn=R((pp,da)=>{"use strict";y();var ha=(Zt(),te(ta)),sh=Be().EventEmitter,{parse:ah,
serialize:ne}=Bn(),fa=ne.flush(),oh=ne.sync(),uh=ne.end(),Rn=class extends sh{static{
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
 establishing an SSL connection"))}var u=(la(),te(ca));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),ha.isIP(t)===
0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),ah(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(ne.requestSsl())}startup(e){this.stream.write(ne.startup(e))}cancel(e,t){
this._send(ne.cancel(e,t))}password(e){this._send(ne.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(ne.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(ne.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(ne.query(e))}parse(e){this._send(ne.
parse(e))}bind(e){this._send(ne.bind(e))}execute(e){this._send(ne.execute(e))}flush(){
this.stream.writable&&this.stream.write(fa)}sync(){this._ending=!0,this._send(fa),
this._send(oh)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this.
_ending=!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(uh,()=>{this.stream.end()})}close(e){this._send(ne.close(e))}describe(e){
this._send(ne.describe(e))}sendCopyFromChunk(e){this._send(ne.copyData(e))}endCopyFrom(){
this._send(ne.copyDone())}sendCopyFail(e){this._send(ne.copyFail(e))}};da.exports=
Rn});var ma=R((gp,ya)=>{"use strict";y();var ch=Be().EventEmitter,wp=(pt(),te(dt)),lh=vt(),
Mn=Cs(),hh=Ds(),fh=Jt(),dh=Yt(),pa=Zs(),ph=At(),yh=Nn(),ir=class extends ch{static{
o(this,"Client")}constructor(e){super(),this.connectionParameters=new dh(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||_.Promise,this._types=new fh(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new yh({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||ph.binary,this.processID=null,
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
"error",n)}):this.password!==null?e():hh(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=lh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=Mn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
Mn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){Mn.finalizeSession(this.saslSession,
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
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,p)=>f?h(f):l(p)}))),
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
_Promise(t=>{this.connection.once("end",t)})}};ir.Query=pa;ya.exports=ir});var ba=R((Ep,Sa)=>{"use strict";y();var mh=Be().EventEmitter,wa=o(function(){},"\
NOOP"),ga=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Dn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},rt=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function wh(){throw new Error("Release called on client which \
has already been released to the pool.")}o(wh,"throwOnDoubleRelease");function sr(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(sr,"promisify");function gh(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(gh,"makeIdleListener");var Fn=class extends mh{static{o(this,"P\
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
this._clients.push(t);let n=gh(this,t);this.log("checking client timeout");let i,
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
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&wh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Dn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=sr(this.Promise,e);
return T(function(){return s.callback(new Error("Passing a function as the first\
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
length}};Sa.exports=Fn});var Ea={};me(Ea,{default:()=>Sh});var Sh,xa=ye(()=>{"use strict";y();Sh={}});var Aa=R((Cp,bh)=>{bh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var _a=R((_p,Ca)=>{"use strict";y();var va=Be().EventEmitter,Eh=(pt(),te(dt)),qn=vt(),
nt=Ca.exports=function(r,e,t){va.call(this),r=qn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Eh.inherits(
nt,va);var xh={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};nt.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=xh[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};nt.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};nt.prototype.catch=function(r){return this._getPromise().
catch(r)};nt.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};nt.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,T(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(S.domain&&(t=S.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(qn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(qn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Ia=R((Ip,La)=>{"use strict";y();var Ah=(xa(),te(Ea)),vh=Jt(),Lp=Aa(),Ta=Be().
EventEmitter,Ch=(pt(),te(dt)),_h=Yt(),Ua=_a(),pe=La.exports=function(r){Ta.call(
this),r=r||{},this._Promise=r.Promise||_.Promise,this._types=new vh(r.types),this.
native=new Ah({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new _h(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};pe.Query=Ua;Ch.inherits(pe,Ta);pe.prototype._errorAllQueries=
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
query_timeout,n=new Ua(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
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
_types.getTypeParser(r,e)}});var kn=R((Rp,Pa)=>{"use strict";y();Pa.exports=Ia()});var ar=R((Dp,_t)=>{"use strict";y();var Th=ma(),Uh=At(),Lh=Nn(),Ih=ba(),{DatabaseError:Ph}=Bn(),
Bh=o(r=>class extends Ih{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),On=o(function(r){this.defaults=Uh,this.Client=r,this.Query=this.Client.
Query,this.Pool=Bh(this.Client),this._pools=[],this.Connection=Lh,this.types=xt(),
this.DatabaseError=Ph},"PG");typeof S.env.NODE_PG_FORCE_NATIVE<"u"?_t.exports=new On(
kn()):(_t.exports=new On(Th),Object.defineProperty(_t.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new On(kn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(_t.exports,"native",{value:r}),r}}))});y();var Lr={};me(Lr,{SocketReadQueue:()=>ou,TrustedCert:()=>ht,WebSocketReadQueue:()=>au,
base64Decode:()=>Si,hexFromU8:()=>X,stableStringify:()=>uu,startTls:()=>su,u8FromHex:()=>Ie});
y();var Po=Object.defineProperty,Bo=o((r,e,t)=>e in r?Po(r,e,{enumerable:!0,configurable:!0,
writable:!0,value:t}):r[e]=t,"re"),j=o((r,e,t)=>Bo(r,typeof e!="symbol"?e+"":e,t),
"u");function oe(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(oe,"U");function kt(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(kt,"Z");var Ro=class{static{
o(this,"yt")}constructor(){j(this,"length"),j(this,"data"),this.length=0,this.data=
new Uint8Array}append(r){let e=r.length;if(this.length+e>this.data.length){let t=this.
data;this.data=new Uint8Array(this.length*2+e),this.data.set(t)}this.data.set(r,
this.length),this.length+=r.length}getData(){return this.data.subarray(0,this.length)}},
Ar="\xB7\xB7 ",fi=new TextEncoder,No=new TextDecoder,Ae=class{static{o(this,"D")}constructor(r){
j(this,"offset"),j(this,"dataView"),j(this,"data"),j(this,"comments"),j(this,"in\
dents"),j(this,"indent"),this.offset=0,this.data=typeof r=="number"?new Uint8Array(
r):r,this.dataView=new DataView(this.data.buffer,this.data.byteOffset,this.data.
byteLength),this.comments={},this.indents={},this.indent=0}extend(r){let e=typeof r==
"number"?new Uint8Array(r):r;this.data=oe(this.data,e),this.dataView=new DataView(
this.data.buffer,this.data.byteOffset,this.data.byteLength)}remaining(){return this.
data.length-this.offset}subarray(r){return this.data.subarray(this.offset,this.offset+=
r)}skip(r,e){return this.offset+=r,e&&this.comment(e),this}comment(r,e=this.offset){
throw new Error("No comments should be emitted outside of chatty mode")}lengthComment(r,e,t=!1){
return r===1?`${r} byte${e?` of ${e}`:""} ${t?"starts here":"follows"}`:`${r===0?
"no":r} bytes${e?` of ${e}`:""} ${t?"start here":"follow"}`}readBytes(r){return this.
data.slice(this.offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);
return No.decode(e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==
0;)r++;let e=this.readUTF8String(r-this.offset);return this.expectUint8(0,"end o\
f string"),e}readUint8(r){let e=this.dataView.getUint8(this.offset);return this.
offset+=1,e}readUint16(r){let e=this.dataView.getUint16(this.offset);return this.
offset+=2,e}readUint24(r){let e=this.readUint8(),t=this.readUint16();return(e<<16)+
t}readUint32(r){let e=this.dataView.getUint32(this.offset);return this.offset+=4,
e}expectBytes(r,e){let t=this.readBytes(r.length);if(!kt(t,r))throw new Error("U\
nexpected bytes")}expectUint8(r,e){let t=this.readUint8();if(t!==r)throw new Error(
`Expected ${r}, got ${t}`)}expectUint16(r,e){let t=this.readUint16();if(t!==r)throw new Error(
`Expected ${r}, got ${t}`)}expectUint24(r,e){let t=this.readUint24();if(t!==r)throw new Error(
`Expected ${r}, got ${t}`)}expectUint32(r,e){let t=this.readUint32();if(t!==r)throw new Error(
`Expected ${r}, got ${t}`)}expectLength(r,e=1){let t=this.offset,n=t+r;if(n>this.
data.length)throw new Error("Expected length exceeds remaining data length");return this.
indent+=e,this.indents[t]=this.indent,[()=>{if(this.indent-=e,this.indents[this.
offset]=this.indent,this.offset!==n)throw new Error(`${r} bytes expected but ${this.
offset-t} read`)},()=>n-this.offset]}expectLengthUint8(r){let e=this.readUint8();
return this.expectLength(e)}expectLengthUint16(r){let e=this.readUint16();return this.
expectLength(e)}expectLengthUint24(r){let e=this.readUint24();return this.expectLength(
e)}expectLengthUint32(r){let e=this.readUint32();return this.expectLength(e)}expectLengthUint8Incl(r){
let e=this.readUint8();return this.expectLength(e-1)}expectLengthUint16Incl(r){let e=this.
readUint16();return this.expectLength(e-2)}expectLengthUint24Incl(r){let e=this.
readUint24();return this.expectLength(e-3)}expectLengthUint32Incl(r){let e=this.
readUint32();return this.expectLength(e-4)}writeBytes(r){return this.data.set(r,
this.offset),this.offset+=r.length,this}writeUTF8String(r){let e=fi.encode(r);return this.
writeBytes(e),this}writeUTF8StringNullTerminated(r){let e=fi.encode(r);return this.
writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){return this.dataView.setUint8(
this.offset,r),this.offset+=1,this}writeUint16(r,e){return this.dataView.setUint16(
this.offset,r),this.offset+=2,this}writeUint24(r,e){return this.writeUint8((r&16711680)>>
16),this.writeUint16(r&65535,e),this}writeUint32(r,e){return this.dataView.setUint32(
this.offset,r),this.offset+=4,this}_writeLengthGeneric(r,e,t){let n=this.offset;
this.offset+=r;let i=this.offset;return this.indent+=1,this.indents[i]=this.indent,
()=>{let s=this.offset-(e?n:i);if(r===1)this.dataView.setUint8(n,s);else if(r===
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
void 0?Ar.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${Ar.repeat(t)}`)}return e}};function Mo(r,e,t,n=!0){let i=new Ae(1024);i.writeUint8(
22,0),i.writeUint16(769,0);let s=i.writeLengthUint16("TLS record");i.writeUint8(
1,0);let a=i.writeLengthUint24();i.writeUint16(771,0),A.getRandomValues(i.subarray(
32));let u=i.writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);
i.writeUint16(4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.
writeLengthUint16(0);if(n){i.writeUint16(0,0);let B=i.writeLengthUint16(0),F=i.writeLengthUint16(
0);i.writeUint8(0,0);let H=i.writeLengthUint16(0);i.writeUTF8String(r),H(),F(),B()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),p=i.writeLengthUint8(0);i.writeUint8(
0,0),p(),f(),i.writeUint16(10,0);let m=i.writeLengthUint16(0),x=i.writeLengthUint16(
0);i.writeUint16(23,0),x(),m(),i.writeUint16(13,0);let L=i.writeLengthUint16(0),
v=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),v(),L(),i.writeUint16(
43,0);let C=i.writeLengthUint16(0),b=i.writeLengthUint8(0);i.writeUint16(772,0),
b(),C(),i.writeUint16(51,0);let g=i.writeLengthUint16(0),E=i.writeLengthUint16(0);
i.writeUint16(23,0);let M=i.writeLengthUint16(0);return i.writeBytes(e),M(),E(),
g(),h(),a(),s(),i}o(Mo,"bt");function Ie(r){return new Uint8Array(Array.from(r.matchAll(
/[0-9a-f]/g)).map(e=>parseInt(e[0],16)))}o(Ie,"z");function X(r,e=""){return[...r].
map(t=>t.toString(16).padStart(2,"0")).join(e)}o(X,"f");function Do(r,e){let t,n,
[i]=r.expectLength(r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(
0);r.expectUint16(771,0);let a=r.readBytes(32);if(kt(a,[207,33,173,116,229,154,97,
17,190,29,140,2,30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,
51,156]))throw new Error("Unexpected HelloRetryRequest");r.expectUint8(e.length,
0),r.expectBytes(e,0),r.expectUint16(4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(
0);for(;c()>0;){let l=r.readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(
772,0),n=!0;else if(l===51){r.expectUint16(23,0);let[f,p]=r.expectLengthUint16("\
key share"),m=p();if(m!==65)throw new Error(`Expected 65 bytes of key share, but\
 got ${m}`);t=r.readBytes(m),f()}else throw new Error(`Unexpected extension 0x${X(
[l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("No TLS version provided");if(t===
void 0)throw new Error("No key provided");return t}o(Do,"At");var Yh=new RegExp(
`  .+|^(${Ar})+`,"gm"),ct=16384,Fo=ct+1+255;async function vr(r,e,t=ct){let n=await r(
5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record header truncat\
ed");let i=new Ae(n),s=i.readUint8();if(s<20||s>24)throw new Error(`Illegal TLS \
record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(`Unexpect\
ed TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.toString(
16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (middlebox co\
mpatibility)");let a=i.readUint16();if(a>t)throw new Error(`Record too long: ${a}\
 bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("TLS record \
content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}o(vr,
"mt");async function Cr(r,e,t){let n=await vr(r,23,Fo);if(n===void 0)return;let i=new Ae(
n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),i.skip(16,0),
s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===0;)
u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (all\
 zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&l[1]===
0)){if(c===22&&l[0]===4)return Cr(r,e,t);if(t!==void 0&&c!==t)throw new Error(`U\
nexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.toString(
16).padStart(2,"0")})`);return l}}o(Cr,"gt");async function qo(r,e,t){let n=oe(r,
[t]),i=5,s=n.length+16,a=new Ae(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.writeUint16(
s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.process(n,
16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(l.length-
16)),u(),a.array()}o(qo,"ce");async function di(r,e,t){let n=Math.ceil(r.length/
ct),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*ct,(s+1)*ct),u=await qo(a,e,t);
i.push(u)}return i}o(di,"Ct");var q=A.subtle,gi=new TextEncoder;async function _r(r,e,t){
let n=await q.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await q.sign("HMAC",n,e));return i}o(_r,"ut");async function ko(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await q.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=oe(c,e,[l+1]),f=await q.sign("HMAC",u,h),p=new Uint8Array(f);a.set(p,i*l),
c=p}return a.subarray(0,t)}o(ko,"oe");var pi=gi.encode("tls13 ");async function ue(r,e,t,n,i){
let s=gi.encode(e),a=oe([(n&65280)>>8,n&255],[pi.length+s.length],pi,s,[t.length],
t);return ko(r,a,n,i)}o(ue,"I");async function Oo(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await q.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await q.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await q.digest("S\
HA-256",t),f=new Uint8Array(h),p=await _r(new Uint8Array(1),a,n),m=await q.digest(
`SHA-${n}`,new Uint8Array(0)),x=new Uint8Array(m),L=await ue(p,"derived",x,s,n),
v=await _r(L,l,n),C=await ue(v,"c hs traffic",f,s,n),b=await ue(v,"s hs traffic",
f,s,n),g=await ue(C,"key",new Uint8Array(0),i,n),E=await ue(b,"key",new Uint8Array(
0),i,n),M=await ue(C,"iv",new Uint8Array(0),12,n),B=await ue(b,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:E,serverHandshakeIV:B,clientHandshakeKey:g,clientHandshakeIV:M,
handshakeSecret:v,clientSecret:C,serverSecret:b}}o(Oo,"Pt");async function Qo(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await q.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ue(r,"derived",u,i,t),l=await _r(c,s,t),h=await ue(l,"c ap traffic",e,
i,t),f=await ue(l,"s ap traffic",e,i,t),p=await ue(h,"key",new Uint8Array(0),n,t),
m=await ue(f,"key",new Uint8Array(0),n,t),x=await ue(h,"iv",new Uint8Array(0),12,
t),L=await ue(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:m,serverApplicationIV:L,
clientApplicationKey:p,clientApplicationIV:x}}o(Qo,"Ot");var Ft=class{static{o(this,
"tt")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t,j(this,"records\
Processed",0n),j(this,"priorPromise",Promise.resolve(new Uint8Array))}async process(r,e,t){
return this.sequence(this.processUnsequenced(r,e,t))}async sequence(r){let e=this.
priorPromise.then(()=>r);return this.priorPromise=e,e}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){let f=n>>(h<<3n);if(f===0n)break;
i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"AES-GCM",iv:i,tagLength:u,additionalData:t},
l=await q[this.mode](c,this.key,r);return new Uint8Array(l)}};function $o(r){throw new Error(
`Invalid base 64 character: ${String.fromCharCode(r)}`)}o($o,"he");function jo(r){
return r>64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?
64:$o(r)}o(jo,"de");function Si(r,e=jo,t=!0){let n=r.length;t&&(r+="=".repeat(n%
4));let i=0,s=0,a=64,u=64,c=64,l=64,h=new Uint8Array(n*.75);for(;i<n;)a=e(r.charCodeAt(
i++)),u=e(r.charCodeAt(i++)),c=e(r.charCodeAt(i++)),l=e(r.charCodeAt(i++)),h[s++]=
a<<2|u>>4,h[s++]=(u&15)<<4|c>>2,h[s++]=(c&3)<<6|l;let f=u===64?0:c===64?2:l===64?
1:0;return h.subarray(0,s-f)}o(Si,"vt");var lt=class extends Ae{static{o(this,"M")}readASN1Length(r){
let e=this.readUint8();if(e<128)return e;let t=e&127,n=0;if(t===1)return this.readUint8(
n);if(t===2)return this.readUint16(n);if(t===3)return this.readUint24(n);if(t===
4)return this.readUint32(n);throw new Error(`ASN.1 length fields are only suppor\
ted up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){let e=this.readASN1Length(
r);return this.expectLength(e)}readASN1OID(r){let[e,t]=this.expectASN1Length(0),
n=this.readUint8(),i=`${Math.floor(n/40)}.${n%40}`;for(;t()>0;){let s=0;for(;;){
let a=this.readUint8();if(s<<=7,s+=a&127,a<128)break}i+=`.${s}`}return e(),i}readASN1Boolean(r){
let[e,t]=this.expectASN1Length(0),n=t();if(n!==1)throw new Error(`Boolean has we\
ird length: ${n}`);let i=this.readUint8(),s;if(i===255)s=!0;else if(i===0)s=!1;else
throw new Error(`Boolean has weird value: 0x${X([i])}`);return e(),s}readASN1UTCTime(){
let[r,e]=this.expectASN1Length(0),t=this.readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);
if(!t)throw new Error("Unrecognised ASN.1 UTC time format");let[,n,i,s,a,u,c]=t,
l=parseInt(n,10),h=l+(l>=50?1900:2e3),f=new Date(`${h}-${i}-${s}T${a}:${u}:${c}Z`);
return r(),f}readASN1GeneralizedTime(){let[r,e]=this.expectASN1Length(0),t=this.
readUTF8String(e()).match(/^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?([0-9]{2})?([.][0-9]+)?(Z)?([-+][0-9]+)?$/);
if(!t)throw new Error("Unrecognised ASN.1 generalized time format");let[,n,i,s,a,
u,c,l,h,f]=t;if(c===void 0&&l!==void 0)throw new Error("Invalid ASN.1 generalize\
d time format (fraction without seconds)");if(h!==void 0&&f!==void 0)throw new Error(
"Invalid ASN.1 generalized time format (Z and timezone)");let p=new Date(`${n}-${i}\
-${s}T${a}:${u??"00"}:${c??"00"}${l??""}${f??"Z"}`);return r(),p}readASN1BitString(){
let[r,e]=this.expectASN1Length(0),t=this.readUint8(0),n=e(),i=this.readBytes(n);
if(t>7)throw new Error(`Invalid right pad value: ${t}`);if(t>0){let s=8-t;for(let a=n-
1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>t}return r(),i}},br=1,qt=2,ae=48,
Ho=49,Ge=6,Ko=19,Wo=20,Go=12,Vo=22,yi=23,mi=24,Er=5,Le=4,xr=3,zo=163,We=128,Jo={
"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2.5.4\
.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.840.1\
13549.1.9.1":"MAIL","2.5.4.5":"SERIALNUMBER"};function Yo(r){let{length:e}=r;if(e>
4)throw new Error(`Bit string length ${e} would overflow JS bit operators`);let t=0,
n=0;for(let i=r.length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o(Yo,"Bt");function wi(r,e){
let t={};r.expectUint8(ae,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(
Ho,0);let[s]=r.expectASN1Length(0);r.expectUint8(ae,0);let[a]=r.expectASN1Length(
0);r.expectUint8(Ge,0);let u=r.readASN1OID(),c=Jo[u]??u,l=r.readUint8();if(l!==Ko&&
l!==Go&&l!==Vo&&l!==Wo)throw new Error(`Unexpected item type in certificate ${e}\
: 0x${X([l])}`);let[h,f]=r.expectASN1Length(0),p=r.readUTF8String(f());h(),a(),s();
let m=t[c];m===void 0?t[c]=p:typeof m=="string"?t[c]=[m,p]:m.push(p)}return n(),
t}o(wi,"It");function Zo(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){
let s=r.readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(
u()):c=r.readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o(Zo,"jt");function Xo(r){
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
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(Xo,"Mt");function bi(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=bi(t,e)}),e}
o(bi,"Vt");function eu(r){return bi(r).join(" / ")}o(eu,"_t");var tu=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],Tr=class Ur{static{o(this,"\
r")}constructor(e){if(j(this,"serialNumber"),j(this,"algorithm"),j(this,"issuer"),
j(this,"validityPeriod"),j(this,"subject"),j(this,"publicKey"),j(this,"signature"),
j(this,"keyUsage"),j(this,"subjectAltNames"),j(this,"extKeyUsage"),j(this,"autho\
rityKeyIdentifier"),j(this,"subjectKeyIdentifier"),j(this,"basicConstraints"),j(
this,"signedData"),e instanceof lt||e instanceof Uint8Array){let t=e instanceof lt?
e:new lt(e);t.expectUint8(ae,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(
ae,0);let[s]=t.expectASN1Length(0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(
qt,0);let[a,u]=t.expectASN1Length(0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(
ae,0);let[c,l]=t.expectASN1Length(0);t.expectUint8(Ge,0),this.algorithm=t.readASN1OID(),
l()>0&&(t.expectUint8(Er,0),t.expectUint8(0,0)),c(),this.issuer=wi(t,"issuer");let h,
f;t.expectUint8(ae,0);let[p]=t.expectASN1Length(0),m=t.readUint8();if(m===yi)h=t.
readASN1UTCTime();else if(m===mi)h=t.readASN1GeneralizedTime();else throw new Error(
`Unexpected validity start type 0x${X([m])}`);let x=t.readUint8();if(x===yi)f=t.
readASN1UTCTime();else if(x===mi)f=t.readASN1GeneralizedTime();else throw new Error(
`Unexpected validity end type 0x${X([x])}`);this.validityPeriod={notBefore:h,notAfter:f},
p(),this.subject=wi(t,"subject");let L=t.offset;t.expectUint8(ae,0);let[v]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[C,b]=t.expectASN1Length(0),g=[];for(;b()>0;){let G=t.
readUint8();if(G===Ge){let ie=t.readASN1OID();g.push(ie)}else G===Er&&t.expectUint8(
0,0)}C(),t.expectUint8(xr,0);let E=t.readASN1BitString();this.publicKey={identifiers:g,
data:E,all:t.data.subarray(L,t.offset)},v(),t.expectUint8(zo,0);let[M]=t.expectASN1Length();
t.expectUint8(ae,0);let[B,F]=t.expectASN1Length(0);for(;F()>0;){t.expectUint8(ae,
0);let[G,ie]=t.expectASN1Length();t.expectUint8(Ge,0);let ee=t.readASN1OID();if(ee===
"2.5.29.17"){t.expectUint8(Le,0);let[K]=t.expectASN1Length(0);t.expectUint8(ae,0);
let $=Zo(t,We);this.subjectAltNames=$.filter(Q=>Q.type===(2|We)).map(Q=>Q.name),
K()}else if(ee==="2.5.29.15"){let K,$=t.readUint8();if($===br&&(K=t.readASN1Boolean(
0),$=t.readUint8()),$!==Le)throw new Error(`Expected 0x${X([Le])}, got 0x${X([$])}`);
let[Q]=t.expectASN1Length(0);t.expectUint8(xr,0);let W=t.readASN1BitString(),k=Yo(
W),P=new Set(tu.filter((N,V)=>k&1<<V));Q(),this.keyUsage={critical:K,usages:P}}else if(ee===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(Le,0);let[K]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[$,Q]=t.expectASN1Length(0);for(;Q()>0;){t.expectUint8(Ge,
0);let W=t.readASN1OID();W==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
W==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}$(),K()}else if(ee==="2\
.5.29.35"){t.expectUint8(Le,0);let[K]=t.expectASN1Length(0);t.expectUint8(ae,0);
let[$,Q]=t.expectASN1Length(0);for(;Q()>0;){let W=t.readUint8();if(W===(We|0)){let[
k,P]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(P()),k()}else if(W===
(We|1)){let[k,P]=t.expectASN1Length(0);t.skip(P(),0),k()}else if(W===(We|2)){let[
k,P]=t.expectASN1Length(0);t.skip(P(),0),k()}else if(W===(We|33)){let[k,P]=t.expectASN1Length(
0);t.skip(P(),0),k()}else throw new Error(`Unexpected data type ${W} in authorit\
yKeyIdentifier certificate extension`)}$(),K()}else if(ee==="2.5.29.14"){t.expectUint8(
Le,0);let[K]=t.expectASN1Length(0);t.expectUint8(Le,0);let[$,Q]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(Q()),$(),K()}else if(ee==="2.5.29.19"){
let K,$=t.readUint8();if($===br&&(K=t.readASN1Boolean(0),$=t.readUint8()),$!==Le)
throw new Error("Unexpected type in certificate basic constraints");let[Q]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[W,k]=t.expectASN1Length(),P;k()>0&&(t.expectUint8(br,
0),P=t.readASN1Boolean(0));let N;if(k()>0){t.expectUint8(qt,0);let V=t.readASN1Length(
0);if(N=V===1?t.readUint8():V===2?t.readUint16():V===3?t.readUint24():void 0,N===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}W(),Q(),this.basicConstraints={critical:K,ca:P,pathLength:N}}else t.
skip(ie(),0);G()}B(),M(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
ae,0);let[H,Z]=t.expectASN1Length(0);t.expectUint8(Ge,0);let D=t.readASN1OID(0);
if(Z()>0&&(t.expectUint8(Er,0),t.expectUint8(0,0)),H(),D!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside(${this.algorithm}) \
and out(${D})`);t.expectUint8(xr,0),this.signature=t.readASN1BitString(),n()}else
this.serialNumber=Ie(e.serialNumber),this.algorithm=e.algorithm,this.issuer=e.issuer,
this.validityPeriod={notBefore:new Date(e.validityPeriod.notBefore),notAfter:new Date(
e.validityPeriod.notAfter)},this.subject=e.subject,this.publicKey={identifiers:e.
publicKey.identifiers,data:Ie(e.publicKey.data),all:Ie(e.publicKey.all)},this.signature=
Ie(e.signature),this.keyUsage={critical:e.keyUsage.critical,usages:new Set(e.keyUsage.
usages)},this.subjectAltNames=e.subjectAltNames,this.extKeyUsage=e.extKeyUsage,e.
authorityKeyIdentifier&&(this.authorityKeyIdentifier=Ie(e.authorityKeyIdentifier)),
e.subjectKeyIdentifier&&(this.subjectKeyIdentifier=Ie(e.subjectKeyIdentifier)),this.
basicConstraints=e.basicConstraints,this.signedData=Ie(e.signedData)}static distinguishedNamesAreEqual(e,t){
return this.stringFromDistinguishedName(e)===this.stringFromDistinguishedName(t)}static stringFromDistinguishedName(e){
return Object.entries(e).map(([t,n])=>typeof n=="string"?`${t}=${n.trim().replace(
/[\\,]/g,"\\$&")}`:n.map(i=>`${t}=${i.trim().replace(/[\\,]/g,"\\$&")}`).join(",\
 ")).join(", ")}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;return(this.
subjectAltNames??[]).find(n=>{let i=n,s=e;if(t.test(e)&&t.test(i)&&i.startsWith(
"*.")&&(i=i.slice(1),s=s.slice(s.indexOf("."))),i===s)return!0})}isValidAtMoment(e=new Date){
return e>=this.validityPeriod.notBefore&&e<=this.validityPeriod.notAfter}description(){
return"subject: "+Ur.stringFromDistinguishedName(this.subject)+(this.subjectAltNames?
`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${X(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+Ur.stringFromDistinguishedName(this.issuer)+(this.authorityKeyIdentifier?
`
authority key id: ${X(this.authorityKeyIdentifier," ")}`:"")+`
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
signature algorithm: `+eu(Xo(this.algorithm))}toJSON(){return{serialNumber:X(this.
serialNumber),algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:X(this.
publicKey.data),all:X(this.publicKey.all)},signature:X(this.signature),keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
X(this.authorityKeyIdentifier),subjectKeyIdentifier:this.subjectKeyIdentifier&&X(
this.subjectKeyIdentifier),basicConstraints:this.basicConstraints,signedData:X(this.
signedData)}}static uint8ArraysFromPEM(e){let t="[A-Z0-9 ]+",n=new RegExp(`-----\
BEGIN ${t}-----([a-zA-Z0-9=+\\/\\n\\r]+)-----END ${t}-----`,"g"),i=[],s=null;for(;s=
n.exec(e);){let a=s[1].replace(/[\r\n]/g,""),u=Si(a);i.push(u)}return i}static fromPEM(e){
return this.uint8ArraysFromPEM(e).map(t=>new this(t))}},ht=class extends Tr{static{
o(this,"Q")}static databaseFromPEM(r){let e=this.uint8ArraysFromPEM(r),t=[0],n={},
i=new Ro;for(let a of e){let u=new this(a),c=t.length-1;u.subjectKeyIdentifier&&
(n[X(u.subjectKeyIdentifier)]=c),n[this.stringFromDistinguishedName(u.subject)]=
c,i.append(a),t[t.length]=t[c]+a.length}let s=i.getData();return{index:{offsets:t,
subjects:n},data:s}}static findInDatabase(r,e){let{index:{subjects:t,offsets:n},
data:i}=e,s=typeof r=="string"?r:Tr.stringFromDistinguishedName(r),a=t[s];if(a===
void 0)return;let u=n[a],c=n[a+1],l=i.subarray(u,c);return new this(l)}};async function Ei(r,e,t,n,i){
r.expectUint8(ae,0);let[s]=r.expectASN1Length(0);r.expectUint8(qt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(qt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let p=o((v,C)=>v.length>C?v.subarray(v.length-C):v.
length<C?oe(new Uint8Array(C-v.length),v):v,"m"),m=n==="P-256"?32:48,x=oe(p(c,m),
p(f,m)),L=await q.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await q.verify({name:"ECDSA",hash:i},L,x,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}o(Ei,"St");async function ru(r,e,t,n=!0,i=!0){
for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u=0,c=e.length;u<
c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=ht.findInDatabase(
l.issuer,t):f=ht.findInDatabase(X(h),t),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let p=f instanceof ht;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:m}=f.basicConstraints;if(m!==void 0&&m<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let x=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",L=f.publicKey.identifiers,v=L.includes("1.2.840.10045.3.1.7")?"P-256":L.includes(
"1.3.132.0.34")?"P-384":void 0;if(v===void 0)throw new Error("Unsupported signin\
g key curve");let C=new lt(l.signature);await Ei(C,f.publicKey.all,l.signedData,
v,x)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let x=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",L=await q.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:x},!1,["verify"]);
if(await q.verify({name:"RSASSA-PKCS1-v1_5"},L,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(p){a=!0;break}}return a}o(ru,"zt");var nu=new TextEncoder;
async function iu(r,e,t,n,i,s=!0,a=!0){let u=new lt(await e());u.expectUint8(8,0);
let[c]=u.expectLengthUint24(),[l,h]=u.expectLengthUint16(0);for(;h()>0;){let P=u.
readUint16(0);if(P===0)u.expectUint16(0,0);else if(P===10){let[N]=u.expectLengthUint16(
0),[V,le]=u.expectLengthUint16(0);for(;le()>0;){let Fe=u.readUint16()}V(),N()}else
throw new Error(`Unsupported server encrypted extension type 0x${X([P]).padStart(
4,"0")}`)}l(),c(),u.remaining()===0&&u.extend(await e());let f=!1,p=u.readUint8();
if(p===13){f=!0;let[P]=u.expectLengthUint24("certificate request data");u.expectUint8(
0,0);let[N,V]=u.expectLengthUint16("certificate request extensions");u.skip(V(),
0),N(),P(),u.remaining()===0&&u.extend(await e()),p=u.readUint8()}if(p!==11)throw new Error(
`Unexpected handshake message type 0x${X([p])}`);let[m]=u.expectLengthUint24(0);
u.expectUint8(0,0);let[x,L]=u.expectLengthUint24(0),v=[];for(;L()>0;){let[P]=u.expectLengthUint24(
0),N=new Tr(u);v.push(N),P();let[V,le]=u.expectLengthUint16("certificate extensi\
ons");u.skip(le()),V()}if(x(),m(),v.length===0)throw new Error("No certificates \
supplied");let C=v[0],b=u.data.subarray(0,u.offset),g=oe(n,b),E=await q.digest("\
SHA-256",g),M=new Uint8Array(E),B=oe(nu.encode(" ".repeat(64)+"TLS 1.3, server C\
ertificateVerify"),[0],M);u.remaining()===0&&u.extend(await e()),u.expectUint8(15,
0);let[F]=u.expectLengthUint24(0),H=u.readUint16();if(H===1027){let[P]=u.expectLengthUint16();
await Ei(u,C.publicKey.all,B,"P-256","SHA-256"),P()}else if(H===2052){let[P,N]=u.
expectLengthUint16(),V=u.subarray(N());P();let le=await q.importKey("spki",C.publicKey.
all,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]);if(await q.verify({name:"RSA-\
PSS",saltLength:32},le,V,B)!==!0)throw new Error("RSA-PSS-RSAE-SHA256 certificat\
e verify failed")}else throw new Error(`Unsupported certificate verify signature\
 type 0x${X([H]).padStart(4,"0")}`);F();let Z=u.data.subarray(0,u.offset),D=oe(n,
Z),G=await ue(t,"finished",new Uint8Array(0),32,256),ie=await q.digest("SHA-256",
D),ee=await q.importKey("raw",G,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),
K=await q.sign("HMAC",ee,ie),$=new Uint8Array(K);u.remaining()===0&&u.extend(await e()),
u.expectUint8(20,0);let[Q,W]=u.expectLengthUint24(0),k=u.readBytes(W());if(Q(),u.
remaining()!==0)throw new Error("Unexpected extra bytes in server handshake");if(kt(
k,$)!==!0)throw new Error("Invalid server verify hash");if(!await ru(r,v,i,s,a))
throw new Error("Validated certificate chain did not end in a trusted root");return[
u.data,f]}o(iu,"Gt");async function su(r,e,t,n,{useSNI:i,requireServerTlsExtKeyUsage:s,
requireDigitalSigKeyUsage:a,writePreData:u,expectPreData:c,commentPreData:l}={}){
i??(i=!0),s??(s=!0),a??(a=!0),typeof e=="string"&&(e=ht.databaseFromPEM(e));let h=await q.
generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),f=await q.
exportKey("raw",h.publicKey),p=new Uint8Array(f),m=new Uint8Array(32);A.getRandomValues(
m);let x=Mo(r,p,m,i).array(),L=u?oe(u,x):x;if(n(L),c){let se=await t(c.length);if(!se||
!kt(se,c))throw new Error("Pre data did not match expectation")}let v=await vr(t,
22);if(v===void 0)throw new Error("Connection closed while awaiting server hello");
let C=new Ae(v.content),b=Do(C,m),g=await vr(t,20);if(g===void 0)throw new Error(
"Connection closed awaiting server cipher change");let E=new Ae(g.content),[M]=E.
expectLength(1);E.expectUint8(1,0),M();let B=x.subarray(5),F=v.content,H=oe(B,F),
Z=await Oo(b,h.privateKey,H,256,16),D=await q.importKey("raw",Z.serverHandshakeKey,
{name:"AES-GCM"},!1,["decrypt"]),G=new Ft("decrypt",D,Z.serverHandshakeIV),ie=await q.
importKey("raw",Z.clientHandshakeKey,{name:"AES-GCM"},!1,["encrypt"]),ee=new Ft(
"encrypt",ie,Z.clientHandshakeIV),K=o(async()=>{let se=await Cr(t,G,22);if(se===
void 0)throw new Error("Premature end of encrypted server handshake");return se},
"S"),[$,Q]=await iu(r,K,Z.serverSecret,H,e,s,a),W=new Ae(6);W.writeUint8(20,0),W.
writeUint16(771,0);let k=W.writeLengthUint16();W.writeUint8(1,0),k();let P=W.array(),
N=new Uint8Array(0);if(Q){let se=new Ae(8);se.writeUint8(11,0);let at=se.writeLengthUint24(
"client certificate data");se.writeUint8(0,0),se.writeUint24(0,0),at(),N=se.array()}
let V=oe(H,$,N),le=await q.digest("SHA-256",V),Fe=new Uint8Array(le),ur=await ue(
Z.clientSecret,"finished",new Uint8Array(0),32,256),cr=await q.importKey("raw",ur,
{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),qa=await q.sign("HMAC",cr,Fe),ka=new Uint8Array(
qa),Pt=new Ae(36);Pt.writeUint8(20,0);let Oa=Pt.writeLengthUint24(0);Pt.writeBytes(
ka),Oa();let Qa=Pt.array(),Qn=await di(oe(N,Qa),ee,22),$n=Fe;if(N.length>0){let se=V.
subarray(0,V.length-N.length),at=await q.digest("SHA-256",se);$n=new Uint8Array(
at)}let Bt=await Qo(Z.handshakeSecret,$n,256,16),$a=await q.importKey("raw",Bt.clientApplicationKey,
{name:"AES-GCM"},!0,["encrypt"]),ja=new Ft("encrypt",$a,Bt.clientApplicationIV),
Ha=await q.importKey("raw",Bt.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),
Ka=new Ft("decrypt",Ha,Bt.serverApplicationIV),Rt=!1;return[()=>{if(!Rt){let se=oe(
P,...Qn);n(se),Rt=!0}return Cr(t,Ka)},async se=>{let at=Rt;Rt=!0;let jn=await di(
se,ja,23),Wa=at?oe(...jn):oe(P,...Qn,...jn);n(Wa)}]}o(su,"Se");var xi=class{static{
o(this,"wt")}constructor(){j(this,"queue"),j(this,"outstandingRequest"),this.queue=
[]}enqueue(r){this.queue.push(r),this.dequeue()}dequeue(){if(this.outstandingRequest===
void 0)return;let{resolve:r,bytes:e}=this.outstandingRequest,t=this.bytesInQueue();
if(t<e&&this.socketIsNotClosed())return;if(e=Math.min(e,t),e===0)return r(void 0);
this.outstandingRequest=void 0;let n=this.queue[0],i=n.length;if(i===e)return this.
queue.shift(),r(n);if(i>e)return this.queue[0]=n.subarray(e),r(n.subarray(0,e));
{let s=new Uint8Array(e),a=e,u=0;for(;a>0;){let c=this.queue[0],l=c.length;l<=a?
(this.queue.shift(),s.set(c,u),u+=l,a-=l):(this.queue[0]=c.subarray(a),s.set(c.subarray(
0,a),u),a-=a,u+=a)}return r(s)}}bytesInQueue(){return this.queue.reduce((r,e)=>r+
e.length,0)}async read(r){if(this.outstandingRequest!==void 0)throw new Error("C\
an\u2019t read while already awaiting read");return new Promise(e=>{this.outstandingRequest=
{resolve:e,bytes:r},this.dequeue()})}},au=class extends xi{static{o(this,"Rt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}},ou=class extends xi{static{o(this,
"Et")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(new Uint8Array(
e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,{readyState:e}=r;
return e==="opening"||e==="open"}};function uu(r,e=(n,i)=>i,t){return JSON.stringify(
r,(n,i)=>e(n,typeof i!="object"||i===null||Array.isArray(i)?i:Object.fromEntries(
Object.entries(i).sort(([s],[a])=>s<a?-1:s>a?1:0))),t)}o(uu,"Qt");var Ai=`-----BEGIN CERTIFICATE-----
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
`;y();var lu=Object.getOwnPropertyNames,hu=Object.getOwnPropertySymbols,fu=Object.prototype.
hasOwnProperty;function vi(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(vi,"combineComparators");function Ot(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Ot,"createIsCircular");
function Ci(r){return lu(r).concat(hu(r))}o(Ci,"getStrictProperties");var Bi=Object.
hasOwn||function(r,e){return fu.call(r,e)};function Ve(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(Ve,"sameValueZeroEqual");var Ri="_owner",_i=Object.getOwnPropertyDescriptor,
Ti=Object.keys;function du(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(du,"areArraysEqual");function pu(r,e){
return Ve(r.getTime(),e.getTime())}o(pu,"areDatesEqual");function Ui(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,p=f[0],m=f[1],
x=u.value,L=x[0],v=x[1];!l&&!n[h]&&(l=t.equals(p,L,s,h,r,e,t)&&t.equals(m,v,p,L,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(Ui,"areMapsEqual");function yu(r,e,t){
var n=Ti(r),i=n.length;if(Ti(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===Ri&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Bi(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(yu,"areObjectsEqual");function ft(r,e,t){var n=Ci(
r),i=n.length;if(Ci(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===Ri&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Bi(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=_i(r,s),u=_i(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(ft,"a\
reObjectsEqualStrict");function mu(r,e){return Ve(r.valueOf(),e.valueOf())}o(mu,
"arePrimitiveWrappersEqual");function wu(r,e){return r.source===e.source&&r.flags===
e.flags}o(wu,"areRegExpsEqual");function Li(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(Li,"areSetsEqual");function gu(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(gu,"are\
TypedArraysEqual");var Su="[object Arguments]",bu="[object Boolean]",Eu="[object\
 Date]",xu="[object Map]",Au="[object Number]",vu="[object Object]",Cu="[object \
RegExp]",_u="[object Set]",Tu="[object String]",Uu=Array.isArray,Ii=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Pi=Object.assign,Lu=Object.
prototype.toString.call.bind(Object.prototype.toString);function Iu(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,p){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var m=h.constructor;if(m!==f.constructor)return!1;if(m===Object)return i(
h,f,p);if(Uu(h))return e(h,f,p);if(Ii!=null&&Ii(h))return c(h,f,p);if(m===Date)return t(
h,f,p);if(m===RegExp)return a(h,f,p);if(m===Map)return n(h,f,p);if(m===Set)return u(
h,f,p);var x=Lu(h);return x===Eu?t(h,f,p):x===Cu?a(h,f,p):x===xu?n(h,f,p):x===_u?
u(h,f,p):x===vu?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,p):x===
Su?i(h,f,p):x===bu||x===Au||x===Tu?s(h,f,p):!1},"comparator")}o(Iu,"createEquali\
tyComparator");function Pu(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?ft:du,areDatesEqual:pu,areMapsEqual:n?vi(Ui,ft):Ui,areObjectsEqual:n?
ft:yu,arePrimitiveWrappersEqual:mu,areRegExpsEqual:wu,areSetsEqual:n?vi(Li,ft):Li,
areTypedArraysEqual:n?ft:gu};if(t&&(i=Pi({},i,t(i))),e){var s=Ot(i.areArraysEqual),
a=Ot(i.areMapsEqual),u=Ot(i.areObjectsEqual),c=Ot(i.areSetsEqual);i=Pi({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(Pu,"createEqualityC\
omparatorConfig");function Bu(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(Bu,"createInternalEqualityComparator");function Ru(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,p=f===void 0?e?new WeakMap:void 0:f,m=h.meta;return t(c,l,{cache:p,equals:i,
meta:m,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(Ru,"createIsEqual");
var Ir=Pe(),lf=Pe({strict:!0}),hf=Pe({circular:!0}),ff=Pe({circular:!0,strict:!0}),
df=Pe({createInternalComparator:o(function(){return Ve},"createInternalComparato\
r")}),pf=Pe({strict:!0,createInternalComparator:o(function(){return Ve},"createI\
nternalComparator")}),yf=Pe({circular:!0,createInternalComparator:o(function(){return Ve},
"createInternalComparator")}),mf=Pe({circular:!0,createInternalComparator:o(function(){
return Ve},"createInternalComparator"),strict:!0});function Pe(r){r===void 0&&(r=
{});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,i=r.createState,
s=r.strict,a=s===void 0?!1:s,u=Pu(r),c=Iu(u),l=n?n(c):Bu(c);return Ru({circular:t,
comparator:c,createState:i,equals:l,strict:a})}o(Pe,"createCustomEqual");y();var or=Qe(ar());Zt();y();Zt();sn();var Na=Qe(vt()),Ma=Qe(Jt());function Rh(r){return r instanceof w?"\\x"+r.toString("hex"):r}o(Rh,"encodeBuffe\
rsAsBytea");var Te=class r extends Error{static{o(this,"NeonDbError")}name="Neon\
DbError";severity;code;detail;hint;position;internalPosition;internalQuery;where;schema;table;column;dataType;constraint;file;line;routine;sourceError;constructor(e){
super(e),"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&
Error.captureStackTrace(this,r)}},Ba="transaction() expects an array of queries,\
 or a function returning an array of queries",Nh=["severity","code","detail","hi\
nt","position","internalPosition","internalQuery","where","schema","table","colu\
mn","dataType","constraint","file","line","routine"];function ve(r,{arrayMode:e,
fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:a,queryCallback:u,
resultCallback:c,authToken:l}={}){if(!r)throw new Error("No database connection \
string was provided to `neon()`. Perhaps an environment variable has not been se\
t?");let h;try{h=nn(r)}catch{throw new Error("Database connection string provide\
d to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:f,
username:p,hostname:m,port:x,pathname:L}=h;if(f!=="postgres:"&&f!=="postgresql:"||
!p||!m||!L)throw new Error("Database connection string format for `neon()` shoul\
d be: postgresql://user:password@host.tld/dbname?option=value");function v(b,...g){
let E,M;if(typeof b=="string")E=b,M=g[1],g=g[0]??[];else{E="";for(let F=0;F<b.length;F++)
E+=b[F],F<g.length&&(E+="$"+(F+1))}g=g.map(F=>Rh((0,Na.prepareValue)(F)));let B={
query:E,params:g};return u&&u(B),Mh(C,B,M)}o(v,"resolve"),v.transaction=async(b,g)=>{
if(typeof b=="function"&&(b=b(v)),!Array.isArray(b))throw new Error(Ba);b.forEach(
B=>{if(B[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(Ba)});let E=b.
map(B=>B.parameterizedQuery),M=b.map(B=>B.opts??{});return C(E,M,g)};async function C(b,g,E){
let{fetchEndpoint:M,fetchFunction:B}=be,F=Array.isArray(b)?{queries:b}:b,H=n??{},
Z=e??!1,D=t??!1,G=i,ie=s,ee=a;E!==void 0&&(E.fetchOptions!==void 0&&(H={...H,...E.
fetchOptions}),E.arrayMode!==void 0&&(Z=E.arrayMode),E.fullResults!==void 0&&(D=
E.fullResults),E.isolationLevel!==void 0&&(G=E.isolationLevel),E.readOnly!==void 0&&
(ie=E.readOnly),E.deferrable!==void 0&&(ee=E.deferrable)),g!==void 0&&!Array.isArray(
g)&&g.fetchOptions!==void 0&&(H={...H,...g.fetchOptions});let K=l;!Array.isArray(
g)&&g?.authToken!==void 0&&(K=g.authToken);let $=typeof M=="function"?M(m,x,{jwtAuth:K!==
void 0}):M,Q={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Arr\
ay-Mode":"true"},W=await Dh(K);W&&(Q.Authorization=`Bearer ${W}`),Array.isArray(
b)&&(G!==void 0&&(Q["Neon-Batch-Isolation-Level"]=G),ie!==void 0&&(Q["Neon-Batch\
-Read-Only"]=String(ie)),ee!==void 0&&(Q["Neon-Batch-Deferrable"]=String(ee)));let k;
try{k=await(B??fetch)($,{method:"POST",body:JSON.stringify(F),headers:Q,...H})}catch(P){
let N=new Te(`Error connecting to database: ${P}`);throw N.sourceError=P,N}if(k.
ok){let P=await k.json();if(Array.isArray(b)){let N=P.results;if(!Array.isArray(
N))throw new Te("Neon internal error: unexpected result format");return N.map((V,le)=>{
let Fe=g[le]??{},ur=Fe.arrayMode??Z,cr=Fe.fullResults??D;return Ra(V,{arrayMode:ur,
fullResults:cr,parameterizedQuery:b[le],resultCallback:c,types:Fe.types})})}else{
let N=g??{},V=N.arrayMode??Z,le=N.fullResults??D;return Ra(P,{arrayMode:V,fullResults:le,
parameterizedQuery:b,resultCallback:c,types:N.types})}}else{let{status:P}=k;if(P===
400){let N=await k.json(),V=new Te(N.message);for(let le of Nh)V[le]=N[le]??void 0;
throw V}else{let N=await k.text();throw new Te(`Server error (HTTP status ${P}):\
 ${N}`)}}}return o(C,"execute"),v}o(ve,"neon");function Mh(r,e,t){return{[Symbol.
toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:o((n,i)=>r(e,t).
then(n,i),"then"),catch:o(n=>r(e,t).catch(n),"catch"),finally:o(n=>r(e,t).finally(
n),"finally")}}o(Mh,"createNeonQueryPromise");function Ra(r,{arrayMode:e,fullResults:t,
parameterizedQuery:n,resultCallback:i,types:s}){let a=new Ma.default(s),u=r.fields.
map(h=>h.name),c=r.fields.map(h=>a.getTypeParser(h.dataTypeID)),l=e===!0?r.rows.
map(h=>h.map((f,p)=>f===null?null:c[p](f))):r.rows.map(h=>Object.fromEntries(h.map(
(f,p)=>[u[p],f===null?null:c[p](f)])));return i&&i(n,r,l,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=l,r._parsers=c,r._types=a,r):l}o(Ra,"\
processQueryResult");async function Dh(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new Te("Error ge\
tting auth token.");throw e instanceof Error&&(t=new Te(`Error getting auth toke\
n: ${e.message}`)),t}}o(Dh,"getAuthToken");var Da=Qe(Yt()),it=Qe(ar());var Me=class extends or.Client{constructor(t){super(t);this.config=t}static{o(this,
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
fromEntries(s.split(",").map(k=>{if(!/^.=/.test(k))throw new Error("SASL: Invali\
d attribute pair entry");let P=k[0],N=k.substring(2);return[P,N]})),u=a.r,c=a.s,
l=a.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-ME\
SSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),f=w.from(c,"base64"),p=new TextEncoder,
m=p.encode(i),x=await A.subtle.importKey("raw",m,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),L=new Uint8Array(await A.subtle.sign("HMAC",x,w.concat([f,w.from(
[0,0,0,1])]))),v=L;for(var C=0;C<h-1;C++)L=new Uint8Array(await A.subtle.sign("H\
MAC",x,L)),v=w.from(v.map((k,P)=>v[P]^L[P]));let b=v,g=await A.subtle.importKey(
"raw",b,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),E=new Uint8Array(await A.
subtle.sign("HMAC",g,p.encode("Client Key"))),M=await A.subtle.digest("SHA-256",
E),B="n=*,r="+n.clientNonce,F="r="+u+",s="+c+",i="+h,H="c=biws,r="+u,Z=B+","+F+"\
,"+H,D=await A.subtle.importKey("raw",M,{name:"HMAC",hash:{name:"SHA-256"}},!1,[
"sign"]);var G=new Uint8Array(await A.subtle.sign("HMAC",D,p.encode(Z))),ie=w.from(
E.map((k,P)=>E[P]^G[P])),ee=ie.toString("base64");let K=await A.subtle.importKey(
"raw",b,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),$=await A.subtle.sign("\
HMAC",K,p.encode("Server Key")),Q=await A.subtle.importKey("raw",$,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]);var W=w.from(await A.subtle.sign("HMAC",Q,p.
encode(Z)));n.message="SASLResponse",n.serverSignature=W.toString("base64"),n.response=
H+",p="+ee,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function Fh(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
Fh,"promisify");var Oe=class extends or.Pool{static{o(this,"NeonPool")}Client=Me;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!be.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=Fh(this.Promise,
n);n=i.callback;try{let s=new Da.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];ve(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h,{types:e.types??this.options?.types}).then(p=>n(void 0,p)).catch(p=>n(
p))}catch(s){n(s)}return i.result}};y();async function qh(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(qh,"t\
imed");async function st(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await qh(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(st,"timedRepeat\
s");async function Tt(r,e){let{sql:t,test:n}=e,{rows:i}=await(typeof r=="functio\
n"?r(t):r.query(t));if(!n(i))throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(Tt,"runQuery");async function Ut(r,e,t,n){
await e.connect();let i=await st(r,()=>Tt(e,n));return t.waitUntil(e.end()),i}o(
Ut,"clientRunQuery");async function Lt(r,e,t,n){let i=new Oe({connectionString:e}),
s=await st(r,()=>Tt(i,n));return t.waitUntil(i.end()),s}o(Lt,"poolRunQuery");async function Fa(r,e,t,n){
let i=ve(e,{fullResults:!0});return await st(r,()=>Tt(i,n))}o(Fa,"httpRunQuery");y();var It=[{sql:"SELECT * FROM employees LIMIT 10",test:o(r=>r.length>1&&typeof r[0].
first_name=="string","test")},{sql:"SELECT now()",test:o(r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString()),"test")}];async function l0(r,e,t){let n=[];for(let i of It){let[,[[,s]]]=await Lt(1,e.NEON_DB_URL,
t,i);n.push(s)}for(let i of It){let[,[[,s]]]=await Fa(1,e.NEON_DB_URL,t,i);n.push(
s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-Type":"applic\
ation/json"}})}o(l0,"cf");var De={waitUntil(r){},passThroughOnException(){}};async function kh(r,e=(...t)=>{}){
let t=ve(r.NEON_DB_URL),[[n],[i]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,
t`SELECT ${"hello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(n),JSON.
stringify(i),`
`),n.batchInt!==1||i.batchStr!=="hello")throw new Error("Batch query problem");let[
[s],[a]]=await t.transaction(E=>[E`SELECT ${1}::int AS "batchInt"`,E`SELECT ${"h\
ello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(s),JSON.stringify(a),
`
`),s.batchInt!==1||a.batchStr!=="hello")throw new Error("Batch query problem");let u=await t.
transaction(E=>[]);e("empty txn result:",JSON.stringify(u),`
`);let[[[c]],[[l]]]=await t.transaction(E=>[E`SELECT ${1}::int AS "batchInt"`,E`SELECT ${"\
hello"} AS "batchStr"`],{arrayMode:!0,isolationLevel:"Serializable",readOnly:!0});
if(e("array mode (via transaction options) batch results:",JSON.stringify(c),JSON.
stringify(l),`
`),c!==1||l!=="hello")throw new Error("Batch query problem");let h=ve(r.NEON_DB_URL,
{arrayMode:!0,isolationLevel:"RepeatableRead"}),[[[f]],[[p]]]=await h.transaction(
E=>[E`SELECT ${1}::int AS "batchInt"`,E`SELECT ${"hello"} AS "batchStr"`]);if(e(
"array mode (via neon options) batch results:",JSON.stringify(f),JSON.stringify(
p),`
`),f!==1||p!=="hello")throw new Error("Batch query problem");let m=ve(r.NEON_DB_URL,
{arrayMode:!0}),[[x],[L]]=await m.transaction(E=>[E`SELECT ${1}::int AS "batchInt"`,
E`SELECT ${"hello"} AS "batchStr"`],{arrayMode:!1});if(e("ordinary (via overridd\
en options) batch results:",JSON.stringify(x),JSON.stringify(L),`
`),x.batchInt!==1||L.batchStr!=="hello")throw new Error("Batch query problem");let[
[v],[C]]=await t.transaction(E=>[E`SELECT ${1}::int AS "batchInt"`,E('SELECT $1 \
AS "batchStr"',["hello"],{arrayMode:!0})]);if(e("query options on individual bat\
ch queries:",JSON.stringify(v),JSON.stringify(C),`
`),v.batchInt!==1||C[0]!=="hello")throw new Error("Batch query problem");let b;try{
await t.transaction(E=>[E`SELECT ${1}::int AS "batchInt"`,`SELECT 'hello' AS "ba\
tchStr"`])}catch(E){b=E}if(b===void 0)throw new Error("Error should have been ra\
ised for string passed to `transaction()`");e("successfully caught invalid query\
 passed to `transaction()`\n");let g;try{let E=r.NEON_DB_URL.replace(/@/,"x@");await ve(
E).transaction(M=>[M`SELECT 'never' AS this_should_be_seen_precisely`])}catch(E){
g=E}if(g===void 0)throw new Error("Error should have been raised for bad passwor\
d");e("successfully caught invalid password passed to `neon()`\n")}o(kh,"batchQu\
eryTest");async function h0(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up ...

`),await Lt(1,r.NEON_DB_URL,De,It[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Oe({connectionString:r.
NEON_DB_URL}),c=ve(r.NEON_DB_URL,{resultCallback:o(async(m,x,L,v)=>{let C=await u.
query({text:m.query,values:m.params,...v.arrayMode?{rowMode:"array"}:{}}),b=x.command===
C.command,g=x.rowCount===C.rowCount,E=Ir(x.fields.map(F=>F.dataTypeID),C.fields.
map(F=>F.dataTypeID)),M=Ir(L,C.rows);t(b&&g&&M&&E?"\u2713":"X",JSON.stringify(m),
`
  -> us:`,JSON.stringify(L),`
  -> pg:`,JSON.stringify(C.rows),`
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
 123 AS num",[],{arrayMode:!0,fullResults:!0});function h(m,x,L=3){return async function(v,...C){
let b="";for(let g=0;g<v.length;g++)b+=v[g],g<C.length&&(b+="$"+(g+1));for(let g=1;;g++){
let E=new AbortController,M=setTimeout(()=>E.abort("fetch timed out"),x);try{let{
signal:B}=E;return await m(b,C,{fetchOptions:{signal:B}})}catch(B){if(!(B.sourceError&&
B.sourceError instanceof DOMException&&B.sourceError.name==="AbortError")||g>=L)
throw B}finally{clearTimeout(M)}}}}o(h,"sqlWithRetries"),await h(c,5e3)`SELECT ${"\
did this time out?"} AS str`,await kh(r,t),be.fetchFunction=(m,x)=>(console.log(
"custom fetch:",m,x),fetch(m,x)),await c`SELECT ${"customFetch"} AS str`;let p="\
SELECT 123::int[] WHERE x";try{await c(p)}catch(m){console.log("Fields of this e\
xpected error should match the following error, except for having no `length` fi\
eld"),console.log(m)}try{await Lt(1,r.NEON_DB_URL,De,{sql:p,test:o(()=>!0,"test")})}catch(m){
console.log("Fields of this expected error should match the previous error, exce\
pt for having an additional `length` field"),console.log(m)}await new Promise(m=>setTimeout(
m,1e3)),u.end(),t(`

===== Pool/Client tests =====
`);for(let m of It){t(`
----- ${m.sql} -----

`);async function x(v,C){let b=String.fromCharCode(s+(s>25?23:65));t(`${b}
`);try{await fetch(`http://localhost:443/${b}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,g]=await st(i,()=>C(v),E=>t(`<span class="live">${E.toFixed()}\
ms</span> `));t(`
Sorted:  `),g.map(([E])=>E).sort((E,M)=>E-M).forEach((E,M)=>{t(M===(i-1)/2?`<spa\
n class="median">${E.toFixed()}ms</span> `:`${E.toFixed()}ms `)}),t(`

`),s+=1}o(x,"section");async function L(v,C){t(`----- ${v} -----

`);for(let b of n)t(`${b} quer${b===1?"y":"ies"} \u2013 `),await x(b,C)}o(L,"sec\
tions"),await L("Neon/wss, no pipelining",async v=>{let C=new Me(r.NEON_DB_URL);
C.neonConfig.pipelineConnect=!1,await Ut(v,C,De,m)}),await L("Neon/wss, pipeline\
d connect (default)",async v=>{let C=new Me(r.NEON_DB_URL);await Ut(v,C,De,m)}),
await L("Neon/wss, pipelined connect, no coalescing",async v=>{let C=new Me(r.NEON_DB_URL);
C.neonConfig.coalesceWrites=!1,await Ut(v,C,De,m)}),await L("Neon/wss, pipelined\
 connect using Pool.query",async v=>{await Lt(v,r.NEON_DB_URL,De,m)}),await L("N\
eon/wss, pipelined connect using Pool.connect",async v=>{let C=new Oe({connectionString:r.
NEON_DB_URL}),b=await C.connect();await st(v,()=>Tt(b,m)),b.release(),De.waitUntil(
C.end())}),e&&(be.subtls=Lr,be.rootCerts=Ai,await L("pg/subtls, pipelined connec\
t",async v=>{let C=new Me(r.NEON_DB_URL);C.neonConfig.wsProxy=(b,g)=>`subtls-wsp\
roxy.jawj.workers.dev/?address=${b}:${g}`,C.neonConfig.forceDisablePgSSL=C.neonConfig.
useSecureWebSocket=!1,C.neonConfig.pipelineTLS=!1,C.neonConfig.pipelineConnect=!1;
try{await Ut(v,C,De,m)}catch(b){console.error(`
*** ${b.message}`)}}))}}o(h0,"latencies");export{kh as batchQueryTest,l0 as cf,h0 as latencies,be as neonConfig};
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
