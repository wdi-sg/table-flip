console.log("hello script js");

var wordsArray = [];
var wordsToGuess = ["cat","doggy","alphabet"];

//loop wordsToGuess, split them and put into wordsArray
for(var i = 0; i <wordsToGuess.length; i++){
    wordsArray.push(wordsToGuess[i].split(''));
}//wordsArray = [['c','a','t'],['d','o','g','g','y'],['a','l','p','h','a','b','e','t']]

var secretWord = wordsArray[0];
var winCount = 0;//any wins increase this value, then use it to move on the words array
var tableFlip = ["┳━┳","(ರ ~ ರ）┳━┳","(╯ರ ~ ರ）╯︵ ┻━┻"];
var guessWrongSymbol = ''; //to hold the tableflip symbols
var guessWrongCount = 10;
var correctGuess = [];
var correctGuessCount = secretWord.length; //to count number of letters in secretWord, any correct guess will minus this value

//to give unanswered letters an underscore
for(var i = 0; i <secretWord.length; i++){
    correctGuess.push('_');
}
var adminMode = false; //if this is true, enter admin mode


display("Guess the secret word letter by letter");

var inputHappened = function(currentInput){
    if(currentInput === "admin"){
        adminMode = true;
        display("Welcome Mr.Admin, enter in words, one at a time to add to the list of words to guess.\nType \"endadmin\" to end admin mode");
    }else if (currentInput === "endadmin"){
        adminMode = false;
        display("Good Bye Admin");
    }else if(adminMode === true){
        wordsToGuess.push(currentInput);

        //empty the wordsArray variable and reloop wordsToGuess with split to include new words
        wordsArray = [];
        for(var i = 0; i <wordsToGuess.length; i++){
            wordsArray.push(wordsToGuess[i].split(''));
        }
        display("Processed, please enter next word");

    }else if(adminMode === false){

        var lowerInput = currentInput.toLowerCase();
        var found = false;//if this remain false after end of loop, will continue to line 66

        //loop through each letter if see input matches
        for(var i = 0; i < secretWord.length;i++){
            if (lowerInput === secretWord[i] && correctGuessCount>1){
                correctGuess[i] = secretWord[i];
                secretWord[i] = "~"; //change the guessed letter into other symbol.
                display("Correct! \nYour guess so far: "+correctGuess+"\n"+guessWrongSymbol);
                found = true;
                correctGuessCount -=1
                break;

        //if guessed last letter, initialize all variables and go to next word
            }else if(lowerInput === secretWord[i] && correctGuessCount===1){
                correctGuess[i] = secretWord[i];
                display("You Win! \nThe word is \""+ correctGuess.join('')+"\"\nGuess the next word!");
                found = true;
                initialize();//function to initialize some global variables
            }
        }

        //handles fails
        if(found===false && guessWrongCount>7){
            guessWrongCount--;
            guessWrongSymbol = tableFlip[0];
            display("Wrong!\nYour guess so far: "+correctGuess+"\n"+guessWrongSymbol);
            console.log(guessWrongCount);
        }else if(found===false && (guessWrongCount >3 && guessWrongCount<=7)){
            guessWrongCount--;
            guessWrongSymbol = tableFlip[1];
            display("Wrong!\nYour guess so far: "+correctGuess+"\n"+guessWrongSymbol);
            console.log(guessWrongCount);
        }else if(found===false && guessWrongCount > 1){
            guessWrongCount--;
            guessWrongSymbol = tableFlip[2];
            display("Wrong!\nYour guess so far: "+correctGuess+"\n"+guessWrongSymbol);
            console.log(guessWrongCount);
        }else if(found===false && guessWrongCount  < 2) {
            display("Game Over!\n"+guessWrongSymbol);
            console.log(guessWrongCount);
        }

    }
}

var initialize = function(){
    winCount +=1;
    secretWord = wordsArray[winCount];
    correctGuessCount = secretWord.length;
    guessWrongSymbol = '';
    guessWrongCount = 10;
    tableFlip = ["┳━┳","(ರ ~ ರ）┳━┳","(╯ರ ~ ರ）╯︵ ┻━┻"];
    correctGuess = [];

    for(var i = 0; i <secretWord.length; i++){
        correctGuess[i]='_';
    }

}