(function() {
    'use strict';

    var main = angular.module("main");

    main.controller("PortfolioCtrl", ["$scope", "utils", function($scope, utils) {
        /*============================================
        Project thumbs - Masonry
        ==============================================*/
        $('#projects-container').css({ visibility: 'visible' });

        $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            columnWidth: 350,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 20
        });

        utils.scrollSpyRefresh();
        utils.waypointsRefresh();

        /*============================================
        Filter Projects
        ==============================================*/
        var filters = [];

        $('#filter-works ul').each(function (i) {
            filters[i] = {
                name: $(this).data('filter'),
                val: '*'
            };
        });

        $('#filter-works a').click(function (e) {
            e.preventDefault();

            closePreview();

            $(this).parents('ul').find('li').removeClass('active');

            $(this).parent('li').addClass('active');

            for (var i = 0; i < filters.length; i++) {
                if ($(this).data(filters[i].name)) { filters[i].val = $(this).data(filters[i].name); }
            }

            $('.project-item').each(function () {

                var match;

                for (var i = 0; i < filters.length; i++) {
                    if ($(this).is(filters[i].val)) { match = true; }
                    else { match = false; break; }
                }

                if (match) {
                    $(this).removeClass('filtered');
                }
                else {
                    $(this).addClass('filtered');
                }

            });

            $('#projects-container').masonry('reload');

            var results = $('.project-item').not('.filtered').length;
            $('.filter-results span').html(results + '');
            $('.filter-results').slideDown();


            utils.scrollSpyRefresh();
            utils.waypointsRefresh();
        });

        /*============================================
        Project Preview
        ==============================================*/
        $('.project-item').click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) { return false; }
            $('.project-item').removeClass('active');


            var elem = $(this);

            var previewScrollTarget = $('#preview-scroll').offset().top-120;
            $.scrollTo(previewScrollTarget,600, {});

            $('#preview-loader').addClass('show');

            if ($('#project-preview').hasClass('open')) {
                closePreview();
                elem.addClass('active');
                setTimeout(function () {
                    buildPreview(elem);
                }, 1000);
            } else {
                elem.addClass('active');
                buildPreview(elem);
            }

        });

        $('.close-preview').click(function (e) {
            e.preventDefault();

            closePreview();
        });

        function buildPreview(elem) {

            var previewElem = $('#project-preview'),
                title = elem.find('.project-title').text(),
                descr = elem.find('.project-description').html();

            previewElem.find('.preview-title').text(title);

            previewElem.find('#preview-details ul').empty();
            elem.find('.project-attributes .newline').each(function () {
                previewElem.find('#preview-details ul').append('<li>' + $(this).html() + '</li>')
            });

            previewElem.find('#preview-content').html(descr);

            /*----Project with Image-----*/
            if (elem.find('.project-media').data('images')) {

                var slidesHtml = '<ul class="slides">',
                    slides = elem.find('.project-media').data('images').split(',');

                for (var i = 0; i < slides.length; ++i) {
                    slidesHtml = slidesHtml + '<li><img src=' + slides[i] + ' alt=""></li>';
                }

                slidesHtml = slidesHtml + '</ul>';
                previewElem.find('#preview-media').addClass('flexslider').html(slidesHtml);

                $('#preview-media img').load(function () {
                    $('#preview-media.flexslider').flexslider({
                        slideshowSpeed: 3000,
                        animation: 'slide',
                        pauseOnAction: false,
                        pauseOnHover: true,
                        start: function () {
                            setTimeout(function () {
                                openPreview();
                                $('#preview-loader').removeClass('show');
                                $(window).trigger('resize');
                            }, 1000);
                        }
                    });
                });

            }

            /*----Project with Video-----*/
            if (elem.find('.project-media').data('video')) {

                var media = elem.find('.project-media').data('video');

                previewElem.find('#preview-media').html(media);

                $('#preview-media iframe').load(function () {
                    $('#preview-media').fitVids();

                    setTimeout(function () {
                        openPreview();
                        $('#preview-loader').removeClass('show');
                    }, 1000);

                });
            }
        }

        function openPreview() {

            $('#project-preview-wrapper').slideDown(600, function () {
                utils.scrollSpyRefresh();
                utils.waypointsRefresh();
            });
            $('#project-preview').addClass('open');

        }

        function closePreview() {

            $('#project-preview-wrapper').slideUp(600, function () {
                if ($('#preview-media').hasClass('flexslider')) {
                    $('#preview-media').removeClass('flexslider')
                        .flexslider('destroy');
                }

                $('#preview-media').html('');
                utils.scrollSpyRefresh();
                utils.waypointsRefresh();
            });
            $('#project-preview').removeClass('open');
            $('.project-item').removeClass('active');
        }
    }]);
})()