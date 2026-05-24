# CodeTeach — 程式語言互動教學平台

基於 **Tauri 2.0 + React + TypeScript** 的跨平台桌面教學應用程式，支援 Windows / macOS / Linux。

參考 W3Schools 設計，提供：左側教學說明 + 右側線上程式碼編輯器 + 即時執行輸出，以及中英文內容切換。

---

## 快速啟動（Windows）

直接雙擊 **`start.bat`** 即可自動啟動並開啟瀏覽器。

- 首次執行會自動安裝套件（需 1-2 分鐘）
- 若伺服器已在執行，重複點擊只會開啟瀏覽器，不會重複啟動
- 瀏覽器網址：**http://localhost:1420**
- 按任意鍵可停止伺服器並關閉視窗

> **macOS / Linux**：執行 `npm run dev`，再開啟 http://localhost:1420

---

## 支援語言（TIOBE 2026 Top 10）

所有語言皆**不需使用者安裝任何編譯器或執行環境**即可執行。

| # | 語言 | 執行方式 | 需要網路 | 課程數 |
|---|------|---------|---------|--------|
| 1 | Python | WebAssembly (Pyodide) | 首次載入 | 13 課 |
| 2 | C | Wandbox 雲端 API | ✅ | 7 課 |
| 3 | Java | Wandbox 雲端 API | ✅ | 8 課 |
| 4 | C++ | Wandbox 雲端 API | ✅ | 8 課 |
| 5 | C# | Wandbox 雲端 API | ✅ | 8 課 |
| 6 | JavaScript | 瀏覽器原生執行 | ❌ 完全離線 | 10 課 |
| 7 | Visual Basic | Wandbox 雲端 API（VB→C# 轉譯）| ✅ | 7 課 |
| 8 | R | WebAssembly (WebR) | 首次載入 | 10 課 |
| 9 | SQL | Wandbox 雲端 API (SQLite) | ✅ | 8 課 |
| 10 | Delphi | Wandbox 雲端 API (Free Pascal) | ✅ | 7 課 |

> **Wandbox API**：免費開源的雲端程式碼執行服務，無需 API Key，支援 100+ 語言。

---

## 課程內容結構

每種語言涵蓋以下主題（參考 W3Schools 架構）：

| 主題 | 說明 |
|------|------|
| 入門介紹 | Hello World、語法、變數與資料型別 |
| 運算子 | 算術、比較、邏輯運算 |
| 流程控制 | if/else、switch、條件判斷 |
| 迴圈 | for、while、break/continue |
| 函式 | 定義、參數、回傳值 |
| 陣列/集合 | 陣列、清單、字典（依語言） |
| 物件導向 | 類別、建構子、繼承（C++/Java/C#/JS/Python） |
| 資料結構 | 清單、字典（Python）、data frame（R） |

---

## 動態課程更新

應用程式啟動時會自動從 GitHub 抓取最新課程內容（有網路時靜默更新，無網路使用內建課程）。

**設定步驟：**

1. 建立一個 GitHub 儲存庫，並將 `content-updates.json` 推送至 `main` 分支
2. 修改 `src/services/contentUpdater.ts` 中的 `UPDATE_URL` 為你的 GitHub raw 檔案 URL
3. 更新後自動快取 24 小時，下次訪問時靜默重新抓取

**`content-updates.json` 格式範例：**

```json
{
  "version": "1",
  "generatedAt": "2026-05-25",
  "languages": {
    "python": [
      {
        "id": "advanced",
        "title": { "zh-TW": "進階主題", "en": "Advanced Topics" },
        "lessons": [
          {
            "id": "generators",
            "title": { "zh-TW": "生成器", "en": "Generators" },
            "content": {
              "zh-TW": "## 生成器\n\n使用 `yield` 關鍵字建立生成器函式...",
              "en": "## Generators\n\nUse the `yield` keyword to create generator functions..."
            },
            "defaultCode": "def count_up(n):\n    for i in range(n):\n        yield i\n\nfor x in count_up(5):\n    print(x)"
          }
        ]
      }
    ]
  }
}
```

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

# 執行單一測試檔案
npx vitest run src/test/runner.test.ts

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
src/
├── engines/          執行引擎
│   ├── types.ts      語言 ID 與回傳型別定義
│   ├── runner.ts     主分派器（JS原生/Pyodide/WebR/Wandbox）
│   └── pistonRunner.ts  Wandbox API（含 VB→C# 轉譯器、SQL 前處理）
├── services/
│   └── contentUpdater.ts  動態課程更新服務（GitHub fetch + localStorage 快取）
├── content/          教學內容（TypeScript 模組，含中英文）
│   ├── python/       13 課
│   ├── javascript/   10 課
│   ├── c/            7 課
│   ├── cpp/          8 課
│   ├── java/         8 課
│   ├── csharp/       8 課
│   ├── visualbasic/  7 課
│   ├── r/            10 課
│   ├── sql/          8 課
│   ├── delphi/       7 課
│   └── index.ts      getChapters(lang)，合併靜態與動態內容
├── components/
│   ├── Navbar         頂部導覽（語言切換按鈕）
│   ├── Sidebar        章節/課程導覽列
│   ├── LessonContent  Markdown 教學說明
│   ├── CodeEditor     Monaco Editor 封裝
│   ├── OutputPanel    執行結果顯示
│   └── ExercisePanel  練習題（含提示與答案確認）
├── pages/
│   ├── Home           語言選單首頁
│   ├── LessonPage     教學主頁面（說明 + 編輯器 + 輸出）
│   └── Playground     自由練習沙箱
├── locales/
│   ├── zh-TW.json
│   └── en.json
└── test/
    ├── runner.test.ts        執行引擎單元測試
    ├── content.test.ts       教學內容完整性測試
    ├── i18n.test.ts          語系設定測試
    └── contentUpdater.test.ts 動態更新服務測試
```

---

## 新增教學內容

在 `src/content/<語言>/index.ts` 中新增 `Chapter` 物件，格式如下：

```ts
{
  id: "my-chapter",
  title: { "zh-TW": "我的章節", en: "My Chapter" },
  lessons: [
    {
      id: "my-lesson",
      title: { "zh-TW": "課程名稱", en: "Lesson Title" },
      content: {
        "zh-TW": "## 說明\n\nMarkdown 格式的教學內容",
        en: "## Description\n\nMarkdown content here",
      },
      defaultCode: `print("Hello!")`,
      exercise: {                          // 可選
        question: { "zh-TW": "題目", en: "Question" },
        hint:     { "zh-TW": "提示", en: "Hint" },
        answer:   "expected_answer",       // 空字串 = 任何輸入皆正確
      },
    },
  ],
}
```

> **注意（Java）**：`defaultCode` 中的 class 不可加 `public`（Wandbox 存檔為 `prog.java`），請使用 `class Main { ... }`。

---

## 路由結構

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（語言選單） |
| `/learn/:lang` | 自動跳轉至第一節課 |
| `/learn/:lang/:chapterId/:lessonId` | 教學頁面 |
| `/playground` | 自由練習 |
