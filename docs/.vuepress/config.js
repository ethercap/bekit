module.exports = {
    base: '/bekit/',
    title: 'Bekit',
    locales: {
        '/': {
            lang: 'en-US',
            description: 'Smart Front-End Kit'
        },
        '/zh/': {
            lang: 'zh-CN',
            description: '小巧的前端业务工具集'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                // editLinkText: 'Edit this page on GitHub',
                // serviceWorker: {
                //     updatePopup: {
                //         message: "New content is available.",
                //         buttonText: "Refresh"
                //     }
                // },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guides', link: '/guide/' },
                    { text: 'GitHub', link: 'https://github.com/luzimingx/bekit' },
                ],
                sidebar: [{
                    title: 'Guides',
                    path: null,
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['/guide/', 'Quick Start'],
                        ['/guide/url/', 'Url'],
                        ['/guide/ls/', 'Local Storage'],
                        ['/guide/ua/', 'UserAgent'],
                        ['/guide/dom/', 'DOM'],
                        ['/guide/time/', 'Date'],
                        ['/guide/factory/', 'Factory'],
                        ['/guide/notice/', 'Notice'],
                        ['/guide/plugin/', 'Plugin']
                    ]
                }],
                lastUpdated: 'Last Updated'
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                // editLinkText: '在 GitHub 上编辑此页',
                // serviceWorker: {
                //     updatePopup: {
                //         message: "发现新内容可用.",
                //         buttonText: "刷新"
                //     }
                // },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'GitHub', link: 'https://github.com/luzimingx/bekit' },
                ],
                sidebar: [{
                    title: '指南',
                    path: null,
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['/zh/guide/', '快速上手'],
                        ['/zh/guide/url/', '链接'],
                        ['/zh/guide/ls/', 'Local Storage'],
                        ['/zh/guide/ua/', 'userAgent'],
                        ['/zh/guide/dom/', 'DOM'],
                        ['/zh/guide/time/', '日期'],
                        ['/zh/guide/factory/', '工厂函数'],
                        ['/zh/guide/notice/', '通知'],
                        ['/zh/guide/plugin/', '插件']
                    ]
                }],
                lastUpdated: 'Last Updated'
            }
        }
    }
};