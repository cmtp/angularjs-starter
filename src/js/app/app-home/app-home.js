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

    HomeController.$inject = ['$log', '_', 'DTOptionsBuilder', 'DTColumnBuilder', '$q', '$http'];
    /** @ngInhject  */
    function HomeController($log, _, DTOptionsBuilder, DTColumnBuilder, $q, $http) {
        var vm = this;
        var vm = this;
        vm.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
            var defer = $q.defer();
            $http.get('https://randomuser.me/api/?results=10').then(function (result) {
                defer.resolve(result);
            });
            return defer.promise;
        })
            .withPaginationType('full_numbers')
            .withColumnFilter({
                aoColumns: [{
                    type: 'text',
                    bRegex: true,
                    bSmart: true
                }, {
                    type: 'text',
                    bRegex: false,
                    bSmart: true
                }]
            });
        vm.dtColumns = [
            DTColumnBuilder.newColumn('name.first').withTitle('Name'),
            DTColumnBuilder.newColumn('name.last').withTitle('Lastname')
        ];
        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();