const form = document.querySelector('[data-js="form"]');

const firstCard = document.querySelector('[data-js="card1"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Populate the newly added card data

  const articleElement = document.createElement("article");
  articleElement.classList.add("card");

  const h2Element = document.createElement("h2");
  h2Element.textContent = data.question;
  h2Element.classList.add("card__question");

  const buttonShowAnswerElement = document.createElement("button");
  buttonShowAnswerElement.classList.add("card__question");
  buttonShowAnswerElement.textContent = "Show Answer";
  buttonShowAnswerElement.setAttribute("data-js", "showButton1");

  const answerParaElement = document.createElement("p");
  answerParaElement.classList.add("card__answer");
  answerParaElement.textContent = data.answer;
  answerParaElement.setAttribute("data-js", "revelAnswer1");

  const ulTagElement = document.createElement("ul");
  ulTagElement.classList.add("card__tag-list");

  const liTagElement = document.createElement("li");
  liTagElement.classList.add("card__tag-list-item");
  liTagElement.textContent = data.tag;

  ulTagElement.appendChild(liTagElement);
  articleElement.append(
    h2Element,
    buttonShowAnswerElement,
    answerParaElement,
    ulTagElement
  );

  firstCard.append(articleElement);

  const showButton1 = document.querySelector('[data-js="showButton1"]');
  const revelAnswer1 = document.querySelector('[data-js="revelAnswer1"]');
  showButton1.addEventListener("click", () => {
    if (revelAnswer1.classList.contains("card__answer--active")) {
      showButton1.textContent = "Show Answer";
      revelAnswer1.classList.remove("card__answer--active");
    } else {
      showButton1.textContent = "Hide Answer";
      revelAnswer1.classList.add("card__answer--active");
    }
  });
});

//Question length validation

const questionEntered = document.querySelector('[data-js="question"]');
const amountLeftForQuestion = document.querySelector(
  '[data-js="amountLeftForQuestion"]'
);
questionEntered.addEventListener("input", () => {
  amountLeftForQuestion.textContent = 150 - questionEntered.value.length;
});

//Answer length validation

const answerEntered = document.querySelector('[data-js="answer"]');
const amountLeftForAnswer = document.querySelector(
  '[data-js="amountLeftForAnswer"]'
);
answerEntered.addEventListener("input", () => {
  amountLeftForAnswer.textContent = 150 - answerEntered.value.length;
});
