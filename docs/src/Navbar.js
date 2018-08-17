class Navbar {

    navbarPosition = $("#navbar").offset().top;

    constructor() {
        window.addEventListener('scroll', this.sticky);
    }

    sticky = () => {
        if ($(window).scrollTop() > this.navbarPosition) {
            $("#navbar").addClass("sticky");
            $('.search-input').css({
                'margin-left': "220px"
            });
            $('#logo').css({
                'position': 'fixed'
            });
            $("#buttons").slideUp();
        } else {
            $("#navbar").removeClass("sticky");
            $('.search-input').css({
                'margin-left': "0px"
            });
            $('#logo').css({
                'position': 'relative'
            });
            $("#buttons").slideDown();
        }
    };

}

export default Navbar;