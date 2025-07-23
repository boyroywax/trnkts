import {
  MessageStatuses,
  ReturnMessage,
  MessageBuilder,
  createSuccessMessage,
  createErrorMessage,
  createWarningMessage,
  createInfoMessage,
  createDebugMessage,
  createCriticalMessage,
  createUnknownMessage,
  MessageUtils,
} from '../src/message';

describe('MessageStatuses', () => {
  it('should have all expected status values', () => {
    expect(MessageStatuses.SUCCESS).toBe('success');
    expect(MessageStatuses.ERROR).toBe('error');
    expect(MessageStatuses.WARNING).toBe('warning');
    expect(MessageStatuses.INFO).toBe('info');
    expect(MessageStatuses.DEBUG).toBe('debug');
    expect(MessageStatuses.CRITICAL).toBe('critical');
    expect(MessageStatuses.UNKNOWN).toBe('unknown');
  });
});

describe('MessageBuilder', () => {
  const testBody = { message: 'test' };
  const testTimestamp = 1640995200000;

  describe('constructor', () => {
    it('creates a message with required fields', () => {
      const builder = new MessageBuilder(MessageStatuses.SUCCESS, {
        body: testBody,
      });

      const message = builder.build();

      expect(message.status).toBe(MessageStatuses.SUCCESS);
      expect(message.body).toEqual(testBody);
      expect(message.timestamp).toBeCloseTo(Date.now(), -3);
    });

    it('creates a message with all optional fields', () => {
      const options = {
        body: testBody,
        metadata: { key: 'value' },
        id: 'test-id',
        correlationId: 'correlation-123',
        source: 'test-source',
        category: 'test-category',
        timestamp: testTimestamp,
      };

      const builder = new MessageBuilder(MessageStatuses.INFO, options);
      const message = builder.build();

      expect(message.status).toBe(MessageStatuses.INFO);
      expect(message.body).toEqual(testBody);
      expect(message.timestamp).toBe(testTimestamp);
      expect(message.metadata).toEqual({
        key: 'value',
      });
      expect(message.id).toBe('test-id');
      expect(message.correlationId).toBe('correlation-123');
      expect(message.source).toBe('test-source');
      expect(message.category).toBe('test-category');
    });
  });

  describe('fluent interface methods', () => {
    let builder: MessageBuilder<{
      message: string;
    }>;

    beforeEach(() => {
      builder = new MessageBuilder(MessageStatuses.SUCCESS, { body: testBody });
    });

    it('sets metadata using setMetadata', () => {
      const message = builder
        .setMetadata('key1', 'value1')
        .setMetadata('key2', 42)
        .build();

      expect(message.metadata).toEqual({
        key1: 'value1',
        key2: 42,
      });
    });

    it('adds metadata using addMetadata', () => {
      const message = builder
        .setMetadata('existing', 'value')
        .addMetadata({
          key1: 'value1',
          key2: 'value2',
        })
        .build();

      expect(message.metadata).toEqual({
        existing: 'value',
        key1: 'value1',
        key2: 'value2',
      });
    });

    it('sets id, correlationId, source, and category', () => {
      const message = builder
        .setId('test-id')
        .setCorrelationId('corr-123')
        .setSource('test-source')
        .setCategory('test-category')
        .build();

      expect(message.id).toBe('test-id');
      expect(message.correlationId).toBe('corr-123');
      expect(message.source).toBe('test-source');
      expect(message.category).toBe('test-category');
    });

    it('supports method chaining', () => {
      const message = builder
        .setId('chained-id')
        .setMetadata('chained', true)
        .setSource('chain-source')
        .build();

      expect(message.id).toBe('chained-id');
      expect(message.metadata).toEqual({
        chained: true,
      });
      expect(message.source).toBe('chain-source');
    });
  });

  describe('static factory methods', () => {
    const options = { body: testBody };

    it('creates success messages', () => {
      const message = MessageBuilder.success(options).build();
      expect(message.status).toBe(MessageStatuses.SUCCESS);
    });

    it('creates error messages', () => {
      const message = MessageBuilder.error(options).build();
      expect(message.status).toBe(MessageStatuses.ERROR);
    });

    it('creates warning messages', () => {
      const message = MessageBuilder.warning(options).build();
      expect(message.status).toBe(MessageStatuses.WARNING);
    });

    it('creates info messages', () => {
      const message = MessageBuilder.info(options).build();
      expect(message.status).toBe(MessageStatuses.INFO);
    });

    it('creates debug messages', () => {
      const message = MessageBuilder.debug(options).build();
      expect(message.status).toBe(MessageStatuses.DEBUG);
    });

    it('creates critical messages', () => {
      const message = MessageBuilder.critical(options).build();
      expect(message.status).toBe(MessageStatuses.CRITICAL);
    });

    it('creates unknown messages', () => {
      const message = MessageBuilder.unknown(options).build();
      expect(message.status).toBe(MessageStatuses.UNKNOWN);
    });
  });
});

describe('createMessage utilities', () => {
  const testBody = 'test message';
  const testOptions = {
    metadata: { source: 'test' },
    id: 'test-id',
  };

  it('creates success message', () => {
    const message = createSuccessMessage(testBody, testOptions);

    expect(message.status).toBe(MessageStatuses.SUCCESS);
    expect(message.body).toBe(testBody);
    expect(message.metadata).toEqual(testOptions.metadata);
    expect(message.id).toBe(testOptions.id);
  });

  it('creates error message', () => {
    const message = createErrorMessage(testBody);

    expect(message.status).toBe(MessageStatuses.ERROR);
    expect(message.body).toBe(testBody);
  });

  it('creates warning message', () => {
    const message = createWarningMessage(testBody);

    expect(message.status).toBe(MessageStatuses.WARNING);
    expect(message.body).toBe(testBody);
  });

  it('creates info message', () => {
    const message = createInfoMessage(testBody);

    expect(message.status).toBe(MessageStatuses.INFO);
    expect(message.body).toBe(testBody);
  });

  it('creates debug message', () => {
    const message = createDebugMessage(testBody);

    expect(message.status).toBe(MessageStatuses.DEBUG);
    expect(message.body).toBe(testBody);
  });

  it('creates critical message', () => {
    const message = createCriticalMessage(testBody);

    expect(message.status).toBe(MessageStatuses.CRITICAL);
    expect(message.body).toBe(testBody);
  });

  it('creates unknown message', () => {
    const message = createUnknownMessage(testBody);

    expect(message.status).toBe(MessageStatuses.UNKNOWN);
    expect(message.body).toBe(testBody);
  });
});

describe('MessageUtils', () => {
  const messages: ReturnMessage[] = [
    createSuccessMessage('Success message', {
      timestamp: 1640995200000,
      metadata: { category: 'test' },
    }),
    createErrorMessage('Error message', {
      timestamp: 1640995300000,
    }),
    createWarningMessage('Warning message', {
      timestamp: 1640995400000,
    }),
    createInfoMessage('Info message', {
      timestamp: 1640995500000,
      metadata: { category: 'info' },
    }),
    createDebugMessage('Debug message', {
      timestamp: 1640995600000,
    }),
    createCriticalMessage('Critical message', {
      timestamp: 1640995700000,
    }),
  ];

  describe('status checking methods', () => {
    it('identifies success messages', () => {
      expect(MessageUtils.isSuccess(messages[0])).toBe(true);
      expect(MessageUtils.isSuccess(messages[1])).toBe(false);
    });

    it('identifies error messages', () => {
      expect(MessageUtils.isError(messages[1])).toBe(true);
      expect(MessageUtils.isError(messages[0])).toBe(false);
    });

    it('identifies warning messages', () => {
      expect(MessageUtils.isWarning(messages[2])).toBe(true);
      expect(MessageUtils.isWarning(messages[0])).toBe(false);
    });

    it('identifies info messages', () => {
      expect(MessageUtils.isInfo(messages[3])).toBe(true);
      expect(MessageUtils.isInfo(messages[0])).toBe(false);
    });

    it('identifies debug messages', () => {
      expect(MessageUtils.isDebug(messages[4])).toBe(true);
      expect(MessageUtils.isDebug(messages[0])).toBe(false);
    });

    it('identifies critical messages', () => {
      expect(MessageUtils.isCritical(messages[5])).toBe(true);
      expect(MessageUtils.isCritical(messages[0])).toBe(false);
    });
  });

  describe('metadata utilities', () => {
    it('checks if message has metadata', () => {
      expect(MessageUtils.hasMetadata(messages[0])).toBe(true);
      expect(MessageUtils.hasMetadata(messages[1])).toBe(false);
    });

    it('checks if message has specific metadata key', () => {
      expect(MessageUtils.hasMetadata(messages[0], 'category')).toBe(true);
      expect(MessageUtils.hasMetadata(messages[0], 'nonexistent')).toBe(false);
    });

    it('gets metadata value', () => {
      expect(MessageUtils.getMetadata(messages[0], 'category')).toBe('test');
      expect(MessageUtils.getMetadata(messages[1], 'category')).toBeUndefined();
    });
  });

  describe('filtering and sorting', () => {
    it('filters messages by status', () => {
      const successMessages = MessageUtils.filterByStatus(
        messages,
        MessageStatuses.SUCCESS
      );

      expect(successMessages).toHaveLength(1);
      expect(successMessages[0].status).toBe(MessageStatuses.SUCCESS);
    });

    it('filters messages by time range', () => {
      const filtered = MessageUtils.filterByTimeRange(
        messages,
        1640995300000,
        1640995500000
      );

      expect(filtered).toHaveLength(3);
      expect(
        filtered.every(
          msg =>
            msg.timestamp >= 1640995300000 && msg.timestamp <= 1640995500000
        )
      ).toBe(true);
    });

    it('sorts messages by timestamp ascending', () => {
      const sorted = MessageUtils.sortByTimestamp(messages, true);

      expect(sorted[0].timestamp).toBe(1640995200000);
      expect(sorted[sorted.length - 1].timestamp).toBe(1640995700000);
    });

    it('sorts messages by timestamp descending', () => {
      const sorted = MessageUtils.sortByTimestamp(messages, false);

      expect(sorted[0].timestamp).toBe(1640995700000);
      expect(sorted[sorted.length - 1].timestamp).toBe(1640995200000);
    });

    it('groups messages by status', () => {
      const grouped = MessageUtils.getStatusSummary(messages);

      expect(grouped[MessageStatuses.SUCCESS]).toBe(1);
      expect(grouped[MessageStatuses.ERROR]).toBe(1);
      expect(grouped[MessageStatuses.WARNING]).toBe(1);
      expect(grouped[MessageStatuses.INFO]).toBe(1);
      expect(grouped[MessageStatuses.DEBUG]).toBe(1);
      expect(grouped[MessageStatuses.CRITICAL]).toBe(1);
      expect(grouped[MessageStatuses.UNKNOWN]).toBe(0);
    });
  });

  describe('utility operations', () => {
    const originalMessage = createSuccessMessage('test', {
      metadata: { key: 'value' },
      id: 'original-id',
    });

    it('clones messages', () => {
      const cloned = MessageUtils.clone(originalMessage);

      expect(cloned).toEqual(originalMessage);
      expect(cloned).not.toBe(originalMessage);
      expect(cloned.metadata).not.toBe(originalMessage.metadata);
    });

    it('merges messages', () => {
      const updates = {
        status: MessageStatuses.WARNING,
        metadata: {
          newKey: 'newValue',
        },
        source: 'merged-source',
      } as Partial<ReturnMessage<string>>;

      const merged = MessageUtils.merge(originalMessage, updates);

      expect(merged.status).toBe(MessageStatuses.WARNING);
      expect(merged.body).toBe('test');
      expect(merged.metadata).toEqual({
        key: 'value',
        newKey: 'newValue',
      });
      expect(merged.source).toBe('merged-source');
      expect(merged.id).toBe('original-id');
    });

    it('formats messages as strings', () => {
      const message = createInfoMessage('Test message', {
        timestamp: 1640995200000,
        source: 'test-app',
      });

      const formatted = MessageUtils.formatMessage(message);

      expect(formatted).toMatch(
        /^\[INFO\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z test-app: Test message$/
      );
    });

    it('formats messages without timestamp', () => {
      const message = createErrorMessage('Error occurred');

      const formatted = MessageUtils.formatMessage(message, false);

      expect(formatted).toBe('[ERROR] Error occurred');
    });

    it('formats messages with object body', () => {
      const message = createDebugMessage({
        error: 'Something went wrong',
        code: 500,
      });

      const formatted = MessageUtils.formatMessage(message, false);

      expect(formatted).toContain('[DEBUG]');
      expect(formatted).toContain('"error"');
      expect(formatted).toContain('"code"');
    });
  });
});
