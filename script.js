const secretWord = ["c", "a", "t"];
const wrongAnswerCaracter = ["(╯", "ರ~", "ರ）", "╯︵", "┻━┻"];
const correctLetters = [];
const wrongLetters = [];

let correctAnswer = function(letterUser) {
  return (
    "You have guessed correct, there is" +
    " " +
    letterUser +
    " in the secret word"
  );
};
let wrongAnswer = function(letterUser) {
  return (
    "Sorry, there is no" + " " + letterUser + " in the secret word, try again"
  );
};

let findLetter = function(array, letterUser) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i] === letterUser);
    if (array[i] === letterUser) {
      correctLetters.push(letterUser);
      return correctAnswer(letterUser);
    }
  }

  wrongLetters.push(letterUser);
  return wrongAnswer(letterUser);
};

var inputHappened = function(currentInput) {
  document.getElementById("input").value = "";
  if (wrongLetters.length < wrongAnswerCaracter.length) {
    if (correctLetters.length === secretWord.length) {
      return "You Have won" + secretWord;
    }
    return findLetter(secretWord, currentInput);
  } else {
    "sorry, you lost" + wrongAnswerCaracter;
  }
};
