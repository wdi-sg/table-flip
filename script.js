console.log("hello script js");

var presplitWords = ['cat','doggy','alphabet'];
var words=[];
for (i=0; i<presplitWords.length; i++) {
	console.log(i);
	s=presplitWords[i].split('');
	words.push(s);
}

var whichWord = 0;
var correctGuess = [];
var wrong = true;
var notify;
var hangmanAll = ["(","╯","ರ"," ~ ","ರ","）","╯","︵"," ┻","━","┻"];
var hangmanTrack = [];

var inputHappened = function(currentInput){
  notify = "You have guessed wrong.";
  console.log( currentInput );
  for (i=0; i<words[whichWord].length; i++) {
  	if (currentInput==words[whichWord][i]) {
  		correctGuess.push(words[whichWord][i]);
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
  if (correctGuess.length<words[whichWord].length && hangmanTrack.length<hangmanAll.length) {
  	return notify + " So far you have guessed " + correctGuess.length + " letters correctly. " + correctGuess.join('') +". Table-flip: " + hangmanTrack.join('');
  } else if (correctGuess.length==words[whichWord].length && whichWord<2){
  	whichWord++;
  	correctGuess = [];
  	console.log(whichWord);
  	return "You guessed the word! Guess the next word."
  } else if (correctGuess.length==words[whichWord].length && whichWord==2){
  	return "You win! Table-flip: " + hangmanTrack.join('');
  } else {
  	return "You lose! Table-flipped!: " + hangmanTrack.join('');
  }
}