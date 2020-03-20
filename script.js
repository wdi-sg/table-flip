var secretWords = [['c', 'a', 't'], ['d', 'o', 'g', 'g', 'y'], ['r', 'e', 'm', 'o', 't', 'e'], ['n', 'i', 'n', 'c', 'o', 'm', 'p', 'o', 'o', 'p'], ['p', 'o', 'p', 'p', 'y', 'c', 'o', 'c', 'k']];

generateSecretWord = word => secretWords.push(word.split(""));

//To create backup Arrays for future reference of original values
var arrayBackup = (arr) => {
    return arr.map(x => x)
};

// Initial Secret Word randomly selected from list of words. Will be reinitialized at end of game.
var secretWord  = secretWords[(Math.floor(Math.random() * secretWords.length))]
var secretWordBackup = arrayBackup(secretWord);
var tableFlip = ['(', '╯', 'ರ', '~', 'ರ', ')', '╯', '︵', '┻', '━', '┻'];
var tableFlipBackup = arrayBackup(tableFlip);

//Initializing display where unguessed characters of Secret Word are displayed as "_"
var correctGuessDisplay = new Array(secretWordBackup.length).fill("_");
var tableFlipDisplay = [];

var pickSecretWord = () => {
    secretWord = secretWords[(Math.floor(Math.random() * secretWords.length))];
    secretWordBackup = arrayBackup(secretWord);
    tableFlipBackup = arrayBackup(tableFlip);
    correctGuessDisplay = new Array(secretWordBackup.length).fill("_");
}

var guessValue;
var refresh = true;
var gameEnd;
var correctlyGuessed = [];
var wronglyGuessed = [];

//For validating user input later
var regex = RegExp(/[a-z]/i)
document.getElementById("input").setAttribute("maxlength", "1");

var inputHappened = function(currentInput) {

    var checkInput = arr => {
       guessValue = arr.find(letter => letter === currentInput.toLowerCase());
       return guessValue;
    }

    var resetUponWinLose = arr => {
            arr.length = 0;
            for (var i = 0; i < secretWordBackup.length; i++) {
                arr.push(secretWordBackup[i]);
            }

            correctlyGuessed.length = 0;
            wronglyGuessed.length = 0;
            tableFlipDisplay.length = 0;

            tableFlip.length = 0;
            for (i = 0; i < tableFlipBackup.length; i++) {
                tableFlip.push(tableFlipBackup[i]);
            }
    }

    var gameHandler = arr => {

        var outputWinMessage = () => {
            return `Congratulations! You've guessed the secret word ${secretWord.join('')}!`;
        }

        var outputGuessStatus = () => {
            return `\nCorrect Guesses: ${correctGuessDisplay.join(' ')}\nWrong Guesses: ${wronglyGuessed.join(' ')}\n${tableFlipDisplay.join(' ')}`;
        }

        if (guessValue) {
            correctlyGuessed.push(guessValue);
            var index = arr.indexOf(guessValue);

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
                resetUponWinLose(secretWord);
                return outputWinMessage();

            } else {
                return `Good guess!` + outputGuessStatus();
            }

        } else if ((tableFlipBackup.length - wronglyGuessed.length) > 1) {
            wronglyGuessed.push(currentInput.toLowerCase());
            tableFlipDisplay.push(tableFlip.shift());
            return `┳━┳\nWrong. Guess again. ${tableFlipBackup.length - wronglyGuessed.length} guesses left.` + outputGuessStatus();

        } else if ((tableFlipBackup.length - wronglyGuessed.length) === 1) {
            tableFlip.length--;
            wronglyGuessed.push(currentInput.toLowerCase());
            tableFlipDisplay.push(tableFlip.shift());
            return `(ರ ~ ರ）┳━┳\nFinal guess. ` + outputGuessStatus();

        } else {
            wronglyGuessed.push(currentInput.toLowerCase());
            gameEnd = true;
            resetUponWinLose(secretWord);
            return `(╯ರ ~ ರ）╯︵ ┻━┻\nOut of guesses, you suck at this. ` + outputGuessStatus();
        }
    }
    //Validate User Input
        //Check if game has ended or page just loaded
    if (gameEnd === true || refresh === true) {
        pickSecretWord();
        gameEnd = false;
        refresh = false;
        return `Guess the word: ${correctGuessDisplay.join(' ')}`;

        //Regex check for A-Z
    } else if (regex.test(currentInput) === false) {
        return `Please enter only alphabets.` + outputGuessStatus();

        //Check if input has already been guessed
    } else if (correctGuessDisplay.includes(currentInput.toLowerCase()) ||
        wronglyGuessed.includes(currentInput.toLowerCase())) {
        return "You have made this guess before." + outputGuessStatus();

    } else {
        checkInput(secretWord);
        return gameHandler(secretWord)
    }
};