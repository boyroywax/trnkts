import {
    MessageStatuses,
    type ReturnMessage,
} from './types';

class MessageUtils {
    // Status checking methods
    public static isSuccess<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.SUCCESS;
    }

    public static isError<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.ERROR;
    }

    public static isWarning<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.WARNING;
    }

    public static isInfo<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.INFO;
    }

    public static isDebug<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.DEBUG;
    }

    public static isCritical<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.CRITICAL;
    }

    public static isUnknown<T>(
        message: ReturnMessage<T>
    ): boolean {
        return message.status === MessageStatuses.UNKNOWN;
    }

    // Filtering methods
    public static filterByStatus<T>(
        messages: ReturnMessage<T>[],
        status: MessageStatuses
    ): ReturnMessage<T>[] {
        return messages.filter(
            message => message.status === status
        );
    }

    public static filterByCategory<T>(
        messages: ReturnMessage<T>[],
        category: string
    ): ReturnMessage<T>[] {
        return messages.filter(
            message => message.category === category
        );
    }

    public static filterBySource<T>(
        messages: ReturnMessage<T>[],
        source: string
    ): ReturnMessage<T>[] {
        return messages.filter(
            message => message.source === source
        );
    }

    public static filterByTimeRange<T>(
        messages: ReturnMessage<T>[],
        startTime: number,
        endTime: number
    ): ReturnMessage<T>[] {
        return messages.filter(
            message =>
                message.timestamp >= startTime &&
                message.timestamp <= endTime
        );
    }

    // Sorting methods
    public static sortByTimestamp<T>(
        messages: ReturnMessage<T>[],
        ascending = true
    ): ReturnMessage<T>[] {
        return [...messages].sort((a, b) => {
            const diff = a.timestamp - b.timestamp;
            return ascending ? diff : -diff;
        });
    }

    public static sortByStatus<T>(
        messages: ReturnMessage<T>[],
        statusOrder: MessageStatuses[] = [
            MessageStatuses.CRITICAL,
            MessageStatuses.ERROR,
            MessageStatuses.WARNING,
            MessageStatuses.INFO,
            MessageStatuses.DEBUG,
            MessageStatuses.SUCCESS,
            MessageStatuses.UNKNOWN,
        ]
    ): ReturnMessage<T>[] {
        return [...messages].sort((a, b) => {
            const aIndex = statusOrder.indexOf(a.status);
            const bIndex = statusOrder.indexOf(b.status);
            return aIndex - bIndex;
        });
    }

    // Formatting methods
    public static formatMessage<T>(
        message: ReturnMessage<T>,
        includeTimestamp = true,
        includeId = false
    ): string {
        let formatted = `[${message.status.toUpperCase()}]`;

        if (includeTimestamp) {
            const date = new Date(
                message.timestamp
            ).toISOString();
            formatted += ` ${date}`;
        }

        if (includeId && message.id) {
            formatted += ` (${message.id})`;
        }

        if (message.source) {
            formatted += ` ${message.source}:`;
        }

        if (message.category) {
            formatted += ` [${message.category}]`;
        }

        // Format the body - use JSON.stringify for objects
        const bodyString =
            typeof message.body === 'object' &&
            message.body !== null
                ? JSON.stringify(message.body)
                : String(message.body);
        formatted += ` ${bodyString}`;

        return formatted;
    }

    public static getStatusSummary<T>(
        messages: ReturnMessage<T>[]
    ): Record<MessageStatuses, number> {
        const summary = Object.values(
            MessageStatuses
        ).reduce(
            (acc, status) => {
                acc[status] = 0;
                return acc;
            },
            {} as Record<MessageStatuses, number>
        );

        messages.forEach(message => {
            summary[message.status]++;
        });

        return summary;
    }

    // Utility methods
    public static hasMetadata<T>(
        message: ReturnMessage<T>,
        key?: string
    ): boolean {
        if (!message.metadata) return false;
        if (key) {
            return key in message.metadata;
        }
        return Object.keys(message.metadata).length > 0;
    }

    public static getMetadata<T>(
        message: ReturnMessage<T>,
        key: string
    ): unknown {
        return message.metadata?.[key];
    }

    public static clone<T>(
        message: ReturnMessage<T>
    ): ReturnMessage<T> {
        const result: ReturnMessage<T> = {
            status: message.status,
            body: message.body,
            timestamp: message.timestamp,
        };

        if (message.metadata !== undefined) {
            result.metadata = { ...message.metadata };
        }
        if (message.id !== undefined) {
            result.id = message.id;
        }
        if (message.correlationId !== undefined) {
            result.correlationId = message.correlationId;
        }
        if (message.source !== undefined) {
            result.source = message.source;
        }
        if (message.category !== undefined) {
            result.category = message.category;
        }

        return result;
    }

    public static merge<T>(
        target: ReturnMessage<T>,
        source: Partial<ReturnMessage<T>>
    ): ReturnMessage<T> {
        const result: ReturnMessage<T> = {
            ...target,
            ...source,
        };

        if (target.metadata || source.metadata) {
            result.metadata = {
                ...target.metadata,
                ...source.metadata,
            };
        }

        return result;
    }
}

export { MessageUtils };
