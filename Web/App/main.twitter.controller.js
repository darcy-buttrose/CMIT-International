(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("TwitterCtrl", ["$scope", "utils", function($scope, utils) {
        /*============================================
        Twitter Functions
        ==============================================*/
        var tweetsLength = $('#twitter-slider').data('tweets-length'),
            widgetID = $('#twitter-slider').data('widget-id');

        twitterFetcher.fetch(widgetID, 'twitter-slider', tweetsLength, true, false, true, '', false, handleTweets);

        function handleTweets(tweets) {

            var x = tweets.length,
                n = 0,
                tweetsHtml = '<ul class="slides">';

            while (n < x) {
                tweetsHtml += '<li>' + tweets[n] + '</li>';
                n++;
            }

            tweetsHtml += '</ul>';
            $('#twitter-slider').html(tweetsHtml);

            $('.twitter_reply_icon').html("<i class='fa fa-reply'></i>");
            $('.twitter_retweet_icon').html("<i class='fa fa-retweet'></i>");
            $('.twitter_fav_icon').html("<i class='fa fa-star'></i>");

            $('.twitter_reply_icon').data({ 'toggle': 'tooltip', 'placement': 'bottom' }).attr({ 'title': 'Reply' }).tooltip();
            $('.twitter_retweet_icon').data({ 'toggle': 'tooltip', 'placement': 'bottom' }).attr({ 'title': 'Retweet' }).tooltip();
            $('.twitter_fav_icon').data({ 'toggle': 'tooltip', 'placement': 'bottom' }).attr({ 'title': 'Favorite' }).tooltip();
            $('#twitter-slider').flexslider({
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
                slideshowSpeed: 5000,
                useCSS: true,
                controlNav: false,
                pauseOnAction: false,
                pauseOnHover: true,
                smoothHeight: false
            });
        }
    }]);
})()
