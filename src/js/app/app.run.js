(function () {
    'use strict';

    angular
        .module('app')
        .run(loadBasicConfiguration);

    loadBasicConfiguration.$inject = ['$log', '$templateCache', '$compile', '$rootScope'];
    /** @ngInhject  */
    function loadBasicConfiguration($log, $templateCache, $compile, $rootScope) {
        // var templatesHTML = $templateCache.get('app.templates');
        // $compile(templatesHTML)($rootScope); 
    }
})();