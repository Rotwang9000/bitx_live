/*! For license information please see 881.bf5bc46e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbitx=self.webpackChunkbitx||[]).push([[881],{881:(t,r,e)=>{e.d(r,{serialize:()=>C});var n,a=e(4347),o=e(9226),i=(e(5121),e(261),e(4498),e(1778),e(1866),e(4042),e(3774),e(4501)),s={exports:{}};n=s,function(){var t="input is invalid type",r="object"==typeof window,e=r?window:{};e.JS_SHA3_NO_WINDOW&&(r=!1);var a=!r&&"object"==typeof self;!e.JS_SHA3_NO_NODE_JS&&"object"==typeof i&&i.versions&&i.versions.node?e=o.w:a&&(e=self);var s=!e.JS_SHA3_NO_COMMON_JS&&n.exports,u=!e.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",c="0123456789abcdef".split(""),h=[4,1024,262144,67108864],f=[0,8,16,24],l=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],p=[224,256,384,512],d=[128,256],g=["hex","buffer","arrayBuffer","array","digest"],y={128:168,256:136};(e.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),u&&(e.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var m=function(t,r,e){return function(n){return new I(t,r,t).update(n)[e]()}},w=function(t,r,e){return function(n,a){return new I(t,r,a).update(n)[e]()}},A=function(t,r,e){return function(r,n,a,o){return E["cshake"+t].update(r,n,a,o)[e]()}},v=function(t,r,e){return function(r,n,a,o){return E["kmac"+t].update(r,n,a,o)[e]()}},b=function(t,r,e,n){for(var a=0;a<g.length;++a){var o=g[a];t[o]=r(e,n,o)}return t},x=function(t,r){var e=m(t,r,"hex");return e.create=function(){return new I(t,r,t)},e.update=function(t){return e.create().update(t)},b(e,m,t,r)},k=[{name:"keccak",padding:[1,256,65536,16777216],bits:p,createMethod:x},{name:"sha3",padding:[6,1536,393216,100663296],bits:p,createMethod:x},{name:"shake",padding:[31,7936,2031616,520093696],bits:d,createMethod:function(t,r){var e=w(t,r,"hex");return e.create=function(e){return new I(t,r,e)},e.update=function(t,r){return e.create(r).update(t)},b(e,w,t,r)}},{name:"cshake",padding:h,bits:d,createMethod:function(t,r){var e=y[t],n=A(t,0,"hex");return n.create=function(n,a,o){return a||o?new I(t,r,n).bytepad([a,o],e):E["shake"+t].create(n)},n.update=function(t,r,e,a){return n.create(r,e,a).update(t)},b(n,A,t,r)}},{name:"kmac",padding:h,bits:d,createMethod:function(t,r){var e=y[t],n=v(t,0,"hex");return n.create=function(n,a,o){return new O(t,r,a).bytepad(["KMAC",o],e).bytepad([n],e)},n.update=function(t,r,e,a){return n.create(t,e,a).update(r)},b(n,v,t,r)}}],E={},B=[],C=0;C<k.length;++C)for(var P=k[C],_=P.bits,S=0;S<_.length;++S){var F=P.name+"_"+_[S];if(B.push(F),E[F]=P.createMethod(_[S],P.padding),"sha3"!==P.name){var L=P.name+_[S];B.push(L),E[L]=E[F]}}function I(t,r,e){this.blocks=[],this.s=[],this.padding=r,this.outputBits=e,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=e>>5,this.extraBytes=(31&e)>>3;for(var n=0;n<50;++n)this.s[n]=0}function O(t,r,e){I.call(this,t,r,e)}I.prototype.update=function(r){if(this.finalized)throw new Error("finalize already called");var e,n=typeof r;if("string"!==n){if("object"!==n)throw new Error(t);if(null===r)throw new Error(t);if(u&&r.constructor===ArrayBuffer)r=new Uint8Array(r);else if(!Array.isArray(r)&&(!u||!ArrayBuffer.isView(r)))throw new Error(t);e=!0}for(var a,o,i=this.blocks,s=this.byteCount,c=r.length,h=this.blockCount,l=0,p=this.s;l<c;){if(this.reset)for(this.reset=!1,i[0]=this.block,a=1;a<h+1;++a)i[a]=0;if(e)for(a=this.start;l<c&&a<s;++l)i[a>>2]|=r[l]<<f[3&a++];else for(a=this.start;l<c&&a<s;++l)(o=r.charCodeAt(l))<128?i[a>>2]|=o<<f[3&a++]:o<2048?(i[a>>2]|=(192|o>>6)<<f[3&a++],i[a>>2]|=(128|63&o)<<f[3&a++]):o<55296||o>=57344?(i[a>>2]|=(224|o>>12)<<f[3&a++],i[a>>2]|=(128|o>>6&63)<<f[3&a++],i[a>>2]|=(128|63&o)<<f[3&a++]):(o=65536+((1023&o)<<10|1023&r.charCodeAt(++l)),i[a>>2]|=(240|o>>18)<<f[3&a++],i[a>>2]|=(128|o>>12&63)<<f[3&a++],i[a>>2]|=(128|o>>6&63)<<f[3&a++],i[a>>2]|=(128|63&o)<<f[3&a++]);if(this.lastByteIndex=a,a>=s){for(this.start=a-s,this.block=i[h],a=0;a<h;++a)p[a]^=i[a];z(p),this.reset=!0}else this.start=a}return this},I.prototype.encode=function(t,r){var e=255&t,n=1,a=[e];for(e=255&(t>>=8);e>0;)a.unshift(e),e=255&(t>>=8),++n;return r?a.push(n):a.unshift(n),this.update(a),a.length},I.prototype.encodeString=function(r){var e,n=typeof r;if("string"!==n){if("object"!==n)throw new Error(t);if(null===r)throw new Error(t);if(u&&r.constructor===ArrayBuffer)r=new Uint8Array(r);else if(!Array.isArray(r)&&(!u||!ArrayBuffer.isView(r)))throw new Error(t);e=!0}var a=0,o=r.length;if(e)a=o;else for(var i=0;i<r.length;++i){var s=r.charCodeAt(i);s<128?a+=1:s<2048?a+=2:s<55296||s>=57344?a+=3:(s=65536+((1023&s)<<10|1023&r.charCodeAt(++i)),a+=4)}return a+=this.encode(8*a),this.update(r),a},I.prototype.bytepad=function(t,r){for(var e=this.encode(r),n=0;n<t.length;++n)e+=this.encodeString(t[n]);var a=r-e%r,o=[];return o.length=a,this.update(o),this},I.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex,e=this.blockCount,n=this.s;if(t[r>>2]|=this.padding[3&r],this.lastByteIndex===this.byteCount)for(t[0]=t[e],r=1;r<e+1;++r)t[r]=0;for(t[e-1]|=2147483648,r=0;r<e;++r)n[r]^=t[r];z(n)}},I.prototype.toString=I.prototype.hex=function(){this.finalize();for(var t,r=this.blockCount,e=this.s,n=this.outputBlocks,a=this.extraBytes,o=0,i=0,s="";i<n;){for(o=0;o<r&&i<n;++o,++i)t=e[o],s+=c[t>>4&15]+c[15&t]+c[t>>12&15]+c[t>>8&15]+c[t>>20&15]+c[t>>16&15]+c[t>>28&15]+c[t>>24&15];i%r===0&&(z(e),o=0)}return a&&(t=e[o],s+=c[t>>4&15]+c[15&t],a>1&&(s+=c[t>>12&15]+c[t>>8&15]),a>2&&(s+=c[t>>20&15]+c[t>>16&15])),s},I.prototype.arrayBuffer=function(){this.finalize();var t,r=this.blockCount,e=this.s,n=this.outputBlocks,a=this.extraBytes,o=0,i=0,s=this.outputBits>>3;t=a?new ArrayBuffer(n+1<<2):new ArrayBuffer(s);for(var u=new Uint32Array(t);i<n;){for(o=0;o<r&&i<n;++o,++i)u[i]=e[o];i%r===0&&z(e)}return a&&(u[o]=e[o],t=t.slice(0,s)),t},I.prototype.buffer=I.prototype.arrayBuffer,I.prototype.digest=I.prototype.array=function(){this.finalize();for(var t,r,e=this.blockCount,n=this.s,a=this.outputBlocks,o=this.extraBytes,i=0,s=0,u=[];s<a;){for(i=0;i<e&&s<a;++i,++s)t=s<<2,r=n[i],u[t]=255&r,u[t+1]=r>>8&255,u[t+2]=r>>16&255,u[t+3]=r>>24&255;s%e===0&&z(n)}return o&&(t=s<<2,r=n[i],u[t]=255&r,o>1&&(u[t+1]=r>>8&255),o>2&&(u[t+2]=r>>16&255)),u},O.prototype=new I,O.prototype.finalize=function(){return this.encode(this.outputBits,!0),I.prototype.finalize.call(this)};var z=function(t){var r,e,n,a,o,i,s,u,c,h,f,p,d,g,y,m,w,A,v,b,x,k,E,B,C,P,_,S,F,L,I,O,z,M,j,N,U,J,R,$,G,K,H,V,D,T,W,Y,q,X,Z,Q,tt,rt,et,nt,at,ot,it,st,ut,ct,ht;for(n=0;n<48;n+=2)a=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],i=t[2]^t[12]^t[22]^t[32]^t[42],s=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],c=t[5]^t[15]^t[25]^t[35]^t[45],h=t[6]^t[16]^t[26]^t[36]^t[46],f=t[7]^t[17]^t[27]^t[37]^t[47],r=(p=t[8]^t[18]^t[28]^t[38]^t[48])^(i<<1|s>>>31),e=(d=t[9]^t[19]^t[29]^t[39]^t[49])^(s<<1|i>>>31),t[0]^=r,t[1]^=e,t[10]^=r,t[11]^=e,t[20]^=r,t[21]^=e,t[30]^=r,t[31]^=e,t[40]^=r,t[41]^=e,r=a^(u<<1|c>>>31),e=o^(c<<1|u>>>31),t[2]^=r,t[3]^=e,t[12]^=r,t[13]^=e,t[22]^=r,t[23]^=e,t[32]^=r,t[33]^=e,t[42]^=r,t[43]^=e,r=i^(h<<1|f>>>31),e=s^(f<<1|h>>>31),t[4]^=r,t[5]^=e,t[14]^=r,t[15]^=e,t[24]^=r,t[25]^=e,t[34]^=r,t[35]^=e,t[44]^=r,t[45]^=e,r=u^(p<<1|d>>>31),e=c^(d<<1|p>>>31),t[6]^=r,t[7]^=e,t[16]^=r,t[17]^=e,t[26]^=r,t[27]^=e,t[36]^=r,t[37]^=e,t[46]^=r,t[47]^=e,r=h^(a<<1|o>>>31),e=f^(o<<1|a>>>31),t[8]^=r,t[9]^=e,t[18]^=r,t[19]^=e,t[28]^=r,t[29]^=e,t[38]^=r,t[39]^=e,t[48]^=r,t[49]^=e,g=t[0],y=t[1],T=t[11]<<4|t[10]>>>28,W=t[10]<<4|t[11]>>>28,S=t[20]<<3|t[21]>>>29,F=t[21]<<3|t[20]>>>29,st=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,K=t[40]<<18|t[41]>>>14,H=t[41]<<18|t[40]>>>14,M=t[2]<<1|t[3]>>>31,j=t[3]<<1|t[2]>>>31,m=t[13]<<12|t[12]>>>20,w=t[12]<<12|t[13]>>>20,Y=t[22]<<10|t[23]>>>22,q=t[23]<<10|t[22]>>>22,L=t[33]<<13|t[32]>>>19,I=t[32]<<13|t[33]>>>19,ct=t[42]<<2|t[43]>>>30,ht=t[43]<<2|t[42]>>>30,rt=t[5]<<30|t[4]>>>2,et=t[4]<<30|t[5]>>>2,N=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,A=t[25]<<11|t[24]>>>21,v=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,O=t[45]<<29|t[44]>>>3,z=t[44]<<29|t[45]>>>3,B=t[6]<<28|t[7]>>>4,C=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,at=t[16]<<23|t[17]>>>9,J=t[26]<<25|t[27]>>>7,R=t[27]<<25|t[26]>>>7,b=t[36]<<21|t[37]>>>11,x=t[37]<<21|t[36]>>>11,Q=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,V=t[8]<<27|t[9]>>>5,D=t[9]<<27|t[8]>>>5,P=t[18]<<20|t[19]>>>12,_=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,it=t[28]<<7|t[29]>>>25,$=t[38]<<8|t[39]>>>24,G=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,E=t[49]<<14|t[48]>>>18,t[0]=g^~m&A,t[1]=y^~w&v,t[10]=B^~P&S,t[11]=C^~_&F,t[20]=M^~N&J,t[21]=j^~U&R,t[30]=V^~T&Y,t[31]=D^~W&q,t[40]=rt^~nt&ot,t[41]=et^~at&it,t[2]=m^~A&b,t[3]=w^~v&x,t[12]=P^~S&L,t[13]=_^~F&I,t[22]=N^~J&$,t[23]=U^~R&G,t[32]=T^~Y&X,t[33]=W^~q&Z,t[42]=nt^~ot&st,t[43]=at^~it&ut,t[4]=A^~b&k,t[5]=v^~x&E,t[14]=S^~L&O,t[15]=F^~I&z,t[24]=J^~$&K,t[25]=R^~G&H,t[34]=Y^~X&Q,t[35]=q^~Z&tt,t[44]=ot^~st&ct,t[45]=it^~ut&ht,t[6]=b^~k&g,t[7]=x^~E&y,t[16]=L^~O&B,t[17]=I^~z&C,t[26]=$^~K&M,t[27]=G^~H&j,t[36]=X^~Q&V,t[37]=Z^~tt&D,t[46]=st^~ct&rt,t[47]=ut^~ht&et,t[8]=k^~g&m,t[9]=E^~y&w,t[18]=O^~B&P,t[19]=z^~C&_,t[28]=K^~M&N,t[29]=H^~j&U,t[38]=Q^~V&T,t[39]=tt^~D&W,t[48]=ct^~rt&nt,t[49]=ht^~et&at,t[0]^=l[n],t[1]^=l[n+1]};if(s)n.exports=E;else for(C=0;C<B.length;++C)e[B[C]]=E[B[C]]}();var u=s.exports;const c=(0,o.z)(u);const h=new o.x("rlp/5.7.0");function f(t){const r=[];for(;t;)r.unshift(255&t),t>>=8;return r}function l(t){if(Array.isArray(t)){let r=[];if(t.forEach((function(t){r=r.concat(l(t))})),r.length<=55)return r.unshift(192+r.length),r;const e=f(r.length);return e.unshift(247+e.length),e.concat(r)}(0,a.O)(t)||h.throwArgumentError("RLP object must be BytesLike","object",t);const r=Array.prototype.slice.call((0,a.w)(t));if(1===r.length&&r[0]<=127)return r;if(r.length<=55)return r.unshift(128+r.length),r;const e=f(r.length);return e.unshift(183+e.length),e.concat(r)}function p(t){return(0,a.d)(l(t))}const d=new o.x("address/5.7.0");function g(t){(0,a.m)(t,20)||d.throwArgumentError("invalid address","address",t);const r=(t=t.toLowerCase()).substring(2).split(""),e=new Uint8Array(40);for(let a=0;a<40;a++)e[a]=r[a].charCodeAt(0);const n=(0,a.w)(function(t){return"0x"+c.keccak_256((0,a.w)(t))}(e));for(let a=0;a<40;a+=2)n[a>>1]>>4>=8&&(r[a]=r[a].toUpperCase()),(15&n[a>>1])>=8&&(r[a+1]=r[a+1].toUpperCase());return"0x"+r.join("")}const y={};for(let P=0;P<10;P++)y[String(P)]=String(P);for(let P=0;P<26;P++)y[String.fromCharCode(65+P)]=String(10+P);const m=Math.floor(function(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10}(9007199254740991));function w(t){let r=null;if("string"!=typeof t&&d.throwArgumentError("invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==t.substring(0,2)&&(t="0x"+t),r=g(t),t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&r!==t&&d.throwArgumentError("bad address checksum","address",t);else if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(t.substring(2,4)!==function(t){let r=(t=(t=t.toUpperCase()).substring(4)+t.substring(0,2)+"00").split("").map((t=>y[t])).join("");for(;r.length>=m;){let t=r.substring(0,m);r=parseInt(t,10)%97+r.substring(t.length)}let e=String(98-parseInt(r,10)%97);for(;e.length<2;)e="0"+e;return e}(t)&&d.throwArgumentError("bad icap checksum","address",t),r=(0,a.G)(t.substring(4));r.length<40;)r="0"+r;r=g("0x"+r)}else d.throwArgumentError("invalid address","address",t);return r}const A=new o.x("transactions/5.7.0");var v;!function(t){t[t.legacy=0]="legacy",t[t.eip2930=1]="eip2930",t[t.eip1559=2]="eip1559"}(v||(v={}));const b=[{name:"nonce",maxLength:32,numeric:!0},{name:"gasPrice",maxLength:32,numeric:!0},{name:"gasLimit",maxLength:32,numeric:!0},{name:"to",length:20},{name:"value",maxLength:32,numeric:!0},{name:"data"}],x={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,type:!0,value:!0};function k(t,r){const e=(0,a.F)(a.a.from(t).toHexString());return e.length>32&&A.throwArgumentError("invalid length for "+r,"transaction:"+r,t),e}function E(t,r){return{address:w(t),storageKeys:(r||[]).map(((r,e)=>(32!==(0,a.C)(r)&&A.throwArgumentError("invalid access list storageKey",`accessList[${t}:${e}]`,r),r.toLowerCase())))}}function B(t){return function(t){if(Array.isArray(t))return t.map(((t,r)=>Array.isArray(t)?(t.length>2&&A.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${r}]`,t),E(t[0],t[1])):E(t.address,t.storageKeys)));const r=Object.keys(t).map((r=>{const e=t[r].reduce(((t,r)=>(t[r]=!0,t)),{});return E(r,Object.keys(e).sort())}));return r.sort(((t,r)=>t.address.localeCompare(r.address))),r}(t).map((t=>[t.address,t.storageKeys]))}function C(t,r){if(null==t.type||0===t.type)return null!=t.accessList&&A.throwArgumentError("untyped transactions do not support accessList; include type: 1","transaction",t),function(t,r){(0,o.y)(t,x);const e=[];b.forEach((function(r){let n=t[r.name]||[];const o={};r.numeric&&(o.hexPad="left"),n=(0,a.w)((0,a.d)(n,o)),r.length&&n.length!==r.length&&n.length>0&&A.throwArgumentError("invalid length for "+r.name,"transaction:"+r.name,n),r.maxLength&&(n=(0,a.F)(n),n.length>r.maxLength&&A.throwArgumentError("invalid length for "+r.name,"transaction:"+r.name,n)),e.push((0,a.d)(n))}));let n=0;if(null!=t.chainId?(n=t.chainId,"number"!=typeof n&&A.throwArgumentError("invalid transaction.chainId","transaction",t)):r&&!(0,a.O)(r)&&r.v>28&&(n=Math.floor((r.v-35)/2)),0!==n&&(e.push((0,a.d)(n)),e.push("0x"),e.push("0x")),!r)return p(e);const i=(0,a.$)(r);let s=27+i.recoveryParam;return 0!==n?(e.pop(),e.pop(),e.pop(),s+=2*n+8,i.v>28&&i.v!==s&&A.throwArgumentError("transaction.chainId/signature.v mismatch","signature",r)):i.v!==s&&A.throwArgumentError("transaction.chainId/signature.v mismatch","signature",r),e.push((0,a.d)(s)),e.push((0,a.F)((0,a.w)(i.r))),e.push((0,a.F)((0,a.w)(i.s))),p(e)}(t,r);switch(t.type){case 1:return function(t,r){const e=[k(t.chainId||0,"chainId"),k(t.nonce||0,"nonce"),k(t.gasPrice||0,"gasPrice"),k(t.gasLimit||0,"gasLimit"),null!=t.to?w(t.to):"0x",k(t.value||0,"value"),t.data||"0x",B(t.accessList||[])];if(r){const t=(0,a.$)(r);e.push(k(t.recoveryParam,"recoveryParam")),e.push((0,a.F)(t.r)),e.push((0,a.F)(t.s))}return(0,a.K)(["0x01",p(e)])}(t,r);case 2:return function(t,r){if(null!=t.gasPrice){const r=a.a.from(t.gasPrice),e=a.a.from(t.maxFeePerGas||0);r.eq(e)||A.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:r,maxFeePerGas:e})}const e=[k(t.chainId||0,"chainId"),k(t.nonce||0,"nonce"),k(t.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),k(t.maxFeePerGas||0,"maxFeePerGas"),k(t.gasLimit||0,"gasLimit"),null!=t.to?w(t.to):"0x",k(t.value||0,"value"),t.data||"0x",B(t.accessList||[])];if(r){const t=(0,a.$)(r);e.push(k(t.recoveryParam,"recoveryParam")),e.push((0,a.F)(t.r)),e.push((0,a.F)(t.s))}return(0,a.K)(["0x02",p(e)])}(t,r)}return A.throwError(`unsupported transaction type: ${t.type}`,o.x.errors.UNSUPPORTED_OPERATION,{operation:"serializeTransaction",transactionType:t.type})}}}]);
//# sourceMappingURL=881.bf5bc46e.chunk.js.map