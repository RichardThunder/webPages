/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-02-19 14:46:49
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-02-24 18:11:33
 * @FilePath: /webPages/basic/12-Numbers-Dates-Timers-Bankist/starter/script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
let sort = false;
let sequence = false;

//Function

const formatMovementDate = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDayPassed(new Date(), date);
  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  //   else {
  //     const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //     const day = `${date.getDate()}`.padStart(2, 0);
  //     const fullYear = date.getFullYear();
  //     return `${month}/${day}/${fullYear}`;
  //   }

  return Intl.DateTimeFormat(locale).format(date);
};

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
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatMov = formatCurrency(value, acc.locale, acc.currency);
    // let nl = new Intl.NumberFormat('en-US');
    // value = nl.format(value);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatMov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);

  //   labelBalance.textContent = acc.balance + '€';
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
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
  labelSumIn.textContent = formatCurrency(
    account.deposits,
    account.locale,
    account.currency
  );
  labelSumOut.textContent = formatCurrency(
    account.withdrawals,
    account.locale,
    account.currency
  );
  labelSumInterest.textContent = formatCurrency(
    account.interest,
    account.locale,
    account.currency
  );
};

const updateUI = function (acc) {
  //displayBalance
  calcDisplayBalance(acc);
  //displaySummary
  calcDisplaySummary(acc);
  displayMovements(acc);
};

let currentAccount;
//fake login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
let logOutTimer = null;

const startLogOutTimer = function (time = 5) {
  const tick = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    time--;
    labelTimer.textContent = `${min}:${sec}`;
    if (time < 0) {
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
      clearInterval(logOutTimer);
    }
  };
  tick();
  logOutTimer = setInterval(tick, 1000);
};
const stopLogOutTimer = function (timer) {
  clearInterval(timer);
  return null;
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
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      //   month: 'long',
      month: 'numeric',
      //weekday: 'short',
      year: 'numeric',
    };
    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    startLogOutTimer();
    updateUI(currentAccount);
  }
});

//转账功能
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`transfer money`);

  stopLogOutTimer(logOutTimer);
  startLogOutTimer();

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
    const date = new Date();
    currentAccount.movements.push(-recvAmount);
    currentAccount.movementsDates.push(date.toISOString());
    recvAccount.movements.push(recvAmount);
    recvAccount.movementsDates.push(date.toISOString());
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
  labelTimer.textContent = '05:00';
  stopLogOutTimer(logOutTimer);
});

//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  stopLogOutTimer(logOutTimer);
  startLogOutTimer();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    const date = new Date();
    console.log(date);
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(date.toISOString());
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// console.log(account1.movements);
// //include
// console.log(account1.movements.includes(-130));
// //some
// console.log(account1.movements.some(mov => mov > 0));
// //every
// console.log(account1.movements.every(mov => mov > 10000));

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

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  stopLogOutTimer(logOutTimer);
  startLogOutTimer();

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
labelBalance.addEventListener('click', function () {
  stopLogOutTimer(logOutTimer);
  startLogOutTimer();

  const movArray = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movArray);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//字符串转Number;
console.log(Number('23'));
console.log(+'23');

//parseInt
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseInt('  2.5rem'));
//从字符串中读取数字的最好办法
console.log(Number.parseFloat('   34.5rem'));

//isNaN 强制转换成数字
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false infinite 不是NaN

//isFinite 检测一个变量是否是数字的最好办法, 因为不会转换字符串到数字
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false 不是数字
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

//isInteger()
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true  //有小数部分的整数也是整数
 */

/* //Math ** 运算优先级比*高
console.log(Math.sqrt(25));
console.log(2*25**(1/2));
console.log(8**(1/3));

console.log(Math.max(5, 6, 2, 6, 9, 10, 32));
console.log(Math.max(5, 6, 2, 6, 9, 10, '32px'));

console.log('min:', Math.min(5, 6, 2, 6, 9, 10, 32));
console.log('PI:', Math.PI*Number.parseFloat('10px')**2); //** 运算优先级比*高

console.log(Math.random());

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)+1 + min);
console.log(randomInt(10, 100)); 


console.log(Math.round(23.1));
console.log(Math.round(23.9));

console.log(Math.ceil(23.1));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.1));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//toFixed()
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));

//数字分隔符 不要用在小数点后面,
//用在字符串中可能无法转换成数字或丢失下划线后面的数字
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000


//MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53-1);

//bigInt  尾缀+n
console.log(32423451345234513452345134523452345n);
console.log(BigInt(32423451)); //32423451n
console.log(32423451345234513452345134523452345n * 10000n); //324234513452345134523451345234523450000n
//error mix bigint with other types
//console.log(32423451345234513452345134523452345n * 10000); //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//
console.log(20n > 15); //true
console.log(20n===20); //false
console.log(20n == 20); //true
console.log(typeof 20n); //bigint
console.log(20n == '20'); //true

//Divisions
console.log(11n/3n); //3n
console.log(11 / 3); //3.6666666666666665
 */

/* //date
const now = new Date();
console.log(now);

console.log(new Date('')); //Wed Feb 21 2024 11:06:56
console.log(new Date('Feb 28 2025'));
console.log(new Date(2037,10,19,15,23,5));
console.log(new Date(0));
console.log(new Date(0));
const future = new Date(2037, 10, 19, 15, 23, 5);
//const future = new Date(Date.now());
console.log(future);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); // 4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //5 
console.log(future.toISOString()); //2037-11-19T07:23:05.000Z
console.log(future.getTime());
console.log(new Date(now.getTime()));
console.log(Date.now()); //1708485547243
 */

// const options = {
//     style: 'unit',
//     unit:'mile-per-hour'
// }

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
// };

// const num = 288823415.312;
// console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Deutsch:  ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   'Browser:  ',
//   navigator.languages,
//   new Intl.NumberFormat(navigator.languages, options).format(num)
// );

// setTimeout(
//   (ing1, ing2) => console.log(`This is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   'apple',
//   'olives'
// );
    
// timer
const ingredients = ['apple', 'olives'];
const timer = setTimeout(
  (ing1, ing2) => console.log(`This is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
// claerTimeout()
// if (ingredients.includes('apple')) clearTimeout(timer);
