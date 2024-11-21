import { defineConfig } from 'vitepress';

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
                    { text: 'Development', link: '/guide/development/'},
                    { text: 'Deployment', link: '/guide/deployment/'},
                ]
            },
            {
                text: 'SDKs',
                activeMatch: '/sdks/',
                items: [
                    { text: 'JavaScript', link: '/sdks/javascript/'},
                    { text: 'Python', link: '/sdks/python/'}
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
                        {text: 'Code of Conduct', link: '/guide/development/code-of-conduct'},
                        {text: 'Submission Guidelines', link: '/guide/development/submission-guidelines'},
                        {text: 'Repository Structure', link: '/guide/development/repository-structure'},
                        {text: 'Quick Start', link: '/guide/development/quick-start'},
                    ]
                },
                {
                    text: 'Integration',
                    items: [
                        { text: 'Introduction', link: '/guide/development/integration'},
                        { text: 'SKDs', link: '/guide/development/integration/sdks'},
                        { text: 'Projects (Examples)', link: '/guide/development/integration/projects'}
                    ]
                },
                {
                    text: 'Workflows',
                    items: [
                        { text: 'Introduction', link: '/guide/development/workflows'},
                        { text: 'Securing Applications/OAuth2', link: '/guide/development/workflows/oauth2/'},
                        { text: 'Error Handling', link: '/guide/development/workflows/error-handling'},
                    ]
                },
            ],
            '/sdks/python': [
                {text: 'Python', link: '/sdks/python'},
            ],
            '/sdks/javascript/': [
                {
                    text: 'HTTP',
                    items: [
                        { text: 'Introduction', link: '/sdks/javascript/core/'},
                        { text: 'HTTP Interceptor', link: '/sdks/javascript/core/http-interceptor'},
                        { text: 'Token Creator', link: '/sdks/javascript/core/token-creator'},
                        { text: 'Token Verifier', link: '/sdks/javascript/core/token-verifier'},
                        { text: 'API Client', link: '/sdks/javascript/core/api-client' },
                    ],
                },
                {
                    text: 'Core',
                    items: [
                        { text: 'Ability Manager', link: '/sdks/javascript/core/ability-manager' },
                        { text: 'API Reference System', link: '/sdks/javascript/core/api-reference-system' },
                        { text: 'API Reference Resources', link: '/sdks/javascript/core/api-reference-resources' },
                    ]
                },
                {
                    text: 'Client: Vue',
                    items: [
                        { text: 'Introduction', link: '/sdks/javascript/client-vue/' },
                        { text: 'Records', link: '/sdks/javascript/client-vue/records'},
                        { text: 'Forms', link: '/sdks/javascript/client-vue/forms'},
                        { text: 'Collections', link: '/sdks/javascript/client-vue/collections'},
                    ]
                },
                {
                    text: 'Server: HTTP',
                    items: [
                        { text: 'Introduction', link: '/sdks/javascript/server-adapter/'},
                        { text: 'Middleware', link: '/sdks/javascript/server-adapter/http-middleware'},
                    ]
                },
                {
                    text: 'Server: Socket.io',
                    items: [
                        { text: 'Middleware', link: '/sdks/javascript/server-adapter/socket-middleware'}
                    ]
                }
            ],
            '/guide/contributing': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/contributing/'},
                        {text: 'Code of Conduct', link: '/guide/contributing/code-of-conduct'},
                        {text: 'Submission Guidelines', link: '/guide/contributing/submission-guidelines'},
                        {text: 'Environment', link: '/guide/contributing/environment'},
                    ]
                },
            ],
        }
    }
})
