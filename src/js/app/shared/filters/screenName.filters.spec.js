'use strict';
describe('screenName filter', function () {
    var screenName;
    var testObj = '{ "Name": "test", "settings": { "field": 1} }';

    beforeEach(function () {
       angular.mock.module('app');
    });

    beforeEach(inject(function (_screenNameFilter_) {
        screenName = _screenNameFilter_;
    }));
    
    it('screenName filter should exist', function () {
        expect(screenName).toBeDefined();
    });

    it('screenName should return the name value', function () {
        expect(screenName(testObj)).toEqual('test');
    });

    it('screenName should be empty string to return should be empty', function () {
        expect(screenName('')).toEqual('');
    });

});