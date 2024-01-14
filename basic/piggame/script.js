/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-14 23:00:55
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-15 01:53:15
 * @FilePath: \webPages\basic\piggame\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';
let totalScore1 = 0;
let totalScore2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;
let diceScore = 0;
let currentPlayer = 1;
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
const rollDice = function () {
  console.log('invoke rollDice');
  let score = Math.trunc(Math.random() * 6 + 1);
  console.log(score);
  switch (score) {
    case 1:
      document.querySelector('img').src = 'dice-1.png';
      break;
    case 2:
      document.querySelector('img').src = 'dice-2.png';
      break;
    case 3:
      document.querySelector('img').src = 'dice-3.png';
      break;
    case 4:
      document.querySelector('img').src = 'dice-4.png';
      break;
    case 5:
      document.querySelector('img').src = 'dice-5.png';
      break;
    case 6:
      document.querySelector('img').src = 'dice-6.png';
      break;
    default:
      break;
  }

  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  if (currentPlayer === 1) {
    //将分数加到对应玩家, 如果是1,那么交换控制,更改样式,将得分清零
    if (score === 1) {
      currentScore1 = 0;
      document.getElementById('current--0').textContent = currentScore1;
      currentPlayer = 2;
      let sec = document.querySelectorAll('section');
      sec[0].classList.remove('player--active');
      sec[1].classList.add('player--active');
    } else {
      currentScore1 += score;
      document.getElementById('current--0').textContent = currentScore1;
    }
  } else if (currentPlayer === 2) {
    if (score === 1) {
      currentScore2 = 0;
      document.getElementById('current--1').textContent = currentScore2;
      currentPlayer = 1;
      let sec = document.querySelectorAll('section');
      sec[1].classList.remove('player--active');
      sec[0].classList.add('player--active');
    } else {
      currentScore2 += score;
      document.getElementById('current--1').textContent = currentScore2;
    }
  }
};
//更新total后做判断胜利, 如果胜利那么就不清零 否则清零并交换控制
const hold = function () {
  console.log('invoke hold');
  if (currentPlayer === 1) {
    totalScore1 += currentScore1;
    document.getElementById('score--0').textContent = totalScore1;
    if (isWin()) return;
    currentScore1 = 0;
    document.getElementById('current--0').textContent = currentScore1;

    currentPlayer = 2;
    let sec = document.querySelectorAll('section');
    sec[0].classList.remove('player--active');
    sec[1].classList.add('player--active');
  } else if (currentPlayer === 2) {
    totalScore2 += currentScore2;
    document.getElementById('score--1').textContent = totalScore2;
    if (isWin()) return;
    currentScore2 = 0;
    document.getElementById('current--1').textContent = currentScore2;

    currentPlayer = 1;
    let sec = document.querySelectorAll('section');
    sec[1].classList.remove('player--active');
    sec[0].classList.add('player--active');
  }
};

const reset = function () {
  console.log('invoke reset');
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  document.getElementById('current--0').textContent = currentScore2;
  document.getElementById('current--1').textContent = currentScore2;
  document.getElementById('score--0').textContent = totalScore1;
  document.getElementById('score--1').textContent = totalScore2;
  diceScore = 0;
  currentPlayer = 1;
  let sec = document.querySelectorAll('section');
  sec[0].className = 'player player--0 player--active';
  sec[1].className = 'player player--1';
  let btns = document.querySelectorAll('button');
  btns[1].disabled = false;
  btns[2].disabled = false;
  diceEl.classList.add('hidden');
};
//判断胜利并禁用按钮
const isWin = function () {
  let btns = document.querySelectorAll('button');
  let sec = document.querySelectorAll('section');
  if (totalScore1 >= 100) {
    sec[0].classList.add('player--winner');
    btns[1].disabled = true;
    btns[2].disabled = true;
    return true;
  } else if (totalScore2 >= 100) {
    sec[1].classList.add('player--winner');
    btns[1].disabled = true;
    btns[2].disabled = true;
    return true;
  }
  return false;
};

console.log(document.querySelector('.btn--roll'));
reset();
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', reset);
