/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:25:23
 * @version $Id$
 */

const Promise = require('babel-runtime/core-js/promise');

console.log(Promise);

 const a = 1;
 const b = () => console.log(2);
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

new Promise((resolve) => {
  resolve();
});

function Vue(){

}
// @flow
//Vue.prototype.test = function (vnode?: String, hydrating?: boolean) {}

Object.assign({}, { a: 1 });

console.log([1, 2, 3].reduce((res, cur) => res + cur));
