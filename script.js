console.log("hello script js");

var secretWord = ["c", "a", "t"];

var tableFlip = ["(", "╯", "ರ", " ~ ", "ರ", "）", "╯", "︵", "┻", "━", "┻"];

var wrongGuess = 0;
var correctGuess = [];




function userGuess(letter) {
    if (isNaN(letter)) {
        for (var j = 0; j < tableFlip.length; j++) {
            for (var i = 0; i < secretWord.length; i++) {
                if (letter === secretWord[i]) {
                    console.log("correct guess: " + letter);
                    correctGuess.push(letter);
                    secretWord.splice(i, 1);
                    return "correct guess: " + letter;
                };
            };
        };
    } else {
            console.log("Is not a letter.");
    };
    console.log(secretWord);
};


var inputHappened = function(currentInput){
  output = userGuess(currentInput);
  return output;
};