import{defineComponent as t,ref as r,resolveComponent as u,openBlock as s,createElementBlock as d,createVNode as i,createTextVNode as p,toDisplayString as m,Fragment as c}from"./framework.CO3--Yx1.js";const V=t({__name:"DemoProRadio2",setup(_){const e=r(null),l=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橘子",value:"orange"}];return(v,o)=>{const a=u("ProRadio");return s(),d(c,null,[i(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),options:l,size:"large",disabled:""},null,8,["modelValue"]),p(" "+m(JSON.stringify(e.value)),1)],64)}}});export{V as default};
