const questionData = [
  {
    question: '1. Which planet is known as the "Red Planet"?',
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "2. Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "3. What is the capital city of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "4. What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: '5. Who is considered the "Father of Modern Physics"?',
    answers: [
      { text: "Albert Einstein", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Stephen Hawking", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "6. What is the chemical symbol for water?",
    answers: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "N2", correct: false },
    ],
  },
  {
    question: '7. Which animal is known as the "King of the Jungle"?',
    answers: [
      { text: "Elephant", correct: false },
      { text: "Lion", correct: true },
      { text: "Tiger", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "8. What is the currency of Japan?",
    answers: [
      { text: "Euro", correct: false },
      { text: "Dollar", correct: false },
      { text: "Yen", correct: true },
      { text: "Pound", correct: false },
    ],
  },
  {
    question: '9. Who wrote the famous play "Hamlet"?',
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "10. What is the highest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Everest", correct: true },
      { text: "Kilimanjaro", correct: false },
      { text: "Denali", correct: false },
    ],
  },
];

let questionDisplay = document.querySelector(".questions h3");
let answersButton = document.querySelector(".answer");
let nextButton = document.querySelector(".next");
let reTest = document.querySelector(".retest");
let currentIndex = 0;
let score = 0;
function startQuiz() {
  currentIndex = 0;
  score = 0;
  loadQuiz();
}
function reset() {
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

function loadQuiz() {
  reset();
  
  const ans = questionData[currentIndex].answers;
  nextButton.style.display = "none";
  reTest.style.display = "none";
  questionDisplay.innerHTML = questionData[currentIndex].question;
  ans.forEach((element) => {
    let btn = document.createElement("button");
    btn.innerHTML = element.text;
    btn.dataset.correct = element.correct;

    btn.addEventListener("click", (ele) => {
      const selectedButton = ele.target;
      const correct = selectedButton.dataset.correct === "true";

      if (correct) {
        selectedButton.classList.add("correct");
        score++;
      } else {
        selectedButton.classList.add("incorrect");
      }
      
      Array.from(answersButton.children).forEach((button) => {
        button.disabled = true;
        button.classList.add("clicked")   
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
      });
      nextButton.style.display = "block";
    });
    answersButton.appendChild(btn);
  });
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questionData.length) {
    loadQuiz();
    
  } else {
    questionDisplay.innerHTML = `Quiz Ended your Score is ${score}/10`;
    reTest.style.display = "block";
    reset();
    nextButton.style.display = "none";
    reTest.addEventListener("click", () => {
      startQuiz();
    });
  }
});

startQuiz();
