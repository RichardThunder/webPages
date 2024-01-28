/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-01-17 02:00:58
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-01-28 23:53:19
 * @FilePath: /webPages/basic/09-Data-Structures-Operators/starter/script.js
 * @Description: 
 * 
 */
'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.starterMenu[mainIndex]];
    },
    //传入对象时直接解构成变量
    oderDelivery: function ({ starterIndex = 0, mainIndex = 2, time = '0:0:0', address = ' ' }) {
        console.log(`delivery ${this.mainMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    oderPizza: function (mainIngredient, ...restIngredient) {
        console.log(
            mainIngredient, ...restIngredient
        );
    },
};



// restaurant.oderDelivery({
//     time: '20:00',
//     address: 'via st. No.3',
//     mainIndex: 1,
//     starterIndex: 2,
// });

//map
// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Firenze Italy');
// console.log(rest.set(2,'Lisbon, Portugal'));
// rest.set('');

//调用set方法会返回map对象, 因此可以使用链式调用.如下
// rest
// .set('catagories',['Italian','Pizzera','vegetarian','Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open :D')
// .set(false,'We are closed :(');

// //使用boolean进行判断 get方法是严格匹配类型的, 
// const time =8;
// console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));
// console.log(rest.has('categories')); //false  typo catagories
// console.log(rest.delete(2)); //boolean true
// console.log(rest); //Map(8)
// console.log(rest.size); //8
// console.log(rest.clear()); // undefined

// //直接用数组, 会访问不到,因为不是一个对象
// rest.set([1,2],'Test');
// console.log(rest.get([1,2])); //undefined

// //将传入数组对象的引用
// const arr = [1,2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr)); //Test

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);


//将对象转换为map Object.entries() 会将对象转换为二维数组形式, 可以直接使用map的构造器构造成map
// console.log(Object.entries(restaurant.openingHours)); // [Array(2), Array(2), Array(2)]
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap); //Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

// const question = new Map([
//     ['question','What is the best programming language?'],
//     [1,'C'],
//     [2,'java'],
//     [3,'javascript'],
//     ['correct',3],
//     [true,'Correct'],
//     [false,'try again']
// ])

// console.log(question.get('question'));
// for(const[key,value]of question){
//     if(typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }

// const answer=Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer===question.get('correct')));

//展开map为二维数组 
// console.log([...question]); //[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// console.log(question.entries());
// console.log(question.keys()); //{'question', 1, 2, 3, 'correct', …}
// console.log([...question.keys()]); //将对象展开成数组 ['question', 1, 2, 3, 'correct', true, false]
// console.log(question.values()); //{'What is the best programming language?', 'C', 'java', 'javascript', 3, …}


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events 
that happened during the game. The values are the events themselves, and the keys are the minutes 
in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes"
 (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or 
second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const events=new Set([...gameEvents.values()])
// console.log(events);
// //2.
// gameEvents.delete(64);
// console.log(gameEvents);
// //3.
// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

// const finalTime=[...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${finalTime / gameEvents.size} minutes`
// );

// //4.
// console.log(gameEvents.entries());

// for(const [key,value] of gameEvents.entries()){
//     key <= 45 && console.log(`[FIRST HALF] ${key}: ${value}`);
//     key > 45 && console.log(`[SECOND HALF] ${key}: ${value}`);
// }


/* const oderSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pizza',]);
console.log(oderSet);
console.log(oderSet.size);
console.log(oderSet.has('Pizza')); //return Boolean
console.log(oderSet.add('Garlic Bread')); //return new set
console.log(oderSet.add('Garlic Bread')); //return new set
console.log(oderSet.delete('Risotto')); // return Boolean
//console.log(oderSet.clear()); //clear all elements, return undefined

//迭代器访问set
for(const oder of oderSet) console.log(oder);

const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter'];

//生成唯一的set, 然后展开成数组
const staffUnique = [...new Set(staff)]; // ['Waiter', 'Chef', 'Manager']
console.log(staffUnique);
console.log(new Set(
    ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
//字符串也是可迭代的, 检查字符串中有多少中字符
console.log(new Set('yuetingpeisname').size); // 11 */

//在对象中, 元素的位置不重要,所以可以不顾顺序
/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5]; //...rest 必须是最后一个位置.
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays); */
/* //更改变量名称 解构运算符 {}
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);


//设置默认值
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//更改变量
let a = 111;
let b = 999;
const obj = {
    a: 23, b: 7, c: 14
};

//添加括号, 强调为表达式, 否则解释器会识别为代码块
({ a, b } = obj);
console.log(a, b);

//深度解构对象
const { fri: { open: o = 0, close: c = 10 } } = openingHours;
console.log(o, c);
 */


//扩展运算符 ... 与解构运算符的最大区别就是: 提取出数组中的所有变量, 并不会创建新的变量
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //展开数组并合并
console.log(...newArr); //展开数组

//复制数组 浅拷贝
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
     console.log(menus);

//扩展运算符可用于可迭代对象, arrays, strings, maps, sets, 没有对象
const str = 'yuetingpei';
const letters = [...str, ' ', 'S.'];
console.log(letters); //['y', 'u', 'e', 't', 'i', 'n', 'g', 'p', 'e', 'i', ' ', 'S.']

//使用... 传递参数
const ingredients = [prompt('let\'s make pasta! Ingredient 1?'),
prompt('let\'s make pasta! Ingredient 2?'),
prompt('let\'s make pasta! Ingredient 3?')];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.oderPasta(...ingredients);

//深拷贝对象
const newRestaurant = { foundIn: '1988', ...restaurant, founder: 'john' }
console.log(newRestaurant);

newRestaurant.name = 'richard yue';
console.log(newRestaurant.name);
console.log(restaurant.name);
restaurant.name = ' mike jack';
console.log(restaurant.name);
console.log(newRestaurant.name); */


//数组的解构运算符 [ ]
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr //解构
console.log(x, y, z);

//const [first, second] = restaurant.categories;
//console.log(first, second);

// 使用 ',空格,' 跳过中间不需要的位置
const [first, , , second] = restaurant.categories;
console.log(first, second);

//简单的交换变量例子
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
const tmp = main;
main = secondary;
secondary = tmp;
console.log(main, secondary);

//使用解构来交换多个变量
[main, secondary] = [secondary, main];
console.log(main, secondary);

//使用索引来获取想要的解构
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


//解构多维数组
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);


//设置默认值 当解包长度超出数组长度时,可以使用默认值避免出现undefined
const [p = 0, q = 0, r = 5] = [2, 4];
console.log(p, q, r);
 */

/* //functions
const add = function (...numbers) { // 可以同时接受散值 和数组(通过扩展运算符)
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
}
add(1, 2, 3, 4, 5, 6, 7);
const x = [1, 2, 3, 4, 5];
add(...x);

restaurant.oderPizza('mushrooms', 'chess', 'choloate', 'apple');

console.log(undefined || 0 || null || '' || 0);
restaurant.numGuest = 10;
const guest = restaurant.numGuest ? restaurant.numGuest : 10;
const guest2 = restaurant.numGuest || 10;


//使用` && 可以进行存在性检查


// ?? 空值合并运算符 nullish 忽略null 和 undefined(不包括 0, ''), 返回有意义的值
let num;
console.log(num);
const guests = num ?? 10;
console.log(guests);//10
 */

 /* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
 */
/*
const [players1,players2] = game.players;
console.log(players1,players2);
let [gk,...players1Final] =players1;
console.log(gk);
console.log(players1Final); 

const allPlayers = [...players1,...players2];
console.log(allPlayers);

players1Final = [...players1,'Thiago', 'Coutinho','Perisic'];
console.log(players1Final);

const {team1, x:draw, team2} = game.odds
console.log(team1,draw,team2);

const printGoals = function(...names){
    // for(let i=0; i< names.length;i++){
    //     console.log(names[i]);
    // }
    console.log(names);
    console.log(names.length);

}
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');

team1>team2 && console.log('team2 win');
team1<team2 && console.log('team1 win'); */
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
    For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players
     plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
        along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement
     or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/



/* const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
//循环数组内的元素
for(const item of menu){
    console.log(item);
}

//每次返回一个[index,value]的数组
for(const [i,el] of menu){
    console.log(`index ${i+1} : ${el}`);
}

//?. 与 ??
//console.log(restaurant?.order(0,1)?? 'Method doesnt exist');
//console.log(restaurant?.orderRisotto(0,1)?? 'Method doesnt exist');

const user=[];
console.log(user[0]?.name??'user array empty');


//循环对象
for(const day of Object.keys(openingHours)){
    console.log(day);
}

for(const hour of Object.values(openingHours)){
console.log(Object.values(openingHours));
}

for (const [key,{open,close}] of Object.entries(openingHours)){
    console.log(`on ${key}, we open at ${open} and close at ${close}`);
} */



///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/* const goals = game.scored.entries();
for (const [seq, name] of game.scored.entries()) {
  console.log(`Goal ${seq + 1}: ${name}`);
}

const averageOdd = function(...odds){
    let sum =0;
    for(const odd of odds)
    sum += odd;
    console.log(sum/odds.length);
}
averageOdd(game.odds.team1,game.odds.team2,game.odds.x);

for(const [name,odd] of Object.entries(game.odds)){
    console.log(`Odd of victory ${game[name]??'draw'}: ${odd}`);
}


const scores ={};
for(const name of game.scored){
    scores[name]? scores[name]++ : (scores[name]=1);
}
console.log(scores);
 */
const airline = 'TAP Air Protugal';
const plane = 'A320';

//下标访问字符串
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

//字符串可以直接使用对象方法
console.log('B737'[0]);

//字符串长度
console.log(airline.length);
console.log('B737'.length);

//indexOf() 返回第一次出现的位置
console.log(airline.indexOf('A')); // 1

//lastIndexOf() 返回最后一次出现的位置
 


