import{defineComponent as c,ref as u,resolveComponent as n,openBlock as d,createElementBlock as i,createVNode as t,withCtx as p,createTextVNode as r,toDisplayString as _,Fragment as f}from"./framework.dL_0XNAs.js";const B=c({__name:"DemoProBaseForm2",setup(b){const o=u({email:"",password:"",remember:!1}),a=[{label:"邮箱",prop:"email",component:"n-input",props:{placeholder:"请输入邮箱",type:"email"}},{label:"密码",prop:"password",component:"n-input",props:{placeholder:"请输入密码",type:"password"}},{prop:"remember",props:{label:"记住我"},component:"n-checkbox"}];return(y,e)=>{const l=n("n-button"),m=n("ProBaseForm");return d(),i(f,null,[t(m,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),columns:a,cols:24,xGap:16,yGap:16,columnsSpan:12},{footer:p(()=>[t(l,{type:"primary"},{default:p(()=>e[1]||(e[1]=[r("提交")])),_:1})]),_:1},8,["modelValue"]),r(" "+_(JSON.stringify(o.value)),1)],64)}}});export{B as default};