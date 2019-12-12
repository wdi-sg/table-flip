let catArray = ["c", "a", "t"];
let flipTableArray = ["(", "╯", "ರ", "~", "ರ", "）", "╯", "︵", "┻", "━", "┻"];
let catWord = "";
let flipTableWord = "";
let flipIndex;

console.log("hello script js");

var inputHappened = function(currentInput) {
  for (let i = 0; i < catArray.length; i++) {
    if (currentInput === catArray[i]) {
      catWord = catWord + catArray[i];
      return catWord;
    } 
  }
};
