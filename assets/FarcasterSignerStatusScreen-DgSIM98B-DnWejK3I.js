import{d7 as d,d8 as a}from"./index-bLhfnMdH.js";import{u as T,W as I,l as B,N as w,Q as y,aS as C,J as O,e as n}from"./privy-B4VUGvQB.js";import{h as _}from"./CopyToClipboard-i_OQSBJr-DQlgm7uU.js";import{n as q}from"./OpenLink-CUpJ1mOr-DKys0JDr.js";import{x as E}from"./QrCode-DxVwYjF5-BOTS-5d1.js";import{n as A}from"./ScreenLayout-Cgw3TtUo-C2wAIZ3D.js";import{l as h}from"./farcaster-DPlSjvF5-Cp7lkNoS.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-Z_ey7Y1m-BUWuB1sV.js";import"./Screen-Vc5UlMFL-Bx7SsaNl.js";import"./index-CWARkn2w-Ck7Qe1pM.js";let S="#8a63d2";const M=({appName:u,loading:p,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>a.jsx(A,y||p?C?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&a.jsx(N,{children:a.jsx(q,{text:"Take me to Farcaster",url:r,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:a.jsxs(R,{children:[a.jsx(L,{children:r?a.jsx(E,{url:r,size:275,squareLogoElement:h}):a.jsx(z,{children:a.jsx(O,{})})}),a.jsxs(P,{children:[a.jsx(V,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&a.jsx(_,{text:r,itemName:"link",color:S})]})]})});let N=n.div`
  margin-top: 24px;
`,R=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,V=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,z=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const $={component:()=>{let{lastScreen:u,navigateBack:p,data:i}=T(),e=I(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=B(),[c,o]=d.useState(void 0),[k,x]=d.useState(!1),[j,v]=d.useState(!1),g=d.useRef([]),t=i==null?void 0:i.farcasterSigner;d.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(t!=null&&t.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});t.status==="approved"&&(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let m=await r(t==null?void 0:t.public_key),F=Date.now()-b;m.status==="approved"?(clearInterval(l),x(!1),v(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):F>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):m.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(m=>clearTimeout(m))}},[]);let f=(t==null?void 0:t.status)==="pending_approval"?t.signer_approval_url:void 0;return a.jsx(M,{appName:e.name,loading:k,success:j,errorMessage:c,connectUri:f,onBack:u?p:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{$ as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,$ as default};
