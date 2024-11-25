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
            { icon: 'github', link: 'https://github.com/InfernalAzazel/k-naiveui-pro' }
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
                        text: 'ProBaseForm',
                        link: '/cn/form/index.md'
                    },
                    {
                        text: 'ProForm',
                        link: '/cn/form/form.md'
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
            {
                text: '其他组件',
                items: [
                    {
                        text: 'ProAvatar',
                        link: '/cn/other/index.md'
                    },
                    {
                        text: 'ProBackground',
                        link: '/cn/other/background.md'
                    },
                    {
                        text: 'ProTabs',
                        link: '/cn/other/tabs.md'
                    },
                    {
                        text: 'ProToggleFullScreen',
                        link: '/cn/other/toggleFullScreen.md'
                    },
                    {
                        text: 'ProToggleLanguage',
                        link: '/cn/other/toggleLanguage.md'
                    },
                    {
                        text: 'ProToggleTheme',
                        link: '/cn/other/toggleTheme.md'
                    },
                    {
                        text: 'ProColumnSetting',
                        link: '/cn/other/columnSetting.md'
                    },
                    {
                        text: 'ProDescriptions',
                        link: '/cn/other/descriptions.md'
                    },
                    {
                        text: 'ProCheckbox',
                        link: '/cn/other/checkbox.md'
                    },
                    {
                        text: 'ProRadio',
                        link: '/cn/other/radio.md'
                    },
                    {
                        text: 'ProCheckCard',
                        link: '/cn/other/checkCard.md'
                    },
                    {
                        text: 'ProBreadcrumb',
                        link: '/cn/other/breadcrumb.md'
                    },
                ]
            },
        ],
    },

}

