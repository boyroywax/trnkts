import {
  MessageStatuses,
  type ReturnMessage,
  type MessageOptions,
} from './types';
import { MessageBuilder } from './builder';

// Factory function for creating messages
function createMessage<T>(
  status: MessageStatuses,
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return new MessageBuilder(status, {
    body,
    ...options,
  }).build();
}

// Convenience factory functions for each status
function createSuccessMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.SUCCESS, body, options);
}

function createErrorMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.ERROR, body, options);
}

function createWarningMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.WARNING, body, options);
}

function createInfoMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.INFO, body, options);
}

function createDebugMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.DEBUG, body, options);
}

function createCriticalMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.CRITICAL, body, options);
}

function createUnknownMessage<T>(
  body: T,
  options?: Partial<Omit<MessageOptions<T>, 'body'>>
): ReturnMessage<T> {
  return createMessage(MessageStatuses.UNKNOWN, body, options);
}

export {
  createMessage,
  createSuccessMessage,
  createErrorMessage,
  createWarningMessage,
  createInfoMessage,
  createDebugMessage,
  createCriticalMessage,
  createUnknownMessage,
};
