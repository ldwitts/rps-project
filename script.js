'use strict';

// global variables
let playerWins = 0;
let playerLosses = 0;
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', playRoundRock);
paperButton.addEventListener('click', playRoundPaper);
scissorsButton.addEventListener('click', playRoundScissors);

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

function playRoundRock() {
  const computerSelection = getComputerSelection();
  const playerSelection = 'ROCK';
  if (playerSelection === computerSelection) {
    console.log('tie');
  } else {
    computerSelection === 'SCISSORS' ? playerWins++ : playerLosses++;
  }
  console.log(`player: ${playerSelection} vs CPU: ${computerSelection}
  player wins: ${playerWins} CPU wins: ${playerLosses}`);
}

function playRoundPaper() {
  const computerSelection = getComputerSelection();
  const playerSelection = 'PAPER';
  if (playerSelection === computerSelection) {
    console.log('tie');
  } else {
    computerSelection === 'ROCK' ? playerWins++ : playerLosses++;
  }
  console.log(`player: ${playerSelection} vs CPU: ${computerSelection}
  player wins: ${playerWins} CPU wins: ${playerLosses}`);
}

function playRoundScissors() {
  const computerSelection = getComputerSelection();
  const playerSelection = 'SCISSORS';
  if (playerSelection === computerSelection) {
    console.log('tie');
  } else {
    computerSelection === 'PAPER' ? playerWins++ : playerLosses++;
  }
  console.log(`player: ${playerSelection} vs CPU: ${computerSelection}
  player wins: ${playerWins} CPU wins: ${playerLosses}`);
}

// Main game logic, compare two selections and return the result
function playRound(playerSelection, computerSelection) {
  let result = '';

  // Messages to display if the player wins or loses
  let winMessage = `You picked ${playerSelection} and the computer picked \
${computerSelection}. Congratulations, you win!`;
  let loseMessage = `You picked ${playerSelection} and the computer picked \
${computerSelection}. You lose, better luck next time.`;

  // Compare selections and determine appropriate result
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

  if (result === winMessage) playerWins++;
  else if (result === loseMessage) playerLosses++;

  return result;
}

function consoleGame() {
  let numberOfRounds = prompt(`How many rounds do you want to play?`);
  numberOfRounds = Number(numberOfRounds);
  for (let i = 0; i < numberOfRounds; i++) {
    console.log(
      playRound(getPlayerSelection(), getComputerSelection()),
      `Player wins: ${playerWins} Computer wins: ${playerLosses}`
    );
  }
  playerWins > playerLosses
    ? console.log(
        `You win the game! You had ${playerWins} wins and the computer had ${playerLosses}.`
      )
    : console.log(
        `You lose the game! You had ${playerWins} wins and the computer had ${playerLosses}.`
      );
}
