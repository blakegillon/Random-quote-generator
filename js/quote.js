$(document).ready(function() {
  

  function random() {

  var quotes = ["\"There is nothing permanent except change.\" - Heracltius"
  ,"\"You cannot shake hands with a clenched fist.\" - Indira Gandhi",
  "\"Learning never exhausts the mind.\" - Leonardo da Vinci",
  "\"All that we see or seem is but a dream within a dream.\" - Edgar Allan Poe",
  "\"Good judgement comes from experience, and a lot of that comes from bad judgement.\" - Will Rogers",
  "\"It is far better to be alone, than to be in bad company.\" - George Washington",
  "\"The journey of a thousand miles begins with one step.\" - Lao Tzu"]

  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote = randomQuote.split("randomQuote");
  $("#quote").text(quote[0]);
}

$("#quoteBtn").on("click", function() {
	random();
});
});

  
$(".twitter-share-button").click(function() {
  $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
});
