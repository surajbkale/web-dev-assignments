import { quizData } from "./data.js";

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const formEl = document.getElementById("quizForm");
const resultEl = document.getElementById("result");
const quizBox = document.getElementById("quizBox");

let currentQuiz = 0;
let score = 0;

// Load a function
function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

// Deselect all options
function deselectAnswers() {
  const options = document.getElementsByName("option");
  options.forEach((opt) => (opt.checked = false));
}

// Get selected option
function getSelected() {
  const options = document.getElementsByName("option");
  let selected = undefined;
  options.forEach((opt) => {
    if (opt.checked) selected = opt.value;
  });
  return selected;
}

// Handle form submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      formEl.classList.add("hidden");
      resultEl.classList.remove("hidden");
      resultEl.innerText = `You scored ${score}/${quizData.length}🎉`;
    }
  } else {
    alert("Please select an option!");
  }
});

loadQuiz();
