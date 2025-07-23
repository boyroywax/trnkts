/** @type {import('jest').Config} */
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/packages'],
    projects: [
        '<rootDir>/packages/components',
        '<rootDir>/packages/core',
        '<rootDir>/packages/utils',
        '<rootDir>/packages/identifier',
        '<rootDir>/packages/dashboard',
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/*.(test|spec).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    collectCoverageFrom: [
        'packages/*/src/**/*.{ts,tsx}',
        '!packages/*/src/**/*.d.ts',
        '!packages/*/src/**/*.test.{ts,tsx}',
        '!packages/*/src/**/*.spec.{ts,tsx}',
    ],
    coverageDirectory: 'docs/coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    setupFilesAfterEnv: [],
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    verbose: true,
    // Suppress Node.js deprecation warnings during tests
    silent: false,
    moduleNameMapper: {
        '^@trnkts/(.*)$': '<rootDir>/packages/$1/src',
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
            },
        },
    },
};

export default config;
