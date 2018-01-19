(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('_', _);

    _.$inject = ['$window'];
    function _($window) {
        if(!$window._){
            return;
            // TODO: redirect to an error
        }        
        return $window._;
    }
})();