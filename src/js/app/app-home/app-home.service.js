(function() {
    'use strict';

    angular
        .module('app')
        .factory('RandomUserService', RandomUserService);

    RandomUserService.$inject = ['$http', '$q', 'URL'];
    function RandomUserService($http, $q, URL) {
        var service = {
            getUsers:getUsers
        };
        
        return service;

        ////////////////
        function getUsers() {
            return $q(function (resolve, reject) {
                $http.get(URL.RANDOM_USER + '?results=100')
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        }
    }
})();