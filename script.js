console.log("hello script js");

// creating all necessary global variables

var initHangman = "(╯ರ~ರ）╯︵┻━┻";
var hangman = initHangman.split('');
var hangmanCurrent = [];
var totalLives = 11; // total lives
var userTries = 0; // total times user tried
var wrongTries = 0;

var secretWord = ['c','a','t'];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedAlphabet = []; // input guessed
var guessedAlphabetWrong = []; // track wrong letters
var guessedAlphabetRight = []; // track right letters

var guessedRight = 0;

var answerFound = false;

var message;

var inputHappened = function(currentInput){
    console.log( currentInput );

    // var found === false
    if ( answerFound === false ) {
        // if (currentInput === guessedAlphabetRight) {
        // return "you've already guessed this";
        // document.querySelector("#input").value = "";
        // } else {

            for (count = 0; count < secretWord.length; count++) {
                if (secretWord[count] === currentInput) {
                    guessedAlphabet.push(currentInput);
                    guessedAlphabetRight.push(currentInput);
                    document.querySelector("#input").value = "";
                    guessedRight++;
                    message = "you found: " + guessedAlphabetRight.join('');
                    console.log(count + "first count");
                    return message;
                } else {
                    guessedAlphabetWrong.push(currentInput);
                    guessedAlphabet.push(currentInput);
                    alphabet.pop(currentInput);
                    hangmanCurrent.push(hangman[wrongTries]);
                    totalLives--;
                    wrongTries++;
                    if (totalLives <= 0) {
                        message = "game over! you lost!";
                    } else {
                    message = "sorry, wrong letter, but it's okay, you have " + totalLives + " lives left." + "\n" + hangmanCurrent.join('');
                    console.log(count) + "wrong count";
                    }
                    document.querySelector("#input").value = "";
                    return message;
                }
            }

    // check ALREADY submitted letters

    // if input matches the word (any char)
    // if match change found to true

    // out of the for loop
    // conditional for (if found == true, do something) (else == do something else)
}   else  {
    message = "you won";
}
};

// var wordCheck = function(currentInput){
//     for (count = 0; count < secretWord.length; count++) {
//         if (secretWord[count] === currentInput) {
//             guessedAlphabetRight.push(currentInput);
//             message = "you found a letter: " + currentInput;
//             return message;
//         } else {
//             wrongGuess(currentInput);
//             message = "wrong";
//         }
//     }
//     userTries++;
//     return message;
// };

// var wrongGuess = function (currentInput) {
//     guessedAlphabetWrong.push(currentInput);
//     guessedAlphabet.push(currentInput);
//     alphabet.pop(currentInput);
//     hangmanCurrent.push(hangman[count]);
//     totalLives--;
// }




    // if (currentInput === "c" || currentInput === "a" || currentInput === "t") {
    //     guessedAlphabetRight.push(currentInput);
    //     message = "you found the letter: " + currentInput + "!" + "\n" + guessedAlphabetRight.join('') + "\n" + "you have " + totalLives + " lives left.";
    //     alphabet.pop(currentInput);
    //         if (guessedAlphabetRight.length >= secretWord.length ){
    //             message = "you were right! you guessed the word C A T";
    //         }
    //     document.querySelector("#input").value = "";
    //     totalLives = 11;
    // } else if (isNaN(currentInput) === false) {
    //     message = "no characters please";
    //     document.querySelector("#input").value = "";
    // } else {
    //     guessedAlphabetWrong.push(currentInput);
    //     guessedAlphabet.push(currentInput);
    //     alphabet.pop(currentInput);
    //     hangmanCurrent.push(hangman[count]);
    //     count++;
    //     userTries++;
    //     totalLives--;
    //     document.querySelector("#input").value = "";
    //     message = "wrong letter, you have: " + totalLives + " left" + "\n" + hangmanCurrent.join('');
    //     console.log(userTries, totalLives);

    //     // if total lives = 0, stop game
    //     if (userTries >= 11) {
    //         message = "end of game";
    //         totalLives = 0;
    //     }
    // }