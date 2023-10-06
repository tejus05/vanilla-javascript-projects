const answerButtons = document.querySelectorAll('.button');
const question = document.querySelector('.question');
let count = 1;
let correct = 0;
let incorrect = 0;

function generateNonRepeatingRandomNumbers(min, max) {
  // Create an array of numbers in the specified range
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Return a function that will provide non-repeating random numbers
  let index = 0;
  return function () {
    if (index < numbers.length) {
      return numbers[index++];
    } else {
      return null; // You can return null or take another action when all numbers are used
    }
  };
}

// result.results[i]
// question, correct_answer, incorrect_answers

async function updateQuiz() {
  answerButtons.forEach((answer) => {
    answer.classList.remove("correct", "incorrect");
    answer.removeEventListener("click", tempFunction);
  });


  let i = Math.floor(Math.random() * 5)
  const QUIZ_URL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
  const response = await fetch(QUIZ_URL);
  const result = await response.json();
  question.innerText = result.results[i].question;
  question.classList.remove('inactive');
  let answersList = [result.results[i].correct_answer, ...result.results[i].incorrect_answers];
  const generateNumber = generateNonRepeatingRandomNumbers(0, 3);

  let numberList = [];

  for (let i = 0; i < 4; i++) {
    let randomNumber = generateNumber();
    numberList.push(randomNumber);
  }


  
  answerButtons.forEach((answer, index) => {
    answer.innerHTML = answersList[numberList[index]];
    answer.setAttribute("data-answer", answersList[numberList[index]]);
    answer.classList.remove("inactive");

    answer.addEventListener("click", tempFunction);
  });

  function tempFunction() {
    const selectedAnswer = this.getAttribute("data-answer");

    if (selectedAnswer === result.results[i].correct_answer) {
      this.classList.add("correct");
      correct++;
    } else {
      this.classList.add("incorrect");
      incorrect++;
    }

    document.querySelector(".next-button").style.display = "block";

    answerButtons.forEach((answer) => {
      answer.removeEventListener("click", tempFunction);
    });
  }

  
}


const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', () => {
  if (count <= 5) {
    document.querySelector('.number').innerHTML = `${count} out of 5`;
    count++;
    nextButton.innerText = 'Next';
    updateQuiz();
    document.querySelector('.quiz').style.display = 'block';
  }
  else {
    document.querySelector('.quiz').innerHTML = `You've scored ${correct} out of 5`;
    nextButton.innerText = 'Restart';
    nextButton.addEventListener('click', () => {
        location.reload();
    });
  }
});


// async function updateQuiz() {
  
//   let i = Math.floor(Math.random() * 5)
//   const QUIZ_URL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
//   const response = await fetch(QUIZ_URL);
//   const result = await response.json();
//   question.innerText = result.results[i].question;
//   let answersList = [result.results[i].correct_answer, ...result.results[i].incorrect_answers];
//   const generateNumber = generateNonRepeatingRandomNumbers(0, 3);

//   let numberList = [];

//   for (let i = 0; i < 4; i++) {
//     let randomNumber = generateNumber();
//     numberList.push(randomNumber);
//   }

//   answerButtons.forEach((answer, index) => {
//     answer.innerHTML = answersList[numberList[index]];
//   });

//   answerButtons
// }

// updateQuiz();