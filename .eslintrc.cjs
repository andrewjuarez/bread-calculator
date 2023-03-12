module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/triple-slash-reference': ['off'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never'
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/strict-boolean-expressions': 'warn'
  },
  settings: {
    'import/resolver': {
      'typescript': {}
    },
    react: {
      version: 'detect'
    }
  }
}
