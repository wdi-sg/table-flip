
// ------------------------------------------------------
// For this first version of your game, the secret word will be "cat".

// You should simply make this an array of letters: `var secretWord = ['c','a','t'];`

// Each time the user guesses wrong, another character of the table flip is added to the running total.

// When the whole figure is completed then the user loses.
// ------------------------------------------------------

let guessCat = ['c','a','t'];
let userAnswerCat = [];

let guessDoggy = ['d','o','g','g','y']
let userAnswerDoggy = [];

let hangman = ['(','╯','ರ','~','ರ','）','╯','︵','┻','━','┻']
let userHangman = [];
let hangmanCounter = 0;

let message = '';
let validationCheck = false;

let inputHappened = (currentInput) => {

    if (userAnswerCat.length === 3){
        runDoggy(currentInput);
    } else {
        for (let i=0; i<guessCat.length; i++){
            if (currentInput === guessCat[i]) {
                guessCat.splice(i,1);
                userAnswerCat.push(currentInput);
                addCorrectAnswer();
                checkCatAnswer();
            }
        }
    }

    if (validationCheck === false) {
        checkLoss();
    }
    display(message)
    validationCheck = false;
    console.log(`userAnswerCat.length: ${userAnswerCat.length}`)
    console.log(`userAnswerDoggy.length: ${userAnswerDoggy.length}`)
}

// FUNCTIONS TO ACTIVATE FOR LOOPS HERE
let runDoggy = (currentInput) => {
    console.log('currentInput in Doggy' + currentInput)
    for (let i=0; i<guessDoggy.length; i++){
        if (currentInput === guessDoggy[i]) {
            guessDoggy.splice(i,1);
            userAnswerDoggy.push(currentInput);
            console.log('did i enter runDoggy?')
            addCorrectAnswer();
            checkDogAnswer();
        }
    }
}

// FUNCTIONS TO CHECK ANSWERS FOR EACH WORD
let checkCatAnswer = () => {
    if (userAnswerCat.length === 3){
        message = `Congrats! You guessed CAT! You have 2 words left to guess!`
    } else if (userAnswerCat.length === 2) {
        message = `Nice! You guessed 2 letters. 1 letter left!.`
    } else if (userAnswerCat.length === 1) {
        message = `Nice! You guessed 1 letter. 2 letters left!.`
    }
}

let checkDogAnswer = () => {
    if (userAnswerDoggy.length === 5){
        message = `Congrats! You guessed DOGGY! You have 1 word left to guess!`
    } else if (userAnswerDoggy.length === 4) {
        message = `Nice! You guessed ${userAnswerDoggy.length} letter. ${5-userAnswerDoggy.length} letters left!.`
    } else if (userAnswerDoggy.length === 3) {
        message = `Nice! You guessed ${userAnswerDoggy.length} letter. ${5-userAnswerDoggy.length} letters left!.`
    } else if (userAnswerDoggy.length === 2) {
        message = `Nice! You guessed ${userAnswerDoggy.length} letters. ${5-userAnswerDoggy.length} letter left!.`
    } else if (userAnswerDoggy.length === 1) {
        message = `Nice! You guessed ${userAnswerDoggy.length} letter. ${5-userAnswerDoggy.length} letters left!.`
    }
}

let addCorrectAnswer = () => {
    validationCheck = true;
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