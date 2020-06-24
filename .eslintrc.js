module.exports = {
  extends: ['plugin:react/recommended', 'airbnb'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 2,
    'react/jsx-filename-extension': 0,
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'operator-linebreak': 0,
    'no-confusing-arrow': 0,
    'function-paren-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'import/no-unresolved': 0,
    'no-throw-literal': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'react/jsx-fragments': 0,
    'react/jsx-wrap-multilines': 0,
  },
};
