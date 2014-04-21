(function() {
    'use strict';

    var main = angular.module("main");
    
    var scrollToDirective = main.directive('scrollto', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, elem, attrs) {
                if (attrs.scrollto) {
                    elem.bind('click', function() {
                        var target = $(attrs.scrollto);
                        var topPosition = target.offset().top;
                        console.log('scrollto=>' + topPosition);
                        $.scrollTo(topPosition);
                    });
                }
            }
        };
    });

    var waypointDirective = main.directive('waypoint', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, elem, attrs) {
                $(elem).waypoint(function (direction) {
                    if (direction != undefined) {
                        if (direction == 'down') {
                            $(elem).addClass('in');
                        }
                        console.log('waypoint=>' + direction);
                    }
                }, {
                    offset: function () {
                        var h = $(window).height();
                        if ($('body').height() - $(this).offset().top > h * 0.3) {
                            return h * 0.7;
                        } else {
                            return h;
                        }
                    }
                });
            }
        };
    });

    var featureDirective = main.directive('feature', ["features",function(features) {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, elem, attrs) {
                var featureName = attrs.feature;
                var featureModule = elem;
                if (features.isFeatureForUser(featureName)) {
                    console.log(featureName + '=> show');
                    featureModule.show();
                } else {
                    console.log(featureName + '=> hide');
                    featureModule.hide();
                }
            }
        };
    }]);

})()