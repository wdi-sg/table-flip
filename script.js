console.log("Jiayous");

// (╯ರ ~ ರ）╯︵ ┻━┻*

let wordFound = 0;
let noMoreAlertsPlease = false; //to help stop alerts from spawning too much
let wordSelection; //not in use yet but for selecting which secret word
let wordAttempts = 0;
let failFlips = "";
let imptStuff = {
    wrongTries: ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"],
    words: {
        first: {
            secretArray: ["c", "a", "t"],
            secretWord: ["_", "_", "_"],
            foundLetters: [false, false, false],
            correctLetter: 0 },
        second: {
            secretArray: ["d", "o", "g", "g", "y"],
            secretWord: ["_", "_", "_", "_", "_"],
            foundLetters: [false, false, false, false, false],
            correctLetter: 0 },
        third: {
            secretArray: ["a", "l", "p", "h", "a", "b", "e", "t"],
            secretWord: ["_", "_", "_", "_", "_", "_", "_", "_"],
            foundLetters: [false, false, false, false, false, false, false, false],
            correctLetter: 0 },
        }
}

var letterPositionFirst = function(currentInput) {
    if (currentInput === "c" && imptStuff.words.first.foundLetters[0] === false) {
        imptStuff.words.first.secretWord[0] = "c";
        imptStuff.words.first.foundLetters[0] = true;
        imptStuff.words.first.correctLetter++;
    } else if (currentInput === "a") {
        imptStuff.words.first.secretWord[1] = "a";
        imptStuff.words.first.foundLetters[1] = true;
        imptStuff.words.first.correctLetter++;
    } else if (currentInput === "t") {
        imptStuff.words.first.secretWord[2] = "t";
        imptStuff.words.first.foundLetters[2] = true;
        imptStuff.words.first.correctLetter++;} else {
            return;
        }
    }

var letterPositionSecond = function(currentInput) {
    if (currentInput === "d" && imptStuff.words.second.foundLetters[0] === false) {
        imptStuff.words.second.secretWord[0] = "d";
        imptStuff.words.second.foundLetters[0] = true;
        correctLetter++;
    } else if (currentInput === "o") {
        imptStuff.words.second.secretWord[1] = "a";
        imptStuff.words.second.foundLetters[1] = true;
        correctLetter++;
    } else if (currentInput === "t") {
        imptStuff.words.second.secretWord[2] = "t";
        imptStuff.words.second.foundLetters[2] = true;
        correctLetter++;} else {
            return;
        }
}



var tableFlipping = function() {
    if (wordAttempts < 14 && imptStuff.words.first.correctLetter < 3) {
        failFlips = failFlips + imptStuff.wrongTries[wordAttempts];
    }
    return failFlips;
}

var win = function() {
    alert("Congrats you won!");
    noMoreAlertsPlease = true;
}

var gameOver = function() {
    alert("(╯ರ ~ ರ）╯︵ ┻━┻" + "\n" + "You Lose!");
}

var chacSearch = function(currentInput) {
    let i = 0;
    while( i<imptStuff.words.first.secretArray.length ){
        if( imptStuff.words.first.secretArray[i] === currentInput){
            letterPositionFirst(currentInput);
            console.log(imptStuff.words.first.secretArray)
            return;} i++}
            tableFlipping();
            if (wordAttempts >= 14) {
                gameOver();
                return
            } else if (noMoreAlertsPlease === false){
                wordAttempts++;
            }
        }


var inputHappened = function(currentInput){
    i = 0;
    chacSearch(currentInput);
    document.querySelector('#input').value = ""
    if (imptStuff.words.first.correctLetter === 3 && noMoreAlertsPlease === false) {
        win();
    }
    return currentInput + "\n" + imptStuff.words.first.secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
};