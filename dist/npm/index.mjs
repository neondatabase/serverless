var Xs=Object.create;var Ie=Object.defineProperty;var eo=Object.getOwnPropertyDescriptor;var to=Object.getOwnPropertyNames;var ro=Object.getPrototypeOf,no=Object.prototype.hasOwnProperty;var io=(r,e,t)=>e in r?Ie(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var a=(r,e)=>Ie(r,"name",{value:e,configurable:!0});var K=(r,e)=>()=>(r&&(e=r(r=0)),e);var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),X=(r,e)=>{for(var t in e)
Ie(r,t,{get:e[t],enumerable:!0})},_n=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of to(e))!no.call(r,i)&&i!==t&&Ie(r,i,{get:()=>e[i],enumerable:!(n=
eo(e,i))||n.enumerable});return r};var We=(r,e,t)=>(t=r!=null?Xs(ro(r)):{},_n(e||!r||!r.__esModule?Ie(t,"default",{
value:r,enumerable:!0}):t,r)),k=r=>_n(Ie({},"__esModule",{value:!0}),r);var T=(r,e,t)=>(io(r,typeof e!="symbol"?e+"":e,t),t);var In=I(it=>{"use strict";p();it.byteLength=oo;it.toByteArray=uo;it.fromByteArray=
lo;var oe=[],ee=[],so=typeof Uint8Array<"u"?Uint8Array:Array,It="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ee=0,An=It.length;Ee<An;++Ee)
oe[Ee]=It[Ee],ee[It.charCodeAt(Ee)]=Ee;var Ee,An;ee[45]=62;ee[95]=63;function Cn(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Cn,
"getLens");function oo(r){var e=Cn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(oo,"byte\
Length");function ao(r,e,t){return(e+t)*3/4-t}a(ao,"_byteLength");function uo(r){
var e,t=Cn(r),n=t[0],i=t[1],s=new so(ao(r,n,i)),o=0,u=i>0?n-4:n,c;for(c=0;c<u;c+=
4)e=ee[r.charCodeAt(c)]<<18|ee[r.charCodeAt(c+1)]<<12|ee[r.charCodeAt(c+2)]<<6|ee[r.
charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=
ee[r.charCodeAt(c)]<<2|ee[r.charCodeAt(c+1)]>>4,s[o++]=e&255),i===1&&(e=ee[r.charCodeAt(
c)]<<10|ee[r.charCodeAt(c+1)]<<4|ee[r.charCodeAt(c+2)]>>2,s[o++]=e>>8&255,s[o++]=
e&255),s}a(uo,"toByteArray");function co(r){return oe[r>>18&63]+oe[r>>12&63]+oe[r>>
6&63]+oe[r&63]}a(co,"tripletToBase64");function ho(r,e,t){for(var n,i=[],s=e;s<t;s+=
3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(co(n));return i.join(
"")}a(ho,"encodeChunk");function lo(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,
u=t-n;o<u;o+=s)i.push(ho(r,o,o+s>u?u:o+s));return n===1?(e=r[t-1],i.push(oe[e>>2]+
oe[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(oe[e>>10]+oe[e>>4&63]+oe[e<<
2&63]+"=")),i.join("")}a(lo,"fromByteArray")});var Tn=I(Tt=>{p();Tt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,h=c>>
1,l=-7,y=t?i-1:0,E=t?-1:1,_=r[e+y];for(y+=E,s=_&(1<<-l)-1,_>>=-l,l+=u;l>0;s=s*256+
r[e+y],y+=E,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=n;l>0;o=o*256+r[e+y],y+=E,l-=8);if(s===
0)s=1-h;else{if(s===c)return o?NaN:(_?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-h}return(_?
-1:1)*o*Math.pow(2,s-n)};Tt.write=function(r,e,t,n,i,s){var o,u,c,h=s*8-i-1,l=(1<<
h)-1,y=l>>1,E=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:s-1,P=n?1:-1,N=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=l):(o=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+y>=1?e+=E/c:e+=
E*Math.pow(2,1-y),e*c>=2&&(o++,c/=2),o+y>=l?(u=0,o=l):o+y>=1?(u=(e*c-1)*Math.pow(
2,i),o=o+y):(u=e*Math.pow(2,y-1)*Math.pow(2,i),o=0));i>=8;r[t+_]=u&255,_+=P,u/=256,
i-=8);for(o=o<<i|u,h+=i;h>0;r[t+_]=o&255,_+=P,o/=256,h-=8);r[t+_-P]|=N*128}});var Gn=I(Le=>{"use strict";p();var Pt=In(),Pe=Tn(),Pn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Le.Buffer=
f;Le.SlowBuffer=wo;Le.INSPECT_MAX_BYTES=50;var st=2147483647;Le.kMaxLength=st;f.
TYPED_ARRAY_SUPPORT=fo();!f.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function fo(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}a(fo,"typedArraySupport");Object.defineProperty(f.prototype,
"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}});
Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(
this))return this.byteOffset}});function le(r){if(r>st)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,f.prototype),e}a(le,"createBuffer");function f(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return Ft(r)}return Fn(r,e,t)}a(f,"Buf\
fer");f.poolSize=8192;function Fn(r,e,t){if(typeof r=="string")return yo(r,e);if(ArrayBuffer.
isView(r))return mo(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(ae(r,ArrayBuffer)||r&&ae(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(ae(r,SharedArrayBuffer)||r&&ae(r.buffer,SharedArrayBuffer)))return Lt(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return f.from(n,e,t);let i=go(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return f.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}a(
Fn,"from");f.from=function(r,e,t){return Fn(r,e,t)};Object.setPrototypeOf(f.prototype,
Uint8Array.prototype);Object.setPrototypeOf(f,Uint8Array);function Mn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}a(Mn,"assertSize");function po(r,e,t){
return Mn(r),r<=0?le(r):e!==void 0?typeof t=="string"?le(r).fill(e,t):le(r).fill(
e):le(r)}a(po,"alloc");f.alloc=function(r,e,t){return po(r,e,t)};function Ft(r){
return Mn(r),le(r<0?0:Mt(r)|0)}a(Ft,"allocUnsafe");f.allocUnsafe=function(r){return Ft(
r)};f.allocUnsafeSlow=function(r){return Ft(r)};function yo(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!f.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Dn(r,e)|0,n=le(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}a(yo,"fromString");function Bt(r){let e=r.length<0?0:Mt(r.length)|0,t=le(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}a(Bt,"fromArrayLike");function mo(r){if(ae(r,Uint8Array)){
let e=new Uint8Array(r);return Lt(e.buffer,e.byteOffset,e.byteLength)}return Bt(
r)}a(mo,"fromArrayView");function Lt(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,f.prototype),n}a(Lt,"fromArrayBuffer");function go(r){if(f.isBuffer(r)){let e=Mt(
r.length)|0,t=le(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Ot(r.length)?le(0):Bt(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return Bt(r.data)}a(go,"fromObject");function Mt(r){if(r>=
st)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
st.toString(16)+" bytes");return r|0}a(Mt,"checked");function wo(r){return+r!=r&&
(r=0),f.alloc(+r)}a(wo,"SlowBuffer");f.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==f.prototype},"isBuffer");f.compare=a(function(e,t){if(ae(e,Uint8Array)&&
(e=f.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),
!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");f.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");f.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return f.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=f.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let o=e[n];if(ae(o,Uint8Array))s+o.length>i.length?(f.isBuffer(
o)||(o=f.from(o)),o.copy(i,s)):Uint8Array.prototype.set.call(i,o,s);else if(f.isBuffer(
o))o.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=o.length}return i},"concat");function Dn(r,e){if(f.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ae(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return Rt(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Hn(r).length;default:if(i)return n?-1:Rt(r).length;e=(""+e).toLowerCase(),
i=!0}}a(Dn,"byteLength");f.byteLength=Dn;function bo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Po(
this,e,t);case"utf8":case"utf-8":return kn(this,e,t);case"ascii":return Io(this,
e,t);case"latin1":case"binary":return To(this,e,t);case"base64":return Ao(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
bo,"slowToString");f.prototype._isBuffer=!0;function ve(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}a(ve,"swap");f.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)ve(this,t,t+1);return this},"swap16");f.prototype.swap32=a(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)ve(this,t,t+3),ve(this,t+1,t+2);return this},"swap32");
f.prototype.swap64=a(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ve(this,t,t+7),
ve(this,t+1,t+6),ve(this,t+2,t+5),ve(this,t+3,t+4);return this},"swap64");f.prototype.
toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?kn(
this,0,e):bo.apply(this,arguments)},"toString");f.prototype.toLocaleString=f.prototype.
toString;f.prototype.equals=a(function(e){if(!f.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:f.compare(this,e)===0},"equals");
f.prototype.inspect=a(function(){let e="",t=Le.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Pn&&(f.prototype[Pn]=f.prototype.inspect);f.prototype.compare=
a(function(e,t,n,i,s){if(ae(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let o=s-i,u=n-t,c=Math.min(o,u),h=this.slice(i,s),l=e.slice(t,n);for(let y=0;y<c;++y)
if(h[y]!==l[y]){o=h[y],u=l[y];break}return o<u?-1:u<o?1:0},"compare");function On(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Ot(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=f.from(e,n)),f.isBuffer(e))return e.length===0?-1:Bn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Bn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(On,"bid\
irectionalIndexOf");function Bn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,u/=2,t/=2}function c(l,y){
return s===1?l[y]:l.readUInt16BE(y*s)}a(c,"read");let h;if(i){let l=-1;for(h=t;h<
o;h++)if(c(r,h)===c(e,l===-1?0:h-l)){if(l===-1&&(l=h),h-l+1===u)return l*s}else l!==
-1&&(h-=h-l),l=-1}else for(t+u>o&&(t=o-u),h=t;h>=0;h--){let l=!0;for(let y=0;y<u;y++)
if(c(r,h+y)!==c(e,y)){l=!1;break}if(l)return h}return-1}a(Bn,"arrayIndexOf");f.prototype.
includes=a(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");f.prototype.
indexOf=a(function(e,t,n){return On(this,e,t,n,!0)},"indexOf");f.prototype.lastIndexOf=
a(function(e,t,n){return On(this,e,t,n,!1)},"lastIndexOf");function So(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let o;for(o=0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Ot(u))
return o;r[t+o]=u}return o}a(So,"hexWrite");function xo(r,e,t,n){return ot(Rt(e,
r.length-t),r,t,n)}a(xo,"utf8Write");function Eo(r,e,t,n){return ot(Mo(e),r,t,n)}
a(Eo,"asciiWrite");function vo(r,e,t,n){return ot(Hn(e),r,t,n)}a(vo,"base64Write");
function _o(r,e,t,n){return ot(Do(e,r.length-t),r,t,n)}a(_o,"ucs2Write");f.prototype.
write=a(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"\
hex":return So(this,e,t,n);case"utf8":case"utf-8":return xo(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Eo(this,e,t,n);case"base64":return vo(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _o(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"\
write");f.prototype.toJSON=a(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function Ao(r,e,t){return e===0&&t===r.
length?Pt.fromByteArray(r):Pt.fromByteArray(r.slice(e,t))}a(Ao,"base64Slice");function kn(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,h,l,y;switch(u){case 1:s<128&&(o=s);break;case 2:c=
r[i+1],(c&192)===128&&(y=(s&31)<<6|c&63,y>127&&(o=y));break;case 3:c=r[i+1],h=r[i+
2],(c&192)===128&&(h&192)===128&&(y=(s&15)<<12|(c&63)<<6|h&63,y>2047&&(y<55296||
y>57343)&&(o=y));break;case 4:c=r[i+1],h=r[i+2],l=r[i+3],(c&192)===128&&(h&192)===
128&&(l&192)===128&&(y=(s&15)<<18|(c&63)<<12|(h&63)<<6|l&63,y>65535&&y<1114112&&
(o=y))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|
o&1023),n.push(o),i+=u}return Co(n)}a(kn,"utf8Slice");var Ln=4096;function Co(r){
let e=r.length;if(e<=Ln)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Ln));return t}a(Co,"d\
ecodeCodePointsArray");function Io(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Io,"asciiSlice");function To(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}a(To,"latin1Slice");function Po(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Oo[r[s]];return i}a(Po,"he\
xSlice");function Bo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}a(Bo,"utf16leSlice");f.prototype.
slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,f.prototype),i},"slice");function U(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(U,"checkOffset");f.prototype.readUintLE=
f.prototype.readUIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||U(e,t,this.length);let i=this[e],
s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},"readUIntLE");f.prototype.
readUintBE=f.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||U(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");f.prototype.readUint8=f.prototype.readUInt8=a(function(e,t){return e=
e>>>0,t||U(e,1,this.length),this[e]},"readUInt8");f.prototype.readUint16LE=f.prototype.
readUInt16LE=a(function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");f.prototype.readUint16BE=f.prototype.readUInt16BE=a(function(e,t){
return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");f.prototype.
readUint32LE=f.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||U(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
f.prototype.readUint32BE=f.prototype.readUInt32BE=a(function(e,t){return e=e>>>0,
t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");f.prototype.readBigUInt64LE=me(a(function(e){e=e>>>0,Be(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));f.prototype.
readBigUInt64BE=me(a(function(e){e=e>>>0,Be(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&je(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));f.prototype.readIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||U(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)
i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");f.prototype.
readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||U(e,t,this.length);let i=t,s=1,o=this[e+
--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*t)),
o},"readIntBE");f.prototype.readInt8=a(function(e,t){return e=e>>>0,t||U(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");f.prototype.readInt16LE=
a(function(e,t){e=e>>>0,t||U(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");f.prototype.readInt16BE=a(function(e,t){e=e>>>
0,t||U(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");f.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||U(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");f.prototype.
readInt32BE=a(function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");f.prototype.readBigInt64LE=me(a(function(e){
e=e>>>0,Be(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));f.prototype.readBigInt64BE=me(a(function(e){e=e>>>0,Be(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));f.prototype.
readFloatLE=a(function(e,t){return e=e>>>0,t||U(e,4,this.length),Pe.read(this,e,
!0,23,4)},"readFloatLE");f.prototype.readFloatBE=a(function(e,t){return e=e>>>0,
t||U(e,4,this.length),Pe.read(this,e,!1,23,4)},"readFloatBE");f.prototype.readDoubleLE=
a(function(e,t){return e=e>>>0,t||U(e,8,this.length),Pe.read(this,e,!0,52,8)},"r\
eadDoubleLE");f.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||U(e,8,this.
length),Pe.read(this,e,!1,52,8)},"readDoubleBE");function z(r,e,t,n,i,s){if(!f.isBuffer(
r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<
s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError(
"Index out of range")}a(z,"checkInt");f.prototype.writeUintLE=f.prototype.writeUIntLE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;z(this,e,
t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+
n},"writeUIntLE");f.prototype.writeUintBE=f.prototype.writeUIntBE=a(function(e,t,n,i){
if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;z(this,e,t,n,u,0)}let s=n-1,
o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+n},"writeUI\
ntBE");f.prototype.writeUint8=f.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||z(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");f.prototype.writeUint16LE=
f.prototype.writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,2,
65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");f.prototype.writeUint16BE=
f.prototype.writeUInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,2,
65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");f.prototype.writeUint32LE=
f.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,4,
4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+
4},"writeUInt32LE");f.prototype.writeUint32BE=f.prototype.writeUInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||z(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,
this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Un(r,e,t,n,i){jn(
e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,
r[t++]=s,s=s>>8,r[t++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}a(Un,"wrtBigUInt64LE");function qn(r,e,t,n,i){
jn(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(qn,"wrtBigUInt64BE");f.
prototype.writeBigUInt64LE=me(a(function(e,t=0){return Un(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));f.prototype.writeBigUInt64BE=me(a(function(e,t=0){
return qn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
f.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);z(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)e<
0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntL\
E");f.prototype.writeIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(
2,8*n-1);z(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;for(this[t+s]=e&255;--s>=0&&(o*=
256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"w\
riteIntBE");f.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,
e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");f.prototype.writeInt16LE=
a(function(e,t,n){return e=+e,t=t>>>0,n||z(this,e,t,2,32767,-32768),this[t]=e&255,
this[t+1]=e>>>8,t+2},"writeInt16LE");f.prototype.writeInt16BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||z(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");f.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>
0,n||z(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=
e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");f.prototype.writeInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||z(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+
1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeIn\
t32BE");f.prototype.writeBigInt64LE=me(a(function(e,t=0){return Un(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));f.prototype.
writeBigInt64BE=me(a(function(e,t=0){return qn(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function Nn(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}a(Nn,"checkIEEE754");function Qn(r,e,t,n,i){return e=+e,t=
t>>>0,i||Nn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Pe.write(r,e,t,n,
23,4),t+4}a(Qn,"writeFloat");f.prototype.writeFloatLE=a(function(e,t,n){return Qn(
this,e,t,!0,n)},"writeFloatLE");f.prototype.writeFloatBE=a(function(e,t,n){return Qn(
this,e,t,!1,n)},"writeFloatBE");function Wn(r,e,t,n,i){return e=+e,t=t>>>0,i||Nn(
r,e,t,8,17976931348623157e292,-17976931348623157e292),Pe.write(r,e,t,n,52,8),t+8}
a(Wn,"writeDouble");f.prototype.writeDoubleLE=a(function(e,t,n){return Wn(this,e,
t,!0,n)},"writeDoubleLE");f.prototype.writeDoubleBE=a(function(e,t,n){return Wn(
this,e,t,!1,n)},"writeDoubleBE");f.prototype.copy=a(function(e,t,n,i){if(!f.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=
this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-
t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),
s},"copy");f.prototype.fill=a(function(e,t,n,i){if(typeof e=="string"){if(typeof t==
"string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i==
"string"&&!f.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===
1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=o)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)
this[s]=e;else{let o=f.isBuffer(e)?e:f.from(e,i),u=o.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=
o[s%u]}return this},"fill");var Te={};function Dt(r,e,t){var n;Te[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,
configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){
return r}set code(s){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,
value:s,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}},
a(n,"NodeError"),n)}a(Dt,"E");Dt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);Dt("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);Dt("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?i=Rn(String(t)):typeof t=="bigint"&&(i=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Rn(i)),i+="n"),n+=` It\
 must be ${e}. Received ${i}`,n},RangeError);function Rn(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}a(Rn,"addNumericalSeparator");function Lo(r,e,t){Be(e,"offset"),(r[e]===
void 0||r[e+t]===void 0)&&je(e,r.length-(t+1))}a(Lo,"checkBounds");function jn(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and \
< 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} and <= ${t}${o}`,new Te.ERR_OUT_OF_RANGE(
"value",u,r)}Lo(n,i,s)}a(jn,"checkIntBI");function Be(r,e){if(typeof r!="number")
throw new Te.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Be,"validateNumber");function je(r,e,t){
throw Math.floor(r)!==r?(Be(r,t),new Te.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Te.ERR_BUFFER_OUT_OF_BOUNDS:new Te.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}a(je,"boundsError");var Ro=/[^+/0-9A-Za-z-_]/g;function Fo(r){
if(r=r.split("=")[0],r=r.trim().replace(Ro,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}a(Fo,"base64clean");function Rt(r,e){e=e||1/0;let t,n=r.
length,i=null,s=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){
if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&
s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,
189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,
189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;
s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(
Rt,"utf8ToBytes");function Mo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}a(Mo,"asciiToBytes");function Do(r,e){let t,n,i,s=[];for(let o=0;o<
r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}
a(Do,"utf16leToBytes");function Hn(r){return Pt.toByteArray(Fo(r))}a(Hn,"base64T\
oBytes");function ot(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(ot,"blitBuffer");function ae(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
a(ae,"isInstance");function Ot(r){return r!==r}a(Ot,"numberIsNaN");var Oo=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function me(r){return typeof BigInt>"u"?ko:r}
a(me,"defineBigIntMethod");function ko(){throw new Error("BigInt not supported")}
a(ko,"BufferBigIntNotDefined")});var b,S,v,w,d,m,p=K(()=>{"use strict";b=globalThis,S=globalThis.setImmediate??(r=>setTimeout(
r,0)),v=globalThis.clearImmediate??(r=>clearTimeout(r)),w=globalThis.crypto??{};
w.subtle??(w.subtle={});d=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Gn().Buffer,m=globalThis.process??
{};m.env??(m.env={});try{m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=
e.then.bind(e)}});var ge=I((Jc,kt)=>{"use strict";p();var Re=typeof Reflect=="object"?Reflect:null,
$n=Re&&typeof Re.apply=="function"?Re.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),at;Re&&typeof Re.ownKeys=="function"?at=Re.ownKeys:
Object.getOwnPropertySymbols?at=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):at=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Uo(r){console&&console.warn&&
console.warn(r)}a(Uo,"ProcessEmitWarning");var Vn=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function B(){B.init.call(this)}a(B,"EventEmitter");kt.exports=
B;kt.exports.once=Wo;B.EventEmitter=B;B.prototype._events=void 0;B.prototype._eventsCount=
0;B.prototype._maxListeners=void 0;var Kn=10;function ut(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(ut,"checkListener");Object.defineProperty(B,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Kn},set:function(r){if(typeof r!="\
number"||r<0||Vn(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Kn=r}});B.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};B.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||Vn(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function zn(r){return r._maxListeners===void 0?B.defaultMaxListeners:r._maxListeners}
a(zn,"_getMaxListeners");B.prototype.getMaxListeners=a(function(){return zn(this)},
"getMaxListeners");B.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)
throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=
o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")$n(c,this,t);else for(var h=c.
length,l=ei(c,h),n=0;n<h;++n)$n(l[n],this,t);return!0},"emit");function Yn(r,e,t,n){
var i,s,o;if(ut(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o=="functio\
n"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=zn(r),i>0&&o.length>i&&!o.warned){
o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=o.length,Uo(u)}
return r}a(Yn,"_addListener");B.prototype.addListener=a(function(e,t){return Yn(
this,e,t,!1)},"addListener");B.prototype.on=B.prototype.addListener;B.prototype.
prependListener=a(function(e,t){return Yn(this,e,t,!0)},"prependListener");function qo(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}a(qo,"onceWrapper");function Zn(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=qo.bind(n);return i.listener=t,n.wrapFn=i,i}a(Zn,"\
_onceWrap");B.prototype.once=a(function(e,t){return ut(t),this.on(e,Zn(this,e,t)),
this},"once");B.prototype.prependOnceListener=a(function(e,t){return ut(t),this.
prependListener(e,Zn(this,e,t)),this},"prependOnceListener");B.prototype.removeListener=
a(function(e,t){var n,i,s,o,u;if(ut(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)
if(n[o]===t||n[o].listener===t){u=n[o].listener,s=o;break}if(s<0)return this;s===
0?n.shift():No(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");B.prototype.off=B.prototype.
removeListener;B.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeList\
ener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function Jn(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?Qo(i):ei(i,i.length)}a(Jn,"_listeners");B.prototype.
listeners=a(function(e){return Jn(this,e,!0)},"listeners");B.prototype.rawListeners=
a(function(e){return Jn(this,e,!1)},"rawListeners");B.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):Xn.call(r,e)};B.prototype.
listenerCount=Xn;function Xn(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(Xn,"listenerCount");
B.prototype.eventNames=a(function(){return this._eventsCount>0?at(this._events):
[]},"eventNames");function ei(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(ei,"arrayClone");function No(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(No,"spliceOne");function Qo(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(Qo,"unwrapListeners");function Wo(r,e){return new Promise(
function(t,n){function i(o){r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}a(s,"resolver"),ti(r,e,s,{once:!0}),e!=="error"&&jo(r,i,{once:!0})})}
a(Wo,"once");function jo(r,e,t){typeof r.on=="function"&&ti(r,"error",e,t)}a(jo,
"addErrorHandlerIfEventEmitter");function ti(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(ti,"eventTargetAgnosticAddListener")});var He={};X(He,{default:()=>Ho});var Ho,Ge=K(()=>{"use strict";p();Ho={}});function $e(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
o=2600822924,u=528734635,c=1541459225,h=0,l=0,y=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],E=a((A,g)=>A>>>g|A<<32-g,
"rrot"),_=new Uint32Array(64),P=new Uint8Array(64),N=a(()=>{for(let L=0,G=0;L<16;L++,
G+=4)_[L]=P[G]<<24|P[G+1]<<16|P[G+2]<<8|P[G+3];for(let L=16;L<64;L++){let G=E(_[L-
15],7)^E(_[L-15],18)^_[L-15]>>>3,ce=E(_[L-2],17)^E(_[L-2],19)^_[L-2]>>>10;_[L]=_[L-
16]+G+_[L-7]+ce|0}let A=e,g=t,D=n,H=i,Q=s,W=o,ue=u,de=c;for(let L=0;L<64;L++){let G=E(
Q,6)^E(Q,11)^E(Q,25),ce=Q&W^~Q&ue,ye=de+G+ce+y[L]+_[L]|0,xe=E(A,2)^E(A,13)^E(A,22),
he=A&g^A&D^g&D,ie=xe+he|0;de=ue,ue=W,W=Q,Q=H+ye|0,H=D,D=g,g=A,A=ye+ie|0}e=e+A|0,
t=t+g|0,n=n+D|0,i=i+H|0,s=s+Q|0,o=o+W|0,u=u+ue|0,c=c+de|0,l=0},"process"),J=a(A=>{
typeof A=="string"&&(A=new TextEncoder().encode(A));for(let g=0;g<A.length;g++)P[l++]=
A[g],l===64&&N();h+=A.length},"add"),pe=a(()=>{if(P[l++]=128,l==64&&N(),l+8>64){
for(;l<64;)P[l++]=0;N()}for(;l<58;)P[l++]=0;let A=h*8;P[l++]=A/1099511627776&255,
P[l++]=A/4294967296&255,P[l++]=A>>>24,P[l++]=A>>>16&255,P[l++]=A>>>8&255,P[l++]=
A&255,N();let g=new Uint8Array(32);return g[0]=e>>>24,g[1]=e>>>16&255,g[2]=e>>>8&
255,g[3]=e&255,g[4]=t>>>24,g[5]=t>>>16&255,g[6]=t>>>8&255,g[7]=t&255,g[8]=n>>>24,
g[9]=n>>>16&255,g[10]=n>>>8&255,g[11]=n&255,g[12]=i>>>24,g[13]=i>>>16&255,g[14]=
i>>>8&255,g[15]=i&255,g[16]=s>>>24,g[17]=s>>>16&255,g[18]=s>>>8&255,g[19]=s&255,
g[20]=o>>>24,g[21]=o>>>16&255,g[22]=o>>>8&255,g[23]=o&255,g[24]=u>>>24,g[25]=u>>>
16&255,g[26]=u>>>8&255,g[27]=u&255,g[28]=c>>>24,g[29]=c>>>16&255,g[30]=c>>>8&255,
g[31]=c&255,g},"digest");return r===void 0?{add:J,digest:pe}:(J(r),pe())}var ri=K(
()=>{"use strict";p();a($e,"sha256")});var O,Ke,ni=K(()=>{"use strict";p();O=class O{constructor(){T(this,"_dataLength",
0);T(this,"_bufferLength",0);T(this,"_state",new Int32Array(4));T(this,"_buffer",
new ArrayBuffer(68));T(this,"_buffer8");T(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=O.
hexChars,n=O.hexOut,i,s,o,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],o=0;o<8;o+=2)n[s+1+
o]=t.charAt(i&15),i>>>=4,n[s+0+o]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],i=e[1],s=e[2],o=e[3];n+=(i&s|~i&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+i|
0,o+=(n&i|~n&s)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[2]+606105819|
0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&
s|~i&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[5]+1200080426|0,o=(o<<
12|o>>>20)+n|0,s+=(o&n|~o&i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+
t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&o)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+i|0,o+=(n&i|~n&s)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[10]-
42063|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|
0,n+=(i&s|~i&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[13]-40341101|
0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+o|0,i+=
(s&o|~s&n)+t[15]+1236535329|0,i=(i<<22|i>>>10)+s|0,n+=(i&o|s&~o)+t[1]-165796510|
0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,s+=(o&
i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&
~s)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[15]-660478335|0,s=(s<<14|
s>>>18)+o|0,i+=(s&n|o&~n)+t[4]-405537848|0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[9]+
568446438|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[14]-1019803690|0,o=(o<<9|o>>>23)+
n|0,s+=(o&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,o+=(n&
s|i&~s)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[7]+1735328473|0,s=(s<<
14|s>>>18)+o|0,i+=(s&n|o&~n)+t[12]-1926607734|0,i=(i<<20|i>>>12)+s|0,n+=(i^s^o)+
t[5]-378558|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[8]-2022574463|0,o=(o<<11|o>>>21)+
n|0,s+=(o^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[14]-35309556|
0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+
t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[7]-155497632|0,s=(s<<16|s>>>
16)+o|0,i+=(s^o^n)+t[10]-1094730640|0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[13]+681279174|
0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+
t[3]-722521979|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[12]-421815835|0,
o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+
t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,n+=(s^(i|~o))+t[0]-198630844|0,n=(n<<6|n>>>
26)+i|0,o+=(i^(n|~s))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[14]-
1416354905|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>11)+
s|0,n+=(s^(i|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[3]-1894986606|
0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+o|0,i+=(o^
(s|~n))+t[1]-2054922799|0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~o))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+
t[6]-1560198380|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[13]+1309151649|0,i=(i<<21|
i>>>11)+s|0,n+=(s^(i|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[11]-
1120210379|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+
o|0,i+=(o^(s|~n))+t[9]-343485551|0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|
0,e[2]=s+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(O.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),
s<128)t[i++]=s;else if(s<2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||
s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,
t[i++]=s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,O._md5cycle(this.
_state,n),i-=64,n[0]=n[16])}return this._bufferLength=i,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=64,O._md5cycle(
this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e[o++];if(i<64)break;this._dataLength+=64,O._md5cycle(this._state,
n),i=0}return this._bufferLength=i,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this.
_state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=
n[1],i[2]=n[2],i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(O.buffer32Identity.
subarray(s),s),t>55&&(O._md5cycle(this._state,i),i.set(O.buffer32Identity)),o<=4294967295)
i[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),h=parseInt(u[1],16)||0;i[14]=c,i[15]=h}return O._md5cycle(this._state,i),
e?this._state:O._hex(this._state)}};a(O,"Md5"),T(O,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),T(O,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),T(O,"hexChars","0123456789abcdef"),T(O,"hexO\
ut",[]),T(O,"onePassHasher",new O);Ke=O});var Ut={};X(Ut,{createHash:()=>$o,createHmac:()=>Ko,randomBytes:()=>Go});function Go(r){
return w.getRandomValues(d.alloc(r))}function $o(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return d.from($e(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?Ke.hashStr(e):Ke.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Ko(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=$e(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(
t.length+64);o.set(i,0),o.set(t,64);let u=new Uint8Array(96);return u.set(s,0),u.
set($e(o),64),d.from($e(u))}}}}}var qt=K(()=>{"use strict";p();ri();ni();a(Go,"r\
andomBytes");a($o,"createHash");a(Ko,"createHmac")});var Qt=I(ii=>{"use strict";p();ii.parse=function(r,e){return new Nt(r,e).parse()};
var ct=class ct{constructor(e,t){this.source=e,this.transform=t||Vo,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.dimension>
1&&(n=new ct(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(i&&this.newEntry(!0),i=!i):t.value===","&&!i?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};a(ct,"ArrayParser");var Nt=ct;function Vo(r){return r}a(Vo,"identity")});var Wt=I((yh,si)=>{p();var zo=Qt();si.exports={create:function(r,e){return{parse:function(){
return zo.parse(r,e)}}}}});var ui=I((gh,ai)=>{"use strict";p();var Yo=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Zo=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Jo=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Xo=/^-?infinity$/;
ai.exports=a(function(e){if(Xo.test(e))return Number(e.replace("i","I"));var t=Yo.
exec(e);if(!t)return ea(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=oi(i));var s=parseInt(
t[2],10)-1,o=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),h=parseInt(t[6],10),l=t[7];
l=l?1e3*parseFloat(l):0;var y,E=ta(e);return E!=null?(y=new Date(Date.UTC(i,s,o,
u,c,h,l)),jt(i)&&y.setUTCFullYear(i),E!==0&&y.setTime(y.getTime()-E)):(y=new Date(
i,s,o,u,c,h,l),jt(i)&&y.setFullYear(i)),y},"parseDate");function ea(r){var e=Zo.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=oi(t));var i=parseInt(e[2],
10)-1,s=e[3],o=new Date(t,i,s);return jt(t)&&o.setFullYear(t),o}}a(ea,"getDate");
function ta(r){if(r.endsWith("+00"))return 0;var e=Jo.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(ta,"timeZoneOffset");function oi(r){
return-(r-1)}a(oi,"bcYearToNegativeYear");function jt(r){return r>=0&&r<100}a(jt,
"is0To99")});var hi=I((Sh,ci)=>{p();ci.exports=na;var ra=Object.prototype.hasOwnProperty;function na(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)ra.call(t,
n)&&(r[n]=t[n])}return r}a(na,"extend")});var pi=I((vh,fi)=>{"use strict";p();var ia=hi();fi.exports=Fe;function Fe(r){if(!(this instanceof
Fe))return new Fe(r);ia(this,ma(r))}a(Fe,"PostgresInterval");var sa=["seconds","\
minutes","hours","days","months","years"];Fe.prototype.toPostgres=function(){var r=sa.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var oa={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},aa=["years","months","days"],ua=["hours","minutes","seconds"];Fe.
prototype.toISOString=Fe.prototype.toISO=function(){var r=aa.map(t,this).join(""),
e=ua.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+oa[n]}};var Ht="([+-]?\\d+)",ca=Ht+"\\s+years?",ha=Ht+"\\s+mons?",la=Ht+"\
\\s+days?",fa="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",pa=new RegExp([
ca,ha,la,fa].map(function(r){return"("+r+")?"}).join("\\s*")),li={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},da=["hours","minutes","sec\
onds","milliseconds"];function ya(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(ya,"parseMilliseconds");function ma(r){if(!r)return{};var e=pa.exec(
r),t=e[8]==="-";return Object.keys(li).reduce(function(n,i){var s=li[i],o=e[s];return!o||
(o=i==="milliseconds"?ya(o):parseInt(o,10),!o)||(t&&~da.indexOf(i)&&(o*=-1),n[i]=
o),n},{})}a(ma,"parse")});var yi=I((Ch,di)=>{"use strict";p();di.exports=a(function(e){if(/^\\x/.test(e))return new d(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new d(t,"binary")},"parseBytea")});var Ei=I((Ph,xi)=>{p();var Ve=Qt(),ze=Wt(),ht=ui(),gi=pi(),wi=yi();function lt(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(lt,"allowNull");function bi(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(bi,"parseBool");function ga(r){return r?Ve.parse(r,bi):null}a(ga,"pars\
eBoolArray");function wa(r){return parseInt(r,10)}a(wa,"parseBaseTenInt");function Gt(r){
return r?Ve.parse(r,lt(wa)):null}a(Gt,"parseIntegerArray");function ba(r){return r?
Ve.parse(r,lt(function(e){return Si(e).trim()})):null}a(ba,"parseBigIntegerArray");
var Sa=a(function(r){if(!r)return null;var e=ze.create(r,function(t){return t!==
null&&(t=zt(t)),t});return e.parse()},"parsePointArray"),$t=a(function(r){if(!r)
return null;var e=ze.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),te=a(function(r){if(!r)return null;var e=ze.
create(r);return e.parse()},"parseStringArray"),Kt=a(function(r){if(!r)return null;
var e=ze.create(r,function(t){return t!==null&&(t=ht(t)),t});return e.parse()},"\
parseDateArray"),xa=a(function(r){if(!r)return null;var e=ze.create(r,function(t){
return t!==null&&(t=gi(t)),t});return e.parse()},"parseIntervalArray"),Ea=a(function(r){
return r?Ve.parse(r,lt(wi)):null},"parseByteAArray"),Vt=a(function(r){return parseInt(
r,10)},"parseInteger"),Si=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),mi=a(function(r){return r?Ve.parse(r,lt(JSON.parse)):null},
"parseJsonArray"),zt=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),va=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=zt(e);return s.radius=parseFloat(t),s},"parseCircle"),_a=a(function(r){r(20,
Si),r(21,Vt),r(23,Vt),r(26,Vt),r(700,parseFloat),r(701,parseFloat),r(16,bi),r(1082,
ht),r(1114,ht),r(1184,ht),r(600,zt),r(651,te),r(718,va),r(1e3,ga),r(1001,Ea),r(1005,
Gt),r(1007,Gt),r(1028,Gt),r(1016,ba),r(1017,Sa),r(1021,$t),r(1022,$t),r(1231,$t),
r(1014,te),r(1015,te),r(1008,te),r(1009,te),r(1040,te),r(1041,te),r(1115,Kt),r(1182,
Kt),r(1185,Kt),r(1186,gi),r(1187,xa),r(17,wi),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,mi),r(3807,mi),r(3907,te),r(2951,te),r(791,te),r(1183,
te),r(1270,te)},"init");xi.exports={init:_a}});var _i=I((Rh,vi)=>{"use strict";p();var Y=1e6;function Aa(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,
c,h,l;{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+
u+i;for(c="",h=6-u.length,l=0;l<h;l++)c+="0";i=c+u+i}{if(s=e%Y,e=e/Y>>>0,o=4294967296*
s+t,t=o/Y>>>0,u=""+(o-Y*t),t===0&&e===0)return n+u+i;for(c="",h=6-u.length,l=0;l<
h;l++)c+="0";i=c+u+i}{if(s=e%Y,e=e/Y>>>0,o=4294967296*s+t,t=o/Y>>>0,u=""+(o-Y*t),
t===0&&e===0)return n+u+i;for(c="",h=6-u.length,l=0;l<h;l++)c+="0";i=c+u+i}return s=
e%Y,o=4294967296*s+t,u=""+o%Y,n+u+i}a(Aa,"readInt8");vi.exports=Aa});var Pi=I((Dh,Ti)=>{p();var Ca=_i(),R=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(_,P,N){
return _*Math.pow(2,N)+P};var s=t>>3,o=a(function(_){return n?~_&255:_},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var h=0;t%8+e>=8&&(h=i(0,o(r[s])&
u,c));for(var l=e+t>>3,y=s+1;y<l;y++)h=i(h,o(r[y]),8);var E=(e+t)%8;return E>0&&
(h=i(h,o(r[l])>>8-E,E)),h},"parseBits"),Ii=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=R(r,1),s=R(r,t,1);if(s===0)return 0;var o=1,u=a(function(h,l,y){h===0&&(h=
1);for(var E=1;E<=y;E++)o/=2,(l&1<<y-E)>0&&(h+=o);return h},"parsePrecisionBits"),
c=R(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),Ia=a(function(r){return R(r,1)==1?-1*
(R(r,15,1,!0)+1):R(r,15,1)},"parseInt16"),Ai=a(function(r){return R(r,1)==1?-1*(R(
r,31,1,!0)+1):R(r,31,1)},"parseInt32"),Ta=a(function(r){return Ii(r,23,8)},"pars\
eFloat32"),Pa=a(function(r){return Ii(r,52,11)},"parseFloat64"),Ba=a(function(r){
var e=R(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,R(r,16,16)),n=0,i=[],
s=R(r,16),o=0;o<s;o++)n+=R(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,R(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Ci=a(function(r,e){var t=R(
e,1),n=R(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),Ye=a(function(r){for(var e=R(r,32),t=R(r,32,32),
n=R(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=R(r,32,i),i+=32,i+=32;var u=a(function(h){
var l=R(r,32,i);if(i+=32,l==4294967295)return null;var y;if(h==23||h==20)return y=
R(r,l*8,i),i+=l*8,y;if(h==25)return y=r.toString(this.encoding,i>>3,(i+=l<<3)>>3),
y;console.log("ERROR: ElementType not implemented: "+h)},"parseElement"),c=a(function(h,l){
var y=[],E;if(h.length>1){var _=h.shift();for(E=0;E<_;E++)y[E]=c(h,l);h.unshift(
_)}else for(E=0;E<h[0];E++)y[E]=u(l);return y},"parse");return c(s,n)},"parseArr\
ay"),La=a(function(r){return r.toString("utf8")},"parseText"),Ra=a(function(r){return r===
null?null:R(r,8)>0},"parseBool"),Fa=a(function(r){r(20,Ca),r(21,Ia),r(23,Ai),r(26,
Ai),r(1700,Ba),r(700,Ta),r(701,Pa),r(16,Ra),r(1114,Ci.bind(null,!1)),r(1184,Ci.bind(
null,!0)),r(1e3,Ye),r(1007,Ye),r(1016,Ye),r(1008,Ye),r(1009,Ye),r(25,La)},"init");
Ti.exports={init:Fa}});var Li=I((Uh,Bi)=>{p();Bi.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Xe=I(Je=>{p();var Ma=Ei(),Da=Pi(),Oa=Wt(),ka=Li();Je.getTypeParser=Ua;Je.setTypeParser=
qa;Je.arrayParser=Oa;Je.builtins=ka;var Ze={text:{},binary:{}};function Ri(r){return String(
r)}a(Ri,"noParse");function Ua(r,e){return e=e||"text",Ze[e]&&Ze[e][r]||Ri}a(Ua,
"getTypeParser");function qa(r,e,t){typeof e=="function"&&(t=e,e="text"),Ze[e][r]=
t}a(qa,"setTypeParser");Ma.init(function(r,e){Ze.text[r]=e});Da.init(function(r,e){
Ze.binary[r]=e})});var et=I((jh,Yt)=>{"use strict";p();Yt.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Me=Xe(),Na=Me.getTypeParser(
20,"text"),Qa=Me.getTypeParser(1016,"text");Yt.exports.__defineSetter__("parseIn\
t8",function(r){Me.setTypeParser(20,"text",r?Me.getTypeParser(23,"text"):Na),Me.
setTypeParser(1016,"text",r?Me.getTypeParser(1007,"text"):Qa)})});var tt=I((Gh,Mi)=>{"use strict";p();var Wa=(qt(),k(Ut)),ja=et();function Ha(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Ha,"escapeElement");
function Fi(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Fi(r[t]):r[t]instanceof d?e+="\\\\x"+r[t].
toString("hex"):e+=Ha(ft(r[t]));return e=e+"}",e}a(Fi,"arrayString");var ft=a(function(r,e){
if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?ja.parseInputDatesAsUTC?
Ka(r):$a(r):Array.isArray(r)?Fi(r):typeof r=="object"?Ga(r,e):r.toString()},"pre\
pareValue");function Ga(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),ft(r.toPostgres(ft),e)}return JSON.stringify(r)}
a(Ga,"prepareObject");function j(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}a(
j,"pad");function $a(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=j(t,4)+"-"+j(r.getMonth()+1,2)+"-"+j(r.getDate(),2)+"T"+
j(r.getHours(),2)+":"+j(r.getMinutes(),2)+":"+j(r.getSeconds(),2)+"."+j(r.getMilliseconds(),
3);return e<0?(i+="-",e*=-1):i+="+",i+=j(Math.floor(e/60),2)+":"+j(e%60,2),n&&(i+=
" BC"),i}a($a,"dateToString");function Ka(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=
Math.abs(e)+1);var n=j(e,4)+"-"+j(r.getUTCMonth()+1,2)+"-"+j(r.getUTCDate(),2)+"\
T"+j(r.getUTCHours(),2)+":"+j(r.getUTCMinutes(),2)+":"+j(r.getUTCSeconds(),2)+"."+
j(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Ka,"dateToStrin\
gUTC");function Va(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="\
function"?r.callback=e:r.values=e),t&&(r.callback=t),r}a(Va,"normalizeQueryConfi\
g");var Zt=a(function(r){return Wa.createHash("md5").update(r,"utf-8").digest("h\
ex")},"md5"),za=a(function(r,e,t){var n=Zt(e+r),i=Zt(d.concat([d.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");Mi.exports={prepareValue:a(function(e){return ft(
e)},"prepareValueWrapper"),normalizeQueryConfig:Va,postgresMd5PasswordHash:za,md5:Zt}});var qi=I((Vh,Ui)=>{"use strict";p();var Jt=(qt(),k(Ut));function Ya(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Jt.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(Ya,"startSession");function Za(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=eu(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=d.from(n.salt,"base64"),s=nu(e,
i,n.iteration),o=De(s,"Client Key"),u=ru(o),c="n=*,r="+r.clientNonce,h="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,l="c=biws,r="+n.nonce,y=c+","+h+","+l,E=De(u,y),_=ki(
o,E),P=_.toString("base64"),N=De(s,"Server Key"),J=De(N,y);r.message="SASLRespon\
se",r.serverSignature=J.toString("base64"),r.response=l+",p="+P}a(Za,"continueSe\
ssion");function Ja(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=tu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(Ja,"finalizeSession");function Xa(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(Xa,"isPrintableC\
hars");function Di(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Di,"isBase64");function Oi(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(Oi,"parseAttributePairs");function eu(r){let e=Oi(
r),t=e.get("r");if(t){if(!Xa(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Di(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(eu,"parseServerFirstMe\
ssage");function tu(r){let t=Oi(r).get("v");if(t){if(!Di(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(tu,"parseServerFinalMessage");function ki(r,e){if(!d.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return d.
from(r.map((t,n)=>r[n]^e[n]))}a(ki,"xorBuffers");function ru(r){return Jt.createHash(
"sha256").update(r).digest()}a(ru,"sha256");function De(r,e){return Jt.createHmac(
"sha256",r).update(e).digest()}a(De,"hmacSha256");function nu(r,e,t){for(var n=De(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=De(r,n),i=ki(i,n);return i}
a(nu,"Hi");Ui.exports={startSession:Ya,continueSession:Za,finalizeSession:Ja}});var Xt={};X(Xt,{join:()=>iu});function iu(...r){return r.join("/")}var er=K(()=>{
"use strict";p();a(iu,"join")});var tr={};X(tr,{stat:()=>su});function su(r,e){e(new Error("No filesystem"))}var rr=K(
()=>{"use strict";p();a(su,"stat")});var nr={};X(nr,{default:()=>ou});var ou,ir=K(()=>{"use strict";p();ou={}});var Ni={};X(Ni,{StringDecoder:()=>sr});var or,sr,Qi=K(()=>{"use strict";p();or=class or{constructor(e){
T(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};a(or,"StringDecoder");sr=or});var Gi=I((il,Hi)=>{"use strict";p();var{Transform:au}=(ir(),k(nr)),{StringDecoder:uu}=(Qi(),k(Ni)),
we=Symbol("last"),pt=Symbol("decoder");function cu(r,e,t){let n;if(this.overflow){
if(n=this[pt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[we]+=this[pt].write(r),n=this[we].split(this.matcher);this[we]=
n.pop();for(let i=0;i<n.length;i++)try{ji(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[we].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(cu,"transform");function hu(r){
if(this[we]+=this[pt].end(),this[we])try{ji(this,this.mapper(this[we]))}catch(e){
return r(e)}r()}a(hu,"flush");function ji(r,e){e!==void 0&&r.push(e)}a(ji,"push");
function Wi(r){return r}a(Wi,"noop");function lu(r,e,t){switch(r=r||/\r?\n/,e=e||
Wi,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Wi)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=cu,t.flush=hu,t.readableObjectMode=!0;
let n=new au(t);return n[we]="",n[pt]=new uu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}a(lu,"split");Hi.exports=lu});var Vi=I((al,fe)=>{"use strict";p();var $i=(er(),k(Xt)),fu=(ir(),k(nr)).Stream,pu=Gi(),
Ki=(Ge(),k(He)),du=5432,dt=m.platform==="win32",rt=m.stderr,yu=56,mu=7,gu=61440,
wu=32768;function bu(r){return(r&gu)==wu}a(bu,"isRegFile");var Oe=["host","port",
"database","user","password"],ar=Oe.length,Su=Oe[ar-1];function ur(){var r=rt instanceof
fu&&rt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);rt.write(Ki.format.apply(Ki,e))}}a(ur,"warn");Object.defineProperty(fe.exports,
"isWin",{get:function(){return dt},set:function(r){dt=r}});fe.exports.warnTo=function(r){
var e=rt;return rt=r,e};fe.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||
(dt?$i.join(e.APPDATA||"./","postgresql","pgpass.conf"):$i.join(e.HOME||"./",".p\
gpass"));return t};fe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(m.env,"PGPASSWORD")?!1:dt?!0:(e=e||"<unkn>",bu(r.mode)?r.mode&(yu|mu)?(ur('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(ur('WARNING: password file "%s" is not a plain file',
e),!1))};var xu=fe.exports.match=function(r,e){return Oe.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||du)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};fe.exports.getPassword=function(r,e,t){var n,i=e.pipe(pu());function s(c){var h=Eu(
c);h&&vu(h)&&xu(r,h)&&(n=h[Su],i.end())}a(s,"onLine");var o=a(function(){e.destroy(),
t(n)},"onEnd"),u=a(function(c){e.destroy(),ur("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",
u)};var Eu=fe.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(function(l,y,E){var _=r.substring(y,
E);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(_=_.replace(/\\([:\\])/g,
"$1")),o[Oe[l]]=_},"addToObj"),h=0;h<r.length-1;h+=1){if(e=r.charAt(h+1),t=r.charAt(
h),u=n==ar-1,u){c(n,i);break}h>=0&&e==":"&&t!=="\\"&&(c(n,i,h+1),i=h+2,n+=1)}return o=
Object.keys(o).length===ar?o:null,o},vu=fe.exports.isValidEntry=function(r){for(var e={
0:function(o){return o.length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(
o)&&o>0&&o<9007199254740992&&Math.floor(o)===o)},2:function(o){return o.length>0},
3:function(o){return o.length>0},4:function(o){return o.length>0}},t=0;t<Oe.length;t+=
1){var n=e[t],i=r[Oe[t]]||"",s=n(i);if(!s)return!1}return!0}});var Yi=I((ll,cr)=>{"use strict";p();var hl=(er(),k(Xt)),zi=(rr(),k(tr)),yt=Vi();
cr.exports=function(r,e){var t=yt.getFileName();zi.stat(t,function(n,i){if(n||!yt.
usePgPass(i,t))return e(void 0);var s=zi.createReadStream(t);yt.getPassword(r,s,
e)})};cr.exports.warnTo=yt.warnTo});var hr=I((pl,Zi)=>{"use strict";p();var _u=Xe();function mt(r){this._types=r||_u,
this.text={},this.binary={}}a(mt,"TypeOverrides");mt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
mt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};mt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Zi.exports=mt});var Ji={};X(Ji,{default:()=>Au});var Au,Xi=K(()=>{"use strict";p();Au={}});var es={};X(es,{parse:()=>lr});function lr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:h,
search:l,searchParams:y,hash:E}=new URL(n);s=decodeURIComponent(s);let _=i+":"+s,
P=e?Object.fromEntries(y.entries()):l;return{href:r,protocol:t,auth:_,username:i,
password:s,host:o,hostname:u,port:c,pathname:h,search:l,query:P,hash:E}}var fr=K(
()=>{"use strict";p();a(lr,"parse")});var rs=I((bl,ts)=>{"use strict";p();var Cu=(fr(),k(es)),pr=(rr(),k(tr));function dr(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=Cu.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var o=s.split("/");t.host=decodeURIComponent(
o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=pr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=pr.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=pr.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(dr,"parse");ts.exports=dr;dr.parse=dr});var gt=I((El,ss)=>{"use strict";p();var Iu=(Xi(),k(Ji)),is=et(),ns=rs().parse,V=a(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||is[r]},"val"),Tu=a(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return is.ssl},"readSSLConfigFromEnvironment"),ke=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),re=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+ke(n))},"ad\
d"),mr=class mr{constructor(e){e=typeof e=="string"?ns(e):e||{},e.connectionString&&
(e=Object.assign({},e,ns(e.connectionString))),this.user=V("user",e),this.database=
V("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
V("port",e),10),this.host=V("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:V("password",e)}),this.binary=V("binary",e),this.
options=V("options",e),this.ssl=typeof e.ssl>"u"?Tu():e.ssl,typeof this.ssl=="st\
ring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=V("client_encoding",e),this.replication=V("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=V("applicatio\
n_name",e,"PGAPPNAME"),this.fallback_application_name=V("fallback_application_na\
me",e,!1),this.statement_timeout=V("statement_timeout",e,!1),this.lock_timeout=V(
"lock_timeout",e,!1),this.idle_in_transaction_session_timeout=V("idle_in_transac\
tion_session_timeout",e,!1),this.query_timeout=V("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
re(t,this,"user"),re(t,this,"password"),re(t,this,"port"),re(t,this,"application\
_name"),re(t,this,"fallback_application_name"),re(t,this,"connect_timeout"),re(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(re(t,n,"sslmode"),re(t,n,"sslca"),re(t,n,"sslkey"),re(t,n,"sslcert"),
re(t,n,"sslrootcert"),this.database&&t.push("dbname="+ke(this.database)),this.replication&&
t.push("replication="+ke(this.replication)),this.host&&t.push("host="+ke(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+ke(this.client_encoding)),Iu.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+ke(s)),e(null,t.join(" ")))})}};a(mr,"ConnectionPa\
rameters");var yr=mr;ss.exports=yr});var us=I((Al,as)=>{"use strict";p();var Pu=Xe(),os=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
wr=class wr{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=os.exec(e.text):t=os.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){
var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},
n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Pu.getTypeParser(n.dataTypeID,n.format||"text")}}};a(wr,"\
Result");var gr=wr;as.exports=gr});var fs=I((Tl,ls)=>{"use strict";p();var{EventEmitter:Bu}=ge(),cs=us(),hs=tt(),Sr=class Sr extends Bu{constructor(e,t,n){
super(),e=hs.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,m.domain&&e.callback&&
(this.callback=m.domain.bind(e.callback)),this._result=new cs(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new cs(
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
binary,valueMapper:hs.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Sr,"Query");
var br=Sr;ls.exports=br});var ds={};X(ds,{Socket:()=>_e,isIP:()=>Lu});function Lu(r){return 0}var ps,x,_e,
wt=K(()=>{"use strict";p();ps=We(ge(),1);a(Lu,"isIP");x=class x extends ps.EventEmitter{constructor(){
super(...arguments);T(this,"opts",{});T(this,"connecting",!1);T(this,"pending",!0);
T(this,"writable",!0);T(this,"encrypted",!1);T(this,"authorized",!1);T(this,"des\
troyed",!1);T(this,"ws",null);T(this,"writeBuffer");T(this,"tlsState",0);T(this,
"tlsRead");T(this,"tlsWrite")}static get poolQueryViaFetch(){return x.opts.poolQueryViaFetch??
x.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){x.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return x.opts.fetchEndpoint??x.defaults.fetchEndpoint}static set fetchEndpoint(t){
x.opts.fetchEndpoint=t}static get fetchConnectionCache(){return x.opts.fetchConnectionCache??
x.defaults.fetchConnectionCache}static set fetchConnectionCache(t){x.opts.fetchConnectionCache=
t}static get fetchFunction(){return x.opts.fetchFunction??x.defaults.fetchFunction}static set fetchFunction(t){
x.opts.fetchFunction=t}static get webSocketConstructor(){return x.opts.webSocketConstructor??
x.defaults.webSocketConstructor}static set webSocketConstructor(t){x.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??x.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return x.opts.wsProxy??x.defaults.
wsProxy}static set wsProxy(t){x.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
x.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return x.
opts.coalesceWrites??x.defaults.coalesceWrites}static set coalesceWrites(t){x.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??x.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return x.opts.useSecureWebSocket??
x.defaults.useSecureWebSocket}static set useSecureWebSocket(t){x.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??x.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return x.opts.forceDisablePgSSL??
x.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){x.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??x.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return x.opts.disableSNI??
x.defaults.disableSNI}static set disableSNI(t){x.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??x.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return x.opts.pipelineConnect??x.defaults.pipelineConnect}static set pipelineConnect(t){
x.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
x.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return x.opts.subtls??x.defaults.subtls}static set subtls(t){x.opts.subtls=t}get subtls(){
return this.opts.subtls??x.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return x.opts.pipelineTLS??x.defaults.pipelineTLS}static set pipelineTLS(t){x.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??x.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return x.opts.rootCerts??x.defaults.
rootCerts}static set rootCerts(t){x.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??x.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof i=="functi\
on"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){return this}ref(){
return this}unref(){return this}connect(t,n,i){this.connecting=!0,i&&this.once("\
connect",i);let s=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),
this.emit("ready")},"handleWebSocketOpen"),o=a((c,h=!1)=>{c.binaryType="arraybuf\
fer",c.addEventListener("error",l=>{this.emit("error",l),this.emit("close")}),c.
addEventListener("message",l=>{if(this.tlsState===0){let y=d.from(l.data);this.emit(
"data",y)}}),c.addEventListener("close",()=>{this.emit("close")}),h?s():c.addEventListener(
"open",s)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="st\
ring"?parseInt(t,10):t)}catch(c){this.emit("error",c),this.emit("close");return}
try{let h=(this.useSecureWebSocket?"wss:":"ws:")+"//"+u;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(h),o(this.ws);else try{this.ws=new WebSocket(
h),o(this.ws)}catch{this.ws=new __unstable_WebSocket(h),o(this.ws)}}catch(c){let l=(this.
useSecureWebSocket?"https:":"http:")+"//"+u;fetch(l,{headers:{Upgrade:"websocket"}}).
then(y=>{if(this.ws=y.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,
!0)}).catch(y=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${y.message}`)),this.emit("close")})}}async startTls(t){if(this.subtls===
void 0)throw new Error("For Postgres SSL connections, you must set `neonConfig.s\
ubtls` to the subtls library. See https://github.com/neondatabase/serverless/blo\
b/main/CONFIG.md for more information.");this.tlsState=1;let n=this.subtls.TrustedCert.
fromPEM(this.rootCerts),i=new this.subtls.WebSocketReadQueue(this.ws),s=i.read.bind(
i),o=this.rawWrite.bind(this),[u,c]=await this.subtls.startTls(t,n,s,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=
u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){let t=await this.
tlsRead();if(t===void 0)break;{let n=d.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===void 0)this.
writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},
0);else{let n=new Uint8Array(this.writeBuffer.length+t.length);n.set(this.writeBuffer),
n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="utf8",i=s=>{}){return t.
length===0?(i(),!0):(typeof t=="string"&&(t=d.from(t,n)),this.tlsState===0?(this.
rawWrite(t),i()):this.tlsState===1?this.once("secureConnection",()=>{this.write(
t,n,i)}):(this.tlsWrite(t),i()),!0)}end(t=d.alloc(0),n="utf8",i=()=>{}){return this.
write(t,n,()=>{this.ws.close(),i()}),this}destroy(){return this.destroyed=!0,this.
end()}};a(x,"Socket"),T(x,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:t=>"htt\
ps://"+t+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
T(x,"opts",{});_e=x});var zr=I(C=>{"use strict";p();Object.defineProperty(C,"__esModule",{value:!0});C.
NoticeMessage=C.DataRowMessage=C.CommandCompleteMessage=C.ReadyForQueryMessage=C.
NotificationResponseMessage=C.BackendKeyDataMessage=C.AuthenticationMD5Password=
C.ParameterStatusMessage=C.ParameterDescriptionMessage=C.RowDescriptionMessage=C.
Field=C.CopyResponse=C.CopyDataMessage=C.DatabaseError=C.copyDone=C.emptyQuery=C.
replicationStart=C.portalSuspended=C.noData=C.closeComplete=C.bindComplete=C.parseComplete=
void 0;C.parseComplete={name:"parseComplete",length:5};C.bindComplete={name:"bin\
dComplete",length:5};C.closeComplete={name:"closeComplete",length:5};C.noData={name:"\
noData",length:5};C.portalSuspended={name:"portalSuspended",length:5};C.replicationStart=
{name:"replicationStart",length:4};C.emptyQuery={name:"emptyQuery",length:4};C.copyDone=
{name:"copyDone",length:4};var Dr=class Dr extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};a(Dr,"DatabaseError");var xr=Dr;C.DatabaseError=xr;
var Or=class Or{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
a(Or,"CopyDataMessage");var Er=Or;C.CopyDataMessage=Er;var kr=class kr{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(kr,"Co\
pyResponse");var vr=kr;C.CopyResponse=vr;var Ur=class Ur{constructor(e,t,n,i,s,o,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=o,this.format=u}};a(Ur,"Field");var _r=Ur;C.Field=_r;var qr=class qr{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};a(qr,"RowDescriptionMessage");var Ar=qr;C.RowDescriptionMessage=
Ar;var Nr=class Nr{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};a(Nr,"P\
arameterDescriptionMessage");var Cr=Nr;C.ParameterDescriptionMessage=Cr;var Qr=class Qr{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};a(Qr,"ParameterStatusMessage");var Ir=Qr;C.ParameterStatusMessage=Ir;var Wr=class Wr{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};a(Wr,"Authenti\
cationMD5Password");var Tr=Wr;C.AuthenticationMD5Password=Tr;var jr=class jr{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(jr,
"BackendKeyDataMessage");var Pr=jr;C.BackendKeyDataMessage=Pr;var Hr=class Hr{constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};a(Hr,"NotificationResponseMessage");var Br=Hr;C.NotificationResponseMessage=
Br;var Gr=class Gr{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};a(Gr,"ReadyForQueryMessage");var Lr=Gr;C.ReadyForQueryMessage=Lr;var $r=class $r{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};a($r,"CommandCompleteMes\
sage");var Rr=$r;C.CommandCompleteMessage=Rr;var Kr=class Kr{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(Kr,"Data\
RowMessage");var Fr=Kr;C.DataRowMessage=Fr;var Vr=class Vr{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};a(Vr,"NoticeMessage");var Mr=Vr;C.NoticeMessage=
Mr});var ys=I(bt=>{"use strict";p();Object.defineProperty(bt,"__esModule",{value:!0});
bt.Writer=void 0;var Zr=class Zr{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(
i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=d.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=d.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}};a(Zr,"Wr\
iter");var Yr=Zr;bt.Writer=Yr});var gs=I(xt=>{"use strict";p();Object.defineProperty(xt,"__esModule",{value:!0});
xt.serialize=void 0;var Jr=ys(),F=new Jr.Writer,Ru=a(r=>{F.addInt16(3).addInt16(
0);for(let n of Object.keys(r))F.addCString(n).addCString(r[n]);F.addCString("cl\
ient_encoding").addCString("UTF8");var e=F.addCString("").flush(),t=e.length+4;return new Jr.
Writer().addInt32(t).add(e).flush()},"startup"),Fu=a(()=>{let r=d.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Mu=a(r=>F.
addCString(r).flush(112),"password"),Du=a(function(r,e){return F.addCString(r).addInt32(
d.byteLength(e)).addString(e),F.flush(112)},"sendSASLInitialResponseMessage"),Ou=a(
function(r){return F.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),ku=a(
r=>F.addCString(r).flush(81),"query"),ms=[],Uu=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ms;for(var n=t.length,
i=F.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return F.
flush(80)},"parse"),Ue=new Jr.Writer,qu=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(F.addInt16(0),Ue.addInt32(-1)):n instanceof d?(F.
addInt16(1),Ue.addInt32(n.length),Ue.add(n)):(F.addInt16(0),Ue.addInt32(d.byteLength(
n)),Ue.addString(n))}},"writeValues"),Nu=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ms,s=i.length;return F.addCString(e).addCString(t),
F.addInt16(s),qu(i,r.valueMapper),F.addInt16(s),F.add(Ue.flush()),F.addInt16(n?1:
0),F.flush(66)},"bind"),Qu=d.from([69,0,0,0,9,0,0,0,0,0]),Wu=a(r=>{if(!r||!r.portal&&
!r.rows)return Qu;let e=r.portal||"",t=r.rows||0,n=d.byteLength(e),i=4+n+1+4,s=d.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),ju=a((r,e)=>{let t=d.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Xr=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Hu=F.addCString("P").flush(68),Gu=F.addCString("S").flush(68),
$u=a(r=>r.name?Xr(68,`${r.type}${r.name||""}`):r.type==="P"?Hu:Gu,"describe"),Ku=a(
r=>{let e=`${r.type}${r.name||""}`;return Xr(67,e)},"close"),Vu=a(r=>F.add(r).flush(
100),"copyData"),zu=a(r=>Xr(102,r),"copyFail"),St=a(r=>d.from([r,0,0,0,4]),"code\
OnlyBuffer"),Yu=St(72),Zu=St(83),Ju=St(88),Xu=St(99),ec={startup:Ru,password:Mu,
requestSsl:Fu,sendSASLInitialResponseMessage:Du,sendSCRAMClientFinalMessage:Ou,query:ku,
parse:Uu,bind:Nu,execute:Wu,describe:$u,close:Ku,flush:()=>Yu,sync:()=>Zu,end:()=>Ju,
copyData:Vu,copyDone:()=>Xu,copyFail:zu,cancel:ju};xt.serialize=ec});var ws=I(Et=>{"use strict";p();Object.defineProperty(Et,"__esModule",{value:!0});
Et.BufferReader=void 0;var tc=d.allocUnsafe(0),tn=class tn{constructor(e=0){this.
offset=e,this.buffer=tc,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};a(tn,"BufferReader");var en=tn;Et.BufferReader=
en});var bs={};X(bs,{default:()=>rc});var rc,Ss=K(()=>{"use strict";p();rc={}});var vs=I(qe=>{"use strict";p();var nc=qe&&qe.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(qe,"__esModule",{value:!0});qe.
Parser=void 0;var M=zr(),ic=ws(),sc=nc((Ss(),k(bs))),rn=1,oc=4,xs=rn+oc,Es=d.allocUnsafe(
0),sn=class sn{constructor(e){if(this.buffer=Es,this.bufferLength=0,this.bufferOffset=
0,this.reader=new ic.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+xs<=n;){let s=this.buffer[i],
o=this.buffer.readUInt32BE(i+rn),u=rn+o;if(u+i<=n){let c=this.handlePacket(i+xs,
s,o,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=Es,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
d.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return M.bindComplete;case 49:return M.parseComplete;case 51:return M.
closeComplete;case 110:return M.noData;case 115:return M.portalSuspended;case 99:
return M.copyDone;case 87:return M.replicationStart;case 73:return M.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:sc.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new M.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new M.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new M.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,o=this.reader.int16(),u=new M.CopyResponse(t,i,s,o);for(let c=0;c<o;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();return new M.
NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new M.RowDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.fields[o]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),o=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new M.
Field(e,t,n,i,s,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new M.ParameterDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){
let u=this.reader.int32();s[o]=u===-1?null:this.reader.string(u)}return new M.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new M.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new M.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new M.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},o=this.reader.string(1);for(;o!=="\0";)s[o]=
this.reader.cstring(),o=this.reader.string(1);let u=s.M,c=i==="notice"?new M.NoticeMessage(
t,u):new M.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};a(sn,"Parser");var nn=sn;qe.Parser=nn});var on=I(be=>{"use strict";p();Object.defineProperty(be,"__esModule",{value:!0});
be.DatabaseError=be.serialize=be.parse=void 0;var ac=zr();Object.defineProperty(
be,"DatabaseError",{enumerable:!0,get:function(){return ac.DatabaseError}});var uc=gs();
Object.defineProperty(be,"serialize",{enumerable:!0,get:function(){return uc.serialize}});
var cc=vs();function hc(r,e){let t=new cc.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}a(hc,"parse");be.parse=hc});var _s={};X(_s,{connect:()=>lc});function lc({socket:r,servername:e}){return r.startTls(
e),r}var As=K(()=>{"use strict";p();a(lc,"connect")});var cn=I((ef,Ts)=>{"use strict";p();var Cs=(wt(),k(ds)),fc=ge().EventEmitter,{parse:pc,
serialize:q}=on(),Is=q.flush(),dc=q.sync(),yc=q.end(),un=class un extends fc{constructor(e){
super(),e=e||{},this.stream=e.stream||new Cs.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){n._ending&&
(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");
if(this.stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.
ssl)return this.attachListeners(this.stream);this.stream.once("data",function(s){
var o=s.toString("utf8");switch(o){case"S":break;case"N":return n.stream.end(),n.
emit("error",new Error("The server does not support SSL connections"));default:return n.
stream.end(),n.emit("error",new Error("There was an error establishing an SSL co\
nnection"))}var u=(As(),k(_s));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Cs.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(h){return n.emit("error",h)}n.attachListeners(n.stream),
n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),pc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(q.requestSsl())}startup(e){
this.stream.write(q.startup(e))}cancel(e,t){this._send(q.cancel(e,t))}password(e){
this._send(q.password(e))}sendSASLInitialResponseMessage(e,t){this._send(q.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(q.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(q.query(
e))}parse(e){this._send(q.parse(e))}bind(e){this._send(q.bind(e))}execute(e){this.
_send(q.execute(e))}flush(){this.stream.writable&&this.stream.write(Is)}sync(){this.
_ending=!0,this._send(Is),this._send(dc)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(yc,()=>{this.stream.end()})}close(e){
this._send(q.close(e))}describe(e){this._send(q.describe(e))}sendCopyFromChunk(e){
this._send(q.copyData(e))}endCopyFrom(){this._send(q.copyDone())}sendCopyFail(e){
this._send(q.copyFail(e))}};a(un,"Connection");var an=un;Ts.exports=an});var Ls=I((sf,Bs)=>{"use strict";p();var mc=ge().EventEmitter,nf=(Ge(),k(He)),gc=tt(),
hn=qi(),wc=Yi(),bc=hr(),Sc=gt(),Ps=fs(),xc=et(),Ec=cn(),ln=class ln extends mc{constructor(e){
super(),this.connectionParameters=new Sc(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||b.Promise,this._types=new bc(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Ec({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||xc.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=a(
n=>{m.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let i=new Error("Client has already been conn\
ected. You cannot reuse a client.");m.nextTick(()=>{e(i)});return}this._connecting=
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
i)),m.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
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
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():wc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=gc.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=hn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
hn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){hn.finalizeSession(this.saslSession,
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
emit("drain"))}query(e,t,n){var i,s,o,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(o=this.connectionParameters.query_timeout,i=new Ps(
e,t,n),i.callback||(s=new this._Promise((h,l)=>{i.callback=(y,E)=>y?l(y):h(E)}))),
o&&(c=i.callback,u=setTimeout(()=>{var h=new Error("Query read timeout");m.nextTick(
()=>{i.handleError(h,this.connection)}),c(h),i.callback=()=>{};var l=this.queryQueue.
indexOf(i);l>-1&&this.queryQueue.splice(l,1),this._pulseQueryQueue()},o),i.callback=
(h,l)=>{clearTimeout(u),c(h,l)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(m.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(m.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(ln,"Client");var vt=ln;vt.Query=
Ps;Bs.exports=vt});var Ds=I((uf,Ms)=>{"use strict";p();var vc=ge().EventEmitter,Rs=a(function(){},"\
NOOP"),Fs=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),dn=class dn{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};a(dn,"IdleItem");var fn=dn,yn=class yn{constructor(e){this.callback=
e}};a(yn,"PendingItem");var Ne=yn;function _c(){throw new Error("Release called \
on client which has already been released to the pool.")}a(_c,"throwOnDoubleRele\
ase");function _t(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){
o?t(o):n(u)},"cb"),s=new r(function(o,u){n=o,t=u}).catch(o=>{throw Error.captureStackTrace(
o),o});return{callback:i,result:s}}a(_t,"promisify");function Ac(r,e){return a(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}a(Ac,"makeIdleListener");var mn=class mn extends vc{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||At().Client,this.Promise=
this.options.Promise||b.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
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
throw new Error("unexpected condition")}_remove(e){let t=Fs(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Can\
not use a pool after calling end on the pool");return e?e(i):this.Promise.reject(
i)}let t=_t(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&m.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new Ne(t.callback)),n;let i=a((u,c,h)=>{clearTimeout(
o),t.callback(u,c,h)},"queueCallback"),s=new Ne(i),o=setTimeout(()=>{Fs(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(s),n}return this.newClient(new Ne(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=Ac(this,t);this.log("checking c\
lient timeout");let i,s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{
this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(o=>{if(i&&clearTimeout(i),t.on("error",n),o)this.log("client failed to\
 connect",o),this._clients=this._clients.filter(u=>u!==t),s&&(o.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
o,void 0,Rs);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(h=>h.client===t)!==-1&&this._acquireClient(
t,new Ne((h,l,y)=>y()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,Rs);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&_c(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new fn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=_t(this.Promise,e);
return S(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=_t(this.Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)
return n(s);let u=!1,c=a(h=>{u||(u=!0,o.release(h),n(h))},"onError");o.once("err\
or",c),this.log("dispatching query");try{o.query(e,t,(h,l)=>{if(this.log("query \
dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(h),h?n(h):n(void 0,
l)})}catch(h){return o.release(h),n(h)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=_t(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(mn,"Pool");var pn=mn;Ms.exports=pn});var Os={};X(Os,{default:()=>Cc});var Cc,ks=K(()=>{"use strict";p();Cc={}});var Us=I((ff,Ic)=>{Ic.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var Qs=I((pf,Ns)=>{"use strict";p();var qs=ge().EventEmitter,Tc=(Ge(),k(He)),gn=tt(),
Qe=Ns.exports=function(r,e,t){qs.call(this),r=gn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Tc.inherits(
Qe,qs);var Pc={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Qe.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Pc[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Qe.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Qe.prototype.catch=function(r){return this._getPromise().
catch(r)};Qe.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Qe.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(s,o,u){if(r.native.arrayMode=!1,S(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?o.forEach((c,h)=>{c.forEach(l=>{e.emit(
"row",l,u[h])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(gn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(gn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Gs=I((gf,Hs)=>{"use strict";p();var Bc=(ks(),k(Os)),Lc=hr(),mf=Us(),Ws=ge().
EventEmitter,Rc=(Ge(),k(He)),Fc=gt(),js=Qs(),Z=Hs.exports=function(r){Ws.call(this),
r=r||{},this._Promise=r.Promise||b.Promise,this._types=new Lc(r.types),this.native=
new Bc({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Fc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};Z.Query=js;Rc.inherits(Z,Ws);Z.prototype._errorAllQueries=
function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};Z.prototype._connect=
function(r){var e=this;if(this._connecting){m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};Z.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};Z.prototype.query=function(r,e,t){var n,
i,s,o,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new js(r,e,t),!n.callback){let c,h;i=new this._Promise((l,y)=>{c=
l,h=y}),n.callback=(l,y)=>l?h(l):c(y)}return s&&(u=n.callback,o=setTimeout(()=>{
var c=new Error("Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var h=this._queryQueue.indexOf(n);h>-1&&this._queryQueue.
splice(h,1),this._pulseQueryQueue()},s),n.callback=(c,h)=>{clearTimeout(o),u(c,h)}),
this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
Z.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=a(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),m.nextTick(()=>{e.emit("end"),r&&r()})}),t};Z.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};Z.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};Z.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};Z.prototype.ref=function(){};
Z.prototype.unref=function(){};Z.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};Z.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var wn=I((Sf,$s)=>{"use strict";p();$s.exports=Gs()});var At=I((Ef,nt)=>{"use strict";p();var Mc=Ls(),Dc=et(),Oc=cn(),kc=Ds(),{DatabaseError:Uc}=on(),
qc=a(r=>{var e;return e=class extends kc{constructor(n){super(n,r)}},a(e,"BoundP\
ool"),e},"poolFactory"),bn=a(function(r){this.defaults=Dc,this.Client=r,this.Query=
this.Client.Query,this.Pool=qc(this.Client),this._pools=[],this.Connection=Oc,this.
types=Xe(),this.DatabaseError=Uc},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?nt.
exports=new bn(wn()):(nt.exports=new bn(Mc),Object.defineProperty(nt.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new bn(wn())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(nt.exports,"\
native",{value:r}),r}}))});p();var Ct=We(At());wt();p();fr();wt();var zs=We(tt());var Sn=class Sn extends Error{constructor(){super(...arguments);T(this,"name","N\
eonDbError");T(this,"code",null);T(this,"sourceError")}};a(Sn,"NeonDbError");var Ae=Sn,
Ks="transaction() expects an array of queries, or a function returning an array \
of queries";function Ys(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,
readOnly:s,deferrable:o,queryCallback:u,resultCallback:c}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment \
variable has not been set?");let h;try{h=lr(r)}catch{throw new Error("Database c\
onnection string provided to `neon()` is not a valid URL. Connection string: "+String(
r))}let{protocol:l,username:y,password:E,hostname:_,port:P,pathname:N}=h;if(l!==
"postgres:"&&l!=="postgresql:"||!y||!E||!_||!N)throw new Error("Database connect\
ion string format for `neon()` should be: postgresql://user:password@host.tld/db\
name?option=value");function J(A,...g){let D,H;if(typeof A=="string")D=A,H=g[1],
g=g[0]??[];else{D="";for(let W=0;W<A.length;W++)D+=A[W],W<g.length&&(D+="$"+(W+1))}
g=g.map(W=>(0,zs.prepareValue)(W));let Q={query:D,params:g};return u&&u(Q),Nc(pe,
Q,H)}a(J,"resolve"),J.transaction=async(A,g)=>{if(typeof A=="function"&&(A=A(J)),
!Array.isArray(A))throw new Error(Ks);let D=A.map(H=>{if(H[Symbol.toStringTag]!==
"NeonQueryPromise")throw new Error(Ks);return H.parameterizedQuery});return pe(D,
g)};async function pe(A,g){let D=n??{},{fetchEndpoint:H,fetchConnectionCache:Q,fetchFunction:W}=_e,
ue=typeof H=="function"?H(_,P):H,de=Array.isArray(A)?{queries:A}:A,L=e??!1,G=t??
!1,ce=i,ye=s,xe=o;g!==void 0&&(g.arrayMode!==void 0&&(L=g.arrayMode),g.fullResults!==
void 0&&(G=g.fullResults),g.fetchOptions!==void 0&&(D={...D,...g.fetchOptions}),
g.isolationLevel!==void 0&&(ce=g.isolationLevel),g.readOnly!==void 0&&(ye=g.readOnly),
g.deferrable!==void 0&&(xe=g.deferrable));let he={"Neon-Connection-String":r,"Ne\
on-Raw-Text-Output":"true","Neon-Array-Mode":"true"};Q===!0&&(he["Neon-Pool-Opt-\
In"]="true"),Array.isArray(A)&&(ce!==void 0&&(he["Neon-Batch-Isolation-Level"]=ce),
ye!==void 0&&(he["Neon-Batch-Read-Only"]=String(ye)),xe!==void 0&&(he["Neon-Batc\
h-Deferrable"]=String(xe)));let ie;try{ie=await(W??fetch)(ue,{method:"POST",body:JSON.
stringify(de),headers:he,...D})}catch(se){let $=new Ae(`Error connecting to data\
base: ${se.message}`);throw $.sourceError=se,$}if(ie.ok){let se=await ie.json();
if(Array.isArray(A)){let $=se.results;if(!Array.isArray($))throw new Ae("Neon in\
ternal error: unexpected result format");return $.map((ne,Ce)=>Vs(ne,{arrayMode:L,
fullResults:G,parameterizedQuery:A[Ce],resultCallback:c}))}else return Vs(se,{arrayMode:L,
fullResults:G,parameterizedQuery:A,resultCallback:c})}else{let{status:se}=ie;if(se===
400){let{message:$,code:ne}=await ie.json(),Ce=new Ae($);throw Ce.code=ne,Ce}else{
let $=await ie.text();throw new Ae(`Server error (HTTP status ${se}): ${$}`)}}}return a(
pe,"execute"),J}a(Ys,"neon");function Nc(r,e,t){return{[Symbol.toStringTag]:"Neo\
nQueryPromise",parameterizedQuery:e,opts:t,then:(n,i)=>r(e,t).then(n,i),catch:n=>r(
e,t).catch(n),finally:n=>r(e,t).finally(n)}}a(Nc,"createNeonQueryPromise");function Vs(r,{
arrayMode:e,fullResults:t,parameterizedQuery:n,resultCallback:i}){let s=r.fields.
map(c=>c.name),o=r.fields.map(c=>Se.types.getTypeParser(c.dataTypeID)),u=e===!0?
r.rows.map(c=>c.map((h,l)=>h===null?null:o[l](h))):r.rows.map(c=>Object.fromEntries(
c.map((h,l)=>[s[l],h===null?null:o[l](h)])));return i&&i(n,r,u,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=u,r):u}a(Vs,"processQueryResult");var Js=We(gt()),Se=We(At());var En=class En extends Ct.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let i=this.config?.host!==void 0||this.config?.connectionString!==void 0||
m.env.PGHOST!==void 0,s=m.env.USER??m.env.USERNAME;if(!i&&this.host==="localhost"&&
this.user===s&&this.database===s&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${s}, db: ${s}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&
this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let h=this.
connection;if(u&&h.on("connect",()=>h.stream.emit("data","S")),c){h.removeAllListeners(
"authenticationCleartextPassword"),h.removeAllListeners("readyForQuery"),h.once(
"readyForQuery",()=>h.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let l=this.ssl?"sslconnect":"connect";h.on(l,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let o=Object.
fromEntries(s.split(",").map($=>{if(!/^.=/.test($))throw new Error("SASL: Invali\
d attribute pair entry");let ne=$[0],Ce=$.substring(2);return[ne,Ce]})),u=o.r,c=o.
s,h=o.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!h||!/^[1-9][0-9]*$/.test(h))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let l=parseInt(h,10),y=d.from(c,"base64"),E=new TextEncoder,
_=E.encode(i),P=await w.subtle.importKey("raw",_,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),N=new Uint8Array(await w.subtle.sign("HMAC",P,d.concat([y,d.from(
[0,0,0,1])]))),J=N;for(var pe=0;pe<l-1;pe++)N=new Uint8Array(await w.subtle.sign(
"HMAC",P,N)),J=d.from(J.map(($,ne)=>J[ne]^N[ne]));let A=J,g=await w.subtle.importKey(
"raw",A,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),D=new Uint8Array(await w.
subtle.sign("HMAC",g,E.encode("Client Key"))),H=await w.subtle.digest("SHA-256",
D),Q="n=*,r="+n.clientNonce,W="r="+u+",s="+c+",i="+l,ue="c=biws,r="+u,de=Q+","+W+
","+ue,L=await w.subtle.importKey("raw",H,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var G=new Uint8Array(await w.subtle.sign("HMAC",L,E.encode(de))),ce=d.
from(D.map(($,ne)=>D[ne]^G[ne])),ye=ce.toString("base64");let xe=await w.subtle.
importKey("raw",A,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),he=await w.subtle.
sign("HMAC",xe,E.encode("Server Key")),ie=await w.subtle.importKey("raw",he,{name:"\
HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var se=d.from(await w.subtle.sign("HMA\
C",ie,E.encode(de)));n.message="SASLResponse",n.serverSignature=se.toString("bas\
e64"),n.response=ue+",p="+ye,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};a(En,"NeonClient");var xn=En;function Qc(r,e){if(e)return{callback:e,
result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u});return{callback:i,result:s}}a(Qc,"promisify");var vn=class vn extends Ct.Pool{constructor(){
super(...arguments);T(this,"Client",xn);T(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!_e.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=Qc(this.Promise,
i);i=s.callback;try{let o=new Js.default(this.options),u=encodeURIComponent,c=encodeURI,
h=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,l=typeof t==
"string"?t:t.text,y=n??t.values??[];Ys(h,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(l,y).then(_=>i(void 0,_)).catch(_=>i(_))}catch(o){i(o)}return s.result}};
a(vn,"NeonPool");var Zs=vn;var export_ClientBase=Se.ClientBase;var export_Connection=Se.Connection;var export_DatabaseError=Se.DatabaseError;
var export_Query=Se.Query;var export_defaults=Se.defaults;var export_types=Se.types;
export{xn as Client,export_ClientBase as ClientBase,export_Connection as Connection,
export_DatabaseError as DatabaseError,Ae as NeonDbError,Zs as Pool,export_Query as Query,
export_defaults as defaults,Ys as neon,_e as neonConfig,export_types as types};
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
