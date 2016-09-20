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
        }
    ]
    );