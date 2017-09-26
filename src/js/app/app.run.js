(function () {
    'use strict';

    angular
        .module('app')
        .run(loadBasicConfiguration);

    loadBasicConfiguration.$inject = ['$log'];
    /** @ngInhject  */
    function loadBasicConfiguration($log) {
        $log.log('running from Angularjs');
    }
})();