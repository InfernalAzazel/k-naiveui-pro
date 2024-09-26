## 安装

```bash
pnpm add naive-ui k-naiveui-pro unocss
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

