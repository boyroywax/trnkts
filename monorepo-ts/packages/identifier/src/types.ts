/**
 * @fileoverview Types and constants for identifier generation.
 * This file defines the types used across the identifier package.
 * It includes types for identifier values, types of identifiers, sequence types,
 * sequence values, and identifier separators.
 */

/**
 * Identifier types
 */
const IdentifierTypes = {
  UUID: 'uuid',
  ULID: 'ulid',
  NANOID: 'nanoid',
  CUID: 'cuid',
  SNOWFLAKE: 'snowflake',
  RANDOM_STRING: 'random_string',
  RANDOM_NUMBER: 'random_number',
  SEQUENTIAL_NUMBER: 'sequential_number',
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

type IdentifierSeparator =
  | '|'
  | ','
  | '-'
  | '_'
  | '.'
  | ' '
  | '~'
  | ''
  | undefined;

interface SequenceGeneratorConfig {
  start: SequenceValue;
  step: number;
}

interface RandomGeneratorConfig {
  min?: number;
  max?: number;
  length?: number;
  prefix?: IdentifierValue;
  suffix?: IdentifierValue;
  prefixSeparator?: IdentifierSeparator;
  suffixSeparator?: IdentifierSeparator;
  // ULID specific
  timestamp?: number;
  // Nanoid specific
  alphabet?: string;
  size?: number;
  // Snowflake specific
  workerId?: number;
  datacenterId?: number;
}

export {
  IdentifierTypes,
  type IdentifierType,
  type IdentifierValue,
  SequenceTypes,
  type SequenceType,
  type SequenceValue,
  type IdentifierSeparator,
  type SequenceGeneratorConfig,
  type RandomGeneratorConfig,
};
