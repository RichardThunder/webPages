/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2023-08-17 13:27:42
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2023-08-19 10:24:49
 * @FilePath: /webPages/symbol.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved. 
 */
// let user = {
//     name : "John"
// };

// let id = Symbol("id");

// user[id]= 1;

// alert(user[id]);

// user = {
//     name: "John",
//     [id]: 1234,
// };

// let billion = 1e9;
// alert( 7.3e9);
// let billion2 = 7_300_000_000;

// 1e3 === 1*1000;
// 1.23e6=1.23*1000000;

// let mcs = 0.000001;
// let mcs2 = 1e-6;

// 1e-3 === 1/1000;
// 1.23e-6 === 1.23/1000000;
// 1234e-2 === 1234/100;

// let num = 255;
// alert(num.toString(36));
// alert(35..toString(36)); 

// // Math.floor
// // Math.ceil
// // Math.round
// // Math.trunc
// // num.toFixed

// alert(0.1.toFixed(100));

// let num1= +prompt(0,0);

// let num2= +prompt(0,0);
// alert(num1+num2);

// function readNUmber(){
    
//     while(true){
//         let num1=prompt('please input a number');
//         if(num1 === null | num1 === ' ')
//         return null;
//         num1 = +num1;
//         if ( !isNaN(num1))
//         return num1;
//     }
   
// }

// alert(`read: ${readNUmber()}`);

// let str = 'hello';

// for (let c of str){
//     alert(c);
// }

// alert('Interface'[1].toUpperCase());
// alert('Interface'.toLowerCase());

// let str='Widget with id';
// alert(str.indexOf('Widget',0));

// let str = 'as sly as a fox, as strong as an ox';
// pos = 0;
// while(true){
//     let index = -1;
//     if((index = str.indexOf('as',pos)) == -1)
//         break;
//     alert(`found as at pos: ${pos}`);
//     pos = index+1;

// }

// let str = 'as sly as a fox, as strong as an ox';
// pos = -1;
// while(pos = str.indexOf('as',pos++) !=-1){
//     alert(`found at ${pos}`);
// }

let str='';
for(let i = 65; i<=220;i++){
    str+= String.fromCodePoint(i);
}
alert(str);