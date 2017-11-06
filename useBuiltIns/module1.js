/**
 * 
 * @authors purelite (zhuweilei@weidian.com)
 * @date    2017-11-05 17:52:05
 * @version $Id$
 */

async function test() {
  await new Promise((resolve) => {
    console.log('mod1-start')
    setTimeout(() => {
      resolve();
    }, 100)
    console.log('mod1-done')
  })
}
test();