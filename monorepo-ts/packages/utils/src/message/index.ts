// Export types
export {
  MessageStatuses,
  type ReturnMessage,
  type MessageOptions,
} from './types';

// Export builder class
export { MessageBuilder } from './builder';

// Export factory functions
export {
  createMessage,
  createSuccessMessage,
  createErrorMessage,
  createWarningMessage,
  createInfoMessage,
  createDebugMessage,
  createCriticalMessage,
  createUnknownMessage,
} from './factory';

// Export utilities
export { MessageUtils } from './utils';
