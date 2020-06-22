
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
var words = ['big dog','rat','doggy','armadillo', 'general assembly']

var gameLevel = 0;

var secretWord = words[gameLevel];

var tableFlipArrayRef = ["┳━┳", "(ರ ~ ರ）┳━┳" , "(╯°□°）╯︵ ┻━┻"]
var tableFlipArray = tableFlipArrayRef;
var tableFlipElement = "";
var tableFlip = tableFlipElement.split('');
var tableFlipRevealed = [];

// store incorrectly guessed letters in here:
var incorrectLetters = [];

// store correctly guessed letters in here.
// The level is won when correctLetters equals secretWord.
var correctLetters = [];

var outputToPlayer = "";

var gameOver = false;

var restartString = "restart";

// regular expression to filter out letters.
var letter = /^[a-z]+$/;
// and filter out being naughty by adding numbers and symbols in admin mode.
var letterOrSpace = /^[a-z\s]+$/;

var gameRevealedLettersString = "";

var tableFlipGuyString = ""

var happyEmoticons = ["(*＾▽＾)／ Go you!", "d=(´▽｀)=b So happy!", "(◕‿◕✿)", "ᕕ( ᐛ )ᕗ Let's go!", "༼ つ ◕_◕ ༽つ Giff Energy!"];

var sadEmoticons = ["( ._.)", "( ⚆ _ ⚆ )", "⊙﹏⊙", "T_T", "⊂(⊙д⊙)つ", "(^^;)"];

var adminMode = false;
var endAdminKeyword = 'endadmin';
var startAdminKeyword = 'admin';

    // Just for fun, show a random smiley face from the arrays of emoticons.
var randomEmoticon = function(happy) {
    if (happy) {
        return happyEmoticons[Math.floor(Math.random() * happyEmoticons.length)];
    } else {
        return sadEmoticons[Math.floor(Math.random() * sadEmoticons.length)];
    }
}


var resetGame = function() {
    secretWord = words[gameLevel];
    incorrectLetters = [];
    correctLetters = [];
    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === " ") {
            correctLetters.push(" "); // This allows for simple phrases rather than just words.
        } else {
            correctLetters.push("_");
        };
    }
    gameRevealedLettersString = correctLetters.join(" ");
    // when trying to set tableFlipArray to tableFlipArrayRef, it seems that actions on tableFlipArray
    // also act on tableFlipArrayRef. It's not making a copy but instead is referencing the same array.
    // hard coding the tableFlipArray here means it won't get overwritten.
    tableFlipArray = ["┳━┳", "(ರ ~ ರ）┳━┳" , "(╯°□°）╯︵ ┻━┻"];
    tableFlipGuyString = "";
    tableFlipElement = tableFlipArray.shift();
    tableFlip = tableFlipElement.split('');
    tableFlipRevealed = [];
    gameOver = false;
}

var checkWinState = function() {
    /* if letters found = secret Word length you win the game
    if not, carry on. */
    if (correctLetters.join('') === secretWord) {
        gameLevel++;
        if (gameLevel === words.length) {
            outputToPlayer += "\nYou've won the game!\nPlease type " + restartString + " to play again.";
            gameOver = true;
        } else {
            outputToPlayer += "\nYou got " + secretWord + ". Onto level " + (gameLevel + 1) + "! " + randomEmoticon(true);
            resetGame();
        }
    }
}


var checkLoseState = function() {
    // If incorrect Guesses = length of table flip. You lose the game.
    if (tableFlip.length === 0 && tableFlipArray.length === 0) {
        outputToPlayer += ("\nyou lose! Type " + restartString + " to try again.");
        gameOver = true;
    }
}


var isGuessedAlready = function(letterToCheck) {

    // if a letter is in the correct Guesses or incorrect Guesses then return true:
    for (var i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] === letterToCheck) {
            return true;
        }
    }
    for (var i = 0; i < incorrectLetters.length; i++) {
        if (incorrectLetters[i] === letterToCheck) {
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
            outputToPlayer = 'letter ' + letterToCheck + ' found!';
            correctLetter(letterToCheck, i);
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


var correctLetter = function(guessedLetter, indexInWord) {
    /* Guess is correct! */
    correctLetters[indexInWord] = guessedLetter;
    gameRevealedLettersString = correctLetters.join(" ");
    checkWinState();
}


var wrongLetter = function(guessedLetter) {
    /* Guess is wrong! */
    tableFlipRevealed.push(tableFlip.shift());
    if(tableFlip[0] === " ") { // push an additional space.
        tableFlipRevealed.push(tableFlip.shift());
    }
    incorrectLetters.push(guessedLetter);
    outputToPlayer += guessedLetter + " is a wrong guess! " + randomEmoticon(false) + "\n";
    tableFlipGuyString = tableFlipRevealed.join('');
    checkLoseState();
    if (tableFlip.length === 0) {
        if (gameOver) {return};
        tableFlipElement = tableFlipArray.shift();
        tableFlip = tableFlipElement.split('');
        tableFlipRevealed = [];
    }
    // console.log('Incorrect Guesses so far: ');
}


var adminMain = function(currentInput) {
    if (!adminMode) {
        adminMode = true;
    }
    if (currentInput === endAdminKeyword) {
        adminMode = false;
        resetGame();
        return "Exiting admin mode."
    }
    for (var i = 0; i < currentInput.length; i++) {
        if (!letterOrSpace.test(currentInput[i])){
            return "Words entered must be letters or spaces only.";
        }
    }
    if (currentInput !== startAdminKeyword) {
        words.push(currentInput);
    }
    var adminOutputMessage = "";
    adminOutputMessage += "Current words in puzzle:\n"
    adminOutputMessage += words.join("\n");
    adminOutputMessage += "\nEnter a word to add to the list of words.\nEnter " + endAdminKeyword + " to exit admin mode.";
    return adminOutputMessage;
}


var inputHappened = function(currentInput){
    outputToPlayer = "";
    currentInput = currentInput.toLowerCase().trim();
    document.querySelector('#input').value = "" // Reset the input box to be empty.

    if (adminMode || (currentInput === startAdminKeyword)) {
        return adminMain(currentInput);
    }

    if (gameOver) {
        if (currentInput === restartString) {
            gameLevel = 0;
            resetGame();
            return gameRevealedLettersString + "\n┬─┬◡ﾉ(° -°ﾉ) Putting the table back.\nRestarting. Please enter your first letter for a new game.";
        }

        return "Game is over please type " + restartString + " to restart.";
    }

    console.log( "Input character: " + currentInput );
    checkGuess(currentInput);
    return gameRevealedLettersString + "\n" + tableFlipGuyString + "\n" + outputToPlayer;
};

document.querySelector('#output').innerText = "Input a letter to begin the game.";
resetGame();