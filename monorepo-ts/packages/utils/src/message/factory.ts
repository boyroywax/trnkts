import {
    MessageStatuses,
    type ReturnMessage,
    type MessageOptions,
} from './types';
import { MessageBuilder } from './builder';

// Factory function for creating messages
export function createMessage<T>(
    status: MessageStatuses,
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return new MessageBuilder(status, {
        body,
        ...options,
    }).build();
}

// Convenience factory functions for each status
export function createSuccessMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.SUCCESS,
        body,
        options
    );
}

export function createErrorMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.ERROR,
        body,
        options
    );
}

export function createWarningMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.WARNING,
        body,
        options
    );
}

export function createInfoMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.INFO,
        body,
        options
    );
}

export function createDebugMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.DEBUG,
        body,
        options
    );
}

export function createCriticalMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.CRITICAL,
        body,
        options
    );
}

export function createUnknownMessage<T>(
    body: T,
    options?: Partial<
        Omit<MessageOptions<T>, 'body'>
    >
): ReturnMessage<T> {
    return createMessage(
        MessageStatuses.UNKNOWN,
        body,
        options
    );
}
