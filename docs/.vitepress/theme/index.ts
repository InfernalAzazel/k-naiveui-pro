// https://vitepress.dev/guide/custom-theme
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import Theme from 'vitepress/theme'
import { DemoBox } from '@sgwm-sutras/ui'
import '@sgwm-sutras/ui/style'
import naive from 'naive-ui'
import naivePro from 'k-naiveui-pro'

export default {
  extends: Theme,
  enhanceApp({app}) {
    app.component('demo', DemoBox)
    app.use(naive)
    app.use(naivePro)
  }
}

