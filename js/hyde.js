/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $(".nav li").click(function () {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(".navbar-brand").click(function () {
        $(".nav li").removeClass("active");
    });

    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-collapse').collapse('hide'); //bootstrap 3.x by Richard
    });
});