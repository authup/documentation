import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Authup',
    base: '/',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/tada5hi/authup' },
        ],
        editLink: {
            pattern: 'https://github.com/tada5hi/authup/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Getting Started',
                link: '/getting-started/',
                activeMatch: '/getting-started/'
            },
            {
                text: 'Guide',
                activeMatch: '/guide/',
                items: [
                    { text: 'User', link: '/guide/user/'},
                    { text: 'Deployment', link: '/guide/deployment/'},
                    { text: 'Development', link: '/guide/development/'},
                    { text: 'Contributing', link: '/guide/contributing/'}
                ]
            },
            {
                text: 'Packages',
                activeMatch: '/packages/',
                items: [
                    { text: 'Server', link: '/packages/server/' },
                    { text: 'Server-Adapter', link: '/packages/server-adapter/' },
                    { text: 'Server-Common', link: '/packages/server-common/' },
                    { text: 'Server-Database', link: '/packages/server-database/' },
                    { text: 'Server-HTTP', link: '/packages/server-http/' },
                    { text: 'Common', link: '/packages/common/' },
                    { text: 'Vue', link: '/packages/vue/' },
                ]
            },
            {
                text: 'About',
                activeMatch: '/about/',
                items: [
                    { text: 'Team', link: '/about/team' },
                ]
            }
        ],
        sidebar: {
            '/getting-started/': [
                {
                    text: 'Overview',
                    items: [
                        {text: 'What is Authup?', link: '/getting-started/'},
                        {text: 'Features', link: '/getting-started/features'},
                        {text: 'Architecture', link: '/getting-started/architecture'},
                        {text: 'Guides', link: '/getting-started/guides'},
                    ]
                },
            ],
            '/guide/user/': [
                {
                    text: 'Authentication',
                    items: [
                        {text: 'Grant Types', link: '/guide/user/docker' },
                        {text: 'Social Login', link: '/guide/user/npm' },
                    ]
                }
            ],
            '/guide/deployment': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/'},

                    ]
                },
                {
                    text: 'Configuration',
                    items: [
                        {text: 'Basic', link: '/guide/deployment/configuration'}, // Basic & In Depth?
                        {text: 'In Depth', link: '/guide/deployment/configuration-in-depth'}
                    ]
                },
                {
                    text: 'Bare Metal',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/bare-metal'},
                        {text: 'Instructions', link: '/guide/deployment/bare-metal-instructions'},
                    ]
                },
                {
                    text: 'Docker',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/docker'},
                        {text: 'Instructions', link: '/guide/deployment/docker-instructions'},
                    ]
                },
            ],
            '/guide/development': [
                {
                    text: 'Concepts',
                    items: [
                        { text: 'Securing Applications', link: '/guide/development/securing-applications' }
                    ]
                },
                {
                    text: 'Client Libraries / SDKs',
                    items: [
                        {text: 'JavaScript', link: '/guide/development/javascript/'},
                        {text: 'Python', link: '/guide/development/python/'},
                    ]
                },
                {
                    text: 'UI Components',
                    items: [
                        {text: 'Vue', link: '/guide/development/vue/'}
                    ]
                },
            ],
            '/guide/contributing': [

            ],
            '/packages/common/': [
                {
                    text: 'Common',
                    items: [
                        {text: 'Introduction', link: '/packages/common/'},
                        {text: 'Installation', link: '/packages/common/installation.md'},
                    ]
                },
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Ability Manager', link: '/packages/common/ability-manager'},
                        {text: 'API Client', link: '/packages/common/api-client'},
                        {text: 'Domains', link: '/packages/common/domains'},
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        {text: 'Ability', link: '/packages/common/ability-api-reference'},
                        {text: 'Domains', link: '/packages/common/domains-api-reference'},
                        {text: 'Error', link: '/packages/common/error-api-reference'},
                    ]
                },
            ],
            '/packages/server-database/': [
                {
                    text: 'Server Database',
                    items: [
                        {text: 'Introduction', link: '/packages/server-database/'},
                        {text: 'Installation', link: '/packages/server-database/installation'},
                        {text: 'Configuration', link: '/packages/server-database/configuration'},
                    ]
                },
                {
                    text: 'Components',
                    items: [
                        {text: 'Entities', link: '/packages/server-database/entities'},
                        {text: 'Seeds', link: '/packages/server-database/seeds'},
                        {text: 'Subscribers', link: '/packages/server-database/subscribers'},
                        {text: 'OAuth2', link: '/packages/server-database/oauth2'},
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        {text: 'Config', link: '/packages/server-database/api-reference-config'},
                        {text: 'General', link: '/packages/server-database/api-reference'}
                    ]
                },
            ],
            '/packages/server-http/': [
                {
                    text: 'Server HTTP',
                    items: [
                        {text: 'Introduction', link: '/packages/server-http/'},
                        {text: 'Installation', link: '/packages/server-http/installation'},
                        {text: 'Configuration', link: '/packages/server-http/configuration'},
                    ]
                },
                {
                    text: 'Components',
                    items: [
                        {text: 'Controllers', link: '/packages/server-http/controllers'},
                        {text: 'Middlewares', link: '/packages/server-http/middlewares'},
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        {text: 'Config', link: '/packages/server-http/api-reference-config'},
                        {text: 'Middleware', link: '/packages/server-http/api-reference-middleware'},
                    ]
                },
            ],
            '/packages/server/': [
                {
                    text: 'Server',
                    items: [
                        {text: 'Introduction', link: '/packages/server/'}
                    ]
                },
            ],
            '/packages/server-adapter/': [
                {
                    text: 'Server Adapter',
                    items: [
                        {text: 'Overview', link: '/packages/server-adapter/'},
                        {text: 'Installation', link: '/packages/server-adapter/installation'},
                    ]
                },
                {
                    text: 'Middlewares',
                    items: [
                        {text: 'HTTP', link: '/packages/server-adapter/http'},
                        {text: 'Socket', link: '/packages/server-adapter/socket'},
                    ]
                },
            ],
            '/packages/server-common/': [
                {
                    text: 'Server Common',
                    items: [
                        {text: 'Introduction', link: '/packages/server-common/'},
                        {text: 'Installation', link: '/packages/server-common/installation'},
                    ]
                },
                {
                    text: 'API-Reference',
                    items: [
                        {text: 'KeyPair', link: '/packages/server-common/key-pair'},
                        {text: 'Sign & Verify', link: '/packages/server-common/sign-verify'},
                        {text: 'Hash', link: '/packages/server-common/hash'},
                    ]
                },
            ],
            '/packages/vue/': [
                {
                    text: 'Vue',
                    items: [
                        {text: 'Introduction', link: '/packages/frontend/vue/'},
                        {text: 'Installation', link: '/packages/frontend/vue/installation'}
                    ]
                },
                {
                    text: 'Components',
                    items: [
                        {text: 'Lists', link: '/packages/frontend/vue/lists'},
                        {text: 'Items', link: '/packages/frontend/vue/items'},
                        {text: 'Forms', link: '/packages/frontend/vue/forms'}
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        {text: 'Components', link: '/packages/frontend/vue/components'}
                    ]
                }
            ]
        }
    }
});
