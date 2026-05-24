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
          "zh-TW": `## R 語言簡介

R 是專為**統計分析**與**資料視覺化**設計的語言，廣泛用於學術研究和資料科學。

使用 \`print()\` 或直接輸入表達式來輸出結果。`,
          en: `## Introduction to R

R is a language designed for **statistical analysis** and **data visualization**, widely used in academia and data science.

Use \`print()\` or just type an expression to see output.`,
        },
        defaultCode: `print("Hello, World!")

# 基本運算
x <- 10
y <- 3
cat("Sum:", x + y, "\\n")
cat("Mean of 1:10 =", mean(1:10), "\\n")`,
      },
      {
        id: "vectors",
        title: { "zh-TW": "向量", en: "Vectors" },
        content: {
          "zh-TW": `## 向量（Vector）

向量是 R 的基本資料結構，使用 \`c()\` 建立。

\`\`\`r
nums <- c(1, 2, 3, 4, 5)
mean(nums)   # 平均值
sum(nums)    # 總和
\`\`\`

R 的運算符號是**向量化**的，不需要迴圈：
\`\`\`r
nums * 2   # 每個元素乘以 2
\`\`\``,
          en: `## Vectors

Vectors are R's fundamental data structure, created with \`c()\`.

\`\`\`r
nums <- c(1, 2, 3, 4, 5)
mean(nums)   # average
sum(nums)    # sum
\`\`\`

R operations are **vectorized** — no loops needed:
\`\`\`r
nums * 2   # multiply each element by 2
\`\`\``,
        },
        defaultCode: `nums <- c(4, 7, 2, 9, 1, 5)

cat("Values:", nums, "\\n")
cat("Sum:", sum(nums), "\\n")
cat("Mean:", mean(nums), "\\n")
cat("Max:", max(nums), "\\n")
cat("Sorted:", sort(nums), "\\n")`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數與型別", en: "Variables & Types" },
        content: {
          "zh-TW": `## 變數與基本型別

R 使用 \`<-\` 作為賦值運算子（也可以使用 \`=\`）。

### 基本資料型別

| 型別 | 說明 | 範例 |
|------|------|------|
| numeric | 數值（含小數） | \`3.14\` |
| integer | 整數（加 L） | \`5L\` |
| character | 字串 | \`"hello"\` |
| logical | 布林值 | \`TRUE / FALSE\` |

使用 \`class()\` 檢查型別：
\`\`\`r
x <- 42
class(x)       # "numeric"
class("hi")    # "character"
class(TRUE)    # "logical"
\`\`\`

### 基本算術運算

| 運算子 | 說明 |
|--------|------|
| \`+\` \`-\` \`*\` \`/\` | 加減乘除 |
| \`^\` | 次方 |
| \`%%\` | 餘數 |
| \`%/%\` | 整數除法 |`,
          en: `## Variables and Basic Types

R uses \`<-\` as the assignment operator (you can also use \`=\`).

### Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| numeric | Numbers (with decimals) | \`3.14\` |
| integer | Whole numbers (append L) | \`5L\` |
| character | Strings | \`"hello"\` |
| logical | Boolean values | \`TRUE / FALSE\` |

Use \`class()\` to check the type:
\`\`\`r
x <- 42
class(x)       # "numeric"
class("hi")    # "character"
class(TRUE)    # "logical"
\`\`\`

### Basic Arithmetic

| Operator | Description |
|----------|-------------|
| \`+\` \`-\` \`*\` \`/\` | Add, subtract, multiply, divide |
| \`^\` | Exponentiation |
| \`%%\` | Modulo (remainder) |
| \`%/%\` | Integer division |`,
        },
        defaultCode: `# 賦值兩種方式
a <- 10
b = 3.14

cat("a =", a, "  class:", class(a), "\\n")
cat("b =", b, "  class:", class(b), "\\n")

# 整數與字串
n <- 7L
msg <- "R 語言"
flag <- TRUE

cat("n =", n, "  class:", class(n), "\\n")
cat("msg =", msg, "  class:", class(msg), "\\n")
cat("flag =", flag, "  class:", class(flag), "\\n")

# 基本算術
cat("\\n--- 算術運算 ---\\n")
cat("10 + 3 =", 10 + 3, "\\n")
cat("10 - 3 =", 10 - 3, "\\n")
cat("10 * 3 =", 10 * 3, "\\n")
cat("10 / 3 =", 10 / 3, "\\n")
cat("10 ^ 3 =", 10 ^ 3, "\\n")
cat("10 %% 3 =", 10 %% 3, "\\n")
cat("10 %/% 3 =", 10 %/% 3, "\\n")`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## 運算子

### 比較運算子

\`\`\`r
5 > 3    # TRUE
5 == 5   # TRUE
5 != 4   # TRUE
5 >= 6   # FALSE
\`\`\`

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`&\` | 且（向量化） |
| \`|\` | 或（向量化） |
| \`!\` | 非 |
| \`&&\` | 且（單一值，短路求值） |
| \`||\` | 或（單一值，短路求值） |

### 字串串接：paste()

\`\`\`r
paste("Hello", "World")          # "Hello World"
paste("a", "b", sep = "-")       # "a-b"
paste0("x", 1:3)                 # "x1" "x2" "x3"
\`\`\``,
          en: `## Operators

### Comparison Operators

\`\`\`r
5 > 3    # TRUE
5 == 5   # TRUE
5 != 4   # TRUE
5 >= 6   # FALSE
\`\`\`

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`&\` | AND (vectorized) |
| \`|\` | OR (vectorized) |
| \`!\` | NOT |
| \`&&\` | AND (scalar, short-circuit) |
| \`||\` | OR (scalar, short-circuit) |

### String Concatenation: paste()

\`\`\`r
paste("Hello", "World")          # "Hello World"
paste("a", "b", sep = "-")       # "a-b"
paste0("x", 1:3)                 # "x1" "x2" "x3"
\`\`\``,
        },
        defaultCode: `# 比較運算子
cat("--- 比較 ---\\n")
cat("5 > 3 :", 5 > 3, "\\n")
cat("5 == 5 :", 5 == 5, "\\n")
cat("5 != 4 :", 5 != 4, "\\n")
cat("5 >= 6 :", 5 >= 6, "\\n")

# 邏輯運算子
cat("\\n--- 邏輯 ---\\n")
cat("TRUE & FALSE :", TRUE & FALSE, "\\n")
cat("TRUE | FALSE :", TRUE | FALSE, "\\n")
cat("!TRUE :", !TRUE, "\\n")

# 向量化邏輯
x <- c(1, 5, 3, 8, 2)
cat("\\nx > 2 & x < 7 :", x > 2 & x < 7, "\\n")
cat("x[x > 2 & x < 7] :", x[x > 2 & x < 7], "\\n")

# 字串串接
cat("\\n--- paste ---\\n")
cat(paste("Hello", "World"), "\\n")
cat(paste("score", 95, sep = ": "), "\\n")
cat(paste0("item", 1:4), "\\n")`,
      },
    ],
  },
  {
    id: "control",
    title: { "zh-TW": "流程控制", en: "Control Flow" },
    lessons: [
      {
        id: "conditionals",
        title: { "zh-TW": "條件判斷", en: "Conditionals" },
        content: {
          "zh-TW": `## 條件判斷

### if / else if / else

\`\`\`r
score <- 75

if (score >= 90) {
  cat("優秀\\n")
} else if (score >= 60) {
  cat("及格\\n")
} else {
  cat("不及格\\n")
}
\`\`\`

### ifelse()：向量化條件

\`ifelse(條件, 真時的值, 假時的值)\` 可一次處理整個向量：

\`\`\`r
scores <- c(85, 42, 90, 55, 78)
result <- ifelse(scores >= 60, "pass", "fail")
print(result)
\`\`\``,
          en: `## Conditionals

### if / else if / else

\`\`\`r
score <- 75

if (score >= 90) {
  cat("Excellent\\n")
} else if (score >= 60) {
  cat("Pass\\n")
} else {
  cat("Fail\\n")
}
\`\`\`

### ifelse(): Vectorized Conditional

\`ifelse(condition, value_if_true, value_if_false)\` processes an entire vector at once:

\`\`\`r
scores <- c(85, 42, 90, 55, 78)
result <- ifelse(scores >= 60, "pass", "fail")
print(result)
\`\`\``,
        },
        defaultCode: `# if / else if / else
score <- 75

if (score >= 90) {
  cat("等級：優秀\\n")
} else if (score >= 75) {
  cat("等級：良好\\n")
} else if (score >= 60) {
  cat("等級：及格\\n")
} else {
  cat("等級：不及格\\n")
}

# ifelse() 向量化
scores <- c(95, 42, 68, 88, 50, 73)
grades <- ifelse(scores >= 90, "A",
          ifelse(scores >= 75, "B",
          ifelse(scores >= 60, "C", "F")))

cat("\\n分數:", scores, "\\n")
cat("等級:", grades, "\\n")`,
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## 迴圈

### for 迴圈

\`\`\`r
for (i in 1:5) {
  cat(i, "\\n")
}

# 遍歷向量
fruits <- c("apple", "banana", "cherry")
for (f in fruits) {
  cat(f, "\\n")
}
\`\`\`

### while 迴圈

\`\`\`r
count <- 1
while (count <= 5) {
  cat(count, "\\n")
  count <- count + 1
}
\`\`\`

### break 與 next

- \`break\`：跳出迴圈
- \`next\`：跳過本次，繼續下一次（相當於其他語言的 \`continue\`）

\`\`\`r
for (i in 1:10) {
  if (i %% 2 == 0) next   # 跳過偶數
  if (i > 7) break         # 超過 7 就停止
  cat(i, "\\n")
}
\`\`\``,
          en: `## Loops

### for Loop

\`\`\`r
for (i in 1:5) {
  cat(i, "\\n")
}

# Iterate over a vector
fruits <- c("apple", "banana", "cherry")
for (f in fruits) {
  cat(f, "\\n")
}
\`\`\`

### while Loop

\`\`\`r
count <- 1
while (count <= 5) {
  cat(count, "\\n")
  count <- count + 1
}
\`\`\`

### break and next

- \`break\`: exit the loop
- \`next\`: skip current iteration and continue (like \`continue\` in other languages)

\`\`\`r
for (i in 1:10) {
  if (i %% 2 == 0) next   # skip even numbers
  if (i > 7) break         # stop when i > 7
  cat(i, "\\n")
}
\`\`\``,
        },
        defaultCode: `# for 迴圈：累加
total <- 0
for (i in 1:10) {
  total <- total + i
}
cat("1 到 10 的總和:", total, "\\n")

# while 迴圈：找到第一個大於 50 的平方數
n <- 1
while (n^2 <= 50) {
  n <- n + 1
}
cat("第一個平方大於 50 的數:", n, "(", n^2, ")\\n")

# break 與 next
cat("\\n1~20 中，3 的倍數但不是 9 的倍數：")
for (i in 1:20) {
  if (i %% 9 == 0) next   # 跳過 9 的倍數
  if (i %% 3 == 0) cat(i, "")
}
cat("\\n")`,
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式", en: "Functions" },
    lessons: [
      {
        id: "functions",
        title: { "zh-TW": "自訂函式", en: "Custom Functions" },
        content: {
          "zh-TW": `## 自訂函式

使用 \`function()\` 關鍵字定義函式。

### 基本語法

\`\`\`r
greet <- function(name) {
  cat("Hello,", name, "\\n")
}
greet("Alice")
\`\`\`

### return() 與預設引數

\`\`\`r
power <- function(base, exp = 2) {
  return(base ^ exp)
}
power(3)      # 9（exp 預設為 2）
power(2, 10)  # 1024
\`\`\`

### 回傳多個值（使用 list）

\`\`\`r
stats <- function(x) {
  list(mean = mean(x), sd = sd(x), n = length(x))
}
result <- stats(c(2, 4, 6, 8))
cat("平均:", result$mean, "\\n")
\`\`\``,
          en: `## Custom Functions

Use the \`function()\` keyword to define functions.

### Basic Syntax

\`\`\`r
greet <- function(name) {
  cat("Hello,", name, "\\n")
}
greet("Alice")
\`\`\`

### return() and Default Arguments

\`\`\`r
power <- function(base, exp = 2) {
  return(base ^ exp)
}
power(3)      # 9 (exp defaults to 2)
power(2, 10)  # 1024
\`\`\`

### Returning Multiple Values (using list)

\`\`\`r
stats <- function(x) {
  list(mean = mean(x), sd = sd(x), n = length(x))
}
result <- stats(c(2, 4, 6, 8))
cat("Mean:", result$mean, "\\n")
\`\`\``,
        },
        defaultCode: `# 基本函式
greet <- function(name) {
  cat("Hello,", name, "!\\n")
}
greet("Alice")
greet("Bob")

# 有預設引數的函式
power <- function(base, exp = 2) {
  return(base ^ exp)
}
cat("power(3) =", power(3), "\\n")
cat("power(2, 10) =", power(2, 10), "\\n")

# 回傳多個值
describe <- function(x) {
  list(
    mean  = mean(x),
    sd    = sd(x),
    min   = min(x),
    max   = max(x)
  )
}

data <- c(12, 7, 19, 3, 15, 8)
res <- describe(data)
cat("\\n資料描述統計\\n")
cat("平均:", res$mean, "\\n")
cat("標準差:", res$sd, "\\n")
cat("最小:", res$min, "  最大:", res$max, "\\n")`,
      },
      {
        id: "apply",
        title: { "zh-TW": "Apply 函式族", en: "Apply Family" },
        content: {
          "zh-TW": `## Apply 函式族

Apply 函式族讓你不需要顯式迴圈，就能對資料結構批次套用函式。

### sapply()：回傳向量或矩陣

\`\`\`r
nums <- 1:5
sapply(nums, function(x) x^2)   # 1 4 9 16 25
\`\`\`

### lapply()：回傳 list

\`\`\`r
words <- c("hello", "world")
lapply(words, toupper)
# list: "HELLO", "WORLD"
\`\`\`

### apply()：對矩陣的列或欄操作

\`\`\`r
m <- matrix(1:12, nrow = 3)
apply(m, 1, sum)   # MARGIN=1 → 對每列加總
apply(m, 2, sum)   # MARGIN=2 → 對每欄加總
\`\`\``,
          en: `## Apply Family

The apply family lets you apply functions over data structures without explicit loops.

### sapply(): Returns a vector or matrix

\`\`\`r
nums <- 1:5
sapply(nums, function(x) x^2)   # 1 4 9 16 25
\`\`\`

### lapply(): Returns a list

\`\`\`r
words <- c("hello", "world")
lapply(words, toupper)
# list: "HELLO", "WORLD"
\`\`\`

### apply(): Over rows or columns of a matrix

\`\`\`r
m <- matrix(1:12, nrow = 3)
apply(m, 1, sum)   # MARGIN=1 → sum each row
apply(m, 2, sum)   # MARGIN=2 → sum each column
\`\`\``,
        },
        defaultCode: `# sapply：回傳向量
squares <- sapply(1:6, function(x) x^2)
cat("平方數:", squares, "\\n")

# lapply：回傳 list，再用 unlist 攤平
words <- c("apple", "banana", "cherry")
upper_list <- lapply(words, toupper)
cat("大寫:", unlist(upper_list), "\\n")

# apply：對矩陣操作
m <- matrix(1:12, nrow = 3)
cat("\\n矩陣:\\n")
print(m)
cat("每列總和:", apply(m, 1, sum), "\\n")
cat("每欄平均:", apply(m, 2, mean), "\\n")

# 自訂函式搭配 sapply
classify <- function(x) {
  if (x >= 90) "A" else if (x >= 60) "B" else "C"
}
scores <- c(95, 58, 73, 88, 42)
grades <- sapply(scores, classify)
cat("\\n分數:", scores, "\\n")
cat("等級:", grades, "\\n")`,
      },
    ],
  },
  {
    id: "data",
    title: { "zh-TW": "資料分析", en: "Data Analysis" },
    lessons: [
      {
        id: "data-frames",
        title: { "zh-TW": "資料框", en: "Data Frames" },
        content: {
          "zh-TW": `## 資料框（Data Frame）

資料框是 R 最常用的表格型資料結構，每欄可以有不同型別。

### 建立資料框

\`\`\`r
df <- data.frame(
  name = c("Alice", "Bob", "Carol"),
  age  = c(25, 30, 22),
  pass = c(TRUE, TRUE, FALSE)
)
\`\`\`

### 常用操作

| 函式/語法 | 說明 |
|-----------|------|
| \`nrow(df)\` | 列數 |
| \`ncol(df)\` | 欄數 |
| \`df$name\` | 取出欄位 |
| \`str(df)\` | 結構摘要 |
| \`df[df$age > 25, ]\` | 篩選列 |`,
          en: `## Data Frames

Data frames are R's most common tabular data structure; each column can have a different type.

### Creating a Data Frame

\`\`\`r
df <- data.frame(
  name = c("Alice", "Bob", "Carol"),
  age  = c(25, 30, 22),
  pass = c(TRUE, TRUE, FALSE)
)
\`\`\`

### Common Operations

| Syntax | Description |
|--------|-------------|
| \`nrow(df)\` | Number of rows |
| \`ncol(df)\` | Number of columns |
| \`df$name\` | Access a column |
| \`str(df)\` | Structure summary |
| \`df[df$age > 25, ]\` | Filter rows |`,
        },
        defaultCode: `# 建立資料框
df <- data.frame(
  name   = c("Alice", "Bob", "Carol", "Dave", "Eve"),
  score  = c(88, 72, 95, 61, 83),
  passed = c(TRUE, TRUE, TRUE, FALSE, TRUE),
  stringsAsFactors = FALSE
)

cat("列數:", nrow(df), "  欄數:", ncol(df), "\\n\\n")

# 結構摘要
str(df)

# 取出欄位
cat("\\n姓名欄位:", df$name, "\\n")
cat("平均分數:", mean(df$score), "\\n")

# 篩選
cat("\\n分數 >= 85 的學生:\\n")
print(df[df$score >= 85, ])`,
      },
      {
        id: "strings",
        title: { "zh-TW": "字串處理", en: "String Manipulation" },
        content: {
          "zh-TW": `## 字串處理

R 提供許多內建函式來操作字串。

| 函式 | 說明 | 範例 |
|------|------|------|
| \`nchar(x)\` | 字串長度 | \`nchar("hello")\` → 5 |
| \`toupper(x)\` | 轉大寫 | \`toupper("hi")\` → "HI" |
| \`tolower(x)\` | 轉小寫 | \`tolower("HI")\` → "hi" |
| \`substr(x, start, stop)\` | 取子字串 | \`substr("hello", 2, 4)\` → "ell" |
| \`gsub(pattern, replacement, x)\` | 全部取代 | \`gsub("l", "L", "hello")\` → "heLLo" |
| \`paste()\` | 串接字串 | \`paste("a", "b")\` → "a b" |

### 正規表達式

\`gsub()\` 支援正規表達式：
\`\`\`r
gsub("[aeiou]", "*", "hello world")  # "h*ll* w*rld"
\`\`\``,
          en: `## String Manipulation

R provides many built-in functions for working with strings.

| Function | Description | Example |
|----------|-------------|---------|
| \`nchar(x)\` | String length | \`nchar("hello")\` → 5 |
| \`toupper(x)\` | To uppercase | \`toupper("hi")\` → "HI" |
| \`tolower(x)\` | To lowercase | \`tolower("HI")\` → "hi" |
| \`substr(x, start, stop)\` | Extract substring | \`substr("hello", 2, 4)\` → "ell" |
| \`gsub(pattern, replacement, x)\` | Replace all | \`gsub("l", "L", "hello")\` → "heLLo" |
| \`paste()\` | Concatenate | \`paste("a", "b")\` → "a b" |

### Regular Expressions

\`gsub()\` supports regex:
\`\`\`r
gsub("[aeiou]", "*", "hello world")  # "h*ll* w*rld"
\`\`\``,
        },
        defaultCode: `text <- "Hello, R Programming World!"

cat("原始字串:", text, "\\n")
cat("長度:", nchar(text), "\\n")
cat("大寫:", toupper(text), "\\n")
cat("小寫:", tolower(text), "\\n")
cat("子字串 [8,9]:", substr(text, 8, 8), "\\n")

# gsub 取代
cat("\\n取代 'l' 為 'L':", gsub("l", "L", text), "\\n")
cat("移除母音:", gsub("[aeiouAEIOU]", "", text), "\\n")

# paste 串接
words <- c("data", "science", "with", "R")
cat("\\npaste:", paste(words, collapse = " "), "\\n")
cat("paste0:", paste0(words, collapse = "-"), "\\n")

# 向量化字串操作
names <- c("alice", "bob", "carol")
cat("\\n名字大寫:", toupper(names), "\\n")
cat("名字長度:", nchar(names), "\\n")`,
      },
    ],
  },
];

export default chapters;
