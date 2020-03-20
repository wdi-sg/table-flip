document.querySelector('#output').innerText = `Key in a letter and guess the word.`;

var inputHappened = function(currentInput){
  var output = letterChecker(currentInput);
  return output;
};


var words = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t']
];
var tableFlip = ['(','╯','ರ',' ~',' ರ','）','╯','︵',' ┻','━','┻'];
var removedLetterCat = [];
var removedLetterDoggy = [];
var removedLetterAlphabet = [];
var tableFlipCounter = [];

var letterFoundCat = false;
var letterFoundDoggy = false;
var letterFoundAlphabet = false;

var letterChecker = function (currentInput) {

    clearInput();

    for (var i = 0; i < words.length; i++) {
            switch (i) {
                case (i = 0):
                    for (var j = 0; j < words[0].length; j++) {
                        var wordsCat = words[0];
                        if (wordsCat[j] === currentInput) {
                            letterFoundCat = true;
                            wordsCat.splice(j,1);
                        }
                    }
                    break;
                case (i = 1):
                    for (var j = 0; j < words[1].length; j++) {
                        var wordsDoggy = words[1];
                        if (words[1][j] === currentInput) {
                            letterFoundDoggy = true;
                            wordsDoggy.splice(j,1);
                        }
                    }
                    break;
                case (i = 2):
                    for (var j = 0; j < words[2].length; j++) {
                        var wordsAlphabet = words[2];
                        if (wordsAlphabet[j] === currentInput) {
                            letterFoundAlphabet = true;
                            wordsAlphabet.splice(j,1);
                        }
                    }
                    break;
            }
    }

    if (letterFoundCat == true) {
        removedLetterCat.push(currentInput);
        letterFoundCat = false;

        if (wordsCat.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterCat}`;
        } else {
            return `You won! Here are your letters: ${removedLetterCat}`;
        }

    } else if (letterFoundDoggy == true) {
        removedLetterDoggy.push(currentInput);
        letterFoundDoggy = false;

        if (wordsDoggy.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterDoggy}`;
        } else {
            return `You won! Here are your letters: ${removedLetterDoggy}`;
        }

    } else if (letterFoundAlphabet == true) {
        removedLetterAlphabet.push(currentInput);
        letterFoundAlphabet = false;

        if (wordsAlphabet.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterAlphabet}`;
        } else {
            return `You won! Here are your letters: ${removedLetterAlphabet}`;
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