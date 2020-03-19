const INPUT_FORMAT_ERR_MSG = "Please enter one letter at a time";

const SECRET_WORD = "cat";
let tableFlipCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split(' ');

let numGuessChancesLeft = tableFlipCharacters.length;
let currentRound = 0;

let userGuesses = [];
let flippedCharacters = [];


const sanitizeInput = input => input.trim();

function isGameOver(lifePoints) {
  return lifePoints === 0;
}

function isUserWon(userGuesses, secretWord) {
  return secretWord === userGuesses.join('')
}

function madeAcorrectGuess(currentInput, secretWord) {
  return secretWord.includes(currentInput);
}

function isWrongGuess(currentInput, secretWord) {
  return !madeAcorrectGuess(currentInput, secretWord);
}

function getCurrentGuessChar(userGuess) {
  return userGuess.charAt(userGuess.length - 1);
}

const inputHappened = function (currentInput) {
  // assumptions:
  // - user types in one letter at a time | guess character is always last letter of input
  // - user does not press backspace key to delete a typed character

  let userInput = sanitizeInput(currentInput);
  let userGuess = getCurrentGuessChar(userInput);

  if (isGameOver(numGuessChancesLeft)) return "Game Over!";
  if (isUserWon(userGuesses, SECRET_WORD)) return "You Won!";

  if (madeAcorrectGuess(userGuess, SECRET_WORD)) return "You made a correct guess";
  if (isWrongGuess(userGuess, SECRET_WORD)) {
    flippedCharacters.push(tableFlipCharacters.pop());
    numGuessChancesLeft--;
    
    return `You made a wrong guess. \n ${flippedCharacters.join('')}` ;
  }
};




