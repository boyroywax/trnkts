import {
    ConfigurationDefinition,
    type ParameterDefinition,
    type Argument,
} from '../src/config/index';

describe('ConfigurationDefinition', () => {
    it('should create a configuration definition with empty parameters', () => {
        const config = new ConfigurationDefinition();
        expect(config).toBeInstanceOf(ConfigurationDefinition);
    });

    it('should add parameter definitions', () => {
        const config = new ConfigurationDefinition<{ testParam: string }>();
        const paramDef: ParameterDefinition<{ testParam: string }> = {
            key: 'testParam',
            type: 'testParam',
            required: true,
            description: 'Test parameter',
        };

        config.addParameter(paramDef);
        expect(config.getParameter('testParam')).toEqual(paramDef);
    });

    it('should check if parameter exists', () => {
        const config = new ConfigurationDefinition();
        config.addParameter({
            key: 'required',
            required: true,
        });

        expect(config.hasParameter('required')).toBe(true);
    });

    it('should accept parameter with default value', () => {
        const config = new ConfigurationDefinition();
        config.addParameter({
            key: 'optional',
            required: false,
            default: 'default',
        });

        const param = config.getParameter('optional');
        expect(param?.default).toBe('default');
    });
});

describe('ParameterDefinition type', () => {
    it('should accept valid parameter definition', () => {
        const param: ParameterDefinition = {
            key: 'test',
            required: false,
            description: 'Test parameter',
            default: 42,
        };

        expect(param.key).toBe('test');
        expect(param.required).toBe(false);
        expect(param.default).toBe(42);
    });
});

describe('Argument type', () => {
    it('should accept valid argument structure', () => {
        const arg: Argument<string> = {
            key: 'testArg',
            value: 'testValue',
        };

        expect(arg.key).toBe('testArg');
        expect(arg.value).toBe('testValue');
    });

    it('should accept argument with different value types', () => {
        const stringArg: Argument<string> = { key: 'str', value: 'string' };
        const numberArg: Argument<number> = { key: 'num', value: 123 };
        const boolArg: Argument<boolean> = { key: 'bool', value: true };

        expect(typeof stringArg.value).toBe('string');
        expect(typeof numberArg.value).toBe('number');
        expect(typeof boolArg.value).toBe('boolean');
    });
});
