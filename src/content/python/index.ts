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
          "zh-TW": `## Python 是什麼？

Python 是一種簡潔、易讀的程式語言，廣泛應用於：
- 資料科學與人工智慧
- 網頁後端開發
- 自動化腳本

### 第一個程式

使用 \`print()\` 函式輸出文字到畫面上。`,
          en: `## What is Python?

Python is a clean, readable programming language widely used for:
- Data science and AI
- Web backend development
- Automation scripts

### Your First Program

Use the \`print()\` function to display text on screen.`,
        },
        defaultCode: `print("Hello, World!")`,
        exercise: {
          question: {
            "zh-TW": "修改程式，輸出你的名字。",
            en: "Modify the program to print your name.",
          },
          hint: {
            "zh-TW": "把 Hello, World! 改成你的名字",
            en: 'Change "Hello, World!" to your name',
          },
          answer: "",
        },
      },
      {
        id: "variables",
        title: { "zh-TW": "變數", en: "Variables" },
        content: {
          "zh-TW": `## 變數

變數是儲存資料的容器。Python 不需要宣告型別，直接賦值即可。

\`\`\`python
name = "Alice"   # 字串
age = 25         # 整數
height = 1.68    # 浮點數
is_student = True  # 布林值
\`\`\`

使用 \`type()\` 可以查看變數型別。`,
          en: `## Variables

Variables are containers for storing data. Python doesn't require type declarations.

\`\`\`python
name = "Alice"    # string
age = 25          # integer
height = 1.68     # float
is_student = True # boolean
\`\`\`

Use \`type()\` to check variable types.`,
        },
        defaultCode: `name = "Alice"
age = 25
height = 1.68
is_student = True

print(name)
print(age)
print(type(height))`,
        exercise: {
          question: {
            "zh-TW": "建立一個變數 city，存入你所在的城市名稱，然後印出來。",
            en: "Create a variable called city, store your city name, and print it.",
          },
          hint: {
            "zh-TW": "city = \"台北\"",
            en: 'city = "Taipei"',
          },
          answer: "",
        },
      },
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## if / elif / else

條件判斷讓程式可以根據不同情況執行不同程式碼。

\`\`\`python
score = 85

if score >= 90:
    print("優等")
elif score >= 60:
    print("及格")
else:
    print("不及格")
\`\`\`

注意：Python 用**縮排**（4個空格）代替大括號。`,
          en: `## if / elif / else

Conditionals allow programs to execute different code based on conditions.

\`\`\`python
score = 85

if score >= 90:
    print("Excellent")
elif score >= 60:
    print("Pass")
else:
    print("Fail")
\`\`\`

Note: Python uses **indentation** (4 spaces) instead of curly braces.`,
        },
        defaultCode: `score = 85

if score >= 90:
    print("優等 / Excellent")
elif score >= 60:
    print("及格 / Pass")
else:
    print("不及格 / Fail")`,
      },
      {
        id: "strings",
        title: { "zh-TW": "字串操作", en: "String Operations" },
        content: {
          "zh-TW": `## 字串（String）

字串是文字資料，用單引號或雙引號包圍。

### 常用方法

\`\`\`python
s = "  Hello, World!  "

print(len(s))          # 長度：18
print(s.upper())       # 全大寫：  HELLO, WORLD!
print(s.lower())       # 全小寫：  hello, world!
print(s.strip())       # 去除首尾空白：Hello, World!
print(s.replace("World", "Python"))  # 取代
print(s.strip().split(", "))  # 切割成清單：['Hello', 'World!']
\`\`\`

### f-string（格式化字串）

\`\`\`python
name = "Alice"
age = 25
print(f"我叫 {name}，今年 {age} 歲。")
\`\`\`

### 字串切片（Slicing）

\`\`\`python
s = "Python"
print(s[0])     # 'P'（第一個字元）
print(s[-1])    # 'n'（最後一個字元）
print(s[0:3])   # 'Pyt'（索引 0 到 2）
print(s[::2])   # 'Pto'（每隔一個）
print(s[::-1])  # 'nohtyP'（反轉）
\`\`\``,
          en: `## Strings

Strings are text data, enclosed in single or double quotes.

### Common Methods

\`\`\`python
s = "  Hello, World!  "

print(len(s))          # length: 18
print(s.upper())       # uppercase:   HELLO, WORLD!
print(s.lower())       # lowercase:   hello, world!
print(s.strip())       # remove whitespace: Hello, World!
print(s.replace("World", "Python"))  # replace
print(s.strip().split(", "))  # split to list: ['Hello', 'World!']
\`\`\`

### f-strings (Formatted Strings)

\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name}, I am {age} years old.")
\`\`\`

### String Slicing

\`\`\`python
s = "Python"
print(s[0])     # 'P' (first character)
print(s[-1])    # 'n' (last character)
print(s[0:3])   # 'Pyt' (index 0 to 2)
print(s[::2])   # 'Pto' (every other)
print(s[::-1])  # 'nohtyP' (reversed)
\`\`\``,
        },
        defaultCode: `# 字串方法 / String methods
message = "  Hello, Python!  "
print("原始:", repr(message))
print("長度:", len(message))
print("去空白:", message.strip())
print("大寫:", message.upper())
print("取代:", message.replace("Python", "World"))

# f-string
name = "Alice"
age = 25
print(f"\\n我叫 {name}，今年 {age} 歲。")
print(f"明年 {age + 1} 歲。")

# 切片 / Slicing
word = "Python"
print("\\n字串切片:")
print(word[0:3])   # Pyt
print(word[::-1])  # nohtyP`,
        exercise: {
          question: {
            "zh-TW": "給定字串 s = \"  python programming  \"，請輸出：去除空白後首字母大寫的結果，並用 f-string 印出字串長度。",
            en: "Given s = \"  python programming  \", print: the stripped and title-cased version, and use an f-string to print the length of the stripped string.",
          },
          hint: {
            "zh-TW": "試試 s.strip().title() 和 f\"長度: {len(...)}\"",
            en: "Try s.strip().title() and f\"Length: {len(...)}\"",
          },
          answer: `s = "  python programming  "
stripped = s.strip()
print(stripped.title())
print(f"長度: {len(stripped)}")`,
        },
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式", en: "Functions" },
    lessons: [
      {
        id: "define-function",
        title: { "zh-TW": "定義函式", en: "Define Functions" },
        content: {
          "zh-TW": `## def 關鍵字

使用 \`def\` 定義函式，讓程式碼可以重複使用。

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!
\`\`\`

### 預設參數
\`\`\`python
def greet(name="World"):
    return f"Hello, {name}!"
\`\`\``,
          en: `## The def Keyword

Use \`def\` to define functions and make code reusable.

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!
\`\`\`

### Default Parameters
\`\`\`python
def greet(name="World"):
    return f"Hello, {name}!"
\`\`\``,
        },
        defaultCode: `def greet(name="World"):
    return f"Hello, {name}!"

print(greet())
print(greet("Alice"))`,
        exercise: {
          question: {
            "zh-TW": "撰寫一個函式 add(a, b)，回傳兩數之和。",
            en: "Write a function add(a, b) that returns the sum of two numbers.",
          },
          hint: {
            "zh-TW": "def add(a, b): return a + b",
            en: "def add(a, b): return a + b",
          },
          answer: "",
        },
      },
      {
        id: "while-loop",
        title: { "zh-TW": "while 迴圈", en: "while Loop" },
        content: {
          "zh-TW": `## while 迴圈

\`while\` 會在條件為真時持續執行，適合不確定次數的重複。

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

### break — 強制中止迴圈

\`\`\`python
while True:
    n = int(input("輸入數字（0 停止）: "))
    if n == 0:
        break
    print(f"你輸入了 {n}")
\`\`\`

### continue — 跳過本次，繼續下一次

\`\`\`python
for i in range(10):
    if i % 2 == 0:
        continue   # 跳過偶數
    print(i)       # 只印奇數
\`\`\`

> **注意**：確保 while 的條件最終會變為 False，否則會造成無限迴圈。`,
          en: `## while Loop

\`while\` keeps running as long as the condition is true. Use it when you don't know the number of iterations in advance.

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

### break — Exit the Loop Early

\`\`\`python
while True:
    n = int(input("Enter a number (0 to stop): "))
    if n == 0:
        break
    print(f"You entered {n}")
\`\`\`

### continue — Skip to Next Iteration

\`\`\`python
for i in range(10):
    if i % 2 == 0:
        continue   # skip even numbers
    print(i)       # only prints odd numbers
\`\`\`

> **Note**: Always ensure the while condition eventually becomes False to avoid infinite loops.`,
        },
        defaultCode: `# while 基本用法 / basic while
count = 1
while count <= 5:
    print(f"count = {count}")
    count += 1

print("---")

# continue：跳過 3 的倍數 / skip multiples of 3
for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i, end=" ")
print()

print("---")

# break：找到第一個 7 的倍數就停 / stop at first multiple of 7
for i in range(1, 100):
    if i % 7 == 0:
        print(f"第一個 7 的倍數: {i}")
        break`,
        exercise: {
          question: {
            "zh-TW": "用 while 迴圈計算 1 + 2 + 3 + ... + 100 的總和，並印出結果。",
            en: "Use a while loop to calculate the sum of 1 + 2 + 3 + ... + 100 and print the result.",
          },
          hint: {
            "zh-TW": "設 total = 0, i = 1，while i <= 100: total += i; i += 1",
            en: "Set total = 0, i = 1, then while i <= 100: total += i; i += 1",
          },
          answer: `total = 0
i = 1
while i <= 100:
    total += i
    i += 1
print(total)  # 5050`,
        },
      },
    ],
  },
  {
    id: "loops",
    title: { "zh-TW": "迴圈", en: "Loops" },
    lessons: [
      {
        id: "for-loop",
        title: { "zh-TW": "for 迴圈", en: "for Loop" },
        content: {
          "zh-TW": `## for 迴圈

用來遍歷序列（清單、字串、range 等）。

\`\`\`python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
\`\`\`

遍歷清單：
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\``,
          en: `## for Loop

Used to iterate over sequences (lists, strings, range, etc.).

\`\`\`python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
\`\`\`

Iterating over a list:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\``,
        },
        defaultCode: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

print("---")
for i in range(1, 6):
    print(i * i)`,
      },
      {
        id: "while-loop",
        title: { "zh-TW": "while 迴圈與 break/continue", en: "while Loop & break/continue" },
        content: {
          "zh-TW": `## while 迴圈

當條件成立時持續執行，次數不固定時使用。

\`\`\`python
n = 1
while n <= 5:
    print(n)
    n += 1
\`\`\`

### break — 立即跳出迴圈

\`\`\`python
for i in range(100):
    if i == 5:
        break
    print(i)
# 印出 0 1 2 3 4
\`\`\`

### continue — 略過本次，進入下一輪

\`\`\`python
for i in range(6):
    if i == 3:
        continue
    print(i)
# 印出 0 1 2 4 5
\`\`\`

### while/else

\`while\` 迴圈也可以有 \`else\` 子句，當迴圈正常結束（未被 break 中斷）時執行。

\`\`\`python
n = 0
while n < 3:
    print(n)
    n += 1
else:
    print("迴圈正常結束")
\`\`\``,
          en: `## while Loop

Runs as long as the condition is true. Use when the number of iterations is unknown.

\`\`\`python
n = 1
while n <= 5:
    print(n)
    n += 1
\`\`\`

### break — Exit Immediately

\`\`\`python
for i in range(100):
    if i == 5:
        break
    print(i)
# prints 0 1 2 3 4
\`\`\`

### continue — Skip Current Iteration

\`\`\`python
for i in range(6):
    if i == 3:
        continue
    print(i)
# prints 0 1 2 4 5
\`\`\`

### while/else

The \`else\` clause runs when the loop ends normally (not via break).

\`\`\`python
n = 0
while n < 3:
    print(n)
    n += 1
else:
    print("Loop ended normally")
\`\`\``,
        },
        defaultCode: `# while 迴圈 / while loop
print("while 迴圈:")
n = 1
while n <= 5:
    print(n, end=" ")
    n += 1
print()

# break
print("\\nbreak 範例:")
for i in range(10):
    if i == 6:
        break
    print(i, end=" ")
print()

# continue
print("\\ncontinue（跳過偶數）:")
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()`,
        exercise: {
          question: {
            "zh-TW": "用 for 迴圈印出 1 到 20 之間所有不能被 3 整除的數字。",
            en: "Use a for loop to print all numbers from 1 to 20 that are not divisible by 3.",
          },
          hint: {
            "zh-TW": "用 continue 跳過 i % 3 == 0 的情況",
            en: "Use continue to skip when i % 3 == 0",
          },
          answer: `for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i, end=" ")`,
        },
      },
      {
        id: "list-comprehension",
        title: { "zh-TW": "串列生成式", en: "List Comprehension" },
        content: {
          "zh-TW": `## 串列生成式（List Comprehension）

一種簡潔地建立清單的語法，相當於 for 迴圈的精簡版。

### 基本語法

\`\`\`python
# 等同於：result = []，for x in range(10): result.append(x*x)
squares = [x * x for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

### 加入條件過濾

\`\`\`python
# 只取偶數的平方
even_squares = [x * x for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]
\`\`\`

### 字串處理範例

\`\`\`python
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']

# 過濾長度大於 4 的單字
long_words = [w for w in words if len(w) > 4]
print(long_words)  # ['hello', 'world', 'python']
\`\`\`

### 巢狀生成式

\`\`\`python
# 九九乘法表部分結果
products = [i * j for i in range(1, 4) for j in range(1, 4)]
print(products)  # [1, 2, 3, 2, 4, 6, 3, 6, 9]
\`\`\``,
          en: `## List Comprehension

A concise way to create lists — a compact for loop.

### Basic Syntax

\`\`\`python
# Equivalent to: result = []; for x in range(10): result.append(x*x)
squares = [x * x for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

### With Filtering Condition

\`\`\`python
# Squares of even numbers only
even_squares = [x * x for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]
\`\`\`

### String Processing Example

\`\`\`python
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']

# Filter words with length > 4
long_words = [w for w in words if len(w) > 4]
print(long_words)  # ['hello', 'world', 'python']
\`\`\`

### Nested Comprehension

\`\`\`python
# Partial multiplication table
products = [i * j for i in range(1, 4) for j in range(1, 4)]
print(products)  # [1, 2, 3, 2, 4, 6, 3, 6, 9]
\`\`\``,
        },
        defaultCode: `# 基本生成式 / basic comprehension
squares = [x * x for x in range(10)]
print("平方:", squares)

# 條件過濾 / filtering
evens = [x for x in range(20) if x % 2 == 0]
print("偶數:", evens)

# 字串操作 / string ops
fruits = ["apple", "banana", "cherry", "kiwi"]
short_upper = [f.upper() for f in fruits if len(f) <= 5]
print("短水果大寫:", short_upper)

# 轉換攝氏為華氏 / Celsius to Fahrenheit
celsius = [0, 20, 37, 100]
fahrenheit = [c * 9/5 + 32 for c in celsius]
print("華氏:", fahrenheit)`,
        exercise: {
          question: {
            "zh-TW": "用串列生成式建立一個清單，包含 1 到 50 中所有 3 的倍數，然後印出總和。",
            en: "Use a list comprehension to create a list of all multiples of 3 from 1 to 50, then print their sum.",
          },
          hint: {
            "zh-TW": "multiples = [x for x in range(1, 51) if x % 3 == 0]，再用 sum()",
            en: "multiples = [x for x in range(1, 51) if x % 3 == 0], then use sum()",
          },
          answer: `multiples = [x for x in range(1, 51) if x % 3 == 0]
print(multiples)
print("總和:", sum(multiples))`,
        },
      },
    ],
  },
  {
    id: "data-structures",
    title: { "zh-TW": "資料結構", en: "Data Structures" },
    lessons: [
      {
        id: "lists",
        title: { "zh-TW": "清單（List）", en: "Lists" },
        content: {
          "zh-TW": `## 清單（List）

清單是 Python 中最常用的資料結構，可以儲存多個有序的元素，且可以修改。

### 建立與存取

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple（第一個）
print(fruits[-1])  # cherry（最後一個）
\`\`\`

### 常用方法

\`\`\`python
nums = [3, 1, 4, 1, 5, 9]

nums.append(2)       # 加到末尾：[3, 1, 4, 1, 5, 9, 2]
nums.remove(1)       # 移除第一個 1：[3, 4, 1, 5, 9, 2]
print(len(nums))     # 長度：6
nums.sort()          # 排序（原地）：[1, 2, 3, 4, 5, 9]
nums.sort(reverse=True)  # 降序排列
\`\`\`

### 切片（Slicing）

\`\`\`python
a = [0, 1, 2, 3, 4, 5]
print(a[1:4])   # [1, 2, 3]
print(a[:3])    # [0, 1, 2]
print(a[3:])    # [3, 4, 5]
print(a[::2])   # [0, 2, 4]（每隔一個）
\`\`\`

### 其他實用操作

\`\`\`python
a = [1, 2, 3]
b = [4, 5, 6]
print(a + b)         # 合併：[1, 2, 3, 4, 5, 6]
print(a * 2)         # 重複：[1, 2, 3, 1, 2, 3]
print(3 in a)        # 是否包含：True
print(a.index(2))    # 索引位置：1
\`\`\``,
          en: `## Lists

Lists are Python's most-used data structure — ordered, mutable collections of elements.

### Creating and Accessing

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple (first)
print(fruits[-1])  # cherry (last)
\`\`\`

### Common Methods

\`\`\`python
nums = [3, 1, 4, 1, 5, 9]

nums.append(2)       # add to end: [3, 1, 4, 1, 5, 9, 2]
nums.remove(1)       # remove first 1: [3, 4, 1, 5, 9, 2]
print(len(nums))     # length: 6
nums.sort()          # sort in place: [1, 2, 3, 4, 5, 9]
nums.sort(reverse=True)  # descending order
\`\`\`

### Slicing

\`\`\`python
a = [0, 1, 2, 3, 4, 5]
print(a[1:4])   # [1, 2, 3]
print(a[:3])    # [0, 1, 2]
print(a[3:])    # [3, 4, 5]
print(a[::2])   # [0, 2, 4] (every other)
\`\`\`

### Other Useful Operations

\`\`\`python
a = [1, 2, 3]
b = [4, 5, 6]
print(a + b)         # merge: [1, 2, 3, 4, 5, 6]
print(a * 2)         # repeat: [1, 2, 3, 1, 2, 3]
print(3 in a)        # membership: True
print(a.index(2))    # index of: 1
\`\`\``,
        },
        defaultCode: `# 建立清單 / create list
scores = [85, 92, 78, 95, 88]
print("原始:", scores)

# 新增與移除 / add & remove
scores.append(100)
print("加入 100:", scores)
scores.remove(78)
print("移除 78:", scores)

# 排序 / sort
scores.sort()
print("升序:", scores)
scores.sort(reverse=True)
print("降序:", scores)

# 切片 / slicing
print("前三名:", scores[:3])
print("長度:", len(scores))

# 統計 / stats
print(f"最高分: {max(scores)}, 最低分: {min(scores)}, 平均: {sum(scores)/len(scores):.1f}")`,
        exercise: {
          question: {
            "zh-TW": "建立一個清單 numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6]，請：1) 排序後印出，2) 印出前三大的數，3) 印出所有大於 5 的數。",
            en: "Create numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6]. Then: 1) sort and print, 2) print the top 3 numbers, 3) print all numbers greater than 5.",
          },
          hint: {
            "zh-TW": "用 sort(reverse=True) 降序排列，切片取前三個，再用 for 迴圈或串列生成式過濾",
            en: "Use sort(reverse=True) for descending, slice for top 3, and a for loop or comprehension for filtering",
          },
          answer: `numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6]
numbers.sort()
print("排序:", numbers)
numbers.sort(reverse=True)
print("前三大:", numbers[:3])
big = [n for n in numbers if n > 5]
print("大於 5:", big)`,
        },
      },
      {
        id: "dictionaries",
        title: { "zh-TW": "字典（Dictionary）", en: "Dictionaries" },
        content: {
          "zh-TW": `## 字典（Dictionary）

字典以「鍵（key）：值（value）」的形式儲存資料，查詢速度快。

### 建立與存取

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "Taipei"
}

print(person["name"])           # Alice
print(person.get("email", "無")) # 安全存取，鍵不存在時回傳預設值
\`\`\`

### 新增、修改、刪除

\`\`\`python
person["email"] = "alice@example.com"  # 新增
person["age"] = 26                      # 修改
del person["city"]                      # 刪除
\`\`\`

### 遍歷字典

\`\`\`python
# 只取鍵
for key in person.keys():
    print(key)

# 只取值
for value in person.values():
    print(value)

# 同時取鍵與值
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

### update() — 合併字典

\`\`\`python
extra = {"job": "engineer", "age": 27}
person.update(extra)  # 合併，重複的鍵會被覆蓋
\`\`\``,
          en: `## Dictionaries

Dictionaries store data as key-value pairs and support fast lookups.

### Creating and Accessing

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "Taipei"
}

print(person["name"])              # Alice
print(person.get("email", "N/A"))  # safe access with default
\`\`\`

### Add, Modify, Delete

\`\`\`python
person["email"] = "alice@example.com"  # add
person["age"] = 26                      # modify
del person["city"]                      # delete
\`\`\`

### Iterating

\`\`\`python
# keys only
for key in person.keys():
    print(key)

# values only
for value in person.values():
    print(value)

# both key and value
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

### update() — Merge Dictionaries

\`\`\`python
extra = {"job": "engineer", "age": 27}
person.update(extra)  # merge; duplicate keys are overwritten
\`\`\``,
        },
        defaultCode: `# 建立字典 / create dict
student = {
    "name": "Bob",
    "age": 20,
    "grades": [88, 92, 79]
}

# 存取 / access
print(student["name"])
print(student.get("email", "未設定"))

# 修改 / modify
student["age"] = 21
student["email"] = "bob@school.edu"

# 遍歷 / iterate
print("\\n所有資料:")
for key, value in student.items():
    print(f"  {key}: {value}")

# 統計成績 / grade stats
grades = student["grades"]
print(f"\\n平均成績: {sum(grades)/len(grades):.1f}")

# update
extra = {"major": "Computer Science", "year": 2}
student.update(extra)
print("\\n更新後鍵:", list(student.keys()))`,
        exercise: {
          question: {
            "zh-TW": "建立一個字典代表一本書，包含 title、author、year、pages 四個鍵。然後遍歷印出所有鍵值對，並印出「這本書有 X 頁」。",
            en: "Create a dictionary for a book with keys: title, author, year, pages. Then iterate and print all key-value pairs, and print \"This book has X pages\".",
          },
          hint: {
            "zh-TW": "用 book.items() 遍歷，再用 f-string 印出頁數",
            en: "Use book.items() to iterate, then f-string for the page count",
          },
          answer: `book = {
    "title": "Python 入門",
    "author": "Alice",
    "year": 2024,
    "pages": 320
}
for key, value in book.items():
    print(f"{key}: {value}")
print(f"這本書有 {book['pages']} 頁")`,
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
        title: { "zh-TW": "類別與物件", en: "Classes and Objects" },
        content: {
          "zh-TW": `## 類別（Class）

類別是物件的「藍圖」，將資料（屬性）與行為（方法）封裝在一起。

### 定義類別

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name  # 實例屬性
        self.age = age

    def bark(self):
        return f"{self.name} 說：汪汪！"

    def info(self):
        return f"{self.name}，{self.age} 歲"

# 建立實例 / create instance
dog1 = Dog("小白", 3)
dog2 = Dog("阿黑", 5)

print(dog1.bark())   # 小白 說：汪汪！
print(dog2.info())   # 阿黑，5 歲
\`\`\`

### 繼承（Inheritance）

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Cat(Animal):          # Cat 繼承 Animal
    def speak(self):        # 覆寫（override）父類別方法
        return f"{self.name} 說：喵！"

class Dog(Animal):
    def speak(self):
        return f"{self.name} 說：汪！"

animals = [Cat("咪咪"), Dog("旺財")]
for a in animals:
    print(a.speak())
\`\`\`

### self 是什麼？

\`self\` 代表「這個實例本身」，Python 在呼叫方法時自動傳入，讓方法能存取該物件的屬性。`,
          en: `## Classes

A class is a blueprint for objects, bundling data (attributes) and behavior (methods) together.

### Defining a Class

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name  # instance attribute
        self.age = age

    def bark(self):
        return f"{self.name} says: Woof!"

    def info(self):
        return f"{self.name}, age {self.age}"

# create instances
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.bark())   # Buddy says: Woof!
print(dog2.info())   # Max, age 5
\`\`\`

### Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Cat(Animal):          # Cat inherits Animal
    def speak(self):        # override parent method
        return f"{self.name} says: Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says: Woof!"

animals = [Cat("Whiskers"), Dog("Rex")]
for a in animals:
    print(a.speak())
\`\`\`

### What is self?

\`self\` refers to the current instance. Python passes it automatically when calling methods, letting them access the object's own attributes.`,
        },
        defaultCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"存入 {amount}，餘額：{self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print("餘額不足！")
        else:
            self.balance -= amount
            print(f"提取 {amount}，餘額：{self.balance}")

    def __str__(self):
        return f"帳戶：{self.owner}，餘額：{self.balance}"


# 繼承 / Inheritance
class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, interest_rate=0.02):
        super().__init__(owner, balance)  # 呼叫父類別 __init__
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.deposit(interest)
        print(f"  (利息 {self.interest_rate*100}%)")


acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc)

print()
savings = SavingsAccount("Bob", 10000)
savings.add_interest()
print(savings)`,
        exercise: {
          question: {
            "zh-TW": "定義一個 Rectangle 類別，有 width 和 height 屬性，以及 area() 方法（回傳面積）和 perimeter() 方法（回傳周長）。建立一個 5x3 的矩形並印出面積和周長。",
            en: "Define a Rectangle class with width and height attributes, an area() method, and a perimeter() method. Create a 5x3 rectangle and print its area and perimeter.",
          },
          hint: {
            "zh-TW": "面積 = width * height，周長 = 2 * (width + height)",
            en: "area = width * height, perimeter = 2 * (width + height)",
          },
          answer: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(5, 3)
print(f"面積: {r.area()}")
print(f"周長: {r.perimeter()}")`,
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

給定一個整數陣列 \`nums\` 和一個目標值 \`target\`，找出陣列中兩個數字的索引，使其相加等於 \`target\`。

**核心技巧：雜湊表（Hash Map）**

| 方法 | 時間複雜度 | 空間複雜度 |
|------|-----------|-----------|
| 暴力雙迴圈 | O(n²) | O(1) |
| 雜湊表 | O(n) | O(n) |

雜湊表解法：遍歷時記錄「目前看過的數字 → 索引」，若 \`target - nums[i]\` 已在表中，直接回傳答案。`,
          en: `## LeetCode #1 — Two Sum

Given an array \`nums\` and a \`target\`, return indices of two numbers that add up to \`target\`.

**Key technique: Hash Map**

| Approach | Time | Space |
|----------|------|-------|
| Brute force | O(n²) | O(1) |
| Hash map | O(n) | O(n) |

Hash map approach: as you iterate, store \`num → index\`. If \`target - nums[i]\` is already in the map, return both indices.`,
        },
        defaultCode: `def two_sum(nums, target):
    seen = {}  # num -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# 測試
print(two_sum([2, 7, 11, 15], 9))   # [0, 1]
print(two_sum([3, 2, 4], 6))        # [1, 2]
print(two_sum([3, 3], 6))           # [0, 1]`,
        exercise: {
          question: {
            "zh-TW": "修改函式，若找不到答案回傳 [-1, -1] 而非空陣列，並測試 two_sum([1, 2, 3], 10)。",
            en: "Modify the function to return [-1, -1] instead of [] when no answer exists. Test with two_sum([1, 2, 3], 10).",
          },
          hint: {
            "zh-TW": "在 return [] 改成 return [-1, -1]",
            en: "Change return [] to return [-1, -1]",
          },
          answer: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return [-1, -1]

print(two_sum([1, 2, 3], 10))  # [-1, -1]`,
        },
      },
      {
        id: "valid-parentheses",
        title: { "zh-TW": "#20 有效括號", en: "#20 Valid Parentheses" },
        content: {
          "zh-TW": `## LeetCode #20 — Valid Parentheses（有效括號）

給定只含 \`(\`, \`)\`, \`{\`, \`}\`, \`[\`, \`]\` 的字串，判斷括號是否合法配對。

**核心技巧：堆疊（Stack）**

遇到左括號就推入堆疊；遇到右括號時，檢查堆疊頂端是否是對應的左括號，不是則回傳 \`False\`。

**例子：**
- \`"()[]{}"\` → True
- \`"([)]"\` → False
- \`"{[]}"\` → True`,
          en: `## LeetCode #20 — Valid Parentheses

Given a string with only \`(\`, \`)\`, \`{\`, \`}\`, \`[\`, \`]\`, determine if the brackets are validly matched.

**Key technique: Stack**

Push opening brackets; when you see a closing bracket, check if the stack top is the matching opener.

**Examples:**
- \`"()[]{}"\` → True
- \`"([)]"\` → False
- \`"{[]}"\` → True`,
        },
        defaultCode: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

# 測試
print(is_valid("()"))       # True
print(is_valid("()[]{}"))   # True
print(is_valid("(]"))       # False
print(is_valid("([)]"))     # False
print(is_valid("{[]}"))     # True`,
        exercise: {
          question: {
            "zh-TW": "測試 is_valid(\"\")（空字串）應回傳 True。說明為什麼這個實作已正確處理空字串。",
            en: "Test is_valid(\"\") (empty string) — it should return True. Explain why the current implementation handles this correctly.",
          },
          hint: {
            "zh-TW": "空字串沒有字元，for 迴圈不執行，最後 len(stack) == 0 為 True",
            en: "Empty string has no characters; the loop doesn't run, and len(stack) == 0 is True",
          },
          answer: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

print(is_valid(""))   # True — 空字串，堆疊為空，len(stack)==0`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

給定整數陣列，找出連續子陣列的最大總和。

**Kadane's Algorithm（O(n)）：**

維護兩個變數：
- \`current\`：以目前元素結尾的最大子陣列總和
- \`best\`：全域最大值

每步決策：「把目前數字加進去」vs「重新從這裡開始」

\`\`\`
current = max(num, current + num)
\`\`\``,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm — O(n):**

Maintain two variables:
- \`current\`: max subarray sum ending at current position
- \`best\`: global maximum

At each step: extend current subarray or start fresh.

\`\`\`
current = max(num, current + num)
\`\`\``,
        },
        defaultCode: `def max_subarray(nums):
    current = best = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        best = max(best, current)
    return best

# 測試
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6
print(max_subarray([1]))                                 # 1
print(max_subarray([5, 4, -1, 7, 8]))                   # 23`,
        exercise: {
          question: {
            "zh-TW": "修改函式，同時回傳最大總和與對應子陣列（起始和結束索引）。",
            en: "Modify the function to also return the start and end indices of the maximum subarray.",
          },
          hint: {
            "zh-TW": "記錄 current 重置時的索引為新起點，更新 best 時記錄起點和終點",
            en: "When current resets, record the new start index. When best updates, record both start and end.",
          },
          answer: `def max_subarray(nums):
    current = best = nums[0]
    start = end = 0
    temp_start = 0
    for i, num in enumerate(nums[1:], 1):
        if num > current + num:
            current = num
            temp_start = i
        else:
            current += num
        if current > best:
            best = current
            start = temp_start
            end = i
    return best, start, end

print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # (6, 3, 6)`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

你要爬 \`n\` 階樓梯，每次可以爬 1 或 2 階。有多少種不同的方法？

**動態規劃（DP）：**

\`dp[i]\` = 爬到第 i 階的方法數 = \`dp[i-1] + dp[i-2]\`

這其實就是**費波那契數列**！

| n | 方法數 |
|---|-------|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 5 |
| 5 | 8 |

空間優化：只需保留前兩個值，O(1) 空間。`,
          en: `## LeetCode #70 — Climbing Stairs

You're climbing \`n\` steps, taking 1 or 2 steps at a time. How many distinct ways?

**Dynamic Programming:**

\`dp[i]\` = ways to reach step i = \`dp[i-1] + dp[i-2]\`

This is essentially **Fibonacci**!

Space optimization: only keep the last two values — O(1) space.`,
        },
        defaultCode: `def climb_stairs(n):
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev2 + prev1
    return prev1

# 測試
for i in range(1, 8):
    print(f"n={i}: {climb_stairs(i)} 種方法")`,
        exercise: {
          question: {
            "zh-TW": "若每次可以爬 1、2 或 3 階，修改函式計算 n=5 時的方法數（答案應為 13）。",
            en: "If you can take 1, 2, or 3 steps at a time, modify the function for n=5 (answer should be 13).",
          },
          hint: {
            "zh-TW": "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]，需要保留前三個值",
            en: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]; keep track of three previous values",
          },
          answer: `def climb_stairs_3(n):
    if n == 1: return 1
    if n == 2: return 2
    if n == 3: return 4
    a, b, c = 1, 2, 4
    for _ in range(4, n + 1):
        a, b, c = b, c, a + b + c
    return c

print(climb_stairs_3(5))  # 13`,
        },
      },
      {
        id: "best-time-stock",
        title: { "zh-TW": "#121 買賣股票最佳時機", en: "#121 Best Time to Buy and Sell Stock" },
        content: {
          "zh-TW": `## LeetCode #121 — Best Time to Buy and Sell Stock

給定每天的股價陣列，只能買賣各一次，求最大利潤。

**貪心策略（Greedy）：**
- 遍歷時追蹤「目前見過的最低價格」
- 每天計算「以最低價買、今天賣」的利潤
- 更新最大利潤

\`\`\`python
min_price = float('inf')
max_profit = 0
for price in prices:
    min_price = min(min_price, price)
    max_profit = max(max_profit, price - min_price)
\`\`\`

| 時間複雜度 | 空間複雜度 |
|-----------|-----------|
| O(n) | O(1) |`,
          en: `## LeetCode #121 — Best Time to Buy and Sell Stock

Given an array of daily stock prices, buy once and sell once for maximum profit.

**Greedy Strategy:**
- Track the minimum price seen so far
- Each day, calculate profit if selling today at the minimum buy price
- Update maximum profit

\`\`\`python
min_price = float('inf')
max_profit = 0
for price in prices:
    min_price = min(min_price, price)
    max_profit = max(max_profit, price - min_price)
\`\`\`

| Time | Space |
|------|-------|
| O(n) | O(1) |`,
        },
        defaultCode: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit

# 測試
print(max_profit([7, 1, 5, 3, 6, 4]))  # 5（第2天買，第5天賣）
print(max_profit([7, 6, 4, 3, 1]))     # 0（無利潤）
print(max_profit([1, 2]))              # 1

# 視覺化過程
prices = [7, 1, 5, 3, 6, 4]
min_p = float('inf')
print("\\n每日分析：")
for i, p in enumerate(prices):
    min_p = min(min_p, p)
    profit = p - min_p
    print(f"  Day {i+1}: price={p}, min_so_far={min_p}, profit_if_sell={profit}")`,
        exercise: {
          question: {
            "zh-TW": "若可以買賣多次（但持股時間不重疊），求最大利潤。提示：只要明天比今天貴就賣。",
            en: "If you can buy and sell multiple times (no overlapping holdings), find max profit. Hint: sell whenever tomorrow is more expensive than today.",
          },
          hint: {
            "zh-TW": "sum(max(prices[i+1]-prices[i], 0) for i in range(len(prices)-1))",
            en: "sum(max(prices[i+1]-prices[i], 0) for i in range(len(prices)-1))",
          },
          answer: `def max_profit_multi(prices):
    return sum(max(prices[i+1] - prices[i], 0) for i in range(len(prices)-1))

print(max_profit_multi([7, 1, 5, 3, 6, 4]))  # 7（1→5, 3→6）
print(max_profit_multi([1, 2, 3, 4, 5]))      # 4
print(max_profit_multi([7, 6, 4, 3, 1]))      # 0`,
        },
      },
      {
        id: "valid-anagram",
        title: { "zh-TW": "#242 有效的字母異位詞", en: "#242 Valid Anagram" },
        content: {
          "zh-TW": `## LeetCode #242 — Valid Anagram（有效的字母異位詞）

判斷字串 \`t\` 是否為 \`s\` 的字母異位詞（使用相同字母、不同排列）。

**解法一：排序比較**
\`\`\`python
return sorted(s) == sorted(t)  # O(n log n)
\`\`\`

**解法二：字頻計數（最優）**
\`\`\`python
from collections import Counter
return Counter(s) == Counter(t)  # O(n)
\`\`\`

**解法三：手動計數陣列（O(n) + O(1) 空間）**
\`\`\`python
count = [0] * 26
for c in s: count[ord(c) - ord('a')] += 1
for c in t: count[ord(c) - ord('a')] -= 1
return all(x == 0 for x in count)
\`\`\`

**例子：** "anagram" 與 "nagaram" → True；"rat" 與 "car" → False`,
          en: `## LeetCode #242 — Valid Anagram

Determine if string \`t\` is an anagram of \`s\` (same letters, different arrangement).

**Method 1: Sort comparison**
\`\`\`python
return sorted(s) == sorted(t)  # O(n log n)
\`\`\`

**Method 2: Frequency counter (optimal)**
\`\`\`python
from collections import Counter
return Counter(s) == Counter(t)  # O(n)
\`\`\`

**Method 3: Count array (O(n) time + O(1) space)**
\`\`\`python
count = [0] * 26
for c in s: count[ord(c) - ord('a')] += 1
for c in t: count[ord(c) - ord('a')] -= 1
return all(x == 0 for x in count)
\`\`\``,
        },
        defaultCode: `from collections import Counter

def is_anagram(s, t):
    if len(s) != len(t):
        return False
    return Counter(s) == Counter(t)

# 測試
print(is_anagram("anagram", "nagaram"))  # True
print(is_anagram("rat", "car"))           # False
print(is_anagram("", ""))                 # True
print(is_anagram("ab", "a"))             # False

# 展示計數差異
def is_anagram_verbose(s, t):
    freq_s = Counter(s)
    freq_t = Counter(t)
    print(f"  s 的字頻: {dict(freq_s)}")
    print(f"  t 的字頻: {dict(freq_t)}")
    return freq_s == freq_t

print("\\n詳細分析 'anagram' vs 'nagaram':")
print("結果:", is_anagram_verbose("anagram", "nagaram"))`,
        exercise: {
          question: {
            "zh-TW": "延伸題：給定字串陣列，將所有字母異位詞分組在一起（LeetCode #49 Group Anagrams）。",
            en: "Extension: Group all anagrams together from a list of strings (LeetCode #49 Group Anagrams).",
          },
          hint: {
            "zh-TW": "用 tuple(sorted(word)) 作為 dict 的 key，相同 key 的字就是異位詞",
            en: "Use tuple(sorted(word)) as dict key — words with the same key are anagrams",
          },
          answer: `from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for word in strs:
        key = tuple(sorted(word))
        groups[key].append(word)
    return list(groups.values())

print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
# [['eat','tea','ate'], ['tan','nat'], ['bat']]`,
        },
      },
      {
        id: "binary-search",
        title: { "zh-TW": "#704 二元搜尋", en: "#704 Binary Search" },
        content: {
          "zh-TW": `## LeetCode #704 — Binary Search（二元搜尋）

在**已排序**陣列中搜尋目標值，回傳其索引；找不到回傳 -1。

**核心思路：**
每次比較中間元素，將搜尋範圍縮小一半。

\`\`\`python
left, right = 0, len(nums) - 1
while left <= right:
    mid = (left + right) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1
\`\`\`

| 時間複雜度 | 空間複雜度 |
|-----------|-----------|
| O(log n) | O(1) |

**重要邊界條件：**
- \`left <= right\`（注意是 ≤，不是 <）
- \`mid = (left + right) // 2\`（避免整數溢位）
- 找到後直接回傳，找不到則回傳 -1`,
          en: `## LeetCode #704 — Binary Search

Search a **sorted** array for a target. Return its index, or -1 if not found.

**Core idea:**
Compare the middle element each time, halving the search space.

\`\`\`python
left, right = 0, len(nums) - 1
while left <= right:
    mid = (left + right) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1
\`\`\`

| Time | Space |
|------|-------|
| O(log n) | O(1) |

**Key boundary conditions:**
- \`left <= right\` (use ≤, not <)
- \`mid = (left + right) // 2\`
- Return immediately when found; -1 when not found`,
        },
        defaultCode: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    steps = 0
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        print(f"  步驟 {steps}: 範圍[{left},{right}], mid={mid}, nums[mid]={nums[mid]}")
        if nums[mid] == target:
            print(f"  找到！index={mid}")
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    print(f"  找不到，共搜尋 {steps} 步")
    return -1

nums = [-1, 0, 3, 5, 9, 12]

print("搜尋 9：")
print(binary_search(nums, 9))    # 4

print("\\n搜尋 2：")
print(binary_search(nums, 2))   # -1

print("\\n搜尋 -1：")
print(binary_search(nums, -1))  # 0`,
        exercise: {
          question: {
            "zh-TW": "用二元搜尋找出目標值的「插入位置」（LeetCode #35 Search Insert Position）：若目標不存在，回傳它應該被插入的索引（保持升序）。",
            en: "Use binary search to find the insertion position (LeetCode #35 Search Insert Position): if target is not found, return the index where it would be inserted to keep the array sorted.",
          },
          hint: {
            "zh-TW": "迴圈結束後 left 就是插入位置（因為 left 停在第一個大於 target 的位置）",
            en: "After the loop ends, left is the insertion position (it stops at the first index greater than target)",
          },
          answer: `def search_insert(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return left  # 插入位置

nums = [1, 3, 5, 6]
print(search_insert(nums, 5))  # 2（已存在）
print(search_insert(nums, 2))  # 1（插入在 3 之前）
print(search_insert(nums, 7))  # 4（插入在末尾）
print(search_insert(nums, 0))  # 0（插入在開頭）`,
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

有三根柱子（A、B、C）和 n 個圓盤，最初全疊在 A 柱，規則：
- 每次只能移動一個圓盤
- 大圓盤不能疊在小圓盤上
- 目標：把所有圓盤移到 C 柱

**遞迴拆解：**
1. 把 n-1 個盤子從 A 移到 B（以 C 為暫存）
2. 把最大盤子從 A 移到 C
3. 把 n-1 個盤子從 B 移到 C（以 A 為暫存）

移動次數：**2ⁿ - 1**（n=3 需 7 次）`,
          en: `## Tower of Hanoi

Three pegs (A, B, C) and n discs, all starting on A. Rules:
- Move only one disc at a time
- Never place a larger disc on a smaller one
- Goal: move all discs to peg C

**Recursive breakdown:**
1. Move n-1 discs from A to B (using C as aux)
2. Move the largest disc from A to C
3. Move n-1 discs from B to C (using A as aux)

Moves required: **2ⁿ - 1** (n=3 takes 7 moves)`,
        },
        defaultCode: `def hanoi(n, from_peg, to_peg, aux_peg):
    if n == 1:
        print(f"  移動第 1 個碟子：{from_peg} → {to_peg}")
        return
    hanoi(n - 1, from_peg, aux_peg, to_peg)
    print(f"  移動第 {n} 個碟子：{from_peg} → {to_peg}")
    hanoi(n - 1, aux_peg, to_peg, from_peg)

for n in range(1, 5):
    count = 2**n - 1
    print(f"n={n}（需 {count} 步）：")
    hanoi(n, 'A', 'C', 'B')
    print()`,
        exercise: {
          question: {
            "zh-TW": "修改函式，加入 step 計數器，最後印出總步數，確認 n=4 時為 15 步。",
            en: "Add a step counter to the function and print the total steps at the end. Verify n=4 gives 15 steps.",
          },
          hint: {
            "zh-TW": "用 nonlocal step 或把 step 包在 list [0] 中讓遞迴可修改",
            en: "Use nonlocal step or wrap step in a list [0] so recursion can modify it",
          },
          answer: `def hanoi(n, from_peg, to_peg, aux_peg):
    steps = [0]
    def _hanoi(n, src, dst, aux):
        if n == 1:
            steps[0] += 1
            print(f"  {src} → {dst}")
            return
        _hanoi(n-1, src, aux, dst)
        steps[0] += 1
        print(f"  {src} → {dst}")
        _hanoi(n-1, aux, dst, src)
    _hanoi(n, from_peg, to_peg, aux_peg)
    print(f"共 {steps[0]} 步")

hanoi(4, 'A', 'C', 'B')  # 共 15 步`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

迷宮用 0/1 矩陣表示（1=可走、0=牆），老鼠從左上角走到右下角。

**回溯法（Backtracking）：**
1. 嘗試向右或向下走一步
2. 若走到死路，**退回**（標記為 0）再嘗試另一方向
3. 抵達終點即成功

這是回溯法的核心：**嘗試 → 失敗 → 撤銷 → 再試**`,
          en: `## Rat in a Maze (Backtracking)

A maze is a 0/1 matrix (1=open, 0=wall). The rat starts top-left and must reach bottom-right.

**Backtracking approach:**
1. Try moving right or down one step
2. If stuck, **backtrack** (mark as 0) and try the other direction
3. Reaching the goal = success

Core of backtracking: **try → fail → undo → retry**`,
        },
        defaultCode: `def solve_maze(maze):
    n = len(maze)
    sol = [[0]*n for _ in range(n)]

    def is_safe(x, y):
        return 0 <= x < n and 0 <= y < n and maze[x][y] == 1

    def backtrack(x, y):
        if x == n-1 and y == n-1:
            sol[x][y] = 1
            return True
        if is_safe(x, y):
            sol[x][y] = 1
            if backtrack(x+1, y) or backtrack(x, y+1):
                return True
            sol[x][y] = 0  # 退回
        return False

    if backtrack(0, 0):
        print("找到路徑：")
        for row in sol:
            print(" ".join("■" if c else "□" for c in row))
    else:
        print("無解")

maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
]
solve_maze(maze)`,
        exercise: {
          question: {
            "zh-TW": "修改程式，讓老鼠可以向右、向下、向左、向上四個方向移動（需防止重複拜訪）。",
            en: "Modify the program so the rat can move in all four directions (right, down, left, up), preventing revisits.",
          },
          hint: {
            "zh-TW": "用 visited 矩陣記錄已拜訪格子，四個方向用 dirs = [(1,0),(-1,0),(0,1),(0,-1)]",
            en: "Use a visited matrix to track cells already visited. Use dirs = [(1,0),(-1,0),(0,1),(0,-1)]",
          },
          answer: `def solve_maze(maze):
    n = len(maze)
    sol = [[0]*n for _ in range(n)]
    visited = [[False]*n for _ in range(n)]
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]

    def backtrack(x, y):
        if x == n-1 and y == n-1:
            sol[x][y] = 1
            return True
        if 0<=x<n and 0<=y<n and maze[x][y]==1 and not visited[x][y]:
            sol[x][y] = 1
            visited[x][y] = True
            for dx,dy in dirs:
                if backtrack(x+dx, y+dy):
                    return True
            sol[x][y] = 0
            visited[x][y] = False
        return False

    if backtrack(0, 0):
        for row in sol:
            print(" ".join("■" if c else "□" for c in row))

maze = [[1,0,0,0],[1,1,0,1],[0,1,0,0],[0,1,1,1]]
solve_maze(maze)`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 N×N 棋盤上放 N 個皇后，使任兩個皇后不互相攻擊（不同行、列、對角線）。

**回溯法：逐行放置**

每行只放一個皇后，用陣列 \`board[row] = col\` 記錄位置。

安全判斷（同列 + 對角線）：
\`\`\`python
board[r] == col              # 同一欄
abs(board[r]-col) == abs(r-row)  # 對角線
\`\`\`

8 皇后共有 **92** 種解法！`,
          en: `## N-Queens Problem

Place N queens on an N×N board so no two attack each other (different rows, columns, diagonals).

**Backtracking: place one queen per row**

Use array \`board[row] = col\` to record positions.

Safety check (same column + diagonals):
\`\`\`python
board[r] == col               # same column
abs(board[r]-col) == abs(r-row)  # diagonals
\`\`\`

There are **92** solutions for N=8!`,
        },
        defaultCode: `def solve_n_queens(n):
    board = [-1] * n
    solutions = []

    def is_safe(row, col):
        for r in range(row):
            if board[r] == col or abs(board[r]-col) == abs(r-row):
                return False
        return True

    def backtrack(row):
        if row == n:
            solutions.append(board[:])
            return
        for col in range(n):
            if is_safe(row, col):
                board[row] = col
                backtrack(row + 1)
                board[row] = -1

    backtrack(0)
    return solutions

solutions = solve_n_queens(8)
print(f"8 皇后共有 {len(solutions)} 種解法")
print("第一種解法：")
for col in solutions[0]:
    print("·" * col + "♛" + "·" * (7 - col))`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6 的六皇后問題，應有 4 種解法。印出全部 4 種棋盤。",
            en: "Solve the 6-Queens problem (N=6), which has 4 solutions. Print all 4 boards.",
          },
          hint: {
            "zh-TW": "直接把 solve_n_queens(8) 改成 solve_n_queens(6)，迴圈印出所有解",
            en: "Change solve_n_queens(8) to solve_n_queens(6) and loop to print all solutions",
          },
          answer: `def solve_n_queens(n):
    board = [-1]*n
    solutions = []
    def is_safe(row,col):
        for r in range(row):
            if board[r]==col or abs(board[r]-col)==abs(r-row): return False
        return True
    def backtrack(row):
        if row==n: solutions.append(board[:]); return
        for col in range(n):
            if is_safe(row,col):
                board[row]=col; backtrack(row+1); board[row]=-1
    backtrack(0)
    return solutions

sols = solve_n_queens(6)
print(f"6 皇后共有 {len(sols)} 種解法")
for i,s in enumerate(sols,1):
    print(f"解法 {i}：")
    for col in s: print("·"*col+"♛"+"·"*(5-col))
    print()`,
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

工廠模式將「建立物件的邏輯」集中在一個工廠類別，呼叫者只說「我要什麼」，不需知道如何建立。

**解決的問題：**
- 呼叫者不需直接 \`new Circle()\` 或 \`new Rectangle()\`
- 新增形狀時只需修改工廠，不影響其他程式碼

**結構：**
\`\`\`
抽象基類 Shape
├── Circle（實作）
├── Rectangle（實作）
└── Triangle（實作）
ShapeFactory.create("circle", ...) → Circle 物件
\`\`\``,
          en: `## Factory Pattern

The Factory Pattern centralizes object creation logic in one factory class. Callers say "give me X" without knowing how X is built.

**Problems it solves:**
- Callers don't need to directly \`new Circle()\` or \`new Rectangle()\`
- Adding new shapes only requires changing the factory

**Structure:**
\`\`\`
Abstract base: Shape
├── Circle (concrete)
├── Rectangle (concrete)
└── Triangle (concrete)
ShapeFactory.create("circle", ...) → Circle object
\`\`\``,
        },
        defaultCode: `from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...
    @abstractmethod
    def perimeter(self) -> float: ...
    def __str__(self):
        return f"{self.__class__.__name__}: 面積={self.area():.2f}, 周長={self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self): return math.pi * self.radius ** 2
    def perimeter(self): return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self): return self.w * self.h
    def perimeter(self): return 2 * (self.w + self.h)

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c
    def area(self):
        s = (self.a+self.b+self.c)/2
        return math.sqrt(s*(s-self.a)*(s-self.b)*(s-self.c))
    def perimeter(self): return self.a + self.b + self.c

class ShapeFactory:
    _registry = {"circle": Circle, "rectangle": Rectangle, "triangle": Triangle}

    @classmethod
    def create(cls, shape_type, *args):
        cls_ = cls._registry.get(shape_type.lower())
        if not cls_:
            raise ValueError(f"未知形狀：{shape_type}")
        return cls_(*args)

shapes = [
    ShapeFactory.create("circle", 5),
    ShapeFactory.create("rectangle", 4, 6),
    ShapeFactory.create("triangle", 3, 4, 5),
]
for s in shapes:
    print(s)`,
        exercise: {
          question: {
            "zh-TW": "在 _registry 中新增一個 Square（正方形，繼承 Rectangle），讓 ShapeFactory.create(\"square\", 4) 可以運作。",
            en: "Add a Square class (extends Rectangle) to _registry so ShapeFactory.create(\"square\", 4) works.",
          },
          hint: {
            "zh-TW": "class Square(Rectangle): def __init__(self, side): super().__init__(side, side)",
            en: "class Square(Rectangle): def __init__(self, side): super().__init__(side, side)",
          },
          answer: `from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...
    @abstractmethod
    def perimeter(self) -> float: ...
    def __str__(self):
        return f"{self.__class__.__name__}: 面積={self.area():.2f}"

class Rectangle(Shape):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h
    def perimeter(self): return 2*(self.w+self.h)

class Square(Rectangle):
    def __init__(self, side): super().__init__(side, side)

class ShapeFactory:
    _registry = {"rectangle": Rectangle, "square": Square}
    @classmethod
    def create(cls, shape_type, *args):
        cls_ = cls._registry.get(shape_type)
        if not cls_: raise ValueError(f"未知：{shape_type}")
        return cls_(*args)

print(ShapeFactory.create("square", 4))  # Square: 面積=16.00`,
        },
      },
      {
        id: "singleton-pattern",
        title: { "zh-TW": "單例模式", en: "Singleton Pattern" },
        content: {
          "zh-TW": `## 單例模式（Singleton Pattern）

確保一個類別只有**一個實例**，並提供全域存取點。

**常見使用場景：**
- 資料庫連線池
- 日誌系統（Logger）
- 應用程式設定（Config）

**Python 實作：覆寫 \`__new__\`**

\`\`\`python
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
\`\`\`

任何地方呼叫 \`Singleton()\` 都會拿到同一個物件。`,
          en: `## Singleton Pattern

Ensures a class has only **one instance** with a global access point.

**Common use cases:**
- Database connection pool
- Logger
- App configuration

**Python: override \`__new__\`**

\`\`\`python
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
\`\`\`

Any call to \`Singleton()\` returns the same object.`,
        },
        defaultCode: `class Logger:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._logs = []
        return cls._instance

    def log(self, level, message):
        entry = f"[{level}] {message}"
        self._logs.append(entry)
        print(entry)

    def show_all(self):
        print(f"\\n=== 共 {len(self._logs)} 筆日誌 ===")
        for log in self._logs:
            print(log)

# 不同模組都取到同一個 Logger
logger1 = Logger()
logger2 = Logger()
print(f"同一個物件？{logger1 is logger2}")  # True

logger1.log("INFO", "伺服器啟動")
logger2.log("WARN", "記憶體使用率偏高")
logger1.log("ERROR", "資料庫連線失敗")

logger1.show_all()`,
        exercise: {
          question: {
            "zh-TW": "為 Logger 新增 clear() 方法清空日誌，以及 count 屬性回傳日誌數量。",
            en: "Add a clear() method to Logger that empties the log, and a count property that returns the number of log entries.",
          },
          hint: {
            "zh-TW": "@property def count(self): return len(self._logs)；clear 方法用 self._logs.clear()",
            en: "@property def count(self): return len(self._logs); clear() uses self._logs.clear()",
          },
          answer: `class Logger:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._logs = []
        return cls._instance
    def log(self, level, msg): self._logs.append(f"[{level}] {msg}"); print(self._logs[-1])
    def clear(self): self._logs.clear(); print("日誌已清空")
    @property
    def count(self): return len(self._logs)

lg = Logger()
lg.log("INFO","啟動"); lg.log("WARN","警告")
print(f"共 {lg.count} 筆")
lg.clear()
print(f"清空後 {lg.count} 筆")`,
        },
      },
      {
        id: "observer-pattern",
        title: { "zh-TW": "觀察者模式", en: "Observer Pattern" },
        content: {
          "zh-TW": `## 觀察者模式（Observer Pattern）

定義「一對多」的依賴關係：當**主題（Subject）**狀態改變，所有**觀察者（Observer）**自動收到通知。

**常見使用場景：**
- 股票價格更新 → 通知所有投資者
- 按鈕點擊 → 觸發多個事件處理器
- MVC 架構中 Model → 更新 View

**角色：**
- \`Subject\`：維護觀察者列表，狀態改變時呼叫 \`notify()\`
- \`Observer\`：實作 \`update()\` 方法接收通知`,
          en: `## Observer Pattern

Defines a one-to-many dependency: when the **Subject** changes state, all **Observers** are notified automatically.

**Common use cases:**
- Stock price update → notify all investors
- Button click → trigger multiple event handlers
- MVC: Model change → update View

**Roles:**
- \`Subject\`: maintains observer list, calls \`notify()\` on state change
- \`Observer\`: implements \`update()\` to receive notifications`,
        },
        defaultCode: `from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, event, data): ...

class Subject:
    def __init__(self):
        self._observers: list[Observer] = []

    def subscribe(self, observer: Observer):
        self._observers.append(observer)

    def unsubscribe(self, observer: Observer):
        self._observers.remove(observer)

    def notify(self, event, data=None):
        for obs in self._observers:
            obs.update(event, data)

# 具體主題：股票市場
class StockMarket(Subject):
    def __init__(self):
        super().__init__()
        self._price = 0

    def set_price(self, price):
        old = self._price
        self._price = price
        change = ((price - old) / old * 100) if old else 0
        self.notify("price_change", {"price": price, "change": change})

# 具體觀察者
class InvestorA(Observer):
    def update(self, event, data):
        p, c = data["price"], data["change"]
        print(f"投資者A：股價 {p}（{c:+.1f}%）{'📈' if c>0 else '📉'}")

class AutoTrader(Observer):
    def update(self, event, data):
        p = data["price"]
        action = "買入" if p < 100 else "賣出"
        print(f"自動交易系統：{action}！當前價格 {p}")

market = StockMarket()
a = InvestorA()
bot = AutoTrader()

market.subscribe(a)
market.subscribe(bot)

market.set_price(100)
market.set_price(85)
market.unsubscribe(bot)
market.set_price(110)`,
        exercise: {
          question: {
            "zh-TW": "新增一個 PriceLogger 觀察者，記錄所有價格變化到一個 list，最後印出完整歷史。",
            en: "Add a PriceLogger observer that records all price changes in a list, then prints the complete history.",
          },
          hint: {
            "zh-TW": "class PriceLogger(Observer): def __init__(self): self.history=[]；update 時 self.history.append(data[\"price\"])",
            en: "class PriceLogger(Observer): def __init__(self): self.history=[]; in update: self.history.append(data[\"price\"])",
          },
          answer: `from abc import ABC, abstractmethod
class Observer(ABC):
    @abstractmethod
    def update(self, event, data): ...
class Subject:
    def __init__(self): self._observers = []
    def subscribe(self, o): self._observers.append(o)
    def notify(self, event, data=None):
        for o in self._observers: o.update(event, data)
class StockMarket(Subject):
    def __init__(self): super().__init__(); self._price = 0
    def set_price(self, p):
        self._price = p; self.notify("price_change", {"price": p})
class PriceLogger(Observer):
    def __init__(self): self.history = []
    def update(self, event, data): self.history.append(data["price"])
    def show(self): print("歷史：", self.history)

m = StockMarket()
lg = PriceLogger()
m.subscribe(lg)
m.set_price(100); m.set_price(85); m.set_price(110)
lg.show()`,
        },
      },
    ],
  },
];

export default chapters;
