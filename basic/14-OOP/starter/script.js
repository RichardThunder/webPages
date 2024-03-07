/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-03-02 17:00:39
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-06 17:30:02
 * @FilePath: \webPages\basic\14-OOP\starter\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //method dont do this
  //   this.calcAge = function () {
  //     console.log(new Date().getFullYear - this.birthYear);
  //   };
};

//1.new {} is created
//2.function is called this={}
//3.{} linked to prototype
//4.function automatically return {}
const ytp = new Person('ytp', 2000);
console.log(ytp);
const matila = new Person('matila', 1995);

// instanceof
console.log(ytp instanceof Person); //true

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

console.log(ytp);

console.log(ytp.__proto__);
console.log(ytp.__proto__ === Person.prototype); //true

Person.prototype.spieces = 'Homo Sapiens';

console.log(Person.prototype.isPrototypeOf(ytp)); //true
console.log(ytp.hasOwnProperty('firstName')); //true
console.log(ytp.hasOwnProperty('spieces')); //false
