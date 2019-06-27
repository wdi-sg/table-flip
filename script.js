var secretWord = ['c', 'a', 't'];
var lose = ["(","╯","ರ ","~"," ರ","）","╯","︵"," ┻","━","┻"];
var show = [];

var wrongTimes = 0;
var guessWrong = 0;
var guessCorrect = 0;
var guessedTimes = 0;

var i = 0;

var inputHappened = function(currentInput){

  console.log(currentInput);
    i = 0;
    //Checking input letter against secretWord array
    while (i < secretWord.length) {
        if (currentInput === secretWord[i]) {

            console.log("match");
            guessCorrect = guessCorrect + 1;
            console.log("You got " + guessCorrect + " correct answer");
            i = i + 1;
        }
        else {
            console.log("no match");
            guessWrong = guessWrong + 1;
            console.log("You guessed wrong " + (guessWrong - 1) + " times");
            i = i + 1;
        }
    console.log("i value is: " + i);
    };

    if (guessWrong%3 === 0) {
        wrongTimes = wrongTimes + 1;
        guessedTimes = guessedTimes + 1;
        show.push(lose[wrongTimes]);


    } else if (guessWrong%2 === 0) {
        guessCorrect = guessCorrect + 1;
        guessedTimes = guessedTimes + 1;
    }

console.log( currentInput );
display(show.join(''));

};





/*



guessedTimes = guessedTimes + 1;
    console.log("You guessed: " + guessedTimes + " times");

chancesLeft = chancesLeft - 1;
console.log("You left: " + chancesLeft + " chances");

console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

*/