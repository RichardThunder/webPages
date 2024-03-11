/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-03-02 17:00:39
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-11 17:13:51
 * @FilePath: /webPages/basic/14-OOP/starter/script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

/* const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //method dont do this
  //   this.calcAge = function () {
  //     console.log(new Date().getFullYear - this.birthYear);
  //   };
}; */

//1.new {} is created
//2.function is called this={}
//3.{} linked to prototype
//4.function automatically return {}
/* const ytp = new Person('ytp', 2000);
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
console.log(ytp.__proto__.__proto__); //object
console.log(ytp.__proto__.__proto__.__proto__); //null */

// let arr = [1, 3, 4, 1, 3, 5, 2, 6, 0, 0, 8, 9, 9, 2, 1];
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

//ES6 classes
//class expression
//const PersonCl=class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //method will add to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  greet() {
    console.log(`Hi, ${this.firstName}!`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      alert(`${name} is not a full Name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('hey you moring!');
  }
}

const jessca = new PersonCl('jessca Davis', 2000);
//console.log(jessca);
//jessca.calcAge();
//console.log(jessca.__proto__ === PersonCl.prototype);
//jessca.greet();

// classes are not hoisted
// classed are first-class citizens
// classed are executed in strict mode

//console.log(jessca.age);
jessca.fullName = 'jessca man';
//console.log(jessca.fullName);

const ytp = new PersonCl('y tp', 2000);
console.log(ytp);

/* // #1 直接添加静态方法 
Person.hey = function () {
  console.log('hey you moring!');
};
Person.hey();
// const newPerson = new Person();
// newPerson.hey();
// #2 使用static 在类内添加
PersonCl.hey(); */



//Object.create()
const PersonProto = {   
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
    },
    init(firstName,birthYear) { 
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
const steven = Object.create(PersonProto);
steven.firstName = 'steven';
steven.birthYear = 1995;
steven.calcAge();

const Sarah = Object.create(PersonProto);
Sarah.init('sarah', 1980);
Sarah.calcAge();


//prototype chain
//手动绑定原型链
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge=function(){
    console.log(new Date().getFullYear()-this.birthYear);
}

const Student=function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear)
    this.course = course;
};
Student.prototype=Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`I am ${this.firstName}, and I study ${this.course} here`);
}

const mike = new Student('mike',2000,'comopute science')
mike.introduce();
mike.calcAge()
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  calcAge() {
    console.log(
      `hey I am ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student learing ${this.course}, I feel like ${
        new Date().getFullYear() - this.birthYear
      } years old.`
    );
  }
}

const john=new StudentCl('John Schwester','1988','Math')
john.calcAge()


// Inheritance Between Classes: Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(new Date().getFullYear() - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };
const StudentProto=Object.create(PersonProto)
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
StudentProto.introduce = function () {
    console.log(`I am ${this.firstName}, and I study ${this.course} here`);
}
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'cs')
jay.introduce();
const chou =Object.create(StudentProto);
chou.init('chou',2000,'art');
chou.introduce();

class Account {
  //private field
  #owner;
  #pin;
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.locale;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  //public field
  locale = navigator.language;
  //public method
  getMovements() {
    return this.movements;
  }

  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.movements.push(-val);
    return this;
  }
  //private method
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved!');
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(100);
console.log(acc1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' 
and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = Number(speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();
// mercedes.brake();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed 
in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed 
in mi/h (but converts it to km/h before storing the value, by 
multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and 
brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class Car{
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     get speedUS() {
//         return `${this.speed / 1.6} mi/h`;
//     }
//     set speedUS(speed) {
//         this.speed=speed*1.6
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`'${this.make}' going at ${this.speed}km/h`);
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(`'${this.make}' going at ${this.speed}km/h`);
//     }
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();
// console.log(bmw.speedUS);
// bmw.speedUS = 100;
// console.log(bmw.speedUS);
// console.log(bmw.speed);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();
// mercedes.brake();
// console.log(mercedes.speedUS);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as 
a CHILD "class" of Car. Besides a make and current speed, the EV also has 
the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' 
and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20,
 and decrease the charge by 1%. Then log a message like this: 'Tesla going
  at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate',
 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 
 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/* const EV = function (make,speed,charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h,with charge of ${this.charge}%`);
}
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate()
tesla.brake()
tesla.chargeBattery(90) */

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  make;
  speed;
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate(val) {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed}km/h`);
    return this;
  }
  brake(val) {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed}km/h`);
    return this;
  }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
  accelerate(val) {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h,with charge of ${this.#charge}%`
    );
    return this;
  }
  brake(val) {
    this.speed -= 5;
    console.log(
      `${this.make} going at ${this.speed}km/h,with charge of ${this.#charge}%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(
        `${this.make} going at ${this.speed}km/h,with charge of ${
          this.#charge
        }%`
      );
      return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(90);
