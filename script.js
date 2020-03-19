console.log("hello script js");

//variables
let secretWord = ['c', 'a', 't'];
let secretWordList = [
    ['c','a','t'],
    ['d','o','g','g','y'],
    ['a','l','p','h','a','b','e','t']
  ];
let completeTable = ['(', '╯', 'ರ', '~', 'ರ', '）', '╯', '︵', '┻━┻'];
let currentTable = [];
let correctEntries = [];
let wrongEntries = [];
let wrongAttempts = 0;

//helper functions
let restartGame = function(){
		wrongAttempts = 0;
		currentTable = [];
		correctEntries = [];
		wrongEntries = [];  
}

let clearInput = function(){
	document.querySelector('#input').value = "";
}

// Takes in a string and an word array; return true if string in word array, false if otherwise
let letterCheck = function(letter, array){
	for (i = 0; i < array.length; i++){
		if (letter === array[i]){
			return true;
		};
	};
	return false;
};

//remove an existing string from an array of strings
let deleteString = function(string, array){
	let i = array.indexOf(string);
	array.splice(i, 1)
}


var inputHappened = function(currentInput){
  	if (letterCheck(currentInput, secretWord)){
	  	correctEntries.push(currentInput);
		deleteString(currentInput, secretWord)
	  	clearInput();
	  	console.log(secretWord);
	  	if (secretWord.length === 0){
	  		return 'You won! The secret word is "cat"!'
	  	} 
	  	return `You guessed right. Your correct guesses so far: ${correctEntries} \n\nTable: ${currentTable}`;
  } else if (wrongAttempts < completeTable.length-1){ 
	  	wrongEntries.push(currentInput);
	  	currentTable += (completeTable[wrongAttempts]);
	  	wrongAttempts += 1;
	  	clearInput();
  	return `You guessed wrong. Your correct guesses so far: ${correctEntries} \n\n\Table: ${currentTable}`;
  } else if (wrongAttempts === currentTable.length) {
	  	clearInput();
	  	currentTable += (completeTable[wrongAttempts]);
	  	console.log()
	return `You guessed wrong. Your correct guesses so far: ${correctEntries} \n\nTable: ${currentTable} \nGame Over`;
  }
  	restartGame();
  	return 'New Game. \nPlease re-enter input';

};
