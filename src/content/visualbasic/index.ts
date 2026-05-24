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
          "zh-TW": `## Visual Basic 簡介

Visual Basic（VB）是微軟開發的事件驅動語言，語法接近英文，適合初學者。

主要用途：
- Windows 表單應用程式（WinForms）
- Office 自動化（VBA）
- 企業內部系統

### 程式結構

VB 程式以 \`Module\` 為單位，執行從 \`Sub Main()\` 開始：

\`\`\`vb
Module Program
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
\`\`\`

- \`Module ... End Module\`：定義模組（相當於命名空間容器）
- \`Sub Main()\`：程式進入點
- \`Console.WriteLine\`：輸出一行文字到終端機`,
          en: `## Introduction to Visual Basic

Visual Basic (VB) is Microsoft's event-driven language with English-like syntax, great for beginners.

Main uses:
- Windows Forms applications
- Office automation (VBA)
- Enterprise internal systems

### Program Structure

A VB program uses a \`Module\` as its container; execution starts from \`Sub Main()\`:

\`\`\`vb
Module Program
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
\`\`\`

- \`Module ... End Module\`: defines a module (a named container)
- \`Sub Main()\`: program entry point
- \`Console.WriteLine\`: outputs a line of text to the terminal`,
        },
        defaultCode: `Module Program
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數與型別", en: "Variables and Types" },
        content: {
          "zh-TW": `## 變數與資料型別

使用 \`Dim\` 關鍵字宣告變數，並以 \`As\` 指定型別：

\`\`\`vb
Dim x As Integer
Dim s As String
Dim b As Boolean
\`\`\`

### 常見基本型別

| 型別 | 說明 | 範例 |
|------|------|------|
| \`Integer\` | 整數（32 位元） | \`42\` |
| \`Double\` | 浮點數（64 位元） | \`3.14\` |
| \`String\` | 字串 | \`"Hello"\` |
| \`Boolean\` | 布林值 | \`True\` / \`False\` |

### 宣告並賦值

\`\`\`vb
Dim age As Integer = 18
Dim name As String = "Alice"
Dim pi As Double = 3.14159
Dim isStudent As Boolean = True
\`\`\`

### 字串串接

使用 \`&\` 或 \`+\` 串接字串：

\`\`\`vb
Dim greeting As String = "Hello, " & name
\`\`\``,
          en: `## Variables and Data Types

Use the \`Dim\` keyword to declare variables, and \`As\` to specify the type:

\`\`\`vb
Dim x As Integer
Dim s As String
Dim b As Boolean
\`\`\`

### Common Basic Types

| Type | Description | Example |
|------|-------------|---------|
| \`Integer\` | 32-bit integer | \`42\` |
| \`Double\` | 64-bit floating point | \`3.14\` |
| \`String\` | Text string | \`"Hello"\` |
| \`Boolean\` | Boolean value | \`True\` / \`False\` |

### Declare and Assign

\`\`\`vb
Dim age As Integer = 18
Dim name As String = "Alice"
Dim pi As Double = 3.14159
Dim isStudent As Boolean = True
\`\`\`

### String Concatenation

Use \`&\` or \`+\` to concatenate strings:

\`\`\`vb
Dim greeting As String = "Hello, " & name
\`\`\``,
        },
        defaultCode: `Module Program
    Sub Main()
        Dim age As Integer = 18
        Dim name As String = "Alice"
        Dim pi As Double = 3.14159
        Dim isStudent As Boolean = True

        Console.WriteLine("Name: " & name)
        Console.WriteLine("Age: " & age)
        Console.WriteLine("Pi: " & pi)
        Console.WriteLine("Is student: " & isStudent)
    End Sub
End Module`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## 運算子

### 算術運算子

| 運算子 | 說明 | 範例 |
|--------|------|------|
| \`+\` | 加法 | \`3 + 2\` → \`5\` |
| \`-\` | 減法 | \`5 - 2\` → \`3\` |
| \`*\` | 乘法 | \`3 * 4\` → \`12\` |
| \`/\` | 除法 | \`7 / 2\` → \`3.5\` |
| \`Mod\` | 取餘數 | \`7 Mod 2\` → \`1\` |

### 比較運算子

| 運算子 | 說明 |
|--------|------|
| \`=\` | 等於 |
| \`<>\` | 不等於 |
| \`<\` | 小於 |
| \`>\` | 大於 |

比較運算結果為 \`Boolean\`（\`True\` 或 \`False\`）。

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`And\` | 且（兩者皆真） |
| \`Or\` | 或（至少一真） |
| \`Not\` | 非（取反） |`,
          en: `## Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| \`+\` | Addition | \`3 + 2\` → \`5\` |
| \`-\` | Subtraction | \`5 - 2\` → \`3\` |
| \`*\` | Multiplication | \`3 * 4\` → \`12\` |
| \`/\` | Division | \`7 / 2\` → \`3.5\` |
| \`Mod\` | Remainder | \`7 Mod 2\` → \`1\` |

### Comparison Operators

| Operator | Description |
|----------|-------------|
| \`=\` | Equal to |
| \`<>\` | Not equal to |
| \`<\` | Less than |
| \`>\` | Greater than |

Comparison results are \`Boolean\` (\`True\` or \`False\`).

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`And\` | Both must be true |
| \`Or\` | At least one must be true |
| \`Not\` | Negation |`,
        },
        defaultCode: `Module Program
    Sub Main()
        Dim a As Integer = 10
        Dim b As Integer = 3

        Console.WriteLine("a + b = " & (a + b))
        Console.WriteLine("a - b = " & (a - b))
        Console.WriteLine("a * b = " & (a * b))
        Console.WriteLine("a / b = " & (a / b))
        Console.WriteLine("a Mod b = " & (a Mod b))

        Console.WriteLine("a > b: " & (a > b))
        Console.WriteLine("a = b: " & (a = b))
        Console.WriteLine("a <> b: " & (a <> b))

        Dim x As Boolean = True
        Dim y As Boolean = False
        Console.WriteLine("x And y: " & (x And y))
        Console.WriteLine("x Or y: " & (x Or y))
        Console.WriteLine("Not x: " & (Not x))
    End Sub
End Module`,
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
          "zh-TW": `## 條件判斷：If / ElseIf / Else

VB 使用 \`If ... Then ... ElseIf ... Else ... End If\` 進行條件判斷：

\`\`\`vb
If score >= 90 Then
    Console.WriteLine("優秀")
ElseIf score >= 60 Then
    Console.WriteLine("及格")
Else
    Console.WriteLine("不及格")
End If
\`\`\`

### 語法重點

- 條件後必須加 \`Then\`
- 可有零個或多個 \`ElseIf\` 分支
- \`Else\` 分支為選填
- 以 \`End If\` 結尾

### 單行簡寫

簡單條件可寫成單行：

\`\`\`vb
If x > 0 Then Console.WriteLine("正數")
\`\`\``,
          en: `## Conditionals: If / ElseIf / Else

VB uses \`If ... Then ... ElseIf ... Else ... End If\` for conditional branching:

\`\`\`vb
If score >= 90 Then
    Console.WriteLine("Excellent")
ElseIf score >= 60 Then
    Console.WriteLine("Pass")
Else
    Console.WriteLine("Fail")
End If
\`\`\`

### Key Points

- \`Then\` is required after the condition
- Zero or more \`ElseIf\` branches are allowed
- The \`Else\` branch is optional
- Close with \`End If\`

### Single-line Shorthand

Simple conditions can be written on one line:

\`\`\`vb
If x > 0 Then Console.WriteLine("Positive")
\`\`\``,
        },
        defaultCode: `Module Program
    Sub Main()
        Dim score As Integer = 75

        If score >= 90 Then
            Console.WriteLine("Grade: A (優秀)")
        ElseIf score >= 75 Then
            Console.WriteLine("Grade: B (良好)")
        ElseIf score >= 60 Then
            Console.WriteLine("Grade: C (及格)")
        Else
            Console.WriteLine("Grade: F (不及格)")
        End If

        Dim x As Integer = -5
        If x > 0 Then
            Console.WriteLine("x 是正數")
        ElseIf x < 0 Then
            Console.WriteLine("x 是負數")
        Else
            Console.WriteLine("x 是零")
        End If
    End Sub
End Module`,
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## 迴圈

### For ... Next 迴圈

用於已知次數的重複執行：

\`\`\`vb
For i = 1 To 10
    Console.WriteLine(i)
Next
\`\`\`

可加上 \`Step\` 指定步進值：

\`\`\`vb
For i = 0 To 10 Step 2
    Console.Write(i & " ")
Next
\`\`\`

### While ... Wend 迴圈

條件成立時持續執行：

\`\`\`vb
Dim n As Integer = 1
While n <= 5
    Console.WriteLine(n)
    n = n + 1
Wend
\`\`\`

- 先判斷條件，條件為 \`False\` 時停止
- 記得在迴圈內更新條件變數，避免無限迴圈`,
          en: `## Loops

### For ... Next Loop

Used when the number of iterations is known:

\`\`\`vb
For i = 1 To 10
    Console.WriteLine(i)
Next
\`\`\`

Use \`Step\` to specify the increment:

\`\`\`vb
For i = 0 To 10 Step 2
    Console.Write(i & " ")
Next
\`\`\`

### While ... Wend Loop

Repeats while a condition is true:

\`\`\`vb
Dim n As Integer = 1
While n <= 5
    Console.WriteLine(n)
    n = n + 1
Wend
\`\`\`

- The condition is checked first; loop stops when it is \`False\`
- Always update the condition variable inside the loop to avoid infinite loops`,
        },
        defaultCode: `Module Program
    Sub Main()
        Console.WriteLine("For 迴圈 1 到 5：")
        Dim i As Integer
        For i = 1 To 5
            Console.Write(i & " ")
        Next
        Console.WriteLine("")

        Console.WriteLine("偶數（Step 2）：")
        For i = 2 To 10 Step 2
            Console.Write(i & " ")
        Next
        Console.WriteLine("")

        Console.WriteLine("While 迴圈倒數：")
        Dim n As Integer = 5
        While n > 0
            Console.Write(n & " ")
            n = n - 1
        Wend
        Console.WriteLine("")
        Console.WriteLine("Go!")
    End Sub
End Module`,
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式與程序", en: "Functions and Procedures" },
    lessons: [
      {
        id: "sub-procedure",
        title: { "zh-TW": "Sub 程序", en: "Sub Procedures" },
        content: {
          "zh-TW": `## Sub 程序

\`Sub\` 定義一段可重複呼叫的程式碼，**不回傳值**：

\`\`\`vb
Sub Greet(name As String)
    Console.WriteLine("Hello, " & name & "!")
End Sub
\`\`\`

呼叫方式：

\`\`\`vb
Greet("Alice")
Greet("Bob")
\`\`\`

### 多個參數

\`\`\`vb
Sub PrintSum(a As Integer, b As Integer)
    Console.WriteLine(a & " + " & b & " = " & (a + b))
End Sub
\`\`\`

### 優點

- 避免重複程式碼
- 讓程式結構更清晰
- 易於維護與測試`,
          en: `## Sub Procedures

A \`Sub\` defines a reusable block of code that **does not return a value**:

\`\`\`vb
Sub Greet(name As String)
    Console.WriteLine("Hello, " & name & "!")
End Sub
\`\`\`

Calling a Sub:

\`\`\`vb
Greet("Alice")
Greet("Bob")
\`\`\`

### Multiple Parameters

\`\`\`vb
Sub PrintSum(a As Integer, b As Integer)
    Console.WriteLine(a & " + " & b & " = " & (a + b))
End Sub
\`\`\`

### Benefits

- Avoids repeated code
- Makes program structure clearer
- Easier to maintain and test`,
        },
        defaultCode: `Module Program
    Sub Greet(name As String)
        Console.WriteLine("Hello, " & name & "!")
    End Sub

    Sub PrintSum(a As Integer, b As Integer)
        Console.WriteLine(a & " + " & b & " = " & (a + b))
    End Sub

    Sub Main()
        Greet("Alice")
        Greet("Bob")
        Greet("World")

        PrintSum(3, 4)
        PrintSum(10, 25)
    End Sub
End Module`,
      },
      {
        id: "functions",
        title: { "zh-TW": "Function 函式", en: "Functions" },
        content: {
          "zh-TW": `## Function 函式

\`Function\` 與 \`Sub\` 類似，但**會回傳一個值**，需在宣告時指定回傳型別：

\`\`\`vb
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function
\`\`\`

### 呼叫與使用回傳值

\`\`\`vb
Dim result As Integer = Add(3, 5)
Console.WriteLine("3 + 5 = " & result)
\`\`\`

### 語法重點

- \`As Type\` 在參數列後面指定回傳型別
- 使用 \`Return\` 回傳值並結束函式
- 回傳值可直接用於運算式

\`\`\`vb
Function IsEven(n As Integer) As Boolean
    Return (n Mod 2 = 0)
End Function
\`\`\``,
          en: `## Functions

A \`Function\` is like a \`Sub\` but **returns a value**; you specify the return type in the declaration:

\`\`\`vb
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function
\`\`\`

### Calling and Using the Return Value

\`\`\`vb
Dim result As Integer = Add(3, 5)
Console.WriteLine("3 + 5 = " & result)
\`\`\`

### Key Points

- \`As Type\` after the parameter list specifies the return type
- Use \`Return\` to return a value and exit the function
- The return value can be used directly in expressions

\`\`\`vb
Function IsEven(n As Integer) As Boolean
    Return (n Mod 2 = 0)
End Function
\`\`\``,
        },
        defaultCode: `Module Program
    Function Add(a As Integer, b As Integer) As Integer
        Return a + b
    End Function

    Function IsEven(n As Integer) As Boolean
        Return (n Mod 2 = 0)
    End Function

    Function Max(a As Integer, b As Integer) As Integer
        If a > b Then
            Return a
        Else
            Return b
        End If
    End Function

    Sub Main()
        Console.WriteLine("3 + 5 = " & Add(3, 5))
        Console.WriteLine("10 + 20 = " & Add(10, 20))

        Dim i As Integer
        For i = 1 To 6
            If IsEven(i) Then
                Console.WriteLine(i & " 是偶數")
            Else
                Console.WriteLine(i & " 是奇數")
            End If
        Next

        Console.WriteLine("Max(7, 12) = " & Max(7, 12))
    End Sub
End Module`,
      },
    ],
  },
];

export default chapters;
