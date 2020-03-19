document.querySelector('#output').innerText = `Key in a letter and guess the word.`;

var inputHappened = function(currentInput){
  var output = letterChecker(currentInput);
  return output;
};


var secretWord = ['c','a','t'];
var tableFlip = ['(','╯','ರ',' ~',' ರ','）','╯','︵',' ┻','━','┻'];
var removedLetter = [];
var tableFlipCounter = [];

var letterFound = false;

var letterChecker = function (currentInput) {

    clearInput();

    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === currentInput) {
            letterFound = true;
            secretWord.splice(i,1);
            console.log(secretWord);
            break;
        }
    }

    if (letterFound == true) {
        console.log(output)
        removedLetter.push(currentInput);
        letterFound = false;

        if (secretWord.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetter}`;
        } else {
            return `You won! Here are your letters: ${removedLetter}`;
        }

    } else {
        tableFlipCounter.push(tableFlip.shift());
        var loseMsg = tableFlipCounter.join('')

        if (tableFlipCounter.length > 10) {
            return `You lose! ${loseMsg}`;
        } else {
            return `You guessed wrongly. ${loseMsg}`;
        }
    }
}

var clearInput = function() {
    return document.getElementById("input").value = '';
}