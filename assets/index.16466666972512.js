import{_ as u,u as l,a as n,L as a}from"./index.1646666697251.js";import{d,aB as i,z as _,H as m,ad as c,o as p,O as f,S as y,j as v}from"./vue.1646666697251.js";const L=d({name:"layout",components:{defaults:i(()=>n(()=>import("./defaults.1646666697251.js"),["assets/defaults.1646666697251.js","assets/vue.1646666697251.js","assets/index.1646666697251.js","assets/index.1646666697251.css","assets/aside.1646666697251.js","assets/main.1646666697251.js","assets/main.1646666697251.css","assets/logo-mini.1646666697251.js","assets/sortable.esm.1646666697251.js","assets/parent.1646666697251.js"])),classic:i(()=>n(()=>import("./classic.1646666697251.js"),["assets/classic.1646666697251.js","assets/index.1646666697251.js","assets/index.1646666697251.css","assets/vue.1646666697251.js","assets/aside.1646666697251.js","assets/main.1646666697251.js","assets/main.1646666697251.css","assets/logo-mini.1646666697251.js","assets/sortable.esm.1646666697251.js","assets/parent.1646666697251.js"])),transverse:i(()=>n(()=>import("./transverse.1646666697251.js"),["assets/transverse.1646666697251.js","assets/main.1646666697251.js","assets/main.1646666697251.css","assets/vue.1646666697251.js","assets/index.1646666697251.js","assets/index.1646666697251.css","assets/logo-mini.1646666697251.js","assets/sortable.esm.1646666697251.js","assets/parent.1646666697251.js"])),columns:i(()=>n(()=>import("./columns.1646666697251.js"),["assets/columns.1646666697251.js","assets/columns.1646666697251.css","assets/index.1646666697251.js","assets/index.1646666697251.css","assets/vue.1646666697251.js","assets/aside.1646666697251.js","assets/main.1646666697251.js","assets/main.1646666697251.css","assets/logo-mini.1646666697251.js","assets/sortable.esm.1646666697251.js","assets/parent.1646666697251.js"]))},setup(){const{proxy:t}=v(),r=l(),e=_(()=>r.state.themeConfig.themeConfig),o=()=>{a.get("oldLayout")||a.set("oldLayout",e.value.layout);const s=document.body.clientWidth;s<1e3?(e.value.isCollapse=!1,t.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:s})):t.mittBus.emit("layoutMobileResize",{layout:a.get("oldLayout")?a.get("oldLayout"):e.value.layout,clientWidth:s})};return m(()=>{o(),window.addEventListener("resize",o)}),c(()=>{window.removeEventListener("resize",o)}),{getThemeConfig:e}}});function g(t,r,e,o,s,E){return p(),f(y(t.getThemeConfig.layout))}var R=u(L,[["render",g]]);export{R as default};
