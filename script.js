
var secretWord = ['c','a','t'];
var wrongWord = ['(','╯','ರ',' ','~',' ','ರ','）','╯','︵','┻','━','┻'];
var storedWord = "";
var flipTable = "";
var counter = 0;
var wrongCount= 0;

var guessWord = function(input){
    for (var i = 0; i < secretWord.length; i++){
        if (input === secretWord[i] && counter < secretWord.length){
            counter++;
            storedWord += secretWord[i];
            console.log(counter);
            console.log(storedWord);
            return ("Correct! Words found left: " + (secretWord.length - counter));
        }
    }
    if (input !== secretWord[i]){
        wrongCount++;
        console.log("Wrong count is: " + wrongCount);
    }
};

// var guessWrong = function(){
//     for (var i = 1; i < wrongWord; i++){
//         if (wrongCount === i){
//             flipTable = flipTable + wrongWord.shift();
//         }
//     }
// };

var inputHappened = function(currentInput){
  var correct = guessWord(currentInput);

  if (correct) {
    console.log("correct if statment");
      return correct;
  } else if (counter === secretWord.length){
    return "Yay completed!" + " Words searched are: " + storedWord;
  } else if (wrongCount > 0 && wrongCount < 14){
    flipTable = flipTable + wrongWord.shift();
    return flipTable;
  } else {
    return "Game over!! " + flipTable;
  }
};