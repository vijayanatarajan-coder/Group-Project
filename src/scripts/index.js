import { createHeader } from "./header.js";
import { loadAbout } from "./about.js";
import { loadProjectContent } from "./projects.js";
import { loadFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("header");
  headerElement.appendChild(createHeader());
});
loadAbout();
loadProjectContent();
loadFooter();

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
  "The best way to predict the future is to invent it. - Alan Kay",
];

let quoteIndex = 0;

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.classList.remove("show");
  setTimeout(() => {
    quoteElement.textContent = quotes[quoteIndex];
    quoteElement.classList.add("show");
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 500);
}

setInterval(displayQuote, 5000);
displayQuote();
