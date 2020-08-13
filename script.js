console.log("hello script js");

/************************ Table Flip ************************
* State 0: User will be prompted to input a letter
* Letter will be pushed to an userGuesses array
* Trigger a function to iterate through userInputs
* If a correct letter is found, add it to a correctGuesses array and display a message
* Else the letter will be added to a incorrectGuesses array
* A character off the table flip figure will be appended to the HTML
* If user inputs a letter that's already in the userGuesses array, a message will * appear to tell them to choose another letter.
* If there are no more characters left in the table flip array, the game is over.
*/

var secretWord = ['c', 'a', 't'];
var tableFlip = ['(', '╯', 'ರ', '~', 'ರ', '）', '╯', '︵', '┻━┻'];
var loseCounter = 0
var userGuesses= [];
var correctGuesses = [];
var incorrectGuesses = [];
var state = 0;
var displayElement = document.querySelector('#output');
var letterToSearch = "";
var letterFound = false;
var winCounter = 0;
var wrongList = document.querySelector("#wrong");
var wrongEntry = document.createElement("p");
var tableFlipDiv = document.querySelector("#tableFlip");
var tableFlipImg = document.createElement("span");


//global win lose conditions
//how should i implement this?
if (winCounter !== secretWord.length && loseCounter < tableFlip.length) {
    displayElement.innerText = "Please guess a letter.";
}
// } else if (winCounter === secretWord.length) {
//     displayElement.innerText = "You win!";
// } else if (loseCounter === tableFlip.length);
//     displayElement.innerText = "You lose!";


var inputHappened = function(currentInput){
  userGuesses.push(currentInput);
  letterToSearch = currentInput;

// for loop to check for correct guesses
// how to prevent duplicating correct letters?
  for (var i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letterToSearch) {
        letterFound = true;
            if (letterFound === true) {
                winCounter++;
                correctGuesses.push(letterToSearch);
                var correctList = document.querySelector("#correct");
                var correctEntry = document.createElement("p");
                correctEntry.innerText = letterToSearch;
                correctList.appendChild(correctEntry);
                return "You guessed right!"
            }
        }
    }
//Otherwise, it will add a lose counter and display the tableFlip image
//Is there a way to automate printing of tableFlip?
//Why are my elements not staying appended?
    loseCounter++;
    incorrectGuesses.push(letterToSearch);
    wrongEntry.innerText = incorrectGuesses;
    wrongList.appendChild(wrongEntry);
    switch (loseCounter) {
        case 1: return tableFlip[0];
        case 2: return tableFlip[0] + tableFlip[1];
        case 3: return tableFlip[0] + tableFlip[1] + tableFlip[2];
        case 4: return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3];
        case 5: return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3] + tableFlip[4];
        case 6: return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3] + tableFlip[4] + tableFlip[5];
        case 7: return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3] + tableFlip[4] + tableFlip[5] + tableFlip[6];
        case 8: return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3] + tableFlip[4] + tableFlip[5] + tableFlip[6] + tableFlip[7]
        case 9:
            return tableFlip[0] + tableFlip[1] + tableFlip[2] + tableFlip[3] + tableFlip[4] + tableFlip[5] + tableFlip[6] + tableFlip[7] + tableFlip[8] + " YOU LOSE."
         }
    }