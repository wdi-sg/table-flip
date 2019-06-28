console.log("hello script js");
var secretWord = "cat";
var secretChar = secretWord.split('');
var correctChar = [];
var numOfTries = 5;
var inputFound = false;

	

function check(data) {
	if(data > 0) {
		display(`You've got ${numOfTries} left.`)
	} else {
		display("Game Over!")
	}
}

var inputHappened = function(currentInput){
	numOfTries -= 1;

	for(let i = 0; i < secretWord.length; i ++) {
		if (currentInput === secretChar[i]){
			inputFound = true;
		}
	}
	if(inputFound = true){
		correctChar.push(currentInput);
		console.log(correctChar);
	} else {
	
		check(numOfTries);
	}

  

};