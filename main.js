var secretWord = ['c','a','t'];
var character =  `(╯ರ ~ ರ）╯︵ ┻━┻`;
var characterArray = character.split('');
var revealCharacter = [];

var numWrongLetters = 0;
var correctLetters = [];
var remainingLetters = secretWord.length;

// var numOfWrongs



var inputHappened = function(currentInput){
 //search through secret word array

for (i = 0; i < secretWord.length; i++){
    if (secretWord[i] === currentInput){
        correctLetters.push(currentInput);
        display(correctLetters);
        if (correctLetters.length === secretWord.length){
            var output = `The word is "${secretWord.join("")}". You've won!`;
            display(output);
        }
    } else if  ( secretWord[i] != currentInput){
        numWrongLetters =numWrongLetters+1;
        //then show a letter from character array
        revealCharacter.push(characterArray[0]);
        characterDisplay(revealCharacter);
        display2(numWrongLetters);
        if (revealCharacter === characterArray){
            var output = "Game Over"
            display(output);
        }
    }
}













}










// var checkWords = function(){

// }




// }



// if (inputHappened() === true){
// //add to correct array
// console.log("sdsdsd");
    // var output = correctLetters;
    // display(output);
// }









