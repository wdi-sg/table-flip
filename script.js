console.log("hello script js");

document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        inputHappened(currentInput)
      });

      var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
      }

//var to store table flip characters
//
var tableFlipChar = ["\(","\╯","\ರ","\~","\ರ","\）","\╯","\︵","\┻","\━","\┻"];
console.log(tableFlipChar.join(''));
console.log(tableFlipChar.length);

var tableFlipFig =[];

var secretWord = "cat";
var wordArr = secretWord.split("");
console.log(wordArr);
console.log(wordArr.length);



var correctLetters = [];
console.log(correctLetters);

var wrongLetters =[];
console.log(wrongLetters);

var i = 0;
var numTries = 10;

var inputHappened = function(currentInput){
    console.log( currentInput );
    while( i < wordArr.length){
        console.log( "i is: "+ i);
        console.log( "current letter: "+ wordArr[i]);

        if( wordArr[i] === currentInput ){
            console.log("correct letter guessed");
            correctLetters.push(currentInput);
            wordArr.splice(i,1);
            console.log(wordArr.length);
            alert("You got 1 letter correct");
            display(correctLetters.join(''));
            console.log(correctLetters);
            if (wordArr.length === 0) {
                display(`You won! \n The word is ${secretWord}`);
            }
        } else {
            console.log("wrong letter guessed");
        }
        // } else {
        //     console.log("wrong letter guessed");
        //     wrongLetters.push(currentInput);
        //     tableFlipFig.push(tableFlipChar[0]);
        //     display(tableFlipFig.join(''));
        //     console.log(tableFlipFig);
        //     tableFlipChar.shift();
        //     console.log(tableFlipChar.length);
        //     if (tableFlipChar.length === 0) {
        //         display("GAME OVER!")
        //     };
        //     return;
        // }
        i = i + 1;
        console.log(i);
    }
    i = 0;
    document.getElementById('input').value="";
    // checkWin();
};




// function checkWin() {
//     if(correctLetters.join('') == secretWord) {
//         console.log("YOU WIN!");
//     } else {
//         console.log("Word not guessed yet")
//     }
// }



// var secretWord = "cat";
// var wordGuessed = false;
// var correctLetters = ["c","a"];
// console.log(correctLetters);
// console.log(correctLetters.join(''));



// if (correctLetters.join('') === secretWord) {
//         wordGuessed = true;
//     }

// if( wordGuessed === true){
//   console.log("ok now we can do stuff");
// } else {
//   console.log("NOT FOUND");
// }