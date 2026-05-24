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
];

export default chapters;
