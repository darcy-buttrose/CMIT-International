(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("AboutCtrl", ["$scope", "utils", function($scope,utils) {
        $('#about .collapse').on('show.bs.collapse', function () {
            $(this).prev('.details-btn')
                .find('.fa')
                .removeClass('fa-plus')
                .addClass('fa-minus');
        });

        $('#about .collapse').on('hide.bs.collapse', function () {
            $(this).prev('.details-btn')
                .find('.fa')
                .removeClass('fa-minus')
                .addClass('fa-plus');;
        });

        $('#about .collapse').on('shown.bs.collapse', function () {
            utils.scrollSpyRefresh();
            utils.waypointsRefresh();
        });

        $('#about .collapse').on('hidden.bs.collapse', function () {
            utils.scrollSpyRefresh();
            utils.waypointsRefresh();
        });
    }]);
})()