console.log("JavaScript Activated!");
//this program allows the user to play a game of flip the table
//user will click on the "click to start" button to commence the gameOver
//user will key in single entry into the text field that appears subsequently
//if user enters more than one character, an error will show telling the user to enter one character at a time
//if user gets three incorrect guesses, the game will end and the user can opt to start a new game
//user can enter admin mode by typing "admin" and exit the mode by typing "endadmin"
//in admin mode, user can add words to the array
//user will continue the position in the game even if admin mode is active halfway during the game
//to spice things up, the user will receive a random word from the array

//hide textbox from user until user click start game.
document.getElementById("textbox").style.visibility = "hidden";
document.getElementById("admininput").style.visibility = "hidden";

//initialize global variables to prepare for game.
var wordArray = ["cat","dog","man","lion","gold","hard","table","litre","proud"];
var gameWordArray = [];
var correctCharArray = [];
var attemptNumber = 1;

//when user starts game html elements will show/hide
function startGame(){
  document.getElementById("admininput").value = "";
  document.getElementById("characters").innerHTML = ""
  document.getElementById("image").innerHTML = "";
  document.getElementById("startbutton").style.visibility = "hidden";
  document.getElementById("begintext").style.visibility = "hidden";
  document.getElementById("textbox").style.visibility = "visible";
  getWord();
}
//function will get word from array, split it and put it into the gameWordArray
function getWord(){
  if (wordArray[0] != undefined){
    var indexHolder = Math.floor(Math.random()*wordArray.length);
    var word = wordArray[indexHolder];
    console.log(word)
    console.log(wordArray)
    wordArray.splice(indexHolder,1);
    console.log(indexHolder)
    console.log(wordArray)
    for (var i = 0; i < word.length; i++){
      gameWordArray.push(word[i]);
    };
    console.log(gameWordArray);
    displayFoundWords();
  }else{
    gameOverWin();
  }
}
//purpose of function is to display the gameWordArray into the HTML browser but as "_"
function displayFoundWords(){
  for (var i = 0; i < gameWordArray.length; i++){
    correctCharArray[i] = "_";
  }
  for (var j = 0; j < correctCharArray.length; j++){
    document.getElementById("characters").innerHTML += correctCharArray[j] + " ";
  }
}
//when user types in a characters, game will check if user can still play by tracking attempt number
function checkEntry(){
    var input = document.getElementById("textbox").value;
    var inputLowerCase = input.toLowerCase();
    document.getElementById("textbox").value="";
    if (inputLowerCase === "admin"){
      adminUp();
    }else{
      if (inputLowerCase.length === 1){
        playGame(inputLowerCase);
      }else{
        displayError();
      }
    }
}
//checks if the input is found in the gameWordArray
function playGame(input){
  if (gameWordArray.includes(input)){
    updateWordDisplay(input);
    checkRoundComplete();
  }else {
    incorrectInput();
  }
}
//function updates the HTML browser with characters that match the gameWordArray
function updateWordDisplay(input){
  var foundChar = gameWordArray.indexOf(input)
  document.getElementById("characters").innerHTML = "";//resets the underscores in preparation for new text to send to the HTML document
  for (var i = 0; i < gameWordArray.length; i++){
    if (gameWordArray[i] === input){
      correctCharArray[i] = input;
      document.getElementById("characters").innerHTML += input + " ";
    }else{
      document.getElementById("characters").innerHTML += correctCharArray[i] + " ";
    }
  }
}
//function checks if the entire word is present in correctCharArray and starts a new round
function checkRoundComplete(){
  if (correctCharArray.includes("_")){
  }else{
    gameWordArray = [];
    correctCharArray = [];
    attemptNumber = 1;
    document.getElementById("characters").innerHTML = "";
    startGame();
  }
}
//when user enters an incorrect value, function will display funny emoticon
function incorrectInput(){
console.log(attemptNumber)
  if (attemptNumber === 1){
    document.getElementById("image").innerHTML = "┳━┳";
    attemptNumber+=1;
  }else if (attemptNumber === 2){
    document.getElementById("image").innerHTML = "(ರ ~ ರ）┳━┳";
    attemptNumber+=1;
  }else if (attemptNumber === 3){
    document.getElementById("image").innerHTML = "(╯°□°）╯︵ ┻━┻";
    gameOver();
  }
}
//function to display error when user enters more than one character
function displayError(){
  console.log("You need to enter one character at a time")
}
//funtion to reset game when user has completed all words in array
function gameOverWin(){
  wordArray = ["cat","dog","man","lion","gold","hard","table","litre","proud"];
  gameWordArray = [];
  correctCharArray = [];
  numOfAttempts = 1;
  document.getElementById("textbox").style.visibility = "hidden";
  document.getElementById("startbutton").style.visibility = "visible";
  document.getElementById("begintext").style.visibility = "visible";
  document.getElementById("characters").innerHTML = "Well done!";
}

//function to reset game when user does not get word in three tries
function gameOver(){
  wordArray = ["cat","dog","man","lion","gold","hard","table","litre","proud"];
  gameWordArray = [];
  correctCharArray = [];
  numOfAttempts = 1;
  document.getElementById("textbox").style.visibility = "hidden";
  document.getElementById("startbutton").style.visibility = "visible";
  document.getElementById("begintext").style.visibility = "visible";
  document.getElementById("characters").innerHTML = "Ah! Try again!";
}
//admin function, woohoo! user can add words to the array when they type "admin" into the text field
function adminUp(){
  document.getElementById("admininput").style.visibility = "visible";
  document.getElementById("characters").style.visibility = "hidden";
  document.getElementById("image").style.visibility = "hidden";
  document.getElementById("textbox").value="";
  document.getElementById("textbox").style.visibility = "hidden";
}

//allows admin to add words to wordArray, if endadmin detected, will exit admin function, user can continue from last point
function addWord(){
  var input = document.getElementById("admininput").value;
  var inputLowerCase = input.toLowerCase();
  if (inputLowerCase === "endadmin"){
    document.getElementById("admininput").value = "";
    document.getElementById("admininput").style.visibility = "hidden";
    document.getElementById("characters").style.visibility = "visible";
    document.getElementById("image").style.visibility = "visible";
    document.getElementById("textbox").style.visibility = "visible";
  }else{
    wordArray.push(inputLowerCase);
    document.getElementById("admininput").value = "";
  }
}
