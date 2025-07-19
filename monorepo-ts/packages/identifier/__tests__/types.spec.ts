import {
    IdentifierTypes,
    type IdentifierType,
    type IdentifierValue,
    SequenceTypes,
    type SequenceType,
    type SequenceValue,
    type IdentifierSeparator,
    type RandomGeneratorConfig,
} from '../src/types';

describe('IdentifierTypes', () => {
    it('should have correct enum values', () => {
        expect(IdentifierTypes.UUID).toBe('uuid');
        expect(IdentifierTypes.RANDOM_STRING).toBe('random_string');
        expect(IdentifierTypes.RANDOM_NUMBER).toBe('random_number');
        expect(IdentifierTypes.SEQUENTIAL_NUMBER).toBe('sequential_number');
    });

    it('should have all expected enum keys', () => {
        const expectedKeys = ['UUID', 'RANDOM_STRING', 'RANDOM_NUMBER', 'SEQUENTIAL_NUMBER'];
        const actualKeys = Object.keys(IdentifierTypes);
        expect(actualKeys).toEqual(expect.arrayContaining(expectedKeys));
        expect(actualKeys).toHaveLength(expectedKeys.length);
    });

    it('should be frozen object', () => {
        expect(Object.isFrozen(IdentifierTypes)).toBe(true);
    });
});

describe('IdentifierType', () => {
    it('should accept valid identifier type keys', () => {
        const validTypes: IdentifierType[] = ['UUID', 'RANDOM_STRING', 'RANDOM_NUMBER', 'SEQUENTIAL_NUMBER'];
        
        validTypes.forEach(type => {
            expect(typeof type).toBe('string');
            expect(type in IdentifierTypes).toBe(true);
        });
    });
});

describe('IdentifierValue', () => {
    it('should accept string values', () => {
        const stringValue: IdentifierValue = 'test-string';
        expect(typeof stringValue).toBe('string');
    });

    it('should accept number values', () => {
        const numberValue: IdentifierValue = 123;
        expect(typeof numberValue).toBe('number');
    });

    it('should accept bigint values', () => {
        const bigintValue: IdentifierValue = BigInt(123);
        expect(typeof bigintValue).toBe('bigint');
    });

    it('should accept symbol values', () => {
        const symbolValue: IdentifierValue = Symbol('test');
        expect(typeof symbolValue).toBe('symbol');
    });
});

describe('SequenceType', () => {
    it('should have correct enum values', () => {
        expect(SequenceTypes.ALPHA).toBe('alpha');
        expect(SequenceTypes.ALPHANUMERIC).toBe('alphanumeric');
        expect(SequenceTypes.NUMERIC).toBe('numeric');
    });

    it('should have all expected enum keys', () => {
        const expectedKeys = ['ALPHA', 'ALPHANUMERIC', 'NUMERIC'];
        const actualKeys = Object.keys(SequenceTypes);
        expect(actualKeys).toEqual(expect.arrayContaining(expectedKeys));
        expect(actualKeys).toHaveLength(expectedKeys.length);
    });

    it('should be frozen object', () => {
        expect(Object.isFrozen(SequenceTypes)).toBe(true);
    });
});


describe('SequenceValue', () => {
    it('should accept string values', () => {
        const stringValue: SequenceValue = 'A';
        expect(typeof stringValue).toBe('string');
    });

    it('should accept number values', () => {
        const numberValue: SequenceValue = 1;
        expect(typeof numberValue).toBe('number');
    });

    it('should not accept other types', () => {
        const invalidValue: any = true; // boolean type
        expect(() => {
            const invalidValue: SequenceValue = invalidValue;
        }).toThrow();
    });
});

describe('IdentifierSeparator', () => {
    it('should accept valid separator values', () => {
        const validSeparators: IdentifierSeparator[] = ['|', ',', '-', '_', '.', ' ', '~', '', undefined];
        
        validSeparators.forEach(separator => {
            expect(typeof separator).toBe('string' || 'undefined');
        });
    });

    it('should not accept invalid separator values', () => {
        const invalidSeparator: any = 123; // number type
        expect(() => {
            const invalidValue: IdentifierSeparator = invalidSeparator;
        }).toThrow();
    });
});

describe('Type exports', () => {
    it('should export IdentifierTypes enum', () => {
        expect(IdentifierTypes).toBeDefined();
        expect(typeof IdentifierTypes).toBe('object');
    });

    it('should have correct enum structure', () => {
        const enumValues = Object.values(IdentifierTypes);
        expect(enumValues).toContain('uuid');
        expect(enumValues).toContain('random_string');
        expect(enumValues).toContain('random_number');
        expect(enumValues).toContain('sequential_number');
    });
});