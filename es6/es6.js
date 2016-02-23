'use strict';

module.exports = {
  rules: {
    'no-var': 2,
    'prefer-const': 2,
    'prefer-spread': 1,
    'object-shorthand': 1
  },
  env: {
    es6: true
  },
  parserOptions: {
      ecmaVersion: 6
  },
  extends: ['thou-shalt-not']
};
