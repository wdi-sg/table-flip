console.log("hello script js");
var secretWord = ['c','a','t'];
var correctGuess = [];
var wrong = true;
var notify = "You have guessed wrong.";
var hangmanAll = ["(","╯","ರ"," ~ ","ರ","）","╯","︵"," ┻","━","┻"];
var hangmanTrack = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
  for (i=0; i<secretWord.length; i++) {
  	if (currentInput==secretWord[i]) {
  		correctGuess.push(secretWord[i]);
  		notify = "You have guessed right.";
  		wrong = false;
  		console.log(wrong);
  	} else {
  	}
  }
  console.log(wrong);
  if (wrong) {
  	var a = hangmanTrack.length;
  	hangmanTrack.push(hangmanAll[a]);
  }
  console.log(wrong);
  wrong = true;
  document.querySelector('#input').value = ""
  if (correctGuess.length<secretWord.length && hangmanTrack.length<hangmanAll.length) {
  	return notify + "So far you have guessed " + correctGuess.length + " letters correctly. " + correctGuess +". Hangman: " + hangmanTrack;
  } else if (correctGuess.length==secretWord.length){
  	return "You win!"
  } else {
  	return "You lose!"
  }
}