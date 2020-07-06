console.log("hello script js");

var presplitWords = ['cat','doggy','alphabet'];
var numberOfWords = presplitWords.length;
var words=[];
for (i=0; i<presplitWords.length; i++) {
	console.log(i);
	s=presplitWords[i].split('');
	words.push(s);
}

var whichWord = 0;
var correctGuess = [];
var guessing = [];
for (i=0; i<words[whichWord].length; i++) {
	guessing.push('_');
}
var wrong = true;
var notify;
var hangmanTrack = [];
var incorrects = 0;
var adminCount = 0;
var inputHappened = function(currentInput){
  notify = "You have guessed wrong.";
  console.log( currentInput );
  if (currentInput=="admin" && adminCount == 0) {
  	adminCount = 1;
  	document.querySelector('#input').value = ""
  	return "Admin mode entered. Enter additional words to guess";
  } else if (adminCount ==1 && currentInput== "endadmin") {
  	adminCount = 0;
  	document.querySelector('#input').value = ""
  	return "Out of admin mode. Continue";
  } else if (adminCount == 1) {
  	presplitWords.push(currentInput);
  	console.log(presplitWords);
  	numberOfWords = presplitWords.length;
	words.push(presplitWords[presplitWords.length-1].split(''));
  	document.querySelector('#input').value = "";
  	return "Added the word "+ currentInput;
  } else {
  	for (i=0; i<words[whichWord].length; i++) {
  	if (currentInput==words[whichWord][i]) {
  		correctGuess.push(words[whichWord][i]);
  		guessing[i]=currentInput;
  		notify = "You have guessed right.";
  		wrong = false;
  		console.log(wrong);
  	} else {
  	}
  }
  console.log(wrong);
  if (wrong) {
  	incorrects++
  }
  if (incorrects==1) {
	hangmanTrack = "┳━┳";
	} else if (incorrects==2) {
	hangmanTrack = "(ರ ~ ರ）┳━┳";
	} else if (incorrects==3) {
	hangmanTrack = "(╯ರ ~ ರ）╯︵ ┻━┻";
  }
  console.log(wrong);
  wrong = true;
  document.querySelector('#input').value = ""
  if (correctGuess.length<words[whichWord].length && incorrects<3) {
  	return notify + " So far you have guessed " + correctGuess.length + " letters correctly. " + guessing.join('') +". Table-flip: " + hangmanTrack;
  } else if (correctGuess.length==words[whichWord].length && whichWord<(numberOfWords-1)){
  	whichWord++;
  	correctGuess = [];
  	guessing = [];
  	for (i=0; i<words[whichWord].length; i++) {
	guessing.push('_');
	}
	return "You guessed the word "+ words[whichWord-1].join('')+"! Guess the next word."
  } else if (correctGuess.length==words[whichWord].length && whichWord==(numberOfWords-1)){
  	return "You won by guessing the last word "+words[whichWord].join('')+"! Table-flip: " + hangmanTrack;
  } else {
  	return "You lose! Table-flipped!: " + hangmanTrack;
  }
}
}