console.log("hello script js");

//Part 1

var secretWord = ["c","a","t"];
var resultChar = ["(","╯","ರ"," ","~"," ","ರ","）","╯","︵"," ","┻","━","┻"];
var lengthOfWord = secretWord.length;
var charsFound = 0;
var incorrectGuess = 0;
var outputMsg = "";
//(╯ರ ~ ರ）╯︵ ┻━┻

var inputPrompt = document.getElementById("input");
var outputText = document.getElementById("output");

// Change placeholder of input textbox
inputPrompt.placeholder = "Guess a character";

// Clear any inputted text from input
function clear() {
    inputPrompt.value = "";
}

// Looks for character in given array, updates global variable for winning condition tracking
function searchArray(enteredChar, array){
    var result = false;
    for (i=0;i<=array.length-1;i++){
        if(enteredChar === array[i]){
            array.shift();
            charsFound = charsFound + 1;
            result = true;
            return result;
        }
        else{
            incorrectGuess = incorrectGuess + 1;
            if (outputMsg.length < resultChar.length){
                outputMsg += resultChar[incorrectGuess-1];
            }else{
                outputMsg = "Game Over!";
            }

            return result;
        }
    }
}

// Takes the guess and prints message according to current score
function makeAGuess(character){

    var searchResult = searchArray(character, secretWord);
    var printResult = "";

    if (charsFound != lengthOfWord){
        printResult = outputMsg;
        return printResult;
    }
    else{
        printResult = "You Win!";
        return printResult;
    }

}
console.log(resultChar.length);
var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = makeAGuess(currentInput);
  clear();
  return output;
};