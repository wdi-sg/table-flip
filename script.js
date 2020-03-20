//setup for later
var ikea = "(╯ರ ~ ರ）╯︵ ┻━┻";
var tableArr = ikea.split("");
var flippedTable = [];

var secretWord = "data";
var secretArray = secretWord.split("");

var guessedCount = 0;
var guessedArray = [];

var inputHappened = function(currentInput){
  clearInput();

  var guessResult = `${currentInput} is ${checkGuess(currentInput)[0]}\n` +
      `You've tried these letters so far: ${guessedArray.join(" ")}\n`;
  var guessesLeft = `${secretWord.length - guessedCount} letters left to guess!`;
  var loseStr = `Sorry, you've run out of tries!\n${flippedTable.reverse().join("")}`;
  var winStr = `That's it, you guessed the word - "${secretWord}"`;

  console.log(flippedTable.reverse().join(""));

  if (guessedCount === secretWord.length) {
    return guessResult + winStr;
  }

  if (tableArr.length === 0) {
    return guessResult + loseStr;
  }
  return guessResult + guessesLeft;
};

var clearInput = function () {
  document.querySelector("#input").value = "";
}

var checkGuess = function (letter) {
  var guessed = false;

  if (guessedArray.includes(letter)) {
    return [`You've already guessed ${letter}!`,
            guessedCount];
  }

  guessedArray.push(letter);

  for (var i = 0; i < secretWord.length; i++) {
    if (secretArray[i] === letter) {
      guessed = true;
      guessedCount++;
    }
  }

  if (!guessed) {
    flippedTable.push(tableArr.pop());
  }

  var guessString = guessed ? "a match!" : "not a match.";
  return [guessString, guessedCount];
}
