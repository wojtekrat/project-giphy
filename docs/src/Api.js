class Api {

    constructor() {
        this.gifsToLoad = 42;
        this.gifsLoaded = 21;
        this.userInput = '';
        document.querySelector('#search-button').addEventListener('click', () => this.searchGifs());
        document.querySelector('#more').addEventListener('click', () => this.getMoreGifs());
    }

    generateGifs(response) {
        for (let i = 0; i < 21; i++) {
            let giphyURL = response.data[i].images.original.url;
            let imgNr = "img" + i;
            let divNr = "div" + i;

            $("<img/>", {src: giphyURL, id: imgNr, class: "gifs"}).appendTo("#content");
            $("<a>", {href: giphyURL, "data-lightbox": "giffie", id: divNr, class: "gif-overlay"},
                "<a/>").appendTo("#overlay");
        }
    }

    clearContentWrapper() {
        document.querySelector('#content').innerHTML = "";
        document.querySelector('#overlay').innerHTML = "";
    }

    randomGifs() {
        this.clearContentWrapper();

        let randomURL = "https://api.giphy.com/v1/gifs/trending?api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543";
        $.ajax({url: randomURL, method: 'GET'}).done((response) => this.generateGifs(response));
    }

    searchGifs() {
        this.clearContentWrapper();

        let userInput = $("#search-input").val().trim().replace(/ /g, "+");

        if (userInput === '') {
            return this.randomGifs();
        }

        this.userInput = userInput;
        this.gifsToLoad = 42;
        this.gifsLoaded = 21;
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=150";

        $.ajax({url: queryURL, method: 'GET'}).done((response) => this.generateGifs(response));
    }

    getMoreGifs() {

        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + this.userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=150";
        let gifsToLoad = this.gifsToLoad;
        let gifsLoaded = this.gifsLoaded;

        $.ajax({url: queryURL, method: 'GET'}).done(function (response) {
            for (let i = gifsLoaded; i < gifsToLoad; i++) {
                let giphyURL = response.data[i].images.original.url;
                let imgNr = "img" + i;
                let divNr = "div" + i;

                $("<img/>", {src: giphyURL, id: imgNr, class: "gifs"}).appendTo("#content");
                $("<a>", {href: giphyURL, "data-lightbox": "giffie", id: divNr, class: "gif-overlay"},
                    "<a/>").appendTo("#overlay");
            }
        });
        this.gifsToLoad += 21;
        this.gifsLoaded += 21;
    }
}

export default Api;