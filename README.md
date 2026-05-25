# CodeTeach — 程式語言互動教學平台

基於 **Tauri 2.0 + React + TypeScript** 的跨平台桌面教學應用程式，支援 Windows / macOS / Linux。

參考 W3Schools 設計，提供：左側教學說明 + 右側線上程式碼編輯器 + 即時執行輸出，以及中英文內容切換。

---

## 快速啟動

### Windows

直接雙擊 **`start.bat`** 即可自動啟動並開啟瀏覽器。

- 首次執行會自動安裝套件（需 1-2 分鐘）
- 瀏覽器網址：**http://localhost:1420**
- 按任意鍵可停止伺服器並關閉視窗

### macOS / Linux

```bash
chmod +x start.sh
./start.sh
```

或手動執行：

```bash
npm install   # 僅首次需要
npm run dev
```

再開啟瀏覽器前往 **http://localhost:1420**

---

## 支援語言（TIOBE 2026 Top 10）

所有語言皆**不需使用者安裝任何編譯器或執行環境**即可執行。

| # | 語言 | 執行方式 | 需要網路 | 內建課程 | 線上擴充 |
|---|------|---------|---------|---------|---------|
| 1 | Python | WebAssembly (Pyodide) | 首次載入 | 13 課 | +13 課 |
| 2 | C | Wandbox 雲端 API | ✅ | 7 課 | +8 課 |
| 3 | Java | Wandbox 雲端 API | ✅ | 8 課 | +9 課 |
| 4 | C++ | Wandbox 雲端 API | ✅ | 8 課 | +8 課 |
| 5 | C# | Wandbox 雲端 API | ✅ | 8 課 | +8 課 |
| 6 | JavaScript | 瀏覽器原生執行 | ❌ 完全離線 | 10 課 | +12 課 |
| 7 | Visual Basic | Wandbox（VB→C# 轉譯）| ✅ | 7 課 | +6 課 |
| 8 | R | WebAssembly (WebR) | 首次載入 | 10 課 | +9 課 |
| 9 | SQL | Wandbox (SQLite) | ✅ | 8 課 | +9 課 |
| 10 | Delphi | Wandbox (Free Pascal) | ✅ | 7 課 | +6 課 |

> **線上擴充**：程式啟動時若偵測到網路，會自動從 GitHub 拉取 `content-updates.json`，新增進階課程、演算法實作、教科書經典範例等內容，快取 24 小時。

---

## 課程內容結構

### 內建靜態課程（離線可用）

| 主題 | 說明 |
|------|------|
| 入門介紹 | Hello World、語法、變數與資料型別 |
| 運算子 | 算術、比較、邏輯運算 |
| 流程控制 | if/else、switch、條件判斷 |
| 迴圈 | for、while、break/continue |
| 函式 | 定義、參數、回傳值 |
| 陣列/集合 | 陣列、清單、字典（依語言） |
| 物件導向 | 類別、建構子、繼承 |

### 線上擴充課程（有網路自動載入）

| 章節類型 | 內容 |
|---------|------|
| 例外處理 | try/catch、自訂例外、context manager |
| 進階特性 | 生成器、裝飾器、推導式、Lambda |
| 資料結構 | 鏈結串列、堆疊、佇列、HashMap |
| 演算法實作 | 快速排序、合併排序、二分搜尋、BFS/DFS |
| 動態規劃 | 背包問題、LCS、硬幣找零、LIS |
| 教科書經典 | 費波那契、氣泡排序、質數篩法、河內塔 |
| 進階查詢（SQL） | JOIN、子查詢、視窗函數、CTE 遞迴查詢 |
| 統計與模擬（R） | apply 函式族、蒙地卡羅模擬 |
| 設計模式（Java/C#）| Singleton、Observer |
| 面試題型（JS/C#）| Two Pointers、Sliding Window、前綴和 |

---

## 動態課程更新說明

程式啟動流程：

```
啟動程式
    ↓
有網路？
    ├── 否 → 使用內建靜態課程（完整可用）
    └── 是 → 快取是否在 24 小時內？
                ├── 是 → 直接使用快取
                └── 否 → 從 GitHub 拉取 content-updates.json
                          → 合併進靜態課程 → 快取 24 小時
```

**新增課程內容**：直接編輯專案根目錄的 `content-updates.json`，commit 後 push 到 GitHub，使用者下次啟動就會自動更新。

---

## 開發環境需求

- **Node.js** 18+（必要）
- **Rust** + Cargo — 僅打包成桌面 .exe 時需要（[安裝 rustup](https://rustup.rs)）
- Windows：打包時需 **Microsoft C++ Build Tools**
- macOS：打包時需 Xcode Command Line Tools（`xcode-select --install`）

---

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器（瀏覽器模式，不需 Rust）
npm run dev

# 執行所有單元測試
npx vitest run

# 測試監聽模式（開發時使用）
npm run test:watch

# 桌面應用開發模式（需 Rust）
npm run tauri dev

# 打包桌面應用（需 Rust）
npm run tauri build
```

---

## 專案結構

```
code-teaching/
├── start.bat              Windows 一鍵啟動
├── start.sh               macOS / Linux 一鍵啟動
├── content-updates.json   線上擴充課程（push 到 GitHub 即自動更新）
├── src/
│   ├── engines/           執行引擎
│   │   ├── types.ts       語言 ID 與回傳型別定義
│   │   ├── runner.ts      主分派器（JS/Pyodide/WebR/Wandbox）
│   │   └── pistonRunner.ts  Wandbox API（含 VB→C# 轉譯器、SQL 前處理）
│   ├── services/
│   │   └── contentUpdater.ts  動態課程更新（GitHub fetch + localStorage 快取）
│   ├── content/           內建靜態課程（TypeScript，含中英文）
│   │   ├── python/、javascript/、c/、cpp/、java/
│   │   ├── csharp/、visualbasic/、r/、sql/、delphi/
│   │   └── index.ts       getChapters(lang)，合併靜態與動態內容
│   ├── components/
│   │   ├── Navbar         頂部導覽（語言切換）
│   │   ├── Sidebar        章節/課程導覽列
│   │   ├── LessonContent  Markdown 教學說明
│   │   ├── CodeEditor     Monaco Editor 封裝
│   │   ├── OutputPanel    執行結果顯示
│   │   └── ExercisePanel  練習題（提示與答案）
│   ├── pages/
│   │   ├── Home           語言選單首頁
│   │   ├── LessonPage     教學主頁面
│   │   └── Playground     自由練習沙箱
│   └── test/
│       ├── runner.test.ts
│       ├── content.test.ts
│       ├── i18n.test.ts
│       └── contentUpdater.test.ts
```

---

## 路由結構

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（語言選單） |
| `/learn/:lang` | 自動跳轉至第一節課 |
| `/learn/:lang/:chapterId/:lessonId` | 教學頁面 |
| `/playground` | 自由練習 |
