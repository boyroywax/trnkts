import {
  TimestampGenerator,
  TimestampConverter,
  generateTimestamp,
  convertTimestamp,
  toUnix,
  toISO,
  toMilliseconds,
  type TimestampOptions,
} from '../src/timestamp/index';

describe('TimestampGenerator', () => {
  describe('now', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should generate current timestamp in milliseconds by default', () => {
      const result = TimestampGenerator.now();
      expect(result).toBe(1672531200000);
      expect(typeof result).toBe('number');
    });

    it('should generate current timestamp in milliseconds format', () => {
      const result = TimestampGenerator.now({
        format: 'milliseconds',
      });
      expect(result).toBe(1672531200000);
      expect(typeof result).toBe('number');
    });

    it('should generate current timestamp in unix format', () => {
      const result = TimestampGenerator.now({
        format: 'unix',
      });
      expect(result).toBe(1672531200);
      expect(typeof result).toBe('number');
    });

    it('should generate current timestamp in ISO format', () => {
      const result = TimestampGenerator.now({
        format: 'iso',
      });
      expect(result).toBe('2023-01-01T00:00:00.000Z');
      expect(typeof result).toBe('string');
    });

    it('should throw error for unsupported format', () => {
      expect(() => {
        TimestampGenerator.now({
          format: 'invalid' as any,
        });
      }).toThrow('Unsupported format: invalid');
    });

    it('should handle timezone option (ignored in current implementation)', () => {
      const result = TimestampGenerator.now({
        format: 'iso',
        timezone: 'America/New_York',
      });
      expect(result).toBe('2023-01-01T00:00:00.000Z');
    });
  });

  describe('fromDate', () => {
    const testDate = new Date('2023-06-15T12:30:45.123Z');

    it('should generate timestamp from date in milliseconds by default', () => {
      const result = TimestampGenerator.fromDate(testDate);
      expect(result).toBe(1686832245123);
      expect(typeof result).toBe('number');
    });

    it('should generate timestamp from date in milliseconds format', () => {
      const result = TimestampGenerator.fromDate(testDate, {
        format: 'milliseconds',
      });
      expect(result).toBe(1686832245123);
      expect(typeof result).toBe('number');
    });

    it('should generate timestamp from date in unix format', () => {
      const result = TimestampGenerator.fromDate(testDate, {
        format: 'unix',
      });
      expect(result).toBe(1686832245);
      expect(typeof result).toBe('number');
    });

    it('should generate timestamp from date in ISO format', () => {
      const result = TimestampGenerator.fromDate(testDate, {
        format: 'iso',
      });
      expect(result).toBe('2023-06-15T12:30:45.123Z');
      expect(typeof result).toBe('string');
    });

    it('should throw error for unsupported format', () => {
      expect(() => {
        TimestampGenerator.fromDate(testDate, {
          format: 'invalid' as any,
        });
      }).toThrow('Unsupported format: invalid');
    });

    it('should handle timezone option (ignored in current implementation)', () => {
      const result = TimestampGenerator.fromDate(testDate, {
        format: 'iso',
        timezone: 'Europe/London',
      });
      expect(result).toBe('2023-06-15T12:30:45.123Z');
    });
  });
});

describe('TimestampConverter', () => {
  describe('fromUnix', () => {
    it('should convert unix timestamp to Date', () => {
      const unixTimestamp = 1686832245;
      const result = TimestampConverter.fromUnix(unixTimestamp);
      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(1686832245000);
      expect(result.toISOString()).toBe('2023-06-15T12:30:45.000Z');
    });

    it('should handle zero timestamp', () => {
      const result = TimestampConverter.fromUnix(0);
      expect(result.toISOString()).toBe('1970-01-01T00:00:00.000Z');
    });

    it('should handle negative timestamp', () => {
      const result = TimestampConverter.fromUnix(-86400);
      expect(result.toISOString()).toBe('1969-12-31T00:00:00.000Z');
    });
  });

  describe('fromMilliseconds', () => {
    it('should convert milliseconds timestamp to Date', () => {
      const millisTimestamp = 1686832245123;
      const result = TimestampConverter.fromMilliseconds(millisTimestamp);
      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(1686832245123);
      expect(result.toISOString()).toBe('2023-06-15T12:30:45.123Z');
    });

    it('should handle zero timestamp', () => {
      const result = TimestampConverter.fromMilliseconds(0);
      expect(result.toISOString()).toBe('1970-01-01T00:00:00.000Z');
    });

    it('should handle negative timestamp', () => {
      const result = TimestampConverter.fromMilliseconds(-86400000);
      expect(result.toISOString()).toBe('1969-12-31T00:00:00.000Z');
    });
  });

  describe('fromISO', () => {
    it('should convert ISO string to Date', () => {
      const isoString = '2023-06-15T12:30:45.123Z';
      const result = TimestampConverter.fromISO(isoString);
      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(1686832245123);
      expect(result.toISOString()).toBe(isoString);
    });

    it('should handle ISO string without milliseconds', () => {
      const isoString = '2023-06-15T12:30:45Z';
      const result = TimestampConverter.fromISO(isoString);
      expect(result.toISOString()).toBe('2023-06-15T12:30:45.000Z');
    });

    it('should handle invalid ISO string', () => {
      const result = TimestampConverter.fromISO('invalid-date');
      expect(result.getTime()).toBeNaN();
    });
  });

  describe('convert', () => {
    const testTimestamp = {
      unix: 1686832245,
      milliseconds: 1686832245123,
      iso: '2023-06-15T12:30:45.123Z',
    };

    describe('from unix', () => {
      it('should convert unix to unix (identity)', () => {
        const result = TimestampConverter.convert(
          testTimestamp.unix,
          'unix',
          'unix'
        );
        expect(result).toBe(testTimestamp.unix);
      });

      it('should convert unix to milliseconds', () => {
        const result = TimestampConverter.convert(
          testTimestamp.unix,
          'unix',
          'milliseconds'
        );
        expect(result).toBe(1686832245000);
      });

      it('should convert unix to ISO', () => {
        const result = TimestampConverter.convert(
          testTimestamp.unix,
          'unix',
          'iso'
        );
        expect(result).toBe('2023-06-15T12:30:45.000Z');
      });
    });

    describe('from milliseconds', () => {
      it('should convert milliseconds to unix', () => {
        const result = TimestampConverter.convert(
          testTimestamp.milliseconds,
          'milliseconds',
          'unix'
        );
        expect(result).toBe(1686832245);
      });

      it('should convert milliseconds to milliseconds (identity)', () => {
        const result = TimestampConverter.convert(
          testTimestamp.milliseconds,
          'milliseconds',
          'milliseconds'
        );
        expect(result).toBe(testTimestamp.milliseconds);
      });

      it('should convert milliseconds to ISO', () => {
        const result = TimestampConverter.convert(
          testTimestamp.milliseconds,
          'milliseconds',
          'iso'
        );
        expect(result).toBe(testTimestamp.iso);
      });
    });

    describe('from ISO', () => {
      it('should convert ISO to unix', () => {
        const result = TimestampConverter.convert(
          testTimestamp.iso,
          'iso',
          'unix'
        );
        expect(result).toBe(1686832245);
      });

      it('should convert ISO to milliseconds', () => {
        const result = TimestampConverter.convert(
          testTimestamp.iso,
          'iso',
          'milliseconds'
        );
        expect(result).toBe(testTimestamp.milliseconds);
      });

      it('should convert ISO to ISO (identity)', () => {
        const result = TimestampConverter.convert(
          testTimestamp.iso,
          'iso',
          'iso'
        );
        expect(result).toBe(testTimestamp.iso);
      });
    });

    it('should throw error for unsupported from format', () => {
      expect(() => {
        TimestampConverter.convert(123456789, 'invalid' as any, 'unix');
      }).toThrow('Unsupported from format: invalid');
    });

    it('should throw error for unsupported to format via TimestampGenerator', () => {
      expect(() => {
        TimestampConverter.convert(1686834645, 'unix', 'invalid' as any);
      }).toThrow('Unsupported format: invalid');
    });
  });
});

describe('Convenience functions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('generateTimestamp', () => {
    it('should be an alias for TimestampGenerator.now', () => {
      const result = generateTimestamp();
      expect(result).toBe(1672531200000);
    });

    it('should accept options', () => {
      const result = generateTimestamp({
        format: 'unix',
      });
      expect(result).toBe(1672531200);
    });
  });

  describe('convertTimestamp', () => {
    it('should be an alias for TimestampConverter.convert', () => {
      const result = convertTimestamp(1686832245, 'unix', 'milliseconds');
      expect(result).toBe(1686832245000);
    });
  });

  describe('toUnix', () => {
    it('should convert Date to unix timestamp', () => {
      const date = new Date('2023-06-15T12:30:45.123Z');
      const result = toUnix(date);
      expect(result).toBe(1686832245);
    });

    it('should handle Date with milliseconds (floor)', () => {
      const date = new Date('2023-06-15T12:30:45.999Z');
      const result = toUnix(date);
      expect(result).toBe(1686832245);
    });
  });

  describe('toISO', () => {
    it('should convert Date to ISO string', () => {
      const date = new Date('2023-06-15T12:30:45.123Z');
      const result = toISO(date);
      expect(result).toBe('2023-06-15T12:30:45.123Z');
    });

    it('should handle Date without milliseconds', () => {
      const date = new Date('2023-06-15T12:30:45.000Z');
      const result = toISO(date);
      expect(result).toBe('2023-06-15T12:30:45.000Z');
    });
  });

  describe('toMilliseconds', () => {
    it('should convert Date to milliseconds timestamp', () => {
      const date = new Date('2023-06-15T12:30:45.123Z');
      const result = toMilliseconds(date);
      expect(result).toBe(1686832245123);
    });

    it('should handle Date without milliseconds', () => {
      const date = new Date('2023-06-15T12:30:45.000Z');
      const result = toMilliseconds(date);
      expect(result).toBe(1686832245000);
    });
  });
});

describe('TimestampOptions interface', () => {
  it('should accept all valid format options', () => {
    const options1: TimestampOptions = {
      format: 'unix',
    };
    const options2: TimestampOptions = {
      format: 'iso',
    };
    const options3: TimestampOptions = {
      format: 'milliseconds',
    };
    const options4: TimestampOptions = {
      timezone: 'UTC',
    };
    const options5: TimestampOptions = {
      format: 'unix',
      timezone: 'America/New_York',
    };
    const options6: TimestampOptions = {};

    expect(options1.format).toBe('unix');
    expect(options2.format).toBe('iso');
    expect(options3.format).toBe('milliseconds');
    expect(options4.timezone).toBe('UTC');
    expect(options5.format).toBe('unix');
    expect(options5.timezone).toBe('America/New_York');
    expect(options6.format).toBeUndefined();
    expect(options6.timezone).toBeUndefined();
  });
});

describe('Edge cases and error handling', () => {
  it('should handle very large timestamps', () => {
    const largeTimestamp = 9999999999999;
    const date = TimestampConverter.fromMilliseconds(largeTimestamp);
    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).toBe(largeTimestamp);
  });

  it('should handle very small timestamps', () => {
    const smallTimestamp = -9999999999999;
    const date = TimestampConverter.fromMilliseconds(smallTimestamp);
    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).toBe(smallTimestamp);
  });

  it('should handle fractional unix timestamps', () => {
    const fractionalUnix = 1686834645.5;
    const date = TimestampConverter.fromUnix(fractionalUnix);
    expect(date.getTime()).toBe(1686834645500);
  });

  it('should preserve millisecond precision in conversions', () => {
    const originalMs = 1686832245123;
    const converted = TimestampConverter.convert(
      TimestampConverter.convert(originalMs, 'milliseconds', 'iso'),
      'iso',
      'milliseconds'
    );
    expect(converted).toBe(originalMs);
  });
});
