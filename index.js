// Toggle functionality implemented
const bookMarkElement1 = document.querySelector('[data-js="bookMark1"]');

bookMarkElement1.addEventListener("click", () => {
  bookMarkElement1.classList.toggle("bookmark--active");
});

// Show answer functinality implemented
const showAnswerButton1 = document.querySelector(
  '[data-js="showAnswerButton1"]'
);
const answer1 = document.querySelector('[data-js="answer1"]');

showAnswerButton1.addEventListener("click", () => {
  if (answer1.classList.contains("card__answer--active")) {
    showAnswerButton1.textContent = "Show Answer";
    answer1.classList.remove("card__answer--active");
  } else {
    showAnswerButton1.textContent = "Hide Answer";
    answer1.classList.add("card__answer--active");
  }
});
