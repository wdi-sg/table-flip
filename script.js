console.log("hello script js");

var secretWord = ["c","a","t"];
var emptyHangMan = [];
var hangMan = ['(','╯','ರ','~','ರ','）','╯','︵','┻━┻'];

var wordLeft;

var inputHappened = function(currentInput){
  console.log( currentInput );
for (var i = 0; i < secretWord.length; i++) {
    if(currentInput === secretWord[i] && secretWord.length > 1) {
        secretWord.splice(i,1);
        console.log("secretWord left: " + secretWord);
        var wordLeft = secretWord.length;
        console.log('wordLeft is ' + wordLeft)
        return "One word down, " + wordLeft + " to go!";
    } else if (currentInput === secretWord[i] && secretWord.length <= 1) {
        secretWord.splice(i,1);
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