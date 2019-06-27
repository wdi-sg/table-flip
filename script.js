console.log("hello script js");
console.log("start log");

var secretWord = ["c", "a", "t"]
var secretWordsDB = []

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

    while(i < secretWord.length ){
        if(input === secretWord[i]){
            console.log(i);
            correctGuess(i);
            break;
        }
        console.log("NO")
        i = i + 1;
    }
    wrongGuess();
}
var hideSecretWord = function(secretWord) {
    var hidden = "";
    var i = 0;

    while( i<secretWord.length ){
        hidden = hidden + "_ "
        i++;
    }
    return hidden
}

var startCount = function() {
    attCount++;
    console.log(attCount + " attempts")
 }

var loadGame= function() {
    var mysteryWord = hideSecretWord(secretWord);
    displayW(mysteryWord);
    displayN("Enter a letter and guess the correct word.")

    startCount();
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