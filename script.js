console.log("hello script js");
const secretWordList = ['cat','doggy','alphabet']
const tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻"
const tableFlipArr = tableFlip.split('');

//initialise secretWord to empty array;
var secretWord = [];
var secretWordCopy = [];
//initialise first round game variables
var correctlyGuessedLetters = [];
var numWronglyGuessedLetters = 0;
var gameOver=false;

var resetGameVariables = function(){
    correctlyGuessedLetters = [];
    numWronglyGuessedLetters = 0;
    gameOver=false;
}

var getWordDisplay = function(){

    var displayArray=[];
    var correctlyGuessedLettersCopy = correctlyGuessedLetters.slice();
    var found=false;
    for(var j=0; j<secretWordCopy.length; j++){
      found=false;
        for(var i=0; i<correctlyGuessedLettersCopy.length; i++){
          console.log(" i: "+correctlyGuessedLettersCopy[i])
          if(secretWordCopy[j]==correctlyGuessedLettersCopy[i]){
            displayArray.push(correctlyGuessedLettersCopy[i]);
            displayArray.push(" ");
            console.log(displayArray)
            correctlyGuessedLettersCopy[i]="1"
            console.log(" length: "+correctlyGuessedLettersCopy.length)
            console.log(" i= "+i);
            console.log(correctlyGuessedLettersCopy)
            found=true;
            break;
          }
        }
        if(found!=true){
          displayArray.push("_ ");
        }
    }
    return displayArray.join("");
}

var updateSecretWord = function(){
    if(secretWordList.length==0){
        return null;
    } else {
        secretWord = secretWordList.shift().split('');
        secretWordCopy = secretWord.slice();
        return secretWord;
    }
}

//letter is string of single char, secretWord is array
var isCorrectGuess = function(letter,secretWord){
    return secretWord.includes(letter);
};

var removeLetter = function(letter){
    secretWord.splice(secretWord.indexOf(letter),1);
    console.log("removed: "+ letter + " curr Secret word: " + secretWord)
};

var hasLetterBeenGuessed = function(letter){
    return correctlyGuessedLetters.includes(letter);
}
//num is a number
var generateFlipTableString = function(num){
    return tableFlip.substring(0,num);
};

updateSecretWord();

var inputHappened = function(currentInput){
  console.log( currentInput );
  console.log(secretWord);
  var msg="";

  if(gameOver==true){
    return "GAME OVER."
  }

  //validation: input must be single char
  if(currentInput.length!=1){
    msg="input must be single character"
    return msg
  }

//check if guess is correct
  if(isCorrectGuess(currentInput,secretWord)==true){
    //add correctly guessed letters to array
    correctlyGuessedLetters.push(currentInput);
    //remove letter from secret word
    removeLetter(currentInput);

    //generate message
    msg="You've guessed right: "+ getWordDisplay();
    if(secretWord.length==0){
        resetGameVariables();
        if(updateSecretWord()==null){
            msg+=" YOU WIN!"
            gameOver = true;
        }
        else msg+=" Guess next word."

    }
  }
  else { //guessed wrong
    numWronglyGuessedLetters++;
    msg="WRONG! " + generateFlipTableString(numWronglyGuessedLetters);
    if(numWronglyGuessedLetters>=tableFlip.length){
        msg+=" GAME OVER!"
        gameOver = true;
    }
  }
  //check if letter there
  //if is there add to correct guess letters
  //show correctly guessed letter(s)

  return msg;
};