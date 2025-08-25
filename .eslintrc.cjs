module.exports = {
  root: true, // Ensures ESLint stops looking for configs in parent folders
  env: {
    browser: true, // Enables browser globals like window and document
    es2021: true,  // Enables modern ECMAScript globals
    node: true     // Enables Node.js globals
  },
  parser: '@typescript-eslint/parser', // Parses TypeScript code for ESLint
  parserOptions: {
    ecmaVersion: 'latest', // Allows modern JS syntax
    sourceType: 'module',  // Allows use of import/export
    ecmaFeatures: {
      jsx: true // Enables JSX parsing
    }
  },
  extends: [
    'airbnb',                // Airbnb's base + React rules
    'airbnb/hooks',          // Airbnb's React Hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:prettier/recommended' // Integrates Prettier with ESLint
  ],
  plugins: [
    '@typescript-eslint', // Adds TypeScript-specific linting rules
    'prettier'            // Runs Prettier as an ESLint rule
  ],
  rules: {
    'prettier/prettier': 'error', // Marks Prettier formatting issues as errors
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
