
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
let counter = 0;

let inputHappened = (currentInput) => {

    for (let i=0; i<guessLetters.length; i++){

        if (currentInput === guessLetters[i]) {
            guessLetters.splice(i,1);
            userAnswer.push(currentInput);
            checkAnswer();
        } else{
            counter = counter + 1;
            wrongAnswer();
            console.log('inputHappened: wrongAnswer()');
        }
    }
    console.log('guessLetters:' + guessLetters);
    console.log('userAnswer:' + userAnswer);
    console.log('counter:' + counter);
    console.log('hangmanCounter.length:' + hangmanCounter.length);
    // console.log('correct answer array:' + guessLetters);
    // console.log('user answer array:' + userAnswer);
    // console.log('hangman array:' + hangman);
    // console.log('hangman counter:' + hangmanCounter);
    display(message)
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

let wrongAnswer = () => {
    if (counter%3 === 0) {
        hangmanCounter = hangman.shift()
        message = `You got it wrong, you have ${hangman.length} more tries!`
        checkLoss()
    }

}

let checkLoss = () => {
    if (hangman.length === 0) {
        message = '(╯ರ ~ ರ）╯︵ ┻━┻';
    } else {
        message = `Keep trying. You have ${hangman.length} tries left!.`
    }
}