console.log("hello script js");

var secretWord = ['c','a','t'];
var tableFlip = ["(", "╯", "ರ", " ~ ", "ರ", "）", "╯", "︵", "┻", "━", "┻"]; //11 items
var lettersFound = 0;
var lettersWrong = 0;
var letterWrongCounter = [];
var tableFlipStorage = 0;
var wordsCorrect = 0;


var inputHappened = function(currentInput){
console.log( currentInput );
var counter=0;
while(counter<secretWord.length){
    if(secretWord[counter] === currentInput){
        document.querySelector('#input').value = ""
        lettersFound++;
        counter++
        if(lettersFound === secretWord.length){
            console.log(counter)
            return ("you found a cat!")
        }
        console.log(counter)
        return( "you found a letter")
    }else
    counter++
}
console.log("final "+ counter)
document.querySelector('#input').value = ""
lettersWrong++;
//var test = test + tableFlip.shift();
//console.log (test)
tableFlipStorage = tableFlip.shift()
letterWrongCounter.push(tableFlipStorage)
if(lettersWrong === 12){
    return("YOU LOSE")
}
return("wrong letter " + letterWrongCounter);
console.log(letterWrongCounter)
};















/*while( i<secretWord.length ){
if( secretWord[i] === currentInput ){
    document.querySelector('#input').value = ""
    lettersFound++;
    return "you found a word!"
        if(lettersFound === 3){
        return "you found a cat!"
        }
    }
    i = i+1;
    }
    return "Wrong letter"
};*/