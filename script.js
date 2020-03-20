console.log("hello script js");



// Initialisation

var secretWords = [["c", "a", "t"]]
var secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];

var tableFlip = ["(╯", "ರ ~ ರ", "）╯", "︵ ", "┻━┻"];
var endState = ["(╯", "ರ ~ ರ", "）╯", "︵ ", "┻━┻"];
var guessState = setGuessState();
var failState = [];
var wrongGuesses = [];

document.querySelector("#output").innerText =
`####################################

Enter START to start the guessing game.

####################################`

var currentStep = 0;

// Helper Functions

function displayArray(array) {
  outputString = "";
  for (let i = 0; i < array.length; i++) {
    outputString += array[i] + " ";
  }

  return `[${outputString}]`;
}

function setGuessState() {
  outputArray = []
  for (let i = 0; i < secretWord.length; i++) {
    outputArray.push("_");
  }

  return outputArray;
}

function alterGuessState(correctGuess) { // alters the guess state if the guess is correct
  if (correctGuess) {
    guessState[correctGuess] = secretWord[correctGuess];
    secretWord[correctGuess] = "_";

    return `${displayArray(failState)}

    ${displayArray(guessState)}

    Your guesses: [${wrongGuesses}]

    You guess right!`;
  }

  failState.push(tableFlip.shift())

  return `${displayArray(failState)}

  ${displayArray(guessState)}

  Your guesses: [${wrongGuesses}]

  You guessed wrong!`;
}

function inSecretWord(guess) { // returns index if guess is inside the secret word, returns false otherwise
  for (let i = 0; i < secretWord.length; i++) {
    if (guess === secretWord[i]) {
      return i;
    }
  }

  wrongGuesses.push(guess);

  return false;
}



// Function

var inputHappened = function(currentInput){
  switch (currentStep) {

    case 0:
    if (currentInput.toLowerCase() === 'start') {
      document.querySelector("#input").value = "";
      currentStep++

      return `${displayArray(guessState)}

      Your guesses: [${wrongGuesses}]

      Please enter a letter.`
    }

    case 1:
    while (failState.length !== endState.length) {
      document.querySelector("#input").value = "";
      return alterGuessState(inSecretWord(currentInput.toLowerCase()));
    }

    return "You lost!";

  }
};