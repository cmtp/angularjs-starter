(function() {
    'use strict';

    angular
        .module('app')
        .component('appHome', {
            templateUrl:'app-home/app-home.html',
            controller: HomeController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    HomeController.$inject = ['$log', '_', 'RandomUserService', '$scope'];
    /** @ngInhject  */
    function HomeController($log, _, RandomUserService, $scope) {
        var vm = this;
        vm.sort = sort;
        ////////////////

        activate();

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function activate() {
            RandomUserService.getUsers()
                .then(function (res) {
                    vm.users = res.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    console.log('finish this request');
                });
        }

        function sort(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
    }
})();