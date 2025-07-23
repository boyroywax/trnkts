# TRNKTS - Distributed Service Platform

> A co## Features

🔐 **Cryptographic Identity Management** - Ed25519-based peer identities with encrypted storage  
🌐 **Peer-to-Peer Networking** - libp2p integration with private swarm support  
🔍 **Universal Identifiers** - Multiple ID formats (UUID, ULID, NANOID, CUID, Snowflake)  
⚡ **High-Performance Utilities** - Message handling, metadata management, and timestamp utilities  
🎨 **Modern UI Components** - React-based glassmorphism design system  
📊 **Management Dashboard** - Real-time monitoring and configuration interface  

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- TypeScript 5.3+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/trnkts.git
cd trnkts

# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test
```

### Development

```bash
# Start development mode
npm run dev

# Run tests in watch mode
npm run test:watch

# Build all packages
npm run build

# Lint all packages
npm run lint
```ypeScript monorepo for building distributed and decentralized service platforms

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![npm workspaces](https://img.shields.io/badge/npm-workspaces-red.svg)](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
[![libp2p](https://img.shields.io/badge/libp2p-enabled-purple.svg)](https://libp2p.io/)

## Overview

TRNKTS is a comprehensive TypeScript monorepo designed for creating distributed and decentralized service platforms. Built with a modular architecture, it provides essential building blocks for peer-to-peer networking, identity management, identifier generation, and modern UI components.

## Core Technologies

- **🌐 libp2p**: Modular peer-to-peer networking with Ed25519 cryptography
- **🗄️ IPFS (Helia)**: Distributed file system with content addressing
- **🔐 Identity Management**: Cryptographically secure peer identities with AES-GCM encryption
- **🔍 Universal Identifiers**: Multiple ID formats (UUID, ULID, NANOID, CUID, Snowflake)
- **⚙️ Message System**: Structured messaging with metadata and filtering
- **🎨 Modern UI**: React-based glassmorphism design system

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

## Architecture

```
packages/
├── core/           # P2P networking & identity management
├── identifier/     # ID generation & validation
├── utils/          # Shared utilities & messaging
├── components/     # React UI component library
└── dashboard/      # Management interface
```

## Package Overview

### [@trnkts/core](./packages/core/) - P2P Foundation

Foundation package for peer-to-peer networking and cryptographic identity management.

```typescript
import { PeerIdentity, SwarmKey } from '@trnkts/core';

// Generate secure peer identity
const identity = await PeerIdentity.generate({
  password: 'secure-password',
  metadata: { name: 'service-node' }
});

// Create private network
const swarmKey = SwarmKey.generate();
```

**Key Features:**
- Ed25519 cryptographic identities
- AES-GCM encrypted storage
- Private swarm management
- libp2p integration

### [@trnkts/identifier](./packages/identifier/) - ID Generation

Comprehensive identifier generation system supporting multiple formats.

```typescript
import { UuidGenerator, UlidGenerator, NanoidGenerator } from '@trnkts/identifier';

// Generate different ID types
const uuid = UuidGenerator.v4();                    // 550e8400-e29b-41d4-a716-446655440000
const ulid = UlidGenerator.generate();              // 01ARZ3NDEKTSV4RRFFQ69G5FAV
const nanoid = NanoidGenerator.generate();          // V1StGXR8_Z5jdHi6B-myT
```

**Supported Formats:**
- UUID (v1, v4, v7)
- ULID (lexicographically sortable)
- NANOID (URL-safe)
- CUID (collision-resistant)
- Snowflake (distributed)

### [@trnkts/utils](./packages/utils/) - Shared Utilities

Shared utilities for messaging, metadata management, and timestamps.

```typescript
import { MessageBuilder, Metadata, TimestampGenerator } from '@trnkts/utils';

// Structured messaging
const message = MessageBuilder.success({ body: 'Operation completed' })
  .setSource('peer-service')
  .setCategory('networking')
  .build();

// Rich metadata
const metadata = new Metadata({ name: 'service-config' });
metadata.addLabel('production');
metadata.setAnnotation('version', '1.0.0');
```

### [@trnkts/components](./packages/components/) - UI Components

Modern React UI component library with glassmorphism design.

```typescript
import { Layout, Header, Widget, Logo } from '@trnkts/components';

function App() {
  return (
    <Layout>
      <Header title="Distributed Platform" />
      <Widget title="Status" variant="success">
        System operational
      </Widget>
    </Layout>
  );
}
```

### [@trnkts/dashboard](./packages/dashboard/) - Management Interface

Management interface for monitoring and configuring the distributed platform.

```typescript
import { Dashboard, DashboardProvider } from '@trnkts/dashboard';

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}
```

## Usage Examples

### Basic Peer Network

```typescript
import { PeerIdentity } from '@trnkts/core';
import { MessageBuilder } from '@trnkts/utils';
import { UuidGenerator } from '@trnkts/identifier';

// Setup peer identity
const identity = await PeerIdentity.generate({
  password: 'secure-password',
  metadata: { 
    name: 'service-node',
    version: '1.0.0'
  }
});

// Generate correlation ID
const correlationId = UuidGenerator.v4();

// Create status message
const statusMessage = MessageBuilder.info({
  body: { status: 'online', peerId: identity.peerId }
})
  .setSource(identity.peerId)
  .setCorrelationId(correlationId)
  .setCategory('peer-status')
  .build();

console.log('Peer online:', statusMessage);
```

### Private Network Setup

```typescript
import { SwarmKey, PeerIdentity } from '@trnkts/core';

// Create private network
const swarmKey = SwarmKey.generate({
  metadata: {
    name: 'private-network',
    description: 'Secure service cluster'
  }
});

// Generate multiple peer identities for the swarm
const peers = await Promise.all([
  PeerIdentity.generate({ password: 'peer1-pass' }),
  PeerIdentity.generate({ password: 'peer2-pass' }),
  PeerIdentity.generate({ password: 'peer3-pass' })
]);

console.log('Private network created with', peers.length, 'peers');
```

### Service Discovery

```typescript
import { MessageBuilder, Metadata } from '@trnkts/utils';
import { UlidGenerator } from '@trnkts/identifier';

// Service registration
const serviceId = UlidGenerator.generate();
const serviceMetadata = new Metadata({
  name: 'data-processor',
  description: 'Distributed data processing service'
});

serviceMetadata.addLabel('service');
serviceMetadata.addLabel('data-processing');
serviceMetadata.setAnnotation('port', 8080);
serviceMetadata.setAnnotation('protocol', 'http');

// Service announcement
const announcement = MessageBuilder.info({
  body: {
    serviceId,
    endpoint: 'http://localhost:8080',
    capabilities: ['data-processing', 'analytics']
  }
})
  .setSource('service-registry')
  .setCategory('service-discovery')
  .build();
```

## Development

### Scripts

The monorepo includes several npm scripts for development:

```bash
# Development
npm run dev          # Start development servers
npm run build        # Build all packages
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Lint all packages
npm run lint:fix     # Fix linting issues
npm run type-check   # Type check all packages

# Utilities
npm run clean        # Clean build artifacts
npm run reset        # Reset node_modules and reinstall
```

### Working with Individual Packages

You can work with individual packages using workspace commands:

```bash
# Build core P2P functionality
npm run build -w packages/core

# Test identifier generation
npm run test -w packages/identifier

# Run development mode for utilities
npm run dev -w packages/utils
```

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

## Configuration

### TypeScript

The monorepo uses TypeScript project references for optimal build performance:

```json
{
  "extends": "./tsconfig.json",
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/identifier" },
    { "path": "./packages/utils" },
    { "path": "./packages/components" },
    { "path": "./packages/dashboard" }
  ]
}
```

### Testing

Jest configuration with TypeScript support:

```json
{
  "preset": "ts-jest",
  "testEnvironment": "node",
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts"
  ]
}
```

### Package Dependencies

- Use `@trnkts/package-name` for internal package dependencies
- Leverage shared P2P stack components across packages
- Install shared devDependencies at the root level
- Use exact versions for production dependencies when possible

## Security

### Cryptographic Security

- **Ed25519**: Elliptic curve digital signatures
- **AES-GCM**: Authenticated encryption for data storage
- **PBKDF2**: Password-based key derivation
- **Secure Random**: Cryptographically secure random generation

### Network Security

- **Private Swarms**: Isolated network environments
- **Transport Encryption**: All communication encrypted
- **Identity Verification**: Cryptographic authentication
- **Access Control**: Permission-based resource access

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/amazing-feature`
5. Make your changes and add tests
6. Run tests: `npm test`
7. Commit your changes: `git commit -m 'Add amazing feature'`
8. Push to the branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

### Code Style

- TypeScript strict mode enabled
- Prettier for code formatting
- ESLint for code quality
- Jest for testing
- Conventional commits

## Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md) - Detailed system architecture
- [API Reference](./docs/API.md) - Complete API documentation
- [Examples](./examples/) - Usage examples and tutorials
- [Security Guide](./docs/SECURITY.md) - Security best practices

## Roadmap

### Current Status (v1.0)

- ✅ Core peer identity management with Ed25519 cryptography
- ✅ Comprehensive identifier generation system (UUID, ULID, NANOID, CUID, Snowflake)
- ✅ Message handling and metadata management utilities
- ✅ React UI component library with glassmorphism design
- ✅ Management dashboard interface
- ✅ Private swarm key management
- ✅ Comprehensive test suite (308 tests passing)

### Future Enhancements

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

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

- 📧 Email: support@trnkts.dev
- 💬 Discord: [TRNKTS Community](https://discord.gg/trnkts)
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/trnkts/issues)
- 📖 Docs: [Documentation Site](https://docs.trnkts.dev)

## Acknowledgments

- [libp2p](https://libp2p.io/) - Peer-to-peer networking
- [IPFS](https://ipfs.io/) - Distributed file system
- [React](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

Built with ❤️ by the TRNKTS team
