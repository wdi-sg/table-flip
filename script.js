console.log("hello script js");


var secretWord = "cat".split("");
var cat = [];
var tableflip = "(╯ರ ~ ರ）╯︵ ┻━┻".split("");
var i = 10;
var lettersFound = false;


var inputHappened = function(currentInput){
  console.log( currentInput );

//to match input with secretword by alphabet
while ( i > 10 && i > 0 );
         if( secretWord[0] == currentInput ){
         lettersFound = true;
         console.log(lettersFound);
         return secretWord[0] + " is correct!" ;
         cat.push(currentInput);
         console.log(cat);
         i = i - 1;
         console.log(i + ": Tries Left!");
         return i + ": Tries Left!";

         if (cat.length === 3){
            console.log(cat.length);
            return "Congratulations you win! The word is " + cat.join().toUpperCase() + ".";
        }
         else{
                console.log("Game Over");
                return "Game Over";
            }
    }
     else if ( secretWord[1] == currentInput ){
         lettersFound = true;
         console.log(lettersFound);
         return secretWord[1] + " is correct!" ;
         cat.push(currentInput);
         i = i - 1;
         console.log(i + ": Tries Left!");
         return i + ": Tries Left!";

         if (cat.length === 3){
            console.log(cat.length);
            return "Congratulations you win! The word is " + cat.join().toUpperCase() + ".";
        }
        else{
                console.log("Game Over");
                return "Game Over";
            }
     }
      else if ( secretWord[2] == currentInput ){
         lettersFound = true;
         console.log(lettersFound);
         return secretWord[2] + " is correct!" ;
         cat.push(currentInput);
         i = i - 1;
         console.log(i + ": Tries Left!");
         return i + ": Tries Left!";

         if (cat.length === 3){
            console.log(cat.length);
            return "Congratulations you win! The word is " + cat.join().toUpperCase() + ".";
        }
        else{
                console.log("Game Over");
                return "Game Over";
            }

        // return "wrong letter. Please type in another letter."

     }
     else{
            i = i - 1;
            console.log(i + ": No. of tries left")
            return i + ": No. of tries left";

            if ( i <= 0 ){
                return "Game Over!";
            }
            else{
            console.log("Sorry. Please guess again.");
            return "Sorry. Please guess again.";
            }
        }
}

