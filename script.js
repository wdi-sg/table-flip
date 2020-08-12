console.log("hello script js");

// containers
var foundArray = [];
var wrongArray = [];
var foundWord = "";

// wrong guesses
var flipTable = "(╯ರ ~ ರ）╯︵ ┻━┻";
var charFlipTable = flipTable.split("")
var newFlipTable = [];
var chance = charFlipTable.length;

// randomly select an animal in the array
var animals = ["cat", "lion", "horse", "turtle"]
var num = Math.floor(Math.random() * animals.length)
var original = animals[num];
var secretWord = original.split("");
var countingDown = secretWord.length;

// to hide the secret word with _
for (var i = 0; i < secretWord.length; i++) {
  foundArray[i] = "_";
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  console.log(num)
  var guessWord = currentInput.toLowerCase();

  // isIncluded will return true if guessWord is found
  var isIncluded = secretWord.includes(guessWord);

  if (isIncluded === true) {
    match(guessWord, secretWord);
    console.log(secretWord)
    foundArray[index] = foundWord;
    countingDown--;
  } else {
    chance--
    var flip = charFlipTable.shift();
    newFlipTable.push(flip)
    wrongArray.push(guessWord)
  }

  // display at different stages

  var correct = foundArray.join(" ");
  var success = foundArray.join(""); 
  var flipflip = newFlipTable.join("")

  if (original === success) { 
    return `Word found: ${original}!`
  } else if (chance > 0) {
    return `Found word: ${correct} 
    Remaining count: ${countingDown}  
    Chance left: ${chance}
    ${flipflip}`
  } else {
    return `You're dead ${flipflip}`
  }
};

// function to match the guessWord to secretWord
// break is added to prevent overwriting the repeat string
var match = function(input, array) {
  for (var i = 0; i < array.length; i++) {
    if (input === array[i]) {
      index = i
      foundWord = array.splice(i, 1, "");
      break;
    } 
  }
}