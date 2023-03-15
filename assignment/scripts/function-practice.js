console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log("1.");

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log("2.");

function helloName( name ) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log(helloName( 'Othello' ) );


// 3. Function to add two numbers together & return the result
console.log("3.");

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
console.log("4.");

function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}

console.log( multiplyThree(6, 5, 3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log("5.");

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(isPositive(-2));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log("6.");

let greetings = ['hi', 'bye', 'I can feel your soul'];
function getLast( array ) {
  lastItem = array[array.length - 1];
  return lastItem
  if (array.length === 0) {
    return 'undefined';
  }
}

console.log(getLast(greetings));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log("7.");

function find( value, array ){
  for (i=0; i<array.length; i++){
    if (value === array[i]) {
      console.log("This is the value: " + value);
      return true;
    }
  }
  if (value !== array[i]) {
    console.log("no " + value + " here.");
    return false;
  }
}

console.log(find( 'yo', greetings ) );
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log("8.");
let string = 'apple';
function isFirstLetter(letter, string) {
  if (string.indexOf(letter) === 0){
    console.log('This string starts with', letter);
    return true;
  }
  else {
    console.log("This string does not start with " + letter);
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log("9.");
let numbers = [1, 2, 3, 4, 5];
function sumAll( ) {
  let sum = 0;
  // TODO: loop to add items
  for (i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

console.log( sumAll() );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log("10.");
let input = [-1, 0, 2, -5, 1];
let input2 = [];
function newArray( ) {
  for (i=0; i<input.length; i++){
    if (input[i] > 0){
      input2.push(input[i]);
    }
  }
  return input2;
}
console.log(input);
console.log(newArray());

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
/* Write a function that takes two integers (hours, minutes), converts them to seconds, and 
adds them. */
console.log("11.");
function convert(hours, minutes) {
  seconds = (hours*60*60) + (minutes*60);
  return seconds;
}

console.log(convert(1, 0) + ` seconds`);
console.log(convert(2, 2) + ` seconds`);

