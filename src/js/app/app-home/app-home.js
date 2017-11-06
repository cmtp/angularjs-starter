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

    HomeController.$inject = ['$log', '_', 'RandomUserService'];
    /** @ngInhject  */
    function HomeController($log, _, RandomUserService) {
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
            vm.sortKey = keyname;   //set the sortKey to the param passed
            vm.reverse = !vm.reverse; //if true make it false and vice versa
        }
    }
})();