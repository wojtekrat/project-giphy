$(document).ready(function () {
    $(".search-button").click(function(){
        let userInput = $(".search-input").val().trim();
        userInput = userInput.replace(/ /g, "+");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=100";

        $.ajax({ url: queryURL, method: 'GET' }).done(function (response) {

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            for (let i=0;i<20;i++){
                var giphyURL = response.data[getRandomInt(0, 100)].images.original.url;
                var imgNr = "img"+i;
                $('<img/>', {
                    'id': imgNr
                }).appendTo("#window");
                $("#"+imgNr).attr("src", giphyURL);
            }
            console.log($("#window").length);

        });

    });
    


});