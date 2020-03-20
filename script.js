const secretWord = ["c", "a", "t"];
const wrongAnswerCaracter = ["(╯", "ರ~", "ರ）", "╯︵", "┻━┻"];

// let valueWronLetters = parseInt(wrongLetters.length)

var inputHappened = function(currentInput) {
  const correctLetters = [];
  const wrongLetters = [];
  let findLetter = function(array, letterUser) {
    for (i = 0; i < array.length; i++) {
      if (array[i] === letterUser) {
        return i;
             
      } else {
        return -1;
      }
    }
  };
  //     document.getElementById("input").value = "";
  if (wrongLetters.length <= wrongAnswerCaracter.length) {
    findLetter(secretWord, currentInput);
  } else {
    return "Sorry you lost" + wrongAnswerCaracter;
  }
};
let correctAnswer = function(currentInput) {
  return (
    "You have guessed correct, there is a" +
    " " +
    currentInput +
    "in the secret word"
  );
};
let wrongAnswer = function(currentInput) {
  return (
    "Sorry, there is no" + " " + currentInput + "in the secret word, try again"
  );
};
