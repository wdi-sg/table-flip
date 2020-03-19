console.log("hello script js");
var word = ['c','a','t'];
var attempts = ['(', '╯','ರ', '~', 'ರ','）','╯','︵','┻━┻'];
var rightAttempt = [];
var wrongAttempt = [];
var wrongletter = 0;

var checkLetter = function(letter){
    for(var i=0;i<word.length;i++){
    if(word.includes(letter)){
    //if(letter === word[i]){
        return true;
    }
    else{
        return false;
    }

}
}
var inputHappened = function(currentInput){
    var output;
  console.log( currentInput );
  var letterFound = checkLetter(currentInput);
  if(letterFound){
    rightAttempt.push(currentInput);
    if(rightAttempt.length < word.length){
        output = "Correct guess, letter is  ${word.join('')}";
    }
    else if(rightAttempt.length === word.length){
        output = "Congrats!! You won the game, the word is " + word.join('');

    }
    else{
        output = "Something went wrong!!";
    }

  }
  else{
    wrongAttempt.push(attempts[wrongletter]);
    wrongletter++;
    if(wrongAttempt.length < attempts.length){
        output = wrongAttempt.join('');
    }
    else if(wrongAttempt.length === attempts.length){
        output = wrongAttempt.join('') + " Sorry, Game Over";
    }
    else{
        output = "Something went wrong!!";
    }

  }
return output;
}