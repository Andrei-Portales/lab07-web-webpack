"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _navBar = _interopRequireDefault(require("./components/nav-bar"));

var _favicon = _interopRequireDefault(require("../assets/images/favicon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createApp = function createApp() {
  var icon = document.createElement('link');
  icon.rel = 'icon';
  icon.href = "".concat(_favicon["default"]);
  document.head.appendChild(icon);
  (0, _navBar["default"])(0);
};

var _default = createApp;
exports["default"] = _default;