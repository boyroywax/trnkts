# Jest Extension Setup for Monorepo - Troubleshooting Guide

## Current Configuration ✅

Your monorepo is now configured with:

1. **Root Jest Config** (`jest.config.js`) with `projects` array pointing to all packages
2. **Individual Package Configs** for each package (core, utils, identifier, dashboard)
3. **VS Code Settings** configured for monorepo Jest discovery
4. **Workspace File** (`trnkts-monorepo.code-workspace`) for better organization

## To Make All Tests Show Up in Jest Extension:

### 1. **Install Jest Extension** (if not already installed)
```
Extension ID: orta.vscode-jest
```

### 2. **Reload VS Code Window**
- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type "Developer: Reload Window"
- Press Enter

### 3. **Open the Workspace File** (Recommended)
- Open `trnkts-monorepo.code-workspace` instead of the folder
- This provides better multi-folder support for the Jest extension

### 4. **Manual Jest Extension Start**
If tests don't appear automatically:
- `Ctrl+Shift+P` → "Jest: Start All Runners"
- Or click the Jest icon in the Activity Bar (left sidebar)

### 5. **Check Jest Extension Status**
Look for Jest indicators in:
- **Status Bar** (bottom) - Should show Jest status
- **Test Explorer** - Should list all test files
- **File Explorer** - Test files should have play/debug icons
- **Editor** - CodeLens with "Run | Debug" above test functions

### 6. **Force Jest Extension Discovery**
If still not working:
- `Ctrl+Shift+P` → "Jest: Stop All Runners"
- `Ctrl+Shift+P` → "Jest: Start All Runners"
- `Ctrl+Shift+P` → "Jest: Toggle Coverage"

## Expected Test Discovery:

The Jest extension should find and display:

```
📁 packages/core
  └── 📄 __tests__/index.test.ts (2 tests)

📁 packages/utils  
  └── 📄 __tests__/index.test.ts (tests)

📁 packages/identifier
  └── 📄 __tests__/generators.test.ts (tests)

📁 packages/dashboard
  ├── 📄 __tests__/Dashboard.test.tsx (3 tests)
  ├── 📄 __tests__/DashboardProvider.test.tsx (6 tests)
  ├── 📄 __tests__/Header.test.tsx (tests)
  ├── 📄 __tests__/Layout.test.tsx (4 tests)
  ├── 📄 __tests__/Sidebar.test.tsx (9 tests)
  ├── 📄 __tests__/Widget.test.tsx (8 tests)
  └── 📄 __tests__/theme-and-plugins.test.tsx (18 tests)
```

## Current Settings Applied:

```json
{
  "jest.jestCommandLine": "npm test",
  "jest.rootPath": ".",
  "jest.runMode": { "type": "on-save" },
  "jest.autoEnable": true,
  "jest.enable": true
}
```

## Troubleshooting:

### Tests Not Appearing?
1. Check Jest extension is installed and enabled
2. Reload VS Code window
3. Open workspace file instead of folder
4. Check Output panel → "Jest" for error messages
5. Verify each package has working `npm test` script

### Tests Running But Not in Extension?
1. Check if Jest config uses supported patterns
2. Ensure test files match `**/__tests__/**/*.test.(ts|tsx|js)`
3. Try manually running Jest commands in each package

### Performance Issues?
- Disable watch mode: Change `"type": "on-save"` to `"type": "on-demand"`
- Use individual package Jest commands for focused testing

## Quick Commands:
- **Open Command Palette**: `Ctrl+Shift+P`
- **Run All Tests**: `Ctrl+Shift+P` → "Test: Run All Tests"
- **Debug Test**: Click "Debug" above test function
- **Toggle Test Explorer**: `Ctrl+Shift+P` → "Test Explorer: Focus on Test Explorer View"
