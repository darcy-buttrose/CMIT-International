(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("TestimonialsCtrl", ["$scope", "utils", function($scope, utils) {
        /*============================================
        Testimonials Slider
        ==============================================*/

        $('#testimonials-slider').flexslider({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            animation: 'slide',
            slideshowSpeed: 5000,
            useCSS: true,
            directionNav: false,
            pauseOnAction: false,
            pauseOnHover: true,
            smoothHeight: false
        });
    }]);
})()
