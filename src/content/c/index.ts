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
          "zh-TW": `## C 語言簡介

C 是最具影響力的系統程式語言，是 Linux 核心、許多作業系統的基礎。

### 程式結構

\`\`\`c
#include <stdio.h>   // 引入標準輸入輸出函式庫

int main() {         // 主函式，程式入口
    printf("Hello, World!\\n");
    return 0;        // 回傳 0 表示執行成功
}
\`\`\`

> **執行需求**：需安裝 GCC 或 Clang 編譯器。`,
          en: `## Introduction to C

C is the most influential system programming language, the foundation of Linux and many OS.

### Program Structure

\`\`\`c
#include <stdio.h>   // include standard I/O library

int main() {         // main function, program entry point
    printf("Hello, World!\\n");
    return 0;        // return 0 means success
}
\`\`\`

> **Runtime requirement**: Requires GCC or Clang compiler.`,
        },
        defaultCode: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
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
| \`float\` | 單精度浮點數 | \`float pi = 3.14f;\` |
| \`double\` | 雙精度浮點數 | \`double d = 3.14159;\` |
| \`char\` | 字元 | \`char c = 'A';\` |

C 是**靜態型別**語言，宣告時必須指定型別。`,
          en: `## Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| \`int\` | Integer | \`int age = 25;\` |
| \`float\` | Single precision | \`float pi = 3.14f;\` |
| \`double\` | Double precision | \`double d = 3.14159;\` |
| \`char\` | Character | \`char c = 'A';\` |

C is **statically typed** — types must be declared.`,
        },
        defaultCode: `#include <stdio.h>

int main() {
    int age = 25;
    double height = 1.75;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Grade: %c\\n", grade);
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

比較運算子的結果為 \`1\`（真）或 \`0\`（假）。

| 運算子 | 說明 |
|--------|------|
| \`==\` | 等於 |
| \`!=\` | 不等於 |
| \`<\` | 小於 |
| \`>\` | 大於 |
| \`<=\` | 小於等於 |
| \`>=\` | 大於等於 |

### 邏輯運算子

| 運算子 | 說明 | 範例 |
|--------|------|------|
| \`&&\` | 且（AND） | \`a > 0 && b > 0\` |
| \`||\` | 或（OR） | \`a > 0 || b > 0\` |
| \`!\` | 非（NOT） | \`!flag\` |

### 範例

\`\`\`c
int a = 10, b = 3;
printf("%d\\n", a + b);   // 13
printf("%d\\n", a % b);   // 1
printf("%d\\n", a > b);   // 1 (true)
printf("%d\\n", a == b);  // 0 (false)
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

Comparison operators return \`1\` (true) or \`0\` (false).

| Operator | Description |
|----------|-------------|
| \`==\` | Equal to |
| \`!=\` | Not equal to |
| \`<\` | Less than |
| \`>\` | Greater than |
| \`<=\` | Less or equal |
| \`>=\` | Greater or equal |

### Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| \`&&\` | AND | \`a > 0 && b > 0\` |
| \`||\` | OR | \`a > 0 || b > 0\` |
| \`!\` | NOT | \`!flag\` |

### Example

\`\`\`c
int a = 10, b = 3;
printf("%d\\n", a + b);   // 13
printf("%d\\n", a % b);   // 1
printf("%d\\n", a > b);   // 1 (true)
printf("%d\\n", a == b);  // 0 (false)
\`\`\``,
        },
        defaultCode: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    // 算術運算子
    printf("a + b = %d\\n", a + b);
    printf("a - b = %d\\n", a - b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b);
    printf("a %% b = %d\\n", a % b);

    // 比較運算子
    printf("a > b: %d\\n", a > b);
    printf("a == b: %d\\n", a == b);

    // 邏輯運算子
    printf("a>0 && b>0: %d\\n", a > 0 && b > 0);
    printf("a>0 || b<0: %d\\n", a > 0 || b < 0);

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "宣告兩個整數變數 `x = 15` 與 `y = 4`，印出它們的商與餘數。",
            en: "Declare two integer variables `x = 15` and `y = 4`, then print their quotient and remainder.",
          },
          hint: {
            "zh-TW": "使用 `/` 取商，`%` 取餘數，用 `printf` 搭配 `%d` 印出。",
            en: "Use `/` for quotient and `%` for remainder, print with `printf` and `%d`.",
          },
          answer: `#include <stdio.h>

int main() {
    int x = 15, y = 4;
    printf("商: %d\\n", x / y);
    printf("餘數: %d\\n", x % y);
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

\`\`\`c
if (條件1) {
    // 條件1 為真時執行
} else if (條件2) {
    // 條件2 為真時執行
} else {
    // 以上條件都不成立時執行
}
\`\`\`

### 成績等級範例

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else if (score >= 70) {
    printf("C\\n");
} else {
    printf("F\\n");
}
\`\`\`

### 注意事項

- 條件必須放在括號 \`()\` 中
- 單行區塊可省略大括號 \`{}\`，但建議保留
- C 語言中沒有布林型別，\`0\` 為假，非零為真`,
          en: `## Conditionals

### if / else if / else

\`\`\`c
if (condition1) {
    // executes when condition1 is true
} else if (condition2) {
    // executes when condition2 is true
} else {
    // executes when none of the above match
}
\`\`\`

### Grade Example

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else if (score >= 70) {
    printf("C\\n");
} else {
    printf("F\\n");
}
\`\`\`

### Notes

- Conditions must be inside parentheses \`()\`
- Braces \`{}\` can be omitted for single-line blocks, but it is recommended to keep them
- C has no boolean type; \`0\` is false, non-zero is true`,
        },
        defaultCode: `#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("成績：A\\n");
    } else if (score >= 80) {
        printf("成績：B\\n");
    } else if (score >= 70) {
        printf("成績：C\\n");
    } else {
        printf("成績：F\\n");
    }

    // 奇偶數判斷
    int num = 7;
    if (num % 2 == 0) {
        printf("%d 是偶數\\n", num);
    } else {
        printf("%d 是奇數\\n", num);
    }

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "宣告一個整數 `temperature`，若大於等於 30 印出「天氣炎熱」，介於 20 到 29 印出「天氣舒適」，否則印出「天氣寒冷」。",
            en: "Declare an integer `temperature`. If it is 30 or above print \"Hot\", if between 20 and 29 print \"Comfortable\", otherwise print \"Cold\".",
          },
          hint: {
            "zh-TW": "使用 `if / else if / else` 結構，搭配 `>=` 和 `<` 運算子。",
            en: "Use `if / else if / else` with `>=` and `<` operators.",
          },
          answer: `#include <stdio.h>

int main() {
    int temperature = 25;
    if (temperature >= 30) {
        printf("天氣炎熱\\n");
    } else if (temperature >= 20) {
        printf("天氣舒適\\n");
    } else {
        printf("天氣寒冷\\n");
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

適合已知執行次數的情況。

\`\`\`c
for (初始值; 條件; 更新) {
    // 重複執行的程式碼
}
\`\`\`

範例：印出 1 到 5

\`\`\`c
for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}
\`\`\`

### while 迴圈

適合條件不確定的情況。

\`\`\`c
while (條件) {
    // 條件為真時持續執行
}
\`\`\`

範例：用 while 印出 1 到 5

\`\`\`c
int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++;
}
\`\`\`

### break 與 continue

- \`break\`：立即跳出迴圈
- \`continue\`：跳過本次迭代，繼續下一次`,
          en: `## Loops

### for Loop

Best when the number of iterations is known.

\`\`\`c
for (init; condition; update) {
    // code to repeat
}
\`\`\`

Example: print 1 to 5

\`\`\`c
for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}
\`\`\`

### while Loop

Best when the number of iterations is unknown.

\`\`\`c
while (condition) {
    // repeats while condition is true
}
\`\`\`

Example: print 1 to 5 with while

\`\`\`c
int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++;
}
\`\`\`

### break and continue

- \`break\`: immediately exit the loop
- \`continue\`: skip current iteration and continue to next`,
        },
        defaultCode: `#include <stdio.h>

int main() {
    // for 迴圈：印出 1 到 5
    printf("for 迴圈：\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    // while 迴圈：計算 1+2+...+10
    printf("while 迴圈（加總）：\\n");
    int sum = 0, n = 1;
    while (n <= 10) {
        sum += n;
        n++;
    }
    printf("1 到 10 的總和 = %d\\n", sum);

    // continue 範例：印出 1~10 中的偶數
    printf("偶數：\\n");
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) continue;
        printf("%d ", i);
    }
    printf("\\n");

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "使用 for 迴圈印出 1 到 10 中所有的奇數。",
            en: "Use a for loop to print all odd numbers from 1 to 10.",
          },
          hint: {
            "zh-TW": "判斷奇數可用 `i % 2 != 0`，或讓 i 每次遞增 2（從 1 開始）。",
            en: "Check odd numbers with `i % 2 != 0`, or increment i by 2 starting from 1.",
          },
          answer: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            printf("%d\\n", i);
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

函式可以將程式碼組織成可重用的區塊，讓程式更清晰易維護。

### 函式定義語法

\`\`\`c
回傳型別 函式名稱(參數型別 參數名稱, ...) {
    // 函式本體
    return 回傳值;
}
\`\`\`

### 有回傳值的函式

\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

### void 函式（無回傳值）

\`\`\`c
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}
\`\`\`

### 函式宣告（前置宣告）

若函式定義在 \`main\` 之後，需在前面加上宣告：

\`\`\`c
int add(int a, int b);  // 前置宣告

int main() {
    printf("%d\\n", add(3, 4));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\``,
          en: `## Functions

Functions organize code into reusable blocks, making programs clearer and easier to maintain.

### Function Syntax

\`\`\`c
return_type function_name(param_type param_name, ...) {
    // function body
    return value;
}
\`\`\`

### Function with Return Value

\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

### void Function (no return value)

\`\`\`c
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}
\`\`\`

### Function Declaration (Forward Declaration)

If a function is defined after \`main\`, declare it first:

\`\`\`c
int add(int a, int b);  // forward declaration

int main() {
    printf("%d\\n", add(3, 4));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\``,
        },
        defaultCode: `#include <stdio.h>

// 有回傳值的函式
int add(int a, int b) {
    return a + b;
}

// 計算最大值
int max(int a, int b) {
    return (a > b) ? a : b;
}

// void 函式
void printSeparator() {
    printf("----------\\n");
}

int main() {
    int x = 10, y = 20;

    printSeparator();
    printf("add(%d, %d) = %d\\n", x, y, add(x, y));
    printf("max(%d, %d) = %d\\n", x, y, max(x, y));
    printSeparator();

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "撰寫一個函式 `int square(int n)`，回傳 n 的平方，並在 main 中呼叫它印出 1 到 5 的平方。",
            en: "Write a function `int square(int n)` that returns n squared, then call it in main to print the squares of 1 through 5.",
          },
          hint: {
            "zh-TW": "函式回傳 `n * n`，在 main 裡用 for 迴圈呼叫。",
            en: "The function returns `n * n`. Call it inside a for loop in main.",
          },
          answer: `#include <stdio.h>

int square(int n) {
    return n * n;
}

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d 的平方 = %d\\n", i, square(i));
    }
    return 0;
}`,
        },
      },
      {
        id: "arrays",
        title: { "zh-TW": "陣列", en: "Arrays" },
        content: {
          "zh-TW": `## 陣列

陣列用來儲存多個相同型別的資料，透過索引存取元素（從 \`0\` 開始）。

### 宣告與初始化

\`\`\`c
// 宣告並初始化
int nums[5] = {10, 20, 30, 40, 50};

// 只宣告（內容未定義）
int data[10];

// 宣告時可省略大小
int primes[] = {2, 3, 5, 7, 11};
\`\`\`

### 存取元素

\`\`\`c
printf("%d\\n", nums[0]);   // 10
printf("%d\\n", nums[4]);   // 50
nums[2] = 99;               // 修改第三個元素
\`\`\`

### 用 for 迴圈遍歷

\`\`\`c
int len = 5;
for (int i = 0; i < len; i++) {
    printf("%d\\n", nums[i]);
}
\`\`\`

### 注意事項

- C 語言不會自動檢查陣列邊界，越界存取是未定義行為
- 陣列大小在宣告後不可更改`,
          en: `## Arrays

Arrays store multiple values of the same type, accessed by index (starting from \`0\`).

### Declaration and Initialization

\`\`\`c
// declare and initialize
int nums[5] = {10, 20, 30, 40, 50};

// declare only (contents undefined)
int data[10];

// size can be omitted when initializing
int primes[] = {2, 3, 5, 7, 11};
\`\`\`

### Accessing Elements

\`\`\`c
printf("%d\\n", nums[0]);   // 10
printf("%d\\n", nums[4]);   // 50
nums[2] = 99;               // modify the third element
\`\`\`

### Iterating with a for Loop

\`\`\`c
int len = 5;
for (int i = 0; i < len; i++) {
    printf("%d\\n", nums[i]);
}
\`\`\`

### Notes

- C does not check array bounds automatically; out-of-bounds access is undefined behavior
- Array size cannot be changed after declaration`,
        },
        defaultCode: `#include <stdio.h>

int main() {
    int scores[5] = {88, 72, 95, 60, 83};
    int len = 5;

    // 印出所有元素
    printf("成績列表：\\n");
    for (int i = 0; i < len; i++) {
        printf("  scores[%d] = %d\\n", i, scores[i]);
    }

    // 計算平均
    int sum = 0;
    for (int i = 0; i < len; i++) {
        sum += scores[i];
    }
    printf("平均分數：%.1f\\n", (double)sum / len);

    // 找最大值
    int maxVal = scores[0];
    for (int i = 1; i < len; i++) {
        if (scores[i] > maxVal) {
            maxVal = scores[i];
        }
    }
    printf("最高分：%d\\n", maxVal);

    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "宣告一個含有 6 個整數的陣列 `{3, 1, 4, 1, 5, 9}`，用迴圈印出每個元素，並計算總和。",
            en: "Declare an array of 6 integers `{3, 1, 4, 1, 5, 9}`, print each element using a loop, and compute the sum.",
          },
          hint: {
            "zh-TW": "用 for 迴圈從 `i = 0` 到 `i < 6` 遍歷，累加到 `sum` 變數。",
            en: "Use a for loop from `i = 0` to `i < 6`, accumulate into a `sum` variable.",
          },
          answer: `#include <stdio.h>

int main() {
    int arr[] = {3, 1, 4, 1, 5, 9};
    int len = 6;
    int sum = 0;
    for (int i = 0; i < len; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
        sum += arr[i];
    }
    printf("總和 = %d\\n", sum);
    return 0;
}`,
        },
      },
    ],
  },
];

export default chapters;
