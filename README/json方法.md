<!--
 * @Author: yuetingpei yuetingpei888@gmail.com
 * @Date: 2023-09-06 08:47:08
 * @LastEditors: yuetingpei yuetingpei888@gmail.com
 * @LastEditTime: 2023-09-06 10:20:52
 * @FilePath: \WebPages\README\json方法.md
 * @Description: 
 * Copyright (c) 2023 by yuetingpei888@gmail.com, All Rights Reserved. 
-->
# JSON 方法，toJSON

## JSON.stringify

JavaScript 提供了如下方法：

- JSON.stringify 将对象转换为 JSON。
- JSON.parse 将 JSON 转换回对象。
  
**请注意，JSON 编码的对象与对象字面量有几个重要的区别：**

- 字符串使用双引号。JSON 中没有单引号或反引号。所以 'John' 被转换为 "John"。
- 对象属性名称也是双引号的。这是强制性的。所以 age:30 被转换成 "age":30。
JSON.stringify 也可以应用于原始（primitive）数据类型。

JSON 支持以下数据类型：

Objects { ... }
Arrays [ ... ]
Primitives：
strings，
numbers，
boolean values true/false，
null。

```javascript
// 数字在 JSON 还是数字
alert( JSON.stringify(1) ) // 1

// 字符串在 JSON 中还是字符串，只是被双引号扩起来
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
```

## 一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过

即：

函数属性（方法）。
Symbol 类型的键和值。
存储 undefined 的属性。

## 重要的限制：不得有循环引用

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup 引用了 room
room.occupiedBy = meetup; // room 引用了 meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
```

## 排除和转换 replacer

`value`
要编码的值。
`replacer`
要编码的属性数组或映射函数 function(key, value)。.

`space`
用于格式化的空格数量
如果我们传递一个属性数组给它，那么只有这些属性会被编码。
**此特性可以避免循环引用的对象被编码**

```javascript
et room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}
```

participants 中的name对象不在传入的属性列表中,因此participants 是空的

修正`alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );`

- 使用replacer函数替换掉循环引用

```javascript
alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));
```

## 格式化 space

`JSON.stringify(value, replacer, spaces)` 的第三个参数是用于优化格式的空格数量。
space 参数专门用于调整出更美观的输出。

这里的 space = 2 告诉 JavaScript 在多行中显示嵌套的对象，对象内部缩进 2 个空格：

```javascript
对于 JSON.stringify(user, null, 4) 的结果会有更多缩进：
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false, // 更多缩进
        "isEditor": true
    }
}
```

## 自定义 “toJSON”

对象也可以提供 toJSON 方法来进行 JSON 转换。如果可用，JSON.stringify 会自动调用它。
toJSON 既可以用于直接调用 JSON.stringify(obj) 也可以用于当 obj 嵌套在另一个编码对象中时。

## JSON.parse

要解码 JSON 字符串，我们需要另一个方法 JSON.parse。

`let value = JSON.parse(str, [reviver]);`