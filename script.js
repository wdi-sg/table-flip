console.log("hello script js");

var tableFlip = [ "(","╯","ರ"," ~"," ರ","）", "╯" , "︵" ," ","┻","━","┻"];
    //console.log(tableFlip[3])

var secretWord = ['c','a','t'];

function wrongGuess(){
    for ( let i = 0; i < tableFlip.length; i ++){
        var tryAgain = tableFlip.shift(i);
        console.log(tryAgain);
    }



}


for ( let i = 0; i < tableFlip.length; i ++){
        console.log(tableFlip.shift());
        console.log(tableFlip.length)

    }

function letterMatch(){
    for ( let i = 0; i < secretWord.length; i++){
        if (secretWord[i] === currentInput);
    return secretWord[i]}
}else{

}





var inputHappened = function(currentInput){


};