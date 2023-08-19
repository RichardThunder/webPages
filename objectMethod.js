/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2023-08-11 13:09:50
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2023-08-11 13:58:45
 * @FilePath: /webPages/objectMethod.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved. 
 */
let user = {
    name: "John",
    age: 30
};

// user.sayHi= function(){
//     alert("Hello!");
// }
// user.sayHi();


// function sayHi(){
//     alert("Hello2");
// }
// user.sayHi=sayHi;
// user.sayHi();

// user={
//     sayHi:function(){
//         alert("Hello3");
//     }
// }

// user={
//     sayHi(){
//         alert("Hello4");
//     }
// }

// user.sayHi();

let user2={
    name:"jack",
    age: 30,
    sayHi(){
        alert(this.name);
    }
}
// user2.sayHi();

// let admin= user2;
// user2= null;
// admin.sayHi();

// function sayHi(){
//     alert(this.name);
// }
// sayHi();

let user3={name:"john"};
let user4={name:"jack"};

function sayHi(){
    alert(this.name);
}

user3.f = sayHi;
user4.f = sayHi;
user3.f();
user4.f();
user4['f']();