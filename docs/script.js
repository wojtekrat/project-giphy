$(document).ready(function () {
    let navbarPosition = $("#navbar").offset().top;

    function stickyNavbar() {
        if ($(window).scrollTop() > navbarPosition) {
            $("#navbar").addClass("sticky");
            $('.search-input').css({
                'margin-left': "220px"
            });
            $('#logo').css({
                'position' : 'fixed'
            });
            $("#buttons").slideUp();
        } else {
            $("#navbar").removeClass("sticky");
            $('.search-input').css({
                'margin-left': "0px"
            });
            $('#logo').css({
                'position' : 'relative'
            });
            $("#buttons").slideDown();
        }
    }

    stickyNavbar();

    $(window).scroll(function () {
        stickyNavbar();
    });

});