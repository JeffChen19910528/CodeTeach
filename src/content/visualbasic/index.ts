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
  {
    id: "leetcode",
    title: { "zh-TW": "LeetCode 經典題", en: "LeetCode Classics" },
    lessons: [
      {
        id: "two-sum",
        title: { "zh-TW": "#1 兩數之和", en: "#1 Two Sum" },
        content: {
          "zh-TW": `## LeetCode #1 — Two Sum（兩數之和）

給定整數陣列與目標值，回傳兩個相加等於目標值的索引。

**VB.NET 核心技巧：Dictionary(Of Integer, Integer)**

\`\`\`vbnet
Dim seen As New Dictionary(Of Integer, Integer)()
seen.ContainsKey(complement)
seen(nums(i)) = i
\`\`\`

VB.NET 使用括號 \`()\` 存取陣列與字典，而非 C# 的方括號 \`[]\`。`,
          en: `## LeetCode #1 — Two Sum

Return indices of two numbers summing to target.

**VB.NET: Dictionary(Of Integer, Integer)**

\`\`\`vbnet
Dim seen As New Dictionary(Of Integer, Integer)()
seen.ContainsKey(complement)
seen(nums(i)) = i
\`\`\`

VB.NET uses parentheses \`()\` for array/dictionary access instead of C#'s \`[]\`.`,
        },
        defaultCode: `Imports System.Collections.Generic

Module Module1
    Function TwoSum(nums() As Integer, target As Integer) As Integer()
        Dim seen As New Dictionary(Of Integer, Integer)()
        For i As Integer = 0 To nums.Length - 1
            Dim complement As Integer = target - nums(i)
            If seen.ContainsKey(complement) Then
                Return New Integer() {seen(complement), i}
            End If
            seen(nums(i)) = i
        Next
        Return New Integer() {}
    End Function

    Sub Main()
        Dim r1 = TwoSum(New Integer() {2, 7, 11, 15}, 9)
        Console.WriteLine(String.Join(", ", r1))  ' 0, 1
        Dim r2 = TwoSum(New Integer() {3, 2, 4}, 6)
        Console.WriteLine(String.Join(", ", r2))  ' 1, 2
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "修改函式：找不到答案時回傳 New Integer() {-1, -1}，並測試 TwoSum([1,2,3], 10)。",
            en: "Modify the function to return New Integer() {-1, -1} when no answer exists. Test with TwoSum([1,2,3], 10).",
          },
          hint: {
            "zh-TW": "把最後的 Return New Integer() {} 改成 Return New Integer() {-1, -1}",
            en: "Change the final Return New Integer() {} to Return New Integer() {-1, -1}",
          },
          answer: `Imports System.Collections.Generic
Module Module1
    Function TwoSum(nums() As Integer, target As Integer) As Integer()
        Dim seen As New Dictionary(Of Integer, Integer)()
        For i As Integer = 0 To nums.Length - 1
            Dim complement As Integer = target - nums(i)
            If seen.ContainsKey(complement) Then
                Return New Integer() {seen(complement), i}
            End If
            seen(nums(i)) = i
        Next
        Return New Integer() {-1, -1}
    End Function
    Sub Main()
        Console.WriteLine(String.Join(", ", TwoSum(New Integer() {1,2,3}, 10)))  ' -1, -1
    End Sub
End Module`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

找出連續子陣列的最大總和。

**Kadane's Algorithm — VB.NET 版本：**

VB.NET 使用 \`Math.Max\` 函式，語法與 C# 相同：

\`\`\`vbnet
current = Math.Max(nums(i), current + nums(i))
best    = Math.Max(best, current)
\`\`\`

注意：VB.NET 陣列索引用 \`nums(i)\` 而非 \`nums[i]\`。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm in VB.NET:**

VB.NET uses \`Math.Max\` just like C#:

\`\`\`vbnet
current = Math.Max(nums(i), current + nums(i))
best    = Math.Max(best, current)
\`\`\`

Note: VB.NET array access uses \`nums(i)\` not \`nums[i]\`.`,
        },
        defaultCode: `Module Module1
    Function MaxSubArray(nums() As Integer) As Integer
        Dim current As Integer = nums(0)
        Dim best As Integer = nums(0)
        For i As Integer = 1 To nums.Length - 1
            current = Math.Max(nums(i), current + nums(i))
            best = Math.Max(best, current)
        Next
        Return best
    End Function

    Sub Main()
        Console.WriteLine(MaxSubArray(New Integer() {-2,1,-3,4,-1,2,1,-5,4})) ' 6
        Console.WriteLine(MaxSubArray(New Integer() {5,4,-1,7,8}))             ' 23
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "為 MaxSubArray 加上 IIf 三元運算子版本（僅供練習）：current = IIf(nums(i) > current + nums(i), nums(i), current + nums(i))，確認結果相同。",
            en: "Rewrite the max comparison using VB.NET's IIf: current = IIf(nums(i) > current + nums(i), nums(i), current + nums(i)). Confirm the results are the same.",
          },
          hint: {
            "zh-TW": "IIf(condition, trueValue, falseValue) 是 VB.NET 的三元運算，但 Math.Max 更清晰",
            en: "IIf(condition, trueValue, falseValue) is VB.NET's ternary operator; Math.Max is clearer",
          },
          answer: `Module Module1
    Function MaxSubArray(nums() As Integer) As Integer
        Dim current As Integer = nums(0)
        Dim best As Integer = nums(0)
        For i As Integer = 1 To nums.Length - 1
            current = IIf(nums(i) > current + nums(i), nums(i), current + nums(i))
            best = IIf(current > best, current, best)
        Next
        Return best
    End Function
    Sub Main()
        Console.WriteLine(MaxSubArray(New Integer() {-2,1,-3,4,-1,2,1,-5,4})) ' 6
    End Sub
End Module`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階，每次 1 或 2 階，共幾種方法？

**動態規劃（VB.NET）：**

\`\`\`vbnet
Dim temp As Integer = prev1
prev1 = prev1 + prev2
prev2 = temp
\`\`\`

VB.NET 的 \`For\` 迴圈語法：\`For i As Integer = 3 To n\`，\`Next i\` 結束。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**Dynamic programming in VB.NET:**

\`\`\`vbnet
Dim temp As Integer = prev1
prev1 = prev1 + prev2
prev2 = temp
\`\`\`

VB.NET For loop: \`For i As Integer = 3 To n\`, ends with \`Next i\`.`,
        },
        defaultCode: `Module Module1
    Function ClimbStairs(n As Integer) As Integer
        If n <= 2 Then Return n
        Dim prev2 As Integer = 1
        Dim prev1 As Integer = 2
        For i As Integer = 3 To n
            Dim temp As Integer = prev1
            prev1 = prev1 + prev2
            prev2 = temp
        Next i
        Return prev1
    End Function

    Sub Main()
        For i As Integer = 1 To 7
            Console.WriteLine("n=" & i & ": " & ClimbStairs(i) & " 種方法")
        Next i
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "用陣列 Dim dp(n) As Integer 實作完整 DP 版本，並印出每一階的 dp(i)（測試 n=8）。",
            en: "Implement a full DP version using Dim dp(n) As Integer and print dp(i) for each step (test n=8).",
          },
          hint: {
            "zh-TW": "dp(1)=1, dp(2)=2，之後 dp(i)=dp(i-1)+dp(i-2)",
            en: "dp(1)=1, dp(2)=2, then dp(i)=dp(i-1)+dp(i-2)",
          },
          answer: `Module Module1
    Function ClimbStairs(n As Integer) As Integer
        Dim dp(n) As Integer
        dp(1) = 1 : dp(2) = 2
        For i As Integer = 3 To n
            dp(i) = dp(i-1) + dp(i-2)
            Console.WriteLine("dp(" & i & ")=" & dp(i))
        Next i
        Return dp(n)
    End Function
    Sub Main()
        Console.WriteLine("n=8: " & ClimbStairs(8) & " 種方法") ' 34
    End Sub
End Module`,
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

**VB.NET 遞迴：**

\`\`\`vbnet
Sub Hanoi(n As Integer, from As Char, [to] As Char, aux As Char)
\`\`\`

注意：\`to\` 是 VB.NET 的保留字，參數名稱需用方括號 \`[to]\` 跳脫。

移動次數：**2ⁿ - 1**`,
          en: `## Tower of Hanoi

Three pegs A, B, C — move n discs from A to C. Rules: one at a time, never larger on smaller.

**VB.NET recursive:**

\`\`\`vbnet
Sub Hanoi(n As Integer, from As Char, [to] As Char, aux As Char)
\`\`\`

Note: \`to\` is a VB.NET keyword — bracket it as \`[to]\` in parameter names.

Moves: **2ⁿ - 1**`,
        },
        defaultCode: `Module Module1
    Sub Hanoi(n As Integer, from As Char, [to] As Char, aux As Char)
        If n = 1 Then
            Console.WriteLine("  移動第 1 個碟子：" & from & " → " & [to])
            Return
        End If
        Hanoi(n - 1, from, aux, [to])
        Console.WriteLine("  移動第 " & n & " 個碟子：" & from & " → " & [to])
        Hanoi(n - 1, aux, [to], from)
    End Sub

    Sub Main()
        For n As Integer = 1 To 4
            Console.WriteLine("n=" & n & "（需 " & (2^n - 1) & " 步）：")
            Hanoi(n, "A"c, "C"c, "B"c)
            Console.WriteLine()
        Next n
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "改為回傳步數的 Function（Integer），確認 n=5 時為 31。",
            en: "Rewrite as a Function returning Integer (step count). Verify n=5 = 31.",
          },
          hint: {
            "zh-TW": "Return Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
            en: "Return Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
          },
          answer: `Module Module1
    Function Hanoi(n As Integer, from As Char, [to] As Char, aux As Char) As Integer
        If n = 1 Then
            Console.WriteLine("  " & from & " → " & [to])
            Return 1
        End If
        Dim a As Integer = Hanoi(n-1, from, aux, [to])
        Console.WriteLine("  " & from & " → " & [to])
        Return a + 1 + Hanoi(n-1, aux, [to], from)
    End Function
    Sub Main()
        Console.WriteLine("共 " & Hanoi(5,"A"c,"C"c,"B"c) & " 步") ' 31
    End Sub
End Module`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

VB.NET 用 Integer(,) 二維陣列表示迷宮。

\`\`\`vbnet
Dim maze(,) As Integer = {{1,0,0,0},{1,1,0,1},...}
Dim sol(n-1, n-1) As Integer
\`\`\`

VB.NET 的二維陣列宣告語法和 C# 略有不同：用 \`(n-1, n-1)\` 指定上限（從 0 開始）。`,
          en: `## Rat in a Maze (Backtracking)

VB.NET uses Integer(,) for 2D arrays.

\`\`\`vbnet
Dim maze(,) As Integer = {{1,0,0,0},{1,1,0,1},...}
Dim sol(n-1, n-1) As Integer
\`\`\`

VB.NET 2D array declaration uses (n-1, n-1) to specify upper bounds (0-indexed).`,
        },
        defaultCode: `Module Module1
    Dim maze(,) As Integer = {{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}}
    Dim sol(3, 3) As Integer
    Dim n As Integer = 4

    Function IsSafe(x As Integer, y As Integer) As Boolean
        Return x >= 0 AndAlso x < n AndAlso y >= 0 AndAlso y < n AndAlso maze(x, y) = 1
    End Function

    Function Backtrack(x As Integer, y As Integer) As Boolean
        If x = n-1 AndAlso y = n-1 Then
            sol(x, y) = 1
            Return True
        End If
        If IsSafe(x, y) Then
            sol(x, y) = 1
            If Backtrack(x+1, y) OrElse Backtrack(x, y+1) Then Return True
            sol(x, y) = 0
        End If
        Return False
    End Function

    Sub Main()
        If Backtrack(0, 0) Then
            Console.WriteLine("找到路徑：")
            For i As Integer = 0 To n-1
                For j As Integer = 0 To n-1
                    Console.Write(If(sol(i,j)=1,"■ ","□ "))
                Next j
                Console.WriteLine()
            Next i
        Else
            Console.WriteLine("無解")
        End If
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "加入全域 step 計數器，每次進入 Backtrack 時遞增，最後印出嘗試次數。",
            en: "Add a global step counter, increment in Backtrack, and print total attempts at the end.",
          },
          hint: {
            "zh-TW": "Dim step As Integer = 0，在 Backtrack 第一行加 step += 1",
            en: "Dim step As Integer = 0; add step += 1 at the top of Backtrack",
          },
          answer: `Module Module1
    Dim maze(,) As Integer = {{1,0,0,0},{1,1,0,1},{0,1,0,0},{0,1,1,1}}
    Dim sol(3,3) As Integer
    Dim n As Integer = 4
    Dim step As Integer = 0
    Function IsSafe(x As Integer,y As Integer) As Boolean
        Return x>=0 AndAlso x<n AndAlso y>=0 AndAlso y<n AndAlso maze(x,y)=1
    End Function
    Function Backtrack(x As Integer,y As Integer) As Boolean
        step += 1
        If x=n-1 AndAlso y=n-1 Then sol(x,y)=1 : Return True
        If IsSafe(x,y) Then
            sol(x,y)=1
            If Backtrack(x+1,y) OrElse Backtrack(x,y+1) Then Return True
            sol(x,y)=0
        End If
        Return False
    End Function
    Sub Main()
        Backtrack(0,0)
        For i As Integer=0 To n-1 : For j As Integer=0 To n-1 : Console.Write(If(sol(i,j)=1,"■ ","□ ")) : Next j : Console.WriteLine() : Next i
        Console.WriteLine("共嘗試 " & step & " 次")
    End Sub
End Module`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，任兩皇后不互攻。

**VB.NET 回溯法：** \`board(row) = col\`

VB.NET 使用 \`Math.Abs\` 做對角線判斷，\`AndAlso\` / \`OrElse\` 做短路邏輯運算。

8 皇后共 **92** 種解。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**VB.NET backtracking:** \`board(row) = col\`

VB.NET uses \`Math.Abs\` for diagonal check; \`AndAlso\` / \`OrElse\` for short-circuit logic.

**92** solutions for N=8.`,
        },
        defaultCode: `Imports System.Collections.Generic

Module Module1
    Dim n As Integer = 8
    Dim board() As Integer
    Dim solutions As New List(Of Integer())

    Function IsSafe(row As Integer, col As Integer) As Boolean
        For r As Integer = 0 To row - 1
            If board(r) = col OrElse Math.Abs(board(r)-col) = Math.Abs(r-row) Then
                Return False
            End If
        Next r
        Return True
    End Function

    Sub Backtrack(row As Integer)
        If row = n Then
            solutions.Add(board.Clone())
            Return
        End If
        For col As Integer = 0 To n - 1
            If IsSafe(row, col) Then
                board(row) = col
                Backtrack(row + 1)
                board(row) = -1
            End If
        Next col
    End Sub

    Sub Main()
        ReDim board(n - 1)
        For i As Integer = 0 To n-1 : board(i) = -1 : Next
        Backtrack(0)
        Console.WriteLine("8 皇后共有 " & solutions.Count & " 種解法")
        Console.WriteLine("第一種解法：")
        For Each col As Integer In solutions(0)
            Console.WriteLine(New String("·"c, col) & "♛" & New String("·"c, n-1-col))
        Next
    End Sub
End Module`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6（4 種解法），印出全部解法。",
            en: "Solve N=6 (4 solutions) and print all boards.",
          },
          hint: {
            "zh-TW": "把 Dim n As Integer = 8 改成 n = 6，迴圈印出所有解",
            en: "Change Dim n As Integer = 8 to n = 6; loop to print all solutions",
          },
          answer: `Imports System.Collections.Generic
Module Module1
    Dim n As Integer = 6
    Dim board() As Integer
    Dim solutions As New List(Of Integer())
    Function IsSafe(row As Integer,col As Integer) As Boolean
        For r As Integer=0 To row-1
            If board(r)=col OrElse Math.Abs(board(r)-col)=Math.Abs(r-row) Then Return False
        Next r : Return True
    End Function
    Sub Backtrack(row As Integer)
        If row=n Then solutions.Add(board.Clone()) : Return
        For col As Integer=0 To n-1
            If IsSafe(row,col) Then board(row)=col : Backtrack(row+1) : board(row)=-1
        Next col
    End Sub
    Sub Main()
        ReDim board(n-1) : For i As Integer=0 To n-1 : board(i)=-1 : Next
        Backtrack(0)
        Console.WriteLine("共 " & solutions.Count & " 種解法")
        For i As Integer=0 To solutions.Count-1
            Console.WriteLine("解法 " & (i+1) & "：")
            For Each col As Integer In solutions(i)
                Console.WriteLine(New String("·"c,col)&"♛"&New String("·"c,n-1-col))
            Next
        Next i
    End Sub
End Module`,
        },
      },
    ],
  },
];

export default chapters;
