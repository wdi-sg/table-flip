console.log("Jiayous");

/*let secretWord = [["c", "a", "t"],[]];
let wrongTries = ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"]
(╯ರ ~ ರ）╯︵ ┻━┻*/

let i = 0;
let wordFound = false;
let wordAttempts = 0;
let failFlips = "";
let foundLetters = "";
let words = {
    wrongTries: ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"],
    secretWord1: {
        secretArray: ["c", "a", "t"],
        secretWord: "cat"
    }
}

var tableFlipping = function() {
    failFlips = failFlips + words.wrongTries[wordAttempts];
    return failFlips;
}

var gameOver = function() {
    alert("(╯ರ ~ ರ）╯︵ ┻━┻" + "\n" + "You Lose!");
}

var chacSearch = function(currentInput) {
    while( i<words.secretWord1.secretArray.length ){
        if( words.secretWord1.secretArray[i] === currentInput){
            wordFound++;
            return wordFound;} i++}}


var inputHappened = function(currentInput){
    chacSearch(currentInput);
    document.querySelector('#input').value = ""
    return failFlips;
};

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


/* else {
                tableFlipping();
                wordAttempts++
                if (wordAttempts === 14) {
                    gameOver(); }
                return wordAttempts;
            }
} */