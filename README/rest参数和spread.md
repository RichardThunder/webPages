<!--
 * @Author: yuetingpei yuetingpei888@gmail.com
 * @Date: 2023-09-08 08:48:12
 * @LastEditors: yuetingpei yuetingpei888@gmail.com
 * @LastEditTime: 2023-09-08 08:49:42
 * @FilePath: \WebPages\README\rest参数和spread.md
 * @Description: 
 * Copyright (c) 2023 by yuetingpei888@gmail.com, All Rights Reserved. 
-->
# Rest 参数与 Spread 语法

## Rest 参数 ...

`...变量名`，这将会声明一个数组并指定其名称，其中存有剩余的参数。这三个点的语义就是“收集剩余的参数并存进指定数组中”。

```javascript
 function sumAll(...args){
    let sum =0
    for (let arg of args) sum += arg
    return sum
 }
 ```

### Rest 参数必须放到参数列表的末尾

## “arguments” 变量

有一个名为 arguments 的特殊类数组对象可以在函数中被访问，该对象以参数在参数列表中的索引作为键，存储所有参数。

```javascript
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
  // 它是可遍历的
  // for(let arg of arguments) alert(arg);
}

// 依次显示：2，Julius，Caesar
showName("Julius", "Caesar");

// 依次显示：1，Ilya，undefined（没有第二个参数）
showName("Ilya");
```

- 尽管 arguments 是一个类数组，也是可迭代对象，但它终究不是数组。它不支持数组方法，因此我们不能调用 arguments.map(...) 等方法

- 箭头函数没有 "arguments" 如果我们在箭头函数中访问 arguments，访问到的 arguments 并不属于箭头函数，而是属于箭头函数外部的“普通”函数。

## Spread 语法

- 当在函数调用中使用 ...arr 时，它会把**可迭代对象** arr “展开”到参数列表中。

```javascript
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）
```.

- 传入多个可迭代对象：
```javascript
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(1,...arr1,2,...arr2,25))
```

- 合并数组

```javascript
let merged = [0, ...arr1, 2 ,...arr2]
```

- 可迭代对象

```javascript
let str = "Hello";
alert([...str]); // H,e,l,l,o
//同样的
alert(Array.from(str));// H,e,l,l,o
```

不过 Array.from(obj) 和 [...obj] 存在一个细微的差别：

- Array.from 适用于类数组对象也适用于可迭代对象。
- Spread 语法只适用于可迭代对象。

## 复制 array/object 浅拷贝

```javascript
let arr = [1,2,3]
let arrCopy = [...arr]
```

这种方式比使用 let arrCopy = Object.assign([], arr) 复制数组，或使用 let objCopy = Object.assign({}, obj) 复制对象来说更为简便,只要情况允许，我们倾向于使用

## 总结

当我们在代码中看到 "..." 时，它要么是 rest 参数，要么是 spread 语法。

有一个简单的方法可以区分它们：

若 ... 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
若 ... 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。
使用场景：

Rest 参数用于创建可接受任意数量参数的函数。
Spread 语法用于将数组传递给通常需要含有许多参数的函数。
