import { randomBytes as cryptoRandomBytes } from 'crypto';
import type { SequenceGeneratorConfig } from './types';
import {
    type IdentifierType,
    type IdentifierValue,
    type RandomGeneratorConfig,
    type SequenceType,
    type SequenceValue,
} from './types';
import {
    alphaNumChars,
    base32CrockfordsEncodeChars,
    nanoidChars,
} from './characters';

/**
 * Generates a RFC 4122 version 4 UUID
 * @returns A string representation of a UUID
 */
function createUuid(): string {
    const bytes: Buffer = cryptoRandomBytes(16);

    // Set version (4) and variant bits according to RFC 4122
    bytes[6] = (bytes[6]! & 0x0f) | 0x40; // Version 4
    bytes[8] = (bytes[8]! & 0x3f) | 0x80; // Variant 10

    const hex = bytes.toString('hex');

    return [
        hex.substring(0, 8),
        hex.substring(8, 12),
        hex.substring(12, 16),
        hex.substring(16, 20),
        hex.substring(20, 32),
    ].join('-');
}

/**
 * Generates a ULID (Universally Unique Lexicographically Sortable Identifier)
 * @param timestamp Optional timestamp in milliseconds (default: current time)
 * @returns A string representation of a ULID
 */
function createUlid(timestamp?: number): string {
    const time = timestamp ?? Date.now();

    // Crockford's Base32 encoding alphabet (excludes I, L, O, U to avoid confusion)
    const encoding = base32CrockfordsEncodeChars;

    // Encode timestamp (48 bits)
    let timeStr = '';
    let timeValue = time;
    for (let i = 9; i >= 0; i--) {
        timeStr = encoding[timeValue % 32] + timeStr;
        timeValue = Math.floor(timeValue / 32);
    }

    // Generate random component (80 bits)
    const randomBytesArray = cryptoRandomBytes(10);

    if (
        randomBytesArray === null ||
        randomBytesArray === undefined ||
        !Buffer.isBuffer(randomBytesArray) ||
        randomBytesArray.length === 0 ||
        randomBytesArray.length > 10 ||
        randomBytesArray.length !== 10
    ) {
        throw new Error(
            'Failed to generate random bytes for ULID'
        );
    }

    let randomStr = '';
    for (let i = 0; i < 16; i++) {
        const byteIndex = Math.floor((i * 5) / 8);
        const bitOffset = (i * 5) % 8;
        let value =
            randomBytesArray[byteIndex]! >> bitOffset;
        if (bitOffset > 3 && byteIndex < 9) {
            value |=
                randomBytesArray[byteIndex + 1]! <<
                (8 - bitOffset);
        }
        randomStr += encoding[value & 31];
    }

    return timeStr + randomStr;
}

/**
 * Generates a nanoid - a URL-safe, unique string ID
 * @param alphabet Optional custom alphabet (default: URL-safe characters)
 * @param size Optional size of the ID (default: 21)
 * @returns A string representation of a nanoid
 */
function createNanoid(
    alphabet?: string,
    size: number = 21
): string {
    const chars = alphabet ?? nanoidChars;
    const mask =
        (2 << (Math.log(chars.length - 1) / Math.LN2)) - 1;
    const step = -~((1.6 * mask * size) / chars.length);

    let id = '';
    while (true) {
        const bytes = cryptoRandomBytes(step);
        for (let i = 0; i < step; i++) {
            const byte = bytes[i]! & mask;
            if (chars[byte]) {
                id += chars[byte];
                if (id.length === size) return id;
            }
        }
    }
}

/**
 * Generates a cuid (Collision-resistant Unique Identifier)
 * @returns A string representation of a cuid
 */
function createCuid(): string {
    const timestamp = Date.now().toString(36);
    const counter = Math.floor(Math.random() * 1679616)
        .toString(36)
        .padStart(4, '0');
    const fingerprint = 'c'; // Simple fingerprint for collision resistance
    const randomSuffix =
        cryptoRandomBytes(4).toString('hex');

    return `c${timestamp}${counter}${fingerprint}${randomSuffix}`;
}

/**
 * Generates a snowflake ID (Twitter-like distributed ID)
 * @param workerId Optional worker ID (0-31, default: random)
 * @param datacenterId Optional datacenter ID (0-31, default: random)
 * @returns A string representation of a snowflake ID
 */
function createSnowflake(
    workerId?: number,
    datacenterId?: number
): string {
    const epoch = 1288834974657; // Twitter epoch (2010-11-04)
    const timestamp = BigInt(Date.now() - epoch);
    const datacenter = BigInt(
        datacenterId ?? Math.floor(Math.random() * 32)
    );
    const worker = BigInt(
        workerId ?? Math.floor(Math.random() * 32)
    );
    const sequence = BigInt(
        Math.floor(Math.random() * 4096)
    );

    const id =
        (timestamp << 22n) |
        (datacenter << 17n) |
        (worker << 12n) |
        sequence;

    return id.toString();
}

/**
 * Generates a random string of characters and numbers (upper and lower case)
 * @param length The length of the string to generate (default: 8)
 * @returns A randomly generated alphanumeric string
 */
function createRandomString(length: number = 8): string {
    let result: string = '';

    for (let i = 0; i < length; i++) {
        const randomIndex: number = Math.floor(
            Math.random() * alphaNumChars.length
        );
        result += alphaNumChars[randomIndex];
    }

    return result;
}

/**
 * Generates a random number within a specified range
 * @param min The minimum value (inclusive)
 * @param max The maximum value (inclusive)
 * @returns A random number between min and max
 */
function createRandomNumber(
    min: number,
    max: number
): number {
    return (
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

/**
 * Creates a function that generates sequential numbers starting from an initial value
 * @param start The starting number (default: 1)
 * @param step The increment step (default: 1)
 * @returns A function that returns the next number in the sequence
 */
function createSequentialNumber(
    start: number = 1,
    step: number = 1
): () => number {
    let current: number = start;

    return (): number => {
        const value: number = current;
        current += step;
        return value;
    };
}

const defaultSequenceType: SequenceType = 'NUMERIC';
const defaultSequenceConfig: SequenceGeneratorConfig = {
    start: 1,
    step: 1,
};

class SequenceGenerator {
    private current: SequenceValue;
    private type: SequenceType;
    private config: SequenceGeneratorConfig;

    constructor(
        type: SequenceType = defaultSequenceType,
        config: SequenceGeneratorConfig = defaultSequenceConfig
    ) {
        this.type = type;
        this.config = {
            start: !config.start
                ? defaultSequenceConfig.start
                : config.start,
            step: !config.step
                ? defaultSequenceConfig.step
                : config.step,
        };
        this.current = this.config.start || 0;
    }

    public next(): SequenceValue {
        switch (this.type) {
            case 'ALPHA': {
                const nextCharCode: number =
                    (this.current as string).charCodeAt(0) +
                    this.config.step;
                this.current =
                    String.fromCharCode(nextCharCode);
                break;
            }
            case 'ALPHANUMERIC': {
                const currentIndex: number =
                    alphaNumChars.indexOf(
                        this.current as string
                    );
                const nextIndex: number =
                    (currentIndex + this.config.step) %
                    alphaNumChars.length;
                this.current = alphaNumChars[
                    nextIndex
                ] as SequenceValue;
                break;
            }
            case 'NUMERIC': {
                const nextNumber: number =
                    (this.current as number) +
                    this.config.step;
                this.current = nextNumber;
                break;
            }
            default:
                throw new Error(
                    `Unsupported sequence type: ${this.type}`
                );
        }

        return this.current;
    }
}

class RandomGenerator {
    private type: IdentifierType;
    private config: RandomGeneratorConfig;

    constructor(
        type: IdentifierType,
        config: RandomGeneratorConfig = {}
    ) {
        this.type = type;
        this.config = config;
    }

    public generate(): IdentifierValue {
        let value: IdentifierValue = '';

        if (this.config.prefix) {
            value += String(this.config.prefix);
        }

        if (this.config.prefixSeparator) {
            value += String(this.config.prefixSeparator);
        }

        switch (this.type) {
            case 'UUID':
                value += createUuid();
                break;
            case 'ULID':
                value += createUlid(this.config.timestamp);
                break;
            case 'NANOID':
                value += createNanoid(
                    this.config.alphabet,
                    this.config.size
                );
                break;
            case 'CUID':
                value += createCuid();
                break;
            case 'SNOWFLAKE':
                value += createSnowflake(
                    this.config.workerId,
                    this.config.datacenterId
                );
                break;
            case 'RANDOM_STRING':
                value += createRandomString(
                    this.config.length
                );
                break;
            case 'RANDOM_NUMBER':
                value += createRandomNumber(
                    this.config.min || 0,
                    this.config.max || 100
                );
                break;
            default:
                throw new Error(
                    `Unsupported identifier type: ${this.type}`
                );
        }

        if (this.config.suffixSeparator) {
            value += String(this.config.suffixSeparator);
        }

        if (this.config.suffix) {
            value += String(this.config.suffix);
        }

        return value;
    }
}

/**
 * Creates a formatter function that adds prefix and/or suffix to identifier values
 */
function createPrefixSuffix(
    prefix: string = '',
    suffix: string = ''
): (value: IdentifierValue) => string {
    return (value: IdentifierValue): string => {
        return `${prefix}${String(value)}${suffix}`;
    };
}

export {
    createUuid,
    createUlid,
    createNanoid,
    createCuid,
    createSnowflake,
    createRandomString,
    createRandomNumber,
    createSequentialNumber,
    createPrefixSuffix,
    SequenceGenerator,
    RandomGenerator,
};
