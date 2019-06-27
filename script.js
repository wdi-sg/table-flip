
// ------------------------------------------------------
// For this first version of your game, the secret word will be "cat".

// You should simply make this an array of letters: `var secretWord = ['c','a','t'];`

// Each time the user guesses wrong, another character of the table flip is added to the running total.

// When the whole figure is completed then the user loses.
// ------------------------------------------------------

//CAT , DOGGY, ALPHABET
let guessCat = ['c','a','t'];
let userAnswerCat = [];

let guessDoggy = ['d','o','g','g','y'];
let userAnswerDoggy = [];

let guessAlphabet = ['a','l','p','h','a','b','e','t'];
let userAnswerAlphabet = [];

// HANGMAN COUNTER & VALIDATION CHECKER
let hangman = ['(','╯','ರ','~','ರ','）','╯','︵','┻','━','┻']
let userHangman = [];
let hangmanCounter = 0;
let validationCheck = false;
let message = '';

// MAIN FUNCTION
let inputHappened = (currentInput) => {
    if (userAnswerCat.length === 3 && userAnswerDoggy.length === 5){
        runAlphabet(currentInput);
    } else if (userAnswerCat.length === 3){
        runDoggy(currentInput);
    } else {
        runCat(currentInput);
    }
    if (validationCheck === false) {
        checkLoss();
    }
    display(message)
    validationCheck = false;
    console.log(`userAnswerCat.length: ${userAnswerCat.length}`)
    console.log(`userAnswerDoggy.length: ${userAnswerDoggy.length}`)
    console.log(`userAnswerDoggy: ${userAnswerDoggy}`)
    console.log(`userAnswerAlphabet.length: ${userAnswerAlphabet.length}`)
    console.log(`userAnswerAlphabet: ${userAnswerAlphabet}`)
    event.target.value = '';
}

// FUNCTIONS TO ACTIVATE FOR LOOPS HERE
let runCat = (currentInput) => {
    for (let i=0; i<guessCat.length; i++){
        if (currentInput === guessCat[i]) {
            guessCat.splice(i,1);
            userAnswerCat.push(currentInput);
            console.log('did i runCat?')
            addCorrectAnswer();
            checkCatAnswer();
        }
    }
}
let runDoggy = (currentInput) => {
    for (let i=0; i<guessDoggy.length; i++){
        if (currentInput === guessDoggy[i]) {
            guessDoggy.splice(i,1);
            userAnswerDoggy.push(currentInput);
            console.log('did i runDoggy?')
            addCorrectAnswer();
            checkDogAnswer();
        }
    }
}
let runAlphabet = (currentInput) => {
    for (let i=0; i<guessAlphabet.length; i++){
        if (currentInput === guessAlphabet[i]) {
            guessAlphabet.splice(i,1);
            userAnswerAlphabet.push(currentInput);
            console.log('did i runAlphabet?')
            addCorrectAnswer();
            checkAlphabetAnswer();
        }
    }
}

// FUNCTION TO TOGGLE VALIDATION
let addCorrectAnswer = () => {
    validationCheck = true;
}

// FUNCTIONS TO RETURN A MESSAGE TO THE USER
let checkCatAnswer = () => {
    if (userAnswerCat.length === 3){
        message = `Congrats! You guessed CAT! You have 2 words left to guess!`
    } else {
        message = `Nice! You guessed ${userAnswerCat.length} letter(s). ${3-userAnswerCat.length} letter(s) left!.`
    }
}
let checkDogAnswer = () => {
    if (userAnswerDoggy.length === 5){
        message = `Congrats! You guessed DOGGY! You have 1 word left to guess!`
    } else {
        message = `Nice! You guessed ${userAnswerDoggy.length} letter(s). ${5-userAnswerDoggy.length} letter(s) left!.`
    }
}
let checkAlphabetAnswer = () => {
    if (userAnswerAlphabet.length === 8){
        message = `Congrats! You guessed ALPHABET! You WON!`
    } else {
        message = `Nice! You guessed ${userAnswerAlphabet.length} letter(s). ${8-userAnswerAlphabet.length} letter(s) left!.`
    }
}
let checkLoss = () => {
    userHangman.push(hangman[0]);
    hangmanCounter = hangman.shift();
    if (hangman.length === 0) {
        message = '(╯ರ ~ ರ）╯︵ ┻━┻ TABLE FLIPPED!!!';
    } else {
        message = `Keep trying! ${userHangman.join('')}`
    }
}