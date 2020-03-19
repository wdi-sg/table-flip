
var secretWordCopy = [
  ["c", "a", "t"],
  ["d", "o", "g", "g", "y"],
  ["a", "l", "p", "h", "a", "b", "e", "t"]
];

var secretWord = [
  ["c", "a", "t"],
  ["d", "o", "g", "g", "y"],
  ["a", "l", "p", "h", "a", "b", "e", "t"]
];
let wrongGuess = 0;
let rightGuess = 0;
let tableFlipArray = [
  "(",
  "╯",
  "ರ ",
  "~",
  " ರ",
  "）",
  "╯",
  "︵",
  "┻",
  "━",
  "┻"
];
let outputRightArray = [];
let inputArray = [];
let initArrayState = true;
let outputWrongArray = [];
let outputMsg;
let secretWordCount = 0;

function initRightArray(inputArray) {
  for (let i = 0; i < secretWord[secretWordCount].length; i++) {
    inputArray.push("_");
  }
  return inputArray;
}

var inputHappened = function(currentInput) {
  if (initArrayState === true) {
    outputRightArray = initRightArray(inputArray);
    initArrayState = false;
  }
  for (let i = 0; i < secretWord[secretWordCount].length; i++) {
    if (secretWord[secretWordCount][i] === String(currentInput)) {
      rightGuess++;
      outputRightArray[i] = String(currentInput);
      secretWord[secretWordCount].splice(i, 1, '_');
      if (rightGuess === secretWord[secretWordCount].length) {
        outputMsg =
          "You have won! The secret word is: " +
          secretWordCopy[secretWordCount].join("") +
          ". There are " +
          (secretWordCopy.length - secretWordCount - 1) +
          " more secret words to guess.";
        outputRightArray = [];
        rightGuess = 0;
        wrongGuess = 0;
        outputWrongArray = [];
        inputArray = [];
        secretWordCount++;
        initArrayState = true;
      } else {
        outputMsg =
          "You guessed right! \n Correctly guessed: " + outputRightArray + ".";
      }
      return outputMsg;
    }
  }
  wrongGuess++;
  outputWrongArray.push(tableFlipArray[wrongGuess - 1]);
  if (wrongGuess === tableFlipArray.length) {
    outputMsg =
      outputWrongArray.join("") + "You have lost! Refresh page to play again.";
  } else {
    outputMsg =
      "You guessed wrong. \n You are " +
      (tableFlipArray.length - wrongGuess) +
      " lives closer to a table flip: " +
      outputWrongArray.join("") +
      ".";
  }
  return outputMsg;
};
