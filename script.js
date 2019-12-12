
/*
PSEUDOCODE Logic for part 1.
secret word is cat.
user types in single letter.
- for each turn, an input letter should be checked in this order:

  - look through the word to guess (a loop). is the input letter there?
  - use a value set outside the searching loop to know if the letter was found

  - if the guess right
    - add it to correctly guessed letters
    - the message is "you guessed right". show the letters they have so far. (no need to show them in the order they appear in the word- just show them in the order guessed)
  - otherwise the guess is wrong
    - keep track of the number of wrongly guessed letters
    - keep an array to display the current table flip figure. it should begin empty, and added to for every wrong answer
    - take one character off the table flip characters and add it to the current table flip figure
    - the message shows current table flip figure
    - see if the game has ended because of too many wrong guesses
        - if it has include in the message the game is over
*/
var words = ['cat','rat','doggy','armadillo']

var gameLevel = 0;

var secretWord = words[gameLevel].split('');

var tableFlipWord = "(╯°□°）╯︵ ┻━┻"
var tableFlip = tableFlipWord.split('');
var tableFlipRevealed = [];

// store incorrectly guessed letters in here:
var incorrectGuesses = [];

// store correctly guessed letters in here:
var correctGuesses = [];

var outputToPlayer = "";

var gameOver = false;

var restartString = "restart";

var letter = /^[a-z]+$/;

var resetGame = function() {
    secretWord = words[gameLevel];
    tableFlip = tableFlipWord.split('');
    tableFlipRevealed = [];
    incorrectGuesses = [];
    correctGuesses = [];
    gameOver = false;
}

var checkWinState = function() {
    /*
    if letters found = secret Word length you win the game
    if not, carry on. */
    if (correctGuesses.length === secretWord.length) {
        gameLevel++;
        if (gameLevel === words.length) {
            outputToPlayer += "You've completed the game! Please type " + restartString + " to play again.";
            gameOver = true;
        } else {
            outputToPlayer += "\nYou win! Onto level " + (gameLevel + 1);
            resetGame();
        }
    }
}

var checkLoseState = function() {
    /* if incorrect Guesses = length of table flip. You lose the game.
    */
    if (tableFlip.length === 0) {
        outputToPlayer += ("\nyou lose! Type " + restartString + " to try again.");
        gameOver = true;
    }
}

var isGuessedAlready = function(letterToCheck) {

    // if a letter is in the correct Guesses or incorrect Guesses then return True:

    for (var i = 0; i < correctGuesses.length; i++) {
        if (correctGuesses[i] === letterToCheck) {
            return true;
        }
    }
    for (var i = 0; i < incorrectGuesses.length; i++) {
    if (incorrectGuesses[i] === letterToCheck) {
            return true;
        }
    }

    return false;
}

var checkGuess = function(letterToCheck) {
    /* is the guessed letter in the secret word? Return a success if true. */
    if (!validateGuess(letterToCheck)) {
        outputToPlayer += "Please input only one letter at a time please.";
        return;
    }

    if (isGuessedAlready(letterToCheck)) {
        outputToPlayer += "letter " + letterToCheck + " has been input already.";
        return;
    }

    var letterFound = false;

    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letterToCheck) {
            letterFound = true;
            outputToPlayer += 'letter ' + letterToCheck + ' found!';
            correctLetter(letterToCheck);
        }
    }

    if (!letterFound) {
        wrongLetter(letterToCheck);
    }
}

var validateGuess = function(guessedLetter) {
    if (guessedLetter.length === 1) {
        if (letter.test(guessedLetter)) { // test for the 1 character to be a letter using Regular Expressions.
            // console.log(guessedLetter + " is a valid guess");
            return true;
        }
    }
    return false;
}

var correctLetter = function(guessedLetter) {
    /* Guess is correct! */
    correctGuesses.push(guessedLetter);
    console.log('Current correct guesses: ' + correctGuesses);
    checkWinState();
}

var wrongLetter = function(guessedLetter) {
    /* Guess is wrong! */
    tableFlipRevealed.push(tableFlip.shift());
    incorrectGuesses.push(guessedLetter);
    outputToPlayer += guessedLetter + " is a wrong guess! \n";
    outputToPlayer += tableFlipRevealed.join('');
    console.log('Incorrect Guesses so far: ');
    checkLoseState();
}

var inputHappened = function(currentInput){
    outputToPlayer = "";
    currentInput = currentInput.toLowerCase().trim();
    document.querySelector('#input').value = "" // Reset the input box to be empty.

    if (gameOver) {
        if (currentInput === restartString) {
            gameLevel = 0;
            resetGame();
            return "┬──┬◡ﾉ(° -°ﾉ)\nrestarting. Please enter your first guess for a new game.";
        }

        return "Game is over please type " + restartString + " to restart";
    }

    console.log( "Input character: " + currentInput );
    checkGuess(currentInput);
    return outputToPlayer;
};