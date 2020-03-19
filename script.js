console.log("hello script js");

var secretWord = ['c','a','t'];
var tableflipcharacter = ['(' ,'╯ ', 'ರ ', '~ ', 'ರ ', '）', '╯ ', '︵ ', '┻━┻ '];
var correct = [];
var noOfErrors = -1;
var lost = false;

var checkArray = function(secretWord, currentInput) { for (let k = 0; k < secretWord.length; k++) {
    if(secretWord[k] === currentInput) {
        correct = true;
    }
}
correct = false;
console.log(correct)
};

var tracklettersfound = function(correct, secretWord) {
    if (correct[k] === secretWord[k]) {
        return "You Won The Game!"
    }
    else {
      return
    }
};

//add a winning state. if the letters found equals the number of letters found equals the number of letters  in the word, tell the user they win (this is still just for "cat")

var found = false;

var inputHappened = function(currentInput){
    for (let k = 0; k < secretWord.length; k++) {
    if( currentInput === secretWord[k]) {
        found = true;
    }
}
if (found === true) {
    console.log("found")

    return "You guessed right!";
}
else if (found === false && lost === false){
    console.log("not found")

    noOfErrors +=1;
    console.log(noOfErrors);

    result = tableflipcharacter.slice(0,noOfErrors+1).join('');
    result.replace(/,/g, '');
    if (noOfErrors === tableflipcharacter.length-2){
        lost = true;
    }

    return result;
}
else{
    return tableflipcharacter.slice(0,noOfErrors+2).join('') + "YOU LOST!"
}
};