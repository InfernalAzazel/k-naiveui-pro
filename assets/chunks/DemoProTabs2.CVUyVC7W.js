import{defineComponent as c,ref as l,resolveComponent as i,openBlock as r,createBlock as p}from"./framework.CO3--Yx1.js";import{createDiscreteApi as u}from"./theme.By-VdnCX.js";const b=c({__name:"DemoProTabs2",setup(d){const{message:n}=u(["message"]),e=l([{icon:"mdi:home",title:"首页",path:"/home"},{icon:"mdi:account",title:"我的账户",path:"/account"},{icon:"mdi:settings",title:"设置",path:"/settings"}]);function a(t){n.info(t)}return(t,o)=>{const s=i("ProTabs");return r(),p(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),storageKey:"my-custom-tabs",onSelect:a},null,8,["modelValue"])}}});export{b as default};