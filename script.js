var secretWord = ['c','a','t'];
var correctCounter = 0;
var wrongCounter = 0;
var tableFlipper = ['(','╯','ರ',' ','~',' ','ರ','）','╯','︵','┻','━','┻']; //13 characters
var secretWordCombined = secretWord.join('');

var inputHappened = function(currentInput){
for (i=0; i < secretWord.length; i++){
 if (currentInput === secretWord[i] && correctCounter<2){
    var verbatim = secretWord[i] + " is a match!";
    secretWord.splice(i,1);
    correctCounter = (correctCounter+1);
    console.log("number of correct tries: " + correctCounter);
    return verbatim;
    }else if (currentInput === secretWord[i] && correctCounter === 2){
    var verbatim = "you have won the game"+ " The correct answer is: "+ "CAT";
    secretWord.splice(i,1);
    correctCounter = (correctCounter+1);
    console.log("number of correct tries: " + correctCounter);
    return verbatim;
}
}
};