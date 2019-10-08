/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Printing Values and Types to the Page and the Console - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variable to store buttons by id for event listener assignment below — You can ignore these */
const test = document.querySelector('#test');
const clear = document.querySelector('#clear');


/* Variables to store DOM elements - You'll use these */
const stringElement = document.querySelector('#string-element');
const stringTypeElement = document.querySelector('#string-type');

const numberElement = document.querySelector('#number-element');
const numberTypeElement = document.querySelector('#number-type');

const booleanElement = document.querySelector('#boolean-element');
const booleanTypeElement = document.querySelector('#boolean-type');

const arrayElement = document.querySelector('#array-element');
const iterationIndexesElement = document.querySelector('#iteration-indexes-element');

const steps = document.querySelectorAll('.step');


/**
 * Event listener for test button
 */
test.addEventListener('click', () => {
  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // 1) If you haven't already, preview the index.html file in Chrome, and open the Chrome DevTools

  // 2) Create a `myString` variable, log it to the console and print it to the screen
      // 2a) Create a variable named myString and set it equal to the string 'Treehouse'
      // 2b) Set the `innerHTML` of the `stringElement` variable above equal to the `myString` variable
      // 2c) Use `console.log()` to log out the `myString` variable
      // 2d) Create a variable named `myStringType` and set it equal to `typeof myString`
      // 2e) Set the `innerHTML` of the `stringTypeElement` variable above equal to the `myStringType` variable
      // 2f) Take a moment to inspect the results on the page and especially in the console
      // NOTE: Comment out or delete log statements that you don't need any more to keep from overcrowding the console
  const myString = "Treehouse";
  stringElement.innerHTML = myString;
  console.log(myString);
  const myStringType = (typeof myString);
  stringTypeElement.innerHTML = myStringType;

  // 3) Create a `myNumber` variable, log it to the console and print it to the screen
      // 3a) Create a variable named myNumber and set it equal to a number between 1 and 10
      // 3b) Set the `innerHTML` of the `numberElement` variable above equal to the `myNumber` variable
      // 3c) Use `console.log()` to log out the `myNumber` variable
      // 3d) Set the `innerHTML` of the `numberTypeElement` variable above equal to `typeof myNumber`
      // 3e) Take a moment to inspect the results on the page and especially in the console
  const myNumber = 8;
  numberElement.innerHTML = myNumber;
  console.log(myNumber);
  numberTypeElement.innerHTML = (typeof myNumber);

  // 4) Create a `myBoolean` variable, log it to the console and print it to the screen
      // 4a) Create a variable named myBoolean and set it equal to the keyword true
      // 4b) Set the `innerHTML` of the `booleanElement` variable above equal to the `myBoolean` variable
      // 4c) Use `console.log()` to log out the `myBoolean` variable
      // 4d) Set the `innerHTML` of the `booleanTypeElement` variable above equal to `typeof myBoolean`
      // 4e) Change the value of the `myBoolean` variable to the keyword `false` and refresh the page
      // 4f) Use `console.log()` to log out the `myBoolean` variable again to see the difference in the console
      // 4g) Take a moment to inspect the results on the page and especially in the console
  let myBoolean = true;
  booleanElement.innerHTML = myBoolean;
  console.log(myBoolean);
  booleanTypeElement.innerHTML = (typeof myBoolean);
  myBoolean = false;
  console.log(myBoolean);

  // 5) Uncomment the array below, and print it the page and console.table() it to the console
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      // 5a) Set the `innerHTML` of the `arrayElement` variable above equal to the `arr` variable
      // 5b) Use `console.table()` to log out the `arr` variable
      // 5c) Use a standard `for` loop to iterate over the `arr` variable
      // 5ca) Inside the loop, concatenate the iterator, i, to the `innerHTML` of the `iterationIndexesElement`, like so: `iterationIndexesElement.innerHTML += i;`
      // 5d) Take a moment to inspect the results on the page and especially in the console
  arrayElement.innerHTML = arr;
  console.table(arr);
  for (let i=0; i <= arr.length; i++) {
    iterationIndexesElement.innerHTML += i;
  }

  // 6) Log out a DOM element and DOM collection
      // 6a) Use `console.log()` to log out the `steps` variable
      // 6b) Use `console.log()` to log out `steps[0]` to get a look at the first item in the collection in the `steps` variable
      // 6c) Use `console.dir()` to log out `steps[0]` to get a look at the difference between `.log` and `.dir`
      // 6d) Take a moment to inspect the results in the console
  console.log(steps);
  console.log(steps[0]);
  console.dir(steps[0]);

  // 7) Log out the `window` and `document` objects
      // 7a) Use `console.log()` to log out the `window` object
      // 7b) Use `console.log()` to log out the `document` object
      // 7c) Take a moment to inspect the results in the console
  console.log(window);
  console.log(document);

  // Helpful log statement to test that the "Test" button is functional — you can comment this out if you like
  console.log("Test button is functional!");
});

/**
 * Event listener for clear button — Don't mess with this.
 */
clear.addEventListener('click', () => {
  stringElement.innerHTML = 'String';
  stringTypeElement.innerHTML = '?';
  numberElement.innerHTML = 'Number';
  numberTypeElement.innerHTML = '?';
  booleanElement.innerHTML = 'Boolean';
  booleanTypeElement.innerHTML = '?';
  arrayElement.innerHTML = 'Array';
  iterationIndexesElement.innerHTML = '?';
  console.clear();
});
