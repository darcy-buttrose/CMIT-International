(function() {
    'use strict';

    var main = angular.module("main");

    main.provider("contacts", function() {
        this.$get = ["$http",function ($http) {
            var service = {                
                post : post
            };

            return service;
            
            function post(data) {
                return $http.post('/api/Contact', data, {cache: false});
            }
        }];
    });
})()