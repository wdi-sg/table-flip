console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

var secretWord = [ 'c' , 'a', 't' ];

var correctlyGuessLetter = [ ];
var correctGuess = false;
var wrongCounter = 0;
var displayMsg;

var symbolBank = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' , '┻' ];
var symbolDisplay = [ ];

// Game Logic /////////////////
// check for user input //////////////////

// if correct ////////////////
    // add letter to correctlyGuessLetter.push()
    // displayMsg = correctlyGuessLetter [ ]

// if wrong /////////////////
    // add to number of wrong guesses wrongCounter = wrongCounter + 1
    // take first letter of symbol bank & put it into end of symbolDisplay
    // var newSymbol = symbolBank.shift()
    // Display this updated array of symbolDisplay
    // symbolDisplay.push(newSymbol)

// if number of wrong guesses is 11
// wrong guesses = secretWord.length
    // displayMsg = "Game Over";

// Display Message