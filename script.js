console.log("hello script js");

var secretWord = ['c','a','t'];
var tableFlipCharacter = ['( ' ,'╯ ', 'ರ ', '~ ', 'ರ ', '）', '╯ ', '︵ ', '┻━┻ '];
var correct = [];
var noOfMistakes = -1;
var lost = false;

// When the user enters something, look through the array to see if its found.
// var checkArray = function(secretWord, currentInput) {
//     for (let i = 0; i < secretWord.length; i++) {
// if(secretWord[i] === currentInput) {
//         correct = true;
//     }
// }
// correct = false;
// console.log(correct)
// };



// 2. add a variable to keep track of how many letters are foundvar
var trackingLettersFound = function(correct, secretWord) {
    if (correct[i] === secretWord[i]) {
       return "You Won The Game!"
   }
   else {
    return
    }
};

// 3. add a winning state. if the letters found equals the number of letters in the word, tell the user they win (this is still just for "cat")

// Part two tells the user if they have lost.

// Begin putting in the table flip code.

// 1. add the test to see if the user has **not** found a letter (*after the loop is done!*)

// 2. when you know that the user has guessed wrong, add the code that adds to the figure-
//   - keep one data structure for the complete table flip (*an array of all of its characters*)
//   - when the user guesses wrong, take one thing out of the array and add it to a global state variable string (`pop`) on the array
//   - when the length of the table flip array is zero, the game is over. add this conditional logic test to end the game.
//   - show the user when they have lost

var found = false;
var inputHappened = function(currentInput){
    for (let i = 0; i < secretWord.length; i++) {
        if(currentInput === secretWord[i]) {
            found = true;
        }
    }
    if (found === true) {
        console.log("found")

        return "You guessed right!";
    }
    else if (found === false && lost === false){
        console.log("not found")


        noOfMistakes +=1;
        console.log(noOfMistakes);

        result = tableFlipCharacter.slice(0,noOfMistakes+1).join('');
        result.replace(/,/g, '');
        if (noOfMistakes === tableFlipCharacter.length-2){
            lost = true;
        }

        return result;

        //return tableFlipCharacter.join('');
    }
    else{
        return tableFlipCharacter.slice(0,noOfMistakes+2).join('') + "YOU LOST!"
    }

//   console.log( currentInput );
//   if (isNaN(currentInput) === true) {
//   checkArray(secretWord, currentInput);
//   return output = currentInput + " in secret word found!";
// }
//     if (correct === true) {
//         console.log("correct!")
//     }
//     else {
//         console.log("wrong.")
//     }
};