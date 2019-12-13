console.log("hello script js");
//secret word is cat
var secretWord = ['c','a','t'];
//wrong guess, take one character from flip
var flip = ["(" , "╯" , "ರ" , "~", "ರ" ,"）" , "╯" , "︵" , "┻" , "━" , "┻"];
//if user inputs too many wrong guesses (>11) -lose
var guessLimit = 11;
var tries = 0;
//counts correct letters - if 3 - win
var foundCorrect = 0;
//empty array to store correct letters
var lettersFound = [];
//empty array to push character from flip
var endgame = [];


var inputHappened = function(currentInput)
{
    console.log( currentInput );
    debugger;
//user input checked against secretWord- if correct then add to lettersFound, show message. If wrong do something else
var trackLetter = 0;
    for (var i = 0; i < secretWord.length; i++)
    {
        if ((currentInput === secretWord[i]) && (foundCorrect < 3))
        {
            foundCorrect = foundCorrect + 1;
            console.log(foundCorrect);
            trackLetter = trackLetter+1;
            lettersFound.push(currentInput);
            console.log(lettersFound);
            return "You guessed right!Current selection(s): "+lettersFound;
        }
    }
    debugger;
        if ((trackLetter === 0)&&(tries < guessLimit))
        {
            tries = tries + 1;
            console.log(foundCorrect);
            console.log(tries);
            flip.pop();
            endgame.push(flip.pop());
            console.log(endgame);
            return (endgame);
       }
       else{
        return "Game over."
       }
}