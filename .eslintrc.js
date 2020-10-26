module.exports = {
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:import-order/recommended',
    ],
    plugins: [
        'import-order'
    ],
    env: {
      es6: true,
      node: true,
      browser: true,
    },
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    ignorePatterns: ['/node_modules/**', '/build/**', '/src/reportWebVitals.js'],
    rules: {
      'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
      'prettier/prettier': ['error'],
      'import-order/import-order': [ 2, {
          'newlines-between': 'always', 
          alphabetize: {
            order: 'asc',
            caseInsensitive: true 
      }
      }]
    },  settings: {
      react: {
        version: 'detect',
      },
    },
  };