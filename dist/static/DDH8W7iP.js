import{i as $}from"./ElkFyO1H.js";import{r as A}from"./CdSTkMVz.js";const b=({items:f,open:d=(a,u,s,e)=>!0,active:g=(a,u,s,e)=>!1,sort:C,action:h})=>{let a=0;const u=r=>{var n,l;if(!r||(r.$isDir=$(r),!r.$isDir))return;r.$fileCount=(n=r.children)==null?void 0:n.filter(t=>!$(t)).length;const o=(l=r.children)==null?void 0:l.filter(t=>$(t));r.$dirCount=o==null?void 0:o.length,o==null||o.forEach(t=>u(t))},s=r=>{var o;return r.$isDir&&(r.$totalFileCount=r.$fileCount||0,r.$totalDirCount=r.$dirCount||0,(o=r.children)==null||o.filter($).forEach(n=>{const l=s(n);r.$totalFileCount=(r.$totalFileCount||0)+(l.$totalFileCount||0),r.$totalDirCount=(r.$totalDirCount||0)+(l.$totalDirCount||0)})),r},e=(r,o=0,n=[])=>{if(!r)return[];const l=r.map((t,i)=>{a++,h&&h(t,o,i,n);let c;return t.children&&(c=e(t.children,o+1,[t,...n]),t.$total=c.reduce((F,O)=>F+Number(O.$totalFileCount),t.$total)),{...t,$row:a,$isOpen:d(t,o,i,[t,...n]),$isActive:g(t,o,i,[t,...n]),children:c}});return C&&l.sort((t,i)=>C(t,i,o)),l},D=Array.isArray(f)?Array.from(f):[];D.forEach(r=>{u(r),s(r)});const p=A(e(D));return{formatItems:e,toggleOpen:r=>{r.$isOpen=!r.$isOpen},items:p}};export{b as u};
