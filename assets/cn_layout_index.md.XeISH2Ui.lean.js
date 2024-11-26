const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoLayout.FXJHv0fL.js","assets/chunks/theme.NkqsIJxy.js","assets/chunks/framework.BZvP3IB3.js","assets/chunks/index.DgTVH9wY.js"])))=>i.map(i=>d[i]);
import{provide as e,useData as r,openBlock as d,createElementBlock as p,createBaseVNode as i,createTextVNode as s,createVNode as h,withCtx as a,createStaticVNode as o,resolveComponent as y,unref as g,defineAsyncComponent as c,__vitePreload as t}from"./chunks/framework.BZvP3IB3.js";const C=JSON.parse('{"title":"ProLayout","description":"","frontmatter":{},"headers":[],"relativePath":"cn/layout/index.md","filePath":"cn/layout/index.md"}'),A={name:"cn/layout/index.md"},B=Object.assign(A,{setup(F){e("PageDataInjectKey",r());const k=c(()=>t(()=>import("./chunks/DemoLayout.FXJHv0fL.js"),__vite__mapDeps([0,1,2])));return e("$ComponentsDemoLayoutVueDemoInjectKey",{identifier:"ComponentsDemoLayoutVue",entry:"./components/DemoLayout",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default",title:"基础用法"},files:[{identifier:"ComponentsDemoLayoutVue",path:"./components/DemoLayout.vue",importMap:{imports:{vue:()=>t(()=>import("./chunks/framework.BZvP3IB3.js").then(l=>l.vue_runtime_esmBundler),[]),"@iconify/vue":()=>t(()=>import("./chunks/theme.NkqsIJxy.js").then(l=>l.iconify),__vite__mapDeps([1,2]))}},filename:"DemoLayout",extension:".vue",code:"%3Ctemplate%3E%0A%20%3Cdiv%20style%3D%22height%3A%2050vh%3B%22%3E%0A%20%20%20%3CProLayout%20%3Amenus%3D%22menuOptions%22%20v-model%3Acollapsed%3D%22collapsed%22%3E%0A%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD1%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD3%3C%2Fn-button%3E%0A%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%20%C2%A9%202024%20Your%20Company.%20All%20rights%20reserved.%0A%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%E6%88%91%E6%98%AF%E5%86%85%E5%AE%B9%0A%20%20%20%3C%2FProLayout%3E%0A%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20Icon%20%7D%20from%20'%40iconify%2Fvue'%0A%0Afunction%20renderIcon%20(icon%3A%20string)%20%7B%0A%20%20return%20()%20%3D%3E%20h(Icon%2C%20%7Bicon%3A%20icon%7D)%0A%7D%0A%0Aconst%20menuOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F'%2C%0A%20%20%20%20key%3A%20'hear-the-wind-sing'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'1973%E5%B9%B4%E7%9A%84%E5%BC%B9%E7%8F%A0%E7%8E%A9%E5%85%B7'%2C%0A%20%20%20%20key%3A%20'pinball-1973'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20disabled%3A%20true%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%BC%A0'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'rat'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%AF%BB%E7%BE%8A%E5%86%92%E9%99%A9%E8%AE%B0'%2C%0A%20%20%20%20key%3A%20'a-wild-sheep-chase'%2C%0A%20%20%20%20disabled%3A%20true%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E8%88%9E%EF%BC%8C%E8%88%9E%EF%BC%8C%E8%88%9E'%2C%0A%20%20%20%20key%3A%20'dance-dance-dance'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20'group'%2C%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%BA%E7%89%A9'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'people'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%8F%99%E4%BA%8B%E8%80%85'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'narrator'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%BE%8A%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'sheep-man'%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%A5%AE%E5%93%81'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'beverage'%2C%0A%20%20%20%20%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%A8%81%E5%A3%AB%E5%BF%8C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'whisky'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%A3%9F%E7%89%A9'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'food'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E6%98%8E%E6%B2%BB'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'sandwich'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E8%BF%87%E5%8E%BB%E5%A2%9E%E5%A4%9A%EF%BC%8C%E6%9C%AA%E6%9D%A5%E5%87%8F%E5%B0%91'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'the-past-increases-the-future-recedes'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%0A%0Aconst%20collapsed%20%3D%20ref(true)%0A%3C%2Fscript%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cdocs%20lang%3D%22md%22%3E%0A---%0Atitle%3A%20%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95%0A---%0A%3C%2Fdocs%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20Icon%20%7D%20from%20'%40iconify%2Fvue'%0A%0Afunction%20renderIcon%20(icon%3A%20string)%20%7B%0A%20%20return%20()%20%3D%3E%20h(Icon%2C%20%7Bicon%3A%20icon%7D)%0A%7D%0A%0Aconst%20menuOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F'%2C%0A%20%20%20%20key%3A%20'hear-the-wind-sing'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'1973%E5%B9%B4%E7%9A%84%E5%BC%B9%E7%8F%A0%E7%8E%A9%E5%85%B7'%2C%0A%20%20%20%20key%3A%20'pinball-1973'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20disabled%3A%20true%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%BC%A0'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'rat'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%AF%BB%E7%BE%8A%E5%86%92%E9%99%A9%E8%AE%B0'%2C%0A%20%20%20%20key%3A%20'a-wild-sheep-chase'%2C%0A%20%20%20%20disabled%3A%20true%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E8%88%9E%EF%BC%8C%E8%88%9E%EF%BC%8C%E8%88%9E'%2C%0A%20%20%20%20key%3A%20'dance-dance-dance'%2C%0A%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20'group'%2C%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%BA%E7%89%A9'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'people'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%8F%99%E4%BA%8B%E8%80%85'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'narrator'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%BE%8A%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'sheep-man'%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%A5%AE%E5%93%81'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'beverage'%2C%0A%20%20%20%20%20%20%20%20icon%3A%20renderIcon('ion%3Achevron-up-outline')%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%A8%81%E5%A3%AB%E5%BF%8C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'whisky'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%A3%9F%E7%89%A9'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'food'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E6%98%8E%E6%B2%BB'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'sandwich'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E8%BF%87%E5%8E%BB%E5%A2%9E%E5%A4%9A%EF%BC%8C%E6%9C%AA%E6%9D%A5%E5%87%8F%E5%B0%91'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'the-past-increases-the-future-recedes'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%0A%0Aconst%20collapsed%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%3Cdiv%20style%3D%22height%3A%2050vh%3B%22%3E%0A%20%20%20%3CProLayout%20%3Amenus%3D%22menuOptions%22%20v-model%3Acollapsed%3D%22collapsed%22%3E%0A%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD1%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%3Cn-button%3E%E5%8A%9F%E8%83%BD3%3C%2Fn-button%3E%0A%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%20%C2%A9%202024%20Your%20Company.%20All%20rights%20reserved.%0A%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%E6%88%91%E6%98%AF%E5%86%85%E5%AE%B9%0A%20%20%20%3C%2FProLayout%3E%0A%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E",template:`
 <div style="height: 50vh;">
   <ProLayout :menus="menuOptions" v-model:collapsed="collapsed">
     <template #actions>
       <n-button>功能1</n-button>
       <n-button>功能2</n-button>
       <n-button>功能3</n-button>
     </template>
     <template #footer>
       © 2024 Your Company. All rights reserved.
     </template>
     我是内容
   </ProLayout>
 </div>
`,script:`
import { h, ref } from 'vue'
import { Icon } from '@iconify/vue'

function renderIcon (icon: string) {
  return () => h(Icon, {icon: icon})
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon('ion:chevron-up-outline')
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('ion:chevron-up-outline'),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon('ion:chevron-up-outline'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('ion:chevron-up-outline'),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon('ion:chevron-up-outline'),

          },
          {
            label: '羊男',
            key: 'sheep-man',

          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon('ion:chevron-up-outline'),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(true)
`,styles:[],jsCode:`

import { h, ref } from 'vue'
import { Icon } from '@iconify/vue'

function renderIcon (icon) {
  return () => h(Icon, {icon: icon})
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon('ion:chevron-up-outline')
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('ion:chevron-up-outline'),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon('ion:chevron-up-outline'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('ion:chevron-up-outline'),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon('ion:chevron-up-outline'),

          },
          {
            label: '羊男',
            key: 'sheep-man',

          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon('ion:chevron-up-outline'),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(true)

`,isScriptLangTS:!0,isSetupScript:!0,docContent:"",docMeta:{title:"基础用法"}}}],importMap:{imports:{vue:()=>t(()=>import("./chunks/framework.BZvP3IB3.js").then(l=>l.vue_runtime_esmBundler),[]),"@iconify/vue":()=>t(()=>import("./chunks/theme.NkqsIJxy.js").then(l=>l.iconify),__vite__mapDeps([1,2])),"vue/server-renderer":()=>t(()=>import("./chunks/index.DgTVH9wY.js"),__vite__mapDeps([3,2]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}}),(l,n)=>{const E=y("demo");return d(),p("div",null,[n[4]||(n[4]=i("h1",{id:"prolayout",tabindex:"-1"},[s("ProLayout "),i("a",{class:"header-anchor",href:"#prolayout","aria-label":'Permalink to "ProLayout"'},"​")],-1)),n[5]||(n[5]=i("blockquote",null,[i("p",null,"高级布局用于快速构建Admin视图")],-1)),h(E,{key:"ComponentsDemoLayoutVue"},{title:a(()=>n[0]||(n[0]=[i("h2",{id:"components-demo-layout-vue",tabindex:"-1"},[s("基础用法 "),i("a",{class:"header-anchor",href:"#components-demo-layout-vue","aria-label":'Permalink to "基础用法  {#components-demo-layout-vue}"'},"​")],-1)])),description:a(()=>n[1]||(n[1]=[])),default:a(()=>[h(g(k))]),"code-ComponentsDemoLayoutVue":a(()=>n[2]||(n[2]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"vh"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProLayout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"menus"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"menuOptions"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"collapsed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"collapsed"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"actions"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能1</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能2</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能3</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"footer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       © 2024 Your Company. All rights reserved.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     我是内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProLayout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { h, ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { Icon } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@iconify/vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"icon"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Icon, {icon: icon})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," menuOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'且听风吟'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'hear-the-wind-sing'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1973年的弹珠玩具'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'pinball-1973'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'鼠'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rat'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'寻羊冒险记'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'a-wild-sheep-chase'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'舞，舞，舞'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dance-dance-dance'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'group'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'人物'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'people'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'叙事者'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'narrator'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'羊男'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sheep-man'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'饮品'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'beverage'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'威士忌'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'whisky'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'食物'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'food'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'三明治'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sandwich'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'过去增多，未来减少'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'the-past-increases-the-future-recedes'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," collapsed"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),"codejs-ComponentsDemoLayoutVue":a(()=>n[3]||(n[3]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"vh"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProLayout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"menus"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"menuOptions"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"collapsed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"collapsed"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"actions"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能1</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能2</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">功能3</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"footer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       © 2024 Your Company. All rights reserved.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     我是内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProLayout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { h, ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { Icon } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@iconify/vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"icon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Icon, {icon: icon})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," menuOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'且听风吟'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'hear-the-wind-sing'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1973年的弹珠玩具'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'pinball-1973'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'鼠'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rat'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'寻羊冒险记'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'a-wild-sheep-chase'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'舞，舞，舞'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dance-dance-dance'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'group'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'人物'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'people'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'叙事者'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'narrator'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'羊男'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sheep-man'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'饮品'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'beverage'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        icon: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"renderIcon"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ion:chevron-up-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'威士忌'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'whisky'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'食物'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'food'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'三明治'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sandwich'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'过去增多，未来减少'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        key: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'the-past-increases-the-future-recedes'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," collapsed"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),n[6]||(n[6]=o('<h2 id="属性-props" tabindex="-1"><strong>属性 (Props)</strong> <a class="header-anchor" href="#属性-props" aria-label="Permalink to &quot;**属性 (Props)**&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><strong>title</strong></td><td><code>string</code></td><td><code>&#39;Naive Pro&#39;</code></td><td>标题，显示在头部 Logo 旁边。</td></tr><tr><td><strong>headerHeight</strong></td><td><code>number</code></td><td><code>60</code></td><td>头部的高度，单位为像素。</td></tr><tr><td><strong>isFooter</strong></td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示底部区域。</td></tr><tr><td><strong>logo</strong></td><td><code>string</code></td><td>-</td><td>Logo 的图片地址，如果为空，则使用默认的 Naive UI Logo。</td></tr><tr><td><strong>logoSize</strong></td><td><code>number</code></td><td><code>24</code></td><td>Logo 的宽高，单位为像素。</td></tr><tr><td><strong>menus</strong></td><td><code>Array&lt;MenuOption | MenuDividerOption | MenuGroupOption&gt;</code></td><td>-</td><td>菜单项的数据，支持 <code>MenuOption</code>（菜单项）、<code>MenuDividerOption</code>（分割线）和 <code>MenuGroupOption</code>（分组）。</td></tr><tr><td><strong>accordion</strong></td><td><code>boolean</code></td><td><code>false</code></td><td>菜单是否以手风琴模式（每次仅展开一个菜单）显示。</td></tr><tr><td><strong>showTrigger</strong></td><td><code>boolean | &#39;bar&#39; | &#39;arrow-circle&#39;</code></td><td><code>true</code></td><td>是否显示侧边栏的触发器，可选值为 <code>true</code>（显示）、<code>false</code>（隐藏）、<code>&#39;bar&#39;</code>（显示 bar 样式）、<code>&#39;arrow-circle&#39;</code>（显示箭头圆形样式）。</td></tr><tr><td><strong>collapsed</strong></td><td><code>boolean</code></td><td><code>false</code></td><td>侧边栏是否折叠。</td></tr><tr><td><strong>collapsedWidth</strong></td><td><code>number</code></td><td><code>64</code></td><td>侧边栏折叠时的宽度，单位为像素。</td></tr><tr><td><strong>collapsedIconSize</strong></td><td><code>number</code></td><td><code>20</code></td><td>折叠时菜单图标的尺寸，单位为像素。</td></tr><tr><td><strong>inverted</strong></td><td><code>boolean</code></td><td><code>false</code></td><td>菜单是否使用反色模式（适用于深色主题）。</td></tr><tr><td><strong>indent</strong></td><td><code>number</code></td><td><code>32</code></td><td>菜单的缩进距离，单位为像素。</td></tr><tr><td><strong>openKeys</strong></td><td><code>Array&lt;string&gt;</code></td><td>-</td><td>当前展开的菜单项的 key 数组。</td></tr><tr><td><strong>selectedKey</strong></td><td><code>string | null</code></td><td>-</td><td>当前选中的菜单项的 key。</td></tr><tr><td><strong>clickMenuItem</strong></td><td><code>(key: string, item: MenuOption) =&gt; void</code></td><td>-</td><td>点击菜单项时触发的回调函数，<code>key</code> 是菜单项的标识，<code>item</code> 是被点击的菜单项对象。</td></tr><tr><td><strong>updateOpenKeys</strong></td><td><code>(keys: string[]) =&gt; void</code></td><td>-</td><td>菜单展开状态变化时触发的回调函数，<code>keys</code> 是当前展开的菜单项 key 数组。</td></tr></tbody></table><h3 id="卡槽-slot" tabindex="-1"><strong>卡槽 (Slot)</strong> <a class="header-anchor" href="#卡槽-slot" aria-label="Permalink to &quot;**卡槽 (Slot)**&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><strong>header-start</strong></td><td>-</td><td>自定义头部左侧内容（Logo 左边的区域）。</td></tr><tr><td><strong>logo</strong></td><td>-</td><td>自定义 Logo 区域，替换默认的 Logo 显示。</td></tr><tr><td><strong>header-right</strong></td><td>-</td><td>自定义头部右侧区域（整体，包括 <code>actions</code> 插槽）。</td></tr><tr><td><strong>actions</strong></td><td>-</td><td>自定义头部右侧的操作部分（<code>header-right</code> 的子集，只作用于右上角的部分）。</td></tr><tr><td><strong>footer</strong></td><td>-</td><td>自定义底部内容，替换默认的底部区域。</td></tr><tr><td><strong>slot</strong></td><td>-</td><td>自定义主内容部分，替换 <code>n-layout-content</code> 中的内容。</td></tr></tbody></table>',4))])}}});export{C as __pageData,B as default};
