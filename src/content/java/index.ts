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
          "zh-TW": `## Java 簡介

Java 是「寫一次，到處執行」的物件導向語言，廣泛用於企業後端、Android 開發與大型系統。

### 程式結構

每個 Java 程式都必須有一個 **class**，以及 \`main\` 方法作為程式的入口點。

\`\`\`java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

- \`class Main\`：定義一個名為 Main 的類別
- \`public static void main(String[] args)\`：程式從這裡開始執行
- \`System.out.println(...)\`：將文字輸出到終端機，並換行

> **執行需求**：需安裝 JDK（Java Development Kit）。`,
          en: `## Introduction to Java

Java is a "write once, run anywhere" object-oriented language, widely used in enterprise backends, Android development, and large-scale systems.

### Program Structure

Every Java program needs a **class** with a \`main\` method as the entry point.

\`\`\`java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

- \`class Main\`: defines a class named Main
- \`public static void main(String[] args)\`: the program starts here
- \`System.out.println(...)\`: prints text to the terminal with a newline

> **Runtime requirement**: Requires JDK (Java Development Kit).`,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數與型別", en: "Variables & Types" },
        content: {
          "zh-TW": `## Java 變數與資料型別

Java 是**靜態型別**語言，每個變數都必須有明確的型別。

### 常見基本型別

| 型別 | 說明 | 範例 |
|------|------|------|
| \`int\` | 整數 | \`42\` |
| \`double\` | 浮點數 | \`3.14\` |
| \`boolean\` | 布林值 | \`true\` / \`false\` |
| \`char\` | 單一字元 | \`'A'\` |

### 參考型別

- \`String\`：字串（用雙引號）

### var（Java 10+）

Java 10 起可用 \`var\` 讓編譯器自動推斷型別：

\`\`\`java
var message = "Hello";  // 推斷為 String
var count = 10;         // 推斷為 int
\`\`\`

### 字串串接

用 \`+\` 可以將字串與其他型別拼接：

\`\`\`java
String name = "Alice";
int age = 25;
System.out.println(name + " is " + age + " years old.");
\`\`\``,
          en: `## Java Variables & Data Types

Java is a **statically typed** language — every variable must have a declared type.

### Common Primitive Types

| Type | Description | Example |
|------|-------------|---------|
| \`int\` | Integer | \`42\` |
| \`double\` | Floating-point | \`3.14\` |
| \`boolean\` | Boolean | \`true\` / \`false\` |
| \`char\` | Single character | \`'A'\` |

### Reference Types

- \`String\`: text (use double quotes)

### var (Java 10+)

Since Java 10, you can use \`var\` and let the compiler infer the type:

\`\`\`java
var message = "Hello";  // inferred as String
var count = 10;         // inferred as int
\`\`\`

### String Concatenation

Use \`+\` to join strings with other values:

\`\`\`java
String name = "Alice";
int age = 25;
System.out.println(name + " is " + age + " years old.");
\`\`\``,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        int age = 25;
        double salary = 50000.0;
        boolean isStudent = false;
        String name = "Alice";
        var city = "Taipei";

        System.out.println(name + " is " + age + " years old.");
        System.out.println("Salary: " + salary);
        System.out.println("Is student: " + isStudent);
        System.out.println("City: " + city);
    }
}`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## Java 運算子

### 算術運算子

| 運算子 | 說明 | 範例 |
|--------|------|------|
| \`+\` | 加法 | \`5 + 3\` → \`8\` |
| \`-\` | 減法 | \`5 - 3\` → \`2\` |
| \`*\` | 乘法 | \`5 * 3\` → \`15\` |
| \`/\` | 除法 | \`10 / 3\` → \`3\`（整數除法） |
| \`%\` | 取餘數 | \`10 % 3\` → \`1\` |

> 注意：兩個整數相除結果仍為整數。若需小數結果，至少一個運算元要是 \`double\`。

### 比較運算子

回傳 \`boolean\` 值（\`true\` 或 \`false\`）：

\`==\` \`!=\` \`>\` \`<\` \`>=\` \`<=\`

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`&&\` | 且（AND） |
| \`||\` | 或（OR） |
| \`!\` | 非（NOT） |`,
          en: `## Java Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| \`+\` | Addition | \`5 + 3\` → \`8\` |
| \`-\` | Subtraction | \`5 - 3\` → \`2\` |
| \`*\` | Multiplication | \`5 * 3\` → \`15\` |
| \`/\` | Division | \`10 / 3\` → \`3\` (integer division) |
| \`%\` | Modulus | \`10 % 3\` → \`1\` |

> Note: dividing two integers yields an integer. Use \`double\` for decimal results.

### Comparison Operators

Return a \`boolean\` (\`true\` or \`false\`):

\`==\` \`!=\` \`>\` \`<\` \`>=\` \`<=\`

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`&&\` | AND |
| \`||\` | OR |
| \`!\` | NOT |`,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        // 算術運算
        int a = 10, b = 3;
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));       // 整數除法
        System.out.println("a % b = " + (a % b));
        System.out.println("a / (double)b = " + (a / (double) b));

        // 比較運算
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));

        // 邏輯運算
        boolean x = true, y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}`,
      },
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## Java 條件判斷

### if / else if / else

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

### 條件的組合

可以用邏輯運算子組合多個條件：

\`\`\`java
int age = 20;
boolean hasID = true;

if (age >= 18 && hasID) {
    System.out.println("可以入場");
} else {
    System.out.println("無法入場");
}
\`\`\`

### 巢狀 if

\`if\` 可以嵌套在另一個 \`if\` 內，但應盡量保持程式簡潔。`,
          en: `## Java Conditionals

### if / else if / else

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

### Combining Conditions

Use logical operators to combine multiple conditions:

\`\`\`java
int age = 20;
boolean hasID = true;

if (age >= 18 && hasID) {
    System.out.println("Entry allowed");
} else {
    System.out.println("Entry denied");
}
\`\`\`

### Nested if

\`if\` statements can be nested, but keep code readable.`,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("成績：A");
        } else if (score >= 80) {
            System.out.println("成績：B");
        } else if (score >= 70) {
            System.out.println("成績：C");
        } else {
            System.out.println("成績：F");
        }

        // 嘗試修改 score 看看結果變化
        int age = 20;
        boolean hasID = true;
        if (age >= 18 && hasID) {
            System.out.println("可以入場");
        } else {
            System.out.println("無法入場");
        }
    }
}`,
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## Java 迴圈

### for 迴圈

適合**已知次數**的重複：

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}
\`\`\`

### while 迴圈

適合**條件成立時**持續執行：

\`\`\`java
int count = 0;
while (count < 5) {
    System.out.println("count = " + count);
    count++;
}
\`\`\`

### for-each 迴圈

用於遍歷陣列或集合，語法更簡潔：

\`\`\`java
int[] numbers = {10, 20, 30, 40, 50};
for (int n : numbers) {
    System.out.println(n);
}
\`\`\`

### break 與 continue

- \`break\`：立即跳出迴圈
- \`continue\`：跳過本次迭代，繼續下一次`,
          en: `## Java Loops

### for Loop

Best when the **number of iterations is known**:

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}
\`\`\`

### while Loop

Runs while a **condition is true**:

\`\`\`java
int count = 0;
while (count < 5) {
    System.out.println("count = " + count);
    count++;
}
\`\`\`

### for-each Loop

Cleanly iterates over arrays or collections:

\`\`\`java
int[] numbers = {10, 20, 30, 40, 50};
for (int n : numbers) {
    System.out.println(n);
}
\`\`\`

### break and continue

- \`break\`: exits the loop immediately
- \`continue\`: skips the current iteration`,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        // for 迴圈
        System.out.println("=== for 迴圈 ===");
        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }

        // while 迴圈
        System.out.println("=== while 迴圈 ===");
        int count = 10;
        while (count > 0) {
            System.out.println("倒數：" + count);
            count -= 3;
        }

        // for-each 迴圈
        System.out.println("=== for-each 迴圈 ===");
        String[] fruits = {"蘋果", "香蕉", "橘子"};
        for (String fruit : fruits) {
            System.out.println("水果：" + fruit);
        }
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
          "zh-TW": `## Java 方法

方法（Method）是組織程式邏輯的基本單位，讓程式碼可以**重複使用**。

### 定義靜態方法

在 \`main\` 之外定義 \`static\` 方法，即可在 \`main\` 中呼叫：

\`\`\`java
static int add(int a, int b) {
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

- **回傳型別**：方法回傳的資料型別；若不回傳任何值則用 \`void\`
- **參數**：呼叫時傳入的輸入值
- **return**：結束方法並回傳結果

### void 方法

不需要回傳值的方法使用 \`void\`：

\`\`\`java
static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
\`\`\``,
          en: `## Java Methods

Methods organize program logic into reusable blocks.

### Defining Static Methods

Define \`static\` methods outside \`main\`, then call them from \`main\`:

\`\`\`java
static int add(int a, int b) {
    return a + b;
}
\`\`\`

### Method Structure

\`\`\`
[modifier] returnType methodName(parameterList) {
    // method body
    return value;
}
\`\`\`

- **Return type**: the type of value returned; use \`void\` if nothing is returned
- **Parameters**: inputs passed when calling the method
- **return**: ends the method and sends back a result

### void Methods

Use \`void\` when no value needs to be returned:

\`\`\`java
static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
\`\`\``,
        },
        defaultCode: `class Main {
    // void 方法：不回傳值
    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // 回傳 int 的方法
    static int add(int a, int b) {
        return a + b;
    }

    // 回傳 double 的方法
    static double circleArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        greet("Alice");
        greet("Bob");

        int sum = add(3, 7);
        System.out.println("3 + 7 = " + sum);

        double area = circleArea(5.0);
        System.out.println("半徑 5 的圓面積：" + area);
    }
}`,
      },
      {
        id: "arrays",
        title: { "zh-TW": "陣列", en: "Arrays" },
        content: {
          "zh-TW": `## Java 陣列

陣列是**固定大小**、儲存相同型別元素的資料結構。

### 宣告與初始化

\`\`\`java
// 方式一：直接給值
int[] scores = {90, 85, 78, 92, 88};

// 方式二：指定大小，之後賦值
int[] numbers = new int[5];
numbers[0] = 10;
numbers[1] = 20;
\`\`\`

### 存取元素

索引從 **0** 開始：

\`\`\`java
System.out.println(scores[0]);  // 第一個元素
System.out.println(scores[scores.length - 1]);  // 最後一個元素
\`\`\`

### 遍歷陣列

\`\`\`java
// for 迴圈（取得索引）
for (int i = 0; i < scores.length; i++) {
    System.out.println(i + ": " + scores[i]);
}

// for-each（只需要值）
for (int score : scores) {
    System.out.println(score);
}
\`\`\`

### 二維陣列

\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(matrix[1][2]);  // 6
\`\`\``,
          en: `## Java Arrays

Arrays are **fixed-size** data structures that hold elements of the same type.

### Declaration and Initialization

\`\`\`java
// Method 1: initialize with values
int[] scores = {90, 85, 78, 92, 88};

// Method 2: specify size, assign later
int[] numbers = new int[5];
numbers[0] = 10;
numbers[1] = 20;
\`\`\`

### Accessing Elements

Indexes start at **0**:

\`\`\`java
System.out.println(scores[0]);  // first element
System.out.println(scores[scores.length - 1]);  // last element
\`\`\`

### Iterating Over Arrays

\`\`\`java
// for loop (with index)
for (int i = 0; i < scores.length; i++) {
    System.out.println(i + ": " + scores[i]);
}

// for-each (values only)
for (int score : scores) {
    System.out.println(score);
}
\`\`\`

### Two-Dimensional Arrays

\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(matrix[1][2]);  // 6
\`\`\``,
        },
        defaultCode: `class Main {
    public static void main(String[] args) {
        // 一維陣列
        int[] scores = {90, 85, 78, 92, 88};

        System.out.println("所有成績：");
        for (int score : scores) {
            System.out.print(score + " ");
        }
        System.out.println();

        // 計算平均
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        double average = (double) total / scores.length;
        System.out.println("平均成績：" + average);

        // 找最大值
        int max = scores[0];
        for (int score : scores) {
            if (score > max) max = score;
        }
        System.out.println("最高分：" + max);

        // 二維陣列
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("矩陣中間元素：" + matrix[1][1]);
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
          "zh-TW": `## Java 類別與物件

**物件導向程式設計（OOP）**是 Java 的核心思想。

### 類別（Class）

類別是物件的**藍圖**，定義了資料（欄位）和行為（方法）：

\`\`\`java
class Dog {
    // 欄位（Fields）
    String name;
    int age;

    // 建構子（Constructor）
    Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 方法（Method）
    void bark() {
        System.out.println(name + " says: Woof!");
    }
}
\`\`\`

### 建立物件

使用 \`new\` 關鍵字建立物件（實例）：

\`\`\`java
Dog myDog = new Dog("Buddy", 3);
myDog.bark();
System.out.println(myDog.name + " is " + myDog.age + " years old.");
\`\`\`

### this 關鍵字

\`this\` 代表「目前這個物件」，常用於區分欄位與參數名稱相同的情況。

### 建構子

建構子與類別同名，在 \`new\` 時自動呼叫，用來初始化物件的欄位。`,
          en: `## Java Classes & Objects

**Object-Oriented Programming (OOP)** is central to Java.

### Classes

A class is a **blueprint** for objects, defining data (fields) and behavior (methods):

\`\`\`java
class Dog {
    // Fields
    String name;
    int age;

    // Constructor
    Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    void bark() {
        System.out.println(name + " says: Woof!");
    }
}
\`\`\`

### Creating Objects

Use the \`new\` keyword to create an object (instance):

\`\`\`java
Dog myDog = new Dog("Buddy", 3);
myDog.bark();
System.out.println(myDog.name + " is " + myDog.age + " years old.");
\`\`\`

### The this Keyword

\`this\` refers to the current object — commonly used to distinguish fields from parameters with the same name.

### Constructors

A constructor has the same name as the class and is called automatically when \`new\` is used, to initialize the object's fields.`,
        },
        defaultCode: `class Dog {
    String name;
    int age;
    String breed;

    Dog(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    void bark() {
        System.out.println(name + " says: Woof!");
    }

    void introduce() {
        System.out.println("我是 " + name + "，" + age + " 歲的 " + breed + "。");
    }
}

class Main {
    public static void main(String[] args) {
        Dog dog1 = new Dog("Buddy", 3, "黃金獵犬");
        Dog dog2 = new Dog("Max", 5, "德國牧羊犬");

        dog1.introduce();
        dog1.bark();

        dog2.introduce();
        dog2.bark();

        System.out.println(dog1.name + " 比 " + dog2.name + " 年輕嗎？" + (dog1.age < dog2.age));
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

給定整數陣列 \`nums\` 與目標值 \`target\`，回傳兩個相加等於 \`target\` 的索引。

**核心技巧：HashMap**

Java 使用 \`HashMap<Integer, Integer>\` 儲存 \`num → index\`，查找 O(1)，整體 O(n)。

注意 Wandbox 執行需用 \`class Main\`（非 \`public class\`）。`,
          en: `## LeetCode #1 — Two Sum

Return indices of two numbers in \`nums\` that add up to \`target\`.

**Key technique: HashMap**

Java's \`HashMap<Integer, Integer>\` provides O(1) lookup — overall O(n) solution.

Note: use \`class Main\` (not \`public class\`) for Wandbox execution.`,
        },
        defaultCode: `import java.util.*;

class Main {
    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));  // [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));      // [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));        // [0, 1]
    }
}`,
        exercise: {
          question: {
            "zh-TW": "若陣列中有重複數字，例如 [3,3]，目前實作能正確回傳 [0,1] 嗎？說明原因。",
            en: "For duplicate numbers like [3,3], does the current implementation correctly return [0,1]? Explain why.",
          },
          hint: {
            "zh-TW": "遍歷到 i=0 時先查詢（complement=3 不在 Map），再存入。i=1 時 complement=3 已存在。",
            en: "At i=0, query first (complement=3 not in map), then store. At i=1, complement=3 is found.",
          },
          answer: `import java.util.*;
class Main {
    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        // [3,3] 正確：i=0 先查無，存 3->0；i=1 查到 3->0，回傳 [0,1]
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6))); // [0, 1]
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

**核心技巧：Deque 作為 Stack**

Java 推薦使用 \`Deque<Character> stack = new ArrayDeque<>()\` 而非 \`Stack\`（效能更佳）。

遇右括號時：\`stack.isEmpty()\` 先判斷空堆疊，再 \`stack.pop()\` 比對。`,
          en: `## LeetCode #20 — Valid Parentheses

Determine if a bracket string is validly matched.

**Key technique: Deque as Stack**

Java recommends \`Deque<Character> stack = new ArrayDeque<>()\` over \`Stack\` for better performance.

On closing bracket: check \`stack.isEmpty()\` first, then \`stack.pop()\` to compare.`,
        },
        defaultCode: `import java.util.*;

class Main {
    static boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));      // true
        System.out.println(isValid("()[]{}"));  // true
        System.out.println(isValid("(]"));      // false
        System.out.println(isValid("{[]}"));    // true
    }
}`,
        exercise: {
          question: {
            "zh-TW": "輸入 \")\" 時，若不先判斷 stack.isEmpty() 會發生什麼？加上 System.out.println 驗證。",
            en: "What happens for input \")\" if we don't check stack.isEmpty() first? Add println to verify.",
          },
          hint: {
            "zh-TW": "直接 stack.pop() 在空堆疊上會拋出 NoSuchElementException",
            en: "Calling stack.pop() on an empty deque throws NoSuchElementException",
          },
          answer: `import java.util.*;
class Main {
    static boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    System.out.println("堆疊為空，直接回傳 false");
                    return false;
                }
                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }
        return stack.isEmpty();
    }
    public static void main(String[] args) {
        System.out.println(isValid(")"));  // false (不會崩潰)
    }
}`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

找出整數陣列中連續子陣列的最大總和。

**Kadane's Algorithm — O(n)：**

\`\`\`java
current = Math.max(nums[i], current + nums[i]);
best    = Math.max(best, current);
\`\`\`

關鍵：初始值設為 \`nums[0]\`，正確處理全負數陣列的情況。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

\`\`\`java
current = Math.max(nums[i], current + nums[i]);
best    = Math.max(best, current);
\`\`\`

Key: initialize with \`nums[0]\` to correctly handle all-negative arrays.`,
        },
        defaultCode: `class Main {
    static int maxSubArray(int[] nums) {
        int current = nums[0];
        int best = nums[0];
        for (int i = 1; i < nums.length; i++) {
            current = Math.max(nums[i], current + nums[i]);
            best = Math.max(best, current);
        }
        return best;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // 6
        System.out.println(maxSubArray(new int[]{1}));                      // 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));            // 23
    }
}`,
        exercise: {
          question: {
            "zh-TW": "修改 maxSubArray 同時印出最大總和與子陣列的起始/結束索引，測試 [-2,1,-3,4,-1,2,1,-5,4]（期望：6，索引 3~6）。",
            en: "Modify maxSubArray to also print the start and end indices of the max subarray. Test with [-2,1,-3,4,-1,2,1,-5,4] (expected: 6, indices 3~6).",
          },
          hint: {
            "zh-TW": "當 current 重置為 nums[i] 時，tempStart = i；當 best 更新時，記錄 start=tempStart, end=i",
            en: "When current resets to nums[i], set tempStart = i; when best updates, record start=tempStart, end=i",
          },
          answer: `class Main {
    static void maxSubArray(int[] nums) {
        int current = nums[0], best = nums[0];
        int start = 0, end = 0, tempStart = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > current + nums[i]) {
                current = nums[i];
                tempStart = i;
            } else {
                current += nums[i];
            }
            if (current > best) {
                best = current;
                start = tempStart;
                end = i;
            }
        }
        System.out.println("最大總和: " + best + "，索引: " + start + "~" + end);
    }
    public static void main(String[] args) {
        maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}); // 最大總和: 6，索引: 3~6
    }
}`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階，每次爬 1 或 2 階，共有幾種方法？

**動態規劃（費波那契）— O(n) 時間、O(1) 空間：**

\`\`\`java
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

Java 使用暫存變數進行交換（無法像 Python/JS 那樣同時賦值）。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**DP (Fibonacci) — O(n) time, O(1) space:**

\`\`\`java
int temp = prev1;
prev1 = prev1 + prev2;
prev2 = temp;
\`\`\`

Java requires a temp variable for the swap (unlike Python/JS simultaneous assignment).`,
        },
        defaultCode: `class Main {
    static int climbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int temp = prev1;
            prev1 = prev1 + prev2;
            prev2 = temp;
        }
        return prev1;
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 7; i++) {
            System.out.println("n=" + i + ": " + climbStairs(i) + " 種方法");
        }
    }
}`,
        exercise: {
          question: {
            "zh-TW": "用遞迴加陣列 memoization 重寫 climbStairs(int n, int[] memo)，計算 n=10 的結果（應為 89）。",
            en: "Rewrite climbStairs(int n, int[] memo) using recursion with array memoization. Compute n=10 (should be 89).",
          },
          hint: {
            "zh-TW": "宣告 int[] memo = new int[n+1]，0 表示未計算，先查再算再存",
            en: "Declare int[] memo = new int[n+1] (0 means uncalculated); check before computing, then store",
          },
          answer: `class Main {
    static int climbStairs(int n, int[] memo) {
        if (n <= 2) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
        return memo[n];
    }
    public static void main(String[] args) {
        int n = 10;
        System.out.println(climbStairs(n, new int[n+1])); // 89
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

**Recursive strategy:**
1. Move n-1 discs A→B (C as aux)
2. Move largest A→C
3. Move n-1 discs B→C (A as aux)

Moves: **2ⁿ - 1**`,
        },
        defaultCode: `class Main {
    static void hanoi(int n, char from, char to, char aux) {
        if (n == 1) {
            System.out.println("  移動第 1 個碟子：" + from + " → " + to);
            return;
        }
        hanoi(n - 1, from, aux, to);
        System.out.println("  移動第 " + n + " 個碟子：" + from + " → " + to);
        hanoi(n - 1, aux, to, from);
    }

    public static void main(String[] args) {
        for (int n = 1; n <= 4; n++) {
            System.out.println("n=" + n + "（需 " + ((1<<n)-1) + " 步）：");
            hanoi(n, 'A', 'C', 'B');
            System.out.println();
        }
    }
}`,
        exercise: {
          question: {
            "zh-TW": "修改為回傳步數的版本（回傳 int），確認 n=5 時為 31。",
            en: "Modify to return the step count (return int). Verify n=5 gives 31.",
          },
          hint: {
            "zh-TW": "改成 static int hanoi(...)，回傳 1 + hanoi(n-1,...) + hanoi(n-1,...)",
            en: "Change to static int hanoi(...), return 1 + hanoi(n-1,...) + hanoi(n-1,...)",
          },
          answer: `class Main {
    static int hanoi(int n, char from, char to, char aux) {
        if (n == 1) { System.out.println("  " + from + " → " + to); return 1; }
        int a = hanoi(n-1, from, aux, to);
        System.out.println("  " + from + " → " + to);
        int b = hanoi(n-1, aux, to, from);
        return a + 1 + b;
    }
    public static void main(String[] args) {
        System.out.println("共 " + hanoi(5,'A','C','B') + " 步"); // 31
    }
}`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

0/1 矩陣表示迷宮，老鼠從 [0][0] 走到 [n-1][n-1]。

**回溯法：**
1. 嘗試向下或向右移動
2. 走到死路：sol[x][y] = 0（退回）
3. 再試另一方向

Java 使用 int[][] 二維陣列，注意巢狀方法要寫在靜態方法中或抽取為靜態方法。`,
          en: `## Rat in a Maze (Backtracking)

0/1 matrix maze, rat goes from [0][0] to [n-1][n-1].

**Backtracking:**
1. Try moving down or right
2. Dead end: sol[x][y] = 0 (backtrack)
3. Try another direction

Java uses int[][] arrays; note that nested methods must be static.`,
        },
        defaultCode: `class Main {
    static int n;
    static int[][] maze, sol;

    static boolean isSafe(int x, int y) {
        return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
    }

    static boolean backtrack(int x, int y) {
        if (x == n-1 && y == n-1) { sol[x][y] = 1; return true; }
        if (isSafe(x, y)) {
            sol[x][y] = 1;
            if (backtrack(x+1, y) || backtrack(x, y+1)) return true;
            sol[x][y] = 0;
        }
        return false;
    }

    public static void main(String[] args) {
        maze = new int[][]{{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}};
        n = maze.length;
        sol = new int[n][n];
        if (backtrack(0, 0)) {
            System.out.println("找到路徑：");
            for (int[] row : sol) {
                for (int c : row) System.out.print((c == 1 ? "■" : "□") + " ");
                System.out.println();
            }
        } else System.out.println("無解");
    }
}`,
        exercise: {
          question: {
            "zh-TW": "修改程式，同時列印出路徑座標（例如 (0,0)→(1,0)→...），用 ArrayList<String> 儲存。",
            en: "Modify to also print the path coordinates (e.g. (0,0)→(1,0)→...) using ArrayList<String>.",
          },
          hint: {
            "zh-TW": "成功時 path.add(\"(\"+x+\",\"+y+\")\")，退回時 path.remove(path.size()-1)",
            en: "On success path.add(\"(\"+x+\",\"+y+\")\"); on backtrack path.remove(path.size()-1)",
          },
          answer: `import java.util.*;
class Main {
    static int n;
    static int[][] maze, sol;
    static List<String> path = new ArrayList<>();
    static boolean isSafe(int x,int y){return x>=0&&x<n&&y>=0&&y<n&&maze[x][y]==1;}
    static boolean backtrack(int x,int y){
        if(x==n-1&&y==n-1){sol[x][y]=1;path.add("("+x+","+y+")");return true;}
        if(isSafe(x,y)){
            sol[x][y]=1;path.add("("+x+","+y+")");
            if(backtrack(x+1,y)||backtrack(x,y+1))return true;
            sol[x][y]=0;path.remove(path.size()-1);
        }
        return false;
    }
    public static void main(String[] args){
        maze=new int[][]{{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}};
        n=4;sol=new int[n][n];
        backtrack(0,0);
        System.out.println(String.join("→",path));
    }
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

安全判斷：
\`\`\`java
board[r] == col                          // 同欄
Math.abs(board[r]-col) == Math.abs(r-row) // 對角線
\`\`\`

8 皇后共 **92** 種解法。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**Backtracking (row by row):** \`board[row] = col\`

Safety check:
\`\`\`java
board[r] == col
Math.abs(board[r]-col) == Math.abs(r-row)
\`\`\`

**92** solutions for N=8.`,
        },
        defaultCode: `import java.util.*;

class Main {
    static int n = 8;
    static int[] board = new int[n];
    static List<int[]> solutions = new ArrayList<>();

    static boolean isSafe(int row, int col) {
        for (int r = 0; r < row; r++)
            if (board[r]==col || Math.abs(board[r]-col)==Math.abs(r-row))
                return false;
        return true;
    }

    static void backtrack(int row) {
        if (row == n) { solutions.add(board.clone()); return; }
        for (int col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                backtrack(row + 1);
                board[row] = -1;
            }
        }
    }

    public static void main(String[] args) {
        Arrays.fill(board, -1);
        backtrack(0);
        System.out.println("8 皇后共有 " + solutions.size() + " 種解法");
        System.out.println("第一種解法：");
        for (int col : solutions.get(0)) {
            System.out.println(".".repeat(col) + "♛" + ".".repeat(n-1-col));
        }
    }
}`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6（六皇后，4 種解法），印出全部解法。",
            en: "Solve N=6 (4 solutions) and print all boards.",
          },
          hint: {
            "zh-TW": "把 static int n = 8 改成 n = 6，board 和 isSafe 邏輯不變",
            en: "Change static int n = 8 to n = 6; the board and isSafe logic stays the same",
          },
          answer: `import java.util.*;
class Main {
    static int n=6;
    static int[] board=new int[n];
    static List<int[]> solutions=new ArrayList<>();
    static boolean isSafe(int row,int col){
        for(int r=0;r<row;r++) if(board[r]==col||Math.abs(board[r]-col)==Math.abs(r-row)) return false;
        return true;
    }
    static void backtrack(int row){
        if(row==n){solutions.add(board.clone());return;}
        for(int col=0;col<n;col++) if(isSafe(row,col)){board[row]=col;backtrack(row+1);board[row]=-1;}
    }
    public static void main(String[] args){
        Arrays.fill(board,-1);backtrack(0);
        System.out.println("共 "+solutions.size()+" 種");
        for(int i=0;i<solutions.size();i++){
            System.out.println("解法 "+(i+1)+"：");
            for(int col:solutions.get(i)) System.out.println(".".repeat(col)+"♛"+".".repeat(n-1-col));
        }
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

將建立物件的邏輯集中到工廠，呼叫者只說「我要什麼」，不用知道如何 \`new\`。

**Java 標準結構：**
\`\`\`
介面 Shape
├── Circle（implements）
├── Rectangle（implements）
ShapeFactory.create("circle") → Shape
\`\`\`

Java 使用 \`interface\` 定義合約，搭配 HashMap 做類型對應。`,
          en: `## Factory Pattern

Centralizes object creation in a factory. Callers say "give me X" without knowing how to \`new\` it.

**Java structure:**
\`\`\`
interface Shape
├── Circle (implements)
├── Rectangle (implements)
ShapeFactory.create("circle") → Shape
\`\`\`

Java uses \`interface\` for contracts, with a HashMap for type lookup.`,
        },
        defaultCode: `import java.util.*;
import java.util.function.Supplier;

interface Shape {
    double area();
    default String describe() {
        return getClass().getSimpleName() + ": 面積=" + String.format("%.2f", area());
    }
}

class Circle implements Shape {
    private double r;
    Circle(double r) { this.r = r; }
    public double area() { return Math.PI * r * r; }
}

class Rectangle implements Shape {
    private double w, h;
    Rectangle(double w, double h) { this.w=w; this.h=h; }
    public double area() { return w * h; }
}

class Triangle implements Shape {
    private double a,b,c;
    Triangle(double a,double b,double c){this.a=a;this.b=b;this.c=c;}
    public double area(){double s=(a+b+c)/2;return Math.sqrt(s*(s-a)*(s-b)*(s-c));}
}

class ShapeFactory {
    static Shape create(String type, double... args) {
        return switch (type.toLowerCase()) {
            case "circle"    -> new Circle(args[0]);
            case "rectangle" -> new Rectangle(args[0], args[1]);
            case "triangle"  -> new Triangle(args[0], args[1], args[2]);
            default -> throw new IllegalArgumentException("未知形狀：" + type);
        };
    }
}

class Main {
    public static void main(String[] args) {
        List<Shape> shapes = List.of(
            ShapeFactory.create("circle", 5),
            ShapeFactory.create("rectangle", 4, 6),
            ShapeFactory.create("triangle", 3, 4, 5)
        );
        shapes.forEach(s -> System.out.println(s.describe()));
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 Square（正方形）實作 Shape，在 switch 中加入 \"square\" 分支。測試面積應為 16.00。",
            en: "Add a Square class implementing Shape. Add a \"square\" case to the switch. Verify area = 16.00.",
          },
          hint: {
            "zh-TW": "class Square implements Shape { double s; Square(double s){this.s=s;} public double area(){return s*s;} }",
            en: "class Square implements Shape { double s; Square(double s){this.s=s;} public double area(){return s*s;} }",
          },
          answer: `import java.util.*;
interface Shape{double area();default String describe(){return getClass().getSimpleName()+": 面積="+String.format("%.2f",area());}}
class Square implements Shape{private double s;Square(double s){this.s=s;}public double area(){return s*s;}}
class Rectangle implements Shape{private double w,h;Rectangle(double w,double h){this.w=w;this.h=h;}public double area(){return w*h;}}
class ShapeFactory{static Shape create(String type,double...args){return switch(type){case "square"->new Square(args[0]);case "rectangle"->new Rectangle(args[0],args[1]);default->throw new IllegalArgumentException("未知");};}}
class Main{public static void main(String[] a){System.out.println(ShapeFactory.create("square",4).describe());}}`,
        },
      },
      {
        id: "singleton-pattern",
        title: { "zh-TW": "單例模式", en: "Singleton Pattern" },
        content: {
          "zh-TW": `## 單例模式（Singleton Pattern）

確保類別只有一個實例。

**Java 執行緒安全寫法（Initialization-on-demand Holder）：**

\`\`\`java
class Singleton {
    private static class Holder {
        static final Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance() {
        return Holder.INSTANCE;
    }
}
\`\`\`

JVM 保證靜態內部類別只初始化一次，不需 \`synchronized\`，效能最佳。`,
          en: `## Singleton Pattern

Ensures only one instance of a class exists.

**Java thread-safe approach (Initialization-on-demand Holder):**

\`\`\`java
class Singleton {
    private static class Holder {
        static final Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance() {
        return Holder.INSTANCE;
    }
}
\`\`\`

JVM guarantees the static inner class is initialized only once — no \`synchronized\` needed.`,
        },
        defaultCode: `import java.util.*;

class Logger {
    private final List<String> logs = new ArrayList<>();

    private Logger() {}

    private static class Holder {
        static final Logger INSTANCE = new Logger();
    }

    public static Logger getInstance() {
        return Holder.INSTANCE;
    }

    public void log(String level, String message) {
        String entry = "[" + level + "] " + message;
        logs.add(entry);
        System.out.println(entry);
    }

    public void showAll() {
        System.out.println("\\n=== 共 " + logs.size() + " 筆日誌 ===");
        logs.forEach(System.out::println);
    }
}

class Main {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();
        System.out.println("同一個物件？" + (log1 == log2)); // true

        log1.log("INFO", "伺服器啟動");
        log2.log("WARN", "記憶體不足");
        log1.log("ERROR", "資料庫斷線");

        log1.showAll();
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 clear() 方法清空日誌，以及 getCount() 方法回傳日誌數量。",
            en: "Add a clear() method to empty the log, and a getCount() method returning the count.",
          },
          hint: {
            "zh-TW": "public void clear() { logs.clear(); }；public int getCount() { return logs.size(); }",
            en: "public void clear() { logs.clear(); }; public int getCount() { return logs.size(); }",
          },
          answer: `import java.util.*;
class Logger {
    private final List<String> logs=new ArrayList<>();
    private Logger(){}
    private static class Holder{static final Logger INSTANCE=new Logger();}
    public static Logger getInstance(){return Holder.INSTANCE;}
    public void log(String lvl,String msg){logs.add("["+lvl+"] "+msg);System.out.println(logs.get(logs.size()-1));}
    public void clear(){logs.clear();System.out.println("已清空");}
    public int getCount(){return logs.size();}
}
class Main{public static void main(String[] a){
    Logger lg=Logger.getInstance();
    lg.log("INFO","啟動");lg.log("WARN","警告");
    System.out.println("共 "+lg.getCount()+" 筆");
    lg.clear();System.out.println("清空後 "+lg.getCount()+" 筆");
}}`,
        },
      },
      {
        id: "observer-pattern",
        title: { "zh-TW": "觀察者模式", en: "Observer Pattern" },
        content: {
          "zh-TW": `## 觀察者模式（Observer Pattern）

「一對多」依賴關係：主題狀態改變 → 所有觀察者自動收到通知。

**Java 標準結構：**
\`\`\`
interface Observer { void update(String event, Object data); }
class Subject { List<Observer> observers; void notify(); }
\`\`\`

Java 8+ 可用 \`List<Consumer<T>>\` 取代介面，更接近函式式風格。`,
          en: `## Observer Pattern

One-to-many dependency: Subject state change → all observers notified automatically.

**Java structure:**
\`\`\`
interface Observer { void update(String event, Object data); }
class Subject { List<Observer> observers; void notify(); }
\`\`\`

Java 8+ can use \`List<Consumer<T>>\` instead of interface for a more functional style.`,
        },
        defaultCode: `import java.util.*;

interface Observer {
    void update(String event, double data);
}

class StockMarket {
    private double price = 0;
    private final List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer o) { observers.add(o); }
    public void unsubscribe(Observer o) { observers.remove(o); }

    private void notifyAll(String event, double data) {
        observers.forEach(o -> o.update(event, data));
    }

    public void setPrice(double newPrice) {
        double change = price > 0 ? (newPrice - price) / price * 100 : 0;
        this.price = newPrice;
        notifyAll("priceChange", newPrice);
        System.out.printf("  (漲跌: %+.1f%%)%n", change);
    }
}

class Main {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        Observer investorA = (event, price) ->
            System.out.printf("投資者A：股價 %.0f 元%n", price);

        Observer autoBot = (event, price) ->
            System.out.println("交易機器人：" + (price < 100 ? "買入" : "賣出") + "！");

        market.subscribe(investorA);
        market.subscribe(autoBot);

        market.setPrice(100);
        market.setPrice(85);
        market.unsubscribe(autoBot);
        market.setPrice(110);
    }
}`,
        exercise: {
          question: {
            "zh-TW": "新增 PriceLogger 觀察者，記錄所有價格到 ArrayList<Double>，最後印出最高與最低價。",
            en: "Add a PriceLogger observer that records all prices in ArrayList<Double>, then prints the max and min prices.",
          },
          hint: {
            "zh-TW": "用 Collections.max(history) 和 Collections.min(history)",
            en: "Use Collections.max(history) and Collections.min(history)",
          },
          answer: `import java.util.*;
interface Observer{void update(String event,double data);}
class StockMarket{
    private double price=0;private final List<Observer> obs=new ArrayList<>();
    public void subscribe(Observer o){obs.add(o);}
    public void setPrice(double p){price=p;obs.forEach(o->o.update("priceChange",p));}
}
class PriceLogger implements Observer{
    List<Double> history=new ArrayList<>();
    public void update(String e,double p){history.add(p);}
    public void report(){System.out.println("最高:"+Collections.max(history)+" 最低:"+Collections.min(history));}
}
class Main{public static void main(String[] a){
    StockMarket m=new StockMarket();
    PriceLogger lg=new PriceLogger();
    m.subscribe(lg);
    m.setPrice(100);m.setPrice(85);m.setPrice(120);m.setPrice(70);
    lg.report();
}}`,
        },
      },
    ],
  },
];

export default chapters;
