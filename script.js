console.log("hello script js");

//create array with letters of secret word. Use split function
var secretWord = ['c', 'a', 't'];
//var letterArray = secretWord.split('');
//console.log (letterArray);

//create var to capture number of right and wrong guesses
var correctGuesses = 0;
var wrongGuesses = 0;
var totalGuesses = correctGuesses + wrongGuesses;

//create var to hold value and allow for loop to run
var i = 0;
var letterFound = false;

//when input happens, check input against array
var inputHappened = function(currentInput){
  console.log( currentInput );

    //if wrong guesses are less than 10, check input against array
    if(wrongGuesses=0){
        var checkLetters = function(currentInput) {
            while (i < secretWord.length){
                console.log ("i is " + secretWord[i]);
                i = i + 1;
                }
            }
        }
    };