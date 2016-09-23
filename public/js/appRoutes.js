angular.module('appRoutes', [])
    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('default', {
                    url: '/',
                    templateUrl: 'welcome.html'
                })
                .state('service', {
                    url: '/service',
                    templateUrl: 'services.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'contact.html'
                })
                .state('portfolio-1', {
                    url: '/portfolio-1',
                    templateUrl: 'portfolio/portfolio-1-col.html'
                })
                .state('portfolio-2', {
                    url: '/portfolio-2',
                    templateUrl: 'portfolio/portfolio-2-col.html'
                })
                .state('portfolio-3', {
                    url: '/portfolio-3',
                    templateUrl: 'portfolio/portfolio-3-col.html'
                })
                .state('portfolio-4', {
                    url: '/portfolio-4',
                    templateUrl: 'portfolio/portfolio-4-col.html'
                })
                .state('portfolio-item', {
                    url: '/portfolio-item',
                    templateUrl: 'portfolio/portfolio-item.html'
                })
                .state('blog-home-1', {
                    url: '/blog-home-1',
                    templateUrl: 'blog/blog-home-1.html'
                })
                .state('blog-home-2', {
                    url: '/blog-home-2',
                    templateUrl: 'blog/blog-home-2.html'
                })
                .state('blog-post', {
                    url: '/blog-post',
                    templateUrl: 'blog/blog-post.html'
                })
                .state('full-width', {
                    url: '/full-width',
                    templateUrl: 'otherpage/full-width.html'
                })
                .state('404link', {
                    url: '/404',
                    templateUrl: 'otherpage/404.html'
                })
                .state('faq', {
                    url: '/faq',
                    templateUrl: 'otherpage/faq.html'
                })
                .state('fullwidth', {
                    url: '/full-width',
                    templateUrl: 'otherpage/full-width.html'
                })
                .state('pricing', {
                    url: '/pricing',
                    templateUrl: 'otherpage/pricing.html'
                })
                .state('sidebar', {
                    url: '/sidebar',
                    templateUrl: 'otherpage/sidebar.html'
                })
        }
    ]
    );