console.log("hello script js");

var secretWord = ['c','a','t'];


var tableFlip = ['(','╯','ರ',' ~ ','ರ','）','╯','︵ ','┻━┻'];
var totalGuessWrong = '';
var correctGuess = '';
var numberOfCorrectGuess = 0;

display("Guess the secret word letter by letter");

var inputHappened = function(currentInput){

        var lowerInput = currentInput.toLowerCase();
        var found = false;
        for(var i = 0; i < secretWord.length;i++){
            if (lowerInput === secretWord[i] && secretWord.length>1){
                correctGuess += secretWord.splice(i,1)
                display("Correct! \nYour guess so far: "+correctGuess+"\n"+totalGuessWrong);
                found = true;
                numberOfCorrectGuess ++;
                break;
            }else if(lowerInput === secretWord[i] && secretWord.length===1){
                correctGuess += secretWord.splice(i,1);
                display("You Win!");
                found = true;
                numberOfCorrectGuess ++;
            }
        }

        if(found===false && totalGuessWrong.length < 11){
            totalGuessWrong += tableFlip.shift();
            display("Wrong!\nYour guess so far: "+correctGuess+"\n"+totalGuessWrong);
        }else if(found===false && totalGuessWrong.length >10){
            totalGuessWrong += tableFlip.shift();
            display("Game Over!\n"+totalGuessWrong);
        }


}
