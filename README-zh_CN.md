# kylin naiveui pro

查看我们的网站 [k-naiveui-pro](https://infernalazazel.github.io/k-naiveui-pro/) 了解更多信息.

简体中文 | [English](./README.md)

> 目前在测试阶段请勿用于生产环境

## 安装

```bash
pnpm add naive-ui k-naiveui-pro unocss @vueuse/core @iconify/vue
```

## 使用

### 全局

一. 在 `main.ts` 中注册组件

```ts

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import KNaiveUiPro from 'k-naiveui-pro'

const app =createApp(App)
app.use(naive)
app.use(KNaiveUiPro)
app.mount('#app')
```
二. 在 `vite.config.ts` 添加 UnoCSS 插件

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```
三. 在项目根下创建一个 `uno.config.ts` 文件, 配置如下:

```ts
import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
    presets: [presetUno()],
})
```

## 按需引入

```bash
pnpm add k-naiveui-pro-resolver unplugin-vue-components
```

- 在 `vite.config.ts` 文件添加 NaiveUiResolver KNaiveUiProResolver 插件并配置

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { KNaiveUiProResolver } from 'k-naiveui-pro-resolver'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [
        NaiveUiResolver(), 
        KNaiveUiProResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## 办事列表

- [X] 添加 ProLayout
- [X] 添加 ProBaseForm
- [X] 添加 ProQueryForm
- [X] 添加 ProStepsForm
- [ ] 添加 ProCrud
- [X] 添加 ProBreadcrumb
- [X] 添加 ProBackground
- [X] 添加 ProTabs
- [X] 添加 ProCheckbox
- [X] 添加 ProRadio
- [X] 添加 ProColumnSetting
- [X] 添加 ProDescriptions
- [X] 添加 ProToggleFullScreen
- [X] 添加 ProToggleLanguage
- [X] 添加 ProToggleTheme
- [X] 添加 ProCheckCard
- [X] 添加 ProAvatar


## License
MIT

Copyright (c) 2024-present, kylin