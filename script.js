/*
## Game Play

Create a game that guesses a secret word.

For this first version of your game, the secret word will be "cat".

The user will guess a single letter at a time.

For each wrong guess one character of the table flip is added to the running total.

When the whole figure is completed then the user loses.


*/

console.log("hello script js");
word1='cat';
array1=word1.split('');
word2='doggy';
array2=word2.split('');
word3='alphabet';
array3=word3.split('');
var secretWord= [array1,
    array2,
    array3];

var userGuess = [array1,
    array2,
    array3];
var round=0;
var correctLetters=[];
var maxGamePenalty= ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
var gamePenalty=[];
var penaltyCount=0;
var correctGuess;
var correctLetters;
var correctCount=0;

var inputHappened = function(currentInput){

currentInput=currentInput.toLowerCase();
for(var i=0;i<userGuess.length;i++)
{

    if(userGuess[round][i]===currentInput)
    {
        console.log(userGuess[round][i]);

            correctGuess=userGuess[round][i];

            userGuess[round].splice(i,1);
            correctLetters.push(correctGuess);

            correctCount=1;
    }


}
penaltyCheck();


correctCount=0;
if(userGuess[round].length===0){
    round++;
    if (round<userGuess.length)
    {
        output=`Round ${round}. \n  You have ${maxGamePenalty.length-gamePenalty.length} tries left.`
            correctLetters=[];
    }

        else
        {
            output=`You have guessed all the letters correctly. Well done. Try again`;
                reinitialised();}

}
else
if(gamePenalty.length===maxGamePenalty.length){
    output='You have lost. Try again'
    reinitialised();
}
else{
    output=`You have guessed the letters "${correctLetters.join('')}"correctly. \n You have ${userGuess[round].length} letters left.  \n Current penalty table is ${gamePenalty}. \n  You have ${maxGamePenalty.length-gamePenalty.length} tries left.`;
}

        console.log(userGuess);
        console.log(gamePenalty);
        console.log(penaltyCount);

  return output;
};

var penaltyCheck=function(){
    if(correctCount!==1){
                    gamePenalty[penaltyCount]=maxGamePenalty[penaltyCount]
                    penaltyCount++;
                    console.log(gamePenalty);
                    console.log(penaltyCount);
}
}

var lostWinCondition=function(){

}

var reinitialised=function(){
    correctLetters=[];
            userGuess=secretWord;
        gamePenalty=[];
        penaltyCount=0;
        round=0;
}