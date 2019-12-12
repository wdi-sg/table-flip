console.log("Jiayous");

//(╯ರ ~ ರ）╯︵ ┻━┻

let correctLetter = 0;
let wrongLetters = []; //store wrong letters so you know which ones you've tried
let gameIsOver = false; // help track the state of the game
let wordFound = 0;
let wordAttempts = 0;
let failFlips = "";
let words = {
    wrongTries: ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"],
    secretWord1: {
        secretArray: ["c", "a", "t"],
        secretWord: ["_", "_", "_"],
        foundLetters: [false, false, false]
    }
}

var letterPosition = function(currentInput) {
    if (currentInput === words.secretWord1.secretArray[0] && words.secretWord1.foundLetters[0] === false) {
        words.secretWord1.secretWord[0] = words.secretWord1.secretArray[0];
        words.secretWord1.foundLetters[0] = true;
        correctLetter++;
    } else if (currentInput === words.secretWord1.secretArray[1] && words.secretWord1.foundLetters[1] === false) {
        words.secretWord1.secretWord[1] = words.secretWord1.secretArray[1];
        words.secretWord1.foundLetters[1] = true;
        correctLetter++;
    } else if (currentInput === words.secretWord1.secretArray[2] && words.secretWord1.foundLetters[2] === false) {
        words.secretWord1.secretWord[2] = words.secretWord1.secretArray[2];
        words.secretWord1.foundLetters[2] = true;
        correctLetter++;} else {
            return;
        }
    }


var tableFlipping = function() {
    if (wordAttempts < 14 && gameIsOver === false) {
        failFlips = failFlips + words.wrongTries[wordAttempts];
    }
    return failFlips;
}

var win = function() {
    alert("Congrats you won!");
    gameIsOver = true;
}

var gameOver = function() {
    alert("(╯ರ ~ ರ）╯︵ ┻━┻" + "\n" + "You Lose!");
}

var chacSearch = function(currentInput) {
    var i = 0;
    while( i<words.secretWord1.secretArray.length ){
        if( words.secretWord1.secretArray[i] === currentInput){
            letterPosition(currentInput);
            console.log(words.secretWord1.secretArray)
            return;}
        i++}
    if (gameIsOver === true) {
        return; }
    tableFlipping();
    wordAttempts++;
    if (wordAttempts >= 14 && gameIsOver === false) {
        gameOver();
        return wordAttempts;
    }
}


var inputHappened = function(currentInput){
    if (currentInput.length > 1) {
        document.querySelector('#input').value = ""
        return "Please input one letter at a time" + "\n" + words.secretWord1.secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
    } else if (currentInput.match(/[a-z]/i) === null) {
                document.querySelector('#input').value = ""
                return "Please input a valid character" + "\n" + words.secretWord1.secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
    } else {
        chacSearch(currentInput);
        document.querySelector('#input').value = ""
        if (correctLetter === words.secretWord1.secretArray.length && gameIsOver === false) {
            win(); }
            return currentInput + "\n" + words.secretWord1.secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left."; }
};