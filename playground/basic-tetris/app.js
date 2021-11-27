// The DOMContentLoaded event fires after  HTML doc is loaded on page. 
// An alterative to putting script tag right before the end of the doc
document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  // Array.from changes squares from a node list to an array
  const scoreDisplay = document. querySelector('#score');
  const startBtn = document. querySelector('#start-button');
  const width = 10

  // The Tetrominoes
  const lTetrominoe = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetrominoe = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
  ]

  const tTetrominoe = [
    [1, width, width+1, width+2]
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1],
  ]

  const oTetrominoe = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
  ]

  const iTetrominoe = [
    [1, width+1, width*2+1, width*3+1]
    [width, width+1, width+2, width+3]
    [1, width+1, width*2+1, width*3+1]
    [width, width+1, width+2, width+3]
  ]

})
