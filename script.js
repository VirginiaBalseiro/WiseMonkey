
var url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en";

$(document).ready(function() {
function getQuote() {
  $.getJSON(url, function(data) {
    $("#quote").html(data.quoteText);
    $("#author").html(data.quoteAuthor);
    tweetQuote();
  });
}

$("#newQuote").on("click", function() {
  getQuote();
});
  function tweetQuote(){
    var twitterURL = 'https://twitter.com/intent/tweet?text="';
    var quote = $("#quote").text();
    var author = $("#author").text();
    twitterURL += quote + '" - ' + author;

    $("#tweet").attr("href", twitterURL);
  }
});//end of document ready
