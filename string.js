/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2023-08-19 10:33:49
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2023-08-19 10:47:05
 * @FilePath: /webPages/string.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved. 
 */
// function ucFirst(str){
//     // if( str.length == 0) return str;
//     // let head = str.substring(0,1);
//     // let trail = str.slice(1);
//     // return head.toUpperCase()+trail;
//     if(!str) return str;
//     return str[0].toupperCase() + str.slice(1);
// }
// while(true){
//     str = ucFirst(prompt('please enter a string.'))
//     alert( str);
// }

function checkSpam(str){
    if(!str) return false;
    str = str.toLowerCase();
    return  str.includes('viagra') || str.includes('XXX')
}