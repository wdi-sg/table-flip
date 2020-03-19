console.log("hello script js");

var secretWord = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t']
];
var tableFlip = ['(', '╯', 'ರ',  '~',  'ರ', '╯', '︵',  '┻', '━', '┻'];
var rightCounter = 0;
var wrongCounter = 0;
var currentTableFlip = [];
var guessedRightLetters = [];
var tableFlipLength = tableFlip.length;

var inputHappened = function(currentInput){
  console.log( currentInput );
    for(var i=0; i < secretWord[0].length; i++){
        if(secretWord[0][i] === currentInput){
            guessedRightLetters.push(currentInput);
            rightCounter = rightCounter + 1;
            return `you guessed right: ${guessedRightLetters}`;
        }
    }

    for(var i=0; i < secretWord[1].length; i++){
        if(secretWord[1][i] === currentInput){
            guessedRightLetters.push(currentInput);
            rightCounter = rightCounter + 1;
            return `you guessed right: ${guessedRightLetters}`;
        }
    }

    for(var i=0; i < secretWord[2].length; i++){
        if(secretWord[2][i] === currentInput){
            guessedRightLetters.push(currentInput);
            rightCounter = rightCounter + 1;
            return `you guessed right: ${guessedRightLetters}`;
        }
    }

        if(wrongCounter < tableFlipLength){
            wrongCounter = wrongCounter + 1;
            currentTableFlip.push(tableFlip.shift());
            return currentTableFlip;

    }
    return "Game is over";
};