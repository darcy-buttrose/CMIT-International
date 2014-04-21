(function() {
    'use strict';

    var main = angular.module('main', ['ngAnimate', 'ui', 'ui.router']);

    main.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'header.html',
            controller: 'HeaderCtrl'
        }).state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutCtrl'
        }).state('calltoaction', {
            url: '/calltoaction',
            templateUrl: 'calltoaction.html'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).state('portfolio', {
            url: '/portfolio',
            templateUrl: 'portfolio.html',
            controller: 'PortfolioCtrl'
        }).state('services', {
            url: '/services',
            templateUrl: 'services.html'
        }).state('sociallinks', {
            url: '/sociallinks',
            templateUrl: 'sociallinks.html'
        }).state('testimonials', {
            url: '/testimonials',
            templateUrl: 'testimonials.html',
            controller: 'TestimonialsCtrl'
        }).state('twitter', {
            url: '/twitter',
            templateUrl: 'twitter.html',
            controller: 'TwitterCtrl'
        });
        
        $urlRouterProvider.otherwise('/home');
    }]);

    return main;
})()