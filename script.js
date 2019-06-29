console.log("hello world");

var secretWord = ["c","a","t"];

var tableFlip = ["(╯ರ ~ ರ）╯","︵", "┻━┻"];

var correctGuesses = '';
var wrongGuesses = '';


var inputHappened = function(currentInput){

    //converts uppercase input word to lowercase
    var lowerCaseInput = currentInput.toLowerCase();

//var found has to be local variable
    var found = false

for (var i = 0; i < secretWord.length; i++) {
        if (lowerCaseInput === secretWord[i] && secretWord.length > 1) {
        //correctGuesses = correctGuesses + secretWord.splice(i,1)
        //splice means revoke word from secretWord array
        correctGuesses += secretWord.splice(i,1)
        //console.log(correctGuesses)
        display("You guessed the correct character " + correctGuesses);
        found = true;
        //When the break statement is used in a loop, it breaks the loop and continues executing the code after the loop
        break;

    } else if (lowerCaseInput === secretWord[i] && secretWord.length === 1) {
        // correctGuesses.push(secretWord[i])
        correctGuesses += secretWord.splice(i,1)
        //var secretWord array is empty now
        display("You win. You guessed cat ")
        found = true;
    }
}

//wrongGuesses.length < 5 means 4 chances to play
    if (found === false && wrongGuesses.length < 5) {

//+= means wrongGuess = wrongGuesses + tableFlip
//shift() method removes the first element from tableFlip array and returns that removed element
        wrongGuesses += tableFlip.shift()
        //console.log(wrongGuesses)
        display("Wrong guess " + wrongGuesses);
//if you guess 4 times wrong, you lose
    } else if (found === false && wrongGuesses.length >4) {
        wrongGuesses += tableFlip.shift();
        display("Game over " + wrongGuesses)
    }
};










//var wrongGuess = [];
//wrongGuesses.push(currentInput) stores wrong guesses in array

// var wrongCharacters = ["b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];