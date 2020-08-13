console.log("hello script js");


var secretWord = "cat";
var secretWordArr = secretWord.split("");
var correctLettersGuessed = [];
var wrongLettersGuessed = [];
var tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻";
var tableArr = tableFlip.split("");
var strokes = [];
var count = 0;
var output2 = document.getElementById("output2");


var inputHappened = function(currentInput) {

    if ( currentInput.length == 1 && correctLettersGuessed.length != secretWordArr.length && isNaN(currentInput) ) {

        var i = 0;
        while ( i < secretWordArr.length ) {

            //check if input matches iterated letter
            if ( currentInput == secretWordArr[i] ) {
                correctLettersGuessed.push(currentInput);
                var output = "You guessed right!\n\nCorrect letters guessed so far: " + correctLettersGuessed.join(", ");
            }

            else {
                wrongLettersGuessed.push(currentInput);
                strokes.unshift(tableArr.shift());
                output = "You guessed wrongly!\n\nWrong letters guessed so far: " + wrongLettersGuessed.join(", ");
            }

            i++;
        }

    }

    else if ( correctLettersGuessed.length == secretWordArr.length )  {
        output = "You won the game!";
    }

    else if ( currentInput.length != 1 )  {
        output = "One alphabetical value only!";
    }

    else if ( !isNaN(currentInput) ) {
        output = "Alphabets only!"
    }

    input.value = "";
    return output;

};


// for ( i = 0 ; i < secretWord.length ; i ++ ) {

//     //check if input matches iterated letter
//     if ( currentInput == secretWord[i] ) {
//         correctLettersGuessed.push(currentInput);
//         var output = "You guessed right!\n\nCorrect letters guessed so far " + correctLettersGuessed.join(", ");
//     }

//     else {
//         wrongLettersGuessed.push(currentInput);
//         strokes.unshift(tableArr.shift());
//         output = "You guessed wrongly!\n\nWrong letters guessed so far " + wrongLettersGuessed.join(", ");
//     }

// }


// secretWordArr.forEach ( function ( letter ) {

//         //check if input matches iterated letter
//         if ( currentInput == letter ) {
//             correctLettersGuessed.push(currentInput);
//             var output = "You guessed right!\n\nCorrect letters guessed so far " + correctLettersGuessed.join(", ");
//         }

//         else {
//             wrongLettersGuessed.push(currentInput);
//             strokes.unshift(tableArr.shift());
//             output = "You guessed wrongly!\n\nWrong letters guessed so far " + wrongLettersGuessed.join(", ");
//         }
// })