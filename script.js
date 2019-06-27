
// ------------------------------------------------------
// For this first version of your game, the secret word will be "cat".

// You should simply make this an array of letters: `var secretWord = ['c','a','t'];`

// Each time the user guesses wrong, another character of the table flip is added to the running total.

// When the whole figure is completed then the user loses.
// ------------------------------------------------------

let guessLetters = ['c','a','t'];
let userAnswer = [];

let hangman = ['(','╯','ರ','~','ರ','）','╯','︵','┻','━','┻']
let hangmanCounter = 0;

let message = '';
let validationCheck = false;

let inputHappened = (currentInput) => {

    for (let i=0; i<guessLetters.length; i++){

        if (currentInput === guessLetters[i]) {
            guessLetters.splice(i,1);
            userAnswer.push(currentInput);
            validationCheck = true;
            checkAnswer();
        }
    }

    if (validationCheck === false) {
        checkLoss();
    }

    display(message)
    validationCheck = false;
}

let checkAnswer = () => {
    console.log('userAnswer.length:' + userAnswer.length);
    if (userAnswer.length === 3){
        message = `Congrats! You guessed all the words. The answer is CAT.`
    } else if (userAnswer.length === 2) {
        message = `Nice! You guessed 2 letters. 1 letter left!.`
    } else if (userAnswer.length === 1) {
        message = `Nice! You guessed 1 letter. 2 letters left!.`
    }
}

let checkLoss = () => {
    hangmanCounter = hangman.shift();
    if (hangman.length === 0) {
        message = '(╯ರ ~ ರ）╯︵ ┻━┻';
    } else {
        message = `Keep trying. You have ${hangman.length} tries left!.`
    }
}