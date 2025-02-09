const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "I can resist everything except temptation.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Behind every great man, there is a woman rolling her eyes.",
    author: "Jim Carrey",
  },
  {
    quote:
      "If you think you are too small to make a difference, try sleeping with a mosquito.",
    author: "Dalai Lama",
  },
  {
    quote:
      "I am not afraid of death, I just don't want to be there when it happens.",
    author: "Woody Allen",
  },
  {
    quote:
      "My therapist says I have a fear of commitment. I’m afraid I’ll buy too many plants.",
    author: "Unknown",
  },
];

const quote = document.querySelector(".quote-container #quote");
const author = document.querySelector(".quote-container #author");

const length = quotes.length;
let index = Math.round(Math.random() * length);

quote.innerHTML = quotes[index].quote;
author.innerHTML = "- " + quotes[index].author;
