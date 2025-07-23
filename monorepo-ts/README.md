# `trnkts` - Distributed Web Development Suite

A comprehensive TypeScript monorepo for building digital artifacts on the
distributed web. Trnkts is a complete orchestrator and frontend for running
peer-to-peer applications, combining the power of libp2p, IPFS, OrbitDB, and
Bacalhau into a unified CLI and API.

## The Trnkt Stack

- **🌐 libp2p**: Peer-to-peer networking foundation
- **🗄️ IPFS (Helia)**: Distributed file system and content addressing
- **� OrbitDB**: Serverless, distributed, peer-to-peer databases
- **⚡ Bacalhau**: Distributed compute layer for processing

## Features

- 🚀 **Unified P2P Stack**: Combines js-libp2p, Helia (js-IPFS), OrbitDB, and
  Bacalhau
- 🔗 **Peer Provisioning**: Automated setup and management of network peers
- �️ **Database Operations**: Distributed database management and
  synchronization
- 🔐 **Authentication Systems**: Decentralized identity and access control
- 👥 **End User Support**: Complete frontend and user experience layer
- � **Monorepo Architecture**: Modular packages with shared TypeScript
  configuration
- 🧪 **Comprehensive Testing**: Jest with ts-jest for TypeScript support
- 🎨 **Code Quality**: Prettier and ESLint for consistent development

## Monorepo Structure

```
trnkts/
├── packages/
│   ├── core/                 # Core P2P orchestration and networking
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── instance/
│   │   ├── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── identifier/           # Peer and content identification
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── generators.ts
│   │   │   └── types.ts
│   │   ├── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── utils/                # Shared utilities and helpers
│       ├── src/
│       │   ├── index.ts
│       │   └── __tests__/
│       ├── package.json
│       └── tsconfig.json
├── .github/
│   └── copilot-instructions.md
├── jest.config.js
├── eslint.config.js
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

### Working with Trnkt Components

You can work with individual packages or the full stack:

```bash
# Build core P2P functionality
npm run build -w packages/core

# Test identifier generation
npm run test -w packages/identifier

# Run development mode for utilities
npm run dev -w packages/utils
```

## P2P Application Development

### Setting Up a New Peer

The core package provides peer provisioning and management:

```typescript
import { createPeer } from '@trnkts/core';

// Initialize a new peer with libp2p
const peer = await createPeer({
  networking: {
    /* libp2p config */
  },
  storage: {
    /* IPFS/Helia config */
  },
  database: {
    /* OrbitDB config */
  },
  compute: {
    /* Bacalhau config */
  },
});
```

### Managing Distributed Databases

OrbitDB integration for serverless, peer-to-peer databases:

```typescript
import { createDatabase } from '@trnkts/core';

// Create or connect to a distributed database
const db = await createDatabase({
  type: 'docstore',
  name: 'my-app-data',
  accessController: {
    /* auth config */
  },
});
```

### Content and Peer Identification

The identifier package provides utilities for generating unique identifiers:

```typescript
import { createUuid, createRandomString } from '@trnkts/identifier';

// Generate peer identifiers
const peerId = createUuid();
const sessionId = createRandomString(16);
```

## Package Development

### Adding a New Package

1. Create a new directory under `packages/`
2. Create a `package.json` with the required scripts
3. Create a `tsconfig.json` that extends the root configuration
4. Add your source code under `src/`
5. Add tests under `__tests__/` or `src/__tests__/`

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
- Leverage shared P2P stack components across packages
- Install shared devDependencies at the root level
- Use exact versions for production dependencies when possible

## Distributed Web Architecture

### Core Components

- **Networking Layer**: libp2p for peer discovery and communication
- **Storage Layer**: IPFS/Helia for content-addressed storage
- **Database Layer**: OrbitDB for distributed, serverless databases
- **Compute Layer**: Bacalhau for distributed processing
- **Identity Layer**: Decentralized authentication and access control

### Development Workflow

1. **Peer Setup**: Provision and configure network peers
2. **Database Design**: Create distributed data structures
3. **Authentication**: Implement decentralized identity systems
4. **User Interface**: Build frontend for P2P applications
5. **Deployment**: Orchestrate distributed application deployment

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
- P2P integration testing for distributed components

## Contributing

1. Follow the existing code style and patterns
2. Write tests for new functionality, including P2P scenarios
3. Ensure all linting and type checking passes
4. Test distributed functionality across multiple peers
5. Use meaningful commit messages
6. Update documentation as needed
7. Consider security implications of distributed systems

## Roadmap

- [ ] Complete libp2p integration
- [ ] IPFS/Helia storage implementation
- [ ] OrbitDB database layer
- [ ] Bacalhau compute integration
- [ ] CLI tool development
- [ ] Web frontend interface
- [ ] Mobile application support
- [ ] Performance optimization
- [ ] Security auditing

## License

MIT
