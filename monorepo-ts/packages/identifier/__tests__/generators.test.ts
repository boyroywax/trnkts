import {
    createUuid,
    createRandomString,
    createRandomNumber,
    createSequentialNumber,
} from '../src/generators';

describe('createUuid', () => {
    it('should generate a valid RFC 4122 version 4 UUID', () => {
        const uuid = createUuid();
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        expect(uuid).toMatch(uuidRegex);
    });

    it('should generate different UUIDs on each call', () => {
        const uuid1 = createUuid();
        const uuid2 = createUuid();

        expect(uuid1).not.toBe(uuid2);
    });
});

describe('createRandomString', () => {
    it('should generate a random alphanumeric string of default length 8', () => {
        const randomString = createRandomString();
        expect(randomString).toHaveLength(8);
        expect(randomString).toMatch(/^[A-Za-z0-9]+$/);
    });

    it('should generate a random alphanumeric string of specified length', () => {
        const length = 12;
        const randomString = createRandomString(length);
        expect(randomString).toHaveLength(length);
        expect(randomString).toMatch(/^[A-Za-z0-9]+$/);
    });

    it('should generate different strings on each call', () => {
        const string1 = createRandomString();
        const string2 = createRandomString();

        expect(string1).not.toBe(string2);
    });
});

describe('createRandomNumber', () => {
    it('should generate a random number within the specified range', () => {
        const min = 1;
        const max = 10;
        const randomNumber = createRandomNumber(min, max);

        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('should generate different numbers on each call', () => {
        const min = 1;
        const max = 100;
        const number1 = createRandomNumber(min, max);
        const number2 = createRandomNumber(min, max);

        expect(number1).not.toBe(number2);
    });
});

describe('createSequentialNumber', () => {
    it('should start from the specified initial value and increment by the specified step', () => {
        const start = 5;
        const step = 2;
        const nextNumber = createSequentialNumber(start, step);

        expect(nextNumber()).toBe(start);
        expect(nextNumber()).toBe(start + step);
        expect(nextNumber()).toBe(start + 2 * step);
    });

    it('should default to starting at 1 and incrementing by 1 if no parameters are provided', () => {
        const nextNumber = createSequentialNumber();

        expect(nextNumber()).toBe(1);
        expect(nextNumber()).toBe(2);
        expect(nextNumber()).toBe(3);
    });
});
