/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2023-08-11 14:21:17
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2023-08-11 14:23:54
 * @FilePath: /webPages/calculator.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved. 
 */
let calculator={
    a:0,
    b:0,
    sum(){ return this.a+this.b; },
    mul(){return this.a*this.b;},
    read(a,b){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
