/**
 * Validator functions for different identifier types
 */

type ValidationResult = {
    isValid: boolean;
    error?: string;
};

/**
 * Validates UUID format (v4)
 */
function validateUUID(value: string): ValidationResult {
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    
    if (!uuidV4Regex.test(value)) {
        return {
            isValid: false,
            error: 'Invalid UUID format. Expected UUID v4 format.'
        };
    }
    
    return { isValid: true };
}

/**
 * Validates ULID format
 */
function validateULID(value: string): ValidationResult {
    const ulidRegex = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
    
    if (value.length !== 26) {
        return {
            isValid: false,
            error: 'Invalid ULID format. Expected 26 characters.'
        };
    }
    
    if (!ulidRegex.test(value)) {
        return {
            isValid: false,
            error: 'Invalid ULID format. Contains invalid characters.'
        };
    }
    
    return { isValid: true };
}

/**
 * Validates Nanoid format
 */
function validateNanoid(value: string, expectedSize: number = 21): ValidationResult {
    const nanoidRegex = /^[A-Za-z0-9_-]+$/;
    
    if (value.length !== expectedSize) {
        return {
            isValid: false,
            error: `Invalid Nanoid format. Expected ${expectedSize} characters, got ${value.length}.`
        };
    }
    
    if (!nanoidRegex.test(value)) {
        return {
            isValid: false,
            error: 'Invalid Nanoid format. Contains invalid characters.'
        };
    }
    
    return { isValid: true };
}

/**
 * Validates CUID format
 */
function validateCuid(value: string): ValidationResult {
    const cuidRegex = /^c[0-9a-z]+$/;
    
    if (!cuidRegex.test(value)) {
        return {
            isValid: false,
            error: 'Invalid CUID format. Must start with "c" followed by alphanumeric characters.'
        };
    }
    
    if (value.length < 10) {
        return {
            isValid: false,
            error: 'Invalid CUID format. Too short.'
        };
    }
    
    return { isValid: true };
}

/**
 * Validates Snowflake ID format
 */
function validateSnowflake(value: string): ValidationResult {
    const snowflakeRegex = /^\d{17,19}$/;
    
    if (!snowflakeRegex.test(value)) {
        return {
            isValid: false,
            error: 'Invalid Snowflake ID format. Expected 17-19 digit number.'
        };
    }
    
    const numValue = BigInt(value);
    const maxSnowflake = BigInt('9223372036854775807'); // 2^63 - 1
    
    if (numValue > maxSnowflake) {
        return {
            isValid: false,
            error: 'Snowflake ID exceeds maximum value.'
        };
    }
    
    return { isValid: true };
}

/**
 * Validates custom string identifier format
 */
function validateCustom(value: string, pattern?: RegExp): ValidationResult {
    if (!pattern) {
        // Default validation: non-empty string, no whitespace
        if (!value || value.trim() !== value || value.length === 0) {
            return {
                isValid: false,
                error: 'Invalid custom identifier. Must be non-empty with no leading/trailing whitespace.'
            };
        }
        return { isValid: true };
    }
    
    if (!pattern.test(value)) {
        return {
            isValid: false,
            error: 'Custom identifier does not match required pattern.'
        };
    }
    
    return { isValid: true };
}

export {
    type ValidationResult,
    validateUUID,
    validateULID,
    validateNanoid,
    validateCuid,
    validateSnowflake,
    validateCustom
};