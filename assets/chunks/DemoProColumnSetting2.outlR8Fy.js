import{defineComponent as c,ref as a,computed as d,resolveComponent as m,openBlock as p,createElementBlock as _,createVNode as r,Fragment as f}from"./framework.CO3--Yx1.js";const g=c({__name:"DemoProColumnSetting2",setup(h){const l=a([{title:"个人信息",key:"personalInfo",children:[{title:"姓名",key:"name"},{title:"年龄",key:"age"}]},{title:"联系方式",key:"contactInfo",children:[{title:"电话",key:"phone"},{title:"邮箱",key:"email"}]},{title:"地址",key:"address"}]),i=d(()=>{function o(n){return n.filter(e=>!e.hide).map(e=>{const t={...e};return e.children&&(t.children=o(e.children)),t})}return o(l.value)}),s=a([{name:"张三",age:18,phone:"123456789",email:"zhangsan@example.com",address:"北京"},{name:"李四",age:25,phone:"987654321",email:"lisi@example.com",address:"上海"}]);return(o,n)=>{const e=m("pro-column-setting"),t=m("n-data-table");return p(),_(f,null,[r(e,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=u=>l.value=u)},null,8,["modelValue"]),r(t,{columns:i.value,data:s.value},null,8,["columns","data"])],64)}}});export{g as default};
