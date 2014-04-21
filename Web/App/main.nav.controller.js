(function() {
    var main = angular.module("main");

    main.controller("NavCtrl", ["$scope", function($scope) {
        if ($(window).scrollTop() === 0) {
            $('#main-nav').removeClass('scrolled');
        }
        else {
            $('#main-nav').addClass('scrolled');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() === 0) {
                $('#main-nav').removeClass('scrolled');
            }
            else {
                $('#main-nav').addClass('scrolled');
            }
        });

        $('#main-nav').css({ 'top': -100, 'opacity': 0 });

        setTimeout(function () {
            $('#main-nav').animate({ 'top': 0, 'opacity': 1 }, 500);
        },500);
    }]);
})()