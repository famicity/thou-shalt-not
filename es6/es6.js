'use strict';

module.exports = {
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'prefer-spread': 1,
    'object-shorthand': 1
  },
  env: {
    es6: true
  },
  ecmaFeatures: {
    blockBindings: true,
    classes: true,
    arrowFunctions: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    restParams: true,
    spread: true,
    templateStrings: true,
    binaryLiterals: false,
    generators: false,
    modules: false,
    objectLiteralDuplicateProperties: false,
    octalLiterals: false,
    regexUFlag: false,
    regexYFlag: false,
    superInFunctions: false,
    unicodeCodePointEscapes: false,
    globalReturn: false,
    jsx: false,
    experimentalObjectRestSpread: false
  },
  extends: ['thou-shalt-not']
};