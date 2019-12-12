console.log("hello script js");

// creating all necessary global variables

var initHangman = "(╯ರ~ರ）╯︵┻━┻";
var hangman = initHangman.split('');
var hangmanCurrent = [];
var totalLives = 11; // total lives
var userTries = 0; // total times user tried
var count = 0;

var secretWord = ['c','a','t'];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedAlphabet = []; // input guessed
var guessedAlphabetWrong = []; // track wrong letters
var guessedAlphabetRight = []; // track right letters

var message;

var inputHappened = function(currentInput){
    console.log( currentInput );
    if (currentInput === "c" || currentInput === "a" || currentInput === "t") {
        guessedAlphabetRight.push(currentInput);
        message = "you found the letter: " + currentInput + "!" + "\n" + guessedAlphabetRight.join('') + "\n" + "you have " + totalLives + " lives left.";
        alphabet.pop(currentInput);
            if (guessedAlphabetRight.length >= secretWord.length ){
                message = "you were right! you guessed the word C A T";
            }
        document.querySelector("#input").value = "";
        totalLives = 11;
    } else if (isNaN(currentInput) === false) {
        message = "no characters please";
        document.querySelector("#input").value = "";
    } else {
        guessedAlphabetWrong.push(currentInput);
        guessedAlphabet.push(currentInput);
        alphabet.pop(currentInput);
        hangmanCurrent.push(hangman[count]);
        count++;
        userTries++;
        totalLives--;
        document.querySelector("#input").value = "";
        message = "wrong letter, you have: " + totalLives + " left" + "\n" + hangmanCurrent.join('');
        console.log(userTries, totalLives);

        // if total lives = 0, stop game
        if (userTries >= 11) {
            message = "end of game";
            totalLives = 0;
        }
    }
        return message;
};
