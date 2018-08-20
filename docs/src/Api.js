class Api {

    constructor() {
        document.querySelector('.search-button').addEventListener('click', () => this.getObject(21));
    }


    randomGifs = () => {
        let randomURL = "http://api.giphy.com/v1/gifs/trending?api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543";
        console.log("dsa");
        $.ajax({url: randomURL, method: 'GET'}).done(function (response) {
            for (let i = 0; i < 21; i++) {
                let giphyURL = response.data[i].images.original.url;
                let imgNr = "img" + i;
                let divNr = "div" + i;

                $("<img/>", {id: imgNr, class: "gifs"}).appendTo("#content");

                $("#" + imgNr).attr("src", giphyURL);

                $("<a>", {id: divNr, class: "gif-overlay"}, "<a/>").appendTo("#overlay");

                $("#" + divNr).append("<a></a>").attr("href", giphyURL).attr("data-lightbox", "giffie");
            }
        });
    };


    getObject(num) {
        let userInput = $(".search-input").val().trim().replace(/ /g, "+");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=30";

        $.ajax({url: queryURL, method: 'GET'}).done(function (response) {
            let resposneArguments = response.data.length;
            let numToGenerate;

            if (resposneArguments > num) {
                numToGenerate = num;
            } else {
                numToGenerate = resposneArguments;
            }

            for (let i = 0; i < numToGenerate; i++) {
                console.log(resposneArguments);
                let giphyURL = response.data[i].images.original.url;
                let imgNr = "img" + i;
                let divNr = "div" + i;

                if ($("#img" + (numToGenerate - 1)).length > 0) {
                    $("#" + imgNr).attr("src", giphyURL);
                    $("#" + divNr)
                        .append("<a></a>")
                        .attr("href", giphyURL)
                        .attr("data-lightbox", "giffie");
                } else {
                    $("<img/>", {id: imgNr, class: "gifs"}).appendTo("#content");
                    $("#" + imgNr).attr("src", giphyURL);
                    $("<a>", {id: divNr, class: "gif-overlay"}, "<a/>").appendTo("#overlay");
                    $("#" + divNr).append("<a></a>").attr("href", giphyURL).attr("data-lightbox", "giffie");
                }
            }
        });
    };

}

export default Api;