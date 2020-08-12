console.log("hello script js");

// store secret words in an array of strings
// select a secret word from the array and split the string into a array
// store the different stages of the table flip

// input flow --

// if input is admin
// all entries will append to secret words array
// if input endadmin
// admin mode end
// can begin game

// loop through secret word
// keep track of how letters found --global
// keep track of index -- global
// keep track amt found -- global

// if count > 0 means found
// add to correctly guessed letter array using index and
// display 'you guessed right' and the letters they found in its correct place
// check for winning state. if the letters found in word equals secret word

// else means not found
// add to wrongly guessed letters - global
// use the length of the wrongly guessed letters to cycle
// after a number of mistake cycle thru the stages of the table flip and add to the current flip

// check if the game has ended from too many wrong guesses
// if the length of the current flip array is full
    // if true display game over

// display output






















var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPEND";
};