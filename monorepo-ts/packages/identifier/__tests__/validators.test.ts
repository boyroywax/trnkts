import {
    validateUUID,
    validateULID,
    validateNanoid,
    validateCuid,
    validateSnowflake,
    validateCustom
} from '../src/validators';
import {
    createUuid,
    createUlid,
    createNanoid,
    createCuid,
    createSnowflake
} from '../src/generators';

describe('validateUUID', () => {
    it('should validate correct UUID v4', () => {
        const uuid = createUuid();
        const result = validateUUID(uuid);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeUndefined();
    });

    it('should reject invalid UUID format', () => {
        const result = validateUUID('invalid-uuid');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Invalid UUID format');
    });

    it('should reject UUID v1', () => {
        const uuidV1 = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        const result = validateUUID(uuidV1);
        expect(result.isValid).toBe(false);
    });
});

describe('validateULID', () => {
    it('should validate correct ULID', () => {
        const ulid = createUlid();
        const result = validateULID(ulid);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeUndefined();
    });

    it('should reject wrong length ULID', () => {
        const result = validateULID('01ARZ3NDEKTSV4RRFFQ69G5FA'); // 25 chars instead of 26
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Expected 26 characters');
    });

    it('should reject invalid characters', () => {
        const result = validateULID('01ARZ3NDEKTSV4RRFFQ69G5FAI'); // Contains 'I'
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('invalid characters');
    });
});

describe('validateNanoid', () => {
    it('should validate correct nanoid', () => {
        const nanoid = createNanoid();
        const result = validateNanoid(nanoid);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeUndefined();
    });

    it('should validate custom size nanoid', () => {
        const nanoid = createNanoid(undefined, 10);
        const result = validateNanoid(nanoid, 10);
        expect(result.isValid).toBe(true);
    });

    it('should reject wrong size', () => {
        const result = validateNanoid('short', 21);
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Expected 21 characters');
    });

    it('should reject invalid characters', () => {
        const result = validateNanoid('123456789012345678901!'); // Contains '!'
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Invalid Nanoid format.');
    });
});

describe('validateCuid', () => {
    it('should validate correct CUID', () => {
        const cuid = createCuid();
        const result = validateCuid(cuid);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeUndefined();
    });

    it('should reject CUID not starting with c', () => {
        const result = validateCuid('x1234567890');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Must start with "c"');
    });

    it('should reject too short CUID', () => {
        const result = validateCuid('c123');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Too short');
    });
});

describe('validateSnowflake', () => {
    it('should validate correct snowflake ID', () => {
        const snowflake = createSnowflake();
        const result = validateSnowflake(snowflake);
        expect(result.isValid).toBe(true);
        expect(result.error).toBeUndefined();
    });

    it('should reject non-numeric snowflake', () => {
        const result = validateSnowflake('abc123');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Expected 17-19 digit number');
    });

    it('should reject too short snowflake', () => {
        const result = validateSnowflake('123');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Expected 17-19 digit number');
    });
});

describe('validateCustom', () => {
    it('should validate with custom pattern', () => {
        const pattern = /^TEST_\d+$/;
        const result = validateCustom('TEST_123', pattern);
        expect(result.isValid).toBe(true);
    });

    it('should reject invalid pattern', () => {
        const pattern = /^TEST_\d+$/;
        const result = validateCustom('INVALID_123', pattern);
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('does not match required pattern');
    });

    it('should use default validation without pattern', () => {
        const result = validateCustom('valid_identifier');
        expect(result.isValid).toBe(true);
    });

    it('should reject empty string without pattern', () => {
        const result = validateCustom('');
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Must be non-empty');
    });
});
