//var table-flip = ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
var tableFlip = ["┻", "━", "┻", "︵", "╯", "）", "ರ", "~", "ರ", "╯", "("];
var secretWord = ["c", "a", "t"];
var numOfGuesses = 0;
var flippedMessage = "";
var gameIsOver = false;

var inputHappened = function(currentInput) {
    if (!gameIsOver) {
        var currentGuess = currentInput[currentInput.length - 1].toLowerCase();
        console.log(`currentGuess : ${currentGuess}`);
        if (!guessedCorrectly(currentGuess)) {
            flipCharOnTable();
        }
        if (secretWord.length === 0) {
            gameIsOver = declareWinner();
        }
    }
};

var guessedCorrectly = function(currentGuess) {
    var correct = false;
    outer: for (let i = 0; i < secretWord.length; i++) {
        if (currentGuess === secretWord[i]) {
            secretWord.splice(i, 1);
            correct = true;
            break outer;
        }
    }
    console.log(secretWord);
    return correct;
};

var flipCharOnTable = function() {
    flippedMessage = flippedMessage + tableFlip[tableFlip.length - 1];
    tableFlip.pop();
    console.log(tableFlip.length);
    numOfGuesses += 1;
    if (numOfGuesses < 11) {
        console.log("numOfGuesses : " + numOfGuesses);
        display(flippedMessage);
    } else {
        gameIsOver = gameOver();
    }
};

var declareWinner = function() {
    display('You have guessed the secret word!');
    return true;
};

var gameOver = function() {
    display(flippedMessage + '   Game Over!');
    return true;
};
