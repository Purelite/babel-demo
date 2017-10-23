/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:24:41
 * @version $Id$
 */
const fs = require('fs');
const babel = require('babel-core');
const path = require('path');
const outputFileSync = require("output-file-sync");
const options = {
  presets: ['env'],
  plugins: ['transform-runtime'],
}
fs.readFile(path.resolve(__dirname)+ "/abs-ast.json",'utf-8',function(err,data){
    const { code, map, ast } = babel.transformFromAst(JSON.parse(data),options);
    outputFileSync('./abs-code.js', code);
    /*fs.writeFile('./abs-code.js', JSON.stringify(code, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("save success");
        }
    });*/
})
