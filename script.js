//setup for later
var ikea = "(╯ರ ~ ರ）╯︵ ┻━┻";
var tableArr = ikea.split("");

var secretWord = "data";
var secretArray = secretWord.split("");

var guessedCount = 0;
var guessedArray = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
  clearInput();

  var guessResult = `${currentInput} is ${checkGuess(currentInput)[0]}\n` +
      `You've tried these letters so far: ${guessedArray.join(" ")}\n`;
  var guessesLeft = `${secretWord.length - guessedCount} letters left to guess!`;
  var winner = `That's it, you guessed the word - "${secretWord}"`;

  if (guessedCount === secretWord.length) {
    return guessResult + winner;
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
    console.log(guessedArray, guessedCount, guessed);

    if (secretArray[i] === letter) {
      guessed = true;
      guessedCount++;
    }

  }

  var guessString = guessed ? "a match!" : "not a match.";

  return [guessed, guessedCount];
}
