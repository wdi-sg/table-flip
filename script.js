console.log("hello script js");
////////////////////////////Part 1
// var secretWord = ['c', 'a', 't'];
// var corretLetters = []
// var flipTable = ['(', '╯', 'ರ', ' ~', ' ರ', '）', '╯', '︵', ' ┻', '━', '┻'];
// var currentTable = []
// var wrongGuesses = 0;

// var initialize = function(){
//     document.getElementById('input').value = "";
// };


// var inputHappened = function(currentInput){
//   console.log( currentInput );

//   //Create a loop to loop secretWord with input
//   for (var i=0; i<secretWord.length; i++){

//     //if letter correct
//     if(secretWord[i] === currentInput){

//         //add letter to array and print array
//         corretLetters.push(currentInput);

//         //check if player won
//         if (corretLetters.length === secretWord.length) {
//             initialize();
//             return `You WON!!! the word is CAT`
//         }

//         else{
//         // print message
//             initialize();
//             return `you guessed right! your correct letters are ${corretLetters}`
//         }

//     }

//     //if letter wrong
//     else{

//         // remove flipTable character and add to currentTable
//         currentTable.push(flipTable.shift());

//         //Keep track of number of wrong guesses
//         wrongGuesses++;

//         //if whole flip table, message game is over.
//         if (flipTable.length === 0) {
//             return `(╯ರ ~ ರ）╯︵ ┻━┻ YOU LOST!!!` ;
//         }

//         else {
//             initialize();
//             return `${currentTable}, you have made ${wrongGuesses} wrong guesses.`
//         }
//     }
//   }
// };




////////////////////////////further 1
var secretWord = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t']
];

var totalLetters = 0;
for (var i=0; i<secretWord.length; i++){
    for (var e=0; e<secretWord[i].length; e++){
        totalLetters++;
    }
}

var correctLetters = []
var flipTable = ['(', '╯', 'ರ', ' ~', ' ರ', '）', '╯', '︵', ' ┻', '━', '┻'];
var currentTable = []
var wrongGuesses = 0;

var initialize = function(){
    document.getElementById('input').value = "";
};


var inputHappened = function(currentInput){
  // console.log( currentInput );

    //Create a loop in secretWord and loop again over the array to check for correct letter
    for (var i=0; i<secretWord.length; i++){

        for (var e=0; e<secretWord[i].length; e++){

            console.log(secretWord[i][e]);

            //if letter correct
            if(secretWord[i][e] === currentInput){

                //remove letter from secretWord
                secretWord[i].splice(e, 1);
                console.log(secretWord);

                //add letter to array and print array
                correctLetters.push(currentInput);

                //check if player won
                if (correctLetters.length === totalLetters) {
                    initialize();
                    return `You WON!!! the word is CAT, DOGGY and ALPHABET`
                }

                else{
                // print message
                    initialize();
                    return `you guessed right! your correct letters are ${correctLetters}`
                }

            }


        }
    }

    //if no return executed, letter is wrong
    // remove flipTable character and add to currentTable
    currentTable.push(flipTable.shift());

    //Keep track of number of wrong guesses
    wrongGuesses++;

    //if whole flip table, message game is over.
    if (flipTable.length === 0) {
        return `(╯ರ ~ ರ）╯︵ ┻━┻ YOU LOST!!!` ;
    }

    else {
        initialize();
        return `${currentTable.join("")}, you have made ${wrongGuesses} wrong guesses.`
    }

};