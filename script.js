console.log("hello script js");



var output = [];
var currentAnswer = [];

var wordInput = ["caat","doggy","alphabet"]

var words = convertArrayToString(wordInput)

var whichWord = 0

var lenientArray = ["┳━┳","(ರ ~ ರ）┳━┳","(╯ರ ~ ರ）╯︵ ┻━┻"];
function convertArrayToString(array){
	for(let i = 0; i < array.length; i++){
		array[i].split('');
	}
	return array;
};
var lenientArrayToString = convertArrayToString(lenientArray);
var chanceCount = 0;
var livesOutput = [];
var livesCount = 0;
var showOutput = [];
var listOfIndex = [];

var startIndex;
var currentList;

var wordCount = 4;


var inputHappened = function(currentInput){
  
if (currentInput === 'admin'){
	wordInput.length = 0;
	wordCount = 4;
	document.querySelector('#input').value = "";
	wordCount--
	return "Enter first word" 
} else if(wordCount == 3){
	wordInput.push(currentInput);
	document.querySelector('#input').value = "";
	wordCount--
	return "Enter second word"
} else if(wordCount == 2){
	wordInput.push(currentInput);
	document.querySelector('#input').value = "";
	wordCount--
	return "Enter third word"
} else if(wordCount == 1){
	wordInput.push(currentInput);
	document.querySelector('#input').value = "";
	wordCount--
	return "Ready for game"
} else {

	if(words[whichWord].indexOf(currentInput) == -1){
	
	livesOutput.push(lenientArrayToString[chanceCount][livesCount]);
	showOutput = livesOutput.slice(0);
	livesCount++;

	if(livesCount >= lenientArrayToString[chanceCount].length){
		chanceCount++
		livesCount = 0;
		livesOutput.length = 0;

		if(lenientArray.length - chanceCount == 0){;
			return "You have used up all your chances! You LOSE   "+showOutput.join("");
		}

		return (lenientArray.length - chanceCount)+" lives left!  "+showOutput.join("");

	} else {
		console.log(showOutput)
		return "Wrong letter!   "+showOutput.join("");
	}

	

} else {
	
	//find letter which appears multiple times
	//Used a while loop to search the total number of times it appear in 
	startIndex = words[whichWord].indexOf(currentInput);
	currentList = words[whichWord]
	

	
	while (startIndex > -1){
	listOfIndex.push("-");
	currentList = currentList.slice(startIndex + 1);
	startIndex = currentList.indexOf(currentInput);
	}

	console.log(listOfIndex.length)

	

	//for every instance of the letter found, push it into output
	for (let i = 0; i < listOfIndex.length;i++){
		output.push(currentInput);
		console.log(output.length);
	}

	listOfIndex.length = 0;



	if(output.length == words[whichWord].length){
		
		
		whichWord++

		if(whichWord >= words.length){
			output.length = 0;
			whichWord = 0;
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
 
}
}
