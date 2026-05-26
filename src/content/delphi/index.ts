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
          "zh-TW": `## Delphi / Object Pascal 簡介

Delphi 以 Object Pascal 為基礎，以快速開發 Windows 桌面應用聞名，現代版本也支援 macOS、iOS、Android。

### 特色
- 強型別語言
- 視覺化 IDE 設計（Delphi IDE）
- 編譯後執行速度快
- 開源替代品：Free Pascal（fpc）

### 程式結構

每個 Pascal 程式都有一個 \`program\` 宣告，以及 \`begin ... end.\` 主區塊：

\`\`\`pascal
program Hello;

begin
  WriteLn('Hello, World!');
end.
\`\`\`

- \`program\` 後接程式名稱
- \`begin ... end.\`：主程式區塊（注意結尾有句點 \`.\`）
- \`WriteLn\`：輸出一行文字（自動換行）
- \`Write\`：輸出文字但不換行`,
          en: `## Introduction to Delphi / Object Pascal

Delphi is based on Object Pascal, famous for rapid Windows desktop app development. Modern versions support macOS, iOS, and Android.

### Features
- Strongly typed language
- Visual IDE design (Delphi IDE)
- Fast execution after compilation
- Open-source alternative: Free Pascal (fpc)

### Program Structure

Every Pascal program has a \`program\` declaration and a \`begin ... end.\` main block:

\`\`\`pascal
program Hello;

begin
  WriteLn('Hello, World!');
end.
\`\`\`

- \`program\` followed by the program name
- \`begin ... end.\`: main program block (note the trailing period \`.\`)
- \`WriteLn\`: outputs a line of text (with newline)
- \`Write\`: outputs text without a newline`,
        },
        defaultCode: `program Hello;

begin
  WriteLn('Hello, World!');
  WriteLn('Welcome to Pascal!');
end.`,
      },
      {
        id: "variables",
        title: { "zh-TW": "變數與型別", en: "Variables and Types" },
        content: {
          "zh-TW": `## 變數與資料型別

Pascal 使用 \`var\` 區段宣告變數，放在 \`begin\` 之前：

\`\`\`pascal
var
  age: Integer;
  name: String;
  pi: Real;
  isStudent: Boolean;
\`\`\`

### 常見基本型別

| 型別 | 說明 | 範例 |
|------|------|------|
| \`Integer\` | 整數 | \`42\` |
| \`Real\` | 浮點數 | \`3.14\` |
| \`String\` | 字串 | \`'Hello'\` |
| \`Boolean\` | 布林值 | \`True\` / \`False\` |
| \`Char\` | 單一字元 | \`'A'\` |

### 賦值

使用 \`:=\` 賦值（注意不是 \`=\`）：

\`\`\`pascal
age := 18;
name := 'Alice';
pi := 3.14159;
isStudent := True;
\`\`\`

### 輸出格式

\`\`\`pascal
WriteLn('Name: ', name);
WriteLn('Pi: ', pi:0:2);  { 0 位整數寬度，2 位小數 }
\`\`\``,
          en: `## Variables and Data Types

Pascal uses a \`var\` section to declare variables, placed before \`begin\`:

\`\`\`pascal
var
  age: Integer;
  name: String;
  pi: Real;
  isStudent: Boolean;
\`\`\`

### Common Basic Types

| Type | Description | Example |
|------|-------------|---------|
| \`Integer\` | Integer number | \`42\` |
| \`Real\` | Floating point | \`3.14\` |
| \`String\` | Text string | \`'Hello'\` |
| \`Boolean\` | Boolean value | \`True\` / \`False\` |
| \`Char\` | Single character | \`'A'\` |

### Assignment

Use \`:=\` for assignment (not \`=\`):

\`\`\`pascal
age := 18;
name := 'Alice';
pi := 3.14159;
isStudent := True;
\`\`\`

### Output Formatting

\`\`\`pascal
WriteLn('Name: ', name);
WriteLn('Pi: ', pi:0:2);  { 0 integer width, 2 decimal places }
\`\`\``,
        },
        defaultCode: `program Variables;

var
  age: Integer;
  name: String;
  pi: Real;
  isStudent: Boolean;

begin
  age := 18;
  name := 'Alice';
  pi := 3.14159;
  isStudent := True;

  WriteLn('Name: ', name);
  WriteLn('Age: ', age);
  WriteLn('Pi: ', pi:0:4);
  WriteLn('Is student: ', isStudent);
end.`,
      },
      {
        id: "operators",
        title: { "zh-TW": "運算子", en: "Operators" },
        content: {
          "zh-TW": `## 運算子

### 算術運算子

| 運算子 | 說明 | 適用型別 |
|--------|------|---------|
| \`+\` | 加法 | Integer, Real |
| \`-\` | 減法 | Integer, Real |
| \`*\` | 乘法 | Integer, Real |
| \`/\` | 浮點除法 | Real |
| \`div\` | 整數除法 | Integer |
| \`mod\` | 取餘數 | Integer |

> **注意**：整數間使用 \`/\` 會得到 Real 結果；若要整數除法請用 \`div\`。

\`\`\`pascal
WriteLn(7 div 2);   { 輸出 3 }
WriteLn(7 mod 2);   { 輸出 1 }
WriteLn(7 / 2);     { 輸出 3.5 }
\`\`\`

### 比較運算子

| 運算子 | 說明 |
|--------|------|
| \`=\` | 等於 |
| \`<>\` | 不等於 |
| \`<\` | 小於 |
| \`>\` | 大於 |
| \`<=\` | 小於等於 |
| \`>=\` | 大於等於 |

### 邏輯運算子

| 運算子 | 說明 |
|--------|------|
| \`and\` | 且 |
| \`or\` | 或 |
| \`not\` | 非 |`,
          en: `## Operators

### Arithmetic Operators

| Operator | Description | Applicable Types |
|----------|-------------|-----------------|
| \`+\` | Addition | Integer, Real |
| \`-\` | Subtraction | Integer, Real |
| \`*\` | Multiplication | Integer, Real |
| \`/\` | Floating-point division | Real |
| \`div\` | Integer division | Integer |
| \`mod\` | Remainder | Integer |

> **Note**: Using \`/\` between integers yields a Real result; use \`div\` for integer division.

\`\`\`pascal
WriteLn(7 div 2);   { outputs 3 }
WriteLn(7 mod 2);   { outputs 1 }
WriteLn(7 / 2);     { outputs 3.5 }
\`\`\`

### Comparison Operators

| Operator | Description |
|----------|-------------|
| \`=\` | Equal to |
| \`<>\` | Not equal to |
| \`<\` | Less than |
| \`>\` | Greater than |
| \`<=\` | Less than or equal to |
| \`>=\` | Greater than or equal to |

### Logical Operators

| Operator | Description |
|----------|-------------|
| \`and\` | Both true |
| \`or\` | At least one true |
| \`not\` | Negation |`,
        },
        defaultCode: `program Operators;

var
  a, b: Integer;
  x, y: Boolean;

begin
  a := 10;
  b := 3;

  WriteLn('a + b = ', a + b);
  WriteLn('a - b = ', a - b);
  WriteLn('a * b = ', a * b);
  WriteLn('a / b = ', a / b:0:2);
  WriteLn('a div b = ', a div b);
  WriteLn('a mod b = ', a mod b);

  WriteLn('a > b: ', a > b);
  WriteLn('a = b: ', a = b);
  WriteLn('a <> b: ', a <> b);

  x := True;
  y := False;
  WriteLn('x and y: ', x and y);
  WriteLn('x or y: ', x or y);
  WriteLn('not x: ', not x);
end.`,
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
          "zh-TW": `## 條件判斷：if / then / else

Pascal 使用 \`if ... then ... else\` 進行條件判斷：

\`\`\`pascal
if score >= 60 then
  WriteLn('及格')
else
  WriteLn('不及格');
\`\`\`

### 多行區塊：begin / end

若分支包含多行程式碼，使用 \`begin ... end\` 包裹：

\`\`\`pascal
if score >= 90 then
begin
  WriteLn('優秀');
  WriteLn('繼續保持！');
end
else if score >= 60 then
begin
  WriteLn('及格');
end
else
begin
  WriteLn('不及格');
  WriteLn('需要加油！');
end;
\`\`\`

### 注意事項

- \`else\` 前的 \`end\` 後面**不加分號**
- 最後一個 \`end\` 後面加分號（\`;\`）
- 巢狀條件用 \`else if\` 串接`,
          en: `## Conditionals: if / then / else

Pascal uses \`if ... then ... else\` for conditional branching:

\`\`\`pascal
if score >= 60 then
  WriteLn('Pass')
else
  WriteLn('Fail');
\`\`\`

### Multi-line Blocks: begin / end

Use \`begin ... end\` to wrap multiple statements in a branch:

\`\`\`pascal
if score >= 90 then
begin
  WriteLn('Excellent');
  WriteLn('Keep it up!');
end
else if score >= 60 then
begin
  WriteLn('Pass');
end
else
begin
  WriteLn('Fail');
  WriteLn('Keep trying!');
end;
\`\`\`

### Important Notes

- The \`end\` before \`else\` has **no semicolon**
- The final \`end\` gets a semicolon (\`;\`)
- Chain conditions with \`else if\``,
        },
        defaultCode: `program Conditionals;

var
  score: Integer;

begin
  score := 75;

  if score >= 90 then
    WriteLn('Grade: A (優秀)')
  else if score >= 75 then
    WriteLn('Grade: B (良好)')
  else if score >= 60 then
    WriteLn('Grade: C (及格)')
  else
    WriteLn('Grade: F (不及格)');

  if score >= 60 then
  begin
    WriteLn('恭喜通過！');
    WriteLn('得分：', score);
  end
  else
  begin
    WriteLn('未通過。');
    WriteLn('得分：', score);
  end;
end.`,
      },
      {
        id: "loops",
        title: { "zh-TW": "迴圈", en: "Loops" },
        content: {
          "zh-TW": `## 迴圈

### for 迴圈

已知次數時使用 \`for\`：

\`\`\`pascal
for i := 1 to 10 do
  WriteLn(i);
\`\`\`

多行迴圈體用 \`begin ... end\`：

\`\`\`pascal
for i := 1 to 5 do
begin
  Write(i, ' ');
end;
\`\`\`

遞減迴圈使用 \`downto\`：

\`\`\`pascal
for i := 5 downto 1 do
  Write(i, ' ');
\`\`\`

### while 迴圈

條件成立時持續執行：

\`\`\`pascal
while n <= 100 do
begin
  sum := sum + n;
  n := n + 1;
end;
\`\`\`

- 先判斷條件，條件為 \`False\` 時停止
- 記得在迴圈內更新條件變數`,
          en: `## Loops

### for Loop

Use \`for\` when the number of iterations is known:

\`\`\`pascal
for i := 1 to 10 do
  WriteLn(i);
\`\`\`

Use \`begin ... end\` for multi-statement loop bodies:

\`\`\`pascal
for i := 1 to 5 do
begin
  Write(i, ' ');
end;
\`\`\`

Use \`downto\` for a counting-down loop:

\`\`\`pascal
for i := 5 downto 1 do
  Write(i, ' ');
\`\`\`

### while Loop

Repeats while a condition is true:

\`\`\`pascal
while n <= 100 do
begin
  sum := sum + n;
  n := n + 1;
end;
\`\`\`

- The condition is checked first; stops when \`False\`
- Always update the condition variable inside the loop`,
        },
        defaultCode: `program Loops;

var
  i, n, sum: Integer;

begin
  WriteLn('For 迴圈 1 到 5：');
  for i := 1 to 5 do
    Write(i, ' ');
  WriteLn;

  WriteLn('偶數（步進 2 用 for）：');
  for i := 1 to 5 do
    Write(i * 2, ' ');
  WriteLn;

  WriteLn('Downto 倒數：');
  for i := 5 downto 1 do
    Write(i, ' ');
  WriteLn;

  WriteLn('While 迴圈，計算 1+2+...+10：');
  n := 1;
  sum := 0;
  while n <= 10 do
  begin
    sum := sum + n;
    n := n + 1;
  end;
  WriteLn('Sum = ', sum);
end.`,
      },
    ],
  },
  {
    id: "functions",
    title: { "zh-TW": "函式與程序", en: "Functions and Procedures" },
    lessons: [
      {
        id: "procedures",
        title: { "zh-TW": "Procedure 程序", en: "Procedures" },
        content: {
          "zh-TW": `## Procedure 程序

\`procedure\` 定義可重複呼叫的程式碼區塊，**不回傳值**：

\`\`\`pascal
procedure Greet(name: String);
begin
  WriteLn('Hello, ', name, '!');
end;
\`\`\`

### 呼叫程序

\`\`\`pascal
Greet('Alice');
Greet('Bob');
\`\`\`

### 多個參數

\`\`\`pascal
procedure PrintSum(a, b: Integer);
begin
  WriteLn(a, ' + ', b, ' = ', a + b);
end;
\`\`\`

### 宣告位置

程序（和函式）必須宣告在主程式 \`begin\` **之前**：

\`\`\`pascal
program MyProgram;

procedure Greet(name: String);
begin
  WriteLn('Hello, ', name, '!');
end;

begin
  Greet('World');
end.
\`\`\``,
          en: `## Procedures

A \`procedure\` defines a reusable block of code that **does not return a value**:

\`\`\`pascal
procedure Greet(name: String);
begin
  WriteLn('Hello, ', name, '!');
end;
\`\`\`

### Calling a Procedure

\`\`\`pascal
Greet('Alice');
Greet('Bob');
\`\`\`

### Multiple Parameters

\`\`\`pascal
procedure PrintSum(a, b: Integer);
begin
  WriteLn(a, ' + ', b, ' = ', a + b);
end;
\`\`\`

### Declaration Order

Procedures (and functions) must be declared **before** the main \`begin\`:

\`\`\`pascal
program MyProgram;

procedure Greet(name: String);
begin
  WriteLn('Hello, ', name, '!');
end;

begin
  Greet('World');
end.
\`\`\``,
        },
        defaultCode: `program Procedures;

procedure Greet(name: String);
begin
  WriteLn('Hello, ', name, '!');
end;

procedure PrintSum(a, b: Integer);
begin
  WriteLn(a, ' + ', b, ' = ', a + b);
end;

procedure PrintLine;
begin
  WriteLn('--------------------');
end;

begin
  Greet('Alice');
  Greet('Bob');
  Greet('World');

  PrintLine;

  PrintSum(3, 4);
  PrintSum(10, 25);
end.`,
      },
      {
        id: "functions",
        title: { "zh-TW": "Function 函式", en: "Functions" },
        content: {
          "zh-TW": `## Function 函式

\`function\` 與 \`procedure\` 類似，但**會回傳一個值**，需指定回傳型別：

\`\`\`pascal
function Add(a, b: Integer): Integer;
begin
  Result := a + b;
end;
\`\`\`

### 使用 Result

在 Free Pascal / Delphi 中，用 \`Result\` 變數存放回傳值（也可用函式名稱賦值）：

\`\`\`pascal
function Max(a, b: Integer): Integer;
begin
  if a > b then
    Result := a
  else
    Result := b;
end;
\`\`\`

### 呼叫函式

\`\`\`pascal
var
  total: Integer;
begin
  total := Add(3, 5);
  WriteLn('3 + 5 = ', total);
  WriteLn('Max(7, 12) = ', Max(7, 12));
end.
\`\`\`

### 回傳 Boolean

\`\`\`pascal
function IsEven(n: Integer): Boolean;
begin
  Result := (n mod 2 = 0);
end;
\`\`\``,
          en: `## Functions

A \`function\` is like a \`procedure\` but **returns a value**; you specify the return type after the parameter list:

\`\`\`pascal
function Add(a, b: Integer): Integer;
begin
  Result := a + b;
end;
\`\`\`

### Using Result

In Free Pascal / Delphi, use the \`Result\` variable to hold the return value (you can also assign to the function name):

\`\`\`pascal
function Max(a, b: Integer): Integer;
begin
  if a > b then
    Result := a
  else
    Result := b;
end;
\`\`\`

### Calling a Function

\`\`\`pascal
var
  total: Integer;
begin
  total := Add(3, 5);
  WriteLn('3 + 5 = ', total);
  WriteLn('Max(7, 12) = ', Max(7, 12));
end.
\`\`\`

### Returning Boolean

\`\`\`pascal
function IsEven(n: Integer): Boolean;
begin
  Result := (n mod 2 = 0);
end;
\`\`\``,
        },
        defaultCode: `program Functions;

function Add(a, b: Integer): Integer;
begin
  Result := a + b;
end;

function Max(a, b: Integer): Integer;
begin
  if a > b then
    Result := a
  else
    Result := b;
end;

function IsEven(n: Integer): Boolean;
begin
  Result := (n mod 2 = 0);
end;

var
  i: Integer;

begin
  WriteLn('3 + 5 = ', Add(3, 5));
  WriteLn('10 + 20 = ', Add(10, 20));

  WriteLn('Max(7, 12) = ', Max(7, 12));
  WriteLn('Max(100, 42) = ', Max(100, 42));

  WriteLn('偶數/奇數判斷：');
  for i := 1 to 6 do
  begin
    if IsEven(i) then
      WriteLn(i, ' 是偶數')
    else
      WriteLn(i, ' 是奇數');
  end;
end.`,
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

**Delphi 暴力解法（O(n²)）：**

Delphi 標準函式庫沒有 Hash Map，此處使用雙層 \`for\` 迴圈。

Delphi 陣列：
- 宣告：\`var nums: array[0..3] of Integer\`
- 索引：從 \`Low(nums)\` 到 \`High(nums)\``,
          en: `## LeetCode #1 — Two Sum

Return indices of two numbers summing to target.

**Delphi brute force (O(n²)):**

Delphi's standard library lacks a hash map, so we use nested \`for\` loops.

Delphi arrays:
- Declare: \`var nums: array[0..3] of Integer\`
- Index: from \`Low(nums)\` to \`High(nums)\``,
        },
        defaultCode: `program TwoSum;

procedure FindTwoSum(nums: array of Integer; target: Integer);
var
  i, j: Integer;
begin
  for i := Low(nums) to High(nums) do
    for j := i + 1 to High(nums) do
      if nums[i] + nums[j] = target then
      begin
        WriteLn('[', i, ', ', j, ']');
        Exit;
      end;
  WriteLn('No solution');
end;

var
  a: array[0..3] of Integer = (2, 7, 11, 15);
  b: array[0..2] of Integer = (3, 2, 4);
begin
  FindTwoSum(a, 9);   { [0, 1] }
  FindTwoSum(b, 6);   { [1, 2] }
end.`,
        exercise: {
          question: {
            "zh-TW": "修改 FindTwoSum，使用 var 參數（var idx1, idx2: Integer）輸出索引，而不是直接在函式內 WriteLn。",
            en: "Modify FindTwoSum to output indices via var parameters (var idx1, idx2: Integer) instead of printing inside the procedure.",
          },
          hint: {
            "zh-TW": "加 var idx1, idx2: Integer 參數，找到時設定 idx1:=i; idx2:=j; Exit",
            en: "Add var idx1, idx2: Integer parameters; on finding, set idx1:=i; idx2:=j; Exit",
          },
          answer: `program TwoSum;

procedure FindTwoSum(nums: array of Integer; target: Integer; var idx1, idx2: Integer);
var
  i, j: Integer;
begin
  idx1 := -1; idx2 := -1;
  for i := Low(nums) to High(nums) do
    for j := i + 1 to High(nums) do
      if nums[i] + nums[j] = target then
      begin
        idx1 := i; idx2 := j;
        Exit;
      end;
end;

var
  a: array[0..3] of Integer = (2, 7, 11, 15);
  i1, i2: Integer;
begin
  FindTwoSum(a, 9, i1, i2);
  WriteLn('[', i1, ', ', i2, ']');  { [0, 1] }
end.`,
        },
      },
      {
        id: "max-subarray",
        title: { "zh-TW": "#53 最大子陣列", en: "#53 Maximum Subarray" },
        content: {
          "zh-TW": `## LeetCode #53 — Maximum Subarray（最大子陣列）

找出連續子陣列的最大總和。

**Kadane's Algorithm — Delphi 版本：**

Delphi 使用三元判斷式 \`if...then...else\` 或自訂 \`Max\` 函式：

\`\`\`pascal
function Max(a, b: Integer): Integer;
begin
  if a > b then Result := a else Result := b;
end;
\`\`\`

\`Result\` 是 Delphi 函式的回傳值關鍵字。`,
          en: `## LeetCode #53 — Maximum Subarray

Find the contiguous subarray with the largest sum.

**Kadane's Algorithm in Delphi:**

Delphi uses if..then..else or a custom Max function:

\`\`\`pascal
function Max(a, b: Integer): Integer;
begin
  if a > b then Result := a else Result := b;
end;
\`\`\`

\`Result\` is Delphi's keyword for the return value.`,
        },
        defaultCode: `program MaxSubarray;

function MaxInt(a, b: Integer): Integer;
begin
  if a > b then Result := a else Result := b;
end;

function MaxSubArray(nums: array of Integer): Integer;
var
  i, current, best: Integer;
begin
  current := nums[0];
  best := nums[0];
  for i := 1 to High(nums) do
  begin
    current := MaxInt(nums[i], current + nums[i]);
    best := MaxInt(best, current);
  end;
  Result := best;
end;

var
  a: array[0..8] of Integer = (-2,1,-3,4,-1,2,1,-5,4);
  b: array[0..4] of Integer = (5,4,-1,7,8);
begin
  WriteLn(MaxSubArray(a));  { 6 }
  WriteLn(MaxSubArray(b));  { 23 }
end.`,
        exercise: {
          question: {
            "zh-TW": "修改 MaxSubArray 同時透過 var startIdx: Integer 參數回傳子陣列起始索引。",
            en: "Modify MaxSubArray to also return the start index of the max subarray via a var startIdx: Integer parameter.",
          },
          hint: {
            "zh-TW": "加 var startIdx 參數，current 重置時 tempStart:=i，best 更新時 startIdx:=tempStart",
            en: "Add var startIdx; set tempStart:=i when current resets; set startIdx:=tempStart when best updates",
          },
          answer: `program MaxSubarray;
function MaxInt(a, b: Integer): Integer;
begin if a > b then Result := a else Result := b; end;

function MaxSubArray(nums: array of Integer; var startIdx: Integer): Integer;
var
  i, current, best, tempStart: Integer;
begin
  current := nums[0]; best := nums[0];
  startIdx := 0; tempStart := 0;
  for i := 1 to High(nums) do
  begin
    if nums[i] > current + nums[i] then begin
      current := nums[i]; tempStart := i;
    end else
      current := current + nums[i];
    if current > best then begin
      best := current; startIdx := tempStart;
    end;
  end;
  Result := best;
end;

var
  a: array[0..8] of Integer = (-2,1,-3,4,-1,2,1,-5,4);
  s: Integer;
begin
  WriteLn('總和=', MaxSubArray(a, s), ' 起始=', s);  { 6, 3 }
end.`,
        },
      },
      {
        id: "climbing-stairs",
        title: { "zh-TW": "#70 爬樓梯", en: "#70 Climbing Stairs" },
        content: {
          "zh-TW": `## LeetCode #70 — Climbing Stairs（爬樓梯）

爬 \`n\` 階，每次 1 或 2 階，共幾種方法？

**動態規劃（Delphi）：**

\`\`\`pascal
temp := prev1;
prev1 := prev1 + prev2;
prev2 := temp;
\`\`\`

Delphi 的 \`for\` 迴圈語法：\`for i := 3 to n do\`，無需 \`Next\` 或 \`}\`。`,
          en: `## LeetCode #70 — Climbing Stairs

Climbing \`n\` steps, 1 or 2 at a time. How many ways?

**Dynamic programming in Delphi:**

\`\`\`pascal
temp := prev1;
prev1 := prev1 + prev2;
prev2 := temp;
\`\`\`

Delphi for loop: \`for i := 3 to n do\`, no Next or } needed.`,
        },
        defaultCode: `program ClimbingStairs;

function ClimbStairs(n: Integer): Integer;
var
  i, prev2, prev1, temp: Integer;
begin
  if n <= 2 then
  begin
    Result := n;
    Exit;
  end;
  prev2 := 1;
  prev1 := 2;
  for i := 3 to n do
  begin
    temp := prev1;
    prev1 := prev1 + prev2;
    prev2 := temp;
  end;
  Result := prev1;
end;

var
  i: Integer;
begin
  for i := 1 to 7 do
    WriteLn('n=', i, ': ', ClimbStairs(i), ' 種方法');
end.`,
        exercise: {
          question: {
            "zh-TW": "用陣列 dp: array[1..20] of Integer 實作完整 DP 版本，並印出 dp[3] 到 dp[8] 的值。",
            en: "Implement a full DP version using dp: array[1..20] of Integer and print dp[3] to dp[8].",
          },
          hint: {
            "zh-TW": "dp[1]:=1; dp[2]:=2; for i:=3 to n do dp[i]:=dp[i-1]+dp[i-2]",
            en: "dp[1]:=1; dp[2]:=2; for i:=3 to n do dp[i]:=dp[i-1]+dp[i-2]",
          },
          answer: `program ClimbingStairs;
function ClimbStairs(n: Integer): Integer;
var
  dp: array[1..20] of Integer;
  i: Integer;
begin
  dp[1] := 1; dp[2] := 2;
  for i := 3 to n do
  begin
    dp[i] := dp[i-1] + dp[i-2];
    WriteLn('dp[', i, ']=', dp[i]);
  end;
  Result := dp[n];
end;
begin
  WriteLn('n=8: ', ClimbStairs(8), ' 種方法');  { 34 }
end.`,
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

**Delphi 遞迴：**

\`\`\`pascal
procedure Hanoi(n: Integer; from, dst, aux: Char);
\`\`\`

Delphi 用 \`Char\` 傳遞柱子名稱，\`WriteLn\` 直接串接多個參數輸出。

移動次數：**2ⁿ - 1**`,
          en: `## Tower of Hanoi

Three pegs A, B, C — move n discs from A to C. Rules: one at a time, never larger on smaller.

**Delphi recursive:**

\`\`\`pascal
procedure Hanoi(n: Integer; from, dst, aux: Char);
\`\`\`

Delphi uses Char for peg names; WriteLn concatenates multiple args.

Moves: **2ⁿ - 1**`,
        },
        defaultCode: `program TowerOfHanoi;

procedure Hanoi(n: Integer; from, dst, aux: Char);
begin
  if n = 1 then
  begin
    WriteLn('  移動第 1 個碟子：', from, ' → ', dst);
    Exit;
  end;
  Hanoi(n - 1, from, aux, dst);
  WriteLn('  移動第 ', n, ' 個碟子：', from, ' → ', dst);
  Hanoi(n - 1, aux, dst, from);
end;

var
  n: Integer;
begin
  for n := 1 to 4 do
  begin
    WriteLn('n=', n, '（需 ', Round(Power(2, n)) - 1, ' 步）：');
    Hanoi(n, 'A', 'C', 'B');
    WriteLn;
  end;
end.`,
        exercise: {
          question: {
            "zh-TW": "改為回傳步數的 Function（Integer），確認 n=5 時為 31。",
            en: "Rewrite as a Function returning Integer (step count). Verify n=5 = 31.",
          },
          hint: {
            "zh-TW": "Result := Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
            en: "Result := Hanoi(n-1,...) + 1 + Hanoi(n-1,...)",
          },
          answer: `program TowerOfHanoi;
function Hanoi(n: Integer; from, dst, aux: Char): Integer;
begin
  if n = 1 then begin
    WriteLn('  ', from, ' → ', dst);
    Result := 1;
    Exit;
  end;
  Result := Hanoi(n-1, from, aux, dst);
  WriteLn('  ', from, ' → ', dst);
  Result := Result + 1 + Hanoi(n-1, aux, dst, from);
end;
begin
  WriteLn('共 ', Hanoi(5,'A','C','B'), ' 步');  { 31 }
end.`,
        },
      },
      {
        id: "rat-in-maze",
        title: { "zh-TW": "老鼠走迷宮", en: "Rat in a Maze" },
        content: {
          "zh-TW": `## 老鼠走迷宮（Backtracking）

Delphi 使用二維陣列類型宣告：

\`\`\`pascal
type TGrid = array[0..3, 0..3] of Integer;
var maze, sol: TGrid;
\`\`\`

Delphi 的布林邏輯：\`and\`、\`or\`，函式用 \`Result\` 回傳值。`,
          en: `## Rat in a Maze (Backtracking)

Delphi uses typed 2D array declarations:

\`\`\`pascal
type TGrid = array[0..3, 0..3] of Integer;
var maze, sol: TGrid;
\`\`\`

Boolean logic: \`and\`, \`or\`; functions use \`Result\` for return value.`,
        },
        defaultCode: `program RatInMaze;

const N = 4;
type TGrid = array[0..N-1, 0..N-1] of Integer;

var
  maze: TGrid = ((1,0,0,0),(1,1,0,1),(0,1,0,0),(0,1,1,1));
  sol: TGrid;

function IsSafe(x, y: Integer): Boolean;
begin
  Result := (x >= 0) and (x < N) and (y >= 0) and (y < N) and (maze[x,y] = 1);
end;

function Backtrack(x, y: Integer): Boolean;
begin
  if (x = N-1) and (y = N-1) then
  begin
    sol[x,y] := 1;
    Result := True;
    Exit;
  end;
  Result := False;
  if IsSafe(x, y) then
  begin
    sol[x,y] := 1;
    if Backtrack(x+1, y) or Backtrack(x, y+1) then
    begin
      Result := True;
      Exit;
    end;
    sol[x,y] := 0;
  end;
end;

var i, j: Integer;
begin
  if Backtrack(0, 0) then
  begin
    WriteLn('找到路徑：');
    for i := 0 to N-1 do
    begin
      for j := 0 to N-1 do
        if sol[i,j] = 1 then Write('■ ') else Write('□ ');
      WriteLn;
    end;
  end else WriteLn('無解');
end.`,
        exercise: {
          question: {
            "zh-TW": "加入全域 step 計數器（var step: Integer = 0），每次進入 Backtrack 時遞增，最後印出嘗試次數。",
            en: "Add a global step counter, increment in Backtrack, and print total attempts.",
          },
          hint: {
            "zh-TW": "在 Backtrack 第一行加 Inc(step)，在 main 最後 WriteLn('共嘗試 ', step, ' 次')",
            en: "Add Inc(step) at the top of Backtrack; WriteLn('Attempts: ', step) in the main block",
          },
          answer: `program RatInMaze;
const N=4;
type TGrid=array[0..N-1,0..N-1] of Integer;
var maze:TGrid=((1,0,0,0),(1,1,0,1),(0,1,0,0),(0,1,1,1));sol:TGrid;step:Integer=0;
function IsSafe(x,y:Integer):Boolean;begin Result:=(x>=0)and(x<N)and(y>=0)and(y<N)and(maze[x,y]=1);end;
function Backtrack(x,y:Integer):Boolean;begin
  Inc(step);Result:=False;
  if(x=N-1)and(y=N-1)then begin sol[x,y]:=1;Result:=True;Exit;end;
  if IsSafe(x,y)then begin sol[x,y]:=1;if Backtrack(x+1,y)or Backtrack(x,y+1)then begin Result:=True;Exit;end;sol[x,y]:=0;end;
end;
var i,j:Integer;
begin
  Backtrack(0,0);
  for i:=0 to N-1 do begin for j:=0 to N-1 do if sol[i,j]=1 then Write('■ ')else Write('□ ');WriteLn;end;
  WriteLn('共嘗試 ',step,' 次');
end.`,
        },
      },
      {
        id: "n-queens",
        title: { "zh-TW": "八皇后問題", en: "N-Queens Problem" },
        content: {
          "zh-TW": `## 八皇后問題（N-Queens）

在 8×8 棋盤放 8 個皇后，任兩皇后不互攻。

**Delphi 回溯法：** \`board[row] = col\`

\`\`\`pascal
var board: array[0..7] of Integer;
    count: Integer = 0;
\`\`\`

Delphi 使用 \`Abs\` 函式（不需標頭），\`for\` 迴圈語法簡潔。`,
          en: `## N-Queens Problem

Place 8 queens on 8×8 board so none attack each other.

**Delphi backtracking:** \`board[row] = col\`

\`\`\`pascal
var board: array[0..7] of Integer;
    count: Integer = 0;
\`\`\`

Delphi uses \`Abs\` without headers; clean \`for\` loop syntax.`,
        },
        defaultCode: `program NQueens;

const N = 8;
var
  board: array[0..N-1] of Integer;
  count: Integer = 0;

function IsSafe(row, col: Integer): Boolean;
var r: Integer;
begin
  Result := True;
  for r := 0 to row - 1 do
    if (board[r] = col) or (Abs(board[r]-col) = Abs(r-row)) then
    begin
      Result := False;
      Exit;
    end;
end;

procedure PrintBoard;
var i, j: Integer;
begin
  for i := 0 to N-1 do
  begin
    for j := 0 to N-1 do
      if j = board[i] then Write('♛') else Write('·');
    WriteLn;
  end;
  WriteLn;
end;

procedure Backtrack(row: Integer);
var col: Integer;
begin
  if row = N then
  begin
    Inc(count);
    if count = 1 then
    begin
      WriteLn('第一種解法：');
      PrintBoard;
    end;
    Exit;
  end;
  for col := 0 to N-1 do
    if IsSafe(row, col) then
    begin
      board[row] := col;
      Backtrack(row + 1);
      board[row] := -1;
    end;
end;

var i: Integer;
begin
  for i := 0 to N-1 do board[i] := -1;
  Backtrack(0);
  WriteLn('8 皇后共有 ', count, ' 種解法');
end.`,
        exercise: {
          question: {
            "zh-TW": "改成求解 N=6（4 種解法），印出全部解法。",
            en: "Solve N=6 (4 solutions) and print all boards.",
          },
          hint: {
            "zh-TW": "把 const N = 8 改成 N = 6，移除 if count = 1 條件讓所有解都印出",
            en: "Change const N = 8 to N = 6; remove if count = 1 to print all solutions",
          },
          answer: `program NQueens;
const N=6;
var board:array[0..N-1]of Integer;count:Integer=0;
function IsSafe(row,col:Integer):Boolean;var r:Integer;begin Result:=True;for r:=0 to row-1 do if(board[r]=col)or(Abs(board[r]-col)=Abs(r-row))then begin Result:=False;Exit;end;end;
procedure PrintBoard;var i,j:Integer;begin for i:=0 to N-1 do begin for j:=0 to N-1 do if j=board[i]then Write('♛')else Write('·');WriteLn;end;WriteLn;end;
procedure Backtrack(row:Integer);var col:Integer;begin
  if row=N then begin Inc(count);WriteLn('解法 ',count,'：');PrintBoard;Exit;end;
  for col:=0 to N-1 do if IsSafe(row,col)then begin board[row]:=col;Backtrack(row+1);board[row]:=-1;end;
end;
var i:Integer;
begin for i:=0 to N-1 do board[i]:=-1;Backtrack(0);WriteLn('共 ',count,' 種解法');end.`,
        },
      },
    ],
  },
];

export default chapters;
