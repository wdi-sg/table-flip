document.getElementById("input").setAttribute("maxlength", "1");

var generateSecretWord = (word) => {
    secretWords.push(word.split(""));
};

var secretWords = [['c', 'a', 't'], ['d', 'o', 'g', 'g', 'y'], ['r', 'e', 'm', 'o', 't', 'e'], ['n', 'i', 'n', 'c', 'o', 'm', 'p', 'o', 'o', 'p'], ['p', 'o', 'p', 'p', 'y', 'c', 'o', 'c', 'k']];

var secretWord = secretWords[(Math.floor(Math.random() * secretWords.length))];

var tableFlip = ['(', '╯', 'ರ', '~', 'ರ', ')', '╯', '︵', '┻', '━', '┻'];
var guessValue;
var refresh = true;
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

            // gameEnd = false;
            correctlyGuessed.length = 0;
            wronglyGuessed.length = 0;
            secretWordBackup.length = 0
            correctGuessDisplay.length = 0
        }

    var gameHandler = arr => {
        if (guessValue) {
            correctlyGuessed.push(guessValue);
            var index = arr.indexOf(guessValue);
            // arr.splice(index, 1);
            // console.log(correctlyGuessed);

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

            if (correctGuessDisplay.indexOf("_") === -1) {
                gameEnd = true;
                resetUponWinLose(secretWord, tableFlip);
                return `Congratulations! You've guessed the secret word ${secretWordBackup.join('')}!`;
            } else {
                return `Good guess!` +
                `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;
            }

        } else if (tableFlip.length > 1) {
            tableFlip.length--;
            wronglyGuessed.push(currentInput.toLowerCase());
            return `┳━┳\nWrong. Guess again. ${tableFlip.length} guesses left.` +
            `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;

        } else if (tableFlip.length === 1) {
            tableFlip.length--;
            wronglyGuessed.push(currentInput.toLowerCase());
            return `(ರ ~ ರ）┳━┳\nFinal guess. ` + `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;

        } else {
            wronglyGuessed.push(currentInput.toLowerCase());
            gameEnd = true;
            resetUponWinLose(secretWord, tableFlip);
            return `(╯ರ ~ ರ）╯︵ ┻━┻\nOut of guesses, you suck at this. ` + `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `;
        }
    }
    //Validate User Input
    if (gameEnd === true || refresh === true) {
        gameEnd = false;
        refresh = false;
        return `Guess the word: ${correctGuessDisplay.join(' ')}`;
    } else if (regex.test(currentInput) === false) {
        return `Please enter only alphabets.\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `

    } else if (correctGuessDisplay.includes(currentInput.toLowerCase()) ||
        wronglyGuessed.includes(currentInput.toLowerCase())) {
        return "You have made this guess before." + `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')} `
    } else {
        checkInput(secretWord);
        return gameHandler(secretWord)
    }
};