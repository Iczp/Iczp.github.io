import{_ as P}from"./D3eS3d3Y.js";import T from"./CqLbpcly.js";import V from"./CkR4EuIQ.js";import j from"./BGsw1Vwh.js";import{d as A,K as O,h as z,l as K,o as e,c as r,i,t as c,f as _,e as d,w as L,j as s,z as b,g as u,F as f,A as h,aN as E}from"./CdSTkMVz.js";import{u as H}from"./DDH8W7iP.js";import{i as x}from"./ElkFyO1H.js";import{_ as I}from"./DlAUqK2U.js";import"./D47GANMD.js";import"./DwW0HsVh.js";const R=["onClick"],S={class:"flex flex-row items-center overflow-hidden"},q={class:"px-1.5 text-lg"},G={class:"truncate"},J=["href","onClick"],M={key:0},Q=A({__name:"NavTrees",async setup(U){let n,l;const a=O(),v=([n,l]=z(()=>K()),n=await n,l(),n),{navBottomLink:W,navDirFromPath:k,navPageFromPath:X,navKeyFromPath:Y}=E(),C=k(a.fullPath.split("/").slice(0,2).join("/"),v),{items:g,toggleOpen:w}=H({items:C,action:o=>{o.$isDir=x(o)},active:(o,D,p,m)=>o._path===a.path}),$=o=>x(o)?void 0:o._path,y=o=>{console.log("navClick",o)};return(o,D)=>{const p=P,m=T,F=V,N=j;return e(),r(f,null,[i(c(_(a).params.slug[0])+" ",1),d(N,{items:_(g),class:"max-w-72"},{default:L(({item:t,depth:Z,index:tt,parents:ot})=>[s("h3",{class:b(["flex flex-row justify-between py-1 gap-2",{dir:t.$isDir}]),onClick:B=>_(w)(t)},[s("section",S,[s("div",q,[t.$isDir?(e(),u(p,{key:0,open:t.$isOpen},null,8,["open"])):(e(),u(m,{key:1}))]),s("p",G,[s("a",{href:$(t),onClick:B=>y(t),class:"cursor-pointer"},[i(c(t.title)+" ",1),t.$isDir?(e(),r(f,{key:0},[i(" ("+c(t.$totalFileCount)+") ",1)],64)):h("",!0)],8,J)])]),t.$isDir?(e(),r("section",M,[d(F,{dir:t.$isOpen?"down":"right",class:"cursor-pointer"},null,8,["dir"])])):h("",!0)],10,R)]),_:1},8,["items"])],64)}}}),mt=I(Q,[["__scopeId","data-v-46da0d7c"]]);export{mt as default};
