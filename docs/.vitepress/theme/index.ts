// https://vitepress.dev/guide/custom-theme
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import Theme from 'vitepress/theme'
import { DemoBox } from '@sgwm-sutras/ui'
import '@sgwm-sutras/ui/style'
import naive from 'naive-ui'
import naivePro from 'k-naiveui-pro'
import {createI18n} from "vue-i18n";


export default {
  extends: Theme,
  enhanceApp({app}) {
    const messages = {
      'en-US': {
        message: {
          hello: 'hello world'
        }
      },
      'zh-CN': {
        message: {
          hello: '你好，世界'
        }
      }
    };
    function setupI18n() {
      return createI18n({
        legacy: false,
        locale: 'zh-CN', // 默认语言
        messages,
      });
    }
    app.use(setupI18n())
    app.component('demo', DemoBox)
    app.use(naive)
    app.use(naivePro)
  }
}

