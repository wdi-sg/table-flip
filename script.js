console.log("hello world");


/*  if (totalNumOfWrongGuesses === true) {
    display ("You lost the guessing game")
    */


// table-flip emoji ["(", "╯", "°□°", ")", "╯", "︵", "┻━┻"];

// var wrongGuessCharacterAppear = function();
//     numOfWrongGuesses = numOfWrongGuesses + 1;

// var wrongCharacters = ["b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];



var secretWord = ["c", "a", "t"];

var correctGuesses = [];
var wrongGuesses = [];


var inputHappened = function(currentInput){


for (i = 0; i < secretWord.length; i++)

    if (currentInput === secretWord[i]) {
        console.log ("Correct Answer");
        correctGuesses = correctGuesses + 1;
        console.log("You guessed the correct character");
}
    else if (currentInput != secretWord[i]) {
        console.log("Wrong Answer")
        wrongGuesses = wrongGuesses + 1;
        console.log("Wrong character. Try again");
    }

};


// Store number of wrong guesses to a variable
var totalNumOfWrongGuesses = 10;


// Store number of correct guesses to a variable

var totalNumberOfCorrectGuesses = function() {
    correctGuesses 3;
    console.log(correctGuesses);
}