module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        parser: '@typescript-eslint/parser'
    },
    plugins: ['react', 'i18next', 'react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'i18next/no-literal-string': 'error'
    },
    globals: {
        _IS_DEV_: true
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}
