console.log("hello script js");

var secretWord = ['c','a','t'];
var tableFlipChar = ['(','╯','ರ',' ~ ','ರ','）','╯','︵ ','┻━┻'];

var currentTable = [];
var numberOfGuesses = tableFlipChar.length;
var numOfWrongGuess = 0;
var correctGuess = [];
var guessedLetters = [];
var endGame = false;
var endGameMessage = "";
var displayCurrentTable = "";

//check char already entered
var sameLetterGuessed = function(letter){
    var i = 0;
    while(i < guessedLetters.length){
        if(letter === guessedLetters[i]){
            return true;
        }
        i++;
    }
    return false;
}


//check if correct letter
var checkInput = function(letter){
    letter = letter.toLowerCase();
     var i = 0;
     if(!sameLetterGuessed(letter)){
        guessedLetters.push(letter);
        while( i < secretWord.length ){
          if( letter === secretWord[i] ){
            correctGuess.push(letter);
            if(correctGuess.length === secretWord.length){
                endGame = true;
                endGameMessage = "You've won";
                return endGameMessage
            }
            return "You guessed right";
          }
        i+= 1;
     }
    displayCurrentTable += tableFlipChar.shift();
    numOfWrongGuess++;
    if(numOfWrongGuess >= numberOfGuesses ){
        endGame = true;
        endGameMessage = displayCurrentTable + "\nGame Over!";
         return endGameMessage;
    }
    return displayCurrentTable;
    }else{
    return "Letter " + letter+ " have already been guessed!";}
}



var inputHappened = function(currentInput){
  console.log( currentInput );
document.querySelector('#input').value = "";
if(endGame){
    return endGameMessage;
}
else{
  return checkInput(currentInput);}
}