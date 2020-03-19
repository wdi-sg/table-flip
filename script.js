console.log("hello script js");
var word1 = "cat";
var word2 = "doggy";
var word3 = "alphabet";
var tableFlipFull = "(╯ರ ~ ರ）╯︵ ┻━┻"
var secretWord = [];
var tableFlip = tableFlipFull.split("");
var rightCounter = 0;
var wrongCounter = 0;
var currentTableFlip = [];
var guessedRightLetters = [];
var tableFlipLength = tableFlip.length;

secretWord[0] = word1.split("");
secretWord[1] = word2.split("");
secretWord[2] = word3.split("");

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