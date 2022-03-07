var I=Object.defineProperty;var w=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var k=(t,s,n)=>s in t?I(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,S=(t,s)=>{for(var n in s||(s={}))E.call(s,n)&&k(t,n,s[n]);if(w)for(var n of w(s))q.call(s,n)&&k(t,n,s[n]);return t};import{d as W,aA as H,a0 as M,z as b,l as $,k as N,aF as P,ac as R,Z as m,o as h,O as L,P as p,a as B,a5 as j,F as v,W as g,b as A,V as F,a6 as z,H as O,j as U,Q as J,R as Q,T as Z,J as x}from"./vue.1646666697251.js";import{u as V,_ as T}from"./index.1646666697251.js";import{S as G,L as K}from"./main.1646666697251.js";const X=W({name:"navMenuVertical",components:{SubItem:G},props:{menuList:{type:Array,default:()=>[]}},setup(t){const s=V(),n=H(),r=M({defaultActive:n.meta.isDynamic?n.meta.isDynamicPath:n.path,isCollapse:!1}),y=b(()=>t.menuList),u=b(()=>s.state.themeConfig.themeConfig),c=i=>{const{path:a,meta:l}=i,d=l.isDynamic?l.isDynamicPath.split("/"):a.split("/");return d.length>=4&&l.isHide?d.splice(0,3).join("/"):a};return $(s.state.themeConfig.themeConfig,()=>{document.body.clientWidth<=1e3?r.isCollapse=!1:r.isCollapse=u.value.isCollapse},{immediate:!0}),N(()=>{r.defaultActive=c(n)}),P(i=>{r.defaultActive=c(i),document.body.clientWidth<1e3&&(u.value.isCollapse=!1)}),S({menuLists:y,getThemeConfig:u},R(r))}});function Y(t,s,n,r,y,u){const c=m("SvgIcon"),i=m("SubItem"),a=m("el-sub-menu"),l=m("el-menu-item"),d=m("el-menu");return h(),L(d,{router:"","default-active":t.defaultActive,"background-color":"transparent",collapse:t.isCollapse,"unique-opened":t.getThemeConfig.isUniqueOpened,"collapse-transition":!1},{default:p(()=>[(h(!0),B(v,null,j(t.menuLists,e=>(h(),B(v,null,[e.children&&e.children.length>0?(h(),L(a,{index:e.path,key:e.path},{title:p(()=>[g(c,{name:e.meta.icon},null,8,["name"]),A("span",null,F(t.$t(e.meta.title)),1)]),default:p(()=>[g(i,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(h(),L(l,{index:e.path,key:e.path},z({default:p(()=>[g(c,{name:e.meta.icon},null,8,["name"])]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:p(()=>[A("span",null,F(t.$t(e.meta.title)),1)])}:{name:"title",fn:p(()=>[A("a",{href:e.meta.isLink,target:"_blank",rel:"opener",class:"w100"},F(t.$t(e.meta.title)),9,["href"])])}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}var ee=T(X,[["render",Y]]);const te=W({name:"layoutAside",components:{Logo:K,Vertical:ee},setup(){const{proxy:t}=U(),s=V(),n=M({menuList:[],clientWidth:0}),r=b(()=>s.state.tagsViewRoutes.isTagsViewCurrenFull),y=b(()=>{const{layout:e,isCollapse:o,menuBar:f}=s.state.themeConfig.themeConfig,C=["#FFFFFF","#FFF","#fff","#ffffff"].includes(f)?"layout-el-aside-br-color":"";if(n.clientWidth<=1e3)if(o){document.body.setAttribute("class","el-popup-parent--hidden");const D=document.querySelector(".layout-container"),_=document.createElement("div");return _.setAttribute("class","layout-aside-mobile-mode"),D.appendChild(_),_.addEventListener("click",u),[C,"layout-aside-mobile","layout-aside-mobile-open"]}else return u(),[C,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?o?[C,"layout-aside-pc-1"]:[C,"layout-aside-pc-220"]:o?[C,"layout-aside-pc-64"]:[C,"layout-aside-pc-220"]}),u=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var f;(f=e==null?void 0:e.parentNode)==null||f.removeChild(e)},300),document.body.clientWidth<1e3&&(s.state.themeConfig.themeConfig.isCollapse=!1),document.body.setAttribute("class","")},c=b(()=>{let{layout:e,isShowLogo:o}=s.state.themeConfig.themeConfig;return o&&e==="defaults"||o&&e==="columns"}),i=()=>{if(s.state.themeConfig.themeConfig.layout==="columns")return!1;n.menuList=a(s.state.routesList.routesList)},a=e=>e.filter(o=>!o.meta.isHide).map(o=>(o=Object.assign({},o),o.children&&(o.children=a(o.children)),o)),l=e=>{n.clientWidth=e},d=e=>{let{layout:o}=s.state.themeConfig.themeConfig;if(o!=="columns")return!1;e||t.mittBus.emit("restoreDefault"),s.dispatch("routesList/setColumnsMenuHover",e)};return $(s.state.themeConfig.themeConfig,e=>{if(e.isShowLogoChange!==e.isShowLogo){if(!t.$refs.layoutAsideScrollbarRef)return!1;t.$refs.layoutAsideScrollbarRef.update()}}),$(s.state,e=>{let{layout:o,isClassicSplitMenu:f}=e.themeConfig.themeConfig;if(o==="classic"&&f)return!1;i()}),O(()=>{l(document.body.clientWidth),i(),t.mittBus.on("setSendColumnsChildren",e=>{n.menuList=e.children}),t.mittBus.on("setSendClassicChildren",e=>{let{layout:o,isClassicSplitMenu:f}=s.state.themeConfig.themeConfig;o==="classic"&&f&&(n.menuList=[],n.menuList=e.children)}),t.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{i()}),t.mittBus.on("layoutMobileResize",e=>{l(e.clientWidth),u()})}),S({setCollapseStyle:y,setShowLogo:c,isTagsViewCurrenFull:r,onAsideEnterLeave:d},R(n))}}),se={class:"h100"};function ne(t,s,n,r,y,u){const c=m("Logo"),i=m("Vertical"),a=m("el-scrollbar"),l=m("el-aside");return J((h(),B("div",se,[g(l,{class:x(["layout-aside",t.setCollapseStyle])},{default:p(()=>[t.setShowLogo?(h(),L(c,{key:0})):Z("",!0),g(a,{class:"flex-auto",ref:"layoutAsideScrollbarRef",onMouseenter:s[0]||(s[0]=d=>t.onAsideEnterLeave(!0)),onMouseleave:s[1]||(s[1]=d=>t.onAsideEnterLeave(!1))},{default:p(()=>[g(i,{menuList:t.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[Q,!t.isTagsViewCurrenFull]])}var ue=T(te,[["render",ne]]);export{ue as A};
