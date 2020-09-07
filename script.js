// //Q1: The part 1 is to get numofCharacters === secretWord.length, then user wins? don't need to let user know that answer is cat and show them what have they key in?
// //Q2: Or part 1 is actually if the guess is right, add it to correctly guessed letters, the message is "you guessed right". show the letters they have so far. (no need to show them in the order they appear in the word- just show them in the order guessed)
// //Step 1 is to identify if receive input
// //Step 2 check is it right or wrong
// //Step 3: declare functions 1 by 1 before using it probably will have a clearer picture


// console.log("hello script js");

// var letter = /^[A-Za-z]+$/;

// var secretWord = ['c', 'a', 't'];

// var flipTable = [ '(', '╯', 'ರ', '~', 'ರ' , '）', '╯', '︵',  '┻', '━', '┻' ];

// var flipChar = flipTable.shift();

// // var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");

// // to split the characters of the "table"

// var correctlyGuessedWord = [];

// var wronglyGuessedWord = [];

// var found = false; //setting value as false means original state is false

// var i = 0;

// var outputToPlayer = "";

// // var ifAnsisCorrect = function() {
// //     if (letter.length === secretWord.length) {
// //         outputToPlayer="You win!";
// //     }
// // }

// // write a function that runs if answer is wrongly guessed
// var wronglyGuessed = function () {

//     if (wronglyGuessedWord.length === flipTable.length);
//     return ("Game over!");
// }

// var inputHappened = function(currentInput) {
//   console.log( currentInput );
// // create a condition that runs if user guessed correctly, instead of found how many characters is correct, found the alphabet that is correct and display out
// for (var i = 0; i < secretWord.length; i++) {

//         if (currentInput === secretWord[i]) {

//         correctlyGuessedWord.push(currentInput); //stores current input that matches any alphabet in secret word into an empty array so that user can see what they have key in, but how do i make it stop once user keyed in all 'c', 'a', 't' in random order?

//         console.log(correctlyGuessedWord);



//         return "You guessed right, now you have " + correctlyGuessedWord;

//       } // not sure how to write an else statement here because declare another for condition for wrongly guessed attempts
//   }



// // create a condition that runs if user guessed wrongly
// for (var i = 0; i < flipTable.length; i++) {
//         if (currentInput !== secretWord[i]) {

//             wronglyGuessedWord.push(flipChar[i]); //start display first flip character all the way through i < flipTable.length
//             console.log(wronglyGuessedWord);

//             return "Sorry, wrong answer. " + wronglyGuessedWord;
//     } else {
//         wronglyGuessedWord();
//         console.log("Sorry, game over!");
//         return "Sorry, game over!"; // show this once iterate 11 times
//     }
// }
// }


// //access array and display it 1 by 1 each time it loops through
/////////initial pass up

/////redoing because of unit 1's project
console.log("hello script js");

// var regexLetter = /^[a-zA-Z]+$/; // regular expressions always contained between 2 forward slash []means range from a-z lowercase and A-Z uppercase, + is unlimited, ^ is beginning of string, $ is end of string

var songs = ["n", "u", "m", "b"]; //secretWord
// var songs =     ["all we know",//audio1
//                  "apologize",//audio2
//                  "bad liar",//audio3
//                  "everything i need",//audio4
//                  "good life",//audio5
//                  "happier",//audio6
//                  "in my place",//audio7
//                  "move along",//audio8
//                  "numb",//audio9
//                  "outside",//audio10
//                  "pumped up kicks",//audio11
//                  "secrets",//audio12
//                  "solo dance",//audio13
//                  "someday",//audio14
//                  "superheroes",//audio15
//                  "the reason",//audio16
// ];
// using Math.random and Math.floor to pick a random word from the words array
var randWord;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var wrongGuesses = []; //stores array of wrong letters// var incorrectGuesses
// var guessesLeft = 9; //there's another html id with same name so that easier to reference
var underScores = []; //for future display of lines
var correctGuesses = [];//stores array of correct letters //var correctGuesses
var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
var flipTable = initflipTable.split(""); //split the characters of flipTable//tableFlip
// var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"];
var totalLives = 11;
var outputToPlayer = "";
var gameOver = false;
var loserFlipTable = []; // to store characters of losing flipTable//tableFlipResult
var counter = 0;

//Functions

//1st function, if letters found = secretWord.length, you win. If not, carry on
var checkWin = function() {
    if (correctGuesses.length === songs.length) {
        console.log("You win!");
        outputToPlayer += "\nYou win! The word is " + songs.join('');
        gameOver = true;
    }
}

//2nd function, if wrongGuesses = length of table flip. you lose the game.
var checkLose = function() {
    if (flipTable.length === 0) {
        outputToPlayer += "\nYou lose!";
        gameOver = true;
    }
}

//3rd function, to check if the letter is in either correct Guesses or in wrong Guesses, then return true
var isGuessedAlready = function(letterToCheck) {
    for (var i = 0; i < correctGuesses.length; i++) {
        if (correctGuesses[i] === letterToCheck) {
            return true;
        }
    }
    for (var j = 0; j < wrongGuesses.length; j++) {
        if (wrongGuesses[j] === letterToCheck) {
            return true;
        }
    }
            return false; //this is like else statement
}

//4th-func that checks is the guessed letter in the secret word? Return a success if true.
var checkGuess = function(letterToCheck) {
    //uses 5th fun here
    if (!validateGuess(letterToCheck)) {
        outputToPlayer += "Please input only one letter at a time please";
        return;
    }
    //uses 3rd func here
    if (isGuessedAlready(letterToCheck)) {
        outputToPlayer += "letter " + letterToCheck + " has been input already";
        return;
    }
//setting a variable that in the beginning which stores letterFound as a false value
    var letterFound = false;
//this is to output to player what letter they have found
    for (var i = 0; i < songs.length; i++) {
    if (songs[i] === letterToCheck) {
        letterFound = true;
        // outputToPlayer += "letter " + letterToCheck + " found!" + "\n" + "Current correct letters: " + correctGuesses + "\n";
        }
    }

    if(letterFound) {
        correctLetter(letterToCheck);//using 6th function here
    } else {
        wrongLetter(letterToCheck);//using 7th function here
    }
}

//5th-func that ensures player can only key in a letter at a time and ensuring it is not a number
var validateGuess = function(guessedLetter) {
    if (guessedLetter.length === 1) {
        if (isNaN(guessedLetter)) {
            console.log(guessedLetter + " is a valid guess!");
            return true;
        }
    }
            return false;
}

//6th func that starts storing the correctLetter into the array named correctGuesses and also calling 1st-func checkWinState();
var correctLetter = function(guessedLetter) {
    correctGuesses.push(guessedLetter);
    console.log("Current correct guesses: " + guessedLetter + "\n" + "You currently have: " + correctGuesses.join(''));
    outputToPlayer += "letter " + guessedLetter + " found!" + "\n" + "Current correct letters: " + correctGuesses + "\n";

    checkWin();
}

//7th func that starts storing flipTable's icon into a new array, and also starts storing wrong inputs into wrong Guesses array, and display what they have keyed in so far + showing the flip table icon and also calling 2nd-func checkLoseState();
var wrongLetter = function(guessedLetter) {
    loserFlipTable.push(flipTable.shift());
    wrongGuesses.push(guessedLetter);
    outputToPlayer += guessedLetter + " is a wrong guess!" + "\n" + loserFlipTable.join('') + "" + "\n" + "Wrong guesses so far " + wrongGuesses + "\n";
    // outputToPlayer += loserFlipTable.join('');//.join('')removes the comma after concatenation of strings
    console.log("Wrong guesses so far: " + guessedLetter);
    checkLose();
}

//a function that takes in whatever u input and return smth that u set for users to see, ie the ultimate function that sort of run the above functions
var inputHappened = function(currentInput){
  console.log( currentInput );
  if (gameOver) {
    return "Game over, please reload.";
  }
  outputToPlayer += "";
  currentInput = currentInput.toLowerCase().trim(); //means changing it all to lowercase and removing white spaces
  document.querySelector("#input").value = ""; //reset the input box to empty
  console.log("Input character: " + currentInput);
  checkGuess(currentInput);//calling 4th function which is the compiled function
  return outputToPlayer;
};