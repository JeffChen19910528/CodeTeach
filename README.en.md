繁體中文 | [English](README.en.md)

# CodeTeach — Interactive Programming Teaching Platform

A cross-platform desktop teaching application built with **Tauri 2.0 + React + TypeScript**, supporting Windows / macOS / Linux.

Inspired by W3Schools: left-side lesson content + right-side live code editor + instant output, with Chinese/English content switching.

---

## Quick Start

### Windows

Double-click **`start.bat`** to automatically install dependencies and open the browser.

- First run auto-installs packages (takes 1–2 minutes)
- Browser URL: **http://localhost:1420**
- Press any key to stop the server and close the window

### macOS / Linux

```bash
chmod +x start.sh
./start.sh
```

Or manually:

```bash
npm install   # first time only
npm run dev
```

Then open your browser at **http://localhost:1420**

---

## Supported Languages (TIOBE 2026 Top 10)

All languages run **without any compiler or runtime installation** on the user's machine.

| # | Language | Execution | Network | Built-in Lessons | Online Extension |
|---|----------|-----------|---------|-----------------|-----------------|
| 1 | Python | WebAssembly (Pyodide) | First load | 22 lessons | ✅ |
| 2 | C | Wandbox Cloud API | ✅ | 16 lessons | ✅ |
| 3 | Java | Wandbox Cloud API | ✅ | 21 lessons | ✅ |
| 4 | C++ | Wandbox Cloud API | ✅ | 21 lessons | ✅ |
| 5 | C# | Wandbox Cloud API | ✅ | 21 lessons | ✅ |
| 6 | JavaScript | Native browser execution | ❌ Fully offline | 20 lessons | ✅ |
| 7 | Visual Basic | Wandbox (VB→C# transpile) | ✅ | 13 lessons | ✅ |
| 8 | R | WebAssembly (WebR) | First load | 10 lessons | ✅ |
| 9 | SQL | Wandbox (SQLite) | ✅ | 14 lessons | ✅ |
| 10 | Delphi | Wandbox (Free Pascal) | ✅ | 13 lessons | ✅ |

> **Online Extension**: On startup, if a network connection is detected, the app automatically fetches `content-updates.json` from GitHub, adding advanced lessons, algorithm implementations, classic textbook examples, etc. Cached for 24 hours.

---

## Lesson Structure

### Built-in Static Lessons (offline)

| Chapter | Description | Languages |
|---------|-------------|-----------|
| Introduction | Hello World, syntax, variables & data types | All |
| Operators | Arithmetic, comparison, logical | All |
| Control Flow | if/else, switch, conditionals | All |
| Loops | for, while, break/continue | All |
| Functions | Definition, parameters, return values, recursion | All |
| Arrays/Collections | Arrays, lists, dictionaries (language-dependent) | All |
| Object-Oriented | Classes, constructors, inheritance, encapsulation | All |
| **LeetCode Classics** | Two Sum, Valid Parentheses, Max Subarray, Climbing Stairs | All except R & SQL |
| **Classic Algorithms** | Tower of Hanoi (recursion), Rat in a Maze (backtracking), N-Queens (backtracking) | All |
| **Design Patterns** | Factory Pattern, Singleton Pattern, Observer Pattern | Python / JS / Java / C++ / C# |
| **SQL Algorithm Problems** | Find duplicates, Nth highest salary, window ranking, running total, pivot, recursive CTE, gaps & islands | SQL |

### Online Extended Lessons (auto-loaded with network)

| Chapter Type | Content |
|-------------|---------|
| Exception Handling | try/catch, custom exceptions, context manager |
| Advanced Features | Generators, decorators, comprehensions, lambda |
| Data Structures | Linked list, stack, queue, HashMap |
| Algorithm Implementation | Quicksort, merge sort, binary search, BFS/DFS |
| Dynamic Programming | Knapsack, LCS, coin change, LIS |
| Statistics & Simulation (R) | apply family, Monte Carlo simulation |
| Interview Problems (JS/C#) | Two Pointers, Sliding Window, Prefix Sum |

---

## Dynamic Lesson Update Flow

```
App starts
    ↓
Network available?
    ├── No  → Use built-in static lessons (fully functional)
    └── Yes → Is cache within 24 hours?
                ├── Yes → Use cached content
                └── No  → Fetch content-updates.json from GitHub
                          → Merge into static lessons → Cache 24h
```

**Adding lesson content**: Edit `content-updates.json` in the project root, commit, and push to GitHub. Users will automatically receive the update on next launch.

---

## Development Requirements

- **Node.js** 18+ (required)
- **Rust** + Cargo — only needed when packaging as a desktop `.exe` ([install rustup](https://rustup.rs))
- Windows: **Microsoft C++ Build Tools** required for packaging
- macOS: Xcode Command Line Tools required (`xcode-select --install`)

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (browser mode, no Rust needed)
npm run dev

# Run all unit tests
npx vitest run

# Test watch mode (during development)
npm run test:watch

# Desktop app dev mode (requires Rust)
npm run tauri dev

# Build desktop app (requires Rust)
npm run tauri build
```

---

## Project Structure

```
code-teaching/
├── start.bat              Windows one-click launcher
├── start.sh               macOS / Linux one-click launcher
├── content-updates.json   Online extended lessons (auto-updates via GitHub)
├── src/
│   ├── engines/           Execution engines
│   │   ├── types.ts       Language IDs and return type definitions
│   │   ├── runner.ts      Main dispatcher (JS/Pyodide/WebR/Wandbox)
│   │   └── pistonRunner.ts  Wandbox API (VB→C# transpiler, SQL preprocessing)
│   ├── services/
│   │   └── contentUpdater.ts  Dynamic lesson updates (GitHub fetch + localStorage cache)
│   ├── content/           Built-in static lessons (TypeScript, bilingual)
│   │   ├── python/, javascript/, c/, cpp/, java/
│   │   ├── csharp/, visualbasic/, r/, sql/, delphi/
│   │   └── index.ts       getChapters(lang), merges static and dynamic content
│   ├── contexts/
│   │   └── SettingsContext.tsx  Global settings (font size, text color, localStorage)
│   ├── components/
│   │   ├── Navbar         Top navigation (language switch + settings button)
│   │   ├── Sidebar        Chapter/lesson navigation
│   │   ├── LessonContent  Markdown lesson display
│   │   ├── CodeEditor     Monaco Editor wrapper (font size from settings)
│   │   ├── OutputPanel    Execution output (font size and color from settings)
│   │   ├── SettingsModal  Settings panel (font size slider + color picker)
│   │   └── ExercisePanel  Exercises (hints and answers)
│   ├── pages/
│   │   ├── Home           Language selection home page
│   │   ├── LessonPage     Main teaching page (output panel height is draggable)
│   │   └── Playground     Free practice sandbox
│   └── test/
│       ├── runner.test.ts
│       ├── content.test.ts
│       ├── i18n.test.ts
│       ├── contentUpdater.test.ts
│       └── settings.test.ts
```

---

## User Settings

Click the **⚙** button in the top-right corner to open the settings panel:

| Setting | Description |
|---------|-------------|
| Editor Font Size | 10–24px, drag slider to adjust Monaco Editor font |
| Output Font Size | 10–24px, drag slider to adjust output panel font |
| Output Text Color | Green / White / Cyan / Yellow |
| Error Text Color | Red / Orange / Pink |

Settings are automatically saved to `localStorage` and persist across restarts.

**Adjusting output panel height**: Drag the divider between the editor and output panel to resize freely between 80–600px.

---

## Routing

| Path | Page |
|------|------|
| `/` | Home (language selection) |
| `/learn/:lang` | Auto-redirect to first lesson |
| `/learn/:lang/:chapterId/:lessonId` | Lesson page |
| `/playground` | Free practice |
