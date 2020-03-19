document.getElementById("input").setAttribute("maxlength", "1");

var secretWords = [['c', 'a', 't'], ['d', 'o', 'g', 'g', 'y'], ['r', 'e', 'm', 'o', 't', 'e', 'e', 'r']];
var secretWord = secretWords[2];

var tableFlip = ['(', '╯', 'ರ', '~', 'ರ', ')', '╯', '︵', '┻', '━', '┻'];
var guessValue;
var gameEnd;
var correctlyGuessed = [];
var wronglyGuessed = [];

var regex = RegExp(/[a-z]/i)

var arrayBackup = arr => {
    return arr.map(x => x);
}

var secretWordBackup = arrayBackup(secretWord);
var tableFlipBackup = arrayBackup(tableFlip);

var correctGuessDisplay = new Array(secretWordBackup.length).fill("_");

//
var inputHappened = function(currentInput){

    var checkInput = arr => {
       guessValue = arr.find(letter => letter === currentInput.toLowerCase());
       return guessValue;
    }

    var resetUponWinLose = (arr, arr2) => {
            arr.length = 0;
            for (var i = 0; i < secretWordBackup.length; i++) {
                arr.push(secretWordBackup[i]);
            }

            arr2.length = 0;
            for (var i = 0; i < tableFlipBackup.length; i++) {
                arr2.push(tableFlipBackup[i]);
            }

            gameEnd = false;
            correctlyGuessed.length = 0;
            wronglyGuessed.length = 0;
            correctGuessDisplay.length = 0;
        }

    var gameHandler = arr => {
        if (guessValue) {
            correctlyGuessed.push(guessValue);
            var index = arr.indexOf(guessValue);
            arr.splice(index, 1);
            //
            var correctGuessIndex = [];
            for (var i = 0; i < secretWordBackup.length; i++) {
                if (secretWordBackup[i] === guessValue) {
                    correctGuessIndex.push(i)
                    console.log(correctGuessIndex);
                }
            }

            correctGuessIndex.forEach((element) => {
                return correctGuessDisplay[element] = guessValue;
            })

            if (arr.length === 0){
                gameEnd = true;
                resetUponWinLose(secretWord, tableFlip);
                return `Congratulations! You've guessed the secret word ${secretWordBackup.join('')}!`;
            } else {
                return `Good guess!`;
            }
        } else if (tableFlip.length > 1) {
            tableFlip.length--;
            wronglyGuessed.push(currentInput.toLowerCase());
            return `┳━┳\nWrong. Guess again. ${tableFlip.length} guesses left.`
        } else if (tableFlip.length === 1) {
            tableFlip.length--;
            wronglyGuessed.push(currentInput.toLowerCase());
            return `(ರ ~ ರ）┳━┳\nFinal guess. `
        } else {
            wronglyGuessed.push(currentInput.toLowerCase());
            gameEnd = true;
            resetUponWinLose(secretWord, tableFlip);
            return `(╯ರ ~ ರ）╯︵ ┻━┻\nOut of guesses, you suck at this. `
        }
    }
    //Validate User Input
    if (gameEnd === true) {
        return "";

    } else if (regex.test(currentInput) === false) {
        return "Please enter only alphabets. " +
        `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;

    } else if ((correctlyGuessed.includes(currentInput.toLowerCase()) ||
        wronglyGuessed.includes(currentInput.toLowerCase())) &&
        secretWord.includes(currentInput) === false) {
        return "You have made this guess before." +
        `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;

    } else {
        checkInput(secretWord);
        return gameHandler(secretWord) +
        `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;
    }
};