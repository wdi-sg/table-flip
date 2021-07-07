# table-flip

# (╯ರ ~ ರ）╯︵ ┻━┻


## Game Play

Create a game that guesses a secret word.

For this first version of your game, the secret word will be "cat".

The user will guess a single letter at a time.

For each wrong guess one character of the table flip is added to the running total.

When the whole figure is completed then the user loses.

### Getting Started

To get started use the starter code files in this repo.

In the first version the word to guess is the hard-coded word "cat". You should simply make this an array of letters: `var secretWord = ['c','a','t'];`

Each time the user guesses wrong, another character of the table flip is added to the running total.

Use these characters: `(╯ರ ~ ರ）╯︵ ┻━┻` - you can paste them directly into your code. Just like the secret word, make this word into an array of characters as well.

Here is a sugessted function template:

- for each turn, an input letter should be checked in this order:

  - look through the word to guess (a loop). is the input letter there?
  - use a value set outside the searching loop to know if the letter was found 

  - if the guess right
    - add it to correctly guessed letters
    - the message is "you guessed right". show the letters they have so far. (no need to show them in the order they appear in the word- just show them in the order guessed)
  - otherwise the guess is wrong
    - keep track of the number of wrongly guessed letters 
    - keep an array to display the current table flip figure. it should begin empty, and added to for every wrong answer
    - take one character off the table flip characters and add it to the current table flip figure 
    - the message shows current table flip figure
    - see if the game has ended because of too many wrong guesses
        - if it has include in the message the game is over


  - show the output to the user

  Searching through an array is the combination of loop and conditional:
  ```js
  var list = [1,4,3,8,9,2];

  var numberToSearch = 2;

  var numberFound = false;

  var i=0;

  while( i<list.length ){

    if( list[i] === numberToSearch ){

      numberFound = true;
    }

    i = i+1;
  }

  console.log( "number found: "+numberFound );

  ```

##### Suggested Build Order

Part one just tells the user if they have won.

1. when the user enters something, look through the array to see if its found. You game can start with only one word- "cat", with the data structure as an array as suggested above.

2. add a variable to keep track of how many letters are found 

3. add a winning state. if the letters found equals the number of letters in the word, tell the user they win (this is still just for "cat")

Part two tells the user if they have lost.

Begin putting in the table flip code.

1. add the test to see if the user has **not** found a letter (*after the loop is done!*)

2. when you know that the user has guessed wrong, add the code that adds to the figure-
  - keep one data structure for the complete table flip (*an array of all of its characters*)
  - when the user guesses wrong, take one thing out of the array and add it to a global state variable string (`pop`) on the array
  - when the length of the table flip array is zero, the game is over. add this conditional logic test to end the game.
  - show the user when they have lost

### further

  Make a list of words to guess. It will be in increasing difficulty. It will be an array of arrays:

  ```
  var words = [
    ['c','a','t'],
    ['d','o','g','g','y'],
    ['a','l','p','h','a','b','e','t']
  ];
  ```
  
### further

  Replace all the arrays of letters with `split('')`
  
  ```
  var word = 'rat';
  var letterArray = word.split(''); // ['r','a','t']
  ```
### further

  Format the output of the message. Use array join to join the array characters of the table flip figure.
  ```js
  var word = ['c','a','t'];
  
  word.join() // outputs 'cat'
  ```
  
### further

  If the user guesses a letter correctly, show the letters in their place in the word.
  
  For example:
  - Word is: phone
  - User guesses n
  - message shown is: `_ _ _ n _`
  
  Hint: you can set a value in a *location* in an array, without setting previous values:
  ```js
  var word = ['c','a','t'];
  var correctGuesses = [];
  var userGuess = 't';

  
  /*
    search through the word and 
    find the index of the letter in the word array
    in this case, it's 2
  */
  
  correctGuesses[2] = userGuess;
  ```
  
### further

  Make the game more lenient.
  
  The wrong guesses will first make this emoticon: ┳━┳
  
  Then this emoticon: (ರ ~ ರ）┳━┳
  
  Then if more wrong guesses are made it changes to this one: (╯ರ ~ ರ）╯︵ ┻━┻
  
  Then the game ends.
  
### further

  The user can type 'admin' to get to an admin mode.
  
  Here they will be able to enter in words, one at a time to add to the list of words to guess.
  
  Then when they type 'endadmin', the admnin mode will end.