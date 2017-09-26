(function () {
    'use strict';

    angular
        .module('app')
        .constant('STATE_CONSTANTS', {
            'HOME': {
                TEXT: 'Home',
                STATE: 'home',
                URL: '/home',
                BACKGROUND: '',
                TEMPLATE: '<app-home/>'
            }
        });
})();