/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-09 01:21:28
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-14 23:54:36
 * @FilePath: /webPages/basic/guessmynumber/script.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

"use strict";

console.log(document.querySelector('.message').textContent);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
document.querySelector('.number').textContent = number;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


const x = function () {
    //const number = Number(document.querySelector('.number').textContent);
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage(" 🚫 no number");
    }
    else if (number === guess) {
        //document.querySelector('.message').textContent = 'You are right! 😅';
        displayMessage('You are right! 😅');
        document.querySelector('.score').textContent = ++score;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = number;
        //document.querySelector('.check').setAttribute('disable')
        highScore = highScore > score ? highScore : score;
        document.querySelector('.highscore').textContent = highScore;

        console.log(document.querySelector('.highscore').textContent);

        //document.querySelector('.again').


    }
    else if(number != guess){
        if(score > 1){
            document.querySelector('.score').textContent = --score;
            displayMessage( number > guess ?  'Too Low!' : 'Too High!');
        }
        else{
             displayMessage('🔥 You lose the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    /* else if (number > guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            document.querySelector('.score').textContent = --score;
        }
        else {
            document.querySelector('.message').textContent = '🔥 You lose the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (number < guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            document.querySelector('.score').textContent = --score;

        }
        else {
            document.querySelector('.message').textContent = '🔥 You lose the game!';
            document.querySelector('.score').textContent = 0;
        }
    } */
}

const again = function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', again);

