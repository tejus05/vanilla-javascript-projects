

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let isAutoPlaying = false;
let intervalId;

function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

updateScoreElement();
// if(!score){
//   score={
//     wins:0,
//     losses:0,
//     ties:0
//   };
// }

document.querySelector('.js-rockButton').addEventListener('click', () => {
  playGame('Rock');
})
document.querySelector('.js-paperButton').addEventListener('click', () => {
  playGame('Paper');
})
document.querySelector('.js-scissorsButton').addEventListener('click', () => {
  playGame('Scissors');
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  }
  if (event.key === 'p') {
    playGame('Paper');
  }
  if (event.key === 's') {
    playGame('Scissors');
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie!';
    }
    else if (computerMove === 'Paper') {
      result = 'You Lose!';
    }
    else {
      result = 'You Win!';
    }
  }
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win!';
    }
    else if (computerMove === 'Paper') {
      result = 'Tie!';
    }
    else {
      result = 'You Lose!';
    }
  }
  else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose!';
    }
    else if (computerMove === 'Paper') {
      result = 'You Win!';
    }
    else {
      result = 'Tie!';
    }
  }
  if (result === 'You Win!') {
    score.wins++;
  }
  else if (result === 'You Lose!') {
    score.losses++;
  }
  else if (result == 'Tie!') {
    score.ties++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-results').innerHTML = `You picked <img src="images/${playerMove}.png" class="results"> Computer picked <img src="images/${computerMove}.png" class="results"> ${result} \n`;
}
function pickComputerMove() {
  let computerMove = '';
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}
// function displayResult () {
//   document.querySelector('.js-results').innerHTML = `You chose ${playerMove}. Computer chose ${computerMove}. ${result}`;
// }
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} | Losses : ${score.losses} | Ties : ${score.ties}`;
}