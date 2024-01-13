/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-03 17:21:21
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-05 18:28:43
 * @FilePath: /webPages/basic/script.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
'use strict';
// 类型转换
// console.log(0 / 0);
// console.log(5 / 0);
// console.log(5 / -0);
// console.log(isFinite(5 / -0));
// console.log(isNaN(NaN));
// console.log(isNaN('true'));
// console.log(isNaN('10'));
// console.log(parseInt('10', 2));
// console.log(parseInt('10', 8));
// console.log(parseInt('10', 16));

/*Number();
 parseInt();
 parseFloat(); */
/* 
const friends = ['a', 'b', 'c'];
console.log(friends[0]);

const newLength = friends.push('jay');
console.log(friends.length) //数组长度
friends.indexOf('jay');
/* 
//更现代的方法 E S6
friends.includes('jay');
//执行严格相等比较, 不进行强制类型转换,这代表'1' 和 1 不同 */
/* 
//example
const mann = {
    firstName: 'rt',
    lastName: 'tr',
    job: 'none',
    friends: ['a', 'b', 'c'],
    birthYear: 2000,
    hasDriverLicense: true,
    calcAge: function () {
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`;
    }
}


console.log(mann.firstName);
const nameKey = 'Name';
console.log(mann['first' + nameKey]);
console.log(mann['last' + nameKey]);

//prompt
// const interestedIn = prompt('what do you want to know about me? Choose between firstName, lastName, age,job,and friends');
// console.log(mann[interestedIn]);

//通过.符号和[] 添加新属性
mann.location = 'China';
mann['twitter'] = '@maxlee';

// console.log(mann.calcAge(1991));
// console.log(mann['calcAge'](1991));

console.log(mann.calcAge());
console.log(mann.getSummary());

const isF = birthYear => 2037 - birthYear;
 */

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = ['error', 3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {

    let max = temps[0];//如果第一个数值为error, 那么程序出现错误
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (isNaN(temps[i]))
            continue;
        if (temps[i] > max) {
            max = max ^ temps[i];
            temps[i] = max ^ temps[i];
            max = max ^ temps[i];
        }
        if (temps[i] < min) {
            min = min ^ temps[i];
            temps[i] = min ^ temps[i];
            min = min ^ temps[i];
        }
    }
    console.log(max - min);
    return max - min;
}

calcTempAmplitude(temperatures);

let array1 = [];
let array2 = [];
array1.concat(array2);