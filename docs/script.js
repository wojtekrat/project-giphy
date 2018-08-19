$(document).ready(function () {
    /* KOD KUBY */
    let navbarPosition = $("#navbar").offset().top;

    function stickyNavbar() {
        if ($(window).scrollTop() > navbarPosition) {
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
    }

    stickyNavbar();

    $(window).scroll(function () {
        stickyNavbar();
    });
    /* KOD ADRIANA */

    /* ZMIENNE GLOBALNE */
        let queryURL;
        let randomURL;
        let userInput;
        let giphyURL;
        let imgNr;
        let resposneArguments;
        let devChoice;
        let numToGenerate;
        let divNr;
    /* WYWOŁANIE FUNKCJI WYŚWIETLAJĄCEJ NAJPOPULARNIEJSZE GIFY PO ZAŁADOWANIU STRONY */
        randomGifs();
    /* NAJPOPULARNIEJSZE GIFY */
    function randomGifs() {
        randomURL = "http://api.giphy.com/v1/gifs/trending?api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543";
        $.ajax({ url: randomURL, method: 'GET' }).done(function (response) {
            for (let i = 0; i < 21; i++) {
                giphyURL = response.data[i].images.original.url;
                imgNr = "img" + i;
                $("<img/>", {
                    id: imgNr, class: "gifs"}).appendTo("#content");
                $("#" + imgNr).attr("src", giphyURL);
                divNr = "div" + i;
                $("<a>", {id: divNr, class: "gif-overlay"}, "<a/>").appendTo("#overlay");
                $("#" + divNr).append("<a></a>").attr("href", giphyURL).attr("data-lightbox", "giffie");
                

            };
        });
    };
    /* FUNKCJA ZWRACAJĄCA LOSOWĄ LICZBĘ */
    function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
     }

    /* FUNKCJA POBIERAJĄCA INPUT UŻYTKOWNIKA ORAZ GENERUJĄCA LINK DO API */
    function getInput() {
        userInput = $(".search-input").val().trim();
        userInput = userInput.replace(/ /g, "+");
        queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=150";
    }

    /* FUNKCJA ZWRACAJĄCA OBJEKT DATA Z GIPHY API Z ARGUMENTEM ILE MA ICH WYGENEROWAĆ */
    function getObject(num) {
        devChoice = num;
        $.ajax({ url: queryURL, method: 'GET' }).done(function (response) {
            /* ZAWIERA LICZBĘ ARGUMENTÓW Z OBJEKTU DATA GIPHY API */
            resposneArguments = response.data.length;
            /* SPRAWDZA, CZY GIPHY ZWRACA TAKĄ SAMĄ LUB WIĘKSZĄ LICZBĘ ELEMENTÓW, JAKĄ WYBRAŁ UŻYTKOWNIK. JEŚLI NIE, WYŚWIETLI TYLE ILE ZWRÓCIŁ GIPHY */
                if(resposneArguments > devChoice) {
                    numToGenerate = devChoice;
                }
                else {
                    numToGenerate = resposneArguments;
                };
                /* GENERUJE NOWE GIFY POCZĄWSZY OD POZYCJI 0 KOŃCZĄC NA POZYCJI W FUNKCJI howMany */
                for (let i = 0; i < numToGenerate; i++) {
                    giphyURL = response.data[i].images.original.url;
                    console.log(resposneArguments);
                    var imgNr = "img" + i;
                    if ($("#img"+(numToGenerate-1)).length > 0) {
                        $("#" + imgNr).attr("src", giphyURL);
                        divNr = "div" + i;
                        $("<a>", { id: divNr, class: "gif-overlay" }, "<a/>").appendTo("#overlay");
                        $("#" + divNr)
                          .append("<a></a>")
                          .attr("href", giphyURL),("data-lightbox", "giffie")
                          .attr("data-lightbox", "giffie");
                     }
                    else {
                        $("<img/>", {id: imgNr, class: "gifs"
                        }).appendTo("#content");
                        $("#" + imgNr).attr("src", giphyURL);
                        
                        };
                };
        });
    };

    $(".search-button").click(function(){
        getInput();
        getObject(20);
    });
    


});