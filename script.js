console.log("Jiayous");

/*let secretWord = [["c", "a", "t"],[]];
let wrongTries = ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"]
(╯ರ ~ ರ）╯︵ ┻━┻*/

let i = 0;
let correctLetter = 0;
let wordFound = 0;
let noMoreAlertsPlease = false; //to help stop alerts from spawning too much
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
    if (currentInput === "c" && words.secretWord1.foundLetters[0] === false) {
        words.secretWord1.secretWord[0] = "c";
        words.secretWord1.foundLetters[0] = true;
        correctLetter++;
    } else if (currentInput === "a") {
        words.secretWord1.secretWord[1] = "a";
        words.secretWord1.foundLetters[1] = true;
        correctLetter++;
    } else if (currentInput === "t") {
        words.secretWord1.secretWord[2] = "t";
        words.secretWord1.foundLetters[2] = true;
        correctLetter++;} else {
            return;
        }
    }


var tableFlipping = function() {
    if (wordAttempts < 14 && correctLetter < 3) {
        failFlips = failFlips + words.wrongTries[wordAttempts];
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
    while( i<words.secretWord1.secretArray.length ){
        if( words.secretWord1.secretArray[i] === currentInput){
            letterPosition(currentInput);
            console.log(words.secretWord1.secretArray)
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
    if (correctLetter === 3 && noMoreAlertsPlease === false) {
        win();
    }
    return currentInput + "\n" + words.secretWord1.secretWord + "\n" + failFlips + "\n" + "You have " + (14 - wordAttempts) + " attempts left.";
};


//code that is discarded but good to look at to reflect

/*printArray(secretWord[0]);*/

//experimental function
/*var printArray = function(arrays) {
    while (i <= arrays.length) {
        word + arrays[i];
        if (i > 15) {
            debugger;
        };
    return word;
    }
}*/

/*            words.secretWord1.secretArray.splice(i, 1,)*/ // would result in errors due to messing up word order

/* else {
                tableFlipping();
                wordAttempts++
                if (wordAttempts === 14) {
                    gameOver(); }
                return wordAttempts;
            }
} */