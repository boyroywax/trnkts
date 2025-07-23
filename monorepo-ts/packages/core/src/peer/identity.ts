
'use client';

import { keys } from '@libp2p/crypto';
import { peerIdFromPrivateKey } from '@libp2p/peer-id';
import type { PrivateKey } from '@libp2p/interface';
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string';
import { toString as uint8ArrayToString } from 'uint8arrays/to-string';

const IDENTITY_STORE_KEY = 'talknice-identities-v1';
const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Identity types
export interface StoredIdentity {
  id: string; // UUID for local management
  name: string;
  peerId: string; // The public Peer ID string for display
  encryptedData: string; // The full encrypted JSON payload
}

// --- Password-based Encryption ---

async function getIdentityKey(password: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('talknice-identity-salt'),
      iterations: 250000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

export async function encryptIdentityData(data: string, password: string): Promise<string> {
  const key = await getIdentityKey(password);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encodedData = encoder.encode(data);

  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encodedData);

  const encryptedPackage = {
    iv: uint8ArrayToString(iv, 'base64'),
    data: uint8ArrayToString(new Uint8Array(encrypted), 'base64'),
  };

  return JSON.stringify(encryptedPackage);
}

export async function decryptIdentityData(encryptedData: string, password: string): Promise<string | null> {
  try {
    const key = await getIdentityKey(password);
    const { iv, data } = JSON.parse(encryptedData);
    const ivBytes = uint8ArrayFromString(iv, 'base64');
    const dataBytes = uint8ArrayFromString(data, 'base64');
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivBytes }, key, dataBytes);
    return decoder.decode(decrypted);
  } catch (e) {
    console.error('Decryption failed', e);
    return null;
  }
}

// --- Public Identity Management Functions ---

export function getStoredIdentities(storage: Storage = localStorage): StoredIdentity[] {
  if (typeof window === 'undefined') return [];
  const stored = storage.getItem(IDENTITY_STORE_KEY);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    // Basic validation
    if (Array.isArray(parsed) && parsed.every((item) => 'id' in item && 'name' in item && 'peerId' in item)) {
      return parsed;
    }
  } catch (e) {
    console.error('Failed to parse identities from storage', e);
    return [];
  }
  return [];
}

export function saveIdentities(identities: StoredIdentity[], storage: Storage = localStorage): void {
  if (typeof window === 'undefined') return;
  storage.setItem(IDENTITY_STORE_KEY, JSON.stringify(identities));
}

export async function generateIdentity(name: string, password: string): Promise<StoredIdentity> {
  const privateKey = await keys.generateKeyPair('Ed25519');
  const peerId = peerIdFromPrivateKey(privateKey);

  // We only need to encrypt the marshalled private key, encoded as base64.
  const marshalledPrivKey = privateKey.raw;
  const encryptedData = await encryptIdentityData(uint8ArrayToString(marshalledPrivKey, 'base64'), password);

  return {
    id: crypto.randomUUID(),
    name,
    peerId: peerId.toString(),
    encryptedData,
  };
}

export async function unlockIdentity(
  identity: StoredIdentity,
  password: string
): Promise<PrivateKey | null> {
  const decryptedBase64Key = await decryptIdentityData(identity.encryptedData, password);
  if (!decryptedBase64Key) {
    console.error('unlockIdentity: Decryption returned null. Incorrect password or corrupt data.');
    return null;
  }

  try {
    const privateKeyBytes = uint8ArrayFromString(decryptedBase64Key, 'base64');
    const privateKey = keys.privateKeyFromRaw(privateKeyBytes);
    
    // Security check: re-derive peerId and compare
    const derivedPeerId = peerIdFromPrivateKey(privateKey);
    if (derivedPeerId.toString() !== identity.peerId) {
       console.error('FATAL: Re-derived PeerId does not match stored PeerId. Identity data may be corrupt.');
       return null;
    }
    
    return privateKey;
  } catch (e) {
    console.error('FATAL: Failed to unmarshal private key from stored identity.', e);
    return null;
  }
}


export async function createIdentityFromImport(name: string, encryptedData: string, password: string): Promise<StoredIdentity | null> {
  const decryptedBase64Key = await decryptIdentityData(encryptedData, password);
  if (!decryptedBase64Key) {
    console.error('importIdentity: Decryption failed. Incorrect password or corrupt data.');
    return null;
  }
  
  try {
    const privateKeyBytes = uint8ArrayFromString(decryptedBase64Key, 'base64');
    const privateKey = keys.privateKeyFromRaw(privateKeyBytes);
    const peerId = peerIdFromPrivateKey(privateKey);

    return {
      id: crypto.randomUUID(),
      name,
      peerId: peerId.toString(),
      encryptedData,
    };
  } catch (e) {
    console.error('importIdentity: Failed to parse or validate imported identity key.', e);
    return null;
  }
}
