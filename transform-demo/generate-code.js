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
fs.readFile(path.resolve(__dirname)+ "/test-ast.json",'utf-8',function(err,data){
    const result = babel.transformFromAst(JSON.parse(data),options);
    outputFileSync('./test-transform.js', result.code);
})
