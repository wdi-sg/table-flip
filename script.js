console.log("hello script js");

var secretWord = ["c", "a", "t"];

var tableFlip = ["(", "╯", "ರ", " ~ ", "ರ", "）", "╯", "︵", "┻", "━", "┻"];

array = [];

function userGuess(letter) {
    if (isNaN(letter)) {
        var i = 0;
        while (i<secretWord.length) {
            if (letter === secretWord[i]) {
                array.push(letter);
                secretWord.splice(i, 1);
                console.log(letter);
            }
            i++;
        };
    } else {

        return "not a letter."

    };
    console.log(secretWord);
    return array;
};


var inputHappened = function(currentInput){
  output = userGuess(currentInput);
  return output;
};