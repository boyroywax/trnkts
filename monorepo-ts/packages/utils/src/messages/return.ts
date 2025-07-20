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
}
