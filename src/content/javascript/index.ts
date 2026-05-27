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
  {
    id: "leetcode",
    title: { "zh-TW": "LeetCode 經典題", en: "LeetCode Classics" },
    lessons: [
      {
        id: "two-sum",
        title: { "zh-TW": "#1 兩數之和", en: "#1 Two Sum" },
        content: {
          "zh-TW": `## LeetCode #1 — Two Sum（兩數之和）

給定整數陣列 \`nums\` 與目標值 \`target\`，回傳兩個相加等於 \`target\` 的索引。

**核心技巧：Map（雜湊表）**

JavaScript 的 \`Map\` 讓查找複雜度降為 O(1)，整體解法 O(n)。

遍歷時記錄 \`num → index\`；若 \`target - num\` 已在 Map 中，立即回傳答案。`,
          en: `## LeetCode #1 — Two Sum

Given array \`nums\` and \`target\`, return indices of two numbers summing to \`target\`.

**Key technique: Map (hash table)**

JavaScript's \`Map\` provides O(1) lookups, making the overall solution O(n).

As you iterate, store \`num → index\`; if \`target - num\` is already in the Map, return both indices.`,
        },
        defaultCode: `function twoSum(nums, target) {
  const seen = new Map(); // num -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

// 測試
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]`,
        exercise: {
          question: {
            "zh-TW": "改用物件（{}）取代 Map 實作同樣功能，測試 twoSum([2,7,11,15], 9)。",
            en: "Rewrite using a plain object {} instead of Map, and test twoSum([2,7,11,15], 9).",
          },
          hint: {
            "zh-TW": "用 seen[num] = i 儲存，用 complement in seen 查找",
            en: "Store with seen[num] = i and lookup with complement in seen",
          },
          answer: `function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]`,
        },
      },
      {
        id: "valid-parentheses",
        title: { "zh-TW": "#20 有效括號", en: "#20 Valid Parentheses" },
        content: {
          "zh-TW": `## LeetCode #20 — Valid Parentheses（有效括號）

判斷只含 \`(\`, \`)\`, \`{\`, \`}\`, \`[\`, \`]\` 的字串是否合法配對。

**核心技巧：Stack（堆疊）**

- 遇到左括號：推入堆疊
- 遇到右括號：取出堆疊頂端，檢查是否匹配
- 最後堆疊必須為空`,
          en: `## LeetCode #20 — Valid Parentheses

Determine if a string containing only brackets is validly matched.

**Key technique: Stack**

- Opening bracket: push to stack
- Closing bracket: pop from stack and check if it matches
- Stack must be empty at the end`,
        },
        defaultCode: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (map[char]) {
      const top = stack.pop() || '#';
      if (map[char] !== top) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// 測試
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("{[]}"));     // true`,
        exercise: {
          question: {
            "zh-TW": "為什麼 isValid(\"(((\") 回傳 false？加上 console.log 追蹤每步的堆疊狀態來驗證。",
            en: "Why does isValid(\"(((\") return false? Add console.log to trace the stack at each step.",
          },
          hint: {
            "zh-TW": "三個左括號都推入堆疊，最後 stack.length === 3 不等於 0",
            en: "Three opening brackets are pushed, so stack.length === 3 at the end, not 0",
          },
          answer: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (map[char]) {
      const top = stack.pop() || '#';
      if (map[char] !== top) return false;
    } else {
      stack.push(char);
    }
    console.log(\`char=\${char}, stack=[\${stack}]\`);
  }
  return stack.length === 0;
}
console.log(isValid("((("));  // false`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

找出整數陣列中連續子陣列的最大總和。

**Kadane's Algorithm — O(n)：**

\`\`\`
current = Math.max(num, current + num)
best    = Math.max(best, current)
\`\`\`

每步選擇：「把目前數字接在前面的子陣列後面」或「從這裡重新開始」。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

\`\`\`
current = Math.max(num, current + num)
best    = Math.max(best, current)
\`\`\`

At each step: extend the current subarray or start fresh from here.`,
        },
        defaultCode: `function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}

// 測試
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1]));                       // 1
console.log(maxSubArray([5,4,-1,7,8]));             // 23`,
        exercise: {
          question: {
            "zh-TW": "全部是負數時（如 [-3,-1,-2]），應回傳最大的負數。確認目前實作是否正確，並解釋原因。",
            en: "When all numbers are negative (e.g. [-3,-1,-2]), the answer should be the least negative. Verify the current implementation handles this correctly and explain why.",
          },
          hint: {
            "zh-TW": "初始值設為 nums[0] 而不是 0 或 -Infinity，所以全負數時也能正確處理",
            en: "Initializing with nums[0] rather than 0 or -Infinity ensures correctness with all-negative arrays",
          },
          answer: `function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}
console.log(maxSubArray([-3,-1,-2])); // -1 (正確)`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階樓梯，每次爬 1 或 2 階，共有幾種方法？

**動態規劃（費波那契變形）：**

\`ways(n) = ways(n-1) + ways(n-2)\`

空間優化版只需兩個變數，O(1) 空間、O(n) 時間。

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 方法數 | 1 | 2 | 3 | 5 | 8 |`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, taking 1 or 2 at a time. How many distinct ways?

**Dynamic Programming (Fibonacci variant):**

\`ways(n) = ways(n-1) + ways(n-2)\`

Space-optimized version uses only two variables — O(1) space, O(n) time.`,
        },
        defaultCode: `function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    [prev2, prev1] = [prev1, prev2 + prev1];
  }
  return prev1;
}

// 測試
for (let i = 1; i <= 7; i++) {
  console.log(\`n=\${i}: \${climbStairs(i)} 種方法\`);
}`,
        exercise: {
          question: {
            "zh-TW": "用遞迴加上 memoization（記憶化）重寫 climbStairs，避免重複計算。",
            en: "Rewrite climbStairs using recursion with memoization to avoid redundant calculations.",
          },
          hint: {
            "zh-TW": "用 Map 或物件記錄已計算的結果，若已存在直接回傳",
            en: "Use a Map or object to cache computed results; return cached value if it exists",
          },
          answer: `function climbStairs(n, memo = new Map()) {
  if (n <= 2) return n;
  if (memo.has(n)) return memo.get(n);
  const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo.set(n, result);
  return result;
}
console.log(climbStairs(10)); // 89`,
        },
      },
      {
        id: "best-time-stock",
        title: { "zh-TW": "#121 買賣股票最佳時機", en: "#121 Best Time to Buy and Sell Stock" },
        content: {
          "zh-TW": `## LeetCode #121 — Best Time to Buy and Sell Stock（買賣股票最佳時機）

給定每日股價陣列，只能買一次、賣一次，求最大利潤。

**貪心策略：**
- 追蹤目前看到的最低股價 \`minPrice\`
- 每天計算「若今天賣出」的利潤 \`price - minPrice\`
- 持續更新最大利潤

| 複雜度 | 值 |
|--------|-----|
| 時間 | O(n) |
| 空間 | O(1) |`,
          en: `## LeetCode #121 — Best Time to Buy and Sell Stock

Given an array of daily prices, buy once and sell once to maximize profit.

**Greedy approach:**
- Track the minimum price seen so far (\`minPrice\`)
- Each day, calculate profit if selling today: \`price - minPrice\`
- Continuously update the maximum profit

| Complexity | Value |
|------------|-------|
| Time | O(n) |
| Space | O(1) |`,
        },
        defaultCode: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // 5
console.log(maxProfit([7, 6, 4, 3, 1]));      // 0
console.log(maxProfit([1, 2]));                // 1

// 視覺化過程
const prices = [7, 1, 5, 3, 6, 4];
let minP = Infinity;
console.log("\\n每日分析：");
prices.forEach((p, i) => {
    minP = Math.min(minP, p);
    console.log(\`Day \${i+1}: price=\${p}, min=\${minP}, profit=\${p - minP}\`);
});`,
        exercise: {
          question: {
            "zh-TW": "若可以多次買賣（不重疊），求最大利潤。",
            en: "If you can buy and sell multiple times (non-overlapping), find the maximum profit.",
          },
          hint: {
            "zh-TW": "只要明天比今天貴就賣",
            en: "Sell whenever tomorrow's price is greater than today's",
          },
          answer: `function maxProfitMulti(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
    }
    return profit;
}
console.log(maxProfitMulti([7, 1, 5, 3, 6, 4]));  // 7
console.log(maxProfitMulti([1, 2, 3, 4, 5]));      // 4`,
        },
      },
      {
        id: "valid-anagram",
        title: { "zh-TW": "#242 有效的字母異位詞", en: "#242 Valid Anagram" },
        content: {
          "zh-TW": `## LeetCode #242 — Valid Anagram（有效的字母異位詞）

判斷兩個字串是否為字母異位詞（字母相同、順序不同）。

**方法一：排序比較 O(n log n)**
\`\`\`
s.split('').sort().join('') === t.split('').sort().join('')
\`\`\`

**方法二：頻率計數器 O(n)**
- 用長度 26 的陣列記錄每個字母出現次數
- 對 s 加一，對 t 減一
- 最後確認全為 0

範例：
- "anagram" ↔ "nagaram" → \`true\`
- "rat" ↔ "car" → \`false\``,
          en: `## LeetCode #242 — Valid Anagram

Determine if two strings are anagrams (same letters, different order).

**Approach 1: Sort and compare — O(n log n)**
\`\`\`
s.split('').sort().join('') === t.split('').sort().join('')
\`\`\`

**Approach 2: Frequency counter — O(n)**
- Use an array of length 26 to count each letter's frequency
- Increment for s, decrement for t
- Verify all entries are 0 at the end

Examples:
- "anagram" ↔ "nagaram" → \`true\`
- "rat" ↔ "car" → \`false\``,
        },
        defaultCode: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    return count.every(c => c === 0);
}

console.log(isAnagram("anagram", "nagaram"));  // true
console.log(isAnagram("rat", "car"));           // false
console.log(isAnagram("", ""));                 // true

// 用 Map 計數的方式
function isAnagramMap(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();
    for (const c of s) map.set(c, (map.get(c) || 0) + 1);
    for (const c of t) {
        if (!map.get(c)) return false;
        map.set(c, map.get(c) - 1);
    }
    return true;
}
console.log("\\n用 Map：", isAnagramMap("listen", "silent"));  // true`,
        exercise: {
          question: {
            "zh-TW": "字母異位詞分組（LeetCode #49）：將字串陣列中的字母異位詞歸為同一組。",
            en: "Group Anagrams (LeetCode #49): group strings that are anagrams of each other.",
          },
          hint: {
            "zh-TW": "用 Array.sort() 排序後的字串作為 Map 的 key",
            en: "Use the sorted string as a Map key",
          },
          answer: `function groupAnagrams(strs) {
    const map = new Map();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(word);
    }
    return [...map.values()];
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [['eat','tea','ate'], ['tan','nat'], ['bat']]`,
        },
      },
      {
        id: "binary-search",
        title: { "zh-TW": "#704 二元搜尋", en: "#704 Binary Search" },
        content: {
          "zh-TW": `## LeetCode #704 — Binary Search（二元搜尋）

在已排序陣列中搜尋目標值，時間複雜度 O(log n)。

**關鍵邊界條件：**
- 迴圈條件：\`left <= right\`
- 中間索引：\`mid = Math.floor((left + right) / 2)\`
- 找到：回傳 \`mid\`
- 目標較大：\`left = mid + 1\`
- 目標較小：\`right = mid - 1\`

| 複雜度 | 值 |
|--------|-----|
| 時間 | O(log n) |
| 空間 | O(1) |`,
          en: `## LeetCode #704 — Binary Search

Search for a target in a sorted array with O(log n) time complexity.

**Key boundary conditions:**
- Loop condition: \`left <= right\`
- Middle index: \`mid = Math.floor((left + right) / 2)\`
- Found: return \`mid\`
- Target larger: \`left = mid + 1\`
- Target smaller: \`right = mid - 1\`

| Complexity | Value |
|------------|-------|
| Time | O(log n) |
| Space | O(1) |`,
        },
        defaultCode: `function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    let steps = 0;
    while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);
        console.log(\`  步驟 \${steps}: 範圍[\${left},\${right}], mid=\${mid}, nums[mid]=\${nums[mid]}\`);
        if (nums[mid] === target) {
            console.log(\`  找到！index=\${mid}\`);
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(\`  找不到，共搜尋 \${steps} 步\`);
    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
console.log("搜尋 9：");
console.log(binarySearch(nums, 9));   // 4
console.log("\\n搜尋 2：");
console.log(binarySearch(nums, 2));   // -1`,
        exercise: {
          question: {
            "zh-TW": "搜尋插入位置（LeetCode #35）：找到目標值的索引，若不存在則回傳應插入的位置。",
            en: "Search Insert Position (LeetCode #35): find the target's index or the position where it should be inserted.",
          },
          hint: {
            "zh-TW": "迴圈結束後 left 就是插入位置",
            en: "After the loop ends, left is the insertion position",
          },
          answer: `function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}
const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5));  // 2
console.log(searchInsert(nums, 2));  // 1
console.log(searchInsert(nums, 7));  // 4
console.log(searchInsert(nums, 0));  // 0`,
        },
      },
    ],
  },
  {
    id: "classic-algorithms",
    title: { "zh-TW": "經典演算法", en: "Classic Algorithms" },
    lessons: [
      {
        id: "hanoi",
        title: { "zh-TW": "河內塔", en: "Tower of Hanoi" },
        content: {
          "zh-TW": `## 河內塔（Tower of Hanoi）

有三根柱子（A、B、C）與 n 個圓盤，目標是將所有圓盤從 A 移到 C。規則：每次只移一個盤、大盤不能在小盤上方。

**遞迴策略：**
1. 把上面 n-1 個盤從 A → B（C 輔助）
2. 把最大盤從 A → C
3. 把 n-1 個盤從 B → C（A 輔助）

移動次數：**2ⁿ - 1**`,
          en: `## Tower of Hanoi

Three pegs (A, B, C), n discs — move all from A to C. Rules: one disc at a time, never larger on smaller.

**Recursive strategy:**
1. Move top n-1 discs A → B (C as aux)
2. Move largest disc A → C
3. Move n-1 discs B → C (A as aux)

Moves required: **2ⁿ - 1**`,
        },
        defaultCode: `function hanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(\`  移動第 1 個碟子：\${from} → \${to}\`);
    return;
  }
  hanoi(n - 1, from, aux, to);
  console.log(\`  移動第 \${n} 個碟子：\${from} → \${to}\`);
  hanoi(n - 1, aux, to, from);
}

for (let n = 1; n <= 4; n++) {
  console.log(\`n=\${n}（需 \${2**n - 1} 步）：\`);
  hanoi(n, 'A', 'C', 'B');
  console.log('');
}`,
        exercise: {
          question: {
            "zh-TW": "修改函式加入 steps 計數器，最後回傳總步數，確認 n=5 時為 31。",
            en: "Add a steps counter to the function and return the total. Verify n=5 gives 31.",
          },
          hint: {
            "zh-TW": "用閉包或外部陣列 [0] 讓遞迴可累加",
            en: "Use a closure or outer array [0] so recursion can increment the counter",
          },
          answer: `function hanoi(n, from, to, aux) {
  let steps = 0;
  function _hanoi(n, f, t, a) {
    if (n === 1) { steps++; console.log(\`  \${f} → \${t}\`); return; }
    _hanoi(n-1, f, a, t);
    steps++; console.log(\`  \${f} → \${t}\`);
    _hanoi(n-1, a, t, f);
  }
  _hanoi(n, from, to, aux);
  return steps;
}
console.log('總步數:', hanoi(5,'A','C','B')); // 31`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

用 0/1 二維陣列表示迷宮，老鼠從左上 [0][0] 走到右下 [n-1][n-1]。

**回溯法核心：**
1. 嘗試向右或向下移動
2. 走到死路時撤銷（sol[x][y] = 0）
3. 嘗試另一方向
4. 抵達終點則成功

JavaScript 用巢狀函式（closure）存取外部的 \`sol\` 矩陣。`,
          en: `## Rat in a Maze (Backtracking)

A 0/1 2D array represents the maze; the rat moves from top-left [0][0] to bottom-right [n-1][n-1].

**Backtracking core:**
1. Try moving right or down
2. If stuck, undo (sol[x][y] = 0)
3. Try another direction
4. Reaching the goal = success`,
        },
        defaultCode: `function solveMaze(maze) {
  const n = maze.length;
  const sol = Array.from({length: n}, () => Array(n).fill(0));

  function isSafe(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1;
  }

  function backtrack(x, y) {
    if (x === n-1 && y === n-1) { sol[x][y] = 1; return true; }
    if (isSafe(x, y)) {
      sol[x][y] = 1;
      if (backtrack(x+1, y) || backtrack(x, y+1)) return true;
      sol[x][y] = 0; // 退回
    }
    return false;
  }

  if (backtrack(0, 0)) {
    console.log("找到路徑：");
    sol.forEach(row => console.log(row.map(c => c ? "■" : "□").join(" ")));
  } else {
    console.log("無解");
  }
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];
solveMaze(maze);`,
        exercise: {
          question: {
            "zh-TW": "修改程式，印出老鼠走過的每一步座標（例如 (0,0) → (1,0) → ...）。",
            en: "Modify to print each step the rat takes (e.g., (0,0) → (1,0) → ...).",
          },
          hint: {
            "zh-TW": "成功時 push 座標到 path 陣列，最後 console.log(path.join(\" → \"))",
            en: "On success push coordinates to a path array, then console.log(path.join(\" → \"))",
          },
          answer: `function solveMaze(maze) {
  const n = maze.length;
  const sol = Array.from({length:n},()=>Array(n).fill(0));
  const path = [];
  function isSafe(x,y){return x>=0&&x<n&&y>=0&&y<n&&maze[x][y]===1;}
  function backtrack(x,y){
    if(x===n-1&&y===n-1){sol[x][y]=1;path.push(\`(\${x},\${y})\`);return true;}
    if(isSafe(x,y)){
      sol[x][y]=1;path.push(\`(\${x},\${y})\`);
      if(backtrack(x+1,y)||backtrack(x,y+1))return true;
      sol[x][y]=0;path.pop();
    }
    return false;
  }
  backtrack(0,0);
  console.log(path.join(" → "));
}
solveMaze([[1,0,0,0],[1,1,0,1],[0,1,0,0],[0,1,1,1]]);`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，使任兩個皇后不互攻（不同行、列、對角線）。

**回溯法（逐行放置）：**

\`board[row] = col\` 記錄第 row 行的皇后在第 col 欄。

安全判斷：
\`\`\`js
board[r] === col                         // 同欄
Math.abs(board[r] - col) === Math.abs(r - row)  // 對角線
\`\`\`

8 皇后共有 **92** 種解法！`,
          en: `## N-Queens Problem

Place 8 queens on an 8×8 board so none attack each other.

**Backtracking (one row at a time):**

\`board[row] = col\` records the queen's column in each row.

Safety check:
\`\`\`js
board[r] === col                              // same column
Math.abs(board[r] - col) === Math.abs(r - row) // diagonal
\`\`\`

There are **92** solutions for N=8!`,
        },
        defaultCode: `function solveNQueens(n) {
  const board = new Array(n).fill(-1);
  const solutions = [];

  function isSafe(row, col) {
    for (let r = 0; r < row; r++) {
      if (board[r] === col || Math.abs(board[r]-col) === Math.abs(r-row))
        return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) { solutions.push([...board]); return; }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;
        backtrack(row + 1);
        board[row] = -1;
      }
    }
  }

  backtrack(0);
  return solutions;
}

const solutions = solveNQueens(8);
console.log(\`8 皇后共有 \${solutions.length} 種解法\`);
console.log("第一種解法：");
solutions[0].forEach(col => {
  console.log("·".repeat(col) + "♛" + "·".repeat(7 - col));
});`,
        exercise: {
          question: {
            "zh-TW": "求解 N=4（四皇后），應有 2 種解法。印出兩種棋盤。",
            en: "Solve N=4 (4-Queens), which has 2 solutions. Print both boards.",
          },
          hint: {
            "zh-TW": "把 solveNQueens(8) 改成 solveNQueens(4)，迴圈印出所有解",
            en: "Change solveNQueens(8) to solveNQueens(4) and loop to print all solutions",
          },
          answer: `function solveNQueens(n){
  const board=new Array(n).fill(-1),solutions=[];
  function isSafe(row,col){
    for(let r=0;r<row;r++)
      if(board[r]===col||Math.abs(board[r]-col)===Math.abs(r-row))return false;
    return true;
  }
  function backtrack(row){
    if(row===n){solutions.push([...board]);return;}
    for(let col=0;col<n;col++)
      if(isSafe(row,col)){board[row]=col;backtrack(row+1);board[row]=-1;}
  }
  backtrack(0);return solutions;
}
const sols=solveNQueens(4);
console.log(\`共 \${sols.length} 種解法\`);
sols.forEach((s,i)=>{
  console.log(\`解法 \${i+1}：\`);
  s.forEach(col=>console.log("·".repeat(col)+"♛"+"·".repeat(3-col)));
});`,
        },
      },
    ],
  },
  {
    id: "design-patterns",
    title: { "zh-TW": "設計模式", en: "Design Patterns" },
    lessons: [
      {
        id: "factory-pattern",
        title: { "zh-TW": "工廠模式", en: "Factory Pattern" },
        content: {
          "zh-TW": `## 工廠模式（Factory Pattern）

將**建立物件的邏輯**集中在工廠函式，呼叫者只需說「我要什麼形狀」，不需知道如何建構。

**JavaScript 實作方式：**
- 使用 class 繼承定義抽象介面
- 工廠函式用 \`switch\` 或物件對應表決定建立哪個子類別

**優點：** 新增類型時只需修改工廠，不影響其他程式碼。`,
          en: `## Factory Pattern

Centralizes **object creation logic** in a factory function. Callers just say "give me a circle" — they don't know how it's built.

**JavaScript approach:**
- Use class inheritance for the abstract interface
- Factory uses \`switch\` or a lookup object to decide which subclass to create

**Benefit:** Adding new types only requires changing the factory.`,
        },
        defaultCode: `class Shape {
  area() { throw new Error("必須實作 area()"); }
  toString() { return \`\${this.constructor.name}: 面積=\${this.area().toFixed(2)}\`; }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

class Triangle extends Shape {
  constructor(a, b, c) { super(); this.a=a; this.b=b; this.c=c; }
  area() {
    const s = (this.a+this.b+this.c)/2;
    return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
  }
}

// 工廠
const registry = { circle: Circle, rectangle: Rectangle, triangle: Triangle };

function createShape(type, ...args) {
  const Cls = registry[type];
  if (!Cls) throw new Error(\`未知形狀：\${type}\`);
  return new Cls(...args);
}

const shapes = [
  createShape("circle", 5),
  createShape("rectangle", 4, 6),
  createShape("triangle", 3, 4, 5),
];
shapes.forEach(s => console.log(s.toString()));`,
        exercise: {
          question: {
            "zh-TW": "在 registry 中新增 Square（正方形）類別，讓 createShape(\"square\", 4) 可以運作並回傳面積 16。",
            en: "Add a Square class to the registry so createShape(\"square\", 4) works and returns area 16.",
          },
          hint: {
            "zh-TW": "class Square extends Rectangle { constructor(side) { super(side, side); } }",
            en: "class Square extends Rectangle { constructor(side) { super(side, side); } }",
          },
          answer: `class Shape { area(){throw new Error("必須實作");} toString(){return \`\${this.constructor.name}: 面積=\${this.area().toFixed(2)}\`;} }
class Rectangle extends Shape { constructor(w,h){super();this.w=w;this.h=h;} area(){return this.w*this.h;} }
class Square extends Rectangle { constructor(side){super(side,side);} }
const registry={rectangle:Rectangle,square:Square};
function createShape(type,...args){const C=registry[type];if(!C)throw new Error("未知");return new C(...args);}
console.log(createShape("square",4).toString()); // Square: 面積=16.00`,
        },
      },
      {
        id: "singleton-pattern",
        title: { "zh-TW": "單例模式", en: "Singleton Pattern" },
        content: {
          "zh-TW": `## 單例模式（Singleton Pattern）

確保一個類別只存在**一個實例**，並提供全域存取點。

**JavaScript 實作：閉包 + 靜態屬性**

\`\`\`js
class Singleton {
  static #instance = null;
  static getInstance() {
    if (!Singleton.#instance) Singleton.#instance = new Singleton();
    return Singleton.#instance;
  }
}
\`\`\`

\`#instance\` 為 ES2022 私有欄位，防止外部直接存取。`,
          en: `## Singleton Pattern

Ensures only **one instance** of a class exists, with a global access point.

**JavaScript: closure + static property**

\`\`\`js
class Singleton {
  static #instance = null;
  static getInstance() {
    if (!Singleton.#instance) Singleton.#instance = new Singleton();
    return Singleton.#instance;
  }
}
\`\`\`

\`#instance\` is an ES2022 private field, preventing direct external access.`,
        },
        defaultCode: `class Logger {
  static #instance = null;

  constructor() {
    this._logs = [];
  }

  static getInstance() {
    if (!Logger.#instance) {
      Logger.#instance = new Logger();
      console.log("Logger 建立");
    }
    return Logger.#instance;
  }

  log(level, message) {
    const entry = \`[\${level}] \${message}\`;
    this._logs.push(entry);
    console.log(entry);
  }

  showAll() {
    console.log(\`\\n=== 共 \${this._logs.length} 筆日誌 ===\`);
    this._logs.forEach(l => console.log(l));
  }
}

const log1 = Logger.getInstance();
const log2 = Logger.getInstance(); // 不會再建立
console.log(\`同一個物件？\${log1 === log2}\`); // true

log1.log("INFO", "伺服器啟動");
log2.log("WARN", "記憶體不足");
log1.log("ERROR", "資料庫斷線");

log1.showAll();`,
        exercise: {
          question: {
            "zh-TW": "新增 clear() 方法清空日誌，以及 get count() 屬性回傳日誌數量。",
            en: "Add a clear() method to empty the logs, and a get count() property returning the log count.",
          },
          hint: {
            "zh-TW": "get count() { return this._logs.length; }；clear() { this._logs = []; }",
            en: "get count() { return this._logs.length; }; clear() { this._logs = []; }",
          },
          answer: `class Logger {
  static #instance=null;
  constructor(){this._logs=[];}
  static getInstance(){if(!Logger.#instance)Logger.#instance=new Logger();return Logger.#instance;}
  log(lvl,msg){this._logs.push(\`[\${lvl}] \${msg}\`);console.log(this._logs.at(-1));}
  get count(){return this._logs.length;}
  clear(){this._logs=[];console.log("已清空");}
}
const lg=Logger.getInstance();
lg.log("INFO","啟動");lg.log("WARN","警告");
console.log(\`共 \${lg.count} 筆\`);
lg.clear();
console.log(\`清空後 \${lg.count} 筆\`);`,
        },
      },
      {
        id: "observer-pattern",
        title: { "zh-TW": "觀察者模式", en: "Observer Pattern" },
        content: {
          "zh-TW": `## 觀察者模式（Observer Pattern）

「一對多」依賴：主題（Subject）狀態改變 → 自動通知所有觀察者。

**JavaScript 內建的 EventEmitter 思維：**

\`\`\`js
class EventEmitter {
  on(event, listener)  // 訂閱
  off(event, listener) // 取消訂閱
  emit(event, data)    // 發布
}
\`\`\`

DOM 的 \`addEventListener\` 就是觀察者模式的應用！`,
          en: `## Observer Pattern

One-to-many dependency: Subject state changes → all observers notified automatically.

**JavaScript's EventEmitter mindset:**

\`\`\`js
class EventEmitter {
  on(event, listener)  // subscribe
  off(event, listener) // unsubscribe
  emit(event, data)    // publish
}
\`\`\`

DOM's \`addEventListener\` is observer pattern in action!`,
        },
        defaultCode: `class EventEmitter {
  constructor() { this._listeners = {}; }

  on(event, listener) {
    (this._listeners[event] ||= []).push(listener);
    return this; // 支援鏈式呼叫
  }

  off(event, listener) {
    this._listeners[event] = (this._listeners[event] || [])
      .filter(l => l !== listener);
  }

  emit(event, data) {
    (this._listeners[event] || []).forEach(l => l(data));
  }
}

class StockMarket extends EventEmitter {
  #price = 0;

  setPrice(price) {
    const change = this.#price ? ((price-this.#price)/this.#price*100) : 0;
    this.#price = price;
    this.emit("priceChange", { price, change });
  }
}

const market = new StockMarket();

const investorA = ({ price, change }) =>
  console.log(\`投資者A：\${price} 元（\${change > 0 ? "+" : ""}\${change.toFixed(1)}%）\`);

const autoBot = ({ price }) =>
  console.log(\`交易機器人：\${price < 100 ? "買入" : "賣出"}！\`);

market.on("priceChange", investorA).on("priceChange", autoBot);

market.setPrice(100);
market.setPrice(85);
market.off("priceChange", autoBot); // 機器人退出
market.setPrice(110);`,
        exercise: {
          question: {
            "zh-TW": "新增 once(event, listener) 方法，讓監聽器只觸發一次後自動移除。",
            en: "Add an once(event, listener) method that fires the listener only once then auto-removes it.",
          },
          hint: {
            "zh-TW": "包裝一個 wrapper 函式，觸發後呼叫 this.off(event, wrapper)",
            en: "Wrap a wrapper function that calls this.off(event, wrapper) after firing",
          },
          answer: `class EventEmitter {
  constructor(){this._listeners={};}
  on(event,listener){(this._listeners[event]||=[]).push(listener);return this;}
  off(event,listener){this._listeners[event]=(this._listeners[event]||[]).filter(l=>l!==listener);}
  emit(event,data){(this._listeners[event]||[]).forEach(l=>l(data));}
  once(event,listener){
    const wrapper=(data)=>{listener(data);this.off(event,wrapper);};
    this.on(event,wrapper);
  }
}
const emitter=new EventEmitter();
emitter.once("click",(d)=>console.log("只觸發一次：",d));
emitter.emit("click","第一次"); // 觸發
emitter.emit("click","第二次"); // 不觸發`,
        },
      },
    ],
  },
];

export default chapters;
