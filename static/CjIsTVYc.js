import{_ as A}from"./Bp1IUCk_.js";import V from"./BAMBrAJl.js";import F from"./D0SWGa28.js";import L from"./BMjMnJU9.js";import{_ as M}from"./DqXBwsVb.js";import{e as P,ab as R,a1 as j,aa as q,N as z,r as E,x as b,o as s,c as a,b as e,a as n,w as r,f as t,t as c,F as O,I as U,i as C,g as l,a4 as G,a5 as H}from"./BotNLUr-.js";import{f as J}from"./_MiPQb9e.js";import{_ as K}from"./DlAUqK2U.js";import"./Rmo7aRSD.js";import"./BdrVPtoo.js";import"./WZOttNc3.js";import"./BXDelJFN.js";import"./BQkc-AXV.js";const u=p=>(G("data-v-28b8c1f6"),p=p(),H(),p),Q={class:"relative flex flex-col sm:flex-row-reverse"},W={class:"z-10 sm:fixed"},X={key:0,class:"flex flex-col flex-1"},Y={class:"w-full prose no-underline prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"},Z=u(()=>e("h1",null,"Document not found!!!",-1)),ee=u(()=>e("h1",null,"Document is empty",-1)),te={class:"flex flex-row items-center tags"},oe=u(()=>e("h3",{class:"mr-2"},"标签:",-1)),se={class:"flex flex-row gap-2"},ne=["href"],ae={class:"flex flex-col justify-between gap-4 mt-4 sm:flex-row"},re={class:"arrow"},ce={class:"text-lg line-clamp-2"},_e={key:0},ie={class:"arrow"},le={class:"text-lg line-clamp-2"},pe={key:0},me=P({__name:"ContentMain",async setup(p){var h,x;let m,f;const v=R(),{globals:de,navigation:ue,surround:fe,page:he,excerpt:xe,toc:ge,type:we,layout:ke,next:_,prev:i}=j(),o=([m,f]=q(()=>z(v.path).findOne()),m=await m,f(),m),I=E(J(o==null?void 0:o.tags)),T=[{text:"Table of contents",children:(x=(h=o==null?void 0:o.body)==null?void 0:h.toc)==null?void 0:x.links}];return(ye,be)=>{const N=b("PageToc"),$=A,B=V,D=F,S=b("AlignTop"),g=L,w=M;return s(),a("main",Q,[e("section",W,[n($,{class:"mb-8 bg-transparent shadow-md dark:bg-transparent backdrop-blur-lg drak:shadow-white sm:mb-0"},{default:r(()=>[n(N,{items:T})]),_:1})]),t(o)?(s(),a("section",X,[n(D,{excerpt:!0},{default:r(({doc:d,excerpt:k})=>{var y;return[e("pre",null,`
            date: `+c((y=t(o))==null?void 0:y.date)+` 
            
          `,1),e("article",Y,[n(B,{value:d},null,8,["value"])])]}),"not-found":r(()=>[Z]),empty:r(()=>[ee]),_:1}),n(S),e("section",te,[oe,e("ul",se,[(s(!0),a(O,null,U(t(I),(d,k)=>(s(),a("li",{key:k},[e("a",{href:`/tags/${d}`},c(d),9,ne)]))),128))])]),e("div",ae,[t(i)?(s(),C(w,{key:0,to:t(i)._path,class:"page-item"},{default:r(()=>[e("span",re,[n(g,{name:"ic:outline-arrow-back"})]),e("h3",ce,c(t(i).title),1),t(i).description?(s(),a("p",_e,c(t(i).description),1)):l("",!0)]),_:1},8,["to"])):l("",!0),t(_)?(s(),C(w,{key:1,to:t(_)._path,class:"page-item"},{default:r(()=>[e("span",ie,[n(g,{name:"ic:outline-arrow-forward"})]),e("h3",le,c(t(_).title),1),t(_).description?(s(),a("p",pe,c(t(_).description),1)):l("",!0)]),_:1},8,["to"])):l("",!0)])])):l("",!0)])}}}),Me=K(me,[["__scopeId","data-v-28b8c1f6"]]);export{Me as default};