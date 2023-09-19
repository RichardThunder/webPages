# F.prototype

使用诸如 new F() 这样的构造函数来创建一个新对象,如果 F.prototype 是一个对象，那么 new 操作符会使用它为新对象设置 [[Prototype]]
这里的 F.prototype 指的是 F 的一个名为 "prototype" 的常规属性

```javascript
let animal ={
    eats:true
};
function Rabbit(name){
    this.name =name;
}

Rabbit.prototype= animal;
let rabbit = new Rabbit("White Rabbit");
alert(rabbit.eats);
```

## F.prototype 仅用在 new F 时

F.prototype 属性仅在 new F 被调用时使用，它为新对象的 [[Prototype]] 赋值。

如果在创建之后，F.prototype 属性有了变化（F.prototype = <another object>），那么通过 new F 创建的新对象也将随之拥有新的对象作为 [[Prototype]]，但已经存在的对象将保持旧有的值。

## 默认的 F.prototype，构造器属性

每个函数都有 "prototype" 属性，即使我们没有提供它。

默认的 "prototype" 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身。
```javascript
function Rabbit() {}
/* 默认的 prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

当我们有一个对象，但不知道它使用了哪个构造器（例如它来自第三方库），并且我们需要创建另一个类似的对象时，用这种方法就很方便。
我们可以使用 constructor 属性来创建一个新对象，该对象使用与现有对象相同的构造器。
```javascript
function Rabbit(name){
    this.name = name;
    alert(name);
}
let rabbit = new Rabbit("white Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit")
```

- ……JavaScript 自身并不能确保正确的 "constructor" 函数值。 constructor 是可以被改变的
- 为了确保正确的constructor，可以添加/删除属性到默认的prototype中，而不是覆盖
    ```javascript
    Rabbit.prototype.jumps = true;
    //或者手动重新创建constructor属性
    Rabbit.prototype = {
        jumps:true,
        constructor: Rabbit
    };
    ```

## 总结

- F.prototype 属性（不要把它与 [[Prototype]] 弄混了）在 new F 被调用时为新对象的 [[Prototype]] 赋值。
- F.prototype 的值要么是一个对象，要么就是 null：其他值都不起作用。
- "prototype" 属性仅当设置在一个构造函数上，并通过 new 调用时，才具有这种特殊的影响。
- 默认情况下，所有函数都有 F.prototype = {constructor：F}，所以我们可以通过访问它的 "constructor" 属性来获取一个对象的构造器。
