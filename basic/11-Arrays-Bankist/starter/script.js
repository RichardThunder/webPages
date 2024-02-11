/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-02-10 13:16:22
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-02-11 16:39:52
 * @FilePath: \webPages\basic\11-Arrays-Bankist\starter\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// //splice change origin array,改变原始数组，删除选中的元素
// console.log(arr.splice(2)); //['c', 'd', 'e']
// console.log(arr); // ['a', 'b']
// console.log(arr.splice(-1)); //['b']

// //reverse 会改变原来的数组
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
// console.log(arr2); //['f', 'g', 'h', 'i', 'j']

// //concat 拼接数组
// const letters=arr.concat(arr2)
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'f', 'g', 'h', 'i', 'j'] 
// console.log([...arr,...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'f', 'g', 'h', 'i', 'j']

// //join
// console.log(letters.join(`-`)); //a-b-c-d-e-f-f-g-h-i-j

// //at
// const arr =[23,11,64]
// console.log(arr[0]);
// console.log(arr.at(0));

// //获取最后一个元素
// console.log(arr[arr.length-1]); //64
// console.log(arr.slice(-1)[0]);  //64
// console.log(arr.at(-1));  //64
// console.log(arr.at(-2));  //11 
// //at 可以在string 中使用
// console.log('yue ting'.at(0)); //y
// console.log('yue ting'.at(-1));  //g

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const movment of movements){
    if(movment>0){
        console.log(`you deposited ${movement}`);
    }
}