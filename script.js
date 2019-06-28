console.log("hello script js");

var secretWord = ['c','a','t'];
var guessedLetters = [];

var letterFound = false;

var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );

var i = 0;
var letterToSearch = currentInput;

while( i < secretWord.length ){
    if( secretWord[i] === letterToSearch){
        letterFound = true;
        console.log('Letter found is true.')
        guessedLetters.push(letterToSearch);
        display(guessedLetters);
        console.log( "Alphabet found: "+ letterFound );
    }
    i = i+1;
/*    sortSecretWord = secretWord.sort();
    console.log("end of while " + sortSecretWord);
    sortGuessedLetters = guessedLetters.sort();
    console.log("end of while " + sortGuessedLetters);
    comparedArrays(sortGuessedLetters, sortSecretWord);*/
/*    if (sortGuessedLetters === sortSecretWord) {
        display(`You have won! The secret word was ${secretWord}!`);
    }*/
}

};

/*var comparedArrays = function(sortGuessedLetters, sortSecretWord){
    if (sortGuessedLetters === sortSecretWord) {
        display(`You have won! The secret word was ${secretWord}!`);
    }
};*/