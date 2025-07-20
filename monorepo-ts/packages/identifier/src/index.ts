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
} from './generators';

import {
    validateUUID,
    validateULID,
    validateNanoid,
    validateCuid,
    validateSnowflake,
    validateCustom,
    type ValidationResult,
} from './validators';

import {
    IdentifierType,
    IdentifierTypes,
    type IdentifierValue,
    SequenceTypes,
    type SequenceType,
    type SequenceValue,
    type IdentifierSeparator,
    type RandomGeneratorConfig,
} from './types';

const TRNKTS_IDENTIFIER_DEFAULT_TYPE: IdentifierType = (process.env['TRNKTS_IDENTIFIER_DEFAULT_TYPE'] as IdentifierType) || 'UUID';
const TRNKTS_IDENTIFIER_NUMBER_MIN: number = parseInt(process.env['TRNKTS_IDENTIFIER_NUMBER_MIN'] || '0', 10);
const TRNKTS_IDENTIFIER_NUMBER_MAX: number = parseInt(process.env['TRNKTS_IDENTIFIER_NUMBER_MAX'] || '9999999999', 10);

class Identifier {
    private value: IdentifierValue;
    public type: IdentifierType;

    constructor(value?: IdentifierValue, type: IdentifierType = TRNKTS_IDENTIFIER_DEFAULT_TYPE) {
        if (value === undefined) {
            switch (type) {
                case 'UUID':
                    this.value = createUuid();
                    break;
                case 'ULID':
                    this.value = createUlid();
                    break;
                case 'NANOID':
                    this.value = createNanoid();
                    break;
                case 'CUID':
                    this.value = createCuid();
                    break;
                case 'SNOWFLAKE':
                    this.value = createSnowflake();
                    break;
                case 'RANDOM_STRING':
                    this.value = createRandomString();
                    break;
                case 'RANDOM_NUMBER':
                    this.value = createRandomNumber(TRNKTS_IDENTIFIER_NUMBER_MIN, TRNKTS_IDENTIFIER_NUMBER_MAX);
                    break;
                case 'SEQUENTIAL_NUMBER':
                    const sequentialGenerator = createSequentialNumber();
                    this.value = sequentialGenerator();
                    break;
                default:
                    throw new Error('Invalid identifier type');
            }
        } else {
            this.value = value;
        }

        this.type = type || 'UUID'; // Default to UUID if type is not provided
    }

    public getValue(): IdentifierValue {
        return this.value;
    }

    public getType(): IdentifierType {
        return this.type;
    }

    public toString(): string {
        return `${String(this.value)}`;
    }
}

export {
    // Core identifier class
    Identifier,
    
    // Generator functions
    createUuid,
    createUlid,
    createNanoid,
    createCuid,
    createSnowflake,
    createRandomString,
    createRandomNumber,
    createSequentialNumber,
    createPrefixSuffix,
    
    // Generator classes
    SequenceGenerator,
    RandomGenerator,
    
    // Validator functions
    validateUUID,
    validateULID,
    validateNanoid,
    validateCuid,
    validateSnowflake,
    validateCustom,
    
    // Types and enums
    IdentifierTypes,
    SequenceTypes,
    type IdentifierType,
    type IdentifierValue,
    type SequenceType,
    type SequenceValue,
    type IdentifierSeparator,
    type RandomGeneratorConfig,
    type ValidationResult,
};