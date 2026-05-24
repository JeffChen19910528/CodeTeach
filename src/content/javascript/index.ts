import type { Chapter } from "../types";

const chapters: Chapter[] = [
  {
    id: "intro",
    title: { "zh-TW": "入門介紹", en: "Introduction" },
    lessons: [
      {
        id: "hello-world",
        title: { "zh-TW": "Hello World", en: "Hello World" },
        content: {
          "zh-TW": `## JavaScript 是什麼？

JavaScript 是網頁的核心語言，也可以用於後端（Node.js）。

### console.log()

使用 \`console.log()\` 輸出訊息，是最常用的除錯工具。`,
          en: `## What is JavaScript?

JavaScript is the core language of the web, also used on the backend (Node.js).

### console.log()

Use \`console.log()\` to print messages, the most common debugging tool.`,
        },
        defaultCode: `console.log("Hello, World!");`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數宣告", en: "Variable Declaration" },
        content: {
          "zh-TW": `## let、const、var

| 關鍵字 | 說明 |
|--------|------|
| \`const\` | 常數，不可重新賦值 |
| \`let\`   | 變數，可重新賦值，區塊作用域 |
| \`var\`   | 舊式寫法，函式作用域（建議避免） |

現代 JavaScript 建議優先使用 \`const\`，需要改變時才用 \`let\`。`,
          en: `## let, const, var

| Keyword | Description |
|---------|-------------|
| \`const\` | Constant, cannot be reassigned |
| \`let\`   | Variable, can be reassigned, block scope |
| \`var\`   | Legacy, function scope (avoid) |

Modern JS prefers \`const\` first, use \`let\` when reassignment is needed.`,
        },
        defaultCode: `const name = "Alice";
let age = 25;

console.log(name, age);

age = 26;
console.log("Next year:", age);`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## 運算子

### 算術運算子

\`\`\`js
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.333...
console.log(10 % 3);  // 1（餘數）
console.log(2 ** 8);  // 256（次方）
\`\`\`

### 比較運算子：== vs ===

\`\`\`js
// == 會做型別轉換（寬鬆比較）
console.log(5 == "5");   // true ⚠️
console.log(0 == false); // true ⚠️

// === 不做型別轉換（嚴格比較，建議使用）
console.log(5 === "5");  // false ✓
console.log(5 === 5);    // true ✓
\`\`\`

### 邏輯運算子

\`\`\`js
console.log(true && false); // false（AND）
console.log(true || false); // true（OR）
console.log(!true);         // false（NOT）
\`\`\`

### typeof

\`\`\`js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ← 歷史遺留的 bug
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
\`\`\``,
          en: `## Operators

### Arithmetic Operators

\`\`\`js
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.333...
console.log(10 % 3);  // 1 (remainder)
console.log(2 ** 8);  // 256 (exponentiation)
\`\`\`

### Comparison: == vs ===

\`\`\`js
// == does type coercion (loose equality)
console.log(5 == "5");   // true ⚠️
console.log(0 == false); // true ⚠️

// === no coercion (strict equality — use this)
console.log(5 === "5");  // false ✓
console.log(5 === 5);    // true ✓
\`\`\`

### Logical Operators

\`\`\`js
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)
\`\`\`

### typeof

\`\`\`js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ← historic bug
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
\`\`\``,
        },
        defaultCode: `// 算術 / Arithmetic
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 10 =", 2 ** 10);

// 嚴格比較 / Strict equality
console.log("5 == '5':", 5 == "5");    // true (loose)
console.log("5 === '5':", 5 === "5");  // false (strict)
console.log("0 == false:", 0 == false);  // true
console.log("0 === false:", 0 === false); // false

// 邏輯 / Logical
const age = 20;
const hasID = true;
console.log("可以進入:", age >= 18 && hasID);

// typeof
const values = [42, "hello", true, null, undefined, [], {}];
values.forEach(v => console.log(typeof v, "<--", String(v)));`,
        exercise: {
          question: {
            "zh-TW": "宣告兩個變數 a = 15、b = 4。用 console.log 印出：相除結果、餘數、a 的 b 次方，以及 a === 15 與 a == \"15\" 的差別。",
            en: "Declare a = 15 and b = 4. Print: their division, remainder, a to the power of b, and the difference between a === 15 and a == \"15\".",
          },
          hint: {
            "zh-TW": "餘數用 %，次方用 **，注意 === 和 == 的差異",
            en: "Use % for remainder, ** for power, note the difference between === and ==",
          },
          answer: `const a = 15, b = 4;
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a === 15);   // true
console.log(a == "15");  // true (type coercion)
console.log(a === "15"); // false (strict)`,
        },
      },
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## if / else if / else

\`\`\`js
const score = 85;

if (score >= 90) {
  console.log("優等");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
\`\`\`

### 三元運算子（Ternary Operator）

適合簡單的二選一條件，格式：**條件 ? 值A : 值B**

\`\`\`js
const age = 20;
const status = age >= 18 ? "成年" : "未成年";
console.log(status); // 成年
\`\`\`

### switch 陳述式

當要對同一個值比較多個情況時，\`switch\` 比多個 \`if\` 更清晰。

\`\`\`js
const day = "Monday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("週末");
    break;
  case "Monday":
    console.log("週一，新的開始！");
    break;
  default:
    console.log("平日");
}
\`\`\`

> **注意**：每個 case 記得加 \`break\`，否則會「貫穿」到下一個 case。`,
          en: `## if / else if / else

\`\`\`js
const score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
\`\`\`

### Ternary Operator

For simple two-choice conditions: **condition ? valueA : valueB**

\`\`\`js
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
\`\`\`

### switch Statement

Cleaner than multiple \`if\` checks when comparing one value against many cases.

\`\`\`js
const day = "Monday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
    console.log("Monday, fresh start!");
    break;
  default:
    console.log("Weekday");
}
\`\`\`

> **Note**: Remember \`break\` in each case — without it execution "falls through" to the next case.`,
        },
        defaultCode: `// if / else if / else
const score = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 三元運算子 / ternary
const hour = new Date().getHours();
const greeting = hour < 12 ? "早安" : hour < 18 ? "午安" : "晚安";
console.log(greeting);

// switch
const lang = "JavaScript";
switch (lang) {
  case "Python":
    console.log("Pythonista!");
    break;
  case "JavaScript":
    console.log("JS Developer!");
    break;
  default:
    console.log("Programmer!");
}`,
        exercise: {
          question: {
            "zh-TW": "撰寫一個函式 classify(n)，接收一個數字，回傳：若 n > 0 回傳 \"正數\"、n < 0 回傳 \"負數\"、n === 0 回傳 \"零\"。用三元運算子或 if/else 都可以。",
            en: "Write a function classify(n) that returns \"positive\" if n > 0, \"negative\" if n < 0, and \"zero\" if n === 0. Use ternary or if/else.",
          },
          hint: {
            "zh-TW": "可以用巢狀三元：n > 0 ? \"正數\" : n < 0 ? \"負數\" : \"零\"",
            en: "Nested ternary works: n > 0 ? \"positive\" : n < 0 ? \"negative\" : \"zero\"",
          },
          answer: `function classify(n) {
  return n > 0 ? "正數" : n < 0 ? "負數" : "零";
}
console.log(classify(5));   // 正數
console.log(classify(-3));  // 負數
console.log(classify(0));   // 零`,
        },
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## for 迴圈

傳統的 for 迴圈有三個部分：初始化、條件、更新。

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
\`\`\`

## while 迴圈

條件成立時持續執行，適合不確定次數的情況。

\`\`\`js
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
\`\`\`

## for...of — 遍歷陣列（推薦）

\`\`\`js
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
\`\`\`

## for...in — 遍歷物件的鍵

\`\`\`js
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, ":", person[key]);
}
\`\`\`

## break 與 continue

\`\`\`js
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // 跳過 3
  if (i === 7) break;    // 到 7 停止
  console.log(i);
}
// 印出：0 1 2 4 5 6
\`\`\``,
          en: `## for Loop

The classic for loop has three parts: init, condition, update.

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
\`\`\`

## while Loop

Runs while the condition is true. Good for unknown iteration counts.

\`\`\`js
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
\`\`\`

## for...of — Iterate Arrays (Recommended)

\`\`\`js
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
\`\`\`

## for...in — Iterate Object Keys

\`\`\`js
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, ":", person[key]);
}
\`\`\`

## break and continue

\`\`\`js
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 7) break;    // stop at 7
  console.log(i);
}
// prints: 0 1 2 4 5 6
\`\`\``,
        },
        defaultCode: `// for 迴圈：印出平方 / squares
console.log("平方數:");
for (let i = 1; i <= 5; i++) {
  console.log(\`\${i}² = \${i * i}\`);
}

// for...of：遍歷陣列
const colors = ["red", "green", "blue"];
console.log("\\n顏色:");
for (const color of colors) {
  console.log(" -", color);
}

// while：倒數 / countdown
console.log("\\n倒數:");
let n = 5;
while (n > 0) {
  process.stdout ? process.stdout.write(n + " ") : console.log(n);
  n--;
}
console.log("發射！🚀");

// break & continue
console.log("\\n跳過 3、停在 7:");
const result = [];
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  result.push(i);
}
console.log(result);`,
        exercise: {
          question: {
            "zh-TW": "用 for...of 遍歷陣列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]，用 console.log 印出所有奇數，並最後印出奇數的總和。",
            en: "Use for...of to iterate [1,2,3,4,5,6,7,8,9,10], print all odd numbers, and finally print their sum.",
          },
          hint: {
            "zh-TW": "用 n % 2 !== 0 判斷奇數，累加到 sum 變數",
            en: "Use n % 2 !== 0 to check odd, accumulate into a sum variable",
          },
          answer: `const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (const n of nums) {
  if (n % 2 !== 0) {
    console.log(n);
    sum += n;
  }
}
console.log("奇數總和:", sum);`,
        },
      },
      {
        id: "functions",
        title: { "zh-TW": "函式", en: "Functions" },
        content: {
          "zh-TW": `## 函式宣告 vs 箭頭函式

\`\`\`js
// 傳統函式
function add(a, b) {
  return a + b;
}

// 箭頭函式（ES6+）
const add = (a, b) => a + b;
\`\`\`

箭頭函式更簡潔，且不綁定自己的 \`this\`。`,
          en: `## Function Declaration vs Arrow Functions

\`\`\`js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function (ES6+)
const add = (a, b) => a + b;
\`\`\`

Arrow functions are shorter and don't bind their own \`this\`.`,
        },
        defaultCode: `const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(add(3, 4));
console.log(multiply(3, 4));`,
      },
    ],
  },
  {
    id: "arrays",
    title: { "zh-TW": "陣列與物件", en: "Arrays & Objects" },
    lessons: [
      {
        id: "arrays",
        title: { "zh-TW": "陣列操作", en: "Array Operations" },
        content: {
          "zh-TW": `## 陣列（Array）

陣列是有順序的資料集合。

常用方法：
- \`push()\` — 加到末端
- \`pop()\` — 移除末端
- \`map()\` — 轉換每個元素
- \`filter()\` — 過濾元素
- \`reduce()\` — 累積計算`,
          en: `## Arrays

Arrays are ordered collections of data.

Common methods:
- \`push()\` — add to end
- \`pop()\` — remove from end
- \`map()\` — transform each element
- \`filter()\` — filter elements
- \`reduce()\` — accumulate`,
        },
        defaultCode: `const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("sum:", sum);`,
      },
    ],
  },
  {
    id: "functions-advanced",
    title: { "zh-TW": "進階函式", en: "Advanced Functions" },
    lessons: [
      {
        id: "arrow-functions",
        title: { "zh-TW": "箭頭函式", en: "Arrow Functions" },
        content: {
          "zh-TW": `## 箭頭函式（Arrow Functions）

箭頭函式是 ES6 引入的簡潔函式語法。

### 語法演變

\`\`\`js
// 傳統函式
function square(x) {
  return x * x;
}

// 箭頭函式（完整）
const square = (x) => {
  return x * x;
};

// 箭頭函式（簡潔版 — 單一運算式可省略 return 和大括號）
const square = x => x * x;
\`\`\`

### 多參數與無參數

\`\`\`js
const add = (a, b) => a + b;        // 多參數需加括號
const greet = () => "Hello!";       // 無參數需空括號
const double = x => x * 2;          // 單參數可省略括號
\`\`\`

### 回傳物件字面值

\`\`\`js
// 回傳物件時需用括號包住，避免與函式本體混淆
const makePoint = (x, y) => ({ x, y });
console.log(makePoint(3, 4)); // { x: 3, y: 4 }
\`\`\`

### this 綁定差異

\`\`\`js
function Timer() {
  this.seconds = 0;

  // 傳統函式：this 指向 undefined（嚴格模式）或全域
  // setInterval(function() { this.seconds++; }, 1000); // ❌ 錯誤

  // 箭頭函式：繼承外層的 this
  setInterval(() => {
    this.seconds++; // ✓ 正確指向 Timer 實例
  }, 1000);
}
\`\`\``,
          en: `## Arrow Functions

Arrow functions are a concise function syntax introduced in ES6.

### Syntax Evolution

\`\`\`js
// Traditional function
function square(x) {
  return x * x;
}

// Arrow function (full)
const square = (x) => {
  return x * x;
};

// Arrow function (concise — single expression omits return and braces)
const square = x => x * x;
\`\`\`

### Multiple and No Parameters

\`\`\`js
const add = (a, b) => a + b;       // multiple params need parens
const greet = () => "Hello!";      // no params need empty parens
const double = x => x * 2;         // single param can omit parens
\`\`\`

### Returning Object Literals

\`\`\`js
// Wrap object in parens to distinguish from function body
const makePoint = (x, y) => ({ x, y });
console.log(makePoint(3, 4)); // { x: 3, y: 4 }
\`\`\`

### this Binding Difference

\`\`\`js
function Timer() {
  this.seconds = 0;

  // Traditional: 'this' is undefined (strict) or global
  // setInterval(function() { this.seconds++; }, 1000); // ❌

  // Arrow: inherits 'this' from enclosing scope
  setInterval(() => {
    this.seconds++; // ✓ correctly refers to Timer instance
  }, 1000);
}
\`\`\``,
        },
        defaultCode: `// 各種箭頭函式寫法 / arrow function forms
const square = x => x * x;
const add = (a, b) => a + b;
const greet = () => "Hello!";
const makePoint = (x, y) => ({ x, y });

console.log(square(5));        // 25
console.log(add(3, 4));        // 7
console.log(greet());          // Hello!
console.log(makePoint(1, 2));  // { x: 1, y: 2 }

// 多行箭頭函式 / multi-line
const describe = (name, age) => {
  const category = age >= 18 ? "成年" : "未成年";
  return \`\${name} 是 \${category}（\${age} 歲）\`;
};
console.log(describe("Alice", 20));
console.log(describe("Bob", 16));

// 作為回呼函式 / as callbacks
const nums = [1, 2, 3, 4, 5];
console.log(nums.map(x => x * x));
console.log(nums.filter(x => x % 2 === 0));`,
        exercise: {
          question: {
            "zh-TW": "撰寫一個箭頭函式 clamp(value, min, max)，讓回傳值不超出 [min, max] 範圍。例如 clamp(15, 0, 10) 回傳 10、clamp(-5, 0, 10) 回傳 0、clamp(7, 0, 10) 回傳 7。",
            en: "Write an arrow function clamp(value, min, max) that returns value clamped to [min, max]. E.g. clamp(15, 0, 10) → 10, clamp(-5, 0, 10) → 0, clamp(7, 0, 10) → 7.",
          },
          hint: {
            "zh-TW": "可用 Math.min 和 Math.max 組合：Math.min(Math.max(value, min), max)",
            en: "Combine Math.min and Math.max: Math.min(Math.max(value, min), max)",
          },
          answer: `const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

console.log(clamp(15, 0, 10));  // 10
console.log(clamp(-5, 0, 10));  // 0
console.log(clamp(7, 0, 10));   // 7`,
        },
      },
      {
        id: "higher-order",
        title: { "zh-TW": "高階函式：map、filter、reduce", en: "Higher-Order Functions: map, filter, reduce" },
        content: {
          "zh-TW": `## 高階函式（Higher-Order Functions）

高階函式是接收函式作為參數、或回傳函式的函式。

### map() — 轉換每個元素

\`\`\`js
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

const names = ["alice", "bob", "carol"];
const capitalized = names.map(name =>
  name.charAt(0).toUpperCase() + name.slice(1)
);
// ["Alice", "Bob", "Carol"]
\`\`\`

### filter() — 過濾元素

\`\`\`js
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]

const words = ["apple", "fig", "banana", "kiwi"];
const longWords = words.filter(w => w.length > 4);
// ["apple", "banana"]
\`\`\`

### reduce() — 累積成單一值

\`\`\`js
const nums = [1, 2, 3, 4, 5];

// 求和
const sum = nums.reduce((acc, n) => acc + n, 0);
// 15

// 求最大值
const max = nums.reduce((acc, n) => n > acc ? n : acc, nums[0]);
// 5
\`\`\`

### 鏈式呼叫（Method Chaining）

\`\`\`js
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(n => n % 2 === 0)   // 取偶數：[2, 4, 6, 8, 10]
  .map(n => n * n)             // 平方：[4, 16, 36, 64, 100]
  .reduce((acc, n) => acc + n, 0); // 加總：220

console.log(result); // 220
\`\`\``,
          en: `## Higher-Order Functions

A higher-order function takes a function as an argument or returns one.

### map() — Transform Each Element

\`\`\`js
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

const names = ["alice", "bob", "carol"];
const capitalized = names.map(name =>
  name.charAt(0).toUpperCase() + name.slice(1)
);
// ["Alice", "Bob", "Carol"]
\`\`\`

### filter() — Filter Elements

\`\`\`js
const nums = [1, 2, 3, 4, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]

const words = ["apple", "fig", "banana", "kiwi"];
const longWords = words.filter(w => w.length > 4);
// ["apple", "banana"]
\`\`\`

### reduce() — Accumulate to Single Value

\`\`\`js
const nums = [1, 2, 3, 4, 5];

// sum
const sum = nums.reduce((acc, n) => acc + n, 0);
// 15

// max
const max = nums.reduce((acc, n) => n > acc ? n : acc, nums[0]);
// 5
\`\`\`

### Method Chaining

\`\`\`js
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(n => n % 2 === 0)   // evens: [2, 4, 6, 8, 10]
  .map(n => n * n)             // squares: [4, 16, 36, 64, 100]
  .reduce((acc, n) => acc + n, 0); // sum: 220

console.log(result); // 220
\`\`\``,
        },
        defaultCode: `const products = [
  { name: "Apple",  price: 30,  category: "fruit" },
  { name: "Milk",   price: 45,  category: "dairy" },
  { name: "Bread",  price: 25,  category: "grain" },
  { name: "Banana", price: 18,  category: "fruit" },
  { name: "Cheese", price: 120, category: "dairy" },
];

// map：取出所有商品名稱
const names = products.map(p => p.name);
console.log("商品名稱:", names);

// filter：只取水果
const fruits = products.filter(p => p.category === "fruit");
console.log("水果:", fruits.map(p => p.name));

// reduce：計算總價
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("總價:", total);

// 鏈式：便宜商品（< 50）的名稱，按字母排序
const cheap = products
  .filter(p => p.price < 50)
  .map(p => p.name)
  .sort();
console.log("便宜商品:", cheap);`,
        exercise: {
          question: {
            "zh-TW": "給定陣列 scores = [45, 82, 91, 67, 55, 78, 95, 33, 88, 72]，用鏈式呼叫：1) 過濾出及格分數（>= 60），2) 每個分數加 5 分（bonus），3) 計算加分後的平均分。",
            en: "Given scores = [45, 82, 91, 67, 55, 78, 95, 33, 88, 72], chain: 1) filter passing scores (>= 60), 2) add 5 bonus points to each, 3) calculate the average of the boosted scores.",
          },
          hint: {
            "zh-TW": "先 filter，再 map 加 5，最後用 reduce 加總再除以 length",
            en: "filter first, then map to add 5, then reduce to sum and divide by length",
          },
          answer: `const scores = [45, 82, 91, 67, 55, 78, 95, 33, 88, 72];
const passing = scores.filter(s => s >= 60);
const boosted = passing.map(s => s + 5);
const avg = boosted.reduce((sum, s) => sum + s, 0) / boosted.length;
console.log("及格人數:", passing.length);
console.log("加分後成績:", boosted);
console.log("平均分:", avg.toFixed(1));`,
        },
      },
    ],
  },
  {
    id: "objects",
    title: { "zh-TW": "物件", en: "Objects" },
    lessons: [
      {
        id: "objects",
        title: { "zh-TW": "物件基礎", en: "Object Basics" },
        content: {
          "zh-TW": `## 物件（Object）

物件以「鍵：值」對儲存資料，是 JavaScript 最核心的資料結構。

### 建立物件

\`\`\`js
const person = {
  name: "Alice",
  age: 25,
  greet() {           // 方法（method）
    return \`Hi, I'm \${this.name}\`;
  }
};
\`\`\`

### 存取屬性

\`\`\`js
console.log(person.name);       // 點記法（dot notation）
console.log(person["age"]);     // 括號記法（bracket notation）
console.log(person.greet());    // 呼叫方法
\`\`\`

### 新增、修改、刪除

\`\`\`js
person.email = "alice@example.com";  // 新增
person.age = 26;                      // 修改
delete person.email;                  // 刪除
\`\`\`

### 解構賦值（Destructuring）

\`\`\`js
const { name, age } = person;
console.log(name, age); // Alice 26

// 重新命名
const { name: fullName } = person;

// 預設值
const { city = "未知" } = person;
console.log(city); // 未知
\`\`\`

### 展開運算子（Spread）

\`\`\`js
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
// { a: 1, b: 2, c: 3 }
\`\`\``,
          en: `## Objects

Objects store data as key-value pairs — the most fundamental data structure in JavaScript.

### Creating Objects

\`\`\`js
const person = {
  name: "Alice",
  age: 25,
  greet() {           // method
    return \`Hi, I'm \${this.name}\`;
  }
};
\`\`\`

### Accessing Properties

\`\`\`js
console.log(person.name);       // dot notation
console.log(person["age"]);     // bracket notation
console.log(person.greet());    // calling a method
\`\`\`

### Add, Modify, Delete

\`\`\`js
person.email = "alice@example.com";  // add
person.age = 26;                      // modify
delete person.email;                  // delete
\`\`\`

### Destructuring

\`\`\`js
const { name, age } = person;
console.log(name, age); // Alice 26

// Rename
const { name: fullName } = person;

// Default value
const { city = "Unknown" } = person;
console.log(city); // Unknown
\`\`\`

### Spread Operator

\`\`\`js
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
// { a: 1, b: 2, c: 3 }
\`\`\``,
        },
        defaultCode: `// 建立物件 / create object
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  isElectric: false,
  describe() {
    return \`\${this.year} \${this.brand} \${this.model}\`;
  }
};

console.log(car.describe());
console.log("品牌:", car["brand"]);

// 修改與新增 / modify & add
car.year = 2024;
car.color = "白色";
console.log(car.describe(), "-", car.color);

// 解構 / destructuring
const { brand, model, year } = car;
console.log(\`解構: \${brand} \${model} \${year}\`);

// 預設值 / default value
const { owner = "未知車主" } = car;
console.log("車主:", owner);

// 展開合併 / spread
const electric = { ...car, isElectric: true, model: "bZ4X" };
console.log("\\n電動車:", electric.describe(), electric.isElectric);`,
        exercise: {
          question: {
            "zh-TW": "建立一個 book 物件，包含 title、author、pages、genre 屬性，以及一個 summary() 方法回傳「《title》作者：author，共 pages 頁」。再用解構取出 title 和 author 並印出。",
            en: "Create a book object with title, author, pages, genre properties, and a summary() method returning \"《title》 by author, pages pages\". Then destructure title and author and print them.",
          },
          hint: {
            "zh-TW": "在方法中用 this.title 等存取屬性，解構寫 const { title, author } = book",
            en: "Use this.title etc. in the method, destructure with const { title, author } = book",
          },
          answer: `const book = {
  title: "JavaScript 高效入門",
  author: "Alice",
  pages: 350,
  genre: "技術",
  summary() {
    return \`《\${this.title}》作者：\${this.author}，共 \${this.pages} 頁\`;
  }
};
console.log(book.summary());
const { title, author } = book;
console.log(title, "/", author);`,
        },
      },
      {
        id: "classes",
        title: { "zh-TW": "類別（Class）", en: "Classes" },
        content: {
          "zh-TW": `## 類別（Class）

ES6 引入的 class 語法讓物件導向程式設計更直觀。

### 定義類別

\`\`\`js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} 說：\${this.sound}！\`;
  }

  toString() {
    return \`Animal(\${this.name})\`;
  }
}

const dog = new Animal("旺財", "汪汪");
console.log(dog.speak()); // 旺財 說：汪汪！
\`\`\`

### 繼承：extends 與 super

\`\`\`js
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "汪");  // 呼叫父類別 constructor
    this.breed = breed;
  }

  fetch(item) {
    return \`\${this.name} 撿回了 \${item}！\`;
  }
}

const d = new Dog("小黑", "拉布拉多");
console.log(d.speak());      // 繼承自 Animal
console.log(d.fetch("球"));  // Dog 自己的方法
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
\`\`\`

### 靜態方法（static）

\`\`\`js
class MathUtil {
  static square(x) { return x * x; }
  static cube(x) { return x * x * x; }
}

// 不需建立實例，直接用類別呼叫
console.log(MathUtil.square(4)); // 16
console.log(MathUtil.cube(3));   // 27
\`\`\``,
          en: `## Classes

ES6 class syntax makes object-oriented programming more intuitive.

### Defining a Class

\`\`\`js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} says: \${this.sound}!\`;
  }
}

const dog = new Animal("Rex", "Woof");
console.log(dog.speak()); // Rex says: Woof!
\`\`\`

### Inheritance: extends and super

\`\`\`js
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");  // call parent constructor
    this.breed = breed;
  }

  fetch(item) {
    return \`\${this.name} fetched the \${item}!\`;
  }
}

const d = new Dog("Buddy", "Labrador");
console.log(d.speak());        // inherited from Animal
console.log(d.fetch("ball"));  // Dog's own method
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
\`\`\`

### Static Methods

\`\`\`js
class MathUtil {
  static square(x) { return x * x; }
  static cube(x) { return x * x * x; }
}

// Call directly on the class — no instance needed
console.log(MathUtil.square(4)); // 16
console.log(MathUtil.cube(3));   // 27
\`\`\``,
        },
        defaultCode: `class Shape {
  constructor(color = "black") {
    this.color = color;
  }

  area() {
    return 0;
  }

  toString() {
    return \`\${this.constructor.name}(color=\${this.color}, area=\${this.area().toFixed(2)})\`;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const shapes = [
  new Circle(5, "red"),
  new Rectangle(4, 6, "blue"),
  new Circle(3, "green"),
];

shapes.forEach(s => console.log(s.toString()));

// 找面積最大的 / find largest area
const largest = shapes.reduce((max, s) => s.area() > max.area() ? s : max);
console.log("\\n最大面積:", largest.toString());`,
        exercise: {
          question: {
            "zh-TW": "建立一個 BankAccount 類別，包含 owner 和 balance 屬性，以及 deposit(amount)、withdraw(amount) 方法。再繼承出 SavingsAccount 類別，新增 interestRate 屬性和 addInterest() 方法（balance 增加 balance * interestRate）。",
            en: "Create a BankAccount class with owner and balance, plus deposit(amount) and withdraw(amount) methods. Then extend it into SavingsAccount with an interestRate property and addInterest() method (balance += balance * interestRate).",
          },
          hint: {
            "zh-TW": "SavingsAccount constructor 呼叫 super(owner, balance)，withdraw 要檢查餘額是否足夠",
            en: "SavingsAccount constructor calls super(owner, balance); withdraw should check if balance is sufficient",
          },
          answer: `class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(\`存入 \${amount}，餘額：\${this.balance}\`);
  }
  withdraw(amount) {
    if (amount > this.balance) return console.log("餘額不足");
    this.balance -= amount;
    console.log(\`提取 \${amount}，餘額：\${this.balance}\`);
  }
}
class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate = 0.02) {
    super(owner, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    const interest = this.balance * this.interestRate;
    this.deposit(interest);
  }
}
const acc = new SavingsAccount("Alice", 10000);
acc.deposit(5000);
acc.addInterest();
acc.withdraw(2000);`,
        },
      },
    ],
  },
];

export default chapters;
