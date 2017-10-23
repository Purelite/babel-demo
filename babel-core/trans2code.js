'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _module = require('./module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:25:23
 * @version $Id$
 */

/**
 * [块级作用域转换]
 * @type {Number}
 */
var a1 = 1;
var a2 = 6;
{
  var _a = 2;
  var _a2 = 5;
  {
    var _a3 = 4;
    var _a4 = 5;
  }
}
a1 = 3;

/**
 * [for循环中的let]
 * @type {Array}
 */
var arr = [];

var _loop = function _loop(i) {
  arr[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
arr[6]();

/**
 * 解构赋值
 */

var head = 1,
    tail = [2, 3, 4];

//对象解构

var obj = {
  p: ['Hello', { y: 'World' }]
};

var _obj$p = (0, _slicedToArray3.default)(obj.p, 2),
    x = _obj$p[0],
    y = _obj$p[1].y;

var Car = function Car(price) {
  (0, _classCallCheck3.default)(this, Car);

  this.price = price;
};
/**
 * import
 */


var Tom = function (_Human) {
  (0, _inherits3.default)(Tom, _Human);

  function Tom(name, age) {
    (0, _classCallCheck3.default)(this, Tom);
    return (0, _possibleConstructorReturn3.default)(this, (Tom.__proto__ || (0, _getPrototypeOf2.default)(Tom)).call(this, name, age));
  }

  (0, _createClass3.default)(Tom, [{
    key: 'getName',
    get: function get() {
      return (0, _get3.default)(Tom.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tom.prototype), 'getName', this).call(this);
    }
  }]);
  return Tom;
}(_module.Human);

(0, _module.say)();