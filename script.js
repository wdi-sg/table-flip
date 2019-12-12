console.log("hello script js");

//Setting the global variables, which are the arrays
var secretWord = ["c", "a", "t"]
//error Characters to show user when
var errorChar = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");
//max tries = errorChar.length
var maxTries = errorChar.length;

var statement;

//once user keys in input, check if :
    //check if input is correct,
        // use a for loop
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
        if (letterfound) {
             statement = "Good job!";
        // if user input is wrong, have to show the characters
        }else{
            statement = "Try again";
            console.log(statement);
        }
                //return output to exit function
        return statement;
    };