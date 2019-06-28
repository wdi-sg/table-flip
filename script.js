
// Declaring Global Variables //
let tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻";
let tableFlipArray = tableFlip.split('');

let secretWord = "potato";
let secretArray = secretWord.split('');

let emptyArray = Array(secretArray.length).fill("_");

let totalGuessesAllowed = tableFlipArray.length;
let totalNumCorrectGuess = secretArray.length;

let correctGuessSoFar = 0;
let wrongGuessSoFar = 0;

// This is preparing the number of blank spaces
let placeholder = emptyArray.join("")
document.getElementById("#template").innerHTML = placeholder


// When user types something into input bar //
var inputHappened = function(currentInput){

    let userGuess = currentInput;

    let valueFound = false;
    let i = 0;

    while(i < secretArray.length){

      if( secretArray[i] === userGuess ){
        valueFound = true;
      }

      i = i + 1;
    }

    // When the user types a correct letter
    if (valueFound === true){
        document.getElementById("#correctGuess").append(userGuess + " ");

        // This is to find all the indexes of the userGuess in the secret word
        // Indices is an array of the indexes
        // Indices.length means the number of times userGuess appears in the secret word
        let indices = [];
        let indexNumber = secretArray.indexOf(userGuess);
            while (indexNumber != -1) {
                indices.push(indexNumber);
                indexNumber = secretArray.indexOf(userGuess, indexNumber + 1);
            }

        // This is for replacing the placeholder with the userGuess
        for (let k = 0; k < indices.length; k ++) {
            let arrayPosition = indices[k];
            emptyArray[arrayPosition] = userGuess;
        }

        // This updates correctGuessSoFar with number of times userGuess appears in the secret word
        correctGuessSoFar = correctGuessSoFar + indices.length;

        placeholder = emptyArray.join("")
        document.getElementById("#template").innerHTML = placeholder
    }

    // When user types an incorrect letter
    else {
        document.getElementById('#wrongGuess').append(userGuess + " ");
        document.getElementById('#tableFlip').append(tableFlipArray[wrongGuessSoFar]);

        wrongGuessSoFar ++;
    }

    // To signal the end of the game if you win
    if (correctGuessSoFar === totalNumCorrectGuess) {
        alert("You Win! The secret word is " + secretWord);
    }

    // To signal the end of the game if you lose
    else if (wrongGuessSoFar === totalGuessesAllowed) {
        alert("Game Over! You lose!")
    }
};