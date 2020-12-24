"use strict";

var _pessoa = _interopRequireDefault(require("./pessoa"));

require("./assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var atendente = new _pessoa["default"]();
console.log(atendente.cumprimentar());