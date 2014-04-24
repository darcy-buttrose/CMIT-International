(function() {
    'use strict';

    var main = angular.module('main', ['ngAnimate', 'ui', 'ui.router']);

    main.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            templateUrl: 'header.html',
            controller: 'HeaderCtrl'
        }).state('about', {
            templateUrl: 'about.html',
            controller: 'AboutCtrl'
        }).state('calltoaction', {
            templateUrl: 'calltoaction.html'
        }).state('contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).state('portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'PortfolioCtrl'
        }).state('services', {
            templateUrl: 'services.html'
        }).state('sociallinks', {
            templateUrl: 'sociallinks.html'
        }).state('testimonials', {
            templateUrl: 'testimonials.html',
            controller: 'TestimonialsCtrl'
        }).state('twitter', {
            templateUrl: 'twitter.html',
            controller: 'TwitterCtrl'
        });
    }]);

    return main;
})()