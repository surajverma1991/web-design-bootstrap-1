$(document).ready(function() {
    'use strict'
    $(".wrapper-header li a").on('click', function() {
        var targetSec = $(this).text();
        $('html, body').animate({
            scrollTop: $('#' + targetSec).offset().top
        }, 2000);
    });

    //document.oncontextmenu = new Function("return false;");

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } 
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


});