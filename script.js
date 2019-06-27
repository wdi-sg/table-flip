var secretWord = ['c', 'a', 't'];
var guessWrong = 0;
var guessCorrect = 0;
var guessedTimes = 0;

var userInput = 'a';
var i = 0;

//Checking input letter against secretWord array
while (i < secretWord.length) {
    if (userInput === secretWord[i]) {

        console.log("match");
        guessCorrect = guessCorrect + 1;
        console.log("You got " + guessCorrect + " correct answer");
        i = i + 1;
    }
    else {
        console.log("no match");
        guessWrong = guessWrong + 1;
        console.log("You guessed wrong " + (guessWrong - 1) + " times");
        i = i + 1;
    }
console.log("i value is: " + i);
};

/*

guessedTimes = guessedTimes + 1;
    console.log("You guessed: " + guessedTimes + " times");

chancesLeft = chancesLeft - 1;
console.log("You left: " + chancesLeft + " chances");

console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

*/