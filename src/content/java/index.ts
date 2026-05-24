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
];

export default chapters;
