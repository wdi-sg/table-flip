document.querySelector('#output').innerText = `Key in a letter and guess the word.`;

var inputHappened = function(currentInput){
  var output = letterChecker(currentInput);
  return output;
};

var wordsStringCat = 'cat';
var wordsArrayCat = wordsStringCat.split('');

var wordsStringDoggy = 'doggy';
var wordsArrayDoggy = wordsStringDoggy.split('');

var wordsStringAlphabet = 'alphabet';
var wordsArrayAlphabet = wordsStringAlphabet.split('');

var words = [wordsArrayCat, wordsArrayDoggy, wordsArrayAlphabet];

var tableFlip = ['(','╯','ರ',' ~',' ರ','）','╯','︵',' ┻','━','┻'];
var removedLetterCat = ['_ ','_ ','_ '];
var removedLetterDoggy = ['_ ','_ ','_ ','_ ','_ '];
var removedLetterAlphabet = ['_ ','_ ','_ ','_ ','_ ','_ ','_ ','_ '];
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
                        if (wordsDoggy[j] === currentInput) {
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

        if (currentInput == 'c') {
            removedLetterCat[0] = currentInput;
            letterFoundCat = false;
        } else if (currentInput == 'a') {
            removedLetterCat[1] = currentInput;
            letterFoundCat = false;
        } else if (currentInput == 't') {
            removedLetterCat[2] = currentInput;
            letterFoundCat = false;
        }

        if (wordsArrayCat.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterCat.join('')}`;
        } else {
            return `You won! Here are your letters: ${removedLetterCat.join('')}`;
        }

    } else if (letterFoundDoggy == true) {
        letterFoundDoggy = false;

        if (currentInput == 'd') {
            removedLetterDoggy[0] = currentInput;
        } else if (currentInput == 'o') {
            removedLetterDoggy[1] = currentInput;
        } else if (currentInput == 'g') {
            removedLetterDoggy[2] = currentInput;
            removedLetterDoggy[3] = currentInput;
        } else if (currentInput == 'y') {
            removedLetterDoggy[4] = currentInput;
        }

        if (wordsArrayDoggy.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterDoggy.join('')}`;
        } else {
            return `You won! Here are your letters: ${removedLetterDoggy.join('')}`;
        }

    } else if (letterFoundAlphabet == true) {
        letterFoundAlphabet = false;

        if (currentInput == 'a') {
            removedLetterAlphabet[0] = currentInput;
            removedLetterAlphabet[4] = currentInput;
        } else if (currentInput == 'l') {
            removedLetterAlphabet[1] = currentInput;
        } else if (currentInput == 'p') {
            removedLetterAlphabet[2] = currentInput;
        } else if (currentInput == 'h') {
            removedLetterAlphabet[3] = currentInput;
        } else if (currentInput == 'b') {
            removedLetterAlphabet[5] = currentInput;
        } else if (currentInput == 'e') {
            removedLetterAlphabet[6] = currentInput;
        } else if (currentInput == 't') {
            removedLetterAlphabet[7] = currentInput;
        }

        if (wordsArrayAlphabet.length !== 0) {
            return `You guessed correctly. Here are your letters: ${removedLetterAlphabet.join('')}`;
        } else {
            return `You won! Here are your letters: ${removedLetterAlphabet.join('')}`;
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