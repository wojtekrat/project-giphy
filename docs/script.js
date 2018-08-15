$(document).ready(function () {
    let navh = $("nav").offset().top;

    function checkPos() {
        if ($(window).scrollTop() > navh) {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky");
        }
    }

    checkPos();

    $(window).scroll(function () {
        checkPos();
    })
});