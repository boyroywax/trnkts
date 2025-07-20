interface ParameterDefinition<T = any> {
    key: string;
    type?: keyof T;
    name?: string;
    description?: string;
    required?: boolean;
    default?: T;
    options?: T[];
}

interface Argument<T = any> {
    key: ParameterDefinition<T>['key'];
    value: T;
}

class ConfigurationDefinition<T> {
    private parameters: ParameterDefinition<T>[] = [];

    public addParameter(param: ParameterDefinition<T>): void {
        if (this.hasParameter(param.key)) {
            throw new Error(`Parameter with key "${param.key}" already exists.  Use updateParameter to modify it.`);
        }

        this.parameters.push(param);
    }

    public getParameters(): ParameterDefinition<T>[] {
        return this.parameters;
    }

    public getParameter(key: string): ParameterDefinition<T> | undefined {
        return this.parameters.find(param => param.key === key);
    }

    public hasParameter(key: string): boolean {
        return this.parameters.some(param => param.key === key);
    }

    public updateParameter(key: string, newParam: Partial<ParameterDefinition<T>>): void {
        const index = this.parameters.findIndex(param => param.key === key);
        if (index === -1) {
            throw new Error(`Parameter with key "${key}" does not exist.`);
        }

        this.parameters[index] = { key: key, ...this.parameters[index], ...newParam };
    }
}

export {
    ConfigurationDefinition,
    type ParameterDefinition,
    type Argument
}