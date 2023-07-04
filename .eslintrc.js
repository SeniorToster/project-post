module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        parser: '@typescript-eslint/parser'
    },
    plugins: ['react', 'i18next'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'i18next/no-literal-string': 'error'
    },
    globals: {
        _IS_DEV_: true
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}
