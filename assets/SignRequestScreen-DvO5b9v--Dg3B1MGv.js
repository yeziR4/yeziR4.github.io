import{d7 as o,d8 as a}from"./index-bLhfnMdH.js";import{T as A,l as M,u as k,bS as O,a0 as b,bf as E,bg as w,N as z,e as p,a4 as q,bT as I,bU as P}from"./privy-B4VUGvQB.js";import{h as F}from"./CopyToClipboard-i_OQSBJr-DQlgm7uU.js";import{d as V}from"./Layouts-BMRfo5hw-D9XaCFjm.js";import{a as $,i as B}from"./JsonTree-BHzNC-ic-BojpQQlB.js";import{n as H}from"./ScreenLayout-Cgw3TtUo-C2wAIZ3D.js";import{c as J}from"./createLucideIcon-CREhROTc.js";import"./ModalFooter-Z_ey7Y1m-BUWuB1sV.js";import"./Screen-Vc5UlMFL-Bx7SsaNl.js";import"./index-CWARkn2w-Ck7Qe1pM.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=J("square-pen",K),W=p.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let G=e=>{if(!q(e))return e;try{let s=I(e);return s.includes("�")?e:s}catch{return e}},N=e=>{try{let s=P.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},X=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(te,{data:l}),a.jsx(F,{text:(r=e.typedData,JSON.stringify(r,null,2)),itemName:"full payload to clipboard"})," "]});var r};const Y=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:r,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:u})=>a.jsx(H,{title:i.title,subtitle:i.description,showClose:!0,onClose:u,icon:Q,iconVariant:"subtle",helpText:x?a.jsx(ee,{children:x}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:r||g||m,loading:r},secondaryCta:d?{label:"Not now",onClick:y,disabled:r||g||m}:void 0,watermark:!0,children:a.jsxs(V,{children:[l?a.jsx(W,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(Z,{children:[e==="personal_sign"&&a.jsx(T,{children:G(s)}),e==="eth_signTypedData_v4"&&a.jsx(X,{typedData:s}),e==="solana_signMessage"&&a.jsx(T,{children:N(s)})]})]})}),pe={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:s,closePrivyModal:i}=M(),{navigate:l,data:r,onUserCloseViaDialogOrKeybindRef:g}=k(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,u]=o.useState(),[f,C]=o.useState(null),[R,S]=o.useState(!1);o.useEffect(()=>{e||l("LandingScreen")},[e]),o.useEffect(()=>{s(O).then(n=>{x(!1),n||(c("An error has occurred, please try again."),u(new b(new E(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:_,data:j,confirmAndSign:v,onSuccess:U,onFailure:D,uiOptions:t}=r.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=n=>{n?U(n):D(y||new b(new E("The user rejected the request.",w.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{C(null),c(""),u(void 0)},200)};return g.current=()=>{h(f)},a.jsx(Y,{method:_,messageData:j,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let n=await v();C(n),S(!1),setTimeout(()=>{h(n)},z)}catch(n){console.error(n),c("An error has occurred, please try again."),u(new b(new E(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=p.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=p($)`
  margin-top: 0;
`,T=p(B)`
  margin-top: 0;
`;export{pe as SignRequestScreen,Y as SignRequestView,pe as default};
