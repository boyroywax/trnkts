import type { IdentifierType, IdentifierValue } from 'index';
import { createSequentialNumber } from './generators';

class IdentifierManager {
  private static instance: IdentifierManager;
  private identifiers: Map<IdentifierValue, IdentifierType>;
  private sequentialNumberGenerator: () => number;

  private constructor() {
    this.identifiers = new Map();
    this.sequentialNumberGenerator = createSequentialNumber();
  }

  public static getInstance(): IdentifierManager {
    if (!IdentifierManager.instance) {
      IdentifierManager.instance = new IdentifierManager();
    }
    return IdentifierManager.instance;
  }

  public registerIdentifier(
    type: IdentifierValue,
    value: IdentifierType
  ): void {
    this.identifiers.set(type, value);
  }

  public getIdentifier(type: IdentifierValue): IdentifierType | undefined {
    return this.identifiers.get(type);
  }

  public hasIdentifier(type: IdentifierValue): boolean {
    return this.identifiers.has(type);
  }

  public clearIdentifiers(): void {
    this.identifiers.clear();
  }

  public generateSequentialNumber(): number {
    return this.sequentialNumberGenerator();
  }
}

export { IdentifierManager };
