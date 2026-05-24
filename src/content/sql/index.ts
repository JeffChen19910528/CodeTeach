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
];

export default chapters;
