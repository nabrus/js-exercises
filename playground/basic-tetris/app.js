// The DOMContentLoaded event fires after  HTML doc is loaded on page.
// An alterative to putting script tag right before the end of the doc
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  // Array.from changes squares from a node list to an array
  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  const width = 10;

  // The Tetrominoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 4;
  let currentRotation = 0;

  // Randomly select a Tetromino and its first rotation
  let random = Math.floor(Math.random() * theTetrominos.length);
  let current = theTetrominos[random][currentRotation];

  // Draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
    })
  }

  // Undraw the Tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')  
    })
  }

  // Moving the Tetromino down every second (1000 milliseconds) 
  timerId = setInterval(moveDown, 1000);

  // Assign functions to key codes
  function control(e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      // rotate
    } else if (e.keyCode === 39) {
      // moveRight
    } else if (e.keyCode === 40) {
      // moveDown
    }
  }

  document.addEventListener('keyup', control);

  // // move down function
  function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
  }

  // Freeze function
  function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    // Start a new Tetromino falling
    random = Math.floor(Math.random() * theTetrominos.length)
    current = theTetrominos[random][currentRotation]
    currentPosition = 4
    draw()
    }
  }

 // Move the Tetromino left, unless it's at the edge or is blocked

  function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -=1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition +=1
    }
    draw()
  }

});
