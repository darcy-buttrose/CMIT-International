(function() {
    'use strict';

    var main = angular.module("main");

    main.provider("features", function() {
        this.$get = [function() {
            var features = new Array();
            var currentUserName = "default";

            var service = {
                setFeatures: setFeatures,
                setUser: setUser,
                isFeatureForUser: isFeatureForUser,
            };

            return service;
            
            function setFeatures(featuresArray) {
                features = featuresArray;
            }

            function setUser(userName) {
                currentUserName = userName;
            }

            function isFeatureForUser(featureName) {
                var match = false;
                features.forEach(function(user) {
                    if (user.userName == currentUserName && user.features.indexOf(featureName) > -1) {
                        match = true;
                        return;
                    }
                });
                return match;
            }
        }];
    });
})()
