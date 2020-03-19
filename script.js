console.log("hello script js");

var wordsInput = [];
var wordsSecret = ["c","a","t"];
var flip = ["(","╯","ರ ","~ ","ರ","）","╯","︵"," ┻","━","┻"];
var result = "";
var wrongCount = 0;

var inputHappened = function(currentInput){
    console.log( currentInput );
    wordsInput.push(currentInput);
    console.log(wrongCount);
    for(var i = 0; i < wordsInput.length; i++) {
        check(i);
    }
    if (wrongCount == 11) {
        clear();
        result = "You've lost! Try again!";
    }
    if (wordsSecret.length == wordsInput.length) {
        won()
        clear()
        result = "You've Won!";
    }
    console.log(wordsInput);
    clear();
    console.log(result);
    return result;
};

function check(i) {
    if(wordsSecret[i] == wordsInput[i]) {
        correct ()
    } else {
        wrong ()
    }
}

var correct = function () {
    console.log("correct");
}

var wrong = function () {
    wordsInput.pop();
    result=result+flip[wrongCount];
    console.log("wrong");
    console.log("output");
    wrongCount++;
}

var won = function () {
    console.log("won");
}

var clear = function () {
    document.getElementById("input").value = "";
}