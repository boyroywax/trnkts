enum MessageStatuses {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DEBUG = 'debug',
    CRITICAL = 'critical',
    UNKNOWN = 'unknown'
}


interface ReturnMessage<T = any> {
    status: MessageStatuses;
    body: T;
    timestamp: number;
    metadata