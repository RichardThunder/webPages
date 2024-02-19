/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-02-19 14:46:49
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-02-19 15:09:54
 * @FilePath: \webPages\basic\12-Numbers-Dates-Timers-Bankist\starter\script.js
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
    // let nl = new Intl.NumberFormat('en-US');
    // value = nl.format(value);

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
labelBalance.addEventListener('click', function () {
  const movArray = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movArray);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//字符串转Number;
console.log(Number('23'));
console.log(+'23');

//parseInt
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseInt('  2.5rem'));
console.log(Number.parseFloat('   34.5rem'));
