# Quiz App

A simple quiz application built with HTML, CSS, and JavaScript. The app dynamically loads questions, handles user interactions, and displays the final score.

---

## Features

- Dynamic question rendering.
- Feedback for correct and incorrect answers.
- Displays the correct answer after selection.
- Keeps track of the score.
- Allows retesting the quiz.
- Mobile-friendly and responsive design.

---

## How It Works

1. The application loads a set of questions from the `questionData` array.
2. Users select an answer for each question:
   - Correct answers are highlighted in green.
   - Incorrect answers are highlighted in red, and the correct answer is revealed.
3. After answering, all buttons are disabled, and hover effects are removed.
4. The "Next" button appears to move to the next question.
5. At the end of the quiz, the user’s score is displayed along with an option to retake the quiz.

---

## Tech Stack

- **HTML**: Structure of the application.
- **CSS**: Styling and responsive design.
- **JavaScript**: Logic for dynamic question rendering and user interaction.

---

## Code Overview

### Question Data
```javascript
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
  // Additional questions...
];
