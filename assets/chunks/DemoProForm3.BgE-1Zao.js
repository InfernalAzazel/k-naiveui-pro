import{defineComponent as t,ref as r,resolveComponent as s,openBlock as u,createElementBlock as p,createVNode as m,createTextVNode as i,toDisplayString as d,Fragment as g}from"./framework.C-mL38yw.js";const y=t({__name:"DemoProForm3",setup(b){const e=r({}),l=[{label:"姓名",prop:"name",component:"NInput",span:12},{label:"地址",prop:"address",component:"NInput",span:12},{label:"选择",prop:"select",component:"n-select",props:{options:[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}]}}];return(v,o)=>{const n=s("ProForm");return u(),p(g,null,[m(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),columns:l},null,8,["modelValue"]),i(" "+d(JSON.stringify(e.value)),1)],64)}}});export{y as default};
