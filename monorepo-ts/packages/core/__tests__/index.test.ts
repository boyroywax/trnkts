import { NAME, VERSION } from '../src/index';

describe('Core Module', () => {
  it('should have a valid name', () => {
    expect(NAME).toBeDefined();
    expect(NAME).toBe('TRNKTS');
  });

  it('should have a valid version', () => {
    expect(VERSION).toBeDefined();
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+$/); // Simple semantic versioning check
  });
});
