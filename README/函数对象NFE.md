# 函数对象

## 属性name
一个函数的名字可以通过属性 “name” 来访问：
即使函数被创建时没有名字，名称赋值的逻辑也能给它赋予一个正确的名字，然后进行赋值
```javascript
function sayHi(){
    alert("Hi")
}
let sayHi = function() {
  alert("Hi");
};
alert(sayHi.name)// sayHi
```
## 属性 “length”

内建属性 “length”，它返回函数入参的个数
- rest 参数不参与计数。

# 自定义属性

添加我们自己的属性

**属性不是变量**
被赋值给函数的属性，不会在函数内定义一个局部变量换句话说，属性 和变量  是毫不相关的两个东西。
函数属性有时会用来替代闭包。我们可以使用函数属性 代替变量


## 命名函数表达式

命名函数表达式（NFE，Named Function Expression），指带有名字的函数表达式的术语。
```javascript
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
sayHi("John"); // Hello, John
```

关于名字 func 有两个特殊的地方，这就是添加它的原因：
- 它允许函数在内部引用自己。
- 它在函数外是不可见的。