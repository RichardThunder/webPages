<!--
 * @Author: yuetingpei yuetingpei888@gmail.com
 * @Date: 2023-09-01 14:59:30
 * @LastEditors: yuetingpei yuetingpei888@gmail.com
 * @LastEditTime: 2023-09-01 15:49:56
 * @FilePath: \WebPages\README\映射和集合.md
 * @Description: 
 * Copyright (c) 2023 by yuetingpei888@gmail.com, All Rights Reserved. 
-->
# Map and set

## Map

- Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。

```javascript
new Map() //—— 创建 map。
map.set(key, value) //—— 根据键存储值。
map.get(key) //—— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
map.has(key) //—— 如果 key 存在则返回 true，否则返回 false。
map.delete(key) //—— 删除指定键的值。
map.clear() //—— 清空 map。
map.size //—— 返回当前元素个数。
```

## Map 是怎么比较键的？

Map 使用 SameValueZero 算法来比较键是否相等。它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。

## 链式调用

每一次 map.set 调用都会返回 map 本身，所以我们可以进行“链式”调用：

```javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

## map迭代

如果要在 map 里使用循环，可以使用以下三个方法：
map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
map.values() —— 遍历并返回一个包含所有值的可迭代对象，
map.entries() —— 遍历并返回一个包含所有实体 [key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个。

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```

Map 有内建的 forEach 方法，与 Array类似

```javascript
// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

## Object.entries：从对象创建 Map

```javascript
//传入有键值对的数组
let map = new Map([
    ['1','str'],
    [1,'num1'],
    [true,'bool1']
])

```

从普通对象创建一个Map 使用内建方法 `Object.entries(obj)`

```javascript
let obj = {
  name: "John",
  age: 30
};
let map = new Map(Object.entries(obj));
```

Object.entries 返回键/值对数组：[ ["name","John"], ["age", 30] ]。这就是 Map 所需要的格式。

## Object.fromEntries：从 Map 创建对象

Object.fromEntries 方法的作用是相反的：给定一个具有 [key, value] 键值对的数组，它会根据给定数组创建一个对象：

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// 现在 prices = { banana: 1, orange: 2, meat: 4 }
```

## set

Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

- `new Set(iterable)`创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
- `set.add(value)` 添加一个值返回set本身
- `set.delete(value)` 删除值, 存在返回true, 否则返回false
- `set.has(value)` set存在值返回true 不存在返回false
- `set.clear()` 清空set
- `set.size()` 返回元素个数

### set迭代

使用 for ... of...
使用 forEach

```javascript
let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

forEach 的回调函数有三个参数：一个 value，然后是 同一个值 valueAgain，最后是目标对象。
forEach 的回调函数有三个参数，是为了与 Map 兼容
