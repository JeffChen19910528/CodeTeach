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
        id: "order-by",
        title: { "zh-TW": "ORDER BY 排序", en: "ORDER BY Sorting" },
        content: {
          "zh-TW": `## ORDER BY 排序

\`ORDER BY\` 用來依欄位排序查詢結果。

### 基本語法

\`\`\`sql
SELECT 欄位 FROM 資料表 ORDER BY 欄位 ASC;   -- 升序（預設）
SELECT 欄位 FROM 資料表 ORDER BY 欄位 DESC;  -- 降序
\`\`\`

### 多欄位排序

\`\`\`sql
-- 先按部門升序，同部門再按薪資降序
SELECT name, dept, salary
FROM employees
ORDER BY dept ASC, salary DESC;
\`\`\`

### LIMIT — 限制回傳筆數

\`\`\`sql
SELECT * FROM products ORDER BY price DESC LIMIT 5;  -- 最貴的前 5 筆
SELECT * FROM products ORDER BY price ASC  LIMIT 3;  -- 最便宜的前 3 筆
\`\`\`

### LIMIT + OFFSET — 分頁查詢

\`\`\`sql
-- 第 2 頁（每頁 5 筆）
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 5;
\`\`\``,
          en: `## ORDER BY Sorting

\`ORDER BY\` sorts query results by one or more columns.

### Basic Syntax

\`\`\`sql
SELECT col FROM table ORDER BY col ASC;   -- ascending (default)
SELECT col FROM table ORDER BY col DESC;  -- descending
\`\`\`

### Multi-column Sort

\`\`\`sql
-- Sort by dept ascending, then salary descending within each dept
SELECT name, dept, salary
FROM employees
ORDER BY dept ASC, salary DESC;
\`\`\`

### LIMIT — Restrict Number of Rows

\`\`\`sql
SELECT * FROM products ORDER BY price DESC LIMIT 5;  -- top 5 most expensive
SELECT * FROM products ORDER BY price ASC  LIMIT 3;  -- 3 cheapest
\`\`\`

### LIMIT + OFFSET — Pagination

\`\`\`sql
-- Page 2 (5 rows per page)
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 5;
\`\`\``,
        },
        defaultCode: `CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT,
  category TEXT,
  price    REAL,
  stock    INTEGER
);

INSERT INTO products VALUES (1, 'Laptop',     'Electronics', 999.99,  50);
INSERT INTO products VALUES (2, 'Mouse',      'Electronics',  29.99, 200);
INSERT INTO products VALUES (3, 'Desk',       'Furniture',   349.00,  30);
INSERT INTO products VALUES (4, 'Chair',      'Furniture',   199.00,  45);
INSERT INTO products VALUES (5, 'Keyboard',   'Electronics',  79.99, 150);
INSERT INTO products VALUES (6, 'Monitor',    'Electronics', 399.00,  60);
INSERT INTO products VALUES (7, 'Bookshelf',  'Furniture',   129.00,  25);
INSERT INTO products VALUES (8, 'Headphones', 'Electronics', 149.99,  80);

-- 依價格降序排列
SELECT '=== 依價格由高到低 ===' AS info;
SELECT name, category, price FROM products ORDER BY price DESC;

-- 多欄位排序：先分類，同類再按價格
SELECT '=== 依分類+價格排序 ===' AS info;
SELECT name, category, price
FROM products
ORDER BY category ASC, price DESC;

-- 前 3 貴的商品
SELECT '=== 最貴的前 3 筆 ===' AS info;
SELECT name, price FROM products ORDER BY price DESC LIMIT 3;

-- 分頁：第 2 頁（每頁 3 筆）
SELECT '=== 第 2 頁（每頁 3 筆）===' AS info;
SELECT name, price FROM products ORDER BY id LIMIT 3 OFFSET 3;`,
      },
      {
        id: "distinct",
        title: { "zh-TW": "DISTINCT 去除重複", en: "DISTINCT" },
        content: {
          "zh-TW": `## DISTINCT — 去除重複值

\`SELECT DISTINCT\` 只回傳唯一值，消除重複列。

### 基本用法

\`\`\`sql
SELECT DISTINCT country FROM customers;
SELECT DISTINCT category FROM products;
\`\`\`

### 多欄位 DISTINCT

多欄位時，**所有欄位的組合**必須唯一：

\`\`\`sql
SELECT DISTINCT category, brand FROM products;
-- 同一 category + brand 的組合只出現一次
\`\`\`

### 搭配 COUNT

\`\`\`sql
SELECT COUNT(DISTINCT country) AS unique_countries FROM customers;
\`\`\`

### DISTINCT vs GROUP BY

兩者都能去重，但 GROUP BY 可以搭配聚合函式：

\`\`\`sql
SELECT DISTINCT dept FROM employees;
-- 等同於：
SELECT dept FROM employees GROUP BY dept;
\`\`\``,
          en: `## DISTINCT — Remove Duplicate Values

\`SELECT DISTINCT\` returns only unique values, eliminating duplicate rows.

### Basic Usage

\`\`\`sql
SELECT DISTINCT country FROM customers;
SELECT DISTINCT category FROM products;
\`\`\`

### Multi-column DISTINCT

With multiple columns, the **combination** of all columns must be unique:

\`\`\`sql
SELECT DISTINCT category, brand FROM products;
-- Each category + brand combo appears only once
\`\`\`

### Combined with COUNT

\`\`\`sql
SELECT COUNT(DISTINCT country) AS unique_countries FROM customers;
\`\`\`

### DISTINCT vs GROUP BY

Both deduplicate, but GROUP BY can use aggregate functions:

\`\`\`sql
SELECT DISTINCT dept FROM employees;
-- equivalent to:
SELECT dept FROM employees GROUP BY dept;
\`\`\``,
        },
        defaultCode: `CREATE TABLE orders (
  id         INTEGER PRIMARY KEY,
  customer   TEXT,
  country    TEXT,
  category   TEXT,
  amount     REAL
);

INSERT INTO orders VALUES (1,  'Alice',   'Taiwan', 'Electronics', 500);
INSERT INTO orders VALUES (2,  'Bob',     'Japan',  'Furniture',   300);
INSERT INTO orders VALUES (3,  'Alice',   'Taiwan', 'Furniture',   200);
INSERT INTO orders VALUES (4,  'Carol',   'Japan',  'Electronics', 800);
INSERT INTO orders VALUES (5,  'Dave',    'Taiwan', 'Electronics', 450);
INSERT INTO orders VALUES (6,  'Eve',     'Korea',  'Furniture',   600);
INSERT INTO orders VALUES (7,  'Frank',   'Japan',  'Electronics', 350);
INSERT INTO orders VALUES (8,  'Alice',   'Taiwan', 'Electronics', 700);

-- 不重複的國家
SELECT '=== 所有國家（去重）===' AS info;
SELECT DISTINCT country FROM orders ORDER BY country;

-- 不重複的 國家+分類 組合
SELECT '=== 國家+分類（去重）===' AS info;
SELECT DISTINCT country, category FROM orders ORDER BY country, category;

-- 計算不重複客戶數
SELECT '=== 不重複客戶數 ===' AS info;
SELECT COUNT(DISTINCT customer) AS unique_customers FROM orders;

-- 每個分類的訂單數
SELECT '=== 各分類筆數 ===' AS info;
SELECT category, COUNT(*) AS order_count
FROM orders GROUP BY category ORDER BY order_count DESC;`,
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
    id: "sql-functions",
    title: { "zh-TW": "SQL 內建函式", en: "SQL Built-in Functions" },
    lessons: [
      {
        id: "string-functions",
        title: { "zh-TW": "字串函式", en: "String Functions" },
        content: {
          "zh-TW": `## 字串函式（String Functions）

SQLite 提供多種字串處理函式，與 W3Schools 介紹的標準 SQL 函式一致。

| 函式 | 說明 | 範例 |
|------|------|------|
| \`LENGTH(s)\` | 字元長度 | \`LENGTH('Hello') → 5\` |
| \`UPPER(s)\` | 全大寫 | \`UPPER('hello') → 'HELLO'\` |
| \`LOWER(s)\` | 全小寫 | \`LOWER('HELLO') → 'hello'\` |
| \`TRIM(s)\` | 去除首尾空白 | \`TRIM('  Hi  ') → 'Hi'\` |
| \`LTRIM(s)\` | 去除左側空白 | \`LTRIM('  Hi') → 'Hi'\` |
| \`RTRIM(s)\` | 去除右側空白 | \`RTRIM('Hi  ') → 'Hi'\` |
| \`SUBSTR(s,start,len)\` | 擷取子字串 | \`SUBSTR('Python',1,3) → 'Pyt'\` |
| \`REPLACE(s,old,new)\` | 取代子字串 | \`REPLACE('Hello','l','r') → 'Herro'\` |
| \`INSTR(s,sub)\` | 尋找子字串位置 | \`INSTR('Hello','ll') → 3\` |
| \`s1 \|\| s2\` | 字串串接 | \`'Hello' \|\| ' World' → 'Hello World'\` |

> **注意**：SQLite 的 \`SUBSTR\` 索引從 **1** 開始（不是 0）。`,
          en: `## String Functions

SQLite provides many string functions consistent with W3Schools standard SQL.

| Function | Description | Example |
|----------|-------------|---------|
| \`LENGTH(s)\` | Character length | \`LENGTH('Hello') → 5\` |
| \`UPPER(s)\` | Uppercase | \`UPPER('hello') → 'HELLO'\` |
| \`LOWER(s)\` | Lowercase | \`LOWER('HELLO') → 'hello'\` |
| \`TRIM(s)\` | Remove leading/trailing spaces | \`TRIM('  Hi  ') → 'Hi'\` |
| \`LTRIM(s)\` | Remove leading spaces | \`LTRIM('  Hi') → 'Hi'\` |
| \`RTRIM(s)\` | Remove trailing spaces | \`RTRIM('Hi  ') → 'Hi'\` |
| \`SUBSTR(s,start,len)\` | Extract substring | \`SUBSTR('Python',1,3) → 'Pyt'\` |
| \`REPLACE(s,old,new)\` | Replace substring | \`REPLACE('Hello','l','r') → 'Herro'\` |
| \`INSTR(s,sub)\` | Find substring position | \`INSTR('Hello','ll') → 3\` |
| \`s1 \|\| s2\` | Concatenate strings | \`'Hello' \|\| ' World' → 'Hello World'\` |

> **Note**: SQLite's \`SUBSTR\` index starts at **1** (not 0).`,
        },
        defaultCode: `CREATE TABLE customers (
  id      INTEGER PRIMARY KEY,
  name    TEXT,
  email   TEXT,
  country TEXT
);

INSERT INTO customers VALUES (1, '  Alice Smith  ', 'ALICE@example.COM', 'taiwan');
INSERT INTO customers VALUES (2, 'bob johnson',     'bob@Example.com',   'japan');
INSERT INTO customers VALUES (3, 'Carol  White',    'Carol@EXAMPLE.com', 'Korea');
INSERT INTO customers VALUES (4, 'dave brown',      'Dave@example.com',  'taiwan');

-- 字串函式示範
SELECT '=== 字串函式 ===' AS info;
SELECT
  TRIM(name)                          AS clean_name,
  LENGTH(TRIM(name))                  AS name_len,
  UPPER(TRIM(name))                   AS upper_name,
  LOWER(email)                        AS lower_email,
  UPPER(SUBSTR(country, 1, 1)) || LOWER(SUBSTR(country, 2)) AS proper_country
FROM customers;

-- 擷取 email 的 @ 前後部分
SELECT '=== 解析 Email ===' AS info;
SELECT
  LOWER(email) AS email,
  SUBSTR(LOWER(email), 1, INSTR(email, '@') - 1) AS username,
  SUBSTR(LOWER(email), INSTR(email, '@') + 1)    AS domain
FROM customers;

-- 字串串接：產生全名標準格式
SELECT '=== 格式化輸出 ===' AS info;
SELECT
  id || '. ' || TRIM(name) || ' (' || LOWER(email) || ')' AS formatted
FROM customers
ORDER BY id;`,
        exercise: {
          question: {
            "zh-TW": "找出 name 欄位中，實際名字（去除空白後）長度超過 10 個字元的客戶，並輸出大寫姓名與名字長度。",
            en: "Find customers whose name (after trimming) is longer than 10 characters. Output the uppercase name and its length.",
          },
          hint: {
            "zh-TW": "WHERE LENGTH(TRIM(name)) > 10，再用 UPPER(TRIM(name))",
            en: "WHERE LENGTH(TRIM(name)) > 10, then UPPER(TRIM(name))",
          },
          answer: `CREATE TABLE customers (id INTEGER, name TEXT, email TEXT, country TEXT);
INSERT INTO customers VALUES (1,'  Alice Smith  ','alice@example.com','taiwan');
INSERT INTO customers VALUES (2,'bob johnson','bob@example.com','japan');
INSERT INTO customers VALUES (3,'Carol  White','carol@example.com','Korea');
INSERT INTO customers VALUES (4,'dave brown','dave@example.com','taiwan');

SELECT
  UPPER(TRIM(name)) AS upper_name,
  LENGTH(TRIM(name)) AS name_length
FROM customers
WHERE LENGTH(TRIM(name)) > 10
ORDER BY name_length DESC;`,
        },
      },
      {
        id: "numeric-functions",
        title: { "zh-TW": "數值與 NULL 函式", en: "Numeric & NULL Functions" },
        content: {
          "zh-TW": `## 數值函式

| 函式 | 說明 | 範例 |
|------|------|------|
| \`ROUND(x, n)\` | 四捨五入到 n 位小數 | \`ROUND(3.456, 2) → 3.46\` |
| \`ABS(x)\` | 絕對值 | \`ABS(-5) → 5\` |
| \`CAST(x AS type)\` | 型別轉換 | \`CAST('42' AS INTEGER)\` |
| \`MAX(x, y, ...)\` | 最大值（非聚合） | SQLite 不支援此形式，用 CASE |
| \`MIN(x, y, ...)\` | 最小值（非聚合） | 同上 |

## NULL 函式

| 函式 | 說明 | 範例 |
|------|------|------|
| \`IFNULL(x, default)\` | x 為 NULL 時回傳預設值 | \`IFNULL(NULL, 0) → 0\` |
| \`COALESCE(x, y, ...)\` | 回傳第一個非 NULL 值 | \`COALESCE(NULL, NULL, 3) → 3\` |
| \`NULLIF(x, y)\` | 若 x=y 回傳 NULL，否則回傳 x | \`NULLIF(5, 5) → NULL\` |

\`COALESCE\` 是處理 NULL 最通用的函式，標準 SQL 均支援。`,
          en: `## Numeric Functions

| Function | Description | Example |
|----------|-------------|---------|
| \`ROUND(x, n)\` | Round to n decimal places | \`ROUND(3.456, 2) → 3.46\` |
| \`ABS(x)\` | Absolute value | \`ABS(-5) → 5\` |
| \`CAST(x AS type)\` | Type conversion | \`CAST('42' AS INTEGER)\` |

## NULL Functions

| Function | Description | Example |
|----------|-------------|---------|
| \`IFNULL(x, default)\` | Return default when x is NULL | \`IFNULL(NULL, 0) → 0\` |
| \`COALESCE(x, y, ...)\` | Return first non-NULL value | \`COALESCE(NULL, NULL, 3) → 3\` |
| \`NULLIF(x, y)\` | Return NULL if x=y, else x | \`NULLIF(5, 5) → NULL\` |

\`COALESCE\` is the most portable NULL-handling function, supported in all standard SQL.`,
        },
        defaultCode: `CREATE TABLE sales (
  id        INTEGER PRIMARY KEY,
  rep       TEXT,
  q1        REAL,
  q2        REAL,
  q3        REAL,
  q4        REAL
);

INSERT INTO sales VALUES (1, 'Alice', 12000.5, 15000.0, NULL,    18000.3);
INSERT INTO sales VALUES (2, 'Bob',   NULL,    8000.2,  9500.0,  NULL);
INSERT INTO sales VALUES (3, 'Carol', 11000.0, NULL,    13500.0, 14000.0);
INSERT INTO sales VALUES (4, 'Dave',  9800.7,  10200.0, 11000.0, 12500.5);

-- NULL 函式：用 0 代替 NULL（COALESCE）
SELECT '=== 以 0 填補 NULL ===' AS info;
SELECT
  rep,
  COALESCE(q1, 0) AS q1,
  COALESCE(q2, 0) AS q2,
  COALESCE(q3, 0) AS q3,
  COALESCE(q4, 0) AS q4,
  ROUND(COALESCE(q1,0)+COALESCE(q2,0)+COALESCE(q3,0)+COALESCE(q4,0), 2) AS total
FROM sales
ORDER BY total DESC;

-- ROUND 與 ABS 示範
SELECT '=== 數值函式 ===' AS info;
SELECT
  rep,
  ROUND(COALESCE(q1,0), 0) AS q1_rounded,
  ABS(COALESCE(q1,0) - COALESCE(q2,0)) AS q1_q2_diff,
  CAST(COALESCE(q1,0) AS INTEGER) AS q1_int
FROM sales;

-- NULLIF：計算平均時排除特定值
SELECT '=== NULLIF 示範 ===' AS info;
SELECT rep,
  NULLIF(COALESCE(q1,0), 0) AS q1_or_null
FROM sales;`,
        exercise: {
          question: {
            "zh-TW": "計算每位業務代表的年度平均業績（只計算非 NULL 的季度），用 ROUND 四捨五入到整數位。提示：NULL 值在 AVG 中自動被排除。",
            en: "Calculate each rep's annual average sales (only non-NULL quarters). Use ROUND to round to whole numbers. Hint: NULL values are automatically excluded from AVG.",
          },
          hint: {
            "zh-TW": "SELECT rep, ROUND(AVG(quarter_sales)) — 先用 UNION ALL 把四季轉成行，再 GROUP BY rep",
            en: "Use AVG on a UNION ALL of all four quarters, then GROUP BY rep",
          },
          answer: `CREATE TABLE sales (id INTEGER, rep TEXT, q1 REAL, q2 REAL, q3 REAL, q4 REAL);
INSERT INTO sales VALUES (1,'Alice',12000.5,15000.0,NULL,18000.3);
INSERT INTO sales VALUES (2,'Bob',NULL,8000.2,9500.0,NULL);
INSERT INTO sales VALUES (3,'Carol',11000.0,NULL,13500.0,14000.0);
INSERT INTO sales VALUES (4,'Dave',9800.7,10200.0,11000.0,12500.5);

WITH all_quarters AS (
  SELECT rep, q1 AS sales FROM sales
  UNION ALL SELECT rep, q2 FROM sales
  UNION ALL SELECT rep, q3 FROM sales
  UNION ALL SELECT rep, q4 FROM sales
)
SELECT rep, ROUND(AVG(sales)) AS avg_quarterly
FROM all_quarters
WHERE sales IS NOT NULL
GROUP BY rep
ORDER BY avg_quarterly DESC;`,
        },
      },
      {
        id: "date-functions",
        title: { "zh-TW": "日期函式", en: "Date Functions" },
        content: {
          "zh-TW": `## 日期函式（SQLite）

SQLite 將日期儲存為文字（\`'YYYY-MM-DD'\`）並提供豐富的日期函式。

| 函式 | 說明 | 範例結果 |
|------|------|---------|
| \`DATE('now')\` | 今天日期 | \`'2024-03-15'\` |
| \`DATETIME('now')\` | 現在日期+時間 | \`'2024-03-15 10:30:00'\` |
| \`DATE(d, '+N days')\` | 加 N 天 | \`DATE('2024-01-01', '+7 days')\` |
| \`DATE(d, '-N months')\` | 減 N 月 | \`DATE('2024-03-01', '-1 month')\` |
| \`strftime(fmt, d)\` | 格式化日期 | \`strftime('%Y', '2024-03-15') → '2024'\` |
| \`julianday(d)\` | 儒略日數值 | 用於計算日期差 |

### 常用 strftime 格式碼

| 格式 | 意義 |
|------|------|
| \`%Y\` | 四位年份 |
| \`%m\` | 月份（01-12） |
| \`%d\` | 日期（01-31） |
| \`%H\` | 小時（00-23） |
| \`%w\` | 星期（0=日，6=六） |

### 計算日期差

\`\`\`sql
-- 相差天數
CAST(julianday('2024-03-15') - julianday('2024-01-01') AS INTEGER) → 74
\`\`\``,
          en: `## Date Functions (SQLite)

SQLite stores dates as text (\`'YYYY-MM-DD'\`) and provides rich date functions.

| Function | Description | Example Result |
|----------|-------------|----------------|
| \`DATE('now')\` | Today's date | \`'2024-03-15'\` |
| \`DATETIME('now')\` | Current date + time | \`'2024-03-15 10:30:00'\` |
| \`DATE(d, '+N days')\` | Add N days | \`DATE('2024-01-01', '+7 days')\` |
| \`DATE(d, '-N months')\` | Subtract N months | \`DATE('2024-03-01', '-1 month')\` |
| \`strftime(fmt, d)\` | Format date | \`strftime('%Y', '2024-03-15') → '2024'\` |
| \`julianday(d)\` | Julian day number | Used to calculate date differences |

### Common strftime Format Codes

| Format | Meaning |
|--------|---------|
| \`%Y\` | 4-digit year |
| \`%m\` | Month (01-12) |
| \`%d\` | Day (01-31) |
| \`%H\` | Hour (00-23) |
| \`%w\` | Weekday (0=Sun, 6=Sat) |

### Calculate Date Difference

\`\`\`sql
CAST(julianday('2024-03-15') - julianday('2024-01-01') AS INTEGER) → 74
\`\`\``,
        },
        defaultCode: `CREATE TABLE orders (
  id         INTEGER PRIMARY KEY,
  customer   TEXT,
  order_date TEXT,
  ship_date  TEXT,
  amount     REAL
);

INSERT INTO orders VALUES (1, 'Alice', '2024-01-05', '2024-01-08', 299.99);
INSERT INTO orders VALUES (2, 'Bob',   '2024-01-20', '2024-01-25', 89.00);
INSERT INTO orders VALUES (3, 'Carol', '2024-02-14', '2024-02-17', 450.50);
INSERT INTO orders VALUES (4, 'Dave',  '2024-03-01', '2024-03-06', 175.25);
INSERT INTO orders VALUES (5, 'Alice', '2024-03-15', NULL,         620.00);  -- 尚未出貨

-- 日期格式化
SELECT '=== 格式化日期 ===' AS info;
SELECT
  id, customer, order_date,
  strftime('%Y', order_date)       AS year,
  strftime('%m', order_date)       AS month,
  strftime('%d', order_date)       AS day,
  CASE strftime('%w', order_date)
    WHEN '0' THEN '日' WHEN '1' THEN '一' WHEN '2' THEN '二'
    WHEN '3' THEN '三' WHEN '4' THEN '四' WHEN '5' THEN '五'
    ELSE '六'
  END AS weekday
FROM orders;

-- 計算配送天數
SELECT '=== 配送天數 ===' AS info;
SELECT
  id, customer,
  order_date, ship_date,
  CAST(julianday(IFNULL(ship_date, DATE('now'))) - julianday(order_date) AS INTEGER) AS days_to_ship,
  CASE WHEN ship_date IS NULL THEN '待出貨' ELSE '已出貨' END AS status
FROM orders;

-- 按月份統計訂單數與金額
SELECT '=== 月份統計 ===' AS info;
SELECT
  strftime('%Y-%m', order_date) AS month,
  COUNT(*)                      AS order_count,
  ROUND(SUM(amount), 2)         AS total_amount
FROM orders
GROUP BY strftime('%Y-%m', order_date)
ORDER BY month;`,
        exercise: {
          question: {
            "zh-TW": "找出下單日期在 2024 年 Q1（1-3月）的所有訂單，並計算每月的平均訂單金額（用 ROUND 保留 2 位小數）。",
            en: "Find all orders placed in Q1 2024 (January–March) and calculate the average order amount per month (rounded to 2 decimal places).",
          },
          hint: {
            "zh-TW": "WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'，GROUP BY strftime('%m', order_date)",
            en: "WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31', GROUP BY strftime('%m', order_date)",
          },
          answer: `CREATE TABLE orders (id INTEGER, customer TEXT, order_date TEXT, ship_date TEXT, amount REAL);
INSERT INTO orders VALUES (1,'Alice','2024-01-05','2024-01-08',299.99);
INSERT INTO orders VALUES (2,'Bob','2024-01-20','2024-01-25',89.00);
INSERT INTO orders VALUES (3,'Carol','2024-02-14','2024-02-17',450.50);
INSERT INTO orders VALUES (4,'Dave','2024-03-01','2024-03-06',175.25);
INSERT INTO orders VALUES (5,'Alice','2024-03-15',NULL,620.00);

SELECT
  strftime('%Y-%m', order_date) AS month,
  COUNT(*) AS orders,
  ROUND(AVG(amount), 2) AS avg_amount
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'
GROUP BY strftime('%m', order_date)
ORDER BY month;`,
        },
      },
    ],
  },
  {
    id: "advanced-queries",
    title: { "zh-TW": "進階查詢", en: "Advanced Queries" },
    lessons: [
      {
        id: "subquery",
        title: { "zh-TW": "子查詢（Subquery）", en: "Subqueries" },
        content: {
          "zh-TW": `## 子查詢（Subquery）

子查詢是嵌套在另一個 SQL 語句內的 SELECT，可用於 WHERE、FROM、SELECT 子句。

### 純量子查詢（Scalar Subquery）

回傳**單一值**，用於 WHERE 或 SELECT：

\`\`\`sql
-- 找出薪資高於公司平均的員工
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\`

### IN 子查詢

\`\`\`sql
-- 找出有下單的客戶
SELECT name FROM customers
WHERE id IN (SELECT DISTINCT customer_id FROM orders);
\`\`\`

### EXISTS 子查詢

\`EXISTS\` 比 \`IN\` 更有效率，只要子查詢有任何一列存在就回傳 True：

\`\`\`sql
SELECT name FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
\`\`\`

### FROM 子查詢（衍生資料表）

\`\`\`sql
SELECT dept, avg_sal FROM (
  SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept
) WHERE avg_sal > 70000;
\`\`\``,
          en: `## Subqueries

A subquery is a SELECT nested inside another SQL statement. It can appear in WHERE, FROM, or SELECT clauses.

### Scalar Subquery

Returns a **single value**, used in WHERE or SELECT:

\`\`\`sql
-- Find employees earning above company average
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\`

### IN Subquery

\`\`\`sql
-- Find customers who have placed orders
SELECT name FROM customers
WHERE id IN (SELECT DISTINCT customer_id FROM orders);
\`\`\`

### EXISTS Subquery

\`EXISTS\` is more efficient than \`IN\` for large datasets — returns True if any row exists:

\`\`\`sql
SELECT name FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
\`\`\`

### FROM Subquery (Derived Table)

\`\`\`sql
SELECT dept, avg_sal FROM (
  SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept
) WHERE avg_sal > 70000;
\`\`\``,
        },
        defaultCode: `CREATE TABLE employees (
  id     INTEGER PRIMARY KEY,
  name   TEXT,
  dept   TEXT,
  salary INTEGER
);

CREATE TABLE projects (
  proj_id INTEGER PRIMARY KEY,
  emp_id  INTEGER,
  name    TEXT
);

INSERT INTO employees VALUES (1,'Alice','Engineering',95000);
INSERT INTO employees VALUES (2,'Bob','Marketing',62000);
INSERT INTO employees VALUES (3,'Carol','Engineering',88000);
INSERT INTO employees VALUES (4,'Dave','HR',55000);
INSERT INTO employees VALUES (5,'Eve','Marketing',75000);
INSERT INTO employees VALUES (6,'Frank','Engineering',102000);

INSERT INTO projects VALUES (1,1,'Cloud Migration');
INSERT INTO projects VALUES (2,3,'API Redesign');
INSERT INTO projects VALUES (3,5,'Ad Campaign');
INSERT INTO projects VALUES (4,1,'Security Audit');

-- 純量子查詢：薪資高於平均的員工
SELECT '=== 薪資高於平均 ===' AS info;
SELECT name, dept, salary,
  (SELECT ROUND(AVG(salary)) FROM employees) AS company_avg
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC;

-- IN 子查詢：有參與專案的員工
SELECT '=== 有參與專案的員工 ===' AS info;
SELECT name, dept FROM employees
WHERE id IN (SELECT DISTINCT emp_id FROM projects)
ORDER BY name;

-- EXISTS 子查詢（等效）
SELECT '=== EXISTS 寫法 ===' AS info;
SELECT name, dept FROM employees e
WHERE EXISTS (SELECT 1 FROM projects p WHERE p.emp_id = e.id)
ORDER BY name;

-- FROM 子查詢：各部門平均薪資高於 70000
SELECT '=== 高薪部門 ===' AS info;
SELECT dept, avg_salary FROM (
  SELECT dept, ROUND(AVG(salary)) AS avg_salary
  FROM employees GROUP BY dept
) WHERE avg_salary > 70000
ORDER BY avg_salary DESC;`,
        exercise: {
          question: {
            "zh-TW": "找出薪資比**自己部門**平均薪資還高的員工（相關子查詢）。提示：子查詢中用 e2.dept = e.dept 關聯外層查詢。",
            en: "Find employees whose salary is above their **own department's** average (correlated subquery). Hint: use e2.dept = e.dept in the subquery.",
          },
          hint: {
            "zh-TW": "WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept = e.dept)",
            en: "WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept = e.dept)",
          },
          answer: `CREATE TABLE employees (id INTEGER, name TEXT, dept TEXT, salary INTEGER);
INSERT INTO employees VALUES (1,'Alice','Engineering',95000),(2,'Bob','Marketing',62000),
(3,'Carol','Engineering',88000),(4,'Dave','HR',55000),(5,'Eve','Marketing',75000),
(6,'Frank','Engineering',102000);

SELECT name, dept, salary,
  ROUND((SELECT AVG(salary) FROM employees e2 WHERE e2.dept = e.dept)) AS dept_avg
FROM employees e
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept = e.dept)
ORDER BY dept, salary DESC;`,
        },
      },
      {
        id: "union",
        title: { "zh-TW": "UNION / UNION ALL", en: "UNION / UNION ALL" },
        content: {
          "zh-TW": `## UNION — 合併多個查詢結果

\`UNION\` 將兩個 SELECT 的結果垂直合併，欄位數量與型別必須相符。

### UNION vs UNION ALL

| | UNION | UNION ALL |
|-|-------|-----------|
| 重複列 | 自動去除 | 保留所有列 |
| 速度 | 較慢（需排序去重） | 較快 |
| 使用時機 | 需要唯一結果 | 允許重複 |

### 基本語法

\`\`\`sql
SELECT name, 'Customer' AS role FROM customers
UNION
SELECT name, 'Employee' AS role FROM employees;
\`\`\`

### 實際應用場景

\`\`\`sql
-- 合併不同狀態的訂單
SELECT id, 'pending' AS status FROM pending_orders
UNION ALL
SELECT id, 'shipped' AS status FROM shipped_orders;

-- 找出兩份名單的交集（模擬 INTERSECT）
SELECT name FROM list_a
WHERE name IN (SELECT name FROM list_b);
\`\`\``,
          en: `## UNION — Combine Multiple Query Results

\`UNION\` vertically merges results from two SELECT statements. Column count and types must match.

### UNION vs UNION ALL

| | UNION | UNION ALL |
|-|-------|-----------|
| Duplicate rows | Removed | Kept |
| Speed | Slower (sort + dedup) | Faster |
| Use when | Need unique results | Duplicates OK |

### Basic Syntax

\`\`\`sql
SELECT name, 'Customer' AS role FROM customers
UNION
SELECT name, 'Employee' AS role FROM employees;
\`\`\`

### Real-world Use Cases

\`\`\`sql
-- Combine orders from different status tables
SELECT id, 'pending' AS status FROM pending_orders
UNION ALL
SELECT id, 'shipped' AS status FROM shipped_orders;
\`\`\``,
        },
        defaultCode: `CREATE TABLE customers_2023 (id INTEGER, name TEXT, city TEXT, amount REAL);
CREATE TABLE customers_2024 (id INTEGER, name TEXT, city TEXT, amount REAL);

INSERT INTO customers_2023 VALUES (1,'Alice','Taipei',1200);
INSERT INTO customers_2023 VALUES (2,'Bob','Kaohsiung',800);
INSERT INTO customers_2023 VALUES (3,'Carol','Taipei',650);

INSERT INTO customers_2024 VALUES (1,'Alice','Taipei',1500);  -- 回購客戶
INSERT INTO customers_2024 VALUES (4,'Dave','Taichung',900);
INSERT INTO customers_2024 VALUES (5,'Eve','Kaohsiung',1100);
INSERT INTO customers_2024 VALUES (2,'Bob','Kaohsiung',300);  -- 回購客戶

-- UNION：兩年所有不重複客戶
SELECT '=== UNION（去除重複）===' AS info;
SELECT name, city FROM customers_2023
UNION
SELECT name, city FROM customers_2024
ORDER BY name;

-- UNION ALL：完整明細（含重複）
SELECT '=== UNION ALL（保留全部）===' AS info;
SELECT name, city, amount, '2023' AS year FROM customers_2023
UNION ALL
SELECT name, city, amount, '2024' AS year FROM customers_2024
ORDER BY name, year;

-- 用 UNION ALL 計算每人跨年度總消費
SELECT '=== 跨年度客戶消費 ===' AS info;
SELECT name, SUM(amount) AS total, COUNT(*) AS years_count
FROM (
  SELECT name, amount FROM customers_2023
  UNION ALL
  SELECT name, amount FROM customers_2024
)
GROUP BY name
ORDER BY total DESC;`,
        exercise: {
          question: {
            "zh-TW": "找出「只在 2023 年」消費而 2024 年沒有的客戶（用 NOT IN 或 NOT EXISTS 搭配 UNION 的概念）。",
            en: "Find customers who purchased in 2023 but NOT in 2024 (use NOT IN or NOT EXISTS).",
          },
          hint: {
            "zh-TW": "SELECT name FROM customers_2023 WHERE name NOT IN (SELECT name FROM customers_2024)",
            en: "SELECT name FROM customers_2023 WHERE name NOT IN (SELECT name FROM customers_2024)",
          },
          answer: `CREATE TABLE customers_2023 (id INTEGER, name TEXT, city TEXT, amount REAL);
CREATE TABLE customers_2024 (id INTEGER, name TEXT, city TEXT, amount REAL);
INSERT INTO customers_2023 VALUES (1,'Alice','Taipei',1200),(2,'Bob','Kaohsiung',800),(3,'Carol','Taipei',650);
INSERT INTO customers_2024 VALUES (1,'Alice','Taipei',1500),(4,'Dave','Taichung',900),(5,'Eve','Kaohsiung',1100),(2,'Bob','Kaohsiung',300);

SELECT '=== 只在 2023 消費（2024 流失客戶）===' AS info;
SELECT name, city, amount AS amount_2023
FROM customers_2023
WHERE name NOT IN (SELECT name FROM customers_2024)
ORDER BY name;`,
        },
      },
      {
        id: "self-join",
        title: { "zh-TW": "SELF JOIN 自連結", en: "SELF JOIN" },
        content: {
          "zh-TW": `## SELF JOIN — 自身資料表連結

\`SELF JOIN\` 是資料表與自身進行連結，常見於「同一張表內的階層關係」。

### 使用時機

- **員工-主管**關係（同一張員工表）
- **朋友-朋友**推薦關係
- **產品-配件**父子關係

### 必須使用別名

\`\`\`sql
SELECT e.name AS employee, m.name AS manager
FROM employees AS e
LEFT JOIN employees AS m ON e.manager_id = m.id;
\`\`\`

兩個別名（\`e\` 和 \`m\`）都指向同一張表，\`ON\` 條件建立上下層關聯。

### 比較同表資料

\`\`\`sql
-- 找出同城市的客戶配對
SELECT a.name, b.name, a.city
FROM customers AS a
JOIN customers AS b ON a.city = b.city AND a.id < b.id;
-- a.id < b.id 避免重複（A-B 和 B-A）
\`\`\``,
          en: `## SELF JOIN

A SELF JOIN joins a table to itself. Most commonly used for hierarchical relationships within the same table.

### Use Cases

- **Employee-Manager** relationships (same employees table)
- **Friend-Friend** referrals
- **Product-Component** parent-child relationships

### Must Use Aliases

\`\`\`sql
SELECT e.name AS employee, m.name AS manager
FROM employees AS e
LEFT JOIN employees AS m ON e.manager_id = m.id;
\`\`\`

Both aliases (\`e\` and \`m\`) point to the same table; the \`ON\` condition links hierarchy levels.

### Compare Rows Within the Same Table

\`\`\`sql
-- Find customer pairs in the same city
SELECT a.name, b.name, a.city
FROM customers AS a
JOIN customers AS b ON a.city = b.city AND a.id < b.id;
-- a.id < b.id prevents duplicates (A-B and B-A)
\`\`\``,
        },
        defaultCode: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT,
  title      TEXT,
  salary     INTEGER,
  manager_id INTEGER  -- 指向同表的 id
);

INSERT INTO employees VALUES (1, 'Alice',  'CEO',         120000, NULL);
INSERT INTO employees VALUES (2, 'Bob',    'VP Eng',       95000, 1);
INSERT INTO employees VALUES (3, 'Carol',  'VP Sales',     90000, 1);
INSERT INTO employees VALUES (4, 'Dave',   'Sr. Engineer', 80000, 2);
INSERT INTO employees VALUES (5, 'Eve',    'Engineer',     70000, 2);
INSERT INTO employees VALUES (6, 'Frank',  'Sales Mgr',    75000, 3);
INSERT INTO employees VALUES (7, 'Grace',  'Sales Rep',    58000, 6);

-- SELF JOIN：員工與其直屬主管
SELECT '=== 員工-主管關係 ===' AS info;
SELECT
  e.name   AS employee,
  e.title  AS emp_title,
  e.salary AS emp_salary,
  COALESCE(m.name, '（無主管）') AS manager,
  m.title  AS mgr_title
FROM employees AS e
LEFT JOIN employees AS m ON e.manager_id = m.id
ORDER BY COALESCE(m.id, 0), e.id;

-- 找出薪資比主管高的員工
SELECT '=== 薪資比主管高的員工 ===' AS info;
SELECT e.name AS employee, e.salary AS emp_sal,
       m.name AS manager, m.salary AS mgr_sal
FROM employees AS e
JOIN employees AS m ON e.manager_id = m.id
WHERE e.salary > m.salary;`,
        exercise: {
          question: {
            "zh-TW": "找出同一位主管管轄下的所有員工配對（每對只出現一次，用 e1.id < e2.id 避免重複）。",
            en: "Find all employee pairs under the same manager (each pair once, use e1.id < e2.id to avoid duplicates).",
          },
          hint: {
            "zh-TW": "JOIN employees e2 ON e1.manager_id = e2.manager_id AND e1.id < e2.id",
            en: "JOIN employees e2 ON e1.manager_id = e2.manager_id AND e1.id < e2.id",
          },
          answer: `CREATE TABLE employees (id INTEGER, name TEXT, title TEXT, salary INTEGER, manager_id INTEGER);
INSERT INTO employees VALUES (1,'Alice','CEO',120000,NULL),(2,'Bob','VP Eng',95000,1),
(3,'Carol','VP Sales',90000,1),(4,'Dave','Sr. Engineer',80000,2),
(5,'Eve','Engineer',70000,2),(6,'Frank','Sales Mgr',75000,3),(7,'Grace','Sales Rep',58000,6);

SELECT e1.name AS emp1, e2.name AS emp2,
  COALESCE((SELECT name FROM employees WHERE id = e1.manager_id), 'CEO') AS shared_manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.manager_id AND e1.id < e2.id
ORDER BY shared_manager, e1.name;`,
        },
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
