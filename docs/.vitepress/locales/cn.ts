import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'

export const cnConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: 'Pro Components',
    description: 'Kylin Naive UI Pro Components 是 Naive UI 的一个增强版本，提供了更多高级组件和功能，适用于更复杂的应用场景。',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
            text: 'Suggest changes to this page'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/InfernalAzazel/naiveui-pro-components' }
        ],
        nav: [
            {
                text: '指南',
                link: '/cn/guide.md',
                activeMatch: '/cn/guide.md'
            },
            {
                text: '组件',
                link: '/cn/layout/index.md',
                activeMatch: '/cn/layout/index.md'
            }
        ],
        sidebar: [
            {
                text: '布局',
                items: [
                    {
                        text: 'ProLayout',
                        link: '/cn/layout/index.md'
                    },
                ]
            },
            {
                text: '表单组件',
                items: [
                    {
                        text: 'ProForm',
                        link: '/cn/form/index.md'
                    },
                    {
                        text: 'ProStepsForm',
                        link: '/cn/form/steps.md'
                    },
                    {
                        text: 'ProQueryForm',
                        link: '/cn/form/query.md'
                    },
                ]
            },
        ],
    },

}
