console.log("hello script js");
//Global variables to be initialized:
//we set initial secretword to be cat
var secretWord = ['c','a','t'];
// to track how many letters have been guessed
var lengthRemaining = secretWord.length;
// to create a results array to show letters guessed
var result = new Array(lengthRemaining).fill('_');
//again default array for lenient difficulty mode
var tableFlipArray = "┳━┳".split("");
//initialize initial state with their respective lengths to keep track of the different health bars.
var state = 0;
var lifeArr = ["┳━┳","(ರ ~ ರ）┳━┳","(╯ರ ~ ರ）╯︵ ┻━┻"]
var lifeLength = [3,10,14];
//an array to track how much long to go before the table is flipped
var lifeLeft = [];
// number to track remaining health before game ends.
var remainingLife = tableFlipArray.length;
// keep track of wrong alphabets to show user so that he wont make the same wrong guess twice.
var wrongLetters = [];
//difficulty object used in order to store new words and difficulty level in admin mode.
var difficulty = {
    easy: ['c','a','t'],
    medium: ['d','o','g','g','y'],
    hard: ['a','l','p','h','a','b','e','t']
};
//initialize admin as false initially
var admin = false;



var inputHappened = function(currentInput){
  console.log( currentInput );
  //to remove case sensitive issues.
currentInput = currentInput.toLowerCase();
//set admin to true to enter admin mode.
if(currentInput === "admin"){
    admin = true;
    return "Please key in new word in this format: word<space>difficulty";
}
//test for inputs with spaces in between such that it follows the format required to enter new word and difficulty.
if(admin && currentInput.length > 1 && /.+ .+/.test(currentInput)){
    var newWord = currentInput.split(" ");
    difficulty[newWord[1]] = newWord[0].split("");
    return "Please input endadmin to exit admin mode";
}
//set admin to false when endadmin is input to exit admin mode.
if(currentInput === "endadmin"){
    admin = false;
    return "Please key in difficulty: Easy/Medium/Hard/Custom(based on added difficulty) to begin playing!"
}
//we let our main function to run under the scope when admin is false in order to bypass the above boolean statements.
if (!admin){
if(Object.keys(difficulty).find(e=>e === currentInput)){
    //this checks if input matches the difficulty key in the object.
        secretWord = difficulty[currentInput];
    //we have to reassign secretWord and related variables cause remember we set a default values for them which are not constant.
        lengthRemaining = secretWord.length;
        result = new Array(lengthRemaining).fill('_');
        return "Lets start playing! Start by entering any alphabet!"
}


// test for legitimacy of input. ensure its not admin and that it is either a single alphabet or a difficulty key.
  if (currentInput.length !== 1 && currentInput !== "admin" && !Object.keys(difficulty).find(e=>e === currentInput)){
    return "please input only a single alphabet!"
  }
//test if input is a number
  if(!isNaN(parseInt(currentInput))){
    return "no numbers! only alphabets allowed!"
  }


//initialize variables for while loop. loop through the secretword and compare if there is a match between input character and character in secretword.
var foundLetter = [];
var charToSearch = currentInput;
var i=0;
while(i<secretWord.length){
    //if there exists a match, we push the found letter to an array. We do this to keep track of repetitive characters. eg double 'a' in alphabet.  we have to modify secretword in order to prevent winning the game by pressing 3 repeated characters. eg. 't' x 3 while solving for cat. decrease length of length remaining to keep track of progress
    if(secretWord[i] === charToSearch){
        foundLetter.push(secretWord[i]);
        result[i] = secretWord[i];
        secretWord[i] = "";
        lengthRemaining--
    }
    i+=1
}

//so if there is no letters found and that we still have life remaining before table flip, we add in the wrong characters as well as update the status of the table flip. Then prompt user to try again.
if(foundLetter.length === 0 && lifeLeft.length<lifeLength[state]){
    lifeLeft.push(tableFlipArray.shift());
    wrongLetters.push(currentInput);
    remainingLife--;
    return `Wrong Guess, Please try another alphabet. Current status: ${result}. These are the current wrong guesses: ${wrongLetters}. Current Life remaining: ${remainingLife}, status: ${lifeLeft}`
}

//success case where length remaining is 0, meaning all secretword characters are matched appropriately.
if(lengthRemaining === 0){ // success
    result = result.join('');
    return `Congratulations! You Win! The word is: ${result}! Please refresh the page to play again.`
}


//now this is tricky. this is for the case where we still have not solved the word and we finish using an emoticon. So I used a state to move on to the next emoticon, and then update the new emoticons and life and status of table flip accordingly.
if(tableFlipArray.length === 0){
    if(state !== 2){
        state+=1;
        tableFlipArray = lifeArr[state].split("");
        lifeLeft = [];
        remainingLife=lifeLength[state];
        return `Another chance! Current status of your guess: ${result}. These are the current wrong guesses: ${wrongLetters}. Current Life remaining till next health bar: ${remainingLife}, status: ${lifeLeft}. Please try another alphabet!`
    } else if(state===2){ //when state reaches 2 and emoticon depletes, this is where the game ends.
    lifeLeft = lifeLeft.join(''); // failed
    return `Oh well, all guesses are up, all we can do is: ${lifeLeft}!! Please refresh the page to play again!`
}
}

//so if there is life left and we still have not solve the problem, continue prompting the user to try another alphabet.
if(lifeLeft.length !== lifeLength[state] && lengthRemaining > 0){
 return `You are on the right track. Current status of your guess: ${result}. These are the current wrong guesses: ${wrongLetters}. Current Life remaining: ${remainingLife}, status: ${lifeLeft}. Please try another alphabet!`
}


}
}















// console.log("hello script js");

// var secretWord = ['c','a','t'];
// var lengthRemaining = secretWord.length;
// var result = new Array(lengthRemaining).fill('_');
// var tableFlipArray = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");
// var state = 0;
// var lifeLeft = [];
// var remainingLife = tableFlipArray.length;
// var wrongLetters = [];

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   if (currentInput.length !== 1){
//     return "please input only a single alphabet!"
//   }

//   if(!isNaN(parseInt(currentInput))){
//     return "no numbers! only alphabets allowed!"
//   }

// currentInput = currentInput.toLowerCase();
// var foundLetter = [];
// var charToSearch = currentInput;
// var i=0;
// while(i<secretWord.length){
//     if(secretWord[i] === charToSearch){
//         foundLetter.push(secretWord[i]);
//         result[i] = secretWord[i];
//         lengthRemaining--
//     }
//     i+=1
// }
// if(foundLetter.length === 0 && lifeLeft.length<14){
//     lifeLeft.push(tableFlipArray.shift());
//     wrongLetters.push(currentInput);
//     remainingLife--;
//     return `Wrong Guess, Please try another alphabet. These are the current wrong guesses: ${wrongLetters}. Current Life remaining: ${remainingLife}, status: ${lifeLeft}`
// }


// if(lengthRemaining === 0){ // success
//     result = result.join('');
//     return `Congratulations! You Win! The word is: ${result}! Please refresh the page to play again.`
// }

// if(tableFlipArray.length === 0){
//     lifeLeft = lifeLeft.join(''); // failed
//     return `Oh well, all guesses are up, all we can do is: ${lifeLeft}!! Please refresh the page to play again!`
// }


// if(lifeLeft !==14 && lengthRemaining > 0){
//  return `You are on the right track. Current status of your guess: ${result}. These are the current wrong guesses: ${wrongLetters}. Current Life remaining: ${remainingLife}, status: ${lifeLeft}. Please try another alphabet!`
// }



// };

