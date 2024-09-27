const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoProQueryForm1.DvmQCZt6.js","assets/chunks/framework.-OAAjSM-.js","assets/chunks/index.DsZ0fVVm.js"])))=>i.map(i=>d[i]);
import{provide as k,useData as p,openBlock as r,createElementBlock as d,createBaseVNode as s,createTextVNode as i,createVNode as E,withCtx as a,resolveComponent as g,unref as o,defineAsyncComponent as y,__vitePreload as h}from"./chunks/framework.-OAAjSM-.js";const C=JSON.parse('{"title":"ProQueryForm","description":"","frontmatter":{},"headers":[],"relativePath":"cn/form/query.md","filePath":"cn/form/query.md"}'),F={name:"cn/form/query.md"},u=Object.assign(F,{setup(c){k("PageDataInjectKey",p());const e=y(()=>h(()=>import("./chunks/DemoProQueryForm1.DvmQCZt6.js"),__vite__mapDeps([0,1])));return k("$ComponentsDemoProQueryForm1VueDemoInjectKey",{identifier:"ComponentsDemoProQueryForm1Vue",entry:"./components/DemoProQueryForm1",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default"},files:[{identifier:"ComponentsDemoProQueryForm1Vue",path:"./components/DemoProQueryForm1.vue",importMap:{imports:{vue:()=>h(()=>import("./chunks/framework.-OAAjSM-.js").then(n=>n.vue_runtime_esmBundler),[])}},filename:"DemoProQueryForm1",extension:".vue",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3CProQueryForm%0A%20%20%20%20%20%20v-model%3D%22formData%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%40search%3D%22()%3D%3Econsole.log('%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C')%22%0A%20%20%20%20%20%20%40reset%3D%22()%3D%3Econsole.log('%E9%87%8D%E7%BD%AE')%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%7B%7B%20JSON.stringify(formData)%20%7D%7D%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20formData%20%3D%20ref(%7B%7D)%3B%20%2F%2F%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%BA%E7%A9%BA%E5%AF%B9%E8%B1%A1%0A%0Aconst%20options%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20%22Everybody's%20Got%20Something%20to%20Hide%20Except%20Me%20and%20My%20Monkey%22%2C%0A%20%20%20%20value%3A%20'song0'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Drive%20My%20Car'%2C%0A%20%20%20%20value%3A%20'song1'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Norwegian%20Wood'%2C%0A%20%20%20%20value%3A%20'song2'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20value%3A%20'song3'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Nowhere%20Man'%2C%0A%20%20%20%20value%3A%20'song4'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Think%20For%20Yourself'%2C%0A%20%20%20%20value%3A%20'song5'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'The%20Word'%2C%0A%20%20%20%20value%3A%20'song6'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Michelle'%2C%0A%20%20%20%20value%3A%20'song7'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'What%20goes%20on'%2C%0A%20%20%20%20value%3A%20'song8'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Girl'%2C%0A%20%20%20%20value%3A%20'song9'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0A%20%20%20%20value%3A%20'song10'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'In%20My%20Life'%2C%0A%20%20%20%20value%3A%20'song11'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Wait'%2C%0A%20%20%20%20value%3A%20'song12'%0A%20%20%7D%0A%5D%0A%0Aconst%20columns%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20prop%3A%20'name'%2C%0A%20%20%20%20component%3A%20'NInput'%2C%0A%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20prop%3A%20'address'%2C%0A%20%20%20%20component%3A%20'NInput'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%80%89%E6%8B%A9'%2C%0A%20%20%20%20prop%3A%20'select'%2C%0A%20%20%20%20component%3A%20'n-select'%2C%0A%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20options%3A%20options%2C%0A%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9%E5%9C%B0%E5%9D%80'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D%0A%0A%0A%0A%3C%2Fscript%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20formData%20%3D%20ref(%7B%7D)%3B%20%2F%2F%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%BA%E7%A9%BA%E5%AF%B9%E8%B1%A1%0A%0Aconst%20options%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20%22Everybody's%20Got%20Something%20to%20Hide%20Except%20Me%20and%20My%20Monkey%22%2C%0A%20%20%20%20value%3A%20'song0'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Drive%20My%20Car'%2C%0A%20%20%20%20value%3A%20'song1'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Norwegian%20Wood'%2C%0A%20%20%20%20value%3A%20'song2'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20value%3A%20'song3'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Nowhere%20Man'%2C%0A%20%20%20%20value%3A%20'song4'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Think%20For%20Yourself'%2C%0A%20%20%20%20value%3A%20'song5'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'The%20Word'%2C%0A%20%20%20%20value%3A%20'song6'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Michelle'%2C%0A%20%20%20%20value%3A%20'song7'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'What%20goes%20on'%2C%0A%20%20%20%20value%3A%20'song8'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Girl'%2C%0A%20%20%20%20value%3A%20'song9'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0A%20%20%20%20value%3A%20'song10'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'In%20My%20Life'%2C%0A%20%20%20%20value%3A%20'song11'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Wait'%2C%0A%20%20%20%20value%3A%20'song12'%0A%20%20%7D%0A%5D%0A%0Aconst%20columns%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20prop%3A%20'name'%2C%0A%20%20%20%20component%3A%20'NInput'%2C%0A%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20prop%3A%20'address'%2C%0A%20%20%20%20component%3A%20'NInput'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%80%89%E6%8B%A9'%2C%0A%20%20%20%20prop%3A%20'select'%2C%0A%20%20%20%20component%3A%20'n-select'%2C%0A%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20options%3A%20options%2C%0A%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9%E5%9C%B0%E5%9D%80'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D%0A%0A%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3CProQueryForm%0A%20%20%20%20%20%20v-model%3D%22formData%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%40search%3D%22()%3D%3Econsole.log('%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C')%22%0A%20%20%20%20%20%20%40reset%3D%22()%3D%3Econsole.log('%E9%87%8D%E7%BD%AE')%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%7B%7B%20JSON.stringify(formData)%20%7D%7D%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0A%3C%2Fstyle%3E",template:`
  <n-space vertical>
    <ProQueryForm
      v-model="formData"
      :columns="columns"
      @search="()=>console.log('搜索结果')"
      @reset="()=>console.log('重置')"
    />
    {{ JSON.stringify(formData) }}
  </n-space>
`,script:`
import { ref } from 'vue'

const formData = ref({}); // 初始化为空对象

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'NInput',
    props: {
      placeholder: '请输入姓名'
    },
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
      placeholder: '请选择地址'
    },
  },
]



`,styles:[],jsCode:`

import { ref } from 'vue'

const formData = ref({}); // 初始化为空对象

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'NInput',
    props: {
      placeholder: '请输入姓名'
    },
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
      placeholder: '请选择地址'
    },
  },
]







`,isScriptLangTS:!0,isSetupScript:!0,docContent:"",docMeta:{}}}],importMap:{imports:{vue:()=>h(()=>import("./chunks/framework.-OAAjSM-.js").then(n=>n.vue_runtime_esmBundler),[]),"vue/server-renderer":()=>h(()=>import("./chunks/index.DsZ0fVVm.js"),__vite__mapDeps([2,1]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}}),(n,l)=>{const t=g("demo");return r(),d("div",null,[l[4]||(l[4]=s("h1",{id:"proqueryform",tabindex:"-1"},[i("ProQueryForm "),s("a",{class:"header-anchor",href:"#proqueryform","aria-label":'Permalink to "ProQueryForm"'},"​")],-1)),l[5]||(l[5]=s("blockquote",null,[s("p",null,"高级表单用于快速构建表单视图")],-1)),l[6]||(l[6]=s("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),E(t,{key:"ComponentsDemoProQueryForm1Vue"},{title:a(()=>l[0]||(l[0]=[])),description:a(()=>l[1]||(l[1]=[])),default:a(()=>[E(o(e))]),"code-ComponentsDemoProQueryForm1Vue":a(()=>l[2]||(l[2]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," vertical"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProQueryForm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      v-model"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"formData"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"columns"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"columns"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'搜索结果'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"reset"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'重置'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {{ "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(formData) }}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," formData"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({}); "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 初始化为空对象")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," options"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"Everybody's Got Something to Hide Except Me and My Monkey"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song0'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Drive My Car'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song1'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Norwegian Wood'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song2'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"You Won't See"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song3'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Nowhere Man'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song4'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Think For Yourself'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song5'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'The Word'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song6'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Michelle'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song7'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'What goes on'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song8'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Girl'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song9'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"I'm looking through you"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song10'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'In My Life'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song11'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Wait'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song12'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," columns"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请输入姓名'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'地址'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'address'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选择'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'n-select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      options: options,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请选择地址'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),"codejs-ComponentsDemoProQueryForm1Vue":a(()=>l[3]||(l[3]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," vertical"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProQueryForm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      v-model"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"formData"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"columns"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"columns"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'搜索结果'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"reset"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'重置'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {{ "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(formData) }}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"n-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," formData"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({}); "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 初始化为空对象")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," options"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"Everybody's Got Something to Hide Except Me and My Monkey"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song0'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Drive My Car'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song1'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Norwegian Wood'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song2'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"You Won't See"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song3'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Nowhere Man'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song4'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Think For Yourself'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song5'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'The Word'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song6'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Michelle'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song7'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'What goes on'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song8'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Girl'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song9'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"I'm looking through you"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song10'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'In My Life'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song11'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Wait'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'song12'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," columns"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请输入姓名'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'地址'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'address'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'NInput'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选择'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    component: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'n-select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    props: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      options: options,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      placeholder: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请选择地址'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1})])}}});export{C as __pageData,u as default};
