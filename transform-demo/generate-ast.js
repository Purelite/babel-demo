/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:24:41
 * @version $Id$
 */
const fs = require('fs');
const babel = require('babel-core');

const path = require('path');

const options = {
  presets: ['env'],
  plugins: ['transform-runtime'],
}

const result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", options);

fs.writeFile('./test-ast.json', JSON.stringify(result.ast, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("test-ast save success");
    }
});
