import { defineConfig } from 'vitepress'
import { defaultDeviceList, defaultDeviceTypes, pluginMkit, pluginVite } from '@sgwm-sutras/plugin'
import UnoCSS from 'unocss/vite'
import { cnConfig } from './locales/cn'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/k-naiveui-pro/',
  locales: {
    root: { label: '简体中文', lang:'cn', ...cnConfig  },
    // en: { label: 'English', lang: 'en', ...enConfig },
  },
  markdown: {
    config: (md) => {
      md.use(pluginMkit)
    }
  },
  vite: {
    plugins: [
      UnoCSS(),
      pluginVite({
        demo: {
          // defaultPreviewMode: 'browser',
          deviceList: defaultDeviceList,
          defaultDevice: defaultDeviceTypes.Default,
        }
      })
    ]
  }
})