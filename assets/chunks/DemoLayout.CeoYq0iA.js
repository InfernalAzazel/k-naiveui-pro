import{Icon as c}from"./theme.DEHfr3FO.js";import{defineComponent as y,ref as b,resolveComponent as u,openBlock as h,createElementBlock as k,createVNode as t,withCtx as o,createTextVNode as l,h as m}from"./framework.DBlNQN5G.js";const f={style:{height:"50vh"}},w=y({__name:"DemoLayout",setup(v){function n(a){return()=>m(c,{icon:a})}const d=[{label:"且听风吟",key:"hear-the-wind-sing",icon:n("ion:chevron-up-outline")},{label:"1973年的弹珠玩具",key:"pinball-1973",icon:n("ion:chevron-up-outline"),disabled:!0,children:[{label:"鼠",key:"rat"}]},{label:"寻羊冒险记",key:"a-wild-sheep-chase",disabled:!0,icon:n("ion:chevron-up-outline")},{label:"舞，舞，舞",key:"dance-dance-dance",icon:n("ion:chevron-up-outline"),children:[{type:"group",label:"人物",key:"people",children:[{label:"叙事者",key:"narrator",icon:n("ion:chevron-up-outline")},{label:"羊男",key:"sheep-man"}]},{label:"饮品",key:"beverage",icon:n("ion:chevron-up-outline"),children:[{label:"威士忌",key:"whisky"}]},{label:"食物",key:"food",children:[{label:"三明治",key:"sandwich"}]},{label:"过去增多，未来减少",key:"the-past-increases-the-future-recedes"}]}],i=b(!0);return(a,e)=>{const r=u("n-button"),s=u("ProLayout");return h(),k("div",f,[t(s,{menus:d,collapsed:i.value,"onUpdate:collapsed":e[0]||(e[0]=p=>i.value=p)},{actions:o(()=>[t(r,null,{default:o(()=>e[1]||(e[1]=[l("功能1")])),_:1}),t(r,null,{default:o(()=>e[2]||(e[2]=[l("功能2")])),_:1}),t(r,null,{default:o(()=>e[3]||(e[3]=[l("功能3")])),_:1})]),footer:o(()=>e[4]||(e[4]=[l(" © 2024 Your Company. All rights reserved. ")])),default:o(()=>[e[5]||(e[5]=l(" 我是内容 "))]),_:1},8,["collapsed"])])}}});export{w as default};
