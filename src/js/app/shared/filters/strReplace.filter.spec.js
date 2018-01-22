'use strict';
describe('strReplace filter', function () {
    var strReplace;
    beforeEach(function () {
       angular.mock.module('app');
    });

    beforeEach(inject(function (_strReplaceFilter_) {
        strReplace = _strReplaceFilter_;
    }));
    
    it('strReplace filter should exist', function () {
        expect(strReplace).toBeDefined();
    });

    it('strReplace should change \\n to <br />', function () {
        expect(strReplace('\n')).toEqual('<br />');
    });

    it('strReplace should not change empty string to <br />', function () {
        expect(strReplace('')).toEqual('');
    });

    it('strReplace should change the word "angular" for "ng"', function () {
        expect(strReplace('HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.', 'Angular', 'ng')).toContain('ng');
    });

    it('strReplace should change all words ng for angular in the text', function () {
        expect(strReplace('HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.', 'it', 'its')).toContain('its');
    });

    it('strReplace should not have the word replaced', function () {
        expect(strReplace('HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.', 'HTML', 'JAVASCRIPT')).not.toContain('HTML');
    });
});