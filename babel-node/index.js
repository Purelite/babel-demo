/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-22 09:22:25
 * @version $Id$
 */

const React = require('react');
const elements = [1, 2, 3].map((item) => {
  return (
    <div>{item}</div>
  )
});

console.log(elements);

//babel-node --presets react test.js