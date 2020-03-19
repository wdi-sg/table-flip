console.log("hello script js");

var secretWord = [  ['c','a','t'] , ['d','o','g','g','y'], ['a','l','p','h','a','b','e','t'] ];
var flip = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' ];
var correctWord=[];
var wrongWord='';
var guess;
var x, y;
var control = false;
var temp;
var totalLength = secretWord[0].length + secretWord[1].length + secretWord[2].length;
console.log(totalLength);

document.querySelector('#output').innerText ='Start guessing!';

var inputHappened = function(currentInput){
    console.log( currentInput );
    if(secretWord){
        if(flip != 0){
            if (correctWord.length == 16){
                    return 'Congratulations! You found them all! \n The letters you got were ' + correctWord + '. \n The words were cat, doggy and alphabet !';
                }
            else if(secretWord != 0){
                for (x = 0; x < secretWord.length ; x++){
                    for(y = 0; y < secretWord[x].length ; y++){
                        if(currentInput == secretWord[x][y]){
                            correctWord = correctWord + secretWord[x][y];
                            //secretWord.splice([x][y],1);
                            delete secretWord[x][y];
                            secretWord.filter(Boolean);
                            console.log(correctWord);
                            console.log(secretWord);
                            return "Congratulations! You found " + correctWord ;
                        }
                    }
                }
                if(currentInput != secretWord[x]){
                        wrongWord = wrongWord + flip.shift();
                        console.log(flip + 'flip');
                        console.log(wrongWord);
                        return wrongWord;
                    }
            }
        }
        else{
            return 'You have run out of tries!';
        }
    }
}