console.log("hello script js");

var secretWord = [ 'c' , 'a', 't' ];
var letterToSearchFor;

var correctBank = [ ];
var correctGuess = false;
var wrongCounter = 0;
var displayMsg;
var wordFound;

var symbolBank = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' , '┻' ];
var symbolDisplay = [ ];

var gameOver = false;
var valueFound = false;


var inputHappened = function(userInput){
    if (gameOver == true ) {
        display("YOU ARE DEAD ~");
    }
    else {
        // update valueFound if correct letter
        wordFound = checkForSecretWord(userInput);
        // check if valueFound, yes, update bank
        var correctBankWord = updateCorrectBank(userInput);
        // if player has guessed all the required letters, display "you did it"
        if (correctBank.length === secretWord.length) {
            display("you win!!!");
            correctBank = [ ];
        }
        else {
            // else, just display the correctly guessed letters so far
            display(correctBankWord);
        };
    }
};

// Game Logic /////////////////
// check for user input //////////////////
var checkForSecretWord = function (letterToSearchFor) {
    for (var i = 0; i < secretWord.length; i++ ) {
        if( secretWord[i] === letterToSearchFor ){
            valueFound = true;
            //console.log("Letter Found!");
        }
    }
    return valueFound;
};


// if correct ////////////////
// add letter to correctBank.push()
// displayMsg = correctBank [ ]

var updateCorrectBank = function (correctAnswer) {
    if ( wordFound === true ) {
        if (correctBank.includes(correctAnswer)) {
            return displayMsg;
        } else {
            correctBank.push(correctAnswer);
            displayMsg = correctBank.join('');
            return displayMsg;
        }
    } else {
        updateSymbolBank();
        displayMsg = "HANGING SOON";
        return displayMsg;
    }
};

// if wrong /////////////////
// add to number of wrong guesses wrongCounter = wrongCounter + 1
// take first letter of symbol bank & put it into end of symbolDisplay
// var newSymbol = symbolBank.shift()
// Display this updated array of symbolDisplay
// symbolDisplay.push(newSymbol)

var updateSymbolBank = function () {

    if ( wrongCounter == 11 ) {
        gameOver = true;
    } else {
        gameOver = false;
        wrongCounter = wrongCounter + 1;
        var newSymbol = symbolBank.shift();
        symbolDisplay.push(newSymbol);
        document.getElementById("demo").innerHTML = symbolDisplay.join('');
    }
};



// if number of wrong guesses is 11
// wrong guesses = secretWord.length
    // displayMsg = "Game Over";

// Display Message