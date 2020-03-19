console.log("hello script js");

var secretWord = ['c', 'a', 't'];
var corretLetters = []
var flipTable = ['(', '╯', 'ರ', ' ~', ' ರ', '）', '╯', '︵', ' ┻', '━', '┻'];
var currentTable = []
var wrongGuesses = 0;

var initialize = function(){
    document.getElementById('input').value = "";
};


var inputHappened = function(currentInput){
  console.log( currentInput );

  //Create a loop to loop secretWord with input
  for (var i=0; i<secretWord.length; i++){

    //if letter correct
    if(secretWord[i] === currentInput){

        //add letter to array and print array
        corretLetters.push(currentInput);

        //check if player won
        if (corretLetters.length === secretWord.length) {
            initialize();
            return `You WON!!! the word is CAT`
        }

        else{
        // print message
            initialize();
            return `you guessed right! your correct letters are ${corretLetters}`
        }

    }

    //if letter wrong
    else{

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
            return `${currentTable}, you have made ${wrongGuesses} wrong guesses.`
        }
    }
  }
};