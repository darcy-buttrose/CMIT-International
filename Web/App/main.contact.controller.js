(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("ContactCtrl", ["$scope", "utils", "contacts", function($scope, utils,contacts) {
        $scope.SendMessage = function() {
            var buttonCopy = $('#contact-form button').html(),
                errorMessage = $('#contact-form button').data('error-message'),
                sendingMessage = $('#contact-form button').data('sending-message'),
                okMessage = $('#contact-form button').data('ok-message'),
                hasError = false;

            $('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>' + sendingMessage);

            contacts.post({
                From: $scope.ContactEmail,
                Subject: $scope.ContactName,
                Message: $scope.ContactMessage
            })
            .success(
                function(data, status) {
                    $('#contact-form button').html('<i class="fa fa-check"></i>' + okMessage);
                    setTimeout(function () {
                        $('#contact-form button').html(buttonCopy);
                    }, 2000);
                }
            )
            .error(
                function(data, status) {
                    $('#contact-form button').html('<i class="fa fa-check"></i>' + errorMessage);
                    setTimeout(function () {
                        $('#contact-form button').html(buttonCopy);
                    }, 2000);
                }
            );
        };
    }]);
})()