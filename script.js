//Q1: The part 1 is to get numofCharacters === secretWord.length, then user wins? don't need to let user know that answer is cat and show them what have they key in?
//Q2: Or part 1 is actually if the guess is right, add it to correctly guessed letters, the message is "you guessed right". show the letters they have so far. (no need to show them in the order they appear in the word- just show them in the order guessed)



console.log("hello script js");

var letter = /^[A-Za-z]+$/;

var secretWord = ['c', 'a', 't'];

var flipTable = [ '(', '╯', 'ರ', '~', 'ರ' , '）', '╯', '︵',  '┻', '━', '┻' ];

var flipChar = flipTable.shift();

// var errorCharacters = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");

// to split the characters of the "table"

var correctlyGuessedWord = [];

var wronglyGuessedWord = [];

var found = false; //setting value as false means original state is false

var i = 0;

var inputHappened = function(currentInput) {
  console.log( currentInput );
// create a condition that runs if user guessed correctly, instead of found how many characters is correct, found the alphabet that is correct and display out
for (var i = 0; i < secretWord.length; i++) {

        if (currentInput === secretWord[i]) {

        correctlyGuessedWord.push(currentInput); //stores current input that matches any alphabet in secret word into an empty array so that user can see what they have key in, but how do i make it stop once user keyed in all 'c', 'a', 't' in random order?

        console.log(correctlyGuessedWord);

        i++;

        return "You guessed right, now you have " + correctlyGuessedWord;

      } // not sure how to write an else statement here because declare another for condition for wrongly guessed attempts
  }

// create a condition that runs if user guessed wrongly
for (var i = 0; i < flipTable.length; i++) {
        if (currentInput !== secretWord[i]) {

            wronglyGuessedWord.push(flipChar[i]); //start display first flip character all the way through i < flipTable.length
            console.log(wronglyGuessedWord);

            i ++;

            return "Sorry, wrong answer. " + wronglyGuessedWord;
    } else {
        console.log("Sorry, game over!");
        return "Sorry, game over!"; // show this once iterate 11 times
    }
}
}

//access array and display it 1 by 1 each time it loops through