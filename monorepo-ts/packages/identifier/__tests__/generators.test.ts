import {
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

describe('createUlid', () => {
    it('should generate a valid ULID', () => {
        const ulid = createUlid();
        expect(ulid).toHaveLength(26);
        expect(ulid).toMatch(/^[0-7][0-9A-HJKMNP-TV-Z]{25}$/);
    });

    it('should generate different ULIDs on each call', () => {
        const ulid1 = createUlid();
        const ulid2 = createUlid();
        expect(ulid1).not.toBe(ulid2);
    });

    it('should accept custom timestamp', () => {
        const timestamp = 1640995200000; // 2022-01-01
        const ulid = createUlid(timestamp);
        expect(ulid).toHaveLength(26);
    });
});

describe('createNanoid', () => {
    it('should generate a nanoid with default size', () => {
        const nanoid = createNanoid();
        expect(nanoid).toHaveLength(21);
        expect(nanoid).toMatch(/^[A-Za-z0-9_-]+$/);
    });

    it('should generate nanoid with custom size', () => {
        const size = 10;
        const nanoid = createNanoid(undefined, size);
        expect(nanoid).toHaveLength(size);
    });

    it('should generate nanoid with custom alphabet', () => {
        const alphabet = '0123456789';
        const nanoid = createNanoid(alphabet, 10);
        expect(nanoid).toMatch(/^[0-9]+$/);
    });
});

describe('createCuid', () => {
    it('should generate a valid CUID', () => {
        const cuid = createCuid();
        expect(cuid).toMatch(/^c[0-9a-z]+$/);
        expect(cuid.length).toBeGreaterThan(10);
    });

    it('should generate different CUIDs on each call', () => {
        const cuid1 = createCuid();
        const cuid2 = createCuid();
        expect(cuid1).not.toBe(cuid2);
    });
});

describe('createSnowflake', () => {
    it('should generate a valid snowflake ID', () => {
        const snowflake = createSnowflake();
        expect(snowflake).toMatch(/^\d+$/);
        expect(BigInt(snowflake)).toBeGreaterThan(0n);
    });

    it('should generate different snowflake IDs on each call', () => {
        const snowflake1 = createSnowflake();
        const snowflake2 = createSnowflake();
        expect(snowflake1).not.toBe(snowflake2);
    });

    it('should accept custom worker and datacenter IDs', () => {
        const snowflake = createSnowflake(1, 2);
        expect(snowflake).toMatch(/^\d+$/);
    });
});

describe('createPrefixSuffix', () => {
    it('should add prefix and suffix to identifier value', () => {
        const formatter = createPrefixSuffix('PRE_', '_SUF');
        const result = formatter('test');
        expect(result).toBe('PRE_test_SUF');
    });

    it('should work with only prefix', () => {
        const formatter = createPrefixSuffix('PRE_');
        const result = formatter('test');
        expect(result).toBe('PRE_test');
    });

    it('should work with only suffix', () => {
        const formatter = createPrefixSuffix('', '_SUF');
        const result = formatter('test');
        expect(result).toBe('test_SUF');
    });
});

describe('SequenceGenerator', () => {
    it('should generate numeric sequence', () => {
        const generator = new SequenceGenerator('NUMERIC', {
            start: 1,
            step: 1,
        });
        expect(generator.next()).toBe(2);
        expect(generator.next()).toBe(3);
        expect(generator.next()).toBe(4);
    });

    it('should generate alphabetic sequence', () => {
        const generator = new SequenceGenerator('ALPHA', {
            start: 'A',
            step: 1,
        });
        expect(generator.next()).toBe('B');
        expect(generator.next()).toBe('C');
        expect(generator.next()).toBe('D');
    });

    it('should generate alphanumeric sequence', () => {
        const generator = new SequenceGenerator('ALPHANUMERIC', {
            start: 'A',
            step: 1,
        });
        const result = generator.next();
        expect(typeof result).toBe('string');
        expect(result).toMatch(/^[A-Za-z0-9]$/);
    });
});

describe('RandomGenerator', () => {
    it('should generate UUID identifier', () => {
        const generator = new RandomGenerator('UUID');
        const result = generator.generate();
        expect(typeof result).toBe('string');
        expect(result).toMatch(
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
    });

    it('should generate ULID identifier', () => {
        const generator = new RandomGenerator('ULID');
        const result = generator.generate();
        expect(typeof result).toBe('string');
        expect(result).toHaveLength(26);
    });

    it('should generate random string with custom length', () => {
        const generator = new RandomGenerator('RANDOM_STRING', { length: 10 });
        const result = generator.generate();
        expect(typeof result).toBe('string');
        expect(result).toHaveLength(10);
    });

    it('should add prefix and suffix', () => {
        const generator = new RandomGenerator('UUID', {
            prefix: 'id_',
            suffix: '_end',
            prefixSeparator: '',
            suffixSeparator: '',
        });
        const result = generator.generate() as string;
        expect(result.startsWith('id_')).toBe(true);
        expect(result.endsWith('_end')).toBe(true);
    });
});
