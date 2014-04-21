(function() {
    'use strict';

    var main = angular.module("main");
    
    main.controller('MainCtrl', ["$scope", "utils", "features", function ($scope,utils,features) {
        $scope.showLoader = true;

        $scope.isFeatureForUser = function(featureName) {
            return features.isFeatureForUser(featureName);
        };

        setTimeout(function () {
            $scope.$apply(function () {
                $scope.showLoader = false;
            });
        }, 2000);

        var colorOverlay = $('#color-overlay').length;
        var backImages = $('#backgrounds').data('backgrounds').split(',');
        var user = "default";
        var colour = "white";
        
        if (window.location.search) {
            var queryString = window.location.search.replace("?", "");
            var query = utils.queryToObject(queryString);
            user = (query.user) ? query.user : user;
            //if ((query.colour) && (['white', 'blue', 'grass', 'green', 'light-blue', 'orange', 'pink', 'purple', 'red', 'sepia', 'yellow'].contains(query.colour))) {
            if (query.colour) {
                colour = query.colour;
            }
        }

        /*============================================
        Set colour of site
        ============================================*/
        $('#siteColourStyleSheet').replaceWith("<link id='siteColourStyleSheet' href='Content/shapes-" + colour + ".css' rel='stylesheet' />");

        /*============================================
        Features
        ============================================*/
        features.setFeatures(eval($('#features').data('features')));
        features.setUser(user);
        
        $.backstretch(backImages, {
            fade: 500,
            duration: 4000
        });

        if (!colorOverlay) {
            $('body').addClass('no-overlay');
        }

        $scope.test = function (direction) {
            console.log('waypoint=>' + direction);
        };

        $(window).resize(function () {
            utils.scrollSpyRefresh();
            utils.waypointsRefresh();
        });
    }]);
})()