(function () {
    'use strict';
    angular
        .module('app')
        .config('UIRouteConfig', UIRouteConfig);

    UIRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'STATE_CONSTANTS'];
    /** @ngInhject  */
    function UIRouteConfig($stateProvider, $urlRouterProvider, STATE_CONSTANTS) {
        $urlRouterProvider.otherwise(STATE_CONSTANTS.HOME.URL);

        $stateProvider
            .state(STATE_CONSTANTS.HOME.STATE, {
                url: STATE_CONSTANTS.HOME.URL,
                template: STATE_CONSTANTS.HOME.TEMPLATE,
                data: {
                    label: STATE_CONSTANTS.HOME.TEXT
                }
            });
    }
})();