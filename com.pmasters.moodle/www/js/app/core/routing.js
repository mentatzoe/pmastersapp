var pmastersApp = angular.module('pmastersApp', ['ui.router']);
pmastersApp.config(
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('base', {
                abstract:true,
                url: '/',
                templateUrl: 'index.html'
            })
            .state('base.login',{
                url: '/login',
                views: {
                    'content@base': {
                        templateUrl: "test1.html"
                    }
                }
            })

    }
);