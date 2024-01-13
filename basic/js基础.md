<!--
 * @Author: Richard 46419003+RichardThunder@users.noreply.github.com
 * @Date: 2024-01-03 23:57:55
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-04 16:50:55
 * @FilePath: /webPages/basic/js基础.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# js基础

# javascript组成

- ECMAScript
- Web Api
  - DOM
  - BOM

- Javascript是什么？

Javascript是一门编程语言，可以实现很多的网页交互效果。

- Javascript 书写位置？
＞内部JavaScript
＞内部Javascript- 写到</body-标签上方
＞外部Javascript- 但是<script＞标签不要写内容，否则会被忽略
- Javascript 的注释？
＞单行注释//＞多行注释/**/
- Javascript 的结束符？
＞分号;可以加也可以不加，可以按照团队约定
- JavaScript 输入输出语句？

＞输入：prompt()

＞输出：alert()

document.write() console.log()

## 类型转换和强制转换

与字符串相加时, 加法会将数字转换成字符串.

减法乘法其他运算会将字符串转换成数字

### javascript 五个假值

false values: 0, ‘’(空字符串) ,undefined, null, NaN

**`空对象{} 不是假值`**

## javascript严格模式

编写安全的代码

脚本开头

`‘use strict’;`

- 禁止做某些事情
- 发生问题时, 产生可见的错误信息

# javascript 数组

定义

```jsx
const friends = ['a', 'b', 'c'];
const friends = new Array('a','b','c');
```

访问

```jsx
console.log(friends[0]); // 下标访问
```
