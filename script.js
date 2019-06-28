console.log("hello script js");

//set up secret word
var word = "christmas"
console.log('The secret word is : ' + word);
var secretWord = word.split('');

//globals
var progress;
var count = 0;

//empty array to store the guesses
var answerArray = [];

//fill in the answer array with empty spaces matching number of alphabets
var startUp = function () {
    for (var i = 0; i<secretWord.length; i++){
        answerArray[i]="_ ";
    }

    //join them in a string
    progress = answerArray.join("");
    document.getElementById("answer").innerHTML = progress;
}

//hangman appearance
var hangman =["(","╯","ರ","~","ರ",")","╯","︵","┻","━","┻"];

/*HOW TO DO - every wrong guess hangman appears
var valueFound = false;
var j = 0;
while (valueFound){
    document.getElementById("stat").innerHTML = hangman[j];
    j++;
}
*/

//game loop
function guess (){
    var letter = document.getElementById("letter").value;

    if (letter.length > 0){
        for (var i = 0; i < secretWord.length; i++){
            if (secretWord[i] === letter){
            answerArray[i] = letter;
            }
        }

        count++;
        document.getElementById("counter").innerHTML = "No. of guesses: " + count;
        document.getElementById("answer").innerHTML = answerArray.join("");
    }
    if(count>11){
        document.getElementById("stat").innerHTML = "Uh oh, you lost the game";
    }
}