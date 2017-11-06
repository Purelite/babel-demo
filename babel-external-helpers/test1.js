/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-08 19:23:36
 * @version $Id$
 */

new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000)
})

var test1 = async function test1() {
  console.log('test1 begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('test1 done');
}
test1();