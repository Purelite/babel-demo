/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-22 13:19:36
 * @version $Id$
 */

async function test() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
test();