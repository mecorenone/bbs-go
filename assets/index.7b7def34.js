import{g as T,b as V,A as S,y as U,z as R,B as j,x as q}from"./index.c3037d91.js";import{d as A,e as w,r as x,B as I,aD as G,aG as a,aH as e,u as t,bE as O,bF as N,b5 as P,b4 as $,b8 as H,a$ as L,c as K,o as Q,C as W,F as k,aL as B,aM as X,ab as Y,aV as Z,a5 as ee,bI as te,bJ as ae}from"./arco.bfc06e8a.js";/* empty css               *//* empty css              *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import"./chart.8d130ef7.js";import"./vue.203b0a99.js";const oe=A({__name:"Edit",emits:["ok"],setup(M,{expose:m,emit:f}){const b=f,r=T(),n=w(),i=x({visible:!1,isCreate:!1,title:""}),o=w({type:void 0,word:void 0,remark:void 0}),y={word:[{required:!0,message:"\u8BF7\u8F93\u5165\u8FDD\u7981\u8BCD"}]},h=()=>{n.value.resetFields(),i.isCreate=!0,i.title="\u65B0\u589E",i.visible=!0},D=async u=>{n.value.resetFields(),i.isCreate=!1,i.title="\u7F16\u8F91";try{o.value=await V.get(`/api/admin/forbidden-word/${u}`)}catch(l){S(l)}i.visible=!0},z=()=>{n.value.resetFields()},s=async u=>{if(await n.value.validate()){u(!1);return}try{const c=i.isCreate?"/api/admin/forbidden-word/create":"/api/admin/forbidden-word/update";await V.postForm(c,U(o.value)),R("\u63D0\u4EA4\u6210\u529F"),b("ok"),u(!0)}catch(c){S(c),u(!1)}};return m({show:h,showEdit:D}),(u,l)=>{const c=O,v=N,F=P,C=$,g=H,E=L;return I(),G(E,{visible:t(i).visible,"onUpdate:visible":l[3]||(l[3]=d=>t(i).visible=d),title:t(i).title,size:t(r).table.size,onCancel:z,onBeforeOk:s},{default:a(()=>[e(g,{ref_key:"formRef",ref:n,model:t(o),rules:y},{default:a(()=>[e(F,{label:"\u7C7B\u578B",field:"type"},{default:a(()=>[e(v,{modelValue:t(o).type,"onUpdate:modelValue":l[0]||(l[0]=d=>t(o).type=d),placeholder:"\u7C7B\u578B"},{default:a(()=>[e(c,{label:"\u8BCD\u7EC4",value:"word"}),e(c,{label:"\u6B63\u5219\u8868\u8FBE\u5F0F",value:"regex"})]),_:1},8,["modelValue"])]),_:1}),e(F,{label:"\u8FDD\u7981\u8BCD",field:"word"},{default:a(()=>[e(C,{modelValue:t(o).word,"onUpdate:modelValue":l[1]||(l[1]=d=>t(o).word=d)},null,8,["modelValue"])]),_:1}),e(F,{label:"\u5907\u6CE8",field:"remark"},{default:a(()=>[e(C,{modelValue:t(o).remark,"onUpdate:modelValue":l[2]||(l[2]=d=>t(o).remark=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","size"])}}}),le={class:"container"},se={class:"container-header"},ne={class:"action-btns"},ie={class:"container-main"},Ce=A({__name:"index",setup(M){const m=T(),f=w(!1),b=w(),r=x({limit:20,page:1,type:void 0,word:void 0}),n=x({page:{page:1,limit:20,total:0},results:[]}),i=K(()=>({total:n.page.total,current:n.page.page,pageSize:n.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));Q(()=>{j()});const o=async()=>{f.value=!0;try{const s=await V.postForm("/api/admin/forbidden-word/list",U(r));n.page=s.page,n.results=s.results}finally{f.value=!1}};o();const y=()=>{b.value.show()},h=s=>{b.value.showEdit(s)},D=s=>{r.page=s,o()},z=s=>{r.limit=s,o()};return(s,u)=>{const l=O,c=N,v=P,F=$,C=Y,g=Z,E=H,d=ee,_=te,J=ae;return I(),W("div",le,[k("div",se,[e(E,{model:t(r),layout:"inline",size:t(m).table.size},{default:a(()=>[e(v,null,{default:a(()=>[e(c,{modelValue:t(r).type,"onUpdate:modelValue":u[0]||(u[0]=p=>t(r).type=p),placeholder:"\u7C7B\u578B",clearable:"",onChange:o},{default:a(()=>[e(l,{label:"\u8BCD\u7EC4",value:"word"}),e(l,{label:"\u6B63\u5219\u8868\u8FBE\u5F0F",value:"regex"})]),_:1},8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(F,{modelValue:t(r).word,"onUpdate:modelValue":u[1]||(u[1]=p=>t(r).word=p),placeholder:"\u8FDD\u7981\u8BCD"},null,8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(g,{type:"primary","html-type":"submit",onClick:o},{icon:a(()=>[e(C)]),default:a(()=>[B(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),k("div",ne,[e(g,{type:"primary",size:t(m).table.size,onClick:y},{icon:a(()=>[e(d)]),default:a(()=>[B(" \u65B0\u589E ")]),_:1},8,["size"])])]),k("div",ie,[e(J,{loading:t(f),data:t(n).results,size:t(m).table.size,bordered:t(m).table.bordered,pagination:t(i),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",onPageChange:D,onPageSizeChange:z},{columns:a(()=>[e(_,{title:"\u7F16\u53F7","data-index":"id"}),e(_,{title:"\u7C7B\u578B","data-index":"type"}),e(_,{title:"\u8FDD\u7981\u8BCD","data-index":"word"}),e(_,{title:"\u5907\u6CE8","data-index":"remark"}),e(_,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"},{cell:a(({record:p})=>[B(X(("useFormatDate"in s?s.useFormatDate:t(q))(p.createTime)),1)]),_:1}),e(_,{title:"\u64CD\u4F5C"},{cell:a(({record:p})=>[e(g,{type:"primary",size:t(m).table.size,onClick:ue=>h(p.id)},{default:a(()=>[B("\u7F16\u8F91")]),_:2},1032,["size","onClick"])]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])]),e(oe,{ref_key:"edit",ref:b,onOk:o},null,512)])}}});export{Ce as default};