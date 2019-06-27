// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };
var secretWord = ['c', 'a', 't'];
var letterFound = false; //by default


var backupflipArray = ["(", "╯", "ರ", " ", "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"];
var displayflipArray = [];
var correctGuessesArray = [];

var correctCounter = 0;
var wrongCounter = 0;

var wordProgress = [];
//when true
var setWordProgress = function(wordProgress, secretWord) {
    i = 0;
    while (i < secretWord.length) {
        wordProgress.push('_')
        i += 1;
    }
}
setWordProgress(wordProgress, secretWord);

var updateWordProgress = function(secretWord, letterToSearch) {
    if (letterFound === true){
        var correctLetterIndex = secretWord.indexOf(letterToSearch);
        wordProgress.splice(correctLetterIndex, 0, letterToSearch);
        wordProgress.pop();
    }
    display2(wordProgress);
}



//call: setWordProgress(wordProgress, secretWord)

var wrongMessage = `You've guessed wrong ${wrongCounter} times!`;
var winMessage = ""
var loseMessage = "Game Over!"

console.log(backupflipArray); // original length 14, index 0 -> 13
console.log(displayflipArray);

var inputHappened = function(currentInput){
  //logs input
  var letterToSearch = currentInput;
  console.log( "Searching for " + currentInput );

    letterFound = false; //reset status
//loop through secretWord to check if letterFound = true
    i = 0;
    while (i < secretWord.length) {
        if (secretWord[i] === letterToSearch){
        letterFound = true;
        correctCounter += 1;
        correctGuessesArray.push(secretWord[i]);
        console.log(correctGuessesArray);

        }
        i += 1;
    }
    updateWordProgress(secretWord, letterToSearch)
//check if letterFound is still false
//if so, count a loss, push displayFlipArray
    if (letterFound === false){
    displayflipArray.push(backupflipArray[wrongCounter]);
    wrongCounter += 1;
    }
//is game over?
//if no, show progress. if yes, show message
    if (displayflipArray.length <= 14) {
        display(displayflipArray);
    } else {
        display2(loseMessage);
    }

    console.log("Letter found :" + letterFound);
    console.log("Correct Guesses :" + correctCounter);
    console.log("Wrong Guesses :" + wrongCounter);
    document.getElementById('input').value = null;
};