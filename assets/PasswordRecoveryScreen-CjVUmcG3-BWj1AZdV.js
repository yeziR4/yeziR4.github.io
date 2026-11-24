import{d7 as a,d8 as e}from"./index-bLhfnMdH.js";import{F as T}from"./ShieldCheckIcon-3cfoSHMf.js";import{T as _,l as E,u as I,b4 as F,b5 as U,av as W,e as p,aA as N}from"./privy-B4VUGvQB.js";import{b as O}from"./ModalFooter-Z_ey7Y1m-BUWuB1sV.js";import{l as V}from"./Layouts-BMRfo5hw-D9XaCFjm.js";import{g as H,h as z,y as B,w as M,k as D}from"./shared-CZj36XbG-KnaO4LUc.js";import{w as s}from"./Screen-Vc5UlMFL-Bx7SsaNl.js";import"./index-CWARkn2w-Ck7Qe1pM.js";const te={component:()=>{let[o,y]=a.useState(!0),{authenticated:m,user:g}=_(),{walletProxy:i,closePrivyModal:v,createAnalyticsEvent:x,client:j}=E(),{navigate:k,data:C,onUserCloseViaDialogOrKeybindRef:A}=I(),[n,$]=a.useState(void 0),[f,d]=a.useState(""),[c,w]=a.useState(!1),{entropyId:u,entropyIdVerifier:S,onCompleteNavigateTo:b,onSuccess:h,onFailure:P}=C.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{v({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new W(r):r)};return A.current=l,a.useEffect(()=>{if(!m)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[m]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:T,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(s.Body,{children:e.jsx(Y,{children:e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(z,{type:o?"password":"text",onChange:r=>(t=>{t&&$(t)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(B,{style:{right:"0.75rem"},children:o?e.jsx(M,{onClick:()=>y(!1)}):e.jsx(D,{onClick:()=>y(!0)})})]}),!!f&&e.jsx(q,{children:f})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(G,{loading:c||!i,disabled:!n,onClick:async()=>{w(!0);let r=await j.getAccessToken(),t=F(g,u);if(!r||!t||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{x({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:u,entropyIdVerifier:S,recoveryPassword:n})),d(""),b?k(b):v({shouldCallAuthOnSuccess:!1}),h==null||h(t),x({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){U(R)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{w(!1)}},$hideAnimations:!u&&c,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let Y=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,q=p.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,G=p(O)`
  ${({$hideAnimations:o})=>o&&N`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{te as PasswordRecoveryScreen,te as default};
