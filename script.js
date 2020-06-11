
let secretWordsStr = "cat,doggy,alphabet";
let secretWordsArr = secretWordsStr.split(',');
let SECRET_WORDS = secretWordsArr.map(word => word.split(''));

let tableFlipCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split(' ');
let numGuessChancesLeft = tableFlipCharacters.length;
let correctGuesses = [];
let flippedCharacters = [];
let gameBoard = [];
let gameBoardStr = "";

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(-1, index) + replacement+ this.substr(index + replacement.length);
};
const sanitizeInput = input => input.trim();
const isGameOver = lifePoints => lifePoints === 0;
const isUserWon = (guessedWords, secretWords) => correctGuesses.length === secretWords.flat()
  .reduce((totalLength, word) => totalLength = totalLength + word.length, 0);
const getCurrentGuessChar = userGuess => userGuess.charAt(userGuess.length - 1);
const madeCorrectGuess = (userGuess, secretWords) => secretWords.some(word => word.includes(userGuess));
/* === long version ===
* function makeCorrectGuess (userGuess, secretWords) {
*   for (let i = 0; i < secretWords.length; i++ ) {
*     let word = secretWords[i]
*     for (let j = 0; j <  word.length; j++) {
*       let letter = word[j];
*       if (userGuess === letter) return true
*     }
*   }
* */
const isWrongGuess = (userGuess, secretWords) => !madeCorrectGuess(userGuess, secretWords);
// displays letter place holders at start of game
const formatGameBoard = gameBoard => gameBoard.join("<br>");
const replaceBrByNewLine = gameBoardStr => gameBoardStr.replace(/<br>/g,"\n");
const initGameBoard = secretWordsArr => {
  gameBoard = secretWordsArr.map(word => "_".repeat(word.length) );
  gameBoardStr = formatGameBoard(gameBoard);
  document.querySelector('#output').innerHTML= gameBoardStr;
};
const isAdminMode = input => input === "admin";
const isEndAdminMode = input=> input === "endadmin";

const updateOutput = (outputStr => document.getElementById('output').textContent = outputStr);
const resetInputBox = () => document.getElementById('input').value="";

/* update gamebaord to replace correct guesses with the right letter */
const updateGameBoard = userGuess => {
  let wordIndex = null;
  let letterIndex = null;

  for (let i = 0; i < secretWordsArr.length; i++) {
    let word = secretWordsArr[i];
    if (word.indexOf(userGuess)!==-1) {
      wordIndex = i;
      letterIndex = word.indexOf(userGuess) ;
    }
  }
  if (wordIndex!==null && letterIndex !== null) {
    gameBoard[wordIndex][letterIndex] = userGuess;
  }

  let pieceToReplace = gameBoard[wordIndex];
  gameBoard[wordIndex] = pieceToReplace.replaceAt(letterIndex, userGuess);
  gameBoardStr = formatGameBoard(gameBoard);
  gameBoardStr = replaceBrByNewLine(gameBoardStr);
};


initGameBoard(secretWordsArr);

const updateSecretWords= userInput => {
  secretWordsArr.concat(',', userInput);
  secretWordsArr = secretWordsStr.split(',');
  SECRET_WORDS = secretWordsArr.map(word => word.split(''));
};

const inputHappened = function (currentInput) {
  // assumptions:
  // - user types one letter at a time | guess character is always last letter of input
  // - user does not press backspace key to delete a typed character
  // - letters in secret word do not repeat
  let userInput = sanitizeInput(currentInput);

  if (isAdminMode(userInput)) {
    while(!isEndAdminMode(userInput)) {
      updateSecretWords(userInput);
      userInput = "";
      updateOutput(`Admin Mode:\\n
            Your current secret words: ${secretWordsArr}\\n
            You have added new word: ${userInput}\\n\``);
      resetInputBox();
    }
  }else {
    return `Admin Mode:\n
            Your current secret words: ${secretWordsArr}\n
            You have added new word: ${userInput}\n`;
  }

  let userGuess = getCurrentGuessChar(userInput);
  if (isGameOver(numGuessChancesLeft)) return "Game Over!\n" + gameBoardStr;
  if (isUserWon(correctGuesses, SECRET_WORDS)) return "You Won!\n" + gameBoardStr;

  if (madeCorrectGuess(userGuess, SECRET_WORDS)) {
    correctGuesses.push(userGuess);
    updateGameBoard(userGuess);
    return `You made a correct guess\n ${flippedCharacters.join('')} \n ${gameBoardStr}`;
  }

  if (isWrongGuess(userGuess, SECRET_WORDS)) {
    flippedCharacters.push(tableFlipCharacters.pop());
    numGuessChancesLeft--;
    updateGameBoard(userGuess);
    return `You made a wrong guess. \n ${flippedCharacters.join('')} \n ${gameBoardStr}`;
  }
};




