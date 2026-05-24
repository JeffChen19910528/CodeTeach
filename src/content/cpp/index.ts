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
          "zh-TW": `## C++ 簡介

C++ 是在 C 的基礎上加入物件導向特性的語言，常用於遊戲開發、高效能運算。

### 程式結構

\`\`\`cpp
#include <iostream>   // 引入輸入輸出串流函式庫

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

### 與 C 的差異

- 使用 \`cout\` 取代 \`printf\`
- 支援類別（class）與物件
- 支援 STL（標準模板庫）

> **執行需求**：需安裝 GCC 或 Clang 編譯器。`,
          en: `## Introduction to C++

C++ adds object-oriented features on top of C, commonly used in game development and high-performance computing.

### Program Structure

\`\`\`cpp
#include <iostream>   // include I/O stream library

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

### Differences from C

- Uses \`cout\` instead of \`printf\`
- Supports classes and objects
- Supports STL (Standard Template Library)

> **Runtime requirement**: Requires GCC or Clang compiler.`,
        },
        defaultCode: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
      },
      {
        id: "variables",
        title: { "zh-TW": "資料型別與變數", en: "Data Types & Variables" },
        content: {
          "zh-TW": `## 基本資料型別

| 型別 | 說明 | 範例 |
|------|------|------|
| \`int\` | 整數 | \`int age = 25;\` |
| \`double\` | 雙精度浮點數 | \`double pi = 3.14159;\` |
| \`std::string\` | 字串 | \`std::string name = "Alice";\` |
| \`bool\` | 布林值 | \`bool flag = true;\` |
| \`auto\` | 自動推導型別 | \`auto x = 42;\` |

### auto 關鍵字

C++11 引入的 \`auto\` 可讓編譯器自動推導型別：

\`\`\`cpp
auto count = 10;        // int
auto price = 9.99;      // double
auto msg = std::string("Hi"); // std::string
\`\`\`

### 字串需引入標頭

\`\`\`cpp
#include <string>
std::string name = "Alice";
std::cout << name << std::endl;
\`\`\``,
          en: `## Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| \`int\` | Integer | \`int age = 25;\` |
| \`double\` | Double precision float | \`double pi = 3.14159;\` |
| \`std::string\` | String | \`std::string name = "Alice";\` |
| \`bool\` | Boolean | \`bool flag = true;\` |
| \`auto\` | Type deduction | \`auto x = 42;\` |

### The auto Keyword

Introduced in C++11, \`auto\` lets the compiler deduce the type:

\`\`\`cpp
auto count = 10;        // int
auto price = 9.99;      // double
auto msg = std::string("Hi"); // std::string
\`\`\`

### Strings Require a Header

\`\`\`cpp
#include <string>
std::string name = "Alice";
std::cout << name << std::endl;
\`\`\``,
        },
        defaultCode: `#include <iostream>
#include <string>

int main() {
    int age = 25;
    double height = 1.75;
    std::string name = "Alice";
    bool isStudent = true;
    auto score = 98;

    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Student: " << std::boolalpha << isStudent << std::endl;
    std::cout << "Score: " << score << std::endl;

    return 0;
}`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## 運算子

### 算術運算子

| 運算子 | 說明 | 範例 |
|--------|------|------|
| \`+\` | 加法 | \`a + b\` |
| \`-\` | 減法 | \`a - b\` |
| \`*\` | 乘法 | \`a * b\` |
| \`/\` | 除法 | \`a / b\` |
| \`%\` | 取餘數 | \`a % b\` |

### 比較運算子

比較結果為 \`true\` 或 \`false\`（C++ 有原生 bool 型別）。

| 運算子 | 說明 |
|--------|------|
| \`==\` | 等於 |
| \`!=\` | 不等於 |
| \`<\` / \`>\` | 小於 / 大於 |
| \`<=\` / \`>=\` | 小於等於 / 大於等於 |

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`&&\` | 且（AND） |
| \`||\` | 或（OR） |
| \`!\` | 非（NOT） |

### 輸出範例

\`\`\`cpp
int a = 10, b = 3;
std::cout << a + b << std::endl;  // 13
std::cout << (a > b) << std::endl; // 1
\`\`\``,
          en: `## Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| \`+\` | Addition | \`a + b\` |
| \`-\` | Subtraction | \`a - b\` |
| \`*\` | Multiplication | \`a * b\` |
| \`/\` | Division | \`a / b\` |
| \`%\` | Modulo | \`a % b\` |

### Comparison Operators

Results are \`true\` or \`false\` (C++ has a native bool type).

| Operator | Description |
|----------|-------------|
| \`==\` | Equal to |
| \`!=\` | Not equal to |
| \`<\` / \`>\` | Less / Greater than |
| \`<=\` / \`>=\` | Less / Greater or equal |

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`&&\` | AND |
| \`||\` | OR |
| \`!\` | NOT |

### Output Example

\`\`\`cpp
int a = 10, b = 3;
std::cout << a + b << std::endl;   // 13
std::cout << (a > b) << std::endl; // 1
\`\`\``,
        },
        defaultCode: `#include <iostream>

int main() {
    int a = 10, b = 3;

    // 算術運算子
    std::cout << "a + b = " << a + b << std::endl;
    std::cout << "a - b = " << a - b << std::endl;
    std::cout << "a * b = " << a * b << std::endl;
    std::cout << "a / b = " << a / b << std::endl;
    std::cout << "a % b = " << a % b << std::endl;

    // 比較運算子
    std::cout << std::boolalpha;
    std::cout << "a > b: " << (a > b) << std::endl;
    std::cout << "a == b: " << (a == b) << std::endl;

    // 邏輯運算子
    std::cout << "a>0 && b>0: " << (a > 0 && b > 0) << std::endl;
    std::cout << "a>0 || b<0: " << (a > 0 || b < 0) << std::endl;

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "宣告兩個整數 `x = 15`、`y = 4`，用 `cout` 印出它們的商與餘數。",
            en: "Declare two integers `x = 15` and `y = 4`, use `cout` to print their quotient and remainder.",
          },
          hint: {
            "zh-TW": "使用 `/` 取商，`%` 取餘數，搭配 `std::cout` 輸出。",
            en: "Use `/` for quotient, `%` for remainder, output with `std::cout`.",
          },
          answer: `#include <iostream>

int main() {
    int x = 15, y = 4;
    std::cout << "商: " << x / y << std::endl;
    std::cout << "餘數: " << x % y << std::endl;
    return 0;
}`,
        },
      },
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## 條件判斷

### if / else if / else

\`\`\`cpp
if (條件1) {
    // 條件1 為真時執行
} else if (條件2) {
    // 條件2 為真時執行
} else {
    // 以上條件都不成立時執行
}
\`\`\`

### 成績等級範例

\`\`\`cpp
int score = 85;
if (score >= 90) {
    std::cout << "A" << std::endl;
} else if (score >= 80) {
    std::cout << "B" << std::endl;
} else if (score >= 70) {
    std::cout << "C" << std::endl;
} else {
    std::cout << "F" << std::endl;
}
\`\`\`

### 三元運算子

\`\`\`cpp
int abs_val = (x >= 0) ? x : -x;
\`\`\``,
          en: `## Conditionals

### if / else if / else

\`\`\`cpp
if (condition1) {
    // executes when condition1 is true
} else if (condition2) {
    // executes when condition2 is true
} else {
    // executes when none of the above match
}
\`\`\`

### Grade Example

\`\`\`cpp
int score = 85;
if (score >= 90) {
    std::cout << "A" << std::endl;
} else if (score >= 80) {
    std::cout << "B" << std::endl;
} else if (score >= 70) {
    std::cout << "C" << std::endl;
} else {
    std::cout << "F" << std::endl;
}
\`\`\`

### Ternary Operator

\`\`\`cpp
int abs_val = (x >= 0) ? x : -x;
\`\`\``,
        },
        defaultCode: `#include <iostream>

int main() {
    int score = 85;

    if (score >= 90) {
        std::cout << "成績：A" << std::endl;
    } else if (score >= 80) {
        std::cout << "成績：B" << std::endl;
    } else if (score >= 70) {
        std::cout << "成績：C" << std::endl;
    } else {
        std::cout << "成績：F" << std::endl;
    }

    // 三元運算子
    int num = -7;
    int absVal = (num >= 0) ? num : -num;
    std::cout << num << " 的絕對值：" << absVal << std::endl;

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "宣告一個整數 `temperature`，若大於等於 30 印出「天氣炎熱」，介於 20 到 29 印出「天氣舒適」，否則印出「天氣寒冷」。",
            en: "Declare an integer `temperature`. If 30 or above print \"Hot\", if between 20 and 29 print \"Comfortable\", otherwise print \"Cold\".",
          },
          hint: {
            "zh-TW": "使用 `if / else if / else`，搭配 `>=` 和 `<` 運算子。",
            en: "Use `if / else if / else` with `>=` and `<` operators.",
          },
          answer: `#include <iostream>

int main() {
    int temperature = 25;
    if (temperature >= 30) {
        std::cout << "天氣炎熱" << std::endl;
    } else if (temperature >= 20) {
        std::cout << "天氣舒適" << std::endl;
    } else {
        std::cout << "天氣寒冷" << std::endl;
    }
    return 0;
}`,
        },
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## 迴圈

### for 迴圈

\`\`\`cpp
for (初始值; 條件; 更新) {
    // 重複執行的程式碼
}
\`\`\`

範例：印出 1 到 5

\`\`\`cpp
for (int i = 1; i <= 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

### while 迴圈

\`\`\`cpp
int i = 1;
while (i <= 5) {
    std::cout << i << std::endl;
    i++;
}
\`\`\`

### 範圍 for 迴圈（C++11）

C++11 提供了更簡潔的範圍迴圈，常搭配容器使用：

\`\`\`cpp
std::vector<int> nums = {1, 2, 3, 4, 5};
for (int n : nums) {
    std::cout << n << std::endl;
}
\`\`\``,
          en: `## Loops

### for Loop

\`\`\`cpp
for (init; condition; update) {
    // code to repeat
}
\`\`\`

Example: print 1 to 5

\`\`\`cpp
for (int i = 1; i <= 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

### while Loop

\`\`\`cpp
int i = 1;
while (i <= 5) {
    std::cout << i << std::endl;
    i++;
}
\`\`\`

### Range-based for Loop (C++11)

C++11 provides a cleaner loop syntax, commonly used with containers:

\`\`\`cpp
std::vector<int> nums = {1, 2, 3, 4, 5};
for (int n : nums) {
    std::cout << n << std::endl;
}
\`\`\``,
        },
        defaultCode: `#include <iostream>
#include <vector>

int main() {
    // for 迴圈：印出 1 到 5
    std::cout << "for 迴圈：" << std::endl;
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // while 迴圈：計算總和
    std::cout << "while 迴圈（加總）：" << std::endl;
    int sum = 0, n = 1;
    while (n <= 10) {
        sum += n;
        n++;
    }
    std::cout << "1 到 10 的總和 = " << sum << std::endl;

    // 範圍 for 迴圈
    std::cout << "範圍 for 迴圈：" << std::endl;
    std::vector<int> nums = {2, 4, 6, 8, 10};
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "使用 for 迴圈印出 1 到 10 中所有的偶數。",
            en: "Use a for loop to print all even numbers from 1 to 10.",
          },
          hint: {
            "zh-TW": "判斷偶數用 `i % 2 == 0`，或讓 i 每次遞增 2（從 2 開始）。",
            en: "Check even numbers with `i % 2 == 0`, or increment i by 2 starting from 2.",
          },
          answer: `#include <iostream>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            std::cout << i << std::endl;
        }
    }
    return 0;
}`,
        },
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式", en: "Functions" },
    lessons: [
      {
        id: "functions",
        title: { "zh-TW": "函式定義與呼叫", en: "Defining & Calling Functions" },
        content: {
          "zh-TW": `## 函式

### 基本語法

\`\`\`cpp
回傳型別 函式名稱(參數型別 參數名稱, ...) {
    // 函式本體
    return 回傳值;
}
\`\`\`

### 有回傳值的函式

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

### void 函式

\`\`\`cpp
void printLine() {
    std::cout << "----------" << std::endl;
}
\`\`\`

### 預設參數（C++ 特有）

C++ 允許函式參數設定預設值：

\`\`\`cpp
void greet(std::string name, std::string msg = "Hello") {
    std::cout << msg << ", " << name << "!" << std::endl;
}

greet("Alice");          // Hello, Alice!
greet("Bob", "Hi");      // Hi, Bob!
\`\`\`

> 有預設值的參數必須放在參數列表的**最右側**。`,
          en: `## Functions

### Basic Syntax

\`\`\`cpp
return_type function_name(param_type param_name, ...) {
    // function body
    return value;
}
\`\`\`

### Function with Return Value

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

### void Function

\`\`\`cpp
void printLine() {
    std::cout << "----------" << std::endl;
}
\`\`\`

### Default Parameters (C++ only)

C++ allows function parameters to have default values:

\`\`\`cpp
void greet(std::string name, std::string msg = "Hello") {
    std::cout << msg << ", " << name << "!" << std::endl;
}

greet("Alice");          // Hello, Alice!
greet("Bob", "Hi");      // Hi, Bob!
\`\`\`

> Parameters with default values must be at the **rightmost** positions.`,
        },
        defaultCode: `#include <iostream>
#include <string>

int add(int a, int b) {
    return a + b;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

// 預設參數
void greet(std::string name, std::string msg = "Hello") {
    std::cout << msg << ", " << name << "!" << std::endl;
}

void printLine() {
    std::cout << "----------" << std::endl;
}

int main() {
    printLine();
    std::cout << "add(3, 7) = " << add(3, 7) << std::endl;
    std::cout << "max(10, 20) = " << max(10, 20) << std::endl;
    printLine();
    greet("Alice");
    greet("Bob", "Hi");

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "撰寫一個函式 `int square(int n)` 回傳 n 的平方，並在 main 中印出 1 到 5 的平方。",
            en: "Write a function `int square(int n)` that returns n squared, then print squares of 1 through 5 in main.",
          },
          hint: {
            "zh-TW": "函式回傳 `n * n`，在 main 裡用 for 迴圈呼叫。",
            en: "The function returns `n * n`. Call it inside a for loop in main.",
          },
          answer: `#include <iostream>

int square(int n) {
    return n * n;
}

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " 的平方 = " << square(i) << std::endl;
    }
    return 0;
}`,
        },
      },
      {
        id: "arrays",
        title: { "zh-TW": "陣列與 vector", en: "Arrays & Vectors" },
        content: {
          "zh-TW": `## 陣列與 vector

### C 風格陣列

\`\`\`cpp
int nums[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    std::cout << nums[i] << std::endl;
}
\`\`\`

### std::vector（推薦）

\`vector\` 是 C++ STL 提供的動態陣列，大小可變：

\`\`\`cpp
#include <vector>

std::vector<int> v = {1, 2, 3};
v.push_back(4);           // 新增元素到尾端
v.push_back(5);
std::cout << v.size();    // 5
\`\`\`

### 常用方法

| 方法 | 說明 |
|------|------|
| \`push_back(x)\` | 新增元素到尾端 |
| \`pop_back()\` | 移除尾端元素 |
| \`size()\` | 取得元素數量 |
| \`at(i)\` | 取得第 i 個元素（有邊界檢查）|

### 範圍 for 迴圈遍歷 vector

\`\`\`cpp
for (int n : v) {
    std::cout << n << std::endl;
}
\`\`\``,
          en: `## Arrays & Vectors

### C-style Arrays

\`\`\`cpp
int nums[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    std::cout << nums[i] << std::endl;
}
\`\`\`

### std::vector (Recommended)

\`vector\` is a dynamic array from the C++ STL — its size can change:

\`\`\`cpp
#include <vector>

std::vector<int> v = {1, 2, 3};
v.push_back(4);           // add element to end
v.push_back(5);
std::cout << v.size();    // 5
\`\`\`

### Common Methods

| Method | Description |
|--------|-------------|
| \`push_back(x)\` | Add element to end |
| \`pop_back()\` | Remove last element |
| \`size()\` | Get number of elements |
| \`at(i)\` | Access element at i (bounds-checked) |

### Range-based for Loop with vector

\`\`\`cpp
for (int n : v) {
    std::cout << n << std::endl;
}
\`\`\``,
        },
        defaultCode: `#include <iostream>
#include <vector>

int main() {
    // C 風格陣列
    int scores[5] = {88, 72, 95, 60, 83};
    std::cout << "C 陣列：" << std::endl;
    for (int i = 0; i < 5; i++) {
        std::cout << "  scores[" << i << "] = " << scores[i] << std::endl;
    }

    // std::vector
    std::vector<int> vec = {10, 20, 30};
    vec.push_back(40);
    vec.push_back(50);

    std::cout << "vector（共 " << vec.size() << " 個元素）：" << std::endl;
    for (int n : vec) {
        std::cout << "  " << n << std::endl;
    }

    // 計算 vector 總和
    int sum = 0;
    for (int n : vec) {
        sum += n;
    }
    std::cout << "總和：" << sum << std::endl;

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "建立一個 `std::vector<int>`，包含元素 `{5, 10, 15, 20, 25}`，用範圍 for 迴圈印出每個元素，並計算平均值。",
            en: "Create a `std::vector<int>` with elements `{5, 10, 15, 20, 25}`, print each element using a range-based for loop, and compute the average.",
          },
          hint: {
            "zh-TW": "用 `for (int n : vec)` 遍歷並累加，再除以 `vec.size()`。注意轉型為 `double`。",
            en: "Traverse with `for (int n : vec)` and accumulate, then divide by `vec.size()`. Cast to `double` for the average.",
          },
          answer: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec = {5, 10, 15, 20, 25};
    int sum = 0;
    for (int n : vec) {
        std::cout << n << std::endl;
        sum += n;
    }
    std::cout << "平均：" << (double)sum / vec.size() << std::endl;
    return 0;
}`,
        },
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
          "zh-TW": `## 類別與物件

類別（class）是 C++ 物件導向的核心，用來定義資料（屬性）和行為（方法）的藍圖。

### 基本結構

\`\`\`cpp
class 類別名稱 {
public:
    // 公開成員（外部可存取）
    型別 屬性名稱;
    回傳型別 方法名稱(參數);

private:
    // 私有成員（只有類別內部可存取）
    型別 私有屬性;
};
\`\`\`

### 建構子

建構子在物件被建立時自動執行，名稱與類別相同、無回傳型別：

\`\`\`cpp
class Dog {
public:
    std::string name;
    int age;

    Dog(std::string n, int a) {  // 建構子
        name = n;
        age = a;
    }

    void bark() {
        std::cout << name << " says: Woof!" << std::endl;
    }
};

Dog d("Buddy", 3);
d.bark();
\`\`\`

### public vs private

- \`public\`：任何地方都可存取
- \`private\`：只有類別內部的方法可存取，保護資料安全`,
          en: `## Classes & Objects

A class is the core of C++ OOP — a blueprint that defines data (attributes) and behavior (methods).

### Basic Structure

\`\`\`cpp
class ClassName {
public:
    // public members (accessible from outside)
    type attribute;
    return_type method(params);

private:
    // private members (only accessible inside the class)
    type privateAttr;
};
\`\`\`

### Constructor

A constructor runs automatically when an object is created. It has the same name as the class and no return type:

\`\`\`cpp
class Dog {
public:
    std::string name;
    int age;

    Dog(std::string n, int a) {  // constructor
        name = n;
        age = a;
    }

    void bark() {
        std::cout << name << " says: Woof!" << std::endl;
    }
};

Dog d("Buddy", 3);
d.bark();
\`\`\`

### public vs private

- \`public\`: accessible from anywhere
- \`private\`: only accessible inside the class; protects data integrity`,
        },
        defaultCode: `#include <iostream>
#include <string>

class Rectangle {
private:
    double width;
    double height;

public:
    // 建構子
    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    // 成員函式
    double area() {
        return width * height;
    }

    double perimeter() {
        return 2 * (width + height);
    }

    void print() {
        std::cout << "Rectangle(" << width << " x " << height << ")" << std::endl;
        std::cout << "  面積: " << area() << std::endl;
        std::cout << "  周長: " << perimeter() << std::endl;
    }
};

int main() {
    Rectangle r1(5.0, 3.0);
    Rectangle r2(10.0, 4.5);

    r1.print();
    r2.print();

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "建立一個 `Circle` 類別，包含私有成員 `radius`（double）、建構子、`area()` 方法（回傳 π × r²）和 `print()` 方法。在 main 中建立一個半徑為 5 的圓並呼叫 `print()`。",
            en: "Create a `Circle` class with a private `radius` (double), a constructor, an `area()` method (returns π × r²), and a `print()` method. In main, create a circle with radius 5 and call `print()`.",
          },
          hint: {
            "zh-TW": "π 可用 `3.14159`，`area()` 回傳 `3.14159 * radius * radius`。",
            en: "Use `3.14159` for π. The `area()` method returns `3.14159 * radius * radius`.",
          },
          answer: `#include <iostream>

class Circle {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double area() {
        return 3.14159 * radius * radius;
    }

    void print() {
        std::cout << "Circle(radius=" << radius << ")" << std::endl;
        std::cout << "  面積: " << area() << std::endl;
    }
};

int main() {
    Circle c(5.0);
    c.print();
    return 0;
}`,
        },
      },
    ],
  },
];

export default chapters;
