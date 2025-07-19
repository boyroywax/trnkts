const IdentifierTypes = {
    UUID: 'uuid',
    RANDOM_STRING: 'random_string',
    RANDOM_NUMBER: 'random_number',
    SEQUENTIAL_NUMBER: 'sequential_number'
} as const;

Object.freeze(IdentifierTypes);

type IdentifierType = keyof typeof IdentifierTypes;

type IdentifierValue = string | number | bigint | symbol;


export {
    IdentifierTypes,
    type IdentifierType,
    type IdentifierValue
}