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
  {
    id: "leetcode",
    title: { "zh-TW": "LeetCode 經典題", en: "LeetCode Classics" },
    lessons: [
      {
        id: "two-sum",
        title: { "zh-TW": "#1 兩數之和", en: "#1 Two Sum" },
        content: {
          "zh-TW": `## LeetCode #1 — Two Sum（兩數之和）

給定整數向量 \`nums\` 與目標值 \`target\`，回傳兩個相加等於 \`target\` 的索引。

**核心技巧：unordered_map**

C++ 使用 \`unordered_map<int, int>\` 提供平均 O(1) 查找，整體 O(n) 解法。

\`\`\`cpp
unordered_map<int, int> seen; // num -> index
\`\`\``,
          en: `## LeetCode #1 — Two Sum

Return indices of two numbers in \`nums\` summing to \`target\`.

**Key technique: unordered_map**

C++'s \`unordered_map<int, int>\` gives average O(1) lookups — overall O(n) solution.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> a = {2, 7, 11, 15};
    auto r1 = twoSum(a, 9);
    cout << "[" << r1[0] << ", " << r1[1] << "]" << endl; // [0, 1]

    vector<int> b = {3, 2, 4};
    auto r2 = twoSum(b, 6);
    cout << "[" << r2[0] << ", " << r2[1] << "]" << endl; // [1, 2]
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "將 unordered_map 改成 map（有序），說明兩者在時間複雜度上的差異。",
            en: "Change unordered_map to map (ordered). Explain the time complexity difference between the two.",
          },
          hint: {
            "zh-TW": "map 使用紅黑樹，查找 O(log n)；unordered_map 使用哈希，平均 O(1)",
            en: "map uses a red-black tree with O(log n) lookup; unordered_map uses hashing with average O(1)",
          },
          answer: `#include <iostream>
#include <vector>
#include <map>
using namespace std;
// map: O(log n) 查找，整體 O(n log n)
// unordered_map: O(1) 平均，整體 O(n)
vector<int> twoSum(vector<int>& nums, int target) {
    map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) return {seen[complement], i};
        seen[nums[i]] = i;
    }
    return {};
}
int main() {
    vector<int> a = {2,7,11,15};
    auto r = twoSum(a, 9);
    cout << r[0] << " " << r[1] << endl; // 0 1
}`,
        },
      },
      {
        id: "valid-parentheses",
        title: { "zh-TW": "#20 有效括號", en: "#20 Valid Parentheses" },
        content: {
          "zh-TW": `## LeetCode #20 — Valid Parentheses（有效括號）

判斷括號字串是否合法配對。

**核心技巧：stack<char>**

C++ STL 的 \`stack<char>\` 提供 \`push\`、\`pop\`、\`top\`、\`empty\` 操作。

注意：\`pop()\` 不回傳值，需先用 \`top()\` 取值再 \`pop()\`。`,
          en: `## LeetCode #20 — Valid Parentheses

Determine if a bracket string is validly matched.

**Key technique: stack<char>**

C++ STL's \`stack<char>\` provides \`push\`, \`pop\`, \`top\`, \`empty\`.

Note: \`pop()\` doesn't return a value — use \`top()\` first, then \`pop()\`.`,
        },
        defaultCode: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
        }
    }
    return st.empty();
}

int main() {
    cout << boolalpha;
    cout << isValid("()")      << endl; // true
    cout << isValid("()[]{}") << endl; // true
    cout << isValid("(]")     << endl; // false
    cout << isValid("{[]}")   << endl; // true
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "用 unordered_map<char,char> 改寫括號對應表，讓程式碼更簡潔。",
            en: "Refactor using an unordered_map<char,char> for bracket pairs to make the code more concise.",
          },
          hint: {
            "zh-TW": "mapping = {{')', '('}, {'}', '{'}, {']', '['}}，遇右括號時直接查表",
            en: "mapping = {{')', '('}, {'}', '{'}, {']', '['}}, then look up closing brackets directly",
          },
          answer: `#include <iostream>
#include <stack>
#include <unordered_map>
using namespace std;
bool isValid(string s) {
    stack<char> st;
    unordered_map<char,char> m = {{')','{'},{'}',' '},{']','['}};
    // 修正：
    unordered_map<char,char> mp = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (mp.count(c)) {
            if (st.empty() || st.top() != mp[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}
int main() {
    cout << boolalpha << isValid("()[]{}") << endl; // true
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

\`\`\`cpp
current = max(nums[i], current + nums[i]);
best    = max(best, current);
\`\`\`

C++ 使用 \`std::max\` 函式，需 \`#include <algorithm>\`。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

\`\`\`cpp
current = max(nums[i], current + nums[i]);
best    = max(best, current);
\`\`\`

C++ uses \`std::max\` from \`<algorithm>\`.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int current = nums[0], best = nums[0];
    for (int i = 1; i < (int)nums.size(); i++) {
        current = max(nums[i], current + nums[i]);
        best = max(best, current);
    }
    return best;
}

int main() {
    vector<int> a = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(a) << endl; // 6

    vector<int> b = {5,4,-1,7,8};
    cout << maxSubArray(b) << endl; // 23
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改函式回傳 pair<int,int>，分別代表最大總和與子陣列起始索引。",
            en: "Modify the function to return a pair<int,int> for the max sum and the start index of the subarray.",
          },
          hint: {
            "zh-TW": "用 pair<int,int> 或 struct 回傳多個值；current 重置時更新 tempStart",
            en: "Use pair<int,int> or struct to return multiple values; update tempStart when current resets",
          },
          answer: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
pair<int,int> maxSubArray(vector<int>& nums) {
    int current = nums[0], best = nums[0];
    int start = 0, tempStart = 0;
    for (int i = 1; i < (int)nums.size(); i++) {
        if (nums[i] > current + nums[i]) {
            current = nums[i];
            tempStart = i;
        } else {
            current += nums[i];
        }
        if (current > best) {
            best = current;
            start = tempStart;
        }
    }
    return {best, start};
}
int main() {
    vector<int> a = {-2,1,-3,4,-1,2,1,-5,4};
    auto [sum, idx] = maxSubArray(a);
    cout << "總和=" << sum << " 起始索引=" << idx << endl; // 6, 3
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

\`\`\`cpp
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

C++11 起可用 \`tie\` 或結構化綁定，但為清晰起見使用暫存變數。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**Dynamic programming (Fibonacci):**

\`\`\`cpp
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

C++11+ supports tie/structured bindings, but a temp variable is clearer here.`,
        },
        defaultCode: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int temp = prev1;
        prev1 = prev1 + prev2;
        prev2 = temp;
    }
    return prev1;
}

int main() {
    for (int i = 1; i <= 7; i++) {
        cout << "n=" << i << ": " << climbStairs(i) << " 種方法" << endl;
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "用 vector<int> dp(n+1) 實作完整 DP 陣列版本，並印出每一階的方法數（n=6）。",
            en: "Implement a full DP array version using vector<int> dp(n+1) and print the number of ways for each step up to n=6.",
          },
          hint: {
            "zh-TW": "dp[0]=1, dp[1]=1, dp[2]=2，之後 dp[i]=dp[i-1]+dp[i-2]",
            en: "dp[0]=1, dp[1]=1, dp[2]=2, then dp[i]=dp[i-1]+dp[i-2]",
          },
          answer: `#include <iostream>
#include <vector>
using namespace std;
int climbStairs(int n) {
    if (n == 0) return 1;
    vector<int> dp(n+1);
    dp[0] = 1; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        cout << "dp[" << i << "]=" << dp[i] << endl;
    }
    return dp[n];
}
int main() {
    cout << "n=6: " << climbStairs(6) << " 種" << endl; // 13
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

Three pegs A, B, C. Move n discs from A to C. Rules: one at a time, never larger on smaller.

**Recursive strategy:**
1. Move n-1 discs A→B (C as aux)
2. Move largest A→C
3. Move n-1 discs B→C (A as aux)

Moves: **2ⁿ - 1**`,
        },
        defaultCode: `#include <iostream>
using namespace std;

void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << "  移動第 1 個碟子：" << from << " → " << to << endl;
        return;
    }
    hanoi(n-1, from, aux, to);
    cout << "  移動第 " << n << " 個碟子：" << from << " → " << to << endl;
    hanoi(n-1, aux, to, from);
}

int main() {
    for (int n = 1; n <= 4; n++) {
        cout << "n=" << n << "（需 " << ((1<<n)-1) << " 步）：" << endl;
        hanoi(n, 'A', 'C', 'B');
        cout << endl;
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "改為回傳步數的版本（int hanoi(...)），確認 n=5 時為 31。",
            en: "Rewrite to return step count (int hanoi(...)). Verify n=5 = 31 steps.",
          },
          hint: {
            "zh-TW": "return hanoi(n-1,...) + 1 + hanoi(n-1,...)",
            en: "return hanoi(n-1,...) + 1 + hanoi(n-1,...)",
          },
          answer: `#include <iostream>
using namespace std;
int hanoi(int n,char f,char t,char a){
    if(n==1){cout<<"  "<<f<<" → "<<t<<endl;return 1;}
    return hanoi(n-1,f,a,t)+1+hanoi(n-1,a,t,f);
    // 注意：中間移動 cout 被略過，加回來：
}
// 正確版本：
int hanoi2(int n,char f,char t,char a){
    if(n==1){cout<<"  "<<f<<" → "<<t<<endl;return 1;}
    int x=hanoi2(n-1,f,a,t);
    cout<<"  "<<f<<" → "<<t<<endl;
    return x+1+hanoi2(n-1,a,t,f);
}
int main(){
    cout<<"共 "<<hanoi2(5,'A','C','B')<<" 步"<<endl; // 31
}`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

C++ 使用 vector<vector<int>> 表示迷宮，老鼠從 [0][0] 走到 [n-1][n-1]。

**回溯法：**
1. 嘗試向下或向右移動
2. 死路：sol[x][y] = 0（回退）
3. 再試另一方向

C++ lambda 結合 std::function 可實作巢狀遞迴函式。`,
          en: `## Rat in a Maze (Backtracking)

C++ uses vector<vector<int>> for the maze. Rat moves from [0][0] to [n-1][n-1].

**Backtracking:**
1. Try moving down or right
2. Dead end: sol[x][y] = 0 (backtrack)
3. Try another direction

C++ lambda with std::function enables nested recursive functions.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <functional>
using namespace std;

void solveMaze(vector<vector<int>>& maze) {
    int n = maze.size();
    vector<vector<int>> sol(n, vector<int>(n, 0));

    auto isSafe = [&](int x, int y) {
        return x>=0 && x<n && y>=0 && y<n && maze[x][y]==1;
    };

    function<bool(int,int)> backtrack = [&](int x, int y) -> bool {
        if (x==n-1 && y==n-1) { sol[x][y]=1; return true; }
        if (isSafe(x, y)) {
            sol[x][y] = 1;
            if (backtrack(x+1,y) || backtrack(x,y+1)) return true;
            sol[x][y] = 0;
        }
        return false;
    };

    if (backtrack(0, 0)) {
        cout << "找到路徑：" << endl;
        for (auto& row : sol) {
            for (int c : row) cout << (c ? "■" : "□") << " ";
            cout << endl;
        }
    } else cout << "無解" << endl;
}

int main() {
    vector<vector<int>> maze = {{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}};
    solveMaze(maze);
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改程式，輸出路徑座標（如 (0,0)→(1,0)→...），用 vector<pair<int,int>> 儲存。",
            en: "Modify to print path coordinates (e.g. (0,0)→(1,0)→...) stored in vector<pair<int,int>>.",
          },
          hint: {
            "zh-TW": "path.push_back({x,y})；退回時 path.pop_back()",
            en: "path.push_back({x,y}); on backtrack path.pop_back()",
          },
          answer: `#include <iostream>
#include <vector>
#include <functional>
using namespace std;
int main(){
    vector<vector<int>> maze={{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}};
    int n=maze.size();
    vector<vector<int>> sol(n,vector<int>(n,0));
    vector<pair<int,int>> path;
    auto isSafe=[&](int x,int y){return x>=0&&x<n&&y>=0&&y<n&&maze[x][y]==1;};
    function<bool(int,int)> bt=[&](int x,int y)->bool{
        if(x==n-1&&y==n-1){sol[x][y]=1;path.push_back({x,y});return true;}
        if(isSafe(x,y)){sol[x][y]=1;path.push_back({x,y});
            if(bt(x+1,y)||bt(x,y+1))return true;
            sol[x][y]=0;path.pop_back();}
        return false;
    };
    bt(0,0);
    for(int i=0;i<(int)path.size();i++){
        if(i)cout<<"→";
        cout<<"("<<path[i].first<<","<<path[i].second<<")";
    }
    cout<<endl;
}`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，任兩皇后不互攻。

**回溯法（逐行）：** \`board[row] = col\`

C++ 使用 vector<int> 儲存 board，lambda + std::function 實作遞迴。

安全判斷：同欄 \`board[r]==col\` 或對角線 \`abs(board[r]-col)==abs(r-row)\`

8 皇后共 **92** 種解。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**Backtracking (row by row):** \`board[row] = col\`

C++ uses vector<int> for the board; lambda + std::function for recursion.

Safety: same column \`board[r]==col\`, diagonal \`abs(board[r]-col)==abs(r-row)\`

**92** solutions for N=8.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <functional>
#include <cmath>
using namespace std;

int main() {
    int n = 8;
    vector<int> board(n, -1);
    vector<vector<int>> solutions;

    auto isSafe = [&](int row, int col) {
        for (int r = 0; r < row; r++)
            if (board[r]==col || abs(board[r]-col)==abs(r-row)) return false;
        return true;
    };

    function<void(int)> backtrack = [&](int row) {
        if (row == n) { solutions.push_back(board); return; }
        for (int col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                backtrack(row + 1);
                board[row] = -1;
            }
        }
    };

    backtrack(0);
    cout << "8 皇后共有 " << solutions.size() << " 種解法" << endl;
    cout << "第一種解法：" << endl;
    for (int col : solutions[0]) {
        for (int j=0;j<n;j++) cout << (j==col ? "♛" : "·");
        cout << endl;
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6（四種解法），印出全部解法的棋盤。",
            en: "Solve N=6 (4 solutions) and print all boards.",
          },
          hint: {
            "zh-TW": "把 int n = 8 改成 n = 6，其餘邏輯不變",
            en: "Change int n = 8 to n = 6; rest of the logic stays the same",
          },
          answer: `#include <iostream>
#include <vector>
#include <functional>
#include <cmath>
using namespace std;
int main(){
    int n=6;vector<int> board(n,-1);vector<vector<int>> sols;
    auto isSafe=[&](int row,int col){for(int r=0;r<row;r++) if(board[r]==col||abs(board[r]-col)==abs(r-row)) return false;return true;};
    function<void(int)> bt=[&](int row){
        if(row==n){sols.push_back(board);return;}
        for(int col=0;col<n;col++) if(isSafe(row,col)){board[row]=col;bt(row+1);board[row]=-1;}
    };
    bt(0);
    cout<<"共 "<<sols.size()<<" 種解法"<<endl;
    for(int i=0;i<(int)sols.size();i++){
        cout<<"解法 "<<i+1<<"："<<endl;
        for(int col:sols[i]){for(int j=0;j<n;j++)cout<<(j==col?"♛":"·");cout<<endl;}
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

將建立物件的邏輯集中到工廠函式，呼叫者不需直接 \`new\`。

**C++ 實作重點：**
- 抽象基類用 \`virtual\` 函式定義介面
- 工廠回傳 \`unique_ptr<Shape>\`（RAII 自動釋放記憶體）
- \`make_unique<Circle>()\` 建立智慧指標

\`\`\`cpp
unique_ptr<Shape> ShapeFactory::create(string type, ...);
\`\`\``,
          en: `## Factory Pattern

Centralizes object creation — callers don't directly \`new\` objects.

**C++ key points:**
- Abstract base class with \`virtual\` methods
- Factory returns \`unique_ptr<Shape>\` (RAII, auto memory management)
- \`make_unique<Circle>()\` creates smart pointers`,
        },
        defaultCode: `#include <iostream>
#include <memory>
#include <cmath>
#include <string>
using namespace std;

struct Shape {
    virtual double area() const = 0;
    virtual string name() const = 0;
    virtual ~Shape() = default;
    void describe() const {
        cout << name() << ": 面積=" << fixed;
        cout.precision(2);
        cout << area() << endl;
    }
};

struct Circle : Shape {
    double r;
    Circle(double r) : r(r) {}
    double area() const override { return M_PI * r * r; }
    string name() const override { return "Circle"; }
};

struct Rectangle : Shape {
    double w, h;
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
    string name() const override { return "Rectangle"; }
};

struct Triangle : Shape {
    double a, b, c;
    Triangle(double a,double b,double c):a(a),b(b),c(c){}
    double area() const override {
        double s=(a+b+c)/2; return sqrt(s*(s-a)*(s-b)*(s-c));
    }
    string name() const override { return "Triangle"; }
};

unique_ptr<Shape> createShape(const string& type, double a, double b=0, double c=0) {
    if (type=="circle")    return make_unique<Circle>(a);
    if (type=="rectangle") return make_unique<Rectangle>(a, b);
    if (type=="triangle")  return make_unique<Triangle>(a, b, c);
    throw invalid_argument("未知形狀：" + type);
}

int main() {
    auto shapes = {
        createShape("circle", 5),
        createShape("rectangle", 4, 6),
        createShape("triangle", 3, 4, 5),
    };
    for (auto& s : shapes) s->describe();
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "新增 Square 結構體繼承 Shape，並在 createShape 中加入 \"square\" 分支，測試邊長 4 的正方形（面積 16.00）。",
            en: "Add a Square struct inheriting Shape. Add a \"square\" branch to createShape. Test side=4 (area 16.00).",
          },
          hint: {
            "zh-TW": "struct Square : Shape { double s; Square(double s):s(s){} double area()const override{return s*s;} }",
            en: "struct Square : Shape { double s; Square(double s):s(s){} double area()const override{return s*s;} }",
          },
          answer: `#include <iostream>
#include <memory>
#include <string>
using namespace std;
struct Shape{virtual double area()const=0;virtual string name()const=0;virtual~Shape()=default;void describe()const{cout<<name()<<": 面積="<<fixed;cout.precision(2);cout<<area()<<endl;}};
struct Square:Shape{double s;Square(double s):s(s){}double area()const override{return s*s;}string name()const override{return "Square";}};
struct Rectangle:Shape{double w,h;Rectangle(double w,double h):w(w),h(h){}double area()const override{return w*h;}string name()const override{return "Rectangle";}};
unique_ptr<Shape> createShape(const string& type,double a,double b=0){
    if(type=="square")return make_unique<Square>(a);
    if(type=="rectangle")return make_unique<Rectangle>(a,b);
    throw invalid_argument("未知");
}
int main(){createShape("square",4)->describe();} // Square: 面積=16.00`,
        },
      },
      {
        id: "singleton-pattern",
        title: { "zh-TW": "單例模式", en: "Singleton Pattern" },
        content: {
          "zh-TW": `## 單例模式（Singleton Pattern）

確保類別只有一個實例。

**C++11 Meyers' Singleton（最簡且執行緒安全）：**

\`\`\`cpp
class Logger {
public:
    static Logger& getInstance() {
        static Logger instance; // C++11 保證只初始化一次
        return instance;
    }
private:
    Logger() = default;
    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;
};
\`\`\`

刪除複製建構子和賦值運算子，防止意外複製。`,
          en: `## Singleton Pattern

Ensures only one instance exists.

**C++11 Meyers' Singleton (simplest, thread-safe):**

\`\`\`cpp
static Logger& getInstance() {
    static Logger instance; // C++11 guarantees single initialization
    return instance;
}
\`\`\`

Delete copy constructor and assignment to prevent accidental copies.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Logger {
    vector<string> logs;

    Logger() = default;
    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;

public:
    static Logger& getInstance() {
        static Logger instance;
        return instance;
    }

    void log(const string& level, const string& msg) {
        string entry = "[" + level + "] " + msg;
        logs.push_back(entry);
        cout << entry << endl;
    }

    void showAll() const {
        cout << "\\n=== 共 " << logs.size() << " 筆日誌 ===" << endl;
        for (auto& l : logs) cout << l << endl;
    }
};

int main() {
    Logger& log1 = Logger::getInstance();
    Logger& log2 = Logger::getInstance();
    cout << "同一個物件？" << (&log1 == &log2 ? "是" : "否") << endl;

    log1.log("INFO", "伺服器啟動");
    log2.log("WARN", "記憶體不足");
    log1.log("ERROR", "資料庫斷線");

    log1.showAll();
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "新增 clear() 方法清空日誌，以及 size() 方法回傳日誌數量。",
            en: "Add clear() to empty the log, and size() to return the log count.",
          },
          hint: {
            "zh-TW": "void clear() { logs.clear(); }；size_t size() const { return logs.size(); }",
            en: "void clear() { logs.clear(); }; size_t size() const { return logs.size(); }",
          },
          answer: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
class Logger{
    vector<string> logs;
    Logger()=default;Logger(const Logger&)=delete;Logger&operator=(const Logger&)=delete;
public:
    static Logger&getInstance(){static Logger i;return i;}
    void log(const string&lvl,const string&msg){logs.push_back("["+lvl+"] "+msg);cout<<logs.back()<<endl;}
    void clear(){logs.clear();cout<<"已清空"<<endl;}
    size_t size()const{return logs.size();}
};
int main(){
    auto&lg=Logger::getInstance();
    lg.log("INFO","啟動");lg.log("WARN","警告");
    cout<<"共 "<<lg.size()<<" 筆"<<endl;
    lg.clear();cout<<"清空後 "<<lg.size()<<" 筆"<<endl;
}`,
        },
      },
      {
        id: "observer-pattern",
        title: { "zh-TW": "觀察者模式", en: "Observer Pattern" },
        content: {
          "zh-TW": `## 觀察者模式（Observer Pattern）

「一對多」依賴：主題改變 → 所有觀察者自動收到通知。

**C++ 實作：std::function + vector**

\`\`\`cpp
using Listener = function<void(double)>;
vector<Listener> observers;
\`\`\`

比傳統虛擬函式更靈活，可直接傳 lambda，不需繼承介面。`,
          en: `## Observer Pattern

One-to-many dependency: Subject changes → all observers notified.

**C++: std::function + vector**

\`\`\`cpp
using Listener = function<void(double)>;
vector<Listener> observers;
\`\`\`

More flexible than virtual function inheritance — pass lambdas directly.`,
        },
        defaultCode: `#include <iostream>
#include <vector>
#include <functional>
#include <string>
using namespace std;

class StockMarket {
    using Listener = function<void(double)>;
    vector<Listener> observers;
    double price = 0;

public:
    void subscribe(Listener listener) {
        observers.push_back(listener);
    }

    void setPrice(double newPrice) {
        double change = price > 0 ? (newPrice-price)/price*100 : 0;
        price = newPrice;
        cout << "[股市] 股價更新為 " << newPrice
             << "（" << (change >= 0 ? "+" : "") << change << "%）" << endl;
        for (auto& obs : observers) obs(newPrice);
    }
};

int main() {
    StockMarket market;

    market.subscribe([](double p) {
        cout << "  投資者A：股價 " << p << " 元" << endl;
    });

    market.subscribe([](double p) {
        cout << "  交易機器人：" << (p < 100 ? "買入" : "賣出") << "！" << endl;
    });

    market.setPrice(100);
    market.setPrice(85);
    market.setPrice(120);
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "新增一個 PriceLogger lambda，記錄價格到 vector<double>，最後印出最高和最低價（用 *max_element 和 *min_element）。",
            en: "Add a PriceLogger lambda that records prices in vector<double>, then prints max and min using *max_element and *min_element.",
          },
          hint: {
            "zh-TW": "vector<double> history; market.subscribe([&](double p){ history.push_back(p); })",
            en: "vector<double> history; market.subscribe([&](double p){ history.push_back(p); })",
          },
          answer: `#include <iostream>
#include <vector>
#include <functional>
#include <algorithm>
using namespace std;
class StockMarket{
    using L=function<void(double)>;vector<L> obs;double price=0;
public:
    void subscribe(L l){obs.push_back(l);}
    void setPrice(double p){price=p;for(auto&o:obs)o(p);}
};
int main(){
    StockMarket m;
    vector<double> history;
    m.subscribe([&](double p){history.push_back(p);});
    m.setPrice(100);m.setPrice(85);m.setPrice(120);m.setPrice(70);
    cout<<"最高:"<<*max_element(history.begin(),history.end())<<endl;
    cout<<"最低:"<<*min_element(history.begin(),history.end())<<endl;
}`,
        },
      },
    ],
  },
];

export default chapters;
