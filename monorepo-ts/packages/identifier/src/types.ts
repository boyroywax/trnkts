const IdentifierTypes = {
    UUID: 'uuid',
    RANDOM_STRING: 'random_string',
    RANDOM_NUMBER: 'random_number',
    SEQUENTIAL_NUMBER: 'sequential_number'
} as const;

Object.freeze(IdentifierTypes);

type IdentifierType = keyof typeof IdentifierTypes;

type IdentifierValue = string | number | bigint | symbol;

const SequenceTypes = {
    ALPHA: 'alpha',
    ALPHANUMERIC: 'alphanumeric',
    NUMERIC: 'numeric',
} as const;

Object.freeze(SequenceTypes);

type SequenceType = keyof typeof SequenceTypes;

type SequenceValue = string | number;

type IdentifierSeparator = '|' | ',' | '-' | '_' | '.' | ' ' | '~' | '' | undefined;

interface RandomGeneratorConfig {
    min?: number;
    max?: number;
    length?: number;
    prefix?: IdentifierValue;
    suffix?: IdentifierValue;
    separator?: IdentifierSeparator;
}

export {
    IdentifierTypes,
    type IdentifierType,
    type IdentifierValue,
    SequenceTypes,
    type SequenceType,
    type SequenceValue,
    type RandomGeneratorConfig
}