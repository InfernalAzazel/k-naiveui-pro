import type { Plugin } from 'vue'
import components from './components'

const install: Plugin = {
    install(app) {
        for (const key of Object.keys(components))
            app.component(key, components[key as keyof typeof components])
    },
}

export * from './components'
export default install