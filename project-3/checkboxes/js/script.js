/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Checkboxes - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variable to store all the checkboxes - You will use this in the event listener below to create a loop */

const checkboxes = document.querySelectorAll('.options input');

/**
 * Event listener for checkboxes
 */

document.querySelector('.options').addEventListener('change', (e) => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // 1) Create a variable named `clicked` to store the checkbox input that was just clicked - `e.target` will be helpful here
  const $clicked = $(e.target)
  // 2) Create a variable named `clickedType` to store the `data-type` attribute of the checkbox that was just clicked
  const $clickedType = $clicked.attr("data-type");
  // 3) Log out these variables to test them
  console.log($clicked);
  console.log($clickedType);

  // 4)  Use the `checkboxes` variable that was created for you above and a for loop to iterate over all the checkbox inputs
  $.each(checkboxes, function(i, checkbox) {
    // 5) In the loop, create a variable named `checkboxType` to store the `data-type` attribute of the `checkboxes[i]` in the loop's current iteration
    const $checkboxType = $(checkbox).attr("data-type");

    // 6) Create an `if` statement to check two conditions - `(clickedType === checkboxType && clicked !== checkboxes[i])`
    if ($clickedType === $checkboxType && $clicked !== checkbox) {
      // 7) In the `if` statement, create an `if/else` statement to check one condition:
      // If using jQuery, the condition is - `($(clicked).prop('checked'))`
      // Or if using vanilla JS, the condition would be just - (clicked.checked)
      if ($clicked.prop('checked')) {
        // 8) If the `clicked` checkbox is `checked`, set the disabled property of `checkboxes[i]` to true
        $(checkbox).attr("disabled", "true");
      } else {
        // 9) Else, set the disabled property of `checkboxes[i]` to false
        $(checkbox).attr("disabled", "false");
      }
    }
  });

  /* Helpful log statement to test that the listener is working - feel free to delete this or comment it out */
  console.log("The checkboxes' change event listener is functional!");
});
