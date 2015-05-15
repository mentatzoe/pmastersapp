angular.module('pmastersApp')
    .factory('User', ['$http', '$q', '$rootScope', '$state', function($http, $q, $rootScope, $state){
        var self = this;
        var name = {
            first: '',
            last: ''
        };
        var email = '';

        return {
            login: logUserIn, //For now, will grow slowly
            setup: setup
        };

        function logUserIn(u, p){
            var url = "http://www.pmasters.es/campusvirtualMMCD2012/login/external.php?username=" + u + "&password="+ p;
            var formData = {username: u, password: p};
            console.log(formData);
            var ret = $q.defer();
            $http.get(url).success(function(data){
                switch(data['code']){
                    case 0:
                        console.log("Wrong user or pass");
                        ret.resolve(false);
                        break;
                    case 1:
                        //Login successful
                        ret.resolve(this.setup(user));
                        break;
                }
            });

            return ret.promise;
        }

        function setup(user){
            this.username = user.username;
            this.name.first = user.firstname;
            this.name.last = user.lastname;
            this.email = user.email;
        }
    }]);