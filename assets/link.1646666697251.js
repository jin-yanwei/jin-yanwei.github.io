var c=Object.defineProperty;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var n=(e,a,t)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))p.call(a,t)&&n(e,t,a[t]);return e};import{d as f,aA as m,a0 as h,z as d,l as k,ac as g,a as v,b as R,V as u,K as _,o as w}from"./vue.1646666697251.js";import{_ as y,u as L}from"./index.1646666697251.js";const $=f({name:"layoutLinkView",setup(){const e=m(),a=L(),t=h({currentRouteMeta:{isLink:"",title:""}}),s=d(()=>{let{isTagsview:r}=a.state.themeConfig.themeConfig;return r?"114px":"80px"});return k(()=>e.path,()=>{t.currentRouteMeta=e.meta},{immediate:!0}),i({setLinkHeight:s},g(t))}}),M=["href"];function b(e,a,t,s,r,B){return w(),v("div",{class:"layout-view-bg-white flex layout-view-link",style:_({height:`calc(100vh - ${e.setLinkHeight}`})},[R("a",{href:e.currentRouteMeta.isLink,target:"_blank",rel:"opener",class:"flex-margin"},u(e.$t(e.currentRouteMeta.title))+"\uFF1A"+u(e.currentRouteMeta.isLink),9,M)],4)}var x=y($,[["render",b]]);export{x as default};
