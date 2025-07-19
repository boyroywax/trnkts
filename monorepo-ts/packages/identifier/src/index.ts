import {
    createUuid,
    createRandomString,
    createRandomNumber,
    createSequentialNumber,
} from './generators';

import {
    IdentifierType,
    IdentifierTypes,
    type IdentifierValue,
} from './types';

const TRNKTS_IDENTIFIER_DEFAULT_TYPE: IdentifierType = process.env['TRNKTS_IDENTIFIER_DEFAULT_TYPE'] as IdentifierType || IdentifierTypes.UUID;
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
                case 'RANDOM_STRING':
                    this.value = createRandomString();
                    break;
                case 'RANDOM_NUMBER':
                    this.value = createRandomNumber(TRNKTS_IDENTIFIER_NUMBER_MIN, TRNKTS_IDENTIFIER_NUMBER_MAX);
                    break;
                case 'SEQUENTIAL_NUMBER':
                    this.value = 
                    break;
                default:
                    throw new Error('Invalid identifier type');
            }
        } else {
            this.value = value;
        }

        this.type = type || IdentifierTypes.UUID; // Default to UUID if type is not provided
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
    Identifier
}