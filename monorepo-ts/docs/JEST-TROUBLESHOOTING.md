# Jest VS Code Extension Troubleshooting for Monorepo

## Current Issue
The Jest VS Code extension is having trouble with command-line argument parsing in our monorepo setup. The extension is trying to pass Jest-specific arguments through npm workspaces, which causes parsing errors.

## Quick Fixes to Try

### 1. Reload VS Code Window
- Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
- Type "Developer: Reload Window"
- Press Enter

### 2. Disable and Re-enable Jest Extension
- Go to Extensions (Cmd/Ctrl+Shift+X)
- Find "Jest" extension by Orta
- Click "Disable" then "Enable"

### 3. Manual Test Discovery
- Open Command Palette (`Cmd+Shift+P`)
- Type "Jest: Start Runner"
- Try "Jest: Stop Runner" first if it's already running
- Then "Jest: Start Runner"

### 4. Alternative: Use Built-in Testing
If Jest extension continues to have issues, use VS Code's built-in test discovery:
- Open Command Palette
- Type "Test: Refresh Tests"
- Go to Testing panel (flask icon in sidebar)
- You should see all tests there

### 5. Run Tests via Tasks
Use the configured VS Code tasks instead:
- Command Palette → "Tasks: Run Task"
- Choose "Test All Packages" or individual package tests

## Package-Specific Testing
To test individual packages directly:

```bash
# Dashboard tests
cd packages/dashboard && npm test

# Core tests  
cd packages/core && npm test

# Utils tests
cd packages/utils && npm test

# Identifier tests
cd packages/identifier && npm test
```

## Debug Configuration
Use the debug configurations in launch.json:
- "Debug All Package Tests"
- "Debug Dashboard Tests"
- "Debug Core Tests"
- etc.

## Current Configuration Status
- ✅ Root Jest config with projects array
- ✅ Individual package Jest configs
- ✅ VS Code tasks for all packages
- ✅ Debug launch configurations
- ⚠️ Jest extension having argument parsing issues

The tests themselves work fine - it's just the Jest extension having trouble with the monorepo npm workspace structure.
