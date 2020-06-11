console.log("hello script js");

var secretWord = ['c','a','t'];
// const tableFlip = "(╯ರ ~ ರ）╯︵ ┻━┻"
const tableFlip = "_|_"
const tableFlipArr = tableFlip.split('');
var num = 5;
var correctlyGuessedLetters = [];
var numWronglyGuessedLetters = 0;

//letter is string of single char, secretWord is array
var isLetterThere = function(letter,secretWord){
    //checks if given letter is in secret word
    //returns true if letter is in secret word
    return secretWord.includes(letter);
};

var hasLetterBeenGuessed = function(letter){
    return correctlyGuessedLetters.includes(letter);
}

//num is a number
var generateFlipTableString = function(num){
    //returns string based on num
    return tableFlip.substring(0,num);
};
var inputHappened = function(currentInput){
  console.log( currentInput );
  var msg="";
  //validation: input must be single char
  if(currentInput.length!=1){
    msg="input must be single character"
    return msg
  }

  if(hasLetterBeenGuessed(currentInput)==true){
    msg="You've guessed this letter before. Correctly guessed: "+correctlyGuessedLetters;
  }

  if(isLetterThere(currentInput,secretWord)==true){
    correctlyGuessedLetters.push(currentInput);
    msg="You've guessed right "+ correctlyGuessedLetters;
    if(correctlyGuessedLetters.length==secretWord.length){
        msg+=" YOU WIN!"
    }
  }
  else { //guessed wrong
    numWronglyGuessedLetters++;
    msg="WRONG! " + generateFlipTableString(numWronglyGuessedLetters);
    if(numWronglyGuessedLetters>=tableFlip.length){
        msg+=" GAME OVER!"
    }
  }
  //check if letter there
  //if is there add to correct guess letters
  //show correctly guessed letter(s)

  return msg;
};

console.log("isletterthere:"+isLetterThere('a',secretWord));
console.log(num+": "+generateFlipTableString(5));