/**
 * 
 * @authors purelite (zhuweilei@weidian.com)
 * @date    2017-11-05 17:51:47
 * @version $Id$
 */

require('./module1');
import 'babel-polyfill';

const React = require('react');
const elements = [1, 2, 3].map((item) => {
  return (
    <div>{item}</div>
  )
});

console.log(elements);

async function fn() {
  await new Promise((resolve) => {
    console.log('start')
    setTimeout(() => {
      resolve();
    }, 1000)
    console.log('done')
  })
}

fn();


Object.assign({}, { val: 1 });