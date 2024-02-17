/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-02-10 13:16:22
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-02-17 21:25:14
 * @FilePath: /webPages/basic/11-Arrays-Bankist/starter/script.js
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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements){
//     if(movement>0){
//         console.log(`you deposited ${movement}`);
//     }else {
//         console.log(`you withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log(`-----FROEACH-------`);
// movements.forEach(
//     function(movement){if (movement > 0) {
//       console.log(`you deposited ${movement}`);
//     } else {
//       console.log(`you withdrew ${Math.abs(movement)}`);
//     }}
// );

// //map和set的forEach
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //map forEach(function(value,key,map))
// currencies.forEach(function(value,key,map){
//     console.log(`${key}: ${value}, ${map}`);
// })
// //set forEach(function(value,key,map))
// const currenciesUnique=new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,key,map){
//     console.log(`${key}: ${value}, ${map}`);
// });

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Sarah Smith',
  movements: [-430, -1000, -700, -50, -90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//elements
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, seq) {
  containerMovements.innerHTML = '';
  if (sort) {
    acc.movements.sort((a, b) => (seq ? a - b : b - a));
  }
  console.log(acc.movements);
  acc.movements.forEach(function (value, i) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    if (value < 0) {
      value = Math.abs(value);
    }
    let nl = new Intl.NumberFormat('en-US');
    value = nl.format(value);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${value}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);

  labelBalance.textContent = acc.balance + '€';
};

const calcDisplaySummary = function (account) {
  account.deposits = account.movements
    .filter(value => value > 0)
    .reduce((acc, curr) => acc + curr, 0);

  account.withdrawals = account.movements
    .filter(value => value < 0)
    .reduce((acc, curr) => acc + Math.abs(curr), 0);
  account.interest = account.movements
    .filter(value => value > 0)
    .map((value, index, arr) => (value * account.interestRate) / 100)
    .filter(value => value >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${account.deposits}€`;
  labelSumOut.textContent = `${account.withdrawals}€`;
  labelSumInterest.textContent = `${account.interest}€`;
};
let currentAccount;
const updateUI = function (acc) {
  //displayBalance
  calcDisplayBalance(acc);
  //displaySummary
  calcDisplaySummary(acc);
  displayMovements(acc);
};

//find 方法 登录
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  console.log('LOGIN');
  currentAccount = accounts.find(
    value => value.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display ui and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //清楚input输入框
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //隐藏PIN处闪烁的光标
    updateUI(currentAccount);
  }
});

//转账功能
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`transfer money`);
  const recvAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );
  const recvAmount = Number(inputTransferAmount.value);
  if (
    recvAmount > 0 &&
    recvAccount &&
    recvAmount <= currentAccount.balance &&
    recvAccount?.username !== currentAccount.username
  ) {
    console.log(`transfer valid`);
    currentAccount.movements.push(-recvAmount);
    recvAccount.movements.push(recvAmount);
    updateUI(currentAccount);
    console.log(recvAccount.movements);
  } else {
    console.log(`transfer failed`);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

//关闭账户
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`Delete`);
  //验证
  const closeAccountIndex = accounts.findIndex(
    acc =>
      acc.username === inputCloseUsername.value &&
      acc.pin === Number(inputClosePin.value)
  );

  if (closeAccountIndex != -1) {
    accounts.splice(closeAccountIndex, 1);
    console.log(`account deleted`);
    currentAccount = '';
    containerApp.style.opacity = 0;
  } else {
    console.log(`account not deleted`);
  }
  //清空输入框
  inputCloseUsername.value = inputClosePin.value = '';
});

//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

console.log(account1.movements);
//include
console.log(account1.movements.includes(-130));
//some
console.log(account1.movements.some(mov => mov > 0));
//every
console.log(account1.movements.every(mov => mov > 10000));

//使用map过滤元素
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

console.log(typeof undefined);
console.log([ 1,2, 3].map(parseInt));


////在稀疏数组上使用 flatMap()
// console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
// console.log([1, 2, 3, 4].flatMap((x) => [x * 2])); // [2, 4, 6, 8]


//// 假设我们想要删除所有负数，并将奇数拆分成偶数和 1
// const a=[200, 450, -400, 3000, -650, -130, 70, 1300];
// const result=a.flatMap(
//     n=>{
//         if(n<0) {return [];}
//         return n%2?[n]:[n-1,1];
//     }
// );
// console.log(result);

// //使用filter
// const deposits = account1.movements.filter(function (mov) {
//   return mov > 0;
// });
// const withdrawals = account1.movements.filter(mov => mov < 0);

// //reduce(callbackfn(acc,curr,index,array),initalValue)
// const balance = account1.movements.reduce((acc, curr, index, arr) => {
//   console.log(`Iteration ${index}: ${acc},${curr}`);
//   return acc + curr;
// }, 100);

// //reduce maximum value
// const getMaxValue = function (movements) {
//   return movements.reduce(
//     (acc, curr) => (acc > curr ? acc : curr)
//     // ,movements[0]
//   );
// };
// console.log(getMaxValue(account5.movements));

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCorrected = dogsJulia.slice(1, -2);
//     console.log(dogsJulia);
//     console.log(dogsJuliaCorrected);
//     const botharr = [...dogsJuliaCorrected, ...dogsKate];
//     botharr.forEach(function (value, i) {
//         value < 3
//           ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//           : console.log(`Dog number ${i+1} is an adult, and is ${value} years old`);

//     })
// }
// const Julia=[3, 5, 2, 12, 7];
// const Kate = [4, 1, 15, 8, 3];
// checkDogs(Julia, Kate);

// const eurToUsd = 1.1;
// const movementsUSD = account1.movements.map(mov => mov * eurToUsd)
// console.log(account1.movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of account1.movements) movementsUSDfor.push(mov * eurToUsd)
// console.log(movementsUSDfor);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
 humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs 
    that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges 
    how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//调试技巧， 通过使用arr参数打印链式调用每一步产生的数组
// const calcAverageHumanAge = function(ages){
//     return ages
//       .map((value, i,arr) => {
//         console.log(arr);
//         return value <= 2 ? value * 2 : 16 + value * 4;

//     })
//       .filter((value,index,arr) => {
//         console.log(arr);
//         return value>=18;
//       })
//       .reduce((acc, curr, i, arr) => {
//         console.log(arr);
//         return acc + curr / arr.length;
//       }, 0);
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.sort();
// console.log(movements);
// movements.sort((a, b) => a - b);
// console.log(movements);

let sort = false;
let sequence = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sort = true;
  displayMovements(currentAccount, sequence);
  if (sequence) {
    sequence = false;
    btnSort.textContent = '\u2191 SORT';
  } else {
    sequence = true;
    btnSort.textContent = '\u2193 SORT';
  }
  console.log(sequence);
});

// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x);
// x.fill(2);
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);
// console.log(z);

const movArray = Array.from(
  document.querySelectorAll('.movements__value'),
  el => el.textContent.replace('€', '')
);
     