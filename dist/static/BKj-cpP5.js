import d from"./DtVo3b63.js";import{d as l,a1 as p,s as t,o as i,g as m,c as f,z as _,a3 as v,a4 as c,a5 as y,a6 as B,T as h}from"./L9yBva4P.js";import{_ as z}from"./DlAUqK2U.js";const G=l({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(a){const o=p();return{dynamic:t(()=>{var s,n;return a.dynamic||((n=(s=o.ui)==null?void 0:s.icons)==null?void 0:n.dynamic)})}}});function k(a,o,r,s,n,e){const u=d;return a.dynamic?(i(),m(u,{key:0,name:a.name},null,8,["name"])):(i(),f("span",{key:1,class:_(a.name)},null,2))}const g=z(G,[["render",k]]);function O({ui:a,props:o}){const r=h();if(v("ButtonGroupContextConsumer",!0),c("ButtonGroupContextConsumer",!1))return{size:t(()=>o.size),rounded:t(()=>a.value.rounded)};let n=r.parent,e;for(;n&&!e;){if(n.type.name==="ButtonGroup"){e=c(`group-${n.uid}`);break}n=n.parent}const u=t(()=>e==null?void 0:e.value.children.indexOf(r));return y(()=>{e==null||e.value.register(r)}),B(()=>{e==null||e.value.unregister(r)}),{size:t(()=>(e==null?void 0:e.value.size)||o.size),rounded:t(()=>!e||u.value===-1?a.value.rounded:e.value.children.length===1?e.value.ui.rounded:u.value===0?e.value.rounded.start:u.value===e.value.children.length-1?e.value.rounded.end:"rounded-none")}}export{g as _,O as u};