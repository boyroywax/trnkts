import { randomBytes } from 'crypto';
import { IdentifierType, IdentifierValue, RandomGeneratorConfig, SequenceType, SequenceTypes, SequenceValue } from './types';

/**
 * Generates a RFC 4122 version 4 UUID
 * @returns A string representation of a UUID
 */
function createUuid(): string {
    const bytes: Buffer = randomBytes(16);

    // Set version (4) and variant bits according to RFC 4122
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant 10

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
 * Generates a random string of characters and numbers (upper and lower case)
 * @param length The length of the string to generate (default: 8)
 * @returns A randomly generated alphanumeric string
 */
function createRandomString(length: number = 8): string {
    const characters: string =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';

    for (let i = 0; i < length; i++) {
        const randomIndex: number = Math.floor(
            Math.random() * characters.length
        );
        result += characters[randomIndex];
    }

    return result;
}

/**
 * Generates a random number within a specified range
 * @param min The minimum value (inclusive)
 * @param max The maximum value (inclusive)
 * @returns A random number between min and max
 */
function createRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

/**
 * Creates a function that adds a prefix and/or suffix to identifier values
 * @param prefix Optional prefix to add before the identifier (default: empty string)
 * @param suffix Optional suffix to add after the identifier (default: empty string)
 * @returns A function that takes an identifier value and returns it with prefix/suffix applied
 */
function createPrefixSuffix(
    prefix: string = '',
    suffix: string = ''
): (value: IdentifierValue) => string {
    return (value: IdentifierValue): string => {
        return `${prefix}${String(value)}${suffix}`;
    };
}

class SequenceGenerator {
    private current: SequenceValue;
    private type: SequenceType;
    private step: number;

    constructor(
        initial: SequenceValue = 0,
        step: number = 1,
        type: SequenceType = 'NUMERIC'
    ) {
        this.current = initial;
        this.step = step;
        this.type = type;
    }

    public next(): SequenceValue {
        switch (this.type) {
            case 'ALPHA':
                const nextCharCode: number = (this.current as string).charCodeAt(0) + this.step;
                this.current = String.fromCharCode(nextCharCode);
                break;
            case 'ALPHANUMERIC':
                const alphaNumChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const currentIndex: number = alphaNumChars.indexOf(this.current as string);
                const nextIndex: number = (currentIndex + this.step) % alphaNumChars.length;
                this.current = alphaNumChars[nextIndex] as SequenceValue;
                break;
            case 'NUMERIC':
                const nextNumber: number = (this.current as number) + this.step;
                this.current = nextNumber;
                break;
            default:
                throw new Error(`Unsupported sequence type: ${this.type}`);
        }

        return this.current;
    }
}

class RandomGenerator {
    private type: IdentifierType;
    private config: RandomGeneratorConfig;

    constructor(type: IdentifierType, config: RandomGeneratorConfig = {}) {
        this.type = type;
        this.config = config;
    }

    public generate(): IdentifierValue {
        let value: IdentifierValue = `${String(this.config.prefix)}${this.config.separator}` || '';
        switch (this.type) {
            case 'UUID':
                value += createUuid();
                break;
            case 'RANDOM_STRING':
                value = createRandomString(this.config.length);
                break;
            case 'RANDOM_NUMBER':
                value += createRandomNumber(this.config.min, this.config.max);
                break;
            case 'SEQUENTIAL_NUMBER':
                value += createSequentialNumber(this.config.start, this.config.step);
                break;
            default:
                throw new Error(`Unsupported identifier type: ${this.type}`);
        }
        return value;
    }
}

export {
    createUuid,
    createRandomString,
    createRandomNumber,
    createSequentialNumber,
    createPrefixSuffix,
    SequenceGenerator,
};