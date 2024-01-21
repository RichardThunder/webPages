/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-14 23:00:55
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-15 23:15:59
 * @FilePath: /webPages/basic/piggame/script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';
let totalScores = [0, 0];
/* let currentScore1 = 0;
let currentScore2 = 0; */
let currentScore = 0;
let diceScore = 0;
let currentPlayer = 0;
const diceEl = document.querySelector('.dice');
/* const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1'); */
const play0El = document.querySelector('.player--0');
const play1El = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
diceEl.classList.add('hidden');
const rollDice = function () {
  console.log('invoke rollDice');
  let score = Math.trunc(Math.random() * 6 + 1);
  console.log(score);
    diceEl.src = `dice-${score}.png`;
  /* switch (score) {
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
  } */

  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  /* if (currentPlayer === 1) {
    //将分数加到对应玩家, 如果是1,那么交换控制,更改样式,将得分清零
    if (score === 1) {
      currentScore1 = 0;
      current0.textContent = currentScore1;
      currentPlayer = 2;
      let sec = document.querySelectorAll('section');
      sec[0].classList.remove('player--active');
      sec[1].classList.add('player--active');
    } else {
      currentScore1 += score;
      current0.textContent = currentScore1;
    }
  } else if (currentPlayer === 2) {
    if (score === 1) {
      currentScore2 = 0;
      current1.textContent = currentScore2;
      currentPlayer = 1;
      let sec = document.querySelectorAll('section');
      sec[1].classList.remove('player--active');
      sec[0].classList.add('player--active');
    } else {
      currentScore2 += score;
      current1.textContent = currentScore2;
    }
  } */
  if (score === 1) {
      currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
    play0El.classList.toggle('player--active');
    play1El.classList.toggle('player--active');
  } else {
    currentScore += score;
      document.getElementById(`current--${currentPlayer}`).textContent =
          currentScore;
  }
};
//更新total后做判断胜利, 如果胜利那么就不清零 否则清零并交换控制
const hold = function () {
  console.log('invoke hold');
  /*  if (currentPlayer === 1) {
    totalScore1 += currentScore1;
    document.getElementById('score--0').textContent = totalScore1;
    if (isWin()) return;
    currentScore1 = 0;
    current0.textContent = currentScore1;

    currentPlayer = 2;
    let sec = document.querySelectorAll('section');
    sec[0].classList.remove('player--active');
    sec[1].classList.add('player--active');
  } else if (currentPlayer === 2) {
    totalScore2 += currentScore2;
    document.getElementById('score--1').textContent = totalScore2;
    if (isWin()) return;
    currentScore2 = 0;
    current1.textContent = currentScore2;

    currentPlayer = 1;
    let sec = document.querySelectorAll('section');
    sec[1].classList.remove('player--active');
    sec[0].classList.add('player--active');
  } */
    totalScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
        totalScores[currentPlayer];
    if (isWin()) return;
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    play0El.classList.toggle('player--active');
    play1El.classList.toggle('player--active');
};

const reset = function () {
  console.log('invoke reset');
  /*  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  current0.textContent = currentScore2;
  current1.textContent = currentScore2;
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
  diceEl.classList.add('hidden'); */
    currentScore = 0;
    totalScores = [0, 0];
    currentPlayer = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    play0El.className = 'player player--0 player--active';
    play1El.className = 'player player--1';
    btnHold.disabled = false;
    btnRoll.disabled = false;
    diceEl.classList.add('hidden');
};
//判断胜利并禁用按钮
const isWin = function () {
  /* let btns = document.querySelectorAll('button');
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
  return false; */
    if (document.getElementById(`score--${currentPlayer}`).textContent >= 20) {
        document
            .querySelector(`.player--${currentPlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${currentPlayer}`)
            .classList.remove('player--active');

        btnHold.disabled = true;
        btnRoll.disabled = true;
        return true;
    } else return false;
};

console.log(document.querySelector('.btn--roll'));
reset();
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', reset);
