console.log("hello script js");

var secretWord = ['c', 'a', 't'];
var fliptable = ['(', '╯', 'ರ', ' ~', 'ರ', '）', '╯', '︵', ' ┻', '━', '┻'];
var countDown = "";
var state = "player";
var flip = 0;
var chanceLeft = fliptable.length - flip;



document.getElementById('output').innerText = "Guess the word!";


var inputHappened = function (currentInput) {
    if (state === "player") {

        if (flip < 11) {
            console.log(currentInput);
            document.querySelector('#input').value = "";
            var guess = currentInput
            var i = 0
            var numberFound = false;
            
            // scans the secretWord for a match
            // if a match is found, numberFound state changes to true
            while (i < secretWord.length) {
                 if (secretWord[i] === guess) {
                    numberFound = true;
                    secretWord.splice(i,1);
                }
                i++;
            }
            if (secretWord.length <1 ) {
                var output = "You did it! the word is cat! Y to restart";

                return output
            } if (currentInput == "Y") {
                console.log("hi");
                location.reload();
            }

            //if no match is found, 
            if (numberFound === false) {
                countDown += fliptable[flip];

                flip++;
                console.log(flip);
            }
            console.log(numberFound);


            var chanceLeft = fliptable.length - flip;
            var output = chanceLeft + " chances left " + countDown;

            return output
        } else {
            document.querySelector('#input').value = "";
            var output = "Game Over (╯ರ ~ ರ）╯︵ ┻━┻ Game Over (╯ರ ~ ರ）╯︵ ┻━┻ Game Over (╯ರ ~ ರ）╯︵ ┻━┻";
            return output
        }
    } 
    }
