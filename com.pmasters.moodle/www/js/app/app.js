var myApp = angular.module('pmastersApp', [
    'ui.router'
]);
myApp.config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        console.log("Config1");
});
myApp.config(['$sceDelegateProvider', function($sceDelegateProvider) {
        console.log("Config2");
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://www.pmasters.es/campusvirtualMMCD2012/**'
        ]);
    }]);