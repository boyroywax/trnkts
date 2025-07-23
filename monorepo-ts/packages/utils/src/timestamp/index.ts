/**
 * Timestamp utilities for generating and converting timestamps
 */

type TimestampFormat = 'unix' | 'iso' | 'milliseconds';

type TimestampValue = string | number;

interface TimestampOptions {
    format?: TimestampFormat;
    timezone?: string;
}

class TimestampGenerator {
    /**
     * Generate current timestamp
     */
    static now(
        options: TimestampOptions = {}
    ): TimestampValue {
        const { format = 'milliseconds' } = options;
        const now = new Date();

        switch (format) {
            case 'unix':
                return Math.floor(now.getTime() / 1000);
            case 'iso':
                return now.toISOString();
            case 'milliseconds':
                return now.getTime();
            default:
                throw new Error(
                    `Unsupported format: ${format}`
                );
        }
    }

    /**
     * Generate timestamp for specific date
     */
    static fromDate(
        date: Date,
        options: TimestampOptions = {}
    ): TimestampValue {
        const { format = 'milliseconds' } = options;

        switch (format) {
            case 'unix':
                return Math.floor(date.getTime() / 1000);
            case 'iso':
                return date.toISOString();
            case 'milliseconds':
                return date.getTime();
            default:
                throw new Error(
                    `Unsupported format: ${format}`
                );
        }
    }
}

class TimestampConverter {
    /**
     * Convert unix timestamp to Date
     */
    static fromUnix(timestamp: number): Date {
        return new Date(timestamp * 1000);
    }

    /**
     * Convert milliseconds timestamp to Date
     */
    static fromMilliseconds(timestamp: number): Date {
        return new Date(timestamp);
    }

    /**
     * Convert ISO string to Date
     */
    static fromISO(isoString: string): Date {
        return new Date(isoString);
    }

    /**
     * Convert between timestamp formats
     */
    static convert(
        timestamp: TimestampValue,
        fromFormat: 'unix' | 'iso' | 'milliseconds',
        toFormat: 'unix' | 'iso' | 'milliseconds'
    ): TimestampValue {
        let date: Date;

        // Convert input to Date
        switch (fromFormat) {
            case 'unix':
                date = TimestampConverter.fromUnix(
                    timestamp as number
                );
                break;
            case 'milliseconds':
                date = TimestampConverter.fromMilliseconds(
                    timestamp as number
                );
                break;
            case 'iso':
                date = TimestampConverter.fromISO(
                    timestamp as string
                );
                break;
            default:
                throw new Error(
                    `Unsupported from format: ${fromFormat}`
                );
        }

        // Convert Date to target format
        return TimestampGenerator.fromDate(date, {
            format: toFormat,
        });
    }
}

// Convenience functions
const generateTimestamp: () => TimestampValue = TimestampGenerator.now;
const convertTimestamp: (
    timestamp: TimestampValue,
    fromFormat: TimestampFormat,
    toFormat: TimestampFormat
) => TimestampValue = TimestampConverter.convert;
const toUnix = (date: Date): number =>
    Math.floor(date.getTime() / 1000);
const toISO = (date: Date): string => date.toISOString();
const toMilliseconds = (date: Date): number =>
    date.getTime();

// Current timestamp in milliseconds
const timestampNow = (): number => TimestampGenerator.now({
    format: 'milliseconds',
}) as number;


export {
    type TimestampOptions,
    TimestampGenerator,
    TimestampConverter,
    generateTimestamp,
    convertTimestamp,
    toUnix,
    toISO,
    toMilliseconds,
    timestampNow,
};
