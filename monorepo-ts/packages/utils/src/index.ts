/**
 * Utility function to delay execution
 * @param ms - milliseconds to delay
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Utility function to format a date string
 * @param date - Date object to format
 * @returns Formatted date string in ISO format
 */
export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0] ?? '';
};

/**
 * Utility function to capitalize the first letter of a string
 * @param str - string to capitalize
 * @returns Capitalized string
 */
export const capitalize = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Utility function to check if a value is defined (not null or undefined)
 * @param value - value to check
 * @returns true if value is defined
 */
export const isDefined = <T>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

/**
 * Utility function to generate a random ID
 * @param length - length of the ID (default: 8)
 * @returns Random alphanumeric string
 */
export const generateId = (length = 8): string => {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
