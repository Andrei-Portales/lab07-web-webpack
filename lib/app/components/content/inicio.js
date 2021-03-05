"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.concat.js");

var _img = _interopRequireDefault(require("../../../assets/images/img1.jpg"));

var _theme_song = _interopRequireDefault(require("../../../assets/audio/theme_song.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var home = function home() {
  document.getElementById("tagName").textContent = "Inicio";
  var root = document.getElementById("root");
  root.innerHTML = "\n    \n  <div class=\"animatedItem1\">\n  \n  <img src=\"".concat(_img["default"], "\" class=\"rounded mx-auto d-block\" alt=\"Imagen de serie\" width=\"300\" height=\"200\" class=\"card\">\n\n  <div class=\"card\">\n  <h1>The Walking Dead</h1>\n      <p>\n          The Walking Dead es una serie de televisi\xF3n estadounidense de horror post-apocal\xEDptico para AMC basada en\n          la serie de c\xF3mics de Robert Kirkman, Tony Moore y Charlie Adlard. La serie presenta un gran elenco como\n          sobrevivientes de un apocalipsis zombi, tratando de mantenerse con vida bajo la amenaza casi constante\n          de ataques de los zombis sin conciencia, coloquialmente conocidos como \xABcaminantes\xBB. Sin embargo, con la\n          ca\xEDda de la humanidad, estos sobrevivientes tambi\xE9n enfrentan conflictos con otros sobrevivientes que\n          han formado grupos y comunidades con sus propios conjuntos de leyes y morales, lo que a menudo conduce a\n          conflictos hostiles entre las comunidades humanas.\n      </p>\n  </div>\n\n  <hr>\n\n <div class=\"card\">\n  <details>\n      <summary>Pais de origen</summary>\n      <p>Estados Unidos</p>\n  </details>\n\n  <details>\n      <summary>Idioma original</summary>\n      <p>Ingles</p>\n  </details>\n\n  <details>\n      <summary>No. de temporadas</summary>\n      <p>10 temporadas</p>\n  </details>\n\n  <details>\n      <summary>No. de episodios</summary>\n      <p>147 episodios</p>\n  </details>\n\n  <details>\n      <summary>Tema de la serie</summary>\n      <audio controls>\n          <source src=\"").concat(_theme_song["default"], "\" type=\"audio/mp3\">\n      Your browser does not support the audio element.\n      </audio>\n  </details>\n\n\n </div>\n  </div>\n    \n    ");
};

var _default = home;
exports["default"] = _default;