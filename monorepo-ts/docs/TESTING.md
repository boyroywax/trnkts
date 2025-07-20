# VS Code Testing Configuration for TypeScript Monorepo

This configuration sets up VS Code to work optimally with Jest testing across all packages in the monorepo.

## Features Configured:

### 🧪 **Test Tasks** (Ctrl+Shift+P → "Tasks: Run Task")

#### **All Packages:**
- **Test All Packages**: Run tests across all packages
- **Test All Packages (Watch)**: Run all tests in watch mode
- **Test All Packages (Coverage)**: Run all tests with coverage

#### **Individual Packages:**
- **Test Dashboard**: Run dashboard tests only
- **Test Dashboard (Watch)**: Dashboard tests in watch mode
- **Test Dashboard (Coverage)**: Dashboard tests with coverage
- **Test Core**: Run core package tests
- **Test Core (Watch)**: Core tests in watch mode
- **Test Utils**: Run utils package tests
- **Test Utils (Watch)**: Utils tests in watch mode
- **Test Identifier**: Run identifier package tests
- **Test Identifier (Watch)**: Identifier tests in watch mode

### 🐛 **Debug Configurations** (F5 or Debug panel)
- **Debug All Package Tests**: Debug tests across all packages
- **Debug Dashboard Tests**: Debug dashboard tests only
- **Debug Core Tests**: Debug core package tests
- **Debug Utils Tests**: Debug utils package tests
- **Debug Identifier Tests**: Debug identifier package tests
- **Debug Current Test File**: Debug the currently open test file
- **Debug Specific Test**: Debug a specific test by name pattern

### ⚙️ **Jest Extension Settings**
- **Multi-workspace support**: Configured for all packages (core, utils, identifier, dashboard)
- **Root path**: Workspace root for monorepo-wide testing
- **Run mode**: On-demand (manual control)
- **Coverage colors**: Visual feedback for test coverage
- **Output reveal**: Automatically show output when tests run

### 📁 **Workspace Configuration**
- **Workspaces**: All packages (core, utils, identifier, dashboard)
- **File associations**: `*.test.ts/.tsx` and `*.spec.ts/.tsx` files
- **Environment**: Suppresses Node.js deprecation warnings globally

## How to Use:

### Running Tests:

#### **All Packages:**
1. **Command Palette** (Ctrl+Shift+P) → "Tasks: Run Task" → "Test All Packages"
2. **Jest Extension**: Will detect tests from all workspaces
3. **Terminal**: `npm test --workspaces` from root

#### **Individual Packages:**
1. **Command Palette** → "Tasks: Run Task" → "Test [Package Name]"
2. **Package-specific**: Navigate to package directory and run `npm test`

### Debugging Tests:
1. Set breakpoints in your test files
2. **F5** → Select appropriate debug configuration:
   - "Debug All Package Tests" for monorepo-wide debugging
   - "Debug [Package] Tests" for package-specific debugging
3. **CodeLens**: Click "Debug" above individual test functions

### Watch Mode:
- **All Packages**: "Test All Packages (Watch)"
- **Individual**: "Test [Package] (Watch)"
- Tests will re-run automatically when files change

### Coverage:
- **All Packages**: "Test All Packages (Coverage)"
- **Individual**: "Test [Package] (Coverage)"
- Coverage reports generated in each package's `coverage/` directory

## Package Structure:
```
packages/
├── core/          # Core functionality tests
├── utils/         # Utility function tests  
├── identifier/    # ID generation tests
└── dashboard/     # React dashboard tests (most comprehensive)
```

## Monorepo Testing Benefits:
- **Unified Configuration**: Single VS Code setup for all packages
- **Cross-package Testing**: Run tests across dependencies
- **Workspace Detection**: Jest extension automatically finds all test files
- **Individual Control**: Test packages independently when needed
- **Consistent Environment**: Same Node.js and Jest settings across packages

## Recommended Extensions:
The configuration includes recommendations for testing and development extensions. Install them via the Extensions panel for the best experience.
