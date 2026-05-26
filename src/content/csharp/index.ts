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
          "zh-TW": `## C# 簡介

C# 是微軟開發的現代物件導向語言，主要用於：
- Windows 桌面應用程式（WPF / WinForms）
- Unity 遊戲開發
- ASP.NET 網頁後端
- 跨平台應用（.NET）

### 程式結構

\`\`\`csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
\`\`\`

- \`using System;\`：引入標準函式庫
- \`class Program\`：定義一個類別
- \`static void Main()\`：程式入口點
- \`Console.WriteLine(...)\`：輸出文字並換行

> **執行需求**：需安裝 .NET SDK 或 Mono。`,
          en: `## Introduction to C#

C# is Microsoft's modern object-oriented language, mainly used for:
- Windows desktop apps (WPF / WinForms)
- Unity game development
- ASP.NET web backend
- Cross-platform apps (.NET)

### Program Structure

\`\`\`csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
\`\`\`

- \`using System;\`: imports the standard library
- \`class Program\`: defines a class
- \`static void Main()\`: the program entry point
- \`Console.WriteLine(...)\`: prints text with a newline

> **Runtime requirement**: Requires .NET SDK or Mono.`,
        },
        defaultCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數與型別", en: "Variables & Types" },
        content: {
          "zh-TW": `## C# 變數與資料型別

C# 是**靜態型別**語言，每個變數都有明確的型別。

### 常見型別

| 型別 | 說明 | 範例 |
|------|------|------|
| \`int\` | 整數 | \`42\` |
| \`double\` | 浮點數 | \`3.14\` |
| \`string\` | 字串 | \`"Hello"\` |
| \`bool\` | 布林值 | \`true\` / \`false\` |

### var（型別推斷）

使用 \`var\` 讓編譯器自動推斷型別：

\`\`\`csharp
var name = "Alice";   // string
var age = 25;         // int
var price = 9.99;     // double
\`\`\`

### const（常數）

用 \`const\` 宣告不可變更的值：

\`\`\`csharp
const double Pi = 3.14159;
const int MaxScore = 100;
\`\`\`

### 字串插值

C# 支援用 \`$\` 符號進行字串插值，比串接更易讀：

\`\`\`csharp
string name = "Alice";
int age = 25;
Console.WriteLine($"{name} is {age} years old.");
\`\`\``,
          en: `## C# Variables & Data Types

C# is a **statically typed** language — every variable has a defined type.

### Common Types

| Type | Description | Example |
|------|-------------|---------|
| \`int\` | Integer | \`42\` |
| \`double\` | Floating-point | \`3.14\` |
| \`string\` | Text | \`"Hello"\` |
| \`bool\` | Boolean | \`true\` / \`false\` |

### var (Type Inference)

Use \`var\` and let the compiler infer the type:

\`\`\`csharp
var name = "Alice";   // string
var age = 25;         // int
var price = 9.99;     // double
\`\`\`

### const (Constants)

Use \`const\` to declare values that cannot change:

\`\`\`csharp
const double Pi = 3.14159;
const int MaxScore = 100;
\`\`\`

### String Interpolation

C# supports \`$\`-prefixed string interpolation for cleaner formatting:

\`\`\`csharp
string name = "Alice";
int age = 25;
Console.WriteLine($"{name} is {age} years old.");
\`\`\``,
        },
        defaultCode: `using System;

class Program {
    static void Main() {
        int age = 25;
        double salary = 50000.0;
        bool isStudent = false;
        string name = "Alice";
        var city = "Taipei";
        const int MaxAge = 120;

        Console.WriteLine($"{name} is {age} years old.");
        Console.WriteLine($"Salary: {salary}");
        Console.WriteLine($"Is student: {isStudent}");
        Console.WriteLine($"City: {city}");
        Console.WriteLine($"Max age constant: {MaxAge}");
    }
}`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## C# 運算子

### 算術運算子

| 運算子 | 說明 | 範例 |
|--------|------|------|
| \`+\` | 加法 | \`5 + 3\` → \`8\` |
| \`-\` | 減法 | \`5 - 3\` → \`2\` |
| \`*\` | 乘法 | \`5 * 3\` → \`15\` |
| \`/\` | 除法 | \`10 / 3\` → \`3\`（整數除法） |
| \`%\` | 取餘數 | \`10 % 3\` → \`1\` |

> 兩個整數相除結果為整數。若需小數，將其中一個轉型為 \`double\`。

### 比較運算子

回傳 \`bool\` 值：\`==\` \`!=\` \`>\` \`<\` \`>=\` \`<=\`

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`&&\` | 且（AND） |
| \`||\` | 或（OR） |
| \`!\` | 非（NOT） |

### 遞增 / 遞減

\`\`\`csharp
int x = 5;
x++;  // x 變成 6
x--;  // x 變成 5
\`\`\``,
          en: `## C# Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| \`+\` | Addition | \`5 + 3\` → \`8\` |
| \`-\` | Subtraction | \`5 - 3\` → \`2\` |
| \`*\` | Multiplication | \`5 * 3\` → \`15\` |
| \`/\` | Division | \`10 / 3\` → \`3\` (integer division) |
| \`%\` | Modulus | \`10 % 3\` → \`1\` |

> Dividing two integers yields an integer. Cast to \`double\` for decimal results.

### Comparison Operators

Return \`bool\`: \`==\` \`!=\` \`>\` \`<\` \`>=\` \`<=\`

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`&&\` | AND |
| \`||\` | OR |
| \`!\` | NOT |

### Increment / Decrement

\`\`\`csharp
int x = 5;
x++;  // x becomes 6
x--;  // x becomes 5
\`\`\``,
        },
        defaultCode: `using System;

class Program {
    static void Main() {
        int a = 10, b = 3;

        // 算術運算
        Console.WriteLine($"a + b = {a + b}");
        Console.WriteLine($"a - b = {a - b}");
        Console.WriteLine($"a * b = {a * b}");
        Console.WriteLine($"a / b = {a / b}");            // 整數除法
        Console.WriteLine($"a % b = {a % b}");
        Console.WriteLine($"a / (double)b = {a / (double)b}");

        // 比較運算
        Console.WriteLine($"a > b: {a > b}");
        Console.WriteLine($"a == b: {a == b}");

        // 邏輯運算
        bool x = true, y = false;
        Console.WriteLine($"x && y: {x && y}");
        Console.WriteLine($"x || y: {x || y}");
        Console.WriteLine($"!x: {!x}");
    }
}`,
      },
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## C# 條件判斷

### if / else if / else

\`\`\`csharp
int score = 85;

if (score >= 90) {
    Console.WriteLine("A");
} else if (score >= 80) {
    Console.WriteLine("B");
} else if (score >= 70) {
    Console.WriteLine("C");
} else {
    Console.WriteLine("F");
}
\`\`\`

### 三元運算子（Ternary Operator）

簡短的 if/else 可以用三元運算子表達：

\`\`\`csharp
int age = 20;
string status = age >= 18 ? "成年" : "未成年";
Console.WriteLine(status);
\`\`\`

語法：\`條件 ? 為真時的值 : 為假時的值\`

### 組合條件

\`\`\`csharp
bool hasTicket = true;
int age = 15;

if (hasTicket && age >= 18) {
    Console.WriteLine("可以入場");
} else if (hasTicket) {
    Console.WriteLine("需要家長陪同");
} else {
    Console.WriteLine("無法入場");
}
\`\`\``,
          en: `## C# Conditionals

### if / else if / else

\`\`\`csharp
int score = 85;

if (score >= 90) {
    Console.WriteLine("A");
} else if (score >= 80) {
    Console.WriteLine("B");
} else if (score >= 70) {
    Console.WriteLine("C");
} else {
    Console.WriteLine("F");
}
\`\`\`

### Ternary Operator

A short if/else can be written as a ternary expression:

\`\`\`csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
Console.WriteLine(status);
\`\`\`

Syntax: \`condition ? valueIfTrue : valueIfFalse\`

### Combining Conditions

\`\`\`csharp
bool hasTicket = true;
int age = 15;

if (hasTicket && age >= 18) {
    Console.WriteLine("Entry allowed");
} else if (hasTicket) {
    Console.WriteLine("Must be accompanied by a parent");
} else {
    Console.WriteLine("Entry denied");
}
\`\`\``,
        },
        defaultCode: `using System;

class Program {
    static void Main() {
        int score = 85;

        if (score >= 90) {
            Console.WriteLine("成績：A");
        } else if (score >= 80) {
            Console.WriteLine("成績：B");
        } else if (score >= 70) {
            Console.WriteLine("成績：C");
        } else {
            Console.WriteLine("成績：F");
        }

        // 三元運算子
        int age = 20;
        string status = age >= 18 ? "成年" : "未成年";
        Console.WriteLine($"年齡 {age}：{status}");

        // 組合條件
        bool hasTicket = true;
        if (hasTicket && age >= 18) {
            Console.WriteLine("可以入場");
        } else {
            Console.WriteLine("無法入場");
        }
    }
}`,
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## C# 迴圈

### for 迴圈

適合**已知次數**的重複：

\`\`\`csharp
for (int i = 0; i < 5; i++) {
    Console.WriteLine($"i = {i}");
}
\`\`\`

### while 迴圈

條件成立時持續執行：

\`\`\`csharp
int count = 0;
while (count < 5) {
    Console.WriteLine($"count = {count}");
    count++;
}
\`\`\`

### foreach 迴圈

用於遍歷集合或陣列，語法簡潔：

\`\`\`csharp
string[] fruits = {"蘋果", "香蕉", "橘子"};
foreach (string fruit in fruits) {
    Console.WriteLine(fruit);
}
\`\`\`

### break 與 continue

- \`break\`：立即跳出迴圈
- \`continue\`：跳過本次迭代，繼續下一次

\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // 跳過 3
    if (i == 7) break;     // 在 7 停止
    Console.WriteLine(i);
}
\`\`\``,
          en: `## C# Loops

### for Loop

Best when the **number of iterations is known**:

\`\`\`csharp
for (int i = 0; i < 5; i++) {
    Console.WriteLine($"i = {i}");
}
\`\`\`

### while Loop

Runs while a condition is true:

\`\`\`csharp
int count = 0;
while (count < 5) {
    Console.WriteLine($"count = {count}");
    count++;
}
\`\`\`

### foreach Loop

Cleanly iterates over collections or arrays:

\`\`\`csharp
string[] fruits = {"Apple", "Banana", "Orange"};
foreach (string fruit in fruits) {
    Console.WriteLine(fruit);
}
\`\`\`

### break and continue

- \`break\`: exits the loop immediately
- \`continue\`: skips the current iteration

\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // skip 3
    if (i == 7) break;     // stop at 7
    Console.WriteLine(i);
}
\`\`\``,
        },
        defaultCode: `using System;

class Program {
    static void Main() {
        // for 迴圈
        Console.WriteLine("=== for 迴圈 ===");
        for (int i = 1; i <= 5; i++) {
            Console.WriteLine($"i = {i}");
        }

        // while 迴圈
        Console.WriteLine("=== while 迴圈 ===");
        int count = 10;
        while (count > 0) {
            Console.WriteLine($"倒數：{count}");
            count -= 3;
        }

        // foreach 迴圈
        Console.WriteLine("=== foreach 迴圈 ===");
        string[] fruits = {"蘋果", "香蕉", "橘子"};
        foreach (string fruit in fruits) {
            Console.WriteLine($"水果：{fruit}");
        }

        // break / continue
        Console.WriteLine("=== break/continue ===");
        for (int i = 0; i < 10; i++) {
            if (i == 3) continue;
            if (i == 7) break;
            Console.Write(i + " ");
        }
        Console.WriteLine();
    }
}`,
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式與方法", en: "Functions & Methods" },
    lessons: [
      {
        id: "methods",
        title: { "zh-TW": "方法（Methods）", en: "Methods" },
        content: {
          "zh-TW": `## C# 方法

方法讓你將程式邏輯封裝成可**重複呼叫**的單元。

### 定義靜態方法

\`\`\`csharp
static int Add(int a, int b) {
    return a + b;
}
\`\`\`

### 方法結構

\`\`\`
[修飾子] 回傳型別 方法名稱(參數列表) {
    // 方法主體
    return 值;
}
\`\`\`

- **回傳型別**：方法回傳的型別；不回傳值時使用 \`void\`
- **參數**：呼叫時傳入的輸入
- **return**：結束方法並回傳結果

### void 方法

\`\`\`csharp
static void Greet(string name) {
    Console.WriteLine($"Hello, {name}!");
}
\`\`\`

### 選擇性參數（Default Parameters）

C# 支援為參數設定預設值：

\`\`\`csharp
static void Greet(string name, string greeting = "Hello") {
    Console.WriteLine($"{greeting}, {name}!");
}

Greet("Alice");           // Hello, Alice!
Greet("Bob", "Hi");       // Hi, Bob!
\`\`\``,
          en: `## C# Methods

Methods encapsulate logic into **reusable** callable units.

### Defining Static Methods

\`\`\`csharp
static int Add(int a, int b) {
    return a + b;
}
\`\`\`

### Method Structure

\`\`\`
[modifier] returnType MethodName(parameterList) {
    // method body
    return value;
}
\`\`\`

- **Return type**: the type returned; use \`void\` for no return value
- **Parameters**: inputs passed when calling the method
- **return**: ends the method and returns a result

### void Methods

\`\`\`csharp
static void Greet(string name) {
    Console.WriteLine($"Hello, {name}!");
}
\`\`\`

### Default Parameters

C# supports default values for parameters:

\`\`\`csharp
static void Greet(string name, string greeting = "Hello") {
    Console.WriteLine($"{greeting}, {name}!");
}

Greet("Alice");           // Hello, Alice!
Greet("Bob", "Hi");       // Hi, Bob!
\`\`\``,
        },
        defaultCode: `using System;

class Program {
    static void Greet(string name, string greeting = "Hello") {
        Console.WriteLine($"{greeting}, {name}!");
    }

    static int Add(int a, int b) {
        return a + b;
    }

    static double CircleArea(double radius) {
        return Math.PI * radius * radius;
    }

    static bool IsEven(int n) {
        return n % 2 == 0;
    }

    static void Main() {
        Greet("Alice");
        Greet("Bob", "Hi");

        int sum = Add(3, 7);
        Console.WriteLine($"3 + 7 = {sum}");

        double area = CircleArea(5.0);
        Console.WriteLine($"半徑 5 的圓面積：{area:F2}");

        Console.WriteLine($"10 是偶數嗎？{IsEven(10)}");
        Console.WriteLine($"7 是偶數嗎？{IsEven(7)}");
    }
}`,
      },
      {
        id: "arrays",
        title: { "zh-TW": "陣列與 List", en: "Arrays & List<T>" },
        content: {
          "zh-TW": `## C# 陣列與 List

### 陣列（固定大小）

\`\`\`csharp
// 直接初始化
int[] scores = {90, 85, 78, 92, 88};

// 指定大小
int[] numbers = new int[5];
numbers[0] = 10;
\`\`\`

陣列大小固定，索引從 **0** 開始，用 \`.Length\` 取得長度。

### 遍歷陣列

\`\`\`csharp
foreach (int score in scores) {
    Console.WriteLine(score);
}
\`\`\`

### List<T>（動態大小）

\`List<T>\` 是可以**動態增減**元素的集合：

\`\`\`csharp
using System.Collections.Generic;

List<string> names = new List<string>();
names.Add("Alice");
names.Add("Bob");
names.Remove("Alice");
Console.WriteLine(names.Count);  // 1
\`\`\`

### 陣列 vs List

| 特性 | 陣列 | List<T> |
|------|------|---------|
| 大小 | 固定 | 動態 |
| 語法 | \`int[]\` | \`List<int>\` |
| 長度 | \`.Length\` | \`.Count\` |
| 新增元素 | 不支援 | \`.Add()\` |`,
          en: `## C# Arrays & List

### Arrays (Fixed Size)

\`\`\`csharp
// Initialize with values
int[] scores = {90, 85, 78, 92, 88};

// Specify size
int[] numbers = new int[5];
numbers[0] = 10;
\`\`\`

Arrays have a fixed size; indexes start at **0**; use \`.Length\` for the size.

### Iterating Arrays

\`\`\`csharp
foreach (int score in scores) {
    Console.WriteLine(score);
}
\`\`\`

### List<T> (Dynamic Size)

\`List<T>\` is a collection that can **grow and shrink**:

\`\`\`csharp
using System.Collections.Generic;

List<string> names = new List<string>();
names.Add("Alice");
names.Add("Bob");
names.Remove("Alice");
Console.WriteLine(names.Count);  // 1
\`\`\`

### Array vs List

| Feature | Array | List<T> |
|---------|-------|---------|
| Size | Fixed | Dynamic |
| Syntax | \`int[]\` | \`List<int>\` |
| Length | \`.Length\` | \`.Count\` |
| Add element | Not supported | \`.Add()\` |`,
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // 陣列
        int[] scores = {90, 85, 78, 92, 88};
        int total = 0;
        foreach (int s in scores) total += s;
        Console.WriteLine($"平均分數：{(double)total / scores.Length:F1}");

        int max = scores[0];
        foreach (int s in scores) if (s > max) max = s;
        Console.WriteLine($"最高分：{max}");

        // List<T>
        List<string> names = new List<string>();
        names.Add("Alice");
        names.Add("Bob");
        names.Add("Charlie");
        Console.WriteLine($"名單人數：{names.Count}");

        names.Remove("Bob");
        Console.WriteLine($"移除 Bob 後人數：{names.Count}");

        foreach (string name in names) {
            Console.WriteLine($"  - {name}");
        }
    }
}`,
      },
    ],
  },
  {
    id: "oop",
    title: { "zh-TW": "物件導向", en: "Object-Oriented Programming" },
    lessons: [
      {
        id: "classes",
        title: { "zh-TW": "類別與物件", en: "Classes & Objects" },
        content: {
          "zh-TW": `## C# 類別與物件

**物件導向程式設計（OOP）**是 C# 的核心。

### 類別（Class）

類別是物件的**藍圖**，定義資料與行為：

\`\`\`csharp
class Dog {
    // 屬性（Properties）
    public string Name { get; set; }
    public int Age { get; set; }

    // 建構子
    public Dog(string name, int age) {
        Name = name;
        Age = age;
    }

    // 方法
    public void Bark() {
        Console.WriteLine($"{Name} says: Woof!");
    }
}
\`\`\`

### 建立物件

使用 \`new\` 關鍵字建立物件：

\`\`\`csharp
Dog myDog = new Dog("Buddy", 3);
myDog.Bark();
Console.WriteLine($"{myDog.Name} is {myDog.Age} years old.");
\`\`\`

### 屬性（Properties）

C# 的屬性比 Java 的欄位更封裝，使用 \`get\` 和 \`set\` 存取器控制讀寫：

\`\`\`csharp
public string Name { get; set; }       // 可讀可寫
public int Age { get; private set; }   // 只能在類別內部設值
\`\`\`

### 建構子

與類別同名，在 \`new\` 時自動呼叫，用來初始化屬性。`,
          en: `## C# Classes & Objects

**Object-Oriented Programming (OOP)** is the heart of C#.

### Classes

A class is a **blueprint** for objects, defining data and behavior:

\`\`\`csharp
class Dog {
    // Properties
    public string Name { get; set; }
    public int Age { get; set; }

    // Constructor
    public Dog(string name, int age) {
        Name = name;
        Age = age;
    }

    // Method
    public void Bark() {
        Console.WriteLine($"{Name} says: Woof!");
    }
}
\`\`\`

### Creating Objects

Use the \`new\` keyword to create an object:

\`\`\`csharp
Dog myDog = new Dog("Buddy", 3);
myDog.Bark();
Console.WriteLine($"{myDog.Name} is {myDog.Age} years old.");
\`\`\`

### Properties

C# properties are more encapsulated than Java fields, using \`get\` and \`set\` accessors:

\`\`\`csharp
public string Name { get; set; }       // readable and writable
public int Age { get; private set; }   // only settable inside the class
\`\`\`

### Constructors

Have the same name as the class, called automatically on \`new\`, used to initialize properties.`,
        },
        defaultCode: `using System;

class Dog {
    public string Name { get; set; }
    public int Age { get; set; }
    public string Breed { get; set; }

    public Dog(string name, int age, string breed) {
        Name = name;
        Age = age;
        Breed = breed;
    }

    public void Bark() {
        Console.WriteLine($"{Name} says: Woof!");
    }

    public void Introduce() {
        Console.WriteLine($"我是 {Name}，{Age} 歲的 {Breed}。");
    }
}

class Program {
    static void Main() {
        Dog dog1 = new Dog("Buddy", 3, "黃金獵犬");
        Dog dog2 = new Dog("Max", 5, "德國牧羊犬");

        dog1.Introduce();
        dog1.Bark();

        dog2.Introduce();
        dog2.Bark();

        Console.WriteLine($"{dog1.Name} 比 {dog2.Name} 年輕嗎？{dog1.Age < dog2.Age}");
    }
}`,
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

給定整數陣列與目標值，回傳兩個相加等於目標值的索引。

**核心技巧：Dictionary<int, int>**

C# 的 \`Dictionary\` 等同於雜湊表，提供 O(1) 查找：

\`\`\`csharp
var seen = new Dictionary<int, int>(); // num -> index
seen.TryGetValue(complement, out int idx)
\`\`\``,
          en: `## LeetCode #1 — Two Sum

Return indices of two numbers that sum to target.

**Key technique: Dictionary<int, int>**

C#'s \`Dictionary\` is a hash map with O(1) lookup:

\`\`\`csharp
var seen = new Dictionary<int, int>(); // num -> index
seen.TryGetValue(complement, out int idx)
\`\`\``,
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Solution {
    static int[] TwoSum(int[] nums, int target) {
        var seen = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (seen.TryGetValue(complement, out int j)) {
                return new int[] { j, i };
            }
            seen[nums[i]] = i;
        }
        return Array.Empty<int>();
    }

    static void Main() {
        Console.WriteLine(string.Join(", ", TwoSum(new[] {2,7,11,15}, 9)));  // 0, 1
        Console.WriteLine(string.Join(", ", TwoSum(new[] {3,2,4}, 6)));      // 1, 2
        Console.WriteLine(string.Join(", ", TwoSum(new[] {3,3}, 6)));        // 0, 1
    }
}`,
        exercise: {
          question: {
            "zh-TW": "改用 ContainsKey 取代 TryGetValue，測試效果是否相同。",
            en: "Rewrite using ContainsKey instead of TryGetValue and verify the output is the same.",
          },
          hint: {
            "zh-TW": "seen.ContainsKey(complement) 後再用 seen[complement] 取值",
            en: "Use seen.ContainsKey(complement) then seen[complement] to get the value",
          },
          answer: `using System;
using System.Collections.Generic;
class Solution {
    static int[] TwoSum(int[] nums, int target) {
        var seen = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (seen.ContainsKey(complement)) {
                return new[] { seen[complement], i };
            }
            seen[nums[i]] = i;
        }
        return Array.Empty<int>();
    }
    static void Main() {
        Console.WriteLine(string.Join(", ", TwoSum(new[] {2,7,11,15}, 9))); // 0, 1
    }
}`,
        },
      },
      {
        id: "valid-parentheses",
        title: { "zh-TW": "#20 有效括號", en: "#20 Valid Parentheses" },
        content: {
          "zh-TW": `## LeetCode #20 — Valid Parentheses（有效括號）

判斷括號字串是否合法配對。

**核心技巧：Stack<char>**

C# 使用 \`Stack<char>\` 配合 \`Push\`、\`Pop\`、\`Peek\`、\`Count\` 操作：

\`\`\`csharp
var stack = new Stack<char>();
stack.Count == 0  // 堆疊為空
\`\`\``,
          en: `## LeetCode #20 — Valid Parentheses

Determine if a bracket string is validly matched.

**Key technique: Stack<char>**

C# uses \`Stack<char>\` with \`Push\`, \`Pop\`, \`Peek\`, \`Count\`:

\`\`\`csharp
var stack = new Stack<char>();
stack.Count == 0  // stack is empty
\`\`\``,
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Solution {
    static bool IsValid(string s) {
        var stack = new Stack<char>();
        foreach (char c in s) {
            if (c == '(' || c == '{' || c == '[') {
                stack.Push(c);
            } else {
                if (stack.Count == 0) return false;
                char top = stack.Pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }
        return stack.Count == 0;
    }

    static void Main() {
        Console.WriteLine(IsValid("()"));       // True
        Console.WriteLine(IsValid("()[]{}"));   // True
        Console.WriteLine(IsValid("(]"));       // False
        Console.WriteLine(IsValid("{[]}"));     // True
    }
}`,
        exercise: {
          question: {
            "zh-TW": "用 Dictionary<char,char> 改寫括號對應表，讓右括號查詢更簡潔。",
            en: "Refactor using Dictionary<char,char> for bracket pairs to simplify the lookup logic.",
          },
          hint: {
            "zh-TW": "var map = new Dictionary<char,char>{{')','('},{'}','{'},{']','['}}",
            en: "var map = new Dictionary<char,char>{{')','('},{'}','{'},{']','['}}",
          },
          answer: `using System;
using System.Collections.Generic;
class Solution {
    static bool IsValid(string s) {
        var stack = new Stack<char>();
        var map = new Dictionary<char,char>{{')','{'},{'}',' '},{']','['}};
        var mp = new Dictionary<char,char>{{')', '('}, {'}', '{'}, {']', '['}};
        foreach (char c in s) {
            if (mp.ContainsKey(c)) {
                if (stack.Count == 0 || stack.Pop() != mp[c]) return false;
            } else {
                stack.Push(c);
            }
        }
        return stack.Count == 0;
    }
    static void Main() {
        Console.WriteLine(IsValid("()[]{}"));  // True
        Console.WriteLine(IsValid("([)]"));    // False
    }
}`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

找出連續子陣列的最大總和。

**Kadane's Algorithm — O(n)：**

C# 使用 \`Math.Max\` 函式：

\`\`\`csharp
current = Math.Max(nums[i], current + nums[i]);
best    = Math.Max(best, current);
\`\`\`

LINQ 的 \`nums.Max()\` 只能取整個陣列最大值，此處不適用。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

C# uses \`Math.Max\`:

\`\`\`csharp
current = Math.Max(nums[i], current + nums[i]);
best    = Math.Max(best, current);
\`\`\`

LINQ's \`nums.Max()\` only finds the array maximum, not applicable here.`,
        },
        defaultCode: `using System;

class Solution {
    static int MaxSubArray(int[] nums) {
        int current = nums[0], best = nums[0];
        for (int i = 1; i < nums.Length; i++) {
            current = Math.Max(nums[i], current + nums[i]);
            best = Math.Max(best, current);
        }
        return best;
    }

    static void Main() {
        Console.WriteLine(MaxSubArray(new[] {-2,1,-3,4,-1,2,1,-5,4})); // 6
        Console.WriteLine(MaxSubArray(new[] {1}));                       // 1
        Console.WriteLine(MaxSubArray(new[] {5,4,-1,7,8}));            // 23
    }
}`,
        exercise: {
          question: {
            "zh-TW": "全部為負數時（如 [-3,-1,-2]），確認回傳 -1（最大的負數）並解釋為什麼初始值設 nums[0] 而非 0。",
            en: "With all-negative input (e.g. [-3,-1,-2]), confirm the result is -1 (the least negative). Explain why initializing with nums[0] rather than 0 is correct.",
          },
          hint: {
            "zh-TW": "若初始值為 0，全負陣列會錯誤回傳 0（沒有選任何元素）",
            en: "If initialized to 0, an all-negative array incorrectly returns 0 (selecting no elements)",
          },
          answer: `using System;
class Solution {
    static int MaxSubArray(int[] nums) {
        int current = nums[0], best = nums[0]; // 必須從 nums[0] 開始
        for (int i = 1; i < nums.Length; i++) {
            current = Math.Max(nums[i], current + nums[i]);
            best = Math.Max(best, current);
        }
        return best;
    }
    static void Main() {
        Console.WriteLine(MaxSubArray(new[] {-3,-1,-2})); // -1 (正確)
    }
}`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階，每次 1 或 2 階，共幾種方法？

**動態規劃（費波那契）：**

C# 支援元組（tuple）交換，讓程式碼更簡潔：

\`\`\`csharp
(prev2, prev1) = (prev1, prev2 + prev1);
\`\`\`

這是 C# 7.0+ 語法，與 Python 的多重賦值類似。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**Dynamic programming (Fibonacci):**

C# supports tuple deconstruction for clean swaps:

\`\`\`csharp
(prev2, prev1) = (prev1, prev2 + prev1);
\`\`\`

This is C# 7.0+ syntax, similar to Python's simultaneous assignment.`,
        },
        defaultCode: `using System;

class Solution {
    static int ClimbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            (prev2, prev1) = (prev1, prev2 + prev1);
        }
        return prev1;
    }

    static void Main() {
        for (int i = 1; i <= 7; i++) {
            Console.WriteLine($"n={i}: {ClimbStairs(i)} 種方法");
        }
    }
}`,
        exercise: {
          question: {
            "zh-TW": "用遞迴加 Dictionary<int,int> memoization 改寫 ClimbStairs，計算 n=15 的結果（應為 987）。",
            en: "Rewrite ClimbStairs using recursion with Dictionary<int,int> memoization. Compute n=15 (should be 987).",
          },
          hint: {
            "zh-TW": "static Dictionary<int,int> memo = new(); 在遞迴前先查表",
            en: "static Dictionary<int,int> memo = new(); check memo before recursing",
          },
          answer: `using System;
using System.Collections.Generic;
class Solution {
    static Dictionary<int,int> memo = new();
    static int ClimbStairs(int n) {
        if (n <= 2) return n;
        if (memo.TryGetValue(n, out int cached)) return cached;
        int result = ClimbStairs(n-1) + ClimbStairs(n-2);
        memo[n] = result;
        return result;
    }
    static void Main() {
        Console.WriteLine(ClimbStairs(15)); // 987
    }
}`,
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

三根柱子 A、B、C，n 個圓盤從 A 移到 C，規則：每次一個、大不疊小。

**遞迴策略：**
1. 把 n-1 個盤從 A 移到 B（C 輔助）
2. 把最大盤從 A 移到 C
3. 把 n-1 個盤從 B 移到 C（A 輔助）

移動次數：**2ⁿ - 1**`,
          en: `## Tower of Hanoi

Three pegs A, B, C — move n discs from A to C. Rules: one at a time, never larger on smaller.

Moves required: **2ⁿ - 1**`,
        },
        defaultCode: `using System;

class Solution {
    static void Hanoi(int n, char from, char to, char aux) {
        if (n == 1) {
            Console.WriteLine($"  移動第 1 個碟子：{from} → {to}");
            return;
        }
        Hanoi(n - 1, from, aux, to);
        Console.WriteLine($"  移動第 {n} 個碟子：{from} → {to}");
        Hanoi(n - 1, aux, to, from);
    }

    static void Main() {
        for (int n = 1; n <= 4; n++) {
            Console.WriteLine($"n={n}（需 {(1<<n)-1} 步）：");
            Hanoi(n, 'A', 'C', 'B');
            Console.WriteLine();
        }
    }
}`,
        exercise: {
          question: {
            "zh-TW": "改為回傳 int 步數的版本，確認 n=5 時為 31。",
            en: "Modify to return int step count. Verify n=5 = 31.",
          },
          hint: {
            "zh-TW": "return Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
            en: "return Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
          },
          answer: `using System;
class Solution {
    static int Hanoi(int n, char from, char to, char aux) {
        if (n == 1) { Console.WriteLine($"  {from} → {to}"); return 1; }
        int a = Hanoi(n-1, from, aux, to);
        Console.WriteLine($"  {from} → {to}");
        return a + 1 + Hanoi(n-1, aux, to, from);
    }
    static void Main() {
        Console.WriteLine($"共 {Hanoi(5,'A','C','B')} 步"); // 31
    }
}`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

0/1 矩陣表示迷宮，老鼠從 [0,0] 走到 [n-1,n-1]。

**C# 實作：** 用 int[,] 二維陣列，巢狀函式（local function）實作遞迴。

\`\`\`csharp
bool Backtrack(int x, int y) {
    if (x==n-1 && y==n-1) { sol[x,y]=1; return true; }
    ...
}
\`\`\``,
          en: `## Rat in a Maze (Backtracking)

0/1 matrix maze, rat from [0,0] to [n-1,n-1].

**C# implementation:** Use int[,] for 2D arrays; use local functions for nested recursion.`,
        },
        defaultCode: `using System;

class Solution {
    static void SolveMaze(int[,] maze) {
        int n = maze.GetLength(0);
        int[,] sol = new int[n, n];

        bool IsSafe(int x, int y) =>
            x >= 0 && x < n && y >= 0 && y < n && maze[x, y] == 1;

        bool Backtrack(int x, int y) {
            if (x == n-1 && y == n-1) { sol[x, y] = 1; return true; }
            if (IsSafe(x, y)) {
                sol[x, y] = 1;
                if (Backtrack(x+1, y) || Backtrack(x, y+1)) return true;
                sol[x, y] = 0;
            }
            return false;
        }

        if (Backtrack(0, 0)) {
            Console.WriteLine("找到路徑：");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++)
                    Console.Write(sol[i,j] == 1 ? "■ " : "□ ");
                Console.WriteLine();
            }
        } else Console.WriteLine("無解");
    }

    static void Main() {
        int[,] maze = { {1,0,0,0}, {1,1,0,1}, {0,1,0,0}, {0,1,1,1} };
        SolveMaze(maze);
    }
}`,
        exercise: {
          question: {
            "zh-TW": "修改程式，允許四個方向移動（需防止重複拜訪），用 bool[,] visited 記錄。",
            en: "Modify to support 4-direction movement (prevent revisits) using bool[,] visited.",
          },
          hint: {
            "zh-TW": "int[][] dirs = {new[]{1,0},new[]{-1,0},new[]{0,1},new[]{0,-1}}",
            en: "int[][] dirs = {new[]{1,0},new[]{-1,0},new[]{0,1},new[]{0,-1}}",
          },
          answer: `using System;
class Solution {
    static void SolveMaze(int[,] maze) {
        int n=maze.GetLength(0);
        int[,] sol=new int[n,n];
        bool[,] vis=new bool[n,n];
        int[][] dirs={{1,0},{-1,0},{0,1},{0,-1}};
        // dirs 需宣告為 int[][]
        int[,] d = {{1,0},{-1,0},{0,1},{0,-1}};
        bool IsSafe(int x,int y)=>x>=0&&x<n&&y>=0&&y<n&&maze[x,y]==1&&!vis[x,y];
        bool Bt(int x,int y){
            if(x==n-1&&y==n-1){sol[x,y]=1;return true;}
            if(IsSafe(x,y)){sol[x,y]=1;vis[x,y]=true;
                for(int k=0;k<4;k++) if(Bt(x+d[k,0],y+d[k,1]))return true;
                sol[x,y]=0;vis[x,y]=false;}
            return false;
        }
        Bt(0,0);
        for(int i=0;i<n;i++){for(int j=0;j<n;j++)Console.Write(sol[i,j]==1?"■ ":"□ ");Console.WriteLine();}
    }
    static void Main(){SolveMaze(new int[,]{{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}});}
}`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，任兩皇后不互攻。

**C# 回溯法：** \`board[row] = col\`

安全判斷：
\`\`\`csharp
board[r] == col
Math.Abs(board[r]-col) == Math.Abs(r-row)
\`\`\`

8 皇后共 **92** 種解。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**C# backtracking:** \`board[row] = col\`

Safety check:
\`\`\`csharp
board[r] == col
Math.Abs(board[r]-col) == Math.Abs(r-row)
\`\`\`

**92** solutions for N=8.`,
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Solution {
    static List<int[]> SolveNQueens(int n) {
        var solutions = new List<int[]>();
        int[] board = new int[n];
        Array.Fill(board, -1);

        bool IsSafe(int row, int col) {
            for (int r = 0; r < row; r++)
                if (board[r] == col || Math.Abs(board[r]-col) == Math.Abs(r-row))
                    return false;
            return true;
        }

        void Backtrack(int row) {
            if (row == n) { solutions.Add((int[])board.Clone()); return; }
            for (int col = 0; col < n; col++) {
                if (IsSafe(row, col)) {
                    board[row] = col;
                    Backtrack(row + 1);
                    board[row] = -1;
                }
            }
        }

        Backtrack(0);
        return solutions;
    }

    static void Main() {
        var solutions = SolveNQueens(8);
        Console.WriteLine($"8 皇后共有 {solutions.Count} 種解法");
        Console.WriteLine("第一種解法：");
        foreach (int col in solutions[0])
            Console.WriteLine(new string('·', col) + "♛" + new string('·', 7-col));
    }
}`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6（4 種解法），用 LINQ 印出每種解法的行數（solutions.Count）。",
            en: "Solve N=6 (4 solutions) and print all boards. Use LINQ to get solutions.Count.",
          },
          hint: {
            "zh-TW": "把 SolveNQueens(8) 改成 SolveNQueens(6)，迴圈印出所有解",
            en: "Change SolveNQueens(8) to SolveNQueens(6) and loop to print all solutions",
          },
          answer: `using System;
using System.Collections.Generic;
class Solution {
    static List<int[]> SolveNQueens(int n) {
        var sols=new List<int[]>();int[] board=new int[n];Array.Fill(board,-1);
        bool IsSafe(int row,int col){for(int r=0;r<row;r++) if(board[r]==col||Math.Abs(board[r]-col)==Math.Abs(r-row)) return false;return true;}
        void Backtrack(int row){if(row==n){sols.Add((int[])board.Clone());return;}for(int col=0;col<n;col++) if(IsSafe(row,col)){board[row]=col;Backtrack(row+1);board[row]=-1;}}
        Backtrack(0);return sols;
    }
    static void Main(){
        var sols=SolveNQueens(6);Console.WriteLine($"共 {sols.Count} 種解法");
        for(int i=0;i<sols.Count;i++){Console.WriteLine($"解法 {i+1}：");foreach(int col in sols[i])Console.WriteLine(new string('·',col)+"♛"+new string('·',5-col));}
    }
}`,
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

將建立物件的邏輯集中到工廠，呼叫者不需直接 \`new\`。

**C# 實作重點：**
- \`abstract class\` 或 \`interface\` 定義合約
- 工廠方法用 \`switch expression\`（C# 8+）
- \`nameof()\` 用於錯誤訊息，避免硬編碼字串`,
          en: `## Factory Pattern

Centralizes object creation — callers don't directly \`new\` objects.

**C# key points:**
- \`abstract class\` or \`interface\` for contracts
- Factory uses \`switch expression\` (C# 8+)
- \`nameof()\` for error messages instead of hardcoded strings`,
        },
        defaultCode: `using System;

abstract class Shape {
    public abstract double Area();
    public override string ToString() => $"{GetType().Name}: 面積={Area():F2}";
}

class Circle : Shape {
    private double radius;
    public Circle(double r) => radius = r;
    public override double Area() => Math.PI * radius * radius;
}

class Rectangle : Shape {
    private double w, h;
    public Rectangle(double w, double h) { this.w=w; this.h=h; }
    public override double Area() => w * h;
}

class Triangle : Shape {
    private double a, b, c;
    public Triangle(double a, double b, double c) { this.a=a; this.b=b; this.c=c; }
    public override double Area() {
        double s = (a+b+c)/2;
        return Math.Sqrt(s*(s-a)*(s-b)*(s-c));
    }
}

static class ShapeFactory {
    public static Shape Create(string type, params double[] args) =>
        type.ToLower() switch {
            "circle"    => new Circle(args[0]),
            "rectangle" => new Rectangle(args[0], args[1]),
            "triangle"  => new Triangle(args[0], args[1], args[2]),
            _           => throw new ArgumentException($"未知形狀：{type}")
        };
}

class Program {
    static void Main() {
        var shapes = new Shape[] {
            ShapeFactory.Create("circle", 5),
            ShapeFactory.Create("rectangle", 4, 6),
            ShapeFactory.Create("triangle", 3, 4, 5),
        };
        foreach (var s in shapes) Console.WriteLine(s);
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 Square 類別繼承 Rectangle，在 switch 中加入 \"square\" 分支，測試邊長 4（面積 16.00）。",
            en: "Add Square inheriting Rectangle, add \"square\" to the switch. Test side=4 (area 16.00).",
          },
          hint: {
            "zh-TW": "class Square : Rectangle { public Square(double s) : base(s, s) {} }",
            en: "class Square : Rectangle { public Square(double s) : base(s, s) {} }",
          },
          answer: `using System;
abstract class Shape{public abstract double Area();public override string ToString()=>$"{GetType().Name}: 面積={Area():F2}";}
class Rectangle:Shape{double w,h;public Rectangle(double w,double h){this.w=w;this.h=h;}public override double Area()=>w*h;}
class Square:Rectangle{public Square(double s):base(s,s){}}
static class ShapeFactory{public static Shape Create(string t,params double[] a)=>t.ToLower() switch{"rectangle"=>new Rectangle(a[0],a[1]),"square"=>new Square(a[0]),_=>throw new ArgumentException("未知")};}
class Program{static void Main(){Console.WriteLine(ShapeFactory.Create("square",4));}} // Square: 面積=16.00`,
        },
      },
      {
        id: "singleton-pattern",
        title: { "zh-TW": "單例模式", en: "Singleton Pattern" },
        content: {
          "zh-TW": `## 單例模式（Singleton Pattern）

確保類別只有一個實例。

**C# 執行緒安全寫法（Lazy<T>）：**

\`\`\`csharp
private static readonly Lazy<Logger> _lazy =
    new(() => new Logger());

public static Logger Instance => _lazy.Value;
\`\`\`

\`Lazy<T>\` 是 .NET 內建的延遲初始化，預設執行緒安全，不需 \`lock\`。`,
          en: `## Singleton Pattern

Ensures only one instance exists.

**C# thread-safe approach (Lazy<T>):**

\`\`\`csharp
private static readonly Lazy<Logger> _lazy =
    new(() => new Logger());

public static Logger Instance => _lazy.Value;
\`\`\`

\`Lazy<T>\` is .NET's built-in lazy initialization — thread-safe by default, no \`lock\` needed.`,
        },
        defaultCode: `using System;
using System.Collections.Generic;

class Logger {
    private static readonly Lazy<Logger> _lazy = new(() => new Logger());
    public static Logger Instance => _lazy.Value;

    private readonly List<string> _logs = new();
    private Logger() {}

    public void Log(string level, string message) {
        var entry = $"[{level}] {message}";
        _logs.Add(entry);
        Console.WriteLine(entry);
    }

    public void ShowAll() {
        Console.WriteLine($"\\n=== 共 {_logs.Count} 筆日誌 ===");
        _logs.ForEach(Console.WriteLine);
    }
}

class Program {
    static void Main() {
        var log1 = Logger.Instance;
        var log2 = Logger.Instance;
        Console.WriteLine($"同一個物件？{ReferenceEquals(log1, log2)}"); // True

        log1.Log("INFO", "伺服器啟動");
        log2.Log("WARN", "記憶體不足");
        log1.Log("ERROR", "資料庫斷線");

        log1.ShowAll();
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 Clear() 方法和 Count 屬性，並用 LINQ 的 Where 過濾只印出 ERROR 等級的日誌。",
            en: "Add Clear() and Count property. Use LINQ Where to print only ERROR level logs.",
          },
          hint: {
            "zh-TW": "_logs.Where(l => l.StartsWith(\"[ERROR]\")).ToList().ForEach(Console.WriteLine)",
            en: "_logs.Where(l => l.StartsWith(\"[ERROR]\")).ToList().ForEach(Console.WriteLine)",
          },
          answer: `using System;
using System.Collections.Generic;
using System.Linq;
class Logger{
    private static readonly Lazy<Logger> _lazy=new(()=>new Logger());
    public static Logger Instance=>_lazy.Value;
    private readonly List<string> _logs=new();
    private Logger(){}
    public void Log(string lvl,string msg){_logs.Add($"[{lvl}] {msg}");Console.WriteLine(_logs[^1]);}
    public void Clear(){_logs.Clear();Console.WriteLine("已清空");}
    public int Count=>_logs.Count;
    public void ShowErrors(){_logs.Where(l=>l.StartsWith("[ERROR]")).ToList().ForEach(Console.WriteLine);}
}
class Program{static void Main(){
    var lg=Logger.Instance;
    lg.Log("INFO","啟動");lg.Log("ERROR","崩潰");lg.Log("WARN","警告");
    Console.WriteLine($"共 {lg.Count} 筆");
    Console.WriteLine("錯誤：");lg.ShowErrors();
}}`,
        },
      },
      {
        id: "observer-pattern",
        title: { "zh-TW": "觀察者模式", en: "Observer Pattern" },
        content: {
          "zh-TW": `## 觀察者模式（Observer Pattern）

C# 提供內建支援：**event** 關鍵字。

\`\`\`csharp
public event Action<double> PriceChanged;
PriceChanged?.Invoke(newPrice);
\`\`\`

\`event\` 是觀察者模式的語言級封裝，比手動管理 list 更安全（只允許 += 和 -=，防止外部直接呼叫）。`,
          en: `## Observer Pattern

C# has built-in support: the **event** keyword.

\`\`\`csharp
public event Action<double> PriceChanged;
PriceChanged?.Invoke(newPrice);
\`\`\`

\`event\` is a language-level Observer Pattern — safer than manual list management (only += and -= allowed externally).`,
        },
        defaultCode: `using System;

class StockMarket {
    private double _price = 0;

    public event Action<double> PriceChanged;
    public event Action<string> StatusChanged;

    public void SetPrice(double newPrice) {
        double change = _price > 0 ? (newPrice-_price)/_price*100 : 0;
        _price = newPrice;
        PriceChanged?.Invoke(newPrice);
        StatusChanged?.Invoke(change >= 0 ? "上漲" : "下跌");
    }
}

class Program {
    static void Main() {
        var market = new StockMarket();

        market.PriceChanged += price =>
            Console.WriteLine($"投資者A：股價 {price} 元");

        market.PriceChanged += price =>
            Console.WriteLine($"交易機器人：{(price < 100 ? "買入" : "賣出")}！");

        market.StatusChanged += status =>
            Console.WriteLine($"  >> 市場狀態：{status}");

        market.SetPrice(100);
        market.SetPrice(85);
        market.SetPrice(120);
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 PriceHistory 類別，訂閱 PriceChanged 事件記錄所有價格，並用 LINQ 計算平均價格。",
            en: "Add a PriceHistory class that subscribes to PriceChanged to record all prices, then use LINQ to calculate the average.",
          },
          hint: {
            "zh-TW": "List<double> prices; market.PriceChanged += p => prices.Add(p); prices.Average()",
            en: "List<double> prices; market.PriceChanged += p => prices.Add(p); prices.Average()",
          },
          answer: `using System;
using System.Collections.Generic;
using System.Linq;
class StockMarket{
    private double _price=0;
    public event Action<double> PriceChanged;
    public void SetPrice(double p){_price=p;PriceChanged?.Invoke(p);}
}
class PriceHistory{
    private List<double> prices=new();
    public void Subscribe(StockMarket m){m.PriceChanged+=p=>prices.Add(p);}
    public void Report()=>Console.WriteLine($"平均價格：{prices.Average():F2}，共 {prices.Count} 筆");
}
class Program{static void Main(){
    var m=new StockMarket();var h=new PriceHistory();h.Subscribe(m);
    m.SetPrice(100);m.SetPrice(85);m.SetPrice(120);m.SetPrice(95);
    h.Report();
}}`,
        },
      },
    ],
  },
];

export default chapters;
