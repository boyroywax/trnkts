# `trnkts` - Distributed## Infrastructure & Service Features

- 🚀 **Distributed Infrastructure Service**: Complete orchestration platform for
  distributed and decentralized systems
- 🌍 **Multi-Network Operation**: Seamlessly operates across private enterprise
  networks and public internet infrastructure
- 🔗 **Unified P2P Stack**: Integrates js-libp2p, Helia (js-IPFS), OrbitDB, and
  Bacalhau into a cohesive service layer
- 🏗️ **Peer Infrastructure Management**: Automated provisioning, configuration,
  and scaling of network peers
- 📊 **Distributed Database Services**: Enterprise-grade distributed database
  management and synchronization
- 🔐 **Decentralized Authentication**: Zero-trust identity and access control
  across distributed infrastructure
- 🖥️ **Service Dashboard**: Complete monitoring and management interface for
  distributed infrastructure
- 📦 **Modular Service Architecture**: Microservices approach with shared
  TypeScript configuration
- 🧪 **Infrastructure Testing**: Comprehensive testing suite for distributed
  system reliability
- 🎯 **Enterprise-Ready**: Production-grade code quality with Prettier and
  ESLint standardszed Infrastructure Service

**trnkts** is a comprehensive service platform for distributed and decentralized
infrastructure that seamlessly operates across private and public networks.
Built as a TypeScript monorepo, trnkts provides a unified orchestration layer
for peer-to-peer applications, combining the power of libp2p, IPFS, OrbitDB, and
Bacalhau into a cohesive distributed computing platform.

## Core Infrastructure Technologies

- **🌐 libp2p**: Modular peer-to-peer networking protocol suite for private and
  public networks
- **🗄️ IPFS (Helia)**: Distributed file system with content addressing across
  network boundaries
- **🗃️ OrbitDB**: Serverless, distributed, peer-to-peer databases for
  decentralized data management
- **⚡ Bacalhau**: Distributed compute over data for processing across
  heterogeneous networks
- **🔗 Network Agnostic**: Operates seamlessly on private enterprise networks
  and public internet infrastructureDistributed Web Development Suite

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

## Service Architecture & Components

```
trnkts/
├── packages/
│   ├── core/                 # Core distributed infrastructure orchestration and P2P networking
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── instance/
│   │   ├── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── components/           # Dashboard and UI components for infrastructure management
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── page/         # Layout, Header, Sidebar components
│   │   │   └── branding/     # Logo and brand components
│   │   ├── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── dashboard/            # Service management dashboard and monitoring interface
│   │   ├── src/
│   │   │   ├── dev/          # Development dashboard
│   │   │   └── styles/       # Glassmorphism design system
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── identifier/           # Distributed peer and content identification services
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── generators.ts
│   │   │   └── types.ts
│   │   ├── __tests__/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── utils/                # Shared utilities for distributed infrastructure
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

## Distributed Infrastructure Services

### Deploying Infrastructure Nodes

The core package provides comprehensive infrastructure orchestration for
distributed systems:

```typescript
import { createPeer } from '@trnkts/core';

// Initialize a new infrastructure node with full P2P stack
const infrastructureNode = await createPeer({
    networking: {
        // libp2p configuration for private/public networks
        addresses: ['/ip4/0.0.0.0/tcp/4001', '/ip4/0.0.0.0/tcp/4002/ws'],
        bootstrap: ['existing-peer-addresses'],
        relay: { enabled: true, hop: { enabled: true } },
    },
    storage: {
        // IPFS/Helia distributed storage configuration
        blockstore: 'leveldb',
        datastore: 'leveldb',
        libp2p: {
            /* networking config */
        },
    },
    database: {
        // OrbitDB distributed database configuration
        directory: './orbitdb',
        identity: {
            /* identity provider */
        },
    },
    compute: {
        // Bacalhau distributed compute configuration
        api: { host: 'localhost', port: 1234 },
        requester: {
            /* job submission config */
        },
    },
});
```

### Managing Distributed Database Infrastructure

OrbitDB integration provides enterprise-grade distributed database services
across networks:

```typescript
import { createDatabase } from '@trnkts/core';

// Deploy distributed database infrastructure
const distributedDB = await createDatabase({
    type: 'docstore', // or 'keyvalue', 'eventlog', 'feed', 'counter'
    name: 'enterprise-data-layer',
    accessController: {
        type: 'orbitdb', // Built-in access control
        write: ['peer-id-1', 'peer-id-2'], // Write permissions
        admin: ['admin-peer-id'], // Admin permissions
    },
    replication: {
        factor: 3, // Replication across 3 nodes minimum
        strategy: 'closest', // Geographic replication strategy
    },
    network: {
        private: true, // Private network deployment
        encryption: 'aes256', // Data encryption
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

## Distributed Infrastructure Architecture

### Service Layer Components

- **Network Infrastructure Layer**: libp2p protocol suite for multi-network peer
  discovery and secure communication
- **Distributed Storage Layer**: IPFS/Helia for content-addressed storage with
  automatic replication
- **Database Infrastructure Layer**: OrbitDB for distributed, serverless
  database services with conflict resolution
- **Compute Infrastructure Layer**: Bacalhau for distributed processing and job
  orchestration
- **Identity & Access Layer**: Decentralized authentication and zero-trust
  access control across networks
- **Management Dashboard**: Real-time monitoring, configuration, and scaling of
  distributed infrastructure

### Infrastructure Deployment Workflow

1. **Network Planning**: Design distributed network topology for private/public
   infrastructure
2. **Node Provisioning**: Automated deployment and configuration of
   infrastructure nodes
3. **Service Configuration**: Setup databases, storage, and compute services
   across the distributed network
4. **Access Control**: Implement decentralized identity and permissioning
   systems
5. **Monitoring & Management**: Deploy service dashboard for real-time
   infrastructure monitoring
6. **Scaling & Orchestration**: Dynamic scaling and load balancing across
   distributed infrastructure

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

## Infrastructure Service Roadmap

- [ ] **Core Infrastructure Services**
    - [ ] Complete libp2p multi-network integration (private/public)
    - [ ] IPFS/Helia distributed storage service implementation
    - [ ] OrbitDB enterprise database infrastructure layer
    - [ ] Bacalhau distributed compute orchestration integration

- [ ] **Service Management & Operations**
    - [ ] Infrastructure monitoring and alerting dashboard
    - [ ] Automated node provisioning and scaling services
    - [ ] Service health checks and failover mechanisms
    - [ ] Distributed backup and disaster recovery systems

- [ ] **Enterprise & Production Features**
    - [ ] Enterprise-grade security and compliance features
    - [ ] Multi-tenant infrastructure isolation
    - [ ] API gateway and service mesh integration
    - [ ] Performance optimization and caching layers

- [ ] **Platform & Ecosystem**
    - [ ] CLI tools for infrastructure management
    - [ ] SDK for third-party service integration
    - [ ] Mobile monitoring applications
    - [ ] Community marketplace for distributed services

## License

MIT
