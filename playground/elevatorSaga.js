/*
  Elevator Saga The elevator programming game

  About: This is a game of programming!
  Your task is to program the movement of elevators, by writing a program in
  JavaScript.

  The goal is to transport people in an efficient manner.
  Depending on how well you do it, you can progress through the ever more
  difficult challenges.
  Only the very best programs will be able to complete all the challenges.
*/

{
  init: function (elevators, floors) {
      var elevator = elevators[0]; // Let's use the first elevator

      // Whenever the elevator is idle (has no more queued destinations) ...
      elevator.on("idle", function() {
          // let's go to all the floors (or did we forget one?)
          elevator.goToFloor(0);
          elevator.goToFloor(1);
          elevator.goToFloor(2);
      });
  },
  update: function (dt, elevators, floors) {
      // We normally don't need to do anything here
  }
}