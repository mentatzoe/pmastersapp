var pmastersApp = angular.module('pmastersApp', ['ui.router']);
pmastersApp.config(
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state(

        );

    }
)