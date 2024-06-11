import E from"./CXxxVAZn.js";import{a as $,_ as O,b as W}from"./BXdKInhd.js";import{_ as C}from"./CgVIYVVg.js";import{_ as V}from"./CVjItmdG.js";import{m as I,n as _,d as j,p as x,s as w,v as P,x as z,o as r,c as o,j as N,z as c,F as S,y,t as T,g as d,B as p,A as l,k as B,e as D,w as J,i as q,J as G,h as L,K as H}from"./CdSTkMVz.js";import{u as K}from"./BiIBU-O4.js";import{_ as M}from"./DlAUqK2U.js";import{u as Q}from"./DyDQPQhd.js";import{u as X}from"./Cag1MKsN.js";import"./BQkc-AXV.js";import"./CbUDYWMB.js";import"./ElkFyO1H.js";const Y={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Z={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},k=I(_.ui.strategy,_.ui.divider,Y),ee=j({components:{UIcon:C,UAvatar:$},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>k.default.size,validator(e){return Object.keys(k.border.size.horizontal).includes(e)||Object.keys(k.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:s}=K("divider",x(e,"ui"),k),u=w(()=>P(z(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),g=w(()=>z(a.value.container.base,a.value.container[e.orientation])),b=w(()=>z(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:s,wrapperClass:u,containerClass:g,borderClass:b}}});function ae(e,a,s,u,g,b){const m=C,v=$;return r(),o("div",p({class:e.wrapperClass},e.attrs),[N("div",{class:c(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),o(S,{key:0},[N("div",{class:c(e.containerClass)},[y(e.$slots,"default",{},()=>[e.label?(r(),o("span",{key:0,class:c(e.ui.label)},T(e.label),3)):e.icon?(r(),d(m,{key:1,name:e.icon,class:c(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),d(v,p({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):l("",!0)])],2),N("div",{class:c(e.borderClass)},null,2)],64)):l("",!0)],16)}const F=M(ee,[["render",ae]]),te=I(_.ui.strategy,_.ui.verticalNavigation,Z),re=j({components:{UIcon:C,UAvatar:$,UBadge:V,ULink:O,UDivider:F},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:s}=K("verticalNavigation",x(e,"ui"),te,x(e,"class")),u=w(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:a,attrs:s,sections:u,getULinkProps:W,twMerge:P,twJoin:z}}}),se={key:0,class:"sr-only"};function oe(e,a,s,u,g,b){const m=$,v=C,i=V,h=O,U=F;return r(),o("nav",p({class:e.ui.wrapper},e.attrs),[(r(!0),o(S,null,B(e.sections,(A,f)=>(r(),o("ul",{key:`section${f}`},[(r(!0),o(S,null,B(A,(t,R)=>(r(),o("li",{key:`section${f}-${R}`},[D(h,p({ref_for:!0},e.getULinkProps(t),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:t.click,onKeyup:a[0]||(a[0]=G(n=>n.target.blur(),["enter"]))}),{default:J(({isActive:n})=>[y(e.$slots,"avatar",{link:t,isActive:n},()=>[t.avatar?(r(),d(m,p({key:0,ref_for:!0},{size:e.ui.avatar.size,...t.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):l("",!0)]),y(e.$slots,"icon",{link:t,isActive:n},()=>[t.icon?(r(),d(v,{key:0,name:t.icon,class:c(e.twMerge(e.twJoin(e.ui.icon.base,n?e.ui.icon.active:e.ui.icon.inactive),t.iconClass))},null,8,["name","class"])):l("",!0)]),y(e.$slots,"default",{link:t,isActive:n},()=>[t.label?(r(),o("span",{key:0,class:c(e.twMerge(e.ui.label,t.labelClass))},[n?(r(),o("span",se," Current page: ")):l("",!0),q(" "+T(t.label),1)],2)):l("",!0)]),y(e.$slots,"badge",{link:t,isActive:n},()=>[t.badge?(r(),d(i,p({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof t.badge=="string"||typeof t.badge=="number"?{label:t.badge}:t.badge},{class:e.ui.badge.base}),null,16,["class"])):l("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),f<e.sections.length-1?(r(),d(U,{key:0,ui:e.ui.divider},null,8,["ui"])):l("",!0)]))),128))],16)}const ie=M(re,[["render",oe]]),he=j({__name:"TagNav",async setup(e){let a,s;const{items:u}=([a,s]=L(()=>Q()),a=await a,s(),a),{getAllByTags:g}=([a,s]=L(()=>X()),a=await a,s(),a),b=H(),m=u.map(i=>{const h=g([i.name]);return{label:i.title,active:b.params.id==i.name,icon:i.icon,to:`/tags/${i.name}`,badge:h.length}}),v=[{label:"Profile",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"},badge:100},{label:"Installation",icon:"i-heroicons-home",to:"/getting-started/installation"},{label:"Vertical Navigation",icon:"i-heroicons-chart-bar",to:`${b.path.startsWith("/dev")?"/dev":""}/components/vertical-navigation`},{label:"Command Palette",icon:"i-heroicons-command-line",to:"/components/command-palette"},...m];return(i,h)=>{const U=E,A=ie;return r(),d(A,{links:v,class:"text-sm"},{icon:J(({link:f})=>[D(U,{name:f.icon,class:"size-4"},null,8,["name"])]),_:1})}}});export{he as default};
