/*
 * @Author: RichardThunder yuetingpei@outlook.com
 * @Date: 2023-06-13 15:36:10
 * @LastEditors: Richard 46419003+RichardThunder@users.noreply.github.com
 * @LastEditTime: 2023-06-14 08:33:21
 * @FilePath: /webPages/function-basics.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Richard 46419003+RichardThunder@users.noreply.github.com, All Rights Reserved. 
 */
function checkAge(age){
 return  age>18 ? true : confirm('Do you have your parents permission to access this page?');
}

function min(a,b){
  return a<b ? a:b; 
}

function ask(question, yes,no){
  if(confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function(){alert("you agreed.");},
  function(){alert("you disagreed.");}
);


ask=(question,yes,no)=>confirm(question)? yes() : no();
ask(
  "Do you agree?",
  () => alert("you agreed."),
  () => alert("You canceled the execution.")
);