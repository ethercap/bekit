module.exports = {
    base: '/bekit/',
    title: 'Bekit',
    description: '小巧的前端业务工具集',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/ethercap/bekit' },
        ],
        sidebar: [{
            title: '指南',
            path: null,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['/guide/', '快速上手'],
                ['/guide/url/', '链接'],
                ['/guide/ls/', 'Local Storage'],
                ['/guide/ua/', 'userAgent'],
                ['/guide/dom/', 'DOM'],
                ['/guide/time/', '日期'],
                ['/guide/factory/', '工厂函数'],
                ['/guide/notice/', '通知'],
                ['/guide/plugin/', '插件']
            ]
        }],
        lastUpdated: 'Last Updated',
    }
};