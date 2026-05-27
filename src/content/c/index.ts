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
  {
    id: "leetcode",
    title: { "zh-TW": "LeetCode 經典題", en: "LeetCode Classics" },
    lessons: [
      {
        id: "two-sum",
        title: { "zh-TW": "#1 兩數之和", en: "#1 Two Sum" },
        content: {
          "zh-TW": `## LeetCode #1 — Two Sum（兩數之和）

C 語言沒有內建雜湊表，常見做法：

1. **暴力 O(n²)**：雙層迴圈，簡單直接
2. **排序 + 雙指針 O(n log n)**：需額外記錄原始索引

此範例使用暴力法展示核心邏輯，同時了解 C 語言的陣列操作。`,
          en: `## LeetCode #1 — Two Sum

C has no built-in hash table. Common approaches:

1. **Brute force O(n²)**: nested loops, simple and direct
2. **Sort + two pointers O(n log n)**: requires tracking original indices

This example uses brute force to show core logic and C array operations.`,
        },
        defaultCode: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* result = (int*)malloc(2 * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int size = 4, retSize;
    int* r = twoSum(nums, size, 9, &retSize);
    if (r) {
        printf("[%d, %d]\\n", r[0], r[1]); // [0, 1]
        free(r);
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改程式：若找不到答案，印出「No solution」並回傳 NULL。測試 twoSum([1,2,3], 10)。",
            en: "Modify the program: if no answer, print \"No solution\" and return NULL. Test with [1,2,3] and target=10.",
          },
          hint: {
            "zh-TW": "在 return NULL 前加 printf(\"No solution\\n\")，main 中用 if(r) 判斷",
            en: 'Before return NULL, add printf("No solution\\n"); use if(r) in main to check',
          },
          answer: `#include <stdio.h>
#include <stdlib.h>
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* result = (int*)malloc(2 * sizeof(int));
    for (int i = 0; i < numsSize; i++)
        for (int j = i+1; j < numsSize; j++)
            if (nums[i] + nums[j] == target) {
                result[0]=i; result[1]=j;
                return result;
            }
    printf("No solution\\n");
    *returnSize = 0;
    free(result);
    return NULL;
}
int main() {
    int nums[] = {1,2,3};
    int retSize;
    int* r = twoSum(nums, 3, 10, &retSize);
    if (r) { printf("[%d,%d]\\n",r[0],r[1]); free(r); }
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

C 語言版本使用簡單的條件判斷取代 \`max()\` 函式：

\`\`\`c
current = (nums[i] > current + nums[i]) ? nums[i] : current + nums[i];
\`\`\`

也可 \`#include <math.h>\` 使用 \`fmax()\`，但整數用三元運算子更直接。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

In C, use a ternary operator instead of a max() function:

\`\`\`c
current = (nums[i] > current + nums[i]) ? nums[i] : current + nums[i];
\`\`\``,
        },
        defaultCode: `#include <stdio.h>

int maxSubArray(int* nums, int size) {
    int current = nums[0], best = nums[0];
    for (int i = 1; i < size; i++) {
        current = (nums[i] > current + nums[i]) ? nums[i] : current + nums[i];
        best = (current > best) ? current : best;
    }
    return best;
}

int main() {
    int a[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    printf("%d\\n", maxSubArray(a, 9)); // 6

    int b[] = {5, 4, -1, 7, 8};
    printf("%d\\n", maxSubArray(b, 5)); // 23
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改 maxSubArray 同時用指標參數輸出子陣列的起始索引（int* startIdx）。",
            en: "Modify maxSubArray to output the start index of the maximum subarray via a pointer parameter int* startIdx.",
          },
          hint: {
            "zh-TW": "加 int tempStart=0; current 重置時 tempStart=i; best 更新時 *startIdx=tempStart",
            en: "Add int tempStart=0; when current resets set tempStart=i; when best updates set *startIdx=tempStart",
          },
          answer: `#include <stdio.h>
int maxSubArray(int* nums, int size, int* startIdx) {
    int current = nums[0], best = nums[0];
    int tempStart = 0;
    *startIdx = 0;
    for (int i = 1; i < size; i++) {
        if (nums[i] > current + nums[i]) {
            current = nums[i];
            tempStart = i;
        } else {
            current += nums[i];
        }
        if (current > best) {
            best = current;
            *startIdx = tempStart;
        }
    }
    return best;
}
int main() {
    int a[] = {-2,1,-3,4,-1,2,1,-5,4};
    int start;
    printf("總和=%d 起始=%d\\n", maxSubArray(a,9,&start), start); // 6, 3
}`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階，每次 1 或 2 階，共幾種方法？

**C 語言動態規劃：**

使用兩個整數變數迭代，O(1) 空間：

\`\`\`c
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

C 語言沒有 Python/JS 的多重賦值，需用暫存變數交換。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**C dynamic programming:**

Use two integer variables iteratively, O(1) space:

\`\`\`c
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

C has no simultaneous assignment like Python/JS — a temp variable is required.`,
        },
        defaultCode: `#include <stdio.h>

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
        printf("n=%d: %d 種方法\\n", i, climbStairs(i));
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "用陣列 dp[] 改寫，先宣告 int dp[50] 並印出每一階的 dp[i] 值（測試到 n=8）。",
            en: "Rewrite using an array dp[]. Declare int dp[50] and print dp[i] for each step up to n=8.",
          },
          hint: {
            "zh-TW": "dp[1]=1, dp[2]=2，之後 dp[i]=dp[i-1]+dp[i-2]",
            en: "dp[1]=1, dp[2]=2, then dp[i]=dp[i-1]+dp[i-2]",
          },
          answer: `#include <stdio.h>
int climbStairs(int n) {
    int dp[50];
    dp[1] = 1; dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        printf("dp[%d]=%d\\n", i, dp[i]);
    }
    return dp[n];
}
int main() {
    printf("n=8: %d 種方法\\n", climbStairs(8)); // 34
}`,
        },
      },
      {
        id: "best-time-stock",
        title: { "zh-TW": "#121 買賣股票最佳時機", en: "#121 Best Time to Buy and Sell Stock" },
        content: {
          "zh-TW": `## LeetCode #121 — Best Time to Buy and Sell Stock（買賣股票最佳時機）

貪心策略：追蹤目前最低價格，計算賣出利潤，更新最大利潤。O(n) 時間 O(1) 空間。C語言使用 INT_MAX 和 limits.h。`,
          en: `## LeetCode #121 — Best Time to Buy and Sell Stock

Greedy: track min price, calculate sell profit, update max profit. O(n) time O(1) space. Uses INT_MAX from limits.h.`,
        },
        defaultCode: `#include <stdio.h>
#include <limits.h>

int maxProfit(int* prices, int n) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int i = 0; i < n; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        int profit = prices[i] - minPrice;
        if (profit > maxProfit) maxProfit = profit;
    }
    return maxProfit;
}

int main() {
    int prices1[] = {7, 1, 5, 3, 6, 4};
    printf("%d\\n", maxProfit(prices1, 6));  // 5

    int prices2[] = {7, 6, 4, 3, 1};
    printf("%d\\n", maxProfit(prices2, 5));  // 0

    printf("\\n每日分析：\\n");
    int minP = INT_MAX;
    for (int i = 0; i < 6; i++) {
        if (prices1[i] < minP) minP = prices1[i];
        printf("Day %d: price=%d, min=%d, profit=%d\\n",
            i+1, prices1[i], minP, prices1[i]-minP);
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "多次買賣求最大利潤",
            en: "Multiple buy/sell max profit",
          },
          hint: {
            "zh-TW": "if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]",
            en: "if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]",
          },
          answer: `#include <stdio.h>
int maxProfitMulti(int* prices, int n) {
    int profit = 0;
    for (int i = 1; i < n; i++)
        if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
    return profit;
}
int main() {
    int p1[]={7,1,5,3,6,4}; printf("%d\\n", maxProfitMulti(p1,6));  // 7
    int p2[]={1,2,3,4,5};   printf("%d\\n", maxProfitMulti(p2,5));  // 4
}`,
        },
      },
      {
        id: "valid-anagram",
        title: { "zh-TW": "#242 有效的字母異位詞", en: "#242 Valid Anagram" },
        content: {
          "zh-TW": `## LeetCode #242 — Valid Anagram（有效的字母異位詞）

判斷字串 t 是否為 s 的字母異位詞。C語言用 strlen 比較長度，用 int count[26] 計數。s的字母+1，t的字母-1，確認全為0。O(n) 時間 O(1) 空間。`,
          en: `## LeetCode #242 — Valid Anagram

Check if t is anagram of s. In C, use strlen for length, int count[26] for frequency. +1 for s, -1 for t, verify all zero.`,
        },
        defaultCode: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isAnagram(char* s, char* t) {
    if (strlen(s) != strlen(t)) return false;
    int count[26] = {0};
    for (int i = 0; s[i]; i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int i = 0; i < 26; i++) if (count[i] != 0) return false;
    return true;
}

int main() {
    printf("%s\\n", isAnagram("anagram", "nagaram") ? "true" : "false");  // true
    printf("%s\\n", isAnagram("rat", "car") ? "true" : "false");           // false
    printf("%s\\n", isAnagram("listen", "silent") ? "true" : "false");     // true

    // 展示計數過程
    char* s = "anagram";
    char* t = "nagaram";
    int cnt[26] = {0};
    for (int i = 0; s[i]; i++) { cnt[s[i]-'a']++; cnt[t[i]-'a']--; }
    printf("\\n計數結果（只顯示非0）：\\n");
    for (int i = 0; i < 26; i++)
        if (cnt[i] != 0) printf("'%c': %d\\n", 'a'+i, cnt[i]);
    printf("全為0：%s\\n", isAnagram(s, t) ? "true" : "false");
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "不用 stdbool.h，用 int 回傳值（1=true, 0=false）重寫 isAnagram 函式。",
            en: "Rewrite isAnagram without stdbool.h, return int (1=true, 0=false).",
          },
          hint: {
            "zh-TW": "int isAnagram(char* s, char* t) { ... return 1; } 最後 return 0",
            en: "int isAnagram(char* s, char* t) { ... return 1; } at end return 0",
          },
          answer: `#include <stdio.h>
#include <string.h>
int isAnagram(char* s, char* t) {
    if (strlen(s) != strlen(t)) return 0;
    int count[26] = {0};
    for (int i = 0; s[i]; i++) { count[s[i]-'a']++; count[t[i]-'a']--; }
    for (int i = 0; i < 26; i++) if (count[i] != 0) return 0;
    return 1;
}
int main() {
    printf("%d\\n", isAnagram("anagram", "nagaram"));  // 1
    printf("%d\\n", isAnagram("rat", "car"));           // 0
}`,
        },
      },
      {
        id: "binary-search",
        title: { "zh-TW": "#704 二元搜尋", en: "#704 Binary Search" },
        content: {
          "zh-TW": `## LeetCode #704 — Binary Search（二元搜尋）

在已排序陣列中搜尋目標值。核心：left<=right, mid=left+(right-left)/2（避免溢位），比目標小則left=mid+1，比目標大則right=mid-1。O(log n) 時間 O(1) 空間。`,
          en: `## LeetCode #704 — Binary Search

Search sorted array. Key: left<=right, mid=left+(right-left)/2 to avoid overflow. If too small left=mid+1, too big right=mid-1.`,
        },
        defaultCode: `#include <stdio.h>

int binarySearch(int* nums, int n, int target) {
    int left = 0, right = n - 1, steps = 0;
    while (left <= right) {
        steps++;
        int mid = left + (right - left) / 2;
        printf("  步驟%d: [%d,%d] mid=%d nums[mid]=%d\\n",
            steps, left, right, mid, nums[mid]);
        if (nums[mid] == target) {
            printf("  找到！index=%d\\n", mid);
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    printf("  找不到，共%d步\\n", steps);
    return -1;
}

int main() {
    int nums[] = {-1, 0, 3, 5, 9, 12};
    int n = 6;
    printf("搜尋 9：\\n");
    printf("%d\\n", binarySearch(nums, n, 9));   // 4
    printf("\\n搜尋 2：\\n");
    printf("%d\\n", binarySearch(nums, n, 2));   // -1
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "搜尋插入位置（LeetCode #35）：目標不存在時回傳應插入的索引。",
            en: "Search Insert Position (LeetCode #35): return insertion index if not found.",
          },
          hint: {
            "zh-TW": "迴圈結束後 left 就是插入位置",
            en: "After loop, left is the insertion position",
          },
          answer: `#include <stdio.h>
int searchInsert(int* nums, int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}
int main() {
    int nums[] = {1,3,5,6};
    printf("%d\\n", searchInsert(nums, 4, 5));  // 2
    printf("%d\\n", searchInsert(nums, 4, 2));  // 1
    printf("%d\\n", searchInsert(nums, 4, 7));  // 4
    printf("%d\\n", searchInsert(nums, 4, 0));  // 0
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

**C 語言遞迴：**

\`\`\`c
void hanoi(int n, char from, char to, char aux);
\`\`\`

C 語言用 \`char\` 傳遞柱子名稱（A/B/C），\`printf\` 用 \`%c\` 格式化輸出。

移動次數：**2ⁿ - 1**`,
          en: `## Tower of Hanoi

Three pegs A, B, C — move n discs from A to C. Rules: one at a time, never larger on smaller.

**C recursive function:**

\`\`\`c
void hanoi(int n, char from, char to, char aux);
\`\`\`

C uses \`char\` for peg names; \`printf\` with \`%c\` for output.

Moves: **2ⁿ - 1**`,
        },
        defaultCode: `#include <stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("  移動第 1 個碟子：%c → %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    printf("  移動第 %d 個碟子：%c → %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main() {
    int n;
    for (n = 1; n <= 4; n++) {
        printf("n=%d（需 %d 步）：\\n", n, (1 << n) - 1);
        hanoi(n, 'A', 'C', 'B');
        printf("\\n");
    }
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改為回傳步數的版本（int hanoi(...)），確認 n=5 時為 31。",
            en: "Modify to return int step count. Verify n=5 = 31.",
          },
          hint: {
            "zh-TW": "return hanoi(n-1,...) + 1 + hanoi(n-1,...)",
            en: "return hanoi(n-1,...) + 1 + hanoi(n-1,...)",
          },
          answer: `#include <stdio.h>
int hanoi(int n, char from, char to, char aux) {
    if (n == 1) { printf("  %c → %c\\n", from, to); return 1; }
    int a = hanoi(n-1, from, aux, to);
    printf("  %c → %c\\n", from, to);
    return a + 1 + hanoi(n-1, aux, to, from);
}
int main() {
    printf("共 %d 步\\n", hanoi(5,'A','C','B')); // 31
    return 0;
}`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

C 語言用二維陣列 \`int maze[N][N]\` 表示迷宮，全域變數存 sol 矩陣。

**回溯法核心：**
1. 嘗試向下或向右移動
2. 死路：sol[x][y] = 0（退回）
3. 再試另一方向

C 語言中遞迴函式的內部函式需宣告在同一作用域或使用全域變數。`,
          en: `## Rat in a Maze (Backtracking)

C uses int maze[N][N] for the maze, with global variables for the solution matrix.

**Backtracking:**
1. Try down or right
2. Dead end: sol[x][y] = 0 (backtrack)
3. Try other direction

In C, recursive helper functions must be declared at file scope or use global variables.`,
        },
        defaultCode: `#include <stdio.h>

#define N 4

int maze[N][N] = {
    {1, 0, 0, 0},
    {1, 1, 0, 1},
    {0, 1, 0, 0},
    {0, 1, 1, 1}
};
int sol[N][N] = {0};

int isSafe(int x, int y) {
    return x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1;
}

int backtrack(int x, int y) {
    if (x == N-1 && y == N-1) { sol[x][y] = 1; return 1; }
    if (isSafe(x, y)) {
        sol[x][y] = 1;
        if (backtrack(x+1, y) || backtrack(x, y+1)) return 1;
        sol[x][y] = 0;
    }
    return 0;
}

int main() {
    if (backtrack(0, 0)) {
        printf("找到路徑：\\n");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                printf("%s ", sol[i][j] ? "■" : "□");
            printf("\\n");
        }
    } else printf("無解\\n");
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "加入 step 全域計數器，每次進入 backtrack 時遞增（包含退回的步驟），最後印出總嘗試次數。",
            en: "Add a global step counter, increment it each time backtrack is called (including backtracks), then print the total attempts.",
          },
          hint: {
            "zh-TW": "在 backtrack 函式一開始加 step++，在 main 最後 printf(\"嘗試 %d 次\\n\", step)",
            en: "Add step++ at the start of backtrack; printf(\"Attempts: %d\\n\", step) in main",
          },
          answer: `#include <stdio.h>
#define N 4
int maze[N][N]={{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}};
int sol[N][N]={0};
int step=0;
int isSafe(int x,int y){return x>=0&&x<N&&y>=0&&y<N&&maze[x][y]==1;}
int backtrack(int x,int y){
    step++;
    if(x==N-1&&y==N-1){sol[x][y]=1;return 1;}
    if(isSafe(x,y)){
        sol[x][y]=1;
        if(backtrack(x+1,y)||backtrack(x,y+1))return 1;
        sol[x][y]=0;
    }
    return 0;
}
int main(){
    backtrack(0,0);
    for(int i=0;i<N;i++){for(int j=0;j<N;j++)printf("%s ",sol[i][j]?"■":"□");printf("\\n");}
    printf("共嘗試 %d 次\\n",step);
    return 0;
}`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，任兩皇后不互攻。

**C 語言實作：**

\`int board[N]\` 陣列記錄每行皇后的欄位位置。

安全判斷（整數運算，不需 \`abs()\` 標頭）：
\`\`\`c
board[r] == col
abs(board[r]-col) == abs(r-row)
\`\`\`

需 \`#include <stdlib.h>\` 取得 \`abs()\`。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**C implementation:**

\`int board[N]\` records each row's queen column.

Safety check (integer arithmetic, need stdlib.h for abs()):
\`\`\`c
board[r] == col
abs(board[r]-col) == abs(r-row)
\`\`\``,
        },
        defaultCode: `#include <stdio.h>
#include <stdlib.h>

#define N 8

int board[N];
int count = 0;

int isSafe(int row, int col) {
    for (int r = 0; r < row; r++)
        if (board[r] == col || abs(board[r]-col) == abs(r-row))
            return 0;
    return 1;
}

void printBoard() {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%s", j == board[i] ? "♛" : "·");
        printf("\\n");
    }
    printf("\\n");
}

void backtrack(int row) {
    if (row == N) {
        count++;
        if (count == 1) { /* 只印第一個解 */
            printf("第一種解法：\\n");
            printBoard();
        }
        return;
    }
    for (int col = 0; col < N; col++) {
        if (isSafe(row, col)) {
            board[row] = col;
            backtrack(row + 1);
            board[row] = -1;
        }
    }
}

int main() {
    for (int i = 0; i < N; i++) board[i] = -1;
    backtrack(0);
    printf("8 皇后共有 %d 種解法\\n", count);
    return 0;
}`,
        exercise: {
          question: {
            "zh-TW": "修改 #define N 8 為 N 6（六皇后），確認共有 4 種解法，並印出全部解法。",
            en: "Change #define N 8 to N 6 (6-Queens), verify 4 solutions, and print all boards.",
          },
          hint: {
            "zh-TW": "把 if (count == 1) 條件移除，讓每個解法都印出",
            en: "Remove the if (count == 1) condition to print all solutions",
          },
          answer: `#include <stdio.h>
#include <stdlib.h>
#define N 6
int board[N],count=0;
int isSafe(int row,int col){for(int r=0;r<row;r++) if(board[r]==col||abs(board[r]-col)==abs(r-row)) return 0;return 1;}
void printBoard(){for(int i=0;i<N;i++){for(int j=0;j<N;j++)printf("%s",j==board[i]?"♛":"·");printf("\\n");}printf("\\n");}
void backtrack(int row){
    if(row==N){count++;printf("解法 %d：\\n",count);printBoard();return;}
    for(int col=0;col<N;col++) if(isSafe(row,col)){board[row]=col;backtrack(row+1);board[row]=-1;}
}
int main(){for(int i=0;i<N;i++)board[i]=-1;backtrack(0);printf("共 %d 種\\n",count);return 0;}`,
        },
      },
    ],
  },
];

export default chapters;
