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

    HomeController.$inject = ['$log', '_'];
    /** @ngInhject  */
    function HomeController($log, _) {
        var vm = this;
        vm.hello = "welcome to the angularjs";
        vm.count = _.head([1,2,3,4]);
        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();