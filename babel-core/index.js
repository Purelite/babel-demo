/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:24:41
 * @version $Id$
 */
var fs = require('fs');

var babel = require('babel-core');
//var babylon = require('babylon');
var transform = babel.transform;
var path = require('path');
var options = {
  presets: ['env'],
  plugins: ['transform-runtime'],
}




//babel.transform(code: string, options?: Object)
/*var result = babel.transform("test();", options);
console.log('babel.transform',result)*/

//babel.transformFile(filename: string, options?: Object, callback: Function)
/*babel.transformFile(path.resolve(__dirname) + "/test.js", options, function(err, result) {// { code, map, ast }
  console.log('babel.transformFile',result);
});*/

//babel.transformFileSync(filename: string, options?: Object)
var result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", options);
//console.log('babel.transformFile',result);
fs.writeFile('./ast.json', JSON.stringify(result, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to ");
    }
});


//babel.transformFromAst(ast: Object, code?: string, options?: Object)
// const sourceCode = "const str = 'hello world'";
// const parsedAst = babylon.parse(sourceCode, { allowReturnOutsideFunction: true });
// const { code, map, ast } = babel.transformFromAst(parsedAst, sourceCode, options);
// console.log(code, map, ast);
