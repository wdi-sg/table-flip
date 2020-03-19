/*
## Game Play

Create a game that guesses a secret word.

For this first version of your game, the secret word will be "cat".

The user will guess a single letter at a time.

For each wrong guess one character of the table flip is added to the running total.

When the whole figure is completed then the user loses.


*/

//console.log("hello script js");
word1='cat';
array1=word1.split('');
word2='doggy';
array2=word2.split('');
word3='alphabet';
array3=word3.split('');
var secretWord= [array1,
    array2,
    array3];
var wordOfTheRound;
var userGuess = [array1,
    array2,
    array3];
var round=0;
var blankyBracket=[];
var correctLetters=[];
var maxGamePenalty= ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
var PenaltyMultiplier=2;
var maxRight;
var rightPoints=0;
var gamePenalty=[];
var penaltyCount=0;
var correctGuessTimes=0;
var correctLetters;
var correctCount=0;
var correctWord="cat"
var responseCount=0;
var responseType;


var inputHappened = function(currentInput){
if(responseCount===0)
{
    responseType=currentInput;

    output="admin mode. Key words to enter into game. Type endadmin to end";
    responseCount++;
}
console.log(responseType);
if(responseType==='admin')
{
    if(currentInput!=='endadmin'){
        var newKeyWord=currentInput.split("");
        userGuess.push(newKeyWord);
        console.log(userGuess);

    }
    else
    {
        responseType='endadmin';
        responseCount++;
    }
}
    createBlanky();



//maxRight=userGuess[round].length;
//console.log(maxRight);
if((responseCount>1&&responseType==='endadmin')||responseType==='play')
{
    currentInput=currentInput.toLowerCase();
for(var i=0;i<userGuess[round].length;i++)
{

    if(userGuess[round][i]===currentInput)
    {


            correctGuess=userGuess[round][i];
            userGuess[round].splice(i,1);
            correctLetters.push(correctGuess);
//            console.log(correctGuess);
//            console.log(userGuess.round);
            correctCount=1;
            //correctGuessTimes++;
    }


}
penaltyCheck();

//console.log(correctGuessTimes);
correctCount=0;
if(userGuess[round].length===0){
    round++;
    if (round<userGuess.length)
    {
        output=`Round ${round}. \n  You have ${maxGamePenalty.length-gamePenalty.length} tries left.`
            correctLetters=[];
            correctGuessTimes=0;
            blankyBracket=[];
            correctWord=userGuess[round].join("");
            console.log(correctWord);
    }

        else
        {
            output=`You have guessed all the letters correctly. Well done. Try again`;
                reinitialised();}

}
else
if(gamePenalty.length===maxGamePenalty.length){
    switch( PenaltyMultiplier){
            case 0:
            output='(╯ರ ~ ರ）╯︵ ┻━┻ You have lost. Try again';
            reinitialised();
            break;
            case 1:
            output='(ರ ~ ರ）┳━┳. The goddess shine on you. Never give up';
            gamePenalty=[];
            PenaltyMultiplier--;
             penaltyCount=0;
            break;
            case 2:
            output='Everyone makes mistakes. Move on.┳━┳';
                        gamePenalty=[];
            PenaltyMultiplier--;
             penaltyCount=0;
            break;
            default:
            break;

    }


}
else{


    console.log(correctWord);
    console.log(correctLetters);
    var LetterArray=correctWord.split('');
    console.log(LetterArray);
    for(var m=0;m<correctLetters.length;m++)
    {
        for(var n=0;n<LetterArray.length;n++)
        {
            if(correctLetters[m]===LetterArray[n])
            {
                blankyBracket[n]=LetterArray[n];
            }
            else
            {
                blankyBracket[n]="_";
            }
        }
    }
    console.log(blankyBracket);
    output=`You have guessed the letters "${blankyBracket.join(' ')}"correctly. \n You have ${userGuess[round].length} letters left.  \n Current penalty table is ${gamePenalty}. \n  You have ${maxGamePenalty.length-gamePenalty.length} tries left.`;
    blankyBracket=[];
}}


//        console.log(gamePenalty);
//        console.log(penaltyCount);

  return output;
};
alert("Type admin to key in words. Else play to play.");

var createBlanky=function(){

}




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
        correctGuess=0;
        PenaltyMultiplier=3;
}