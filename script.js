// var words = [
//   ["c", "a", "t"],
//   ["d", "o", "g", "g", "y"],
//   ["a", "l", "p", "h", "a", "b", "e", "t"]
// ];

let catArray = ["c", "a", "t"];
let flipTableArray = ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
let letterFound = false;
let correctlyGuessedLetters = "";
let numberOfCorrectlyGuessedLetters = 0;
let numberOfWronglyGuessedLetters = 0;
let flipTableFigure = "";
let input = document.querySelector("#input");

console.log("hello script js");

var inputHappened = function(currentInput) {
  for (let i = 0; i < catArray.length; i++) {
    if (currentInput === catArray[i]) {
      letterFound = true;
      numberOfCorrectlyGuessedLetters++;
      if (letterFound && numberOfCorrectlyGuessedLetters !== catArray.length) {
        letterFound = false;
        correctlyGuessedLetters = correctlyGuessedLetters + catArray[i];
        input.value = "";
        return `You guessed right! Correctly guessed letters: ${correctlyGuessedLetters}`;
      } else {
        return `You won!`;
      }
    }
  }
  input.value = "";

  numberOfWronglyGuessedLetters++;
  flipTableFigure += flipTableArray.shift();
  if (flipTableArray.length > 0) {
    return flipTableFigure;
  } else {
    return `Sorry! You lost. 
              (╯ರ ~ ರ）╯︵ ┻━┻`;
  }
};
