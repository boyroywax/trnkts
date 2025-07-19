import {
    delay,
    formatDate,
    capitalize,
    isDefined,
    generateId,
} from '../src/index';

describe('Utils', () => {
    describe('delay', () => {
        it('should delay execution for the specified time', async () => {
            const start = Date.now();
            await delay(100);
            const end = Date.now();
            expect(end - start).toBeGreaterThanOrEqual(100);
        });
    });

    describe('formatDate', () => {
        it('should format date to ISO string without time', () => {
            const date = new Date('2025-07-16T10:30:00Z');
            expect(formatDate(date)).toBe('2025-07-16');
        });

        it('should handle different dates', () => {
            const date = new Date('2023-12-31T23:59:59Z');
            expect(formatDate(date)).toBe('2023-12-31');
        });
    });

    describe('capitalize', () => {
        it('should capitalize the first letter', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('WORLD')).toBe('World');
            expect(capitalize('tEST')).toBe('Test');
        });

        it('should handle edge cases', () => {
            expect(capitalize('')).toBe('');
            expect(capitalize('a')).toBe('A');
        });
    });

    describe('isDefined', () => {
        it('should return true for defined values', () => {
            expect(isDefined('test')).toBe(true);
            expect(isDefined(0)).toBe(true);
            expect(isDefined(false)).toBe(true);
            expect(isDefined([])).toBe(true);
            expect(isDefined({})).toBe(true);
        });

        it('should return false for undefined or null values', () => {
            expect(isDefined(null)).toBe(false);
            expect(isDefined(undefined)).toBe(false);
        });
    });

    describe('generateId', () => {
        it('should generate ID with default length', () => {
            const id = generateId();
            expect(id).toHaveLength(8);
            expect(typeof id).toBe('string');
        });

        it('should generate ID with custom length', () => {
            const id = generateId(12);
            expect(id).toHaveLength(12);
        });

        it('should generate unique IDs', () => {
            const id1 = generateId();
            const id2 = generateId();
            expect(id1).not.toBe(id2);
        });

        it('should only contain alphanumeric characters', () => {
            const id = generateId(20);
            expect(id).toMatch(/^[A-Za-z0-9]+$/);
        });
    });
});
