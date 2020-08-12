console.log("hello script js");


//global variables:
let rightLetterCounter = 0;
let wrongLetterCounter = 0;
let userRight = [];
let userWrong = [];
var words = ["cat","doggy","alphabet"];
let word;
let kaomoji =["(","╯","ರ","~","ರ","）","︵","┻━┻"];
let hangKao =[];
let hangKaoString = "";
let state = null;
let output = ""
let result = null;
let repeatFound;


//there will be 3 states: "inGame", "win", "lose"

//helper function to receive mode 

// var levelChecker = function(level) {
//   var level = document.getElementById('level').value;
//   if(level === 'easy'){
//     word = words[0]
//   } else if (level==='hard') {
//     word = words [1]
//   } else if (level ==='god') {
//     word = words[2]
//   }
// };


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

var toContinue = function(rightLetterCounter, wrongLetterCounter,word) {
  var level = document.getElementById('level').value;
  var word = words[level].split("");
  if (rightLetterCounter < word.length && wrongLetterCounter < 8 ){
    return state = "in game";
  } else if (rightLetterCounter === 3) {
    return state = "win";
  } else if (wrongLetterCounter === 8){
    return state = "lose";
  }
};


//main function

var playGame = function(input) {
  toContinue(rightLetterCounter, wrongLetterCounter);
  console.log(state);
  var input = document.getElementById('input').value;
  console.log(input);
  // input = input.toLowerCase();
  if(state ==="in game"){
    if(userRight.includes(input) || userWrong.includes(input)) { //checks for repeat input
      console.log(userRight);
      output = "you have guessed this already!"
    } else {
    // checker(input);
      var level = document.getElementById('level').value; //gets the level chosen by user
      var word = words[level].split("");//string gets split
      console.log(word);
      result = word.includes(input,userRight,userWrong);
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
    output = `You won! the word is ${word}`
  } else if(state==="lose")
  output = `You killed the kaomoji! ${hangKaoString}`
}

console.log(output);


var gameresult = document.getElementById('output')
var go = document.getElementById('play');
var next = document.getElementById('nextletter');
var secret = document.getElementById('secret');
var tip = document.getElementById('tip');
var kao =document.getElementById('kao');

console.log(input);


go.addEventListener("click", function(){
  playGame(input);
  gameresult.innerText= output;
});

next.addEventListener ("click", function(){
  gameresult.innerText ="";

})

secret.addEventListener("click", function (){
  tip.classList.remove('hidden');
  tip.classList.add("normal");
})

// kao.addEventListener("click", function() {
//   //add in admin function
// }