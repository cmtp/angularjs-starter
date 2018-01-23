'use strict';
describe('appHome component', function () {
    var HomeController;
    var $controller;
    var scope;

    beforeEach(function () {
       angular.mock.module('app');

    });

    beforeEach(inject(function (_$rootScope_, _$componentController_) {
        var scope = _$rootScope_.$new();
        var $controller = _$componentController_;
        HomeController = $controller('appHome', { $scope: scope});

    }));
    
    it('appHome component should be defined', function () {
        expect(HomeController).toBeDefined();
    });

    it('appHome component should expose resizeMode', function () {
        expect(HomeController.resizeMode).toBeDefined();
        expect(HomeController.resizeMode).toBe('OverflowResizer');
    });
});