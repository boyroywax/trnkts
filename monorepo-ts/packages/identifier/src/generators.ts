import { randomBytes } from 'crypto';

/**
 * Generates a RFC 4122 version 4 UUID
 * @returns A string representation of a UUID
 */
export function createUuid(): string {
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
export function createRandomString(length: number = 8): string {
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
export function createRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates a function that generates sequential numbers starting from an initial value
 * @param start The starting number (default: 1)
 * @param step The increment step (default: 1)
 * @returns A function that returns the next number in the sequence
 */
export function createSequentialNumber(
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
