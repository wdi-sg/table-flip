console.log("hello script js");

var secretWord = ['c','a','t'];
var correctArray =[];
var wrongArray = [];
var symbolArray = ["(", '╯', 'ರ', '~', 'ರ', '）', '╯', '︵',  '┻', '━', '┻'];
// var symbolArray = ['s', 'a', 'a', 'a'];

var inputHappened = function(currentInput){
    var index=0;
    var valueFound = false;
    var wordFound = "";
    while (index < secretWord.length){
        if (secretWord[index] === currentInput){
            valueFound = true;
            wordFound = currentInput;
            correctArray.push(currentInput);
            secretWord.splice(index, 1);
        }
        index += 1;
    }

    if (valueFound === true){
        display("You guessed right " + correctArray)
    } else {
        wrongArray.push(currentInput);
        wrongArray.push(symbolArray.shift());
        display("Wrong! " + wrongArray);
    }

    if (secretWord.length == 0){
        display("You have completed the game!");
    };
    if (symbolArray.length == 0){
        display("You have lost the game!");
    };
};