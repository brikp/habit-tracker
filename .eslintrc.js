module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true, minProperties: 6 }
      }
    ]
  }
};
