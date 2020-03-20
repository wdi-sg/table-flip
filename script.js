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

function validInput(char){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if(alphabet.includes(char)){
    }
    else{
        alert("Invalid input, only single lower case letters instead");

    }
}
function wordBuilder(array) {
    var word = "";
    for (element in array) {
        word = word + array[element];
    }
    return word;
}

function partialWordBuilder(array, index) {
    var word = "";
    if (index <= array.length - 1) {
        for (i = 0; i <= index; i++) {
            word = word + array[i];
        }
        return word;
    }
    else{
        return wordBuilder(array);
    }


}



function uniquePush(char, array) {
    if (!array.includes(char)) {
        array.push(char);
    } else {
        alert(`You already guessed "${char}"`);
    }
}
// Looks for character in given array, updates global variable for winning condition tracking
function searchArray(enteredChar, array) {
    var result = false;
    if (array.includes(enteredChar)) {
        uniquePush(enteredChar, correctGuesses);
        console.log(`good guess ${correctGuesses}`);
        result = true;
        var reactEmoji = partialWordBuilder(resultChar, (incorrectCounter - 1));
        outputMsg = (`${enteredChar} is correct.\nCorrect guesses so far: ${correctGuesses}\n Wrong guesses so far: ${wrongGuesses}\n${reactEmoji}`);
    } else {
        uniquePush(enteredChar, wrongGuesses);
        console.log(`wrong guess ${wrongGuesses}`);
        incorrectCounter = incorrectCounter + 1;
        if (incorrectCounter <= resultChar.length) {
            var reactEmoji = partialWordBuilder(resultChar, (incorrectCounter - 1));
            outputMsg = (`${enteredChar} is wrong.\nCorrect guesses so far: ${correctGuesses}\n Wrong guesses so far: ${wrongGuesses}\n${reactEmoji}`);
        } else if (incorrectCounter > resultChar.length) {
            var reactEmoji = partialWordBuilder(resultChar, (incorrectCounter - 1));
            outputMsg = (`${enteredChar} is wrong.\nCorrect guesses so far: ${correctGuesses}\n Wrong guesses so far: ${wrongGuesses}\n${reactEmoji}`);
            outputMsg += "\n\nGame Over!";
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
        var reactEmoji = partialWordBuilder(resultChar, (incorrectCounter - 1));
        outputMsg = (`${character} is correct.\nCorrect guesses so far: ${correctGuesses}\n Wrong guesses so far: ${wrongGuesses}\n${reactEmoji}`);
        outputMsg += (`\n\nYou Win!\nThe secret word was "${word}."`);
        printResult = outputMsg;
        //printResult = (`You Win!\nThe secret word was "${word}."`);

        return printResult;
    }

}


var inputHappened = function(currentInput) {
    console.log(currentInput);
    validInput(currentInput);
    var output = makeAGuess(currentInput);
    clear();
    return output;
}