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
                    // { text: 'Contributing', link: '/guide/contributing/'}
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
                        {text: 'Introduction', link: '/guide/deployment/configuration'},
                        {
                            text: 'API',
                            link: '/guide/deployment/configuration-api',
                            items: [
                                { text: 'General', link: '/guide/deployment/configuration-api' },
                                { text: 'Database', link: '/guide/deployment/configuration-api-database' },
                                { text: 'Redis', link: '/guide/deployment/configuration-api-redis' },
                                { text: 'SMTP', link: '/guide/deployment/configuration-api-smtp' },
                                { text: 'Vault', link: '/guide/deployment/configuration-api-vault' }
                            ]
                        },
                        {text: 'UI', link: '/guide/deployment/configuration-ui'}
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
                                { text: 'Introduction', link: '/guide/development/javascript'},
                                { text: 'API Client', link: '/guide/development/javascript-api-client' },
                                { text: 'Ability Manager', link: '/guide/development/javascript-ability-manager' },
                                { text: 'API Reference', link: '/guide/development/javascript-api-reference' },
                            ]
                        },
                        {
                            text: 'JavaScript Adapter',
                            items: [
                                { text: 'Introduction', link: '/guide/development/javascript-adapter'},
                                { text: 'HTTP', link: '/guide/development/javascript-adapter-http'},
                                { text: 'Socket', link: '/guide/development/javascript-adapter-socket'},
                            ]
                        },
                        {text: 'Python', link: '/guide/development/python'},
                    ]
                },
                /*
                {
                    text: 'UI Components',
                    items: [
                        { text: 'Vue', link: '/guide/development/vue' }  // lists, forms, installation
                    ]
                }
                 */
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
});
