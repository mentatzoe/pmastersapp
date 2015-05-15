angular.module('pmastersApp')
    .controller('LoginController', ['$scope', 'User', function ($scope, User){
        $scope.form = {
            username: "",
            password: ""
        };

    }])
    .directive("logUserIn", ['User', function(User){
        return{
            restrict: "A",
            link: function(scope, element, attrs, $scope) {
                element.bind( "click", function($scope){
                    console.log(element);
                    User.login('admin', 'badPwd');
                })
            }
        }
    }]);