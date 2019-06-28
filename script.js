var secretWord = "rabbit".split("");

var correctGuesses = 0;
var wrongGuesses = 0;

var lettersGuessed = [];
var filled = 0;

var tries = 3;
var letters = /^[A-Za-z]+$/; // regex for alphabet only

// Initialise the empty '_' for the secret word
for (var i=0; i<secretWord.length; i++) {
    document.querySelector("#secret-word").append("_ ");
}

var tableFlip = function () {
    switch(tries){
    case 2 :
        displayTableFlip("┳━┳");
        break;

    case 1 :
        displayTableFlip("(ರ ~ ರ）┳━┳");
        break;

    case 0 :
        displayTableFlip("(╯ರ ~ ರ）╯︵ ┻━┻");
        displayMessage("Sorry, you have ran out of tries!");
        break;
    }
};

var updateSecretWord = function(){
    let secretWordGuess = "";
    filled = 0;
    for (var i in secretWord){
        var letter = secretWord[i];
        if (lettersGuessed.includes(letter)) {
            secretWordGuess += letter + " ";
            filled++;
        } else {
            secretWordGuess += "_ ";
        }
    }

    if (filled == secretWord.length) {
        displayMessage("You won!")
    }

    document.querySelector("#secret-word").innerText = secretWordGuess;
};
var inputHappened = function(currentInput){
    if(tries === 0) {
        displayMessage("You lost, stop playing.");
        return;
    }
    if(filled === secretWord.length) {
        displayMessage("You already won!");
        return;
    }

    if(!currentInput.match(letters)) {
        displayMessage("Please put in a valid letter.");
        return;
    }
    if(lettersGuessed.includes(currentInput)) {
        displayMessage("You have already guessed this letter.");
        return;
    }

    lettersGuessed.push(currentInput);

    if (secretWord.includes(currentInput)) {
        displayMessage("You got a letter right!");
        updateSecretWord();
        correctGuesses++;
    }
    else {
        tries--;
        displayMessage(`Let's try again! You have ${tries} tries left.`);
        tableFlip();
        wrongGuesses++;
    }

    displayLettersGuessed(`Letter(s) guessed: ${lettersGuessed.join(", ")}`);
    displayGuessCount(`Guesses: ${correctGuesses} correct, ${wrongGuesses} wrong.`);
};