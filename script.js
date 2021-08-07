console.log("hello script js");


//global variables:
let rightLetterCounter = 0;
let wrongLetterCounter = 0;
let userRight = [];
let userWrong = [];
var words = ["cat","doggy","alphabet"];
let kaomoji =["(","╯","ರ","~","ರ","）","︵","┻━┻"];
let hangKao =[];
let hangKaoString = "";
let state = null;
let output = ""
let result = null;
let repeatFound;
let mode = null;
let currentWord;

// to randomize word
 var wordRandomizer = function() {
  let randomNum = Math.floor(Math.random()*(words.length));
  let word= words[randomNum].split("");
  console.log(word);
  return word;
 }

//there will be 3 states: "inGame", "win", "lose"

//3 modes, player, admin, null
var modeswitch = function(abc) {
  if(mode===null && abc==="admin"){
    mode ="admin mode";
    return mode
  } else if (mode === "admin mode" && abc !== "exit"){
    addWords(abc);
    return mode;
  }else if (mode === "admin mode" && abc ==="exit"){
    mode = "player mode";
    return mode;
  }
}


//if player is in admin mode, then addwords function. 
//helper function to add words in admin mode

 var addWords = function(wordsToadd) {
   return words.push(wordsToadd);
 };


//helper function to add to correct user array

const gotItRight = (letter) =>{
  userRight.push(letter)
};

//helper function to add to correct user array
const gotItWrong =(letter) => {
  userWrong.push(letter);
  hangKao.push(kaomoji.pop());
  hangKaoString = hangKao.toString();
};

//helper function to check if continue playing

var toContinue = function(rightLetterCounter, wrongLetterCounter,currentWord) {
  
  if (rightLetterCounter < currentWord.length && wrongLetterCounter < 8 ){
    return state = "in game";
  } else if (rightLetterCounter === word.length) {
    return state = "win";
  } else if (wrongLetterCounter === 8){
    return state = "lose";
  }
};


//main function

var playGame = function(input) {
  if(mode="player mode" || null){
 
  toContinue(rightLetterCounter, wrongLetterCounter,currentWord);
  console.log(state);
  var input = document.getElementById('input').value;
  console.log(input);
  if(state ==="in game"){
    if(userRight.includes(input) || userWrong.includes(input)) { //checks for repeat input
      console.log(userRight);
      output = "you have guessed this already!"
    } else {
    // checker(input);
      result = currentWord.includes(input,userRight,userWrong);
      console.log(input); // checks if input is in array
      console.log(result);
      if(result===true) {
        rightLetterCounter++; 
        gotItRight(input);
        console.log(userRight);
        output = `you got it one letter right! Correct letters so far ${userRight} you can still save kaomoji! ${hangKaoString}`;
        console.log(output);
        } else if (result===false){
        wrongLetterCounter++
        gotItWrong(input);
        output = `you got that letter wrong! correct letters so far: ${userRight} You still can save kaomoji! ${hangKaoString} `
        }
      }
    }
  else if (state=== "win") {
    output = `You won! the word is ${currentWord}`
  } else if(state==="lose")
  output = `You killed the kaomoji! ${hangKaoString}`
}
};

console.log(output);


var gameresult = document.getElementById('output')
var go = document.getElementById('play');
var start = document.getElementById('start');
var next = document.getElementById('nextletter');
var secret = document.getElementById('secret');
var tip = document.getElementById('tip');
var kao =document.getElementById('kaomoji');

console.log(input);

//start game function

start.addEventListener("click", function(){
  currentWord = wordRandomizer();
  
})

//submit word function
go.addEventListener("click", function(){
  playGame(input);
  gameresult.innerText= output;
});

//clear game result
next.addEventListener ("click", function(){
  gameresult.innerText ="";

})

//show hint
secret.addEventListener("click", function (){
  tip.classList.remove('hidden');
  tip.classList.add("normal");
})

//enter or exit admin mode
kao.addEventListener("click", function() {
  console.log("hello from kao");
  var input= document.getElementById('input').value;

  mode = modeswitch(input);
  console.log(mode);
})