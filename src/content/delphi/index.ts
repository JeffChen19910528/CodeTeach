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
];

export default chapters;
