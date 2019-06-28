var tableFlip = ['(','╯','ರ','~','ರ','）','╯','︵','┻','━','┻']
var secretWord = ['c','a','t'];
var letterFound = false;
var i = 0, 

var inputHappened = function(currentInput){

	for (i < secretWord.length){

		if(currentInput === secretWord[i]){

			letterFound = true;
			 i = i+1;
		}

		else {
			display("letter is not found in the secret word")
		}

	}
  console.log( currentInput );
  display("Lets play a game of hangman");
};


----------------------------------------
var list = [1,4,3,8,9,2];

var numberToSearch = 2;
var numberFound = false;
var i=0;

while( i<list.length ){

  if( list[i] === numberToSearch ){
  
    numberFound = true;
  }
  
  i = i+1;
}

console.log( "number found: "+numberFound );