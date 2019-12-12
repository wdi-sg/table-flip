console.log("hello script js");

var secretWord = ["c", "a", "t"];

// Error characters
var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");

//Each time the user guesses wrong, another character of the table flip is added to the running total.
var runningTotal = [];

var maxTries = errorCharacters.length;

// STEP 7:  When the user guesses wrong, take one thing out of the array and add it to a global state variable string (pop) on the array


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
        statement = "Well done! Your response ( " + currentInput + " ) is correct.";
            } else if(errorCharacters.length < 1) {
                statement = "Game Over!";
            }

// STEP 4: Else, do something else.
             else {
        statement = "Try again! Your response ( " + currentInput + " ) is wrong." + errorCharacters.pop();
    }

    console.log(statement);

//person has gone through the entire length the secret word
    return statement;
};

// STEP 6: If not, you've exhausted all your tries. Game is over


// STEP 8:  When the length of the table flip array is zero, the game is over. add this conditional logic test to end the game.

// STEP 9:  Show the user when they have lost

// When the user inputs wrong letter, errorCharacters.pop() the letter from the errorCharacters variable.
//    errorCharacters.pop(currentInput);

// Then, put the wrong letter into a new array
