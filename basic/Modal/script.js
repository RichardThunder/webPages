/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-14 08:27:32
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-14 22:50:21
 * @FilePath: \webPages\basic\Modal\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log('A key was pressed');
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
