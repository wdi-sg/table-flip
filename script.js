console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/

//create game that guess a secret word
//secret word = cat
//array of cat = ["c", "a", "t"]

//each time user guess wrong

//Part 1
/*
var arrayOfCat = ["c", "a", "t"];
var cat = [];
console.log("Guess the letter of the word!");
console.log("Hint: I can wild, lazy, annoying, lovely but not men best friend");

var wordC = arrayOfCat[0];
var wordA = arrayOfCat[1];
var wordT = arrayOfCat[2];

var wordFound = false;

var i = 10;

var inputHappened  = function(letter){
    while(i > 0){

            if (letter == wordC){
                wordFound = true;

                console.log("You guess the first letter of the word");
            }
            else if(letter == wordA){
                wordFound = true;
                console.log("You guess the second letter of the word");
            }
            else if(letter == wordT){
                wordFound = true;
                console.log("You guess the third letter of the word");
            }
            else{
                console.log("Sorry. Please guess again.");
            }
        }
        else{

        }
    i = i - 1;
    console.log(i + ": No. of tries left");
    break;
    }
}
*/
//Just for cat
/*
var arrayOfCat = ["c", "a", "t"];
var cat = [];
var wordC = arrayOfCat[0];
var wordA = arrayOfCat[1];
var wordT = arrayOfCat[2];
var wordFound = false;
var i = 10;

console.log("Guess the letter of the word!");
display("Guess the letter of the word!");
console.log("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display2("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display3("You have 10 tries before your luck runs out");

var inputHappened  = function(letter){
    while(i > 0){
        if (letter == wordC){
            wordFound = true;
            console.log("You guess the first letter of the word");
            display("You guess the first letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left");
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");
            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else if(letter == wordA){
            wordFound = true;
            console.log("You guess the second letter of the word");
            display("You guess the second letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");
            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else if(letter == wordT){
            wordFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");

            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else{
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            console.log("Sorry. Please guess again.");
            display2("Sorry. Please guess again.");
        }
    break;
    }
}
*/

//Part 2 (select difficulty)

var word = [
["c", "a", "t"],
['d','o','g','g','y'],
['a','l','p','h','a','b','e','t']
];
var cat = [];
var doggy = [];
var alphabet = [];
var wordFound = false;
//var i = 10;
var letterFound = false

console.log("Guess the letter of the word!");
display("Guess the letter of the word!");

var secretWord = word[0];
var meow  = function(secretWord, input){
console.log("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display2("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display3("You have 10 tries before your luck runs out");

//while loop to go through the secretword array
var i = 0
while (i < secretWord.length) {
    if (input === secretWord[i]) {
        console.log("yey")
        break;
    }
}


// console.log("cat: ", cat)
// console.log("word[0] ", word[0])
//     while(i > 0){
//         if (cat[0] == word[0][0]){
//             console.log("entered if statement", cat[0])
//             letterFound = true;
//             console.log("You guess the first letter of the word");
//             display("You guess the first letter of the word");
//             cat.push(letter);
//             i = i - 1;
//             console.log(i + ": No. of tries left");
//             display3(i + ": No. of tries left");
//             if(cat.length === 3){
//                 console.log("You win the guessing game. The word is cat.");
//                 display("You win the guessing game. The word is cat.");
//             }
//             else{
//                 console.log("Please guess the next word");
//                 display("Please guess the next word");
//             }
//         }
//         else if(cat == word[0][1]){
//             letterFound = true;
//             console.log("You guess the second letter of the word");
//             display("You guess the second letter of the word");
//             cat.push(letter);
//             i = i - 1;
//             console.log(i + ": No. of tries left")
//             display3(i + ": No. of tries left");
//             if(cat.length === 3){
//                 console.log("You win the guessing game. The word is cat.");
//                 display("You win the guessing game. The word is cat.");
//             }
//             else{
//                 console.log("Please guess the next word");
//                 display("Please guess the next word");
//             }
//         }
//         else if(cat == word[0][2]){
//             letterFound = true;
//             console.log("You guess the third letter of the word");
//             display("You guess the third letter of the word");
//             cat.push(letter);
//             i = i - 1;
//             console.log(i + ": No. of tries left")
//             display3(i + ": No. of tries left");
//             if(cat.length === 3){
//                 console.log("You win the guessing game. The word is cat.");
//                 display("You win the guessing game. The word is cat.");
//             }
//             else{
//                 console.log("Please guess the next word");
//                 display("Please guess the next word");
//             }
//         }
//         else{
//             i = i - 1;
//             console.log(i + ": No. of tries left")
//             display3(i + ": No. of tries left");
//             console.log("Sorry. Please guess again.");
//             display("Sorry. Please guess again.");
//         }
//     break;
//     }
}
//for doggy
var rolf  = function(doggy){
console.log("Hint: I love to run, l, annoying, lovely but not men best friend");
display2("Hint: i love to pee by the fire hydrant");
display3("You have 10 tries before your luck runs out");
    while(i > 0){
        if (doggy == word[1][0]){
            letterFound = true;
            console.log("You guess the first letter of the word");
            display("You guess the first letter of the word");
            doggy.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left");
            display3(i + ": No. of tries left");
            if(doggy.length === 5){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(doggy == word[1][1]){
            letterFound = true;
            console.log("You guess the second letter of the word");
            display("You guess the second letter of the word");
            doggy.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(doggy.length === 5){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(doggy == word[1][2]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            doggy.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(doggy.length === 5){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(doggy == word[1][3]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            doggy.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(doggy.length === 5){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(doggy == word[1][4]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            doggy.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(doggy.length === 5){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else{
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            console.log("Sorry. Please guess again.");
            display("Sorry. Please guess again.");
        }
    }
}

//for alphabet

var alpha = function(alphabet){
console.log("Hint: Every English book uses me.");
display2("Hint: Every English book uses me.");
display3("You have 10 tries before your luck runs out");
    while(i > 0){
        if (alphabet == word[2][0]){
            letterFound = true;
            console.log("You guess the first letter of the word");
            display("You guess the first letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left");
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display1("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display1("Please guess the next word");
            }
        }
        else if(alphabet == word[2][1]){
            letterFound = true;
            console.log("You guess the second letter of the word");
            display("You guess the second letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][2]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(doggy.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][3]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][4]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][5]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][6]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else if(alphabet == word[2][7]){
            letterFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            alphabet.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(alphabet.length === 8){
                console.log("You win the guessing game. The word is doggy.");
                display("You win the guessing game. The word is doggy.");
            }
            else{
                console.log("Please guess the next word");
                display("Please guess the next word");
            }
        }
        else{
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            console.log("Sorry. Please guess again.");
            display("Sorry. Please guess again.");
        }
    }
}

display("Select difficulty: easy, medium or hard");
var inputHappened = function(userInput){
    meow(secretWord, userInput)
    if (userInput == "easy"){
        meow(cat);
    }
    else if (userInput == "medium"){
        rolf(doggy);
    }
    else if (userInput == "hard"){
        alpha(alphabet);

    }
    else{
        display("INVALID ENTRY");
        display2("INVALID ENTRY");
        display3("INVALID ENTRY");
    }
}