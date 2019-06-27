console.log("hello script js");

var secretWord = [ 'c' , 'a', 't' ];
var letterToSearchFor;

var correctlyGuessLetter = [ ];
var correctGuess = false;
var wrongCounter = 0;
var displayMsg;

var symbolBank = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' , '┻' ];
var symbolDisplay = [ ];


var inputHappened = function(userInput){
    //letterToSearchFor = userInput;
    //console.log( letterToSearchFor );
    var wordFound = checkForSecretWord(userInput);
    display(wordFound);

};

// Game Logic /////////////////
// check for user input //////////////////
var checkForSecretWord = function (letterToSearchFor) {
    for (var i = 0; i < secretWord.length; i++ ) {
        if( secretWord[i] === letterToSearchFor ){
            valueFound = true;
            console.log("Letter Found!");
            return true;
        }

    }
    return false;
};



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