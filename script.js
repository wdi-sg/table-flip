console.log("hello script js");

var secretWord = ['c', 'a', 't'];
var tableFlip = ['(', '╯', 'ರ',  '~',  'ರ', '╯', '︵',  '┻', '━', '┻'];
var rightCounter = 0;
var wrongCounter = 0;
var currentTableFlip = [];
var guessedRightLetters = [];
var tableFlipLength = tableFlip.length;

var inputHappened = function(currentInput){
  console.log( currentInput );
    for(var i=0; i < secretWord.length; i++){
        if(secretWord[i] === currentInput){
            guessedRightLetters.push(currentInput);
            rightCounter = rightCounter + 1;
            return `you guessed right: ${guessedRightLetters}`;
        }
    }

    for(var i=0; i < secretWord.length; i++){
        if(secretWord[i] !== currentInput && wrongCounter < tableFlipLength){
            wrongCounter = wrongCounter + 1;
            currentTableFlip.push(tableFlip.shift());
            return currentTableFlip;
        }
    }
    return "Game is over";
};