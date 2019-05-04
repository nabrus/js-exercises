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

// 1. get text with nodeValue
const nodeValue = document.getElementById("middle").firstChild.nodeValue;
console.log(nodeValue); // Tutorial
