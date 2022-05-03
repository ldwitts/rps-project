// 'use strict';

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

const computerSelection = computerPlay();
console.log(computerSelection);
let playerSelection = prompt('Please enter "rock", "paper", or "scissors"!');
playerSelection = playerSelection.toUpperCase();

function playRound(playerSelection, computerSelection) {
  let result = '';
  if (playerSelection === computerSelection) {
    result = `It's a tie! You both picked ${computerSelection.toLowerCase()}!`;
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));
