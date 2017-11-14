/*global $, jQuery, alert*/
$(function () {
    'use strict';
    $('nav.navbar li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 56
        }, 1000);
    });
});