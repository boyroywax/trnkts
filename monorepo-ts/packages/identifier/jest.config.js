export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
    moduleNameMapper: {
        '^@trnkts/(.*)$': '<rootDir>/../$1/src',
    },
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};
