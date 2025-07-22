enum MessageStatuses {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DEBUG = 'debug',
    CRITICAL = 'critical',
    UNKNOWN = 'unknown',
}

interface ReturnMessage<T = unknown> {
    status: MessageStatuses;
    body: T;
    timestamp: number;
    metadata?: Record<string, unknown>;
    id?: string;
    correlationId?: string;
    source?: string;
    category?: string;
}

interface MessageOptions<T = unknown> {
    body: T;
    metadata?: Record<string, unknown>;
    id?: string;
    correlationId?: string;
    source?: string;
    category?: string;
    timestamp?: number;
}

export {
    MessageStatuses,
    type ReturnMessage,
    type MessageOptions,
};
