import{defineComponent as t,ref as r,resolveComponent as c,openBlock as u,createElementBlock as p,createVNode as s,createTextVNode as m,toDisplayString as d,Fragment as i}from"./framework.BZvP3IB3.js";const x=t({__name:"DemoProCheckbox",setup(b){const e=r([]),l=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橘子",value:"orange"}];return(_,o)=>{const n=c("ProCheckbox");return u(),p(i,null,[s(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),options:l},null,8,["modelValue"]),m(" "+d(JSON.stringify(e.value)),1)],64)}}});export{x as default};