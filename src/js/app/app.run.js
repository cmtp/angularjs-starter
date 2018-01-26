(function () {
    'use strict';

    angular
        .module('app')
        .run(loadBasicConfiguration);

    loadBasicConfiguration.$inject = ['$log', '$templateCache', '$compile', '$rootScope'];
    /** @ngInject  */
    function loadBasicConfiguration($log, $templateCache, $compile, $rootScope) {
        // TODO: finding support for update template cache in development.
        // var templatesHTML = $templateCache.get('app.templates');
        // $compile(templatesHTML)($rootScope); 
    }
})();