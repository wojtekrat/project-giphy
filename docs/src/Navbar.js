class Navbar {

    navbarPosition = $("#navbar").offset().top;

    constructor() {
        window.addEventListener('scroll', this.sticky);
    }

    sticky = () => {
        if ($(window).scrollTop() > this.navbarPosition) {
            $("#navbar").addClass("sticky");
            $('#search-input').css({
                'margin-left': "240px"
            });
            $('#logo').css({
                'position': 'fixed',
                'padding': '5px 15px',
                'align-items': 'center'
            })
            ;
            $("#hashtags-container").slideUp();
        } else {
            $("#navbar").removeClass("sticky");
            $('#search-input').css({
                'margin-left': "0px"
            });
            $('#logo').css({
                'position': 'relative',
                'padding': '10px 0',
                'align-items': 'initial'
            });
            $("#hashtags-container").delay(50).slideDown();
        }
    };

}

export default Navbar;