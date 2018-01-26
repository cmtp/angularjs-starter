'use strict';
describe('Random Users Factory', function () {
    var RandomUserService;
    var scope;
    var httpBackend;
    var dataMockUsers = {
        results: [], 
        info: { 
            results: 100 
        }
    };
    beforeEach(function () {
       angular.mock.module('app');

    });

    beforeEach(inject(function (_$rootScope_, _RandomUserService_, _$httpBackend_) {
        scope = _$rootScope_.$new();
        RandomUserService = _RandomUserService_;
        httpBackend = _$httpBackend_;

        httpBackend.expect('GET', 'https://randomuser.me/api?results=100')
            .respond(200, dataMockUsers);
    }));
    
    it('RandomUserService should exist', function () {
        expect(RandomUserService).toBeDefined();
    });

    it('RandomUserService should return a list of users', function () {
        RandomUserService.getUsers().then(function (res) {
            expect(res.data).toBeDefined();
            expect(res.data.info.results).toBe(100);
        });
        httpBackend.flush();
    });
});