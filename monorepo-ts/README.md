# `trnkts` Typescript Monorepo

A modern TypeScript monorepo template with the latest versions of TypeScript,
ts-jest, Prettier, and ESLint.

## Features

- 🚀 **Modern TypeScript**: Latest TypeScript with strict configuration
- 📦 **Monorepo Structure**: npm workspaces for managing multiple packages
- 🧪 **Testing**: Jest with ts-jest for TypeScript support
- 🎨 **Code Formatting**: Prettier for consistent code style
- 🔍 **Linting**: ESLint with TypeScript rules and Prettier integration
- 🏗️ **Build System**: TypeScript project references for efficient builds
- 📊 **Type Checking**: Comprehensive TypeScript configuration with strict rules

## Monorepo Structure

```
monorepo-ts/
├── packages/
│   ├── core/                 # Core business logic
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── utils/                # Shared utilities
│       ├── src/
│       │   ├── index.ts
│       │   └── __tests__/
│       ├── package.json
│       └── tsconfig.json
├── .github/
│   └── copilot-instructions.md
├── jest.config.js
├── .eslintrc.js
├── .prettierrc.json
├── .prettierignore
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

Install dependencies for all packages:

```bash
npm install
```

### Development Commands

```bash
# Build all packages
npm run build

# Run tests for all packages
npm run test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type checking
npm run typecheck

# Clean build artifacts
npm run clean

# Run development mode (watch mode)
npm run dev
```

### Working with Individual Packages

You can also run commands for specific packages:

```bash
# Build a specific package
npm run build -w packages/core

# Test a specific package
npm run test -w packages/utils

# Run dev mode for a specific package
npm run dev -w packages/core
```

## Package Development

### Adding a New Package

1. Create a new directory under `packages/`
2. Create a `package.json` with the required scripts
3. Create a `tsconfig.json` that extends the root configuration
4. Add your source code under `src/`
5. Add tests under `src/__tests__/`

### Example Package Structure

```
packages/your-package/
├── src/
│   ├── index.ts
│   └── __tests__/
│       └── index.test.ts
├── package.json
└── tsconfig.json
```

### Package Dependencies

- Use `@trnkts/package-name` for internal package dependencies
- Install shared devDependencies at the root level
- Use exact versions for production dependencies when possible

## Code Quality

### TypeScript Configuration

- Strict mode enabled with comprehensive type checking
- ES2022 target with modern features
- Project references for efficient builds
- Composite projects for incremental compilation

### ESLint Rules

- TypeScript-specific rules
- Prettier integration
- Consistent import/export patterns
- Error on unused variables and parameters

### Testing

- Jest with ts-jest for TypeScript support
- Test files co-located with source code
- Coverage reporting enabled
- Modern Jest configuration with ESM support

## Contributing

1. Follow the existing code style and patterns
2. Write tests for new functionality
3. Ensure all linting and type checking passes
4. Use meaningful commit messages
5. Update documentation as needed

## License

MIT
