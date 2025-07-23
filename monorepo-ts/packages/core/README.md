# @trnkts/core

> Core peer-to-peer networking and identity management for distributed services

## Overview

The `@trnkts/core` package provides the foundation for peer-to-peer networking in the TRNKTS distributed service platform. It offers cryptographically secure peer identity management, private swarm networking, and integration with libp2p.

## Features

- **Ed25519 Cryptographic Identities**: Secure peer identity generation and management
- **AES-GCM Encrypted Storage**: Client-side encryption for identity data
- **Private Swarm Management**: Isolated network environments with shared keys
- **PBKDF2 Key Derivation**: Secure password-based key generation
- **libp2p Integration**: Modern peer-to-peer networking protocol suite

## Installation

```bash
npm install @trnkts/core
```

## Core Concepts

### Peer Identity

A peer identity consists of:
- **Ed25519 Key Pair**: Public/private key pair for cryptographic operations
- **Peer ID**: Unique identifier derived from the public key
- **Encrypted Storage**: Private key stored encrypted with AES-GCM
- **Metadata**: Additional information about the peer

### Swarm Keys

Swarm keys enable private network isolation:
- **32-byte Key**: Cryptographically secure random key
- **Base64 Encoding**: Standard encoding for key storage and transmission
- **Network Isolation**: Only peers with the same key can communicate
- **Metadata Support**: Additional information about the swarm

## Usage

### Basic Peer Identity

```typescript
import { PeerIdentity } from '@trnkts/core';

// Generate a new peer identity
const identity = await PeerIdentity.generate({
  password: 'secure-password',
  metadata: {
    name: 'service-node',
    version: '1.0.0',
    description: 'Distributed service peer'
  }
});

console.log('Peer ID:', identity.peerId);
console.log('Public Key:', identity.publicKey);
```

### Importing Existing Identity

```typescript
import { PeerIdentity } from '@trnkts/core';

// Import from stored identity data
const identity = await PeerIdentity.import(storedIdentityData, {
  password: 'secure-password'
});

// Unlock for use
const unlockedIdentity = await PeerIdentity.unlock(storedIdentityData, {
  password: 'secure-password'
});
```

### Private Swarm Management

```typescript
import { SwarmKey } from '@trnkts/core';

// Generate a new swarm key
const swarmKey = SwarmKey.generate({
  metadata: {
    name: 'private-cluster',
    description: 'Secure service cluster',
    createdAt: new Date(),
    owner: 'team-alpha'
  }
});

console.log('Swarm Key:', swarmKey.keyString);
console.log('Raw Key:', swarmKey.key);

// Import existing swarm key
const existingSwarm = SwarmKey.fromString(keyString, metadata);

// Use with libp2p
const libp2pOptions = {
  connectionManager: {
    protector: new PreSharedKeyConnectionProtector({
      psk: swarmKey.key
    })
  }
};
```

### Integration with Message System

```typescript
import { PeerIdentity } from '@trnkts/core';
import { MessageBuilder } from '@trnkts/utils';

const identity = await PeerIdentity.generate({
  password: 'peer-password'
});

// Create authenticated messages
const message = MessageBuilder.info({
  body: { status: 'peer-online', capabilities: ['storage', 'compute'] }
})
  .setSource(identity.peerId)
  .setCategory('peer-announcement')
  .build();
```

### Advanced Identity Management

```typescript
import { PeerIdentity } from '@trnkts/core';

// Generate identity with custom options
const identity = await PeerIdentity.generate({
  password: 'secure-password',
  keyDerivationOptions: {
    iterations: 100000,  // PBKDF2 iterations
    saltLength: 32       // Salt length in bytes
  },
  metadata: {
    name: 'production-node',
    environment: 'production',
    region: 'us-east-1',
    capabilities: ['storage', 'compute', 'relay']
  }
});

// Store for later use
const storedData = identity.export();
localStorage.setItem('peer-identity', JSON.stringify(storedData));

// Load and verify
const loaded = await PeerIdentity.import(storedData, {
  password: 'secure-password'
});
```

## API Reference

### PeerIdentity

#### Static Methods

```typescript
// Generate new identity
static async generate(options: GenerateOptions): Promise<PeerIdentity>

// Import existing identity
static async import(data: StoredIdentity, options: UnlockOptions): Promise<PeerIdentity>

// Unlock stored identity for use
static async unlock(data: StoredIdentity, options: UnlockOptions): Promise<UnlockedIdentity>
```

#### Instance Methods

```typescript
// Export identity for storage
export(): StoredIdentity

// Get peer ID
get peerId(): string

// Get public key
get publicKey(): string

// Get metadata
get metadata(): IdentityMetadata
```

### SwarmKey

#### Static Methods

```typescript
// Generate new swarm key
static generate(options?: SwarmKeyOptions): SwarmKeyInfo

// Create from existing key string
static fromString(keyString: string, metadata?: SwarmKeyMetadata): SwarmKeyInfo

// Validate key format
static validate(keyString: string): boolean
```

#### Properties

```typescript
interface SwarmKeyInfo {
  key: Uint8Array;           // Raw 32-byte key
  keyString: string;         // Base64 encoded key
  metadata: SwarmKeyMetadata; // Additional information
}
```

## Types

### Identity Types

```typescript
interface GenerateOptions {
  password: string;
  keyDerivationOptions?: KeyDerivationOptions;
  metadata?: IdentityMetadata;
}

interface UnlockOptions {
  password: string;
}

interface StoredIdentity {
  encryptedPrivateKey: string;
  publicKey: string;
  peerId: string;
  metadata: IdentityMetadata;
}

interface IdentityMetadata {
  name?: string;
  description?: string;
  createdAt?: Date;
  version?: string;
  [key: string]: unknown;
}
```

### Swarm Types

```typescript
interface SwarmKeyOptions {
  metadata?: SwarmKeyMetadata;
}

interface SwarmKeyMetadata {
  name?: string;
  description?: string;
  createdAt?: Date;
  owner?: string;
  [key: string]: unknown;
}
```

## Security Considerations

### Cryptographic Security

- **Ed25519**: Industry-standard elliptic curve cryptography
- **AES-GCM**: Authenticated encryption with 256-bit keys
- **PBKDF2**: Password-based key derivation with configurable iterations
- **Secure Random**: Cryptographically secure random number generation

### Best Practices

1. **Password Security**: Use strong, unique passwords for peer identities
2. **Key Storage**: Store encrypted identity data securely
3. **Swarm Isolation**: Use unique swarm keys for different networks
4. **Regular Rotation**: Rotate swarm keys periodically for enhanced security

### Security Warnings

- Never store unencrypted private keys
- Protect swarm keys as they provide network access
- Use secure channels for swarm key distribution
- Validate peer identities before establishing trust

## Examples

### Service Node Setup

```typescript
import { PeerIdentity, SwarmKey } from '@trnkts/core';

// Service node initialization
async function initializeServiceNode() {
  // Generate or load peer identity
  const identity = await PeerIdentity.generate({
    password: process.env.PEER_PASSWORD,
    metadata: {
      name: 'data-service-node',
      service: 'data-processing',
      version: '2.1.0'
    }
  });

  // Join private network
  const swarmKey = SwarmKey.fromString(
    process.env.SWARM_KEY,
    { name: 'production-cluster' }
  );

  return { identity, swarmKey };
}
```

### Multi-Peer Network

```typescript
import { PeerIdentity, SwarmKey } from '@trnkts/core';

// Create private network with multiple peers
async function createPrivateNetwork() {
  // Generate shared swarm key
  const swarmKey = SwarmKey.generate({
    metadata: {
      name: 'development-cluster',
      description: 'Local development network'
    }
  });

  // Generate peer identities
  const peers = await Promise.all([
    PeerIdentity.generate({ password: 'peer1-pass', metadata: { role: 'coordinator' } }),
    PeerIdentity.generate({ password: 'peer2-pass', metadata: { role: 'worker' } }),
    PeerIdentity.generate({ password: 'peer3-pass', metadata: { role: 'worker' } })
  ]);

  return { swarmKey, peers };
}
```

## Integration

### With libp2p

```typescript
import { createLibp2p } from 'libp2p';
import { PeerIdentity, SwarmKey } from '@trnkts/core';

async function createPeer() {
  const identity = await PeerIdentity.generate({
    password: 'peer-password'
  });

  const swarmKey = SwarmKey.fromString(process.env.SWARM_KEY);

  const libp2p = await createLibp2p({
    peerId: identity.peerId,
    addresses: {
      listen: ['/ip4/0.0.0.0/tcp/0']
    },
    connectionManager: {
      protector: new PreSharedKeyConnectionProtector({
        psk: swarmKey.key
      })
    }
  });

  return libp2p;
}
```

### With IPFS/Helia

```typescript
import { createHelia } from 'helia';
import { PeerIdentity } from '@trnkts/core';

async function createIPFSNode() {
  const identity = await PeerIdentity.generate({
    password: 'ipfs-node-password'
  });

  const helia = await createHelia({
    libp2p: {
      peerId: identity.peerId,
      // Additional libp2p configuration
    }
  });

  return helia;
}
```

## Testing

The package includes comprehensive tests covering:

- Identity generation and management
- Swarm key operations
- Cryptographic functions
- Error handling
- Security scenarios

Run tests:

```bash
npm test
```

## License

MIT

---

For more information, see the [main TRNKTS documentation](../../README.md).
