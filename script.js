console.log("hello script js");

var secretWord="cat".split("");
var tableFlip="(╯ರ~ರ）╯︵┻━┻".split("");
var tableFlipMsg = "";
var letterFound = false;
var i = 0;


var wrongGuessCount = 0;
var letterGuessed = [];

var inputHappened = function(currentInput){
    letterGuessed.push(currentInput);
    for(i=0; i<secretWord.length;i++){
        if(secretWord[i] === currentInput){
            letterFound = true;
            break;
        }
        else{
            letterFound = false;
         }
     }
     if (letterFound){
         display("You found the correct letter! Guesses so far:" + letterGuessed.join(","));
     }
     else{
        display("Wrong guess, please try again.. Guesses so far:" + letterGuessed.join(","));
        wrongGuess();
     }

}

function wrongGuess(){
   if(wrongGuessCount < tableFlip.length){
       tableFlipMsg = tableFlipMsg + tableFlip[wrongGuessCount];
       display2(tableFlipMsg);
  }
  else {
    display("YOU LOST!");
  }
     wrongGuessCount++;
    display2(tableFlipMsg);
}