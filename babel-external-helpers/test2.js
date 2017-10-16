/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 19:23:43
 * @version $Id$
 */

  
var test2 = async function test2() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
test2();