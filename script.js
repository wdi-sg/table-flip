console.log("hello script js");

//this is the secret word in form array
var secretWord = ["c","a","t"];
var correctGuess = [];

var inputHappened = function(currentInput){

    console.log( currentInput );
    var i =0;
    while (i<secretWord.length){
        if (currentInput === secretWord[i]) {
            correctGuess.push(currentInput);
            console.log(correctGuess);
            display("you found one correct letter!");
            break;


        } else  {
            display("please try again!");
        } // end of if
        i++;
    } // end of while
} //

var checkLength = function (array1, array2) {
    if (array1.length = array2.length)

    //to check for same