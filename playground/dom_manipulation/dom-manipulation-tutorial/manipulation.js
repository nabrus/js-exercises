// Accessing single elements
const id = document.getElementById("head");
const q = document.querySelector("div p");

// Changing CSS properties of selected.
id.style.color = "red";
q.style.fontSize = "30px";


// Accessing multiple elements
const className = document.getElementsByClassName("text");
console.log(className); // Outputs the node list of <p> with class "text"
/*
  HTMLCollection(3) [p#middle.text, p.text, p.text, middle: p#middle.text]
    0: p#middle.text
    1: p.text
    2: p.text
    length: 3
    middle: p#middle.text
   __proto__: HTMLCollection
*/

console.log(className[2]); 
// Outputs the third element in node list:  <p class="text">Out of dev</p>

console.log(className.item(2));
// Outputs the third element in node list using the
//`Node​List​.item()`:
// <p class="text">Out of dev</p>