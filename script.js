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
    // wrongCounter = wrongCounter + 1
    // var newSymbol = symbolBank.shift()