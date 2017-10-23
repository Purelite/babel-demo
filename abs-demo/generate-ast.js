/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:24:41
 * @version $Id$
 */
const fs = require('fs');
const babel = require('babel-core');

const transform = babel.transform;
const path = require('path');

const options = {
  presets: ['env'],
  plugins: ['transform-runtime'],
}

const result = babel.transformFileSync(path.resolve(__dirname) + "/abs.js", options);

fs.writeFile('./abs-ast.json', JSON.stringify(result.ast, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("abs-ast astsave success");
    }
});
