import{l as g,r as m}from"./CqVEwMom.js";import{i as f}from"./ElkFyO1H.js";import{f as n}from"./_MiPQb9e.js";const C=async()=>{const i=await g(),o=m([]),l=(a,e=0,s=[])=>a.map((r,c)=>{const t={...r,tags:n(r.tags),categories:n(r.categories),$isDir:f(r),$depth:e,$index:c,$parents:()=>s};return o.value.push(t),Array.isArray(t.children)&&t.children.length>0&&(t.children=l(t.children,e+1,[t,...s])),t});return i&&l(i),{list:o,getAllByTags:a=>o.value.filter(e=>!e.$isDir&&Array.isArray(e.tags)&&e.tags.some(s=>a.some(r=>(r==null?void 0:r.toLocaleLowerCase())==(s==null?void 0:s.toLocaleLowerCase())))),getAllByCatebories:a=>o.value.filter(e=>!e.$isDir&&Array.isArray(e.categories)&&e.categories.some(s=>a.some(r=>r.toLocaleLowerCase()==s.toLocaleLowerCase())))}};export{C as u};
