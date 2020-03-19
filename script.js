console.log("hello script js");

var secretWord = ["c","a","t"];
var emptyHangMan = [];
var hangMan = ['(','╯','ರ','~','ರ','）','╯','︵','┻━┻'];

var wordLeft;

var inputHappened = function(currentInput){
  console.log( currentInput );
for (var i = 0; i < secretWord.length; i++) {
    if(currentInput === secretWord[i] && secretWord.length > 1) {
        secretWord.pop();
        var wordLeft = secretWord.length;
        return "One word down, " + wordLeft + " to go!";
    } else if (currentInput === secretWord[i] && secretWord.length <= 1) {
        secretWord.pop();
        return "You win!";
    }
}

if(currentInput !== 'c' || currentInput !== 'a' || currentInput !== 't' && emptyHangMan.length < 9){
        emptyHangMan.unshift(hangMan.pop());
        return emptyHangMan;
    } else if( currentInput !== 'c' || currentInput !== 'a' || currentInput !== 't' && emptyHangMan.length === 9 ){
    return emptyHangMan + " You lose";
}
}




/*var i = 0;
while (i > 0) {
    console.log ("i is " + "i");
    i++;
}*/