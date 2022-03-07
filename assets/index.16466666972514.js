var g=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var E=(o,n,l)=>n in o?g(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l,C=(o,n)=>{for(var l in n||(n={}))$.call(n,l)&&E(o,l,n[l]);if(w)for(var l of w(n))z.call(n,l)&&E(o,l,n[l]);return o};import{_ as R,u as T,E as O,b as S}from"./index.1646666697251.js";import V from"./addMenu.1646666697251.js";import N from"./editMenu.1646666697251.js";import{d as I,h as D,a0 as L,z as P,ac as U,a as W,W as e,P as t,Z as s,o as Z,b as _,V as r,U as c}from"./vue.1646666697251.js";import"./index.16466666972515.js";import"./getStyleSheets.1646666697251.js";const j=I({name:"systemMenu",components:{AddMenu:V,EditMenu:N},setup(){const o=T(),n=D(),l=D(),p=L({}),m=P(()=>o.state.routesList.routesList);return C({addMenuRef:n,editMenuRef:l,onOpenAddMenu:()=>{n.value.openDialog()},onOpenEditMenu:d=>{l.value.openDialog(d)},menuTableData:m,onTabelRowDel:d=>{O.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8DEF\u7531\uFF1A${d.path}, \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{S.success("\u5220\u9664\u6210\u529F")}).catch(()=>{})}},U(p))}}),q={class:"system-menu-container"},G={class:"system-menu-search mb15"},H=c(" \u67E5\u8BE2 "),J=c(" \u65B0\u589E\u83DC\u5355 "),K={class:"ml10"},Q=c("\u65B0\u589E"),X=c("\u4FEE\u6539"),Y=c("\u5220\u9664");function ee(o,n,l,p,m,b){const f=s("el-input"),h=s("ele-Search"),d=s("el-icon"),i=s("el-button"),F=s("ele-FolderAdd"),M=s("SvgIcon"),a=s("el-table-column"),v=s("el-tag"),y=s("el-table"),B=s("el-card"),k=s("AddMenu"),x=s("EditMenu");return Z(),W("div",q,[e(B,{shadow:"hover"},{default:t(()=>[_("div",G,[e(f,{size:"default",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",style:{"max-width":"180px"}}),e(i,{size:"default",type:"primary",class:"ml10"},{default:t(()=>[e(d,null,{default:t(()=>[e(h)]),_:1}),H]),_:1}),e(i,{size:"default",type:"success",class:"ml10",onClick:o.onOpenAddMenu},{default:t(()=>[e(d,null,{default:t(()=>[e(F)]),_:1}),J]),_:1},8,["onClick"])]),e(y,{data:o.menuTableData,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(a,{label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":""},{default:t(u=>[e(M,{name:u.row.meta.icon},null,8,["name"]),_("span",K,r(o.$t(u.row.meta.title)),1)]),_:1}),e(a,{prop:"path",label:"\u8DEF\u7531\u8DEF\u5F84","show-overflow-tooltip":""}),e(a,{label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":""},{default:t(u=>[_("span",null,r(u.row.component),1)]),_:1}),e(a,{label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":""},{default:t(u=>[_("span",null,r(u.row.meta.roles),1)]),_:1}),e(a,{label:"\u6392\u5E8F","show-overflow-tooltip":"",width:"80"},{default:t(u=>[c(r(u.$index),1)]),_:1}),e(a,{label:"\u7C7B\u578B","show-overflow-tooltip":"",width:"80"},{default:t(u=>[e(v,{type:"success",size:"small"},{default:t(()=>[c(r(u.row.xx)+"\u83DC\u5355",1)]),_:2},1024)]),_:1}),e(a,{label:"\u64CD\u4F5C","show-overflow-tooltip":"",width:"140"},{default:t(u=>[e(i,{size:"small",type:"text",onClick:o.onOpenAddMenu},{default:t(()=>[Q]),_:1},8,["onClick"]),e(i,{size:"small",type:"text",onClick:A=>o.onOpenEditMenu(u.row)},{default:t(()=>[X]),_:2},1032,["onClick"]),e(i,{size:"small",type:"text",onClick:A=>o.onTabelRowDel(u.row)},{default:t(()=>[Y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(k,{ref:"addMenuRef"},null,512),e(x,{ref:"editMenuRef"},null,512)])}var ce=R(j,[["render",ee]]);export{ce as default};
