console.log("hello script js");

var secretWord = ["c", "a", "t"];

//Each time the user guesses wrong, another character of the table flip is added to the running total.
var runningTotal = [];

// Error characters
var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");

var maxTries = errorCharacters.length;

// STEP 1: User keys in input
var statement;

var inputHappened = function(currentInput){
    console.log (currentInput);
    var letterFound = false;
// STEP 2: Check if input is accurate
// 3.1   Use a For Loop (iteration) and then "return the message".
    for (var i = 0; i < secretWord.length; i++) {
// STEP 3: If input is correct, do something
        if(currentInput === secretWord[i]) {
            letterFound = true;
        }
    }
    console.log(letterFound);
    if (letterFound) {
// STEP 5: if you guessed it right, alert a message
        statement = "Well done";
// STEP 4: Else, do something else.
    } else {
        statement = "Try again";
    }
    console.log(statement);
// STEP 6: If not, you've exhausted all your tries. Game is over
//person has gone through the entire length the secret word
    return statement;
};
//









/*var i = 0;

var myArrayLength = secretWord.length;

while (i < stuff.length <= 2) {
  console.log("i is " + i);
  console.log(stuff[i]);
  i = i + 1;
}*/