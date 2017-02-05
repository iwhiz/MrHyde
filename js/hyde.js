
$(".nav li").on("click", function () {
    "use strict";
    $(".nav li").removeClass("active");
    $(this).addClass("active");
});

$(".navbar-brand").on("click", function () {
    "use strict";
    $(".nav li").removeClass("active");
});

$('.navbar-collapse ul li a').on('click', function () {
    "use strict";
    $('.navbar-collapse').collapse('hide'); //bootstrap 3.x by Richard
});