console.log("hello script js");
var secretWord = ["c","a","t"];
var flipTable = ["(","╯","ರ"," ~ ","ರ","）","╯","︵"," ┻","━","┻"];
var correctLetter = [];
var wrongGuess =[];
var inputHappened = function(currentInput){
  console.log(currentInput);
  for (i=0 ; i < flipTable.length ; i++) {
    if (currentInput === secretWord[i]) {
        var correct = secretWord[i];
        console.log ("correct");
        correctLetter.push(correct);
        return "Correct word";
    } else {
        var flipTable2 = ["(","╯","ರ"," ~ ","ರ","）","╯","︵"," ┻","━","┻"];
        var wrongGuess =[];
        wrongGuess.push(flipTable2[i]);
        flipTable2.shift();
        console.log (wrongGuess);
        return "Wrong Guess" + wrongGuess;
}
    };
};
  // return "WOW SOMETHING HAPPEND";