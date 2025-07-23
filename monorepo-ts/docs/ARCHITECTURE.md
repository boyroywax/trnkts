# TRNKTS Monorepo Architecture

## Overview

The TRNKTS monorepo is a comprehensive TypeScript-based distributed service platform designed for decentralized infrastructure. Built using npm workspaces with a modular architecture, it provides essential building blocks for peer-to-peer networking, identity management, identifier generation, and user interface components.

## Core Philosophy

TRNKTS follows a **modular design** approach that enables:
- **Decentralized Infrastructure**: Peer-to-peer networking with libp2p
- **Distributed Services**: Independent, composable packages
- **Identity Management**: Cryptographically secure peer identities
- **Service Discovery**: Private swarm networking capabilities
- **Identifier Generation**: Multiple ID formats for different use cases

## Architecture Overview

```
trnkts/
├── packages/
│   ├── core/           # Peer-to-peer networking & identity management
│   ├── identifier/     # Comprehensive ID generation system
│   ├── utils/          # Shared utilities & message handling
│   ├── components/     # React UI component library
│   └── dashboard/      # Management interface
├── docs/               # Documentation
└── config/             # Shared configuration
```

## Package Architecture

### 1. Core Package (@trnkts/core)

**Purpose**: Foundation for peer-to-peer networking and identity management

**Key Features**:
- **libp2p Integration**: Ed25519 cryptographic peer identities
- **Swarm Management**: Private network isolation with swarm keys
- **Encrypted Storage**: AES-GCM encryption for identity data
- **Key Derivation**: PBKDF2-based secure key generation

**Core Components**:
```typescript
// Peer Identity Management
interface StoredIdentity {
  encryptedPrivateKey: string;
  publicKey: string;
  peerId: string;
  metadata: IdentityMetadata;
}

// Swarm Key Management
interface SwarmKeyInfo {
  key: Uint8Array;
  keyString: string;
  metadata: SwarmKeyMetadata;
}
```

**Use Cases**:
- Secure peer provisioning
- Private network creation
- Identity authentication
- Encrypted data storage

### 2. Identifier Package (@trnkts/identifier)

**Purpose**: Comprehensive identifier generation and validation system

**Supported Formats**:
- **UUID**: Universal unique identifiers (v1, v4, v7)
- **ULID**: Universally unique lexicographically sortable identifiers
- **NANOID**: URL-safe unique string IDs
- **CUID**: Collision-resistant unique identifiers
- **Snowflake**: Twitter-style distributed unique IDs

**Architecture**:
```typescript
// Generator Interface
interface IdGenerator<T = string> {
  generate(options?: GeneratorOptions): T;
  validate(id: string): boolean;
}

// Sequence Management
class SequenceGenerator {
  private counter: number;
  generate(): number;
  reset(): void;
}
```

**Features**:
- Character set customization
- Validation utilities
- Performance-optimized generation
- Thread-safe sequence generation

### 3. Utils Package (@trnkts/utils)

**Purpose**: Shared utilities for messaging, metadata, and time management

**Core Systems**:

#### Message Handling
```typescript
// Structured Message System
interface ReturnMessage<T> {
  status: MessageStatuses;
  body: T;
  timestamp: number;
  metadata?: Record<string, unknown>;
  id?: string;
  correlationId?: string;
  source?: string;
  category?: string;
}

// Message Builder Pattern
MessageBuilder.success({ body: data })
  .setSource('peer-service')
  .setCategory('networking')
  .build();
```

#### Metadata Management
```typescript
// Rich Metadata System
class Metadata<T = unknown> {
  annotations: Record<string, TagValue>;
  labels: string[];
  tags: Array<TagValue>;
  timestamps: Record<string, number>;
  data?: T;
}
```

#### Timestamp Utilities
```typescript
// Multi-format Timestamp Support
TimestampGenerator.now({ format: 'iso' });
TimestampConverter.convert(timestamp, 'unix', 'iso');
```

### 4. Components Package (@trnkts/components)

**Purpose**: React UI component library with glassmorphism design

**Design System**:
- **Glassmorphism**: Modern transparent aesthetics
- **Responsive Layout**: Mobile-first design approach
- **Icon System**: Lucide React integration
- **Theme Support**: Consistent styling variables

**Components**:
```typescript
// Layout Components
<Layout>
  <Header title="TRNKTS" />
  <Sidebar />
  <main>{children}</main>
</Layout>

// Branding
<Logo size="lg" variant="primary" />

// Interactive Elements
<Widget title="Status" variant="info">
  {content}
</Widget>
```

### 5. Dashboard Package (@trnkts/dashboard)

**Purpose**: Management interface for the distributed platform

**Features**:
- Real-time peer monitoring
- Network status visualization
- Identity management interface
- Configuration management

**Architecture**:
```typescript
// Context-based State Management
const DashboardProvider: React.FC = ({ children }) => {
  // Dashboard state and operations
};

// Component Integration
const Dashboard: React.FC = () => (
  <DashboardProvider>
    <Layout>
      <DashboardContent />
    </Layout>
  </DashboardProvider>
);
```

## Distributed Service Capabilities

### Peer-to-Peer Networking

The platform provides comprehensive P2P networking capabilities:

1. **Identity Generation**: Cryptographically secure Ed25519 key pairs
2. **Swarm Isolation**: Private network creation with shared keys
3. **Peer Discovery**: Automatic peer detection within swarms
4. **Secure Communication**: Encrypted peer-to-peer messaging

### Service Discovery

Built-in service discovery mechanisms:

- **Multicast DNS**: Local network service discovery
- **DHT Integration**: Distributed hash table for peer lookup
- **Custom Protocols**: Application-specific service registration

### Data Distribution

Decentralized data management:

- **IPFS Integration**: Content-addressed storage
- **Helia Support**: Modern IPFS implementation
- **Encrypted Storage**: Client-side encryption before distribution

## Development Patterns

### TypeScript Configuration

The monorepo uses TypeScript project references for optimal build performance:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist"
  },
  "references": [
    { "path": "../utils" },
    { "path": "../core" }
  ]
}
```

### Workspace Dependencies

Internal package dependencies are managed through npm workspaces:

```json
{
  "dependencies": {
    "@trnkts/core": "workspace:*",
    "@trnkts/utils": "workspace:*"
  }
}
```

### Testing Strategy

Comprehensive testing with Jest:

- **Unit Tests**: Individual function and class testing
- **Integration Tests**: Cross-package functionality
- **Coverage Targets**: High coverage across all packages
- **Type Safety**: TypeScript strict mode enforcement

## Usage Examples

### Basic Peer Setup

```typescript
import { PeerIdentity } from '@trnkts/core';
import { MessageBuilder } from '@trnkts/utils';

// Generate peer identity
const identity = await PeerIdentity.generate({
  password: 'secure-password',
  metadata: { name: 'service-node' }
});

// Create status message
const status = MessageBuilder.info({ body: 'Peer online' })
  .setSource(identity.peerId)
  .setCategory('networking')
  .build();
```

### Identifier Generation

```typescript
import { UuidGenerator, UlidGenerator } from '@trnkts/identifier';

// Generate different ID types
const uuid = UuidGenerator.v4();
const ulid = UlidGenerator.generate();
const nanoid = NanoidGenerator.generate({ length: 16 });
```

### Component Usage

```typescript
import { Layout, Header } from '@trnkts/components';
import { Dashboard } from '@trnkts/dashboard';

function App() {
  return (
    <Layout>
      <Header title="Distributed Service Platform" />
      <Dashboard />
    </Layout>
  );
}
```

## Build & Development

### Prerequisites

- Node.js 18+
- npm 9+
- TypeScript 5.3+

### Development Workflow

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Start development server
npm run dev
```

### Package Scripts

Each package includes standardized scripts:

```json
{
  "scripts": {
    "build": "tsc --build",
    "test": "jest",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  }
}
```

## Deployment Architecture

### Distributed Deployment

The platform supports various deployment models:

1. **Standalone Nodes**: Independent peer deployment
2. **Swarm Clusters**: Coordinated multi-node networks
3. **Hybrid Networks**: Mixed public/private connectivity
4. **Edge Computing**: Lightweight node deployment

### Service Integration

Integration patterns for distributed services:

- **Microservice Architecture**: Package-based service boundaries
- **Event-Driven Communication**: Message-based inter-service communication
- **Service Mesh**: Peer-to-peer service discovery
- **Load Balancing**: Distributed request routing

## Security Considerations

### Cryptographic Security

- **Ed25519**: Industry-standard elliptic curve cryptography
- **AES-GCM**: Authenticated encryption for data storage
- **PBKDF2**: Secure password-based key derivation
- **Random Generation**: Cryptographically secure randomness

### Network Security

- **Private Swarms**: Isolated network environments
- **Transport Encryption**: All peer communication encrypted
- **Identity Verification**: Cryptographic peer authentication
- **Access Control**: Permission-based resource access

## Future Roadmap

### Planned Enhancements

1. **Database Integration**: Distributed database capabilities
2. **Smart Contracts**: Blockchain integration for governance
3. **API Gateway**: Centralized API management
4. **Monitoring**: Advanced observability features
5. **Auto-scaling**: Dynamic resource management

### Technology Evolution

- **WASM Support**: WebAssembly module integration
- **Mobile SDKs**: Native mobile application support
- **Cloud Integration**: Public cloud service connectors
- **IoT Support**: Internet of Things device integration

## Contributing

### Development Guidelines

1. **TypeScript Strict Mode**: All code must pass strict type checking
2. **Test Coverage**: Minimum 80% test coverage required
3. **Documentation**: All public APIs must be documented
4. **Code Style**: Prettier and ESLint configuration enforcement

### Package Development

When creating new packages:

1. Follow the established package structure
2. Include comprehensive tests
3. Add TypeScript project references
4. Update workspace dependencies
5. Document API interfaces

---

*TRNKTS represents a comprehensive foundation for building distributed, decentralized service platforms with TypeScript. Its modular architecture enables rapid development of secure, scalable peer-to-peer applications.*
