/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 15:25:23
 * @version $Id$
 */

/**
 * [块级作用域转换]
 * @type {Number}
 */
let a1 = 1;
let a2 = 6;
{
    let a1 = 2;
    let a2 = 5;
    {
        let a1 = 4;
        let a2 = 5;
    }
}
a1 = 3;

/**
 * [for循环中的let]
 * @type {Array}
 */
const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i);
  };
}
arr[6]();



/**
 * 解构赋值
 */

let [head, ...tail] = [1, 2, 3, 4];

//对象解构
const obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
const { p: [x, { y }] } = obj;


/**
 * import module
 */
import {Human, say} from './module'

class Tom extends Human{
    constructor(name,age) {
      super(name,age);
    }
    get getName() {
     return super.getName();
    }
}
say()

