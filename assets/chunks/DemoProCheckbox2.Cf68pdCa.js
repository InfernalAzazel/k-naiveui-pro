import{defineComponent as t,ref as r,resolveComponent as s,openBlock as c,createElementBlock as u,createVNode as p,createTextVNode as m,toDisplayString as d,Fragment as i}from"./framework.CO3--Yx1.js";const x=t({__name:"DemoProCheckbox2",setup(b){const e=r([]),l=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橘子",value:"orange"}];return(_,o)=>{const a=s("ProCheckbox");return c(),u(i,null,[p(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),options:l,size:"large",disabled:""},null,8,["modelValue"]),m(" "+d(JSON.stringify(e.value)),1)],64)}}});export{x as default};
