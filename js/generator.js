$(document).ready(function(){

var quote;
var author;

  function getTheQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data:{
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(data) {
        quote = data.quoteText;
        author = data.quoteAuthor;

        $(".quote").html(quote); 

        // check if author is provided
        if(author){
          $(".author").html("- " + author);
          }
        else{
            $(".author").html("- Unknown")
            }
        }
      });
    };

getTheQuote(); //call function to load initial quote

$(".new_post").click(function(event){
  event.preventDefault();
  getTheQuote();
});
//call function when new quote button is clicked

function tweetQuote(){
    // event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " ---  " + author));
}

$(".tweet").click(function(){
  // event.preventDefault();
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
