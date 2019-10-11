/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Fun DOM Manipulation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to target the `body` element */
const body = document.querySelector('body');

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a `H1` element and store it in a variable
const h1Element = document.createElement("h1");
// 1a. Set the `H1` element's `innerHTML` equal to "Fun DOM Manipulation"
h1Element.innerHTML = "Fun DOM Manipulation";
// 1a. Set the `H1` element's `id` equal to "main-heading"
h1Element.setAttribute("id", "main-heading");
// 1b. Append the `H1` element to the `body` element - body variable created for you above
document.body.appendChild(h1Element);

// 2. Create a `DIV` element and store it in a variable
const divElement = document.createElement("div");
// 2a. Set the `DIV` element's `id` attribute equal to "boat-container"
divElement.setAttribute("id", "boat-container");
// 2b. Set the `DIV` element's `class` attribute equal to "boat-container"
divElement.setAttribute("class", "boat-container");
// 2c. Append the `DIV` element to the `body` element - body variable created for you above
document.body.appendChild(divElement);

// 3. Create an `IMG` element and store it in a variable
const imgElement1 = document.createElement("img");
// 3a. Set the `IMG` element's `src` attribute equal to "img/boat.png"
imgElement1.setAttribute("src", "img/boat.png");
// 3b. Set the `IMG` element's `alt` attribute equal to "Tugboat"
imgElement1.setAttribute("alt", "Tugboat");
// 3c. Set the `IMG` element's `id` attribute equal to "boat-img"
imgElement1.setAttribute("id", "boat-img");
// 3d. Append the `IMG` element to the `DIV` element you created above
document.body.appendChild(imgElement1);

// 4. Create another `IMG` element and store it in a variable
const imgElement2 = document.createElement("img");
// 4a. Set the `IMG` element's `src` attribute equal to "img/mike.png"
imgElement2.setAttribute("src", "img/mike.png");
// 4b. Set the `IMG` element's `alt` attribute equal to "Mike The Frog"
imgElement2.setAttribute("alt", "Mike The Frog");
// 4c. Set the `IMG` element's `id` attribute equal to "mike"
imgElement2.setAttribute("id", "mike");
// 4d. Set the `IMG` element's `class` attribute equal to "mike"
imgElement2.setAttribute("class", "mike");
// 4e. Append the `IMG` element to the `body` element
document.body.appendChild(imgElement2);
