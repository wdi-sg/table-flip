console.log('Hello World');

var secretWord = ['c','a','t']
var correctCharPosition = -1;
var isFound = 0;
var displayHintChar = ['_','_','_'];
var displayMessage = '';
var tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");
var wrongGuessArr = [];

// this function will be called in index.html
var inputHappened = function(currentInput){
    console.log("currentInput: " + currentInput);
    isFound = 0;
    displayMessage = '';

//match input with secretWord by alphabet
    for(var i=0; i < secretWord.length; i++){
        if (secretWord[i] === currentInput){
            correctCharPosition = i;
            displayHintChar[i] = currentInput;  //show order of correct guess
            isFound  = 1;
        }
    }

    if (isFound)
    {
        displayMessage = "You guessed right !\n";
    } else
    {//Game over when player exhaust number of tries
        if (tableFlip.length === wrongGuessArr.length){
            displayMessage = "Game over !!!\n"
        } else {// accumulate the individual tableFlip character for each wrong guess. Use JS shortcut for if-else statement; ternary operator
            wrongGuessArr.push(wrongGuessArr.length == 0 ? tableFlip[0] : tableFlip[wrongGuessArr.length]);
            displayMessage = "You guessed wrong !\n";
        }
    }
    displayMessage = displayMessage + "Hint character: " + displayHintChar.join(" ")
    + "\n" + wrongGuessArr.join("");
    display(displayMessage);
    document.querySelector('#input').value = ''; //clear cache
};
