(function() {
    'use strict';

    var main = angular.module("main");

    main.provider("utils", function() {
        this.$get = [function() {
            var service = {                
                scrollSpyRefresh: scrollSpyRefresh,
                waypointsRefresh: waypointsRefresh,
                queryToObject: queryToObject,
            };

            return service;
            
            /*============================================
            Refresh scrollSpy function
            ==============================================*/
            function scrollSpyRefresh() {
                setTimeout(function () {
                    $('body').scrollspy('refresh');
                }, 1000);
            }

            /*============================================
            Refresh waypoints function
            ==============================================*/
            function waypointsRefresh() {
                setTimeout(function () {
                    $.waypoints('refresh');
                }, 1000);
            }
            
            /*==========================================
            Extract queryObject from Query String
            ============================================*/
            function queryToObject(queryString){
                var
                queryObject = {},
                pair = null,
                query = queryString.split('&');
 
                for (var i=0; i < query.length; i++){
                    pair = query[i].split('=');
                    queryObject[pair[0]] = pair[1];
                };
 
                return queryObject;
            }            
        }];
    });
})()