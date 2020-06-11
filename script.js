console.log("hello script js");

//this stores the letters in cat into an array
var secretWord = ['c','a','t'];

var userAns = [];

var fliP = ["(","╯","ರ ","~ ","ರ","）","╯","︵"," ┻","━","┻"]




//to assign currentInput into a function called inputHappened
var inputHappened = function(currentInput){
    // this stores the user answers into an array
    userAns.push(currentInput);
    console.log(currentInput);
    console.log(fliP);


    //this runs a loop along length of array starting from 0
    for(i = 0; i < secretWord.length; i++){
        // this finds the answer in the array
        wordAnswer = secretWord[i];
            console.log("The correct answer : " + wordAnswer);
            console.log("-----------------");

//this checks to see if input exists in the array secretWord
        // if(secretWord === userAns[i]){;
        if(wordAnswer == currentInput){

            console.log("The word you enter is correct! " + wordAnswer);


            return "correct";


        }
    return"wrong";
    }

//creates a function that clears the array
   var clearUserAns = function(userAns){
                userAns = userAns.pop;
                console.log("the answer has been cleared" + userAns);
            }

            clearUserAns();


// var list = [1,4,3,8,9,2];

// var numberFound = false;

// var i=0;

// var numberToSearch = 2;

//   while( i<list.length ){
// ;
//     if( list[i] === numberToSearch ){



//       numberFound = true;
//     }

//     i = i+1;
//   }

//   console.log( "number found: "+numberFound )





//this prints the user input into the console
  console.log( currentInput );
//informs the user the result of inputHappened Function
  return "WOW SOMETHING HAPPEND";
};