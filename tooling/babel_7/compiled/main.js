"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v", {
  enumerable: true,
  get: function get() {
    return _mod.default;
  }
});

var _mod = _interopRequireDefault(require("mod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var Rebels =
/*#__PURE__*/
function () {
  function Rebels(name) {
    _classCallCheck(this, Rebels);

    this._name = name;
    this._hasForce = false;
  } // Getters


  _createClass(Rebels, [{
    key: "greeting",
    // Methods
    value: function greeting() {
      return "Hey, I'm ".concat(this.name, " and I hate the empire.");
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
    } // Setters
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

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);