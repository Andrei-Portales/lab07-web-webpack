"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elenco = _interopRequireDefault(require("../../../../assets/images/elenco.jpg"));

var _elencoPersonajes = _interopRequireDefault(require("./elenco-personajes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var elenco = function elenco() {
  document.getElementById("tagName").textContent = "Elenco";
  var root = document.getElementById("root");
  root.innerHTML = "\n        <div class=\"animatedItem1\">\n          <img src=\"".concat(_elenco["default"], "\" class=\"rounded mx-auto d-block\" alt=\"elenco\" width=\"300\" height=\"200\">\n\n          <h1>Elenco y personajes principales</h1>\n\n          <h2>Lista de personajes</h2>\n\n          <ul class=\"list-group\">\n              <li class=\"list-group-item list-group-item-secondary\" id=\"el0\"><a >Andrew Lincoln</a></li>\n              <li class=\"list-group-item\" id=\"el1\"><a >Jon Bernthal</a></li>\n              <li class=\"list-group-item  list-group-item-secondary\" id=\"el2\"><a >Sarah Wayne</a></li>\n              <li class=\"list-group-item\" id=\"el3\"><a >Laurie Holden</a></li>\n              <li class=\"list-group-item list-group-item-secondary\" id=\"el4\"><a >Jeffrey DeMunn</a></li>\n              <li class=\"list-group-item\" id=\"el5\"><a >Steven Yeun</a></li>\n              <li class=\"list-group-item list-group-item-secondary\" id=\"el6\"><a >Chandler Riggs</a></li>\n              <li class=\"list-group-item\" id=\"el7\"><a >Norman Reedus</a></li>\n          </ul>\n        </div>\n    ");

  var _loop = function _loop(i) {
    var item = document.getElementById("el".concat(i));

    if (item !== null) {
      item.addEventListener("click", function () {
        return changeElenco(i);
      });
      item.style.userSelect = "none";
    }
  };

  for (var i = 0; i <= 8; i++) {
    _loop(i);
  }
};

var changeElenco = function changeElenco(index) {
  return (0, _elencoPersonajes["default"])(index);
};

var _default = elenco;
exports["default"] = _default;