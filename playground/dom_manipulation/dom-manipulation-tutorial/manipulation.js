/* eslint-disable prefer-destructuring */
// ACCESSING SINGLE ELEMENTS
const id = document.getElementById("head");
const q = document.querySelector("div p");

// Changing CSS properties of selected.
id.style.color = "red";
q.style.fontSize = "30px";


// ACCESSING MULTIPLE ELEMENTS

// 1. Selecting every class name of "text"
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

console.log(className[2]); // <p class="text">Out of dev</p>
// Outputs the third element in node list using array-like bracketed syntax.

console.log(className.item(2)); // <p class="text">Out of dev</p>
// Outputs the third element in node list using the `Node​List​.item()` method,
// it Returns a node from a NodeList by index.


// 2. Selecting every `p` element
const tagName = document.getElementsByTagName("p");
console.log(tagName);
/*
  HTMLCollection(4) [p#middle.text, p, p.text, p.text, middle: p#middle.text]
    0: p#middle.text
    1: p
    2: p.text
    3: p.text
    length: 4
    middle: p#middle.text
    __proto__: HTMLCollection
*/


// 3. Selecting every `p` element inside a `div`
const selector = document.querySelectorAll("div p");
console.log(selector);
/*
  NodeList(3) [p#middle.text, p, p.text]
    0: p#middle.text
    1: p
    2: p.text
    length: 3
    __proto__: NodeList
*/


// TRAVERSING THE DOM
/*
  `Node.firstChild` read-only property returns the node's first child in the
  tree.

  `Node.lastChild` read-only property returns the last child of the node.

  `Node.parentNode` read-only property returns the parent of the specified
  node in the DOM tree.

  `Node.nextSibling` read-only property returns the node immediately following
  the specified one in their parent's childNodes, or returns null if the
  specified node is the last child in the parent element.

  `Node.previousSibling` read-only property returns the node immediately
  preceding the specified one in its parent's childNodes list, or null if the
  specified node is the first in that list.
*/

// 1. Gets the first child of the element with the id of "division"
const fChild = document.getElementById("division").firstChild;
console.log(fChild); // <h1 id="head">...</h1>
/*
  Note: If there was whitespace after the <div> tag `#text` would show because
  a text node is inserted to maintain the whitespace between elements—ex the
  end of the opening `div` and `h1` tags.
*/

// 2. Gets the last element from element with the id of "division"
const lChild = document.querySelector("#division").lastChild;
console.log(lChild); // <em>...</em>

// 3. Gets the parent node of the element with the id of "division"
const parent = document.querySelector("#division").parentNode;
console.log(parent); // <body>...</body>

// 4. Selects the element with the id of "middle"
const middle = document.getElementById("middle");
console.log(middle.nextSibling); // <p>Sibling>/p>


// GET AND UPDATE ELEMENT CONTENT
/*
  `nodeValue` property of the Node interface returns or sets the value of the
  current node.

  `textContent` property of the Node interface represents the text content of a
  node and its descendants.
*/

// 1. Get text with nodeValue
const nodeValue = document.getElementById("middle").firstChild.nodeValue;
console.log(nodeValue); // Tutorial

// 2. Set text with nodeValue: changes the text from "Tutorial" to
// "nodeValue Text".
document.getElementById("middle").firstChild.nodeValue = "nodeValue text";

// 3. Get text with textContent
const textContent = document.querySelectorAll(".text")[1].textContent;
console.log(textContent); // Medium Tutorial

// 4. Set text with textContent: changes the text from "Medium Tutorial" to
// "new textContent set".
document.querySelectorAll(".text")[1].textContent = "new textContent set";


// ADD AND REMOVE HTML CONTENT
/*
  `Element.innerHTML` property gets or sets the HTML or XML markup contained
  within the element.

  `Document.createElement()` method creates the HTML element specified by
  tagName, or an `HTMLUnknownElement` if tagName isn't recognized.

  `Document.createTextNode()` creates a new Text node. This method can be used
  to escape HTML characters.

  `Node.appendChild()` method adds a node to the end of the list of children of
  a specified parent node.

  `Node.removeChild()` method removes a child node from the DOM and returns the removed node.
*/

// 1. Setting content with innerHTML removes the HTML content that's already
// inside the element and then adds the new one. The following would replace
// all of the existing elements in the <div> with the added list.

// document.getElementById("division").innerHTML = `
//   <ul>
//     <li>Angular</li>
//     <li>Vue</li>
//     <li>React</li>
//   </ul>
// `;

// 2. Add an HTML element.
// Create a new `p` element using the createElement method
const newElement = document.createElement("p");
// Then create a new text node and append the text node to the newly created.
const text = document.createTextNode("Text Added!!!");
newElement.appendChild(text);
// Then append the new element with the text node into the div with the
// id "division"
document.getElementById("division").appendChild(newElement);

// 3. Remove an HTML element.
// Get the element we want to remove.
const toBeRemoved = document.getElementById("head"); // h1#head
// Then get the parent node using the `parentNode` property.
const parentN = toBeRemoved.parentNode; // div#division
// Then use removeChild method, with the element to be removed as the arg.
parentN.removeChild(toBeRemoved);


// ATTRIBUTE NODE
/*
  `Element.getAttribute()` method of the `Element` interface returns the value
  of a specified attribute on the element. If the given attribute does not
  exist, the value returned will either be `null` or `""` (the empty string).

  `Element.setAttribute()` sets the value of an attribute on the specified
  element. If the attribute already exists, the value is updated; otherwise a
  new attribute is added with the specified name and value.

  `Element.hasAttribute()` method returns a Boolean value indicating whether
  the specified element has the specified attribute or not.

  `Element.removeAttribute()` method removes the attribute with the specified name from the element.

  `Element.id` property represents the element's identifier, reflecting the id
  global attribute. Can be used to get or set the id of an element.

  `element.className` property gets and sets the value of the class attribute
  of the specified element.
*/

// 1. Selects the first <div>.
const d = document.querySelector("div"); // div#division

// Checks if it has an id attribute, returns true/false
console.log(`Checks id: ${d.hasAttribute("id")}`); // Checks id: true

// Set a new class attribute.
d.setAttribute("class", "newClass"); // div#division.newClass

// Logs the class name.
console.log(d.className); // newClass
