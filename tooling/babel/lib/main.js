/* eslint-disable */
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-underscore-dangle: 0 */
var cat = "Mose";

var numbers = [2, 5, 6, 4, 22, 32];
var dblNums = numbers.map(function (num) {
  return num * 2;
});
console.log(dblNums);
var sum = numbers.reduce(function (acc, next) {
  return acc + next;
});
console.log(sum);

var Rebels = function () {
  function Rebels(name) {
    _classCallCheck(this, Rebels);

    this._name = name;
    this._hasForce = false;
  }

  // Getters


  _createClass(Rebels, [{
    key: "greeting",


    // Methods
    value: function greeting() {
      return "Hey, I'm " + this.name + " and i dislike the empire.";
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "force",
    get: function get() {
      return this._hasForce;
    }

    // Setters
    ,
    set: function set(able) {
      if (able === "yes") {
        this._hasForce = true;
      }
    }
  }]);

  return Rebels;
}();

var luke = new Rebels("Luke Skywalker");
var han = new Rebels("Han Solo");

luke.force = "yes";
console.log(luke.force);
console.log(han.greeting());