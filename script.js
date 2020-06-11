console.log("hello script js");

var secretWord = ["c", "a", "t"];

var tableFlip = [ "(", "╯", "ರ", " ~ ", "ರ", "）", "╯", "︵", "┻━┻" ];

var runningTotal = [];

var statement;

var inputHappened = function(currentInput){

    console.log (currentInput);

    var letterFound = false;

        for (var i = 0; i < secretWord.length; i++) {

            if(currentInput === secretWord[i]) {

            letterFound = true;
        }
    }

    console.log(letterFound);

    if (letterFound) {

        statement = currentInput + "? Thats a bingo buckaroo!";

        runningTotal.push( currentInput )

            } else if(tableFlip.length < 1) {

                statement = "Get this FAILURE off my table! (╯ರ ~ ರ）╯︵ ┻━┻";

            } else if(runningTotal.length === 1) {

                statement = "You've guessed it. It be cat!";

            } else {

                tableFlip.pop()

                statement = "Try again! Your response ( " + currentInput + " ) is wrong.";

    }

    console.log(statement);

    return statement;

};