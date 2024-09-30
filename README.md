# kylin naiveui pro

See our website [k-naiveui-pro](https://infernalazazel.github.io/k-naiveui-pro/) for more information.

English | [简体中文](./README-zh_CN.md)

> Do not use in a production environment at this time during the testing phase

## Install

```bash
pnpm add naive-ui k-naiveui-pro unocss @vueuse/core @iconify/vue
```

## Use

### global

一. Register components in `main.ts`

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
二. Add UnoCSS plugin in `vite.config.ts`

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
三. Create a `uno.config.ts` file under the project root, with the following configuration:

```ts
import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
    presets: [presetUno()],
})
```

## Import on Demand


```bash
pnpm add k-naiveui-pro-resolver unplugin-vue-components
```

- Add the NaiveUiResolver KNaiveUiProResolver plug-in in the `vite.config.ts` file and configure it

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

## List of things to do

- [X] Add a ProLayout
- [X] Add a ProBaseForm
- [X] Add a ProQueryForm
- [X] Add a ProStepsForm
- [ ] Add a ProCrud
- [X] Add a ProBreadcrumb
- [X] Add a ProBackground
- [X] Add a ProTabs
- [X] Add a ProCheckbox
- [X] Add a ProRadio
- [X] Add a ProColumnSetting
- [X] Add a ProDescriptions
- [X] Add a ProToggleFullScreen
- [X] Add a ProToggleLanguage
- [X] Add a ProToggleTheme
- [X] Add a ProCheckCard
- [X] Add a ProAvatar

## License
MIT

Copyright (c) 2024-present, kylin