var pmastersApp = angular.module('pmastersApp', ['ui.router']);
console.log("What");
pmastersApp.config(
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url:'/login',
                templateUrl: 'login.html'
            })
            .state('base', {
                url:'/home',
                templateUrl: 'index.html'
            })
            .state('base.calendar',{
                url: '^/calendar',
                template: "calendar",
                controller: function() {
                    console.log("HELLO");
                }
            })
            .state('base.messages',{
                url: '^/messages',
                template: "messages",
                controller: function() {
                    console.log("HELLO");
                }
            })
            .state('base.pref',{
                url: '^/preferences',
                template: "prefs",
                controller: function() {
                    console.log("HELLO");
                }
            })

    }
);