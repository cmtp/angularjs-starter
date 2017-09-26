(function() {
    'use strict';

    angular
        .module('app')
        .component('appHome', {
            templateUrl:'app-home.tmpl.html',
            controller: HomeController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    HomeController.$inject = ['$log'];
    /** @ngInhject  */
    function HomeController($log) {
        var vm = this;
        

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();