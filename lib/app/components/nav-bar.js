"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inicio = _interopRequireDefault(require("./content/inicio"));

var _resumen = _interopRequireDefault(require("./content/resumen"));

var _produccion = _interopRequireDefault(require("./content/produccion"));

var _lanzamiento = _interopRequireDefault(require("./content/lanzamiento"));

var _recepcion = _interopRequireDefault(require("./content/recepcion"));

var _elenco = _interopRequireDefault(require("./content/elenco/elenco"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = ["Inicio", "Elenco y personajes", "Resumen", "Produccion", "Lanzamiento", "Recepcion"];

var changeView = function changeView(index) {
  switch (index) {
    case 0:
      (0, _inicio["default"])();
      break;

    case 1:
      (0, _elenco["default"])();
      break;

    case 2:
      (0, _resumen["default"])();
      break;

    case 3:
      (0, _produccion["default"])();
      break;

    case 4:
      (0, _lanzamiento["default"])();
      break;

    case 5:
      (0, _recepcion["default"])();
      break;

    default:
      (0, _inicio["default"])();
  }
};

var navBarF = function navBarF(index) {
  var navBar = document.getElementById("nav-bar");
  navBar.innerHTML = "\n  <div class=\"pos-f-t\">\n    \n    <nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\">The Walking Dead</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n    </nav>\n    <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n      <div class=\"drop-down-menu\">\n        <div class=\"navbar-nav\" id=\"list_navbar\">\n            \n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  ";
  var classes = ["nav-bar-item--home", "nav-bar-item--elenco", "nav-bar-item--resumen", "nav-bar-item--produccion", "nav-bar-item--lanzamiento", "nav-bar-item--recepcion"];
  var list = document.getElementById("list_navbar");

  if (list !== null) {
    list.innerHTML = "";

    var _loop = function _loop(i) {
      var button = document.createElement("a");
      button.style.userSelect = "none";
      button.textContent = data[i];
      button.className = classes[i];
      button.addEventListener("click", function () {
        return navBarF(i);
      });
      list.appendChild(button);
      /*const hr = document.createElement('hr');
      hr.className = 'divider';
      list.appendChild(hr);*/
    };

    for (var i = 0; i < data.length; i++) {
      _loop(i);
    }

    changeView(index);
  }
};

var _default = navBarF;
exports["default"] = _default;