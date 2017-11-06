/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 19:23:43
 * @version $Id$
 */

  
var test2 = async function test2() {
  console.log('test2 begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000)
  })
  console.log('test2 done');
}
test2();