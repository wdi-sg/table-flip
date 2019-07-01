console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};


var secretWord = ['c','a','t']
var alphabet = ['a','b','c','d','e','f','g','h','i','k,''l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var tableFlip = ['(','╯','ರ',' ~ ','ರ','）','╯','︵ ','┻━┻'];
var totalGuessWrong = '';
var correctGuess = '';
var numberOfCorrectGuess = 0;


var inputHappened = function(currentInput) {
  for (var i=0, i <secretWord.length,i++) {
    correctGuess.push('_');
        }
  };

var guessedCorrectly = function(currentGuess) {
    var correct = false;
    outer: for (let i = 0; i < secretWord.length; i++) {
        if (currentGuess === secretWord[i]) {
            secretWord.splice(i, 1);
            correct = true;
            break outer;
        }
    }
    console.log(secretWord);
    return correct;
};