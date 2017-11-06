/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:24:41
 * @version $Id$
 */
var fs = require('fs');
var babel = require('babel-core');
var babylon = require('babylon');
var path = require('path');
var options = {
  presets: ['env'],
  plugins: ['transform-runtime'],
  //plugins: ['babel-plugin-transform-es2015-arrow-functions']
}


const result = babel.transform("const test = ()=>{console.log('hello')};", options);
console.log('babel.transform----->>>>>>>>>>>',result.code)

/*babel.transformFile(path.resolve(__dirname) + "/test.js", options, function(err, result) {// { code, map, ast }
  console.log('babel.transformFile----->>>>>>>>>>>',result);
});*/

/*const result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", options);
console.log('babel.transformFileSync----->>>>>>>>>>>',result);*/

/*const sourceCode = "const str = 'hello world'";
const parsedAst = babylon.parse(sourceCode, { allowReturnOutsideFunction: true });
const { code, map, ast } = babel.transformFromAst(parsedAst, sourceCode, options);
console.log('babel.transformFromAst----->>>>>>>>>>>',code);*/












/*
const outputFileSync = require("output-file-sync");
babel.transformFile(path.resolve(__dirname) + "/trans2what.js", options, function(err, result) {
  outputFileSync('./trans2code.js', result.code);
});*/
