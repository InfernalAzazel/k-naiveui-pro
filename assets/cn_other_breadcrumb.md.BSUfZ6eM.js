const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoProBreadcrumb.DhA9diRT.js","assets/chunks/theme.BXFSz6FN.js","assets/chunks/framework.CO3--Yx1.js","assets/chunks/index.yL-arBEO.js","assets/chunks/DemoProBreadcrumb2.DgVaVXKz.js","assets/chunks/DemoProBreadcrumb3.Dx8Yw3wj.js"])))=>i.map(i=>d[i]);
import{provide as h,useData as c,openBlock as g,createElementBlock as y,createBaseVNode as i,createTextVNode as s,createVNode as n,withCtx as l,createStaticVNode as m,resolveComponent as A,unref as E,defineAsyncComponent as r,__vitePreload as e}from"./chunks/framework.CO3--Yx1.js";const B=JSON.parse('{"title":"ProBreadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"cn/other/breadcrumb.md","filePath":"cn/other/breadcrumb.md"}'),F={name:"cn/other/breadcrumb.md"},b=Object.assign(F,{setup(u){h("PageDataInjectKey",c());const p=r(()=>e(()=>import("./chunks/DemoProBreadcrumb.DhA9diRT.js"),__vite__mapDeps([0,1,2])));h("$ComponentsDemoProBreadcrumbVueDemoInjectKey",{identifier:"ComponentsDemoProBreadcrumbVue",entry:"./components/DemoProBreadcrumb",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default",title:"基础用法"},files:[{identifier:"ComponentsDemoProBreadcrumbVue",path:"./components/DemoProBreadcrumb.vue",importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2]))}},filename:"DemoProBreadcrumb",extension:".vue",code:"%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%20%3Aoptions%3D%22breadcrumbOptions%22%20%20%40item-click%3D%22handleClick%22%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0A%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cdocs%20lang%3D%22md%22%3E%0A---%0Atitle%3A%20%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95%0A---%0A%3C%2Fdocs%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0A%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%20%3Aoptions%3D%22breadcrumbOptions%22%20%20%40item-click%3D%22handleClick%22%2F%3E%0A%3C%2Ftemplate%3E",template:`
  <ProBreadcrumb :options="breadcrumbOptions"  @item-click="handleClick"/>
`,script:`
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path: string) {
  message.info(\`Clicked path: \${path}\`);
}
`,styles:[],jsCode:`

import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path) {
  message.info(\`Clicked path: \${path}\`);
}

`,isScriptLangTS:!0,isSetupScript:!0,docContent:"",docMeta:{title:"基础用法"}}}],importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2])),vue:()=>e(()=>import("./chunks/framework.CO3--Yx1.js").then(t=>t.vue_runtime_esmBundler),[]),"vue/server-renderer":()=>e(()=>import("./chunks/index.yL-arBEO.js"),__vite__mapDeps([3,2]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}});const d=r(()=>e(()=>import("./chunks/DemoProBreadcrumb2.DgVaVXKz.js"),__vite__mapDeps([4,2,1])));h("$ComponentsDemoProBreadcrumb2VueDemoInjectKey",{identifier:"ComponentsDemoProBreadcrumb2Vue",entry:"./components/DemoProBreadcrumb2",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default",title:"自定义类名和样式"},files:[{identifier:"ComponentsDemoProBreadcrumb2Vue",path:"./components/DemoProBreadcrumb2.vue",importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2]))}},filename:"DemoProBreadcrumb2",extension:".vue",code:"%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%0A%20%20%20%20%20%20%3Aoptions%3D%22breadcrumbOptions%22%0A%20%20%20%20%20%20customClass%3D%22my-breadcrumb%22%0A%20%20%20%20%20%20customLinkClass%3D%22my-breadcrumb-link%22%0A%20%20%20%20%20%20%40item-click%3D%22handleClick%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0A%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%3E%0A.my-breadcrumb%20%7B%0A%20%20%2F*%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9D%A2%E5%8C%85%E5%B1%91%E5%AE%B9%E5%99%A8%E7%9A%84%E6%A0%B7%E5%BC%8F%20*%2F%0A%7D%0A%0A.my-breadcrumb-link%20%7B%0A%20%20%2F*%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9D%A2%E5%8C%85%E5%B1%91%E9%93%BE%E6%8E%A5%E7%9A%84%E6%A0%B7%E5%BC%8F%20*%2F%0A%7D%0A%3C%2Fstyle%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cdocs%20lang%3D%22md%22%3E%0A---%0Atitle%3A%20%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%90%8D%E5%92%8C%E6%A0%B7%E5%BC%8F%0A---%0A%3C%2Fdocs%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0A%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%0A%20%20%20%20%20%20%3Aoptions%3D%22breadcrumbOptions%22%0A%20%20%20%20%20%20customClass%3D%22my-breadcrumb%22%0A%20%20%20%20%20%20customLinkClass%3D%22my-breadcrumb-link%22%0A%20%20%20%20%20%20%40item-click%3D%22handleClick%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0A.my-breadcrumb%20%7B%0A%20%20%2F*%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9D%A2%E5%8C%85%E5%B1%91%E5%AE%B9%E5%99%A8%E7%9A%84%E6%A0%B7%E5%BC%8F%20*%2F%0A%7D%0A%0A.my-breadcrumb-link%20%7B%0A%20%20%2F*%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9D%A2%E5%8C%85%E5%B1%91%E9%93%BE%E6%8E%A5%E7%9A%84%E6%A0%B7%E5%BC%8F%20*%2F%0A%7D%0A%3C%2Fstyle%3E",template:`
  <ProBreadcrumb
      :options="breadcrumbOptions"
      customClass="my-breadcrumb"
      customLinkClass="my-breadcrumb-link"
      @item-click="handleClick"
  />
`,script:`
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path: string) {
  message.info(\`Clicked path: \${path}\`);
}
`,styles:[`
.my-breadcrumb {
  /* 自定义面包屑容器的样式 */
}

.my-breadcrumb-link {
  /* 自定义面包屑链接的样式 */
}
`],jsCode:`

import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path) {
  message.info(\`Clicked path: \${path}\`);
}

`,isScriptLangTS:!0,isSetupScript:!0,docContent:"",docMeta:{title:"自定义类名和样式"}}}],importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2])),vue:()=>e(()=>import("./chunks/framework.CO3--Yx1.js").then(t=>t.vue_runtime_esmBundler),[]),"vue/server-renderer":()=>e(()=>import("./chunks/index.yL-arBEO.js"),__vite__mapDeps([3,2]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}});const o=r(()=>e(()=>import("./chunks/DemoProBreadcrumb3.Dx8Yw3wj.js"),__vite__mapDeps([5,2,1])));return h("$ComponentsDemoProBreadcrumb3VueDemoInjectKey",{identifier:"ComponentsDemoProBreadcrumb3Vue",entry:"./components/DemoProBreadcrumb3",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default",title:"使用 UnoCSS 进行样式定制"},files:[{identifier:"ComponentsDemoProBreadcrumb3Vue",path:"./components/DemoProBreadcrumb3.vue",importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2]))}},filename:"DemoProBreadcrumb3",extension:".vue",code:"%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%0A%20%20%20%20%20%20%3Aoptions%3D%22breadcrumbOptions%22%0A%20%20%20%20%20%20%3AcustomLinkClass%3D%22%5B'text-blue-500'%2C%20'hover%3Atext-blue-700'%5D%22%0A%20%20%20%20%20%20%40item-click%3D%22handleClick%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cdocs%20lang%3D%22md%22%3E%0A---%0Atitle%3A%20%E4%BD%BF%E7%94%A8%20UnoCSS%20%E8%BF%9B%E8%A1%8C%E6%A0%B7%E5%BC%8F%E5%AE%9A%E5%88%B6%0A---%0A%3C%2Fdocs%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7BcreateDiscreteApi%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20%7B%20message%7D%20%3D%20createDiscreteApi(%0A%20%20%20%20%5B'message'%5D%2C%0A)%0Aconst%20breadcrumbOptions%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E9%A6%96%E9%A1%B5'%2C%0A%20%20%20%20to%3A%20'%2F'%2C%0A%20%20%20%20icon%3A%20'mdi%3Ahome'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20to%3A%20'%2Fcategory'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afolder-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85'%2C%0A%20%20%20%20icon%3A%20'mdi%3Afile-document-outline'%2C%0A%20%20%7D%2C%0A%5D%3B%0Afunction%20handleClick(path%3A%20string)%20%7B%0A%20%20message.info(%60Clicked%20path%3A%20%24%7Bpath%7D%60)%3B%0A%7D%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%20%20%3CProBreadcrumb%0A%20%20%20%20%20%20%3Aoptions%3D%22breadcrumbOptions%22%0A%20%20%20%20%20%20%3AcustomLinkClass%3D%22%5B'text-blue-500'%2C%20'hover%3Atext-blue-700'%5D%22%0A%20%20%20%20%20%20%40item-click%3D%22handleClick%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E",template:`
  <ProBreadcrumb
      :options="breadcrumbOptions"
      :customLinkClass="['text-blue-500', 'hover:text-blue-700']"
      @item-click="handleClick"
  />
`,script:`
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)
const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path: string) {
  message.info(\`Clicked path: \${path}\`);
}
`,styles:[],jsCode:`

import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)
const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path) {
  message.info(\`Clicked path: \${path}\`);
}

`,isScriptLangTS:!0,isSetupScript:!0,docContent:"",docMeta:{title:"使用 UnoCSS 进行样式定制"}}}],importMap:{imports:{"naive-ui":()=>e(()=>import("./chunks/theme.BXFSz6FN.js").then(t=>t.index),__vite__mapDeps([1,2])),vue:()=>e(()=>import("./chunks/framework.CO3--Yx1.js").then(t=>t.vue_runtime_esmBundler),[]),"vue/server-renderer":()=>e(()=>import("./chunks/index.yL-arBEO.js"),__vite__mapDeps([3,2]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}}),(t,a)=>{const k=A("demo");return g(),y("div",null,[a[12]||(a[12]=i("h1",{id:"probreadcrumb",tabindex:"-1"},[s("ProBreadcrumb "),i("a",{class:"header-anchor",href:"#probreadcrumb","aria-label":'Permalink to "ProBreadcrumb"'},"​")],-1)),a[13]||(a[13]=i("blockquote",null,[i("p",null,[i("code",null,"ProBreadcrumb"),s(" 是基于 "),i("code",null,"Naive UI"),s(" 的 "),i("code",null,"n-breadcrumb"),s(" 组件封装的面包屑导航组件。它提供了更加灵活的配置方式，支持自定义样式和类名，能够满足更多样化的需求。")])],-1)),n(k,{key:"ComponentsDemoProBreadcrumbVue"},{title:l(()=>a[0]||(a[0]=[i("h2",{id:"components-demo-pro-breadcrumb-vue",tabindex:"-1"},[s("基础用法 "),i("a",{class:"header-anchor",href:"#components-demo-pro-breadcrumb-vue","aria-label":'Permalink to "基础用法  {#components-demo-pro-breadcrumb-vue}"'},"​")],-1)])),description:l(()=>a[1]||(a[1]=[])),default:l(()=>[n(E(p))]),"code-ComponentsDemoProBreadcrumbVue":l(()=>a[2]||(a[2]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),"codejs-ComponentsDemoProBreadcrumbVue":l(()=>a[3]||(a[3]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),n(k,{key:"ComponentsDemoProBreadcrumb2Vue"},{title:l(()=>a[4]||(a[4]=[i("h2",{id:"components-demo-pro-breadcrumb-2-vue",tabindex:"-1"},[s("自定义类名和样式 "),i("a",{class:"header-anchor",href:"#components-demo-pro-breadcrumb-2-vue","aria-label":'Permalink to "自定义类名和样式  {#components-demo-pro-breadcrumb-2-vue}"'},"​")],-1)])),description:l(()=>a[5]||(a[5]=[])),default:l(()=>[n(E(d))]),"code-ComponentsDemoProBreadcrumb2Vue":l(()=>a[6]||(a[6]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      customClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"my-breadcrumb"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      customLinkClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"my-breadcrumb-link"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".my-breadcrumb"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  /* 自定义面包屑容器的样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".my-breadcrumb-link"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  /* 自定义面包屑链接的样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),"codejs-ComponentsDemoProBreadcrumb2Vue":l(()=>a[7]||(a[7]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      customClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"my-breadcrumb"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      customLinkClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"my-breadcrumb-link"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".my-breadcrumb"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  /* 自定义面包屑容器的样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".my-breadcrumb-link"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  /* 自定义面包屑链接的样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),n(k,{key:"ComponentsDemoProBreadcrumb3Vue"},{title:l(()=>a[8]||(a[8]=[i("h2",{id:"components-demo-pro-breadcrumb-3-vue",tabindex:"-1"},[s("使用 UnoCSS 进行样式定制 "),i("a",{class:"header-anchor",href:"#components-demo-pro-breadcrumb-3-vue","aria-label":'Permalink to "使用 UnoCSS 进行样式定制  {#components-demo-pro-breadcrumb-3-vue}"'},"​")],-1)])),description:l(()=>a[9]||(a[9]=[])),default:l(()=>[n(E(o))]),"code-ComponentsDemoProBreadcrumb3Vue":l(()=>a[10]||(a[10]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :customLinkClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"['text-blue-500', 'hover:text-blue-700']"`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),"codejs-ComponentsDemoProBreadcrumb3Vue":l(()=>a[11]||(a[11]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ProBreadcrumb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"breadcrumbOptions"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      :customLinkClass"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"['text-blue-500', 'hover:text-blue-700']"`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      @item-click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleClick"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {createDiscreteApi} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "naive-ui"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"message"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"} "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createDiscreteApi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'message'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," breadcrumbOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'首页'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:home'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'分类'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    to: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/category'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:folder-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章详情'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    icon: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'mdi:file-document-outline'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"path"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  message."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`Clicked path: ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"path"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),a[14]||(a[14]=m('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="probreadcrumbprops" tabindex="-1">ProBreadcrumbProps <a class="header-anchor" href="#probreadcrumbprops" aria-label="Permalink to &quot;ProBreadcrumbProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>customClass</td><td><code>string | string[] | Record&lt;string, boolean&gt;</code></td><td>—</td><td>自定义面包屑容器的类名，支持字符串、字符串数组或对象形式的类名</td></tr><tr><td>customLinkClass</td><td><code>string | string[] | Record&lt;string, boolean&gt;</code></td><td>—</td><td>自定义面包屑链接的类名，支持字符串、字符串数组或对象形式的类名</td></tr><tr><td>options</td><td><code>BreadcrumbOption[]</code></td><td><code>[]</code></td><td>面包屑导航项的配置数组，包含每个导航项的属性</td></tr><tr><td>separator</td><td><code>string | (() =&gt; JSX.Element)</code></td><td><code>&#39;/&#39;</code></td><td>分隔符，可以是字符串或返回 JSX 元素的函数</td></tr></tbody></table><h3 id="probreadcrumboption" tabindex="-1">ProBreadcrumbOption <a class="header-anchor" href="#probreadcrumboption" aria-label="Permalink to &quot;ProBreadcrumbOption&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>导航项的显示文本</td></tr><tr><td>path</td><td><code>string</code></td><td><code>undefined</code></td><td>导航项的路径，点击后会通过事件传递给外部处理</td></tr><tr><td>icon</td><td><code>string</code></td><td><code>undefined</code></td><td>面包屑项的图标，传入 <code>@iconify/vue</code> 的图标名称</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>item-click</td><td><code>(path: string)</code></td><td>当点击带有 path 属性的面包屑项时，会触发 item-click 事件，并将 path 作为参数传递出去，外部组件可以监听该事件并进行处理。</td></tr></tbody></table>',7))])}}});export{B as __pageData,b as default};
