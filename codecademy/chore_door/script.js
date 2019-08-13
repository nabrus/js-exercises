// Closed Doors 1-3 / Start Button
const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const startButton = document.querySelector("#start");

// Door Images
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1 = " ";
let openDoor2 = " ";
let openDoor3 = " ";

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  }
  return false;
};

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  }
  return true;
};

// Decreases `numClosedDoors` and checks for game-winning condition:
// `numClosedDoors === 0`, calling gameOver().
const playDoor = door => {
  numClosedDoors -= 1;

  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
};

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

// Door elements 1-3 Click Event Functions
doorImage1.onclick = () => {
  if (!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(openDoor1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(openDoor2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(openDoor3);
  }
};

// GAMEOVER!
const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?"
  }
};

randomChoreDoorGenerator();
