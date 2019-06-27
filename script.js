//var table-flip = ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
var tableFlip = ["┻", "━", "┻", "︵", "╯", "）", "ರ", "~", "ರ", "╯", "("];
var secretWord = [];
var numOfGuesses = 0;
var flippedMessage = "";
var gameIsOver = false;
var wordLibrary = ["cat", "doggy", "alphabet"];
var newGame = true;
var adminMode = false;
var correctGuess = [];
var secretWordLength = 0;

//////////////////////////////////////////////////
// Trigger function from index.html input field //
//////////////////////////////////////////////////
var inputHappened = function(currentInput) {
    currentInput = currentInput.toLowerCase();

    // Admin Mode trigger code

    if (currentInput === "admin") {
        adminMode = true;
        display('GOD MODE ACTIVATED!');
    } else if (currentInput === "endadmin") {
        adminMode = false;
        display('');
        restartGame();
        return;
    }

    // Admin: Add word to library

    if (adminMode) {
        if (currentInput === "admin" || currentInput === "endadmin" || currentInput === "restart") {
            //do nothing
        } else {
            addWordToLibrary(currentInput);
        }
    }

    // Normal gaming mode code

    if (!adminMode) {
        if (newGame) {
            getRandomWord();
            newGame = false;
        } else if (currentInput === "restart") {
            restartGame();
            return;
        }
        if (!gameIsOver) {
            var currentGuess = currentInput[currentInput.length - 1];
            console.log(`currentGuess : ${currentGuess}`);
            if (!chkGuessedCorrectly(currentGuess)) {
                flipCharOnTable();
            }
            if (secretWordLength === 0) {
                gameIsOver = declareWinner();
            }
        }
    }
};

//////////////////////////////////////////////
// Supporting functions:                    //
// (i) add words to word library            //
// (ii) get random words from word library  //
//////////////////////////////////////////////

var addWordToLibrary = function(currentInput) {
    wordLibrary.push(currentInput);
    console.log(wordLibrary);
}

var getRandomWord = function() {
    var randIndex = Math.floor(Math.random() * wordLibrary.length);
    secretWord = wordLibrary[randIndex].split('');
    secretWordLength = secretWord.length;
    secretWordFix = wordLibrary[randIndex].split('');
    for (var i = 0; i < secretWordLength; i++) {
        correctGuess.push('_');
    }
    /*for (var i = 0; i < correctGuess.length; i++) {
        console.log(correctGuess[i]);
    }
    console.log(correctGuess); */
}

/////////////////////////
// ***Gaming engine*** //
/////////////////////////
var chkGuessedCorrectly = function(currentGuess) {
    for (var i = 0; i < secretWord.length; i++) {
        if (currentGuess === secretWord[i]) {
            correctGuess[i] = secretWord[i];
            secretWord[i] = "┻";
            secretWordLength -= 1;
            display("HINT: " + printCorrectGuess() + " Table : " + flippedMessage);
            return true;
        }
    }
    console.log(secretWord);
};

var flipCharOnTable = function() {
    flippedMessage = flippedMessage + tableFlip[tableFlip.length - 1];
    tableFlip.pop();
    console.log(tableFlip.length);
    numOfGuesses += 1;
    if (numOfGuesses < 11) {
        console.log("numOfGuesses : " + numOfGuesses);
        display("HINT: " + printCorrectGuess() + " Table : " + flippedMessage);
    } else {
        gameIsOver = gameOver();
    }
};

var printCorrectGuess = function() {
    var msg = "";
    for (var i = 0; i < correctGuess.length; i++) {
        msg = msg + correctGuess[i] + " ";
    }
    return msg;
}

///////////////////////////////////////
// End of Games Functions:           //
// (i) declare winner                //
// (ii) game is over                 //
// (iii) restart game init variables //
///////////////////////////////////////

var declareWinner = function() {
    display('You have guessed the secret word!');
    return true;
};

var gameOver = function() {
    display(flippedMessage + '   Game Over!');
    return true;
};

var restartGame = function() {
    display('');
    newGame = true;
    gameIsOver = false;
    tableFlip = ["┻", "━", "┻", "︵", "╯", "）", "ರ", "~", "ರ", "╯", "("];
    secretWord = [];
    numOfGuesses = 0;
    flippedMessage = "";
    correctGuess = [];
    secretWordLength = 0;
}
