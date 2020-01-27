"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('should return default value', function () {
  expect(_index["default"].formatCurrency(3000)).toBe('Rp3.000');
});
test('given 3000 with decimal 2, should return "Rp3.000,00"', function () {
  expect(_index["default"].formatCurrency(3000, 2)).toBe('Rp3.000,00');
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _accounting = _interopRequireDefault(require("accounting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var format = function format(num, offset) {
  if (!offset) {
    offset = 0;
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

var formatCurrency = function formatCurrency(val, offset, type) {
  if (!offset) {
    offset = 0;
  }

  if (type == "IDR") {
    return "IDR" + format(val, offset);
  } else {
    return "Rp" + format(val, offset);
  }
};

var _default = {
  format: format,
  unformat: unformat,
  formatCurrency: formatCurrency
};
exports["default"] = _default;