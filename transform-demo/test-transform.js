"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(gen);

/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:25:23
 * @version $Id$
 */

var str = 'hello world';

var fn = function fn() {
  console.log('this is a test function');
};

function gen() {
  return _regenerator2.default.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

new _promise2.default(function (resolve) {
  resolve();
});