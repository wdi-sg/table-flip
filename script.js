console.log("hello script js");

var secretWord = ['c','a','t'];
var letterFound;
var correctLetters = [];
var letterGuess;
var numWrong = 0;

var inputHappened = function(currentInput){
  letterGuess = currentInput;
  letterFound = false;
  console.log(letterGuess);
  var i = 0;
    while (i < secretWord.length) {
        if (secretWord[i] === letterGuess) {
            console.log(secretWord[i]);
            letterFound = true;
            console.log(letterFound);
        }
    i = i+1;
    }
    showGuessResult();
    showFinalResult();
};

var showGuessResult = function() {
    if (letterFound === true) {
        correctLetters.push(letterGuess);
        console.log(correctLetters);
        display("bingo! correct letter(s) so far: " + correctLetters);
    }
    else {
        numWrong = numWrong + 1;
        console.log(numWrong);
        displayChar();
    }
};

var showFinalResult = function () {
    if (correctLetters === secretWord) {
      display("you got it! the secret word is " + secretWord);
    }
    else if (numWrong === secretWord.length) {
        display ("exceeded the number of tries allowed. you lost! the secret word is " + secretWord);
    }
};

var displayChar = function() {
    var flipTableChar = ['(','╯','°','□','°',')','╯','︵','┻','━','┻'];
    var userChar = [];
    for (let j = 0; j < flipTableChar.length; j++) {
        console.log(flipTableChar[j])
        userChar.push(flipTableChar[j]);
        display("nope try again! " + userChar);
    }
};