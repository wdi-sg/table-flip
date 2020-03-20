console.log("hello script js");

//Part 1

var secretWord = ["c", "a", "t"];
var resultChar = ["(", "╯", "ರ", " ", "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"];
var lengthOfWord = secretWord.length;
var correctGuesses = [];
var wrongGuesses = [];
var incorrectCounter = 0;
var outputMsg = "";
//(╯ರ ~ ರ）╯︵ ┻━┻

var inputPrompt = document.getElementById("input");
var outputText = document.getElementById("output");

// Change placeholder of input textbox
inputPrompt.placeholder = "Guess a letter";

// Clear any inputted text from input
function clear() {
    inputPrompt.value = "";
}
function wordBuilder(array){
    var word ="";
    for (element in array){
        word = word + array[element];
    }
    return word;
}
function uniquePush(char, array){
    if (!array.includes(char)){
        array.push(char);
    }
    else{
        alert(`You already guessed "${char}"`);
    }
}
// Looks for character in given array, updates global variable for winning condition tracking
function searchArray(enteredChar, array) {
    var result=false;
    if (array.includes(enteredChar)) {
        uniquePush(enteredChar, correctGuesses);
        console.log(`good guess ${correctGuesses}`);
        result = true;
    } else {
        uniquePush(enteredChar, wrongGuesses);
        console.log(`wrong guess ${wrongGuesses}`);
        incorrectCounter = incorrectCounter + 1;
        if (incorrectCounter <= resultChar.length) {
            outputMsg += resultChar[incorrectCounter     - 1];
        } else if (incorrectCounter > resultChar.length) {
            outputMsg = "Game Over!";
        }

    }
    return result;
}

// Takes the guess and prints message according to current score
function makeAGuess(character) {

    var searchResult = searchArray(character, secretWord);
    var printResult = "";

    if (correctGuesses.length != lengthOfWord) {
        printResult = outputMsg;
        return printResult;
    } else {
        var word = wordBuilder(secretWord);
        printResult = (`You Win!\nThe secret word was "${word}."`);

        return printResult;
    }

}


var inputHappened = function(currentInput) {
    console.log(currentInput);
    var output = makeAGuess(currentInput);
    clear();
    return output;
}