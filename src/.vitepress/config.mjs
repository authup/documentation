import { defineConfig } from 'vitepress'
export default defineConfig({
    title: 'Authup',
    base: '/',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/authup/authup' },
        ],
        editLink: {
            pattern: 'https://github.com/authup/authup/edit/master/docs/:path',
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
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/user/'},

                    ]
                },
                /*
                {
                    text: 'Authentication',
                    items: [
                        {text: 'Grant Types', link: '/guide/user/docker' },
                        {text: 'Social Login', link: '/guide/user/npm' },
                    ]
                }

                */
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
                        { text: 'Introduction', link: '/guide/deployment/configuration' },
                        {
                            text: 'server:core',
                            link: '/guide/deployment/configuration-server-core',
                            items: [
                                { text: 'General', link: '/guide/deployment/configuration-server-core' },
                                { text: 'Database', link: '/guide/deployment/configuration-server-core-database' },
                                { text: 'Redis', link: '/guide/deployment/configuration-server-core-redis' },
                                { text: 'SMTP', link: '/guide/deployment/configuration-server-core-smtp' },
                                { text: 'Vault', link: '/guide/deployment/configuration-server-core-vault' }
                            ]
                        },
                        {text: 'client:web', link: '/guide/deployment/configuration-client-web'}
                    ]
                },
                {
                    text: 'Targets',
                    items: [
                        {text: 'Bare Metal', link: '/guide/deployment/bare-metal'},
                        {text: 'Docker', link: '/guide/deployment/docker'},
                        {text: 'Docker Compose', link: '/guide/deployment/docker-compose'},
                    ]
                },
                {
                    text: 'Reverse Proxy',
                    items: [
                        { text: 'Nginx', link: '/guide/deployment/nginx' }
                    ]
                },
            ],
            '/guide/development': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/development/'},
                    ]
                },
                /*
                {
                    text: 'Concepts',
                    items: [
                        { text: 'Securing Applications', link: '/guide/development/securing-applications' }
                    ]
                },
                 */
                {
                    text: 'Client Libraries / SDKs',
                    items: [
                        {
                            text: 'JavaScript',
                            items: [
                                { text: 'Introduction', link: '/guide/development/javascript-core/'},
                                { text: 'HTTP Interceptor', link: '/guide/development/javascript-core/http-interceptor'},
                                { text: 'Token Creator', link: '/guide/development/javascript-core/token-creator'},
                                { text: 'Token Verifier', link: '/guide/development/javascript-core/token-verifier'},
                                { text: 'API Client', link: '/guide/development/javascript-core/api-client' },
                                { text: 'Ability Manager', link: '/guide/development/javascript-core/ability-manager' },
                                { text: 'API Reference System', link: '/guide/development/javascript-core/api-reference-system' },
                                { text: 'API Reference Resources', link: '/guide/development/javascript-core/api-reference-resources' },
                            ]
                        },

                        {text: 'Python', link: '/guide/development/python'},
                    ]
                },
                {
                    text: 'Client Components',
                    items: [
                        {
                            text: 'Vue',
                            items: [
                                { text: 'Introduction', link: '/guide/development/javascript-client-vue/' },
                                { text: 'Records', link: '/guide/development/javascript-client-vue/records'},
                                { text: 'Forms', link: '/guide/development/javascript-client-vue/forms'},
                                { text: 'Collections', link: '/guide/development/javascript-client-vue/collections'},
                            ]
                        }
                    ]
                },
                {
                    text: 'Server Library/SDKs',
                    items: [
                        {
                            text: 'JavaScript',
                            items: [
                                { text: 'Introduction', link: '/guide/development/javascript-server-adapter/'},
                                { text: 'HTTP Middleware', link: '/guide/development/javascript-server-adapter/http-middleware'},
                                { text: 'Socket Middleware', link: '/guide/development/javascript-server-adapter/socket-middleware'}
                            ]
                        },
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Domains', link: '/guide/development/api-reference-domains'}
                    ]
                }
            ],
            '/guide/contributing': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/contributing/'},
                    ]
                },
            ],
        }
    }
})
