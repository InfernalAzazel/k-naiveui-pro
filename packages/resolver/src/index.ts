import type { ComponentResolver } from 'unplugin-vue-components'

export function KNaiveUiProResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.match(/^Pro[A-Z]/))
                return { name, from: `k-naiveui-pro` }
        },
    }
}