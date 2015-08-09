'use strict';

module.exports = {
  rules: {
    'no-var': 0,
    'prefer-const': 0,
    'prefer-spread': 0,
    'object-shorthand': 0
  },
  env: {
    es6: false
  },
  ecmaFeatures: {
    blockBindings: false,
    classes: false,
    arrowFunctions: false,
    defaultParams: false,
    destructuring: false,
    forOf: false,
    objectLiteralComputedProperties: false,
    objectLiteralShorthandMethods: false,
    objectLiteralShorthandProperties: false,
    restParams: false,
    spread: false,
    templateStrings: false,
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
  }
};