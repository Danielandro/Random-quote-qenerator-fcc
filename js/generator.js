//http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en - json
//https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en - jsonp

$(document).ready(function(){

var quote;
var author;
//declare global variables

  function getTheQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en",
      jsonp: "jsonp",
      dataType: "jsonp",
      data:{
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
//using $.ajax method, fetch quote & author data from the Forismatic API

      success: function(data) {
        quote = data.quoteText;
        author = data.quoteAuthor;
//store fetched data in previously declared global variables

        $(".quote").html(quote);
//loads an initial quote when page loads

        if(author){
          $(".author").html("- " + author);
          }
        else{
            $(".author").html("- Unknown")
            }
//set default author & replacement value if author data not provided
        }
      });
    };

getTheQuote();
//call function to load initial quote

$(".new_post").click(function(){
  event.preventDefault();
  getTheQuote();
});
//call function when new quote button is clicked

function tweetQuote(){
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " ---  " + author));
}

$(".tweet").click(function(){
  event.preventDefault();
  tweetQuote();
});

});

/*  - MY ORIGINAL ATTEMPT!!
$(document).ready(function(){
  $(".new_post").click(function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote=?", function(data){
      $(".quote").html(data.quoteText);
      $(".author").html(data.quoteAuthor);
    });

    });
    $(".tweet").click(function(){
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIcomponent())

    });

  });*/
