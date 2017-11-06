/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:25:23
 * @version $Id$
 */

const str = 'hello world'

const fn = () => {
  console.log('this is a test function')
}

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

new Promise((resolve) => {
  resolve();
});