# 调度 setTimeout 和 setinterval

有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行。这就是所谓的“计划调用（scheduling a call）”

目前有两种方式可以实现：

- `setTimeout` 允许我们将函数推迟到一段时间间隔之后再执行。
- `setInterval` 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。

```javascript
let timerId = setTimeout(func|code, [delay],[arg1],[arg2],...)
```

`func|code`
想要执行的函数或代码字符串。 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。
`delay`
执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
`arg1，arg2…`
要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持）

使用箭头函数传入函数
```javascript
setTimeout(()=>alert('Hello'),1000);
```
- 任何 setTimeout 都只会在当前代码执行完毕之后才会执行
## clearTimeout 取消调度

setTimeout 在调用时会返回一个“定时器标识符（timer identifier）” 可以用它来取消执行

```javascript
let timeId = setTimeout(...);
clearTimeout(timerId);
```

## setInterval

```javascript 
let timerId = setInterval(func|code, [delay], [arg1],[arg2],...)
```
- setInterval 是每间隔给定的时间周期性执行。

## clearInterval(timerId) 取消后续调用
```javascript 
//每两秒重复一次
let timerId = setInterval(()=>alert('tick'),2000);
// 5秒后停止
setTimeout(()=>{cleatInterval(timerId);
                    alert('stop');},5000);
```

## 嵌套的setTimeout 

```javascript
//let timerId = setInterval(() => alert('tick'),2000);
let timerId = setTimeout(
    function tick(){alert('tick');timeId = setTimeout(tick,2000)},
    2000)
```




**嵌套的 setTimeout 相较于 setInterval 能够更精确地设置两次执行之间的延时**

使用 setInterval 时，func 函数的实际调用间隔要比代码中设定的时间间隔（这里指的是func运行结束刀下一次运行间隔的时间）要短!
因为func执行需要时间，而内部计时器一直在进行。
使用嵌套setTimeout 会等待func 执行结束后开始计时， 所以间隔时间是标准的

### 垃圾回收和 setInterval/setTimeout 回调（callback）
    当一个函数传入 setInterval/setTimeout 时，将为其创建一个内部引用，并保存在调度程序中。这样，即使这个函数没有其他引用，也能防止垃圾回收器（GC）将其回收。
    
```javascript
// 在调度程序调用这个函数之前，这个函数将一直存在于内存中
setTimeout(function() {...}, 100);
```
对于 setInterval，传入的函数也是一直存在于内存中，直到 clearInterval 被调用。
- 注意引用外部变量时的内存占用

    这里还要提到一个副作用。如果函数引用了外部变量（译注：闭包），那么只要这个函数还存在，外部变量也会随之存在。它们可能比函数本身占用更多的内存。因此，当我们不再需要调度函数时，最好取消它，即使这是个（占用内存）很小的函数。

## 零延时的setTimeout
setTimeout(func, 0)，或者仅仅是 setTimeout(func)
这样调度可以让 func 尽快执行。但是只有在当前正在执行的脚本执行完成后，调度程序才会调用它。
该函数被调度在当前脚本执行完成“之后”立即执行。

这段代码会先输出 “Hello”，然后立即输出 “World”
```javascript
setTimeout(()=>alert('World!'));
alert("hello");
```