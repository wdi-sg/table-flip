console.log("hello script js");

var secretWord = ["c","a","t"];
var wrongGuesses = 0;
var correctGuesses = 0;
var letterFound = false;
var theLetter;
var flipTable = ["┳━┳"," (ರ ~ ರ）┳━┳", "(╯ರ ~ ರ）╯︵ ┻━┻"];

var flipTableDisplay = document.getElementById('flip-table');

  // when user takes a turn and inputs a character
  //checkForMatch("z");
  //checkForMatch(input);

  var checkForMatch = function(input){
    display(input);
  // look through the word to guess. is the input letter there?
  // use a value set outside the searching loop to know if the letter was found

    var i = 0;
    while ( i < secretWord.length){
      console.log( `${i} ${secretWord[i]}`);
      // if the guess right
      if(secretWord[i] === input){
        // add it to correctly guessed numbers
        // the message is you guessed right. show the letters they have so far. (no need to show them in the order they appear in the word- just show them in the order guessed)
        // otherwise the guess is wrong
        // keep track of the number of wrongly guessed letters
        // take one character off the table flip and add it to the current characters
        // the message includes the current table flip characters
        // see if the game has ended because of too many wrong guesses
        // if it has include in the message the game is over
        // show the output to the user
        console.log("match");
        theLetter = input;
        letterFound = true;
      } else {
        console.log("no match");
      }
      i = i + 1;
    }

    // check if letter found
     if( letterFound === true){
      console.log("1 point for the letter " + theLetter);
      correctGuesses = correctGuesses + 1;
      console.log("total points: " + correctGuesses);
      display("1 point for the letter " + theLetter + ",  total points: " + correctGuesses);
      //turn this switch back;
      letterFound = false;
      }else{
      console.log("NOT FOUND");
      wrongGuesses = wrongGuesses + 1;
      console.log("total wrong guesses: " + wrongGuesses);
      console.log(wrongGuesses -1);
      console.log(flipTable[(wrongGuesses-1)]);
      display("Wrong!");
      flipTableDisplay.textContent = flipTable[(wrongGuesses-1)];
    }

    if( wrongGuesses === flipTable.length ){
      display("Game Over!");
      flipTableDisplay.textContent = flipTable[(wrongGuesses-1)];
      //generate a new word, or restart.
    }
  }
