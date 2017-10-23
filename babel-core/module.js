/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-21 18:26:23
 * @version $Id$
 */

export class Human{
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}
 
export function say() {
  console.log('老铁 双击666');
}