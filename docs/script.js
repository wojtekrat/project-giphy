function getInput() {
  userInput = $("#input")
  userInput = $(".search-input").val().trim();
  userInput = userInput.replace(/ /g, "+");
  queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=ACSF6DvX2932HZzH0n7O6loDtrvWa543&limit=150";
}

function jump(){
  let search = document.getElementById("value");
  let result = document.getElementById("input").value;
  search.innerHTML = result;
}
