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
var guessing = [];
for (i=0; i<words[whichWord].length; i++) {
	guessing.push('_');
}
var wrong = true;
var notify;
var hangmanTrack = [];
var incorrects = 0;

var inputHappened = function(currentInput){
  notify = "You have guessed wrong.";
  console.log( currentInput );
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
  } else if (correctGuess.length==words[whichWord].length && whichWord<2){
  	whichWord++;
  	correctGuess = [];
  	guessing = [];
  	for (i=0; i<words[whichWord].length; i++) {
	guessing.push('_');
	}
	return "You guessed the word "+ words[whichWord-1].join('')+"! Guess the next word."
  } else if (correctGuess.length==words[whichWord].length && whichWord==2){
  	return "You won by guessing the last word "+words[whichWord].join('')+"! Table-flip: " + hangmanTrack;
  } else {
  	return "You lose! Table-flipped!: " + hangmanTrack;
  }
}