const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoProToggleTheme.DNF7doXq.js","assets/chunks/framework.BZvP3IB3.js","assets/chunks/index.DgTVH9wY.js"])))=>i.map(i=>d[i]);
import{provide as r,useData as m,openBlock as h,createElementBlock as g,createBaseVNode as e,createTextVNode as o,createVNode as d,withCtx as s,createStaticVNode as p,resolveComponent as c,unref as u,defineAsyncComponent as E,__vitePreload as n}from"./chunks/framework.BZvP3IB3.js";const v=JSON.parse('{"title":"ProToggleTheme","description":"","frontmatter":{},"headers":[],"relativePath":"cn/other/toggleTheme.md","filePath":"cn/other/toggleTheme.md"}'),k={name:"cn/other/toggleTheme.md"},A=Object.assign(k,{setup(P){r("PageDataInjectKey",m());const l=E(()=>n(()=>import("./chunks/DemoProToggleTheme.DNF7doXq.js"),__vite__mapDeps([0,1])));return r("$ComponentsDemoProToggleThemeVueDemoInjectKey",{identifier:"ComponentsDemoProToggleThemeVue",entry:"./components/DemoProToggleTheme",page:{frontmatter:{}},meta:{defaultPreviewMode:"block",deviceList:{Default:[0,0],"Moto 4G":[360,640],"Galaxy S5":[360,640],"Pixel 2":[411,731],"Pixel 2 XL":[411,823],"iPhone 5/SE":[320,568],"iPhone 6/7/8":[375,667],"iPhone 6/7/8 Plus":[414,736],"iPhone X":[375,812],iPad:[768,1024],"iPad Pro":[1024,1366],"Surface Duo":[540,720],"Galaxy Fold":[280,653]},defaultDevice:"Default",title:"基础用法"},files:[{identifier:"ComponentsDemoProToggleThemeVue",path:"./components/DemoProToggleTheme.vue",importMap:{},filename:"DemoProToggleTheme",extension:".vue",code:"%3Ctemplate%3E%0A%20%20%3Cpro-toggle-theme%20%2F%3E%0A%3C%2Ftemplate%3E",isEntry:!0,pathFromEntry:".",parsed:{code:"%3Cdocs%20lang%3D%22md%22%3E%0A---%0Atitle%3A%20%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95%0A---%0A%3C%2Fdocs%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-toggle-theme%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0A%0A%3C%2Fstyle%3E",template:`
  <pro-toggle-theme />
`,styles:[],jsCode:"",isScriptLangTS:!1,docContent:"",docMeta:{title:"基础用法"}}}],importMap:{imports:{vue:()=>n(()=>import("./chunks/framework.BZvP3IB3.js").then(i=>i.vue_runtime_esmBundler),[]),"vue/server-renderer":()=>n(()=>import("./chunks/index.DgTVH9wY.js"),__vite__mapDeps([2,1]))},scopes:{}},site:{assetsDir:"assets",base:"/k-naiveui-pro/"}}),(i,t)=>{const a=c("demo");return h(),g("div",null,[t[3]||(t[3]=e("h1",{id:"protoggletheme",tabindex:"-1"},[o("ProToggleTheme "),e("a",{class:"header-anchor",href:"#protoggletheme","aria-label":'Permalink to "ProToggleTheme"'},"​")],-1)),t[4]||(t[4]=e("blockquote",null,[e("p",null,[e("code",null,"ProToggleTheme"),o(" 是一个用于切换主题（浅色模式和深色模式）的 Vue 3 组件。它使用 "),e("code",null,"@vueuse/core"),o(" 的 "),e("code",null,"useDark"),o(" 组合式函数，实现对应用主题的切换。组件会根据当前的主题状态显示不同的图标，用户可以自定义在不同主题状态下显示的图标。点击图标即可在浅色模式和深色模式之间切换。")])],-1)),d(a,{key:"ComponentsDemoProToggleThemeVue"},{title:s(()=>t[0]||(t[0]=[e("h2",{id:"components-demo-pro-toggle-theme-vue",tabindex:"-1"},[o("基础用法 "),e("a",{class:"header-anchor",href:"#components-demo-pro-toggle-theme-vue","aria-label":'Permalink to "基础用法  {#components-demo-pro-toggle-theme-vue}"'},"​")],-1)])),description:s(()=>t[1]||(t[1]=[])),default:s(()=>[d(u(l))]),"code-ComponentsDemoProToggleThemeVue":s(()=>t[2]||(t[2]=[e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pro-toggle-theme"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),t[5]||(t[5]=p('<h2 id="属性-props" tabindex="-1"><strong>属性 (Props)</strong> <a class="header-anchor" href="#属性-props" aria-label="Permalink to &quot;**属性 (Props)**&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><strong>moonIcon</strong></td><td><code>string</code></td><td><code>&#39;ant-design:moon-outlined&#39;</code></td><td>深色模式下显示的图标，表示为月亮图标</td></tr><tr><td><strong>sunIcon</strong></td><td><code>string</code></td><td><code>&#39;ant-design:sun-outlined&#39;</code></td><td>浅色模式下显示的图标，表示为太阳图标</td></tr><tr><td><strong>height</strong></td><td><code>number</code></td><td><code>24</code></td><td>图标的高度，单位为像素</td></tr><tr><td><strong>width</strong></td><td><code>number</code></td><td><code>24</code></td><td>图标的宽度，单位为像素</td></tr></tbody></table>',2))])}}});export{v as __pageData,A as default};