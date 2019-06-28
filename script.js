console.log("hello script js");

var tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻";
var tableFlipCurrent = "";
var secretWord = ['c', 'a', 't'];
var arrRightGuessChars = [];
var arrWrongGuessChars = [];
var uniqueRightChar = [];
var uniqueWrongChar = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
    //If input equals to secret word
    if (currentInput == secretWord.join('')) {
        displayOne("You Nailed It!");
        displayTwo("");
        console.log("You Nailed It!");
    }
    else{
  printValueFound(currentInput,secretWord);
    }
};

var printValueFound = function(ipWord,secWord){

    for (var i = 0; i < ipWord.length;i++){
        for (var j=0; j < secWord.length; j ++){
            if (ipWord[i] === secWord[i]) {
                arrRightGuessChars.push(ipWord[i]);
                console.log("Correct Letter: " + ipWord[i]);
            }
            else{
                arrWrongGuessChars.push(ipWord[i]);
                console.log("Wrong Letter: " + ipWord[i]);
            }
        }
        //console.log("i is: " + i);
        //console.log("array value: " + ipWord[i]);
    }

    uniqueRightChar = [...new Set(arrRightGuessChars)];
    uniqueWrongChar = [...new Set(arrWrongGuessChars)];

    if (arrWrongGuessChars.length !== 0) {
        if (tableFlip.length === 0) {
            displayOne("Game Over.    " + tableFlipCurrent);
            displayTwo("");
            console.log("Game Over.    " + tableFlipCurrent);
            return 0;
        }
        else {
            tableFlipCurrent += tableFlip[0];
            tableFlip = tableFlip.slice(1);
        }
    }

    displayOne("Correct Letters: " + uniqueRightChar);
    console.log("Correct Letters: " + uniqueRightChar);
    displayTwo("Wrong Letters: " + uniqueWrongChar + " " + tableFlipCurrent);
    console.log("Wrong Letters: " + uniqueWrongChar + "  " + tableFlipCurrent);
};