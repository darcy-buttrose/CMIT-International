(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("HeaderCtrl", ["$scope","utils", function($scope,utils) {
        $('.jumbotron').height($(window).height());
        $('.message-box').css({ 'marginTop': $(window).height() * 0.5 });
        $('.jumbotron .container').addClass('scale-in');

        $('.home-slider').flexslider(
            {
            animation: "slide",
            directionNav: false,
            controlNav: false,
            //direction: "vertical",
            slideshowSpeed: 3000,
            animationSpeed: 500,
            pauseOnHover: false,
            pauseOnAction: false,
            smoothHeight: true
            }
        );

        $scope.resize = function() {
            var height = $(window).height();
            var width = $(window).width();

            var bsize = width + 'px ' + (height - 80) + 'px';

            $('.jumbotron').height(height - 80);
            $('#home').css({'background-size': bsize});
            $('.message-box').css({ 'marginTop': (height-80) * 0.5 });

            utils.scrollSpyRefresh();
            utils.waypointsRefresh();
        };

        $(window).resize(function () {
            $scope.resize();
        });
        
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            $('.jumbotron').css({ 'opacity': (1 - st / 250) });
            //$('.jumbotron .container').css({'top':st});
        });

        setTimeout(function () {
            $scope.resize();
        }, 500);

        setTimeout(function () {
            $('.jumbotron .container').addClass('in');
        }, 1000);
    }]);
})()