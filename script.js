const SECRET_WORDS = [
  ['c', 'a', 't'],
  ['d', 'o', 'g', 'g', 'y'],
  ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']
];
let tableFlipCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split(' ');
let numGuessChancesLeft = tableFlipCharacters.length;
let correctGuesses = [];
let flippedCharacters = [];


const sanitizeInput = input => input.trim();
const isGameOver = lifePoints => lifePoints === 0;

const isUserWon = (guessedWords, secretWords) => correctGuesses.length === secretWords.flat()
  .reduce((totalLength, word) => totalLength = totalLength + word.length, 0);

const getCurrentGuessChar = userGuess => userGuess.charAt(userGuess.length - 1);
const madeAcorrectGuess = (userGuess, secretWords) => secretWords.some(word => word.includes(userGuess))
const isWrongGuess = (userGuess, secretWords) => !madeAcorrectGuess(userGuess, secretWords);

const inputHappened = function (currentInput) {
  // assumptions:
  // - user types in one letter at a time | guess character is always last letter of input
  // - user does not press backspace key to delete a typed character
  // - letters in secret word do not repeat

  let userInput = sanitizeInput(currentInput);
  let userGuess = getCurrentGuessChar(userInput);

  if (isGameOver(numGuessChancesLeft)) return "Game Over!";
  if (isUserWon(correctGuesses, SECRET_WORDS)) return "You Won!";

  if (madeAcorrectGuess(userGuess, SECRET_WORDS)) {
    correctGuesses.push(userGuess);
    return "You made a correct guess";
  }

  if (isWrongGuess(userGuess, SECRET_WORDS)) {
    flippedCharacters.push(tableFlipCharacters.pop());
    numGuessChancesLeft--;
    return `You made a wrong guess. \n ${flippedCharacters.join('')}`;
  }
};




