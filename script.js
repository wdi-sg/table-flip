console.log("hello script js");

var secretWord = ['c','a','t'];
var flip = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' ];
var correctWord=[];
var wrongWord='';
var guess;
var x;
var control = false;
var temp;

document.querySelector('#output').innerText ='Start guessing!';

var inputHappened = function(currentInput){
    console.log( currentInput );
    if(secretWord){
        if(flip != 0){
            if(secretWord != 0){
                for (x = 0; x < secretWord.length ; x++){
                    if(currentInput === secretWord[x]){
                        correctWord = correctWord + secretWord[x];
                        secretWord.splice(x,1);
                        console.log(correctWord);
                        console.log(secretWord);
                        return "Congratulations! You found " + correctWord ;
                    }
                    else{
                        wrongWord = wrongWord + flip.shift();
                        console.log(flip + 'flip');
                        console.log(wrongWord);
                        return wrongWord;
                    }
                }
            }
            else if (secretWord == 0){
                    return 'Congratulations! You found them all! The word is ' + correctWord + '!';
                }
        }
        else{
            return 'You have run out of tries!';
        }
    }
}