# IT23794634 – Playwright Assignment 1

**IT23794634** — End-to-end tests for **Thanglish-to-Tamil conversion** at [tamil.changathi.com](https://tamil.changathi.com/).

Scope: conversion accuracy, UI stability, and usability.  
No backend API, performance, or security testing.

---

## Repository

- **GitHub:** [https://github.com/sinthujaninfo/IT23794634](https://github.com/sinthujaninfo/IT23794634)
- **Clone:**
  ```bash
  git clone https://github.com/sinthujaninfo/IT23794634.git
  ```

---

## Prerequisites

- **Node.js** 18 or newer
- **npm** (included with Node.js) or **yarn**

---

## Installation

### 1. Install Node.js and npm

If `node` or `npm` is not recognized in the terminal:

1. Download **Node.js LTS** from [nodejs.org](https://nodejs.org) and run the installer.
2. Close all terminals and your editor, then open a **new** terminal (PATH updates apply only in new sessions).
3. Verify:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers. If not, restart your PC and try again.

### 2. Install project dependencies

From the project root (folder containing `package.json`):

```bash
cd path/to/IT23794634
npm install
```

### 3. Install Playwright browsers (Chromium)

Tests are configured to run in **Chromium**. Install it once:

```bash
npx playwright install chromium
```

---

## How to run tests

Run all commands from the **project folder** (the folder that contains `package.json`).

### Run all tests (Chromium)

```bash
npm test
```

or:

```bash
npm run test:chromium
```

This runs **35 tests** in Chromium (1 worker). Allow a few minutes for the full run.

### Run by test suite

| Command | Description |
|--------|--------------|
| `npm run test:positive` | Positive functional only (24 tests) |
| `npm run test:negative` | Negative functional only (10 tests) |
| `npm run test:ui` | UI tests only (1 test) |

### Run with visible browser (headed)

```bash
npm run test:chromium:headed
```

or:

```bash
npm run test:headed
```

This opens a Chromium window so you can watch the tests run.

### Run a single test

```bash
npm run test:pos1
```

Runs `Pos_Fun_001` only. Other single-test scripts: `test:pos2`, `test:pos3`, … `test:pos24` (see `package.json`).

### Using npx directly

```bash
npx playwright test
npx playwright test --project=chromium
npx playwright test --project=chromium --headed
npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
```

---

## Project layout

```
IT23794634/
├── assignment-1/
│   ├── fixtures.js              # Shared helpers (editor, type, output)
│   ├── positive-functional/     # 24 specs – Pos_Fun_001 … Pos_Fun_024
│   ├── negative-functional/     # 10 specs – Neg_Fun_001 … Neg_Fun_010
│   └── ui-testcases/            # 1 spec  – Pos_UI_001
├── package.json
├── playwright.config.js
└── README.md
```

- **Positive functional:** Valid Thanglish input → expected Tamil output.
- **Negative functional:** Empty or invalid input → no or partial conversion.
- **UI:** Output clears when the input field is cleared.

Tests target the main editor (`#transliterateTextarea`). If the site UI changes, update `assignment-1/fixtures.js`.

---

## Troubleshooting

### “npx” or “node” is not recognized

- **Cause:** Node.js is not installed or not on PATH.
- **Fix:** Install Node.js LTS from [nodejs.org](https://nodejs.org), close all terminals and your editor, open a new terminal, then run `node --version` and `npm install` again from the project folder.

### “Browser not found” / “Executable doesn’t exist”

- **Cause:** Chromium is not installed.
- **Fix:** From the project folder run:
  ```bash
  npx playwright install chromium
  ```

### Editor not found (timeout)

- **Cause:** Site structure or selector changed (e.g. editor inside an iframe).
- **Fix:** Run one test with a visible browser to see what loads:
  ```bash
  npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js --headed --project=chromium
  ```
  If the editor is in an iframe, update `assignment-1/fixtures.js` to switch to that frame before using the editor.

### Output empty or still in Thanglish

- **Cause:** Conversion delay or site changed (e.g. separate output element).
- **Fix:** `fixtures.js` already waits 800 ms after typing. If the site now has a separate output element, change `getOutputText` in `fixtures.js` to read from that element.

### Network / site not loading

- **Cause:** [tamil.changathi.com](https://tamil.changathi.com/) is not reachable or slow.
- **Fix:** Open the URL in a normal browser first. If it is slow, increase `navigationTimeout` or `actionTimeout` in `playwright.config.js`.

### EPERM / “scandir … WinSAT” (Windows)

- **Cause:** Playwright/Node accessing a restricted temp folder.
- **Fix:** Run from the **project folder**, not from your user folder. If it still happens, use a different temp folder for that session:

  **PowerShell:**
  ```powershell
  cd path/to/IT23794634
  $env:TEMP = "$env:USERPROFILE\playwright-temp"
  if (-not (Test-Path $env:TEMP)) { New-Item -ItemType Directory -Path $env:TEMP -Force }
  npm test
  ```

  **CMD:**
  ```cmd
  cd /d path/to/IT23794634
  set TEMP=%USERPROFILE%\playwright-temp
  if not exist "%TEMP%" mkdir "%TEMP%"
  npm test
  ```

### NO_COLOR / FORCE_COLOR warning in terminal

- **Cause:** IDE sets `FORCE_COLOR`.
- **Fix:** You can ignore it, or use the npm scripts (`npm run test:chromium`, etc.) which use `NODE_OPTIONS=--no-warnings`.

### Some tests fail (e.g. Pos_Fun_005, Pos_Fun_006)

- **Cause:** Site output may differ slightly from the Excel expected values (e.g. spelling or spacing).
- **Fix:** Either update the expected values in the spec to match current site behaviour, or treat as known differences until the site is updated.

---

## Quick reference

```bash
# Install (once)
npm install
npx playwright install chromium

# Run all tests (Chromium)
npm test
# or
npm run test:chromium

# Run by suite
npm run test:positive       # 24 positive functional tests
npm run test:negative       # 10 negative functional tests
npm run test:ui             # 1 UI test

# Run with visible browser
npm run test:chromium:headed
npm run test:headed         # same

# Run a single test
npm run test:pos1           # Pos_Fun_001
npm run test:pos2           # Pos_Fun_002
# … test:pos3 … test:pos24

# Debug / UI mode
npm run test:debug-pos1     # Debug Pos_Fun_001 with inspector
npm run test:open-ui        # Playwright interactive UI mode
```
