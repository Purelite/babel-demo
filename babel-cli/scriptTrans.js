/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 18:30:15
 * @version $Id$
 */
/*const str = 'hello world';
console.log(str)

const test = () => console.log('test');

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}*/

const array = [1, 2, 3].map(function (item, index) {
  return item * 2;
});

//babel --plugins transform-es2015-arrow-functions index.js -o scriptTrans.js
