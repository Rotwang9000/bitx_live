"use strict";(globalThis.webpackChunkwinbit32=globalThis.webpackChunkwinbit32||[]).push([[266],{24266:(e,n,t)=>{t.d(n,{SOLToolbox:()=>p});var a=t(32871),r=t(69958),o=t(2693),i=t(12206),s=t(14787),c=t(58287),d=t(66704),u=t(94781),l=t(44244),w=t(64115);function f(e){try{new u.J3(e);return!0}catch(n){return!1}}function m({phrase:e,derivationPath:n=l.Rz.SOL}){const t=(0,a.kw)(e),r=w.cf.fromMasterSeed(t);return u.AX.fromSeed(r.derive(n,!0).privateKey)}function h(e){return e.publicKey.toString()}function y(e){return async n=>{const t=await e.getBalance(new u.J3(n)),a=await async function({connection:e,address:n}){const t=await e.getParsedTokenAccountsByOwner(new u.J3(n),{programId:r.x5}),a=new d.vY,o=(await a.resolve()).filterByChainId(101).getList(),i=[];for await(const r of t.value){const e=r.account.data.parsed.info,t=e.tokenAmount.uiAmount,a=e.mint,s=e.tokenAmount.decimals,c=o.find((e=>e.address===a)),d=c?c.symbol:"UNKNOWN";t>BigInt(0)&&i.push(new l.An({value:l.Lm.fromBigInt(e.tokenAmount.amount,s),decimal:s,identifier:`${l.sW.Solana}.${d}-${n.toString()}`}))}return i}({connection:e,address:n});return[l.An.from({chain:l.sW.Solana,value:BigInt(t)}),...a]}}function b(e){return async({recipient:n,assetValue:t,fromKeypair:a})=>{if(!f(n))throw new l.Oo("core_transaction_invalid_recipient_address");const r=t.isGasAsset?(new u.ZX).add(u.yq.transfer({fromPubkey:a.publicKey,lamports:t.getValue("bigint"),toPubkey:new u.J3(n)})):t.address?await async function({tokenAddress:e,recipient:n,from:t,connection:a,amount:r,decimals:d}){const l=new u.ZX,w=new u.J3(e),f=await(0,o.Ob)(w,t),m=new u.J3(n),h=await(0,o.Ob)(w,m);try{return await(0,i.sU)(a,h),l.add((0,s.fl)(f,w,h,t,r,d))}catch(y){return l.add((0,c.JA)(t,h,m,w))}}({amount:t.getValue("number"),connection:e,decimals:t.decimal,from:a.publicKey,recipient:n,tokenAddress:t.address}):void 0;if(!r)throw new l.Oo("core_transaction_invalid_sender_address");const d=await e.getLatestBlockhash();return r.recentBlockhash=d.blockhash,r.feePayer=a.publicKey,(0,u.El)(e,r,[a])}}const p=({rpcUrl:e=l.vl.Solana}={})=>{const n=new u.Ng(e,"confirmed");return{connection:n,createKeysForPath:m,getAddressFromKeys:h,getBalance:y(n),transfer:b(n),validateAddress:f}}}}]);
//# sourceMappingURL=266.85ebdd32.chunk.js.map