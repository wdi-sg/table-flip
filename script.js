console.log("hello script js");

var secretWord = ["c", "a", "t"];

// Error characters
var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");



//Each time the user guesses wrong, another character of the table flip is added to the running total.

// var runningTotal = [];

var maxTries = errorCharacters.length;

// STEP 7:  When the user guesses wrong, take one thing out of the array and add it to a global state variable string (pop) on the array


// STEP 1: User keys in input
var statement;

var inputHappened = function(currentInput){
    console.log (currentInput);
    var letterFound = false;
        for (var i = 0; i < secretWord.length; i++) {
        if(currentInput === secretWord[i]) {
            letterFound = true;
        }
    }
    console.log(letterFound);
    if (letterFound) {
        statement = "Well done! Your response ( " + currentInput + " ) is correct.";
            } else if(errorCharacters.length < 1) {
                statement = "Game Over!";
            }
             else {
        statement = "Try again! Your response ( " + currentInput + " ) is wrong." + errorCharacters.pop();
    }

    console.log(statement);
    return statement;
};