console.log("hello script js");

var secretWord = ["c", "a", "t"];

var tableFlip = ["(", "╯", "ರ", " ~ ", "ರ", "）", "╯", "︵", "┻", "━", "┻"];

checkArr = [];

function userGuess(letter) {
    if (isNaN(letter)) {
        var i = 0;
        while (i<secretWord.length) {
            if (letter === secretWord[i] && !checkArr.includes(secretWord[i])) {
                checkArr.push(secretWord[i]);
                console.log(secretWord[i]);
            }
            i++;
        };
        console.log(checkArr);
        // return checkArr;

    } else {
        return "not a letter."

    };
};


var inputHappened = function(currentInput){
  userGuess(currentInput);

};