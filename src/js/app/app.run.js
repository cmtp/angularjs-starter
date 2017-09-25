(function () {
    'use strict';

    angular
        .module('app')
        .run(loadBasicConfiguration);

    loadBasicConfiguration.$inject = ['$log'];
    
    function loadBasicConfiguration($log) {
        $log.log('running from Angularjs');
    }
})();