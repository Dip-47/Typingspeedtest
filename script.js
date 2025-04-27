const quotes = [
 "The quick brown fox jumps over the lazy dog.",
 "Typing fast is a great skill to develop.",
 "Practice makes perfect in every aspect of life.",
 "Success is the sum of small efforts repeated daily."
];
let startTime;
let quoteText = document.getElementById("quote");
let inputText = document.getElementById("inputText");
let resultText = document.getElementById("result");
let errorMessage = document.getElementById("errorMessage");
let startBtn = document.getElementById("startBtn");
let submitBtn = document.getElementById("submitBtn");
let nextBtn = document.getElementById("nextBtn");
function startTest() {
 let randomIndex = Math.floor(Math.random() * quotes.length);
 quoteText.innerText = quotes[randomIndex];
 quoteText.style.display = "block";
 inputText.style.display = "block";
 inputText.value = "";
 inputText.disabled = false;
 inputText.focus();
 startBtn.style.display = "none";
 submitBtn.style.display = "block";
 nextBtn.style.display = "none";
 resultText.style.display = "none";
 errorMessage.style.display = "none";
 startTime = new Date().getTime();
}
function checkTyping() {
 if (inputText.value.trim() === "") {
 errorMessage.style.display = "block";
 return;
 }
 errorMessage.style.display = "none";
 let typedText = inputText.value;
 let quote = quoteText.innerText;
 let endTime = new Date().getTime();
 let timeTaken = (endTime - startTime) / 1000;
 let wordsTyped = quote.split(" ").length;
 let speed = Math.round((wordsTyped / timeTaken) * 60);
 let accuracy = ((typedText.length / quote.length) * 100).toFixed(2);
 resultText.innerText = `Your typing speed is ${speed} WPM with ${accuracy}% accuracy.`;
 resultText.style.display = "block";
 inputText.disabled = true;
 submitBtn.style.display = "none";
 nextBtn.style.display = "block";
}
