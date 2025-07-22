export enum MessageStatuses {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DEBUG = 'debug',
    CRITICAL = 'critical',
    UNKNOWN = 'unknown',
}

export interface ReturnMessage<T = unknown> {
    status: MessageStatuses;
    body: T;
    timestamp: number;
    metadata?: Record<string, unknown>;
    id?: string;
    correlationId?: string;
    source?: string;
    category?: string;
}

export interface MessageOptions<T = unknown> {
    body: T;
    metadata?: Record<string, unknown>;
    id?: string;
    correlationId?: string;
    source?: string;
    category?: string;
    timestamp?: number;
}
