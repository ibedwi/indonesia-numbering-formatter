"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _accounting = _interopRequireDefault(require("accounting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var format = function format(num, offset) {
  if (!offset) {
    offset = 2;
  }

  if (num) {
    return String(_accounting["default"].formatNumber(num, offset, ".", ","));
  } else {
    return String(0);
  }
};

var unformat = function unformat(val) {
  var unformat1 = val.replace(".", "");
  var unformat2 = unformat1.replace(",", ".");
  return Number(unformat2);
};

var formatCurrency = function formatCurrency(val, type) {
  if (type == "IDR") {
    return "IDR" + format(val, 2);
  } else {
    return "Rp" + format(val, 2);
  }
};

var _default = {
  format: format,
  unformat: unformat,
  formatCurrency: formatCurrency
};
exports["default"] = _default;
