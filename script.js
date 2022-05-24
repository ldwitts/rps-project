'use strict';

// global variables
let playerWins = 0;
let computerWins = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.reset');

resetButton.disabled = true;

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
resetButton.addEventListener('click', reset);

///////////// Functions /////////////
// Get input from the user and make it uppercase
function getPlayerSelection() {
  let playerSelection = prompt('Please enter "rock", "paper", or "scissors"!');
  playerSelection = playerSelection.toUpperCase();
  return playerSelection;
}

// Generate and return a random move in the form of an uppercase string
function getComputerSelection() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  let computerMove = '';

  switch (randomNum) {
    case 1:
      computerMove = 'rock';
      break;
    case 2:
      computerMove = 'paper';
      break;
    case 3:
      computerMove = 'scissors';
      break;
  }
  return computerMove.toUpperCase();
}

function playRound() {
  const computerSelection = getComputerSelection();
  const playerSelection = String(this.classList[0]).toUpperCase();
  let winner = '';

  if (playerSelection === computerSelection) {
    result.textContent = `Tie!`;
  } else {
    switch (playerSelection) {
      case 'ROCK':
        computerSelection === 'SCISSORS'
          ? (winner = 'player')
          : (winner = 'computer');
        break;
      case 'PAPER':
        computerSelection === 'ROCK'
          ? (winner = 'player')
          : (winner = 'computer');
        break;
      case 'SCISSORS':
        computerSelection === 'PAPER'
          ? (winner = 'player')
          : (winner = 'computer');
        break;
    }
    if (winner === 'player') {
      playerWins++;
      result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerWins++;
      result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }

  playerScore.textContent = `Player score: ${playerWins}`;
  computerScore.textContent = `Computer score: ${computerWins}`;

  if (playerWins === 5 || computerWins === 5) {
    if (playerWins === 5) {
      result.textContent = `Congratulations! You won five times! You're the winner!`;
    } else {
      result.textContent = `Sorry, you lose! The computer won five times first!`;
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.disabled = false;
  }
}

function reset() {
  playerWins = 0;
  computerWins = 0;
  playerScore.textContent = 'Player score: 0';
  computerScore.textContent = 'Computer score: 0';
  result.textContent = '';
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  resetButton.disabled = true;
}

// function playRoundRock() {
//   const computerSelection = getComputerSelection();
//   const playerSelection = 'ROCK';
//   if (playerSelection === computerSelection) {
//     console.log('tie', this.classList[0]);
//   } else {
//     computerSelection === 'SCISSORS' ? playerWins++ : computerWins++;
//   }
// }

// function playRoundPaper() {
//   const computerSelection = getComputerSelection();
//   const playerSelection = 'PAPER';
//   if (playerSelection === computerSelection) {
//     console.log('tie');
//   } else {
//     computerSelection === 'ROCK' ? playerWins++ : computerWins++;
//   }
// }

// function playRoundScissors() {
//   const computerSelection = getComputerSelection();
//   const playerSelection = 'SCISSORS';
//   if (playerSelection === computerSelection) {
//     console.log('tie');
//   } else {
//     computerSelection === 'PAPER' ? playerWins++ : computerWins++;
//   }
// }

// Main game logic, compare two selections and return the result
// function playRound(playerSelection, computerSelection) {
//   let result = '';

//   // Messages to display if the player wins or loses
//   let winMessage = `You picked ${playerSelection} and the computer picked \
// ${computerSelection}. Congratulations, you win!`;
//   let loseMessage = `You picked ${playerSelection} and the computer picked \
// ${computerSelection}. You lose, better luck next time.`;

//   // Compare selections and determine appropriate result
//   if (playerSelection === computerSelection) {
//     result = `It's a tie! You both picked ${computerSelection.toLowerCase()}!`;
//   } else if (playerSelection === 'ROCK') {
//     computerSelection === 'SCISSORS'
//       ? (result = winMessage)
//       : (result = loseMessage);
//   } else if (playerSelection === 'SCISSORS') {
//     computerSelection === 'PAPER'
//       ? (result = winMessage)
//       : (result = loseMessage);
//   } else if (playerSelection === 'PAPER') {
//     computerSelection === 'ROCK'
//       ? (result = winMessage)
//       : (result = loseMessage);
//   } else {
//     result =
//       'Invalid entry. Next time please enter "rock", "paper", or' +
//       ' "scissors"!';
//   }

//   if (result === winMessage) playerWins++;
//   else if (result === loseMessage) computerWins++;

//   return result;
// }

// function consoleGame() {
//   let numberOfRounds = prompt(`How many rounds do you want to play?`);
//   numberOfRounds = Number(numberOfRounds);
//   for (let i = 0; i < numberOfRounds; i++) {
//     console.log(
//       playRound(getPlayerSelection(), getComputerSelection()),
//       `Player wins: ${playerWins} Computer wins: ${computerWins}`
//     );
//   }
//   playerWins > computerWins
//     ? console.log(
//         `You win the game! You had ${playerWins} wins and the computer had ${computerWins}.`
//       )
//     : console.log(
//         `You lose the game! You had ${playerWins} wins and the computer had ${computerWins}.`
//       );
// }
