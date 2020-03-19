let secretWordCopy = ["c", "a", "t"];
let secretWord = ["c", "a", "t"];
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
let outputWrongArray = [];
let outputMsg;

var inputHappened = function(currentInput) {
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === String(currentInput)) {
      rightGuess++;
      outputRightArray.push(String(currentInput));
      secretWord.splice(i, 1);
      if (rightGuess === secretWordCopy.length) {
        outputMsg =
          "You have won! The secret word is: " +
          secretWordCopy.join('') +
          ". Refresh page to continue playing.";
        return outputMsg;
      } else {
        outputMsg =
          "You guessed right! \n Correctly guessed: " + outputRightArray + ".";
        return outputMsg;
      }
    }
  }
  wrongGuess++;
  outputWrongArray.push(tableFlipArray[wrongGuess - 1]);
  if (wrongGuess === tableFlipArray.length) {
    outputMsg = outputWrongArray.join('') + "You have lost! Refresh page to play again.";
    return outputMsg;
  } else {
    outputMsg =
      "You guessed wrong. \n You are " +
      (tableFlipArray.length - wrongGuess) +
      " lives closer to a table flip: " +
      outputWrongArray.join('') +
      ".";
    return outputMsg;
  }
};
