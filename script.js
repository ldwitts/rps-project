'use strict';

// Generate and return a random move in the form of an uppercase string
function computerPlay() {
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

// Assign a random move to the computer
const computerSelection = computerPlay();
// console.log(computerSelection);

// Get input from the user and make it uppercase
let playerSelection = prompt('Please enter "rock", "paper", or "scissors"!');
playerSelection = playerSelection.toUpperCase();

// Main game logic, compare two selections and return the result
function playRound(playerSelection, computerSelection) {
  let result = '';
  let winMessage = `You picked ${playerSelection} and the computer picked\
 ${computerSelection}. Congratulations, you win!`;
  let loseMessage = `You picked ${playerSelection} and the computer picked\
 ${computerSelection}. You lose, better luck next time.`;

  // Result for a tie
  if (playerSelection === computerSelection) {
    result = `It's a tie! You both picked ${computerSelection.toLowerCase()}!`;
  } else if (playerSelection === 'ROCK') {
    computerSelection === 'SCISSORS'
      ? (result = winMessage)
      : (result = loseMessage);
  } else if (playerSelection === 'SCISSORS') {
    computerSelection === 'PAPER'
      ? (result = winMessage)
      : (result = loseMessage);
  } else if (playerSelection === 'PAPER') {
    computerSelection === 'ROCK'
      ? (result = winMessage)
      : (result = loseMessage);
  } else {
    result =
      'Invalid entry. Next time please enter "rock", "paper", or' +
      ' "scissors"!';
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));
