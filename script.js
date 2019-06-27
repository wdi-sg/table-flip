// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };
var secretWord = ['c', 'a', 't'];
var letterFound = false; //by default


var backupflipArray = ["(", "╯", "ರ", " ", "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"];
var displayflipArray = [];
var correctCounter = 0;
var wrongCounter = 0;

var correctMessage = ""
var wrongMessage = `You've guessed wrong ${wrongCounter} times!`;
var winMessage = ""
var loseMessage = "Game Over!"

console.log(backupflipArray); // original length 14, index 0 -> 13
console.log(displayflipArray);

var inputHappened = function(currentInput){
  //logs input
  var letterToSearch = currentInput;
  console.log( "Searching for " + currentInput );

    letterFound = false; //reset status
//loop through secretWord to check if letterFound = true
    i = 0;
    while (i < secretWord.length) {
        if (secretWord[i] === letterToSearch){
        letterFound = true;
        correctCounter += 1;
        }
        i += 1;
    }
//check if letterFound is still false
//if so, count a loss, push displayFlipArray
    if (letterFound === false){
    displayflipArray.push(backupflipArray[wrongCounter]);
    wrongCounter += 1;
    }
//is game over?
//if no, show progress. if yes, show message
    if (displayflipArray.length <= 14) {
        display(displayflipArray);
    } else {
        display(loseMessage);
    }

    console.log("Letter found :" + letterFound);
    console.log("Correct Guesses :" + correctCounter);
    console.log("Wrong Guesses :" + wrongCounter);
    document.getElementById('input').value = null;
};
// on user input:
// if user guesses wrong, add a character from table flip, so...

//function to look for input in secretWord array





//     then cycle through secretword array
//     i = 0
//     while i < secretword.length,
//     if secretword[i] === lettertosearch, letterfound === true,
//                 i += 1

//     else...


 // displayflipArray.push(backupflipArray[wrongCounter]);
 //            wrongCounter += 1;
//push from backup to display []
//     show display []
//     check if game has ended
//         if yes, end the game and -m