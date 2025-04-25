/*
 document refers to the html page that has already been loaded 
 querySelector(...) is a method that finds the first element that matches a gien CSS selector 
 "buttonA" now stores a reference to this button with id of "buttonA"
 */
const buttonA = document.querySelector("#button_A");  //selecting elements from your html so you can interact with it using JS
const headingA = document.querySelector("#heading_A"); 


let count = 1;


//store htmlelements in variables so that later you can do things like this
buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
