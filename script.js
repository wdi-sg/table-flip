console.log("hello script js");
console.log("start log");

var secretWord = ["c", "a", "t"]
var secretWordsDB = []
var hiddenWords = []
var currentWord = []

var gameRunning = false;

var attempts = ["(","╯","ರ","","~","","ರ","）","╯","︵","┻━┻"]
var attempts = ["┳━┳", "(ರ ~ ರ）┳━┳", "(╯ರ ~ ರ）╯︵ ┻━┻"]
var enteredInput = "r"
var attCount = 0


document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        checkForMatch(currentInput);
      });



var displayN = function(input){
    var output = document.querySelector(".notifications");
    output.innerHTML = input;
};
var displayT = function(input){
    var output = document.querySelector(".table");
    output.innerHTML = input;
};
var displayW = function(input){
    var output = document.querySelector(".words");
    output.innerHTML = input;
};

var loadGame= function() {
    var mysteryWord = hideSecretWord(secretWord);
    displayW("asdfda")
    displayW(mysteryWord);
    displayN("Enter a letter and guess the correct word.")

    startCount();
 }

 var switchState = function(){

 }

var checkInput = function(input){
    if (typeof input === 'string'){
        checkForMatch(input);
    } else {
        errorMsg();
    }
}
var errorMsg = function(){
    displayN("Please enter a valid letter!");
}
var checkForMatch = function(input){
    var i = 0;
    console.log(input)
    var numMatch = false;

    while(i < secretWord.length ){
        if (secretWord[i] === input){
            numMatch = true
        }
        i = i + 1;
    }
    if(numMatch){
        console.log(i);
        correctGuess(i);
    } else {
        console.log(numMatch);
        wrongGuess();
    }
}
var hideSecretWord = function(secretWord) {

    var i = 0;

    while( i<hiddenWords.length ){
        hiddenWords.push("_ ");
        i++;
    }
    return hiddenWords
}
var wordToGuess = function(secretWord){
    var i = 0;

    while( i<currentWord.length ){
        currentWord.push(secretWord[i]);
        i++;
    }
    return currentWord
}

var startCount = function() {
    attCount++;
    console.log(attCount + " attempts")
 }



var resetGame= function() {
 }

var gameWon = function() {
 }
var gameLost = function() {
 }

var correctGuess = function(index) {

    displayN("You got 1 letter right! Congrats!")
    console.log("i am here")

 }
var wrongGuess = function() {
    console.log("im not supposed to be here")
    displayN("Please try again. You have 2 more attempts.")

}

var attemptsLeft = function(count) {
}
var attempts = function(count) {

 }












console.log("end log")