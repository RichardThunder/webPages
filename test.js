/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2023-06-25 22:47:19
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2023-06-27 21:44:19
 * @FilePath: /webPages/test.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
function pow() {
  return 8; // :) 我们作弊啦！
}

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj){
    for(let i in obj)
    {
        return false;
    }
    return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

sum = 0;
for(let i in salaries){
    sum += salaries[i]
}
alert(sum)

obj={}

function multiplyNumeric(obj){
    for (let i in obj){
        if(typeof obj[i] == 'number')
            obj[i] = obj[i] *2;
    }
}
