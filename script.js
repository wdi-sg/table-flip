//variable description

var secretWord = ['c', 'a', 't'];       //secret word array
var tableFlip = ["(","╯","ರ ","~"," ರ","）","╯","︵"," ┻","━","┻"]; //table flip array
var showTableFlip = [];                 //table flip array to show when guess is wrong
var showCorrectLetter = [];             //correct letter array to show when guess is correct

var wrongTimes = 0;                     //count up counter for each wrong guesses
var checkMatch = 0;                     //check for match result of each while loop

var inputHappened = function(currentInput){
    var i = 0;
    //Checking input letter against secretWord array
    while (i < secretWord.length) {

        //If matched, push letter into show array & up guess correct counter
        if (currentInput === secretWord[i]) {
            console.log("match");

            showCorrectLetter.push(currentInput);
            i = i + 1;
        }
        //If not matched, up guess wrong counter
        else {
            console.log("no match");
            checkMatch = checkMatch + 1;
            i = i + 1;
        }
    console.log("i value is: " + i);
    };

    //Game over at 11 wrong guesses, show game over msg
    if (wrongTimes === 10) {
        display("Cat has flipped the table, game is over");
    }
    //if check match = 3, means guessed wrong
    else if (checkMatch%3 === 0) {
        wrongTimes = wrongTimes + 1;                        //increase wrong guess counter
        checkMatch = 0;                                     //resets guess wrong counter
        console.log("No of wrong guesses: "+ wrongTimes);
        showTableFlip.push(tableFlip[wrongTimes]);          //show flip table array
        display(showTableFlip.join(''));
    }
    //if check match = 2, means guessed right
    else if (checkMatch%2 === 0) {
        checkMatch = 0;                                     //resets guess wrong counter
        display("You guessed it right! " + showCorrectLetter.join('')); //show correct letter array
    }
};





/*

console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

*/