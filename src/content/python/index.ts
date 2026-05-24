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
];

export default chapters;
