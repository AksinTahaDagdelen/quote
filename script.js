const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteTwitter = document.getElementById("twitter");
const quoteNewQuote = document.getElementById("new-quote");

//RANDOM NEW QUOTE

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  //AUTHOR EXIST
  if (!quote.author) {
    quoteAuthor.textContent = "UNKNOW";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  //QUOTE LENGTH
  if (!quote.text.length > 120) {
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;

  console.log(quote);
}

//TWEEET
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}
