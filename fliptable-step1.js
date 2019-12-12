console.log("hello script js");

var secretWord = ['c','a','t'];
var livesLeft = "(╯ರ ~ ರ）╯︵ ┻━┻"
var livesLeftString = livesLeft.split('');
var livesArray = [];
var livesCount = 0
var output = [];

//Step2

var words = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t']
];

var whichWord = 0





var inputHappened = function(currentInput){
  
if(secretWord.indexOf(currentInput) == -1){
	
	livesArray.push(livesLeftString[livesCount]);
	livesCount++;

	if(livesCount >= livesLeftString.length){
		return "You have run out of lives! You lose!"+livesArray.join("")
	} else {
		console.log("you were here")
		return "Wrong letter!   "+livesArray.join("");
	}

	

} else {
	output.push(currentInput);
	console.log(output)

	if(output.length == secretWord.length){
		return "You win! "+"The word is: "+secretWord;
	}

	return "You guessed a letter correctly!"+"  Correct letters guessed:  "+output;
}


  
};
