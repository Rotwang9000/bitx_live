"use strict";(globalThis.webpackChunkwinbit32=globalThis.webpackChunkwinbit32||[]).push([[880],{83880:(t,e,n)=>{function r(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}function s(t,...e){if(!function(t){return t instanceof Uint8Array||null!=t&&"object"===typeof t&&"Uint8Array"===t.constructor.name}(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}function i(t){if("function"!==typeof t||"function"!==typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");r(t.outputLen),r(t.blockLen)}function o(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function a(t,e){s(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}n.d(e,{SOLToolbox:()=>Z,createSolanaTokenTransaction:()=>q,validateAddress:()=>j});const c=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);new Uint8Array(new Uint32Array([287454020]).buffer)[0];function h(t){return"string"===typeof t&&(t=function(t){if("string"!==typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),s(t),t}class d{clone(){return this._cloneInto()}}const f={}.toString;function l(t){const e=e=>t().update(h(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}class u extends d{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,i(t);const n=h(e);if(this.iHash=t.create(),"function"!==typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){return o(this),this.iHash.update(t),this}digestInto(t){o(this),s(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:s,blockLen:i,outputLen:o}=this;return t.finished=r,t.destroyed=s,t.blockLen=i,t.outputLen=o,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const b=(t,e,n)=>new u(t,e).update(n).digest();function p(t,e,n,s){i(t);const o=function(t,e){if(void 0!==e&&"[object Object]"!==f.call(e))throw new Error("Options should be object or undefined");return Object.assign(t,e)}({dkLen:32,asyncTick:10},s),{c:a,dkLen:c,asyncTick:d}=o;if(r(a),r(c),r(d),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=h(e),u=h(n),p=new Uint8Array(c),g=b.create(t,l),x=g._cloneInto().update(u);return{c:a,dkLen:c,asyncTick:d,DK:p,PRF:g,PRFSalt:x}}function g(t,e,n,r,s){return t.destroy(),e.destroy(),r&&r.destroy(),s.fill(0),n}b.create=(t,e)=>new u(t,e);class x extends d{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=c(this.buffer)}update(t){o(this);const{view:e,buffer:n,blockLen:r}=this,s=(t=h(t)).length;for(let i=0;i<s;){const o=Math.min(r-this.pos,s-i);if(o!==r)n.set(t.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=c(t);for(;r<=s-i;i+=r)this.process(e,i)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){o(this),a(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:i}=this;e[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>r-i&&(this.process(n,0),i=0);for(let o=i;o<r;o++)e[o]=0;!function(t,e,n,r){if("function"===typeof t.setBigUint64)return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),c=r?4:0,h=r?0:4;t.setUint32(e+c,o,r),t.setUint32(e+h,a,r)}(n,r-8,BigInt(8*this.length),s),this.process(n,0);const h=c(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,l=this.get();if(f>l.length)throw new Error("_sha2: outputLen bigger than state");for(let o=0;o<f;o++)h.setUint32(4*o,l[o],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:i,pos:o}=this;return t.length=r,t.pos=o,t.finished=s,t.destroyed=i,r%e&&t.buffer.set(n),t}}const w=BigInt(2**32-1),y=BigInt(32);function L(t,e=!1){return e?{h:Number(t&w),l:Number(t>>y&w)}:{h:0|Number(t>>y&w),l:0|Number(t&w)}}const m={fromBig:L,split:function(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=L(t[s],e);[n[s],r[s]]=[i,o]}return[n,r]},toBig:(t,e)=>BigInt(t>>>0)<<y|BigInt(e>>>0),shrSH:(t,e,n)=>t>>>n,shrSL:(t,e,n)=>t<<32-n|e>>>n,rotrSH:(t,e,n)=>t>>>n|e<<32-n,rotrSL:(t,e,n)=>t<<32-n|e>>>n,rotrBH:(t,e,n)=>t<<64-n|e>>>n-32,rotrBL:(t,e,n)=>t>>>n-32|e<<64-n,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,n)=>t<<n|e>>>32-n,rotlSL:(t,e,n)=>e<<n|t>>>32-n,rotlBH:(t,e,n)=>e<<n-32|t>>>64-n,rotlBL:(t,e,n)=>t<<n-32|e>>>64-n,add:function(t,e,n,r){const s=(e>>>0)+(r>>>0);return{h:t+n+(s/2**32|0)|0,l:0|s}},add3L:(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),add3H:(t,e,n,r)=>e+n+r+(t/2**32|0)|0,add4L:(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),add4H:(t,e,n,r,s)=>e+n+r+s+(t/2**32|0)|0,add5H:(t,e,n,r,s,i)=>e+n+r+s+i+(t/2**32|0)|0,add5L:(t,e,n,r,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(s>>>0)},[H,B]=(()=>m.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map((t=>BigInt(t)))))(),A=new Uint32Array(80),k=new Uint32Array(80);class S extends x{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:e,Bh:n,Bl:r,Ch:s,Cl:i,Dh:o,Dl:a,Eh:c,El:h,Fh:d,Fl:f,Gh:l,Gl:u,Hh:b,Hl:p}=this;return[t,e,n,r,s,i,o,a,c,h,d,f,l,u,b,p]}set(t,e,n,r,s,i,o,a,c,h,d,f,l,u,b,p){this.Ah=0|t,this.Al=0|e,this.Bh=0|n,this.Bl=0|r,this.Ch=0|s,this.Cl=0|i,this.Dh=0|o,this.Dl=0|a,this.Eh=0|c,this.El=0|h,this.Fh=0|d,this.Fl=0|f,this.Gh=0|l,this.Gl=0|u,this.Hh=0|b,this.Hl=0|p}process(t,e){for(let w=0;w<16;w++,e+=4)A[w]=t.getUint32(e),k[w]=t.getUint32(e+=4);for(let w=16;w<80;w++){const t=0|A[w-15],e=0|k[w-15],n=m.rotrSH(t,e,1)^m.rotrSH(t,e,8)^m.shrSH(t,e,7),r=m.rotrSL(t,e,1)^m.rotrSL(t,e,8)^m.shrSL(t,e,7),s=0|A[w-2],i=0|k[w-2],o=m.rotrSH(s,i,19)^m.rotrBH(s,i,61)^m.shrSH(s,i,6),a=m.rotrSL(s,i,19)^m.rotrBL(s,i,61)^m.shrSL(s,i,6),c=m.add4L(r,a,k[w-7],k[w-16]),h=m.add4H(c,n,o,A[w-7],A[w-16]);A[w]=0|h,k[w]=0|c}let{Ah:n,Al:r,Bh:s,Bl:i,Ch:o,Cl:a,Dh:c,Dl:h,Eh:d,El:f,Fh:l,Fl:u,Gh:b,Gl:p,Hh:g,Hl:x}=this;for(let w=0;w<80;w++){const t=m.rotrSH(d,f,14)^m.rotrSH(d,f,18)^m.rotrBH(d,f,41),e=m.rotrSL(d,f,14)^m.rotrSL(d,f,18)^m.rotrBL(d,f,41),y=d&l^~d&b,L=f&u^~f&p,S=m.add5L(x,e,L,B[w],k[w]),I=m.add5H(S,g,t,y,H[w],A[w]),E=0|S,v=m.rotrSH(n,r,28)^m.rotrBH(n,r,34)^m.rotrBH(n,r,39),U=m.rotrSL(n,r,28)^m.rotrBL(n,r,34)^m.rotrBL(n,r,39),D=n&s^n&o^s&o,C=r&i^r&a^i&a;g=0|b,x=0|p,b=0|l,p=0|u,l=0|d,u=0|f,({h:d,l:f}=m.add(0|c,0|h,0|I,0|E)),c=0|o,h=0|a,o=0|s,a=0|i,s=0|n,i=0|r;const F=m.add3L(E,U,C);n=m.add3H(F,I,v,D),r=0|F}({h:n,l:r}=m.add(0|this.Ah,0|this.Al,0|n,0|r)),({h:s,l:i}=m.add(0|this.Bh,0|this.Bl,0|s,0|i)),({h:o,l:a}=m.add(0|this.Ch,0|this.Cl,0|o,0|a)),({h:c,l:h}=m.add(0|this.Dh,0|this.Dl,0|c,0|h)),({h:d,l:f}=m.add(0|this.Eh,0|this.El,0|d,0|f)),({h:l,l:u}=m.add(0|this.Fh,0|this.Fl,0|l,0|u)),({h:b,l:p}=m.add(0|this.Gh,0|this.Gl,0|b,0|p)),({h:g,l:x}=m.add(0|this.Hh,0|this.Hl,0|g,0|x)),this.set(n,r,s,i,o,a,c,h,d,f,l,u,b,p,g,x)}roundClean(){A.fill(0),k.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const I=l((()=>new S));function E(t){if("string"!==typeof t)throw new TypeError("Invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function v(t){const e=E(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}const U=t=>E(`mnemonic${t}`);function D(t,e=""){return function(t,e,n,r){const{c:s,dkLen:i,DK:o,PRF:a,PRFSalt:h}=p(t,e,n,r);let d;const f=new Uint8Array(4),l=c(f),u=new Uint8Array(a.outputLen);for(let c=1,b=0;b<i;c++,b+=a.outputLen){const t=o.subarray(b,b+a.outputLen);l.setInt32(0,c,!1),(d=h._cloneInto(d)).update(f).digestInto(u),t.set(u.subarray(0,t.length));for(let e=1;e<s;e++){a._cloneInto(d).update(u).digestInto(u);for(let e=0;e<t.length;e++)t[e]^=u[e]}}return g(a,h,o,d,u)}(I,v(t).nfkd,U(e),{c:2048,dkLen:64})}var C=n(74248),F=n(94781);const O=new F.J3("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");var _=n(69958),P=n(2693),T=n(70882),K=n(58287),N=n(14787),G=n(66704),J=n(44244),$=n(27601);function j(t){try{let e=new F.J3(t);return F.J3.isOnCurve(e.toBytes())}catch(e){return!1}}function W({phrase:t,derivationPath:e=J.Rz.SOL}){let n=D(t),r=$.cf.fromMasterSeed(n);return F.AX.fromSeed(r.derive(e,!0).privateKey)}function R(t){return t.publicKey.toString()}function V(t){return async e=>{let n=await t.getBalance(new F.J3(e)),r=await async function({connection:t,address:e}){let n=await t.getParsedTokenAccountsByOwner(new F.J3(e),{programId:_.x5}),r=(await(new G.vY).resolve()).filterByChainId(101).getList(),s=[];for await(let i of n.value){let t=i.account.data.parsed.info,e=t.tokenAmount.uiAmount,n=t.mint,o=t.tokenAmount.decimals,a=r.find((t=>t.address===n)),c=a?a.symbol:"UNKNOWN";e>BigInt(0)&&s.push(new J.An({value:J.Lm.fromBigInt(t.tokenAmount.amount,o),decimal:o,identifier:`${J.sW.Solana}.${c}${n?`-${n.toString()}`:""}`}))}return s}({connection:t,address:e});return[J.An.from({chain:J.sW.Solana,value:BigInt(n)}),...r]}}async function q({tokenAddress:t,recipient:e,from:n,connection:r,amount:s,decimals:i}){let o=new F.ZX,a=new F.J3(t),c=await(0,P.Ob)(a,n),h=new F.J3(e),d=await(0,P.Ob)(a,h),f=!1;try{await(0,T.sU)(r,d),f=!0}catch(l){}return f||o.add((0,K.JA)(n,d,h,a)),o.add((0,N.fl)(c,a,d,n,s,i)),o}function X(t){return async({recipient:e,assetValue:n,fromPublicKey:r,memo:s,isProgramDerivedAddress:i})=>{if(!i&&!j(e))throw new J.Oo("core_transaction_invalid_recipient_address");let o=n.isGasAsset?(new F.ZX).add(F.yq.transfer({fromPubkey:r,lamports:n.getBaseValue("number"),toPubkey:new F.J3(e)})):n.address?await q({amount:n.getBaseValue("number"),connection:t,decimals:n.decimal,from:r,recipient:e,tokenAddress:n.address}):void 0;if(!o)throw new J.Oo("core_transaction_invalid_sender_address");s&&o.add(function(t,e){const n=null==e?[]:e.map((function(t){return{pubkey:t,isSigner:!0,isWritable:!1}}));return new F.fH({keys:n,programId:O,data:C.Buffer.from(t,"utf8")})}(s));let a=await t.getLatestBlockhash();return o.recentBlockhash=a.blockhash,o.feePayer=r,o}}function M(t){return async({recipient:e,assetValue:n,fromKeypair:r,memo:s,isProgramDerivedAddress:i})=>{let o=await X(t)({recipient:e,assetValue:n,memo:s,fromPublicKey:r.publicKey,isProgramDerivedAddress:i});return(0,F.El)(t,o,[r])}}function z(t){return e=>t.sendRawTransaction(e.serialize())}var Z=({rpcUrl:t=(0,J.Nt)(J.sW.Solana)}={})=>{let e=new F.Ng(t,"confirmed");return{connection:e,createKeysForPath:W,getAddressFromKeys:R,createSolanaTransaction:X(e),getBalance:V(e),transfer:M(e),broadcastTransaction:z(e),validateAddress:j}}}}]);
//# sourceMappingURL=880.816d25d6.chunk.js.map