const words = [
  ["c", "a", "t"],
  ["d", "o", "g", "g", "y"],
  ["a", "l", "p", "h", "a", "b", "e", "t"]
];
const flipTableArray = ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
let letterFound = false;
let correctlyGuessedLetters = "";
let numberOfCorrectlyGuessedLetters = 0;
let numberOfWronglyGuessedLetters = 0;
let flipTableFigure = "";
const numberOfArrayLetters = words[0].length + words[1].length + words[2].length;
const input = document.querySelector("#input");
const outputBox = document.querySelector("#output");
outputBox.textContent = `Welcome to table flip! Input a character.`

console.log("hello script js");

const inputHappened = function(currentInput) {
  for (i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
      if (words[i][j] === currentInput) {
        letterFound = true;
        numberOfCorrectlyGuessedLetters++;
        console.log(numberOfCorrectlyGuessedLetters);
        if (
          letterFound &&
          numberOfCorrectlyGuessedLetters < numberOfArrayLetters
        ) {
          letterFound = false;
          correctlyGuessedLetters = correctlyGuessedLetters + words[i][j];
          input.value = "";
          return `You guessed right! Correctly guessed letters: ${correctlyGuessedLetters}
        Number of correctly guessed letters: ${numberOfCorrectlyGuessedLetters} Letters left: ${numberOfArrayLetters -
            numberOfCorrectlyGuessedLetters}`;
        } else {
          return `You won! Words were:
          1) cat
          2) doggy
          3) alphabet`;
        }
      }
    }
  }
  input.value = "";

  numberOfWronglyGuessedLetters++;
  flipTableFigure = flipTableFigure + flipTableArray.shift();
  if (flipTableArray.length > 0) {
    return flipTableFigure;
  } else {
    return `Sorry! You lost.
              (╯ರ ~ ರ）╯︵ ┻━┻`;
  }
};
