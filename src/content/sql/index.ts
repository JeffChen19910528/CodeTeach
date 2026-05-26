import type { Chapter } from "../types";

const chapters: Chapter[] = [
  {
    id: "intro",
    title: { "zh-TW": "入門介紹", en: "Introduction" },
    lessons: [
      {
        id: "select",
        title: { "zh-TW": "SELECT 查詢", en: "SELECT Query" },
        content: {
          "zh-TW": `## SQL 是什麼？

SQL（Structured Query Language）是操作關聯式資料庫的標準語言。

### SELECT 語法

\`\`\`sql
SELECT 欄位 FROM 資料表 WHERE 條件;
\`\`\`

這個範例會先建立一個測試資料表再查詢。`,
          en: `## What is SQL?

SQL (Structured Query Language) is the standard language for relational databases.

### SELECT Syntax

\`\`\`sql
SELECT column FROM table WHERE condition;
\`\`\`

This example creates a test table first, then queries it.`,
        },
        defaultCode: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
);

INSERT INTO users VALUES (1, 'Alice', 25);
INSERT INTO users VALUES (2, 'Bob', 30);
INSERT INTO users VALUES (3, 'Carol', 22);

SELECT * FROM users WHERE age > 24;`,
      },
      {
        id: "aggregate",
        title: { "zh-TW": "聚合函式", en: "Aggregate Functions" },
        content: {
          "zh-TW": `## 聚合函式

| 函式 | 說明 |
|------|------|
| \`COUNT()\` | 計算筆數 |
| \`SUM()\` | 加總 |
| \`AVG()\` | 平均 |
| \`MAX()\` | 最大值 |
| \`MIN()\` | 最小值 |

搭配 \`GROUP BY\` 可以分組計算。`,
          en: `## Aggregate Functions

| Function | Description |
|----------|-------------|
| \`COUNT()\` | Count rows |
| \`SUM()\` | Sum values |
| \`AVG()\` | Average |
| \`MAX()\` | Maximum |
| \`MIN()\` | Minimum |

Use with \`GROUP BY\` for grouped calculations.`,
        },
        defaultCode: `CREATE TABLE orders (
  id INTEGER,
  product TEXT,
  amount REAL
);

INSERT INTO orders VALUES (1, 'Apple', 10.5);
INSERT INTO orders VALUES (2, 'Apple', 8.0);
INSERT INTO orders VALUES (3, 'Banana', 5.0);

SELECT product, COUNT(*) as count, AVG(amount) as avg_amount
FROM orders
GROUP BY product;`,
      },
      {
        id: "where-clause",
        title: { "zh-TW": "WHERE 條件", en: "WHERE Clause" },
        content: {
          "zh-TW": `## WHERE 條件篩選

\`WHERE\` 子句用來篩選符合條件的列。

### 比較與邏輯運算子

\`\`\`sql
SELECT * FROM products WHERE price > 100;
SELECT * FROM products WHERE price >= 50 AND stock > 0;
SELECT * FROM products WHERE category = 'A' OR category = 'B';
SELECT * FROM products WHERE NOT discontinued;
\`\`\`

### LIKE：模糊比對

\`\`\`sql
WHERE name LIKE 'A%'    -- 以 A 開頭
WHERE name LIKE '%le'   -- 以 le 結尾
WHERE name LIKE '%an%'  -- 包含 an
\`\`\`

### IN、BETWEEN、IS NULL

\`\`\`sql
WHERE country IN ('US', 'UK', 'CA')
WHERE age BETWEEN 20 AND 30
WHERE email IS NULL
WHERE email IS NOT NULL
\`\`\``,
          en: `## WHERE Clause Filtering

The \`WHERE\` clause filters rows that match a condition.

### Comparison and Logical Operators

\`\`\`sql
SELECT * FROM products WHERE price > 100;
SELECT * FROM products WHERE price >= 50 AND stock > 0;
SELECT * FROM products WHERE category = 'A' OR category = 'B';
SELECT * FROM products WHERE NOT discontinued;
\`\`\`

### LIKE: Pattern Matching

\`\`\`sql
WHERE name LIKE 'A%'    -- starts with A
WHERE name LIKE '%le'   -- ends with le
WHERE name LIKE '%an%'  -- contains an
\`\`\`

### IN, BETWEEN, IS NULL

\`\`\`sql
WHERE country IN ('US', 'UK', 'CA')
WHERE age BETWEEN 20 AND 30
WHERE email IS NULL
WHERE email IS NOT NULL
\`\`\``,
        },
        defaultCode: `CREATE TABLE employees (
  id      INTEGER PRIMARY KEY,
  name    TEXT,
  dept    TEXT,
  salary  REAL,
  email   TEXT
);

INSERT INTO employees VALUES (1, 'Alice',   'Engineering', 95000, 'alice@example.com');
INSERT INTO employees VALUES (2, 'Bob',     'Marketing',   62000, NULL);
INSERT INTO employees VALUES (3, 'Carol',   'Engineering', 88000, 'carol@example.com');
INSERT INTO employees VALUES (4, 'Dave',    'HR',          55000, 'dave@example.com');
INSERT INTO employees VALUES (5, 'Eve',     'Marketing',   70000, NULL);
INSERT INTO employees VALUES (6, 'Frank',   'Engineering', 102000, 'frank@example.com');

-- 薪資在 60000 到 100000 之間
SELECT name, dept, salary FROM employees
WHERE salary BETWEEN 60000 AND 100000;

-- 在 Engineering 或 HR 部門
SELECT name, dept FROM employees
WHERE dept IN ('Engineering', 'HR');

-- 名字以 'A' 或 'C' 開頭（LIKE）
SELECT name FROM employees
WHERE name LIKE 'A%' OR name LIKE 'C%';

-- 沒有 email 的員工
SELECT name, dept FROM employees
WHERE email IS NULL;`,
      },
      {
        id: "insert-update-delete",
        title: { "zh-TW": "新增、更新、刪除", en: "INSERT, UPDATE, DELETE" },
        content: {
          "zh-TW": `## 資料操作語言（DML）

### INSERT INTO：新增資料

\`\`\`sql
INSERT INTO users (name, age) VALUES ('Alice', 25);
-- 也可省略欄位名稱（需依序提供所有欄位值）
INSERT INTO users VALUES (2, 'Bob', 30);
\`\`\`

### UPDATE SET WHERE：更新資料

\`\`\`sql
UPDATE users SET age = 26 WHERE name = 'Alice';
UPDATE users SET age = age + 1 WHERE dept = 'HR';
\`\`\`

> **注意**：省略 WHERE 會更新所有列！

### DELETE FROM WHERE：刪除資料

\`\`\`sql
DELETE FROM users WHERE id = 3;
DELETE FROM users WHERE age < 18;
\`\`\`

> **注意**：省略 WHERE 會刪除所有列！`,
          en: `## Data Manipulation Language (DML)

### INSERT INTO: Add Rows

\`\`\`sql
INSERT INTO users (name, age) VALUES ('Alice', 25);
-- Omit column names if providing all values in order
INSERT INTO users VALUES (2, 'Bob', 30);
\`\`\`

### UPDATE SET WHERE: Modify Rows

\`\`\`sql
UPDATE users SET age = 26 WHERE name = 'Alice';
UPDATE users SET age = age + 1 WHERE dept = 'HR';
\`\`\`

> **Warning**: Omitting WHERE updates every row!

### DELETE FROM WHERE: Remove Rows

\`\`\`sql
DELETE FROM users WHERE id = 3;
DELETE FROM users WHERE age < 18;
\`\`\`

> **Warning**: Omitting WHERE deletes every row!`,
        },
        defaultCode: `CREATE TABLE products (
  id    INTEGER PRIMARY KEY,
  name  TEXT,
  price REAL,
  stock INTEGER
);

-- 新增資料
INSERT INTO products VALUES (1, 'Apple',  1.20, 100);
INSERT INTO products VALUES (2, 'Banana', 0.50, 150);
INSERT INTO products VALUES (3, 'Cherry', 3.00,  80);
INSERT INTO products VALUES (4, 'Date',   5.00,  20);

SELECT '=== 初始資料 ===' AS info;
SELECT * FROM products;

-- 更新：Cherry 漲價 10%
UPDATE products SET price = price * 1.1 WHERE name = 'Cherry';

-- 更新：補貨 Date
UPDATE products SET stock = stock + 50 WHERE name = 'Date';

SELECT '=== 更新後 ===' AS info;
SELECT * FROM products;

-- 刪除：庫存不足 50 的商品
DELETE FROM products WHERE stock < 50;

SELECT '=== 刪除後 ===' AS info;
SELECT * FROM products;`,
      },
    ],
  },
  {
    id: "joins",
    title: { "zh-TW": "資料表連結", en: "Joins" },
    lessons: [
      {
        id: "inner-join",
        title: { "zh-TW": "INNER JOIN", en: "INNER JOIN" },
        content: {
          "zh-TW": `## INNER JOIN

\`INNER JOIN\` 只回傳兩個資料表中**都存在**配對值的列。

### 語法

\`\`\`sql
SELECT a.col, b.col
FROM table_a AS a
INNER JOIN table_b AS b ON a.id = b.a_id;
\`\`\`

- \`AS\` 為資料表或欄位設定別名，讓查詢更簡潔
- \`ON\` 指定連結條件（通常是主鍵對外鍵）

### 示意圖

\`\`\`
表 A   表 B        INNER JOIN 結果
┌──┐  ┌──┐        ┌────────────┐
│1 │  │1 │        │ A.1 + B.1  │
│2 │  │2 │   →    │ A.2 + B.2  │
│3 │  │4 │        └────────────┘
└──┘  └──┘        (3 和 4 不配對，被排除)
\`\`\``,
          en: `## INNER JOIN

\`INNER JOIN\` returns only rows where there is a matching value in **both** tables.

### Syntax

\`\`\`sql
SELECT a.col, b.col
FROM table_a AS a
INNER JOIN table_b AS b ON a.id = b.a_id;
\`\`\`

- \`AS\` creates an alias for a table or column
- \`ON\` specifies the join condition (usually primary key to foreign key)

### Diagram

\`\`\`
Table A  Table B      INNER JOIN result
┌──┐    ┌──┐          ┌────────────┐
│1 │    │1 │          │ A.1 + B.1  │
│2 │    │2 │   →      │ A.2 + B.2  │
│3 │    │4 │          └────────────┘
└──┘    └──┘          (3 and 4 have no match, excluded)
\`\`\``,
        },
        defaultCode: `CREATE TABLE departments (
  dept_id   INTEGER PRIMARY KEY,
  dept_name TEXT
);

CREATE TABLE employees (
  emp_id  INTEGER PRIMARY KEY,
  name    TEXT,
  dept_id INTEGER
);

INSERT INTO departments VALUES (1, 'Engineering');
INSERT INTO departments VALUES (2, 'Marketing');
INSERT INTO departments VALUES (3, 'HR');

INSERT INTO employees VALUES (1, 'Alice', 1);
INSERT INTO employees VALUES (2, 'Bob',   2);
INSERT INTO employees VALUES (3, 'Carol', 1);
INSERT INTO employees VALUES (4, 'Dave',  NULL);  -- 尚未分配部門

-- INNER JOIN：只顯示有所屬部門的員工
SELECT e.name AS employee, d.dept_name AS department
FROM employees AS e
INNER JOIN departments AS d ON e.dept_id = d.dept_id
ORDER BY d.dept_name, e.name;`,
      },
      {
        id: "left-join",
        title: { "zh-TW": "LEFT JOIN", en: "LEFT JOIN" },
        content: {
          "zh-TW": `## LEFT JOIN

\`LEFT JOIN\` 回傳**左側資料表的所有列**，右側資料表配對不到的欄位填入 \`NULL\`。

### 語法

\`\`\`sql
SELECT a.col, b.col
FROM table_a AS a
LEFT JOIN table_b AS b ON a.id = b.a_id;
\`\`\`

### 與 INNER JOIN 的差異

| | INNER JOIN | LEFT JOIN |
|-|------------|-----------|
| 左表無配對 | 排除該列 | 保留，右側填 NULL |
| 右表無配對 | 排除該列 | 不顯示右表獨有列 |

### 常見用途：找出沒有關聯資料的列

\`\`\`sql
-- 找出沒有訂單的客戶
SELECT c.name
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
WHERE o.id IS NULL;
\`\`\``,
          en: `## LEFT JOIN

\`LEFT JOIN\` returns **all rows from the left table**; unmatched columns from the right table are filled with \`NULL\`.

### Syntax

\`\`\`sql
SELECT a.col, b.col
FROM table_a AS a
LEFT JOIN table_b AS b ON a.id = b.a_id;
\`\`\`

### Difference from INNER JOIN

| | INNER JOIN | LEFT JOIN |
|-|------------|-----------|
| Left table no match | Row excluded | Row kept, right side NULL |
| Right table no match | Row excluded | Right-only rows not shown |

### Common Use: Finding rows with no related data

\`\`\`sql
-- Find customers with no orders
SELECT c.name
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
WHERE o.id IS NULL;
\`\`\``,
        },
        defaultCode: `CREATE TABLE customers (
  id   INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE orders (
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product     TEXT,
  amount      REAL
);

INSERT INTO customers VALUES (1, 'Alice');
INSERT INTO customers VALUES (2, 'Bob');
INSERT INTO customers VALUES (3, 'Carol');  -- 尚未下單
INSERT INTO customers VALUES (4, 'Dave');   -- 尚未下單

INSERT INTO orders VALUES (101, 1, 'Laptop', 999.00);
INSERT INTO orders VALUES (102, 1, 'Mouse',   29.99);
INSERT INTO orders VALUES (103, 2, 'Keyboard',79.99);

-- LEFT JOIN：顯示所有客戶（含未下單的）
SELECT c.name AS customer, o.product, o.amount
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
ORDER BY c.name;

-- 找出從未下單的客戶
SELECT c.name AS never_ordered
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
WHERE o.order_id IS NULL;`,
      },
    ],
  },
  {
    id: "schema",
    title: { "zh-TW": "資料庫設計", en: "Schema Design" },
    lessons: [
      {
        id: "create-table",
        title: { "zh-TW": "CREATE TABLE", en: "CREATE TABLE" },
        content: {
          "zh-TW": `## CREATE TABLE

\`CREATE TABLE\` 定義資料表的結構（綱要，Schema）。

### 語法

\`\`\`sql
CREATE TABLE 資料表名稱 (
  欄位名稱  資料型別  [限制條件],
  ...
);
\`\`\`

### SQLite 主要資料型別

| 型別 | 說明 |
|------|------|
| \`INTEGER\` | 整數 |
| \`REAL\` | 浮點數 |
| \`TEXT\` | 字串 |
| \`BLOB\` | 二進位資料 |
| \`NUMERIC\` | 數值（自動選擇 INTEGER 或 REAL） |

### PRIMARY KEY 與 NOT NULL

\`\`\`sql
CREATE TABLE users (
  id    INTEGER PRIMARY KEY,   -- 主鍵，唯一且不為 NULL
  name  TEXT NOT NULL,         -- 必填
  email TEXT                   -- 可為 NULL
);
\`\`\``,
          en: `## CREATE TABLE

\`CREATE TABLE\` defines the structure (schema) of a table.

### Syntax

\`\`\`sql
CREATE TABLE table_name (
  column_name  data_type  [constraints],
  ...
);
\`\`\`

### SQLite Main Data Types

| Type | Description |
|------|-------------|
| \`INTEGER\` | Whole numbers |
| \`REAL\` | Floating-point numbers |
| \`TEXT\` | Strings |
| \`BLOB\` | Binary data |
| \`NUMERIC\` | Numeric (auto INTEGER or REAL) |

### PRIMARY KEY and NOT NULL

\`\`\`sql
CREATE TABLE users (
  id    INTEGER PRIMARY KEY,   -- unique, never NULL
  name  TEXT NOT NULL,         -- required
  email TEXT                   -- nullable
);
\`\`\``,
        },
        defaultCode: `-- 建立書籍資料表
CREATE TABLE books (
  id          INTEGER PRIMARY KEY,
  title       TEXT    NOT NULL,
  author      TEXT    NOT NULL,
  price       REAL,
  published   INTEGER  -- 出版年份
);

-- 新增資料
INSERT INTO books VALUES (1, 'Clean Code',         'Robert Martin', 45.00, 2008);
INSERT INTO books VALUES (2, 'The Pragmatic Programmer', 'David Thomas', 49.99, 2019);
INSERT INTO books VALUES (3, 'Design Patterns',    'Gang of Four',  55.00, 1994);
INSERT INTO books VALUES (4, 'Refactoring',        'Martin Fowler', 47.50, 2018);

-- 查詢
SELECT title, author, price
FROM books
WHERE price < 50
ORDER BY price;

-- 確認資料型別資訊（SQLite）
SELECT name, type FROM pragma_table_info('books');`,
      },
      {
        id: "constraints",
        title: { "zh-TW": "資料約束", en: "Constraints" },
        content: {
          "zh-TW": `## 資料約束（Constraints）

約束條件確保資料的完整性與一致性。

### 常見約束

| 約束 | 說明 |
|------|------|
| \`PRIMARY KEY\` | 唯一識別碼，不可為 NULL |
| \`NOT NULL\` | 欄位不可為空 |
| \`UNIQUE\` | 欄位值必須唯一 |
| \`DEFAULT 值\` | 未提供時使用預設值 |
| \`CHECK (條件)\` | 值必須滿足指定條件 |

### 範例

\`\`\`sql
CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT    NOT NULL UNIQUE,
  price    REAL    NOT NULL CHECK (price > 0),
  category TEXT    DEFAULT 'General',
  stock    INTEGER DEFAULT 0 CHECK (stock >= 0)
);
\`\`\`

### 外鍵概念（Foreign Key）

外鍵建立兩個資料表之間的關聯：
\`\`\`sql
CREATE TABLE orders (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER,           -- 參照 customers.id
  total       REAL NOT NULL
);
\`\`\``,
          en: `## Constraints

Constraints enforce data integrity and consistency.

### Common Constraints

| Constraint | Description |
|------------|-------------|
| \`PRIMARY KEY\` | Unique identifier, cannot be NULL |
| \`NOT NULL\` | Column cannot be empty |
| \`UNIQUE\` | Column value must be unique |
| \`DEFAULT value\` | Default value when none is provided |
| \`CHECK (condition)\` | Value must satisfy a condition |

### Example

\`\`\`sql
CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT    NOT NULL UNIQUE,
  price    REAL    NOT NULL CHECK (price > 0),
  category TEXT    DEFAULT 'General',
  stock    INTEGER DEFAULT 0 CHECK (stock >= 0)
);
\`\`\`

### Foreign Key Concept

A foreign key links two tables together:
\`\`\`sql
CREATE TABLE orders (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER,           -- references customers.id
  total       REAL NOT NULL
);
\`\`\``,
        },
        defaultCode: `CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT    NOT NULL UNIQUE,
  price    REAL    NOT NULL CHECK (price > 0),
  category TEXT    DEFAULT 'General',
  stock    INTEGER DEFAULT 0 CHECK (stock >= 0)
);

-- 正常新增
INSERT INTO products (id, name, price, stock) VALUES (1, 'Laptop', 999.99, 10);
INSERT INTO products (id, name, price) VALUES (2, 'Mouse', 29.99);          -- stock 預設為 0
INSERT INTO products (id, name, price, category) VALUES (3, 'Keyboard', 79.99, 'Accessories');

SELECT '=== 所有商品 ===' AS info;
SELECT id, name, price, category, stock FROM products;

-- 測試 DEFAULT 是否生效
SELECT '=== category 或 stock 使用預設值的商品 ===' AS info;
SELECT name, category, stock FROM products
WHERE category = 'General' OR stock = 0;

-- 以下操作會因約束失敗（取消註解可自行測試）
-- INSERT INTO products (id, name, price) VALUES (4, 'Laptop', 50.00);  -- UNIQUE 失敗
-- INSERT INTO products (id, name, price) VALUES (5, 'Tablet', -1.00);  -- CHECK 失敗`,
      },
    ],
  },
  {
    id: "sql-algorithms",
    title: { "zh-TW": "SQL 演算法題", en: "SQL Algorithm Problems" },
    lessons: [
      {
        id: "find-duplicates",
        title: { "zh-TW": "找出重複資料", en: "Find Duplicates" },
        content: {
          "zh-TW": `## 找出重複資料

**問題：** 找出 email 重複出現超過一次的使用者。

**核心技巧：GROUP BY + HAVING**

\`\`\`sql
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

- \`GROUP BY\` 將相同 email 合併為一組
- \`HAVING\` 篩選聚合後的結果（\`WHERE\` 無法用在聚合函數上）
- 延伸：找出重複的 row 並刪除，只保留最小的 id`,
          en: `## Find Duplicates

**Problem:** Find emails that appear more than once in the users table.

**Key technique: GROUP BY + HAVING**

\`\`\`sql
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

- \`GROUP BY\` groups rows with the same email
- \`HAVING\` filters on aggregated results (\`WHERE\` can't use aggregate functions)
- Extension: find duplicate rows and delete all but the smallest id`,
        },
        defaultCode: `-- 建立測試資料
CREATE TABLE users (
    id    INTEGER PRIMARY KEY,
    name  TEXT,
    email TEXT
);

INSERT INTO users VALUES
    (1, 'Alice',   'alice@example.com'),
    (2, 'Bob',     'bob@example.com'),
    (3, 'Charlie', 'alice@example.com'),  -- 重複 email
    (4, 'Diana',   'diana@example.com'),
    (5, 'Eve',     'bob@example.com'),    -- 重複 email
    (6, 'Frank',   'frank@example.com');

-- 1. 找出重複的 email
SELECT '=== 重複的 email ===' AS info;
SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- 2. 找出所有重複的完整 row
SELECT '=== 重複 email 的使用者 ===' AS info;
SELECT u.*
FROM users u
WHERE u.email IN (
    SELECT email FROM users
    GROUP BY email
    HAVING COUNT(*) > 1
)
ORDER BY u.email, u.id;`,
        exercise: {
          question: {
            "zh-TW": "延伸題：刪除重複 email 的 row，只保留每個 email 的最小 id（使用 DELETE + 子查詢）。",
            en: "Extension: Delete duplicate email rows, keeping only the row with the smallest id for each email (use DELETE + subquery).",
          },
          hint: {
            "zh-TW": "DELETE FROM users WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email)",
            en: "DELETE FROM users WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email)",
          },
          answer: `CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);
INSERT INTO users VALUES (1,'Alice','alice@example.com'),(2,'Bob','bob@example.com'),
(3,'Charlie','alice@example.com'),(4,'Diana','diana@example.com'),(5,'Eve','bob@example.com');

SELECT '=== 刪除前 ===' AS info;
SELECT * FROM users ORDER BY email, id;

-- 只保留每個 email 的最小 id
DELETE FROM users
WHERE id NOT IN (
    SELECT MIN(id) FROM users GROUP BY email
);

SELECT '=== 刪除後（無重複）===' AS info;
SELECT * FROM users ORDER BY email;`,
        },
      },
      {
        id: "nth-highest-salary",
        title: { "zh-TW": "第 N 高薪資", en: "Nth Highest Salary" },
        content: {
          "zh-TW": `## 第 N 高薪資（LeetCode #177）

**問題：** 找出薪資表中第 N 高的不重複薪資。

**方法一：LIMIT + OFFSET（SQLite 最簡）**
\`\`\`sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;
\`\`\`

**方法二：子查詢計數**
\`\`\`sql
SELECT MAX(salary) FROM employees
WHERE salary < (
    SELECT MAX(salary) FROM employees
    WHERE salary < (SELECT MAX(salary) FROM employees)
);
\`\`\`

方法一更通用，\`OFFSET N-1\` 跳過前 N-1 個，\`LIMIT 1\` 取第 N 個。`,
          en: `## Nth Highest Salary (LeetCode #177)

**Problem:** Find the Nth highest distinct salary.

**Method 1: LIMIT + OFFSET (simplest in SQLite)**
\`\`\`sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;
\`\`\`

**Method 2: Subquery counting**

Method 1 is more general — \`OFFSET N-1\` skips the top N-1, \`LIMIT 1\` grabs the Nth.`,
        },
        defaultCode: `CREATE TABLE employees (
    id     INTEGER PRIMARY KEY,
    name   TEXT,
    dept   TEXT,
    salary INTEGER
);

INSERT INTO employees VALUES
    (1, 'Alice',   'Engineering', 90000),
    (2, 'Bob',     'Marketing',   60000),
    (3, 'Charlie', 'Engineering', 75000),
    (4, 'Diana',   'HR',          55000),
    (5, 'Eve',     'Engineering', 90000),  -- 與 Alice 同薪
    (6, 'Frank',   'Marketing',   70000),
    (7, 'Grace',   'HR',          80000);

-- 第 1 高薪（最高）
SELECT '=== 第 1 高薪 ===' AS info;
SELECT DISTINCT salary AS nth_salary
FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 0;

-- 第 2 高薪
SELECT '=== 第 2 高薪 ===' AS info;
SELECT DISTINCT salary AS nth_salary
FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;

-- 第 3 高薪
SELECT '=== 第 3 高薪 ===' AS info;
SELECT DISTINCT salary AS nth_salary
FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;

-- 全部不重複薪資排序
SELECT '=== 所有不重複薪資 ===' AS info;
SELECT DISTINCT salary FROM employees ORDER BY salary DESC;`,
        exercise: {
          question: {
            "zh-TW": "找出每個部門的第 2 高薪資（用 NOT IN 子查詢，先找各部門最高薪，再找低於最高薪的最高值）。",
            en: "Find the 2nd highest salary in each department using a NOT IN subquery (find the max per dept, then find the max salary below that max).",
          },
          hint: {
            "zh-TW": "SELECT dept, MAX(salary) FROM employees WHERE salary NOT IN (SELECT MAX(salary) FROM employees GROUP BY dept) GROUP BY dept",
            en: "Use: WHERE salary NOT IN (SELECT MAX(salary) FROM employees GROUP BY dept) then GROUP BY dept",
          },
          answer: `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept TEXT, salary INTEGER);
INSERT INTO employees VALUES (1,'Alice','Engineering',90000),(2,'Bob','Marketing',60000),
(3,'Charlie','Engineering',75000),(4,'Diana','HR',55000),(5,'Eve','Engineering',90000),
(6,'Frank','Marketing',70000),(7,'Grace','HR',80000),(8,'Henry','HR',80000);

-- 各部門最高薪
SELECT '=== 各部門最高薪 ===' AS info;
SELECT dept, MAX(salary) AS max_salary FROM employees GROUP BY dept;

-- 各部門第 2 高薪（低於各部門最高薪的最高值）
SELECT '=== 各部門第 2 高薪 ===' AS info;
SELECT e.dept, MAX(e.salary) AS second_salary
FROM employees e
WHERE e.salary < (
    SELECT MAX(salary) FROM employees e2 WHERE e2.dept = e.dept
)
GROUP BY e.dept
ORDER BY e.dept;`,
        },
      },
      {
        id: "window-ranking",
        title: { "zh-TW": "視窗函數排名", en: "Window Function Ranking" },
        content: {
          "zh-TW": `## 視窗函數排名（Window Functions）

SQLite 3.25+ 支援視窗函數，三種排名函數行為不同：

| 函數 | 同分處理 | 範例（90,90,75） |
|------|---------|----------------|
| \`ROW_NUMBER()\` | 連續不重複 | 1, 2, 3 |
| \`RANK()\` | 同分同排，跳號 | 1, 1, 3 |
| \`DENSE_RANK()\` | 同分同排，不跳號 | 1, 1, 2 |

語法：
\`\`\`sql
ROW_NUMBER() OVER (ORDER BY salary DESC)
RANK()        OVER (PARTITION BY dept ORDER BY salary DESC)
\`\`\`

\`PARTITION BY\` 讓每個部門分開排名（重置計數器）。`,
          en: `## Window Function Ranking

SQLite 3.25+ supports window functions. Three ranking functions behave differently:

| Function | Ties | Example (90,90,75) |
|----------|------|--------------------|
| \`ROW_NUMBER()\` | Unique sequential | 1, 2, 3 |
| \`RANK()\` | Same rank, gaps | 1, 1, 3 |
| \`DENSE_RANK()\` | Same rank, no gaps | 1, 1, 2 |

Syntax:
\`\`\`sql
RANK() OVER (PARTITION BY dept ORDER BY salary DESC)
\`\`\`

\`PARTITION BY\` resets the counter for each department.`,
        },
        defaultCode: `CREATE TABLE employees (
    id     INTEGER PRIMARY KEY,
    name   TEXT,
    dept   TEXT,
    salary INTEGER
);

INSERT INTO employees VALUES
    (1, 'Alice',   'Engineering', 90000),
    (2, 'Bob',     'Marketing',   60000),
    (3, 'Charlie', 'Engineering', 75000),
    (4, 'Diana',   'HR',          80000),
    (5, 'Eve',     'Engineering', 90000),
    (6, 'Frank',   'Marketing',   70000),
    (7, 'Grace',   'HR',          80000),
    (8, 'Henry',   'Marketing',   70000);

-- 三種排名函數比較（全公司）
SELECT '=== 全公司薪資排名比較 ===' AS info;
SELECT
    name, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
    RANK()       OVER (ORDER BY salary DESC) AS rnk,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk
FROM employees
ORDER BY salary DESC;

-- 各部門排名（PARTITION BY）
SELECT '=== 各部門薪資排名 ===' AS info;
SELECT
    dept, name, salary,
    RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_rank
FROM employees
ORDER BY dept, dept_rank;`,
        exercise: {
          question: {
            "zh-TW": "找出每個部門排名第 1 的員工（使用子查詢包住視窗函數，篩選 dept_rank = 1）。",
            en: "Find the top-ranked employee in each department (wrap the window function in a subquery and filter where dept_rank = 1).",
          },
          hint: {
            "zh-TW": "SELECT * FROM (...視窗查詢...) WHERE dept_rank = 1",
            en: "SELECT * FROM (...window query...) WHERE dept_rank = 1",
          },
          answer: `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept TEXT, salary INTEGER);
INSERT INTO employees VALUES (1,'Alice','Engineering',90000),(2,'Bob','Marketing',60000),
(3,'Charlie','Engineering',75000),(4,'Diana','HR',80000),(5,'Eve','Engineering',90000),
(6,'Frank','Marketing',70000),(7,'Grace','HR',80000),(8,'Henry','Marketing',70000);

SELECT dept, name, salary, dept_rank
FROM (
    SELECT
        dept, name, salary,
        RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_rank
    FROM employees
)
WHERE dept_rank = 1
ORDER BY dept;`,
        },
      },
      {
        id: "running-total",
        title: { "zh-TW": "累計加總", en: "Running Total" },
        content: {
          "zh-TW": `## 累計加總（Running Total）

**問題：** 計算每筆訂單的累計銷售金額（每日滾動加總）。

**核心語法：SUM() OVER (ORDER BY)**

\`\`\`sql
SUM(amount) OVER (ORDER BY order_date ROWS UNBOUNDED PRECEDING)
\`\`\`

| 語法 | 說明 |
|------|------|
| \`ROWS UNBOUNDED PRECEDING\` | 從第一列到當前列（累計） |
| \`ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\` | 滑動 7 日視窗 |
| \`PARTITION BY customer_id\` | 每位客戶各自累計 |

視窗函數不像 GROUP BY 會折疊列數，每列都保留原始資料。`,
          en: `## Running Total

**Problem:** Calculate the cumulative sales amount per order (rolling sum by date).

**Core syntax: SUM() OVER (ORDER BY)**

\`\`\`sql
SUM(amount) OVER (ORDER BY order_date ROWS UNBOUNDED PRECEDING)
\`\`\`

| Syntax | Meaning |
|--------|---------|
| \`ROWS UNBOUNDED PRECEDING\` | All rows up to current (cumulative) |
| \`ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\` | 7-day sliding window |
| \`PARTITION BY customer_id\` | Cumulative per customer |

Unlike GROUP BY, window functions preserve all original rows.`,
        },
        defaultCode: `CREATE TABLE orders (
    id          INTEGER PRIMARY KEY,
    customer    TEXT,
    order_date  TEXT,
    amount      INTEGER
);

INSERT INTO orders VALUES
    (1, 'Alice', '2024-01-01', 500),
    (2, 'Bob',   '2024-01-02', 300),
    (3, 'Alice', '2024-01-03', 200),
    (4, 'Carol', '2024-01-03', 800),
    (5, 'Bob',   '2024-01-05', 450),
    (6, 'Alice', '2024-01-06', 350),
    (7, 'Carol', '2024-01-07', 600);

-- 全站累計銷售額
SELECT '=== 全站累計銷售 ===' AS info;
SELECT
    order_date, customer, amount,
    SUM(amount) OVER (ORDER BY order_date, id
        ROWS UNBOUNDED PRECEDING) AS running_total
FROM orders
ORDER BY order_date, id;

-- 每位客戶各自累計（PARTITION BY）
SELECT '=== 各客戶累計消費 ===' AS info;
SELECT
    customer, order_date, amount,
    SUM(amount) OVER (
        PARTITION BY customer
        ORDER BY order_date
        ROWS UNBOUNDED PRECEDING
    ) AS customer_total
FROM orders
ORDER BY customer, order_date;`,
        exercise: {
          question: {
            "zh-TW": "計算每筆訂單的「當日 + 前兩日」共 3 日滑動平均金額（ROWS BETWEEN 2 PRECEDING AND CURRENT ROW）。",
            en: "Calculate a 3-day sliding average amount for each order (current day + previous 2 days) using ROWS BETWEEN 2 PRECEDING AND CURRENT ROW.",
          },
          hint: {
            "zh-TW": "AVG(amount) OVER (ORDER BY order_date, id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
            en: "AVG(amount) OVER (ORDER BY order_date, id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
          },
          answer: `CREATE TABLE orders (id INTEGER PRIMARY KEY, customer TEXT, order_date TEXT, amount INTEGER);
INSERT INTO orders VALUES (1,'Alice','2024-01-01',500),(2,'Bob','2024-01-02',300),
(3,'Alice','2024-01-03',200),(4,'Carol','2024-01-03',800),(5,'Bob','2024-01-05',450),
(6,'Alice','2024-01-06',350),(7,'Carol','2024-01-07',600);

SELECT
    order_date, customer, amount,
    ROUND(AVG(amount) OVER (
        ORDER BY order_date, id
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS moving_avg_3d
FROM orders
ORDER BY order_date, id;`,
        },
      },
      {
        id: "pivot-case-when",
        title: { "zh-TW": "CASE WHEN 樞紐分析", en: "Pivot with CASE WHEN" },
        content: {
          "zh-TW": `## CASE WHEN 樞紐分析（Pivot Table）

SQL 沒有內建 PIVOT，用 \`CASE WHEN + SUM\` 手動轉置：

**原始格式（長格式）：**
\`\`\`
dept    | month | sales
--------|-------|------
Sales   | Jan   | 100
Sales   | Feb   | 200
\`\`\`

**樞紐後（寬格式）：**
\`\`\`
dept  | Jan | Feb | Mar
------|-----|-----|----
Sales | 100 | 200 | 150
\`\`\`

技巧：\`SUM(CASE WHEN month='Jan' THEN sales ELSE 0 END) AS Jan\``,
          en: `## Pivot with CASE WHEN

SQL has no built-in PIVOT — use \`CASE WHEN + SUM\` to manually transpose:

**Original (long format):**
\`\`\`
dept  | month | sales
------|-------|------
Sales | Jan   | 100
\`\`\`

**Pivoted (wide format):**
\`\`\`
dept  | Jan | Feb | Mar
------|-----|-----|----
Sales | 100 | 200 | 150
\`\`\`

Technique: \`SUM(CASE WHEN month='Jan' THEN sales ELSE 0 END) AS Jan\``,
        },
        defaultCode: `CREATE TABLE monthly_sales (
    dept  TEXT,
    month TEXT,
    sales INTEGER
);

INSERT INTO monthly_sales VALUES
    ('Sales',       'Jan', 120000),
    ('Sales',       'Feb', 95000),
    ('Sales',       'Mar', 130000),
    ('Engineering', 'Jan', 50000),
    ('Engineering', 'Feb', 60000),
    ('Engineering', 'Mar', 45000),
    ('Marketing',   'Jan', 80000),
    ('Marketing',   'Feb', 75000),
    ('Marketing',   'Mar', 90000);

-- 原始長格式
SELECT '=== 原始資料 ===' AS info;
SELECT * FROM monthly_sales ORDER BY dept, month;

-- 樞紐轉置（長 → 寬）
SELECT '=== 樞紐分析（各部門月銷售）===' AS info;
SELECT
    dept,
    SUM(CASE WHEN month = 'Jan' THEN sales ELSE 0 END) AS Jan,
    SUM(CASE WHEN month = 'Feb' THEN sales ELSE 0 END) AS Feb,
    SUM(CASE WHEN month = 'Mar' THEN sales ELSE 0 END) AS Mar,
    SUM(sales) AS total
FROM monthly_sales
GROUP BY dept
ORDER BY total DESC;`,
        exercise: {
          question: {
            "zh-TW": "新增 Q2 月份資料（Apr、May、Jun），並計算每個部門的 Q1 小計（Jan+Feb+Mar）與 Q2 小計。",
            en: "Add Q2 data (Apr, May, Jun) and calculate Q1 subtotal (Jan+Feb+Mar) and Q2 subtotal for each department.",
          },
          hint: {
            "zh-TW": "SUM(CASE WHEN month IN ('Jan','Feb','Mar') THEN sales ELSE 0 END) AS Q1",
            en: "SUM(CASE WHEN month IN ('Jan','Feb','Mar') THEN sales ELSE 0 END) AS Q1",
          },
          answer: `CREATE TABLE monthly_sales (dept TEXT, month TEXT, sales INTEGER);
INSERT INTO monthly_sales VALUES
('Sales','Jan',120000),('Sales','Feb',95000),('Sales','Mar',130000),
('Sales','Apr',110000),('Sales','May',105000),('Sales','Jun',140000),
('Engineering','Jan',50000),('Engineering','Feb',60000),('Engineering','Mar',45000),
('Engineering','Apr',55000),('Engineering','May',65000),('Engineering','Jun',70000),
('Marketing','Jan',80000),('Marketing','Feb',75000),('Marketing','Mar',90000),
('Marketing','Apr',85000),('Marketing','May',88000),('Marketing','Jun',95000);

SELECT
    dept,
    SUM(CASE WHEN month IN ('Jan','Feb','Mar') THEN sales ELSE 0 END) AS Q1,
    SUM(CASE WHEN month IN ('Apr','May','Jun') THEN sales ELSE 0 END) AS Q2,
    SUM(sales) AS half_year_total
FROM monthly_sales
GROUP BY dept
ORDER BY half_year_total DESC;`,
        },
      },
      {
        id: "recursive-cte",
        title: { "zh-TW": "遞迴 CTE 組織樹", en: "Recursive CTE for Hierarchy" },
        content: {
          "zh-TW": `## 遞迴 CTE — 組織樹查詢

**問題：** 員工表中記錄上司 ID，找出某人之下的所有下屬（任意深度）。

**語法：WITH RECURSIVE**

\`\`\`sql
WITH RECURSIVE subordinates AS (
    -- 錨點：起始節點
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE id = 1

    UNION ALL

    -- 遞迴：每次往下一層
    SELECT e.id, e.name, e.manager_id, s.level + 1
    FROM employees e
    JOIN subordinates s ON e.manager_id = s.id
)
SELECT * FROM subordinates;
\`\`\`

也可用於：**生成數字序列**、**路徑計算**、**BOM 物料清單**。`,
          en: `## Recursive CTE — Hierarchy Query

**Problem:** An employee table stores manager IDs. Find all subordinates under a given person (any depth).

**Syntax: WITH RECURSIVE**

\`\`\`sql
WITH RECURSIVE subordinates AS (
    -- Anchor: starting node
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE id = 1

    UNION ALL

    -- Recursive: go one level deeper each time
    SELECT e.id, e.name, e.manager_id, s.level + 1
    FROM employees e
    JOIN subordinates s ON e.manager_id = s.id
)
SELECT * FROM subordinates;
\`\`\`

Also useful for: **number sequences**, **path calculations**, **BOM structures**.`,
        },
        defaultCode: `CREATE TABLE employees (
    id         INTEGER PRIMARY KEY,
    name       TEXT,
    title      TEXT,
    manager_id INTEGER  -- NULL 表示最高層（CEO）
);

INSERT INTO employees VALUES
    (1,  'Alice',   'CEO',        NULL),
    (2,  'Bob',     'VP Eng',     1),
    (3,  'Carol',   'VP Sales',   1),
    (4,  'Dave',    'Sr. Eng',    2),
    (5,  'Eve',     'Jr. Eng',    2),
    (6,  'Frank',   'Sales Mgr',  3),
    (7,  'Grace',   'Sales Rep',  6),
    (8,  'Henry',   'Sales Rep',  6),
    (9,  'Iris',    'Sr. Eng',    4);

-- 查詢 Alice（CEO）所有下屬，標示層級
SELECT '=== Alice 的所有下屬 ===' AS info;
WITH RECURSIVE subordinates AS (
    -- 錨點：從 CEO 開始
    SELECT id, name, title, manager_id, 0 AS level
    FROM employees WHERE id = 1

    UNION ALL

    -- 遞迴：找出每個人的直屬下屬
    SELECT e.id, e.name, e.title, e.manager_id, s.level + 1
    FROM employees e
    JOIN subordinates s ON e.manager_id = s.id
)
SELECT
    level,
    REPLACE('          ', '          ', '') || -- 縮排視覺化
    SUBSTR('    ', 1, level * 2) || name AS org_chart,
    title
FROM subordinates
ORDER BY level, name;

-- 查詢 Bob（VP Eng）的所有下屬
SELECT '=== Bob 的所有下屬 ===' AS info;
WITH RECURSIVE subordinates AS (
    SELECT id, name, title, 0 AS level FROM employees WHERE id = 2
    UNION ALL
    SELECT e.id, e.name, e.title, s.level + 1
    FROM employees e JOIN subordinates s ON e.manager_id = s.id
)
SELECT level, name, title FROM subordinates ORDER BY level, name;`,
        exercise: {
          question: {
            "zh-TW": "用遞迴 CTE 生成 1 到 10 的數字序列（提示：錨點 SELECT 1 AS n，遞迴 SELECT n+1 WHERE n < 10），並計算 1+2+...+10 的累計總和。",
            en: "Use a recursive CTE to generate numbers 1 to 10 (anchor: SELECT 1 AS n, recursive: SELECT n+1 WHERE n < 10), then calculate the cumulative sum 1+2+...+10.",
          },
          hint: {
            "zh-TW": "WITH RECURSIVE nums AS (SELECT 1 AS n UNION ALL SELECT n+1 FROM nums WHERE n < 10) SELECT n, SUM(n) OVER (ORDER BY n) AS cumsum FROM nums",
            en: "WITH RECURSIVE nums AS (SELECT 1 AS n UNION ALL SELECT n+1 FROM nums WHERE n < 10) SELECT n, SUM(n) OVER (ORDER BY n) AS cumsum FROM nums",
          },
          answer: `-- 遞迴 CTE 生成數字序列
WITH RECURSIVE nums AS (
    SELECT 1 AS n          -- 錨點

    UNION ALL

    SELECT n + 1            -- 遞迴：加 1
    FROM nums
    WHERE n < 10            -- 終止條件
)
SELECT
    n,
    SUM(n) OVER (ORDER BY n ROWS UNBOUNDED PRECEDING) AS cumulative_sum
FROM nums;
-- 最後一列 cumulative_sum = 55（= 10×11/2）`,
        },
      },
      {
        id: "gaps-and-islands",
        title: { "zh-TW": "連續區間問題", en: "Gaps and Islands" },
        content: {
          "zh-TW": `## 連續區間問題（Gaps and Islands）

**問題：** 找出使用者的連續登入天數（「孤島」）以及中斷的天數（「缺口」）。

**核心技巧：ROW_NUMBER 差值法**

若日期序列是連續的，則 \`date - ROW_NUMBER()\` 的差值相同 → 屬於同一個「島」。

\`\`\`sql
date_col - ROW_NUMBER() OVER (ORDER BY date_col) AS grp
\`\`\`

再用 \`GROUP BY grp\` 就能找出每段連續區間的起訖日期。`,
          en: `## Gaps and Islands

**Problem:** Find consecutive login streaks ("islands") and gaps for each user.

**Core technique: ROW_NUMBER difference**

If a date sequence is consecutive, \`date - ROW_NUMBER()\` yields the same value → same "island".

\`\`\`sql
date_col - ROW_NUMBER() OVER (ORDER BY date_col) AS grp
\`\`\`

Then \`GROUP BY grp\` reveals each consecutive interval's start and end dates.`,
        },
        defaultCode: `CREATE TABLE logins (
    user_id    INTEGER,
    login_date TEXT
);

INSERT INTO logins VALUES
    (1, '2024-01-01'), (1, '2024-01-02'), (1, '2024-01-03'),
    (1, '2024-01-05'),                    -- 缺口：1/4 未登入
    (1, '2024-01-07'), (1, '2024-01-08'),
    (2, '2024-01-01'),
    (2, '2024-01-03'), (2, '2024-01-04'), (2, '2024-01-05');

-- 找出連續登入區間（孤島）
SELECT '=== 連續登入區間 ===' AS info;
WITH numbered AS (
    SELECT
        user_id,
        login_date,
        -- 連續日期的 date - row_number 值相同
        julianday(login_date) -
            ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)
            AS grp
    FROM logins
)
SELECT
    user_id,
    MIN(login_date) AS streak_start,
    MAX(login_date) AS streak_end,
    COUNT(*)        AS consecutive_days
FROM numbered
GROUP BY user_id, grp
ORDER BY user_id, streak_start;

-- 找出最長連續登入紀錄
SELECT '=== 最長連續登入 ===' AS info;
WITH numbered AS (
    SELECT user_id, login_date,
        julianday(login_date) -
            ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) AS grp
    FROM logins
),
streaks AS (
    SELECT user_id, COUNT(*) AS days
    FROM numbered GROUP BY user_id, grp
)
SELECT user_id, MAX(days) AS max_streak
FROM streaks GROUP BY user_id ORDER BY user_id;`,
        exercise: {
          question: {
            "zh-TW": "找出每位使用者「缺口」的日期（未登入的天數），計算最長的連續未登入天數。",
            en: "Find the gap dates (days without login) for each user and calculate their longest gap.",
          },
          hint: {
            "zh-TW": "用 LAG(login_date) OVER (ORDER BY login_date) 取前一天，若差距 > 1 天即為缺口",
            en: "Use LAG(login_date) OVER (ORDER BY login_date) to get the previous day; if the gap > 1 day, it's a gap",
          },
          answer: `CREATE TABLE logins (user_id INTEGER, login_date TEXT);
INSERT INTO logins VALUES
(1,'2024-01-01'),(1,'2024-01-02'),(1,'2024-01-03'),
(1,'2024-01-05'),(1,'2024-01-07'),(1,'2024-01-08'),
(2,'2024-01-01'),(2,'2024-01-03'),(2,'2024-01-04'),(2,'2024-01-05');

-- 找出各缺口的天數
WITH gaps AS (
    SELECT
        user_id,
        LAG(login_date) OVER (PARTITION BY user_id ORDER BY login_date) AS prev_date,
        login_date AS curr_date,
        CAST(julianday(login_date) -
             julianday(LAG(login_date) OVER (PARTITION BY user_id ORDER BY login_date))
             AS INTEGER) - 1 AS gap_days
    FROM logins
)
SELECT user_id, prev_date AS gap_start, curr_date AS gap_end, gap_days
FROM gaps
WHERE gap_days > 0
ORDER BY user_id, gap_start;`,
        },
      },
    ],
  },
];

export default chapters;
