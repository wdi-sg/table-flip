
let secretWordsStr = "cat,doggy,alphabet";
let secretWordsArr = secretWordsStr.split(',');
const SECRET_WORDS = secretWordsArr.map(word => word.split(''));

let tableFlipCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split(' ');
let numGuessChancesLeft = tableFlipCharacters.length;
let correctGuesses = [];
let flippedCharacters = [];
let gameBoard = [];
let gameBoardStr = "";
let round = 0;


const sanitizeInput = input => input.trim();
const isGameOver = lifePoints => lifePoints === 0;

const isUserWon = (guessedWords, secretWords) => correctGuesses.length === secretWords.flat()
  .reduce((totalLength, word) => totalLength = totalLength + word.length, 0);

const getCurrentGuessChar = userGuess => userGuess.charAt(userGuess.length - 1);
const madeAcorrectGuess = (userGuess, secretWords) => secretWords.some(word => word.includes(userGuess));
/* === long version ===
* function makeAcorrectGuess (userGuess, secretWords) {
*   for (let i = 0; i < secretWords.length; i++ ) {
*     let word = secretWords[i]
*     for (let j = 0; j <  word.length; j++) {
*       let letter = word[j];
*       if (userGuess === letter) return true
*     }
*   }
* */
const isWrongGuess = (userGuess, secretWords) => !madeAcorrectGuess(userGuess, secretWords);

// displays letter place holders at start of game
const formatGameBoard = gameBoard => gameBoard.join("<br>");
const initGameBoard = secretWordsArr => {
  gameBoard = secretWordsArr.map(word => "_".repeat(word.length) );
  gameBoardStr = formatGameBoard(gameBoard);
  document.querySelector('#output').innerHTML= gameBoardStr;
};

// update gamebaord to replace correct guesses with the right letter
const updateGameBoard = (correctGuesses, gameBoard) => {
  console.log(gameBoard);
  console.log(correctGuesses);
  console.log(gameBoardStr)
};

initGameBoard(secretWordsArr);

const inputHappened = function (currentInput) {
  // assumptions:
  // - user types one letter at a time | guess character is always last letter of input
  // - user does not press backspace key to delete a typed character
  // - letters in secret word do not repeat
  let userInput = sanitizeInput(currentInput);
  let userGuess = getCurrentGuessChar(userInput);
  if (isGameOver(numGuessChancesLeft)) return "Game Over!\n" + gameBoardStr;
  if (isUserWon(correctGuesses, SECRET_WORDS)) return "You Won!\n" + gameBoardStr;

  if (madeAcorrectGuess(userGuess, SECRET_WORDS)) {
    correctGuesses.push(userGuess);
    updateGameBoard(correctGuesses, gameBoard);
    return `You made a correct guess\n ${flippedCharacters.join('')} \n ${gameBoardStr}`;
  }

  if (isWrongGuess(userGuess, SECRET_WORDS)) {
    flippedCharacters.push(tableFlipCharacters.pop());
    numGuessChancesLeft--;
    updateGameBoard(gameBoard, userGuess);
    return `You made a wrong guess. \n ${flippedCharacters.join('')} \n ${gameBoardStr}`;
  }
};




