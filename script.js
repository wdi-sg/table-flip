console.log("hello script js");

var secretWord = ['c','a','t'];
var livesLeft = "(╯ರ ~ ರ）╯︵ ┻━┻"
var livesLeftString = livesLeft.split('');
var livesArray = [];
var livesCount = 0
var output = [];
var currentAnswer = [];

//Step2

var words = [
  ['c','a','t'],
  ['d','o','g','g','y'],
  ['a','l','p','h','a','b','e','t']
];

var whichWord = 0





var inputHappened = function(currentInput){
  
if(words[whichWord].indexOf(currentInput) == -1){
	
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

	if(output.length == words[whichWord].length){
		
		
		whichWord++

		if(whichWord >= words.length){
			return "Grand Champion!"
		}

		output.length = 0;

		return "You win! "+"The word is: "+words[whichWord - 1];
	}


	currentAnswer = [];
	
	for (let i =0; i < words[whichWord].length ; i++){
		if(output.indexOf(words[whichWord][i]) >= 0 ){
			currentAnswer.push(words[whichWord][i]);
		} else {
			currentAnswer.push(" ");
		}

	}

	return "You guessed a letter correctly!"+"  Correct letters guessed:  "+currentAnswer;
}


  
};
