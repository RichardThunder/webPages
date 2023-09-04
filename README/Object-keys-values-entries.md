# Object.keys，values，entries

对于普通对象，下列这些方法是可用的：

`Object.keys(obj)` —— 返回一个包含该对象所有的键的数组。
`Object.values(obj)` —— 返回一个包含该对象所有的值的数组。
`Object.entries(obj)` —— 返回一个包含该对象所有 [key, value] 键值对的数组。

```javascript
let user = {
  name: "John",
  age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
```

## Object.keys/values/entries 会忽略 symbol 属性

就像 for..in 循环一样，这些方法会忽略使用 Symbol(...) 作为键的属性。

通常这很方便。但是，如果我们也想要 Symbol 类型的键，那么这儿有一个单独的方法 `Object.getOwnPropertySymbols`，它会返回一个只包含 Symbol 类型的键的数组。另外，还有一种方法 `Reflect.ownKeys(obj)`，它会返回 **所有** 键。
