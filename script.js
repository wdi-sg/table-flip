console.log("hello script js");

//Setting the global variables, which are the arrays
var secretWord = ["c", "a", "t"]
//keep one data structure for the complete table flip (an array of all of its characters)
var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");

  // when the user guesses wrong, take one thing out of the array and add it to a global state variable string (pop) on the array
var statement;

//once user keys in input, check if :
    //check if input is correct,
    //log running total number of tries,

var inputHappened = function(currentInput){
      console.log( currentInput );
      var letterfound = false;

      for (var i = 0; i < secretWord.length; i++) {
            if(currentInput === secretWord[i]) {
             letterfound = true;
                }
            }
            console.log(letterfound);
            if (letterfound){
                statement = "Good job!";

            } else if (errorCharacters.length < 1){
                statement = "Game over!";
            }
            else{
            statement = "Try again!" + " " + errorCharacters.pop();
        }

            console.log(statement);

            return statement;
        };