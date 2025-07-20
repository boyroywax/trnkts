import {
    ConfigurationDefinition,
    type ParameterDefinition,
    type Argument
} from '../src/config/index';

describe('ConfigurationDefinition', () => {
    it('should create a configuration definition with empty parameters', () => {
        const config = new ConfigurationDefinition();
        expect(config).toBeInstanceOf(ConfigurationDefinition);
    });

    it('should add parameter definitions', () => {
        const config = new ConfigurationDefinition();
        const paramDef: ParameterDefinition = {
            key: 'testParam',
            type: 'string',
            required: true,
            description: 'Test parameter'
        };
        
        config.addParameter(paramDef);
        expect(config.getParameter('testParam')).toEqual(paramDef);
    });

    it('should validate required parameters', () => {
        const config = new ConfigurationDefinition();
        config.addParameter({
            name: 'required',
            type: 'string',
            required: true
        });

        const args: Argument[] = [];
        expect(() => config.validate(args)).toThrow();
    });

    it('should accept valid arguments', () => {
        const config = new ConfigurationDefinition();
        config.addParameter({
            name: 'optional',
            type: 'string',
            required: false,
            defaultValue: 'default'
        });

        const args: Argument[] = [{ name: 'optional', value: 'test' }];
        expect(() => config.validate(args)).not.toThrow();
    });
});

describe('ParameterDefinition type', () => {
    it('should accept valid parameter definition', () => {
        const param: ParameterDefinition = {
            name: 'test',
            type: 'number',
            required: false,
            description: 'Test number parameter',
            defaultValue: 42
        };
        
        expect(param.name).toBe('test');
        expect(param.type).toBe('number');
        expect(param.required).toBe(false);
        expect(param.defaultValue).toBe(42);
    });
});

describe('Argument type', () => {
    it('should accept valid argument structure', () => {
        const arg: Argument = {
            name: 'testArg',
            value: 'testValue'
        };
        
        expect(arg.name).toBe('testArg');
        expect(arg.value).toBe('testValue');
    });

    it('should accept argument with different value types', () => {
        const stringArg: Argument = { name: 'str', value: 'string' };
        const numberArg: Argument = { name: 'num', value: 123 };
        const boolArg: Argument = { name: 'bool', value: true };
        
        expect(typeof stringArg.value).toBe('string');
        expect(typeof numberArg.value).toBe('number');
        expect(typeof boolArg.value).toBe('boolean');
    });
});
