console.log("Jiayous");

//(╯ರ ~ ರ）╯︵ ┻━┻

let correctLetter = 0; // tracks guess progress
let wrongTries = ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"];
let wordSelection = 0;
let gameIsOver = false; // help track the state of the game
let wordAttempts = 0; // track fail progress
let failFlips = ""; // to help print (╯ರ ~ ರ）╯︵ ┻━┻
let words = [ {
        secretArray: ["c", "a", "t"],
        secretWord: ["_", "_", "_"],
        foundLetters: [false, false, false]
   }, {
        secretArray: ["d", "o", "g", "g", "y"],
        secretWord: ["_", "_", "_", "_", "_"],
        foundLetters: [false, false, false, false, false]
    }, {
        secretArray: ["a", "l", "p", "h", "a", "b", "e", "t"],
        secretWord: ["_", "_", "_", "_", "_", "_", "_", "_"],
        foundLetters: [false, false, false, false, false, false, false, false]
    }
];


var letterPosition1 = function(currentInput) {
    if (currentInput === words[0].secretArray[0] && words[0].foundLetters[0] === false) {
        words[0].secretWord[0] = words[0].secretArray[0];
        words[0].foundLetters[0] = true;
        correctLetter++;
    } else if (currentInput === words[0].secretArray[1] && words[0].foundLetters[1] === false) {
        words[0].secretWord[1] = words[0].secretArray[1];
        words[0].foundLetters[1] = true;
        correctLetter++;
    } else if (currentInput === words[0].secretArray[2] && words[0].foundLetters[2] === false) {
        words[0].secretWord[2] = words[0].secretArray[2];
        words[0].foundLetters[2] = true;
        correctLetter++;} else {
            return;
        }
    }


var letterPosition2 = function(currentInput) {
    if (currentInput === words[1].secretArray[0] && words[1].foundLetters[0] === false) {
        words[1].secretWord[0] = words[0].secretArray[0];
        words[1].foundLetters[0] = true;
        correctLetter++;
    } else if (currentInput === words[1].secretArray[1] && words[1].foundLetters[1] === false) {
        words[1].secretWord[1] = words[0].secretArray[1];
        words[1].foundLetters[1] = true;
        correctLetter++;
    } else if (currentInput === words[1].secretArray[2] && words[1].foundLetters[2] === false) {
        words[1].secretWord[2] = words[0].secretArray[2];
        words[1].foundLetters[2] = true;
        correctLetter++;} else if (currentInput === words[1].secretArray[3] && words[1].foundLetters[3] === false) {
        words[1].secretWord[3] = words[0].secretArray[3];
        words[1].foundLetters[3] = true;
        correctLetter++;} else if (currentInput === words[1].secretArray[4] && words[1].foundLetters[4] === false) {
        words[1].secretWord[4] = words[0].secretArray[4];
        words[1].foundLetters[4] = true;
        correctLetter++;} else {
            return;
        }
    }


var tableFlipping = function() {
    if (wordAttempts < 14 && gameIsOver === false) {
        failFlips = failFlips + wrongTries[wordAttempts];
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


var letterSearch = function(currentInput) {
    var i = 0;
    while( i<words[0].secretArray.length ){
        if( words[0].secretArray[i] === currentInput.toLowerCase()){
            letterPosition1(currentInput.toLowerCase());
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
        return "Please input one letter at a time" + "\n" + words[0].secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
    } else if (currentInput.match(/[a-z]/i) === null) {
                document.querySelector('#input').value = ""
                return "Please input a valid character" + "\n" + words[0].secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
    } else {
        letterSearch(currentInput);
        document.querySelector('#input').value = ""
        if (correctLetter === words[0].secretArray.length && gameIsOver === false) {
            win(); }
            return currentInput + "\n" + words[0].secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left."; }
};