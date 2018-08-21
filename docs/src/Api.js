class Api {

    constructor() {
        this.gifsToLoad = 20;
        this.gifsLoaded = 0;
        document.querySelector('#search-button').addEventListener('click', () => this.getObject());
    }


    randomGifs = () => {
        let randomURL = "http://api.giphy.com/v1/gifs/trending?api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543";
        console.log("dsa");
        $.ajax({url: randomURL, method: 'GET'}).done(function (response) {
            for (let i = 0; i < 21; i++) {
                let giphyURL = response.data[i].images.original.url;
                let imgNr = "img" + i;
                let divNr = "div" + i;

                $("<img/>", {src: giphyURL, id: imgNr, class: "gifs"}).appendTo("#content");
                $("<a>", {href: giphyURL, "data-lightbox": "giffie", id: divNr, class: "gif-overlay"},
                    "<a/>").appendTo("#overlay");
            }
        });
    };


    getObject() {
        let userInput = $("#search-input").val().trim().replace(/ /g, "+");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=30";

        let gifsToLoad = this.gifsToLoad;
        let gifsLoaded = this.gifsLoaded;

        $.ajax({url: queryURL, method: 'GET'}).done(function (response) {
            let resposneArguments = response.data.length;
            let numToGenerate;

            if (resposneArguments > gifsToLoad) {
                numToGenerate = gifsToLoad;
            } else {
                numToGenerate = resposneArguments;
            }

            for (let i = 0; i < 21; i++) {
                let giphyURL = response.data[i].images.original.url;
                let imgNr = "img" + i;
                let divNr = "div" + i;

                $("<img/>", {src: giphyURL, id: imgNr, class: "gifs"}).appendTo("#content");
                $("<a>", {href: giphyURL, "data-lightbox": "giffie", id: divNr, class: "gif-overlay"},
                    "<a/>").appendTo("#overlay");
            }
        });
    };

}

export default Api;