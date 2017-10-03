(function() {
    'use strict';

    angular
        .module('app')
        .component('appHome', {
            templateUrl:'app-home/app-home.html',
            controllerAs: 'HomeController as vm',
            // controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    HomeController.$inject = ['$log', '_'];
    /** @ngInhject  */
    function HomeController($log, _) {
        var vm = this;
        vm.count = _.sample([1,2,3,4]);

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();