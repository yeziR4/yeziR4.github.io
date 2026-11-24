import{d7 as l,d8 as t}from"./index-bLhfnMdH.js";import{T as Y,u as G,W as Z,l as ee,h as u,a3 as re,N as F,Q,aS as te,J as ae,e as n}from"./privy-B4VUGvQB.js";import{n as oe}from"./OpenLink-CUpJ1mOr-DKys0JDr.js";import{x as ie}from"./QrCode-DxVwYjF5-BOTS-5d1.js";import{f as ne}from"./ModalFooter-Z_ey7Y1m-BUWuB1sV.js";import{r as se}from"./LabelXs-oqZNqbm_-BMBflHPI.js";import{a as le}from"./shouldProceedtoEmbeddedWalletCreationFlow-DJJc76nd-DHSlJcZl.js";import{n as ce}from"./ScreenLayout-Cgw3TtUo-C2wAIZ3D.js";import{l as _}from"./farcaster-DPlSjvF5-Cp7lkNoS.js";import{C as de}from"./check-v9ypmh2a.js";import{C as ue}from"./copy-CWU5Qz_D.js";import"./dijkstra-D_NXgYpA.js";import"./Screen-Vc5UlMFL-Bx7SsaNl.js";import"./index-CWARkn2w-Ck7Qe1pM.js";import"./createLucideIcon-CREhROTc.js";let pe=n.div`
  width: 100%;
`,me=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${r=>r.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${r=>r.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,he=n.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,H=n.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${r=>r.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,fe=n(H)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,ge=n(se)`
  margin-bottom: 0.5rem;
`,ve=n(ne)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const xe=({value:r,title:p,placeholder:c,className:a,showCopyButton:d=!0,truncate:i,maxLength:m=40,disabled:h=!1})=>{let[s,x]=l.useState(!1),b=i&&r?((o,C,f)=>{if((o=o.startsWith("https://")?o.slice(8):o).length<=f)return o;if(C==="middle"){let y=Math.ceil(f/2)-2,E=Math.floor(f/2)-1;return`${o.slice(0,y)}...${o.slice(-E)}`}return`${o.slice(0,f-3)}...`})(r,i,m):r;return l.useEffect(()=>{if(s){let o=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(o)}},[s]),t.jsxs(pe,{className:a,children:[p&&t.jsx(ge,{children:p}),t.jsxs(me,{$disabled:h,children:[t.jsx(he,{children:r?t.jsx(H,{$disabled:h,title:r,children:b}):t.jsx(fe,{$disabled:h,children:c||"No value"})}),d&&r&&t.jsx(ve,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>x(!0)).catch(console.error)},size:"sm",children:t.jsxs(t.Fragment,s?{children:["Copied",t.jsx(de,{size:14})]}:{children:["Copy",t.jsx(ue,{size:14})]})})]})]})},ye=({connectUri:r,loading:p,success:c,errorMessage:a,onBack:d,onClose:i,onOpenFarcaster:m})=>t.jsx(ce,Q||p?te?{title:a?a.message:"Sign in with Farcaster",subtitle:a?a.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:_,iconVariant:"loading",iconLoadingStatus:{success:c,fail:!!a},primaryCta:r&&m?{label:"Open Farcaster app",onClick:m}:void 0,onBack:d,onClose:i,watermark:!0}:{title:a?a.message:"Signing in with Farcaster",subtitle:a?a.detail:"This should only take a moment",icon:_,iconVariant:"loading",iconLoadingStatus:{success:c,fail:!!a},onBack:d,onClose:i,watermark:!0,children:r&&Q&&t.jsx(Se,{children:t.jsx(oe,{text:"Take me to Farcaster",url:r,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:d,onClose:i,watermark:!0,children:t.jsxs(we,{children:[t.jsx(be,{children:r?t.jsx(ie,{url:r,size:275,squareLogoElement:_}):t.jsx(Te,{children:t.jsx(ae,{})})}),t.jsxs(Ce,{children:[t.jsx(Ee,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(xe,{value:r,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),Be={component:()=>{let{authenticated:r,logout:p,ready:c,user:a}=Y(),{lastScreen:d,navigate:i,navigateBack:m,setModalData:h}=G(),s=Z(),{getAuthFlow:x,loginWithFarcaster:b,closePrivyModal:o,createAnalyticsEvent:C}=ee(),[f,y]=l.useState(void 0),[E,J]=l.useState(!1),[S,K]=l.useState(!1),T=l.useRef([]),w=x(),j=w==null?void 0:w.meta.connectUri;return l.useEffect(()=>{let g=Date.now(),A=setInterval(async()=>{var O,R,$,N,L,I,U,D,M,W,B,z,q,V,P;let k=await w.pollForReady.execute(),X=Date.now()-g;if(k){clearInterval(A),J(!0);try{await b(),K(!0)}catch(e){let v={retryable:!1,message:"Authentication failed"};if((e==null?void 0:e.privyErrorCode)===u.ALLOWLIST_REJECTED)return void i("AllowlistRejectionScreen");if((e==null?void 0:e.privyErrorCode)===u.USER_LIMIT_REACHED)return console.error(new re(e).toString()),void i("UserLimitReachedScreen");if((e==null?void 0:e.privyErrorCode)===u.USER_DOES_NOT_EXIST)return void i("AccountNotFoundScreen");if((e==null?void 0:e.privyErrorCode)===u.LINKED_TO_ANOTHER_USER)v.detail=e.message??"This account has already been linked to another user.";else{if((e==null?void 0:e.privyErrorCode)===u.ACCOUNT_TRANSFER_REQUIRED&&((R=(O=e.data)==null?void 0:O.data)!=null&&R.nonce))return h({accountTransfer:{nonce:(N=($=e.data)==null?void 0:$.data)==null?void 0:N.nonce,account:(I=(L=e.data)==null?void 0:L.data)==null?void 0:I.subject,displayName:(M=(D=(U=e.data)==null?void 0:U.data)==null?void 0:D.account)==null?void 0:M.displayName,linkMethod:"farcaster",embeddedWalletAddress:(z=(B=(W=e.data)==null?void 0:W.data)==null?void 0:B.otherUser)==null?void 0:z.embeddedWalletAddress,farcasterEmbeddedAddress:(P=(V=(q=e.data)==null?void 0:q.data)==null?void 0:V.otherUser)==null?void 0:P.farcasterEmbeddedAddress}}),void i("LinkConflictScreen");(e==null?void 0:e.privyErrorCode)===u.INVALID_CREDENTIALS?(v.retryable=!0,v.detail="Something went wrong. Try again."):(e==null?void 0:e.privyErrorCode)===u.TOO_MANY_REQUESTS&&(v.detail="Too many requests. Please wait before trying again.")}y(v)}}else X>12e4&&(clearInterval(A),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(A),T.current.forEach(k=>clearTimeout(k))}},[]),l.useEffect(()=>{if(c&&r&&S&&a){if(s!=null&&s.legal.requireUsersAcceptTerms&&!a.hasAcceptedTerms){let g=setTimeout(()=>{i("AffirmativeConsentScreen")},F);return()=>clearTimeout(g)}S&&(le(a,s.embeddedWallets)?T.current.push(setTimeout(()=>{h({createWallet:{onSuccess:()=>{},onFailure:g=>{console.error(g),C({eventName:"embedded_wallet_creation_failure_logout",payload:{error:g,screen:"FarcasterConnectStatusScreen"}}),p()},callAuthOnSuccessOnClose:!0}}),i("EmbeddedWalletOnAccountCreateScreen")},F)):T.current.push(setTimeout(()=>o({shouldCallAuthOnSuccess:!0,isSuccess:!0}),F)))}},[S,c,r,a]),t.jsx(ye,{connectUri:j,loading:E,success:S,errorMessage:f,onBack:d?m:void 0,onClose:o,onOpenFarcaster:()=>{j&&(window.location.href=j)}})}};let Se=n.div`
  margin-top: 24px;
`,we=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,be=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,Ce=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Ee=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,Te=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{Be as FarcasterConnectStatusScreen,ye as FarcasterConnectStatusView,Be as default};
