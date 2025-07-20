import { Identifier, IdentifierType, IdentifierValue } from "index";

class IdentifierManager {
    private static instance: IdentifierManager;
    private identifiers: Map<IdentifierValue, IdentifierType;
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

    public registerIdentifier(type: string, value: any): void {


        this.identifiers.set(type, value);
    }

    public getIdentifier(type: string): any | undefined {
        return this.identifiers.get(type);
    }

    public hasIdentifier(type: string): boolean {
        return this.identifiers.has(type);
    }

    public clearIdentifiers(): void {
        this.identifiers.clear();
    }
}
